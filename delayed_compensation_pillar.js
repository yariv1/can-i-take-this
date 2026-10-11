// Pillar: /blog/delayed-flight-compensation-us-airlines-2026/ (session 21, 2026-10-11). Demand: Ahrefs US, "delayed flight compensation" and
// "american airlines delayed flight compensation" are ">1,000"; Delta/United/Southwest/JetBlue delayed variants ">100". Roadmap: BLOG_ROADMAP.md (2026-10-11 update).
// Data (read 11 October 2026): transportation.gov Refunds page (updated 7 Nov 2025); Federal Register 17 Nov 2025 (ANPRM withdrawal) and
// 3 Sep 2026 (Section 511(b) reporting rule, effective 19 Oct 2026); each airline's OWN plan: aa.com Customer service plan, delta.com Customer
// Service Plan + Delayed or Canceled Flight page, united.com Customer Commitment, Southwest Customer Service Plan Rev #26-01 (effective 06/04/2026),
// jetblue.com Customer Service Plan; europa.eu Your Europe air passenger rights; caa.co.uk Delays + UK261 applicability table.
// Not read: Alaska (page blocks Claude), Frontier, Allegiant, Spirit (closed). The DOT airline dashboard is dated 3 Dec 2024 and was NOT used.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;
const { VCSS, flow } = require('./visual_helpers.js');

const SLUG = 'delayed-flight-compensation-us-airlines-2026';
const logo = (code, name) => `<img src="https://www.gstatic.com/flights/airline_logos/70px/${code}.png" alt="" width="22" height="22" style="vertical-align:middle;margin-right:8px;border-radius:4px" onerror="this.style.display='none'">${name}`;
const fl = (c, n) => `<img src="https://flagcdn.com/w40/${c}.png" alt="" width="22" height="16" style="vertical-align:middle;margin-right:8px;border-radius:2px">${n}`;
const meta = `<div class="art-meta"><span class="tag tag-neutral">Airline Fees</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>7 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Man at a food-court table in an airport looking up at a departures board that shows Denver and Boston delayed, with a $12.00 meal voucher beside his sandwich and fries" width="800" height="400"><figcaption>A long delay the airline caused earns a meal voucher or credit at American, United, Southwest and JetBlue, not cash.</figcaption></figure>`;

const AIRLINES = T(
  ['Airline', 'When it applies', 'What the airline gives you', 'Cash, credit or points'],
  [
    [logo('AA', 'American'), 'Delay or cancellation caused by American. Food credit at 3 hours or more after the scheduled departure.', 'Rebooking at no extra cost, a food and beverage credit, and a hotel voucher with transport if you are delayed overnight away from home.', '<span class="pp-n">None listed</span>'],
    [logo('DL', 'Delta'), 'Delay or cancellation of 3 hours or more caused by Delta.', 'You request reimbursement for reasonable meals. If you are stuck overnight away from home or your destination: a Delta-contracted hotel (subject to availability) and ground transport.', '<span class="pp-n">None listed</span>'],
    [logo('UA', 'United'), 'Cancellation or delay within United&rsquo;s control, such as a mechanical issue. Meal voucher after a wait of more than 3 hours.', 'Next flight in your cabin at no extra cost, a meal voucher, and hotel and ride vouchers if you must stay overnight away from home.', '<span class="pp-n">None listed</span>'],
    [logo('WN', 'Southwest'), 'Delay or cancellation within Southwest&rsquo;s control. Meals at a wait of 3 hours or more; the voucher if you arrive 3 hours or more late.', 'Rebooking, a meal voucher or meal reimbursement, lodging and a ride to the hotel if you are stranded overnight.', '<span class="pp-y">Voucher of at least $75</span> Transferable; ask at Southwest.com/DelayForm within one year.'],
    [logo('B6', 'JetBlue'), 'Controllable delay of more than 3 hours past the scheduled departure.', 'A $12 digital meal voucher when you arrive 3 hours or more late, and a contracted hotel if you are away from home overnight.', '<span class="pp-p">5,000 TrueBlue points</span> Members only, with the account on the reservation before the disruption.']
  ]
);

const REGIONS = T(
  ['', fl('us', 'United States'), fl('eu', 'European Union'), fl('gb', 'United Kingdom')],
  [
    ['Cash compensation for a delay', '<span class="pp-n">Not required by law</span>', '<span class="pp-y">€250 to €600</span>', '<span class="pp-y">£220 to £520</span>'],
    ['Delay that counts', 'Refund right: 3 hours (domestic) or 6 hours (international)', 'Arrival 3 hours or more late', 'Arrival more than 3 hours late'],
    ['Meals and hotel', 'Each airline&rsquo;s own plan', 'Required by law', 'Required by law'],
    ['How you get it', 'Ask the airline; refund is automatic', 'Claim from the airline', 'Claim from the airline']
  ]
);

const EU = T(
  ['Flight distance', 'Delay at arrival', 'EU compensation', 'UK compensation'],
  [
    ['1,500 km or less', '3 hours or more', '€250', '£220'],
    ['1,500 to 3,500 km', '3 hours or more', '€400', '£350'],
    ['More than 3,500 km (most flights to the U.S.)', 'At least 3 but less than 4 hours', '€300', '£260'],
    ['More than 3,500 km (most flights to the U.S.)', '4 hours or more', '€600', '£520']
  ]
);

const FLOW = flow([
  ['Was the delay the airline&rsquo;s fault?', 'p', 'Check', 'A mechanical problem counts as the airline&rsquo;s fault. Weather and air traffic control do not: American says you pay for your own meals and hotel, and Southwest promises only rebooking.'],
  ['Is it 3 hours or more?', 'p', 'Check', 'Meals and the Southwest and JetBlue extras start at about 3 hours. A refund right starts at 3 hours late for a domestic trip and 6 hours for an international one.'],
  ['What do you ask for at the airport?', 'y', 'Ask', 'The meal voucher or credit, and a hotel voucher with a ride if you are stranded overnight. Keep every receipt if you pay yourself.'],
  ['What if you decide not to fly?', 'y', 'Refund', 'DOT says you are entitled to a refund if the airline cancels, or significantly delays, a flight and you decline the alternative. It must arrive within 7 business days for a card, 20 calendar days for other payments.'],
  ['What do you file afterwards?', 'p', 'File', 'Southwest: the LUV voucher form within one year. Delta: the reimbursement request for meals, hotel and transport. JetBlue: nothing for the points; they arrive automatically.']
]);

const body = CSS + VCSS + meta + hero +
  `<p><strong>US law does not make an airline pay cash for a delayed flight.</strong> What you get is a refund if you decide not to fly, plus the promises each airline puts in its own customer service plan: rebooking, a meal and a hotel when the delay is the airline&rsquo;s fault. Of the five airlines we checked, only <strong>Southwest</strong> promises a voucher worth at least $75 and only <strong>JetBlue</strong> promises points (5,000 for TrueBlue members). Europe and the UK are different: they pay a fixed amount in cash.</p>` +
  stat([
    ['$0', 'in cash that US law requires for a delay'],
    ['3 hours', 'is where meals, vouchers and the domestic refund right start'],
    ['$75', 'minimum Southwest voucher for a delay it controls'],
    ['€250-€600', 'in cash under EU rules for a delay of 3 hours or more']
  ]) +
  '<h2>✈️ What the biggest US airlines promise for a delay</h2>' +
  `<p>These are the airlines&rsquo; own words, read on their own websites in October 2026. They apply when the delay is within the airline&rsquo;s control, such as a mechanical problem.</p>` +
  AIRLINES +
  `<p>Weather and air traffic control are not within an airline&rsquo;s control. American says that in those cases you pay for your own overnight stay, meals and incidental expenses, and Southwest limits the promise to rebooking. JetBlue&rsquo;s points, meal vouchers and hotels apply only to controllable disruptions. We could not read Alaska&rsquo;s pages (they block automated reading) and did not check Frontier, so neither is in the table.</p>` +
  '<h2>🧭 Delayed flight: what to do, step by step</h2>' +
  FLOW +
  '<h2>' + fl('us', 'What US law gives you') + '</h2>' +
  callout('⚖️', '<strong>The government does not require cash for a delay.</strong> On 17 November 2025 DOT withdrew its December 2024 advance notice that asked whether airlines should be required to pay cash compensation and provide free rebooking and meals for significant delays. It never became a rule.') +
  `<p>The rule that does exist is about refunds. DOT says a &ldquo;significant delay&rdquo; is an arrival 3 hours or more later (domestic) or 6 hours or more later (international) than scheduled, and also covers an early departure by the same amount, a change of airport, added connections or a downgrade. If you choose not to travel, the airline owes a refund automatically: within 7 business days if you paid by card and within 20 calendar days for other payments. A separate DOT rule published on 3 September 2026 takes effect on 19 October 2026. It changes how airlines report the causes of delays, putting ten events Congress listed in their own reporting category. It does not add any payment to what you can claim.</p>` +
  '<h2>' + fl('eu', 'Flying to or from Europe? A different rulebook') + '</h2>' +
  `<p>Delay rights in Europe are a fixed cash amount, set by distance and by how late you arrive. For a transatlantic flight, the distance is over 3,500 km.</p>` +
  EU +
  `<p>Which flights are covered matters for Americans. EU rules apply to every flight leaving an EU airport for a country outside the EU, on any airline, and to flights arriving in the EU only when an EU airline operates them. A Delta flight from Paris to New York is covered; a Delta flight from New York to Paris is not. UK rules follow a similar logic: a flight from a UK airport to the U.S. is covered on any airline, including a US airline, but a flight arriving in the UK from the U.S. is covered only on a UK or EU airline. The EU also says airlines do not owe compensation for delays caused by extraordinary circumstances such as adverse weather, air traffic management decisions or security risks, and that the airline must prove it. If you have already received benefits for the same journey under non-EU law, the EU rules do not add a second payment. Unlike the US, UK and EU airlines must also give you meals and, for overnight delays, a hotel, once the wait reaches 2, 3 or 4 hours depending on the distance.</p>` +
  REGIONS +
  '<h2>✅ Before you fly</h2>' +
  cl([
    ['1', 'Join the airline&rsquo;s loyalty program and attach the number to the booking: JetBlue only gives its points to TrueBlue members who have the account on the reservation before the disruption.'],
    ['2', 'Save the delay notice, boarding pass and every receipt for meals, hotel and rides.'],
    ['3', 'Ask at the airport for the meal and hotel vouchers; United and Southwest say to ask if they do not appear automatically.'],
    ['4', 'If you decide not to fly, say so clearly and ask for the refund to the original payment.'],
    ['5', 'Flying out of Europe: note the real arrival time, because EU and UK compensation is based on how late you arrive.']
  ]) +
  '<h2>🔎 More airline rules</h2>' +
  cl([
    ['🔴', '<a href="/blog/american-airlines-baggage-fees-2026/">American baggage fees</a> &middot; <a href="/blog/delta-baggage-fees-2026/">Delta</a> &middot; <a href="/blog/jetblue-baggage-fees-2026/">JetBlue</a>'],
    ['🧳', '<a href="/blog/basic-economy-carry-on-rules-2026/">Basic Economy carry-on rules</a>'],
    ['🛂', '<a href="/blog/do-i-need-a-passport-canada-mexico-bahamas-puerto-rico-2026/">Do you need a passport? Canada, Mexico, Bahamas, Puerto Rico</a>']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Do airlines have to pay you for a delayed flight in the US?', 'No. DOT does not require cash compensation for a delay, and on 17 November 2025 it withdrew its 2024 proposal to require it. You are entitled to a refund if you decline a significantly delayed flight, and each airline promises its own meals and hotel when the delay is its fault.'],
    ['How long does a flight have to be delayed to get compensation?', 'For meals, the airlines we checked start at 3 hours. For a refund, DOT counts a significant delay as 3 hours or more for a domestic itinerary and 6 hours or more for an international one. In Europe, cash compensation starts at an arrival 3 hours or more late.'],
    ['Does American Airlines pay compensation for a delayed flight?', 'Its customer service plan promises rebooking, a food and beverage credit at 3 hours or more, and a hotel voucher with transport for an overnight delay, when American caused the delay. It lists no cash payment.'],
    ['Does Delta pay compensation for a delayed flight?', 'Delta lets you request reimbursement of reasonable meal costs for a delay or cancellation of 3 hours or more caused by Delta, and a hotel and ground transport if you are stranded overnight. It does not reimburse weather or air traffic control delays.'],
    ['Does United compensate for delays?', 'United promises a meal voucher after a wait of more than 3 hours and hotel and ride vouchers for an overnight stay, when the cause is within its control. Its plan lists no cash payment for the delay itself.'],
    ['Does Southwest give a voucher for a delay?', 'Yes, for delays and cancellations within its control: a transferable voucher of at least $75 if you arrive 3 hours or more late, requested at Southwest.com/DelayForm within one year. Only one voucher per disruption.'],
    ['What does JetBlue give for a delay?', 'For a controllable delay of more than 3 hours JetBlue gives TrueBlue members 5,000 points, plus a $12 meal voucher to every ticketed customer when the arrival delay is 3 hours or more.'],
    ['Do I get compensation if the delay is caused by weather?', 'Not from the airline in the US: American says you pay for your own meals and hotel, Southwest only rebooks you, and JetBlue does not compensate for uncontrollable events. In the EU and UK, adverse weather is an extraordinary circumstance, and the airline does not owe the cash payment if it proves the link.'],
    ['Does EU compensation apply to my US airline flight?', 'Only if the flight leaves an EU airport, on any airline, or an EU airline operates it into the EU. A US airline flight arriving in the EU from the US is not covered, and a US airline flight arriving in the UK from the US is not covered by UK rules either.']
  ]) +
  `<p><em>Airline plans and government rules change; the airline&rsquo;s own plan and the government pages below on the day you travel are the ones that count.</em></p>` +
  '<p><em>Checked October 2026 on the airlines&rsquo; own websites and on the DOT, Federal Register, European Union and UK Civil Aviation Authority pages. Alaska and Frontier were not checked.</em></p>' +
  SRC([
    ['https://www.transportation.gov/individuals/aviation-consumer-protection/refunds', 'DOT &mdash; Refunds'],
    ['https://www.federalregister.gov/documents/2025/11/17/2025-20042/airline-passenger-rights-withdrawal', 'Federal Register &mdash; Airline Passenger Rights; Withdrawal (17 Nov 2025)'],
    ['https://www.federalregister.gov/documents/2026/09/03/2026-18040/cause-of-airline-delay-and-cancellation-categories-under-section-511b-of-the-faa-reauthorization-act', 'Federal Register &mdash; Cause of airline delay and cancellation categories, Section 511(b) (3 Sep 2026)'],
    ['https://www.aa.com/web/i18n/customer-service/support/customer-service-plan.html', 'American Airlines &mdash; Customer service plan'],
    ['https://www.delta.com/us/en/legal/customer-commitment', 'Delta &mdash; Customer Service Plan'],
    ['https://www.delta.com/us/en/change-cancel/delayed-or-canceled-flight', 'Delta &mdash; Delayed or canceled flight'],
    ['https://www.united.com/en/us/fly/customer-commitment.html', 'United &mdash; Our United Customer Commitment'],
    ['https://www.southwest.com/swa-resources/pdfs/corporate-commitments/customer-service-plan.pdf', 'Southwest &mdash; Customer Service Plan (Rev #26-01)'],
    ['https://www.jetblue.com/customer-assurance/customer-service-plan', 'JetBlue &mdash; Customer Service Plan'],
    ['https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', 'Your Europe &mdash; Air passenger rights'],
    ['https://www.caa.co.uk/air-passengers/travel-problems-and-rights/flight-delays-and-cancellations/delays/', 'UK Civil Aviation Authority &mdash; Delays']
  ]);

module.exports = {
  slug: SLUG,
  title: 'Delayed Flight Compensation 2026: What US Airlines Owe You | canitakethis.co',
  desc: 'US law pays no cash for a delayed flight. See what American, Delta, United, Southwest and JetBlue promise, DOT refund rules, and EU and UK amounts.',
  h1: 'Delayed Flight Compensation 2026: What US Airlines Owe You',
  body
};
