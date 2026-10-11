// Pillar: /blog/cancelled-flight-compensation-refund-us-airlines-2026/ (session 23, 2026-10-11). Demand (Ahrefs US buckets, measured 2026-10-11): "cancelled flight compensation" >100 (236 ideas),
// "american airlines cancelled flight compensation" >100, "delta cancelled flight compensation" >100, "flight cancellation refund" >100 (378 ideas), "airline refund" family 726 ideas.
// Data (read 11 October 2026): transportation.gov Refunds page (updated 7 Nov 2025); American Conditions of Carriage (13 Aug 2026) "Delays, cancellations and diversions";
// Delta Contract of Carriage U.S. Rule 19; United Contract of Carriage Rule 24 + Rule 27 (re-read); Southwest Contract of Carriage 58th rev 24 Sep 2026 section 9.b;
// JetBlue Contract of Carriage rev 101 (17 Apr 2026) section 25. EU/UK amounts live in the EU261 article. Not read: Alaska (blocks Claude), Frontier, Allegiant, Sun Country; Spirit closed.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;
const { VCSS, flow } = require('./visual_helpers.js');

const SLUG = 'cancelled-flight-compensation-refund-us-airlines-2026';
const logo = (code, name) => `<img src="https://www.gstatic.com/flights/airline_logos/70px/${code}.png" alt="" width="22" height="22" style="vertical-align:middle;margin-right:8px;border-radius:4px" onerror="this.style.display='none'">${name}`;
const fl = (c, n) => `<img src="https://flagcdn.com/w40/${c}.png" alt="" width="22" height="16" style="vertical-align:middle;margin-right:8px;border-radius:2px">${n}`;
const meta = `<div class="art-meta"><span class="tag tag-neutral">Airline Fees</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>8 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="American Airlines agent at a Charlotte ticket counter with a Customer Service sign, while a passenger pushes back a printed Travel credit offer sheet that also says to request a refund to the original form of payment" width="800" height="400"><figcaption>When an airline offers a credit instead, it has to tell you that you can take a refund, and you can say no to the credit.</figcaption></figure>`;

const CHOICE = T(
  ['Your situation', 'What DOT says you can have', 'Cash back?'],
  [
    ['The airline cancels and you do not want the new flight', 'A refund of the ticket, whatever the reason for the cancellation', '<span class="pp-y">Yes, you choose</span>'],
    ['The airline cancels and you accept the rebooking', 'The new flight. Meals and a hotel come from the airline&rsquo;s own plan, not from a refund', '<span class="pp-n">No refund</span>'],
    ['The airline offers a credit or voucher', 'You can take it, but the airline has to tell you that you can have a refund instead', '<span class="pp-y">Yes, you may refuse the credit</span>'],
    ['You do not answer the airline&rsquo;s offer', 'DOT says the refund is automatic to your original payment', '<span class="pp-y">Yes, automatic</span>'],
    ['The flight leaves as scheduled and you simply do not fly it', 'Nothing on a non-refundable ticket', '<span class="pp-n">No refund</span>']
  ]
);

const SIGNIF = T(
  ['A change counts as &ldquo;significant&rdquo; when', 'Domestic', 'International'],
  [
    ['The flight leaves earlier or lands later than scheduled by', '3 hours or more', '6 hours or more'],
    ['The airline changes your origin or destination airport', '<span class="pp-y">Yes</span>', '<span class="pp-y">Yes</span>'],
    ['The airline adds a connection', '<span class="pp-y">Yes</span>', '<span class="pp-y">Yes</span>'],
    ['The airline moves you to a lower class (involuntary downgrade)', '<span class="pp-p">Refund of the fare difference if you keep flying</span>', '<span class="pp-p">Refund of the fare difference if you keep flying</span>']
  ]
);

const FEES = T(
  ['Fee you paid', 'Refundable when', 'Who pays you back'],
  [
    ['Seat selection, Wi-Fi, lounge or other add-ons', 'The service was not provided, for example the flight was cancelled', 'The airline'],
    ['Checked bag fee', 'Your bag is lost or significantly delayed (12 hours domestic; 15 hours on international flights of 12 hours or less, 30 hours if longer) and you filed a mishandled baggage report', 'The airline'],
    ['The ticket itself, bought through an online travel agent', 'The airline cancels and you decline the alternative', 'The agent, if it is the merchant of record'],
    ['Add-ons bought through that same agent', 'The service was not provided', 'The airline, not the agent']
  ]
);

const AIRLINES = T(
  ['Airline', 'What its own contract says when it cancels', 'What you should know'],
  [
    [logo('AA', 'American'), 'Rebooks you on the next American flight at no cost. If none leaves until the next day and the cancellation is American&rsquo;s fault, it may use a partner airline. If you decline or none is available: a refund of the remaining ticket value and optional fees, under its involuntary refunds policy.', 'The contract adds that beyond this American has &ldquo;no further contractual obligation&rdquo;. A hotel is arranged only if American is at fault, you are away from home and you did not board before 11:59 pm local time. Weather: you pay.'],
    [logo('DL', 'Delta'), 'Cancels and refunds the unused ticket <strong>and</strong> unused ancillary fees, including paid checked-bag fees, to the original form of payment when the flight is cancelled or changed by 180 minutes or more and you ask, when Delta offers no alternative or voucher, or when you do not respond before the original departure.', 'Otherwise it books you on the next flight in your class. No consequential damages.'],
    [logo('UA', 'United'), 'Flies you on its own flights in the same class at no extra cost, or at its discretion uses another carrier or ground transport. If it does not get you there and the disruption is a &ldquo;significant change as determined by UA&rdquo;, you are eligible for a refund; otherwise you must ask for it.', 'Involuntary refund (Rule 27): the fare and charges paid if nothing was used. No refund if you accept the alternate transportation United provides. Rule 24 puts the call on what counts as significant on United, which is why DOT&rsquo;s 3 and 6 hour lines matter.'],
    [logo('WN', 'Southwest'), 'May offer the next flight, or tell you the unused fare can be held as Flight Credit or Transferable Flight Credit. If you decline everything offered, it refunds to the original form of payment.', 'The contract calls the refund &ldquo;your exclusive remedy&rdquo; for a cancelled or significantly delayed or changed flight. You can still turn down the credit and take the money.'],
    [logo('B6', 'JetBlue'), 'When it cancels a flight it offers another flight in the same class at no charge, <strong>or</strong> a full refund.', 'Its plan also lists points or credits for some controllable cancellations; see our <a href="/blog/delayed-flight-compensation-us-airlines-2026/">delayed flight article</a> for the meal, hotel and points promises of each airline.']
  ]
);

const FLOW = flow([
  ['Did the airline tell you about the cancellation?', 'p', 'Check', 'Open the airline app or the email. Note the time of the notice and the new offer. The airline must tell you that you have the right to a refund.'],
  ['Do you want the new flight?', 'y', 'Your choice', 'If yes, accept it. You then have no refund. If no, say so in the app or on the phone, or simply do not answer: a declined or unanswered offer turns into a refund.'],
  ['Did the airline offer a voucher or credit instead?', 'n', 'Ask', 'You can take it, but it must be valid for at least 5 years and the airline has to tell you the restrictions and that you may take a refund instead. Say &ldquo;refund to my original payment&rdquo; if you want the money.'],
  ['When must the money arrive?', 'p', '7 or 20 days', 'DOT: within 7 business days if you paid by credit card, within 20 calendar days for other payments. (One paragraph of the DOT page says &ldquo;20 business days&rdquo;; we use the 20 calendar days it gives elsewhere.)'],
  ['What if it does not arrive?', 'n', 'Escalate', 'Ask the airline in writing, then dispute the charge with your card company, then file a complaint with DOT. Keep your confirmation, the cancellation notice and every receipt.']
]);

const body = CSS + VCSS + meta + hero +
  `<p><strong>If an airline cancels your flight, US law says you can have your money back, whatever the reason for the cancellation, if you do not want the new flight or the credit it offers.</strong> There is no cash &ldquo;extra&rdquo; on top of the refund in the US: the Department of Transportation requires the refund, not compensation. The rule is easy to lose in the airline&rsquo;s wording, which pushes vouchers and credits first.</p>` +
  stat([
    ['Any reason', 'the airline cancels = you can refuse the new flight and get a refund'],
    ['7 / 20', 'business days for a credit card refund / calendar days for other payments'],
    ['5 years', 'minimum validity of any credit or voucher you decide to accept'],
    ['Automatic', 'if you ignore the offer, the refund goes to your original payment']
  ]) +
  '<h2>💵 Cash or voucher: what you are allowed to ask for</h2>' +
  `<p>DOT&rsquo;s Refunds page says that if an airline cancels a flight, it owes you a refund if you choose not to travel or to accept credits or vouchers. That is true for a cancellation caused by weather as much as one caused by the airline. The airline decides the fault only for the extras, such as a hotel.</p>` +
  CHOICE +
  `<p>If you take a credit, the airline must tell you the restrictions, the credit must stay valid for at least 5 years, and you must be told you can ask for a refund instead. You can still say no after reading the offer.</p>` +
  '<h2>⏱️ The automatic refund and how fast it must come</h2>' +
  `<p>If the airline offers you a new flight and you reject it, or if you do not respond, DOT says the refund is automatic to the original form of payment. These are the deadlines and the steps, in the order they happen:</p>` +
  FLOW +
  '<h2>🔄 What counts as cancelled or significantly changed</h2>' +
  `<p>A cancellation is the easy case. A schedule change can also give you a refund right if it is big enough. DOT defines &ldquo;significant&rdquo; as follows:</p>` +
  SIGNIF +
  `<p>If you choose to fly on the changed flight anyway, there is no refund for the change (your airline&rsquo;s plan may still pay for a meal or a hotel). A non-refundable ticket on a flight that operates as scheduled is also not refundable.</p>` +
  '<h2>🧾 Fees you can get back too</h2>' +
  `<p>The ticket is not the only money. DOT lists the extras that come back when the service was not provided:</p>` +
  FEES +
  callout('📌', '<strong>Bought through a travel agent?</strong> If the agent is the merchant of record, it owes you the ticket refund, but the airline still owes the ancillary and bag refunds. Ask the agent first for the ticket and the airline for the add-ons.') +
  '<h2>🛫 What five US airlines say in their own contracts</h2>' +
  `<p>We read each airline&rsquo;s contract of carriage in October 2026. All five let you leave with a refund when they cancel; they differ in what they offer first and how they word it.</p>` +
  AIRLINES +
  `<p>We could not read Alaska&rsquo;s pages (they block automated reading) and did not check Frontier, Allegiant or Sun Country, so none of them is in the table. Spirit has closed.</p>` +
  '<h2>' + fl('eu', 'Flying from Europe or the UK? Cash on top of the refund') + '</h2>' +
  `<p>The EU and UK rules go further than the US: for a flight cancelled less than 14 days before departure you can be owed 250, 400 or 600 euros (UK: 220, 350 or 520 pounds) on top of the refund or re-routing, unless the airline proves extraordinary circumstances. They follow the flight, not the airline. All the details, and who is covered, are in our <a href="/blog/eu261-compensation-explained-us-travelers-2026/">EU261 article</a>.</p>` +
  '<h2>✅ Before you fly</h2>' +
  cl([
    ['1', 'Book by credit card when you can. A card refund must reach you in 7 business days and you have a chargeback if it does not.'],
    ['2', 'When the airline cancels, screenshot the notice and the offer before you tap anything.'],
    ['3', 'Decide before you accept a credit: is it cash you want? Say &ldquo;refund to original payment&rdquo; in writing.'],
    ['4', 'Claim the add-ons too: seats, Wi-Fi, bags. They are separate fees.'],
    ['5', 'Booked through an agent? Contact the agent for the ticket, the airline for the extras.']
  ]) +
  '<h2>🔎 More airline rules</h2>' +
  cl([
    ['⏱️', '<a href="/blog/delayed-flight-compensation-us-airlines-2026/">Delayed flight compensation: what US airlines owe you</a>'],
    ['🙋', '<a href="/blog/overbooked-flight-compensation-us-airlines-2026/">Overbooked flight compensation: bumping and denied boarding</a>'],
    ['🇪🇺', '<a href="/blog/eu261-compensation-explained-us-travelers-2026/">EU261 compensation explained for US travelers</a>']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Do I get compensation for a cancelled flight in the US?', 'US law requires a refund, not extra cash. If the airline cancels and you decline the new flight or credit, DOT says you are owed your money back. Any hotel or meal comes from the airline&rsquo;s own plan, not from a rule. Cash compensation on top of the refund exists in the EU and the UK.'],
    ['Can I get a refund if the airline cancels my flight because of weather?', 'Yes. DOT says the refund applies when the airline cancels a flight regardless of the reason. Weather only matters for extras such as a hotel, which airlines generally do not pay for.'],
    ['Can the airline give me a voucher instead of a refund?', 'It can offer one, but it has to tell you that you may take a refund instead, and the voucher must be valid for at least 5 years with its restrictions disclosed.'],
    ['How long does a cancelled flight refund take?', 'DOT says within 7 business days if you paid by credit card, and within 20 calendar days for other forms of payment.'],
    ['I already took the voucher. Can I still get a refund?', 'We did not find a DOT rule that lets you change your mind later, so ask the airline in writing and check the voucher&rsquo;s own terms. Better: decide before you accept it.'],
    ['Do I also get my bag fee and seat fee back?', 'Seat, Wi-Fi and similar fees come back if the service was not provided. A checked bag fee comes back when the bag is lost or significantly delayed and you filed a report. Delta&rsquo;s contract refunds unused ancillary fees, including checked-bag fees, with the ticket when it cancels.'],
    ['I booked through Expedia or another agent. Who refunds me?', 'DOT says an agent that is the merchant of record owes the ticket refund, while the airline owes the refunds of its ancillary and bag fees.'],
    ['Can I cancel for free within 24 hours instead?', 'Only for tickets bought at least 7 days before departure, and only from the airline. It is a separate rule from the cancellation refund.']
  ]) +
  `<p><em>Airline contracts and government rules change; the airline&rsquo;s own contract and the government pages below on the day you travel are the ones that count.</em></p>` +
  '<p><em>Checked October 2026 on the airlines&rsquo; own websites and on the DOT page. Alaska, Frontier, Allegiant and Sun Country were not checked.</em></p>' +
  SRC([
    ['https://www.transportation.gov/individuals/aviation-consumer-protection/refunds', 'DOT &mdash; Refunds'],
    ['https://www.aa.com/web/i18n/customer-service/support/conditions-of-carriage.html', 'American Airlines &mdash; Conditions of carriage (delays, cancellations and diversions)'],
    ['https://www.delta.com/us/en/legal/contract-of-carriage-dgr', 'Delta &mdash; Contract of Carriage: U.S. (Rule 19)'],
    ['https://www.united.com/en/us/fly/contract-of-carriage.html', 'United &mdash; Contract of Carriage (Rules 24 and 27)'],
    ['https://www.southwest.com/swa-resources/pdfs/corporate-commitments/contract-of-carriage.pdf', 'Southwest &mdash; Contract of Carriage (section 9)'],
    ['https://cms.jetblue.com/public/dam/ui-assets/p/legal/Contract-of-Carriage--2026.04.17-.pdf', 'JetBlue &mdash; Contract of Carriage (section 25)']
  ]);

module.exports = {
  slug: SLUG,
  title: 'Cancelled Flight Compensation 2026: Refund Rights and What US Airlines Owe You | canitakethis.co',
  desc: 'Airline cancelled your flight? DOT says you can have a refund, not just a voucher. Deadlines, fees you get back, and what American, Delta, United, Southwest and JetBlue say.',
  h1: 'Cancelled Flight Compensation 2026: Refund Rights and What US Airlines Owe You',
  body
};
