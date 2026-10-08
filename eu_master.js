// Master EU pages (tobacco, alcohol, plants and seeds, cash). The 27 EU country pages for these four topics carry an identical official EU rule,
// so each of them points its canonical URL at the master page. Sources: Your Europe (last checked 21/09/2026 for alcohol/tobacco and cash,
// 23/12/2025 for plants), European Commission plant health pages, EFSA. All read 2026-10-08.
const BAGD = require('./baggage_detail.js');
const { CSS, table, esc } = BAGD;
const READ = '8 October 2026';
const EU = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'];
const CATS = ['tobacco', 'alcohol', 'plants', 'cash'];
const SEG = { tobacco: 'tobacco', alcohol: 'alcohol', plants: 'plants-seeds', cash: 'cash' };
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const url = cat => '/country/european-union/' + SEG[cat] + '/';
const isEU = cn => EU.includes(cn);
const YE = 'https://europa.eu/youreurope/citizens/travel/carry/alcohol-tobacco-cash/index_en.htm';
const YE_CASH = 'https://europa.eu/youreurope/citizens/travel/carry/carrying-cash/index_en.htm';
const YE_PLANT = 'https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_en.htm';
const EC_PLANT = 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries_en';
const EC_SEED = 'https://food.ec.europa.eu/plants/plant-reproductive-material/eu-seed-fraud-network/unsolicited-seed-packages_en';
const EFSA = 'https://www.efsa.europa.eu/en/plh4l/travelling-and-plants';

const CODE = { Austria: 'at', Belgium: 'be', Bulgaria: 'bg', Croatia: 'hr', Cyprus: 'cy', Czechia: 'cz', Denmark: 'dk', Estonia: 'ee', Finland: 'fi', France: 'fr', Germany: 'de', Greece: 'gr', Hungary: 'hu', Ireland: 'ie', Italy: 'it', Latvia: 'lv', Lithuania: 'lt', Luxembourg: 'lu', Malta: 'mt', Netherlands: 'nl', Poland: 'pl', Portugal: 'pt', Romania: 'ro', Slovakia: 'sk', Slovenia: 'si', Spain: 'es', Sweden: 'se' };
const countryLinks = cat => '<section class="bd-sec"><h2>\uD83C\uDF0D Country pages</h2><p>Every EU member state applies this rule. Open your country for its own page.</p>' + '<style>.eu-cl{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:4px 16px}.eu-cl a,.eu-cl a:visited{display:inline-flex;align-items:center;gap:9px;padding:6px 0;color:var(--accent);text-decoration:none;font-weight:500}.eu-cl a:hover{text-decoration:underline}.eu-cl .fimg{height:15px;width:22px;object-fit:cover;border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,.18);flex:none}</style>' + '<ul class="eu-cl">' +
  EU.map(c => '<li><a href="/country/' + slug(c) + '/' + SEG[cat] + '/"><img class="fimg" src="https://flagcdn.com/' + CODE[c] + '.svg" alt="" loading="lazy">' + esc(c) + '</a></li>').join('') + '</ul></section>';

function wrap(lead, sections, faq, sources, chk) {
  return '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(lead) + '</strong></p>' + sections +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">' + chk + ' Read ' + READ + '. Confirm with the customs authority of the EU country you enter before you travel.</p>' +
    '<div class="bd-src"><div class="h">🔗 Official sources</div>' + sources.map(s => '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>').join('') + '</div></div>';
}

const M = {};

M.tobacco = () => {
  const lead = 'Entering the EU from a non-EU country you can bring one of: 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of tobacco without paying VAT or excise duty. Eight member states apply the lower limit (40 cigarettes, 20 cigarillos, 10 cigars or 50 g) only to land and sea travellers, Estonia and Romania apply it to all travellers, and travellers under 17 have no duty-free tobacco allowance.';
  const sections = '<section class="bd-sec"><h2>🚬 EU tobacco allowance from outside the EU</h2><p>From the EU\'s Your Europe page "Alcohol, tobacco and excise duties" (last checked by the EU on 21 September 2026).</p>' +
    table({ head: ['Tobacco product', 'Higher limit (one of)', 'Lower limit (one of)'], rows: [['Cigarettes', '200', '40'], ['Cigarillos (cigars up to 3 g each)', '100', '20'], ['Cigars', '50', '10'], ['Smoking tobacco', '250 g', '50 g']] }) + '</section>' +
    '<section class="bd-sec"><h2>🇪🇺 Which countries apply which limit</h2>' +
    table({ head: ['Limit applied', 'Countries'], rows: [
      ['Lower limit for all travellers', 'Estonia, Romania'],
      ['Lower limit for land and sea travellers (higher limit by air)', 'Bulgaria, Croatia, Greece, Hungary, Latvia, Lithuania, Poland, Slovakia'],
      ['Higher limit (not listed as applying the lower limit)', 'Austria, Belgium, Cyprus, Czechia, Denmark, Finland, France, Germany, Ireland, Italy, Luxembourg, Malta, Netherlands, Portugal, Slovenia, Spain, Sweden'] ] }) +
    '<ul><li><strong>Between EU countries:</strong> the guideline levels may not be lower than 800 cigarettes, 400 cigarillos, 200 cigars or 1 kg of tobacco.</li><li><strong>Under 17:</strong> no duty-free allowance for tobacco or alcohol.</li></ul></section>' + countryLinks('tobacco');
  const faq = [
    ['How many cigarettes can I bring into the EU?', '200 cigarettes (or 100 cigarillos, 50 cigars or 250 g of tobacco) from outside the EU; 40 where the lower limit applies (all travellers in Estonia and Romania; land and sea travellers in Bulgaria, Croatia, Greece, Hungary, Latvia, Lithuania, Poland and Slovakia).'],
    ['Which EU countries have the lower cigarette limit?', 'Estonia and Romania for all travellers; Bulgaria, Croatia, Greece, Hungary, Latvia, Lithuania, Poland and Slovakia for land and sea travellers only.'],
    ['How many cigarettes can I carry between EU countries?', 'The EU guideline levels may not be lower than 800 cigarettes, 400 cigarillos, 200 cigars or 1 kg of tobacco.'],
    ['Can under-17s bring cigarettes into the EU duty free?', 'No. Your Europe says travellers under 17 are not entitled to the tobacco or alcohol allowance.']
  ];
  return { ttl: 'EU Tobacco Allowance 2026: Cigarettes You Can Bring (All 27 Countries)', desc: 'EU duty-free tobacco allowance from outside the EU: 200 cigarettes, 100 cigarillos, 50 cigars or 250 g; 40 cigarettes in Estonia, Romania and by land or sea in 8 more.', h1: 'How many cigarettes can I bring into the EU? (2026)', head: '200 cigarettes from outside the EU; 40 in some countries.', lines: ['Higher limit: 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco.', 'Lower limit: 40, 20, 10 or 50 g, for all travellers in Estonia and Romania and for land and sea travellers in eight other states.', 'Travellers under 17 have no duty-free tobacco allowance.'], html: wrap(lead, sections, faq, [[YE, 'Your Europe &mdash; Alcohol, tobacco and excise duties']], 'Source: the EU\'s Your Europe page.'), faq };
};

M.alcohol = () => {
  const lead = 'Entering the EU from a non-EU country you can bring 4 litres of still wine and 16 litres of beer, plus one of: 1 litre of spirits over 22% vol., 1 litre of undenatured ethyl alcohol of 80% vol. or over, or 2 litres of fortified or sparkling wine, without paying VAT or excise duty. Travellers under 17 have no duty-free alcohol allowance.';
  const sections = '<section class="bd-sec"><h2>🍾 EU alcohol allowance from outside the EU</h2><p>From the EU\'s Your Europe page "Alcohol, tobacco and excise duties" (last checked by the EU on 21 September 2026).</p>' +
    table({ head: ['Drink', 'Allowance'], rows: [['Still wine', '4 litres'], ['Beer', '16 litres'], ['Plus one of: spirits over 22% vol. (such as vodka or gin)', '1 litre'], ['Or: undenatured ethyl alcohol of 80% vol. or over', '1 litre'], ['Or: fortified wine (such as sherry or port) or sparkling wine', '2 litres']] }) + '</section>' +
    '<section class="bd-sec"><h2>🚆 Travelling between EU countries</h2><p>The EU guideline levels may not be lower than:</p>' + table({ head: ['Drink', 'Guideline level'], rows: [['Spirits', '10 litres'], ['Fortified wine', '20 litres'], ['Wine', '90 litres (of which only 60 litres can be sparkling)'], ['Beer', '110 litres']] }) + '</section>' + countryLinks('alcohol');
  const faq = [
    ['How much alcohol can I bring into the EU?', '4 litres of still wine and 16 litres of beer, plus 1 litre of spirits over 22% vol. or 2 litres of fortified or sparkling wine, from outside the EU.'],
    ['How much spirits can I bring into the EU duty free?', '1 litre of spirits over 22% vol. (such as vodka or gin), or 1 litre of undenatured ethyl alcohol of 80% vol. or over.'],
    ['How much alcohol can I carry between EU countries?', 'The EU guideline levels may not be lower than 10 litres of spirits, 20 litres of fortified wine, 90 litres of wine (60 litres sparkling at most) and 110 litres of beer.'],
    ['Can under-17s bring alcohol into the EU duty free?', 'No. Your Europe says travellers under 17 are not entitled to the tobacco or alcohol allowance.']
  ];
  return { ttl: 'EU Alcohol Allowance 2026: Wine, Beer, Spirits (All 27 Countries)', desc: 'EU duty-free alcohol allowance from outside the EU: 4 litres of still wine, 16 litres of beer and 1 litre of spirits or 2 litres of fortified or sparkling wine.', h1: 'How much alcohol can I bring into the EU? (2026)', head: '4 L wine and 16 L beer, plus 1 L spirits or 2 L fortified wine.', lines: ['4 litres of still wine and 16 litres of beer.', 'Plus 1 litre of spirits over 22% vol. (or 1 litre of 80% vol. undenatured ethyl alcohol), or 2 litres of fortified or sparkling wine.', 'Travellers under 17 have no duty-free alcohol allowance.'], html: wrap(lead, sections, faq, [[YE, 'Your Europe &mdash; Alcohol, tobacco and excise duties']], 'Source: the EU\'s Your Europe page.'), faq };
};

M.plants = () => {
  const lead = 'Entering the EU from a non-EU country, the European Commission says it is prohibited to bring plants, plant products and other objects in personal luggage unless a phytosanitary (plant health) certificate accompanies them: that includes plants to be planted, fruits, vegetables and cut flowers, and seeds for non-commercial use are only allowed with a phytosanitary certificate. No certificate is needed for fruits of pineapple, coconut, durian, banana or date. Between EU countries the rules cover plants and plant products grown in an EU country and free from pests or disease.';
  const rows = [
    ['Plants for planting, cut flowers, other plants and plant products', 'Prohibited in personal luggage unless a phytosanitary certificate accompanies them'],
    ['Seeds for non-commercial use', 'Only allowed with a phytosanitary certificate (a permit from the EU or a certificate issued by the country of origin)'],
    ['Fruit and vegetables', 'Phytosanitary certificate needed, except fruits of pineapple, coconut, durian, banana or date; Your Europe also says you can bring a limited quantity of fruit and vegetables, without giving an amount'],
    ['Between EU countries', 'Plants and plant products grown in an EU country, free from pests or disease'],
    ['Who issues the certificate', 'The plant protection authority of the country you bring the plants from']
  ];
  const sections = '<section class="bd-sec"><h2>🌱 Plants and seeds: what the EU says</h2><p>From the European Commission, Your Europe (last checked 23/12/2025) and EFSA (reviewed 17 July 2025).</p>' + table({ head: ['Item', 'Official EU rule'], rows }) +
    '<ul><li><strong>Bulbs and cuttings:</strong> the pages we read do not list bulbs or cuttings separately; EFSA treats parts of a plant (leaves, twigs, roots) as plants and plant products.</li><li><strong>Posted seeds:</strong> the Commission warns that seed packages ordered online and sent by post were misdeclared and lacked the required certificate.</li><li><strong>Leaving the EU:</strong> EFSA advises leaving plants and plant products behind.</li><li><strong>Exact list:</strong> Annex XI of Implementing Regulation (EU) 2019/2072.</li></ul></section>' + countryLinks('plants');
  const faq = [
    ['Can I bring seeds into the EU?', 'From a non-EU country, seeds for non-commercial purposes are only allowed into the EU when accompanied by a phytosanitary certificate, according to the European Commission.'],
    ['Can I bring plants into the EU in my luggage?', 'Not unless a phytosanitary certificate accompanies them: the Commission says it is prohibited to introduce plants, plant products and other objects without one, including plants to be planted, fruits, vegetables and cut flowers.'],
    ['Can I bring plants or seeds between EU countries?', 'Your Europe covers plants and plant products, such as cut flowers, fruit or vegetables, grown in an EU country and free from pests or disease; localised pest outbreaks can restrict the type and amount.'],
    ['Which fruit does not need a certificate to enter the EU?', 'Fruits of pineapple, coconut, durian, banana or date need no phytosanitary certificate, according to the Commission.']
  ];
  return { ttl: 'EU Plants & Seeds Rules 2026: Certificate Required (All 27 Countries)', desc: 'Can you bring seeds or plants into the EU? From outside the EU a phytosanitary certificate is required; fruits like banana or pineapple are exempt. All 27 countries.', h1: 'Can I bring plants or seeds into the EU? (2026)', head: 'Plants and seeds need a phytosanitary certificate.', lines: ['From outside the EU, plants, plant products and seeds need a phytosanitary certificate.', 'Exception: fruits of pineapple, coconut, durian, banana or date.', 'Between EU countries: plants grown in the EU and free from pests or disease.'], html: wrap(lead, sections, faq, [[EC_PLANT, 'European Commission &mdash; Trade in plants and plant products from non-EU countries'], [YE_PLANT, 'Your Europe &mdash; Taking animal products, food or plants with you in the EU'], [EC_SEED, 'European Commission &mdash; Seeds and phytosanitary certificates'], [EFSA, 'EFSA &mdash; Travelling and plants']], 'Source: European Commission, Your Europe and EFSA.'), faq };
};

M.cash = () => {
  const lead = 'You must declare cash of €10,000 or more (or the equivalent in other currencies) to customs when you enter or leave the EU, using the EU cash declaration form. Failing to declare, or declaring incorrectly or incompletely, leads to penalties, and there are no EU-wide rules on cash when travelling between EU countries.';
  const sections = '<section class="bd-sec"><h2>💶 EU cash declaration rule</h2><p>From the EU\'s Your Europe page on carrying cash (last checked by the EU on 21 September 2026).</p>' +
    table({ head: ['Question', 'EU rule'], rows: [
      ['Threshold', '€10,000 in cash, or its equivalent in other currencies, when entering or leaving the EU'],
      ['What counts as cash', 'Banknotes and coins (including currency no longer in circulation but accepted for exchange by banks); bearer negotiable instruments such as traveller\'s cheques and cheques, promissory notes or money orders signed but without a named beneficiary; coins with a gold content of at least 90%; bullion with a gold content of at least 99.5%'],
      ['How to declare', 'To the customs authorities of the EU country you enter or leave, using the EU cash declaration form'],
      ['Cash sent by post, freight or courier', 'A disclosure declaration within 30 days of a request from customs'],
      ['If you do not declare', 'Penalties for a missing, incorrect or incomplete declaration; customs may also act on smaller amounts if there are indications the cash is linked to criminal activity'],
      ['Between EU countries', 'No EU-wide rules: check the customs authorities of the departure, arrival and transit countries'] ] }) + '</section>' + countryLinks('cash');
  const faq = [
    ['How much cash can I bring into the EU?', 'There is no limit on how much you can carry, but you must declare €10,000 or more (or the equivalent) when entering or leaving the EU.'],
    ['What counts as cash when entering the EU?', 'Banknotes and coins, bearer negotiable instruments such as traveller\'s cheques, coins with a gold content of at least 90% and bullion with a gold content of at least 99.5%.'],
    ['How do I declare cash at EU customs?', 'To the customs authorities of the EU country you enter or leave, using the EU cash declaration form.'],
    ['Can I travel with more than €10,000 between EU countries?', 'There are no EU-wide rules on travelling with cash between EU countries, so check with the customs authorities of the departure, arrival and transit countries.']
  ];
  return { ttl: 'EU Cash Limit 2026: Declare €10,000 or More (All 27 Countries)', desc: 'EU cash declaration rule: declare €10,000 or more in cash (or the equivalent) when entering or leaving the EU, using the EU cash declaration form.', h1: 'How much cash can I bring into the EU? (2026)', head: 'Declare €10,000 or more when entering or leaving the EU.', lines: ['Declare cash of €10,000 or more (or the equivalent) to customs.', 'Cash includes banknotes, traveller\'s cheques, gold coins and bullion above the stated purity.', 'No EU-wide rules for travel between EU countries.'], html: wrap(lead, sections, faq, [[YE_CASH, 'Your Europe &mdash; Rules for taking cash in and out of the EU']], 'Source: the EU\'s Your Europe page.'), faq };
};

// short block on each EU country page pointing at the master page
function note(cn, cat) {
  const name = { tobacco: 'tobacco allowance', alcohol: 'alcohol allowance', plants: 'plant and seed rule', cash: 'cash declaration rule' }[cat];
  return '<div class="bd-wrap">' + CSS + '<section class="bd-sec"><h2>🇪🇺 The EU rule that ' + esc(cn) + ' applies</h2><p>' + esc(cn) + ' applies the EU-wide ' + name + '. The full official rule, with all 27 member states, is on the main page: <a href="' + url(cat) + '">EU ' + name + '</a>.</p></section></div>';
}

function master(cat) { const r = M[cat](); r.url = url(cat); return r; }

module.exports = { CATS, url, isEU, master, note };
