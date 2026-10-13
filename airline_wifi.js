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
    render: a => COMP.__render(a, cfg.scen, cfg.srcNote, { slab: cfg.slab || 'Which aircraft are you flying on?', tag: 'WI-FI', legend: cfg.legend || LEGEND }) +
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

module.exports = out;
