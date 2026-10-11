// Compensation pages for non-EU/UK/US carriers (session 24, 2026-10-11). Same card format as airline_compensation.js.
// Every airline's cards use THAT airline's own pages; only read facts; anything not read is disclosed on the card.
module.exports = function (render) {
  const out = {};
  const YEU = ['https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', 'Your Europe: air passenger rights', 'EU rules, amounts, deadlines'];

  // ---------------- TURKISH AIRLINES ----------------
  // Read 11 Oct 2026: turkishairlines.com Flight Disruptions page; the "Passenger Rights" notice (form FR.67.0329 rev 11, 2-page PDF, Turkish SHY regime); US Customer Service Plan; Canadian Air Passenger Protection Regulations page (delay/cancellation and denied boarding amounts).
  // NOT read: the notice's service table cell by cell (a grid), the General Conditions of Carriage, the Israel notice, any Turkish page for EU departures, the baggage compensation rules.
  {
    const FD = ['https://www.turkishairlines.com/en-us/any-questions/flight-irregularities/', 'Turkish Airlines: Flight Disruptions', 'Delays, cancellations, extraordinary circumstances'];
    const PR = ['https://cdn.turkishairlines.com/asset/a2833cc5-1c6c-4152-a1ed-a0ae725bb00c/FR_67_0329_TR_11_EN_06-08.pdf', 'Turkish Airlines: Passenger Rights notice (PDF)', 'Services and compensation, Turkish rules'];
    const CSP = ['https://www.turkishairlines.com/en-us/legal-notice/other-regulations/customer-service-plan/', 'Turkish Airlines: Customer Service Plan (US)', 'US rules: oversales, hotels, refunds'];
    const CA = ['https://www.turkishairlines.com/en-us/canadian-air-passenger-protection-regulations/', 'Turkish Airlines: Canadian passenger protection', 'CAD amounts and conditions'];
    const GIT = ['https://www.turkishairlines.com/en-us/any-questions/get-in-touch/', 'Turkish Airlines: Get in Touch', 'Call centre and feedback'];

    const SCEN = [
      {
        id: 'us', label: 'Flight to or from the US', status: 'warn', verdict: 'Rebooking help, no delay cash', sub: 'Turkish Airlines\' US Customer Service Plan', first: true,
        head: 'The US plan promises rebooking help and DOT bumping rules; it lists no cash for delays.',
        lines: [
          'For delays, cancellations or misconnections it says it will make reasonable efforts to help you rebook your travel to your destination.',
          'If you cannot reach your final destination on the original arrival date because of something under its control and rebooking is not possible, it <b>may, at its direction, offer a free overnight hotel</b>. If the cause is severe weather or other issues outside its control, it says in most cases there is no hotel, but it will try to give you the information to arrange your own.',
          'If you are bumped (oversale) on a flight leaving the US, you are in most cases entitled to transport on another flight and/or compensation as DOT regulations require. It says it asks for volunteers first and gives each denied passenger a written statement of their rights. The DOT amounts are in our overbooked guide.',
          'Refund: you can refund a ticket to or from the US within 24 hours of purchase for a full refund if it was bought at least 7 days before departure through its US sales channels.',
          'The plan does not list a cash amount for a delay. See the cards for Turkish rules, Canada and EU departures below.'
        ],
        sources: [CSP]
      },
      {
        id: 'delay', label: 'Flight delayed', status: 'go', verdict: 'Care from a 2 hour delay', sub: 'Delay under Turkish Airlines\' own notice',
        head: 'Its notice gives services and ticket rights by delay time; it lists no cash for a delay.',
        lines: [
          'The notice says that for a denied boarding, cancellation or delay of at least two hours you can benefit from the rights under Turkey\'s Regulation on the Rights of Passengers Traveling by Air (SHGM). You must have a confirmed reservation and be at check-in at least <b>60 minutes</b> before an international departure (45 minutes domestic).',
          'Its service table lists information, free phone calls (twice), drinks, a snack or a main course depending on the time of day, transport fees for alternative vehicles, and accommodation with transport between the airport and the hotel.',
          '<b>Accommodation:</b> if the delay is 8 hours or more, or an overnight stay becomes necessary regardless of the delay, accommodation and transport are provided, depending on the station\'s facilities.',
          'Its table columns run from 16-59 minutes up to 300 minutes and longer and show ticket rights (free rebooking, or a refund). We could not read which service sits in which column, so check at the counter.',
          'The Flight Disruptions page adds that for a delay you can change your flight or cancel and get a refund within rules set by the delay time.'
        ],
        sources: [PR, FD]
      },
      {
        id: 'cancel', label: 'Flight cancelled', status: 'go', verdict: 'Compensation unless it told you early', sub: 'Cancellation under Turkish Airlines\' own notice',
        head: 'Cancel for a non-extraordinary reason and it assesses compensation, in Turkish Airlines products and services as well.',
        lines: [
          'The notice says compensation, which includes Turkish Airlines products and services, is assessed when a flight is cancelled for reasons other than extraordinary circumstances, <b>unless</b> you were told at least two weeks before; or told two weeks to seven days before and offered a re-routing that leaves no more than 2 hours earlier and arrives no more than 4 hours later; or told less than seven days before and offered one that leaves no more than 1 hour earlier and arrives no more than 2 hours later.',
          'It says offers can differ if the alternative flight arrives within 2 hours (1,500 km or less), 3 hours (1,500 to 3,500 km) or 4 hours (over 3,500 km) of the planned arrival.',
          '<b>The notice does not state a euro, dollar or lira amount.</b> It says the Turkish lira equivalent is worked out at the Central Bank of the Republic of Türkiye\'s selling rate on the date of payment.',
          'Tickets: you can change to another flight, or request a full refund, under certain rules (Flight Disruptions page). The notice describes a one-time free change within the ticket validity period, between 7 days before and 360 days after the flight date.',
          'For a ticket bought with miles it lists <b>3,000 miles</b> (0 to 1,500 km), <b>5,000 miles</b> (1,500 to 3,500 km) and <b>10,000 miles</b> (over 3,500 km).'
        ],
        sources: [PR, FD]
      },
      {
        id: 'denied', label: 'Denied boarding (overbooked)', status: 'go', verdict: 'Compensation assessed', sub: 'Overbooking',
        head: 'Turkish rules assess compensation for an overbooked flight; the notice names no amount, and DOT or Canadian rules set one on those routes.',
        lines: [
          'Its Turkish-rules notice says a passenger denied boarding because of overbooking is assessed compensation including products and services. It lists no amount. People refused for medical, safety, security or travel-document reasons are outside the scope.',
          'Downgrade: you are compensated with Turkish Airlines products and services in addition to the price difference.',
          'Leaving the US: DOT rules apply, volunteers are asked first and you get a written statement (US plan).',
          'To or from Canada, the Canadian page lists <b>CAD 900</b> (arrival delayed under 6 hours), <b>CAD 1,800</b> (6 to 9 hours) and <b>CAD 2,400</b> (9 hours or more), paid as soon as operationally feasible and within 48 hours, when the denial was in its control.'
        ],
        sources: [PR, CSP, CA]
      },
      {
        id: 'canada', label: 'Flight to or from Canada', status: 'go', verdict: 'CAD 400, 700 or 1,000', sub: 'Canadian rules on its page',
        head: 'For a delay or cancellation within its control, with 3 hours or more of arrival delay.',
        lines: [
          'If the cancellation or delay is within its control and you reach your destination 3 hours or more late, and you were not told 14 days or more before: <b>CAD 400</b> for an arrival 3 to 6 hours late, <b>CAD 700</b> for 6 to 9 hours, <b>CAD 1,000</b> for 9 hours or more. It is limited to CAD 400 when you take a refund instead of alternate travel.',
          'No compensation if the cause is outside its control (it names weather or natural disaster, political instability, strikes, ground problems), if the cancellation or delay results from safety requirements, if you were told 14 days or more before, or if you already got compensation under another regime for the same event.',
          'Claim within <b>one year</b> of the day your flight was delayed or cancelled.',
          'The page applies to flights operated by Turkish Airlines and AnadoluJet; for a codeshare, contact the airline that operated it.',
          'We did not read the page\'s care entitlements (food, hotel) for Canada.'
        ],
        sources: [CA]
      },
      {
        id: 'eu', label: 'Flight leaving an EU airport', status: 'warn', verdict: 'EU law: 250, 400 or 600 euros', sub: 'EU rules, not read on Turkish Airlines\' pages',
        head: 'EU rules apply to flights leaving the EU; we did not find a Turkish Airlines page for them.',
        lines: [
          'Under the EU rules (Your Europe), for a flight leaving an EU airport and an arrival 3 hours or more late for a cause within the airline\'s control: <b>250 euros</b> up to 1,500 km, <b>400 euros</b> for 1,500 to 3,500 km, <b>600 euros</b> for longer flights. Care and the refund or re-routing choice do not depend on the cause.',
          'We did not read a Turkish Airlines notice for EU departures, so we cannot say how it handles claims. Our EU261 guide explains the steps.'
        ],
        sources: [YEU]
      },
      {
        id: 'weather', label: 'Weather, security or a strike', status: 'stop', verdict: 'No compensation', sub: 'Extraordinary circumstances',
        head: 'Turkish rules assess no compensation for these; change and refund rights still apply.',
        lines: [
          'The notice says no compensation is assessed for irregularities caused by extraordinary situations: meteorological conditions, natural disasters, security risks, unexpected flight-safety deficiencies, strike, political instability.',
          'The Flight Disruptions page says that for extraordinary circumstances you can change to a different flight under certain rules (a fare difference may apply) or get a refund under certain fare rules, and that the entire ticket fee may not be refunded for a cancellation under an extraordinary circumstance.',
          'It lists pandemics, epidemics or diseases deemed an emergency, and weather or natural disasters that could endanger passengers, as examples.'
        ],
        sources: [PR, FD]
      },
      {
        id: 'bags', label: 'Bag delayed or lost', status: 'warn', verdict: 'Pays per international rules', sub: 'Baggage',
        head: 'Its US plan says it pays compensation for lost or delayed baggage as international agreements require.',
        lines: [
          'The US Customer Service Plan says that, as required by applicable international agreements, Turkish Airlines pays compensation for lost or delayed baggage.',
          'We did not read the baggage rules or amounts. Report the problem at the airport before you leave.'
        ],
        sources: [CSP]
      },
      {
        id: 'claim', label: 'How to claim', status: 'warn', verdict: 'Feedback form or call', sub: 'Claiming from Turkish Airlines',
        head: 'The notice points to the feedback form on its website and app, and to its call and WhatsApp number.',
        lines: [
          'The notice says to submit your feedback through the feedback form on turkishairlines.com or its mobile app, or through its listed channels. You can also fill in the form in the in-flight entertainment system during the flight.',
          'It lists <b>telephone/WhatsApp +90 850 333 0 849</b>, an address (Türk Hava Yolları Genel Yönetim Binası, Atatürk Havalimanı, Yeşilköy, 34149 İstanbul) and social media (@TK_HelpDesk).',
          'From the US, its US plan names the 24/7 call centre (800) 874-8875 for refund problems. The Get in Touch page says it follows the compensation claim procedures required by local and international rules.',
          'For Canada, claim within one year. We did not find a separate online compensation claim form on the pages we read.'
        ],
        sources: [PR, GIT, CSP]
      },
      {
        id: 'refused', label: 'Turkish Airlines said no', status: 'warn', verdict: 'Regulators named on its pages', sub: 'Complaint not resolved',
        head: 'Its pages name the Turkish aviation regulator, the Canadian Transportation Agency and DOT rules.',
        lines: [
          'The notice refers to the Turkish Directorate General of Civil Aviation (www.shgm.gov.tr) for further information on the Turkish rules.',
          'For Canada, the page refers you to the Canadian Transportation Agency\'s website.',
          'For the US, the plan says written complaints are acknowledged within 30 days and answered within 60 days under DOT regulations.',
          'Our EU261 and DOT guides explain how to escalate on those routes.'
        ],
        sources: [PR, CA, CSP]
      }
    ];

    out['turkish-airlines'] = {
      ttl: 'Turkish Airlines Compensation 2026: Delay, Cancelled, Overbooked',
      desc: 'What Turkish Airlines owes you for a delayed, cancelled or overbooked flight: its own Turkish-rules notice, US plan, Canada CAD amounts and EU departures, case by case.',
      h1: 'Turkish Airlines compensation: pick what happened',
      answer: 'Turkish Airlines gives care from a 2 hour delay under Turkish rules, assesses compensation (no amount stated) for a late cancellation or an overbooked flight, and on flights to or from Canada pays CAD 400, 700 or 1,000 for a delay or cancellation within its control. Flights leaving the EU fall under EU rules.',
      faq: [
        ['How much compensation does Turkish Airlines pay?', 'Its Turkish-rules notice states no amount. On Canada flights its page lists CAD 400, 700 or 1,000 for a delay or cancellation within its control, and CAD 900, 1,800 or 2,400 for denied boarding. For flights leaving the EU, EU law sets 250, 400 or 600 euros.'],
        ['Does Turkish Airlines pay compensation for a delay?', 'Its Turkish-rules notice gives meals, phone calls and a hotel for long delays and ticket rights, not cash. Cash for a delay applies on Canada flights (arrival 3 hours or more late) and flights leaving the EU.'],
        ['How do I claim from Turkish Airlines?', 'Use the feedback form on its website or app, or call. From the US its US plan names the 24/7 line (800) 874-8875 for refund problems.']
      ],
      render: a => render(a, SCEN, 'From Turkish Airlines\' own published notice, Flight Disruptions page, US Customer Service Plan and Canadian page, plus EU rules, read October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  return out;
};
