// Pillar: /blog/carry-on-size-limits-by-airline-2026/ (URL kept, content rewritten October 2026).
// Data: each airline's own website (US airlines checked October 2026; United, Spirit and the European
// carriers via official-domain search excerpts). Numbers are written in the airline's own unit; units.js converts.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, CHK, stat, callout, cl, faq, bagSvg } = H;

const logo = (code, name) => `<img src="https://www.gstatic.com/flights/airline_logos/70px/${code}.png" alt="" width="22" height="22" style="vertical-align:middle;margin-right:8px;border-radius:4px" onerror="this.style.display='none'">${name}`;
const meta = `<div class="art-meta"><span class="tag tag-neutral">Carry-On Size</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;

const US = T(
  ['Airline', '🧳 Carry-on bag', '🎒 Personal item', '📌 Good to know'],
  [
    [logo('AA', 'American'), '22 × 14 × 9 in, wheels and handles included', '18 × 14 × 8 in', 'Same on Basic Economy. The bag must fit the airport sizer. <a href="/blog/american-airlines-carry-on-size-2026/">Details</a>'],
    [logo('DL', 'Delta'), '22 × 14 × 9 in; the three sides may total no more than 45 in.', 'Under the seat, no size published', 'Delta Connection planes with 50 seats or fewer take personal items only in the cabin; the bag is checked free at the gate. <a href="/blog/delta-carry-on-size-2026/">Details</a>'],
    [logo('UA', 'United'), '22 × 14 × 9 in, handles and wheels included', '17 × 10 × 9 in', 'Checked on united.com search excerpts, October 2026 (the page blocks automated reading).'],
    [logo('B6', 'JetBlue'), '22 × 14 × 9 in', '17 × 13 × 8 in', 'Same on every fare, Blue Basic included since September 6, 2024. <a href="/blog/jetblue-carry-on-size-2026/">Details</a>'],
    [logo('AS', 'Alaska'), '22 × 14 × 9 in', 'Under the seat, no size published', 'Saver fares board in the last group (Group F). <a href="/blog/alaska-airlines-carry-on-size-2026/">Details</a>'],
    [logo('WN', 'Southwest'), '24 × 16 × 10 in, wheels, handles and attachments count', 'Under the seat, no numeric size', 'The biggest free carry-on of the large US airlines. Excess bags are checked at the ticket counter. <a href="/blog/southwest-carry-on-size-2026/">Details</a>'],
    [logo('F9', 'Frontier'), '24 × 16 × 10 in and 35 lb, <strong>paid add-on</strong>', '14 × 18 × 8 in (height × width × depth), free', 'The carry-on is not free on Frontier. <a href="/blog/frontier-carry-on-size-2026/">Details</a>'],
    [logo('NK', 'Spirit'), '22 × 18 × 10 in, handles and wheels included, <strong>paid</strong> unless your fare includes it', '18 × 14 × 8 in', 'First and Premium Economy include a carry-on; the Value option does not.']
  ]
);

const EU = T(
  ['Airline', '🎒 Free bag', '🧳 Bigger cabin bag', '⚖️ Weight'],
  [
    [logo('FR', 'Ryanair'), '40 × 30 × 20 cm, under the seat', '55 × 40 × 20 cm with the paid Priority &amp; 2 Cabin Bags add-on', '10 kg on the bigger bag'],
    [logo('W6', 'Wizz Air'), '40 × 30 × 20 cm, under the seat', '55 × 40 × 23 cm, sold only with WIZZ Priority', '10 kg on the trolley bag'],
    [logo('U2', 'easyJet'), '45 × 36 × 20 cm, under the seat', '56 × 45 × 25 cm, a paid option or with easyJet Plus', '15 kg on the large bag'],
    [logo('BA', 'British Airways'), '40 × 30 × 15 cm handbag', '56 × 45 × 25 cm cabin bag, included', 'Not stated in the excerpt I checked'],
    [logo('LH', 'Lufthansa'), 'One carry-on, 55 × 40 × 23 cm', 'Higher fares on short and medium routes allow two such bags', '8 kg per bag']
  ]
);

const body = CSS + meta +
  `<figure class="art-hero"><img src="/assets/blog/blog-carry-on-size-limits-by-airline-2026-hero.webp" alt="Gate agent measuring a rolling carry-on bag inside an airport sizer frame" width="800" height="400"><figcaption>The sizer at the gate is the only measurement that counts.</figcaption></figure>` +
  `<p>Most large US airlines allow the same carry-on, <strong>22 × 14 × 9 inches</strong>. The differences are in the personal item, the exceptions and the fare rules. Use the <strong>in · lb / cm · kg</strong> switch in the header to see every number in your units.</p>` +
  stat([
    ['22×14×9', 'inches, American, Delta, United, JetBlue and Alaska'],
    ['24×16×10', 'inches, Southwest (free) and Frontier (paid)'],
    ['18×14×8', 'inches, personal item at American and Spirit'],
    ['35 lb', 'Frontier weight cap on its paid carry-on']
  ]) +
  '<h2>🇺🇸 US airlines: carry-on and personal item</h2>' +
  US +
  bagSvg({ h: 22, w: 14, d: 9, refH: 24, refW: 16, label: 'Standard', alt: 'The standard 22 by 14 by 9 inch carry-on drawn to scale inside the dashed 24 by 16 by 10 inch Southwest and Frontier size', cap: 'Solid: the 22 x 14 x 9 inch standard. Dashed: the 24 x 16 x 10 inch size at Southwest and Frontier.' }) +
  `<figure class="art-fig"><img src="/assets/blog/blog-carry-on-size-limits-by-airline-2026-inArticle-1.webp" alt="Traveller with a visible face lifting a rolling suitcase into a metal carry-on sizer frame at a US airport gate" width="800" height="450"><figcaption>The frame at the gate is the only measurement that counts, not the spec sheet from the store.</figcaption></figure>` +
  '<h2>📏 What counts when they measure</h2>' +
  cl([
    ['🛞', '<strong>Wheels and handles count.</strong> American, United and Spirit say so in their size rules, and Southwest adds attachments.'],
    ['🧮', '<strong>Delta also adds the three sides.</strong> They must total 45 inches or less.'],
    ['🎒', '<strong>Personal item sizes differ.</strong> JetBlue and United publish the smallest, 17 inches on the longest side; American, Frontier and Spirit allow 18.'],
    ['💳', '<strong>The fare can change the answer.</strong> Frontier and Spirit charge for the carry-on; on most other US airlines it is free.']
  ]) +
  '<h2>🌍 Outside the US: five airlines</h2>' +
  '<p>European low-cost airlines split the allowance in two: a free small bag under the seat, and a larger cabin bag that is usually paid.</p>' +
  EU +
  `<figure class="art-fig"><img src="/assets/blog/blog-carry-on-size-limits-by-airline-2026-inArticle-2.webp" alt="Family at a European airport check-in counter placing a backpack into an under-seat baggage size checker" width="800" height="450"><figcaption>Personal item or cabin bag? On a European low-cost airline, that decides whether you pay.</figcaption></figure>` +
  callout('🇪🇺', '<strong>The EU free-bag law will not end the size differences.</strong> The passenger-rights reform adopted on 7 July 2026 guarantees a free personal item up to 40 × 30 × 15 cm and a small cabin bag, but it does not set one size for the larger overhead bag. It takes effect in the second half of 2027, so nothing changes for a trip in 2026.') +
  '<h2>✅ Before you fly</h2>' +
  cl([
    ['1', 'Measure the packed bag with wheels, handles and outside pockets.'],
    ['2', 'Mixing airlines on one trip? Size to the smallest personal item you will meet, 17 inches on the longest side.'],
    ['3', 'Check the fare, not just the airline: Frontier and Spirit charge for the carry-on, and European low-cost fares often include only the small bag.'],
    ['4', 'On a small regional plane, expect the bag to be tagged at the door and returned after landing.']
  ]) +
  '<h2>🔎 One airline at a time</h2>' +
  cl([
    ['🔴', '<a href="/blog/american-airlines-carry-on-size-2026/">American carry-on size</a> &middot; <a href="/blog/american-airlines-baggage-fees-2026/">fees</a>'],
    ['🔺', '<a href="/blog/delta-carry-on-size-2026/">Delta carry-on size</a> &middot; <a href="/blog/delta-baggage-fees-2026/">fees</a>'],
    ['🔵', '<a href="/blog/jetblue-carry-on-size-2026/">JetBlue carry-on size</a> &middot; <a href="/blog/jetblue-baggage-fees-2026/">fees</a>'],
    ['🟡', '<a href="/blog/southwest-carry-on-size-2026/">Southwest carry-on size</a> &middot; <a href="/blog/southwest-baggage-fees-2026/">fees</a>'],
    ['🟢', '<a href="/blog/alaska-airlines-carry-on-size-2026/">Alaska carry-on size</a>'],
    ['🟩', '<a href="/blog/frontier-carry-on-size-2026/">Frontier carry-on size</a>']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['What is the standard carry-on size in the US?', 'American, Delta, United, JetBlue and Alaska all publish 22 × 14 × 9 inches. Southwest allows 24 × 16 × 10 inches.'],
    ['Do wheels and handles count?', 'Yes, at the airlines that say so: American, United, Spirit and Southwest. Measure the bag as it stands.'],
    ['Is the personal item the same size everywhere?', 'No. JetBlue is 17 × 13 × 8 inches, United is 17 × 10 × 9, American and Spirit are 18 × 14 × 8, and Frontier is 14 × 18 × 8. Delta, Alaska and Southwest publish no numbers.'],
    ['Which large US airline allows the biggest free carry-on?', 'Southwest, at 24 × 16 × 10 inches. Frontier lists the same size but charges for it.']
  ]) +
  `<p><em>Converted numbers are rounded; the airline's own figure is the one the sizer enforces.</em></p>` +
  CHK +
  SRC([
    ['https://www.aa.com/i18n/travel-info/baggage/carry-on-baggage.jsp', 'American Airlines &mdash; Carry-on bags'],
    ['https://www.delta.com/us/en/baggage/carry-on-baggage', 'Delta &mdash; Carry-on baggage'],
    ['https://united.com/CMS/en-US/travel/Pages/BaggageCarry-On.aspx', 'United &mdash; Carry-on baggage'],
    ['https://www.jetblue.com/help/carry-on-bags', 'JetBlue &mdash; Carry-on bags'],
    ['https://www.alaskaair.com/content/travel-info/baggage/carry-on-luggage', 'Alaska Airlines &mdash; Carry-on luggage'],
    ['https://support.southwest.com/helpcenter/article/carryon-baggage-policy', 'Southwest &mdash; Carry-on policy'],
    ['https://www.flyfrontier.com/travel/travel-info/bag-options/', 'Frontier &mdash; Bag options'],
    ['https://customersupport.spirit.com/en-us/category/article/KA-01535', 'Spirit &mdash; Bag info'],
    ['https://help.ryanair.com/hc/en-us/articles/12888036565521-Ryanair-s-Bag-Policy', 'Ryanair &mdash; Bag policy'],
    ['https://www.wizzair.com/en-gb/help-centre/booking-information-and-services/baggage/baggage-allowance/cabin-baggage', 'Wizz Air &mdash; Cabin baggage'],
    ['https://www.easyjet.com/en/help/baggage/cabin-bags', 'easyJet &mdash; Cabin bags'],
    ['https://www.britishairways.com/content/information/baggage-essentials', 'British Airways &mdash; Baggage essentials'],
    ['https://www.lufthansa.com/us/en/carry-on-baggage', 'Lufthansa &mdash; Carry-on baggage'],
    ['https://www.europarl.europa.eu/news/en/press-room/20260116IPR32442/european-parliament-stands-behind-air-passenger-rights', 'European Parliament &mdash; Air passenger rights reform']
  ]);

module.exports = {
  title: 'Carry-On Size & Dimensions by Airline (2026): US Airlines First | canitakethis.co',
  desc: 'Carry-on and personal item dimensions for American, Delta, United, Southwest, JetBlue, Alaska, Frontier and Spirit, then Ryanair, Wizz Air, easyJet, British Airways and Lufthansa.',
  h1: 'Carry-On Size & Dimensions by Airline (2026): US Airlines First',
  body
};
