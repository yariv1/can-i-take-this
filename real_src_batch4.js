const fs = require('fs');
const d = JSON.parse(fs.readFileSync('country_unique.json', 'utf8'));
const U = (c, code) => 'https://infopages.traveldoc.aero/Customs/' + code + '/Plain';
const S = (c) => 'Unofficial source, read 16 November 2026: Travel Doc customs information page for ' + c + ' (infopages.traveldoc.aero, undated; it names no publisher). The official customs site could not be read.';
const NOTE = ' The page names no publisher and shows no date, so confirm the figures with the customs authority before you travel.';
const C = {
 greece: { code: 'GRC', n: 'Greece',
  a: ['The Travel Doc customs page for Greece gives travellers from outside the EU either 1 litre of drinks over 22% or 2 litres of drinks up to 22%, plus 4 litres of still wine and 16 litres of beer. It lists alcohol for travellers aged 18 and over.'],
  t: ['The Travel Doc customs page for Greece lists different tobacco amounts by route. By air or sea: 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of smoking tobacco. By road or rail: 40 cigarettes, 20 cigarillos, 10 cigars or 50 g of smoking tobacco. Mixes are allowed, and the page gives 17 as the minimum age for tobacco.'] },
 romania: { code: 'ROU', n: 'Romania',
  a: ['The Travel Doc customs page for Romania allows travellers aged 18 and over from outside the EU either 1 litre of drinks above 22% or 2 litres of drinks up to 22%, plus 4 litres of still wine and 16 litres of beer.'],
  t: ['The Travel Doc customs page for Romania allows travellers aged 18 and over from outside the EU 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of smoking tobacco, or a proportional mix. It states no separate land-border figures.'] },
 bulgaria: { code: 'BGR', n: 'Bulgaria',
  a: ['The Travel Doc customs page for Bulgaria lists, for travellers from outside the EU, either 1 litre of drinks above 22% or 2 litres at 22% or below, plus 4 litres of still wine and 16 litres of beer. It says the age limit from outside the EU is 17, and 18 for travel within the EU.'],
  t: ['The Travel Doc customs page for Bulgaria lists 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of smoking tobacco for travellers from outside the EU, with proportional mixes allowed. It gives 17 as the age limit from outside the EU.'] },
 lithuania: { code: 'LTU', n: 'Lithuania',
  a: ['The Travel Doc customs page for Lithuania gives travellers from outside the EU either 1 litre of drinks above 22% or 2 litres up to 22%, plus 4 litres of still wine and 16 litres of beer. It says tobacco and alcohol allowances apply from age 17.'],
  t: ['The Travel Doc customs page for Lithuania lists two sets of tobacco amounts. By air: 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of smoking tobacco. By road, rail or sea: 40 cigarettes, 20 cigarillos, 10 cigars or 50 g. Proportional mixes are allowed from age 17.'] },
 malta: { code: 'MLT', n: 'Malta',
  a: ['The Travel Doc customs page for Malta gives travellers from outside the EU either 1 litre of drinks above 22% or 2 litres of fortified or sparkling wine, or a proportional mix, plus 16 litres of beer. It states no figure for still wine, so check Maltese customs for that. The age limit is 17.'],
  t: ['The Travel Doc customs page for Malta lists 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of smoking tobacco for travellers from outside the EU, or a proportional mix. It states an age limit of 17 and no separate land-border figures.'] },
};
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const NA = 'none needed: step 2a answered the question';
for (const k in C) {
  const c = C[k];
  d.alcohol[k] = { h: 'What the Travel Doc customs page says about alcohol in ' + c.n, p: [c.a[0], 'The page also says funds over 10,000 euros must be declared when entering the EU.' + NOTE], src: S(c.n), link: [U(c.n, c.code), 'Travel Doc: ' + c.n + ' customs information'] };
  d.tobacco[k] = { h: 'What the Travel Doc customs page says about tobacco in ' + c.n, p: [c.t[0], NOTE.trim()], src: S(c.n) };
  for (const cat of ['alcohol', 'tobacco']) log['country/' + k + '/' + cat] = { official: ['tried 2026-11-16: official customs page for ' + c.n + ': HTTP 403 or connection refused, not read'], reliable: ['read: Travel Doc customs information page for ' + c.n + ' (infopages.traveldoc.aero)'], other: [NA], date: '2026-11-16' };
}
fs.writeFileSync('country_unique.json', JSON.stringify(d));
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('ok');
