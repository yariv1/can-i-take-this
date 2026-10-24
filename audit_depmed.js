// Guard: Trip check phase 2 (2026-10-24). Departure-country medication rules in the home app must equal what gen_depmed.js builds
// from the regimes read in full (air_med_fill.js), every rule must carry a source link, no airline name, and every mapped country must be selectable as "Leaving from".
const fs = require('fs'), path = require('path');
const G = require('./gen_depmed.js');
const fail = [];
const bad = m => fail.push(m);
['canitakethis.html', 'index.html', 'app/index.html'].forEach(f => {
  const s = fs.readFileSync(path.join(__dirname, f), 'utf8');
  if (s.indexOf(G.lit) < 0) bad(f + ': DEPMED differs from gen_depmed.js (run node gen_depmed.js, then build)');
  ['function depBlock', 'depBlock()+worthHtml()'].forEach(k => { if (s.indexOf(k) < 0) bad(f + ' missing ' + k); });
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
if (fail.length) { console.log('FAIL audit_depmed (' + fail.length + ')'); fail.slice(0, 20).forEach(m => console.log(' - ' + m)); process.exit(1); }
console.log('OK audit_depmed: ' + Object.keys(G.data.map).length + ' countries, ' + Object.keys(G.data.reg).length + ' regimes');
