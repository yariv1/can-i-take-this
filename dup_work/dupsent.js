// usage: node dupsent.js <topdir> <cat> ; prints most repeated sentences across airline/*/<cat>
const fs = require('fs'), path = require('path');
const root = '.';
const [top, cat, sample] = process.argv.slice(2);
function mainText(f) {
  let h = fs.readFileSync(f, 'utf8');
  const m = h.match(/<main[^>]*>([\s\S]*?)<\/main>/); h = m ? m[1] : h;
  h = h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<\/(p|li|tr|h\d|div|td|th)>/gi, '\n').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ');
  return h.split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(s => s.length > 3);
}
const files = [];
for (const s of fs.readdirSync(path.join(root, top))) { const f = path.join(root, top, s, cat, 'index.html'); if (fs.existsSync(f)) files.push([s, f]); }
const df = new Map();
const per = {};
for (const [s, f] of files) { const lines = mainText(f); per[s] = lines; for (const l of new Set(lines)) df.set(l, (df.get(l) || 0) + 1); }
if (sample) {
  for (const l of per[sample]) console.log((df.get(l) || 0).toString().padStart(3) + ' | ' + l.slice(0, 200));
} else {
  [...df.entries()].sort((a, b) => b[1] - a[1]).slice(0, 40).forEach(([l, n]) => console.log(String(n).padStart(3) + ' | ' + l.slice(0, 220)));
}
