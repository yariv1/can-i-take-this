/* Guard: every ticket (.route) label on a built page must match the page's category. Prints distinct url-category -> label combos; exits 1 on any suspicious pair. */
const fs = require('fs'), path = require('path');
const root = __dirname;
const seen = {}; let bad = 0, files = 0;
function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (f.name === 'node_modules' || f.name.startsWith('.')) continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name === 'index.html' && /[\\/](airline|country)[\\/]/.test(p)) check(p);
  }
}
function check(p) {
  const rel = path.relative(root, p).replace(/\\/g, '/');
  const parts = rel.split('/');
  const kind = parts[0], cat = parts.length > 3 ? parts[2] : '(root)';
  const html = fs.readFileSync(p, 'utf8'); files++;
  const re = /<div class="route"><span>[^<]*<b>[^<]*<\/b><\/span><span>([^<]*)<\/span><\/div>/g; let m;
  while ((m = re.exec(html))) {
    const label = m[1].trim().toUpperCase(), key = kind + '/' + cat + ' -> ' + label;
    if (!seen[key]) seen[key] = { n: 0, ex: rel }; seen[key].n++;
  }
}
walk(root);
const OK = {
  medication: /MEDICATION|MEDICINE|PILLS|CARRY|CHECKED|PRESCRIPTION|NEEDLES|LIQUID|COLD|DEVICE|MOBILITY|SUPPLEMENT|ANTI|CBD|CANNABIS|OPIOID|VITAMIN/,
  compensation: /^COMPENSATION$/, wifi: /^WI-FI$/, 'customer-service': /^CUSTOMER SERVICE$/
};
Object.keys(seen).sort().forEach(k => {
  const [lhs, label] = k.split(' -> '); const cat = lhs.split('/')[1];
  const rule = OK[cat]; const flag = rule && !rule.test(label) ? 'BAD ' : (/MEDICATION/.test(label) && cat !== 'medication' ? 'BAD ' : '    ');
  if (flag === 'BAD ') bad++;
  console.log(flag + k + '  x' + seen[k].n + '  e.g. ' + seen[k].ex);
});
console.log(files + ' pages scanned; ' + (bad ? bad + ' BAD' : 'OK'));
process.exit(bad ? 1 : 0);
