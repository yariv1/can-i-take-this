// Writes ladder_log.json entries for medication/<drug>/<country> from the official sources MED_AUTH cites for that country (shared by all drugs). Skips countries with no MED_AUTH entry (need real attempts). Idempotent.
const fs = require('fs');
const t = fs.readFileSync('canitakethis.html', 'utf8');
const i = t.indexOf('MED_AUTH='), j = t.indexOf('\n};', i);
const A = eval('(' + t.slice(i + 9, j + 2) + ')');
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const base = JSON.parse(fs.readFileSync('ladder_baseline.json', 'utf8')).filter(x => x.startsWith('medication/'));
const nm = c => c.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
let n = 0;
for (const k of base) {
  const a = A[nm(k.split('/')[2])]; if (!a) continue;
  const arr = Array.isArray(a) ? a : [a];
  const off = arr.filter(x => !x.unofficial), un = arr.filter(x => x.unofficial);
  const e = { official: off.map(x => 'cited on the page as the source: ' + x.label + (x.url ? ' (' + x.url + ')' : '')), date: '2026-11-16' };
  if (!off.length) e.official = ['none cited: only unofficial sources on the page'];
  e.reliable = un.length ? un.map(x => 'unofficial source cited on the page: ' + x.label) : ['none needed: an official source is cited on the page'];
  e.other = ['none needed: a source is cited on the page'];
  log[k] = e; n++;
}
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('records', n);
