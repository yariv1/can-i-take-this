/*
 Plants & seeds expansion helper (session 35). Adds ONE country's rule, read in full from an official page, to plants_extra.json and sets the official source link
 (CUSTOMS_CAT[country].plants in canitakethis.html) so the page state follows the link (OFFICIAL SOURCE).
 usage: node plants_add_country.js spec.json
 spec = {"country":"Chile","src":[["https://...","Label"]],"date":"SAG page read 18 October 2026","lead":"...","rows":[["Item","Rule"],...],"notes":["<strong>x:</strong> ..."],"faq":[["Q","A"],...],
         "card":{"status":"warn|stop|go","head":"...","lines":["..."]}}
 Rules: only facts stated on the page, own words, no invented numbers/URLs. Title, meta description, H1 and schema of the page stay as they are now (SEO change guard):
 the helper stores the CURRENT built title/description once (ttl/desc) and the page keeps the single schema FAQ.
 After adding: node build.js, audit_source_state.js, audit_country_cat_sources.js, audit_duplicates.js, update PLANTS_COUNTRIES.md.
*/
const fs = require('fs'), path = require('path');
const FILE = path.join(__dirname, 'canitakethis.html');
const EXTRA = path.join(__dirname, 'plants_extra.json');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
if (!spec.country || !Array.isArray(spec.src) || !spec.src.length || !spec.lead || !Array.isArray(spec.rows) || spec.rows.length < 2 || !Array.isArray(spec.faq) || spec.faq.length < 2) { console.log('bad spec'); process.exit(1); }
const slug = s => s.toLowerCase().replace(/ /g, '-');
const un = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const extra = fs.existsSync(EXTRA) ? JSON.parse(fs.readFileSync(EXTRA, 'utf8')) : {};
let ttl, desc;
if (extra[spec.country] && extra[spec.country].ttl) { ttl = extra[spec.country].ttl; desc = extra[spec.country].desc; }
else {
  const built = fs.readFileSync(path.join(__dirname, 'country', slug(spec.country), 'plants-seeds', 'index.html'), 'utf8');
  ttl = un(/<title>([\s\S]*?)<\/title>/.exec(built)[1]).replace(/ \| canitakethis\.co$/, '');
  desc = un(/<meta name="description" content="([^"]*)"/.exec(built)[1]);
}
const e = { date: spec.date, ttl, desc, lead: spec.lead, rows: spec.rows, notes: spec.notes || [], faq: spec.faq, src: spec.src.map(x => [x[0], x[1]]), keepSchema: true };
if (spec.unofficial) e.unofficial = true;   // ladder step 2: a reliable named third party (UNOFFICIAL footer + amber heading)
if (spec.card) e.card = spec.card;
extra[spec.country] = e;
fs.writeFileSync(EXTRA, JSON.stringify(extra, null, 1));
// official link
let h = fs.readFileSync(FILE, 'utf8');
const start = h.indexOf('var CUSTOMS_CAT=');
if (start < 0) throw new Error('CUSTOMS_CAT not found');
const objStart = h.indexOf('{', start);
let depth = 0, i = objStart;
for (; i < h.length; i++) { const c = h[i]; if (c === '{') depth++; else if (c === '}') { depth--; if (depth === 0) break; } else if (c === '"') { i++; while (h[i] !== '"') { if (h[i] === '\\') i++; i++; } } }
const obj = JSON.parse(h.slice(objStart, i + 1));
obj[spec.country] = obj[spec.country] || {};
obj[spec.country].plants = spec.src.map(x => Object.assign({ label: (spec.srcPlain && spec.srcPlain[x[0]]) || un(x[1]).replace(/&mdash;/g, '—'), url: x[0] }, spec.unofficial ? { unofficial: true } : {}));
h = h.slice(0, objStart) + JSON.stringify(obj) + h.slice(i + 1);
fs.writeFileSync(FILE, h);
console.log('plants_extra now has ' + Object.keys(extra).length + ' entries (added/updated ' + spec.country + ')');
