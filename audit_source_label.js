// DS 8.21: every source block on a Wi-Fi page says WHERE the facts come from, by colour of the heading only:
//   official   -> <div class="help src-ok"><div class="help-h">✓ Official source</div>   (green heading)
//   unofficial -> <div class="help src-un"><div class="help-h">⚠ Unofficial source</div> (amber heading, plus the bold explanation line and the named source)
// Fails when a Wi-Fi page has a .help block without one of the two labels, when the heading text does not match the class,
// or when an unofficial block has no explanation line. Exit 1 on violation.
const fs = require('fs'), path = require('path');
const bad = [];
let pages = 0, ok = 0, un = 0;
for (const [a, kind] of fs.readdirSync('airline').flatMap(x => ['wifi', 'medication'].map(k => [x, k]))) {
  const p = path.join('airline', a, kind, 'index.html');
  if (!fs.existsSync(p)) continue;
  pages++;
  const s = fs.readFileSync(p, 'utf8');
  const blocks = s.match(/<div class="help[^"]*"><div class="help-h">[^<]*<\/div>/g) || [];
  if (!blocks.length) bad.push(p + ': no source block');
  for (const b of blocks) {
    if (b === '<div class="help src-ok"><div class="help-h">✓ Official source</div>') ok++;
    else if (b === '<div class="help src-un"><div class="help-h">⚠ Unofficial source</div>') un++;
    else bad.push(p + ': source block without the Official/Unofficial label: ' + b.slice(0, 90));
  }
  const unBlocks = (s.match(/class="help src-un"/g) || []).length;
  const warns = (s.match(/class="src-warn"/g) || []).length;
  if (unBlocks && warns < unBlocks) bad.push(p + ': unofficial block without the explanation line (.src-warn)');
  if (unBlocks && !/unofficial source, named above/.test(s)) bad.push(p + ': unofficial page footer line missing');
  if (/class="help src-ok"/.test(s) && unBlocks) bad.push(p + ': page mixes official and unofficial blocks');
}
console.log('Wi-Fi and Medication pages checked: ' + pages + ' (official blocks ' + ok + ', unofficial blocks ' + un + ')');
if (bad.length) { console.log('SOURCE LABEL VIOLATIONS (DESIGN_SYSTEM.md 8.21):'); bad.slice(0, 30).forEach(x => console.log(' ', x)); process.exit(1); }
console.log('OK source labels');

// Whole site: no old-style Official source headings left anywhere.
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (f.name === 'node_modules' || f.name.startsWith('.')) continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name === 'index.html') {
      const s = fs.readFileSync(p, 'utf8');
      if (/class="help-h">Official source|class="h">🔗 Official|art-sources-head">🔗 Official/.test(s)) { console.log('OLD SOURCE HEADING (DS 8.21): ' + p); process.exitCode = 1; }
    }
  }
})('.');
