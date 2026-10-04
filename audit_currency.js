// Regression for currency.js: converts every page's visible text to a target currency (default INR)
// and reports what changed. Usage: node audit_currency.js [CUR]
const fs = require('fs'), path = require('path');
const C = require('./currency.js');
const rates = JSON.parse(fs.readFileSync('rates.json', 'utf8')).rates;
const target = process.argv[2] || 'INR';
const EXEMPT = /\/country\/|customs|duty-free|declaration|-by-country/i;
const skip = new Set(['node_modules', '.git', '.claude', 'assets']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (skip.has(e.name)) continue; const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name === 'index.html') files.push(p); } })(__dirname);
const dec = s => s.replace(/&nbsp;/g, ' ').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&rsquo;/g, "'");
const bad = [], groups = {}, left = {};
let converted = 0, exemptPages = 0;
for (const f of files) {
  const rel = path.relative(__dirname, f).replace(/\\/g, '/');
  if (EXEMPT.test('/' + rel)) { exemptPages++; continue; }
  let h = fs.readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<head[\s\S]*?<\/head>/i, '');
  for (const s of h.split(/<[^>]+>/).map(dec).filter(x => x.trim())) {
    const r = C.convertText(s, target, rates);
    if (r.text !== s) {
      converted++;
      const g = rel.split('/').slice(0, 2).join('/');
      groups[g] = (groups[g] || 0) + 1;
      if (/NaN|undefined|Infinity/.test(r.text)) bad.push(rel + ' | ' + r.text.slice(0, 100));
    }
    for (const m of s.match(/(?<![A-Za-z0-9])(?:US\$|\$|€|£)\s?\d[\d,.]*/g) || []) if (!r.text.includes(m)) continue; else (left[m] = (left[m] || 0) + 1);
  }
}
console.log({ target, pages: files.length, exemptPages, convertedTextNodes: converted, bad: bad.length });
console.log('top groups', Object.entries(groups).sort((a, b) => b[1] - a[1]).slice(0, 8));
console.log('amounts left unconverted (>= cap or other):', Object.entries(left).sort((a, b) => b[1] - a[1]).slice(0, 12));
if (bad.length) console.log(bad.slice(0, 10));
