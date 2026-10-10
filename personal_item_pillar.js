// Pillar: /blog/personal-item-size-by-airline-2026/ (session 20, 2026-10-10). Demand: Ahrefs US, "personal item size" and the
// Frontier / Delta / American / United versions are all ">10,000"; Spirit, Ryanair, Southwest, JetBlue ">1,000".
// Data: each airline's OWN pages. Read in this project: American, Delta, United, JetBlue, Alaska, Southwest, Frontier, Hawaiian,
// Air Canada, Ryanair (earlier sessions, October 2026); Breeze (flybreeze.com travel tips) and WestJet (westjet.com carry-on)
// read 10 October 2026. Not used: Allegiant (site blocks readers), Sun Country (no official page found), Spirit (ceased operations).
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, CHK, stat, callout, cl, faq, bagSvg } = H;

const SLUG = 'personal-item-size-by-airline-2026';
const logo = (code, name) => `<img src="https://www.gstatic.com/flights/airline_logos/70px/${code}.png" alt="" width="22" height="22" style="vertical-align:middle;margin-right:8px;border-radius:4px" onerror="this.style.display='none'">${name}`;
const meta = `<div class="art-meta"><span class="tag tag-neutral">Carry-On Size</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Passenger at a Frontier Airlines gate in Philadelphia placing a leather briefcase into the personal item sizer, whose sign reads 18 x 14 x 8 in and up to 35 lb, while the gate agent watches it fit" width="800" height="400"><figcaption>Frontier checks the personal item at boarding, and the sizer sign shows the limit.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="450"><figcaption>${cap}</figcaption></figure>`;

const PUBLISHED = T(
  ['Airline', '🎒 Personal item', 'Free?', '📌 Good to know'],
  [
    [logo('AA', 'American'), '18 × 14 × 8 in', 'Yes, every fare', 'Same on Basic Economy. <a href="/blog/american-airlines-carry-on-size-2026/">Details</a>'],
    [logo('UA', 'United'), '17 × 10 × 9 in', 'Yes', 'On most Basic Economy trips it is the only bag you can bring. <a href="/blog/united-carry-on-size-2026/">Details</a>'],
    [logo('B6', 'JetBlue'), '17 × 13 × 8 in', 'Yes, every fare', 'Blue Basic included. <a href="/blog/jetblue-carry-on-size-2026/">Details</a>'],
    [logo('F9', 'Frontier'), '18 × 14 × 8 in, up to 35 lb', 'Yes', 'The only free bag. Frontier\'s FAQ lists the same size as 14 H × 18 W × 8 D; the Bag Options page adds the 35 lb limit. The size is checked at boarding. <a href="/blog/frontier-carry-on-size-2026/">Details</a>'],
    [logo('MX', 'Breeze'), '17 × 13 × 8 in', 'Yes, every fare', 'No weight limit for the personal item. The carry-on is 22 × 14 × 9 in and 35 lb.'],
    [logo('WS', 'WestJet'), '16 × 6 × 13 in (41 × 15 × 33 cm)', 'Yes', 'UltraBasic fares bring only the personal item.'],
    [logo('AC', 'Air Canada'), '13 × 17 × 6 in (33 × 43 × 16 cm)', 'Yes', 'Economy Basic on many routes is personal item only. <a href="/airline/air-canada/baggage-allowance/">Air Canada baggage</a>'],
    [logo('FR', 'Ryanair'), '40 × 30 × 20 cm', 'Yes', 'The only free bag on every fare; a bigger cabin bag needs the Priority add-on. <a href="/airline/ryanair/baggage-allowance/">Ryanair baggage</a>']
  ]
);

const NOSIZE = T(
  ['Airline', 'What the airline says', 'Size given?'],
  [
    [logo('DL', 'Delta'), 'A purse, laptop bag or item of similar size that fits under the seat in front of you', 'No'],
    [logo('AS', 'Alaska'), 'A smaller item that fits under the seat', 'No'],
    [logo('WN', 'Southwest'), 'Goes under the seat in front of you; examples are a purse, briefcase, laptop case, backpack, blanket or small camera', 'No number'],
    [logo('HA', 'Hawaiian'), 'A purse, briefcase or laptop bag that fits under the seat', 'No']
  ]
);

const COUNTS = T(
  ['Airline', 'Examples in the airline\'s own words'],
  [
    [logo('AA', 'American'), 'A purse or small handbag'],
    [logo('DL', 'Delta'), 'A purse, laptop bag or item of similar size'],
    [logo('B6', 'JetBlue'), 'A purse, small backpack, briefcase, laptop and similar'],
    [logo('WN', 'Southwest'), 'A purse (including crossbody bags), briefcase, laptop case, backpack, pillow, blanket or small camera'],
    [logo('F9', 'Frontier'), 'Purses, totes, computer bags, briefcases and kids\' backpacks. Large backpacks are listed as carry-on examples'],
    [logo('UA', 'United'), 'Purses, backpacks and laptop bags'],
    [logo('HA', 'Hawaiian'), 'A purse, briefcase or laptop bag']
  ]
);

const LOGO_AA = '•', LOGO_WN = '•', LOGO_F9 = '•';
const body = CSS + meta + hero +
  `<p>A personal item is the free small item that goes <strong>under the seat in front of you</strong>. It is not always a backpack: the airlines&rsquo; own examples are a purse, handbag, laptop bag, briefcase or small backpack. The limit is a number at eight of the airlines whose own pages we read, from <strong>17 × 10 × 9 inches</strong> at United to <strong>18 × 14 × 8 inches</strong> at American and Frontier, and <strong>none</strong> at Delta, Alaska, Southwest and Hawaiian. Use the <strong>in · lb / cm · kg</strong> switch in the header to see every number in your units.</p>` +
  stat([
    ['18×14×8', 'inches, American and Frontier (the largest free personal item here)'],
    ['17×10×9', 'inches, United (the narrowest)'],
    ['17×13×8', 'inches, JetBlue and Breeze'],
    ['No size', 'Delta, Alaska, Southwest and Hawaiian']
  ]) +
  '<h2>🎒 What counts as a personal item</h2>' +
  '<p>Airlines describe it by example, and the examples differ. A backpack is only one of them.</p>' +
  COUNTS +
  callout('💡', '<strong>Read your airline&rsquo;s list.</strong> American&rsquo;s own example is a purse or small handbag, and Frontier lists large backpacks as carry-on bags, not personal items. JetBlue, Southwest and United do name a backpack.') +
  '<h3>What does not count</h3>' +
  cl([
    [LOGO_AA, '<strong>American:</strong> diaper bags (one per child), a breast pump, a small soft-sided cooler of breast milk, child safety seats, strollers and medical or mobility devices do not count as your personal item or carry-on.'],
    [LOGO_WN, '<strong>Southwest:</strong> neck pillows do not count toward the carry-on limit.'],
    [LOGO_F9, '<strong>Frontier:</strong> medical devices, wheelchairs and essential baby gear can be carried or checked at no charge.']
  ]) +
  '<h2>📏 Airlines that publish a personal item size</h2>' +
  PUBLISHED +
  bagSvg({ h: 17, w: 10, d: 9, label: 'United', second: { h: 18, w: 14, d: 8, label: 'American, Frontier' }, alt: 'United personal item 17 by 10 by 9 inches next to the 18 by 14 by 8 inch American and Frontier size, drawn to scale', cap: 'United, 17 x 10 x 9 inches, next to American and Frontier, 18 x 14 x 8 inches, to scale.' }) +
  fig(1, 'Passenger in an aisle seat on a Delta flight pushing a black leather handbag under the seat in front of her, seen from behind in the aisle with every seat row facing forward, a Delta flight attendant in a plum uniform blurred ahead', 'No size published: the test is the space under the seat in front of you.') +
  '<h2>❓ Airlines that publish no number</h2>' +
  '<p>These four airlines say only that the item must fit under the seat in front of you. Charts that print a size for them are not quoting the airline&rsquo;s own pages.</p>' +
  NOSIZE +
  callout('💡', '<strong>No number does not mean no limit.</strong> The test is the space under the seat, and a crew member or gate agent decides. A soft bag that squashes flat is safer than a stiff one.') +
  '<h2>🎒 When the personal item is the only bag you get</h2>' +
  cl([
    ['🔴', '<strong>United:</strong> on most Basic Economy trips you can bring one personal item and no carry-on.'],
    ['🍁', '<strong>Air Canada and WestJet:</strong> Economy Basic (Air Canada) and UltraBasic (WestJet) fares bring only a personal item on many routes.'],
    ['🟩', '<strong>Frontier:</strong> the personal item is the only free bag. The carry-on is a paid add-on.'],
    ['🇪🇺', '<strong>Ryanair:</strong> every fare includes only the small bag; a bigger cabin bag comes with the paid Priority add-on.']
  ]) +
  '<h2>🧮 Flying more than one airline?</h2>' +
  `<p>Size to the tightest limit you will meet. Among the published sizes, the thinnest side is <strong>6 inches</strong> at WestJet and Air Canada, and <strong>8 inches</strong> at American, JetBlue, Breeze and Frontier. United&rsquo;s bag is the narrowest at 10 inches on its second side. A soft backpack that packs down to about 6 inches deep is the safest choice across all of them.</p>` +
  fig(2, 'Traveller at a WestJet gate in Vancouver pressing a soft backpack flat on a bench while holding a yellow tape measure that reads 6 inches across its thickness', 'Mixing airlines? Pack the personal item so it squashes down to about 6 inches deep.') +
  '<h2>✅ Before you fly</h2>' +
  cl([
    ['1', 'Measure the packed bag, with straps and outside pockets, not the empty one.'],
    ['2', 'Check your fare, not just the airline: Basic fares can leave you with the personal item only.'],
    ['3', 'No size published? Pack so the bag sits flat under the seat in front without being pushed in.'],
    ['4', 'Keep documents, medicine and chargers in the personal item, so they stay with you if the carry-on is gate-checked.']
  ]) +
  '<h2>🔎 One airline at a time</h2>' +
  cl([
    ['🔴', '<a href="/blog/american-airlines-carry-on-size-2026/">American carry-on size</a>'],
    ['🔺', '<a href="/blog/delta-carry-on-size-2026/">Delta carry-on size</a>'],
    ['🔵', '<a href="/blog/united-carry-on-size-2026/">United carry-on size</a>'],
    ['🔷', '<a href="/blog/jetblue-carry-on-size-2026/">JetBlue carry-on size</a>'],
    ['🟡', '<a href="/blog/southwest-carry-on-size-2026/">Southwest carry-on size</a>'],
    ['🟢', '<a href="/blog/alaska-airlines-carry-on-size-2026/">Alaska carry-on size</a>'],
    ['🟩', '<a href="/blog/frontier-carry-on-size-2026/">Frontier carry-on size</a>'],
    ['🌺', '<a href="/blog/hawaiian-airlines-carry-on-size-2026/">Hawaiian carry-on size</a>'],
    ['📊', '<a href="/blog/carry-on-size-limits-by-airline-2026/">Carry-on size by airline</a>']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['What counts as a personal item?', 'A small item that fits under the seat in front of you. The airlines\' own examples are a purse, handbag, laptop bag, briefcase, small backpack, small camera, and on Southwest also a blanket.'],
    ['Is a backpack a personal item?', 'Often, if it fits under the seat. JetBlue, Southwest and United name a backpack as an example. American\'s example is a purse or small handbag, and Frontier lists kids\' backpacks and calls large backpacks carry-on bags.'],
    ['What size is a personal item on a plane?', 'It depends on the airline. American and Frontier allow 18 × 14 × 8 inches, JetBlue and Breeze 17 × 13 × 8, United 17 × 10 × 9, WestJet 16 × 6 × 13, Air Canada 13 × 17 × 6 and Ryanair 40 × 30 × 20 cm.'],
    ['Does Frontier check personal item size?', 'Yes. Frontier says personal item size is checked at boarding, and an item over 18 × 14 × 8 inches is charged, and the Bag Options page sets a 35 lb limit.'],
    ['What is the Delta personal item size?', 'Delta publishes no size. It says the personal item must fit under the seat in front of you.'],
    ['Is the personal item size the same on Alaska and Southwest?', 'Neither airline publishes a number. Both say only that the item must fit under the seat.'],
    ['What size backpack can I use as a personal item?', 'One that fits the tightest limit you will meet. A soft backpack within 17 × 13 × 8 inches fits JetBlue, Breeze and American; United is narrower at 17 × 10 × 9, and WestJet and Air Canada are only 6 inches deep.'],
    ['Do I get a personal item on Basic Economy?', 'Yes, on every airline listed here the personal item is included. On several Basic fares it is the only bag you may bring.']
  ]) +
  `<p><em>Converted numbers are rounded; the airline&rsquo;s own figure is the one that counts at the gate.</em></p>` +
  CHK +
  SRC([
    ['https://www.aa.com/i18n/travel-info/baggage/carry-on-baggage.jsp', 'American Airlines &mdash; Carry-on bags and size limits'],
    ['https://www.united.com/en/us/fly/baggage/carry-on-bags.html', 'United &mdash; Carry-on bags'],
    ['https://www.jetblue.com/help/carry-on-bags', 'JetBlue &mdash; Carry-on bags'],
    ['https://www.flyfrontier.com/travel/travel-info/bag-options/', 'Frontier &mdash; Bag options'],
    ['https://faq.flyfrontier.com/help/bags-seats-general-info-what-are-the-sizes-and-weight-limits-for-bags', 'Frontier &mdash; Sizes and weight limits for bags'],
    ['https://www.flybreeze.com/shopping/en-us/travel-tips', 'Breeze Airways &mdash; Bag sizes and weight limits'],
    ['https://www.westjet.com/en-ca/baggage/carry-on', 'WestJet &mdash; Carry-on baggage'],
    ['https://www.aircanada.com/us/en/aco/home/plan/baggage/carry-on.html', 'Air Canada &mdash; Carry-on baggage'],
    ['https://help.ryanair.com/hc/en-us/articles/12888036565521-Ryanair-s-Bag-Policy', 'Ryanair &mdash; Bag policy'],
    ['https://www.delta.com/us/en/baggage/carry-on-baggage', 'Delta &mdash; Carry-on baggage'],
    ['https://www.alaskaair.com/content/travel-info/baggage/carry-on-luggage', 'Alaska Airlines &mdash; Carry-on luggage'],
    ['https://support.southwest.com/helpcenter/article/carryon-baggage-policy', 'Southwest &mdash; Carry-on and personal item policy'],
    ['https://www.hawaiianairlines.com/content/travel-info/baggage/carry-on-luggage', 'Hawaiian Airlines &mdash; Carry-on luggage']
  ]);

module.exports = {
  slug: SLUG,
  title: 'Personal Item Size by Airline 2026: Official Limits in Inches and cm | canitakethis.co',
  desc: 'Personal item size: American and Frontier 18x14x8 in, United 17x10x9, JetBlue 17x13x8, plus WestJet, Air Canada, Ryanair. What counts, and who gives no size.',
  h1: 'Personal Item Size by Airline 2026: Official Limits in Inches and cm',
  body
};
