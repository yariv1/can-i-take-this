/* Guard (DS 8.21 / 8.28): every verdict card on airline and plane pages states where it comes from:
   official (help src-ok), unofficial (help src-un) or the third option BASED ON GLOBAL RULES (footer src-no, no link).
   A card with a link may not say global rules; a card without a link may not say official. */
const fs = require('fs'), path = require('path');
const bad = []; let n = 0;
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html' && (p.startsWith('airline' + path.sep) || p.startsWith('plane' + path.sep))) chk(p);
  }
}
function chk(p) {
  const t = fs.readFileSync(p, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const re = /<div class="pass [^"]*print">([\s\S]*?)<div class="src">([\s\S]*?)<\/div><\/div><\/div>/g; let m;
  while ((m = re.exec(t))) {
    n++;
    const body = m[1], foot = m[2];
    const ok = /class="help src-ok"/.test(body), un = /class="help src-un"/.test(body), no = /class="src-no"/.test(foot);
    const links = /class="hitem" href="http/.test(body);
    if (!ok && !un && !no) bad.push(p + ' card without a source state');
    if (no && links) bad.push(p + ' global rules but has a link');
    if ((ok || un) && !links) bad.push(p + ' official/unofficial without a link');
    if (ok && un) bad.push(p + ' card mixes official and unofficial');
  }
}
walk('.');
console.log(bad.length ? 'FAIL airline state (' + n + ' cards): ' + bad.slice(0, 12).join(' ; ') : 'OK airline state (' + n + ' cards)');
process.exit(bad.length ? 1 : 0);
