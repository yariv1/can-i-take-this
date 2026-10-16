// "Duty-Free Allowance From the EU to the UK (2026)": UK as destination, travellers coming from an EU country.
// Sources (all three read in full on 15 October 2026, none shows an update date):
//   https://www.gov.uk/duty-free-goods  (overview: go over = tax and duty on ALL goods in that category; declare; seizure; no personal allowance for goods to sell)
//   https://www.gov.uk/duty-free-goods/arriving-in-Great-Britain  (one set of limits for Great Britain)
//   https://www.gov.uk/duty-free-goods/arriving-in-northern-ireland  (no limits from EU countries; limits from outside the EU)
// Only what these pages state. No statement about how the rules differ from the EU's own rules or from other origins.
const BAGD = require('./baggage_detail.js');
const { CSS, table, esc } = BAGD;
const READ = '15 October 2026';
const URL = '/country/united-kingdom/duty-free-from-eu/';
const GB = 'https://www.gov.uk/duty-free-goods/arriving-in-Great-Britain';
const NI = 'https://www.gov.uk/duty-free-goods/arriving-in-northern-ireland';
const OV = 'https://www.gov.uk/duty-free-goods';

function page() {
  const lead = 'Flying from an EU country into England, Scotland or Wales, GOV.UK lists one set of limits for Great Britain: 42 litres of beer and cider, 18 litres of wine, 4 litres of spirits over 22% and 200 cigarettes per person, and other goods up to £390. Go over one category and you pay tax and duty on all the goods in that category.';
  const sections =
    '<section class="bd-sec"><h2>🍾 Alcohol: Great Britain</h2><p>Per person, from GOV.UK "Arriving in Great Britain". No personal allowance if you are under 17.</p>' +
    table({ head: ['Drink', 'Allowance'], rows: [['Beer and cider', '42 litres'], ['Wine (still or sparkling)', '18 litres'], ['Spirits and other alcoholic products over 22% ABV', '4 litres'], ['Other alcoholic products up to 22% ABV (not beer, cider or wine)', '9 litres']] }) + '</section>' +
    '<section class="bd-sec"><h2>🚬 Tobacco and other goods: Great Britain</h2><p>Tobacco: choose one option, or split the allowance.</p>' +
    table({ head: ['Item', 'Allowance'], rows: [['Cigarettes', '200'], ['Cigarillos', '100'], ['Cigars', '50'], ['Loose tobacco', '250 g'], ['Heated tobacco sticks', '200'], ['Vaping liquid', 'Up to 50 ml'], ['Other goods (gifts, souvenirs, perfume)', 'Worth up to £390, or £270 by private plane or boat']] }) + '</section>' +
    '<section class="bd-sec"><h2>🇬🇧 Northern Ireland</h2><p>From GOV.UK "Arriving in Northern Ireland". The rules differ from Great Britain.</p>' +
    table({ head: ['Coming from', 'Alcohol and tobacco'], rows: [
      ['An EU country', 'No limits on alcohol and tobacco. The goods must be for your own use or gifts, carried by you, with tax and duty already paid where you bought them. Vaping products are an exception.'],
      ['Outside the EU', 'Alcohol: 16 litres of beer, 4 litres of still wine, 1 litre of spirits over 22%, 2 litres of other drinks up to 22%. Tobacco: 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco, or 200 heated tobacco sticks. Other goods up to £390.']] }) + '</section>' +
    '<section class="bd-sec"><h2>⚠️ If you go over</h2><ul>' +
    '<li>You pay tax and duty on <strong>all the goods in that category</strong>, not only on the excess.</li>' +
    '<li>Your goods may be seized, and you may be fined or prosecuted if you break the rules.</li>' +
    '<li>You can declare online from 5 days (120 hours) before you arrive in the UK.</li>' +
    '<li>There are no personal allowances for goods you bring in to sell or use in your business.</li></ul></section>' +
    '<section class="bd-sec"><h2>🛍️ Bought it at the airport?</h2><p>Duty-free shop purchases come out of the same allowance. Carrying liquids onto a connecting flight is a separate security rule: see <a href="/guides/liquids/">the liquids guide</a>.</p></section>';
  const faq = [
    ['How much alcohol can I bring from the EU to the UK?', 'In Great Britain, 42 litres of beer and cider, 18 litres of wine and 4 litres of spirits over 22%, per person, according to GOV.UK. In Northern Ireland there are no limits on alcohol from EU countries.'],
    ['How many cigarettes can I bring from the EU to the UK?', 'In Great Britain, 200 cigarettes (or 100 cigarillos, 50 cigars or 250 g of tobacco), according to GOV.UK. Northern Ireland has no limit on tobacco from EU countries.'],
    ['What happens if I bring more than the allowance?', 'You pay tax and duty on all the goods in that category, and goods may be seized. You can declare online from 5 days before you arrive.'],
    ['How much can I bring in other goods?', 'Up to £390, or £270 if you arrive by private plane or boat.']
  ];
  const src = [[GB, 'GOV.UK: Duty-free goods, arriving in Great Britain'], [NI, 'GOV.UK: Duty-free goods, arriving in Northern Ireland'], [OV, 'GOV.UK: Duty-free goods overview']];
  const html = '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(lead) + '</strong></p>' + sections +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">Source: three GOV.UK pages. Read ' + READ + '; the pages show no update date. Confirm with Border Force before you travel.</p>' +
    '<div class="bd-src"><div class="h">✓ Official sources</div>' + src.map(s => '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>').join('') + '</div></div>';
  return {
    url: URL,
    ttl: 'Duty-Free Allowance From the EU to the UK (2026)',
    desc: 'Duty-free allowance from the EU to the UK: Great Britain 42 L beer, 18 L wine, 4 L spirits, 200 cigarettes, £390 goods. Northern Ireland has no limits from the EU.',
    h1: 'Duty-Free Allowance From the EU to the UK (2026)',
    head: 'Great Britain: 42 L beer, 18 L wine, 4 L spirits, 200 cigarettes.',
    lines: ['GOV.UK lists one set of limits for Great Britain.', 'Northern Ireland: no limits on alcohol and tobacco from EU countries.', 'Under 17: no personal allowance.'],
    html, faq
  };
}

// short block on the UK Duty-free and Tobacco pages pointing here
function note() {
  return '<div class="bd-wrap">' + CSS + '<section class="bd-sec"><h2>Travelling to the UK from the EU?</h2><p>See the allowance for travellers arriving from the EU, with the Great Britain and Northern Ireland rules: <a href="' + URL + '">Duty-free allowance from the EU to the UK</a>.</p></section></div>';
}

module.exports = { URL, page, note };
