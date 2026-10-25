// DS 8.32 / 8.61: an airline page's top card may say "✓ OFFICIAL SOURCE" only if the page body does not say the airline's own rule was taken from an unofficial source.
// Scans built /airline/ pages. Exit 1 on a contradiction. Partial-read notes ("could not read which column is marked") are not flagged.
const fs = require('fs'), path = require('path');
const bad = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) { if (!f.name.startsWith('.') && f.name !== 'node_modules') walk(p); }
    else if (f.name === 'index.html') {
      const h = fs.readFileSync(p, 'utf8');
      if (/>✓ OFFICIAL SOURCE/.test(h) && /This section is from an unofficial source|Checked [^<]{0,40} on an unofficial source|We could not take a [a-z -]+ rule from/i.test(h)) bad.push(p);
    }
  }
})('airline');
if (bad.length) { console.log('LABEL CONTRADICTION (top card says OFFICIAL, body says unofficial), ' + bad.length + ' pages, e.g. ' + bad.slice(0, 5).join(', ')); process.exit(1); }
console.log('OK card label consistency');
