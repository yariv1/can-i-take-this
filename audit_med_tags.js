// Guard (user order 2026-10-20): every medicine/food answer's tags and wording must match its verdict, on EVERY country x medicine/food combination.
// Runs the real answer code (TA_LIB in build.js, data in canitakethis.html) for all combinations and checks:
//  - a tag starting "Allowed" only on a green (go) card; a green tag only on a go card; a red (stop) tag only on a stop card
//  - no answer for one medicine names another ("CBD oil contains ..." on the gummies entry)
//  - no answer tells the traveller to carry a prescription unconditionally for a medicine whose rule is "no prescription needed"
//  - the country-page typeahead gives EXACTLY the app's answer (status, tags, headline, lines)
//  - the item-page lead says "if it is prescribed to you", never an unconditional prescription
const fs = require('fs'), path = require('path');
const { JSDOM } = require('jsdom');
const html = fs.readFileSync(path.join(__dirname, 'canitakethis.html'), 'utf8');
const w = new JSDOM(html, { runScripts: 'dangerously', url: 'http://localhost/' }).window;
const b = fs.readFileSync(path.join(__dirname, 'build.js'), 'utf8');
const m = b.match(/const TA_LIB=\/\*v(\d+)\*\/Buffer\.from\('([^']+)'/);
const lib = Buffer.from(m[2], 'base64').toString();
const f = new Function('D', 'document', 'window', lib + ';return {medV:medV,foodV:foodV};');
const stub = { getElementById: () => null, querySelectorAll: () => [] };
const bad = []; let n = 0;
// tags must say something about the medicine: no instruction-style or empty tags
const EMPTY_TAGS = /^(See |Check |Read |Official rule$)/i;
const text = v => [v.head].concat(v.lines || []).join(' ');
for (const cn of Object.keys(w.MED_AUTH || {})) {
  const D = { cn, isMed: true, db: w.MED_DB, auth: w.MED_AUTH[cn] || { label: cn, url: null }, medRules: w.MED_RULES, medVer: (w.MED_VER && w.MED_VER[cn]) || null, medNote: (w.MED_NOTE && w.MED_NOTE[cn]) || null, medNoteTag: (w.MED_NOTE_TAG && w.MED_NOTE_TAG[cn]) || null, catname: w.CATNAME, tagReg: { type: w.TAG_TYPE, status: w.TAG_STATUS } };
  const api = f(D, stub, { innerHeight: 800 });
  for (const e of w.MED_DB) {
    const v = api.medV(e); n++;
    const tags = v.tags || [];
    tags.forEach(t => {
      if (EMPTY_TAGS.test(t.t)) bad.push(cn + '/' + e.n + ': tag "' + t.t + '" is an instruction, not information');
      if (/^Allowed/.test(t.t) && v.status !== 'go') bad.push(cn + '/' + e.n + ': tag "' + t.t + '" on a ' + v.status + ' card');
      if (t.k === 'green' && v.status !== 'go') bad.push(cn + '/' + e.n + ': green tag "' + t.t + '" on a ' + v.status + ' card');
      if (t.k === 'stop' && v.status !== 'stop') bad.push(cn + '/' + e.n + ': red tag on a ' + v.status + ' card');
    });
    // parity: the typeahead on the country pages must give exactly the answer the app gives for the same medicine and country
    try { w.S.country = cn; w.S.mode = 'country'; w.S.cat = 'med'; const a = w.medCountryVerdict(e); const sa = a.status + '|' + (a.tags || []).map(x => x.t).join('+') + '|' + a.head + '|' + JSON.stringify(a.lines), st = v.status + '|' + (v.tags || []).map(x => x.t).join('+') + '|' + v.head + '|' + JSON.stringify(v.lines); if (sa !== st) bad.push(cn + '/' + e.n + ': app and country-page typeahead disagree (' + a.status + ' vs ' + v.status + ')'); } catch (err) { bad.push(cn + '/' + e.n + ': app answer threw ' + err.message); }
    const tx = text(v);
    if (/\bCBD oil\b/.test(tx) && !/^CBD oil$/i.test(e.n)) bad.push(cn + '/' + e.n + ': answer names "CBD oil" for another medicine');
    if (tags.some(t => t.t === 'Allowed') && /with your prescription|carry your prescription\b(?! if)/i.test(tx)) bad.push(cn + '/' + e.n + ': ""Allowed" card tells the traveller to carry a prescription');
  }
}
for (const cn of Object.keys(w.FOOD_AUTH || {})) {
  const D = { cn, isMed: false, db: w.FOOD_DB, auth: w.FOOD_AUTH[cn] || { label: cn, url: null }, foodRules: w.FOOD_RULES[cn] || w.FOOD_RULES.def, catname: w.CATNAME, tagReg: { type: w.TAG_TYPE, status: w.TAG_STATUS } };
  let api; try { api = f(D, stub, { innerHeight: 800 }); } catch (e) { bad.push('food lib ' + cn + ' ' + e.message); break; }
  for (const e of w.FOOD_DB) {
    const v = api.foodV(e); n++;
    (v.tags || []).forEach(t => {
      if (t.k === 'green' && v.status !== 'go') bad.push(cn + '/' + e.n + ': green tag "' + t.t + '" on a ' + v.status + ' card');
      if (t.k === 'stop' && v.status !== 'stop') bad.push(cn + '/' + e.n + ': red tag on a ' + v.status + ' card');
    });
  }
}
// item pages: lead sentence must be conditional
let leads = 0;
const root = path.join(__dirname, 'medication');
for (const med of fs.readdirSync(root)) {
  const dir = path.join(root, med);
  if (!fs.statSync(dir).isDirectory() || med === 'into') continue;
  for (const c of fs.readdirSync(dir)) {
    const fp = path.join(dir, c, 'index.html');
    if (!fs.existsSync(fp)) continue;
    const h = fs.readFileSync(fp, 'utf8'); leads++;
    if (/original packaging with your prescription or a doctor/.test(h)) { bad.push('medication/' + med + '/' + c + ': unconditional prescription in the lead'); break; }
  }
}
if (bad.length) { console.log('FAIL medicine/food tags:\n' + bad.slice(0, 40).join('\n') + (bad.length > 40 ? '\n... ' + bad.length + ' total' : '')); process.exit(1); }
console.log('OK medicine/food tags (' + n + ' answers checked, ' + leads + ' item pages)');

// static pages: no instruction-style tag anywhere on a built page
(function () {
  const bad2 = []; let pages = 0;
  const EMPTY = /^(See |Check |Read |Official rule$)/i;
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.name === '.claude' || e.name === 'node_modules' || e.name.startsWith('.git')) continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'index.html') {
        pages++;
        const h = fs.readFileSync(p, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '');
        for (const m of h.matchAll(/<span class="tag tag-[a-z]+">([^<]*)<\/span>/g)) if (EMPTY.test(m[1].trim())) bad2.push(path.relative(__dirname, p) + ': "' + m[1] + '"');
      }
    }
  })(__dirname);
  if (bad2.length) { console.log('FAIL instruction-style tags on built pages:\n' + bad2.slice(0, 15).join('\n') + '\n(' + bad2.length + ' total)'); process.exit(1); }
  console.log('OK no instruction-style tags on ' + pages + ' built pages');
})();
