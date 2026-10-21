/* Guard: country page tickets: ENTERING label, country name matches the URL slug, flag present, h1/title mention the right category, no airline-category leftovers. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, 'country');
const KEY = { alcohol: /alcohol|liquor|wine|spirits/i, tobacco: /tobacco|cigarette/i, cash: /cash|currency|money/i, 'plants-seeds': /plant|seed/i, vaping: /vap|e-cig/i, medication: /medic|drug|prescri|pill/i, pets: /pet|dog|cat|animal/i, food: /food/i };
let bad = 0, n = 0; const norm = s => s.toLowerCase().replace(/&amp;/g, '&').replace(/[^a-z0-9]+/g, '');
function fail(m) { bad++; console.log('BAD ' + m); }
for (const c of fs.readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory())) {
  for (const cat of fs.readdirSync(path.join(root, c.name), { withFileTypes: true }).filter(d => d.isDirectory())) {
    const p = path.join(root, c.name, cat.name, 'index.html'); if (!fs.existsSync(p)) continue;
    const h = fs.readFileSync(p, 'utf8'); n++; const rel = 'country/' + c.name + '/' + cat.name;
    const m = /<div class="route"><span>[^<]*?(ENTERING)[^<]*<\/span><span><b>([^<]*)<\/b>\s*<img class="fimg" src="([^"]*)"/.exec(h);
    if (!m) { fail(rel + ': no ENTERING ticket'); continue; }
    if (norm(m[2]) !== norm(c.name)) fail(rel + ': ticket says "' + m[2] + '"');
    if (!/flagcdn\.com\/[a-z-]+\.svg/.test(m[3])) fail(rel + ': flag ' + m[3]);
    const h1 = (/<h1[^>]*>([\s\S]*?)<\/h1>/.exec(h) || [])[1] || '', ttl = (/<title>([^<]*)/.exec(h) || [])[1] || '';
    if (KEY[cat.name] && !(KEY[cat.name].test(h1) && KEY[cat.name].test(ttl))) fail(rel + ': h1/title off-category: ' + h1.replace(/<[^>]+>/g, '') + ' | ' + ttl);
    const nameN = norm(c.name); if (/^(european-union|united-kingdom)$/.test(c.name)) continue; if (!norm(h1.replace(/<[^>]+>/g, '')).includes(nameN)) fail(rel + ': h1 lacks country: ' + h1.replace(/<[^>]+>/g, ''));
    for (const other of Object.keys(KEY)) { if (other === cat.name) continue; if (/class="route"[^>]*><span>[^<]*<\/span><span>[^<]*(MEDICATION|COMPENSATION|WI-FI|CUSTOMER SERVICE)/.test(h)) fail(rel + ': foreign ticket label'); }
  }
}
console.log(n + ' country pages scanned; ' + (bad ? bad + ' BAD' : 'OK')); process.exit(bad ? 1 : 0);
