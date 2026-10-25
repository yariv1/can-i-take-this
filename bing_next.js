// Daily Bing URL Submission helper (quota 100/day). Prints the next URLs to submit, priority order, skipping everything in bing_submitted.txt.
// Usage: node bing_next.js [count=100]        -> prints the list (one URL per line)
//        node bing_next.js --mark file.txt     -> appends the URLs in file.txt to bing_submitted.txt (run after Bing says "submitted successfully")
const fs = require('fs'), path = require('path');
const DONE = path.join(__dirname, 'bing_submitted.txt');
const done = new Set(fs.existsSync(DONE) ? fs.readFileSync(DONE, 'utf8').split(/\s+/).filter(Boolean) : []);
if (process.argv[2] === '--mark') {
  const add = fs.readFileSync(process.argv[3], 'utf8').split(/\s+/).filter(Boolean).filter(u => !done.has(u));
  fs.appendFileSync(DONE, add.join('\n') + '\n'); console.log('marked', add.length); process.exit(0);
}
const n = parseInt(process.argv[2], 10) || 100;
const urls = [...fs.readFileSync(path.join(__dirname, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const rank = u => {
  const p = u.replace('https://canitakethis.co', '');
  if (/^\/(app\/|about\/)?$/.test(p) || /^\/blog\/[^/]+\/$/.test(p)) return 0;
  if (/^\/airline\/[^/]+\/(baggage-allowance|liquids|power-bank|vape-e-cigarette|perfume-aerosols|medication)\/$/.test(p)) return 1;
  if (/^\/medication\/into\//.test(p) || /^\/food\/[^/]+\/$/.test(p)) return 2;
  if (/^\/country\/[^/]+\/(vaping|plants-seeds|cash|tobacco|alcohol)\/$/.test(p)) return 3;
  if (/^\/airline\/[^/]+\/(compensation|wifi|customer-service|alcohol)\/$/.test(p)) return 4;
  return 5;
};
const todo = urls.filter(u => !done.has(u)).map((u, i) => ({ u, r: rank(u), i })).sort((a, b) => a.r - b.r || a.i - b.i);
console.log(todo.slice(0, n).map(x => x.u).join('\n'));
console.error('remaining not yet submitted:', todo.length);
