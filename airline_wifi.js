// Airline Wi-Fi pages (pilot, 2026-10-13): /airline/<slug>/wifi/ + a "Wi-Fi" tab, shown ONLY for airlines listed here.
// Rule (user order 2026-10-13): an airline is listed ONLY when its OWN published pages give Wi-Fi by aircraft type. Where the airline does not publish it, there is no tab.
// Format: same chip + verdict card component as the Compensation pages (one chip per aircraft family) and a full table of every aircraft type the airline lists, with the date it was last checked.
// Free vs paid: capable aircraft do not mean free, so each card says who gets it free. Anything the airline does not publish is said as "not published", never filled from third-party sources.
const COMP = require('./airline_compensation.js');
const BAGD = require('./baggage_detail.js');
const { CSS, table } = BAGD;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const LEGEND = '<p class="cc-legend"><span class="cc-dot cc-g"></span> Green: free Wi-Fi on this aircraft. <span class="cc-dot cc-y"></span> Yellow: depends on the individual aircraft, your membership or ticket, or paid. <span class="cc-dot cc-r"></span> Red: no Wi-Fi.</p>';

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

// ---------------- helper for the airlines below ----------------
// cfg: { slug, name, src:[url,label,small], srcNote, checked, h1, desc, answer, faq, scen, rows, tableHead, tableTitle, tableNote, extra (html sections after the table) }
function add(cfg) {
  out[cfg.slug] = {
    h1: cfg.h1, ttl: cfg.h1, desc: cfg.desc, answer: cfg.answer, faq: cfg.faq,
    render: a => COMP.__render(a, cfg.scen, cfg.srcNote, { slab: cfg.slab || 'Which aircraft are you flying on?', tag: 'WI-FI', legend: cfg.legend || LEGEND, unofficial: cfg.unofficial }) +
      '<div class="bd-wrap">' + CSS + '<section class="bd-sec"><h2>📶 ' + esc(cfg.tableTitle) + '</h2>' + (cfg.tableNote ? '<p>' + cfg.tableNote + '</p>' : '') +
      table({ head: cfg.tableHead, rows: cfg.rows }) + '</section>' + (cfg.extra || '') +
      '<p class="bd-chk">Last checked ' + cfg.checked + ' on the airline\'s own pages. We re-check regularly because Wi-Fi rollouts change often.</p></div>'
  };
}
const card = (id, label, status, verdict, sub, head, lines, src, first) => ({ id, label, status, verdict, sub, head, lines, sources: [src], first: !!first });
const steps = (list) => '<section class="bd-sec"><h2>🔌 How to connect</h2><ol>' + list.map(x => '<li>' + x + '</li>').join('') + '</ol></section>';

// ---------------- AMERICAN AIRLINES ----------------
// Read 13 October 2026 on aa.com: Wi-Fi and onboard connectivity; Inflight entertainment options.
{
  const PG = ['https://www.aa.com/web/i18n/travel-info/experience/entertainment/wi-fi-and-connectivity.html', 'American Airlines: Wi-Fi and onboard connectivity', 'Free Wi-Fi aircraft list'];
  const FREE = 'Free high-speed Wi-Fi sponsored by AT&T is exclusively for AAdvantage members, on most domestic flights and select international flights. Joining AAdvantage is free.';
  const PAID = 'Other passengers can buy Wi-Fi: American says pay as you fly is available on almost all routes for as little as $10.';
  add({
    slug: 'american-airlines', checked: '13 October 2026',
    h1: 'Is American Airlines WiFi Free? Free WiFi by Aircraft Type (2026)',
    desc: 'Is American Airlines WiFi free? Yes for AAdvantage members on all A319, A320, A321 and 737 aircraft, select 787s and most regional aircraft. Paid from $10 for others. From American\'s own page, checked 13 October 2026.',
    answer: 'Yes for AAdvantage members (joining is free). American lists free WiFi on all A319, A320, A321 and Boeing 737 aircraft, select 787-8 and 787-9, and most regional aircraft. Others pay, from about $10.',
    srcNote: 'From American Airlines\' own Wi-Fi page, last checked 13 October 2026. Wi-Fi rollouts change often, so confirm with the airline before you fly.',
    scen: [
      card('narrow', 'A319 / A320 / A321 / 737', 'go', 'Free Wi-Fi', 'For AAdvantage members: all narrowbody aircraft', 'American lists all single-aisle aircraft as having free Wi-Fi: every Airbus A319, A320 and A321 and every Boeing 737.', [FREE, PAID], PG, true),
      card('b787', '787-8 / 787-9', 'warn', 'Depends on the aircraft', 'Select 787-8 and 787-9', 'American lists select Boeing 787-8 and 787-9 widebody aircraft as having free Wi-Fi, not all of them.', [FREE, 'American\'s page does not say which individual 787s have it. Check your flight on aa.com.', PAID], PG),
      card('regional', 'Regional aircraft', 'warn', 'Most have it', 'Most regional aircraft', 'American says most regional aircraft have free Wi-Fi, with more coming.', [FREE, 'The page does not list regional aircraft types.', PAID], PG)
    ],
    faq: [
      ['Is American Airlines WiFi free?', 'Yes for AAdvantage members, and joining AAdvantage is free. The free service is sponsored by AT&T and covers all A319, A320, A321 and Boeing 737 aircraft, select 787-8 and 787-9, and most regional aircraft.'],
      ['How much does American Airlines WiFi cost?', 'For passengers who are not AAdvantage members, American says Wi-Fi is available on almost all routes for as little as $10 on a pay-as-you-fly basis. The exact price depends on the flight.'],
      ['How do I connect to American Airlines WiFi?', 'Put your phone or tablet in airplane mode, connect to the "aainflight.com" Wi-Fi signal, open a browser and go to aainflight.com if you are not redirected, then select "Free Wi-Fi" and log in with your AAdvantage account, or choose "View Wi-Fi plans" for other options.'],
      ['Does American Airlines have in-flight entertainment?', 'On most flights you can stream a free library of movies, music and TV to your own phone, tablet or laptop on Wi-Fi-equipped flights, using the American Airlines app. American does not list on that page which aircraft have seatback screens.']
    ],
    tableHead: ['Aircraft', 'Free Wi-Fi for AAdvantage members'], tableTitle: 'American\'s list by aircraft',
    tableNote: 'Copied from the list on American\'s Wi-Fi page.',
    rows: [['Airbus A319, A320, A321 (all)', 'Yes'], ['Boeing 737 (all)', 'Yes'], ['Boeing 787-8 and 787-9', 'Select aircraft'], ['Regional aircraft', 'Most aircraft, more coming']],
    extra: steps(['Switch your device to airplane mode and turn Wi-Fi on.', 'Connect to the "aainflight.com" Wi-Fi signal.', 'Open a browser and enter aainflight.com if you are not redirected.', 'Select "Free Wi-Fi" and sign in with your AAdvantage login, or select "View Wi-Fi plans" for other options.']) +
      '<section class="bd-sec"><h2>🎬 Entertainment</h2><p>American says that on most flights you can stream its free library of movies, music and TV shows to your phone, tablet or laptop on Wi-Fi-equipped flights, using the American Airlines app. It does not list which aircraft have seatback screens, so we do not list that here.</p></section>'
  });
}

// ---------------- JETBLUE ----------------
// Read 13 October 2026 on jetblue.com: Wi-Fi (Fly-Fi) page.
{
  const PG = ['https://www.jetblue.com/flying-with-us/wifi', 'JetBlue: Fly-Fi Wi-Fi', 'Free Wi-Fi on every plane'];
  add({
    slug: 'jetblue', checked: '13 October 2026', slab: 'Where are you flying?',
    h1: 'Is JetBlue WiFi Free? Fly-Fi on Every Plane (2026)',
    desc: 'Is JetBlue WiFi free? Yes. JetBlue says Fly-Fi is free, high-speed Wi-Fi on every plane, for everyone. How to connect, where it works and where it may not. From JetBlue\'s own page, checked 13 October 2026.',
    answer: 'Yes. JetBlue says all of its planes are equipped with free, high-speed Fly-Fi for everyone. Some flights outside the continental US, other than to Europe and the UK, may have no service.',
    srcNote: 'From JetBlue\'s own Fly-Fi page, last checked 13 October 2026. Coverage depends on weather and other factors, so confirm with the airline before you fly.',
    scen: [
      card('us', 'Within the continental US', 'go', 'Free Wi-Fi', 'Fly-Fi on every JetBlue plane', 'JetBlue says all of its planes are equipped with free, high-speed Wi-Fi.', ['Free for everyone, with no membership needed. You connect through the Fly-Fi network and watch a short ad from one of JetBlue\'s partners.', 'JetBlue notes that weather and other variables mean the coverage area does not guarantee service.'], PG, true),
      card('eu', 'To or from Europe and the UK', 'go', 'Free Wi-Fi', 'Not listed as an exception', 'JetBlue names Europe and the UK as the exception to its outside-the-US warning, so Fly-Fi is expected on those flights.', ['JetBlue\'s page says coverage area varies by aircraft.', 'JetBlue notes that weather and other variables mean the coverage area does not guarantee service.'], PG),
      card('other', 'Other flights outside the continental US', 'warn', 'May be unavailable', 'Service may not work on some flights', 'JetBlue says some flights outside the continental US, other than to Europe and the UK, may have unavailable service.', ['JetBlue says coverage area varies by aircraft.', 'Check JetBlue before you fly if Wi-Fi matters on your route.'], PG)
    ],
    faq: [
      ['Is JetBlue WiFi free?', 'Yes. JetBlue says it offers free, high-speed Wi-Fi at every seat on every plane. You connect to the Fly-Fi network, go to flyfi.com, and watch a short ad from one of its partners.'],
      ['How do I connect to JetBlue WiFi?', 'Select the Fly-Fi network in your device\'s Wi-Fi settings, go to www.flyfi.com in your browser, follow the prompts (including watching a short ad), and you are connected. You can continue as a guest or log in with TrueBlue.'],
      ['How much does JetBlue WiFi cost?', 'Nothing. JetBlue says you can surf, shop and stream for free on Fly-Fi.'],
      ['Does JetBlue WiFi work on international flights?', 'JetBlue says some flights outside the continental US, other than to Europe and the UK, may have unavailable service. Weather and other factors can also affect coverage.']
    ],
    tableHead: ['Where', 'Fly-Fi on JetBlue'], tableTitle: 'What JetBlue says about coverage',
    tableNote: 'JetBlue does not list Wi-Fi by aircraft type, because every plane has it. Coverage depends on the route.',
    rows: [['Every JetBlue plane', 'Free, high-speed Wi-Fi'], ['Continental US', 'Covered'], ['Europe and UK', 'Not listed as an exception'], ['Other flights outside the continental US', 'May be unavailable']],
    extra: steps(['Select the Fly-Fi network under your device\'s Wi-Fi settings.', 'Go to www.flyfi.com in your browser.', 'Follow the prompts, including watching a short ad from one of JetBlue\'s partners.', 'If it will not connect, make sure your device is in airplane mode and type www.FlyFi.com into the browser by hand.']) +
      '<section class="bd-sec"><h2>🛰️ What JetBlue says is next</h2><p>JetBlue says that starting in 2027 it will partner with Amazon Leo (formerly Project Kuiper) for the next generation of Fly-Fi, which it says will stay free for everyone.</p></section>'
  });
}

// ---------------- AIR CANADA ----------------
// Read 13 October 2026 on aircanada.com: In-flight Entertainment and Connectivity (fleet connectivity table: number of aircraft and aircraft equipped with Wi-Fi).
{
  const PG = ['https://www.aircanada.com/ca/en/aco/home/fly/onboard/in-flight-entertainment-and-connectivity.html', 'Air Canada: In-flight entertainment and connectivity', 'Fleet connectivity by aircraft'];
  const FREE = 'Air Canada says fast free Wi-Fi is for Aeroplan members, United MileagePlus members and Business Class passengers, sponsored by Bell, on flights within North America and to Sun destinations.';
  const MSG = 'Aeroplan members also get free texting on Wi-Fi-equipped aircraft, and you can buy Wi-Fi with Aeroplan points. Access to aircanada.com and the Air Canada app is free for everyone.';
  const R = (t, n, e) => [t, e + ' of ' + n];
  add({
    slug: 'air-canada', checked: '13 October 2026',
    h1: 'Is Air Canada WiFi Free? WiFi by Aircraft Type (2026)',
    desc: 'Is Air Canada WiFi free? Free for Aeroplan, United MileagePlus members and Business Class on North America and Sun flights. Air Canada\'s own table shows how many aircraft of each type have Wi-Fi. Checked 13 October 2026.',
    answer: 'Free for Aeroplan members, United MileagePlus members and Business Class passengers on flights within North America and to Sun destinations. Air Canada lists how many aircraft of each type have Wi-Fi: nearly all, with a few 787-9 and A320 aircraft not yet equipped.',
    srcNote: 'From Air Canada\'s own fleet connectivity table, last checked 13 October 2026. Wi-Fi rollouts change often, so confirm with the airline before you fly.',
    scen: [
      card('wide', 'Wide-body (777, A330, 787)', 'warn', 'Nearly all equipped', '777-300ER, 777-200LR, A330-300, 787-9, 787-8', 'Air Canada lists Wi-Fi on all 19 777-300ER, 6 777-200LR, 20 A330-300 and 8 787-8, and on 29 of 32 787-9.', [FREE, MSG, 'Air Canada marks its wide-body entries "Streaming Quality".'], PG, true),
      card('narrow', 'Narrow-body (A321, 737 MAX 8, A220, A320, A319)', 'warn', 'Nearly all equipped', 'Mainline narrow-body aircraft', 'Air Canada lists Wi-Fi on all 20 A321-200, 49 737 MAX 8, 42 A220-300 and 15 A319-100, and on 14 of 16 A320-200.', [FREE, MSG], PG),
      card('rouge', 'Air Canada Rouge', 'go', 'All equipped', 'A321-200, A319-100, A320-200 (Rouge)', 'Air Canada lists Wi-Fi on all 14 Rouge A321-200, 15 A319-100 and 5 A320-200.', [FREE, MSG], PG),
      card('jazz', 'Air Canada Jazz', 'go', 'All equipped', 'E175, CRJ900, Dash 8-400', 'Air Canada lists Wi-Fi on all 25 Embraer E175, 30 CRJ900 and 9 Dash 8-400. The Dash 8-400 entry is for flights at Billy Bishop Toronto City Airport.', [FREE, MSG], PG)
    ],
    faq: [
      ['Is Air Canada WiFi free?', 'Free for Aeroplan members, United MileagePlus members and Business Class passengers, sponsored by Bell, on flights within North America and to Sun destinations. Others can buy Wi-Fi. Access to aircanada.com and the Air Canada app is free for everyone.'],
      ['Which Air Canada planes have WiFi?', 'Air Canada\'s own table lists Wi-Fi on nearly every aircraft: all 777-300ER, 777-200LR, A330-300, 787-8, A321, 737 MAX 8, A220-300, A319, Rouge, E175, CRJ900 and Dash 8-400, 29 of 32 787-9 and 14 of 16 A320-200 on the mainline fleet.'],
      ['Does Air Canada have free messaging?', 'Yes. Aeroplan members get free texting on Wi-Fi-equipped Air Canada aircraft, so you do not need to buy Wi-Fi to message.']
    ],
    tableHead: ['Aircraft', 'Equipped with Wi-Fi (Air Canada\'s count)'], tableTitle: 'Air Canada\'s table by aircraft',
    tableNote: 'Copied from the fleet connectivity table on Air Canada\'s page.',
    rows: [
      ['Boeing 777-300ER', '19 of 19'], ['Boeing 777-200LR', '6 of 6'], ['Airbus A330-300', '20 of 20'], ['Boeing 787-9', '29 of 32'], ['Boeing 787-8', '8 of 8'],
      ['Airbus A321-200', '20 of 20'], ['Boeing 737 MAX 8', '49 of 49'], ['Airbus A220-300', '42 of 42'], ['Airbus A320-200', '14 of 16'], ['Airbus A319-100', '15 of 15'],
      ['Rouge: Airbus A321-200', '14 of 14'], ['Rouge: Airbus A319-100', '15 of 15'], ['Rouge: Airbus A320-200', '5 of 5'],
      ['Jazz: Embraer E175', '25 of 25'], ['Jazz: Mitsubishi CRJ900', '30 of 30'], ['Jazz: Dash 8-400 (Billy Bishop Toronto City Airport flights)', '9 of 9']
    ]
  });
}

// ---------------- FINNAIR ----------------
// Read 13 October 2026 on finnair.com: onboard Wi-Fi page (packages, who gets a complimentary package, prices).
{
  const PG = ['https://www.finnair.com/us-en/in-flight-entertainment-and-wi-fi/wi-fi', 'Finnair: onboard Wi-Fi', 'Internet packages and prices'];
  add({
    slug: 'finnair', checked: '13 October 2026',
    h1: 'Is Finnair WiFi Free? WiFi by Aircraft Type (2026)',
    desc: 'Is Finnair WiFi free? Depends on your Finnair Plus tier, ticket and aircraft: A350 and A330 get a Browse package, A321, A320 and A319 get Message or Stream. Prices from Finnair\'s own page, checked 13 October 2026.',
    answer: 'It depends on your Finnair Plus tier and the aircraft. On long-haul and A350/A330 flights, Silver, Gold, Platinum and Platinum Lumo members get a free Browse package. On A321, A320 and A319, Basic members get free Message and Silver and above get free Stream. Others pay.',
    srcNote: 'From Finnair\'s own Wi-Fi page, last checked 13 October 2026. Prices and benefits change, so confirm with the airline before you fly.',
    scen: [
      card('wide', 'A350 / A330 (long-haul)', 'warn', 'Free for some members', 'All long-haul flights, and short-haul on A350 or A330', 'Finnair gives Silver, Gold, Platinum and Platinum Lumo members a free Browse package for the entire flight. Finnair Plus Basic members get none.', ['Browse lets you use the web. Audio and video streaming are not supported.', 'Business Classic and Business Flex ticket holders get the same benefit.', 'Others pay for Browse: EUR 7.95 for 1 hour, EUR 14.95 for 3 hours, EUR 24.95 for the entire flight (members pay EUR 6.95, EUR 12.95 and EUR 19.95, or 700, 1,500 and 2,400 Avios).'], PG, true),
      card('narrow', 'A321 / A320 / A319 (short-haul)', 'warn', 'Free for some members', 'Short-haul flights within Europe on these Airbus aircraft', 'Finnair gives Finnair Plus Basic members a free Message package, and Silver, Gold, Platinum and Platinum Lumo members a free Stream package, for the entire flight.', ['Message supports text messages in WhatsApp, Viber, Kakao Talk, WeChat and iMessage. Stream gives full internet including audio, video and VPN, up to 15 Mbps.', 'Business Classic and Business Flex ticket holders get the same benefit as members.', 'Others pay: Stream is EUR 6.95 for 1 hour or EUR 11.95 for the full flight (members pay EUR 5.95 or EUR 9.95, or 600 or 1,100 Avios). Message for the full flight is free for Finnair Plus members.'], PG)
    ],
    faq: [
      ['Is Finnair WiFi free?', 'Depends on your Finnair Plus tier, your ticket and the aircraft. On long-haul and A350/A330 flights, Silver, Gold, Platinum and Platinum Lumo members get a free Browse package. On A321, A320 and A319, Basic members get a free Message package and Silver and above get a free Stream package. Others can buy a package.'],
      ['How much does Finnair WiFi cost?', 'On long-haul and A350/A330 flights, Browse costs EUR 7.95 for 1 hour, EUR 14.95 for 3 hours or EUR 24.95 for the entire flight, less for Finnair Plus members. On A321, A320 and A319, Stream costs EUR 6.95 for 1 hour or EUR 11.95 for the full flight.'],
      ['Which Finnair planes have WiFi?', 'Finnair\'s Wi-Fi page lists packages for its long-haul flights and for the A350, A330, A321, A320 and A319. It says you can buy a package onboard all its Airbus-operated flights.']
    ],
    tableHead: ['Aircraft', 'Package', 'Free for'], tableTitle: 'Finnair\'s packages by aircraft',
    tableNote: 'Copied from the table on Finnair\'s Wi-Fi page. Business Classic and Business Flex ticket holders get the same benefits as members.',
    rows: [
      ['Long-haul and A350 / A330 short-haul', 'Browse, entire flight', 'Finnair Plus Silver, Gold, Platinum, Platinum Lumo'],
      ['A321 / A320 / A319 short-haul', 'Message, entire flight', 'Finnair Plus Basic and above'],
      ['A321 / A320 / A319 short-haul', 'Stream, entire flight', 'Finnair Plus Silver, Gold, Platinum, Platinum Lumo']
    ]
  });
}

// ---------------- TAP AIR PORTUGAL ----------------
// Read 13 October 2026 on flytap.com: Wi-Fi on board.
{
  const PG = ['https://www.flytap.com/en-us/on-board/wi-fi', 'TAP Air Portugal: Wi-Fi on board', 'Wi-Fi packages and how to connect'];
  add({
    slug: 'tap-air-portugal', checked: '13 October 2026',
    h1: 'Does TAP Air Portugal Have WiFi? WiFi by Aircraft (2026)',
    desc: 'Does TAP Air Portugal have WiFi? TAP lists Wi-Fi on its A330neo and A321LR neo aircraft, with free messaging and paid browsing packages. How to connect, from TAP\'s own page, checked 13 October 2026.',
    answer: 'TAP lists Wi-Fi on its A330neo and A321LR neo aircraft. Messaging is free; browsing is a paid package (1 hour, 3 hours or the full flight).',
    srcNote: 'From TAP\'s own Wi-Fi page, last checked 13 October 2026. Wi-Fi rollouts change, so confirm with the airline before you fly.',
    scen: [
      card('a330', 'A330neo', 'warn', 'Free messaging, paid browsing', 'Airbus A330neo', 'TAP says that on its A330neo you can exchange messages, send work emails and use social media.', ['Free messaging works on apps like iMessage, Facebook Messenger and WhatsApp.', 'Browsing is sold as Light (1 hour), Premium (3 hours) or Full Flight (no limits). TAP\'s page does not show prices in the text we read.'], PG, true),
      card('a321', 'A321LR neo', 'warn', 'Free messaging, paid browsing', 'Airbus A321LR neo', 'TAP says that on its A321LR neo you can exchange messages, send work emails and use social media.', ['Free messaging works on apps like iMessage, Facebook Messenger and WhatsApp.', 'Browsing is sold as Light (1 hour), Premium (3 hours) or Full Flight (no limits). TAP\'s page does not show prices in the text we read.'], PG)
    ],
    faq: [
      ['Does TAP Air Portugal have WiFi?', 'Yes, on its A330neo and A321LR neo aircraft. Messaging is free, and browsing is a paid package.'],
      ['How do I connect to TAP WiFi?', 'Switch your device to flight mode, enable Wi-Fi, connect to the TAP network, and if the browser does not open, go to onboardwifi.flytap.com. Check the prices and pick a package.'],
      ['Is TAP WiFi free?', 'Free messaging is included. Browsing packages (Light for 1 hour, Premium for 3 hours, Full Flight) are paid.']
    ],
    tableHead: ['Aircraft', 'Wi-Fi on TAP'], tableTitle: 'TAP\'s aircraft with Wi-Fi',
    tableNote: 'TAP\'s Wi-Fi page names these two aircraft. We do not list other aircraft because TAP\'s page does not.',
    rows: [['Airbus A330neo', 'Wi-Fi: free messaging, paid browsing'], ['Airbus A321LR neo', 'Wi-Fi: free messaging, paid browsing']],
    extra: steps(['Switch your device to flight mode, then enable Wi-Fi.', 'Connect to the TAP network.', 'If your browser does not open by itself, go to onboardwifi.flytap.com.', 'Check the prices and select your package.'])
  });
}

// ---------------- ITA AIRWAYS ----------------
// Read 13 October 2026 on ita-airways.com (US site): On-board connection.
{
  const PG = ['https://www.ita-airways.com/us/en/world-of-ita-airways/services-on-board/connectivity-on-board', 'ITA Airways: On-board connection', 'Wi-Fi aircraft and prices'];
  add({
    slug: 'ita-airways', checked: '13 October 2026',
    h1: 'Does ITA Airways Have WiFi? WiFi by Aircraft and Price (2026)',
    desc: 'Does ITA Airways have WiFi? Yes on the A330neo, A321neo and A350-900. Free messaging for 30 minutes, then paid from EUR 2. Prices by route from ITA\'s own page, checked 13 October 2026.',
    answer: 'ITA lists Wi-Fi on the A330neo, A321neo and A350-900. All passengers get 30 minutes of free messaging. After that, messaging costs EUR 2 to EUR 6 and the full-flight Premium package EUR 6 to EUR 25, depending on the route. Business Class gets free messaging for the whole flight on long-haul and on A321neo international flights over three hours.',
    srcNote: 'From ITA Airways\' own connectivity page, last checked 13 October 2026. Prices and aircraft change, so confirm with the airline before you fly.',
    scen: [
      card('gate', 'A330neo / A321neo', 'go', 'Wi-Fi from boarding', 'Gate2Gate: connect as soon as you board', 'ITA lists the A330neo and A321neo with Gate2Gate Wi-Fi: you can connect as soon as you board and stay online until arrival.', ['All passengers get 30 minutes of free messaging.', 'After that, messaging costs EUR 6 on long-haul, EUR 3 on medium-haul flights over 90 minutes and EUR 2 on short-haul flights up to 90 minutes. The Premium Full Flight package costs EUR 25, EUR 8 and EUR 6 on the same flights.', 'Business Class passengers on long-haul flights, or on international A321neo flights over three hours, get free messaging for the whole flight.'], PG, true),
      card('a350', 'A350-900', 'warn', 'Wi-Fi above 10,000 feet', 'Long-haul', 'ITA lists the A350-900 with Wi-Fi once you reach 10,000 feet of altitude.', ['All passengers get 30 minutes of free messaging.', 'On long-haul flights messaging costs EUR 6 and the Premium Full Flight package EUR 25.', 'Business Class passengers on long-haul flights get free messaging for the whole flight.'], PG)
    ],
    faq: [
      ['Does ITA Airways have WiFi?', 'Yes, on the A330neo, A321neo and A350-900. On the A330neo and A321neo you can connect as soon as you board. On the A350-900 you connect once you reach 10,000 feet.'],
      ['Is ITA Airways WiFi free?', 'All passengers get 30 minutes of free messaging. After that messaging and the Premium Full Flight package are paid. Business Class passengers get free messaging for the whole flight on long-haul flights and on international A321neo flights lasting more than three hours.'],
      ['How much does ITA Airways WiFi cost?', 'Long-haul (A350-900, A330neo, A321neo): messaging EUR 6, Premium Full Flight EUR 25. Medium-haul flights over 90 minutes (A321neo): EUR 3 and EUR 8. Short-haul flights up to 90 minutes (A321neo): EUR 2 and EUR 6.'],
      ['How do I connect to ITA Airways WiFi?', 'Put your device in airplane mode and turn on Wi-Fi. When allowed, connect to the ITAAirwaysWIFI network and open your browser to be redirected to the ITA Airways portal, then select your package.']
    ],
    tableHead: ['Service', 'Long-haul (A350-900, A330neo, A321neo)', 'Medium-haul over 90 min (A321neo only)', 'Short-haul up to 90 min (A321neo only)'], tableTitle: 'ITA\'s prices by flight',
    tableNote: 'Copied from the price table on ITA\'s page.',
    rows: [['Free messaging (30 minutes)', 'Free', 'Free', 'Free'], ['Messaging', 'EUR 6', 'EUR 3', 'EUR 2'], ['Premium Full Flight', 'EUR 25', 'EUR 8', 'EUR 6']],
    extra: steps(['Put your device in airplane mode and turn on Wi-Fi.', 'When allowed, connect to the ITAAirwaysWIFI network and open your browser.', 'You are redirected to the ITA Airways portal. Select your internet package.'])
  });
}

// ---------------- AUSTRIAN ----------------
// Read 13 October 2026 on austrian.com (US site): FlyNet on Board.
{
  const PG = ['https://www.austrian.com/us/en/internet-on-board', 'Austrian: FlyNet on Board', 'FlyNet packages'];
  add({
    slug: 'austrian', checked: '13 October 2026',
    h1: 'Does Austrian Airlines Have WiFi? FlyNet by Aircraft (2026)',
    desc: 'Does Austrian Airlines have WiFi? FlyNet is on selected A320-family flights and on the Boeing 787 Dreamliner. Free messaging, Premium from EUR 6. From Austrian\'s own page, checked 13 October 2026.',
    answer: 'Austrian offers FlyNet on selected short and medium-haul flights of the A320 family and on the Boeing 787 Dreamliner. Messaging is free for Travel ID and Miles & More members on the A320 family and for everyone on the 787. Premium costs EUR 6 (up to 90 minutes) or EUR 8 on short and medium-haul flights.',
    srcNote: 'From Austrian\'s own FlyNet page, last checked 13 October 2026. Wi-Fi is only on some aircraft, so confirm with the airline before you fly.',
    scen: [
      card('a320', 'A320 family (short and medium-haul)', 'warn', 'Only some aircraft', 'Selected flights of the A320 family', 'Austrian says FlyNet is only on selected short and medium-haul flights with the A320 family. Equipped aircraft carry a Wi-Fi sign.', ['Messaging (WhatsApp, Facebook Messenger, iMessage) is free for Travel ID and Miles & More members, up to 150 kbit/s.', 'FlyNet Premium suits social media, basic browsing, audio and video streaming and VPN, up to 4 Mbit/s: EUR 6 or 2,000 miles for flights up to 90 minutes, EUR 8 or 2,600 miles for longer flights.', 'You can buy short and medium-haul packages in advance or on board.'], PG, true),
      card('b787', 'Boeing 787 Dreamliner (long-haul)', 'go', 'Free messaging', 'All passengers', 'Austrian says that on the Dreamliner there is free, unlimited messaging for all passengers during the entire flight through the FlyNet portal.', ['For long-haul flights, internet packages can currently only be bought on board aircraft equipped with FlyNet. Austrian\'s page does not show long-haul prices in the text we read.'], PG)
    ],
    faq: [
      ['Does Austrian Airlines have WiFi?', 'Yes, on selected short and medium-haul flights with the Airbus A320 family and on flights with the Boeing 787 Dreamliner. Equipped aircraft carry a Wi-Fi sign.'],
      ['Is Austrian Airlines WiFi free?', 'Messaging is free: for Travel ID and Miles & More members on the A320 family, and for all passengers on the 787 Dreamliner. Browsing and streaming (FlyNet Premium) is paid.'],
      ['How much does Austrian WiFi cost?', 'On short and medium-haul flights FlyNet Premium costs EUR 6 or 2,000 miles for flights up to 90 minutes and EUR 8 or 2,600 miles for longer flights. Austrian\'s page does not show long-haul prices in the text we read.']
    ],
    tableHead: ['Aircraft', 'FlyNet on Austrian'], tableTitle: 'Austrian\'s aircraft with FlyNet',
    tableNote: 'Austrian\'s page names these two. We do not list other aircraft because Austrian\'s page does not.',
    rows: [['Airbus A320 family, selected aircraft', 'Free messaging for Travel ID and Miles & More members; Premium paid'], ['Boeing 787 Dreamliner', 'Free messaging for all passengers; packages bought on board']]
  });
}

// ---------------- VIRGIN ATLANTIC ----------------
// Read 13 October 2026 on virginatlantic.com: Starlink page, A330neo and A350 connectivity pages.
{
  const ST = ['https://www.virginatlantic.com/en-US/experience/inflight-entertainment/connectivity/starlink', 'Virgin Atlantic: Starlink WiFi', 'Where you will find Starlink'];
  const A3 = ['https://www.virginatlantic.com/en-US/experience/inflight-entertainment/connectivity/a330neo', 'Virgin Atlantic: A330neo connectivity', 'WiFi packages'];
  add({
    slug: 'virgin-atlantic', checked: '13 October 2026',
    h1: 'Is Virgin Atlantic WiFi Free? WiFi by Aircraft (2026)',
    desc: 'Is Virgin Atlantic WiFi free? Starlink WiFi is free for Flying Club members and is on the A350. The A330neo has 20 free minutes, then free Messenger and paid passes. From Virgin Atlantic\'s own pages, checked 13 October 2026.',
    answer: 'Free Starlink WiFi is for Flying Club members and is now across the A350 fleet, with more aircraft to come through 2027. The A330neo has 20 free minutes, then free Facebook Messenger and Bloomberg, or paid passes.',
    srcNote: 'From Virgin Atlantic\'s own connectivity pages, last checked 13 October 2026. Starlink is still rolling out, so confirm with the airline before you fly.',
    scen: [
      card('a350', 'A350', 'go', 'Free Starlink WiFi', 'For Flying Club members', 'Virgin Atlantic says Starlink WiFi is now available across its A350 fleet.', ['Free for Flying Club members: you log in with your Flying Club details. Joining is possible before you fly.', 'Virgin Atlantic says Starlink rolls out to more aircraft until rollout completes in 2027, so availability may vary by aircraft and route.', 'On Starlink-equipped flights you can watch Sport 24 live sports on your own device for free.'], ST, true),
      card('a330neo', 'A330neo', 'warn', 'Free for 20 minutes', 'Then free Messenger and Bloomberg, or a paid pass', 'Virgin Atlantic says the A330neo gives 20 minutes of free WiFi, then free access all flight to Facebook Messenger and Bloomberg.', ['Paid passes: GBP 5.99 for one hour, and a full-flight pass.', 'Virgin Atlantic\'s A330neo page does not show the full-flight price in the text we read.'], A3)
    ],
    faq: [
      ['Is Virgin Atlantic WiFi free?', 'Starlink WiFi is free for Flying Club members and is now across the A350 fleet. On the A330neo you get 20 minutes free, then free Facebook Messenger and Bloomberg all flight, or you can buy a pass.'],
      ['Which Virgin Atlantic planes have Starlink?', 'Virgin Atlantic says Starlink is now available across its A350 fleet, with more aircraft added over time until rollout completes in 2027.'],
      ['How do I connect to Virgin Atlantic WiFi?', 'Connect to the Virgin Atlantic WiFi network and sign in with your Flying Club details. If you are not a member, join to log in faster.']
    ],
    tableHead: ['Aircraft', 'WiFi on Virgin Atlantic'], tableTitle: 'Virgin Atlantic\'s aircraft we could read',
    tableNote: 'Virgin Atlantic has a page for each aircraft. We list the two we read. Other aircraft are not listed here.',
    rows: [['A350', 'Free Starlink WiFi for Flying Club members'], ['A330neo', '20 minutes free, then free Messenger and Bloomberg; paid passes']]
  });
}

// ---------------- SAS ----------------
// Read 13 October 2026 on flysas.com: WiFi on board (standard WiFi table by aircraft).
{
  const PG = ['https://www.flysas.com/en/travel-info/onboard/wifi', 'SAS: WiFi on board', 'Standard WiFi by aircraft'];
  add({
    slug: 'sas', checked: '13 October 2026',
    h1: 'Is SAS WiFi Free? WiFi by Aircraft Type (2026)',
    desc: 'Is SAS WiFi free? Free for all EuroBonus members on the A320/A321NX, and for Gold and Diamond on the A330 and A350. SAS\'s own table by aircraft, checked 13 October 2026.',
    answer: 'Depends on the aircraft and your EuroBonus level. On the A320/A321NX, streaming, browsing and messaging are free for all members. On the A330, browsing and messaging are free for Gold and Diamond members and Business passengers. On the A350, browsing is free for Gold and Diamond, and messaging is free for all members. SAS is rolling out Starlink, which is free for EuroBonus members.',
    srcNote: 'From SAS\'s own WiFi page, last checked 13 October 2026. Starlink is rolling out, so check the SAS app on the day you fly.',
    scen: [
      card('a320', 'A320 / A321NX', 'go', 'Free for all members', 'Streaming, browsing and messaging', 'SAS lists streaming, browsing and messaging as free for all members on the A320/A321NX.', ['SAS says standard WiFi is free depending on your EuroBonus membership level or travel class.', 'Starlink high-speed WiFi, free for EuroBonus members, is rolling out. Check the SAS app on the day you fly.'], PG, true),
      card('a330', 'A330', 'warn', 'Free for Gold, Diamond, Business', 'Streaming not available', 'SAS lists browsing and messaging as free for Gold and Diamond members and Business class travellers, otherwise for purchase. Streaming is not available.', ['SAS does not state the price on this page.'], PG),
      card('a350', 'A350', 'warn', 'Messaging free for all members', 'Browsing free for Gold and Diamond', 'SAS lists messaging as free for all members and browsing as free for Gold and Diamond members, otherwise for purchase. Streaming is not available.', ['SAS does not state the price on this page.'], PG)
    ],
    faq: [
      ['Is SAS WiFi free?', 'It depends on your travel class, EuroBonus membership level and aircraft. On the A320/A321NX everything is free for all members. On the A330 and A350 browsing is free for Gold and Diamond members, and on the A350 messaging is free for all members.'],
      ['Does SAS have free Starlink WiFi?', 'SAS says it is rolling out high-speed WiFi powered by Starlink, free for EuroBonus members, brought to you by 3. Not every aircraft has it yet, so check the SAS app on the day you fly.'],
      ['How do I connect to SAS WiFi?', 'For standard WiFi, SAS says you will find instructions in the seat pocket on board. You can connect one device at a time. Voice and video calls are not allowed.']
    ],
    tableHead: ['Aircraft', 'Streaming', 'Browsing', 'Messaging'], tableTitle: 'SAS\'s standard WiFi table by aircraft',
    tableNote: 'Copied from the table on SAS\'s WiFi page.',
    rows: [
      ['A320 / A321NX', 'Free for all members', 'Free for all members', 'Free for all members'],
      ['A330', 'Not available', 'Free for Gold/Diamond members and Business class travellers, otherwise available for purchase', 'Free for Gold/Diamond members and Business class travellers, otherwise available for purchase'],
      ['A350', 'Not available', 'Free for Gold/Diamond members, otherwise available for purchase', 'Free for all members']
    ]
  });
}

// ---------------- NORWEGIAN ----------------
// Read 13 October 2026 on norwegian.com (US site): WiFi on Norwegian flights.
{
  const PG = ['https://www.norwegian.com/us/travel-info/on-board/wifi/', 'Norwegian: WiFi on Norwegian flights', 'WiFi options by aircraft'];
  add({
    slug: 'norwegian', checked: '13 October 2026',
    h1: 'Does Norwegian Have WiFi? WiFi by Aircraft (2026)',
    desc: 'Does Norwegian have WiFi? Yes on the Boeing 737-800: 15 minutes free, then paid Stream packages. The 737 MAX 8 has no WiFi equipment yet. From Norwegian\'s own page, checked 13 October 2026.',
    answer: 'Norwegian lists WiFi on the Boeing 737-800: 15 minutes of free WiFi with limited speed (SURF), then paid Stream Limited or Stream Unlimited. Norwegian says the Boeing 737 MAX 8 does not have WiFi equipment installed yet.',
    srcNote: 'From Norwegian\'s own WiFi page, last checked 13 October 2026. You can see whether your flight has the WiFi symbol from 2 days before departure.',
    scen: [
      card('b738', 'Boeing 737-800', 'warn', '15 minutes free, then paid', 'SURF free; Stream paid', 'Norwegian lists three options on the 737-800: SURF, STREAM LIMITED and STREAM UNLIMITED.', ['SURF: 15 minutes of free WiFi with limited speed, for surfing, email and messaging apps.', 'STREAM LIMITED: premium-quality speed for 30 or 60 minutes, depending on the flight length. STREAM UNLIMITED: premium-quality speed for the whole flight.', 'Norwegian\'s page does not show prices in the text we read.'], PG, true),
      card('max', 'Boeing 737 MAX 8', 'stop', 'No WiFi', 'Not installed yet', 'Norwegian says WiFi is not currently available on its Boeing 737 MAX 8 aircraft, as they do not yet have WiFi equipment installed.', ['You can check your flight for the WiFi symbol from 2 days before your departure date.'], PG)
    ],
    faq: [
      ['Does Norwegian have WiFi?', 'On the Boeing 737-800, yes. Norwegian says WiFi is not available on its Boeing 737 MAX 8, which do not have the equipment installed yet.'],
      ['Is Norwegian WiFi free?', 'Norwegian\'s SURF option gives 15 minutes of free WiFi with limited speed on the 737-800. Longer or faster access is paid (Stream Limited or Stream Unlimited).'],
      ['How do I connect to Norwegian WiFi?', 'Put your device into flight mode and enable WiFi, connect to the network "Norwegian Internet Access", and open your browser. If the portal does not load, go to norwegianwifi.com, then choose a package.']
    ],
    tableHead: ['Aircraft', 'WiFi on Norwegian'], tableTitle: 'Norwegian\'s WiFi by aircraft',
    tableNote: 'Copied from Norwegian\'s WiFi page.',
    rows: [['Boeing 737-800', 'SURF: 15 minutes free; Stream Limited and Stream Unlimited: paid'], ['Boeing 737 MAX 8', 'Not available: no WiFi equipment installed yet']],
    extra: steps(['Put your device into flight mode and enable WiFi.', 'Connect to the network "Norwegian Internet Access".', 'Open your browser. If the portal does not load, search norwegianwifi.com.', 'Choose your package, enter your details and you are ready to go.'])
  });
}

// =====================================================================================
// Airlines WITHOUT a per-aircraft list (user order 2026-10-13): the official info they publish, same card style, NOT split by aircraft.
// =====================================================================================
const LEGEND2 = '<p class="cc-legend"><span class="cc-dot cc-g"></span> Green: free. <span class="cc-dot cc-y"></span> Yellow: depends on your membership, ticket or flight, or paid. <span class="cc-dot cc-r"></span> Red: no Wi-Fi.</p>';
const addN = cfg => add(Object.assign({ legend: LEGEND2, slab: cfg.slab || 'Which one fits you?', checked: '13 October 2026' }, cfg));

// ---------------- UNITED ----------------
// Read 13 October 2026 on united.com: In-Flight Wi-Fi page (united.com/en/us/fly/travel-experience/inflight-wifi.html).
{
  const PG = ['https://www.united.com/en/us/fly/travel-experience/inflight-wifi.html', 'United: In-flight Wi-Fi', 'Pricing, benefits and subscriptions'];
  addN({
    slug: 'united', slab: 'Which flight are you on?',
    h1: 'Is United WiFi Free? Cost, Starlink and How to Connect (2026)',
    desc: 'Is United WiFi free? Free messaging for everyone, and Starlink on select flights for MileagePlus members. Without Starlink, WiFi is $8 or 800 miles for MileagePlus members and $10 for others. From United\'s own page, checked 13 October 2026.',
    answer: 'Free messaging works for everyone, and so does united.com and the United app. Starlink WiFi is on select flights for MileagePlus members. On domestic and short-haul international flights without Starlink, WiFi costs $8 or 800 miles for MileagePlus members and $10 for everyone else.',
    srcNote: 'From United\'s own in-flight Wi-Fi page, last checked 13 October 2026. Whether your flight has Wi-Fi depends on where you fly, the plane and its provider, so confirm with United before you fly.',
    scen: [
      card('free', 'Free options', 'go', 'Free messaging', 'Even if you do not pay for Wi-Fi', 'United says that even if you do not pay for Wi-Fi you can activate free messaging and use united.com and the United app, including its entertainment options.', ['Free messaging works in apps such as iMessage, WhatsApp and Messages by Google.', 'On most flights Wi-Fi is available from takeoff to landing.'], PG, true),
      card('starlink', 'Flight with Starlink', 'warn', 'Select flights', 'For MileagePlus members', 'United says Starlink Wi-Fi, which it calls the fastest Wi-Fi in the sky, is available now on select flights for MileagePlus members. It plans to add it to the entire fleet over the next few years.', ['United\'s page does not say what non-members pay on Starlink flights.', 'Whether your flight has Wi-Fi depends on where you are flying, the plane you are on and the service provider your plane uses.'], PG),
      card('short', 'No Starlink: US domestic and short-haul international', 'warn', 'Paid Wi-Fi', '$8 or 800 miles (MileagePlus); $10 others', 'On US domestic and short-haul international flights without Starlink, United lists Wi-Fi at $8 or 800 miles for MileagePlus members and $10 for everyone else.', ['Surf and stream: United says you can even stream video on select flights.', 'You cannot use miles to pay for Wi-Fi on enabled regional jets (E175, E170, CRJ 550 and CRJ 700).'], PG),
      card('long', 'Long-haul international', 'warn', 'Price depends on the flight', 'Depends on where you go and how long the flight is', 'On long-haul international flights without Starlink, United says prices depend on where you are headed and how long your flight is.', ['United\'s page does not list a single price for these flights.'], PG),
      card('sub', 'Wi-Fi subscription', 'warn', 'From $49 a month', 'Or 7,500 miles a month with MileagePlus', 'A United Wi-Fi subscription gives unlimited in-flight Wi-Fi for one flat monthly fee, starting at $49 or 7,500 miles a month with a MileagePlus account.', ['You choose a region: North America and Central America, or global.', 'MileagePlus cardholders get 25% back on United Wi-Fi subscription purchases.', 'Subscriptions are nonrefundable and non-transferrable and only apply to flights operated by United or United Express.'], PG)
    ],
    faq: [
      ['Is United WiFi free?', 'Messaging is free for everyone, and you can use united.com and the United app for free. Starlink WiFi is on select flights for MileagePlus members. Other WiFi is paid: $8 or 800 miles for MileagePlus members and $10 for others on US domestic and short-haul international flights without Starlink.'],
      ['How much does United WiFi cost?', 'On US domestic and short-haul international flights without Starlink: $8 or 800 miles for MileagePlus members and $10 for everyone else. On long-haul international flights the price depends on where you are going and how long the flight is. A monthly subscription starts at $49 or 7,500 miles.'],
      ['How do I connect to United WiFi?', 'Download the United app before boarding. After boarding, turn on airplane mode and connect to the Wi-Fi network. Go to unitedwifi.com and pay with a credit card or miles. If it will not load, turn off private relay first.'],
      ['Does every United flight have WiFi?', 'No. United says Wi-Fi is available on most flights, but whether yours has it depends on where you are flying, the plane and the service provider.']
    ],
    tableHead: ['Question', 'What United says'], tableTitle: 'What United says about WiFi',
    rows: [['Free messaging', 'Yes, for everyone (iMessage, WhatsApp, Messages by Google)'], ['united.com and the United app', 'Free'], ['Starlink', 'Select flights, for MileagePlus members'], ['US domestic and short-haul international, no Starlink', '$8 or 800 miles (MileagePlus); $10 others'], ['Long-haul international', 'Price depends on destination and flight length'], ['Subscription', 'From $49 or 7,500 miles a month with MileagePlus'], ['Miles on regional jets (E175, E170, CRJ 550/700)', 'Not accepted']],
    extra: steps(['Download the United app before boarding.', 'After boarding, turn on airplane mode and connect to the Wi-Fi network.', 'Go to unitedwifi.com (turn off private relay if it will not load).', 'Choose your option and pay with a credit card or miles, or use the free messaging.'])
  });
}

// ---------------- SOUTHWEST ----------------
// Read 13 October 2026 on support.southwest.com: Southwest Wifi & Food Experience.
{
  const PG = ['https://support.southwest.com/helpcenter/article/onboard-experience-and-wifi', 'Southwest: Onboard experience and WiFi', 'Free WiFi for Rapid Rewards Members'];
  addN({
    slug: 'southwest', slab: 'Which one fits you?',
    h1: 'Is Southwest WiFi Free? Cost and Entertainment (2026)',
    desc: 'Is Southwest WiFi free? Free for Rapid Rewards Members thanks to T-Mobile. Others can buy WiFi for $8 per device where available. No seatback screens. From Southwest\'s own page, checked 13 October 2026.',
    answer: 'Free for Rapid Rewards Members, thanks to T-Mobile. Not a Member: you can join for free, or where available buy WiFi for $8 per device from takeoff to landing. Southwest has no seatback screens, so bring your own device and headphones.',
    srcNote: 'From Southwest\'s own help page, last checked 13 October 2026. Southwest does not list WiFi by aircraft there, so confirm with the airline before you fly.',
    scen: [
      card('member', 'Rapid Rewards Member', 'go', 'Free WiFi', 'Thanks to T-Mobile', 'Southwest says Rapid Rewards Members get access to free WiFi thanks to T-Mobile.', ['On aircraft with Starlink WiFi you can use it to stream from your favorite services, browse and stay connected across multiple devices.', 'On aircraft with Starlink WiFi, entertainment through Southwest\'s onboard portal is not available.'], PG, true),
      card('nonmember', 'Not a Member', 'warn', 'Join free or pay $8', 'Where available', 'Southwest says that if you are not a Member you can join Rapid Rewards for free, or where available buy WiFi for $8 per device from takeoff to landing.', ['Southwest says it may prohibit access to certain high-bandwidth applications, websites and video conferencing services.'], PG),
      card('ent', 'Entertainment and headphones', 'warn', 'No seatback screens', 'Bring your own device', 'Southwest says it does not have seatback screens or devices for rent and does not sell headphones onboard.', ['Headphones are required whenever a passenger is listening to any audio.'], PG)
    ],
    faq: [
      ['Is Southwest WiFi free?', 'Free for Rapid Rewards Members, thanks to T-Mobile. If you are not a Member you can join for free, or where available buy WiFi for $8 per device from takeoff to landing.'],
      ['How much does Southwest WiFi cost?', 'Southwest says where available WiFi is $8 per device from takeoff to landing for passengers who are not Rapid Rewards Members.'],
      ['Does Southwest have in-flight entertainment?', 'Southwest says it does not have seatback screens or devices for rent. On aircraft with Starlink WiFi the onboard entertainment portal is not available, and you can use free WiFi to stream from your own services. Headphones are required for audio.']
    ],
    tableHead: ['Question', 'What Southwest says'], tableTitle: 'What Southwest says about WiFi',
    rows: [['Rapid Rewards Members', 'Free WiFi, thanks to T-Mobile'], ['Not a Member', 'Join for free, or $8 per device where available'], ['Seatback screens', 'None'], ['Headphones', 'Required for audio; not sold onboard'], ['Aircraft with Starlink WiFi', 'Onboard entertainment portal not available; stream with free WiFi']]
  });
}

// ---------------- WESTJET ----------------
// Read 13 October 2026 on westjet.com: WestJet Wifi (help).
{
  const PG = ['https://www.westjet.com/en-ca/help/westjet-wifi', 'WestJet: WestJet Wi-Fi', 'WestJet Wi-Fi and WestJet Connect'];
  addN({
    slug: 'westjet', slab: 'Which one fits you?',
    h1: 'Is WestJet WiFi Free? WestJet Rewards and 737 Aircraft (2026)',
    desc: 'Is WestJet WiFi free? Free high-speed WiFi presented by TELUS for WestJet Rewards members on over 100 aircraft across the 737 fleet. Otherwise WiFi is for a fee. From WestJet\'s own page, checked 13 October 2026.',
    answer: 'Free for WestJet Rewards members: WestJet says WestJet Wi-Fi presented by TELUS is available in over 100 aircraft across its 737 fleet. WestJet Connect gives free entertainment and flight information, and its Wi-Fi is for a fee.',
    srcNote: 'From WestJet\'s own help page, last checked 13 October 2026. WestJet does not list aircraft, so check your flight with its Flight Guide.',
    scen: [
      card('rewards', 'WestJet Rewards member', 'go', 'Free WiFi', 'Presented by TELUS', 'WestJet says WestJet Wi-Fi presented by TELUS brings free, high-speed internet to every WestJet Rewards member.', ['It is available in over 100 aircraft across the 737 fleet, so not every flight has it.', 'WestJet says members can stream, work and connect to what matters most.'], PG, true),
      card('connect', 'WestJet Connect', 'warn', 'Free entertainment, Wi-Fi for a fee', 'The other service', 'WestJet Connect is the free in-flight service that gives your smartphone, tablet or laptop access to entertainment on demand and flight information. WestJet says its Wi-Fi is available for a fee.', ['WestJet describes this as different from WestJet Wi-Fi presented by TELUS.'], PG),
      card('check', 'Check your flight', 'warn', 'Use the Flight Guide', 'Before you fly', 'WestJet says you can check Wi-Fi availability on your flight using its Flight Guide.', ['WestJet\'s page does not list which aircraft have Wi-Fi.'], PG)
    ],
    faq: [
      ['Is WestJet WiFi free?', 'Free for WestJet Rewards members on WestJet Wi-Fi presented by TELUS, which WestJet says is available in over 100 aircraft across its 737 fleet. Otherwise WiFi is for a fee.'],
      ['What is the difference between WestJet Connect and WestJet Wi-Fi?', 'WestJet Connect is a free in-flight service for entertainment on demand and flight information, and its Wi-Fi is for a fee. WestJet Wi-Fi presented by TELUS offers fast, free, high-speed internet for WestJet Rewards members.'],
      ['How do I know if my WestJet flight has WiFi?', 'WestJet says to check Wi-Fi availability on your flight using its Flight Guide.']
    ],
    tableHead: ['Question', 'What WestJet says'], tableTitle: 'What WestJet says about WiFi',
    rows: [['WestJet Wi-Fi presented by TELUS', 'Free for WestJet Rewards members'], ['Where', 'Over 100 aircraft across the 737 fleet'], ['WestJet Connect', 'Free entertainment on demand and flight information'], ['Other Wi-Fi', 'For a fee']]
  });
}

// ---------------- ALASKA AIRLINES ----------------
// Read 13 October 2026 on news.alaskaair.com (official Alaska/Hawaiian newsroom, release of 25 June 2026 with FAQ). Alaska's own Wi-Fi page returns an error page.
{
  const PG = ['https://news.alaskaair.com/guest-experience/atmos-rewards-members-unlock-free-inflight-wi-fi-on-alaska-hawaiian-airlines-thanks-to-t-mobile/', 'Alaska Airlines newsroom: free inflight Wi-Fi for Atmos Rewards members', 'Release and FAQ (June 2026)'];
  const mk = (slug, name, h1, desc) => addN({
    slug, slab: 'Who are you?', h1, desc,
    answer: 'Yes for Atmos Rewards members (joining is free): inflight WiFi on Starlink-equipped ' + name + ' aircraft is complimentary thanks to T-Mobile. Guests under 18 connect free after entering their reservation details. The release does not say what other guests pay.',
    srcNote: 'From the Alaska Airlines and Hawaiian Airlines newsroom release of June 2026 and its FAQ (Alaska\'s own Wi-Fi page was not readable), last checked 13 October 2026. Starlink is still rolling out, so confirm before you fly.',
    scen: [
      card('member', 'Atmos Rewards member', 'go', 'Free WiFi', 'Thanks to T-Mobile, on Starlink aircraft', 'The release says that on Starlink-equipped aircraft, inflight Wi-Fi is complimentary for Atmos Rewards members, thanks to T-Mobile.', ['Existing members connect automatically through a streamlined portal. Enrollment in Atmos Rewards is free and takes seconds, before or during travel.', 'With Starlink you can stream live sports, movies and shows, browse, use apps, play video games and send messages, gate to gate.'], PG, true),
      card('join', 'Not a member yet', 'warn', 'Join free to connect', 'Guests 16 and older can join online', 'The release says that from June on select flights, and on all flights by mid-July, guests need Atmos Rewards to access the complimentary Starlink Wi-Fi.', ['Guests 16 and older can join Atmos Rewards online. For guests under 16 a parent or legal guardian completes enrollment by contacting Alaska Airlines.', 'The release does not say what a guest who does not join pays.'], PG),
      card('minor', 'Under 18', 'go', 'Free after entering reservation details', 'Parents are encouraged to enroll', 'The FAQ says guests under 18 are connected to free Wi-Fi after they enter their reservation details.', ['Parents or guardians should make sure children\'s devices have the right parental controls before connecting.'], PG),
      card('rollout', 'Which aircraft', 'warn', 'Not on every aircraft yet', 'Rollout in progress', 'The release says Alaska expects to finish Starlink on the remaining mainline fleet by 2027, and to have its entire widebody fleet done this fall, including the Boeing 787-9.', ['Alaska and Hawaiian published an installation tracker. The release does not list individual aircraft types.'], PG)
    ],
    faq: [
      ['Is ' + name + ' WiFi free?', 'Yes for Atmos Rewards members: on Starlink-equipped aircraft inflight Wi-Fi is complimentary thanks to T-Mobile, and enrollment in Atmos Rewards is free. The release does not say what other guests pay.'],
      ['Do I need to be an Atmos Rewards member for ' + name + ' WiFi?', 'The release says that from June on select flights and on all flights by mid-July, guests need Atmos Rewards to access the complimentary Starlink Wi-Fi. Guests under 18 can connect free by entering their reservation details.'],
      ['Which ' + name + ' planes have Starlink?', 'Not every aircraft yet. Alaska says it expects to finish the remaining mainline fleet by 2027 and publishes an installation tracker. The release does not list aircraft types.']
    ],
    tableHead: ['Question', 'What Alaska and Hawaiian say'], tableTitle: 'What the release says',
    rows: [['Starlink-equipped aircraft', 'Complimentary for Atmos Rewards members, thanks to T-Mobile'], ['Joining Atmos Rewards', 'Free; guests 16 and older online, under 16 via a parent or guardian'], ['Guests under 18', 'Free after entering reservation details'], ['Remaining mainline fleet', 'Expected to finish by 2027']]
  });
  mk('alaska-airlines', 'Alaska Airlines', 'Is Alaska Airlines WiFi Free? Atmos Rewards and Starlink (2026)', 'Is Alaska Airlines WiFi free? Free Starlink WiFi for Atmos Rewards members, thanks to T-Mobile, on Starlink-equipped aircraft. How to join and what the airline says about rollout. From Alaska\'s own newsroom, checked 13 October 2026.');
  mk('hawaiian-airlines', 'Hawaiian Airlines', 'Is Hawaiian Airlines WiFi Free? Atmos Rewards and Starlink (2026)', 'Is Hawaiian Airlines WiFi free? Free Starlink WiFi for Atmos Rewards members, thanks to T-Mobile, on Starlink-equipped aircraft. How to join and what the airline says about rollout. From the airline\'s own newsroom, checked 13 October 2026.');
}

// ---------------- FRONTIER ----------------
// Read 13 October 2026 on faq.flyfrontier.com (article last modified 07/14/2026).
{
  const PG = ['https://faq.flyfrontier.com/help/do-you-offer-wi-fi-tv-movies-or-other-in-flight-entertainment', 'Frontier help: In-flight entertainment, Wi-Fi and media', 'Last modified 14 July 2026'];
  addN({
    slug: 'frontier', slab: 'What do you want to know?',
    h1: 'Does Frontier Have WiFi or In-Flight Entertainment? (2026)',
    desc: 'Does Frontier have WiFi? No. Frontier says its flights do not offer Wi-Fi, TV, movies or other in-flight entertainment, and have no electrical outlets. Starlink is planned from early 2027. From Frontier\'s own help page, checked 13 October 2026.',
    answer: 'No. Frontier says its flights do not currently offer Wi-Fi, TV, movies or other in-flight entertainment options, and there are no electrical outlets on board. It says it will start installing Starlink in early 2027.',
    srcNote: 'From Frontier\'s own help article (last modified 14 July 2026), last checked 13 October 2026. This can change when Starlink is installed.',
    scen: [
      card('now', 'Wi-Fi and entertainment today', 'stop', 'No WiFi', 'No TV, movies or entertainment either', 'Frontier says its flights do not currently offer Wi-Fi, TV, movies or other in-flight entertainment options.', ['Bring your own downloaded content and headphones.'], PG, true),
      card('power', 'Power outlets', 'stop', 'No outlets', 'Charge before you fly', 'Frontier says there are no electrical outlets on board.', ['Frontier\'s power bank limits and rules are on the Frontier power bank page.'], PG),
      card('plan', 'What is planned', 'warn', 'Starlink from early 2027', 'Not yet installed', 'Frontier says it will be installing Starlink, the fastest Wi-Fi in the sky, starting in early 2027.', ['The article does not say which aircraft or whether it will be free.'], PG)
    ],
    faq: [
      ['Does Frontier have WiFi?', 'No. Frontier says its flights do not currently offer Wi-Fi, TV, movies or other in-flight entertainment, and there are no electrical outlets on board.'],
      ['Will Frontier get WiFi?', 'Frontier says it will be installing Starlink, the fastest Wi-Fi in the sky, starting in early 2027.'],
      ['Does Frontier have power outlets?', 'No. Frontier says there are no electrical outlets on board.']
    ],
    tableHead: ['Question', 'What Frontier says'], tableTitle: 'What Frontier says',
    rows: [['Wi-Fi', 'Not offered'], ['TV, movies, in-flight entertainment', 'Not offered'], ['Electrical outlets', 'None on board'], ['Starlink', 'Installation planned from early 2027']]
  });
}

// ---------------- TURKISH AIRLINES ----------------
// Read 13 October 2026 on turkishairlines.com (US site): Connectivity | Wi-Fi on Board.
{
  const PG = ['https://www.turkishairlines.com/en-us/flights/fly-different/inflight-connectivity/', 'Turkish Airlines: Wi-Fi on Board', 'Passes, quotas and fees'];
  addN({
    slug: 'turkish-airlines', slab: 'Who are you?',
    h1: 'Is Turkish Airlines WiFi Free? Free Quota and Price (2026)',
    desc: 'Is Turkish Airlines WiFi free? Free unlimited internet on 103 selected narrow-body aircraft, and free quotas for Business Class and Miles&Smiles members. Paid passes from 3 USD. From Turkish\'s own page, checked 13 October 2026.',
    answer: 'It depends. On 103 selected narrow-body aircraft (A321, 737-800, 737-900ER) all passengers get free unlimited internet. On international flights Business Class and Miles&Smiles members get free quotas, and other passengers can buy passes during the flight: unlimited internet 25 USD on long-distance flights and 13 USD on short-distance flights.',
    srcNote: 'From Turkish Airlines\' own Wi-Fi page (US site), last checked 13 October 2026. Passes and coverage can vary by flight and aircraft type, so confirm before you fly.',
    scen: [
      card('narrow', 'Selected narrow-body aircraft', 'go', 'Free unlimited internet', 'For all passengers: 103 aircraft (A321, B737-800, B737-900ER)', 'Turkish says all passengers on selected narrow-body aircraft get complimentary, unlimited internet: 103 aircraft of the A321, B737-800 and B737-900ER types.', ['This applies on its international and domestic flights, on the selected aircraft.', 'Turkish says internet passes may vary by aircraft.'], PG, true),
      card('members', 'International: Miles&Smiles and Business', 'warn', 'Free quota by tier', 'Business Class and Miles&Smiles members', 'On international flights Turkish gives free quotas: Business Class with Miles&Smiles Elite or Elite Plus gets unlimited internet; Business Class gets 1 GB and unlimited messaging; Elite or Elite Plus members get 400 MB and unlimited messaging; Classic Plus members get 250 MB and unlimited messaging; Classic members get unlimited messaging.', ['Passengers who are not yet members can create a Miles&Smiles membership before or during the flight on the internet login page and enjoy unlimited messaging.'], PG),
      card('paid', 'Everyone else: paid passes', 'warn', 'Buy during the flight', 'Long-distance and short-distance prices', 'Long-distance flights: unlimited internet 25 USD, 1 GB 20 USD, 500 MB 15 USD, 250 MB 9 USD, unlimited messaging 3 USD. Short-distance flights: unlimited internet 13 USD, 250 MB 9 USD, unlimited messaging 3 USD.', ['Passes can only be purchased during the flight. Turkish says internet passes may vary by aircraft.'], PG),
      card('domestic', 'Domestic flights in Turkey', 'warn', 'Free messaging, paid internet', 'Prices in Turkish lira', 'On domestic flights Business Class passengers and Miles&Smiles members get complimentary messaging. Everyone else can buy passes: unlimited messaging 150 TL, unlimited internet 350 TL.', ['All taxes are included in the pass prices. Passengers on the selected narrow-body aircraft above get free unlimited internet.'], PG)
    ],
    faq: [
      ['Is Turkish Airlines WiFi free?', 'On 103 selected narrow-body aircraft (A321, B737-800, B737-900ER) all passengers get free unlimited internet. Otherwise Business Class and Miles&Smiles members get free quotas on international flights, and other passengers can buy passes.'],
      ['How much does Turkish Airlines WiFi cost?', 'On long-distance flights: unlimited internet 25 USD, 1 GB 20 USD, 500 MB 15 USD, 250 MB 9 USD, unlimited messaging 3 USD. On short-distance flights: unlimited internet 13 USD, 250 MB 9 USD, unlimited messaging 3 USD. Domestic: unlimited messaging 150 TL, unlimited internet 350 TL. Passes are bought during the flight.'],
      ['Do I get free WiFi on Turkish Airlines with Miles&Smiles?', 'Yes, a quota by tier on international flights: Classic unlimited messaging; Classic Plus 250 MB and unlimited messaging; Elite or Elite Plus 400 MB and unlimited messaging. Business Class gets 1 GB and unlimited messaging, and Business Class with Elite or Elite Plus gets unlimited internet.']
    ],
    tableHead: ['Who', 'Free on international flights'], tableTitle: 'Turkish\'s free quota table',
    tableNote: 'Copied from the table on Turkish Airlines\' Wi-Fi page (international flights).',
    rows: [['Business Class with Miles&Smiles Elite or Elite Plus', 'Unlimited internet'], ['Business Class', '1 GB and unlimited messaging'], ['Miles&Smiles Elite or Elite Plus', '400 MB and unlimited messaging'], ['Miles&Smiles Classic Plus', '250 MB and unlimited messaging'], ['Miles&Smiles Classic', 'Unlimited messaging'], ['All passengers on 103 selected narrow-body aircraft (A321, B737-800, B737-900ER)', 'Unlimited internet']]
  });
}

// ---------------- LUFTHANSA ----------------
// Read 13 October 2026 on lufthansa.com: FlyNet on board (US site) and Lufthansa Group Wi-Fi.
{
  const FN = ['https://www.lufthansa.com/us/en/flynet', 'Lufthansa: FlyNet on board', 'FlyNet tariffs'];
  const LG = ['https://www.lufthansa.com/de/en/during-your-trip/lhg-wifi', 'Lufthansa Group Wi-Fi', 'Free Wi-Fi with Travel ID or Miles & More'];
  addN({
    slug: 'lufthansa', slab: 'Which service?',
    h1: 'Is Lufthansa WiFi Free? FlyNet and Lufthansa Group WiFi (2026)',
    desc: 'Is Lufthansa WiFi free? Messaging is free for Travel ID and Miles & More members, and Lufthansa Group WiFi (Starlink) is free on selected aircraft. FlyNet Premium costs EUR 6 or 8. From Lufthansa\'s own pages, checked 13 October 2026.',
    answer: 'Messaging is free for Travel ID and Miles & More members. Lufthansa Group Wi-Fi powered by Starlink is free in every class with a Travel ID or Miles & More login, but only on selected aircraft so far. On FlyNet, Premium costs EUR 6 (up to 90 minutes) or EUR 8, or 2,000 or 2,600 miles.',
    srcNote: 'From Lufthansa\'s own FlyNet and Lufthansa Group Wi-Fi pages, last checked 13 October 2026. Lufthansa says you cannot yet check Starlink availability before your flight.',
    scen: [
      card('group', 'Lufthansa Group Wi-Fi (Starlink)', 'warn', 'Free on selected aircraft', 'With a Travel ID or Miles & More login', 'Lufthansa says Lufthansa Group Wi-Fi powered by Starlink is free of charge and available in every travel class, with your Travel ID or Miles & More membership.', ['At the start of the rollout it is only on selected aircraft, so you cannot yet check availability before your flight. Lufthansa says the first Airbus A320neo with it takes off in mid-August and the rest of the fleet will be equipped gradually.', 'One login works across all Lufthansa Group airlines on equipped flights.'], LG, true),
      card('msg', 'FlyNet free messaging', 'go', 'Free messaging', 'For Travel ID and Miles & More members', 'Travel ID and Miles & More members get free, unlimited messaging throughout the flight by logging in to the FlyNet portal.', ['Lufthansa says its FlyNet Wi-Fi is already available on most of its aircraft.'], FN),
      card('prem', 'FlyNet Premium', 'warn', 'EUR 6 or EUR 8', 'Or 2,000 or 2,600 miles', 'FlyNet Premium suits social media, browsing, streaming and VPN, with speed up to 4 Mbit/s: EUR 6 or 2,000 miles for flights up to 90 minutes, EUR 8 or 2,600 miles for longer flights.', ['HON Circle members and connecting First Class passengers get free premium access when they log in with Miles & More or Travel ID on FlyNet.', 'These are the short and medium-haul prices on Lufthansa\'s page. Buy in advance for a discounted rate.'], FN)
    ],
    faq: [
      ['Is Lufthansa WiFi free?', 'Messaging is free for Travel ID and Miles & More members. Lufthansa Group Wi-Fi powered by Starlink is free in every class with a Travel ID or Miles & More login, but only on selected aircraft so far. FlyNet Premium is paid.'],
      ['How much does Lufthansa WiFi cost?', 'FlyNet Premium on short and medium-haul flights costs EUR 6 or 2,000 miles for flights up to 90 minutes and EUR 8 or 2,600 miles for longer flights. FlyNet Messaging is free for Travel ID and Miles & More members.'],
      ['Which Lufthansa planes have Starlink WiFi?', 'Lufthansa says it is only on selected aircraft at the start, with the first Airbus A320neo (D-AINM) in mid-August and the rest of the fleet equipped gradually. You cannot yet check availability before your flight.']
    ],
    tableHead: ['Service', 'What Lufthansa says'], tableTitle: 'What Lufthansa says about WiFi',
    rows: [['Lufthansa Group Wi-Fi (Starlink)', 'Free in all classes with a Travel ID or Miles & More login; selected aircraft'], ['FlyNet Messaging', 'Free for Travel ID and Miles & More members'], ['FlyNet Premium, up to 90 minutes', 'EUR 6 or 2,000 miles'], ['FlyNet Premium, over 90 minutes', 'EUR 8 or 2,600 miles'], ['HON Circle and connecting First Class', 'Free premium access']]
  });
}

// ---------------- BRITISH AIRWAYS ----------------
// Read 13 October 2026 on britishairways.com: Onboard Wi-Fi.
{
  const PG = ['https://www.britishairways.com/content/information/entertainment/wifi-on-board', 'British Airways: Onboard Wi-Fi', 'Packages and prices'];
  addN({
    slug: 'british-airways', slab: 'Which package?',
    h1: 'Is British Airways WiFi Free? Messaging, Stream and Starlink (2026)',
    desc: 'Is British Airways WiFi free? Messaging is free for British Airways Club members, and Stream is free in First. Other prices from GBP 1.99. Starlink is rolling out from the 787-8. From BA\'s own page, checked 13 October 2026.',
    answer: 'Messaging is free for members of The British Airways Club (joining is free), and Stream is free for customers in First. Non-members pay GBP 1.99 to 2.99 for messaging on short-haul and GBP 2.99 to 4.99 on long-haul. BA says WiFi is on most aircraft and Starlink is rolling out, starting with the 787-8.',
    srcNote: 'From British Airways\' own Wi-Fi page, last checked 13 October 2026. BA says Wi-Fi is available on most aircraft, so confirm with the airline before you fly.',
    scen: [
      card('msg', 'Messaging package', 'go', 'Free for Club members', 'Joining The British Airways Club is free', 'BA says messaging lets you use instant messaging apps and text-based emails without attachments, and there is no charge for members of The British Airways Club.', ['Non-members pay GBP 1.99 to GBP 2.99 on short-haul flights and GBP 2.99 to GBP 4.99 on long-haul flights.'], PG, true),
      card('stream', 'Stream package', 'warn', 'Free in First; paid otherwise', 'Browse, download and stream', 'BA says the Stream package covers messaging, browsing, larger emails and streaming music, video and films. It is free for customers travelling in First.', ['Otherwise GBP 4.99 to GBP 11.99 on short-haul flights and GBP 4.99 to GBP 21.99 on long-haul flights.'], PG),
      card('starlink', 'Starlink rollout', 'warn', 'Rolling out', 'Starting with the 787-8', 'BA says it is rolling out onboard Wi-Fi powered by Starlink, starting with its 787-8s and with more aircraft to follow over the coming months, and calls it fast, free Wi-Fi.', ['BA says its Wi-Fi service is available on most aircraft. The page does not list which aircraft have which service.'], PG)
    ],
    faq: [
      ['Is British Airways WiFi free?', 'Messaging is free for members of The British Airways Club (joining is free), and the Stream package is free for customers in First. Otherwise messaging costs GBP 1.99 to GBP 2.99 on short-haul and GBP 2.99 to GBP 4.99 on long-haul, and Stream costs GBP 4.99 up to GBP 11.99 (short-haul) or GBP 21.99 (long-haul).'],
      ['Does British Airways have Starlink WiFi?', 'BA says it is rolling out onboard Wi-Fi powered by Starlink, starting with its 787-8s, with more aircraft to follow over the coming months.'],
      ['How do I connect to British Airways WiFi?', 'On a Wi-Fi enabled aircraft your crew will tell you when you can connect. Join the "BAWi-Fi" network, enable flight mode once cruising above 10,000 ft, open your browser (or go to shop.ba.com), and choose the free messaging banner with your Club login, or buy a package.']
    ],
    tableHead: ['Package', 'Free for', 'Price otherwise'], tableTitle: 'BA\'s packages',
    tableNote: 'Copied from the package prices on British Airways\' Wi-Fi page.',
    rows: [['Messaging', 'Members of The British Airways Club', 'GBP 1.99 to GBP 2.99 (short-haul); GBP 2.99 to GBP 4.99 (long-haul)'], ['Stream', 'Customers travelling in First', 'GBP 4.99 to GBP 11.99 (short-haul); GBP 4.99 to GBP 21.99 (long-haul)']],
    extra: steps(['On a Wi-Fi enabled aircraft, wait for your crew to say you can connect.', 'Join the "BAWi-Fi" network and, once cruising above 10,000 ft, enable flight mode.', 'Open your browser. If the page does not load, go to shop.ba.com.', 'Use the free messaging banner with your British Airways Club login, or choose and buy a package.'])
  });
}

// ---------------- AIR FRANCE ----------------
// Read 13 October 2026 on airfrance.us: Inflight wifi: connectivity and options.
{
  const PG = ['https://wwws.airfrance.us/information/prepare/divertissements-wifi-presse/wifi-a-bord', 'Air France: Inflight wifi', 'Connectivity and options'];
  addN({
    slug: 'air-france', slab: 'Which one fits you?',
    h1: 'Is Air France WiFi Free? Flying Blue and Starlink (2026)',
    desc: 'Is Air France WiFi free? Free, unlimited high-speed Starlink WiFi for Flying Blue members on aircraft being progressively equipped. Others get a free Message Pass or a paid Wifi Pass. From Air France\'s own page, checked 13 October 2026.',
    answer: 'Free and unlimited high-speed Starlink WiFi is reserved for Flying Blue members (joining is free), on aircraft Air France is progressively equipping. On aircraft not yet equipped there is a free Message Pass and a paid Wifi Pass. You cannot confirm at booking which wifi your flight will have.',
    srcNote: 'From Air France\'s own wifi page (US site), last checked 13 October 2026. The aircraft can change until the day of departure, so confirm with the airline before you fly.',
    scen: [
      card('starlink', 'Starlink wifi', 'warn', 'Free for Flying Blue members', 'On aircraft being equipped', 'Air France says it is progressively equipping its aircraft to offer free and unlimited high-speed wifi with Starlink, reserved for its Flying Blue members. Joining is easy and free.', ['Air France says the aircraft assigned to a flight may change until the day of departure, so it cannot confirm at booking which wifi service you will have.', 'You can create a Flying Blue account at any time, including on board. Keep your login handy.'], PG, true),
      card('other', 'Aircraft not yet equipped', 'warn', 'Free Message Pass, paid Wifi Pass', 'The earlier offer', 'Air France says that if your aircraft is not yet equipped with high-speed wifi, its offer includes the free Message Pass and the paid Wifi Pass.', ['Air France\'s page does not show the Wifi Pass price in the text we read.'], PG)
    ],
    faq: [
      ['Is Air France WiFi free?', 'Free and unlimited Starlink wifi is reserved for Flying Blue members, which is free to join, on aircraft that have it. On aircraft not yet equipped there is a free Message Pass and a paid Wifi Pass.'],
      ['How do I connect to Air France WiFi?', 'Select the "AirFranceWifi" network in your device settings with airplane mode on (turn your VPN off), go to the login portal or type wifi.airfrance.com, and enter your Flying Blue email or number and password.'],
      ['Can I book an Air France flight with Starlink WiFi?', 'No, not with certainty. Air France says the aircraft can change until the day of departure, so it cannot confirm which wifi service you will have at booking.']
    ],
    tableHead: ['Question', 'What Air France says'], tableTitle: 'What Air France says about wifi',
    rows: [['Starlink wifi', 'Free and unlimited for Flying Blue members, on aircraft being equipped'], ['Aircraft not yet equipped', 'Free Message Pass and paid Wifi Pass'], ['Not a Flying Blue member', 'Join free, also possible on board'], ['VPN', 'Allowed, but turn it off while connecting']],
    extra: steps(['Select the "AirFranceWifi" network in your device settings and check airplane mode is on. Turn off any VPN.', 'Go to the "AirFranceWifi" login portal. If it does not open, type wifi.airfrance.com into your browser.', 'Enter your Flying Blue login (email or membership number) and password.'])
  });
}

// ---------------- IBERIA ----------------
// Read 13 October 2026 on iberia.com (US site): WiFi.
{
  const PG = ['https://www.iberia.com/us/on-board/wifi/', 'Iberia: WiFi on board', 'Options, coverage and Starlink'];
  addN({
    slug: 'iberia', slab: 'Which one fits you?',
    h1: 'Is Iberia WiFi Free? Messaging, Business and Starlink (2026)',
    desc: 'Is Iberia WiFi free? Free messaging, and free WiFi all flight for Business, Iberia Club members and anyone who registers on board. Iberia says 96% of aircraft have WiFi. From Iberia\'s own page, checked 13 October 2026.',
    answer: 'Iberia says 96% of its aircraft have WiFi. Free connectivity for messaging apps is offered, and the whole flight is free for customers in Business, Iberia Club members and anyone who registers with the programme during the flight. Payment packages cover browsing, streaming and email. Iberia Regional Air Nostrum aircraft have no WiFi.',
    srcNote: 'From Iberia\'s own WiFi page (US site), last checked 13 October 2026. Connectivity comes from three different suppliers, so it can differ from one flight to another.',
    scen: [
      card('msg', 'Free messaging', 'go', 'Free messaging', 'WhatsApp, Messenger, Telegram', 'Iberia offers free connectivity for messaging apps such as WhatsApp, Messenger and Telegram.', ['Iberia says it offers WiFi on 96% of its aircraft, with global coverage by satellite or ground, and the signal may get weaker at some moments.'], PG, true),
      card('free', 'Business, Iberia Club', 'go', 'Free all flight', 'Business cabin, Iberia Club members, or register on board', 'Iberia says the free service throughout the flight is for customers travelling in Business, Iberia Club members, and anyone who registers with the programme during the flight.', ['If you are an Iberia Club member remember your password: you cannot reset it during the flight.'], PG),
      card('paid', 'Payment packages', 'warn', 'Paid', 'Browsing, streaming, email, documents', 'Iberia sells payment packages for internet browsing, streaming, email, messaging, and downloading and sending documents. Fares depend on the route.', ['Connect once you are on board to choose the plan.'], PG),
      card('starlink', 'Starlink', 'warn', 'Being added', 'Free high-speed WiFi', 'Iberia says it is incorporating free high-speed WiFi (Starlink) into its fleet.', ['Iberia\'s page does not list which aircraft have it.'], PG),
      card('regional', 'Iberia Regional Air Nostrum', 'stop', 'No WiFi', 'Regional Play instead', 'Iberia says Iberia Regional Air Nostrum aircraft do not have wifi service on board.', ['Regional Play is a digital onboard entertainment platform that lets passengers access movies, series, news and games free from their own devices.'], PG)
    ],
    faq: [
      ['Is Iberia WiFi free?', 'Messaging apps are free, and the whole flight is free for customers in Business, Iberia Club members and anyone who registers with the programme during the flight. Browsing, streaming and email packages are paid.'],
      ['Does Iberia have WiFi on all flights?', 'Iberia says it offers WiFi on 96% of its aircraft. Iberia Regional Air Nostrum aircraft do not have wifi service on board.'],
      ['How do I connect to Iberia WiFi?', 'Enable flight mode, select the "Iberia WiFi" network, and the captive portal should open. If it does not, scan the QR code on your seat or type shop.iberia.com into your browser.']
    ],
    tableHead: ['Question', 'What Iberia says'], tableTitle: 'What Iberia says about WiFi',
    rows: [['Aircraft with WiFi', '96% of its aircraft'], ['Messaging apps', 'Free'], ['Business, Iberia Club, or register on board', 'Free all flight'], ['Browsing, streaming, email, documents', 'Paid packages; fares depend on the route'], ['Iberia Regional Air Nostrum', 'No wifi; Regional Play entertainment']],
    extra: steps(['Enable flight mode on your device.', 'Select the "Iberia WiFi" network. The captive portal should open by itself.', 'If not, scan the QR code on your seat or type shop.iberia.com into your browser.'])
  });
}

// ---------------- KLM ----------------
// Read 13 October 2026 on klm.com: WiFi on board your KLM flight.
{
  const PG = ['https://www.klm.com/information/travel-class-extra-options/inflight-wifi', 'KLM: WiFi on board', 'Message Pass and WiFi Pass'];
  addN({
    slug: 'klm', slab: 'Which pass?',
    h1: 'Is KLM WiFi Free? Message Pass and WiFi Pass (2026)',
    desc: 'Is KLM WiFi free? Sending messages is usually free with the Message Pass. Email, social media and streaming need the paid WiFi Pass. Not all KLM aircraft have WiFi. From KLM\'s own page, checked 13 October 2026.',
    answer: 'Sending messages via WiFi is usually free with the Message Pass. To check email and social media or stream music and films you buy the paid WiFi Pass. KLM says not all aircraft have inflight WiFi: look for the WiFi symbol while booking, or check My Trip or the app.',
    srcNote: 'From KLM\'s own WiFi page, last checked 13 October 2026. KLM does not list aircraft there, so check your flight in My Trip or the app.',
    scen: [
      card('msg', 'Message Pass', 'go', 'Usually free', 'Messaging', 'KLM says sending messages via WiFi is usually free with the Message Pass.', ['KLM\'s page does not say more about the Message Pass conditions.'], PG, true),
      card('pass', 'WiFi Pass', 'warn', 'Paid', 'Email, social media, streaming', 'To check your email and social media, or stream music and films, KLM says you buy its paid WiFi Pass.', ['If something goes wrong you can request a refund for your purchased pass.'], PG),
      card('check', 'Does my flight have WiFi?', 'warn', 'Not every aircraft', 'Check before you fly', 'KLM says not all aircraft have inflight WiFi. If you see a WiFi symbol during booking, your flight will have WiFi. You can also check in My Trip or in the app.', ['KLM\'s page does not list aircraft types.'], PG)
    ],
    faq: [
      ['Is KLM WiFi free?', 'Sending messages via WiFi is usually free with the Message Pass. Email, social media and streaming need the paid WiFi Pass.'],
      ['Does every KLM flight have WiFi?', 'No. KLM says not all aircraft have inflight WiFi. A WiFi symbol during booking means your flight will have WiFi, and you can also check in My Trip or the app.'],
      ['Can I get a refund on KLM WiFi?', 'KLM says that when something goes wrong you can request a refund for your purchased WiFi Pass.']
    ],
    tableHead: ['Question', 'What KLM says'], tableTitle: 'What KLM says about WiFi',
    rows: [['Message Pass', 'Usually free'], ['WiFi Pass', 'Paid: email, social media, streaming'], ['Does my flight have WiFi?', 'WiFi symbol while booking, or My Trip and the app'], ['Refund', 'You can request one for a purchased WiFi Pass']]
  });
}

// ---------------- AIR EUROPA ----------------
// Read 13 October 2026 on aireuropa.com: Onboard Wi-Fi.
{
  const PG = ['https://www.aireuropa.com/es/en/aea/aexperience/services/onboard-wifi.html', 'Air Europa: Onboard Wi-Fi', 'Packages and routes'];
  addN({
    slug: 'air-europa', slab: 'Which package?',
    h1: 'Does Air Europa Have WiFi? Packages, Price and Routes (2026)',
    desc: 'Does Air Europa have WiFi? Yes on a large part of its fleet on transoceanic flights, with CHAT, BROWSE and BROWSE PRO packages priced by flight length (prices shown include EUR 2 to EUR 30). From Air Europa\'s own page, checked 13 October 2026.',
    answer: 'Air Europa says its Wi-Fi is available on a large part of its fleet on transoceanic flights, on routes it lists. Packages: CHAT (messaging), BROWSE and BROWSE PRO, priced by flight duration (prices shown on its page include EUR 2 to EUR 30). None of the packages allows video streaming.',
    srcNote: 'From Air Europa\'s own Wi-Fi page, last checked 13 October 2026. The service is subject to change, and the page does not show every price, so confirm with the airline before you fly.',
    scen: [
      card('chat', 'CHAT', 'warn', 'Paid: messaging', 'WhatsApp, Messenger, iMessage', 'Air Europa\'s CHAT package lets you message friends and family on WhatsApp, Messenger, iMessage and more. It does not allow browsing or video streaming.', ['Prices shown on the page include EUR 2 and EUR 6, depending on flight duration.'], PG, true),
      card('browse', 'BROWSE', 'warn', 'Paid: browse and email', 'Social media, email, chat', 'BROWSE lets you browse the internet, check social media, chat and manage email. It does not allow VPN connections or video streaming.', ['Prices shown on the page include EUR 5 and EUR 21, depending on flight duration.'], PG),
      card('pro', 'BROWSE PRO', 'warn', 'Paid: high speed with VPN', 'Music and online games', 'BROWSE PRO is high-speed browsing with a VPN connection, email, chat, music playback and online games. It does not allow video streaming.', ['Prices shown on the page include EUR 12 and EUR 30, depending on flight duration.'], PG),
      card('routes', 'Which flights', 'warn', 'Transoceanic routes it lists', 'Ask the crew for other routes', 'Air Europa says the service is available on a large part of its fleet on transoceanic flights with origin or destination in cities it lists, such as Madrid, New York, Miami, Bogota and Tel Aviv.', ['If your flight has a different origin or destination, the page says to ask the onboard crew whether the service is available.'], PG)
    ],
    faq: [
      ['Does Air Europa have WiFi?', 'Yes, on a large part of its fleet on transoceanic flights between the cities it lists. For other routes Air Europa says to ask the onboard crew.'],
      ['How much does Air Europa WiFi cost?', 'Air Europa prices each package by flight duration (under 3 hours, 3 to 7 hours, over 7 hours). Prices shown on its page include CHAT EUR 2 and EUR 6, BROWSE EUR 5 and EUR 21, and BROWSE PRO EUR 12 and EUR 30. Confirm the price for your flight.'],
      ['Can I stream video on Air Europa WiFi?', 'No. Air Europa says none of its CHAT, BROWSE and BROWSE PRO packages allows video streaming.']
    ],
    tableHead: ['Package', 'What it allows', 'Price range on Air Europa\'s page'], tableTitle: 'Air Europa\'s packages',
    tableNote: 'Air Europa prices each package by flight duration. We show the prices that appear on its page.',
    rows: [['CHAT', 'Messaging (WhatsApp, Messenger, iMessage). No browsing or video streaming', 'EUR 2 and EUR 6 (by flight duration)'], ['BROWSE', 'Browsing, social media, email, chat. No VPN or video streaming', 'EUR 5 and EUR 21 (by flight duration)'], ['BROWSE PRO', 'High-speed browsing with VPN, email, chat, music, online games. No video streaming', 'EUR 12 and EUR 30 (by flight duration)']]
  });
}

// ---------------- RYANAIR ----------------
// Read 13 October 2026 on help.ryanair.com: "Will there be Wi-Fi on board?"
{
  const PG = ['https://help.ryanair.com/hc/en-us/articles/12890696574609-Will-there-be-Wi-Fi-on-board', 'Ryanair help: Will there be Wi-Fi on board?', 'Official answer'];
  addN({
    slug: 'ryanair', slab: 'What do you want to know?',
    h1: 'Does Ryanair Have WiFi? (2026)',
    desc: 'Does Ryanair have WiFi? No. Ryanair\'s help centre says it does not currently offer Wi-Fi on its flights. From Ryanair\'s own page, checked 13 October 2026.',
    answer: 'No. Ryanair\'s help centre says: "Currently, we do not offer Wi-Fi on our flights."',
    srcNote: 'From Ryanair\'s own help centre, last checked 13 October 2026. This can change, so confirm with the airline.',
    scen: [card('no', 'Wi-Fi on board', 'stop', 'No WiFi', 'Ryanair does not offer it', 'Ryanair\'s help centre answers "Will there be Wi-Fi on board?" with: no, currently it does not offer Wi-Fi on its flights.', ['Download what you need before you fly.'], PG, true)],
    faq: [['Does Ryanair have WiFi?', 'No. Ryanair\'s help centre says it does not currently offer Wi-Fi on its flights.']],
    tableHead: ['Question', 'What Ryanair says'], tableTitle: 'What Ryanair says',
    rows: [['Wi-Fi on board', 'Not offered']]
  });
}

// ---------------- ICELANDAIR ----------------
// Read 13 October 2026 on icelandair.com (US site): Internet on your flight.
{
  const PG = ['https://www.icelandair.com/flights/internet/', 'Icelandair: Internet on your flight', 'Wi-Fi on board and prices'];
  addN({
    slug: 'icelandair', slab: 'Which aircraft?',
    h1: 'Does Icelandair Have WiFi? Aircraft, Price and Free Access (2026)',
    desc: 'Does Icelandair have WiFi? Yes on the A321, 757, 767 and 737. EUR 6 to EUR 24 for Economy; free for Saga Premium and Saga Gold. Not on domestic or Greenland flights. From Icelandair\'s own page, checked 13 October 2026.',
    answer: 'Icelandair says Wi-Fi is on its Airbus A321 and Boeing 757, 767 and 737 aircraft, gate to gate. Economy passengers pay for one device; Saga Premium, Saga Premium Flex and Saga Gold members get 2 devices free. Wi-Fi is not available on domestic flights and flights to Greenland.',
    srcNote: 'From Icelandair\'s own page (US site), last checked 13 October 2026. Its service differs by aircraft type, so confirm for your flight.',
    scen: [
      card('a321', 'A321LR / 737 MAX', 'warn', 'Paid for Economy', 'EUR 12 Iceland to Europe; EUR 24 to USA or Canada', 'On the Airbus A321LR and Boeing 737 MAX, Icelandair lists Wi-Fi for web browsing, email and streaming at EUR 12 (Iceland to Europe) and EUR 24 (Iceland to USA or Canada).', ['You can also pay with Saga Points in the Wi-Fi portal.'], PG, true),
      card('b757', '757 / 767', 'warn', 'Paid for Economy', 'EUR 6 Iceland to Europe; EUR 12 to USA or Canada', 'On the Boeing 757 and 767, Icelandair lists Wi-Fi for web browsing and email at EUR 6 (Iceland to Europe) and EUR 12 (Iceland to USA or Canada).', ['Streaming is not listed for the 757 and 767.'], PG),
      card('free', 'Free access', 'go', 'Free for 2 devices', 'Saga Premium, Saga Premium Flex, Saga Gold', 'Passengers flying Saga Premium and Saga Premium Flex, and Icelandair Saga Gold members, receive complimentary Wi-Fi access for 2 devices.', ['Economy passengers can buy access to Wi-Fi on a single device for a small fee. Saga Club members can pay with Saga Points.'], PG),
      card('none', 'Domestic and Greenland flights', 'stop', 'No WiFi', 'Because of the aircraft used', 'Icelandair says Wi-Fi is not available on domestic flights and flights to Greenland, due to the aircraft serving these destinations.', ['This is the footnote on its Wi-Fi availability statement.'], PG)
    ],
    faq: [
      ['Does Icelandair have WiFi?', 'Yes, on its Airbus A321 and Boeing 757, 767 and 737 aircraft, from boarding until you are back in the airport. Not on domestic flights and flights to Greenland.'],
      ['Is Icelandair WiFi free?', 'Saga Premium and Saga Premium Flex passengers, and Saga Gold members, get complimentary Wi-Fi for 2 devices. Economy passengers pay for one device.'],
      ['How much does Icelandair WiFi cost?', 'On the A321LR and 737 MAX: EUR 12 Iceland to Europe, EUR 24 Iceland to USA or Canada (browsing, email, streaming). On the 757 and 767: EUR 6 and EUR 12 (browsing, email).']
    ],
    tableHead: ['Aircraft', 'Iceland to Europe', 'Iceland to USA/Canada', 'What it covers'], tableTitle: 'Icelandair\'s Wi-Fi prices by aircraft',
    tableNote: 'Copied from the price table on Icelandair\'s page.',
    rows: [['Airbus A321LR, Boeing 737 MAX', 'EUR 12', 'EUR 24', 'Web browsing, email, streaming'], ['Boeing 757 / 767', 'EUR 6', 'EUR 12', 'Web browsing, email']]
  });
}

// ---------------- SWISS ----------------
// Read 13 October 2026 on swiss.com (US site): SWISS Connect.
{
  const PG = ['https://www.swiss.com/us/en/fly/on-board/swiss-connect', 'SWISS: SWISS Connect', 'Packages and prices'];
  addN({
    slug: 'swiss', slab: 'Which package?',
    h1: 'Is SWISS WiFi Free? SWISS Connect Messaging and Price (2026)',
    desc: 'Is SWISS WiFi free? Free unlimited messaging, SWISS First and HON Circle get free internet, and Wi-Fi Premium is from CHF 25 on long-haul. All long-haul aircraft are equipped. From SWISS\'s own page, checked 13 October 2026.',
    answer: 'Messaging is free and unlimited on SWISS Connect (on selected flights you log in with a Travel ID or Miles & More account). SWISS First guests, and HON Circle members, get free internet. On long-haul, where all aircraft are equipped, Wi-Fi Premium is from CHF 25 / EUR 27 / USD 30 for up to 4 hours or from CHF 35 / EUR 37 / USD 40 for the full flight.',
    srcNote: 'From SWISS\'s own SWISS Connect page (US site), last checked 13 October 2026. Short-haul Wi-Fi is still rolling out.',
    scen: [
      card('msg', 'Free messaging', 'go', 'Free and unlimited', 'Throughout your flight', 'SWISS says free, unlimited messaging is available throughout your flight by logging in to the SWISS Connect portal.', ['On selected flights, logging in with a Travel ID or Miles & More account is required.', 'Messaging covers sending and receiving messages and photos on messaging apps.'], PG, true),
      card('long', 'Long-haul Wi-Fi Premium', 'warn', 'Paid, from CHF 25', 'Up to 4 hours or the full flight', 'SWISS says all of its long-haul aircraft are equipped with SWISS Connect. Wi-Fi Premium (social media, browsing, audio streaming, VPN) is from CHF 25 / EUR 27 / USD 30 for up to 4 hours, and from CHF 35 / EUR 37 / USD 40 for the full flight.', ['SWISS First guests enjoy complimentary internet on SWISS-operated flights.', 'HON Circle members enjoy complimentary internet access when logging in with Miles & More or Travel ID.'], PG),
      card('short', 'Short-haul', 'warn', 'Rolling out', 'Free messaging; Premium paid', 'SWISS says it is continuously rolling out its Wi-Fi offering on its short-haul fleet. Free messaging is offered, and Wi-Fi Premium is paid.', ['SWISS\'s short-haul prices are on its page; we did not read them, so we do not list them here.'], PG)
    ],
    faq: [
      ['Is SWISS WiFi free?', 'Messaging is free and unlimited on SWISS Connect, and SWISS First guests and HON Circle members get free internet. Wi-Fi Premium is paid.'],
      ['How much does SWISS WiFi cost?', 'On long-haul, Wi-Fi Premium is from CHF 25 / EUR 27 / USD 30 for up to 4 hours and from CHF 35 / EUR 37 / USD 40 for the full flight. Messaging is free.'],
      ['Do all SWISS planes have WiFi?', 'SWISS says all of its long-haul aircraft are equipped with SWISS Connect, and it is continuously rolling out Wi-Fi on its short-haul fleet.']
    ],
    tableHead: ['Package', 'Price'], tableTitle: 'SWISS\'s long-haul packages',
    tableNote: 'Copied from the long-haul table on SWISS\'s page.',
    rows: [['Free Messaging', 'Complimentary (on selected aircraft, a Travel ID or Miles & More login may be required)'], ['Wi-Fi Premium, up to 4 hours', 'From CHF 25 / EUR 27 / USD 30'], ['Wi-Fi Premium, full flight', 'From CHF 35 / EUR 37 / USD 40']]
  });
}

// ---------------- AEGEAN ----------------
// Read 13 October 2026 on aegeanair.com: Free Wi-Fi for all!
{
  const PG = ['https://en.aegeanair.com/travel-info/travelling-with-aegean/on-board/wifi-onboard/', 'Aegean: Wi-Fi onboard', 'Free Wi-Fi bundles'];
  addN({
    slug: 'aegean', slab: 'Who are you?',
    h1: 'Is Aegean WiFi Free? Miles+Bonus, Business and Bundles (2026)',
    desc: 'Is Aegean WiFi free? Free for Miles+Bonus members and Business Class on aircraft with Wi-Fi. Stream is EUR 12 for Economy. A free bundle covers flights within Greece. From Aegean\'s own page, checked 13 October 2026.',
    answer: 'Aegean says all you need is a Miles+Bonus membership or a Business Class flight to enjoy free Wi-Fi, on aircraft equipped with Wi-Fi technology, on European routes. Stream costs EUR 12 or 3,600 miles for Economy and is free for Miles+Bonus Gold and Business. Flights within Greece get a free bundle at up to 600 kbps.',
    srcNote: 'From Aegean\'s own Wi-Fi page, last checked 13 October 2026. Aegean does not list aircraft there, so check whether your flight offers Wi-Fi when you book.',
    scen: [
      card('free', 'Miles+Bonus or Business Class', 'go', 'Free bundle', 'Log in to the AEGEAN Wi-Fi portal', 'Aegean says all you need is a Miles+Bonus membership or a Business Class flight for free Wi-Fi: log in with your Miles+Bonus credentials, or your booking reference if you have a Business Class ticket (trips from or to Greece), and activate the free internet bundle.', ['It is available on all aircraft equipped with Wi-Fi technology. Internet coverage includes only European routes, and a free bundle is available for low coverage international routes.', 'If you do not have an account yet you can sign up before or during your flight.'], PG, true),
      card('stream', 'Stream bundle', 'warn', 'EUR 12 in Economy', 'Free for Miles+Bonus Gold and Business', 'Aegean lists the Stream bundle (up to 15 Mbps, for audio and video streaming) at EUR 12 or 3,600 miles for Economy, free for Miles+Bonus Gold and free for Business.', ['Aegean also lists a Surf bundle (up to 1.5 Mbps for basic browsing, email and social media) at EUR 6 for Economy.'], PG),
      card('greece', 'Flights within Greece', 'go', 'Free bundle', 'Up to 600 kbps', 'For flights within Greece, Aegean says a "Free Wi-Fi" bundle is available with speed of up to 600 kbps, offering instant messaging through chatting apps, basic web browsing and social media access.', ['You can pre-purchase a Wi-Fi bundle and check whether your flight offers Wi-Fi onboard before you fly.'], PG)
    ],
    faq: [
      ['Is Aegean WiFi free?', 'Aegean says Miles+Bonus members and Business Class passengers get free Wi-Fi on aircraft equipped with Wi-Fi technology, on European routes. Flights within Greece have a free bundle at up to 600 kbps. Stream is paid for Economy.'],
      ['How much does Aegean WiFi cost?', 'The Stream bundle is EUR 12 or 3,600 miles for Economy, free for Miles+Bonus Gold and Business. The Surf bundle is EUR 6 for Economy.'],
      ['How do I connect to Aegean WiFi?', 'Enter the AEGEAN Wi-Fi portal and log in with your Miles+Bonus credentials, or with your booking reference if you have a Business Class ticket (trips from or to Greece), then activate the free internet bundle.']
    ],
    tableHead: ['Bundle', 'Who gets it free', 'Price otherwise'], tableTitle: 'Aegean\'s bundles',
    tableNote: 'Copied from the bundle table on Aegean\'s page.',
    rows: [['Free Wi-Fi bundle (flights within Greece, up to 600 kbps)', 'Messaging, basic browsing, social media', 'Free'], ['Surf (up to 1.5 Mbps)', 'Listed on Aegean\'s page for Economy and Miles+Bonus Blue or Silver', 'EUR 6'], ['Stream (up to 15 Mbps)', 'Free for Miles+Bonus Gold and Business', 'EUR 12 or 3,600 miles for Economy']]
  });
}

// ---------------- LOT ----------------
// Read 14 October 2026 on lot.com (US site): Wi-Fi on board.
{
  const PG = ['https://www.lot.com/us/en/journey/on-board/inflight-wifi', 'LOT: Wi-Fi on board', 'Available internet packages on board'];
  addN({
    slug: 'lot-polish', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is LOT WiFi Free? Cost and Which Planes Have It (2026)',
    desc: 'Is LOT WiFi free? Free for Business Class and Miles & More Senator and HON Circle members. Others pay $29 for full internet or $7 for chat. Only on selected Boeing 787s. From LOT\'s own page, checked 14 October 2026.',
    answer: 'WiFi is free for LOT Business Class passengers and Miles & More members with Senator or HON Circle status. Everyone else can buy the full Streaming package for $29 or the Chat package for $7. WiFi is only on selected Boeing 787 Dreamliner aircraft.',
    srcNote: 'From LOT\'s own WiFi page, last checked 14 October 2026. LOT says WiFi is on selected routes and the connection quality may be limited on some flights.',
    scen: [
      card('free', 'Business Class or Senator / HON Circle', 'go', 'Free full internet', 'On scheduled flights', 'LOT says Business Class passengers and Miles & More members with Senator and HON Circle status travelling on scheduled flights get full internet access as part of their ticket.', ['LOT says the WiFi is only on selected Boeing 787 Dreamliner aircraft. Look for the WiFi sign on board.'], PG, true),
      card('stream', 'Streaming package', 'warn', '$29', 'Unlimited internet for the flight', 'LOT lists the Streaming Internet Package at $29: unlimited internet access for work, streaming, travel planning and communication.', ['LOT accepts Visa, MasterCard, American Express, Apple Pay and Google Pay. Payment is in USD only.', 'You cannot buy it in advance. It can only be purchased on board.'], PG),
      card('chat', 'Chat package', 'warn', '$7', 'Messaging apps only', 'LOT lists the Chat Package at $7 for WhatsApp, Messenger, iMessage, Signal, Viber, Line, Kakao and Telegram. Sending photos, videos and other multimedia files is not available with this package.', ['You can use one package on one device at a time, and swap it to another device.'], PG)
    ],
    faq: [
      ['Is LOT WiFi free?', 'WiFi is free for LOT Business Class passengers and Miles & More members with Senator or HON Circle status. For everyone else it is paid: $29 for the Streaming package or $7 for the Chat package.'],
      ['Which LOT planes have WiFi?', 'LOT says WiFi is available on selected Boeing 787 Dreamliner aircraft, on selected routes. Look for the WiFi sign on board and check whether FlyLOT Wi-Fi appears in your network list.'],
      ['How do I connect to LOT WiFi?', 'Turn on airplane mode, then turn on WiFi. Select FlyLot Wi-Fi, open wi-fi.lot.com if the login page does not appear, and choose your internet option. The service is provided by Viasat.']
    ],
    tableHead: ['Package', 'Who gets it free', 'Price otherwise'], tableTitle: 'LOT\'s WiFi packages',
    tableNote: 'Copied from LOT\'s WiFi page.',
    rows: [['Streaming (full internet)', 'Business Class; Miles & More Senator and HON Circle', '$29'], ['Chat (messaging apps)', 'Not listed as free', '$7']],
    extra: steps(['Turn on airplane mode, then turn on WiFi.', 'Select FlyLot Wi-Fi from the list of networks.', 'If the login page does not open, go to wi-fi.lot.com (only works on board).', 'Choose your internet option.'])
  });
}

// ---------------- EUROWINGS ----------------
// Read 14 October 2026 on eurowings.com: Internet & in-flight entertainment on Eurowings flights.
{
  const PG = ['https://www.eurowings.com/en/information/on-board/in-flight-entertainment.html', 'Eurowings: Internet and in-flight entertainment', 'Wings Connect packages'];
  addN({
    slug: 'eurowings', slab: 'Which package?', checked: '14 October 2026',
    h1: 'Does Eurowings Have WiFi? Wings Connect Cost (2026)',
    desc: 'Does Eurowings have WiFi? Wings Connect is on selected flights and aircraft. Chat from EUR 2.90, Connect Premium with entertainment from EUR 7.90. Eurowings\' own page, checked 14 October 2026.',
    answer: 'Eurowings offers WiFi through Wings Connect, only on selected flights and aircraft. It is paid: Chat from EUR 2.90, Connect 30 or 60 minutes from EUR 3.90, Connect Premium for the full flight from EUR 7.90. You can browse eurowings.com free of charge on aircraft with Wings Connect.',
    srcNote: 'From Eurowings\' own page, last checked 14 October 2026. Eurowings says internet depends on the route and availability and may not be available on some A319, A320, A321 and B737 aircraft.',
    scen: [
      card('free', 'Free on board', 'go', 'eurowings.com is free', 'On aircraft with Wings Connect', 'Eurowings says you can surf its homepage eurowings.com free of charge on all aircraft with the Wings Connect service. The Wings Connect portal also shows flight information and partner offers free of charge.', ['Wings Entertainment (films, series, music) is part of Connect Premium, so it is not free.'], PG, true),
      card('chat', 'Chat package', 'warn', 'EUR 2.90 or 3.90', 'Messaging apps for the full flight', 'Eurowings lists Chat at EUR 2.90 for flights under 2 hours and EUR 3.90 for longer flights, for instant messaging apps.', ['Only on selected aircraft and routes.'], PG),
      card('c30', 'Connect 30 / Connect 60', 'warn', 'EUR 3.90 or 6.90', 'Internet for 30 or 60 minutes', 'Eurowings lists internet access for 30 or 60 minutes at EUR 3.90 for flights under 2 hours and EUR 6.90 for longer flights.', ['Only on selected aircraft and routes.'], PG),
      card('premium', 'Connect Premium', 'warn', 'EUR 7.90 or 9.90', 'Full flight plus Wings Entertainment', 'Eurowings lists Connect Premium at EUR 7.90 for flights under 2 hours and EUR 9.90 for longer flights: internet for the full flight plus on-board entertainment.', ['Payment is by credit card (Visa, MasterCard, AmEx, Diners Club or JCB) or PayPal.'], PG)
    ],
    faq: [
      ['Does Eurowings have WiFi?', 'Yes, on selected flights and aircraft through Wings Connect. Eurowings says internet depends on the route and availability and may not be available on some A319, A320, A321 and B737 aircraft.'],
      ['Is Eurowings WiFi free?', 'No. You can surf eurowings.com free of charge on aircraft with Wings Connect, but internet is paid: Chat from EUR 2.90, Connect 30 or 60 minutes from EUR 3.90, Connect Premium from EUR 7.90.'],
      ['How much does Eurowings WiFi cost?', 'Prices depend on flight time. Under 2 hours: Chat EUR 2.90, Connect 30/60 EUR 3.90, Connect Premium EUR 7.90. Over 2 hours: EUR 3.90, EUR 6.90 and EUR 9.90.']
    ],
    tableHead: ['Package', 'Flight under 2 hours', 'Flight over 2 hours'], tableTitle: 'Eurowings\' Wings Connect packages',
    tableNote: 'Copied from the price table and footnotes on Eurowings\' page.',
    rows: [['Chat (messaging apps)', 'EUR 2.90', 'EUR 3.90'], ['Connect 30 / Connect 60', 'EUR 3.90', 'EUR 6.90'], ['Connect Premium (full flight and entertainment)', 'EUR 7.90', 'EUR 9.90']]
  });
}

// ---------------- EASYJET (NOT from the airline's own site: user-approved exception 2026-10-14) ----------------
// easyJet's own pages say nothing current about Wi-Fi (help page: nothing; media centre: only 2017 stories). Source = press release of its equipment partner AirFi, 22 May 2023, read in full (text pasted by the user because airfi.aero blocks automated reads).
// Rule for such pages: only an airline/partner/regulator release read in full, never blogs or AI summaries; the page says plainly it is not from the airline's own site.
{
  const PG = ['https://airfi.aero/airfi-completes-deployment-of-portable-streaming-solution-across-entire-easyjet-fleet/', 'AirFi press release, 22 May 2023 (easyJet\'s equipment partner)', 'Not easyJet\'s own site'];
  addN({
    slug: 'easyjet', unofficial: 'easyJet\'s own website has no current WiFi information. This source is unofficial: a press release by easyJet\'s equipment partner.', slab: 'What do you want to do?', checked: '14 October 2026',
    h1: 'Is There WiFi on easyJet? What You Get on Board (2026)',
    desc: 'Is there WiFi on easyJet? easyJet planes have a free on-board WiFi portal with games, flight info and the shop menu. Not from easyJet\'s own site: from the press release of its equipment partner AirFi, checked 14 October 2026.',
    answer: 'Not from easyJet\'s own website: this comes from a press release by AirFi, the company that supplies easyJet\'s system. AirFi says it is installed on all 327 easyJet aircraft and gives free access to games, journey-specific content, airline information and the shop menu on your own phone, tablet or laptop, through a local WiFi network on board. The release does not say that the internet itself is available.',
    srcNote: '⚠ This information is not from easyJet\'s own website. easyJet\'s pages say nothing current about WiFi, so we used a press release by its equipment partner AirFi (22 May 2023), read in full on 14 October 2026. It may be out of date, so confirm with easyJet before you fly.',
    scen: [
      card('portal', 'On-board portal', 'warn', 'Free on-board WiFi portal', 'Games, flight info and the shop menu', 'AirFi says its system is installed on all 327 easyJet aircraft and creates a local WiFi network on board. Access to the content is free.', ['The portal gives games, journey-specific content, airline information and the in-flight shop menu on your own phone, tablet or laptop.', 'AirFi says you do not need to download an app before the flight or share personal information to connect.', 'Not from easyJet\'s own website. The release is from May 2023.'], PG, true),
      card('net', 'Internet access', 'warn', 'Not described', 'Release does not mention the internet', 'The AirFi release describes a local network that serves content. It does not say passengers can browse the internet, use messaging apps or stream from outside services.', ['Neither easyJet nor AirFi says in the sources we read that internet access is offered, and neither says it is not.'], PG)
    ],
    faq: [
      ['Is there WiFi on easyJet planes?', 'According to AirFi, easyJet\'s equipment partner, all 327 easyJet aircraft have a free on-board WiFi network with a portal for games, flight information and the shop menu. The release does not say the internet itself is available. This is not from easyJet\'s own website.'],
      ['Is easyJet WiFi free?', 'AirFi says access to the on-board content is free, with no app download and no personal information needed. It does not describe any paid internet service.'],
      ['How do I connect to easyJet WiFi?', 'AirFi says you connect to a local WiFi network created on board, using your own phone, tablet or laptop, with no app needed beforehand.']
    ],
    tableHead: ['Question', 'What AirFi says (not easyJet\'s own site)'], tableTitle: 'What the AirFi release says',
    tableNote: 'Copied from AirFi\'s press release of 22 May 2023. easyJet\'s own pages do not give this information.',
    rows: [['Which aircraft', 'All 327 easyJet aircraft, according to the release'], ['Cost', 'Access to the content is free'], ['What you can use', 'Games, journey-specific content, airline information, in-flight shop menu'], ['App or personal details needed', 'No'], ['Internet access', 'Not mentioned in the release']]
  });
}

// ---------------- WIZZ AIR ----------------
// Read 14 October 2026 on wizzair.com (news pages): Starlink release 8 June 2026; Immfly and gateretail release 25 March 2026.
{
  const P1 = ['https://www.wizzair.com/en-gb/information-and-services/about-us/news/2026/06/08/wizz-air-declares-the-beginning-of-the-end-for-airplane-mode', 'Wizz Air: Starlink connectivity launching in 2027 (8 June 2026)', 'Wizz Air news'];
  const P2 = ['https://www.wizzair.com/en-gb/information-and-services/about-us/news/2026/03/25/wizz-air-launches-integrated-digital-cabin-ecosystem-with-immfly-and-gateretail', 'Wizz Air: digital cabin ecosystem with Immfly and gateretail (25 March 2026)', 'Wizz Air news'];
  addN({
    slug: 'wizz-air', slab: 'What do you want to know?', checked: '14 October 2026',
    h1: 'Does Wizz Air Have WiFi? Starlink Plans and What Works Now (2026)',
    desc: 'Does Wizz Air have WiFi? Not yet on regular flights: Wizz Air says Starlink installations begin in 2027. A six-month trial runs on five UK aircraft. From Wizz Air\'s own news pages, checked 14 October 2026.',
    answer: 'Not yet. Wizz Air announced in June 2026 that Starlink installations begin in 2027. Today it runs a six-month connectivity trial on five UK-based aircraft, and in-seat ordering from your phone works across its Airbus A320 and A321 fleet without internet.',
    srcNote: 'From Wizz Air\'s own news pages, last checked 14 October 2026. Wizz Air publishes no price for Starlink yet, and the plan may change.',
    scen: [
      card('now', 'Regular flights today', 'stop', 'No in-flight internet yet', 'Starlink planned from 2027', 'Wizz Air says it will roll out Starlink connectivity across its fleet, with installations beginning in 2027.', ['Wizz Air says every new generation aircraft is expected to be Starlink-equipped.', 'The pages we read do not describe any other in-flight internet service on regular flights, and do not say if Starlink will be free or paid.'], P1, true),
      card('trial', 'Five UK aircraft', 'warn', 'Limited trial', 'Six months, five UK-based aircraft', 'Wizz Air launched a six-month proof of concept on five UK-based aircraft, using Immfly\'s Equilux server and Iridium\'s satellite network.', ['The trial covers wireless inflight entertainment purchases (movies, TV shows, podcasts, music, games and content for kids), inflight WhatsApp messaging, in-seat ordering and real-time flight and destination information.', 'Wizz Air says the solution may be expanded to more aircraft if the tests succeed. It does not give a price.'], P2),
      card('seat', 'In-seat ordering', 'warn', 'Works without internet', 'Needs the Wizz Air app downloaded first', 'Wizz Air says passengers who download its mobile app before travelling can browse and buy food, drinks and boutique products on their own device, even without internet access.', ['Orders are sent by Bluetooth to the cabin crew. Wizz Air says it is deployed across its fleet of more than 260 Airbus A320 and A321 aircraft.'], P2)
    ],
    faq: [
      ['Does Wizz Air have WiFi?', 'Not on regular flights yet. Wizz Air announced in June 2026 that Starlink installations begin in 2027. A six-month connectivity trial runs on five UK-based aircraft.'],
      ['Will Wizz Air WiFi be free?', 'Wizz Air has not said. Its Starlink announcement gives no price and does not say whether the service will be free or paid.'],
      ['Can I order food on Wizz Air without internet?', 'Yes. Wizz Air says passengers who download its mobile app before travelling can browse and buy food, drinks and boutique products from their own device, even without internet. Orders are sent by Bluetooth to the cabin crew.']
    ],
    tableHead: ['What', 'What Wizz Air says'], tableTitle: 'What Wizz Air says about connectivity',
    tableNote: 'Copied from Wizz Air\'s news releases of 8 June 2026 and 25 March 2026.',
    rows: [['Starlink', 'Announced; installations begin in 2027'], ['Starlink price', 'Not published'], ['Trial', 'Six months, five UK-based aircraft (Immfly Equilux server, Iridium satellite network)'], ['Trial services', 'Entertainment purchases, WhatsApp messaging, in-seat ordering, flight and destination information'], ['In-seat ordering', 'Across the fleet of more than 260 A320 and A321 aircraft; works without internet']]
  });
}

// ---------------- AER LINGUS ----------------
// Read 14 October 2026 on aerlingus.com: Wi-Fi in the Sky, Onboard Wi-Fi (plans, FAQ), Starlink Wi-Fi (FAQ).
{
  const OB = ['https://www.aerlingus.com/experience/onboard-features/wifi-in-the-sky/on-board-wifi/', 'Aer Lingus: Onboard Wi-Fi', 'Plans, aircraft and FAQ'];
  const SL = ['https://www.aerlingus.com/experience/onboard-features/wifi-in-the-sky/starlink-wifi/', 'Aer Lingus: Starlink Wi-Fi', 'Free Wi-Fi and FAQ'];
  const PRICES = 'Plans are priced by how long and what for, and the prices vary by route: Chat for an hour from EUR 3.49 / $3.99 / GBP 2.99, Keep chatting from EUR 5.99 / $6.99 / GBP 4.99, Stay connected from EUR 13.49 / $16.49 / GBP 11.99, Don\'t miss a thing (whole flight) from EUR 20.49 / $24.99 / GBP 17.99.';
  add({
    slug: 'aer-lingus', checked: '14 October 2026',
    h1: 'Is Aer Lingus WiFi Free? WiFi by Aircraft (2026)',
    desc: 'Is Aer Lingus WiFi free? Free on A330s with Starlink, and for Business Class and AerClub Concierge members. Otherwise paid plans from EUR 3.49 on the A330 and A321LR/XLR. Aer Lingus\'s own pages, checked 14 October 2026.',
    answer: 'It depends on the aircraft. Aer Lingus offers WiFi on all A330 and all A321neoLR and A321XLR aircraft. It is free on A330s that have Starlink (some A330s on select routes), and free for Business Class and AerClub Concierge members. Otherwise you buy a plan, from EUR 3.49 for an hour of chat.',
    srcNote: 'From Aer Lingus\'s own WiFi pages, last checked 14 October 2026. Aer Lingus says it is rolling out free Starlink gradually and that on some flights WiFi may still need to be purchased.',
    scen: [
      Object.assign(card('a330', 'A330', 'warn', 'Free on Starlink, otherwise paid', 'Starlink on some A330s, select routes', 'Aer Lingus says all A330 aircraft have WiFi, and some A330s on a select number of routes now have Starlink, which is free.', ['Starlink WiFi: free from gate to gate, streaming allowed, no set limit on devices. Aer Lingus says it is gradually rolling out free WiFi and it is not yet on every plane.', 'On A330s without Starlink you buy a plan. ' + PRICES, 'WiFi is complimentary for Business Class customers and AerClub Concierge members. A330s also have the AeroMobile network for texts and data at standard roaming rates.'], OB, true), { sources: [OB, SL] }),
      card('a321', 'A321neoLR / A321XLR', 'warn', 'Paid WiFi', 'Free for Business Class and AerClub Concierge', 'Aer Lingus says all A321neoLR and A321XLR aircraft have WiFi, with WiFi only and no mobile network.', [PRICES, 'WiFi is complimentary for Business Class customers and AerClub Concierge members.', 'Aer Lingus\'s pages say Starlink is on some A330s. They do not say it is on the A321.'], OB)
    ],
    faq: [
      ['Is Aer Lingus WiFi free?', 'On A330s with Starlink (some A330s on select routes) it is free for everyone. Otherwise it is paid, except for Business Class customers and AerClub Concierge members, for whom Aer Lingus says it is complimentary.'],
      ['Which Aer Lingus planes have WiFi?', 'Aer Lingus says WiFi is available on all A330 aircraft and all A321neoLR and A321XLR aircraft. Its pages do not list WiFi on its other aircraft.'],
      ['How much does Aer Lingus WiFi cost?', 'Prices vary by route. Chat for an hour from EUR 3.49, Keep chatting from EUR 5.99, Stay connected from EUR 13.49 and Don\'t miss a thing (whole flight) from EUR 20.49. Dollar and pound prices are listed on Aer Lingus\'s page.'],
      ['How do I connect to Aer Lingus WiFi?', 'Enable WiFi on your device and launch your browser. On aircraft with a paid plan, buy a voucher on the Aer Lingus WiFi page that appears. On Starlink aircraft, connect to the Aer Lingus WiFi network and follow the prompts.']
    ],
    tableHead: ['Aircraft', 'WiFi on Aer Lingus'], tableTitle: 'Aer Lingus\'s aircraft with WiFi',
    tableNote: 'Copied from Aer Lingus\'s Onboard Wi-Fi page. Aer Lingus does not list WiFi on its other aircraft.',
    rows: [['All A330', 'WiFi, texts and data. Starlink (free) on some A330s on select routes'], ['All A321neoLR and A321XLR', 'WiFi only. Plans from EUR 3.49; free for Business Class and AerClub Concierge']],
    extra: steps(['Enable WiFi on your device and launch your browser.', 'On a Starlink flight, connect to the Aer Lingus WiFi network and follow the prompts.', 'On other aircraft, buy a plan on the Aer Lingus WiFi page. Business Class and AerClub Concierge members get it free.', 'You can use one purchased session on one device at a time.'])
  });
}

// ---------------- VUELING ----------------
// Read 14 October 2026 on vueling.com: Onboard Wi-Fi page; help.vueling.com: Wi-Fi service.
{
  const PG = ['https://www.vueling.com/en/on-board/wifi-and-entertainment/', 'Vueling: Onboard Wi-Fi', 'Options, how to connect and FAQs'];
  addN({
    slug: 'vueling', slab: 'Which option?', checked: '14 October 2026',
    h1: 'Is Vueling WiFi Free? 15 Free Minutes and Prices (2026)',
    desc: 'Is Vueling WiFi free? Yes for 15 minutes if you watch a short ad, then paid packages from EUR 0.99. Most of the fleet has WiFi. From Vueling\'s own page, checked 14 October 2026.',
    answer: 'Partly. Vueling says most of its fleet has WiFi. Watch a short ad and you get 15 minutes free, once per flight, with no speed restrictions. After that, packages start from EUR 0.99, depending on flight duration and route. WiFi works above 10,000 feet over mainland Europe, and is limited over large bodies of water.',
    srcNote: 'From Vueling\'s own WiFi page and help article, last checked 14 October 2026. Vueling does not list WiFi by aircraft, so look for the signage on board.',
    scen: [
      card('free', 'Free WiFi', 'go', '15 minutes free', 'Watch a short ad, once per flight', 'Vueling says you can watch a short ad and enjoy 15 minutes of complimentary WiFi to browse, message or check social media, with no speed restrictions.', ['The 15 free minutes are offered once per flight and cannot currently be extended by watching another ad.', 'You can see your remaining time in the WiFi portal.'], PG, true),
      card('paid', 'Paid packages', 'warn', 'From EUR 0.99', 'Depends on flight duration and route', 'Vueling lists WiFi packages from EUR 0.99, depending on the flight duration and route coverage.', ['WiFi can only be bought once you are on board, through the onboard WiFi portal. You cannot buy it before your flight.', 'Payment: Google Pay, Apple Pay, or a Visa or Mastercard credit card.'], PG),
      card('where', 'Where it works', 'warn', 'Limited over water', 'Above 10,000 feet over mainland Europe', 'Vueling says WiFi is available when the aircraft is above 10,000 feet and over mainland Europe. When flying over large bodies of water, the connection is limited.', ['Vueling says most of its fleet has WiFi. Once on board, signage at the entrance and on your seat shows whether your aircraft has it, and the crew will tell you.'], PG)
    ],
    faq: [
      ['Is Vueling WiFi free?', 'For 15 minutes, once per flight, if you watch a short ad. After that WiFi is paid, from EUR 0.99 depending on flight duration and route.'],
      ['Does every Vueling plane have WiFi?', 'No. Vueling says most of its fleet has WiFi. Once on board, look for the signage at the entrance and on your seat, or ask the crew.'],
      ['How do I connect to Vueling WiFi?', 'Turn on airplane mode, go to WiFi settings and connect to the "Vueling Wi-Fi" network. The portal opens automatically: follow the steps to connect.'],
      ['Can I buy Vueling WiFi before my flight?', 'No. WiFi can only be purchased on board, through the onboard WiFi portal, with Google Pay, Apple Pay or a Visa or Mastercard.']
    ],
    tableHead: ['Question', 'What Vueling says'], tableTitle: 'What Vueling says about WiFi',
    tableNote: 'Copied from Vueling\'s Onboard Wi-Fi page.',
    rows: [['Free WiFi', '15 minutes after a short ad, once per flight, no speed restrictions'], ['Paid packages', 'From EUR 0.99, depending on flight duration and route'], ['Which aircraft', 'Most of the fleet; check the signage on board'], ['Where it works', 'Above 10,000 feet over mainland Europe; limited over large bodies of water'], ['Buy before the flight', 'No, only on board'], ['Payment', 'Google Pay, Apple Pay, Visa or Mastercard']],
    extra: steps(['Turn on airplane mode on your device.', 'In WiFi settings, connect to the "Vueling Wi-Fi" network.', 'The portal opens automatically.', 'Follow the steps in the portal to connect.'])
  });
}

// ---------------- TRANSAVIA ----------------
// Read 14 October 2026 on transavia.com: "Making everyday journeys feel special" (inspiration article, one line says no Wi-Fi), "Offline together" campaign page. No help page or fleet statement on Wi-Fi found.
{
  const P1 = ['https://www.transavia.com/inspiration/en-nl/making-everyday-journeys-feel-special', 'Transavia: Making everyday journeys feel special', 'Article, section "Sit back. Switch off. Enjoy."'];
  const P2 = ['https://www.transavia.com/en-NL/offlinetogether/', 'Transavia: Offline together', 'Campaign page'];
  addN({
    slug: 'transavia', slab: 'What do you want to know?', checked: '14 October 2026',
    h1: 'Does Transavia Have WiFi? What Transavia Says (2026)',
    desc: 'Does Transavia have WiFi? Transavia\'s own website says "No Wi-Fi" on board and invites you to put your phone in airplane mode. From Transavia\'s own pages, checked 14 October 2026.',
    answer: 'No. Transavia\'s own website says "No Wi-Fi, no deadlines, no need to rush" about its flights, and its Offline together campaign tells passengers to put their phone in airplane mode. Transavia has no help page about WiFi that we could find, so this comes from two of its own pages that are not formal service descriptions.',
    srcNote: 'From Transavia\'s own website, last checked 14 October 2026. The statement is in an inspiration article, not in a help page, and Transavia publishes no WiFi page or aircraft list, so confirm with Transavia before you fly.',
    scen: [
      card('none', 'On board', 'stop', 'No WiFi', 'Says Transavia\'s own website', 'Transavia\'s article about its in-flight experience says "No Wi-Fi, no deadlines, no need to rush."', ['The line is in an inspiration article, not a help page. We found no Transavia page that lists WiFi by aircraft or says otherwise.', 'Transavia gives passengers its in-flight magazine Enjoy in the seat pocket, and an onboard shop collection to browse.'], P1, true),
      card('offline', 'Offline together', 'warn', 'Airplane mode', 'Transavia asks you to switch off', 'Transavia\'s Offline together campaign invites passengers to put their phone in airplane mode and enjoy an offline holiday.', ['It is a campaign page, not a service rule. It does not describe WiFi on the aircraft.'], P2)
    ],
    faq: [
      ['Does Transavia have WiFi?', 'No, according to Transavia\'s own website: an article about its in-flight experience says "No Wi-Fi", and its Offline together campaign invites passengers to put their phone in airplane mode. Transavia has no formal WiFi help page that we could find.'],
      ['What is there to do on a Transavia flight?', 'Transavia says each seat pocket holds the Enjoy in-flight magazine, and the same article shows an onboard shop collection you can browse.'],
      ['Can I use my phone on a Transavia flight?', 'Transavia\'s Offline together page asks passengers to put their phone in airplane mode. We did not read a formal device rule, so check with Transavia.']
    ],
    tableHead: ['Question', 'What Transavia says'], tableTitle: 'What Transavia\'s website says',
    tableNote: 'Copied from Transavia\'s own article and campaign page. Transavia has no WiFi help page we could find.',
    rows: [['WiFi on board', '"No Wi-Fi" (inspiration article)'], ['Phone use', 'Offline together campaign: put your phone in airplane mode'], ['Aircraft list', 'Not published'], ['In-flight reading', 'Enjoy magazine in the seat pocket']]
  });
}

// ---------------- SINGAPORE AIRLINES ----------------
// Read 14 October 2026 on singaporeair.com (German-language version of the Inflight Connectivity page; the English version redirects to krisworld.singaporeair.com or a login page).
{
  const PG = ['https://www.singaporeair.com/de_DE/de/flying-withus/entertainment/inflight-connectivity/', 'Singapore Airlines: Inflight connectivity (German-language version)', 'Free Wi-Fi, packages, coverage'];
  addN({
    slug: 'singapore-airlines', slab: 'Which cabin and membership?', checked: '14 October 2026',
    h1: 'Is Singapore Airlines WiFi Free? Who Gets It and Prices (2026)',
    desc: 'Is Singapore Airlines WiFi free? Unlimited and free for premium cabins and for KrisFlyer members in every cabin. Packages from USD 3.99. Not on the Boeing 737-800 NG. From Singapore Airlines\' own page, checked 14 October 2026.',
    answer: 'Free and unlimited for passengers in Suites, First, Business, PPS Club members, and KrisFlyer members in every cabin. In Premium Economy and Economy you add your KrisFlyer number to your booking; joining is free. Singapore Airlines has WiFi on all aircraft except the Boeing 737-800 NG.',
    srcNote: 'From Singapore Airlines\' own Inflight Connectivity page (German-language version; its English version would not load for us), last checked 14 October 2026. Onboard prices can change, so check the WiFi portal on the day.',
    scen: [
      card('premium', 'Suites, First, Business, PPS Club', 'go', 'Free, unlimited', 'Premium cabins and PPS Club', 'Singapore Airlines says unlimited free WiFi is offered to passengers in Suites, First Class and Business Class, to PPS Club members and supplementary cardholders, and to KrisFlyer members.', ['After you reach cruising altitude, connect to the KrisWorld network, then enter your details under "Complimentary Wi-Fi" in the WiFi portal.', 'Instructions are on the WiFi card in the seat pocket and in the WiFi video on KrisWorld TV.'], PG, true),
      card('member', 'KrisFlyer member, Premium Economy or Economy', 'go', 'Free, unlimited', 'Add your KrisFlyer number to your booking', 'Singapore Airlines says KrisFlyer members in Premium Economy and Economy get unlimited free WiFi.', ['Before the flight, add your KrisFlyer number in Manage Booking on singaporeair.com or the SingaporeAir app, or tell the check-in staff.', 'Then, at cruising altitude, connect to the KrisWorld network and enter your details under "Complimentary Wi-Fi".'], PG),
      card('nonmember', 'Not a KrisFlyer member, Premium Economy or Economy', 'warn', 'Not free until you join', 'Joining KrisFlyer is free', 'Singapore Airlines marks free WiFi as "not applicable" for non-members in Premium Economy and Economy, and says to become a KrisFlyer member to get free WiFi on board.', ['Register for KrisFlyer, then add your KrisFlyer number to your booking.', 'The page also lists paid packages: 1 hour for USD 3.99, 3 hours for USD 8.99 and a Full Flight package for USD 15.99. A package is only valid on the flight leg where you buy it. Onboard prices can change.'], PG),
      card('limits', 'Where it does not work', 'warn', 'Not on every plane or route', 'Boeing 737-800 NG has none', 'Singapore Airlines says it offers WiFi on all aircraft except the Boeing 737-800 NG.', ['On the A380, the A350-900 medium-haul and selected Boeing 777-300ER aircraft, WiFi is not available over India, Iran and Turkey, because of satellite coverage and regulation.', 'WiFi works above 10,000 feet. Streaming is not supported.', 'Some flights may have no service because of weather, territorial rules, satellite coverage, equipment changes or technical problems.'], PG)
    ],
    faq: [
      ['Is Singapore Airlines WiFi free?', 'Yes for passengers in Suites, First and Business Class, PPS Club members and KrisFlyer members in every cabin. In Premium Economy and Economy, add your KrisFlyer number to your booking; joining KrisFlyer is free.'],
      ['How much does Singapore Airlines WiFi cost?', 'Singapore Airlines lists 1 hour at USD 3.99, 3 hours at USD 8.99 and a Full Flight package at USD 15.99. Onboard prices can change. A package is only valid on the flight leg where you buy it.'],
      ['Which Singapore Airlines planes have WiFi?', 'All of them except the Boeing 737-800 NG, according to Singapore Airlines. On the A380, A350-900 medium-haul and selected 777-300ER aircraft it does not work over India, Iran and Turkey.'],
      ['How do I connect to Singapore Airlines WiFi?', 'After reaching cruising altitude, connect to the KrisWorld network, then enter your details in the "Complimentary Wi-Fi" section of the WiFi portal. Streaming is not supported.']
    ],
    tableHead: ['Who', 'WiFi on Singapore Airlines'], tableTitle: 'Singapore Airlines\' WiFi by cabin and membership',
    tableNote: 'Copied from the table on Singapore Airlines\' Inflight Connectivity page (German-language version).',
    rows: [['Suites / First Class', 'Free, unlimited'], ['Business Class', 'Free, unlimited'], ['PPS Club members and supplementary cardholders', 'Free, unlimited'], ['KrisFlyer member, Premium Economy or Economy', 'Free, unlimited (add your number to your booking)'], ['Not a member, Premium Economy or Economy', 'Not applicable: become a KrisFlyer member for free WiFi'], ['Packages', '1 hour USD 3.99; 3 hours USD 8.99; Full Flight USD 15.99']],
    extra: steps(['Before the flight, add your KrisFlyer number to your booking (Manage Booking, the app, or at check-in).', 'At cruising altitude, connect to the KrisWorld network.', 'Enter your details under "Complimentary Wi-Fi" in the WiFi portal.'])
  });
}

// ---------------- CATHAY PACIFIC ----------------
// Read 14 October 2026 on flights.cathaypacific.com: Wi-Fi and connectivity.
{
  const PG = ['https://flights.cathaypacific.com/en_US/flying-with-us/wifi/connectivity.html', 'Cathay Pacific: Wi-Fi and connectivity', 'Connectivity options and internet access packages'];
  addN({
    slug: 'cathay-pacific', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is Cathay Pacific WiFi Free? Who Gets It and Prices (2026)',
    desc: 'Is Cathay Pacific WiFi free? Free for First and Business Class, Diamond and Gold members, and members in Premium Economy. Others pay from USD 7.95. WiFi across the fleet. From Cathay Pacific\'s own page, checked 14 October 2026.',
    answer: 'Cathay Pacific says it has high-speed WiFi across its fleet. It invites First and Business Class passengers, Diamond and Gold members, and Cathay members in Premium Economy to enjoy complimentary WiFi. Everyone else buys a package, from USD 7.95 for three hours. Visiting cathaypacific.com on board is free for all.',
    srcNote: 'From Cathay Pacific\'s own WiFi page, last checked 14 October 2026. Prices depend on the route flown.',
    scen: [
      card('free', 'First, Business, Diamond, Gold, Premium Economy members', 'go', 'Complimentary WiFi', 'Members add their number to the booking', 'Cathay Pacific says its Diamond and Gold members, First class and Business class passengers, and Cathay members in Premium Economy are invited to enjoy complimentary inflight WiFi.', ['To get it, Cathay members add their membership number when they make their booking or during check-in. Not yet a member: you can sign up.', 'Cathay Pacific\'s page does not say what complimentary covers beyond this. Check the WiFi portal on board.'], PG, true),
      card('all', 'Everyone', 'go', 'Free to browse cathaypacific.com', 'And to shop on lifestyle.asiamiles.com', 'Cathay Pacific says it is free to visit all pages on cathaypacific.com and to shop thousands of curated products on lifestyle.asiamiles.com while in the air.', ['This is separate from the internet packages below.'], PG),
      card('paid', 'Paid packages', 'warn', 'From USD 7.95', 'Price depends on the route', 'Cathay Pacific lists a package for flight times of six hours or less at USD 12.95, one for flights above six hours from USD 19.95 to USD 24.95, and three-hour continuous use from USD 7.95 to USD 9.95.', ['On flights of six hours or less a Message Pass is USD 3.95 for WhatsApp, iMessage, Facebook Messenger, LINE and WeChat.', 'Pricing is determined by the route flown. WiFi is available once the aircraft is at or above 10,000 feet.'], PG),
      card('limits', 'When it may not work', 'warn', 'Not everywhere', 'Polar routes and weak coverage', 'Cathay Pacific says it may not connect you over the northern polar region or areas without coverage, during "beam switching" between satellites, in poor weather or below the minimum altitude.', ['Polar routes from the East Coast of North America might have a long outage.', 'SMS and data roaming are available on A350 aircraft only, and not in the United States.'], PG)
    ],
    faq: [
      ['Is Cathay Pacific WiFi free?', 'Cathay Pacific invites First and Business Class passengers, Diamond and Gold members, and Cathay members in Premium Economy to enjoy complimentary WiFi. Members add their membership number to the booking. Everyone can browse cathaypacific.com free. Other WiFi is paid.'],
      ['How much does Cathay Pacific WiFi cost?', 'Flights of six hours or less: USD 12.95. Flights above six hours: from USD 19.95 to USD 24.95. Three-hour continuous use: from USD 7.95 to USD 9.95. A Message Pass on flights of six hours or less is USD 3.95. Prices depend on the route.'],
      ['Does every Cathay Pacific plane have WiFi?', 'Cathay Pacific says it has 100% high-speed inflight connectivity across its fleet.'],
      ['How do I connect to Cathay Pacific WiFi?', 'Switch on airplane mode, enable WiFi and connect to the "Cathay Pacific" network. A portal opens; if it does not, go to wifi.cathaypacific.com. Pick your package and start browsing.']
    ],
    tableHead: ['Who or what', 'WiFi on Cathay Pacific'], tableTitle: 'Cathay Pacific\'s WiFi options',
    tableNote: 'Copied from Cathay Pacific\'s WiFi page. Prices depend on the route flown.',
    rows: [['First and Business Class; Diamond and Gold members; members in Premium Economy', 'Complimentary (members add their number to the booking)'], ['cathaypacific.com and lifestyle.asiamiles.com', 'Free for everyone'], ['Flights of six hours or less', 'USD 12.95'], ['Flights above six hours', 'From USD 19.95 to USD 24.95'], ['Three-hour continuous use', 'From USD 7.95 to USD 9.95'], ['Message Pass (flights of six hours or less)', 'USD 3.95']],
    extra: steps(['Switch on airplane mode and enable WiFi.', 'Connect to the "Cathay Pacific" network.', 'A portal opens. If it does not, type wifi.cathaypacific.com.', 'Select your internet package and start browsing.'])
  });
}

// ---------------- QANTAS ----------------
// Read 14 October 2026 on qantas.com (US site): Inflight Wi-Fi.
{
  const PG = ['https://www.qantas.com/en-us/onboard/entertainment/wifi', 'Qantas: Inflight Wi-Fi', 'Wi-Fi-connected fleet, coverage and FAQs'];
  const FREE = 'Qantas says its Wi-Fi is free across all cabins on Wi-Fi-connected aircraft, with unlimited data that lets you stream.';
  const CHK = 'Qantas recommends checking the Qantas app 24 to 48 hours before you travel: add your flight to My Trips and select View onboard experience.';
  add({
    slug: 'qantas', checked: '14 October 2026',
    h1: 'Is Qantas WiFi Free? WiFi by Aircraft Type (2026)',
    desc: 'Is Qantas WiFi free? Yes, in all cabins on connected aircraft: A321XLR, A220-300, 787, A330 and most 737-800s. A380 installation is in progress. Qantas\'s own list, checked 14 October 2026.',
    answer: 'Yes, on aircraft with WiFi. Qantas says its WiFi is free across all cabins with unlimited data. It is on all A321XLR, A220-300, 787 and A330-200 aircraft, and on most 737-800 and A330-300 aircraft. A380 installation is in progress. Outside Australia and New Zealand the connection varies.',
    srcNote: 'From Qantas\'s own WiFi page, last checked 14 October 2026. WiFi can change with late aircraft swaps, so check the Qantas app before you fly.',
    scen: [
      card('all', 'A321XLR, A220-300, 787, A330-200', 'go', 'Free WiFi on every aircraft', 'All cabins, unlimited data', 'Qantas lists all Airbus A321XLR, all Airbus A220-300, all Boeing 787 and all Airbus A330-200 aircraft as Wi-Fi connected.', [FREE, 'Qantas says WiFi is available on QantasLink flights operated by A220-300 aircraft.', CHK], PG, true),
      card('most', '737-800, A330-300', 'warn', 'Free on most aircraft', 'The rest are being enabled', 'Qantas lists the majority of its Boeing 737-800 and Airbus A330-300 aircraft as Wi-Fi connected, with the remaining aircraft being enabled. It lists the A330Y as being enabled.', [FREE, 'So check your flight in the Qantas app: not every 737-800 or A330-300 has WiFi yet.', CHK], PG),
      card('a380', 'A380', 'warn', 'Installation in progress', 'Not listed as connected yet', 'Qantas says Airbus A380 installation is in progress. It does not list the A380 as Wi-Fi connected.', [CHK], PG),
      card('route', 'Which route', 'warn', 'Best in Australia and New Zealand', 'Varies on other international flights', 'Qantas says flights across Australia and New Zealand get fast WiFi that supports browsing and streaming. On international flights outside Australia and New Zealand you currently get a varied connection.', ['A varied connection keeps you connected for the essentials and may not support video streaming. Qantas says coverage is currently not available over China, India, the South Pacific Ocean or the Indian Ocean.', 'Qantas says voice and video calls are not permitted, and data roaming is not permitted.'], PG)
    ],
    faq: [
      ['Is Qantas WiFi free?', 'Yes. Qantas says its WiFi is free across all cabins on WiFi-connected aircraft, with unlimited data that lets you stream.'],
      ['Which Qantas planes have WiFi?', 'All A321XLR, A220-300, Boeing 787 and A330-200 aircraft, and the majority of Boeing 737-800 and A330-300 aircraft, with the rest being enabled. A380 installation is in progress. QantasLink A220-300 flights have WiFi.'],
      ['How do I check if my Qantas flight has WiFi?', 'Open the Qantas app, add your flight to My Trips and select View onboard experience. Qantas recommends checking 24 to 48 hours before you travel.'],
      ['How do I connect to Qantas WiFi?', 'Enable Flight Mode, select the "Qantas Free Wi-Fi" network in your device settings and follow the prompts. If the page does not load, type wifi.qantas.com into your browser.']
    ],
    tableHead: ['Aircraft', 'WiFi on Qantas'], tableTitle: 'Qantas\'s Wi-Fi-connected fleet',
    tableNote: 'Copied from the fleet list on Qantas\'s WiFi page.',
    rows: [['Airbus A321XLR', 'All aircraft'], ['Airbus A220-300', 'All aircraft'], ['Boeing 737-800', 'Majority; the rest are being enabled'], ['Boeing 787', 'All aircraft'], ['Airbus A330-200', 'All aircraft'], ['Airbus A330-300', 'Majority; the A330Y is being enabled'], ['Airbus A380', 'Installation in progress']],
    extra: steps(['Enable Flight Mode.', 'Select the "Qantas Free Wi-Fi" network in your device settings.', 'Follow the prompts on the "You\'re connected" screen.', 'If the page does not load, type wifi.qantas.com into your browser.'])
  });
}

// ---------------- AIR NEW ZEALAND ----------------
// Read 14 October 2026 on airnewzealand.com: Free Inflight Wi-Fi.
{
  const PG = ['https://www.airnewzealand.com/wifi', 'Air New Zealand: Free Inflight Wi-Fi', 'Wi-Fi enabled aircraft and how to connect'];
  const NOTE = 'Air New Zealand says to check for the Wi-Fi icon next to your flight in the Air NZ app, and to check again on the day of your flight because of late aircraft changes.';
  add({
    slug: 'air-new-zealand', checked: '14 October 2026',
    h1: 'Is Air New Zealand WiFi Free? WiFi by Aircraft (2026)',
    desc: 'Is Air New Zealand WiFi free? Yes on the 777-300ER, 787-9, A321neo and A320neo international aircraft, in all cabins. Not on the 777-367ER or domestic aircraft yet. Air New Zealand\'s own list, checked 14 October 2026.',
    answer: 'Yes, on international aircraft that have it. Air New Zealand says WiFi is free in all cabin classes on its Boeing 777-300ER, 787-9, Airbus A321neo and A320neo international aircraft. It is not enabled on the Boeing 777-367ER, and not yet on its domestic fleet.',
    srcNote: 'From Air New Zealand\'s own WiFi page, last checked 14 October 2026. Aircraft can change late, so check the Air NZ app on the day.',
    scen: [
      card('yes', '777-300ER, 787-9, A321neo, A320neo (international)', 'go', 'Free WiFi', 'In all cabin classes', 'Air New Zealand lists the Boeing 777-300ER, all Boeing 787-9 versions, the Airbus A321neo and the Airbus A320neo on its international fleet as Wi-Fi enabled in all cabin classes.', ['It is free until the aircraft prepares for landing, and available only after take-off and before descent.', NOTE, 'You can browse the web, send emails and messages and check social media. Air New Zealand blocks or limits some high-data services, and voice calls are not allowed.'], PG, true),
      card('no777', 'Boeing 777-367ER', 'stop', 'No WiFi', 'Not enabled', 'Air New Zealand lists the Boeing 777-367ER, including its V2 version, as international fleet where Wi-Fi is not enabled.', [NOTE], PG),
      card('domestic', 'Domestic aircraft', 'stop', 'Not yet enabled', 'A321neo, A320, ATR 72 and Q300', 'Air New Zealand lists its domestic Airbus A321neo and A320, the ATR 72 and the de Havilland Q300 as Wi-Fi not yet enabled.', [NOTE], PG)
    ],
    faq: [
      ['Is Air New Zealand WiFi free?', 'Yes. Air New Zealand says its inflight WiFi is free on the international aircraft where it is enabled, in all cabin classes, until the aircraft prepares for landing.'],
      ['Which Air New Zealand planes have WiFi?', 'The Boeing 777-300ER, the Boeing 787-9 (all versions), the Airbus A321neo and the Airbus A320neo on international flights. Not the Boeing 777-367ER, and not yet the domestic A321neo, A320, ATR 72 or Q300.'],
      ['How do I connect to Air New Zealand WiFi?', 'Switch to Flight Mode, wait a few minutes after take-off, turn on WiFi, join the "AirNZ_InflightWiFi" network and go to wifi.airnz.com to register.']
    ],
    tableHead: ['Aircraft', 'WiFi on Air New Zealand'], tableTitle: 'Air New Zealand\'s aircraft and WiFi',
    tableNote: 'Copied from the fleet lists on Air New Zealand\'s WiFi page.',
    rows: [['Boeing 777-300ER', 'Wi-Fi enabled in all cabin classes'], ['Boeing 787-9 (V1 to V5)', 'Wi-Fi enabled in all cabin classes'], ['Airbus A321neo and A320neo (international)', 'Wi-Fi enabled in all cabin classes'], ['Boeing 777-367ER (and V2)', 'Wi-Fi not enabled'], ['Airbus A321neo and A320 (domestic), ATR 72, de Havilland Q300', 'Wi-Fi not yet enabled']],
    extra: steps(['Switch your device to Flight Mode and wait a few minutes after take-off.', 'Turn on WiFi while staying in Flight Mode.', 'Join the "AirNZ_InflightWiFi" network.', 'Go to wifi.airnz.com, register and follow the instructions.'])
  });
}

// ---------------- PHILIPPINE AIRLINES ----------------
// Read 14 October 2026 on philippineairlines.com: myPAL Wi-Fi.
{
  const PG = ['https://www.philippineairlines.com/ph/en/mypal-travel-boost/mypal-wifi.html', 'Philippine Airlines: myPAL Wi-Fi', 'Plans, FAQs and how to connect'];
  addN({
    slug: 'philippine-airlines', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is Philippine Airlines WiFi Free? myPAL WiFi Plans and Prices (2026)',
    desc: 'Is Philippine Airlines WiFi free? A 10 MB plan is free for all passengers and more is free for Mabuhay Miles members and Business Class. Paid plans from USD 9.98. Select international flights only. PAL\'s own page, checked 14 October 2026.',
    answer: 'Partly. Philippine Airlines lists a 10 MB plan free for all passengers, free messaging for Mabuhay Miles members, and a 100 MB plan free for Business Class and Million Milers. Paid plans are USD 9.98 for one hour, USD 15.98 for three hours and USD 24.98 unlimited. myPAL WiFi is only on select international flights and select aircraft.',
    srcNote: 'From Philippine Airlines\' own myPAL Wi-Fi page, last checked 14 October 2026. PAL says rates may change without notice and does not list the aircraft on this page.',
    scen: [
      card('all', 'Every passenger', 'go', '10 MB free', 'Good for browsing and messaging', 'Philippine Airlines says a 10 MB plan, good for web browsing and messaging, is available free to all passengers.', ['PAL says all myPAL Wi-Fi plans are valid for single use and can only be used during the flight.', 'The plans are available on select international flights and aircraft types.'], PG, true),
      card('members', 'Mabuhay Miles members, Business Class', 'go', 'More free', 'Free chat, and 100 MB for Business Class', 'PAL lists UNLI CHAT (iMessage, Viber, WhatsApp and similar) free for all Mabuhay Miles members, and a 100 MB plan free for Business Class passengers and Mabuhay Miles Million Milers in any class.', ['The code is provided in flight.', 'PAL\'s FAQ also says Mabuhay Miles members, Business Class and Premium Economy passengers get unlimited free access. Its plan table does not say this, so check the portal on board.'], PG),
      card('paid', 'Everyone else', 'warn', 'From USD 9.98', 'Light, Standard or Unlimited', 'PAL lists the Light plan (1 hour) at USD 9.98, the Standard plan (3 hours) at USD 15.98 and the Unlimited plan at USD 24.98.', ['You buy on board: connect to the PAL_WiFi network and choose a plan in the portal.', 'PAL says audio and video calls are not supported.'], PG)
    ],
    faq: [
      ['Is Philippine Airlines WiFi free?', 'Partly. A 10 MB plan is free for all passengers. Mabuhay Miles members get free messaging, and Business Class passengers and Million Milers get a free 100 MB plan. Other plans are paid.'],
      ['How much does Philippine Airlines WiFi cost?', 'USD 9.98 for a 1-hour Light plan, USD 15.98 for a 3-hour Standard plan and USD 24.98 for Unlimited. PAL says rates may change without notice.'],
      ['Which Philippine Airlines flights have WiFi?', 'PAL says myPAL Wi-Fi is available on select international flights only and on select aircraft. This page does not list the aircraft.'],
      ['How do I connect to Philippine Airlines WiFi?', 'Put your device in Airplane Mode, turn on WiFi and select the PAL_WiFi network. The portal opens, or go to wifi.philippineairlines.com. Choose your plan.']
    ],
    tableHead: ['Plan', 'Who gets it', 'Price'], tableTitle: 'Philippine Airlines\' myPAL Wi-Fi plans',
    tableNote: 'Copied from the plan table on Philippine Airlines\' myPAL Wi-Fi page.',
    rows: [['100 MB plan', 'Business Class and Mabuhay Miles Million Milers (any class)', 'Free in flight'], ['UNLI CHAT', 'All Mabuhay Miles members', 'Free in flight'], ['10 MB plan', 'All passengers', 'Free in flight'], ['Unlimited plan', 'Everyone', 'USD 24.98'], ['Standard plan (3 hours)', 'Everyone', 'USD 15.98'], ['Light plan (1 hour)', 'Everyone', 'USD 9.98']],
    extra: steps(['Put your device in Airplane Mode.', 'Turn on WiFi and select the "PAL_WiFi" network.', 'You are sent to the myPAL Wi-Fi portal, or go to wifi.philippineairlines.com.', 'Choose your plan and connect.'])
  });
}

// ---------------- VIRGIN AUSTRALIA ----------------
// Read 14 October 2026 on virginaustralia.com (US site): Get connected.
{
  const PG = ['https://www.virginaustralia.com/us/en/travel-info/onboard-experience/inflight-connectivity/', 'Virgin Australia: Get connected', 'Wi-Fi Onboard, passes and FAQs'];
  addN({
    slug: 'virgin-australia', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is Virgin Australia WiFi Free? Who Gets It and How to Connect (2026)',
    desc: 'Is Virgin Australia WiFi free? Free for Business Class and Velocity Platinum and Platinum Plus members. Everyone else buys a pass. Free entertainment portal for all. Not on F100, A320 or 737-700. From Virgin Australia\'s own page, checked 14 October 2026.',
    answer: 'Free for Business Class and Velocity Platinum and Platinum Plus members. Everyone else can buy a 30-minute or full-flight pass with a credit card. The entertainment portal with over 400 hours of movies, TV and podcasts is free for all. WiFi is not on F100, A320 or 737-700 aircraft, and Virgin Australia cannot guarantee your aircraft has it yet.',
    srcNote: 'From Virgin Australia\'s own connectivity page (US site), last checked 14 October 2026. The page gives no pass prices. Other Virgin Australia pages mention Starlink on some long-haul flights, which we did not read.',
    scen: [
      card('free', 'Business Class, Velocity Platinum and Platinum Plus', 'go', 'Free WiFi', 'Complimentary access', 'Virgin Australia says Virgin Australia, Velocity Platinum, Platinum Plus and Business Class guests enjoy complimentary access to its inflight internet, which is provided by WiFi Onboard.', ['Virgin Australia sponsors the complimentary internet. WiFi Onboard may share your name, seat number and flight information with Virgin Australia to check you are eligible.', 'Virgin Australia says typical speeds are between 5 and 15 Mbps, and satellite coverage and connections vary with geography and weather.'], PG, true),
      card('ent', 'Everyone: entertainment', 'go', 'Free entertainment', 'Over 400 hours on your own device', 'Virgin Australia says you can watch over 400 hours of movies, TV shows and podcasts from its entertainment portal on your own device, and that no internet purchase is required for this.', ['If you cannot reach the portal, type boardconnect.aero into your browser.'], PG),
      card('paid', 'Everyone else: internet pass', 'warn', 'Paid pass', '30 minutes or full flight', 'Virgin Australia says you can buy a 30-minute or full-flight internet pass from WiFi Onboard in the entertainment portal, paying by credit card.', ['Accepted cards: MasterCard, VISA, American Express and Discover. Cash is not accepted on board.', 'Virgin Australia\'s page does not list pass prices.'], PG),
      card('fleet', 'Which aircraft', 'warn', 'Not on every aircraft', 'Not F100, A320 or 737-700', 'Virgin Australia says the rollout does not include F100, A320 or B737-700 aircraft, and that while WiFi Onboard is being activated across the fleet it cannot guarantee your aircraft will have the service.', ['Voice calls and video conferencing are not allowed on board.'], PG)
    ],
    faq: [
      ['Is Virgin Australia WiFi free?', 'It is free for Business Class guests and Velocity Platinum and Platinum Plus members. Everyone else can buy a 30-minute or full-flight pass. The entertainment portal is free for all.'],
      ['Which Virgin Australia planes have WiFi?', 'Virgin Australia is rolling out WiFi Onboard across its fleet and cannot guarantee that your aircraft has it. It says the rollout does not include F100, A320 or B737-700 aircraft.'],
      ['How do I connect to Virgin Australia WiFi?', 'Switch your device to flight mode, turn WiFi on and select the VirginAustralia in-cabin network. If the page does not load, type wifi.virginaustralia.com (http, not https) into your browser, and make sure any VPN is off.']
    ],
    tableHead: ['Question', 'What Virgin Australia says'], tableTitle: 'What Virgin Australia says about WiFi',
    tableNote: 'Copied from Virgin Australia\'s Get connected page.',
    rows: [['Free internet', 'Business Class, Velocity Platinum and Platinum Plus'], ['Free entertainment portal', 'Everyone, over 400 hours, no internet purchase needed'], ['Paid internet', '30-minute or full-flight pass by credit card; prices not listed'], ['Aircraft not included', 'F100, A320, B737-700'], ['Typical speed', '5 to 15 Mbps'], ['Calls', 'Voice and video conferencing not allowed']],
    extra: steps(['In device settings, switch to flight mode, then turn WiFi on.', 'Select the "VirginAustralia" in-cabin network.', 'You are directed to the entertainment portal. If not, type wifi.virginaustralia.com.', 'Choose free entertainment or buy an internet pass.'])
  });
}

// ---------------- THAI AIRWAYS ----------------
// Read 14 October 2026 on thaiairways.com: In-flight connectivity (Australia site) and Complimentary In-flight Wi-Fi Service on THAI (Royal Orchid Plus).
{
  const PG = ['https://www.thaiairways.com/en-au/content/in-flight-experience/in-flight-connectivity/', 'Thai Airways: In-flight connectivity (THAI Sky Connect)', 'Aircraft and WiFi packages'];
  const RP = ['https://www.thaiairways.com/en-th/content/offers-Promotions/royal-orchid-plus/Complimentary-In-flight-Wi-Fi/', 'Thai Airways: Complimentary In-flight Wi-Fi (Royal Orchid Plus)', 'Free allowance by membership'];
  addN({
    slug: 'thai-airways', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is Thai Airways WiFi Free? THAI Sky Connect Prices (2026)',
    desc: 'Is Thai Airways WiFi free? Unlimited for Royal First Class and Royal Orchid Plus Platinum, 60 minutes for Royal Silk and Gold, 30 minutes for Silver and Basic. Paid from USD 0.99. Thai Airways\' own pages, checked 14 October 2026.',
    answer: 'Partly. Thai Airways gives unlimited free WiFi to Royal First Class passengers and Royal Orchid Plus Platinum members, 60 minutes to Royal Silk Class and Gold members, and 30 minutes to Silver and Basic members. Others pay: USD 0.99 chat, USD 14.99 surfing, USD 39.99 streaming. It is on selected aircraft only.',
    srcNote: 'From Thai Airways\' own pages, last checked 14 October 2026. Prices on the Australia site are in US dollars and may differ on other country sites.',
    scen: [
      card('unlimited', 'Royal First Class, Royal Orchid Plus Platinum', 'go', 'Free, unlimited', 'Complimentary WiFi', 'Thai Airways says Royal First Class passengers and Royal Orchid Plus Platinum members get unlimited complimentary WiFi through THAI Sky Connect.', ['A WiFi code is included on your boarding pass at check-in. Then log in through the WiFi portal on board.', 'Sign up for Royal Orchid Plus at least 24 hours before your flight to activate the complimentary WiFi.'], RP, true),
      card('timed', 'Royal Silk Class, Gold, Silver, Basic', 'warn', 'Free for 30 or 60 minutes', 'Then a charge applies', 'Thai Airways says Royal Silk Class passengers and Royal Orchid Plus Gold members get 60 minutes free, and Silver and Basic members get 30 minutes free, after which a charge applies.', ['This applies from 1 May 2025, on selected flights on the A350-900, B787-8, B787-9 and B777-300ER, per Thai Airways\' membership page.', 'Sign up for Royal Orchid Plus at least 24 hours before your flight.'], RP),
      card('paid', 'Everyone else', 'warn', 'From USD 0.99', 'Chat, Surfing or Streaming', 'Thai Airways lists Unlimited Chatting at USD 0.99 (messaging apps, no multimedia files), Unlimited Surfing at USD 14.99 (web, social media, email) and Unlimited Streaming at USD 39.99.', ['Thai Airways says WiFi does not support phone calls over the internet.'], PG),
      card('fleet', 'Which aircraft', 'warn', 'Selected aircraft only', 'Six aircraft types listed', 'Thai Airways says THAI Sky Connect is available on selected aircraft: Boeing 777-300ER, Airbus A350-900, Airbus A330-300, Boeing 787-9, Boeing 787-8 and Airbus A321neo.', ['Availability and performance vary by aircraft, route and satellite coverage, and the service can be temporarily unavailable.', 'The membership page lists only the A350-900, B787-8, B787-9 and B777-300ER for the free allowance.'], PG)
    ],
    faq: [
      ['Is Thai Airways WiFi free?', 'For some passengers. Royal First Class and Royal Orchid Plus Platinum members get unlimited free WiFi. Royal Silk Class and Gold members get 60 minutes, and Silver and Basic members get 30 minutes. Everyone else pays.'],
      ['How much does Thai Airways WiFi cost?', 'On Thai Airways\' Australia site: Unlimited Chatting USD 0.99, Unlimited Surfing USD 14.99, Unlimited Streaming USD 39.99. Prices may differ on other country sites.'],
      ['Which Thai Airways planes have WiFi?', 'Selected Boeing 777-300ER, Airbus A350-900, Airbus A330-300, Boeing 787-9, Boeing 787-8 and Airbus A321neo aircraft.'],
      ['How do I get my free Thai Airways WiFi?', 'Join Royal Orchid Plus at least 24 hours before your flight. A WiFi code is on your boarding pass at check-in, and you log in through the WiFi portal on board.']
    ],
    tableHead: ['Who', 'WiFi on Thai Airways'], tableTitle: 'Thai Airways\' WiFi by membership and package',
    tableNote: 'Copied from Thai Airways\' connectivity page and Royal Orchid Plus page.',
    rows: [['Royal First Class, Royal Orchid Plus Platinum', 'Unlimited, free'], ['Royal Silk Class, Royal Orchid Plus Gold', '60 minutes free, then a charge'], ['Royal Orchid Plus Silver and Basic', '30 minutes free, then a charge'], ['Unlimited Chatting', 'USD 0.99'], ['Unlimited Surfing', 'USD 14.99'], ['Unlimited Streaming', 'USD 39.99']]
  });
}

// ---------------- ETHIOPIAN AIRLINES ----------------
// Read 14 October 2026 on ethiopianairlines.com (US site): Sheba SkyConnect On-board WiFi.
{
  const PG = ['https://www.ethiopianairlines.com/us/services/add-on-services/on-board-wifi', 'Ethiopian Airlines: ShebaSkyConnect on-board WiFi', 'Packages and FAQs'];
  addN({
    slug: 'ethiopian-airlines', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is Ethiopian Airlines WiFi Free? ShebaSkyConnect Prices (2026)',
    desc: 'Is Ethiopian Airlines WiFi free? Free for Business Class, and 1 hour free for Platinum ShebaMiles members. Passes from USD 5. All A350s and most 777s and 787s. Ethiopian\'s own page, checked 14 October 2026.',
    answer: 'Free for Business Class travellers, and Platinum ShebaMiles members get a complimentary 1-hour package. Everyone else buys a pass: USD 5 for 1 hour, USD 10 for 2 hours, USD 25 for the full flight. All A350s have WiFi, and most B777 and B787 are being equipped.',
    srcNote: 'From Ethiopian Airlines\' own ShebaSkyConnect page (US site), last checked 14 October 2026. Prices may differ on other country sites.',
    scen: [
      card('free', 'Business Class, Platinum ShebaMiles', 'go', 'Free WiFi', 'Business Class free; Platinum gets 1 hour', 'Ethiopian says WiFi is free for Business Class travellers and that Platinum ShebaMiles members are entitled to a complimentary 1-hour WiFi package.', ['The cabin crew announce at the start of the flight whether the aircraft has WiFi and which type of service it has.'], PG, true),
      card('paid', 'Everyone else', 'warn', 'From USD 5', '1 hour, 2 hours or full flight', 'Ethiopian lists a 1-hour pass at USD 5, a 2-hour pass at USD 10 and a full-flight pass at USD 25.', ['You can buy at Ethiopian ticket offices, the check-in counter, the boarding gate, or from the cabin crew on board. Ethiopian accepts Visa, Mastercard, American Express, Diners Club, Discover, JCB, China UnionPay, Maestro and PayPal.', 'A purchased session can be used on one device at a time. If the aircraft is changed, the access code works on other WiFi-enabled Ethiopian flights for one year.'], PG),
      card('fleet', 'Which aircraft', 'warn', 'All A350, most 777 and 787', 'Others are being equipped', 'Ethiopian says all its A350 aircraft have WiFi and most of its B777 and B787 are currently being equipped.', ['Coverage is not available in extreme polar regions, and satellite outages can happen because of regulations, weather and satellite switching.', 'If you paid but cannot get online because of a technical problem, Ethiopian says you will be refunded.'], PG)
    ],
    faq: [
      ['Is Ethiopian Airlines WiFi free?', 'It is free for Business Class travellers, and Platinum ShebaMiles members get a complimentary 1-hour package. Everyone else buys a pass.'],
      ['How much does Ethiopian Airlines WiFi cost?', 'USD 5 for 1 hour, USD 10 for 2 hours and USD 25 for a full flight, on Ethiopian\'s US site.'],
      ['Which Ethiopian planes have WiFi?', 'All A350 aircraft, and most B777 and B787 aircraft are being equipped. The crew announce at the start of the flight whether yours has WiFi.'],
      ['How do I connect to Ethiopian Airlines WiFi?', 'Switch your device to Airplane mode, turn WiFi on and select the ETInternet network. You are redirected to the portal.']
    ],
    tableHead: ['Pass', 'Price'], tableTitle: 'Ethiopian Airlines\' ShebaSkyConnect passes',
    tableNote: 'Copied from Ethiopian Airlines\' ShebaSkyConnect page (US site).',
    rows: [['1 hour pass', 'USD 5'], ['2 hours pass', 'USD 10'], ['Full flight pass', 'USD 25'], ['Business Class', 'Free'], ['Platinum ShebaMiles members', '1-hour package free']],
    extra: steps(['Go to settings and switch your device to Airplane mode.', 'Turn WiFi on and select the "ETInternet" network.', 'You are redirected to the portal page.', 'Buy a pass, or use your free access.'])
  });
}

// ---------------- MALAYSIA AIRLINES ----------------
// Read 14 October 2026 on malaysiaairlines.com (global site): Wi-Fi (MHconnect).
{
  const PG = ['https://www.malaysiaairlines.com/hq/en/experience/in-flight-offerings/wi-fi.html', 'Malaysia Airlines: Stay online with MHconnect', 'Aircraft, how to connect and terms'];
  addN({
    slug: 'malaysia-airlines', slab: 'Which aircraft?', checked: '14 October 2026',
    h1: 'Is Malaysia Airlines WiFi Free? MHconnect on A350, 737-8 and A330 (2026)',
    desc: 'Is Malaysia Airlines WiFi free? Yes, unlimited and free in every cabin on all A350-900 and Boeing 737-8 aircraft and selected A330s, for messaging and social media. Malaysia Airlines\' own page, checked 14 October 2026.',
    answer: 'Yes. Malaysia Airlines says MHconnect gives unlimited complimentary WiFi, for messaging and social media apps, from Business Suite to Economy, on all A350-900 and Boeing 737-8 aircraft and on selected A330 aircraft. You register with your email address on board.',
    srcNote: 'From Malaysia Airlines\' own global WiFi page, last checked 14 October 2026. Its page says MHconnect is being brought to more of the A330 fleet, so check your flight.',
    scen: [
      card('yes', 'A350-900, Boeing 737-8', 'go', 'Free, unlimited WiFi', 'All aircraft, every cabin', 'Malaysia Airlines says unlimited complimentary WiFi with MHconnect is available on all A350-900 and Boeing 737-8 aircraft, from Business Suite to Economy Class.', ['It is described for messaging and social media apps. The page also mentions browsing the web, emails and collaboration tools.', 'To connect, follow the steps on screen and give your email address. Register on board so any unused data carries forward to your next flight for up to 30 days.'], PG, true),
      card('a330', 'Airbus A330', 'warn', 'Selected aircraft', 'More being added', 'Malaysia Airlines says MHconnect is on selected A330 aircraft and that it is working to bring it to the rest of the A330 fleet.', ['A pop-up on the in-flight entertainment screen after take-off tells you when WiFi is available.', 'Mobile roaming services are on selected A350 and A330 aircraft. Roaming charges are set by your mobile provider.'], PG),
      card('terms', 'What to expect', 'warn', 'No guarantee', 'Speeds vary', 'Malaysia Airlines says internet speeds and capacities in the cabin may differ from the ground, that it does not guarantee a glitch-free connection and may suspend service during the flight for security or other reasons.', ['Refunds are considered case by case.', 'Malaysia Airlines recommends turning off auto-updates and background apps before connecting.'], PG)
    ],
    faq: [
      ['Is Malaysia Airlines WiFi free?', 'Yes, on aircraft that have MHconnect. Malaysia Airlines says it is unlimited and complimentary, for messaging and social media apps, in every cabin from Business Suite to Economy.'],
      ['Which Malaysia Airlines planes have WiFi?', 'All A350-900 and Boeing 737-8 aircraft, and selected A330 aircraft.'],
      ['How do I connect to Malaysia Airlines WiFi?', 'Enable Airplane Mode before take-off. At cruising altitude, open your WiFi settings and connect to "MHconnect". Follow the steps on screen and enter your email address.']
    ],
    tableHead: ['Aircraft', 'MHconnect WiFi'], tableTitle: 'Malaysia Airlines\' MHconnect aircraft',
    tableNote: 'Copied from Malaysia Airlines\' WiFi page and terms.',
    rows: [['Airbus A350-900', 'All aircraft, free in every cabin'], ['Boeing 737-8', 'All aircraft, free in every cabin'], ['Airbus A330', 'Selected aircraft'], ['Mobile roaming', 'Selected A350 and A330 aircraft']],
    extra: steps(['Enable "Airplane Mode" on your device before take-off.', 'At cruising altitude, open your WiFi settings and connect to "MHconnect".', 'Insert your email address and follow the steps on screen.'])
  });
}

// ---------------- AIR INDIA ----------------
// Read 14 October 2026 on airindia.com: Inflight Wi-Fi Services and Connectivity.
{
  const PG = ['https://www.airindia.com/in/en/experience/in-air/whats-on-my-ai/inflight-wi-fi.html', 'Air India: Inflight Wi-Fi Services and Connectivity', 'Plans, Maharaja Club benefits and aircraft'];
  addN({
    slug: 'air-india', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is Air India WiFi Free? Plans, Prices and Maharaja Club Benefits (2026)',
    desc: 'Is Air India WiFi free? Free streaming in First Class, 1 hour of browsing in Business, and by Maharaja Club tier. Paid plans from INR 299. A350-900, select 777-300, 787-9 and A321neo. Air India\'s own page, checked 14 October 2026.',
    answer: 'It depends on your class and Maharaja Club tier. First Class gets free full-flight streaming, Business gets 1 hour of browsing plus full-flight chat, and Platinum members get free unrestricted WiFi. Everyone else buys a plan, from INR 299. WiFi is on the A350-900, select B777-300, B787-9 and A321neo only.',
    srcNote: 'From Air India\'s own inflight WiFi page, last checked 14 October 2026. Availability can change at the last minute, so check the Wi-Fi Onboard icon on the Flight Status page.',
    scen: [
      card('first', 'First Class', 'go', 'Free streaming', 'Full flight', 'Air India says First Class customers enjoy complimentary full-flight streaming access.', ['Link your Maharaja Club ID through Manage Booking or Web Check-in to get your benefits.'], PG, true),
      card('business', 'Business Class', 'warn', '1 hour free browsing', 'Plus full-flight chat', 'Air India says Business Class customers enjoy complimentary WiFi for 1 hour of browsing along with full-flight chat access.', ['Link your Maharaja Club ID through Manage Booking or Web Check-in.'], PG),
      card('tiers', 'Maharaja Club members', 'warn', 'Free by tier', 'Platinum: everything free', 'Air India lists: Red and Silver tiers free 1-hour WiFi for chat; Gold tier free 1-hour browsing and unrestricted chat; Platinum tier free unrestricted browsing, chat and streaming.', ['The higher your tier, the more you save.', 'Link your Maharaja Club ID through Manage Booking or Web Check-in.'], PG),
      card('paid', 'Everyone else', 'warn', 'From INR 299', 'Chat, Browsing or Streaming', 'Air India lists Chat and Text full flight at INR 399, Basic Browsing at INR 299 (1 hour), INR 699 (3 hours) or INR 1,199 (full flight), and Streaming full flight at INR 2,699.', ['You can pay with UPI apps, and with international credit or debit cards that do not require an OTP.', 'WiFi is on select flights shown on the Flight Status page, on the A350-900, select B777-300, B787-9 and A321neo, on domestic and international routes.'], PG)
    ],
    faq: [
      ['Is Air India WiFi free?', 'For some. First Class gets free full-flight streaming. Business Class gets 1 hour of browsing plus full-flight chat. Maharaja Club members get free WiFi by tier, and Platinum gets everything free. Everyone else pays.'],
      ['How much does Air India WiFi cost?', 'Chat INR 399 for the full flight. Browsing INR 299 for 1 hour, INR 699 for 3 hours, INR 1,199 for the full flight. Streaming INR 2,699 for the full flight.'],
      ['Which Air India planes have WiFi?', 'The A350-900, select B777-300, B787-9 and A321neo, on domestic and international routes. Look for the "Wi-Fi Onboard" icon on the Flight Status page or during web check-in.'],
      ['How do I connect to Air India WiFi?', 'Turn on flight mode and connect to "Air India Wi-Fi". The portal opens, or go to wifi.airindia.com. Sign in with your last name, booking reference or last 4 digits of your ticket number, email and phone, then pick a plan.']
    ],
    tableHead: ['Plan', 'Price'], tableTitle: 'Air India\'s inflight WiFi plans',
    tableNote: 'Copied from Air India\'s inflight WiFi page.',
    rows: [['Chat and Text, full flight', 'INR 399'], ['Basic Browsing, 1 hour', 'INR 299'], ['Basic Browsing, 3 hours', 'INR 699'], ['Basic Browsing, full flight', 'INR 1,199'], ['Streaming, full flight', 'INR 2,699'], ['Maharaja Club Platinum', 'Free browsing, chat and streaming']],
    extra: steps(['Turn on flight mode and connect to "Air India Wi-Fi".', 'The login page opens, or go to wifi.airindia.com.', 'Enter your last name, booking reference (or last 4 digits of your ticket number), email and phone, then verify.', 'Choose your plan and pay if needed.'])
  });
}

// ---------------- ETIHAD ----------------
// Read 14 October 2026 on etihad.com (US site): Wi-Fi and entertainment.
{
  const PG = ['https://www.etihad.com/en-us/plan/fly-with-etihad/onboard-services/wifi-and-entertainment', 'Etihad: Wi-Fi and entertainment', 'Complimentary and paid Wi-Fi'];
  addN({
    slug: 'etihad-airways', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is Etihad WiFi Free? Free Chat, Packages and Prices (2026)',
    desc: 'Is Etihad WiFi free? Free chat for Etihad Guest members, unlimited data in First and on Business Deluxe, Business Comfort and Economy Deluxe fares. Otherwise paid from USD 3.99. Etihad\'s own page, checked 14 October 2026.',
    answer: 'Partly. Etihad gives free chat to all Etihad Guest members and unlimited data to First, Business Deluxe, Business Comfort and Economy Deluxe tickets, plus Emerald and Platinum members. Everyone else buys: Chat USD 3.99, Surf from USD 9.99, Stream from USD 14.99. You buy on board only.',
    srcNote: 'From Etihad\'s own WiFi page (US site), last checked 14 October 2026. Etihad does not list WiFi by aircraft on this page.',
    scen: [
      card('fares', 'First, Business Deluxe, Business Comfort, Economy Deluxe', 'go', 'Free, unlimited data', 'By cabin and fare', 'Etihad says you get unlimited data when you travel in First, or book a Business Deluxe, Business Comfort or Economy Deluxe fare.', ['Etihad Guest Emerald and Platinum members also receive unlimited data.'], PG, true),
      card('member', 'Etihad Guest member', 'go', 'Free chat', 'Chat access for all members', 'Etihad says chat access is complimentary for all Etihad Guest members. Gold members get 25% off WiFi packages.', ['Emerald and Platinum members get unlimited data.'], PG),
      card('paid', 'Everyone else', 'warn', 'From USD 3.99', 'Chat, Surf or Stream', 'Etihad lists Chat (text only) at USD 3.99. Surf (unlimited data) is USD 9.99 or 1,200 miles under 7 hours and USD 24.99 or 3,000 miles over 7 hours. Stream is USD 14.99 or 1,800 miles under 7 hours and USD 29.99 or 3,600 miles over 7 hours.', ['You can only buy on board, after the seatbelt signs are off. Etihad accepts major credit cards, PayPal, Apple Pay, Alipay and Etihad Guest Miles.', 'Connect to the "Etihad Wi-Fly" network, then choose your package.'], PG)
    ],
    faq: [
      ['Is Etihad WiFi free?', 'Partly. Chat is free for Etihad Guest members, and unlimited data is free in First, on Business Deluxe, Business Comfort and Economy Deluxe fares, and for Emerald and Platinum members. Everyone else pays.'],
      ['How much does Etihad WiFi cost?', 'Chat USD 3.99. Surf: USD 9.99 or 1,200 miles under 7 hours, USD 24.99 or 3,000 miles over 7 hours. Stream: USD 14.99 or 1,800 miles under 7 hours, USD 29.99 or 3,600 miles over 7 hours.'],
      ['Can I buy Etihad WiFi before my flight?', 'No. Etihad says you can only buy WiFi packages on board, when the seatbelt signs are off.'],
      ['How do I connect to Etihad WiFi?', 'Enable WiFi and connect to the "Etihad Wi-Fly" network, then choose your package.']
    ],
    tableHead: ['Package', 'Under 7 hours', 'Over 7 hours'], tableTitle: 'Etihad\'s WiFi packages',
    tableNote: 'Copied from the package table on Etihad\'s WiFi page.',
    rows: [['Chat (text only)', 'USD 3.99', 'USD 3.99'], ['Surf (unlimited data)', 'USD 9.99 or 1,200 miles', 'USD 24.99 or 3,000 miles'], ['Stream', 'USD 14.99 or 1,800 miles', 'USD 29.99 or 3,600 miles']]
  });
}

// ---------------- LATAM ----------------
// Read 14 October 2026 on latamairlines.com (UK site): Onboard Wi-Fi.
{
  const PG = ['https://www.latamairlines.com/gb/en/experience/during-flight/onboard-entertainment/onboard-connectivity', 'LATAM: Onboard Wi-Fi', 'Who gets it, paid plans and where'];
  addN({
    slug: 'latam', slab: 'Who are you?', checked: '14 October 2026',
    h1: 'Is LATAM WiFi Free? Free Messaging, Elite Benefits and Prices (2026)',
    desc: 'Is LATAM WiFi free? Free messaging for LATAM Pass members and free browsing for Gold, Platinum and Black members, on single-aisle flights within South America. Paid plans from USD 2. LATAM\'s own page, checked 14 October 2026.',
    answer: 'On flights within South America on single-aisle aircraft: free text messaging for LATAM Pass members, and free unlimited browsing and messages for Gold, Platinum, Black and Black Signature members. Others pay: USD 2 for messaging, USD 5 for 1 hour of browsing, USD 8 full flight. Not on twin-aisle aircraft or other routes.',
    srcNote: 'From LATAM\'s own onboard Wi-Fi page (UK site), last checked 14 October 2026. Prices are references in US dollars and may vary with the local exchange rate. Service is subject to availability.',
    scen: [
      card('elite', 'Gold, Platinum, Black, Black Signature', 'go', 'Free browsing and messages', 'Within South America, single-aisle aircraft', 'LATAM says Gold, Platinum, Black or Black Signature LATAM Pass members enjoy free and unlimited access to internet browsing and messages on flights within South America on single-aisle aircraft.', ['Elite members do not have to buy paid WiFi plans.'], PG, true),
      card('member', 'LATAM Pass member', 'go', 'Free messaging', 'WhatsApp and similar', 'LATAM says LATAM Pass members enjoy free text messaging on apps such as WhatsApp on flights within South America on single-aisle aircraft.', ['If you are not yet a member, you can register and get free text messaging on your next flight.'], PG),
      card('paid', 'Everyone: paid plans', 'warn', 'From USD 2', 'Messaging, browsing or streaming', 'LATAM lists text messaging (WhatsApp, Viber, iMessage) at USD 2, browsing at USD 5 for 1 hour and USD 8 for the full flight, streaming at USD 9 for 1 hour and USD 12 for the full flight, and monthly plans at USD 28 (browsing) and USD 49.50 (streaming).', ['You can only pay by credit card.', 'Fees depend on the route and the aircraft.'], PG),
      card('where', 'Where it works', 'warn', 'Single-aisle, South America only', 'Not on twin-aisle aircraft', 'LATAM says onboard WiFi is only available on domestic flights within South America or between South American countries, on single-aisle aircraft, subject to availability.', ['LATAM says it has WiFi on its whole single-aisle fleet in Brazil and on most single-aisle aircraft in Chile, Colombia, Ecuador and Peru.', 'Twin-aisle aircraft have individual touch screens instead.'], PG)
    ],
    faq: [
      ['Is LATAM WiFi free?', 'On single-aisle flights within South America: free text messaging for LATAM Pass members, and free browsing and messages for Gold, Platinum, Black and Black Signature members. Everything else is paid.'],
      ['How much does LATAM WiFi cost?', 'Messaging USD 2. Browsing USD 5 for 1 hour or USD 8 for the full flight. Streaming USD 9 for 1 hour or USD 12 for the full flight. Monthly browsing USD 28, monthly streaming USD 49.50.'],
      ['Does LATAM have WiFi on international flights?', 'LATAM says onboard WiFi is only available on flights within South America or between South American countries, on single-aisle aircraft.'],
      ['How do I connect to LATAM WiFi?', 'Turn on Airplane Mode, connect to the "LATAM Play" WiFi network, scan the QR code on your seat or go to play.latam.com, choose messaging, streaming or browsing, and register for LATAM Pass or start your session.']
    ],
    tableHead: ['Plan', 'Price (USD, reference)'], tableTitle: 'LATAM\'s paid WiFi plans',
    tableNote: 'Copied from LATAM\'s onboard WiFi page. Values are references and may vary with the local exchange rate.',
    rows: [['Text messaging (WhatsApp, Viber, iMessage)', '2'], ['Browsing, 1 hour', '5'], ['Browsing, full flight', '8'], ['Streaming, 1 hour', '9'], ['Streaming, full flight', '12'], ['Monthly browsing plan', '28'], ['Monthly streaming plan', '49.50']],
    extra: steps(['Turn on Airplane Mode on your device.', 'Connect to the "LATAM Play" WiFi network.', 'Scan the QR code on your seat or go to play.latam.com.', 'Choose messaging, streaming or browsing, then register for LATAM Pass or start your session.'])
  });
}

module.exports = out;
