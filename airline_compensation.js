// Airline Compensation pages (session 23, 2026-10-11): /airline/<slug>/compensation/ + a "Compensation" tab, shown ONLY for airlines listed here (official own-page data read).
// Format (user order 2026-10-11): NOT an article. A row of scenario chips (like the liquids pages) and one verdict card per scenario:
//   green header = the passenger is owed compensation/help (amounts and details on the card), yellow = unclear or depends, check with the airline, red = nothing owed (and the card says what still applies).
// All cards are in the HTML (hidden except the active one) so crawlers read every scenario. Articles are linked only in the "Read the full guide" block (BLOG_LINKS.compensation).
// Each airline has its OWN scenario list and wording from its own contract; no name-swap clones (CONTENT_UNIQUENESS_RULES.md).
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ICON = { go: '<path d="M20 6 9 17l-5-5"/>', warn: '<path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>', stop: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>' };

function render(a, SCEN, SRC_NOTE, O) {
  O = O || {};
  const MED_ORIG = 'Medication rules vary by country and can change. This is guidance, not legal advice - in case of a prescribed medicine, carry your prescription and confirm with the official authority before you fly.';
  const medCard = s => {
    const lines = s.lines.map(l => '<li>' + l + '</li>').join('');
    const src = s.sources.map(x => '<a class="hitem" href="' + esc(x[0]) + '" target="_blank" rel="noopener"><span class="hi-ic">🌐</span><span class="hi-l">' + esc(x[1]) + '<small>Official guidance</small></span><span class="hi-go">↗</span></a>').join('');
    const orig = O.medStyle ? MED_ORIG : SRC_NOTE;
    const sent = 'The rule above is from the official airline rules. To be more sure and learn further, please check the links placed here above.';
    return '<div class="cc" id="cc-' + s.id + '"' + (s.first ? '' : ' hidden') + '><div class="pass ' + s.status + ' print"><div class="strip"><div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' + ICON[s.status] + '</svg></div><div><div class="verdict">' + esc(s.verdict) + '</div><div class="vsub">' + esc(s.sub) + '</div></div></div><div class="perf"></div><div class="body"><div class="route"><span>✈ <b>' + esc(a.name) + '</b></span><span>' + esc(O.tag || 'MEDICATION') + '</span></div><p class="headline">' + esc(s.head) + '</p><ul class="detail">' + lines + '</ul><div class="help"><div class="help-h">Helpful sources</div>' + src + '<div class="hnote">To be 100% sure, we always recommend confirming with the official channels.</div></div><div class="src">' + (O.unofficial ? '<b class="src-un">⚠ UNOFFICIAL SOURCE</b> ' + esc(O.unofficial) + ' ' : '<b class="src-ok">✓ OFFICIAL SOURCE</b> ' + sent + ' ') + (O.medStyle ? orig : esc(orig)) + '</div></div></div></div>';
  };
  const card = medCard;
  const chips = SCEN.map((s, i) => '<button class="chip' + (i === 0 ? ' on' : '') + '" data-c="' + s.id + '">' + esc(s.label) + '</button>').join('');
  const legend = O.legend || '<p class="cc-legend"><span class="cc-dot cc-g"></span> Green: you are owed something. <span class="cc-dot cc-y"></span> Yellow: it depends, check with the airline. <span class="cc-dot cc-r"></span> Red: nothing owed for this case.</p>';
  const css = '<style>.cc[hidden]{display:none}.cc-legend{font-size:.9rem;color:var(--muted);margin:14px 4px 0;line-height:1.7}.cc-dot{display:inline-block;width:11px;height:11px;border-radius:50%;margin:0 4px 0 8px;vertical-align:middle}.cc-dot:first-child{margin-left:0}.cc-g{background:#2FCF9B}.cc-y{background:#F5B841}.cc-r{background:#FF6B6B}.cc-picker .chip{font-size:14px}</style>';
  const script = '<script>(function(){var cs=document.querySelectorAll(".cc-picker .chip"),cc=document.querySelectorAll(".cc");function go(id){[].forEach.call(cc,function(x){x.hidden=x.id!=="cc-"+id;});[].forEach.call(cs,function(x){x.classList.toggle("on",x.dataset.c===id);});}[].forEach.call(cs,function(b){b.onclick=function(){go(b.dataset.c);};});var h=location.hash.slice(1);if(h&&document.getElementById("cc-"+h))go(h);})();</scr' + 'ipt>';
  const orig = css + '<div class="slab">' + esc(O.slab || 'What happened?') + '</div><div class="chips cc-picker">' + chips + '</div>' + SCEN.map(card).join('') + legend + script;
  return O.medStyle ? require('./airline_med_typeahead.js')(a, SCEN, medCard, esc, orig) : orig;
}

const out = {};

// ---------------- AMERICAN AIRLINES ----------------
// Data read 11 October 2026: American Customer service plan (updated 26 Aug 2026), Conditions of carriage (13 Aug 2026), customer service FAQs, DOT Refunds and Bumping & Oversales pages.
{
  const CSP = ['https://www.aa.com/web/i18n/customer-service/support/customer-service-plan.html', 'American Airlines customer service plan', 'Delays, cancellations, baggage'];
  const COC = ['https://www.aa.com/web/i18n/customer-service/support/conditions-of-carriage.html', 'American Airlines conditions of carriage', 'Delays, cancellations and oversold flights'];
  const DOTR = ['https://www.transportation.gov/individuals/aviation-consumer-protection/refunds', 'US Department of Transportation: Refunds', 'Refund rules and deadlines'];
  const DOTB = ['https://www.transportation.gov/individuals/aviation-consumer-protection/bumping-oversales', 'US Department of Transportation: Bumping & Oversales', 'Denied boarding compensation'];
  const REFUNDS = ['https://www.aa.com/refunds/', 'American Airlines refund request', 'aa.com/refunds'];
  const REBOOK = 'Rebooked on American\'s next flight with seats at no extra cost, or on a partner airline if no American flight leaves before the next day.';

  const SCEN = [
    {
      id: 'delay-american', label: 'Flight delayed by American', status: 'go', verdict: 'Help owed', sub: 'Flight delayed by American', first: true,
      head: 'American rebooks you free and pays for the basics when it causes the delay.',
      lines: [
        REBOOK,
        '<b>Food and drink credit</b> if you are delayed 3 hours or more after your scheduled departure.',
        '<b>Hotel voucher</b> plus transport to the hotel and back, on request, if you are delayed overnight and away from your home city. If American cannot give a voucher, it reimburses reasonable hotel and transport costs.',
        'No cash compensation for a delay on US flights.',
        'Do not want to fly? You can request a refund if the delay is significant: 3 hours or more (domestic) or 6 hours or more (international).'
      ],
      sources: [CSP, DOTR]
    },
    {
      id: 'delay-weather', label: 'Flight delayed by weather', status: 'stop', verdict: 'No hotel or meals', sub: 'Flight delayed by weather or another event beyond American\'s control',
      head: 'American still rebooks you free, but hotel and meals are on you.',
      lines: [
        'Rebooked on American\'s next flight with seats at no extra cost.',
        'You pay for your own overnight accommodation, meals and incidental expenses. American\'s agents may be able to help you find a hotel.',
        'No cash compensation.',
        'Still allowed: a refund if the delay is significant (3 hours or more domestic, 6 hours or more international) and you decide not to fly.'
      ],
      sources: [CSP, DOTR]
    },
    {
      id: 'cancel-american', label: 'Flight cancelled by American', status: 'go', verdict: 'Refund or new flight', sub: 'Flight cancelled by American',
      head: 'You choose: the new flight, or your money back.',
      lines: [
        REBOOK,
        '<b>Refund</b> of the remaining ticket value and related optional fees if you decide not to fly, even on a non-refundable ticket. Request it at aa.com/refunds. It goes to the original form of payment.',
        '<b>Hotel voucher</b> and transport on request if you are delayed overnight and away from your home city; <b>food and drink credit</b> if the delay is 3 hours or more after your scheduled departure.',
        'DOT deadline for the refund: 7 business days to a credit card, 20 calendar days for other payments.',
        'No cash compensation on top of the refund on US flights. American\'s contract says it has no further contractual obligation beyond rebooking and the refund.'
      ],
      sources: [CSP, COC, REFUNDS]
    },
    {
      id: 'cancel-weather', label: 'Flight cancelled by weather', status: 'stop', verdict: 'No hotel or meals', sub: 'Flight cancelled by weather or another event beyond American\'s control',
      head: 'Rebooked free and refund if you do not fly, but no hotel or meals.',
      lines: [
        'Rebooked on American\'s next flight with seats at no extra cost.',
        'You pay for your own overnight accommodation, meals and incidental expenses.',
        '<b>Refund still applies:</b> if you decide not to fly because of the cancellation, you can request the remaining ticket value and related optional fees at aa.com/refunds.',
        'No cash compensation.'
      ],
      sources: [CSP, REFUNDS]
    },
    {
      id: 'misconnect', label: 'Delay makes me miss my connection', status: 'warn', verdict: 'Depends on the cause', sub: 'A delay causes a missed connection',
      head: 'Free rebooking for sure. Hotel and meals depend on who caused the delay.',
      lines: [
        'American rebooks you on its next flight with available seats at no additional cost when a delay could make you miss your connection.',
        'If American caused it: hotel voucher and transport if you are delayed overnight and away from home, and a food and drink credit at 3 hours or more.',
        'If weather or another event beyond its control caused it: you pay for your own accommodation and meals.',
        'Ask the agent which cause is on your record before you book anything yourself.'
      ],
      sources: [CSP]
    },
    {
      id: 'diverted', label: 'Flight diverted', status: 'warn', verdict: 'Check with American', sub: 'Flight diverted to another city',
      head: 'A hotel is promised if you are not boarded to your destination before 11:59 pm.',
      lines: [
        'If American does not board you to your final destination before 11:59 pm: <b>hotel voucher</b>, transport to the hotel and back, and a <b>food and drink credit</b> if you are delayed in the diversion city more than 3 hours.',
        'If American cannot give you the voucher, it reimburses reasonable hotel and transport costs.',
        'The plan lists this rule without separating weather from other causes. Confirm with the agent before you pay for anything.'
      ],
      sources: [CSP]
    },
    {
      id: 'volunteer', label: 'Overbooked: I volunteer', status: 'warn', verdict: 'Whatever you agree', sub: 'Overbooked flight: you give up your seat',
      head: 'There is no fixed amount. It is a deal between you and the gate agent.',
      lines: [
        'American asks for volunteers first, offering compensation and a confirmed seat on a later flight.',
        'The amount and form (check, travel credit) are American\'s decision, and DOT says there is no limit on what it may offer. You can negotiate.',
        'Before you say yes, ask: the next confirmed flight, a meal, a hotel, how long a voucher is valid and whether it works for international flights.'
      ],
      sources: [DOTB, CSP]
    },
    {
      id: 'bumped', label: 'Overbooked: I was bumped', status: 'go', verdict: 'Cash owed', sub: 'Overbooked flight: denied boarding against your will',
      head: '200% or 400% of your one-way fare, up to $1,075 or $2,150.',
      lines: [
        'Arrive up to 1 hour late: nothing owed.',
        'Arrive 1 to 2 hours late (domestic) or 1 to 4 hours late (international): <b>200% of your one-way fare, up to $1,075</b>.',
        'Arrive over 2 hours late (domestic) or over 4 hours late (international): <b>400% of your one-way fare, up to $2,150</b>.',
        'Paid at the airport the same day, or within 24 hours if your replacement flight leaves first. A check or travel credit; the credit only if worth at least the cash and you are told you may refuse it.',
        'American usually picks who is bumped by check-in time, and may also consider hardship, fare paid and AAdvantage status.',
        'Flight from the EU to the US: American\'s contract offers a travel voucher or a check for 300 EUR (under 4 hours) or 600 EUR (4 hours or more).'
      ],
      sources: [DOTB, COC]
    },
    {
      id: 'bag', label: 'Checked bag delayed or lost', status: 'go', verdict: 'Expenses reimbursed', sub: 'Checked bag did not arrive',
      head: 'Reasonable expenses are reimbursed, and the bag fee is refunded if it is lost.',
      lines: [
        'Report it to a baggage service agent before you leave the airport and keep the delayed baggage receipt.',
        'American compensates reasonable interim expenses for items you need immediately.',
        'A bag found later is delivered to your address at American\'s expense.',
        'If American decides the bag is lost, it reimburses the checked bag charges. DOT also refunds the bag fee when a bag is lost or significantly delayed and you filed a report.'
      ],
      sources: [CSP, DOTR]
    },
    {
      id: 'refund', label: 'I do not want to travel any more', status: 'go', verdict: 'Refund owed', sub: 'You decline the new flight',
      head: 'You get the unused ticket back when American cancels or significantly changes the flight.',
      lines: [
        'Applies to a cancellation or a significant change: 3 hours or more (domestic) or 6 hours or more (international), a different airport, or more connections. A downgrade refunds the fare difference if you keep flying.',
        'Request it at aa.com/refunds. The refund goes to the original form of payment, supporting documents may be required, and tickets bought through a travel agency are refunded by the agency.',
        'Deadlines (DOT): 7 business days to a credit card, 20 calendar days for other payments.',
        'If you fly the changed flight anyway, there is no refund for the change.'
      ],
      sources: [REFUNDS, DOTR, CSP]
    },
    {
      id: 'tarmac', label: 'Stuck on the plane', status: 'go', verdict: 'Basics provided', sub: 'More than 2 hours on the ground with no gate access',
      head: 'American promises snacks, water, restrooms and basic medical help.',
      lines: [
        'For an extraordinary delay of more than 2 hours on the ground, other than on an active runway or taxiway, with no access to a terminal gate, American says it makes every reasonable effort to provide snacks, water, restroom access and basic medical assistance.',
        'No cash compensation.'
      ],
      sources: [CSP]
    }
  ];

  out['american-airlines'] = {
    ttl: 'American Airlines Compensation 2026: Delay, Cancelled, Bumped',
    desc: 'What American Airlines owes you for a delayed, cancelled or overbooked flight, bag or diversion: hotel, food credit, refund and DOT amounts, case by case.',
    h1: 'American Airlines compensation: pick what happened',
    answer: 'American rebooks you free, pays for a hotel and a food credit only when it caused the problem, and refunds you if it cancels and you decide not to fly. If you are bumped, DOT sets 200% or 400% of your one-way fare, up to $1,075 or $2,150.',
    faq: [
      ['Does American Airlines pay cash compensation for a delayed or cancelled flight?', 'Not in the US. Its plan promises rebooking, a hotel voucher and a food credit when American causes the problem, and a refund if you decline the new flight. Cash amounts exist only for involuntary denied boarding (200% or 400% of your one-way fare) and under EU and UK rules.'],
      ['Does American pay for a hotel in bad weather?', 'No. For events beyond its control it rebooks you at no cost, but you are responsible for your own overnight accommodation, meals and incidental expenses.'],
      ['Can I get a refund if American cancels my flight?', 'Yes. If you decide not to fly because of a cancellation or significant delay you can request a refund of the remaining ticket value and optional fees at aa.com/refunds, even on a non-refundable ticket.']
    ],
    render: a => render(a, SCEN, 'From American Airlines\' own published rules and DOT, checked October 2026. Rules change, so confirm with the airline before you fly.')
  };
}

// ---------------- DELTA AIR LINES ----------------
// Data read 11 October 2026: Delta Customer Service Plan (delta.com/us/en/legal/customer-commitment, section 12 effective 24 Oct 2024), delta.com Delayed or Canceled Flight page,
// Delta Contract of Carriage: U.S. Rules 19 and 20 (20 D-G read in full), Delta Exit European Union (EU) Compensation page (as read for the EU261 article), DOT Refunds / Bumping pages.
{
  const CSP = ['https://www.delta.com/us/en/legal/customer-commitment', 'Delta customer service plan', 'Delays, cancellations, bumping, baggage'];
  const DPAGE = ['https://www.delta.com/us/en/change-cancel/delayed-or-canceled-flight', 'Delta: Delayed or canceled flight', 'Rebooking, refunds and reimbursement'];
  const COC = ['https://www.delta.com/us/en/legal/contract-of-carriage-dgr', 'Delta contract of carriage: U.S.', 'Rule 20 denied boarding'];
  const DOTR = ['https://www.transportation.gov/individuals/aviation-consumer-protection/refunds', 'US Department of Transportation: Refunds', 'Refund rules and deadlines'];
  const EUPG = ['https://www.delta.com/us/en/change-cancel/exit-eu-compensation', 'Delta: Exit European Union (EU) compensation request', 'Request through Delta'];
  const YEU = ['https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', 'Your Europe: air passenger rights', 'EU compensation amounts'];
  const DOTB = ['https://www.transportation.gov/individuals/aviation-consumer-protection/bumping-oversales', 'US Department of Transportation: Bumping & Oversales', 'Denied boarding compensation'];
  const REBOOK = 'Rebooked at no additional cost on the next available Delta flight, or on another airline Delta has a ticketing agreement with if no Delta flight is available.';
  const REIMB = 'Reimbursement is requested afterwards with Delta\'s Reimbursement Request form (US and Canada residents).';

  const SCEN = [
    {
      id: 'delay-delta', label: 'Flight delayed by Delta', status: 'go', verdict: 'Meal and hotel owed', sub: 'Delay of 3 hours or more within Delta\'s control', first: true,
      head: 'Delta covers a meal, and a hotel if you are stuck overnight, when the delay is its doing.',
      lines: [
        REBOOK,
        '<b>Meal or meal voucher</b> if the delay (or a cancellation) means waiting 3 hours or more beyond your scheduled departure.',
        '<b>Hotel and ground transport</b> if you are inconvenienced overnight away from your home or destination, at a Delta-contracted hotel based on availability. If you book your own because none was available, Delta reimburses reasonable hotel and transport costs; if no accommodation exists, a credit worth about the contracted hotel rate on request.',
        REIMB,
        'Delta does not reimburse prepaid expenses at your destination, alternative transport to your destination or lost wages. No cash compensation for a delay in the US.'
      ],
      sources: [CSP, DPAGE]
    },
    {
      id: 'delay-weather', label: 'Flight delayed by weather or air traffic control', status: 'stop', verdict: 'Not reimbursed', sub: 'Delay outside Delta\'s control',
      head: 'Delta rebooks you, but it does not reimburse meals or hotel for weather or air traffic control delays.',
      lines: [
        'Delta says it does not provide reimbursement for delays or cancellations arising from factors outside its control, such as air traffic control delays and weather delays.',
        'Rebooking at no additional cost still applies when the flight is significantly delayed.',
        'A <b>significant delay</b> (3 hours or more domestic, 6 hours or more international) still lets you cancel and get a refund of the unflown ticket.',
        'No cash compensation.'
      ],
      sources: [DPAGE, CSP]
    },
    {
      id: 'cancel-delta', label: 'Flight cancelled by Delta', status: 'go', verdict: 'Rebooked or refunded', sub: 'Flight cancelled by Delta',
      head: 'Delta rebooks you automatically. If you do not like it, you can have a refund.',
      lines: [
        'Delta tries to rebook you automatically and tells you by email, text or the Fly Delta app. Your new itinerary is in My Trips.',
        'Not happy with it? Search other flights, or cancel for a refund of the unflown ticket, any prepaid seat upgrade or Preferred Seat, and checked bag fees, or take an eCredit valid for 5 years.',
        'If Delta cannot rebook you and you do nothing for 24 hours, it refunds your original payment automatically.',
        'When Delta caused the cancellation: meal voucher at 3 hours or more, and hotel with ground transport if you are stuck overnight away from home.',
        'No cash compensation on top of the refund on US flights.'
      ],
      sources: [DPAGE, CSP, COC]
    },
    {
      id: 'cancel-weather', label: 'Flight cancelled by weather', status: 'stop', verdict: 'Refund yes, hotel no', sub: 'Cancellation outside Delta\'s control',
      head: 'You can still cancel for a refund, but Delta does not reimburse meals or hotel.',
      lines: [
        'The refund and rebooking rules for a cancellation do not depend on the cause: Delta rebooks you, and you can cancel for a refund or a 5-year eCredit.',
        'Meals, hotel and ground transport are not reimbursed for weather or air traffic control cancellations.',
        'No cash compensation.'
      ],
      sources: [DPAGE, CSP]
    },
    {
      id: 'schedule', label: 'Delta changed my schedule', status: 'go', verdict: 'Refund allowed', sub: 'Significant schedule change',
      head: 'A change of 3 hours or more (6 international) lets you cancel and get your money back.',
      lines: [
        'Delta counts a departure or arrival 3 hours or more earlier or later on a domestic itinerary, or 6 hours or more on an international one, as a significant change.',
        'You can cancel and get a refund of the unflown ticket and prepaid seat fees, or an eCredit valid for 5 years.',
        'No action within 24 hours when Delta cannot rebook you: automatic refund to the original payment.',
        'Tickets bought through a travel agency or third-party site: contact them directly.'
      ],
      sources: [DPAGE, DOTR]
    },
    {
      id: 'misconnect', label: 'I missed my connection', status: 'warn', verdict: 'Depends on the cause', sub: 'Misconnect after a delay',
      head: 'Free rebooking for sure. Meals and a hotel only if it was within Delta\'s control.',
      lines: [
        'Delta rebooks you on the next available flight at no additional cost, and makes every reasonable effort to reroute your checked bag with you.',
        'When the misconnect is within Delta\'s control: meal voucher if you wait 3 hours or more, and a hotel with ground transport if you are stuck overnight away from home.',
        'When weather or air traffic control caused it: not reimbursed.',
        'Ask the agent at the airport which cause applies before you pay for anything.'
      ],
      sources: [CSP, DPAGE]
    },
    {
      id: 'volunteer', label: 'Overbooked: I volunteer', status: 'warn', verdict: 'Whatever Delta offers', sub: 'Overbooked flight: you give up your seat',
      head: 'There is no fixed amount: Delta decides, usually with a Delta Choice gift card.',
      lines: [
        'Delta asks for volunteers before denying boarding to anyone. The amount and form of the compensation are in its sole discretion.',
        'Its plan offers the Delta Choice Gift Card Program: gift cards from leading merchants or Delta gift cards usable for future flights, fully transferable and with varying expiration dates.',
        'You are rebooked, and if the wait means an overnight stay Delta provides a hotel; if none is available, a credit voucher up to $100.',
        'If more people volunteer than needed, Delta picks who gets the compensation.'
      ],
      sources: [CSP, COC]
    },
    {
      id: 'bumped', label: 'Overbooked: I was bumped', status: 'go', verdict: 'Cash owed', sub: 'Overbooked flight: denied boarding against your will',
      head: '200% or 400% of your fare, up to $1,075 or $2,150.',
      lines: [
        'If Delta gets you to your destination within 2 hours of your original arrival (DOT: 4 hours on international flights), you get <b>200% of the fare, up to $1,075</b>.',
        'If it cannot, you get <b>400% of the fare, up to $2,150</b>. The fare includes surcharges and taxes.',
        'Arrive within 1 hour of the original time: nothing is owed. No compensation either for a smaller plane for safety reasons, an offer of another cabin (you get the fare difference refunded), or if you did not check in and reach the gate on time.',
        'Paid the same day, in cash or an immediately negotiable check, or within 24 hours by mail if your replacement flight leaves first.',
        'Who is bumped: Delta protects premium-cabin passengers, Medallion members and corporate-agreement tickets first; then it goes by class of service and check-in time.',
        'Overnight stay: free hotel, or a credit voucher up to $100 if none is available.'
      ],
      sources: [COC, DOTB, CSP]
    },
    {
      id: 'bag', label: 'Checked bag delayed or lost', status: 'go', verdict: 'Expenses and fee covered', sub: 'Checked bag did not arrive',
      head: 'Delta reimburses reasonable expenses and refunds the bag fee if it cannot find your bag in time.',
      lines: [
        'Go to the Baggage Service Office at the airport and file a report. You get a file reference number to submit receipts.',
        'Delta says it will make every reasonable effort to return a misplaced bag within 12 hours on domestic itineraries and 15 or 30 hours on international ones.',
        'Reasonable expenses caused by the delay are compensated for domestic itineraries; for international ones, as required by international agreements.',
        'If Delta cannot locate the bag in those times, it refunds the fee you paid to transport your delayed or lost checked bag.'
      ],
      sources: [CSP, DPAGE]
    },
    {
      id: 'refund', label: 'I want my money back', status: 'go', verdict: 'Refund owed', sub: 'Cancelled, significantly delayed or changed flight',
      head: 'A refund of the ticket and unused fees, to your original payment, with no processing fee.',
      lines: [
        'Applies when Delta cancels, significantly delays (3 hours or more domestic, 6 hours or more international) or significantly changes your flight, and you do not take the alternative.',
        'Delta says it refunds ancillary fees too, including a checked bag fee, and does not keep a processing fee for refunds that are due.',
        'Deadlines: credit card typically within 7 business days of Delta\'s receipt of the request, and up to two billing cycles to show on your statement; cash or check payments within 20 days.',
        'Request it at any Delta ticketing location or by phone (800-221-1212). Ticket bought through a travel agent: ask the agent, and request fees paid directly to Delta from Delta.',
        'Offered a credit instead? Delta says it will tell you that you are eligible for a refund when it offers a credit or voucher.'
      ],
      sources: [CSP, DPAGE, DOTR]
    },
    {
      id: 'goodwill', label: 'Delta offered nothing', status: 'warn', verdict: 'You can ask', sub: 'Delay or cancellation, no offer made',
      head: 'Delta can give gift cards, credits or miles when the case warrants it, but it is not owed.',
      lines: [
        'Delta\'s plan says it keeps the discretion to give cash equivalents (such as gift cards), travel credits or vouchers, and miles to SkyMiles members when individual circumstances warrant.',
        'It is a request, not a right. Ask the agent at the airport, and use Delta\'s complaint form afterwards.',
        'Delta says it acknowledges written complaints within 30 days and sends a substantive response within 60 days.'
      ],
      sources: [CSP]
    },
    {
      id: 'tarmac', label: 'Stuck on the plane', status: 'go', verdict: 'Basics provided', sub: 'Lengthy delay on the aircraft',
      head: 'Delta promises food, drinking water, working toilets and medical attention.',
      lines: [
        'During a lengthy tarmac delay, Delta says it gives you full and timely information and, if safety and security allow, provides food, potable water, operable lavatories and access to medical attention.',
        'No cash compensation.'
      ],
      sources: [CSP]
    },
    {
      id: 'eu', label: 'Flight leaving the EU', status: 'warn', verdict: 'May be owed cash', sub: 'Delta flight from an EU airport',
      head: 'EU rules can pay 250, 400 or 600 euros. Delta takes the request through its own page.',
      lines: [
        'Delta\'s EU page says you may be entitled to compensation if the flight was cancelled, delayed more than 3 hours or overbooked, and to a refund if the flight was overbooked, cancelled or delayed more than 5 hours.',
        'EU amounts: 250 euros up to 1,500 km, 400 euros for 1,500 to 3,500 km, 600 euros over 3,500 km. The airline can refuse if it proves extraordinary circumstances.',
        'You send the request through the feedback button on Delta\'s page, which also links the assistance notice for each country.',
        'Full rules: see our EU261 guide below.'
      ],
      sources: [EUPG, YEU]
    }
  ];

  out['delta'] = {
    ttl: 'Delta Compensation 2026: Delay, Cancelled, Bumped, Bags',
    desc: 'What Delta owes you for a delayed, cancelled or overbooked flight, schedule change or lost bag: meal, hotel, refund and DOT amounts, case by case.',
    h1: 'Delta compensation: pick what happened',
    answer: 'Delta rebooks you free, gives a meal at 3 hours and a hotel when it caused the problem, refunds you if it cancels or changes your flight by a lot, and pays 200% or 400% of your fare (up to $1,075 or $2,150) if it bumps you.',
    faq: [
      ['Does Delta pay compensation for a delayed flight?', 'Not cash. Delta lets you request reimbursement of a meal if a delay caused by Delta is 3 hours or more, and a hotel with ground transport if you are stuck overnight. It does not reimburse weather or air traffic control delays.'],
      ['Can I get a refund if Delta cancels my flight?', 'Yes. You can cancel the rebooked flight for a refund of the unflown ticket and prepaid seat fees, or take an eCredit valid for 5 years. If Delta cannot rebook you and you do nothing for 24 hours it refunds your original payment automatically.'],
      ['How much does Delta pay if it bumps me?', 'For an involuntary denied boarding, 200% of the fare up to $1,075 if you reach your destination within 2 hours of the original arrival, or 400% up to $2,150 if not. Volunteers get whatever Delta offers, typically a Delta Choice gift card.']
    ],
    render: a => render(a, SCEN, 'From Delta\'s own published rules and DOT, checked October 2026. Rules change, so confirm with the airline before you fly.')
  };
}

// ---------------- UNITED AIRLINES ----------------
// Data read 11 October 2026: United Contract of Carriage Rules 24, 25 (denied boarding, read in full for U.S. origin) and 27; United Customer Commitment (united.com/en/us/fly/customer-commitment.html),
// DOT Refunds / Bumping pages, Your Europe (EU amounts). Note: United's commitment says cash/check refunds within 20 BUSINESS days; DOT says 20 calendar days; both are shown.
{
  const COCU = ['https://www.united.com/en/us/fly/contract-of-carriage.html', 'United contract of carriage', 'Rules 24, 25 and 27'];
  const COMMIT = ['https://www.united.com/en/us/fly/customer-commitment.html', 'United customer commitment', 'Delays, refunds, baggage, tarmac'];
  const DOTRU = ['https://www.transportation.gov/individuals/aviation-consumer-protection/refunds', 'US Department of Transportation: Refunds', 'Refund rules and deadlines'];
  const DOTBU = ['https://www.transportation.gov/individuals/aviation-consumer-protection/bumping-oversales', 'US Department of Transportation: Bumping & Oversales', 'Denied boarding compensation'];
  const YEUU = ['https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', 'Your Europe: air passenger rights', 'EU compensation amounts'];
  const REBOOKU = 'Rebooked on the next United flight with seats in the same cabin at no additional cost. If a same-day delay or cancellation is within United\'s control and no United flight is available until the next day, ask United to book you on a partner airline.';

  const SCEN = [
    {
      id: 'delay-united', label: 'Flight delayed by United', status: 'go', verdict: 'Meal and hotel owed', sub: 'Delay within United\'s control, such as a mechanical issue', first: true,
      head: 'United gives a meal voucher after 3 hours and a hotel if you are stuck overnight.',
      lines: [
        REBOOKU,
        '<b>Meal voucher</b> for the reasonable cost of a meal at airport vendors if you wait more than 3 hours. Ask if you do not get one automatically.',
        '<b>Hotel voucher</b> at a partner hotel if the delay keeps you away from your home city overnight, plus a ride voucher if the hotel has no shuttle. If no partner room is available and you pay for your own, send the receipt and United reimburses reasonable hotel costs.',
        'If you turn down an offered meal, hotel or ride, United does not pay you back for what you buy yourself.',
        'The contract adds: lodging is one night, and where none is provided a travel certificate can be requested if the delay is expected to exceed 4 hours between 10:00 pm and 6:00 am. The contract says these amenities are the only claims you have.'
      ],
      sources: [COMMIT, COCU]
    },
    {
      id: 'delay-weather', label: 'Flight delayed by weather or air traffic control', status: 'stop', verdict: 'No meal or hotel', sub: 'Delay outside United\'s control',
      head: 'United rebooks you, but meals and hotel are not promised for weather or air traffic control.',
      lines: [
        'United\'s commitments for meals, hotel and ride vouchers apply to delays and cancellations <b>within its control</b>. Its contract also says lodging is not furnished when the interruption is due to circumstances outside United\'s control.',
        'You are still rebooked on the next United flight with seats at no additional cost.',
        'A <b>significant delay</b> (3 hours or more domestic, 6 hours or more international) still lets you refuse the new flight and get a refund of the fare and fees.',
        'No cash compensation.'
      ],
      sources: [COMMIT, COCU]
    },
    {
      id: 'cancel-united', label: 'Flight cancelled by United', status: 'go', verdict: 'Rebooked or refunded', sub: 'Flight cancelled by United',
      head: 'You choose the new flight, or your fare and fees back.',
      lines: [
        REBOOKU,
        'Do not want the new flight? United says you can get a refund of your fare and any fees if your flight is cancelled and you do not accept the rebooking or other compensation offered.',
        'Cancellation within United\'s control: meal voucher after more than 3 hours of waiting, and hotel and ride vouchers if you are stuck overnight away from home.',
        'The contract states no refund is made when you accept the alternate transportation United provides.',
        'No cash compensation on top of the refund on US flights.'
      ],
      sources: [COMMIT, COCU, DOTRU]
    },
    {
      id: 'cancel-weather', label: 'Flight cancelled by weather', status: 'warn', verdict: 'Ask for the refund', sub: 'Cancellation outside United\'s control',
      head: 'United\'s contract allows a credit for these cancellations; its commitment and DOT say you can have a refund.',
      lines: [
        'The contract says that after a Force Majeure Event such as severe weather, United may rebook you on its own or another airline, or may refund unused parts of the ticket in its sole discretion as a travel certificate or travel credit.',
        'United\'s customer commitment and DOT say something stronger: if a flight is significantly disrupted or cancelled and you do not accept the rebooking, you can get a refund of your fare and fees.',
        'Ask for the refund to your original form of payment, and say you are declining the rebooking.',
        'Meals and hotel are not promised for weather cancellations.'
      ],
      sources: [COCU, COMMIT, DOTRU]
    },
    {
      id: 'schedule', label: 'United changed my schedule', status: 'go', verdict: 'Refund allowed', sub: 'Significant schedule change or delay',
      head: 'A change of 3 hours or more (6 international) lets you take a refund or a one-year credit.',
      lines: [
        'United counts a schedule change or delay of at least 3 hours domestic or 6 hours international, a cancellation, or a downgrade to a lower cabin as significantly disrupted. For a downgrade you get the fare difference back.',
        'If United offers a travel credit instead, you may choose between the refund and the credit. The credit is valid for one year, cannot be transferred and works on United and United Express flights.',
        'Per the contract, when a schedule change is not significant, the ticket value can be applied to future United travel within one year without a change or reissue fee.',
        'United decides what counts as significant; the DOT 3 and 6 hour lines are your reference.'
      ],
      sources: [COMMIT, COCU, DOTRU]
    },
    {
      id: 'misconnect', label: 'I missed my connection', status: 'warn', verdict: 'Depends on the cause', sub: 'Misconnect after a delay or cancellation',
      head: 'United puts you on its next flight. Meals and a hotel depend on the cause.',
      lines: [
        'If the flight that was delivering you did not operate because of irregular operations or a schedule change and you miss your onward connection, that delivering carrier must arrange your carriage or refund you.',
        'The next United flight with seats in your cabin at no additional cost.',
        'Meal and hotel vouchers apply when the cause is within United\'s control; not for weather or air traffic control.',
        'Ask the agent which cause is recorded before you pay for anything.'
      ],
      sources: [COCU, COMMIT]
    },
    {
      id: 'volunteer', label: 'Overbooked: I volunteer', status: 'warn', verdict: 'Whatever you agree', sub: 'Overbooked flight: you give up your seat',
      head: 'A check or a one-year travel certificate, in an amount United decides.',
      lines: [
        'United asks for volunteers in exchange for compensation it determines, including a check or an electronic travel certificate.',
        'The travel certificate is valid only on United or designated codeshare partners for one year from issue and has no refund value.',
        'Protection for you: United cannot later bump a volunteer involuntarily unless it told you at the time that this was possible and the amount you would then be owed.',
        'Ask about the next flight, meals, hotel and what the certificate can be used for before you say yes.'
      ],
      sources: [COCU, DOTBU]
    },
    {
      id: 'bumped', label: 'Overbooked: I was bumped', status: 'go', verdict: 'Cash owed', sub: 'Overbooked flight: denied boarding against your will',
      head: '200% or 400% of your fare, up to $1,075 or $2,150.',
      lines: [
        'Domestic: arrive 1 to 2 hours late = <b>200% of the fare, up to $1,075</b>; more than 2 hours late = <b>400%, up to $2,150</b>.',
        'US to a foreign point: 200% (up to $1,075) for 1 to 4 hours, 400% (up to $2,150) for more than 4 hours.',
        'Nothing is owed if you arrive within 1 hour, the flight is cancelled, a smaller plane is used for operational or safety reasons, you are offered another cabin (lower cabin = fare difference refunded), you did not check in on time, or you reach the gate late.',
        'Paid as a check at the airport the same day (signed receipt), or sent within 24 hours if your replacement leaves first. United can offer free or reduced-rate air travel instead only if it is worth at least the cash due.',
        'Who is bumped: passengers with disabilities (and their service animal or assistant) and unaccompanied minors are last to be bumped when United decides it would be a hardship; for everyone else United looks at fare class, itinerary, frequent flyer status and whether you checked in without a seat assignment.',
        'You are flown to your destination on United\'s next flight with space, any class, at no extra cost.'
      ],
      sources: [COCU, DOTBU, COMMIT]
    },
    {
      id: 'bag', label: 'Checked bag delayed or lost', status: 'go', verdict: 'Expenses reimbursed', sub: 'Checked bag did not arrive',
      head: 'United reimburses reasonable and necessary expenses and the bag fee if the bag is lost.',
      lines: [
        'United says it makes every reasonable effort to deliver a delayed or misplaced checked bag within 24 hours.',
        'If you have expenses because of the delay and are eligible, United compensates reasonable and necessary out-of-pocket expenses.',
        'If your bag is lost, United reimburses any fee charged to transport it.',
        'Report it before leaving the airport and keep every receipt. DOT also refunds the bag fee when a bag is lost or significantly delayed.'
      ],
      sources: [COMMIT, DOTRU]
    },
    {
      id: 'refund', label: 'I want my money back', status: 'go', verdict: 'Refund owed', sub: 'Cancelled, significantly disrupted or oversold flight',
      head: 'Your fare and fees back to your original payment, with the right to refuse a credit.',
      lines: [
        'Applies when the flight is cancelled, delayed or changed by 3 hours or more domestic (6 international), you are downgraded, or the flight is oversold, and you do not accept the rebooking or compensation offered.',
        'Ancillary fees, such as seat selection and in-flight Wi-Fi, are refundable if United does not provide the service you paid for.',
        'Timing, per United: credit card within 7 business days of the refund becoming owed; cash or check within 20 business days. DOT states 20 calendar days, so quote DOT if it takes longer.',
        'Cancel your reservation first, then request the refund online, by phone, in writing or at a United ticketing facility. Include name, address, ticket numbers, travel dates and cities.',
        'The contract says refunds go to the original form of payment, minus any applicable fees.'
      ],
      sources: [COMMIT, COCU, DOTRU]
    },
    {
      id: 'tarmac', label: 'Stuck on the plane', status: 'go', verdict: 'Basics provided', sub: 'Lengthy tarmac delay',
      head: 'Snacks and water within 2 hours, restrooms and medical help.',
      lines: [
        'If safety and security allow, United provides snack food and drinking water no later than 2 hours after the aircraft leaves the gate (departure) or touches down (arrival), operable restrooms and adequate medical attention if needed.',
        'Updates about the delay every 30 minutes, including the reason if known.',
        'If the door is open at a gate or other deplaning area and you can leave, United tells you every 30 minutes, but you deplane at your own risk and the flight may leave without you.',
        'No cash compensation.'
      ],
      sources: [COMMIT]
    },
    {
      id: 'eu', label: 'Flight leaving the EU or UK', status: 'warn', verdict: 'Local law may apply', sub: 'United flight starting outside the USA',
      head: 'United\'s contract steps aside when local or international law regulates the case.',
      lines: [
        'Rule 24 says that where a United flight starts outside the USA and local or international laws regulate a schedule change, force majeure or irregular operations, the Rule 24 procedures are not applied.',
        'EU rules, which follow the departure airport: 250 euros up to 1,500 km, 400 euros for 1,500 to 3,500 km, 600 euros over 3,500 km, unless the airline proves extraordinary circumstances.',
        'We found no United page for EU compensation requests, so claim in writing from United first and then go to the national authority.',
        'Full rules: see our EU261 guide below.'
      ],
      sources: [COCU, YEUU]
    }
  ];

  out['united'] = {
    ttl: 'United Airlines Compensation 2026: Delay, Cancelled, Bumped',
    desc: 'What United Airlines owes you for a delayed, cancelled or overbooked flight, bag or schedule change: meal, hotel, refund and DOT amounts, case by case.',
    h1: 'United Airlines compensation: pick what happened',
    answer: 'United rebooks you free, gives a meal voucher after 3 hours and hotel and ride vouchers when it caused the problem, refunds you if you decline a cancelled or significantly changed flight, and pays 200% or 400% of your fare (up to $1,075 or $2,150) if it bumps you.',
    faq: [
      ['Does United pay compensation for a delayed flight?', 'Not cash. For a delay within its control it gives a meal voucher if you wait more than 3 hours and hotel and ride vouchers if you are stuck overnight away from home. For weather or air traffic control it does not promise them.'],
      ['Can I get a refund if United cancels my flight?', 'Yes. United says you can get a refund of your fare and fees if your flight is cancelled or significantly disrupted and you do not accept the rebooking or other compensation. If it offers a credit, you may choose the refund instead.'],
      ['How much does United pay if it bumps me?', 'For a domestic flight, 200% of your fare up to $1,075 for a 1 to 2 hour delay and 400% up to $2,150 for more than 2 hours. Volunteers get a check or a one-year electronic travel certificate in an amount United decides.']
    ],
    render: a => render(a, SCEN, 'From United\'s own published rules and DOT, checked October 2026. Rules change, so confirm with the airline before you fly.')
  };
}

// ---------------- SOUTHWEST AIRLINES ----------------
// Data read 11 October 2026 from the PDFs: Southwest Contract of Carriage 58th Revised 09/24/2026 (definitions, section 4.c refunds, section 9.b cancellations and significantly delayed or changed flights,
// 9.c denied boarding in full) and Customer Service Plan Rev #26-01 (effective 06/04/2026, sections 2, 3, 5, 9, 10, 12, 14). The plan says it is not a contract and the contract governs in a conflict.
{
  const COCS = ['https://www.southwest.com/swa-resources/pdfs/corporate-commitments/contract-of-carriage.pdf', 'Southwest contract of carriage', '58th revised, sections 4, 9'];
  const CSPS = ['https://www.southwest.com/swa-resources/pdfs/corporate-commitments/customer-service-plan.pdf', 'Southwest customer service plan', 'Rev #26-01, delays, bumping, baggage'];
  const DOTRS = ['https://www.transportation.gov/individuals/aviation-consumer-protection/refunds', 'US Department of Transportation: Refunds', 'Refund rules and deadlines'];
  const DOTBS = ['https://www.transportation.gov/individuals/aviation-consumer-protection/bumping-oversales', 'US Department of Transportation: Bumping & Oversales', 'Denied boarding compensation'];
  const REBOOKS = 'Rebooked on the next available Southwest flight with seats to your ticketed destination at no additional cost.';

  const SCEN = [
    {
      id: 'delay-southwest', label: 'Flight delayed by Southwest', status: 'go', verdict: 'Meal, hotel and voucher', sub: 'Delay of 3 hours or more within Southwest\'s control', first: true,
      head: 'Southwest covers a meal and, if stuck overnight, a hotel, and may add a $75 LUV Voucher.',
      lines: [
        REBOOKS,
        '<b>Meal voucher</b> on request at the airport if the wait is 3 hours or more. If vouchers are not available, Southwest honors reasonable requests for reimbursement. It may also give free snacks and drinks.',
        '<b>Hotel</b> on request if no same-day Southwest flight to your destination is available and it causes an unscheduled overnight stay (you do not live locally): Southwest arranges lodging or honors reasonable reimbursement requests, and offers a ride voucher if the hotel has no shuttle.',
        '<b>LUV Voucher of at least $75</b> if you arrive 3 hours or more late (see the voucher card below for the 3 conditions).',
        'These services are for delays within Southwest\'s control, such as mechanical problems or an aircraft swap.'
      ],
      sources: [CSPS]
    },
    {
      id: 'delay-weather', label: 'Flight delayed by weather or air traffic control', status: 'stop', verdict: 'Rebooking only', sub: 'Delay outside Southwest\'s control',
      head: 'Southwest rebooks you, but promises no meal, hotel or voucher.',
      lines: [
        'For delays of 3 hours or more that are not within its control (weather, Air Traffic Control, safety or security events, FAA crew duty limits, infrastructure or utility problems), Southwest\'s plan promises one thing: rebooking on the next available flight with seats at no additional cost.',
        'DOT gives a refund right for a significant delay (3 hours or more domestic, 6 hours or more international) if you decline the new flight. Southwest\'s contract defines a significantly delayed flight as a Southwest-imposed delay, so cite DOT when you ask for it.',
        'No cash compensation.'
      ],
      sources: [CSPS, COCS]
    },
    {
      id: 'cancel-southwest', label: 'Flight cancelled by Southwest', status: 'go', verdict: 'Rebooked, credit or refund', sub: 'Southwest-initiated cancellation',
      head: 'Three options: the next flight, a Flight Credit, or a refund to your original payment.',
      lines: [
        'Southwest may offer the next flight with seats, or alternative transportation on Southwest, at no additional charge.',
        'It may tell you the unused fare can be held as a Flight Credit or Transferable Flight Credit. Credits have an expiration date: travel must be booked and flown by then.',
        'If you decline everything, you are eligible for a refund to the original form of payment.',
        'Cancellation within Southwest\'s control that leaves you waiting 3 hours or more: meal voucher on request, lodging if overnight, and the LUV Voucher of at least $75 if you arrive 3 hours or more late.',
        'The contract calls the refund your exclusive remedy for a cancellation, and limits Southwest\'s liability to the unused part of the reservation. No incidental or consequential damages.'
      ],
      sources: [COCS, CSPS]
    },
    {
      id: 'cancel-weather', label: 'Flight cancelled by weather', status: 'stop', verdict: 'Refund yes, extras no', sub: 'Cancellation outside Southwest\'s control',
      head: 'You are rebooked or refunded. Meals, hotel and voucher are not promised.',
      lines: [
        'For a cancellation not within its control, the plan promises rebooking on the next available Southwest flight with seats at no additional cost.',
        'The contract\'s cancellation rule does not depend on the cause: if you do not take the rebooking or a Flight Credit, you are eligible for a refund to your original form of payment.',
        'No meal voucher, hotel or LUV Voucher.'
      ],
      sources: [CSPS, COCS]
    },
    {
      id: 'significant', label: 'Big delay or change to my flight', status: 'go', verdict: 'Refund allowed', sub: 'Significantly delayed or changed flight',
      head: 'If you do not want the changed flight, Southwest refunds you to your original payment.',
      lines: [
        'Southwest counts as significant: leaving or arriving 3 hours or more (domestic) or 6 hours or more (international) earlier or later, a different origin or destination airport, more connection points, a downgrade to a lower class of service, or (for a passenger with a disability) different connecting airports.',
        'Options: the next flight, a Flight Credit or Transferable Flight Credit, or a refund to the original form of payment if you decline the rest.',
        'When it offers a credit or other alternative, Southwest says it will tell you that you are eligible for a refund.',
        'Southwest\'s contract calls the refund your exclusive remedy for a cancelled or significantly changed flight.'
      ],
      sources: [COCS, CSPS, DOTRS]
    },
    {
      id: 'early-change', label: 'Schedule changed more than a week ahead', status: 'go', verdict: 'Choose or cancel', sub: 'Itinerary change more than 7 days before departure',
      head: 'Southwest lets you pick a new flight within 14 days or cancel for a refund.',
      lines: [
        'Southwest says it will tell you of a change as early as practicable and try to within 48 hours of becoming aware of it.',
        'You can accept the revised itinerary or, for a significant involuntary change, choose an alternate flight or date within 14 days of your original travel, or cancel your trip without penalty and receive a refund under the contract.',
        'The meal, hotel and LUV Voucher services do not apply to these early changes.'
      ],
      sources: [CSPS]
    },
    {
      id: 'misconnect', label: 'I missed my connection', status: 'warn', verdict: 'Depends on the cause', sub: 'Missed connection after a delay',
      head: 'Southwest does not guarantee connections. It rebooks you; extras depend on the cause.',
      lines: [
        'The contract says Southwest does not guarantee that you will make connections to other flights, whether on Southwest or another airline.',
        'You are rebooked on the next available Southwest flight with seats at no additional cost.',
        'Meal, lodging and voucher promises apply to delays and cancellations within Southwest\'s control, not to weather, air traffic control or crew-duty limits.',
        'Ask the agent which cause applies before you pay for anything.'
      ],
      sources: [COCS, CSPS]
    },
    {
      id: 'volunteer', label: 'Overbooked: I volunteer', status: 'warn', verdict: 'Typically a voucher', sub: 'Oversold flight: you give up your seat',
      head: 'The amount is Southwest\'s offer, usually a voucher, and you must be told the risk first.',
      lines: [
        'Southwest\'s plan says agents ask for volunteers to take a later flight, typically in exchange for a voucher. The contract says a volunteer accepts compensation "in any amount".',
        'Before you volunteer, Southwest has to tell you whether you are in danger of being involuntarily denied boarding and, if so, what it would owe you.',
        'Southwest refunds all unused ancillary fees for a passenger who volunteers or is bumped, except services that carry over to your alternate trip.',
        'Ask about the next flight, meals, a hotel and the voucher\'s expiration date before you say yes.'
      ],
      sources: [CSPS, COCS]
    },
    {
      id: 'bumped', label: 'Overbooked: I was bumped', status: 'go', verdict: 'Cash owed', sub: 'Oversold flight: denied boarding against your will',
      head: '200% or 400% of your fare, up to $1,075 or $2,150, by draft.',
      lines: [
        'Domestic: Southwest gets you there 1 to 2 hours late = <b>200% of the fare, up to $1,075</b>. If it offers nothing better than more than 2 hours late = <b>400%, up to $2,150</b>. International: 1 to 4 hours and over 4 hours.',
        'Nothing is owed if Southwest offers comparable transportation arriving no more than 1 hour after the original arrival, or if you did not check in and reach the gate on time.',
        'Paid on the day at the airport as a <b>draft</b>, or mailed within 24 hours if your replacement flight leaves first.',
        'Southwest may offer a LUV Voucher instead, only with your consent. You can refuse and insist on the draft. Accepting compensation ends further liability for the missed reservation.',
        'Who is bumped: Choice Extra fares and A-List and A-List Preferred members are protected first; then interline itineraries, higher fare classes, earlier booking dates and earlier check-in.',
        'You get a written explanation of the rules, and a refund of all unused ancillary fees.'
      ],
      sources: [COCS, DOTBS, CSPS]
    },
    {
      id: 'bag', label: 'Checked bag delayed or lost', status: 'go', verdict: 'Fee refunded, claim expenses', sub: 'Checked bag did not arrive',
      head: 'File a report: Southwest refunds the bag fee and considers reasonable expenses.',
      lines: [
        'Southwest makes reasonable efforts to return a delayed bag within 12 hours for domestic flights and 15 to 30 hours for international ones.',
        'If you paid a bag fee and the bag is delayed 12 hours or more (domestic) or 15 hours or more (international), or never recovered, it refunds the fee, provided you filed a mishandled baggage report.',
        'If the delay or loss was for reasons outside your control, you can submit a claim for reasonable expenses you incurred. This is a claim for consideration, not an automatic payment.'
      ],
      sources: [CSPS, DOTRS]
    },
    {
      id: 'voucher', label: 'How to get the $75 LUV Voucher', status: 'warn', verdict: 'Check the 3 conditions', sub: 'Delay or cancellation voucher',
      head: 'At least $75, fully transferable, if you meet all three conditions.',
      lines: [
        '1. Southwest cancelled or delayed your flight within 7 days of the scheduled departure, and the cause was within its control.',
        '2. You arrived at your final destination 3 hours or more after the scheduled arrival time.',
        '3. You request it at Southwest.com/DelayForm no later than 1 year after the flight.',
        'If a voucher was already issued for the same delay or cancellation, that satisfies the commitment. A LUV Voucher has an expiration date, cannot be cashed out and is for buying tickets only.',
        'The contract calls LUV Vouchers issued "at Southwest\'s sole discretion".'
      ],
      sources: [CSPS, COCS]
    },
    {
      id: 'refund', label: 'I want my money back', status: 'go', verdict: 'Refund owed', sub: 'Cancelled or significantly changed flight',
      head: 'To your original payment: card within 7 business days, check within 20 calendar days.',
      lines: [
        'Applies when Southwest cancels or significantly delays or changes your flight and you decline the alternatives.',
        'Credit card refunds: Southwest makes reasonable efforts to process them within 7 business days; your card company can then take up to 10 business days to post it, so it may show within one to two statements.',
        'Cash payments are refunded by check, which Southwest aims to process within 20 calendar days.',
        'Flight Credits are not cash: they expire, and travel must be booked and flown by the date.',
        'Southwest also commits to cancel an unchanged reservation within 24 hours of booking for a full refund when it was made a week or more before departure.'
      ],
      sources: [CSPS, COCS, DOTRS]
    },
    {
      id: 'tarmac', label: 'Stuck on the plane', status: 'warn', verdict: 'See its tarmac plan', sub: 'Lengthy tarmac delay',
      head: 'Southwest\'s customer plan only points to its Tarmac Contingency Plan.',
      lines: [
        'The customer service plan says Southwest adopted a Tarmac Contingency Plan for long onboard delays caused by weather, gate space, visibility, airport conditions, mechanical problems or air traffic control.',
        'It lists no specific food, water or time limits itself, so ask the crew and read the plan on Southwest.com.',
        'No cash compensation.'
      ],
      sources: [CSPS]
    }
  ];

  out['southwest'] = {
    ttl: 'Southwest Compensation 2026: Delay, Cancelled, Bumped, $75 Voucher',
    desc: 'What Southwest owes you for a delayed, cancelled or overbooked flight: meal, hotel, the $75 LUV Voucher, refund and DOT bumping amounts, case by case.',
    h1: 'Southwest compensation: pick what happened',
    answer: 'Southwest rebooks you free; for delays within its control it gives a meal voucher, lodging if you are stuck overnight and a LUV Voucher of at least $75 if you arrive 3 hours late; it refunds you if it cancels and you decline; and it pays 200% or 400% of your fare (up to $1,075 or $2,150) by draft if it bumps you.',
    faq: [
      ['Does Southwest pay compensation for a delayed flight?', 'Not cash. For a delay of 3 hours or more within its control it gives a meal voucher, lodging if you are stuck overnight, and a LUV Voucher of at least $75 if you arrive 3 hours or more late and apply at Southwest.com/DelayForm within a year. For weather or air traffic control it only rebooks you.'],
      ['Can I get a refund if Southwest cancels my flight?', 'Yes. If you decline the rebooking and a Flight Credit you are eligible for a refund to your original form of payment. Southwest\'s contract calls it your exclusive remedy for a cancellation.'],
      ['How much does Southwest pay if it bumps me?', 'For a domestic flight, 200% of your fare up to $1,075 for a 1 to 2 hour delay and 400% up to $2,150 for more than 2 hours, paid by draft. You can refuse a voucher and insist on the draft.']
    ],
    render: a => render(a, SCEN, 'From Southwest\'s own published contract and customer service plan, and DOT, checked October 2026. Rules change, so confirm with the airline before you fly.')
  };
}

// ---------------- JETBLUE ----------------
// Data read 11 October 2026: JetBlue Customer Service Plan page (jetblue.com/customer-assurance/customer-service-plan, read in the browser) and JetBlue Contract of Carriage rev 101 (17 Apr 2026) PDF,
// sections 25, 26, 27 (denied boarding, in full), 37 (tarmac, cancellations, delays, overbookings, in full); DOT Refunds / Bumping pages. The contract says the Customer Assurance policies form no part of it.
// Note flagged on the cards: contract section 37(a)(2) says refunds under that section exclude taxes and fees, while the plan says a full refund and DOT requires one.
{
  const COCJ = ['https://cms.jetblue.com/public/dam/ui-assets/p/legal/Contract-of-Carriage--2026.04.17-.pdf', 'JetBlue contract of carriage', 'Rev 101, sections 25-27 and 37'];
  const CSPJ = ['https://www.jetblue.com/customer-assurance/customer-service-plan', 'JetBlue customer service plan', 'Disruptions, points, meals, hotel, baggage'];
  const DOTRJ = ['https://www.transportation.gov/individuals/aviation-consumer-protection/refunds', 'US Department of Transportation: Refunds', 'Refund rules and deadlines'];
  const DOTBJ = ['https://www.transportation.gov/individuals/aviation-consumer-protection/bumping-oversales', 'US Department of Transportation: Bumping & Oversales', 'Denied boarding compensation'];
  const TAXNOTE = 'Ask for the taxes and fees too: the contract says refunds under its section 37 exclude them, while the plan promises a full refund and DOT requires your ticket price back.';

  const SCEN = [
    {
      id: 'delay-jetblue', label: 'Flight delayed by JetBlue', status: 'go', verdict: '$12 meal, hotel, 5,000 points', sub: 'Controllable delay of 3 hours or more', first: true,
      head: 'A $12 meal voucher, a hotel if you are stuck overnight, and 5,000 TrueBlue points for members.',
      lines: [
        '<b>Meal:</b> if the arrival delay is 3 hours or more, every ticketed customer gets a digital meal voucher of $12, TrueBlue member or not. No US-issued card? You can use the reimbursement process.',
        '<b>Hotel:</b> if you are away from your home or origin city overnight, JetBlue provides a contracted hotel based on availability, often with ground transport. Otherwise it reimburses reasonable hotel and ground transport costs with receipts submitted within 10 days. Not provided to customers who live locally.',
        '<b>5,000 TrueBlue points</b> for a controllable delay of more than 3 hours past scheduled departure. Non-members get nothing, and the account must be on the reservation before the disruption.',
        'Not included: flights to or from Canada, and flights departing Europe. Mosaic members may get more points.',
        'JetBlue\'s contract says these Customer Assurance policies form no part of the contract.'
      ],
      sources: [CSPJ, COCJ]
    },
    {
      id: 'delay-weather', label: 'Flight delayed by weather or air traffic control', status: 'stop', verdict: 'No meal, hotel or points', sub: 'Delay that is not a controllable irregularity',
      head: 'Hotels, meal vouchers and points are only for controllable disruptions.',
      lines: [
        'JetBlue provides or reimburses hotels only for a controllable irregularity, and meal vouchers and points are tied to controllable delays too. Weather is not one.',
        'Still true: if your arrival is delayed 3 hours or more (domestic) or 6 hours or more (international), the plan says JetBlue keeps you on your flight and you can rebook free within five days or cancel for a full refund.',
        'No cash compensation.'
      ],
      sources: [CSPJ]
    },
    {
      id: 'cancel-jetblue', label: 'Flight cancelled by JetBlue', status: 'go', verdict: 'Refund or new flight', sub: 'Flight cancelled by JetBlue',
      head: 'You choose: a new JetBlue flight, or a full refund including bags and seats.',
      lines: [
        'JetBlue rebooks you automatically on a new flight. If it does not work, act before your scheduled departure: rebook to another JetBlue flight within five days at no extra cost, or cancel for a full refund to your original payment, including prepaid bags and seat assignments.',
        'If no action is taken within 7 days of the cancelled flight, JetBlue refunds the entire itinerary automatically, including the return flight.',
        'Controllable cancellation: <b>5,000 TrueBlue points</b> if it is less than 4 hours before departure (members only), the $12 meal voucher at 3 hours or more, and a hotel if you are away overnight.',
        TAXNOTE
      ],
      sources: [CSPJ, COCJ, DOTRJ]
    },
    {
      id: 'cancel-weather', label: 'Flight cancelled by weather', status: 'stop', verdict: 'Refund yes, extras no', sub: 'Cancellation outside JetBlue\'s control',
      head: 'You can still switch flights or get a refund. No hotel, meal or points.',
      lines: [
        'The contract says that whenever JetBlue cancels a flight it will, at your request, either carry you on another flight in the same class at no extra charge or refund you. It does not make that depend on the cause.',
        'Hotels, $12 meal vouchers and TrueBlue points are for controllable disruptions only.',
        'The contract says that apart from this JetBlue has no other liability for a failure to operate, and is not liable for delay caused by force majeure such as weather.',
        TAXNOTE
      ],
      sources: [COCJ, CSPJ]
    },
    {
      id: 'schedule', label: 'JetBlue changed my schedule', status: 'go', verdict: 'Rebook or refund', sub: 'Significant schedule change',
      head: 'A change this big lets you rebook within five days or cancel for a full refund.',
      lines: [
        'The plan lists the triggers: your departure moved earlier by 3+ hours (domestic) or 6+ hours (international); your arrival delayed by 3+ or 6+ hours; a different departure or arrival airport; added connections; being moved from the experience you bought; for a customer with a disability, a changed connection city or an aircraft change that affects needed accessibility features; and a schedule change that causes a misconnect.',
        'If the updated itinerary works, do nothing. If not, act before your scheduled departure: rebook to an alternate JetBlue flight within five days at no extra cost, or cancel for a full refund including prepaid bags and seats.'
      ],
      sources: [CSPJ, DOTRJ]
    },
    {
      id: 'misconnect', label: 'I missed my connection', status: 'warn', verdict: 'Mostly on you', sub: 'Missed connection',
      head: 'The contract takes no liability for failed connections, but a schedule-change misconnect counts as a disruption.',
      lines: [
        'The contract says JetBlue is not responsible for failure to make connections on its own flights or on another airline\'s flights.',
        'The plan, however, treats a schedule change that results in a misconnect or breaks minimum connect times as a disruption: rebook within five days free, or cancel for a full refund.',
        'If a controllable irregularity delays your arrival by 3 hours or more, the hotel and meal promises apply.',
        'Ask the agent which category your case falls in.'
      ],
      sources: [COCJ, CSPJ]
    },
    {
      id: 'volunteer', label: 'Overbooked: I volunteer', status: 'warn', verdict: 'No legal compensation', sub: 'Oversold flight: you accept an offer',
      head: 'A volunteer is not counted as bumped, so the DOT amounts do not apply.',
      lines: [
        'The contract says a passenger who answers the request for volunteers and willingly accepts JetBlue\'s offer, in any amount, is not involuntarily denied boarding and is not entitled to denied boarding compensation.',
        'So the deal is only what you and the agent agree. Get meals, hotel, the next flight and any voucher terms in writing before you accept.',
        'JetBlue\'s plan does not describe volunteer compensation.'
      ],
      sources: [COCJ, CSPJ]
    },
    {
      id: 'bumped', label: 'Overbooked: I was bumped', status: 'go', verdict: 'Cash owed', sub: 'Oversold flight: denied boarding against your will',
      head: '200% or 400% of your one-way fare, up to $1,075 or $2,150.',
      lines: [
        'Domestic flights (including US territories): nothing if JetBlue gets you there less than 1 hour late; <b>200% of the one-way fare up to $1,075</b> for 1 to 2 hours late; <b>400% up to $2,150</b> if it offers nothing arriving less than 2 hours late.',
        'International flights departing a US airport: the same, with 4 hours instead of 2.',
        'Nothing is owed if you did not follow check-in rules, a smaller plane replaced yours for operational or safety reasons, you were offered another cabin (lower cabin: fare difference refunded), or the flight started in the UK or an EU state.',
        'Who is bumped: JetBlue denies boarding strictly in the order you checked in, starting with whoever checked in last. Check in early.',
        'You get a written explanatory statement before the denial. Accepting the compensation ends further liability for the original booking.',
        'Booked with a TrueBlue award: other compensation under section 37 is paid in points, but involuntary denied boarding is the exception. The plan says "up to $2,150".'
      ],
      sources: [COCJ, DOTBJ, CSPJ]
    },
    {
      id: 'bag', label: 'Checked bag delayed or lost', status: 'go', verdict: 'Fee refunded automatically', sub: 'Checked bag did not arrive',
      head: 'Delivery at no cost, reasonable expenses reimbursed, bag fee refunded after 12 hours.',
      lines: [
        'JetBlue delivers the bag to your location as quickly as possible at no cost to you.',
        'It reimburses reasonable out-of-pocket expenses caused by the delay, in accordance with its reimbursement policy.',
        'It automatically refunds the fee paid for the delayed bag if the bag is not delivered within 12 hours of arrival (domestic) or 15 hours (international).',
        'File a report at the airport and keep receipts. DOT also refunds the fee for lost or significantly delayed bags.'
      ],
      sources: [CSPJ, DOTRJ]
    },
    {
      id: 'points', label: 'How to get the 5,000 TrueBlue points', status: 'warn', verdict: 'Check the conditions', sub: 'Compensation for a controllable disruption',
      head: 'Members only, and the account must be on the booking before the disruption.',
      lines: [
        '5,000 TrueBlue points for a controllable delay of more than 3 hours past scheduled departure, or a controllable cancellation less than 4 hours before scheduled departure.',
        'Your TrueBlue account must be attached to the reservation before the disruption. Booked through a travel agent? Make sure your TrueBlue number is on it.',
        'Points are issued automatically with a notification within 24 hours of the flight\'s scheduled departure. No need to contact JetBlue. Mosaic members may get more.',
        'Excluded: flights to or from Canada and flights departing Europe. Non-members receive no compensation.'
      ],
      sources: [CSPJ]
    },
    {
      id: 'refund', label: 'I want my money back', status: 'go', verdict: 'Refund owed', sub: 'Cancelled or significantly changed flight',
      head: 'A full refund to your original payment, including prepaid bags and seats.',
      lines: [
        'Applies to a cancellation or a significant change, and you must act before your scheduled departure. If JetBlue cancels and cannot rebook you and you do nothing for 7 days, it refunds the entire itinerary automatically.',
        'Refunds go to the original form of payment. If you booked with a TrueBlue award, the contract says compensation is given as TrueBlue points.',
        'Booked outside JetBlue (a travel agent)? You contact the seller; the contract says you are responsible for contacting JetBlue for compensation if you did not use a JetBlue booking channel.',
        'The plan gives no processing deadline beyond the automatic 7-day refund. DOT sets 7 business days for cards and 20 calendar days otherwise.',
        'Risk-free cancellation: within 24 hours of booking, if booked 7 or more days before departure, you can cancel the entire booking for a full refund.',
        TAXNOTE
      ],
      sources: [CSPJ, COCJ, DOTRJ]
    },
    {
      id: 'tarmac', label: 'Stuck on the plane', status: 'go', verdict: 'Food, water, 3-hour limit', sub: 'Ground delay on the aircraft',
      head: 'JetBlue says food and water within 2 hours, and no more than 3 hours on the tarmac.',
      lines: [
        'Food and drink (potable water) no later than 2 hours after the aircraft leaves the gate, unless the pilot decides safety or security prevents it. Operable restrooms and, as necessary, medical treatment.',
        'No more than 3 hours on the tarmac for domestic flights and 4 hours for international, unless the pilot finds a safety or security reason, or Air Traffic Control says returning to the gate would significantly disrupt airport operations.',
        'No cash compensation.'
      ],
      sources: [COCJ]
    },
    {
      id: 'eu', label: 'Flight from Europe or the UK', status: 'warn', verdict: 'EU or UK rules instead', sub: 'JetBlue flight departing the EU or UK',
      head: 'JetBlue\'s own compensation does not apply there. EC 261 or UK 261 does.',
      lines: [
        'The plan says that on a JetBlue-operated flight from the EU or UK that is delayed, cancelled or overbooked, you may be entitled to benefits under EC 261 or UK 261 in place of the compensation in the plan.',
        'The contract excludes flights that start in the UK or an EU state from its denied boarding compensation and from the section 37 relief, unless local law requires it.',
        'EU amounts: 250 euros up to 1,500 km, 400 euros for 1,500 to 3,500 km, 600 euros over 3,500 km, unless the airline proves extraordinary circumstances.',
        'JetBlue points to a claim form on its plan page for these cases.'
      ],
      sources: [CSPJ, COCJ]
    },
    {
      id: 'canada', label: 'Flight to or from Canada', status: 'warn', verdict: 'Canadian rules may apply', sub: 'JetBlue flight to or from Canada',
      head: 'Points do not apply, but Canada\'s passenger rules may give you more.',
      lines: [
        'The TrueBlue points compensation excludes flights to or from Canada.',
        'The plan says that on a confirmed JetBlue-operated reservation to or from Canada, if you are denied boarding, your flight is cancelled or delayed at least two hours, or your baggage is lost or damaged, you may be entitled to treatment and compensation under the Air Passenger Protection Regulations.',
        'JetBlue provides a claim form on its plan page. We did not read the Canadian regulations, so amounts are not listed here.'
      ],
      sources: [CSPJ]
    }
  ];

  out['jetblue'] = {
    ttl: 'JetBlue Compensation 2026: Delay, Cancelled, Bumped, Points',
    desc: 'What JetBlue owes you for a delayed, cancelled or overbooked flight: $12 meal, hotel, 5,000 TrueBlue points, refund and DOT bumping amounts, case by case.',
    h1: 'JetBlue compensation: pick what happened',
    answer: 'JetBlue gives a $12 meal voucher at 3 hours and a hotel when it caused the delay, 5,000 TrueBlue points to members, a full refund if it cancels, and 200% or 400% of your fare (up to $1,075 or $2,150) if it bumps you.',
    faq: [
      ['Does JetBlue pay compensation for a delayed flight?', 'Not cash. For a controllable delay it gives every ticketed customer a $12 digital meal voucher at 3 hours, a hotel if you are away overnight, and 5,000 TrueBlue points to members for a delay of more than 3 hours past scheduled departure. Weather and air traffic control are not included.'],
      ['Can I get a refund if JetBlue cancels my flight?', 'Yes. You can cancel for a full refund to your original payment, including prepaid bags and seat assignments, or rebook free within five days. If you do nothing for 7 days after a cancellation JetBlue refunds the entire itinerary automatically.'],
      ['Who does JetBlue bump first on an overbooked flight?', 'The passenger who checked in last. The contract denies boarding in the order of check-in, starting with those who checked in last. Involuntary bumping pays 200% or 400% of your one-way fare, up to $1,075 or $2,150.']
    ],
    render: a => render(a, SCEN, 'From JetBlue\'s own published plan and contract, and DOT, checked October 2026. Rules change, so confirm with the airline before you fly.')
  };
}

Object.assign(out, require('./airline_compensation_eu.js')(render));
Object.assign(out, require('./airline_compensation_other.js')(render));

Object.defineProperty(out, '__render', { value: render, enumerable: false });
module.exports = out;
