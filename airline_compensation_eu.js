// European airline Compensation pages (session 23, 2026-10-11). Same card format as airline_compensation.js (scenario chips + green/yellow/red verdict cards).
// Legal base (read 11 October 2026): Your Europe "Air passenger rights" (care thresholds 2/3/4 hours by distance, hotel when departure moves to the next day, 5 hours = reimbursement and return flight,
// downgrade 30/50/75%, baggage about 1,300 EUR, claim in writing within 7 days for damage and 21 days for delay), amounts 250/400/600 EUR, UK amounts 220/350/520 GBP (UK CAA, as in our EU261 article).
// Every airline's cards use THAT airline's own notice, conditions or help pages; shared legal numbers are the law, the wording and the case list differ per airline (no name-swap clones).
module.exports = function (render) {
  const out = {};
  const YEU = ['https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm', 'Your Europe: air passenger rights', 'EU rules, amounts, deadlines'];

  // ---------------- RYANAIR ----------------
  // Read: Ryanair "Notice of your rights" PDFs (EU V11, UK V15), help.ryanair.com EU261 pages (care entitlements, regulation, ADR, claims management companies).
  {
    const NOTICE = ['https://www.ryanair.com/content/dam/ryanair/help-centre-pdfs/eu261-en.pdf', 'Ryanair notice of your rights (EU)', 'Denied boarding, delay, cancellation'];
    const NOTICEUK = ['https://www.ryanair.com/content/dam/ryanair/help-centre-pdfs/eu261-notices-v15/EU261%20for%20United%20Kingdom%20-%20EN.pdf', 'Ryanair notice of your rights (UK)', 'Version for flights under UK rules'];
    const HELP = ['https://help.ryanair.com/hc/en-us/sections/12488602662545-EU-261-Passenger-Rights', 'Ryanair help centre: EU-261 passenger rights', 'Care, compensation, ADR'];
    const CARE = 'Care: meals and refreshment vouchers in reasonable relation to the waiting time, two phone calls or emails, and if the new departure is the next day or later, a hotel and transport between the airport and the hotel. Ryanair does not owe this if you choose a later re-routing or a refund.';

    const SCEN = [
      {
        id: 'delay', label: 'Flight delayed by Ryanair', status: 'go', verdict: '250 or 400 euros owed', sub: 'Arrival 3 hours or more late, cause within Ryanair\'s control', first: true,
        head: 'Ryanair\'s own notice: 250 euros up to 1,500 km, 400 euros for longer flights, plus care while you wait.',
        lines: [
          '<b>Compensation:</b> if you arrive 3 hours or more after the scheduled arrival time and no extraordinary circumstances apply: <b>250 euros</b> for flights of 1,500 km or less, <b>400 euros</b> for intra-EU flights over 1,500 km and other flights between 1,500 and 3,500 km.',
          CARE,
          'The care starts when Ryanair expects a delay of 2 hours or more on flights up to 1,500 km, or 3 hours or more on longer ones.',
          'If the delay reaches 5 hours and you decide not to travel, you get a refund of the ticket and a return flight to the first departure point.',
          'These rights apply to flights leaving an EU airport, or arriving in the EU from outside it (unless you already got benefits in that country).'
        ],
        sources: [NOTICEUK, HELP]
      },
      {
        id: 'delay-weather', label: 'Delay from weather, air traffic control or a strike', status: 'stop', verdict: 'No cash, care still owed', sub: 'Delay Ryanair says is an extraordinary circumstance',
        head: 'No compensation if Ryanair proves it, but meals and a hotel still apply.',
        lines: [
          'Ryanair\'s notice lists as extraordinary circumstances: political instability, safety and security reasons, weather disruption, labour disputes, and failure or delay of air traffic control facilities. It refuses compensation when it can prove the cause could not have been avoided with all reasonable measures.',
          'Its help centre says each disruption is evaluated case by case at flight level by its Operations team, and it only pays for disruptions it is responsible for.',
          'Care (meals, two calls, a hotel and transport if you are stuck overnight) is a separate right from compensation. Ryanair\'s help centre says you may still be entitled to expenses when compensation is not payable.',
          'Not every cause Ryanair names is accepted by the EU as extraordinary: our EU261 guide explains which ones the airline must prove.'
        ],
        sources: [NOTICE, HELP]
      },
      {
        id: 'cancel', label: 'Flight cancelled by Ryanair', status: 'go', verdict: '250 or 400 euros, or refund', sub: 'Cancellation with less than 14 days notice',
        head: 'Refund or re-routing, care, and cash if it told you late and no extraordinary circumstance applies.',
        lines: [
          'You choose: reimbursement of the full ticket within seven days, re-routing to your destination at the earliest opportunity, or re-routing at a later date at your convenience.',
          '<b>Compensation of 250 or 400 euros</b> unless: you were told at least two weeks before; or told 7 to 14 days before and offered a re-routing that departs no more than 2 hours earlier and arrives less than 4 hours later; or told less than 7 days before and offered one that departs no more than 1 hour earlier and arrives less than 2 hours later; or Ryanair proves extraordinary circumstances.',
          'If Ryanair offers a re-routing that arrives within 2 hours (flights up to 1,500 km) or 3 hours (longer ones) of the original arrival, the compensation can be reduced by 50%.',
          CARE
        ],
        sources: [NOTICEUK, NOTICE]
      },
      {
        id: 'cancel-weather', label: 'Cancelled for weather, air traffic control or a strike', status: 'stop', verdict: 'Refund yes, cash no', sub: 'Cancellation Ryanair says is extraordinary',
        head: 'You can still switch flights or get your money back, and care still applies.',
        lines: [
          'The right to reimbursement or re-routing does not depend on the cause: reimbursement within seven days, earliest re-routing, or a later date.',
          'Care while you wait (meals, two calls, hotel and transport when the next departure is the next day) still applies.',
          'Compensation is refused if Ryanair proves the cancellation was caused by extraordinary circumstances it could not have avoided.',
          'Ask for the written reasons and the evidence: the airline has to prove it, not you.'
        ],
        sources: [NOTICE, NOTICEUK]
      },
      {
        id: 'denied', label: 'Denied boarding', status: 'go', verdict: 'Cash and a choice owed', sub: 'Involuntary denied boarding',
        head: 'Ryanair says it does not overbook, but if you are bumped you get compensation, a choice and care.',
        lines: [
          'Ryanair\'s notice says that as a policy it does not overbook its flights. If a seat is not available, it asks for volunteers and agrees a benefit with them before denying boarding to anyone.',
          'If it denies boarding involuntarily and you checked in before the deadline: <b>250 or 400 euros</b> by distance (reduced by 50% if you are re-routed to arrive within 2 or 3 hours of the original arrival), plus reimbursement or re-routing and care.',
          'No compensation when Ryanair denies boarding for reasons in its terms, such as missing documents, or health, safety and security.',
          'Volunteers, whether voluntary or involuntary, still choose between reimbursement or re-routing.'
        ],
        sources: [NOTICE, NOTICEUK]
      },
      {
        id: 'expenses', label: 'I paid for food or a hotel myself', status: 'warn', verdict: 'Claim with receipts', sub: 'Care Ryanair did not provide',
        head: 'Ryanair reimburses reasonable receipted expenses when it could not arrange the care.',
        lines: [
          'The notice says that where it is not feasible for Ryanair to arrange the care, it reimburses reasonable receipted expenses on application.',
          'Compensation and expense requests are submitted and reviewed separately. Ryanair\'s help centre says you may be entitled to expenses even when compensation is not payable.',
          'Keep every receipt and note the time Ryanair told you about the delay or cancellation.',
        ],
        sources: [NOTICEUK, HELP]
      },
      {
        id: 'claim', label: 'How to claim', status: 'warn', verdict: 'Use the online form', sub: 'Claiming compensation from Ryanair',
        head: 'Ryanair asks valid claims to go directly through its compensation form.',
        lines: [
          'Ryanair says customers with valid passenger rights claims should submit them directly through its compensation form to receive 100% of their compensation.',
          'Expenses are a separate request: Ryanair says compensation and expense requests are submitted and reviewed separately.',
          'Keep your booking reference, boarding pass and the time you arrived.'
        ],
        sources: [HELP]
      },
      {
        id: 'claims-company', label: 'Using a claims company', status: 'warn', verdict: 'Ryanair says go direct', sub: 'Third-party claims firms',
        head: 'Ryanair warns that claims management companies take a cut of your compensation.',
        lines: [
          'Ryanair\'s help centre says claims management companies may deduct up to 50% in fees, and that claiming directly through its form means you receive 100% of your compensation entitlement.',
          'You are free to use one. Check the fee before you sign, and whether it is a share of the compensation or a flat fee.'
        ],
        sources: [HELP]
      },
      {
        id: 'rejected', label: 'Ryanair rejected my claim', status: 'warn', verdict: 'You can appeal', sub: 'Claim refused or no answer',
        head: 'Ask your local ADR body, or the national enforcement body, then the courts.',
        lines: [
          'Ryanair\'s help centre suggests contacting your local alternative dispute resolution (ADR) body, and claiming expenses separately if you did not.',
          'Each country has a national enforcement body for passenger rights. For flights under UK rules, Ryanair\'s UK notice names the Civil Aviation Authority\'s Passenger Complaints Unit.',
          'Time limits to go to court depend on national law, not on Ryanair.',
          'Our EU261 guide explains each step.'
        ],
        sources: [HELP, NOTICEUK, YEU]
      },
      {
        id: 'uk', label: 'Flight under UK rules', status: 'warn', verdict: 'Pounds, not euros', sub: 'Flight covered by UK261',
        head: 'UK261 pays 220, 350 or 520 pounds by distance, and Ryanair publishes a separate UK notice.',
        lines: [
          'UK261 amounts are 220 pounds up to 1,500 km, 350 pounds for 1,500 to 3,500 km and 520 pounds above that (UK Civil Aviation Authority).',
          'Ryanair publishes a separate UK version of its notice of rights (V15) and names the CAA\'s Passenger Complaints Unit as the enforcement body.',
          'EU rules and UK rules can both cover a flight in some cases; the law does not pay twice for the same trip.'
        ],
        sources: [NOTICEUK, YEU]
      },
      {
        id: 'bag', label: 'Bag delayed or damaged', status: 'warn', verdict: 'Written claim, short deadline', sub: 'Baggage problems (EU-wide rule)',
        head: 'Claim in writing: 7 days for damage, 21 days for delay. We did not read Ryanair\'s own baggage claim page.',
        lines: [
          'EU rules: the airline is liable for lost, damaged or delayed checked baggage up to roughly 1,300 euros (Your Europe).',
          'Complain in writing within 7 days for damage, or within 21 days of receiving the bag if it was delayed. There is no EU-wide form.',
          'Ryanair\'s own steps are on its help centre; we did not read them, so follow them and keep receipts.'
        ],
        sources: [YEU]
      }
    ];

    out['ryanair'] = {
      ttl: 'Ryanair Compensation 2026: Delay, Cancelled, Denied Boarding',
      desc: 'What Ryanair owes you for a delayed, cancelled or overbooked flight under EU261 and UK261: 250 or 400 euros, care, refund and how to claim, case by case.',
      h1: 'Ryanair compensation: pick what happened',
      answer: 'Under EU261, Ryanair owes 250 euros (up to 1,500 km) or 400 euros (longer) for an arrival delay of 3 hours or more, a cancellation told late, or involuntary denied boarding, unless it proves extraordinary circumstances. Meals, a hotel and a refund or re-routing apply even then.',
      faq: [
        ['How much compensation does Ryanair pay for a delayed flight?', 'Ryanair\'s notice says 250 euros for flights of 1,500 km or less and 400 euros for longer intra-EU flights and other flights up to 3,500 km, when you arrive 3 hours or more late and no extraordinary circumstances apply. UK flights pay 220 to 350 pounds.'],
        ['Does Ryanair pay when the delay is caused by weather or a strike?', 'Not compensation, if Ryanair proves the cause was extraordinary and unavoidable. Care (meals, hotel if overnight) and the right to a refund or re-routing still apply.'],
        ['How do I claim from Ryanair?', 'Ryanair asks you to claim directly through its online compensation form, and to submit expenses through a separate request. If it refuses you can go to your local ADR body.']
      ],
      render: a => render(a, SCEN, 'From Ryanair\'s own published notice and help centre, and EU rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  // ---------------- EASYJET ----------------
  // Read directly on easyjet.com/en/help/boarding-and-flying/delays-and-cancellations (cancelled, delayed, overnight, diverted flights, expenses, claiming compensation).
  {
    const EJ = ['https://www.easyjet.com/en/help/boarding-and-flying/delays-and-cancellations', 'easyJet: delays and cancellations', 'Vouchers, hotels, refunds, expenses'];
    const UKCAA = ['https://www.caa.co.uk/air-passengers/travel-problems-and-rights/flight-delays-and-cancellations/denied-boarding/', 'UK Civil Aviation Authority: denied boarding', 'UK261 amounts'];
    const RECEIPTS = 'easyJet only accepts itemised receipts or invoices on headed paper as proof; it does not accept credit card receipts. Ask for the VAT invoice.';

    const SCEN = [
      {
        id: 'delay', label: 'Flight delayed', status: 'go', verdict: 'Voucher, hotel and maybe cash', sub: 'easyJet flight delayed at departure', first: true,
        head: 'A GBP 6 or EUR 9 refreshment voucher after 2 or 3 hours, a hotel if the delay runs overnight.',
        lines: [
          '<b>Refreshment voucher</b> worth GBP 6 or EUR 9 if the delay is 2 hours (flights up to 1,500 km, like London to Zurich) or 3 hours (longer flights, like London to Dubrovnik). If easyJet cannot give vouchers, it reimburses up to the same amount against receipts.',
          '<b>Overnight delay:</b> easyJet\'s Ground Crew arranges a hotel and transport where possible, an evening meal (no alcohol) and breakfast. If the hotel cannot feed you, easyJet reimburses up to GBP 25 per person per day (EUR or CHF equivalent).',
          'Prefer your own accommodation? easyJet may reimburse reasonable transport such as public transport or a shared taxi to a local address.',
          '<b>Compensation:</b> if you arrive more than 3 hours late, you may be able to claim EC261 compensation, unless the cause is an extraordinary circumstance.',
          'If you book and pay for a hotel separately when easyJet could have provided one free, it will not reimburse you.'
        ],
        sources: [EJ, YEU]
      },
      {
        id: 'delay5', label: 'Delay of more than 5 hours', status: 'go', verdict: 'Refund or later flight', sub: 'Long delay at departure',
        head: 'After 5 hours you can change to a later flight or cancel for a full refund.',
        lines: [
          'easyJet says that if the delay is longer than 5 hours you can change your flight to a later date, subject to seats, or cancel the delayed flight and apply for a full refund.',
          'To change or cancel, speak to the Ground Crew at the airport.',
          'The EU rules add a return flight to your first departure point when you are refunded for a delay of 5 hours or more (Your Europe).',
          'The voucher or refund choice ends your accommodation and expenses claims, because you are no longer travelling with easyJet; compensation is a separate right.'
        ],
        sources: [EJ, YEU]
      },
      {
        id: 'cancel', label: 'Flight cancelled', status: 'go', verdict: 'Three free choices', sub: 'Flight cancelled by easyJet',
        head: 'A free switch, a 12-month voucher for the full booking value, or a refund within 7 days.',
        lines: [
          '<b>Switch</b> to another easyJet flight for free through Manage Bookings, including nearby airports in the same country or indirect flights, with the same checked luggage allowance. You can only pick flights to or from the same countries you booked.',
          '<b>Voucher</b> for the full value of your booking, valid 12 months, usable anywhere on the network, requested in Manage Bookings.',
          '<b>Refund</b> of the full booking value to the account you paid with. easyJet says it processes refund requests within 7 days, and they may take a few extra days to reach your bank.',
          'Next flight not until tomorrow: a hotel room if you need one, requested after you transfer to a new flight. easyJet tries to get you to your destination within 24 hours of the original flight.',
          'Cancelled less than 14 days before departure: you may also claim EC261 compensation, unless an extraordinary circumstance caused it.'
        ],
        sources: [EJ, YEU]
      },
      {
        id: 'weather', label: 'Cancelled or delayed for weather or an ATC strike', status: 'stop', verdict: 'No cash compensation', sub: 'Extraordinary circumstance',
        head: 'easyJet says weather or an air traffic control strike means no EC261 compensation.',
        lines: [
          'If the cause is an extraordinary circumstance, like an air traffic control strike or bad weather, easyJet says you are not entitled to EC261 flight compensation.',
          'You still get the practical options: a free switch, voucher or refund for a cancellation, the refreshment vouchers for a delay, and a hotel if the next flight is tomorrow.',
          'The airline has to prove the extraordinary circumstance and that it could not have been avoided.'
        ],
        sources: [EJ, YEU]
      },
      {
        id: 'expenses', label: 'I had to pay for things myself', status: 'warn', verdict: 'Claim with proper receipts', sub: 'Expenses easyJet did not provide',
        head: 'easyJet reimburses standard, reasonable costs and refuses others.',
        lines: [
          'easyJet reimburses standard-class or shared transport, a 3-star or equivalent hotel (it names Premier Inn, Ibis, Holiday Inn, Hotel Formule 1, Travelodge, Motel One) and reasonable food and drink, not alcohol.',
          RECEIPTS,
          'Not covered: pre-booked hotel stays, airport parking, car hire and missed activities or excursions. Travel insurance may cover those.',
          'If you booked and paid for a hotel or transport yourself when easyJet could have provided it free, it will not reimburse you.',
          'Claim on its expenses page.'
        ],
        sources: [EJ]
      },
      {
        id: 'transport', label: 'easyJet could not get me there', status: 'warn', verdict: 'Alternative transport', sub: 'Cancelled flight, own arrangements',
        head: 'easyJet reimburses trains, buses or taxis, but you cannot also claim the refund.',
        lines: [
          'easyJet tries to get you to your final destination on an easyJet flight within 24 hours of your original flight. If it cannot, you may be asked to arrange your own transport under comparable conditions (economy or standard fare) and claim reasonable costs back.',
          'It does not reimburse unreasonable costs such as private limousines.',
          'You cannot claim both a refund for your flight and re-routing on alternative transport.',
          'Keep detailed itemised receipts.'
        ],
        sources: [EJ]
      },
      {
        id: 'diverted', label: 'Flight diverted', status: 'warn', verdict: 'Costs reimbursed', sub: 'Aircraft diverted to another airport',
        head: 'The Ground Crew arranges onward travel, or you are reimbursed for trains, buses and taxis.',
        lines: [
          'easyJet says its Ground Crew keeps you up to date with alternative travel and does all it can to get you to your final destination.',
          'If it cannot arrange a transfer, you may be asked to make your own arrangements. It reimburses trains, buses or taxis, but not unreasonable costs like private limousines.'
        ],
        sources: [EJ]
      },
      {
        id: 'denied', label: 'Denied boarding', status: 'go', verdict: 'Cash may be owed', sub: 'Involuntary denied boarding',
        head: 'easyJet lists denied boarding as a case for EC261 compensation.',
        lines: [
          'If you are involuntarily denied boarding you may be able to claim EC261 compensation.',
          'Amounts under the law: 250 euros up to 1,500 km, 400 euros for 1,500 to 3,500 km and intra-EU flights over 1,500 km, 600 euros above 3,500 km. UK261: 220, 350 or 520 pounds.',
          'You must apply directly to easyJet to receive it.'
        ],
        sources: [EJ, YEU, UKCAA]
      },
      {
        id: 'claim', label: 'How to claim compensation', status: 'warn', verdict: 'Apply to easyJet directly', sub: 'EC261 claims',
        head: 'More than 3 hours late, cancelled within 14 days, or denied boarding.',
        lines: [
          'easyJet\'s page says you may be able to claim EC261 compensation if your flight arrives more than three hours after the scheduled time, is cancelled within 14 days of departure, or you are involuntarily denied boarding.',
          'It says you must apply directly to easyJet. Expense claims go on its separate expenses page.',
          'No compensation if an extraordinary circumstance caused it.',
          'We did not read easyJet\'s appeal steps. If it refuses, go to the national enforcement body (the UK CAA for UK flights) or an ADR scheme; see our EU261 guide.'
        ],
        sources: [EJ, YEU]
      },
      {
        id: 'agent', label: 'I booked through a travel agent', status: 'warn', verdict: 'Agent or easyJet', sub: 'Booking through a tour operator or agent',
        head: 'Your agent can help, or you can manage the easyJet flights yourself.',
        lines: [
          'If you booked through a tour operator or travel agent, they can help with your travel plans. You can also manage your easyJet flights directly in Manage Bookings.',
          'If your agent cannot help, contact easyJet Customer Services.',
          'Tell your agent about any change you make.'
        ],
        sources: [EJ]
      },
      {
        id: 'uk', label: 'UK flight (pounds)', status: 'warn', verdict: 'UK261 amounts', sub: 'Flights covered by UK law',
        head: '220, 350 or 520 pounds by distance.',
        lines: [
          'UK261 pays 220 pounds up to 1,500 km, 350 pounds for 1,500 to 3,500 km and 520 pounds over 3,500 km (UK Civil Aviation Authority).',
          'easyJet quotes its vouchers in pounds or euros (GBP 6 or EUR 9; GBP 25 a day), depending on where your flight started.'
        ],
        sources: [UKCAA, EJ]
      }
    ];

    out['easyjet'] = {
      ttl: 'easyJet Compensation 2026: Delay, Cancelled, Vouchers, Refund',
      desc: 'What easyJet gives you for a delayed or cancelled flight: GBP 6 or EUR 9 vouchers, hotel, 12-month voucher or refund, EC261 and UK261 compensation, case by case.',
      h1: 'easyJet compensation: pick what happened',
      answer: 'easyJet gives a GBP 6 or EUR 9 voucher after 2 or 3 hours, a hotel if the delay runs overnight, a free switch, a 12-month voucher or a refund if it cancels, and EC261 or UK261 compensation if you arrive more than 3 hours late and no extraordinary circumstance applies.',
      faq: [
        ['What does easyJet give you for a delayed flight?', 'A refreshment voucher worth GBP 6 or EUR 9 after a 2 hour delay on flights up to 1,500 km or 3 hours on longer ones, and a hotel and meals if the delay runs overnight. You may also claim EC261 compensation if you arrive more than 3 hours late and no extraordinary circumstance applies.'],
        ['Can I get a refund if easyJet cancels my flight?', 'Yes. easyJet offers a free switch, a voucher for the full booking value valid 12 months, or a refund to the account you paid with, which it says it processes within 7 days. Choosing a voucher or refund ends your claim for accommodation and expenses.'],
        ['What expenses does easyJet reimburse?', 'Standard-class transport, a 3-star or equivalent hotel and reasonable food and drink, with itemised receipts on headed paper. It does not accept credit card receipts, and does not cover pre-booked hotels, parking, car hire or missed excursions.']
      ],
      render: a => render(a, SCEN, 'From easyJet\'s own published delays and cancellations page, and EU and UK rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  // ---------------- LUFTHANSA ----------------
  // Read directly on lufthansa.com/us/en: "Flights delayed and cancelled at short notice" (flight-disruptions) and "Passenger rights" (passenger-rights); the compensation form page (fast-compensation) is only a booking-entry form.
  {
    const LHD = ['https://www.lufthansa.com/us/en/flight-disruptions', 'Lufthansa: flights delayed and cancelled at short notice', 'Rebooking, meal voucher, hotel, refund, Good for Train'];
    const LHR = ['https://www.lufthansa.com/us/en/passenger-rights', 'Lufthansa: passenger rights', 'Compensation amounts, delay, cancellation, overbooking'];
    const LHF = ['https://www.lufthansa.com/us/en/fast-compensation', 'Lufthansa: compensation and reimbursement form', 'Start a claim with your booking details'];

    const SCEN = [
      {
        id: 'delay', label: 'Flight delayed 2 hours or more', status: 'go', verdict: 'Meal voucher on your boarding pass', sub: 'Delay at departure', first: true,
        head: 'The voucher links to the QR code on your boarding pass, and a hotel is arranged if it runs overnight.',
        lines: [
          '<b>Meal voucher</b> if your flight is delayed for two hours or more, cancelled, or you are denied boarding. It is linked automatically to the QR code on the boarding pass of the affected flight, you no longer need to visit the service counter, and you can redeem it in participating airport restaurants.',
          'Lufthansa tells you about the voucher and its value by email, text message or push notification in the app. Only the boarding pass of the affected flight is valid as the voucher.',
          '<b>Overnight:</b> if your departure is postponed to the next day, Lufthansa arranges a hotel. You can instead book one yourself and submit the hotel, transfer and meal costs for reimbursement.',
          'The rights apply by distance: delay of 2 hours or more up to 1,500 km, 3 hours for longer flights within the EU and between 1,500 and 3,500 km, 4 hours for the rest. No care if you caused a further delay yourself.'
        ],
        sources: [LHD, LHR]
      },
      {
        id: 'delay3', label: 'I arrived more than 3 hours late', status: 'go', verdict: '250, 400 or 600 euros', sub: 'Arrival delay at your destination',
        head: 'Lufthansa says compensation is owed when you reach your destination more than 3 hours late.',
        lines: [
          'Compensation if your arrival at the destination airport is delayed by more than three hours and the cause is not an extraordinary circumstance.',
          'Amounts: <b>250 euros</b> up to 1,500 km, <b>400 euros</b> between 1,500 and 3,500 km and for flights over 1,500 km within Europe, <b>600 euros</b> over 3,500 km.',
          'Start the claim on Lufthansa\'s compensation and reimbursement form with the booking details of the affected flight.',
          'Poor weather, political instability, strikes, security risks and unexpected flight-safety deficiencies are what Lufthansa lists as extraordinary.'
        ],
        sources: [LHR, LHF]
      },
      {
        id: 'delay5', label: 'Delay of more than 5 hours', status: 'go', verdict: 'Refund in 7 days', sub: 'Very long delay at departure',
        head: 'A refund within seven days and a return flight if you decide not to travel.',
        lines: [
          'For delays of more than five hours you are entitled, within seven days, to a refund of the ticket price for the part not taken, or the part already taken if the purpose of the trip could not be achieved, and a return flight to the first departure point at the earliest time where applicable.',
          'Request the refund in the Help Center or the Chat Assistant; Lufthansa says to check your refund amount and process it there, and not to request it again by phone or email afterwards.',
          'Unused ticket: the price including taxes and fees goes back to the original method of payment. Part used: the unused part is refunded pro rata.'
        ],
        sources: [LHR, LHD]
      },
      {
        id: 'cancel', label: 'Flight cancelled at short notice', status: 'go', verdict: 'Rebooked, train or refund', sub: 'Cancellation by Lufthansa',
        head: 'Lufthansa rebooks you automatically, or converts your ticket to a train.',
        lines: [
          'Lufthansa informs you by email, text or the app and rebooks you automatically if needed. Not suitable? Rebook free of charge in the Chat Assistant or My bookings.',
          'If no suitable alternative flight exists, on certain routes your ticket can be converted into a Deutsche Bahn rail ticket (Good for Train).',
          'Rebooked: Lufthansa arranges your baggage transfer. Train or bus after a short-notice cancellation: it tries to arrange a fast baggage reclaim.',
          'You have the same rights to re-routing, assistance, reimbursement and compensation as for a delay. No compensation if told at least 14 days before departure, or 7 to 14 days before with a re-routing departing no more than 2 hours earlier and arriving no more than 4 hours later, or an extraordinary circumstance applies.'
        ],
        sources: [LHD, LHR]
      },
      {
        id: 'train', label: 'Lufthansa offered me a train', status: 'warn', verdict: 'Check the route and timing', sub: 'Good for Train (Deutsche Bahn)',
        head: 'A free rail ticket on certain routes, but leave time for your connecting flight.',
        lines: [
          'Good for Train applies to flights within Germany and between Germany and Amsterdam, Brussels, Luxembourg, Paris, Basel, Geneva, Zurich, Salzburg, Vienna, Innsbruck, Linz, Graz, Budapest, Prague and Warsaw.',
          'Eligible passengers are identified automatically up to five days before departure and notified by email. After a cancellation you can also request and redeem the voucher manually at any time.',
          'Cancelled feeder flight: choose a train that leaves enough time to catch your connecting flight from Frankfurt or Munich.',
          'For transfer connections, check in for the train connection too, even if you travel to Frankfurt or Munich another way.'
        ],
        sources: [LHD]
      },
      {
        id: 'weather', label: 'Weather, a strike or air traffic control', status: 'stop', verdict: 'No cash compensation', sub: 'Extraordinary circumstances',
        head: 'Lufthansa lists weather, political instability, third-party strikes, security risks and unexpected safety shortcomings.',
        lines: [
          'You are not entitled to compensation if the incident can be attributed to extraordinary circumstances that could not have been avoided even with all reasonable measures.',
          'Care still applies: meal voucher for a delay of two hours or more or a cancellation, and an overnight hotel if departure is postponed to the next day.',
          'Re-routing, a refund or a later flight stay available for a cancellation.',
          'The airline has to prove the link. Strikes by Lufthansa\'s own staff are not the same as strikes by third parties.'
        ],
        sources: [LHR, LHD]
      },
      {
        id: 'denied', label: 'Denied boarding', status: 'go', verdict: 'Re-routing and cash', sub: 'Overbooked flight',
        head: 'Assistance, re-routing and compensation of 250, 400 or 600 euros.',
        lines: [
          'If you are involuntarily denied boarding, you get the same assistance as for a delay and are offered re-routing to your final destination at the earliest opportunity under comparable conditions, or a later flight of your choice (then meals, hotel and transfers are at your expense).',
          'Amounts: 250 euros up to 1,500 km, 400 euros for 1,500 to 3,500 km and longer flights within Europe, 600 euros over 3,500 km. It can be paid by cheque or bank transfer.',
          'If you are offered a flight arriving no more than 2, 3 or 4 hours after the original arrival time (by distance), the compensation is only 50%: 125, 200 or 300 euros.',
          'No compensation if you are denied boarding for health or safety reasons or missing travel documents.'
        ],
        sources: [LHR]
      },
      {
        id: 'hotel', label: 'I booked my own hotel', status: 'warn', verdict: 'Claim with receipts', sub: 'Overnight stay you arranged',
        head: 'Submit receipts, your boarding pass and your bank details through the feedback form.',
        lines: [
          'If your departure is postponed to the next day you can book a hotel yourself and submit the costs for the overnight stay, transport between the airport and the hotel and meals.',
          'Lufthansa says you must provide the receipts, your boarding pass and your bank details (IBAN and BIC) using its feedback form.',
          'Check first whether Lufthansa has already sent you a hotel by email or text.',
          'Lufthansa assumes the costs under the conditions on its page; we did not read all of them, so confirm before you pay for something expensive.'
        ],
        sources: [LHD]
      },
      {
        id: 'refund', label: 'I want my money back', status: 'go', verdict: 'Refund owed', sub: 'Changed or cancelled flight',
        head: 'The ticket price including taxes and fees, to your original payment method.',
        lines: [
          'Use the Help Center or the Chat Assistant: it shows your refund amount and processes it. A manual refund request is also possible.',
          'Do not request it again if you already asked by phone or email, as that may delay the refund.',
          'If you booked through a tour operator or travel agency, contact them directly.',
          'A used ticket is refunded pro rata for the unused part.'
        ],
        sources: [LHD, LHR]
      },
      {
        id: 'bag', label: 'Bag delayed or damaged', status: 'warn', verdict: 'See its baggage page', sub: 'Baggage problems',
        head: 'Lufthansa points to a separate page for damage claims and delayed items.',
        lines: [
          'Lufthansa says its passenger rights cover compensation if your baggage arrived late, and links a "Problems with baggage" page for damage compensation and delayed items. We did not read that page.',
          'Under EU rules, claim in writing within 7 days for damage or 21 days of receiving a delayed bag, up to about 1,300 euros (Your Europe).'
        ],
        sources: [LHD, YEU]
      }
    ];

    out['lufthansa'] = {
      ttl: 'Lufthansa Compensation 2026: Delay, Cancelled, Meal Voucher',
      desc: 'What Lufthansa owes you for a delayed or cancelled flight: boarding-pass meal voucher, hotel, refund, Good for Train and EU261 compensation of 250, 400 or 600 euros.',
      h1: 'Lufthansa compensation: pick what happened',
      answer: 'Lufthansa gives a meal voucher on your boarding pass after a 2 hour delay, arranges a hotel if you leave the next day, refunds you within 7 days after a 5 hour delay, and owes 250, 400 or 600 euros if you arrive more than 3 hours late and no extraordinary circumstance applies.',
      faq: [
        ['What does Lufthansa give you for a flight delay?', 'A meal voucher linked to the QR code on your boarding pass if the delay is two hours or more, a hotel arranged by Lufthansa if departure is postponed to the next day, and compensation of 250, 400 or 600 euros if you arrive more than three hours late and no extraordinary circumstance applies.'],
        ['What is Lufthansa Good for Train?', 'If a Lufthansa flight is cancelled at short notice and no suitable alternative exists, your flight ticket can be converted into a Deutsche Bahn rail ticket on certain routes in Germany and to cities such as Amsterdam, Paris, Zurich and Vienna.'],
        ['How do I claim compensation from Lufthansa?', 'Through Lufthansa\'s online compensation and reimbursement form, entering the booking details of the affected flight. Refunds of the ticket go through the Help Center or the Chat Assistant.']
      ],
      render: a => render(a, SCEN, 'From Lufthansa\'s own published pages, and EU rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  // ---------------- BRITISH AIRWAYS ----------------
  // Read directly on britishairways.com: "Delays, cancellations and refunds" (content/information/delayed-or-cancelled-flights) and "Flight cancellation compensation" (content/information/legal/flight-cancellation-compensation).
  {
    const BAD = ['https://www.britishairways.com/content/information/delayed-or-cancelled-flights', 'British Airways: delays, cancellations and refunds', 'Vouchers, rebooking, expenses, connections'];
    const BAL = ['https://www.britishairways.com/content/information/legal/flight-cancellation-compensation', 'British Airways: flight cancellation compensation', 'Amounts in euros and pounds, CEDR'];

    const SCEN = [
      {
        id: 'delay', label: 'Flight delayed', status: 'go', verdict: 'Vouchers, then maybe cash', sub: 'BA flight delayed at departure', first: true,
        head: 'Refreshment vouchers after 2 hours, possible compensation after 3, a refund after 5.',
        lines: [
          'Delayed longer than 2 hours: BA aims to provide refreshment vouchers. If it cannot, it reimburses reasonable expenses, excluding alcohol.',
          'Delayed more than 3 hours at your final destination: you may claim compensation if the delay arises from causes within BA\'s control. <b>EUR 250 / GBP 220</b> up to 1,500 km, <b>EUR 400 / GBP 350</b> between 1,500 and 3,500 km, <b>EUR 600 / GBP 520</b> for longer flights.',
          'Delayed longer than 5 hours and you no longer wish to travel: you may claim a refund.',
          'BA asks you to head to the airport before your original departure time if your flight is delayed, and to keep your contact details current in Manage My Booking.'
        ],
        sources: [BAD, BAL]
      },
      {
        id: 'cancel', label: 'Flight cancelled', status: 'go', verdict: 'Rebooked free or refunded', sub: 'Cancellation by British Airways',
        head: 'The next BA flight at no charge, other airlines or transport if needed, or a refund.',
        lines: [
          'BA rebooks you on the next available British Airways flight free of charge. You can call BA about being put on another airline, or about alternative transport if it cannot offer a suitable alternative within 24 hours.',
          'You can request a refund. If the next flight is not until the next day, BA offers overnight accommodation at a hotel.',
          'If your flight is subject to the United States Department of Transportation regulations, you are entitled to a cash refund.',
          '<b>Compensation:</b> if you were told less than 14 days before departure and the cause was within BA\'s control, unless you were offered a re-route that departs and arrives close to your original times (13 to 7 days notice: no more than 2 hours earlier and arrive less than 4 hours later; less than 7 days: no more than 1 hour earlier and arrive less than 2 hours later).',
          'Compensation is reduced by 50% if the re-routing arrives within 2 hours of the original arrival (up to 1,500 km), 3 hours (1,500 to 3,500 km) or 4 hours (longer).'
        ],
        sources: [BAD, BAL]
      },
      {
        id: 'weather', label: 'Weather, air traffic control or a security issue', status: 'stop', verdict: 'No cash compensation', sub: 'Extraordinary circumstances',
        head: 'BA lists air traffic control decisions, political instability, bad weather and security risks.',
        lines: [
          'If your journey was affected by extraordinary circumstances such as air traffic control decisions, political instability, adverse weather or security risks, BA says you may not be able to claim compensation.',
          'Compensation applies only to delays and cancellations that arise from causes within BA\'s control, not extraordinary circumstances that all reasonable measures could not have avoided.',
          'Vouchers or reasonable expenses, a free rebooking and overnight accommodation (if the next flight is tomorrow) still apply.'
        ],
        sources: [BAL, BAD]
      },
      {
        id: 'expenses', label: 'I paid for things myself', status: 'warn', verdict: 'Claim reasonable expenses', sub: 'Expenses after a delay or cancellation',
        head: 'BA will consider hotel, transport, alternative transport, food and two calls.',
        lines: [
          'BA will consider reimbursing: hotel accommodation (where necessary); transport between hotel or home and the airport (where necessary); alternative transport such as a flight, train or bus under comparable conditions if BA cannot offer a suitable alternative; reasonable food and drink, excluding alcohol; and two phone calls or internet costs.',
          'It does not cover consequential losses, such as missed hotel stays or car rental.',
          'The quickest way is online. You need the names of all passengers, details of all delayed or cancelled flights and of your expenses, receipts or documents (scans or photos are fine) and your bank account details.',
          'It says the form takes about 10 to 15 minutes.'
        ],
        sources: [BAD]
      },
      {
        id: 'connection', label: 'I have a connecting flight', status: 'go', verdict: 'BA rebooks you', sub: 'Delay or missed connection on one booking',
        head: 'BA rebooks connections automatically and the oneworld team helps at key airports.',
        lines: [
          'If the flight from your origin is delayed within 3 hours before departure, BA automatically rebooks your BA-operated connecting flight to give you more time. Mind the minimum connection times.',
          'If you miss your connecting flight, BA automatically rebooks you on the next available British Airways flight or a partner airline flight.',
          'The oneworld Global Support teams at key airports can help with travel information, new boarding passes and, if required, overnight accommodation.',
          'A long delay at your final destination can also earn compensation: see the delay card.'
        ],
        sources: [BAD]
      },
      {
        id: 'denied', label: 'Denied boarding or put in a lower class', status: 'go', verdict: 'Cash or a ticket percentage', sub: 'Overbooking or a downgrade',
        head: 'Compensation, re-routing and assistance if denied boarding; 30%, 50% or 75% back if downgraded.',
        lines: [
          'Involuntarily denied boarding with a confirmed reservation: reimbursement or re-routing and assistance, and compensation at EUR 250 / GBP 220, EUR 400 / GBP 350 or EUR 600 / GBP 520 by distance. This does not apply where BA has grounds under its General Conditions of Carriage.',
          'Involuntarily placed in a lower class: 30% of the ticket price for flights up to 1,500 km; 50% for flights within the EU over 1,500 km and others between 1,500 and 3,500 km; 75% for all other flights. The ticket price excludes taxes and charges.',
          'You need a confirmed reservation and a paper or e-ticket itinerary receipt.'
        ],
        sources: [BAL]
      },
      {
        id: 'refund', label: 'I booked through a travel agent', status: 'warn', verdict: 'Ask the agent first', sub: 'Agent or tour operator booking',
        head: 'Your agent handles options and refunds; BA helps if the agent cannot.',
        lines: [
          'If you booked through a travel agent or a tour operator, BA says to contact them directly to discuss your options or request a refund.',
          'If you need further help obtaining a refund from your agent or tour operator, contact BA directly.',
          'BA notifies you of a cancellation via the contact details given by the passenger, the ticket purchaser or the agent.'
        ],
        sources: [BAD, BAL]
      },
      {
        id: 'appeal', label: 'BA refused my claim', status: 'warn', verdict: 'CEDR within 12 months', sub: 'Complaint not resolved',
        head: 'Refer it to the Centre for Effective Dispute Resolution.',
        lines: [
          'If you are unhappy with BA\'s response to your complaint, you can refer it to CEDR, approved by the UK Civil Aviation Authority to provide an independent resolution service for airline complaints. You must do so within 12 months.',
          'CEDR advises whether your complaint falls within its scope.',
          'You can alternatively use the European Commission\'s online dispute resolution platform. Contact details for your National Enforcement Body are on BA\'s page.'
        ],
        sources: [BAL]
      }
    ];

    out['british-airways'] = {
      ttl: 'British Airways Compensation 2026: Delay, Cancelled, UK261',
      desc: 'What British Airways owes you for a delayed or cancelled flight: vouchers, hotel, refund, EUR 250/400/600 or GBP 220/350/520 compensation and how to complain, case by case.',
      h1: 'British Airways compensation: pick what happened',
      answer: 'British Airways aims to give refreshment vouchers after a 2 hour delay, rebooks or refunds a cancelled flight and offers a hotel if the next flight is tomorrow, and pays EUR 250 / GBP 220, EUR 400 / GBP 350 or EUR 600 / GBP 520 when a delay of more than 3 hours or a late cancellation is within its control.',
      faq: [
        ['How much compensation does British Airways pay?', 'EUR 250 / GBP 220 for flights of 1,500 km or less, EUR 400 / GBP 350 between 1,500 and 3,500 km and EUR 600 / GBP 520 for longer flights, for a delay of more than three hours or a cancellation told less than 14 days before departure, when the cause is within BA\'s control.'],
        ['What does British Airways give me when my flight is delayed?', 'It aims to provide refreshment vouchers if the delay is longer than 2 hours and otherwise reimburses reasonable expenses, excluding alcohol. After 5 hours you may claim a refund if you no longer wish to travel.'],
        ['What if British Airways rejects my claim?', 'You can refer the complaint to CEDR within 12 months, or use the European Commission\'s online dispute resolution platform.']
      ],
      render: a => render(a, SCEN, 'From British Airways\' own published pages, and UK and EU rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  return out;
};
