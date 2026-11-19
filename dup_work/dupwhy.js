// node dupwhy.js <top> <cat> <slug> : per-line shared-shingle contribution, using the audit's own text extraction
const fs = require('fs'), path = require('path');
const root = '.';
const [top, cat, slug] = process.argv.slice(2);
function html(f) {
  let h = fs.readFileSync(f, 'utf8');
  const m = h.match(/<main[^>]*>([\s\S]*?)<\/main>/); h = m ? m[1] : h;
  return h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ');
}
function words(h) { return h.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').toLowerCase().replace(/[^a-z0-9\u00c0-\u024f ]+/g, ' ').split(/\s+/).filter(Boolean); }
function sh(w) { const s = []; for (let i = 0; i + 5 <= w.length; i++) s.push(w.slice(i, i + 5).join(' ')); return s; }
const files = [];
for (const s of fs.readdirSync(path.join(root, top))) { const f = path.join(root, top, s, cat, 'index.html'); if (fs.existsSync(f)) files.push([s, f]); }
const df = new Map();
const sets = {};
for (const [s, f] of files) { const S = new Set(sh(words(html(f)))); sets[s] = S; for (const x of S) df.set(x, (df.get(x) || 0) + 1); }
const h = html(files.find(x => x[0] === slug)[1]);
const blocks = h.split(/<\/(?:p|li|tr|h\d|div|td|th|button|small|span|a)>/i);
let tot = 0, shared = 0; const rows = [];
for (const b of blocks) {
  const w = words(b); const sg = sh(w); if (!sg.length) continue;
  const sh2 = sg.filter(x => df.get(x) > 1).length; tot += sg.length; shared += sh2;
  rows.push([sh2, sg.length, w.slice(0, 14).join(' ')]);
}
console.log('total shingles', tot, 'shared', shared, (shared / tot * 100).toFixed(0) + '%');
rows.sort((a, b) => b[0] - a[0]).slice(0, 25).forEach(r => console.log(String(r[0]).padStart(4), '/', String(r[1]).padStart(4), r[2]));
