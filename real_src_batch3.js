const fs = require('fs');
const d = JSON.parse(fs.readFileSync('country_unique.json', 'utf8'));
const BE = 'https://infopages.traveldoc.aero/Customs/BEL/Plain';
const PL = 'https://infopages.traveldoc.aero/Customs/POL/Plain';
const S = (c) => 'Unofficial source, read 16 November 2026: Travel Doc customs information page for ' + c + ' (infopages.traveldoc.aero, undated; it names no publisher). The official customs site could not be read.';
d.alcohol.belgium = { h: 'What the Travel Doc customs page says about alcohol in Belgium',
  p: ['The Travel Doc customs information page for Belgium gives travellers from outside the EU a duty-free allowance of either 1 litre of drinks over 22% or 2 litres of drinks up to 22%, plus 4 litres of still wine and 16 litres of beer. It says the alcohol and tobacco allowances apply to travellers aged 17 and over.',
    'The page names no publisher and shows no date, although it links to Belgian Customs. Treat the figures as a guide and confirm them with Belgian Customs before you travel.'],
  src: S('Belgium'), link: [BE, 'Travel Doc: Belgium customs information'] };
d.tobacco.belgium = { h: 'What the Travel Doc customs page says about tobacco in Belgium',
  p: ['The Travel Doc customs information page for Belgium gives travellers from outside the EU one of 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of smoking tobacco, or a proportional mix. It says these allowances apply to travellers aged 17 and over.',
    'The page names no publisher and shows no date, although it links to Belgian Customs. Confirm with Belgian Customs before you travel.'],
  src: S('Belgium') };
d.alcohol.poland = { h: 'What the Travel Doc customs page says about alcohol in Poland',
  p: ['The Travel Doc customs information page for Poland gives travellers from outside the EU either 1 litre of drinks over 22% or 2 litres of drinks up to 22%, plus 4 litres of still wine and 16 litres of beer. It lists alcohol for travellers aged 18 and over.',
    'The page names no publisher and shows no date, although it links to Polish customs. Confirm with Polish customs before you travel.'],
  src: S('Poland'), link: [PL, 'Travel Doc: Poland customs information'] };
d.tobacco.poland = { h: 'What the Travel Doc customs page says about tobacco in Poland',
  p: ['The Travel Doc customs information page for Poland gives travellers arriving by air 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of tobacco, with mixes allowed. For arrivals by land or sea it lists smaller amounts: 50 cigarettes, 25 cigarillos, 10 cigars or 50 g of smoking tobacco.',
    'The page names no publisher and shows no date, and its age limits differ between entry routes, so confirm the figures with Polish customs before you travel.'],
  src: S('Poland') };
fs.writeFileSync('country_unique.json', JSON.stringify(d));
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const NA = 'none needed: step 2a answered the question';
const O = { belgium: 'tried 2026-11-16: fin.belgium.be and belgium.be customs pages: human-verification challenge, not read; not bypassed', poland: 'tried 2026-11-16: gov.pl KAS page connection refused; finanse-arch.mf.gov.pl maintenance notice, not read' };
for (const c of ['belgium', 'poland']) for (const k of ['alcohol', 'tobacco'])
  log['country/' + c + '/' + k] = { official: [O[c]], reliable: ['read: Travel Doc customs information page for ' + c + ' (infopages.traveldoc.aero)'], other: [NA], date: '2026-11-16' };
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('ok');
