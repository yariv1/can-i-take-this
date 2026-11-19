// Step 2a (read 2026-11-16): CAAC travel guide for Air China liquids/power/alcohol; Cairo Airport customs page for EgyptAir liquids. Idempotent.
const fs = require('fs');
const N = JSON.parse(fs.readFileSync('topics_new.json', 'utf8'));
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
function add(air, topic, sec, faq, src, key, off) {
  const e = N[air][topic];
  if (!e.sections.some(s => s.h === sec.h)) e.sections.push(sec);
  for (const f of faq) if (!e.faq.some(x => x[0] === f[0])) e.faq.push(f);
  if (!e.sources.some(s => s[0] === src[0])) e.sources.push(src);
  e.unofficial = true;
  log[key] = Object.assign(log[key] || {}, { official: [off], reliable: ['read 2026-11-16: ' + src[1] + ' (' + src[0] + ')'], other: ['none needed: step 2a answered part of the question'], date: '2026-11-16' });
}
const CAAC = ['http://www.caac.gov.cn/INDEX/HLFW/HKLXCS/202303/t20230316_217597.html', 'CAAC (Civil Aviation Administration of China): air travel knowledge, 2023 page, in Chinese'];
const OFF_AC = 'tried 2026-11-16: airchina.com baggage-restrictions page: request failed, not read';
const INTRO = 'Air China\'s own page could not be read, so this section comes from the Civil Aviation Administration of China (CAAC) travel guide, which sets the rules for flights in China. It is the authority\'s guidance, not an Air China rule. The page is in Chinese and the figures below are translated.';
add('Air China', 'liquids',
  { h: 'What the Chinese aviation authority says about liquids', p: INTRO, table: { head: ['Flight type', 'What the CAAC page says'], rows: [['Domestic flights', 'No liquids in carry-on, except travel-use cosmetics (one of each type, 100 mL or less, opened for inspection) and one tube each of toothpaste or shaving cream of 100 g/mL or less'], ['International and regional flights', 'Containers of 100 mL or less in one clear resealable bag of 1 L or less, one bag per passenger; extra liquids go in checked bags'], ['Duty-free on a domestic connection', 'Only with the receipt, a sealed intact bag and security clearance; if you leave the control area, the liquids must be checked'], ['Infant milk and necessary medicine', 'Allowed after security clears them']] }, list: ['The page says liquids may be placed in checked baggage.', 'This is much stricter than the usual 100 ml rule for domestic flights inside China.'] },
  [['Can I carry liquids in my cabin bag on a domestic flight in China?', 'The CAAC travel guide says no, with a short list of exceptions: travel-use cosmetics and one tube each of toothpaste or shaving cream, in 100 mL or 100 g containers. International and regional flights use the 100 mL and 1 L bag rule. This is the aviation authority\'s guidance, not an Air China statement.']],
  CAAC, 'airline/air-china/liquids', OFF_AC);
add('Air China', 'power',
  { h: 'What the Chinese aviation authority says about power banks', p: INTRO, table: { head: ['Item', 'What the CAAC page says'], rows: [['Power banks', 'Cannot be checked'], ['100 Wh or less', 'Carry-on only'], ['More than 100 Wh up to 160 Wh', 'Airline approval needed, carry-on only, maximum 2 per passenger'], ['More than 160 Wh', 'Not allowed'], ['Spare lithium batteries', 'Carry-on only, each protected against short circuits'], ['E-cigarettes with lithium batteries', 'Carry-on only']] }, list: ['The page says battery markings and labels must be complete, clear and easy to read.', 'Not on this page: the 2025 rule that bans power banks without the CCC mark or recalled models on domestic flights. That comes from a separate CAAC notice we have not read in full.'] },
  [['Can I put a power bank in checked baggage on a flight in China?', 'No. The CAAC travel guide says power banks cannot be checked. Up to 100 Wh they go in the cabin; 100 to 160 Wh need airline approval and are limited to 2 per passenger; above 160 Wh they are not allowed.']],
  CAAC, 'airline/air-china/power-bank', OFF_AC);
add('Air China', 'alcohol',
  { h: 'What the Chinese aviation authority says about alcohol', p: INTRO, table: { head: ['Where', 'What the CAAC page says'], rows: [['Carry-on', 'Not allowed'], ['Checked baggage, up to 24% alcohol', 'No quantity limit'], ['Checked baggage, 24% to 70% alcohol', 'Retail packaging with clear labels, each container 5 L or less, maximum 5 L per passenger'], ['Above 70% alcohol', 'Not allowed in carry-on or checked baggage']] }, list: ['This differs from the general IATA rule above, which allows stronger alcohol in the cabin. Expect Chinese security to follow the CAAC rule.'] },
  [['Can I carry alcohol in my cabin bag on a flight in China?', 'The CAAC travel guide says alcohol is not allowed in carry-on. In checked baggage drinks up to 24% have no limit, drinks from 24% to 70% are limited to 5 L in retail packaging, and drinks above 70% are not allowed.']],
  CAAC, 'airline/air-china/alcohol', OFF_AC);
add('EgyptAir', 'liquids',
  { h: 'What Cairo Airport says about liquids', p: 'EgyptAir\'s own carry-on page could not be read (HTTP 403), so this section comes from the Cairo Airport customs-regulations page. It is the airport\'s guidance, not an EgyptAir rule.', table: { head: ['Topic', 'What the Cairo Airport page says'], rows: [['Liquids over 100 ml', 'Banned in baggage, together with frozen items'], ['Duty-free liquids bought inside the airport', 'Allowed if sealed and you keep the receipt']] }, list: ['The page does not mention alcohol or perfume, and it shows no date.'] },
  [['Can I take liquids over 100 ml out of Cairo Airport duty free?', 'The Cairo Airport page says liquids above 100 ml are banned in baggage, except those bought in the airport duty free, which must stay sealed with the receipt. It also bans frozen items in baggage. This is the airport\'s guidance, not an EgyptAir statement.']],
  ['https://www.cairo-airport.com/en-us/Services/Passenger-Guide/Customs-Regulations', 'Cairo Airport: customs regulations'], 'airline/egyptair/liquids',
  'tried 2026-11-16: egyptair.com carry-on baggage page: HTTP 403, not read');
fs.writeFileSync('topics_new.json', JSON.stringify(N, null, 1));
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('ok');
