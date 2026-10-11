// Pillar: /blog/overbooked-flight-compensation-us-airlines-2026/ (session 22, 2026-10-11). Demand (Ahrefs US buckets): "overbooked flight" family 288 ideas,
// "overbooked flight", "overbooked flight compensation", "compensation for overbooked flight" >100; "bumped flight compensation" >100 (head "bumped flight" <100);
// "denied boarding compensation", "involuntary denied boarding" >100. Airline-name variants all <100.
// Data (read 11 October 2026): transportation.gov Bumping & Oversales (updated 26 Sep 2025); eCFR 14 CFR 250.5 ($1,075 / $2,150); American Conditions of Carriage
// (updated 13 Aug 2026) + Customer service plan; Delta US Contract of Carriage Rule 20; United Contract of Carriage Rule 25; Southwest Contract of Carriage 58th Revised
// 09/24/2026 section 9 + CSP Rev #26-01; JetBlue Contract of Carriage rev 101 (17 Apr 2026) section 27 + Customer Service Plan; Your Europe; UK CAA denied boarding page.
// Not read: Alaska (blocks Claude), Frontier, Allegiant, Spirit (closed). The reported internal American memo of 30 Sep 2026 (blogs only) is NOT used as a fact.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;
const { VCSS, flow } = require('./visual_helpers.js');

const SLUG = 'overbooked-flight-compensation-us-airlines-2026';
const logo = (code, name) => `<img src="https://www.gstatic.com/flights/airline_logos/70px/${code}.png" alt="" width="22" height="22" style="vertical-align:middle;margin-right:8px;border-radius:4px" onerror="this.style.display='none'">${name}`;
const fl = (c, n) => `<img src="https://flagcdn.com/w40/${c}.png" alt="" width="22" height="16" style="vertical-align:middle;margin-right:8px;border-radius:2px">${n}`;
const meta = `<div class="art-meta"><span class="tag tag-neutral">Airline Fees</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>8 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Delta gate agent at a Minneapolis-St Paul gate podium holding out a Delta Air Lines check marked Denied boarding compensation for $800.00 to a passenger, with the gate monitor above showing Seattle 6:05 PM" width="800" height="400"><figcaption>Delta pays involuntary denied boarding compensation the same day at the airport, in cash or an immediately negotiable check.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="450"><figcaption>${cap}</figcaption></figure>`;

const DOT = T(
  ['Your arrival delay (substitute flight vs. your original)', 'Domestic flight', 'International flight leaving a US airport'],
  [
    ['0 to 1 hour', '<span class="pp-n">Nothing owed</span>', '<span class="pp-n">Nothing owed</span>'],
    ['Between', '<span class="pp-p">1 to 2 hours: 200% of your one-way fare, up to $1,075</span>', '<span class="pp-p">1 to 4 hours: 200% of your one-way fare, up to $1,075</span>'],
    ['Longest', '<span class="pp-y">Over 2 hours: 400% of your one-way fare, up to $2,150</span>', '<span class="pp-y">Over 4 hours: 400% of your one-way fare, up to $2,150</span>']
  ]
);

const EXAMPLES = T(
  ['One-way fare', 'Arrive 1 to 2 hours late (domestic)', 'Arrive over 2 hours late (domestic)'],
  [
    ['$150', '$300 (200% of $150)', '$600 (400% of $150)'],
    ['$400', '$800 (200% of $400)', '$1,600 (400% of $400)'],
    ['$700', '$1,075 (200% would be $1,400; the cap applies)', '$2,150 (400% would be $2,800; the cap applies)']
  ]
);

const AIRLINES = T(
  ['Airline', 'What its own contract says about the payment', 'Volunteers and how you are paid'],
  [
    [logo('AA', 'American'), '<span class="pp-p">Follows DOT:</span> 200% up to $1,075 for 1 to 2 hours (domestic), 400% up to $2,150 for 2 hours or more. From the EU to the US: a travel voucher, or a check for 300 EUR (under 4 hours) or 600 EUR (4 hours or more).', 'Amount and form for volunteers are &ldquo;solely at American&rsquo;s discretion&rdquo;. If you are denied boarding, a check or travel credit the same day at the airport or mailed within 24 hours. Chooses who is bumped mostly by check-in time, then hardship, fare and AAdvantage status.'],
    [logo('DL', 'Delta'), '<span class="pp-p">Follows DOT:</span> 200% up to $1,075 if Delta gets you there within 2 hours of your original arrival, 400% up to $2,150 if it cannot. Nothing if you arrive within 1 hour. Fare includes surcharges and taxes.', 'Volunteer compensation is whatever Delta decides. Cash or an immediately negotiable check the same day, or by mail within 24 hours. A hotel at no cost for an overnight wait; if no hotel is available, a credit voucher of up to $100.'],
    [logo('UA', 'United'), '<span class="pp-p">Follows DOT:</span> 200% up to $1,075 for 1 to 2 hours, 400% up to $2,150 for more than 2 hours (domestic).', 'Volunteers get a check or an electronic travel certificate that is valid for one year and has no refund value. Priority for bumping can follow fare class, itinerary and frequent flyer status; United may protect families it judges would face hardship.'],
    [logo('WN', 'Southwest'), '<span class="pp-p">Follows DOT:</span> 200% up to $1,075 for 1 to 2 hours (domestic), 400% up to $2,150 for 2 hours or more. International: 1 to 4 hours and 4 hours or more.', 'Volunteers are typically offered a voucher. Involuntary compensation is a draft (check); a LUV Voucher only if you agree, and you may refuse it. Bumping priority starts with Choice Extra and A-List members.'],
    [logo('B6', 'JetBlue'), '<span class="pp-p">Follows DOT:</span> 200% up to $1,075 for 1 to 2 hours, 400% up to $2,150 for more than 2 hours (domestic); 4 hours is the line for international. Its plan says &ldquo;up to $2,150&rdquo;.', 'A volunteer who accepts the offer is not counted as bumped and gets no denied boarding compensation. Accepting compensation ends any further claim for the missed flight.']
  ]
);

const WHEN_NOT = T(
  ['You get it when', 'You get nothing when'],
  [[
    '<ul><li>You depart from a US airport.</li><li>You have a confirmed reservation.</li><li>You checked in on time.</li><li>You reached the gate on time.</li><li>The airline cannot get you to your destination within 1 hour of your original arrival.</li></ul>',
    '<ul><li>The flight is cancelled.</li><li>A smaller plane replaces the planned one for safety or operational reasons.</li><li>Weight or balance limits on a plane with 60 seats or fewer.</li><li>You are moved to a lower class (you get a refund of the difference).</li><li>A charter, or a plane with fewer than 30 passengers.</li><li>The flight leaves a foreign airport (EU or UK rules may apply instead).</li></ul>'
  ]]
);

const EU = T(
  ['Flight distance', 'EU compensation', 'EU: half amount if you accept re-routing and arrive no more than this late', 'UK compensation (arrive that late / less late)'],
  [
    ['1,500 km or less', '&euro;250', '&euro;125 (2 hours)', '&pound;220 (2 hours or more late) / &pound;110'],
    ['1,500 to 3,500 km (and longer flights inside the EU)', '&euro;400', '&euro;200 (3 hours)', '&pound;350 (3 hours or more) / &pound;175'],
    ['More than 3,500 km (most flights to the U.S.)', '&euro;600', '&euro;300 (4 hours)', '&pound;520 (4 hours or more) / &pound;260']
  ]
);

const FLOW = flow([
  ['Did the airline ask for volunteers first?', 'p', 'Check', 'It must. Before bumping anyone it has to ask who will give up a seat for compensation, and it must tell volunteers whether they risk being bumped anyway and what they would be owed if so.'],
  ['Do you want to volunteer?', 'y', 'Ask first', 'Ask when the next flight with a confirmed seat is, whether you get a meal and a hotel, how long the voucher is valid and whether it works for international flights and holidays. There is no limit on what the airline may offer, and you can negotiate.'],
  ['Are you being bumped against your will?', 'n', 'Ask', 'Ask for the airline&rsquo;s written statement of your rights. DOT requires one for every involuntarily bumped passenger.'],
  ['What time will the new flight land?', 'p', 'Check', 'If you arrive no more than 1 hour after your original time, nothing is owed. Past that, compare with the table above to see 200% or 400%.'],
  ['How do you get paid?', 'y', 'Same day', 'The airline must offer payment at the airport that day, or within 24 hours if your replacement flight leaves first. It can offer a voucher instead only if it is worth at least the cash and you are told you may refuse it and take the cash.']
]);

const body = CSS + VCSS + meta + hero +
  `<p><strong>If an airline bumps you from an overbooked flight and you did nothing wrong, US law makes it pay you 200% or 400% of your one-way fare, up to $1,075 or $2,150.</strong> It depends on how many hours later you land than you were meant to. If the replacement flight gets you there within an hour of your original arrival, nothing is owed. If you give up your seat voluntarily, the law sets no amount at all: the deal is whatever you and the airline agree.</p>` +
  stat([
    ['200% / 400%', 'of your one-way fare, depending on how late you arrive'],
    ['$1,075 / $2,150', 'the most the airline has to pay under the rule'],
    ['1 hour', 'of lateness or less: nothing is owed'],
    ['Same day', 'when the airline must offer you the money']
  ]) +
  '<h2>🙋 Volunteer, or be bumped against your will?</h2>' +
  `<p>Airlines sell more tickets than seats because some passengers never show up. When more people turn up than there are seats, the airline is required to ask for volunteers before it can bump anyone. That is the moment where you have the most power: DOT says there is no limit on the money or vouchers the airline may offer and that you are free to negotiate. An airline&rsquo;s plan for volunteers is not set by law, so the offer can be a check, a voucher, or a travel certificate, and each airline decides.</p>` +
  fig(1, 'American Airlines gate agent at a Phoenix Sky Harbor Gate A5 podium asking for volunteers through the gate handset while a passenger stands up in the second row with a raised hand', 'At the gate the airline has to ask for volunteers before it can bump anyone, and what it offers them is up to the airline and you.') +
  `<p>If nobody volunteers, the airline picks who gets bumped using its own rules, such as check-in time, fare paid or frequent flyer status. It may not use something like race or ethnicity. Once your boarding pass has been scanned and you have been told to board, an airline generally cannot take your seat; the exceptions are safety, security or health, or disruptive behaviour.</p>` +
  '<h2>💵 How much you get when you are bumped involuntarily</h2>' +
  `<p>DOT sets the amount from the length of your arrival delay, measured between the flight you were meant to take and the substitute flight the airline arranges. The current caps, in the DOT page and in the federal rule, are $1,075 and $2,150; articles that still print lower caps are out of date.</p>` +
  DOT +
  `<p>The &ldquo;one-way fare&rdquo; is the price of the leg you were bumped from, to your destination or your first stopover. A few examples for a domestic flight:</p>` +
  EXAMPLES +
  `<p>These are the minimums the law sets. Airlines may pay more. If your carrier offers a voucher or a free ticket in place of the cash, it has to be worth at least the cash, the airline must tell you the exact cash amount you are giving up, and it must disclose every restriction, such as fees and blackout dates, before you decide.</p>` +
  '<h2>🚫 When you get nothing</h2>' +
  `<p>Being bumped does not always mean being paid. Check both columns before you argue at the counter.</p>` +
  WHEN_NOT +
  callout('📌', '<strong>You still get a seat.</strong> Even when no money is owed, Delta and United say they will put you on the next flight with space at no extra cost, and American and Southwest promise the next available flight. Delta adds a hotel when the wait is overnight.') +
  '<h2>🛫 What five US airlines say in their own contracts</h2>' +
  `<p>We read each airline&rsquo;s contract of carriage in October 2026. All five repeat the DOT amounts. The differences are in how they pay and what they offer volunteers.</p>` +
  AIRLINES +
  `<p>We could not read Alaska&rsquo;s pages (they block automated reading) and did not check Frontier, so neither is in the table.</p>` +
  '<h2>🧭 Bumped from a flight: what to do, step by step</h2>' +
  FLOW +
  '<h2>' + fl('eu', 'Flying from Europe or the UK? A different rulebook') + '</h2>' +
  `<p>DOT&rsquo;s rule applies only to flights that leave a US airport. For a flight leaving the EU, Iceland, Norway or Switzerland on any airline, or arriving in the EU on an EU airline, EU rules apply instead, and they pay a fixed sum by distance. For the UK, the rules cover flights leaving a UK airport on any airline, and flights arriving in the UK on an EU or UK airline. The Your Europe page says that if you arrived on time for check-in you should always receive compensation when you are denied boarding because of overbooking, except for reasons such as health, safety, security or missing documents. You can also choose between a refund and a new flight. The UK Civil Aviation Authority adds that, whether you volunteered or not, the airline must give you food and drink, a way to communicate and a hotel if you are re-routed the next day. If you have already received benefits for the same journey under a non-EU law, the EU rules do not add a second payment. American also publishes its own EU-to-US offer: a travel voucher or a check for 300 euros (under 4 hours late) or 600 euros (4 hours or more).</p>` +
  EU +
  `<p>If you volunteer, the airline and you agree the deal; the UK CAA says a volunteer can still choose an alternative flight or a refund.</p>` +
  '<h2>✅ Before you fly</h2>' +
  cl([
    ['1', 'Check in as soon as it opens and reach the gate early. Check-in time is the first thing most airlines use to decide who is bumped, and you lose the right to compensation if you are late.'],
    ['2', 'If the gate agent asks for volunteers, ask the DOT questions before you say yes: next confirmed flight, meal, hotel, voucher validity, whether it works on international flights.'],
    ['3', 'If you are bumped against your will, ask for the written statement of your rights and the arrival time of the new flight.'],
    ['4', 'Keep your boarding pass, the new itinerary and every receipt for meals, hotel and rides.'],
    ['5', 'Flying out of Europe or the UK, note the real arrival time: compensation depends on how late you land.']
  ]) +
  '<h2>🔎 More airline rules</h2>' +
  cl([
    ['⏱️', '<a href="/blog/delayed-flight-compensation-us-airlines-2026/">Delayed flight compensation: what US airlines owe you</a>'],
    ['🧳', '<a href="/blog/basic-economy-carry-on-rules-2026/">Basic Economy carry-on rules</a>'],
    ['🔴', '<a href="/blog/american-airlines-baggage-fees-2026/">American baggage fees</a> &middot; <a href="/blog/delta-baggage-fees-2026/">Delta</a> &middot; <a href="/blog/jetblue-baggage-fees-2026/">JetBlue</a>']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['How much compensation do you get for an overbooked flight?', 'If you are bumped against your will from a US departure and arrive over an hour late, the airline owes 200% of your one-way fare (up to $1,075) for a delay of 1 to 2 hours on a domestic flight, and 400% (up to $2,150) for longer. For an international flight leaving the US, the line between the two is 4 hours.'],
    ['What is the difference between a bumped flight and denied boarding?', 'None in practice. DOT uses &ldquo;bumping&rdquo; and &ldquo;denied boarding&rdquo; for the same thing: the airline cannot seat you because the flight has more passengers than seats. It is voluntary if you accept an offer to give up your seat, and involuntary if you do not.'],
    ['Do I get compensation if I volunteer to give up my seat?', 'Whatever you and the airline agree. The law sets no amount and no limit. JetBlue says a volunteer who accepts the offer is not counted as bumped and gets no denied boarding compensation, so ask about meals, a hotel and voucher rules before you say yes.'],
    ['Can I refuse a voucher and take cash?', 'Yes. The airline can only substitute a free or reduced ticket if its value is at least the cash, if it tells you the cash amount, and if it explains every restriction first. Southwest says in its contract that you may refuse the LUV Voucher and insist on a draft.'],
    ['When do I get paid if I am bumped?', 'DOT says the airline must offer payment at the airport the same day. If your replacement flight leaves before the airline can pay you, it must pay within 24 hours.'],
    ['Do airlines have to compensate me if the flight is cancelled?', 'Not under the denied boarding rule: it does not apply to a cancelled flight. If the airline cancels and you decline the alternative, you are owed a refund; see our <a href="/blog/delayed-flight-compensation-us-airlines-2026/">delayed flight article</a> for the DOT refund rule.'],
    ['Does the EU pay for overbooked flights?', 'Yes. For a flight leaving the EU on any airline, or arriving in the EU on an EU airline, it pays 250, 400 or 600 euros by distance, half if you accept re-routing that gets you there not too late. The UK pays 220, 350 or 520 pounds, or half for a shorter delay.'],
    ['What if the airline just rebooks me and I arrive within an hour?', 'Then nothing is owed: DOT says compensation is not due if the substitute transportation gets you to your destination or first stopover within an hour of your original arrival time.']
  ]) +
  `<p><em>Airline contracts and government rules change; the airline&rsquo;s own contract and the government pages below on the day you travel are the ones that count.</em></p>` +
  '<p><em>Checked October 2026 on the airlines&rsquo; own websites and on the DOT, eCFR, European Union and UK Civil Aviation Authority pages. Alaska and Frontier were not checked.</em></p>' +
  SRC([
    ['https://www.transportation.gov/individuals/aviation-consumer-protection/bumping-oversales', 'DOT &mdash; Bumping &amp; Oversales'],
    ['https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-250/section-250.5', 'eCFR &mdash; 14 CFR 250.5, Amount of denied boarding compensation'],
    ['https://www.aa.com/web/i18n/customer-service/support/conditions-of-carriage.html', 'American Airlines &mdash; Conditions of carriage (oversold flights)'],
    ['https://www.aa.com/web/i18n/customer-service/support/customer-service-plan.html', 'American Airlines &mdash; Customer service plan'],
    ['https://www.delta.com/us/en/legal/contract-of-carriage-dgr', 'Delta &mdash; Contract of Carriage: U.S. (Rule 20)'],
    ['https://www.united.com/en/us/fly/contract-of-carriage.html', 'United &mdash; Contract of Carriage (Rule 25)'],
    ['https://www.southwest.com/swa-resources/pdfs/corporate-commitments/contract-of-carriage.pdf', 'Southwest &mdash; Contract of Carriage (section 9)'],
    ['https://www.southwest.com/swa-resources/pdfs/corporate-commitments/customer-service-plan.pdf', 'Southwest &mdash; Customer Service Plan (Rev #26-01)'],
    ['https://www.jetblue.com/customer-assurance/customer-service-plan', 'JetBlue &mdash; Customer Service Plan'],
    ['https://cms.jetblue.com/public/dam/ui-assets/p/legal/Contract-of-Carriage--2026.04.17-.pdf', 'JetBlue &mdash; Contract of Carriage (section 27)'],
    ['https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', 'Your Europe &mdash; Air passenger rights'],
    ['https://www.caa.co.uk/air-passengers/travel-problems-and-rights/flight-delays-and-cancellations/denied-boarding/', 'UK Civil Aviation Authority &mdash; Denied boarding']
  ]);

module.exports = {
  slug: SLUG,
  title: 'Overbooked Flight Compensation 2026: What US Airlines Owe You for Bumping and Denied Boarding | canitakethis.co',
  desc: 'Bumped from an overbooked flight? DOT pays 200% or 400% of your fare, up to $1,075 or $2,150. See American, Delta, United, Southwest and JetBlue rules, and EU and UK amounts.',
  h1: 'Overbooked Flight Compensation 2026: What US Airlines Owe You for Bumping and Denied Boarding',
  body
};
