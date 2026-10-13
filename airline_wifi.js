// Airline Wi-Fi pages (pilot, 2026-10-13): /airline/<slug>/wifi/ + a "Wi-Fi" tab, shown ONLY for airlines listed here.
// Rule (user order 2026-10-13): an airline is listed ONLY when its OWN published pages give Wi-Fi by aircraft type. Where the airline does not publish it, there is no tab.
// Format: same chip + verdict card component as the Compensation pages (one chip per aircraft family) and a full table of every aircraft type the airline lists, with the date it was last checked.
// Free vs paid: capable aircraft do not mean free, so each card says who gets it free. Anything the airline does not publish is said as "not published", never filled from third-party sources.
const COMP = require('./airline_compensation.js');
const BAGD = require('./baggage_detail.js');
const { CSS, table } = BAGD;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const LEGEND = '<p class="cc-legend"><span class="cc-dot cc-g"></span> Green: free Wi-Fi on this aircraft. <span class="cc-dot cc-y"></span> Yellow: depends on the individual aircraft, or paid.</p>';

const out = {};

// ---------------- DELTA ----------------
// Read 13 October 2026 on delta.com: Onboard Wi-Fi page (section "Wi-Fi Service by Aircraft", FAQ), Delta Studio page.
{
  const PG = ['https://www.delta.com/us/en/onboard/inflight-entertainment/onboard-wifi', 'Delta: Onboard Wi-Fi', 'Wi-Fi Service by Aircraft'];
  const FREE = 'Fast, free Delta Sync Wi-Fi is available with a SkyMiles membership. Joining SkyMiles is free.';
  const HOW = 'To check your flight, look for the "Fast, Free Wi-Fi for SkyMiles Members" badge in delta.com search results, in your pre-flight email, or on the decal near the boarding door.';
  const g = (id, label, types, first) => ({
    id, label, status: 'go', verdict: 'Free Wi-Fi', sub: 'For SkyMiles members: ' + types, first: !!first,
    head: 'Delta lists ' + types + ' as having fast, free Wi-Fi.',
    lines: [FREE, HOW, 'Delta does not state a price for passengers who are not members on its Wi-Fi page.'],
    sources: [PG]
  });
  const SCEN = [
    g('a220', 'A220', 'the A220-100 and A220-300', true),
    g('a320', 'A319 / A320 / A321', 'the A319, A320, A321ceo and A321neo'),
    g('b737', '737', 'the 737-800 and 737-900'),
    g('b757', '757', 'the 757-200 and 757-300'),
    g('b767', '767', 'the 767-300 and 767-400'),
    g('a330', 'A330', 'the A330-200, A330-300 and A330-900neo'),
    g('a350', 'A350', 'the A350-900'),
    {
      id: 'b717', label: '717', status: 'warn', verdict: 'Depends on the aircraft', sub: 'Boeing 717',
      head: 'Delta lists the 717 under both free and paid Wi-Fi, available on select aircraft.',
      lines: ['Delta says Delta Sync Wi-Fi is rolling out on its 717 aircraft, and the experience may vary during the transition.',
        'On aircraft with Wi-Fi Onboard (formerly Gogo) you buy a flight pass or use free messaging.', HOW],
      sources: [PG]
    },
    {
      id: 'crj', label: 'CRJ-700 / CRJ-900', status: 'warn', verdict: 'Depends on the aircraft', sub: 'CRJ-700 and CRJ-900',
      head: 'Delta lists the CRJ-700 and CRJ-900 under both free and paid Wi-Fi, available on select aircraft.',
      lines: ['Delta says free Delta Sync Wi-Fi is rolling out on Delta Connection flights, so it may differ from one aircraft to the next.',
        'On aircraft with Wi-Fi Onboard (formerly Gogo) you buy a flight pass or use free messaging.', HOW],
      sources: [PG]
    },
    {
      id: 'erj', label: 'ERJ-170 / ERJ-175', status: 'warn', verdict: 'Paid Wi-Fi', sub: 'ERJ-170 and ERJ-175',
      head: 'Delta lists the ERJ-170 and ERJ-175 under paid Wi-Fi, available on select aircraft.',
      lines: ['Paid Wi-Fi is provided by Wi-Fi Onboard (formerly Gogo): you buy a flight pass or choose free messaging.',
        'Delta does not state the price on this page.', HOW],
      sources: [PG]
    }
  ];
  const ROWS = [
    ['A220-100, A220-300', 'Fast, free Wi-Fi'], ['A319', 'Fast, free Wi-Fi'], ['A320', 'Fast, free Wi-Fi'], ['A321ceo', 'Fast, free Wi-Fi'], ['A321neo', 'Fast, free Wi-Fi'],
    ['737-800, 737-900', 'Fast, free Wi-Fi'], ['757-200, 757-300', 'Fast, free Wi-Fi'], ['767-300, 767-400', 'Fast, free Wi-Fi'],
    ['A330-200, A330-300, A330-900neo', 'Fast, free Wi-Fi'], ['A350-900', 'Fast, free Wi-Fi'],
    ['717', 'Free on select aircraft, paid on select aircraft'], ['CRJ-700, CRJ-900', 'Free on select aircraft, paid on select aircraft'],
    ['ERJ-170, ERJ-175', 'Paid on select aircraft']
  ];
  out['delta'] = {
    h1: 'Is Delta WiFi Free? Free WiFi by Aircraft Type (2026)',
    ttl: 'Is Delta WiFi Free? Free WiFi by Aircraft Type (2026)',
    desc: 'Is Delta WiFi free? Yes for SkyMiles members on the A220, A320 family, 737, 757, 767, A330 and A350. Paid on some 717, CRJ and ERJ. How to connect and check your flight. From Delta\'s own list, checked 13 October 2026.',
    answer: 'Yes, for SkyMiles members (joining is free). Delta lists fast, free WiFi on its A220, A319, A320, A321, 737-800/900, 757, 767, A330 and A350. Some 717, CRJ and ERJ aircraft are paid or mixed.',
    faq: [
      ['Is Delta WiFi free?', 'Yes for SkyMiles members, and joining SkyMiles is free. Delta Sync WiFi, presented by T-Mobile, is free for members on the aircraft Delta lists: the A220, A319, A320, A321, 737-800/900, 757, 767, A330 and A350. Some regional aircraft are paid.'],
      ['How do I connect to Delta WiFi?', 'Once the door closes, put your device in Airplane Mode and turn Wi-Fi on. Choose "DeltaWiFi.com" from the networks. On aircraft with Delta Sync you are sent to a page where you log in to your SkyMiles account, join SkyMiles for free, or pay for a Wi-Fi flight pass. If the page does not load, type deltawifi.com into your browser.'],
      ['How much does Delta WiFi cost?', 'Delta does not state a price for passengers who are not SkyMiles members on its Wi-Fi page, so we do not list one. Members get free WiFi on the aircraft listed above.'],
      ['Which Delta planes do not have free WiFi?', 'Delta lists paid Wi-Fi on select 717, CRJ-700, CRJ-900, ERJ-170 and ERJ-175 aircraft, run by Wi-Fi Onboard (formerly Gogo). Aircraft Delta does not list on its Wi-Fi page are not described by Delta.'],
      ['How do I know if my Delta flight has free WiFi?', 'Look for the "Fast, Free Wi-Fi for SkyMiles Members" badge in delta.com search results, in your pre-flight email, or on the decal near the boarding door.']
    ],
    render: a => COMP.__render(a, SCEN, 'From Delta\'s own list of Wi-Fi service by aircraft, last checked 13 October 2026. Wi-Fi rollouts change often, so confirm with Delta before you fly.', { slab: 'Which aircraft are you flying on?', tag: 'WI-FI', legend: LEGEND }) +
      '<div class="bd-wrap">' + CSS + '<section class="bd-sec"><h2>📶 Delta\'s full list by aircraft</h2><p>Copied from Delta\'s "Wi-Fi Service by Aircraft" list. Delta marks 717, CRJ and ERJ with an asterisk: available on select aircraft.</p>' +
      table({ head: ['Aircraft', 'Wi-Fi on Delta'], rows: ROWS }) + '</section>' +
      '<section class="bd-sec"><h2>🔌 How to connect to Delta WiFi</h2><ol><li>Once the boarding door closes, switch your device to Airplane Mode and turn Wi-Fi on.</li><li>Choose "DeltaWiFi.com" from the list of networks.</li><li>On an aircraft with Delta Sync you are redirected to a page where you log in to your SkyMiles account, join SkyMiles for free, or pay for a Wi-Fi flight pass. On a Wi-Fi Onboard (formerly Gogo) aircraft you buy a flight pass or choose free messaging.</li><li>If the page does not load by itself, type deltawifi.com into your browser.</li></ol></section>' +
      '<section class="bd-sec"><h2>🎬 Entertainment</h2><p>Delta says Delta Studio gives 1,000+ hours of free entertainment on the seatback screen. Delta does not publish on its entertainment page which aircraft have seatback screens, so we do not list that here.</p></section>' +
      '<p class="bd-chk">Last checked 13 October 2026 on delta.com. We re-check regularly because Delta is still rolling out Wi-Fi.</p></div>'
  };
}

module.exports = out;
