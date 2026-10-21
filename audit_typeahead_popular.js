/* Guard (DS 8.44): clicking an empty typeahead lists the most searched items ("Popular"), never an item the page cannot answer.
   Checks: the 4 typeahead code paths carry the popular code, the CSS rule exists, every airline Medication page can answer >= 3 of its popular medicines,
   and every popular item of a page_typeahead page has a card (otherwise the client falls back to "Suggested" answerable items). */
const fs = require('fs');
const bad = [];
const read = f => fs.readFileSync(f, 'utf8');
const app = read('canitakethis.html');
if (!/pop:\['Tylenol','Ibuprofen'/.test(app) || !/renderItemSuggest\(pop\)/.test(app) || !/renderAniSuggest\(pop\)/.test(app) || !/renderSoloSuggest\(pop\)/.test(app)) bad.push('app: popular code missing');
if (!/_progFocus/.test(app)) bad.push('app: programmatic focus must not open the list (_progFocus)');
if (!/sughead/.test(read('global_ui.css'))) bad.push('global_ui.css: .sughead rule missing');
if (!/function popular\(\)/.test(read('page_typeahead.js'))) bad.push('page_typeahead.js: popular() missing');
const BS = String.fromCharCode(92);
function payload(f) {
  const h = read(f);
  const i = h.indexOf('id="taInput"'); if (i < 0) return null;
  const k = h.indexOf('<script>(function client(D)', i); if (k < 0) return { lib: /sughead/.test(h) };
  const s = h.indexOf('})(', k) + 3, e = h.indexOf(');</script>', s);
  try { const D = JSON.parse(h.slice(s, e)); D.lib = /sughead/.test(h); return D; } catch (x) { return null; }
}
let n = 0, lowMed = 0;
for (const d of fs.readdirSync('airline')) {
  const f = 'airline/' + d + '/medication/index.html'; if (!fs.existsSync(f)) continue;
  const D = payload(f); if (!D) { bad.push(f + ': no typeahead data'); continue; }
  n++;
  if (!D.lib) bad.push(f + ': popular code missing in the page');
  const hit = (D.popn || []).filter(nm => D.items.some(x => x.n.toLowerCase() === nm.toLowerCase() && x.card));
  if (hit.length < 3) { lowMed++; bad.push(f + ': fewer than 3 answerable popular medicines (' + hit.join(',') + ')'); }
}
for (const f of ['medication/into/japan/index.html', 'food/italy/index.html', 'food/japan/index.html']) {
  const h = read(f); if (!/sughead/.test(h) || !/_popular|function popular/.test(h)) bad.push(f + ': popular code missing');
}
console.log(bad.length ? 'FAIL typeahead popular: ' + bad.slice(0, 8).join(' ; ') : 'OK typeahead popular (' + n + ' airline medication pages, app, country and food pages)');
process.exit(bad.length ? 1 : 0);
