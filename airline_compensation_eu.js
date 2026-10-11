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

  // ---------------- AIR FRANCE ----------------
  // Read directly on wwws.airfrance.us/information/legal/assistance-et-indemnisation ("Passengers rights": cancellation, delay, denied boarding, downgrading, claims, national bodies).
  {
    const AF = ['https://wwws.airfrance.us/information/legal/assistance-et-indemnisation', 'Air France: passengers rights', 'Assistance, vouchers and cash compensation'];
    const VOUCHER = '<b>Voucher or cash, your choice:</b> non-refundable transportation credit voucher of <b>350 euros</b> (flights up to 1,500 km), <b>500 euros</b> (within the EU over 1,500 km and other flights between 1,500 and 3,500 km) or <b>800 euros</b> (all other flights); or cash of <b>250, 400 or 600 euros</b>.';
    const CARE = 'Free: meals and refreshments in reasonable relation to the waiting time, a hotel if an overnight stay or an extra stay becomes necessary (transport included), and one prepaid phone card or the cost of two calls of up to 5 minutes each, or two faxes or emails.';

    const SCEN = [
      {
        id: 'delay', label: 'Flight delayed 2 hours or more', status: 'go', verdict: 'Meals, hotel and phone', sub: 'Delay beyond the scheduled departure', first: true,
        head: 'Air France offers care free of charge from a 2 hour delay.',
        lines: [
          CARE,
          'The assistance applies if the flight is delayed beyond its scheduled departure time for 2 hours or more.',
          'Delayed by at least 5 hours and you do not want to continue: a refund for the unused and the completed segments, and if applicable rerouting at Air France\'s expense to your departure point.',
          'These rights apply to flights departing from an EU airport. From a non-EU airport they apply only on an EU carrier arriving in the EU, and only if no local regulation applies.'
        ],
        sources: [AF]
      },
      {
        id: 'late', label: 'I arrived 3 hours or more late', status: 'go', verdict: 'Voucher or cash owed', sub: 'Arrival delay at the final destination',
        head: 'Cash of 250, 400 or 600 euros, or a larger non-refundable voucher.',
        lines: [
          'Owed if you arrive 3 hours or more after the scheduled arrival time, except when the delay is caused by extraordinary circumstances that could not have been anticipated and the airline took all reasonable measures.',
          VOUCHER,
          'The compensation cannot be paid at the airport: contact the customer service team.',
          'For flights of 3,500 km and more, the amount can be reduced by 50% if you landed 3 to 4 hours late.'
        ],
        sources: [AF, YEU]
      },
      {
        id: 'cancel', label: 'Flight cancelled', status: 'go', verdict: 'Reroute or refund, and maybe cash', sub: 'Cancellation by Air France',
        head: 'You choose reroute or refund, with care, and compensation unless an exception applies.',
        lines: [
          'You may choose to be rerouted to your final destination under comparable conditions as soon as possible, or at a later date at your convenience subject to seats, or to obtain a refund for the unused and the completed segments if you return to your departure point.',
          CARE,
          'Compensation is owed unless: it is caused by unavoidable extraordinary circumstances; you were told at least 2 weeks before; you were told 2 weeks to 7 days before and your new flight departs no more than 2 hours earlier and arrives less than 4 hours later; or you were told less than 7 days before and the new flight departs no more than 1 hour earlier and arrives less than 2 hours later.',
          VOUCHER,
          'Cancellation compensation cannot be paid at the airport: contact the customer service team.'
        ],
        sources: [AF]
      },
      {
        id: 'weather', label: 'Weather, air traffic control or unforeseen events', status: 'stop', verdict: 'No cash compensation', sub: 'Extraordinary circumstances',
        head: 'Air France is not required to pay compensation, but care and a reroute or refund still apply.',
        lines: [
          'The airline operating the flight is not required to pay compensation if the cancellation or delay is caused by extraordinary circumstances which could not have been anticipated and it has taken all reasonable measures to avoid it.',
          'Assistance (meals, hotel if needed, phone) and the choice between rerouting and a refund for a cancellation are separate from compensation.',
          'The airline has to prove the circumstance. Ask for the reason in writing.'
        ],
        sources: [AF, YEU]
      },
      {
        id: 'denied', label: 'Denied boarding (overbooked)', status: 'go', verdict: 'Paid at the airport', sub: 'Involuntary denied boarding',
        head: 'The only one paid at the airport, as a voucher or cash.',
        lines: [
          'In an overbooked flight Air France first calls for volunteers who give up their reservation for an agreed compensation in Transportation Credit Vouchers.',
          'If you are denied boarding against your will and you followed the check-in rules: assistance (reroute or refund, meals, hotel with transport, phone) and compensation, unless the denial is for health, safety, security or inadequate documents.',
          'The compensation is issued at the airport, as a non-refundable voucher (350, 500 or 800 euros) or cash (250, 400 or 600 euros), reduced by 50% if your alternative flight arrives within 2, 3 or 4 hours of the original arrival time.'
        ],
        sources: [AF]
      },
      {
        id: 'downgrade', label: 'Put in a lower class', status: 'go', verdict: '30%, 50% or 75% back', sub: 'Involuntary downgrade',
        head: 'A share of the segment price, depending on distance.',
        lines: [
          'If you are involuntarily placed in a lower class you may request reimbursement of 30% of the price of the flight segment for flights of 1,500 km or less; 50% for flights within the EU over 1,500 km and other flights between 1,500 and 3,500 km; 75% for all other flights.',
          'It is the price of that segment, not the whole ticket.'
        ],
        sources: [AF]
      },
      {
        id: 'claim', label: 'How to claim', status: 'warn', verdict: 'Contact customer service', sub: 'Compensation and refund requests',
        head: 'Requests go to the carrier that actually operated the flight.',
        lines: [
          'You can get a refund for the unused and the completed segments through Air France customer service, whose contact details are in the Contact us section of its website.',
          'All requests for reimbursement and compensation must be addressed to the carrier that actually operated, or was supposed to operate, the flight. On a codeshare that may be a partner airline.',
          'Air France and KLM share the same customer service team for these requests.',
          'Cancellation and delay compensation cannot be paid at the airport; denied boarding compensation can.'
        ],
        sources: [AF]
      },
      {
        id: 'appeal', label: 'Air France refused or ignored me', status: 'warn', verdict: 'Go to the enforcement body', sub: 'National designated bodies',
        head: 'Each EU country has a body for these rules.',
        lines: [
          'Each EU member state has designated a body responsible for the assistance and compensation rules. Air France links the European Commission\'s list of these National Enforcement Bodies.',
          'For flights departing outside the EU to an EU country, local regulations and other compensation schemes may apply.',
          'Our EU261 guide explains the steps and the time limits.'
        ],
        sources: [AF, YEU]
      }
    ];

    out['air-france'] = {
      ttl: 'Air France Compensation 2026: Delay, Cancelled, Voucher or Cash',
      desc: 'What Air France owes you for a delayed, cancelled or overbooked flight: meals, hotel, voucher of 350/500/800 euros or cash of 250/400/600 euros, case by case.',
      h1: 'Air France compensation: pick what happened',
      answer: 'Air France offers meals, a hotel and phone credit from a 2 hour delay, and owes compensation for an arrival 3 hours or more late or a late cancellation, as a non-refundable voucher (350, 500 or 800 euros) or cash (250, 400 or 600 euros). Denied boarding compensation is paid at the airport; the other kinds are not.',
      faq: [
        ['How much compensation does Air France pay?', 'You choose between a non-refundable transportation credit voucher of 350, 500 or 800 euros, or cash of 250, 400 or 600 euros, depending on distance, for an arrival delay of 3 hours or more, a cancellation told late, or involuntary denied boarding, unless extraordinary circumstances apply.'],
        ['Does Air France pay compensation at the airport?', 'Only for denied boarding. Delay and cancellation compensation cannot be paid at the airport; you contact customer service.'],
        ['Who do I claim from if my Air France flight was operated by a partner?', 'From the carrier that actually operated the flight or was supposed to operate it, as all requests for reimbursement and compensation must be addressed to that carrier.']
      ],
      render: a => render(a, SCEN, 'From Air France\'s own published passenger rights page, and EU rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  // ---------------- KLM ----------------
  // Read directly on klm.com: "Compensation and reimbursement" (information/refund-compensation/compensation) and "Passenger rights" (information/legal/passenger-rights).
  {
    const KC = ['https://www.klm.com/information/refund-compensation/compensation', 'KLM: compensation and reimbursement', 'Vouchers, cash, criteria'];
    const KR = ['https://www.klm.com/information/legal/passenger-rights', 'KLM: passenger rights', 'Assistance and compensation rules'];

    const SCEN = [
      {
        id: 'criteria', label: 'Do I get fixed compensation?', status: 'warn', verdict: 'Check the 3 criteria', sub: 'KLM fixed compensation', first: true,
        head: 'Cancelled or more than 3 hours late, a European flight, and no special circumstances.',
        lines: [
          'KLM says you may get a fixed amount if your flight was cancelled, or it was delayed and you arrived more than 3 hours later than initially scheduled.',
          'And you travelled to or from a European destination.',
          'And the delay or cancellation was not caused by special circumstances, such as extreme weather, political instability or third-party strikes.',
          'You request it on KLM\'s website, and you can enter your last name and booking code to see the status of a request.'
        ],
        sources: [KC]
      },
      {
        id: 'amounts', label: 'How much, voucher or cash', status: 'go', verdict: '250 to 800 euros', sub: 'Type A, B and C amounts',
        head: 'Three distance types, each with a voucher value and a cash value.',
        lines: [
          '<b>Type A</b> (1,500 km or less): voucher of EUR 350 (non-refundable) or EUR 250 (cash).',
          '<b>Type B</b> (within the EU longer than 1,500 km, or outside the EU between 1,500 and 3,500 km): EUR 500 (non-refundable) or EUR 400 (cash).',
          '<b>Type C</b> (outside the EU, longer than 3,500 km): EUR 800 (non-refundable) or EUR 600 (cash).',
          'Your voucher is either non-refundable or provided as a cash payment; the travel voucher you receive says which. A cash payment can be spent on a new flight or extras, or exchanged for cash. If you use it for a new flight or extras, the higher non-refundable value applies.',
          'Reduction: if you arrived less than 2 hours (type A), 3 hours (type B) or 4 hours (type C) after the original arrival time, the compensation is reduced.'
        ],
        sources: [KC, KR]
      },
      {
        id: 'delay', label: 'Flight delayed 2 hours or more', status: 'go', verdict: 'Meals, hotel and phone', sub: 'Delay beyond the scheduled departure',
        head: 'Free meals and refreshments, a hotel if needed and phone calls.',
        lines: [
          'KLM offers free of charge, from a delay of 2 hours or more: meals and refreshments in reasonable relation to the waiting time, hotel accommodation if a stay becomes necessary (transport included), and 1 prepaid phone card or the cost of 2 calls (up to 5 minutes each), or 2 faxes or emails.',
          'Delayed by at least 5 hours and you do not want to continue: a refund of the unused and completed segments and, if applicable, rerouting at KLM\'s expense to your point of departure.',
          'Delay compensation (arrival 3 hours or more late) is not paid at the airport: contact customer service.'
        ],
        sources: [KR]
      },
      {
        id: 'cancel', label: 'Flight cancelled', status: 'go', verdict: 'Reroute or refund', sub: 'Cancellation by KLM',
        head: 'A reroute now or later, or a refund, plus a meal voucher, hotel and phone card.',
        lines: [
          'Reroute to your final destination under comparable conditions as soon as possible, or at a later date at your convenience, or obtain a refund for the unused and completed segments if you decide not to continue.',
          'Complimentary: a meals and refreshments voucher in reasonable relation to the waiting time, a hotel if a stay becomes necessary (transport included), 1 prepaid phone card or 2 calls up to 5 minutes each, or 2 faxes or emails.',
          'Compensation unless: extraordinary circumstances; told at least 2 weeks before; told 2 weeks to 7 days before with a new flight departing no more than 2 hours earlier and arriving less than 4 hours later; told less than 7 days before with a new flight departing no more than 1 hour earlier and arriving less than 2 hours later.',
          'Cancellation compensation cannot be paid at the airport: contact customer service.'
        ],
        sources: [KR, KC]
      },
      {
        id: 'expenses', label: 'I paid for meals or a call', status: 'warn', verdict: 'Request reimbursement', sub: 'Unforeseen expenses',
        head: 'KLM reimburses extra costs caused by a delay or cancellation, such as a meal or a phone call.',
        lines: [
          'You can request reimbursement if your flight delay or cancellation caused extra costs, such as meals or a phone call. This is separate from fixed compensation.',
          'Use the request reimbursement option on KLM\'s page and keep your receipts.'
        ],
        sources: [KC]
      },
      {
        id: 'voucher', label: 'I got a KLM voucher', status: 'warn', verdict: 'Valid 1 year', sub: 'Using or cashing your voucher',
        head: 'The voucher works on four airlines, and a refundable one can be exchanged for cash.',
        lines: [
          'You receive an email with a 13-digit voucher number starting with 074, also in your profile. The voucher is valid for 1 year after you received it.',
          'You can use one or more vouchers at checkout for a new KLM, Air France, Delta Air Lines or Virgin Atlantic ticket and extra options. Unused credit comes back as a new voucher.',
          'You cannot use a voucher to pay for KLM Holidays or taxes on Flying Blue reward tickets.',
          'A refundable voucher can be exchanged for cash: you can request the cash refund within one year of receiving it.'
        ],
        sources: [KC]
      },
      {
        id: 'weather', label: 'Weather, political instability or a third-party strike', status: 'stop', verdict: 'No fixed compensation', sub: 'Special circumstances',
        head: 'KLM does not pay fixed compensation for special circumstances.',
        lines: [
          'KLM says the delay or cancellation must not have been caused by special circumstances, such as extreme weather, political instability or third-party strikes, to qualify.',
          'The assistance (meals, hotel, phone card) and the reroute or refund choice for a cancellation are separate rights.',
          'The airline has to show the circumstance was unavoidable.'
        ],
        sources: [KC, KR]
      },
      {
        id: 'claim', label: 'How to claim', status: 'warn', verdict: 'On KLM\'s website', sub: 'Requesting compensation',
        head: 'File online; the claim goes to the carrier that operated the flight.',
        lines: [
          'KLM says you request compensation on its website, after checking that you meet the criteria.',
          'Delay and cancellation compensation cannot be paid at the airport; contact the customer service team. Requests must go to the carrier that operated, or was supposed to operate, the flight.',
          'KLM\'s passenger rights page uses the same rules text as Air France\'s.',
          'If the answer is unsatisfactory, the national enforcement bodies are listed by the European Commission; see our EU261 guide.'
        ],
        sources: [KC, KR, YEU]
      }
    ];

    out['klm'] = {
      ttl: 'KLM Compensation 2026: Delay, Cancelled, Voucher or Cash',
      desc: 'What KLM owes you for a delayed or cancelled flight: meals, hotel, voucher or cash of 250 to 800 euros, how vouchers work and how to claim, case by case.',
      h1: 'KLM compensation: pick what happened',
      answer: 'KLM offers meals, a hotel and phone credit from a 2 hour delay, and pays fixed compensation for a cancellation or an arrival more than 3 hours late on a European flight, as a voucher of 350, 500 or 800 euros or cash of 250, 400 or 600 euros, unless special circumstances apply.',
      faq: [
        ['How much compensation does KLM pay for a delayed flight?', 'KLM lists three types by distance: voucher of 350 euros or cash of 250 for flights up to 1,500 km, 500 or 400 for medium flights, 800 or 600 for flights outside the EU over 3,500 km, when you arrive more than 3 hours late on a European flight and no special circumstance applies.'],
        ['How long is a KLM voucher valid?', 'One year from when you received it. It can be used for KLM, Air France, Delta Air Lines or Virgin Atlantic tickets, and a refundable voucher can be exchanged for cash within a year.'],
        ['What does KLM give me when my flight is delayed?', 'From a delay of 2 hours: free meals and refreshments, a hotel if a stay becomes necessary, and a prepaid phone card or two calls. After 5 hours you can ask for a refund if you do not want to continue.']
      ],
      render: a => render(a, SCEN, 'From KLM\'s own published pages, and EU rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  // ---------------- WIZZ AIR ----------------
  // Read directly on wizzair.com/en-gb/help-centre: "EC261 Regulation" (claims-and-compensation/ec261-regulation) and the "Delay, Cancellation and Refund" index page. Wizz's care details (cancelled flight page etc.) were NOT read.
  {
    const WZ = ['https://www.wizzair.com/en-gb/help-centre/my-wizz-account/claims-and-compensation/ec261-regulation', 'Wizz Air: EC261 regulation', 'Compensation, claims, third parties'];
    const WZI = ['https://www.wizzair.com/en-gb/help-centre/delay-cancellation-and-refund', 'Wizz Air: delay, cancellation and refund', 'Help centre index'];
    const AMOUNTS = '<b>250 euros</b> for flights up to 1,500 km; <b>400 euros</b> for flights between 1,500 and 3,500 km (all intra-EU/EEA flights over 1,500 km too); <b>600 euros</b> for flights over 3,500 km on non-intra-EU/EEA routes.';
    const HALF = 'The amount is reduced by 50% if you are offered a new flight that arrives no more than 2 hours (up to 1,500 km), 3 hours (1,500 to 3,500 km) or 4 hours (over 3,500 km) after the original arrival time.';

    const SCEN = [
      {
        id: 'cancel', label: 'Flight cancelled by Wizz Air', status: 'go', verdict: 'Rebook or refund, and cash', sub: 'Cancellation by Wizz Air', first: true,
        head: 'Rebook, alternative transport or a refund, plus Article 7 compensation unless told in time.',
        lines: [
          'You can rebook onto the next available flight on the same or a similar route, arrange alternative transportation under similar conditions, or cancel your reservation and request a refund.',
          'Wizz Air also pays compensation under Article 7 of the Regulation: ' + AMOUNTS,
          HALF,
          'No compensation if you were told 2 weeks before the scheduled departure; or between 2 weeks and 7 days before and offered a Wizz Air flight departing no more than 2 hours earlier and arriving less than 4 hours after the scheduled arrival; or less than 7 days before and offered one departing no more than 1 hour earlier and arriving less than 2 hours after.'
        ],
        sources: [WZ, WZI]
      },
      {
        id: 'delay5', label: 'Flight delayed 5 hours or more', status: 'go', verdict: 'Rebook or refund', sub: 'Long delay caused by Wizz Air',
        head: 'After 5 hours you can rebook, travel another way or cancel and be refunded.',
        lines: [
          'If your flight was delayed by Wizz Air 5 hours or more, you can rebook onto the next available flight on the same or a similar route, arrange alternative transportation under similar conditions, or cancel your reservation and request a refund.',
          'The care you are owed while waiting is on Wizz\'s delayed flight page, which we did not read. The EU rule is meals after 2 or 3 hours and a hotel if you leave the next day (Your Europe).'
        ],
        sources: [WZ, YEU]
      },
      {
        id: 'late', label: 'I arrived more than 3 hours late', status: 'go', verdict: '250, 400 or 600 euros', sub: 'Arrival delay',
        head: 'Wizz Air says passengers delayed more than three hours on arrival are entitled to compensation.',
        lines: [
          'Entitled to compensation under Article 7 unless the delay was caused by extraordinary circumstances: ' + AMOUNTS,
          HALF,
          'Claim through Wizz\'s online Complaints form; it says it will respond within 30 days.'
        ],
        sources: [WZ]
      },
      {
        id: 'weather', label: 'Weather, air traffic control or a strike', status: 'stop', verdict: 'No compensation', sub: 'Extraordinary circumstances',
        head: 'Wizz Air lists air traffic control, weather, industrial action, terrorist alerts and airport closure.',
        lines: [
          'Wizz Air says there is no compensation obligation if the cancellation is due to extraordinary circumstances beyond reasonable control, including air traffic control, weather, industrial action, terrorist alerts and airport closure. Each case is evaluated individually.',
          'You can still rebook, travel another way or cancel and request a refund after a cancellation.',
          'The airline has to prove the circumstance; our EU261 guide explains which causes the EU accepts.'
        ],
        sources: [WZ, YEU]
      },
      {
        id: 'denied', label: 'Denied boarding', status: 'go', verdict: 'Cash and a choice', sub: 'Denied boarding by Wizz Air',
        head: 'Rebook, alternative transport or refund, plus compensation by distance and arrival delay.',
        lines: [
          'You can rebook onto the next available flight on the same or a similar route, arrange alternative transportation, or cancel your reservation and request a refund.',
          'Compensation under Article 7 based on distance and the delay in arrival: 250 euros up to 1,500 km (reduced by 50% if you arrive no more than 2 hours late), 400 euros for 1,500 to 3,500 km (3 hours), 600 euros over 3,500 km (4 hours).'
        ],
        sources: [WZ]
      },
      {
        id: 'diverted', label: 'Flight diverted', status: 'warn', verdict: 'Wizz arranges transport', sub: 'Diversion',
        head: 'Wizz Air says it will arrange necessary alternative transportation.',
        lines: [
          'In case of a diversion, Wizz Air says it will arrange the necessary alternative transportation. Details are on its Diverted flight page, which we did not read.',
          'The EU rules on assistance (meals, a hotel if needed) apply to the delay that results.'
        ],
        sources: [WZI, YEU]
      },
      {
        id: 'claim', label: 'How to claim', status: 'warn', verdict: 'Online Complaints form', sub: 'Claims under Regulation 261/2004',
        head: 'Submit through the form; Wizz Air responds within 30 days.',
        lines: [
          'If you are entitled to compensation, submit your claim via the online Complaints form.',
          'Another passenger from the same booking can claim on your behalf if you give proper evidence of authorisation.',
          'Wizz Air says it will respond to your claim within 30 days.',
          'For non-urgent requests, its help centre also offers a claim form and a phone line.'
        ],
        sources: [WZ, WZI]
      },
      {
        id: 'thirdparty', label: 'A claims company wants to claim for me', status: 'warn', verdict: 'Strict conditions', sub: 'Third-party and assigned claims',
        head: 'Wizz Air will not process a third party\'s claim unless you or your booking already claimed directly.',
        lines: [
          'Wizz Air does not process any claim from a third party unless you or the passengers in your booking previously submitted a claim directly to it. It says this does not stop you consulting legal advisers.',
          'You can assign your claim to a third party, which means selling your right to the compensation. Wizz handles assigned claims only with a signed written notice of the assignment (reservation number, basis of the claim, flight date and number).',
          'It deducts an Assignment Administration Fee of 50 euros from compensation paid on an assigned claim.',
          'Documents of representation or assignment must be signed by hand, or signed by two witnesses, under the Hungarian Code of Civil Procedure.'
        ],
        sources: [WZ]
      },
      {
        id: 'israel', label: 'Flight to or from Israel', status: 'warn', verdict: 'Israeli law may apply', sub: 'Flights departing or arriving in Israel',
        head: 'Wizz Air points to Israel\'s Aviation Services Law for long delays, cancellations and denied boarding.',
        lines: [
          'If your flight departing or arriving in Israel was advanced or delayed by more than eight hours, cancelled, or you were denied boarding against your will, Wizz Air says you may be entitled to compensation under Israel\'s Aviation Services Law (Compensation and Assistance for Flight Cancellations and Changes in Conditions), 5772-2012.',
          'We did not read the Israeli law, so amounts are not listed here.'
        ],
        sources: [WZI]
      },
      {
        id: 'refused', label: 'Wizz Air refused my claim', status: 'warn', verdict: 'National enforcement body', sub: 'Complaint not resolved',
        head: 'Complain to the enforcement body of the country you departed from.',
        lines: [
          'Wizz Air says that for complaints about your rights under the Regulation you may contact the National Enforcement Body in accordance with your place of departure; it links the European Commission\'s list.',
          'Time limits to go to court depend on national law. See our EU261 guide.'
        ],
        sources: [WZ, YEU]
      }
    ];

    out['wizz-air'] = {
      ttl: 'Wizz Air Compensation 2026: Delay, Cancelled, How to Claim',
      desc: 'What Wizz Air owes you for a delayed or cancelled flight: rebook or refund, 250/400/600 euros under EC261, the 50 euro claims-company fee and how to claim, case by case.',
      h1: 'Wizz Air compensation: pick what happened',
      answer: 'Wizz Air lets you rebook, travel another way or take a refund after a cancellation or a delay of 5 hours or more, and pays 250, 400 or 600 euros for an arrival more than 3 hours late or a late cancellation unless extraordinary circumstances apply. You claim through its online form, and it answers within 30 days.',
      faq: [
        ['How much compensation does Wizz Air pay?', 'Under Article 7 of the Regulation: 250 euros up to 1,500 km, 400 euros between 1,500 and 3,500 km, 600 euros over 3,500 km, halved if you are offered a flight arriving within 2, 3 or 4 hours of the original arrival. No compensation for extraordinary circumstances.'],
        ['How do I claim from Wizz Air?', 'Through its online Complaints form; Wizz Air says it responds within 30 days. A passenger in the same booking can claim for you with proof of authorisation.'],
        ['Can a claims company claim from Wizz Air for me?', 'Only if you or someone in your booking already claimed directly. If you assign the claim, Wizz Air deducts a 50 euro Assignment Administration Fee and requires a signed written notice of the assignment.']
      ],
      render: a => render(a, SCEN, 'From Wizz Air\'s own published help centre, and EU rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  // ---------------- AER LINGUS ----------------
  // Read: Aer Lingus "EU Regulation 261/2004" page (aerlingus.com/legal/regulation) and its Delay Notice and Flight Cancellation Notice PDFs (LEGALDELAY.pdf, LEGALCANCELLATION.pdf). Denied boarding notice NOT read; expenses form page NOT read.
  {
    const ALR = ['https://www.aerlingus.com/legal/regulation/', 'Aer Lingus: EU Regulation 261/2004', 'Claim compensation, expenses, group claims'];
    const ALD = ['https://www.aerlingus.com/media/pdfs/LEGALDELAY.pdf', 'Aer Lingus delay notice', 'Assistance and compensation for delays'];
    const ALC = ['https://www.aerlingus.com/media/pdfs/LEGALCANCELLATION.pdf', 'Aer Lingus flight cancellation notice', 'Choices, assistance, compensation'];

    const SCEN = [
      {
        id: 'delay', label: 'Flight delayed', status: 'go', verdict: 'Meals, calls, and a hotel if overnight', sub: 'Delay beyond scheduled departure', first: true,
        head: 'Free meals and two calls once the delay reaches 2, 3 or 4 hours, by distance.',
        lines: [
          'When Aer Lingus reasonably expects a delay of 2 hours or more for flights up to 1,500 km, 3 hours or more for intra-EU flights over 1,500 km and other flights between 1,500 and 3,500 km, or 4 hours or more for longer flights, it offers free meals and refreshments in reasonable relation to the waiting time and two phone calls, faxes or emails.',
          'If the expected departure is at least the day after the one announced: a hotel (a stay of one or more nights, or an extra stay) and transport between the airport and the hotel.',
          'The notice applies to flights departing from an EU airport, and flights operated by an EU carrier departing from a third country into the EU, if you checked in on time (or at least 45 minutes before departure if no time was given) on a fare available to the public or a frequent flyer ticket.',
          'The assistance can be deducted from further compensation you might claim under other law, such as package travel rules.'
        ],
        sources: [ALD]
      },
      {
        id: 'late', label: 'I arrived more than 3 hours late', status: 'go', verdict: '250, 400 or 600 euros', sub: 'Arrival delay at the final destination',
        head: 'Compensation when the delay arises from causes within Aer Lingus\'s control.',
        lines: [
          'You can claim compensation if you arrive more than three hours late at your final destination and the delay arises from causes within Aer Lingus\'s control, not extraordinary circumstances that could not have been avoided by all reasonable measures.',
          '<b>EUR 250</b> for flights of 1,500 km or less; <b>EUR 400</b> for intra-EU flights over 1,500 km and other flights between 1,500 and 3,500 km; <b>EUR 600</b> for all other flights.',
          'For flights longer than 3,500 km the amount is reduced by 50% if re-routing gets you there within 4 hours of the original scheduled arrival.',
          'Claim on Aer Lingus\'s regulation page (button "Claim Compensation"). It adds that claims are only if applicable.'
        ],
        sources: [ALD, ALR]
      },
      {
        id: 'delay5', label: 'Delay of 5 hours or more', status: 'go', verdict: 'Refund within 7 days', sub: 'You decide not to travel',
        head: 'A full refund within seven days, and a return flight if applicable.',
        lines: [
          'If the delay is at least five hours and you decide not to travel on the delayed flight: reimbursement within seven days of the full cost of the ticket for the part or parts not made, and for parts already made if the flight no longer serves any purpose, together with a return flight to the first point of departure at the earliest opportunity.',
          'Payment is in cash, by bank transfer, bank order or cheque, or, with your signed agreement, travel vouchers or other services.',
          'You still get the meals and communication assistance.'
        ],
        sources: [ALD]
      },
      {
        id: 'cancel', label: 'Flight cancelled', status: 'go', verdict: 'Three choices and maybe cash', sub: 'Cancellation by Aer Lingus',
        head: 'Refund within 7 days, re-routing now, or re-routing later.',
        lines: [
          'Choose between: reimbursement within seven days of the full ticket cost (and a return flight where relevant); re-routing to your final destination under comparable conditions at the earliest opportunity; or re-routing at a later date at your convenience, subject to seats.',
          'Free meals and refreshments and two phone calls, faxes or emails. If the new flight leaves at least the day after the cancelled one: a hotel and transport to it.',
          'Compensation of EUR 250, 400 or 600 by distance unless: you were told at least two weeks before; or told 2 weeks to 7 days before and offered a re-routing that departs no more than 2 hours earlier and arrives less than 4 hours later; or told less than 7 days before and offered one departing no more than 1 hour earlier and arriving less than 2 hours later; or Aer Lingus proves unavoidable extraordinary circumstances.'
        ],
        sources: [ALC, ALR]
      },
      {
        id: 'weather', label: 'Weather, air traffic control or a strike', status: 'stop', verdict: 'No cash compensation', sub: 'Extraordinary circumstances',
        head: 'Compensation only covers causes within Aer Lingus\'s control.',
        lines: [
          'Aer Lingus says you may be eligible under EU Regulation 261/2004 for a cancellation or delay of more than 3 hours on arrival only for reasons within the airline\'s control.',
          'Care and the refund or re-routing choice for a cancellation do not depend on the cause.',
          'It has to prove that the cause was extraordinary and could not have been avoided by taking all reasonable measures.'
        ],
        sources: [ALR, ALC]
      },
      {
        id: 'denied', label: 'Denied boarding', status: 'warn', verdict: 'Compensation if within its control', sub: 'Denied boarding',
        head: 'Aer Lingus lists denied boarding among the cases; we did not read its denied boarding notice.',
        lines: [
          'Aer Lingus says you may be eligible for compensation or expenses under EU Regulation 261/2004 if you are denied boarding for reasons within the airline\'s control.',
          'The EU amounts are 250, 400 or 600 euros by distance, with a choice between refund and re-routing (Your Europe).',
          'Ask for the written notice of rights at the airport.'
        ],
        sources: [ALR, YEU]
      },
      {
        id: 'claim', label: 'How to claim', status: 'warn', verdict: 'Use the right form', sub: 'Compensation, expenses and groups',
        head: 'Three separate claim routes on Aer Lingus\'s regulation page.',
        lines: [
          '<b>Claim Compensation:</b> for the delay or cancellation of your flight, only if applicable.',
          '<b>Claim Expenses:</b> accommodation, meals or transport costs incurred because of the delay or cancellation, only if applicable.',
          '<b>Group bookings:</b> a separate route to claim compensation for delay or cancellations of group bookings, and to claim reimbursement of fees or costs on them.',
          'It also invites you to view the options if Aer Lingus cancelled your flight before you claim.'
        ],
        sources: [ALR]
      },
      {
        id: 'refused', label: 'Aer Lingus refused my claim', status: 'warn', verdict: 'Irish Aviation Authority', sub: 'National enforcement body',
        head: 'In Ireland, the enforcement body is the Irish Aviation Authority.',
        lines: [
          'Aer Lingus\'s notices name the Irish Aviation Authority as the national enforcement body in Ireland for Regulation EC 261/2004, and give its Dublin address, phone +353 1 603 1100, email apr@iaa.ie and website iaa.ie.',
          'For other EU countries it points to the European Commission\'s list of enforcement bodies.',
          'Our EU261 guide explains the steps and time limits.'
        ],
        sources: [ALD, YEU]
      }
    ];

    out['aer-lingus'] = {
      ttl: 'Aer Lingus Compensation 2026: Delay, Cancelled, How to Claim',
      desc: 'What Aer Lingus owes you for a delayed or cancelled flight: meals, hotel, refund within 7 days, EUR 250/400/600 and which form to use, case by case.',
      h1: 'Aer Lingus compensation: pick what happened',
      answer: 'Aer Lingus offers free meals and two calls from a 2, 3 or 4 hour delay by distance, a hotel if you leave the next day, a refund within 7 days after a 5 hour delay or a cancellation, and EUR 250, 400 or 600 if you arrive more than 3 hours late or are told of a cancellation late for reasons within its control.',
      faq: [
        ['How much compensation does Aer Lingus pay?', 'EUR 250 for flights of 1,500 km or less, EUR 400 for intra-EU flights over 1,500 km and other flights up to 3,500 km, and EUR 600 for longer flights, for an arrival delay of more than 3 hours or a cancellation told late, when the cause is within its control.'],
        ['How do I claim from Aer Lingus?', 'On its EU Regulation 261/2004 page there are separate routes for compensation, for expenses such as accommodation, meals or transport, and for group bookings.'],
        ['Who do I complain to if Aer Lingus refuses?', 'In Ireland, the Irish Aviation Authority, which Aer Lingus names as the national enforcement body.']
      ],
      render: a => render(a, SCEN, 'From Aer Lingus\'s own published notices, and EU rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  // ---------------- IBERIA ----------------
  // Read 11 Oct 2026: iberia.com/gb/passengers-rights (denied boarding, cancellation, delay, downgrade, baggage time limits, UK complaint routes) and iberia.com/gb/claims-receipts (claim types, FAQ: reply time, refund of cancelled flight, claim for someone else). The printable rights PDF and the claim forms themselves were NOT read.
  {
    const IBR = ['https://www.iberia.com/gb/passengers-rights/', 'Iberia: Passengers\' rights', 'Denied boarding, cancellation, delay, downgrade'];
    const IBC = ['https://www.iberia.com/gb/claims-receipts/', 'Iberia: Claims and receipts', 'Claim types and FAQ'];

    const SCEN = [
      {
        id: 'delay', label: 'Flight delayed', status: 'go', verdict: 'Meals, calls, hotel if overnight', sub: 'Delay beyond scheduled departure', first: true,
        head: 'Free meals and two calls once Iberia expects a delay of 2, 3 or 4 hours, by distance.',
        lines: [
          'When Iberia expects a delay of <b>2 hours or more</b> on flights up to 1,500 km, <b>3 hours or more</b> on intra-EU flights over 1,500 km and other flights between 1,500 and 3,500 km, or <b>4 hours or more</b> on all others, it offers meals and refreshments in reasonable relation to the waiting time, and two phone calls, telex or fax messages, or emails.',
          'If you must spend the night: accommodation where appropriate, and transport between the airport and the hotel.',
          'Iberia gives these as a right under the EU rules for passengers with a confirmed booking who checked in on time (at least 45 minutes before departure if no time is on the ticket).'
        ],
        sources: [IBR]
      },
      {
        id: 'late', label: 'I arrived 3 hours or more late', status: 'warn', verdict: 'EU law says 250, 400 or 600 euros', sub: 'Cash for a long arrival delay',
        head: 'Iberia\'s rights page does not list a cash amount for delays, so this card shows the EU rule.',
        lines: [
          'Iberia\'s passengers\' rights page lists assistance for delays, but we did not find a delay compensation amount on it (it lists amounts for denied boarding and cancellation).',
          'Under the EU rules (Your Europe): <b>250 euros</b> up to 1,500 km, <b>400 euros</b> for intra-EU flights over 1,500 km and other flights between 1,500 and 3,500 km, <b>600 euros</b> for longer flights, when you arrive 3 hours or more late and the cause was within the airline\'s control.',
          'Iberia has a "Delayed flight" claim form on its claims page. We did not open the form.'
        ],
        sources: [YEU, IBC]
      },
      {
        id: 'delay5', label: 'Delay of more than 5 hours', status: 'go', verdict: 'Refund within 7 days', sub: 'You decide not to travel',
        head: 'A refund for the part you did not make, and a return flight if the trip no longer serves its purpose.',
        lines: [
          'When the delay is more than five hours you may choose reimbursement within 7 days for the part or parts of the journey not made (and for parts already made if the flight no longer serves any purpose in your original plan), plus a return flight to the first point of departure.',
          'To start the refund, Iberia says the ticket purchaser should contact the office, agency or point of sale where the ticket was bought.',
          'You still get the meals and calls while you wait.'
        ],
        sources: [IBR]
      },
      {
        id: 'cancel', label: 'Flight cancelled', status: 'go', verdict: '125 to 600 euros, or refund', sub: 'Cancellation by Iberia',
        head: 'Refund or re-routing, care, and cash unless one of the exceptions applies.',
        lines: [
          'You choose between carriage to your final destination as soon as possible or on a later date at your convenience (depending on seats), or reimbursement within 7 days plus a return flight to the first departure point where relevant.',
          'Free meals and refreshments, two calls or emails, and if you must stay overnight: accommodation where appropriate and transport.',
          'No compensation if: you were told at least two weeks before; or told 7 to 14 days before and offered a re-routing that leaves no more than 2 hours earlier and arrives no more than 4 hours later; or told less than 7 days before and offered one that leaves no more than 1 hour earlier and arrives less than 2 hours later; or Iberia proves extraordinary circumstances.',
          'Otherwise Iberia lists: <b>125 euros</b> (flights under 1,500 km, re-routing arrives within 2 hours of the original) or <b>250 euros</b> if later; <b>200 euros</b> (intra-EU over 1,500 km and 1,500 to 3,500 km, within 3 hours) or <b>400 euros</b> if later; <b>300 euros</b> (other flights, within 4 hours) or <b>600 euros</b> if later.',
          'To refund a cancelled flight you did not accept an alternative for, use the "Flight cancellations, delays and changes" claim on its claims page with the booking code and ticket number.'
        ],
        sources: [IBR, IBC]
      },
      {
        id: 'weather', label: 'Weather, security risk or a strike', status: 'stop', verdict: 'No cash compensation', sub: 'Extraordinary circumstances',
        head: 'Iberia lists the causes it treats as extraordinary; care and the refund choice still apply.',
        lines: [
          'Iberia\'s page says there is no compensation when it can prove the cancellation was due to extraordinary circumstances that could not have been avoided even with all reasonable measures, and names political instability, weather incompatible with the flight, security risks, unexpected flight-safety shortcomings beyond its control, and strikes or other industrial action affecting an operating carrier.',
          'The refund or re-routing choice and the care (meals, calls, hotel when you are stuck overnight) are listed separately and do not depend on the cause.',
          'Ask for the reason in writing: the airline has to prove it.'
        ],
        sources: [IBR]
      },
      {
        id: 'denied', label: 'Denied boarding (overbooked)', status: 'go', verdict: '250, 400 or 600 euros', sub: 'Involuntary denied boarding',
        head: 'Iberia first asks for volunteers; if you are bumped against your will you get cash and assistance.',
        lines: [
          'If more passengers hold a confirmed booking than there are seats and you checked in on time, Iberia asks for volunteers in exchange for agreed compensation and assistance. If too few volunteer, passengers denied boarding against their will are entitled to compensation and assistance.',
          '<b>250 euros</b> under 1,500 km, <b>400 euros</b> for intra-EU flights over 1,500 km and others between 1,500 and 3,500 km, <b>600 euros</b> for other flights. It is reduced by 50% if the alternative flight arrives within 2, 3 or 4 hours (by those three distance bands) of the original arrival.',
          'Payment is in cash, bank transfer, bank order or cheque, or with your signed agreement a travel voucher (MCO). Iberia\'s electronic vouchers can be exchanged for cash or a higher-value travel voucher.',
          'Assistance: your choice of carriage to the final destination, now or later, or a refund within 7 days plus a return flight; meals, two calls, and a hotel and transport if overnight.',
          'No compensation if boarding is denied for a justified reason, such as safety, behaviour, state of health or missing travel documents.'
        ],
        sources: [IBR]
      },
      {
        id: 'downgrade', label: 'Moved to a lower class', status: 'go', verdict: '30%, 50% or 75% back', sub: 'Downgrade',
        head: 'A refund of part of the fare within 7 days.',
        lines: [
          'If you are placed in a class lower than the one you paid for, Iberia says it reimburses within 7 days: <b>30%</b> for flights of 1,500 km or less, <b>50%</b> for intra-EU flights over 1,500 km and others between 1,500 and 3,500 km, and <b>75%</b> for the rest.',
          'Start the request where you bought the ticket.'
        ],
        sources: [IBR]
      },
      {
        id: 'bags', label: 'Bag delayed or damaged', status: 'warn', verdict: 'Written claim, short deadlines', sub: 'Baggage problems',
        head: 'Iberia lists the time limits; the baggage rules themselves we did not read.',
        lines: [
          'Iberia\'s page lists the periods to lodge a claim: <b>delay 21 days</b>, <b>misplacement 21 days</b>, <b>damage 7 days</b>, and the right to take action expires after two years (Montreal Convention).',
          'For expenses caused by delayed baggage Iberia\'s FAQ asks for the PIR (Property Irregularity Report) number, flight and passenger details, a description of the expenses and the receipts.',
          'Iberia has a separate "Delayed baggage" claim form. We did not read the baggage compensation rules, so no amounts are given here.'
        ],
        sources: [IBR, IBC]
      },
      {
        id: 'claim', label: 'How to claim', status: 'warn', verdict: 'Online form on iberia.com', sub: 'Filing a claim',
        head: 'Pick the claim type, fill in the form, and expect a reply by email.',
        lines: [
          'On its claims page Iberia has forms for delayed baggage, cancelled flight and delayed flight, and claim types for cancellations, delays, missed connections, denied boarding and schedule changes.',
          'Iberia says it aims to reply within 7 business days, and up to 21 days for complex claims. The reply comes by email and you can follow the status on its claims page.',
          'You can claim for someone else with their authorisation, entering the flight and passenger details. Forms are processed in Spanish, Catalan, Portuguese, English, French, German, Italian, Chinese and Japanese.',
          'Keep your booking code, ticket number, boarding pass and receipts.'
        ],
        sources: [IBC, IBR]
      },
      {
        id: 'refused', label: 'Iberia refused or ignored my claim', status: 'warn', verdict: 'Escalate', sub: 'Complaint not resolved',
        head: 'The EU online dispute route, or the UK CAA for flights from or to the UK.',
        lines: [
          'Iberia points to the European Commission\'s Online Dispute Resolution service for sending a claim.',
          'For flights from or to the United Kingdom it names the UK CAA\'s Passenger Advice and Complaints Team (PACT), through the online form on the CAA website.',
          'For flights from Spain, the enforcement body is the one in the country you departed from; Iberia\'s page does not name it, so see our EU261 guide.'
        ],
        sources: [IBR, YEU]
      }
    ];

    out['iberia'] = {
      ttl: 'Iberia Compensation 2026: Delay, Cancelled, How to Claim',
      desc: 'What Iberia owes you for a delayed or cancelled flight: meals, refund within 7 days, 125 to 600 euros for cancellations, denied boarding amounts and how to claim, case by case.',
      h1: 'Iberia compensation: pick what happened',
      answer: 'Iberia gives free meals and two calls from a 2, 3 or 4 hour delay by distance, a hotel if you are stuck overnight, a refund within 7 days after a delay of more than 5 hours or a cancellation, and 125 to 600 euros for a late cancellation or 250 to 600 euros for denied boarding. You claim through the forms on its claims page; it aims to reply in 7 business days.',
      faq: [
        ['How much compensation does Iberia pay for a cancelled flight?', 'Iberia lists 125 euros (under 1,500 km) up to 300 euros if the re-routing arrives within 2, 3 or 4 hours of the original arrival, and 250, 400 or 600 euros if the arrival is later, unless you were told at least two weeks ahead or extraordinary circumstances apply.'],
        ['How do I claim from Iberia?', 'Use the forms on its claims page (delayed flight, cancelled flight, delayed baggage). Iberia aims to reply within 7 business days and up to 21 days for complex claims.'],
        ['What if Iberia refuses my claim?', 'Iberia points to the European Commission\'s Online Dispute Resolution service, and for UK flights to the CAA\'s Passenger Advice and Complaints Team.']
      ],
      render: a => render(a, SCEN, 'From Iberia\'s own published passengers\' rights and claims pages, and EU rules, checked October 2026. Rules change, so confirm with the airline before you fly.')
    };
  }

  return out;
};
