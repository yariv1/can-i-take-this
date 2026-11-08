// Guard (DS 8.62): a card must not say "at the official source below" when that card has no source link (no hitem row).
const fs = require('fs'), path = require('path');
function walk(d, o = []) { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); if (f.isDirectory()) walk(p, o); else if (f.name === 'index.html') o.push(p.split(path.sep).join('/')); } return o; }
const bad = []; let cards = 0;
for (const t of ['food', 'country', 'pets', 'medication', 'airline']) {
  if (!fs.existsSync(t)) continue;
  for (const f of walk(t)) {
    const h = fs.readFileSync(f, 'utf8');
    const m = (h.match(/<main[\s\S]*?<\/main>/i) || [''])[0].replace(/<script[\s\S]*?<\/script>/gi, ' ');
    m.split(/<div class="pass[ "]/).slice(1).forEach(c => {
      cards++;
      if (/at the official source below|See Helpful sources below/i.test(c) && !/class="hitem"/.test(c)) bad.push(f);
    });
  }
}
const u = [...new Set(bad)];
if (u.length) { console.log('FAIL: ' + u.length + ' pages say "official source below" on a card with no source link, e.g. ' + u.slice(0, 5).join(', ')); process.exit(1); }
console.log('OK source pointer (' + cards + ' cards checked)');
