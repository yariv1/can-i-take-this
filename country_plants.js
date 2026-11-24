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

const DATA = Object.assign({}, require('./country_plants_data.js'), require('fs').existsSync(__dirname + '/plants_extra.json') ? JSON.parse(require('fs').readFileSync(__dirname + '/plants_extra.json', 'utf8')) : {});

function buildCountry(cn, D) {
  const faq = D.faq;
  const html = '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(D.lead) + '</strong></p>' +
    '<section class="bd-sec"><h2>\uD83C\uDF31 Plants and seeds: what ' + (D.unofficial ? 'an unofficial source' : 'the official source') + ' says for ' + esc(cn) + '</h2><p>' + esc(D.date) + '.</p>' + table({ head: ['Item', (D.unofficial ? 'Rule in ' + cn + ' (unofficial source)' : 'Official rule in ' + cn)], rows: D.rows }) +
    '<ul>' + D.notes.map(x => '<li>' + x + '</li>').join('') + '</ul></section>' +
    '<section class="bd-faq"><h2>\u2753 Quick answers</h2>' + faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">Read ' + ((/\d{1,2} [A-Z][a-z]+ 20\d\d/.exec(D.date || '') || [READ])[0]) + '. Rules change: confirm with the plant health or customs authority of ' + esc(cn) + ' before you bring plants or seeds.</p>' +
    (D.unofficial ? '<div class="bd-src"><div class="h un">⚠ Unofficial source' + (D.src.length > 1 ? 's' : '') + '</div>' : '<div class="bd-src"><div class="h">✓ Official source' + (D.src.length > 1 ? 's' : '') + '</div>') + D.src.map(x => '<a href="' + x[0] + '" target="_blank" rel="noopener noreferrer">' + x[1] + '</a>').join('') + (D.unofficial ? '<p class="bd-unr">' + esc(cn) + '’s own rule could not be read, so the rules above come from a reliable named source that is not officially from ' + esc(cn) + '. It does not mean they are wrong; to be more sure, check the link above.</p>' : '') + '</div></div>';
  return { ttl: D.ttl, desc: D.desc, html, faq: D.keepSchema ? null : faq, card: D.card };
}

function build(c) {
  const cn = c.name;
  if (!EU.includes(cn)) return DATA[cn] ? buildCountry(cn, DATA[cn]) : null;
  const lead = 'A phytosanitary certificate is needed for plants, plant products and seeds entering ' + cn + ' from outside the EU.';
  const rows = [
    ['Plants for planting, cut flowers, other plants and plant products', 'Prohibited in personal luggage unless a phytosanitary certificate accompanies them'],
    ['Seeds for non-commercial use', 'Only with a phytosanitary certificate from the country of origin or an EU permit'],
    ['Fruit and vegetables', 'Certificate needed, except pineapple, coconut, durian, banana and date; Your Europe mentions a limited quantity but gives no amount']
  ];
  const faq = [
    ['Can I bring seeds into ' + cn + '?', 'Only with a phytosanitary certificate, says the European Commission.'],
    ['Can I bring plants into ' + cn + ' from outside the EU?', 'Not without the certificate, says the Commission, whether they are for planting or are fruit, vegetables or cut flowers.'],
    ['Do I need a certificate for fruit in ' + cn + '?', 'Yes, apart from the five exempt tropical fruits in the table.']
  ];
  const html = '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(lead) + '</strong></p>' +
    '<section class="bd-sec"><h2>🌱 Plants and seeds: what the EU says for ' + esc(cn) + '</h2><p>' + esc(cn) + ' applies the EU plant-health rules.</p>' + table({ head: ['Item', 'Official EU rule'], rows }) +
    '<ul><li>The certificate comes from the plant protection authority of the country you bring the plants from, and it also applies to bulbs, cuttings and seeds sent by post.</li></ul></section>' +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">Read ' + READ + '. Ask the plant health or customs authority of ' + esc(cn) + ' before you bring plants or seeds.</p>' +
    '<div class="bd-src"><div class="h">✓ Official sources</div>' + SOURCES.map(s => '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>').join('') + '</div></div>';
  const ttl = cn + ' Plants & Seeds 2026: Certificate Required';
  const desc = 'Can you bring seeds or plants into ' + cn + '? From outside the EU you need a phytosanitary certificate; fruits like banana or pineapple are exempt.';
  return { ttl, desc, html, faq };
}

module.exports = { build };
