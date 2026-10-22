// Guard (session 40): the "Read the full guide" block of a country category page may only offer articles about THAT topic.
// Plants & seeds pages had a FOOD article (user, 2026-10-22). No plants article exists, so plants pages must have no block.
const fs = require('fs'), path = require('path');
const ALLOW = {
  'plants-seeds': [],
  food: ['baby-food-pouches-on-a-plane-2026', 'food-you-can-take-on-a-plane-list-2026', 'food-tsa-vs-customs-2026', 'australia-nz-biosecurity-fines-2026'],
  alcohol: ['duty-free-alcohol-allowance-by-country-2026', 'duty-free-allowance-by-country-2026', 'japan-customs-declaration-2026'],
  tobacco: ['duty-free-tobacco-allowance-by-country-2026', 'duty-free-allowance-by-country-2026', 'japan-customs-declaration-2026', 'cigarettes'],
  cash: ['customs-cash-declaration-2026', 'japan-customs-declaration-2026'],
  vaping: ['vapes-country-rules-2026'],
  medication: ['banned-medications-by-country-2026', 'controlled-substances-painkillers-abroad-2026']
};
const root = path.join(__dirname, 'country');
let bad = 0, n = 0;
for (const c of fs.readdirSync(root)) {
  for (const cat of Object.keys(ALLOW)) {
    const f = path.join(root, c, cat, 'index.html');
    if (!fs.existsSync(f)) continue;
    n++;
    const h = fs.readFileSync(f, 'utf8');
    const m = /<nav class="readmore"[\s\S]*?<\/nav>/.exec(h);
    if (!m) continue;
    const hrefs = [...m[0].matchAll(/href="([^"]+)"/g)].map(x => x[1].replace(/\/$/, '').split('/').pop());
    for (const s of hrefs) if (!ALLOW[cat].includes(s)) { bad++; if (bad < 15) console.log('FAIL ' + c + '/' + cat + ' offers off-topic article: ' + s); }
  }
}
console.log(bad ? 'FAIL readmore topic: ' + bad + ' off-topic links on ' + n + ' category pages' : 'OK readmore topic (' + n + ' category pages)');
process.exit(bad ? 1 : 0);
