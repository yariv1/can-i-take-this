// Guard: Trip check phase 2 (2026-10-24). Departure-country medication rules in the home app must equal what gen_depmed.js builds
// from the regimes read in full (air_med_fill.js), every rule must carry a source link, no airline name, and every mapped country must be selectable as "Leaving from".
const fs = require('fs'), path = require('path');
const G = require('./gen_depmed.js');
const fail = [];
const bad = m => fail.push(m);
['canitakethis.html', 'index.html', 'app/index.html'].forEach(f => {
  const s = fs.readFileSync(path.join(__dirname, f), 'utf8');
  if (/function (depBlock|connBlock)\(/.test(s)) bad(f + ': extra cards under the answer are not allowed (DS 8.53)');
  if (s.indexOf(G.litMed) < 0) bad(f + ': MEDPAGES differs from the medication pages on disk (run node gen_depmed.js)');
  if (s.indexOf(G.litPb) < 0) bad(f + ': PBDEP differs from gen_depmed.js');
  if (s.indexOf(G.litLiq) < 0) bad(f + ': LIQDEP differs from gen_depmed.js');
  if (s.indexOf(G.litConn) < 0) bad(f + ': CONN differs from gen_depmed.js');
  ['id="viaAdd"', 'id="viaRemove"'].forEach(k => { if (s.indexOf(k) < 0) bad(f + ' missing ' + k); });
  if (s.indexOf(G.lit) < 0) bad(f + ': DEPMED differs from gen_depmed.js (run node gen_depmed.js, then build)');
  ['function tcDepRows', 'function tcConnRow'].forEach(k => { if (s.indexOf(k) < 0) bad(f + ' missing ' + k); });
});
const src = fs.readFileSync(path.join(__dirname, 'canitakethis.html'), 'utf8');
const tz = src.match(/var TZC='([^']+)'/)[1].split(';').map(g => g.split(':')[0]);
Object.keys(G.data.map).forEach(c => { if (tz.indexOf(c) < 0) bad('mapped country not selectable: ' + c); });
Object.keys(G.data.reg).forEach(r => Object.keys(G.data.reg[r]).forEach(k => {
  const x = G.data.reg[r][k], id = r + '.' + k;
  if (!['go', 'warn', 'stop'].includes(x.s)) bad(id + ' bad status');
  if (!x.h || !x.l.length) bad(id + ' empty text');
  if (!x.u.length || x.u.some(u => !/^https:\/\//.test(u[0]) || !u[1])) bad(id + ' missing source link');
  if (/FAKE-AIRLINE|AIRLINE/.test(JSON.stringify(x))) bad(id + ' mentions an airline');
}));
Object.keys(G.liqdep.map).forEach(c => { if (tz.indexOf(c) < 0) bad('liquids country not selectable: ' + c); G.liqdep.map[c].forEach(r => { if (!G.liqdep.reg[r]) bad('liquids regime missing ' + r); }); });
Object.keys(G.liqdep.reg).forEach(r => { const x = G.liqdep.reg[r], id = 'liquids ' + r;
  if (!['go', 'warn', 'stop'].includes(x.s) || !x.h || !x.l.length) bad(id + ' bad text/status');
  if (!x.u.length || x.u.some(u => !/^https:\/\//.test(u[0]) || !u[1])) bad(id + ' missing source link'); });
Object.keys(G.pbdep.map).forEach(c => { if (tz.indexOf(c) < 0) bad('power bank country not selectable: ' + c); });
Object.keys(G.pbdep.reg).forEach(r => { const x = G.pbdep.reg[r], id = 'powerbank ' + r;
  if (!['go', 'warn', 'stop'].includes(x.s) || !x.h || !x.l.length) bad(id + ' bad text/status');
  if (!x.u.length || x.u.some(u => !/^https:\/\//.test(u[0]) || !u[1])) bad(id + ' missing source link'); });
Object.keys(G.conn).forEach(h => ['liq', 'med'].forEach(k => { const x = G.conn[h][k]; if (!x) return; const id = 'hub ' + h + '.' + k;
  if (!['go', 'warn', 'stop'].includes(x.s) || !x.h || !x.l.length) bad(id + ' bad text/status');
  if (!x.u.length || x.u.some(u => !/^https:\/\//.test(u[0]) || !u[1])) bad(id + ' missing source link');
  if (!G.conn[h].liq) bad('hub ' + h + ' has no liquids row');
  if (tz.indexOf(G.conn[h].cc) < 0) bad('hub country not selectable ' + h); }));
if (fail.length) { console.log('FAIL audit_depmed (' + fail.length + ')'); fail.slice(0, 20).forEach(m => console.log(' - ' + m)); process.exit(1); }
console.log('OK audit_depmed: ' + Object.keys(G.conn).length + ' hubs, ' + Object.keys(G.data.map).length + ' countries, ' + Object.keys(G.data.reg).length + ' regimes');
