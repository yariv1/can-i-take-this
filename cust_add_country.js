/*
 Customs category helper (session 35): adds ONE country's duty-free alcohol / tobacco / cash rule, read in full from an official customs page,
 to CUST_PATCH (the card text) and CUSTOMS_CAT (the official source link) in canitakethis.html. The page state follows the link (OFFICIAL SOURCE).
 usage: node cust_add_country.js spec.json
 spec = {"country":"Cuba","src":[{"label":"Aduana de Cuba — ...","url":"https://..."}],
         "cats":{"tobacco":["head sentence",["line 1","line 2"],"warn|stop|go (optional)"],"alcohol":[...],"cash":[...]}}
 Optional per-category source override: "srcByCat":{"cash":[{"label":..,"url":..}]}.
 Rules: only facts stated on the page, own words, no invented numbers or URLs; title/description/H1/schema of the page stay unchanged.
 After adding: node build.js, audit_source_state.js, audit_country_cat_sources.js (a cat page must not cite a link that plants/vaping also cite), audit_seo_change_scope.js.
*/
const fs = require('fs'), path = require('path');
const FILE = path.join(__dirname, 'canitakethis.html');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
if (!spec.country || !Array.isArray(spec.src) || !spec.src.length || !spec.cats || !Object.keys(spec.cats).length) { console.log('bad spec'); process.exit(1); }
for (const k of Object.keys(spec.cats)) {
  const v = spec.cats[k];
  if (!['alcohol', 'tobacco', 'cash'].includes(k) || !Array.isArray(v) || typeof v[0] !== 'string' || !Array.isArray(v[1]) || !v[1].length) { console.log('bad cat ' + k); process.exit(1); }
}
let h = fs.readFileSync(FILE, 'utf8');
function patchObj(name) {
  const start = h.indexOf('var ' + name + '=');
  if (start < 0) throw new Error(name + ' not found');
  const objStart = h.indexOf('{', start);
  let depth = 0, i = objStart;
  for (; i < h.length; i++) { const c = h[i]; if (c === '{') depth++; else if (c === '}') { depth--; if (depth === 0) break; } else if (c === '"') { i++; while (h[i] !== '"') { if (h[i] === '\\') i++; i++; } } }
  const obj = JSON.parse(h.slice(objStart, i + 1));
  return { obj, objStart, end: i + 1 };
}
function put(name, mut) {
  const p = patchObj(name); mut(p.obj);
  h = h.slice(0, p.objStart) + JSON.stringify(p.obj) + h.slice(p.end);
}
put('CUST_PATCH', o => { o[spec.country] = o[spec.country] || {}; for (const k of Object.keys(spec.cats)) o[spec.country][k] = spec.cats[k]; });
put('CUSTOMS_CAT', o => { o[spec.country] = o[spec.country] || {}; for (const k of Object.keys(spec.cats)) o[spec.country][k] = (spec.srcByCat && spec.srcByCat[k]) || spec.src; });
fs.writeFileSync(FILE, h);
console.log('added ' + spec.country + ': ' + Object.keys(spec.cats).join(', '));
