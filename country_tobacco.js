// EU country tobacco pages: official allowances from the EU's "Your Europe" page (Alcohol, tobacco and excise duties; last checked by the EU 21/09/2026)
// and Council Directive 2007/74/EC. Entering the EU from a non-EU country: higher limit 200 cigarettes / 100 cigarillos / 50 cigars / 250 g tobacco;
// lower limit 40 / 20 / 10 / 50 g. The page names the member states that apply the lower limit.
const BAGD = require('./baggage_detail.js');
const { CSS, table, esc } = BAGD;
const READ = '8 October 2026';
const SRC = 'https://europa.eu/youreurope/citizens/travel/carry/alcohol-tobacco-cash/index_en.htm';
const LAND_SEA = ['Bulgaria', 'Croatia', 'Greece', 'Hungary', 'Latvia', 'Lithuania', 'Poland', 'Slovakia'];
const ALL_LOWER = ['Estonia', 'Romania'];
const EU = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'];

const HIGH = ['200 cigarettes', '100 cigarillos', '50 cigars', '250 g of tobacco'];
const LOW = ['40 cigarettes', '20 cigarillos', '10 cigars', '50 g of tobacco'];

function kind(cn) { return ALL_LOWER.includes(cn) ? 'lower' : LAND_SEA.includes(cn) ? 'landsea' : 'higher'; }
function isEU(cn) { return EU.includes(cn); }

// CUST_DATA entry: [head, lines, status]
function custEntry(cn) {
  const k = kind(cn);
  const guide = 'Between EU countries the guideline levels may not be lower than 800 cigarettes, 400 cigarillos, 200 cigars or 1 kg of tobacco.';
  const age = 'Travellers under 17 have no duty-free tobacco allowance.';
  if (k === 'higher') return ['Within your allowance: 200 cigarettes from outside the EU.', ['Entering ' + cn + ' from a non-EU country: 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco.', age, guide], 'warn'];
  if (k === 'landsea') return ['200 cigarettes by air, 40 by land or sea (from outside the EU).', ['Entering ' + cn + ' from a non-EU country by air: 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco.', 'By land or sea the lower limit applies: 40 cigarettes, or 20 cigarillos, or 10 cigars, or 50 g of tobacco.', age, guide], 'warn'];
  return ['40 cigarettes from outside the EU (lower limit for all travellers).', ['Entering ' + cn + ' from a non-EU country the lower limit applies to all travellers: 40 cigarettes, or 20 cigarillos, or 10 cigars, or 50 g of tobacco.', age, guide], 'warn'];
}

function build(c) {
  const cn = c.name; if (!isEU(cn)) return null;
  const k = kind(cn);
  const rows = [['Cigarettes', k === 'lower' ? '40' : '200', '40'], ['Cigarillos (cigars up to 3 g each)', k === 'lower' ? '20' : '100', '20'], ['Cigars', k === 'lower' ? '10' : '50', '10'], ['Smoking tobacco', k === 'lower' ? '50 g' : '250 g', '50 g']];
  let tbl, lead, ttl, desc, faq;
  if (k === 'higher') {
    tbl = { head: ['Tobacco product', 'Allowance entering ' + cn + ' from outside the EU (one of)'], rows: rows.map(r => [r[0], r[1]]) };
    lead = 'Entering ' + cn + ' from a non-EU country you can bring one of: 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of tobacco without paying VAT or excise duty. The EU\'s Your Europe page does not list ' + cn + ' among the countries that apply the lower limit, so the higher limit is the one that applies. Travellers under 17 have no duty-free tobacco allowance.';
    ttl = cn + ' Duty-Free Tobacco Allowance 2026: 200 Cigarettes';
    desc = 'How many cigarettes can you bring into ' + cn + ' from outside the EU? 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of tobacco. Under-17s get none.';
  } else if (k === 'landsea') {
    tbl = { head: ['Tobacco product', 'By air from outside the EU (one of)', 'By land or sea from outside the EU (one of)'], rows: rows.map(r => [r[0], r[1], r[2]]) };
    lead = 'Your Europe lists ' + cn + ' among the EU countries that apply the lower tobacco limit only to land and sea travellers. Entering ' + cn + ' from outside the EU by air you can bring one of 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of tobacco; by land or sea the limit is one of 40 cigarettes, 20 cigarillos, 10 cigars or 50 g of tobacco. Travellers under 17 have no duty-free tobacco allowance.';
    ttl = cn + ' Tobacco Allowance 2026: 200 by Air, 40 by Land/Sea';
    desc = cn + ' tobacco allowance from outside the EU: 200 cigarettes by air, 40 cigarettes by land or sea (EU Your Europe). Under-17s get no allowance.';
  } else {
    tbl = { head: ['Tobacco product', 'Allowance entering ' + cn + ' from outside the EU, all travellers (one of)'], rows: rows.map(r => [r[0], r[1]]) };
    lead = 'Your Europe lists ' + cn + ' among the EU countries that apply the lower tobacco limit to all travellers. Entering ' + cn + ' from outside the EU you can bring one of: 40 cigarettes, 20 cigarillos, 10 cigars or 50 g of tobacco without paying VAT or excise duty. Travellers under 17 have no duty-free tobacco allowance.';
    ttl = cn + ' Duty-Free Tobacco Allowance 2026: 40 Cigarettes';
    desc = 'How many cigarettes can you bring into ' + cn + ' from outside the EU? Only 40 cigarettes, 20 cigarillos, 10 cigars or 50 g of tobacco (lower EU limit, all travellers).';
  }
  faq = [
    ['How many cigarettes can I bring into ' + cn + '?', k === 'higher' ? 'From outside the EU, 200 cigarettes (or 100 cigarillos, 50 cigars or 250 g of tobacco). From another EU country the guideline levels may not be lower than 800 cigarettes.' : k === 'landsea' ? 'From outside the EU, 200 cigarettes by air and 40 by land or sea. From another EU country the guideline levels may not be lower than 800 cigarettes.' : 'From outside the EU, 40 cigarettes (all travellers). From another EU country the guideline levels may not be lower than 800 cigarettes.'],
    ['How much tobacco can I bring into ' + cn + '?', k === 'lower' ? '50 g of smoking tobacco from outside the EU.' : k === 'landsea' ? '250 g of smoking tobacco by air and 50 g by land or sea, from outside the EU.' : '250 g of smoking tobacco from outside the EU.'],
    ['Can I bring cigarettes into ' + cn + ' if I am under 17?', 'No duty-free allowance: Your Europe says travellers under 17 are not entitled to the tobacco or alcohol allowance.'],
    ['How many cigarettes can I bring into ' + cn + ' from another EU country?', 'The EU\'s guideline levels may not be lower than 800 cigarettes, 400 cigarillos, 200 cigars or 1 kg of tobacco for travel between EU countries.']
  ];
  const html = '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(lead) + '</strong></p>' +
    '<section class="bd-sec"><h2>🚬 Tobacco allowance for ' + esc(cn) + '</h2><p>From the EU\'s Your Europe page "Alcohol, tobacco and excise duties" (last checked by the EU on 21 September 2026).</p>' + table(tbl) +
    '<ul><li><strong>Mixing products:</strong> the allowances are listed as alternatives ("or"); ask customs before combining products.</li><li><strong>Travel between EU countries:</strong> the EU guideline levels may not be lower than 800 cigarettes, 400 cigarillos (cigars up to 3 g each), 200 cigars or 1 kg of tobacco.</li><li><strong>Under 17:</strong> no duty-free tobacco or alcohol allowance.</li></ul></section>' +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">Read ' + READ + '. Allowances can change: confirm with the customs authority of ' + esc(cn) + ' before you travel.</p>' +
    '<div class="bd-src"><div class="h">🔗 Official source</div><a href="' + SRC + '" target="_blank" rel="noopener noreferrer">Your Europe: Alcohol, tobacco and excise duties</a></div></div>';
  return { ttl, desc, html, faq };
}

module.exports = { build, custEntry, isEU };
