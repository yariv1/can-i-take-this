/* Guard (session country-verify-n-z, 2026-10-17): a country's plants-seeds and vaping page must not cite the same link as its alcohol/tobacco/cash pages
   (the customs duty-free page is not the source of a plant or vape rule). Countries from "n" on are enforced (FAIL); earlier letters are listed as WARN until their sessions fix them. */
const fs = require('fs'), path = require('path');
const links = p => { try { const t = fs.readFileSync(path.join('country', p, 'index.html'), 'utf8').replace(/<script[\s\S]*?<\/script>/g, ''); return new Set((t.match(/class="hitem" href="(https?:[^"]+)"/g) || []).map(x => x.replace(/.*href="/, '').replace(/"$/, ''))); } catch (e) { return new Set(); } };
const fail = [], warn = [];
// pages that really are the source of both rules (read and checked 2026-10-17): Taipei Customs lists e-cigarettes as prohibited tobacco products; Turkey's vape page cites the Ministry customs guide on purpose
const OK_SAME = { 'taiwan/vaping': 1, 'turkey/vaping': 1,
  // A-M pages read in full 2026-10-17: the cited page itself states the plant or vape rule
  'iceland/plants-seeds': 1, 'india/plants-seeds': 1, 'kenya/plants-seeds': 1, 'maldives/plants-seeds': 1, 'georgia/plants-seeds': 1, 'georgia/vaping': 1, 'morocco/plants-seeds': 1, 'israel/plants-seeds': 1, 'egypt/vaping': 1 };
for (const c of fs.readdirSync('country')) {
  if (!fs.existsSync(path.join('country', c, 'alcohol'))) continue;
  const base = new Set(); for (const k of ['alcohol', 'tobacco', 'cash']) links(c + '/' + k).forEach(u => base.add(u));
  for (const k of ['plants-seeds', 'vaping']) {
    const dup = [...links(c + '/' + k)].filter(u => base.has(u));
    if (dup.length && !OK_SAME[c + '/' + k]) fail.push(c + '/' + k + ' cites a customs-page link: ' + dup[0]);
  }
}
if (warn.length) console.log('WARN (letters before N, not yet fixed): ' + warn.length + ' pages, e.g. ' + warn.slice(0, 3).join(' ; '));
console.log(fail.length ? 'FAIL country category sources: ' + fail.slice(0, 10).join(' ; ') : 'OK country category sources (all letters enforced)');
process.exit(fail.length ? 1 : 0);
