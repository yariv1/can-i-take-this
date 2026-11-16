const fs = require('fs');
const d = JSON.parse(fs.readFileSync('country_unique.json', 'utf8'));
d.alcohol = d.alcohol || {}; d.tobacco = d.tobacco || {};
const PT = 'https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Guia_viajantes.pdf';
d.alcohol.portugal = { h: 'What the Portuguese tax authority adds on alcohol',
  p: ['The Autoridade Tributária e Aduaneira travellers guide (dated February 2026) sets the allowance for travellers from non-EU countries at 1 litre of spirits or 2 litres of intermediate products (fortified wine, for example), plus 4 litres of still table wine and 16 litres of beer. It says the quantities can be taken as a proportional assortment of these products.',
    'The same guide says travellers under 17 coming from non-EU countries get no allowance for tobacco products or alcoholic drinks. Amounts above the allowance are charged VAT and excise duty. The guide gives separate, higher figures for travellers coming from other EU member states, which this page does not repeat.'],
  src: 'Source read 16 November 2026: Autoridade Tributária e Aduaneira (portaldasfinancas.gov.pt), Guia para Viajantes, February 2026 (PDF, in Portuguese).',
  link: [PT, 'Portuguese Tax and Customs Authority: travellers guide (Guia para Viajantes)'] };
d.tobacco.portugal = { h: 'What the Portuguese tax authority adds on tobacco',
  p: ['The Autoridade Tributária e Aduaneira travellers guide (February 2026) gives travellers from non-EU countries 200 cigarettes, or 100 cigarillos (cigars of 3 g or less each), or 50 cigars, or 250 g of smoking tobacco, or a proportional mix of these products.',
    'The guide also lists separate duty-free quantities for snuff, chewing tobacco, heated tobacco, e-cigarette liquid and nicotine pouches; this page does not quote them because the PDF table is hard to read in text form, so check the guide itself. Travellers under 17 from non-EU countries get no tobacco or alcohol allowance.'],
  faq: [['How many cigarettes can I bring into Portugal from outside the EU?', 'The February 2026 guide from the Portuguese tax and customs authority allows 200 cigarettes, or an equivalent amount of other tobacco products, for travellers from non-EU countries.'], ['Can a 16-year-old bring tobacco into Portugal?', 'No. The guide says travellers under 17 from non-EU countries get no allowance for tobacco products or alcoholic drinks.']],
  src: 'Source read 16 November 2026: Autoridade Tributária e Aduaneira (portaldasfinancas.gov.pt), Guia para Viajantes, February 2026 (PDF, in Portuguese).' };
d.alcohol.spain = { h: 'What the Spanish tax agency adds on alcohol',
  p: ['The Agencia Tributaria leaflet for travellers arriving from outside the EU allows 1 litre of alcohol and alcoholic drinks above 22% alcohol by volume (or undenatured ethyl alcohol of 80% or more), or 2 litres of drinks of 22% or less, plus 4 litres of still wine and 16 litres of beer, per person.',
    'The leaflet says travellers under 17 cannot use these allowances. It also warns that the figures are European Union rules, so a traveller going on to another country should check that country’s own limits. The leaflet separately covers tobacco, pets, cash and cultural property.'],
  src: 'Source read 16 November 2026: Agencia Tributaria (sede.agenciatributaria.gob.es), leaflet for travellers from non-EU countries (PDF, English and Spanish).',
  link: ['https://sede.agenciatributaria.gob.es/static_files/AEAT/Aduanas/Contenidos_Privados/Folletos/Folleto_viaj_noUE_ing.pdf', 'Spanish Tax Agency: leaflet for travellers from non-EU countries'] };
d.alcohol.france = { h: 'What French Customs adds on alcohol',
  p: ['The French customs page for goods brought back from outside the EU gives 4 litres of still wine and 16 litres of beer, plus either 1 litre of drinks above 22% or 2 litres of drinks of 22% or less. It says the allowances can be combined proportionally within one category of goods.',
    'People under 17 cannot import tobacco or alcohol duty-free. The separate value allowance is 430 euros for travellers of 15 or over arriving by air or sea, and the value of goods under quantity limits is not counted in it. The page shows no update date; it refers to a customs circular of 28 April 2023.'],
  src: 'Source read 16 November 2026: French Customs (douane.gouv.fr), page on tobacco, alcohol and other goods bought outside the EU (undated).',
  link: ['https://www.douane.gouv.fr/demarche/vous-rapportez-du-tabac-de-lalcool-ou-dautres-marchandises-achetees-hors-de-lunion', 'French Customs: goods bought outside the EU'] };
d.alcohol.qatar = { h: 'What Qatar’s customs authority says about alcohol',
  p: ['Qatar’s General Authority of Customs page for individuals importing goods lists alcoholic drinks among the goods whose import is restricted under the GCC Common Customs Law. It says such goods need prior permission from the competent authorities before they are imported.',
    'The page speaks about individuals who import an item personally or buy it online; it does not state a personal allowance for travellers arriving at the airport, and it shows no update date (the footer reads 2020). We therefore give no litre figure: confirm with Qatar customs or your airline before you pack alcohol for Qatar.'],
  src: 'Source read 16 November 2026: General Authority of Customs, Qatar (customs.gov.qa), Importing goods under a personal name (undated).',
  link: ['https://www.customs.gov.qa/English/PassengersIndividualsPortal/Pages/IndividualsImporting.aspx', 'Qatar General Authority of Customs: importing goods under a personal name'] };
fs.writeFileSync('country_unique.json', JSON.stringify(d));
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const T = 'tried 2026-11-16: ';
const G = (k, off, rel, oth) => { log[k] = { official: [off], reliable: [rel], other: [oth], date: '2026-11-16' }; };
const NA = 'none needed: step 1 answered the question';
for (const k of ['country/portugal/alcohol', 'country/portugal/tobacco']) G(k, 'read: ATA Guia para Viajantes, February 2026 (portaldasfinancas.gov.pt PDF)', NA, NA);
G('country/spain/alcohol', 'read: Agencia Tributaria leaflet for non-EU travellers (PDF)', NA, NA);
G('country/france/alcohol', 'read: douane.gouv.fr page on goods bought outside the EU', NA, NA);
G('country/qatar/alcohol', 'read: customs.gov.qa importing goods under a personal name (restricted, prior permission, no traveller allowance)', 'Qatar Airways restricted-items page (carriage limits only, not an import rule): not used for the import rule', 'none: no named source with a traveller allowance found');
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('ok');
