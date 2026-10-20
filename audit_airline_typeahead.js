// Guard (user order 2026-10-20, DESIGN_SYSTEM 8.38): every airline Medication page has the same "Which medicine?" typeahead as the country pages and the app,
// with the clear (x) inside the field. Fails if any airline medication page lacks it.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, 'airline');
let n = 0; const bad = [];
for (const d of fs.readdirSync(root)) {
  const f = path.join(root, d, 'medication', 'index.html');
  if (!fs.existsSync(f)) continue;
  n++;
  const h = fs.readFileSync(f, 'utf8');
  const need = ['id="taInput"', 'Which medicine?', 'Type a medicine or ingredient (e.g. Sudafed)', 'id="taClear"', 'id="taSuggest"', 'id="taResult"', 'id="taOriginal"', 'tabs(false)'];
  const miss = need.filter(x => !h.includes(x));
  if (miss.length) bad.push(d + ' missing ' + miss.join(', '));
}
if (bad.length) { console.log('FAIL airline typeahead:\n' + bad.slice(0, 20).join('\n')); process.exit(1); }
console.log('OK airline typeahead (' + n + ' medication pages)');

// Second part (user order 2026-10-20): the country medication and food typeaheads also deselect the page tab while an answer shows, and the verified-rule tags read answer-first.
(function () {
  const bad = [];
  for (const f of ['medication/into/japan/index.html', 'food/brazil/index.html']) {
    const h = fs.readFileSync(path.join(__dirname, f), 'utf8');
    if (!h.includes('_tabs(false)')) bad.push(f + ' does not deselect the tab on an answer');
  }
  // every food country page has the "Which food?" typeahead (verified pages answer from their own topic cards)
  let foodPages = 0;
  for (const d of fs.readdirSync(path.join(__dirname, 'food'))) { const fp = path.join(__dirname, 'food', d, 'index.html'); if (!fs.existsSync(fp)) continue; foodPages++; const h = fs.readFileSync(fp, 'utf8'); if (!h.includes('id="taInput"') || !h.includes('id="taClear"')) bad.push('food/' + d + ' has no Which food? typeahead'); }
  const app = fs.readFileSync(path.join(__dirname, 'canitakethis.html'), 'utf8');
  ['Up to 1 month: no permit', 'Up to 3 months with a prescription', 'Up to 3 months with a letter', 'Approval needed first', 'Certificate + small amount'].forEach(t => { if (app.includes("'" + t + "'")) bad.push('old unclear tag text: ' + t); });
  if (bad.length) { console.log('FAIL typeahead/tag rules:\n' + bad.join('\n')); process.exit(1); }
  console.log('OK country typeahead deselects the tab; verified-rule tags are answer-first');
})();

// every page with a typeahead has the clear (x) inside the field (DESIGN_SYSTEM 8.36), on every page type
(function () {
  const bad = []; let n = 0;
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.name === '.claude' || e.name === 'node_modules' || e.name.startsWith('.git')) continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'index.html' && !/[\/]app[\/]index\.html$/.test(p)) {
        const h = fs.readFileSync(p, 'utf8');
        if (h.includes('id="taInput"')) { n++; if (!h.includes('id="taClear"')) bad.push(path.relative(__dirname, p)); }
      }
    }
  })(__dirname);
  if (bad.length) { console.log('FAIL typeahead without clear (x) on ' + bad.length + ' pages, e.g. ' + bad.slice(0, 5).join(', ')); process.exit(1); }
  console.log('OK every typeahead has the clear (x) (' + n + ' pages)');
})();

// an airline medication answer is never an amber "Not published" verdict: the unknown state is the site-wide info card "Check the source"
(function () {
  const bad = [];
  for (const d of fs.readdirSync(path.join(__dirname, 'airline'))) {
    const fp = path.join(__dirname, 'airline', d, 'medication', 'index.html');
    if (!fs.existsSync(fp)) continue;
    if (/class="verdict">Not published/.test(fs.readFileSync(fp, 'utf8'))) bad.push(d);
  }
  if (bad.length) { console.log('FAIL "Not published" verdict card on: ' + bad.slice(0, 8).join(', ')); process.exit(1); }
  console.log('OK no "Not published" verdict cards on airline medication pages');
})();

// a chip is something you bring ("Liquid medication", "Other medicine"): never "Not published"
(function () {
  const bad = [];
  for (const d of fs.readdirSync(path.join(__dirname, 'airline'))) {
    const fp = path.join(__dirname, 'airline', d, 'medication', 'index.html');
    if (!fs.existsSync(fp)) continue;
    if (/class="chip(?: on)?" data-c="[a-z]+">Not published</.test(fs.readFileSync(fp, 'utf8'))) bad.push(d);
  }
  if (bad.length) { console.log('FAIL chip named "Not published" on: ' + bad.slice(0, 8).join(', ')); process.exit(1); }
  console.log('OK no chip named "Not published"');
})();

// one chip name per kind of card on every airline medication page (DESIGN_SYSTEM 8.41)
(function () {
  const CHIP = { pills: 'Pills &amp; tablets', liquids: 'Liquid medication', needles: 'Insulin &amp; syringes', cold: 'Cold medication', devices: 'Medical devices', allergy: 'Allergy medication', controlled: 'Controlled medication', abroad: 'Flying abroad' };
  const bad = [];
  for (const d of fs.readdirSync(path.join(__dirname, 'airline'))) {
    const fp = path.join(__dirname, 'airline', d, 'medication', 'index.html');
    if (!fs.existsSync(fp)) continue;
    const h = fs.readFileSync(fp, 'utf8');
    for (const m of h.matchAll(/class="chip(?: on)?" data-c="([a-z]+)">([^<]*)</g)) if (CHIP[m[1]] && CHIP[m[1]] !== m[2]) bad.push(d + ': ' + m[1] + ' chip is "' + m[2] + '", must be "' + CHIP[m[1]] + '"');
  }
  if (bad.length) { console.log('FAIL chip names:' + String.fromCharCode(10) + bad.slice(0, 12).join(String.fromCharCode(10))); process.exit(1); }
  console.log('OK one chip name per kind of card');
})();
