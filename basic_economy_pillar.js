// Pillar: /blog/basic-economy-carry-on-rules-2026/ (session 20, 2026-10-10). Demand: Ahrefs US, "united basic economy carry on",
// "delta basic economy carry on", "american airlines basic economy carry on" are all ">1,000"; the "does X basic economy
// include carry on" questions are ">100". Roadmap #2 (BLOG_ROADMAP.md).
// Data: each airline's OWN pages, read 10 October 2026: united.com (Carry-on bags + Basic Economy), aa.com (Basic Economy fare
// details + Carry-on bags) and the American newsroom release of 9 April 2026, delta.com (Main Basic page, Baggage overview,
// Carry-on baggage), jetblue.com (Carry-on bags), flyfrontier.com (Bag options), aircanada.com (Carry-on baggage), westjet.com
// (Carry-on baggage). Not used: Alaska Saver (page does not load), Southwest/Allegiant/Sun Country (not read), Spirit (closed).
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, CHK, stat, callout, cl, faq } = H;

const SLUG = 'basic-economy-carry-on-rules-2026';
const logo = (code, name) => `<img src="https://www.gstatic.com/flights/airline_logos/70px/${code}.png" alt="" width="22" height="22" style="vertical-align:middle;margin-right:8px;border-radius:4px" onerror="this.style.display='none'">${name}`;
const meta = `<div class="art-meta"><span class="tag tag-neutral">Carry-On Size</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Passenger tapping a credit card on the payment terminal at a United gate podium in Denver, the screen reading $75.00, while the United agent ties a gate tag onto his black roller bag" width="800" height="400"><figcaption>On most United Basic Economy trips a carry-on is checked at the gate for $75.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="450"><figcaption>${cap}</figcaption></figure>`;

const MAIN = T(
  ['Airline', 'Basic fare', 'Carry-on included?', '📌 The catch'],
  [
    [logo('UA', 'United'), 'Basic Economy', '<strong>No</strong> on most trips', 'Free only to South America, across the Atlantic or the Pacific, or with Premier status, a qualifying card or Star Alliance Gold. <a href="#united">Details</a>'],
    [logo('AA', 'American'), 'Basic Economy', '<strong>Yes</strong>', 'One carry-on and one personal item. Checked bags are not free. <a href="#american-delta">Details</a>'],
    [logo('DL', 'Delta'), 'Main Basic', '<strong>Yes</strong>', 'Delta&rsquo;s carry-on page gives every passenger one. No priority boarding on Main Basic. <a href="#american-delta">Details</a>'],
    [logo('B6', 'JetBlue'), 'Blue Basic', '<strong>Yes</strong>', 'One carry-on and one personal item on all fares.'],
    [logo('F9', 'Frontier'), 'Any fare without a bag bundle', '<strong>No, paid add-on</strong>', 'Only the personal item is free. The carry-on is added when you book; airport prices are higher.'],
    [logo('AC', 'Air Canada'), 'Economy Basic', '<strong>No</strong> on many routes', 'Personal item only within Canada, to and from the U.S. and to and from Mexico, Central America and the Caribbean.'],
    [logo('WS', 'WestJet'), 'UltraBasic', '<strong>No</strong>, with exceptions', 'A carry-on is allowed to and from Europe and Asia, or with Extended Comfort on every flight in one direction.']
  ]
);

const UA_WHO = T(
  ['When United Basic Economy includes a carry-on', 'Source: united.com'],
  [
    ['Flying to South America, across the Atlantic or across the Pacific', 'Free carry-on'],
    ['MileagePlus member with Premier status', 'One free carry-on'],
    ['Travelling with a Premier member', 'One free carry-on'],
    ['Primary card member of a qualifying United MileagePlus credit card', 'One free carry-on. The United Gateway and MileagePlus Select cards do not qualify'],
    ['Star Alliance Gold member', 'One free carry-on'],
    ['Flying to Canada on a ticket bought before 28 May 2025', 'Free carry-on']
  ]
);

const UA_FEES = T(
  ['Carry-on bag fee on United Basic Economy', 'Ticket bought before 3 April 2026', 'Ticket bought on or after 3 April 2026'],
  [
    ['Prepaid', '$35', '$45'],
    ['At the airport lobby', '$40', '$50'],
    ['At the gate', '$65', '$75']
  ]
);

const SIZES = T(
  ['Basic Economy bags', '🧳 Carry-on', '🎒 Personal item'],
  [
    [logo('AA', 'American'), '22 × 14 × 9 in, overhead bin', '18 × 14 × 8 in, under the seat'],
    [logo('DL', 'Delta'), '22 × 14 × 9 in, 45 linear inches', 'Under the seat, no size published'],
    [logo('UA', 'United'), '22 × 14 × 9 in, only if you qualify', '17 × 10 × 9 in, under the seat']
  ]
);

const body = CSS + meta + hero +
  `<p>It depends on the airline. On <strong>United</strong>, Basic Economy means <strong>one personal item and no carry-on</strong> on most trips. On <strong>American</strong> and <strong>Delta</strong> you can still bring a carry-on and a personal item. JetBlue includes both too, while Frontier, Air Canada&rsquo;s Economy Basic and WestJet&rsquo;s UltraBasic leave you with the personal item on most routes. Use the <strong>in · lb / cm · kg</strong> switch in the header to see every number in your units.</p>` +
  stat([
    ['No', 'United carry-on on most Basic Economy trips'],
    ['Yes', 'American and Delta include a carry-on'],
    ['$45-$75', 'United bag fee, by when you pay (tickets from 3 April 2026)'],
    ['Personal item', 'only, on Air Canada Basic and WestJet UltraBasic, on many routes']
  ]) +
  '<h2>🧳 Does Basic Economy include a carry-on?</h2>' +
  MAIN +
  fig(1, 'Man at a café table in the Tampa airport holding up a tablet that shows the American Airlines Basic Economy page, 1 carry-on bag and 1 personal item, to a woman across the table, her black roller bag beside her chair', 'American: Basic Economy still includes one carry-on and one personal item.') +
  '<h2 id="united">🔴 United: the personal item is all you get on most trips</h2>' +
  callout('⚠️', '<strong>On most trips you can only bring one personal item in United Basic Economy.</strong> You cannot bring a carry-on bag unless you are flying to South America, across the Atlantic or across the Pacific. All other bags have to be checked.') +
  UA_WHO +
  '<h3>What it costs if you bring a bag anyway</h3>' +
  UA_FEES +
  '<p>If your personal item does not fit under the seat, United says you check it at the gate and pay the gate fee, $75 for tickets bought from 3 April 2026. United also says you can bring a few things for free on top of your personal item: a jacket or coat, an umbrella, something to read, food bought at the airport, mobility devices, a car seat or stroller, a diaper bag and breast pump, and a camera. Small purses or bags are not allowed in addition.</p>' +
  '<h2 id="american-delta">🔺 American and Delta: the carry-on is included</h2>' +
  `<p><strong>American</strong> says you can bring one carry-on bag and one personal item in Basic Economy, that the carry-on requirements apply to every customer including AAdvantage status members, and that Basic Economy fares do not include free checked bags. For a domestic Basic Economy ticket bought on 18 May 2026 or later, the first checked bag is $55 and the second $65, $5 less if you prepay on aa.com or the app.</p>` +
  `<p><strong>Delta</strong> says every passenger can bring one carry-on bag and one personal item free of charge. Basic Economy is now called <strong>Delta Main Basic</strong>, and Delta lists what it leaves out: priority boarding, Sky Club access, mileage credit, upgrades, Preferred Seats and same-day changes. Your seat is assigned after you check in, or at the gate. Without priority boarding you cannot count on overhead space, so keep what you need in the personal item.</p>` +
  SIZES +
  fig(2, 'Passenger standing in the aisle of a Delta cabin holding a roller bag and looking up at a full open overhead bin while a flight attendant in a plum uniform points toward the front', 'Without priority boarding, overhead space may be gone: keep what you need in the personal item.') +
  '<h2>🌍 Other airlines in one list</h2>' +
  cl([
    ['🔷', '<strong>JetBlue:</strong> one carry-on and one personal item on all fares, with no weight limit as long as you can lift the bag.'],
    ['🟩', '<strong>Frontier:</strong> the personal item (18 × 14 × 8 in, up to 35 lb) is the only free bag. The carry-on (24 × 16 × 10 in, up to 35 lb) is added when you book, and airport prices are higher.'],
    ['🍁', '<strong>Air Canada:</strong> Economy Basic tickets bought on or after 3 January 2025 allow one personal item within Canada, to and from the U.S. (including Hawaii and Puerto Rico) and to and from Mexico, Central America and the Caribbean. Other bags are checked before security, with a gate handling fee of CA/US $65-$78 pre-authorised on your card.'],
    ['🍁', '<strong>WestJet:</strong> UltraBasic allows one personal item. A carry-on is allowed to and from Europe and Asia, or when Extended Comfort is bought for all flights in one direction. A carry-on at the gate otherwise means a checked baggage fee and a service fee.']
  ]) +
  '<h2>🎒 If the personal item is your only bag</h2>' +
  `<p>On a personal-item-only fare, what you pack in it matters. The size differs by airline, from 17 × 10 × 9 inches at United to 18 × 14 × 8 inches at American, and it is a purse, laptop bag or small backpack, not only a backpack. See <a href="/blog/personal-item-size-by-airline-2026/">personal item size by airline</a> before you pack.</p>` +
  '<h2>✅ Before you fly Basic Economy</h2>' +
  cl([
    ['1', 'Check your route: United&rsquo;s carry-on exceptions cover South America and flights across the Atlantic and the Pacific.'],
    ['2', 'Check your status and cards: Premier, Star Alliance Gold or a qualifying United card (not the Gateway or Select cards).'],
    ['3', 'If you need the bag, pay for it when you book: on United it is $45 prepaid and $75 at the gate.'],
    ['4', 'Pack the personal item to the airline&rsquo;s size, and keep documents, medicine and chargers in it.']
  ]) +
  '<h2>🔎 One airline at a time</h2>' +
  cl([
    ['🔴', '<a href="/blog/united-carry-on-size-2026/">United carry-on size</a>'],
    ['🔺', '<a href="/blog/delta-carry-on-size-2026/">Delta carry-on size</a> &middot; <a href="/blog/delta-baggage-fees-2026/">fees</a>'],
    ['🔴', '<a href="/blog/american-airlines-carry-on-size-2026/">American carry-on size</a> &middot; <a href="/blog/american-airlines-baggage-fees-2026/">fees</a>'],
    ['🔷', '<a href="/blog/jetblue-carry-on-size-2026/">JetBlue carry-on size</a> &middot; <a href="/blog/jetblue-baggage-fees-2026/">fees</a>'],
    ['🟩', '<a href="/blog/frontier-carry-on-size-2026/">Frontier carry-on size</a>'],
    ['📊', '<a href="/blog/carry-on-size-limits-by-airline-2026/">Carry-on size by airline</a>']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Does Basic Economy include a carry-on?', 'It depends on the airline. American and Delta include a carry-on and a personal item, JetBlue does on all fares, and United does not on most trips. Frontier, Air Canada Economy Basic and WestJet UltraBasic limit you to the personal item on many routes.'],
    ['Does United Basic Economy include a carry-on?', 'Not on most trips. United says you can only bring one personal item, and a carry-on is free only to South America, across the Atlantic or across the Pacific, or if you have Premier status, travel with a Premier member, are the primary holder of a qualifying United card or are a Star Alliance Gold member.'],
    ['Does American Airlines Basic Economy include a carry-on?', 'Yes. American says you can bring one carry-on bag and one personal item in Basic Economy. Checked bags are not included.'],
    ['Does Delta Basic Economy (Main Basic) include a carry-on?', 'Delta says every passenger can bring one carry-on bag and one personal item free of charge. Main Basic has no priority boarding, so overhead space may be gone.'],
    ['How much is a carry-on on United Basic Economy?', 'For tickets bought on or after 3 April 2026, $45 if you prepay, $50 in the lobby and $75 at the gate. For earlier tickets it was $35, $40 and $65.'],
    ['Can I bring a carry-on on United Basic Economy to Europe?', 'Yes. United says carry-on bags are free in Basic Economy on flights across the Atlantic, as well as to South America and across the Pacific.']
  ]) +
  `<p><em>Fees and fare rules change; the airline&rsquo;s own page on the day you book is the one that counts.</em></p>` +
  CHK +
  SRC([
    ['https://www.united.com/en/us/fly/baggage/carry-on-bags.html', 'United &mdash; Carry-on bags'],
    ['https://www.united.com/en/us/fly/travel/inflight/basic-economy.html', 'United &mdash; Basic Economy'],
    ['https://www.aa.com/i18n/travel-info/experience/seats/basic-economy.jsp', 'American Airlines &mdash; Basic Economy fare details'],
    ['https://www.aa.com/i18n/travel-info/baggage/carry-on-baggage.jsp', 'American Airlines &mdash; Carry-on bags'],
    ['https://news.aa.com/news/news-details/2026/American-Airlines-updates-bag-fees-and-Basic-Economy-fares-OPS-POL-04/default.aspx', 'American Airlines Newsroom &mdash; Bag fees and Basic Economy fares, 9 April 2026'],
    ['https://www.delta.com/us/en/onboard/onboard-experience/delta-main-basic', 'Delta &mdash; Delta Main Basic (Basic Economy)'],
    ['https://www.delta.com/us/en/baggage/carry-on-baggage', 'Delta &mdash; Carry-on baggage'],
    ['https://www.jetblue.com/help/carry-on-bags', 'JetBlue &mdash; Carry-on bags'],
    ['https://www.flyfrontier.com/travel/travel-info/bag-options/', 'Frontier &mdash; Bag options'],
    ['https://www.aircanada.com/us/en/aco/home/plan/baggage/carry-on.html', 'Air Canada &mdash; Carry-on baggage'],
    ['https://www.westjet.com/en-ca/baggage/carry-on', 'WestJet &mdash; Carry-on baggage']
  ]);

module.exports = {
  slug: SLUG,
  title: 'Basic Economy Carry-On 2026: Does United, Delta or American Allow One? | canitakethis.co',
  desc: 'Basic Economy carry-on rules: United allows only a personal item on most trips; American and Delta include a carry-on. Exceptions and gate fees, from each airline.',
  h1: 'Basic Economy Carry-On 2026: Does United, Delta or American Allow One?',
  body
};
