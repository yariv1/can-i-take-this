// Pillar: /blog/eu261-compensation-explained-us-travelers-2026/ (session 22, 2026-10-11). Demand (Ahrefs US buckets): "eu261" >1,000; "eu261 compensation",
// "eu261 compensation table", "eu261 claim", "what is eu261", "eu261 news today" >100; "delta eu261" <100. Title keeps the biggest phrase first.
// Data (read 11 October 2026): EUR-Lex Regulation (EC) No 261/2004 (Articles 3 and 14); Commission Notice C/2024/5687 (Interpretative Guidelines: time limits,
// technical defects); Your Europe air passenger rights page (coverage, amounts, extraordinary circumstances, claim route); Council press releases 15 June and
// 13 July 2026 (reform); UK CAA denied boarding page + the delays page read for the delayed-flight article; Delta "Exit EU Compensation" page; American Conditions
// of Carriage (EU oversold flights); JetBlue Customer Service Plan + Contract of Carriage s27 (EU/UK departures). Not found: any United EU261 page.
// Not verified: Official Journal publication of the 2026 reform; any national limitation period table (the Commission guidelines say it is national law).
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;
const { VCSS, flow } = require('./visual_helpers.js');

const SLUG = 'eu261-compensation-explained-us-travelers-2026';
const logo = (code, name) => `<img src="https://www.gstatic.com/flights/airline_logos/70px/${code}.png" alt="" width="22" height="22" style="vertical-align:middle;margin-right:8px;border-radius:4px" onerror="this.style.display='none'">${name}`;
const fl = (c, n) => `<img src="https://flagcdn.com/w40/${c}.png" alt="" width="22" height="16" style="vertical-align:middle;margin-right:8px;border-radius:2px">${n}`;
const meta = `<div class="art-meta"><span class="tag tag-neutral">Airline Fees</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>9 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Delta gate agent at gate K36 of Paris Charles de Gaulle Terminal 2E holding out a printed sheet titled Your Rights EU 261/2004 to a passenger, with the gate monitor showing New York JFK delayed from 11:20 to 14:45" width="800" height="400"><figcaption>A Delta flight leaving Paris is covered by EU261: after a delay of 2 hours or more the airline must hand you a written notice of your rights.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="450"><figcaption>${cap}</figcaption></figure>`;

const DIRECTION = `<figure class="cox-dia"><svg viewBox="0 0 360 360" width="360" role="img" aria-label="EU261 direction: a flight from Europe to the United States is covered on any airline; a flight from the United States to Europe is covered only when an EU airline flies it, not on Delta, American or United" xmlns="http://www.w3.org/2000/svg"><style>.db{fill:var(--surface-2)}.dg{fill:#2FCF9B}.dr{fill:#FF9B8F}.dh{font-family:Inter,sans-serif;font-size:18px;font-weight:700;fill:var(--text)}.dk{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#08111f}.dd{font-family:Inter,sans-serif;font-size:17px;fill:#08111f}</style><rect class="db" x="0" y="0" width="360" height="360" rx="14"/><text class="dh" x="16" y="30">Flying from Europe to the U.S.</text><rect class="dg" x="16" y="42" width="328" height="64" rx="10"/><text class="dk" x="30" y="68">Covered on ANY airline</text><text class="dd" x="30" y="92">Delta, American, United</text><text class="dh" x="16" y="144">Flying from the U.S. to Europe</text><rect class="dg" x="16" y="156" width="328" height="64" rx="10"/><text class="dk" x="30" y="182">Covered on an EU airline</text><text class="dd" x="30" y="206">Lufthansa, Air France, KLM</text><rect class="dr" x="16" y="232" width="328" height="64" rx="10"/><text class="dk" x="30" y="258">NOT covered on a U.S. airline</text><text class="dd" x="30" y="282">Delta, American, United, JetBlue</text><text class="dd" x="16" y="324" style="fill:var(--text)">Europe = the EU plus Iceland,</text><text class="dd" x="16" y="346" style="fill:var(--text)">Norway and Switzerland</text></svg><figcaption>EU261 follows the flight, not your passport: direction and the airline that flies it decide.</figcaption></figure>`;

const COVER = T(
  ['Your flight', 'EU261 covers it?', 'Why'],
  [
    [logo('DL', 'Delta') + ' Paris to New York', '<span class="pp-y">Yes</span>', 'It departs from an EU airport, so any airline is covered.'],
    [logo('AA', 'American') + ' Madrid to Miami', '<span class="pp-y">Yes</span>', 'Same rule: departing the EU.'],
    ['Air France New York to Paris', '<span class="pp-y">Yes</span>', 'Arriving in the EU on an EU airline.'],
    [logo('DL', 'Delta') + ' New York to Amsterdam', '<span class="pp-n">No</span>', 'Arriving in the EU on a non-EU airline is not covered.'],
    [logo('UA', 'United') + ' Newark to Rome', '<span class="pp-n">No</span>', 'Same: a US airline arriving in the EU.'],
    [logo('DL', 'Delta') + ' Atlanta to Chicago', '<span class="pp-n">No</span>', 'No EU airport on the route. US domestic rules apply.'],
    [fl('gb', 'Delta') + ' London to New York', '<span class="pp-p">UK261</span>', 'The UK left the EU. A separate UK law covers flights leaving a UK airport on any airline.'],
    ['One booking Paris to New York to Denver', '<span class="pp-y">Yes</span>', 'If it starts in the EU and you reach the final destination more than 3 hours late, it counts, whichever airline flies the connection.']
  ]
);

const AMOUNTS = T(
  ['Flight distance', 'Delay at arrival (delay claims)', 'EU compensation', 'UK compensation'],
  [
    ['1,500 km or less', '3 hours or more', '&euro;250', '&pound;220'],
    ['More than 1,500 km inside the EU, and all other flights of 1,500 to 3,500 km', '3 hours or more', '&euro;400', '&pound;350'],
    ['More than 3,500 km (for example Europe to the U.S.)', 'At least 3 but less than 4 hours', '&euro;300', '&pound;260'],
    ['More than 3,500 km (for example Europe to the U.S.)', '4 hours or more', '&euro;600', '&pound;520']
  ]
);

const EXCUSE = T(
  ['The airline can be excused when', 'The airline is NOT excused by'],
  [[
    '<ul><li>Air traffic management decisions.</li><li>Adverse weather.</li><li>Political instability.</li><li>Security risks.</li><li>A strike outside the airline, such as at an airport.</li></ul>',
    '<ul><li>Most technical problems found during maintenance, or caused by poor maintenance.</li><li>A collision of mobile boarding stairs with the aircraft.</li><li>A strike by the airline&rsquo;s own staff.</li><li>An unexpected breakdown that comes with the normal running of an aircraft.</li></ul>'
  ]]
);

const AIRLINES = T(
  ['Airline', 'What its own pages say about flights from Europe'],
  [
    [logo('DL', 'Delta'), 'The &ldquo;Exit European Union (EU)&rdquo; page says you may be entitled to compensation if the flight was canceled, delayed more than 3 hours or overbooked, and to a refund of the unused ticket if it was overbooked, canceled or delayed more than 5 hours. You submit the request through the page&rsquo;s feedback button, and Delta publishes a separate assistance and compensation notice for each country.'],
    [logo('AA', 'American'), 'The Conditions of Carriage say that if you are not allowed to board an oversold nonstop flight from the EU to the U.S., you may get a travel voucher for one ticket anywhere American flies, or a check for 300 euros (arrival delay under 4 hours) or 600 euros (4 hours or more). We did not find a separate claim page for delays.'],
    [logo('B6', 'JetBlue'), 'The Customer Service Plan says that if you were traveling from the EU or the UK and the flight was delayed or canceled, or you were denied boarding, you may be entitled to benefits under EC 261 or UK 261 instead of the plan&rsquo;s own compensation. The Contract of Carriage excludes its own denied boarding payment for flights that start in the UK or an EU state.'],
    [logo('UA', 'United'), 'We did not find an EU261 page on united.com, so we cannot say how United handles claims. The law applies to a United flight from Europe all the same.']
  ]
);

const FLOW = flow([
  ['Did the flight leave an EU airport, or arrive in the EU on an EU airline?', 'p', 'Check', 'If not, EU261 does not apply. Flights leaving the UK fall under the separate UK rules.'],
  ['Did you check in on time?', 'p', 'Check', 'You need a confirmed booking and to be at check-in at the time the airline told you in writing, or at least 45 minutes before departure if no time was given.'],
  ['What went wrong?', 'y', 'Match', 'Arrival 3 hours or more late, a cancellation you were told about less than 14 days before, or being denied boarding without a safety, security, health or document reason.'],
  ['Was it an extraordinary circumstance?', 'n', 'Ask', 'Weather and air traffic control can excuse the airline, but it has to prove the link and that it could not have been avoided. A technical fault usually does not excuse it.'],
  ['Complain to the airline that flew you.', 'y', 'Claim', 'Use its complaint form. If it does not reply within 2 months, or you are not satisfied, go to the national authority of the country where it happened.']
]);

const TIMELINE = flow([
  ['2013', 'p', 'Proposal', 'The Commission proposed a revision of the 2004 rules, after years of court rulings that left airlines and passengers unsure how to apply them.'],
  ['15 June 2026', 'y', 'Deal', 'Council and Parliament agreed a new framework. The 3-hour delay line and the amounts of 250, 400 and 600 euros stay largely the same.'],
  ['13 July 2026', 'y', 'Council vote', 'The Council gave its final green light. The new law amends Regulation 261/2004.'],
  ['Later', 'p', 'In force', 'The rules enter into force 12 months and 20 days after publication in the Official Journal. We could not confirm that publication yet, so claims today run under the 2004 rules.']
]);

const body = CSS + VCSS + meta + hero +
  `<p><strong>EU261 pays cash when a flight leaves Europe late, is cancelled or you are bumped, and it covers American travelers on US airlines flying from Europe to the U.S.</strong> It does not cover the flight over on those airlines. The law is Regulation (EC) No 261/2004 of the European Union. It pays <strong>&euro;250, &euro;400 or &euro;600</strong> by distance for a delay of 3 hours or more at arrival, for a cancellation you were told about less than 14 days before, and for denied boarding. It covers any flight that leaves an EU airport, plus flights that arrive in the EU on an EU airline. A Delta flight from New York to Paris is not covered. The same Delta flight from Paris to New York is.</p>` +
  stat([
    ['&euro;250 to &euro;600', 'in cash, set by distance'],
    ['3 hours', 'late at arrival is the line for a delay claim'],
    ['14 days', 'notice or less for a cancellation to count'],
    ['2026', 'reform voted; the 2004 rules still apply today']
  ]) +
  '<h2>🧭 Does EU261 cover your flight?</h2>' +
  `<p>It follows the <strong>flight</strong>, not your passport and not where you bought the ticket. &ldquo;EU&rdquo; means the European Union&rsquo;s member countries, not all of Europe. The rules also apply to flights to and from Iceland, Norway and Switzerland. The UK has its own copy of the rules after Brexit.</p>` +
  DIRECTION +
  COVER +
  `<p>The airline that operates the flight is the one responsible, which can differ from the airline on your ticket. If a flight is sold by one airline and flown by another, you claim against the one that flew you. You must also have a confirmed booking and check in at the time the airline told you in writing, or at least 45 minutes before departure if it gave no time. And if you already received compensation or assistance under the law of a country outside the EU for the same trip, EU261 does not add a second payment.</p>` +
  '<h2>💶 How much EU261 pays</h2>' +
  `<p>The amount depends on distance, not on your ticket price. For delays, Your Europe lists a 3-hour line at arrival, and for the longest flights a split at 4 hours. For cancellations and denied boarding the amounts are &euro;250, &euro;400 and &euro;600 by distance.</p>` +
  AMOUNTS +
  `<p>Delay money is paid on how late you reach your <strong>final destination</strong>. A cancellation counts when you were told less than 14 days before departure; the airline must also offer a refund or a new flight. Denied boarding for overbooking pays the same amounts. UK law sets &pound;220, &pound;350 or &pound;520 for the same distances. The airline also owes meals and, if you wait overnight, a hotel. For a delay at departure the meal and phone-call right starts after 2, 3 or 4 hours depending on distance, and a delay of 5 hours or more also gives you the right to a refund and a return flight. We cover the US side of bumping in <a href="/blog/overbooked-flight-compensation-us-airlines-2026/">our overbooked flight article</a>.</p>` +
  '<h2>🌦️ When the airline owes you nothing</h2>' +
  `<p>The airline can refuse when the delay or cancellation was caused by extraordinary circumstances. It has to <strong>prove</strong> two things: that the event caused the problem, and that it could not have been avoided even if it had taken every reasonable measure. A weather excuse is not enough on its own.</p>` +
  EXCUSE +
  `<p>The European Commission&rsquo;s guidelines say a technical problem is not an extraordinary circumstance even if it was unexpected and not caused by poor maintenance, when it comes with the normal running of the aircraft. Denied boarding for safety, security or health reasons, or for missing travel documents, also does not pay.</p>` +
  '<h2>🧭 Do you qualify? Step by step</h2>' +
  FLOW +
  '<h2>✈️ What Delta, American, JetBlue and United say</h2>' +
  `<p>These are the airlines&rsquo; own words, read in October 2026. The law applies the same way to every airline on a covered flight.</p>` +
  AIRLINES +
  '<h2>📨 How to claim</h2>' +
  fig(1, 'American Airlines check-in desk at Madrid Barajas Terminal 4 with a sign reading Your rights as a passenger, denied boarding, cancelled or delayed 2 hours or more, ask here for the text of your rights, while a passenger hands over his passport', 'The law makes the airline display this notice at check-in; ask for the text of your rights there or at the gate.') +
  cl([
    ['1', 'Ask for the written notice at the airport. The law says an airline must display a notice at check-in, and must give every passenger who was denied boarding, had a cancellation, or had a delay of 2 hours or more a written notice of the rules and the contact details of the national authority.'],
    ['2', 'Complain first to the airline that operated the flight, using its complaint form. If you bought through a travel agent, the airline that flew you is still the one responsible.'],
    ['3', 'No reply in 2 months, or not satisfied? Complain to the national authority of the country where the incident happened. It gives a non-binding legal opinion.'],
    ['4', 'Alternative dispute resolution is open only to EU residents. Otherwise you can use the European Small Claims procedure in court; for an EU airline you can file where the flight arrived or departed.']
  ]) +
  `<p><strong>Is there a deadline?</strong> The regulation sets no time limit. The Commission&rsquo;s guidelines say it is national law in each EU country, and the 2-year limit of the Montreal Convention does not apply to these claims. That means the limit depends on the country, and no official table lists them, so claim early and check the country&rsquo;s rule.</p>` +
  '<h2>🗳️ The 2026 reform: what changes and when</h2>' +
  `<p>Parliament and Council agreed a new law in June 2026 and the Council gave final clearance on 13 July. For travelers it keeps the 3-hour delay line and the 250, 400 and 600 euro amounts, and adds clearer rights to assistance: refreshments every 2 hours, a meal after 3 hours and every 5 hours after that (up to three a day), internet access, two phone calls and a hotel if you must stay overnight. Airlines must tell you the cause of the disruption, and offer a new route within 3 hours when you choose to be re-routed after a cancellation or denied boarding. The law also clarifies what counts as an extraordinary circumstance, bans refusing the return flight because you skipped the outbound one, and makes airlines show fares with an allowance for a piece of hand baggage.</p>` +
  TIMELINE +
  '<h2>✅ Before you fly home from Europe</h2>' +
  cl([
    ['1', 'Keep the booking confirmation and boarding pass: they show the airline, flight and times.'],
    ['2', 'Write down the real arrival time at your final destination. A delay claim is based on it.'],
    ['3', 'Arrive at check-in at the time your airline gave you; the 45-minute rule only applies if it gave none.'],
    ['4', 'Keep receipts for meals, hotel and rides if the airline did not provide them.'],
    ['5', 'Ask the airline for the cause of the delay in writing: weather and a technical fault lead to different answers.']
  ]) +
  '<h2>🔎 More airline rules</h2>' +
  cl([
    ['🛫', '<a href="/blog/overbooked-flight-compensation-us-airlines-2026/">Overbooked flight compensation: what US airlines owe you</a>'],
    ['⏱️', '<a href="/blog/delayed-flight-compensation-us-airlines-2026/">Delayed flight compensation: what US airlines owe you</a>'],
    ['🧳', '<a href="/blog/basic-economy-carry-on-rules-2026/">Basic Economy carry-on rules</a>']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['What is EU261?', 'EU261 is the common name for Regulation (EC) No 261/2004, the European Union law that gives passengers fixed cash compensation and care when a flight is delayed at arrival, cancelled or overbooked. It covers flights leaving an EU airport on any airline and flights arriving in the EU on an EU airline.'],
    ['Does EU261 apply to US airlines?', 'Yes, on flights that leave an EU airport: a Delta, American or United flight from Paris, Madrid or Rome to the U.S. is covered. No, on flights from the U.S. to the EU on a US airline, which are not covered.'],
    ['Does EU261 apply to flights from the US to Europe?', 'Only when an EU airline operates the flight, such as Lufthansa or Air France. A US airline flight from the U.S. into the EU is not covered.'],
    ['How much is EU261 compensation?', 'It is 250 euros for flights of 1,500 km or less, 400 euros for flights of 1,500 to 3,500 km and longer flights inside the EU, and 600 euros for longer flights. For a delay on a flight over 3,500 km the amount is 300 euros if you arrive 3 to 4 hours late and 600 euros from 4 hours.'],
    ['How long does a delay have to be for EU261?', 'You reach your final destination 3 hours or more late. Meals and phone calls start earlier, after 2, 3 or 4 hours at departure depending on distance.'],
    ['Is bad weather an extraordinary circumstance?', 'Adverse weather is one of the events the EU lists as extraordinary circumstances, but the airline must prove that the weather caused the delay or cancellation and that it could not have been avoided with every reasonable measure. Most technical faults and the airline&rsquo;s own staff strikes do not count.'],
    ['How do I claim EU261?', 'Send your complaint to the airline that operated the flight with its form. If there is no reply within 2 months, or you are not satisfied, complain to the national authority of the country where it happened.'],
    ['Is there a deadline to claim EU261?', 'The regulation sets none. The time limit comes from the national law of the EU country, so it varies, and no single official table exists.'],
    ['Does EU261 apply to the UK?', 'No. The UK has its own version, UK261, for flights leaving a UK airport on any airline and for flights arriving in the UK on an EU or UK airline. It pays 220, 350 or 520 pounds.'],
    ['Is EU261 changing in 2026?', 'Parliament and Council agreed a new law and the Council gave final clearance on 13 July 2026. It keeps the 3-hour line and the amounts and adds clearer rights. It takes effect 12 months and 20 days after publication in the Official Journal, so claims today run under the current rules.']
  ]) +
  `<p><em>EU and UK rules change; the airline&rsquo;s own pages and the official pages below on the day you travel are the ones that count.</em></p>` +
  '<p><em>Checked October 2026 on the EU, UK Civil Aviation Authority and airline websites. We did not find a United EU261 page.</em></p>' +
  SRC([
    ['https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A32004R0261', 'EUR-Lex &mdash; Regulation (EC) No 261/2004'],
    ['https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ%3AC_202405687', 'EUR-Lex &mdash; Commission Notice C/2024/5687, Interpretative Guidelines on Regulation 261/2004'],
    ['https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', 'Your Europe &mdash; Air passenger rights'],
    ['https://www.consilium.europa.eu/en/press/press-releases/2026/06/15/council-and-parliament-reach-landmark-agreement-on-stronger-eu-air-passenger-rights/', 'Council of the EU &mdash; Landmark agreement on air passenger rights (15 June 2026)'],
    ['https://www.consilium.europa.eu/en/press/press-releases/2026/07/13/council-gives-final-clearance-for-stronger-air-passenger-rights/', 'Council of the EU &mdash; Final clearance (13 July 2026)'],
    ['https://www.caa.co.uk/air-passengers/travel-problems-and-rights/flight-delays-and-cancellations/denied-boarding/', 'UK Civil Aviation Authority &mdash; Denied boarding'],
    ['https://www.caa.co.uk/air-passengers/travel-problems-and-rights/flight-delays-and-cancellations/delays/', 'UK Civil Aviation Authority &mdash; Delays'],
    ['https://www.delta.com/us/en/change-cancel/exit-eu-compensation', 'Delta &mdash; Exit European Union (EU) Compensation Request'],
    ['https://www.aa.com/web/i18n/customer-service/support/conditions-of-carriage.html', 'American Airlines &mdash; Conditions of carriage'],
    ['https://www.jetblue.com/customer-assurance/customer-service-plan', 'JetBlue &mdash; Customer Service Plan']
  ]);

module.exports = {
  slug: SLUG,
  title: 'EU261 Compensation 2026: Does It Apply to Your Flight, How Much, and How to Claim | canitakethis.co',
  desc: 'EU261 pays 250 to 600 euros for delays, cancellations and bumping. See which flights it covers, why US airlines count only from Europe, and how to claim.',
  h1: 'EU261 Compensation 2026: Does It Apply to Your Flight, How Much, and How to Claim',
  body
};
