// EU country plants & seeds pages: official EU wording only.
// Sources read 2026-10-08: European Commission "Trade in plants & plant products from non-EU countries" (food.ec.europa.eu),
// Your Europe "Taking animal products, food or plants with you in the EU" (last checked 23/12/2025),
// Commission "Unsolicited seed packages" (EU seed fraud network), EFSA "Travelling and plants" (reviewed 17 July 2025).
const BAGD = require('./baggage_detail.js');
const { CSS, table, esc } = BAGD;
const READ = '8 October 2026';
const EU = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'];
const SOURCES = [
  ['https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries_en', 'European Commission &mdash; Trade in plants and plant products from non-EU countries'],
  ['https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_en.htm', 'Your Europe &mdash; Taking animal products, food or plants with you in the EU'],
  ['https://food.ec.europa.eu/plants/plant-reproductive-material/eu-seed-fraud-network/unsolicited-seed-packages_en', 'European Commission &mdash; Seeds and phytosanitary certificates'],
  ['https://www.efsa.europa.eu/en/plh4l/travelling-and-plants', 'EFSA &mdash; Travelling and plants']
];

function build(c) {
  const cn = c.name; if (!EU.includes(cn)) return null;
  const lead = 'Entering ' + cn + ' from a non-EU country, the European Commission says it is prohibited to bring plants, plant products and other objects in personal luggage unless a phytosanitary (plant health) certificate accompanies them: that includes plants to be planted, fruits, vegetables and cut flowers, and seeds for non-commercial use are only allowed with a phytosanitary certificate. The Commission lists one exception: no certificate is needed for fruits of pineapple, coconut, durian, banana or date. Between EU countries the rules cover plants and plant products grown in an EU country and free from pests or disease.';
  const rows = [
    ['Plants for planting, cut flowers, other plants and plant products', 'Prohibited in personal luggage unless a phytosanitary certificate accompanies them'],
    ['Seeds for non-commercial use', 'Only allowed with a phytosanitary certificate (a permit from the EU or a certificate issued by the country of origin)'],
    ['Fruit and vegetables', 'Phytosanitary certificate needed, except fruits of pineapple, coconut, durian, banana or date; Your Europe also says you can bring a limited quantity of fruit and vegetables, without giving an amount'],
    ['Between EU countries', 'Plants and plant products grown in an EU country, free from pests or disease'],
    ['Who issues the certificate', 'The plant protection authority of the country you bring the plants from']
  ];
  const faq = [
    ['Can I bring seeds into ' + cn + '?', 'From a non-EU country, seeds for non-commercial purposes are only allowed into the EU when accompanied by a phytosanitary certificate, according to the European Commission.'],
    ['Can I bring plants into ' + cn + ' from outside the EU?', 'Not in your luggage unless a phytosanitary certificate accompanies them: the Commission says it is prohibited to introduce plants, plant products and other objects without one, including plants to be planted, fruits, vegetables and cut flowers.'],
    ['Can I bring plants or seeds into ' + cn + ' from another EU country?', 'Your Europe covers plants and plant products, such as cut flowers, fruit or vegetables, as long as they have been grown in an EU country and are free from pests or disease; localised pest outbreaks can restrict the type and amount.'],
    ['Do I need a certificate for fruit in ' + cn + '?', 'From outside the EU, fruits of pineapple, coconut, durian, banana or date need no phytosanitary certificate. Other fruit does, although Your Europe also says you can bring a limited quantity of fruit and vegetables and does not state an amount.'],
    ['What does EFSA advise travellers about plants?', 'EFSA advises that all plants and plant products, even cut flowers, must have a phytosanitary certificate to legally enter the EU, and that travellers leaving the EU should leave plants and plant products behind.']
  ];
  const html = '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(lead) + '</strong></p>' +
    '<section class="bd-sec"><h2>🌱 Plants and seeds: what the EU says for ' + esc(cn) + '</h2><p>' + esc(cn) + ' applies the EU plant-health rules. These are the official statements.</p>' + table({ head: ['Item', 'Official EU rule'], rows }) +
    '<ul><li><strong>Bulbs and cuttings:</strong> the pages we read do not list bulbs or cuttings separately; EFSA treats parts of a plant (leaves, twigs, roots) as plants and plant products.</li><li><strong>Posted seeds:</strong> the Commission warns that seed packages ordered online and sent by post were misdeclared and lacked the required certificate.</li><li><strong>Exact list:</strong> the Commission refers to Annex XI of Implementing Regulation (EU) 2019/2072 for the full list of covered commodities.</li></ul></section>' +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">Read ' + READ + '. This is the EU-wide rule that ' + esc(cn) + ' applies; ask the plant health or customs authority of ' + esc(cn) + ' before you bring plants or seeds.</p>' +
    '<div class="bd-src"><div class="h">🔗 Official sources</div>' + SOURCES.map(s => '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>').join('') + '</div></div>';
  const ttl = cn + ' Plants & Seeds 2026: Certificate Required';
  const desc = 'Can you bring seeds or plants into ' + cn + '? From outside the EU you need a phytosanitary certificate; fruits like banana or pineapple are exempt.';
  return { ttl, desc, html, faq };
}

module.exports = { build };
