// DS 8.21 + 8.28 + 8.30: every airline / plane card names WHERE the facts come from EXACTLY like the country pages:
//   source block  -> <div class="help"><div class="help-h">Helpful sources</div> ... links labelled "Official guidance" ... hnote</div>
//   footer        -> <div class="src"><b class="src-ok">✓ OFFICIAL SOURCE</b> sentence + the category's original text</div>
//                    or <b class="src-un">⚠ UNOFFICIAL SOURCE</b> reason + original text, or <b class="src-no">BASED ON GLOBAL RULES</b> (no link)
// Medication cards keep the medication original text (never replaced).
// Fails on the old airline style: "✓ Official source" / "⚠ Unofficial source" headings, .src-warn paragraphs, source links with section labels, footers without a state label.
const fs = require('fs'), path = require('path');
const bad = [];
let pages = 0, cardsN = 0, ok = 0, un = 0, no = 0;
const MED = 'Medication rules vary by country and can change. This is guidance, not legal advice - carry your prescription and confirm with the official authority before you fly.';
function check(p) {
  pages++;
  const raw = fs.readFileSync(p, 'utf8');
  // static HTML plus the card HTML embedded (JSON-escaped) in the page scripts
  const s = raw.replace(/\\"/g, '"');
  if (/class="help src-/.test(s)) bad.push(p + ': old airline source style (class help src-ok / src-un)');
  if (/help-h">(✓ Official source|⚠ Unofficial source)/.test(s)) bad.push(p + ': old "Official source" / "Unofficial source" heading');
  if (/class="src-warn"/.test(s)) bad.push(p + ': old src-warn paragraph');
  for (const m of s.matchAll(/<div class="help"><div class="help-h">([^<]*)<\/div>([\s\S]*?)<div class="hnote">/g)) {
    cardsN++;
    if (m[1] !== 'Helpful sources') bad.push(p + ': source block heading is "' + m[1] + '"');
    for (const sm of m[2].matchAll(/<small>([^<]*)<\/small>/g)) if (sm[1] !== 'Official guidance') bad.push(p + ': source link label "' + sm[1] + '" (must be "Official guidance")');
  }
  for (const m of s.matchAll(/<div class="src">([\s\S]*?)<\/div>/g)) {
    const f = m[1];
    if (/^<b class="src-ok">✓ OFFICIAL SOURCE<\/b> /.test(f)) ok++;
    else if (/^<b class="src-un">⚠ UNOFFICIAL SOURCE<\/b> /.test(f)) un++;
    else if (/^<b class="src-no">BASED ON GLOBAL RULES<\/b>/.test(f)) no++;
    else bad.push(p + ': card footer without a state label: ' + f.slice(0, 80));
    if (p.includes(path.sep + 'medication' + path.sep) && !f.includes(MED)) bad.push(p + ': medication footer lost the original medication text');
  }
}
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html' && (p.startsWith('airline' + path.sep) || p.startsWith('plane' + path.sep))) check(p);
  }
}
walk('airline'); walk('plane');
console.log('Airline and plane pages checked: ' + pages + ' (source blocks ' + cardsN + '; footers official ' + ok + ', unofficial ' + un + ', global rules ' + no + ')');
if (bad.length) { console.log('SOURCE LABEL VIOLATIONS (DESIGN_SYSTEM.md 8.21 / 8.28 / 8.30):'); [...new Set(bad)].slice(0, 30).forEach(x => console.log(' ', x)); process.exit(1); }
console.log('OK source labels');

// Whole site: no old-style Official source headings left anywhere.
(function walk2(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (f.name === 'node_modules' || f.name.startsWith('.')) continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk2(p);
    else if (f.name === 'index.html') {
      const s = fs.readFileSync(p, 'utf8');
      if (/class="help-h">Official source|class="h">🔗 Official|art-sources-head">🔗 Official/.test(s)) { console.log('OLD SOURCE HEADING (DS 8.21): ' + p); process.exitCode = 1; }
      if (/unofficial source, not the official rules/.test(s)) { console.log('OLD UNOFFICIAL FOOTER WORDING (DS 8.32, order 2026-10-18): ' + p); process.exitCode = 1; }
    }
  }
})('.');
