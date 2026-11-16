const fs = require('fs');
const d = JSON.parse(fs.readFileSync('country_unique.json', 'utf8'));
const SY = 'https://www.sydneyairport.com.au/info-sheet/duty-free-allowances-for-arriving-passengers';
const FI = 'https://www.expat-finland.com/pdf/customs_instructions_for_passengers_2021.pdf';
d.alcohol.australia = { h: 'What Sydney Airport says about alcohol',
  p: ['Sydney Airport’s information sheet on duty-free allowances for arriving passengers says each adult (18 or over) can bring in 2.25 litres of liquor, wine or champagne duty-free. It adds that duty and tax are payable on all items of that type, not only on the amount above the limit, if the allowance is exceeded.',
    'The sheet lists the alcohol allowance for adults only, so we do not show an allowance for travellers under 18. It shows no update date. Because this is an airport operator and not the Australian Border Force, treat it as a guide and confirm on the Border Force website before you fly.'],
  src: 'Unofficial source, read 16 November 2026: Sydney Airport, duty-free allowances for arriving passengers (airport operator page, undated). The Australian Border Force page could not be opened.',
  link: [SY, 'Sydney Airport: duty-free allowances for arriving passengers'] };
d.tobacco.australia = { h: 'What Sydney Airport says about tobacco',
  p: ['Sydney Airport’s information sheet says adults (18 or over) can bring one unopened packet of up to 25 cigarettes, or 25 g of tobacco products, plus one opened packet. It also mentions up to 1.5 kg of smokeless tobacco for personal use. Duty applies to tobacco above 25 g.',
    'The sheet shows no update date and comes from an airport operator, not from the Australian Border Force, so confirm on the Border Force website before you fly.'],
  src: 'Unofficial source, read 16 November 2026: Sydney Airport, duty-free allowances for arriving passengers (airport operator page, undated). The Australian Border Force page could not be opened.' };
const FSRC = 'Unofficial source, read 16 November 2026: Finnish Customs leaflet "Customs advice for travellers" (6/2021), read as a copy hosted by expat-finland.com. The tulli.fi pages could not be opened. The leaflet is from 2021 and says to check tulli.fi for current rules.';
d.alcohol.finland = { h: 'What the Finnish Customs leaflet says about alcohol',
  p: ['Finnish Customs’ leaflet for travellers (6/2021) sets the tax-free allowance for alcohol from outside the EU at 16 litres of beer and 4 litres of still wine, plus either 1 litre of spirits (over 22% and up to 80%) or 2 litres of other drinks of 22% or less. Strong and mild drinks can be combined proportionally; this does not apply to still wine or beer.',
    'Persons under 18 may not bring alcohol into Finland, and persons under 20 only mild drinks. Spirits above 80% need a permit. Arriving from outside the EEA by means other than air, a visitor living outside the EEA may bring alcohol only if staying in Finland over 72 hours. The leaflet is from 2021, so check tulli.fi for current figures.'],
  src: FSRC, link: [FI, 'Finnish Customs: Customs advice for travellers (6/2021 leaflet, hosted copy)'] };
d.tobacco.finland = { h: 'What the Finnish Customs leaflet says about tobacco',
  p: ['The leaflet gives travellers from outside the EU 200 cigarettes, or 50 cigars, or 100 cigarillos (3 g or less each), or 250 g of roll-your-own or pipe tobacco, or a proportional mix. It also allows up to 10 ml of nicotine liquid for e-cigarettes. Nobody under 18 may bring in tobacco or nicotine liquid.',
    'Even if you pay duty, you may not bring more than the allowance when the packs lack the health warnings required in Finnish and Swedish. Snus, chewing tobacco and snuff are limited to 1,000 g per day and only for your own use. Arriving from outside the EEA by means other than air, visitors living outside the EEA can bring tobacco only on stays over 72 hours. The leaflet is from 2021.'],
  faq: [['How many cigarettes can I bring into Finland from outside the EU?', 'Finnish Customs’ 2021 leaflet allows 200 cigarettes, or an equivalent amount of other tobacco products, tax-free for travellers from outside the EU. Check tulli.fi for current rules.']],
  src: FSRC };
fs.writeFileSync('country_unique.json', JSON.stringify(d));
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const NA = 'none needed: step 2a answered the question';
const AU = 'tried 2026-11-16: abf.gov.au duty-free pages: HTTP 403 for WebFetch, not read; not retried by other means';
const FIo = 'tried 2026-11-16: tulli.fi traveller-import pages: HTTP 403, not read';
const AUr = 'read: Sydney Airport duty-free allowances page (airport operator)';
const FIr = 'read: Finnish Customs leaflet 6/2021 as hosted copy on expat-finland.com (PDF)';
for (const [k, o, r] of [['country/australia/alcohol', AU, AUr], ['country/australia/tobacco', AU, AUr], ['country/finland/alcohol', FIo, FIr], ['country/finland/tobacco', FIo, FIr]])
  log[k] = { official: [o], reliable: [r], other: [NA], date: '2026-11-16' };
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('ok');
