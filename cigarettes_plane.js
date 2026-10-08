// /plane/cigarettes/ : "Can you bring cigarettes on a plane?" (demand discovery 2026-10-08: Ahrefs >1000 for the head term, 8+ variants >100, no page on the site).
// Sources READ by me: TSA "What can I bring" pages for cigarettes (updated 29 Mar 2017) and cigars (updated 28 Dec 2017); 14 CFR Part 252 via the eCFR API (checked 8 Oct 2026).
// Destination limits are the verified customs figures already used in the duty-free tobacco article (BODY_TOBACCO_ARTICLE, each from the country's own customs authority).
const BAGD = require('./baggage_detail.js');
const { CSS, esc } = BAGD;

// [name for link/label, code, cigarettes, cigars and other]
const DEST = [
  ['United States', 'US', '200', '100 cigars in addition'],
  ['United Kingdom', 'GB', '200', '50 cigars (or 100 cigarillos); 250 g tobacco'],
  ['Australia', 'AU', '25 (one unopened pack)', '25 g cigars; 25 g other tobacco'],
  ['Turkey', 'TR', '600', '50 cigars (and 100 cigarillos); 250 g cut tobacco plus 250 g pipe tobacco'],
  ['Singapore', 'SG', '0 (all tobacco is taxed)', '0'],
];

const FAQ = [
  ['Can you bring cigarettes in a carry-on?', 'Yes. TSA lists cigarettes as allowed in carry-on bags, and also in checked bags. TSA adds that the final decision rests with the TSA officer at the checkpoint.'],
  ['Can you put cigarettes in a checked bag?', 'Yes. TSA lists "Checked Bags: Yes" for cigarettes, with no quantity limit on the TSA page. The quantity that matters is the customs limit of the country you land in.'],
  ['How many cigarettes can you bring on an international flight?', 'The limit is set by customs in the country you arrive in, not by the airline or by TSA. 200 cigarettes (one carton) is the common limit, but it is 600 in Turkey, 400 in China and Qatar, 25 in Australia and none in Singapore. The table on this page shows five examples.'],
  ['Can you smoke or vape on the plane?', 'No. Under US Department of Transportation rules (14 CFR Part 252), "smoking" includes electronic cigarettes, and airlines must prohibit it on scheduled passenger flights. Foreign airlines must prohibit it on flights to, from and within the United States.'],
  ['Are cigars treated differently from cigarettes?', 'Not at the TSA checkpoint: TSA also lists cigars as allowed in carry-on and checked bags. At customs, cigars have their own, separate limit per country (see the table).'],
  ['What about vapes and lighters?', 'They have their own rules. Vapes are covered on our vapes and e-cigarettes page and lighters on our lighters page, both linked below.'],
];

function build(COUNTRIES, slug) {
  const byName = {}; COUNTRIES.forEach(c => { byName[c.name] = c; });
  const rows = DEST.map(d => {
    const c = byName[d[0]];
    const flag = '<img class="pc-flag" src="https://flagcdn.com/' + d[1].toLowerCase() + '.svg" alt="" width="22" height="16" loading="lazy">';
    const name = c ? '<a href="/country/' + slug(c.name) + '/tobacco/">' + flag + ' ' + esc(d[0]) + '</a>' : flag + ' ' + esc(d[0]);
    return '<tr><th scope="row" data-label="Arriving in">' + name + '</th><td data-label="Cigarettes">' + esc(d[2]) + '</td><td data-label="Cigars and other tobacco">' + esc(d[3]) + '</td></tr>';
  }).join('');
  const dest = '<style>.pc-flag{display:inline-block;width:22px;height:16px;object-fit:cover;vertical-align:middle;margin-right:8px;border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,.18)}.pc-t th a{white-space:nowrap}.pc-tw{overflow-x:auto}</style><div class="bd-tw pc-tw"><table class="bd-t pc-t"><thead><tr><th scope="col">Arriving in</th><th scope="col">Cigarettes</th><th scope="col">Cigars and other tobacco</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
  const onboard = BAGD.table({
    head: ['Question', 'Answer', 'Source'],
    rows: [
      ['Cigarettes in carry-on', 'Allowed', 'TSA'],
      ['Cigarettes in checked bag', 'Allowed', 'TSA'],
      ['Cigars in carry-on or checked bag', 'Allowed', 'TSA'],
      ['Smoking or vaping on board', 'Banned on scheduled passenger flights; e-cigarettes count as smoking', 'US DOT, 14 CFR Part 252'],
      ['Quantity limit at the airport', 'None on the TSA page; the arrival country sets the limit at customs', 'TSA, customs authorities'],
    ],
  });
  const body = '<div class="bd-wrap">' + CSS +
    '<p class="bd-lead"><strong>Yes. TSA allows cigarettes and cigars in both carry-on and checked bags, with no quantity limit on its page. You cannot smoke on board, and the country you land in sets how many you can bring in.</strong></p>' +
    '<section class="bd-sec"><h2>🚬 What TSA says about cigarettes on a plane</h2>' + onboard +
    '<p>TSA\'s "What can I bring" page for cigarettes shows Carry On Bags: Yes and Checked Bags: Yes (page last updated 29 March 2017). Its only note is that the final decision rests with the TSA officer at the checkpoint. The page for cigars says the same (last updated 28 December 2017).</p>' +
    '<p>Smoking on board is a separate rule. US Department of Transportation regulations (14 CFR Part 252) define "smoking" to include electronic cigarettes and require US airlines to ban it on scheduled passenger flights. Foreign airlines must ban it on flights between points in the United States and between the United States and any foreign point.</p></section>' +
    '<section class="bd-sec"><h2>🌍 How many cigarettes can you bring into another country?</h2>' +
    '<p>This is where travellers get caught. The airline and TSA do not count your cigarettes, but customs does when you arrive. Each country sets its own duty-free limit, and a carton that is fine in one country is over the limit in another. The figures below are the adult allowance for arriving by air, taken from each country\'s own customs authority. Click a country for its full tobacco page, with the official source.</p>' + dest +
    '<p>Five examples only. For 44 destinations including the whole EU, see the full <a href="/blog/duty-free-tobacco-allowance-by-country-2026/">duty-free tobacco allowance by country</a> table.</p></section>' +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + FAQ.map(q => '<h3 class="cox-q">' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<section class="bd-sec"><h2>Related airport rules</h2><ul><li><a href="/plane/vape-e-cigarette/">Vapes and e-cigarettes on a plane</a></li><li><a href="/plane/lighter/">Lighters on a plane</a></li><li><a href="/plane/liquids/">Liquids in carry-on</a></li></ul></section>' +
    '<p class="bd-chk">Read 8 October 2026. TSA rules and customs limits change: check the TSA "What can I bring" tool and the customs authority of your destination before you fly.</p>' +
    '<div class="bd-src"><div class="h">🔗 Official sources</div>' +
    '<a href="https://www.tsa.gov/travel/security-screening/whatcanibring/items/cigarettes" target="_blank" rel="noopener noreferrer">TSA: Cigarettes</a>' +
    '<a href="https://www.tsa.gov/travel/security-screening/whatcanibring/items/cigars" target="_blank" rel="noopener noreferrer">TSA: Cigars</a>' +
    '<a href="https://www.ecfr.gov/current/title-14/chapter-II/subchapter-F/part-252" target="_blank" rel="noopener noreferrer">14 CFR Part 252: Smoking aboard aircraft (eCFR)</a></div></div>';
  return {
    url: '/plane/cigarettes/',
    title: 'Can You Bring Cigarettes on a Plane? TSA and Customs Rules 2026 | canitakethis.co',
    desc: 'Cigarettes are allowed in carry-on and checked bags per TSA. Smoking on board is banned, and customs limits abroad range from 600 in Turkey to none in Singapore.',
    h1: 'Can you bring cigarettes on a plane? (2026)',
    body,
  };
}

module.exports = { build, FAQ };
