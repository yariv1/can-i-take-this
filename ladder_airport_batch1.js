// Adds airport/authority-sourced sections (step 2a, read 2026-11-16) to Austrian liquids and Air France power. Idempotent.
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
add('Austrian', 'liquids',
  { h: 'What Vienna Airport says about liquids in hand luggage', p: 'Austrian Airlines\' own rule could not be read, so this section comes from Vienna Airport\'s security page, which applies to every airline departing from Vienna. It is the airport\'s rule, not an Austrian Airlines rule.', table: { head: ['Topic', 'What the Vienna Airport page says'], rows: [['Liquid container size', 'Liquids up to a container size of 2000 ml may stay in hand luggage'], ['Screening', 'All liquids are screened; carrying large quantities makes extra checks and possible delays more likely'], ['Thermos flasks', 'Must be empty at the checkpoint and can be refilled afterwards']] }, list: ['Not on the page: a limit on the number of containers, a rule on the plastic bag, duty-free purchases, or an effective date.', 'Other airports on your route can still apply the 100 ml rule, so check each airport you pass through.'] },
  [['What does Vienna Airport allow in hand luggage for liquids?', 'Vienna Airport\'s security page allows liquids up to a container size of 2000 ml in hand luggage. It says all liquids are screened and that larger quantities make extra checks more likely. This is an airport rule, not one stated by Austrian Airlines.']],
  ['https://viennaairport.com/en/passengers/airport/security_control', 'Vienna Airport: security check'], 'airline/austrian/liquids',
  'tried 2026-11-16: austrian.com regulation and dangerous-goods pages: HTTP 403, not read');
add('Air France', 'power',
  { h: 'What the French ministry page says about power banks', p: 'Air France\'s own page could not be read, so this section comes from the French ministry\'s page on items not permitted on aircraft (ecologie.gouv.fr), which applies to flights from France. It is a state rule, not an Air France rule.', table: { head: ['Item', 'What the French page says'], rows: [['Power banks', 'May be carried in the cabin if the limits and conditions are met; not allowed in the hold'], ['Spare lithium batteries', 'Cabin only; not allowed in the hold'], ['E-cigarettes and their spare batteries', 'Never in checked luggage; must stay switched off and not be charged on board'], ['Power banks built into suitcases', 'Some airlines may refuse them, in the cabin and in the hold'], ['Protection', 'Spare batteries must be individually protected against short circuits, for example in original packaging, taped terminals or separate pouches']] }, list: ['Not on the page: a watt-hour limit for power banks, or a limit on how many you may carry. The page gives 100 Wh per battery for e-cigarette batteries and 2 g of lithium for lithium metal batteries.', 'The page says airlines may be stricter than the regulation, so Air France\'s own limits can differ.'] },
  [['Can I put a power bank in checked luggage on a flight from France?', 'No. The French ministry page lists power banks among items that are not allowed in the hold. They can go in the cabin if the limits and conditions are met. This is the state rule; the airline may be stricter.']],
  ['https://www.ecologie.gouv.fr/en/public-policies/items-not-permitted-be-carried-airplanes-helicopters-subject-restrictions', 'French ministry for ecological transition: items not permitted on aircraft'], 'airline/air-france/power-bank',
  'tried 2026-11-16: wwws.airfrance.us and wwws.airfrance.fr prohibited-items pages: timed out, not read');
fs.writeFileSync('topics_new.json', JSON.stringify(N, null, 1));
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('ok');
