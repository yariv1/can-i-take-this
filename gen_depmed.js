// Trip check phase 2 (2026-10-24): DEPARTURE-country medication screening rules for the home app / app.
// Source of truth = the regimes already read in full from official airport / regulator pages (air_med_fill.js REG).
// This script writes them, airline-neutral, between the DEPMED markers of canitakethis.html. Run before build.js; audit_depmed.js fails when they differ.
const fs = require('fs'), path = require('path');
const AIRMED = require('./airline_medication.js');
const REG = AIRMED.__FILL.REG;
const EU = 'AT BE BG HR CY CZ DK EE FI DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES'.split(' ');
const MAP = {};
EU.forEach(c => { MAP[c] = ['EU']; });
MAP.SE = ['EU', 'SE']; MAP.FR = ['EU', 'FR']; MAP.NO = ['NO']; MAP.GB = ['UK']; MAP.CA = ['CA']; MAP.US = ['US']; MAP.KR = ['KR']; MAP.HK = ['HK'];
MAP.SG = ['SG']; MAP.AE = ['DXB', 'AUH']; MAP.TH = ['TH']; MAP.MX = ['MX']; MAP.OM = ['OM']; MAP.JP = ['JP']; MAP.BR = ['BR'];
const NAME = 'FAKE-AIRLINE-NAME';
const reg = {};
Object.keys(REG).forEach(r => {
  reg[r] = {};
  Object.keys(REG[r]).forEach(k => {
    const x = REG[r][k];
    const lines = x.lines(NAME).filter(l => l.indexOf(NAME) < 0);
    reg[r][k] = { s: x.status, h: x.head, l: lines, u: x.sources.map(u => [u[0], u[1]]) };
  });
});
Object.keys(MAP).forEach(c => MAP[c].forEach(r => { if (!reg[r]) throw new Error('no regime ' + r); }));
const data = { map: MAP, reg };
const lit = '/*DEPMED*/var DEPMED=' + JSON.stringify(data) + ';/*END_DEPMED*/';
if (require.main === module) {
  const F = path.join(__dirname, 'canitakethis.html');
  let s = fs.readFileSync(F, 'utf8');
  const re = /\/\*DEPMED\*\/[\s\S]*?\/\*END_DEPMED\*\//;
  if (!re.test(s)) throw new Error('markers missing in canitakethis.html');
  s = s.replace(re, () => lit);
  fs.writeFileSync(F, s);
  console.log('DEPMED written: ' + Object.keys(MAP).length + ' countries, ' + Object.keys(reg).length + ' regimes, ' + lit.length + ' chars');
}
module.exports = { lit, data };
