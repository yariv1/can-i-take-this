const fs = require('fs');
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const D = 'tried 2026-11-16: ';
const IATA = 'IATA Dangerous Goods Regulations, Table 2.3.A (67th edition, 1 January 2026): read, already on the page';
const NONE = 'none needed: step 2a (IATA) answered the question';
const A = {
  united: D + 'united.com alcohol/dangerous-goods search returned no pages; nothing read',
  iberia: D + 'iberia.com hand-luggage page and ayuda.iberia.com alcohol FAQ pages: HTTP 403, not read',
  'gulf-air': D + 'gulfair.com conditions of carriage and baggage pages found by search; no page read, only clause 11.4 (on-board consumption) seen in search text, not used',
  'ethiopian-airlines': D + 'ethiopianairlines.com restricted-items/liquids page: connection closed, not read',
  egyptair: D + 'egyptair.com carry-on baggage page: HTTP 403, not read',
  'air-china': D + 'airchina.com.cn Beijing-branch baggage page: redirected to a 404; other pages only in search results, not read',
  'el-al': D + 'elal.com dangerous-goods PDF is listed (2019/2022 versions) but the alcohol rows were not read in full; baggage pages HTTP 492',
  sunexpress: D + 'sunexpress.com hand-baggage and dangerous-goods pages: HTTP 403, not read',
};
const P = {
  'china-eastern': D + 'ceair.com carry-on baggage page read (liquids 100 ml per container, 1 L bag; no perfume or aerosol rule; refers to the CAAC prohibited and restricted catalogues, not read)',
  'malaysia-airlines': D + 'malaysiaairlines.com additional-restrictions page read: no perfume or aerosol entry (only flammable liquids and power banks)',
  'wizz-air': D + 'wizzair.com restricted-items help page: HTTP 405, not read',
  pegasus: 'read: Pegasus Provisions for Dangerous Goods Carried by Passengers or Crew (effective 2023), perfume/aerosol and alcohol entries now on the pages',
  'air-china': D + 'airchina.com.cn baggage pages: redirect/404, not read',
};
const put = (k, off) => { log[k] = { official: [off], reliable: [IATA], other: [NONE], date: '2026-11-16' }; };
for (const a in A) put('airline/' + a + '/alcohol', A[a]);
for (const a in P) put('airline/' + a + '/perfume-aerosols', P[a]);
put('airline/pegasus/alcohol', P.pegasus);
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('ok');
