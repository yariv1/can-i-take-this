// Page inventory per group: total vs noindexed. node inventory_pages.js
const fs = require('fs'), path = require('path');
const all = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name.startsWith('.') || ['node_modules', '_site'].includes(e.name)) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (e.name === 'index.html') all.push(p.split(path.sep).join('/'));
  }
})('.');
const g = {}; let noidx = 0;
for (const f of all) {
  const h = fs.readFileSync(f, 'utf8');
  const ni = /<meta name="robots" content="[^"]*noindex/i.test(h.slice(0, 8000));
  const parts = f.split('/');
  const k = parts.length <= 2 ? '(root)' : parts[0] + (parts.length >= 4 && ['airline', 'country'].includes(parts[0]) ? '/*/' + parts[2] : '/*');
  const o = g[k] = g[k] || { n: 0, ni: 0 }; o.n++; if (ni) { o.ni++; noidx++; }
}
console.log(all.length, 'pages, noindex', noidx);
Object.entries(g).sort((a, b) => b[1].n - a[1].n).forEach(([k, o]) => console.log(k, o.n, 'noindex', o.ni));
