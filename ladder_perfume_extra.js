const fs = require('fs');
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const X = require('./perfume_extra.js');
for (const a of Object.keys(X)) {
  const k = 'airline/' + a.toLowerCase().replace(/ /g, '-') + '/perfume-aerosols';
  const r = log[k] || {};
  r.official = r.official && r.official.length ? r.official : ['tried 2026-11-16: ' + a + ' own restricted-items/dangerous-goods page; see page source'];
  const note = 'read 2026-11-17: ' + X[a].src[1] + ' (' + X[a].src[0] + ')';
  r.reliable = (r.reliable || []).filter(x => x !== note).concat([note]);
  r.other = r.other && r.other.length ? r.other : ['none needed: step 2a answered part of the question'];
  r.date = '2026-11-17';
  log[k] = r;
}
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
