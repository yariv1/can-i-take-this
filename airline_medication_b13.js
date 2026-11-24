// Airline Medication batch 13 (2026-10-20): 8 airlines. Only facts from pages READ on 2026-10-20 (airline's own pages, or an official airport / TSA page when the airline's own page was blocked: those two are labelled UNOFFICIAL).
// Still without a page because nothing readable turned up: Saudia, Kuwait Airways, MEA.
module.exports = function (X) {
  const { add, card, steps, NP, ABROAD_LINES } = X;
  const ab = (P) => card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [P]);
  const gap = (id, title, chip, sub, P, nm, what) => card(id, title, 'warn', 'Not published', sub, 'The ' + nm + ' page we read gives no rule for ' + what + '.', ['The page we read gives no rule for ' + what + ': ask the airline and check the security rules at your departure airport.'], [P]);

  // ---------------- JAPAN AIRLINES ----------------
  {
    const P1 = ['https://www.jal.co.jp/jp/en/inter/baggage/limit/attention/', 'Japan Airlines: Restrictions on liquids and other items', 'Medicines, quantity limits, liquids on international flights'];
    add({
      slug: 'japan-airlines', name: 'Japan Airlines',
      h1: 'Japan Airlines Medication Policy: Medicine & Liquid Limits on a JAL Flight (2026)',
      desc: 'Can you bring medication on Japan Airlines? Yes: non-radioactive medicines are permitted in carry-on and checked baggage, under 0.5 kg or 0.5 litre per container and 2 kg or 2 litres per person. Checked 20 October 2026.',
      answer: 'Yes. JAL says medicines (without radioactive substances) are permitted in both carry-on and checked baggage, with less than 0.5 kg or 0.5 litre per container and less than 2 kg or 2 litres per person. On international flights all liquids must be in containers of 100 ml or less, in one transparent resealable bag of up to one litre per person. The page we read does not say whether liquid medicine is exempt from the 100 ml rule.',
      srcNote: 'From Japan Airlines\' own restricted items page (read from an archived copy, because the live site blocked our reader), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on or checked', 'Keep it with you', 'JAL permits medicines in carry-on and checked baggage within its quantity limits.', [
          'Japan Airlines: toiletry articles and medicines are permitted in both carry-on and checked baggage; medicines must not include radioactive substances.',
          'JAL quantity limits: less than 0.5 kg or 0.5 litre per container, and less than 2 kg or 2 litres per person.'
        ], [P1], true),
        card('liquids', 'Liquid medication', 'warn', '100 ml rule on international flights', 'Over 100 ml (3.4 oz)', 'JAL limits liquids on international flights to 100 ml containers and does not state a medicine exemption.', [
          'Japan Airlines: for international flights all liquids must be in containers of no more than 100 ml, placed in a transparent resealable plastic bag of up to one litre, one bag per person.',
          'The JAL page we read does not say whether liquid medicine is exempt from this 100 ml rule: ask JAL and the airport before you fly with a larger bottle.',
          'JAL: experimental drugs (not yet approved) need a document stating so, and liquid ones are subject to the same liquids restriction; an item that cannot be physically inspected cannot be carried on board.'
        ], [P1]),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'JAL', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'JAL', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I bring medicine on a JAL flight?', 'Yes. JAL permits medicines in carry-on and checked baggage: under 0.5 kg or 0.5 litre per container and 2 kg or 2 litres per person.'],
        ['Does the 100 ml rule apply to liquid medicine on JAL?', 'JAL\'s page says all liquids on international flights must be in 100 ml containers; it does not mention a medicine exemption, so ask JAL before you carry a larger bottle.']
      ],
      tableTitle: 'Japan Airlines medication rules at a glance',
      tableNote: 'What JAL\'s own page says. Where JAL is silent we say so.',
      rows: [
        ['Where can medicine go?', 'Carry-on or checked baggage'],
        ['Quantity?', 'Under 0.5 kg/litre per container, under 2 kg/litres per person'],
        ['Liquids on international flights?', '100 ml containers, one 1-litre bag per person'],
        ['Liquid medicine exemption?', NP],
        ['Syringes, cold storage?', NP]
      ],
      extra: steps(['Keep medicine in your carry-on, each container under 0.5 kg or 0.5 litre.', 'On international flights keep liquid medicine in 100 ml containers unless JAL tells you otherwise.', 'Ask JAL about syringes and cold medicine.'])
    });
  }

  // ---------------- AIR CHINA ----------------
  {
    const P1 = ['https://www.airchina.us/US/GB/info/notice/', 'Air China: Notice to Passengers', 'Checked baggage, carry-on liquids'];
    const P2 = ['https://www.airchina.us/US/GB/info/special-baggage/notice.html', 'Air China: Notice on carry-on liquids (domestic flights)', 'Liquid medicine for diabetics and other patients'];
    add({
      slug: 'air-china', name: 'Air China',
      h1: 'Air China Medication Policy: Medicine & Liquid Medicine for Patients on an Air China Flight (2026)',
      desc: 'Can you bring medication on Air China? Keep medicine you take regularly out of checked baggage. On domestic flights liquid medicine for diabetics and other patients must pass security and is kept by the crew. Checked 20 October 2026.',
      answer: 'Yes, in your carry-on. Air China says it is not advisable to put prescribed medicine to be taken regularly in checked baggage. On domestic flights, liquid medicine for diabetics and other patients must undergo security checks and be handed to the crew for safekeeping during the flight. On international and regional flights liquids follow the CAAC rules of 17 March 2007, which the page names but does not repeat.',
      srcNote: 'From Air China\'s own Notice to Passengers and carry-on liquids notice (airchina.us), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Keep it with you', 'Not in checked baggage', 'Air China says not to put regularly taken prescribed medicine in checked baggage.', [
          'Air China: it is not advisable to include in checked baggage valuables, important documents, identification documents and prescribed medicine to be taken regularly.',
          'Air China: liquid items in carry-on baggage are subject to government regulations; contact Air China for details.'
        ], [P1], true),
        card('liquids', 'Liquid medication', 'warn', 'Security check, crew keeps it', 'Over 100 ml (3.4 oz)', 'On domestic flights, liquid medicine goes through security and is held by the crew.', [
          'Air China (domestic flights): diabetics and passengers with other medical conditions who need to carry medicines in liquid form must have them security-checked and hand them to the crew for safekeeping during the flight.',
          'Air China: liquids on international and regional flights stay subject to the CAAC announcement of 17 March 2007; the page does not repeat its limits.'
        ], [P2]),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'Air China', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'Air China', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I carry liquid medicine on Air China?', 'On domestic flights, liquid medicine for diabetics and other patients must pass security and be handed to the crew for safekeeping. International liquids follow the CAAC rules of 2007.'],
        ['Should I put regular medicine in checked baggage on Air China?', 'No. Air China says it is not advisable to put regularly taken prescribed medicine in checked baggage.']
      ],
      tableTitle: 'Air China medication rules at a glance',
      tableNote: 'What Air China\'s own pages say. Where Air China is silent we say so.',
      rows: [
        ['Regular prescribed medicine?', 'Carry-on, not checked baggage'],
        ['Liquid medicine, domestic flights?', 'Security check, then handed to the crew'],
        ['Liquids on international flights?', 'CAAC rules of 17 March 2007 (not repeated on the page)'],
        ['Syringes, cold storage?', NP]
      ],
      extra: steps(['Keep medicine you take regularly in your carry-on.', 'On a domestic flight, give liquid medicine to the crew after the security check.', 'Ask Air China about syringes and cold storage.'])
    });
  }

  // ---------------- CHINA SOUTHERN ----------------
  {
    const P1 = ['https://www.csair.com/sg/en/tourguide/faq/baggage/ssxdxlxz.shtml', 'China Southern Airlines: Carry-on baggage FAQ', 'Liquids and liquid drugs'];
    const P2 = ['http://www.caac.gov.cn/XXGK/XXGK/ZCFB/201511/t20151104_10912.html', 'Civil Aviation Administration of China: Announcement on restricting liquids on civil flights (2007, in Chinese)', 'Medicines, liquids, duty-free'];
    add({
      slug: 'china-southern', name: 'China Southern Airlines',
      h1: 'China Southern Airlines Medication Policy: Liquid Medicine for Diabetics & Other Patients (2026)',
      desc: 'Can you bring medication on China Southern Airlines? Necessary liquid drugs for diabetics or other patients pass the security checkpoint with your certification and are stored in 100 ml containers in a transparent bag. Checked 20 October 2026.',
      answer: 'Yes, for liquid medicine. China Southern says necessary liquid drugs brought by diabetics or other patients should pass through the security checkpoint and you show your certification to security staff; the liquid drug should be stored in a 100 ml container in a transparent plastic bag. The page we read gives no rule for pills, syringes or cold storage.',
      srcNote: 'From China Southern Airlines\' own carry-on baggage FAQ, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('liquids', 'Liquid medication', 'warn', 'Show your certification', 'Over 100 ml (3.4 oz)', 'China Southern: liquid drugs for patients pass security with certification, in 100 ml containers.', [
          'China Southern: necessary liquid drugs brought by diabetics or other patients should pass through the security checkpoint, and you show the certification to security-checking staff.',
          'China Southern: liquid drugs should be stored in a 100 ml container in a transparent plastic bag.',
          'China Southern, liquids in general: containers up to 100 ml in one transparent resealable bag, one bag per passenger; the part that exceeds goes as checked baggage.'
        ], [P1], true),
        card('caac', 'China aviation authority rule', 'go', 'Liquid medicine allowed', 'Rule for flights from China', 'China civil aviation authority (CAAC, notice of 2007 still marked valid): patients may carry necessary liquid medicine in a suitable quantity after it passes security checks. This is the authority, not China Southern.', [
          'CAAC notice, article 4: passengers with babies may carry liquid milk products, and diabetics or other patients may carry the liquid medicine they need, in a suitable quantity, once security checks confirm it is safe.',
          'CAAC notice, article 2: on international and regional flights from a mainland airport, each liquid container may hold at most 100 ml, in one transparent resealable bag of at most 1 litre per passenger; the excess goes in checked baggage.',
          'CAAC notice, article 1: on domestic flights you may carry up to 1 litre of liquids in total (not counting alcohol), after the bottles are opened for inspection.'
        ], [P2]),
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'China Southern', 'ordinary pills and tablets'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'China Southern', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'China Southern', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I carry liquid medicine on China Southern?', 'Yes. Necessary liquid drugs for diabetics or other patients pass the security checkpoint with your certification, stored in a 100 ml container in a transparent bag.']
      ],
      tableTitle: 'China Southern medication rules at a glance',
      tableNote: 'What China Southern\'s own page says. Where China Southern is silent we say so.',
      rows: [
        ['Liquid medicine for patients?', 'Pass security, show certification, 100 ml container in a clear bag'],
        ['Other liquids?', '100 ml containers, one 1-litre bag per passenger'],
        ['Pills, syringes, cold storage?', NP]
      ],
      extra: steps(['Take the medical certification with you.', 'Keep liquid medicine in 100 ml containers in a clear bag.', 'Ask China Southern about syringes and cold storage.'])
    });
  }

  // ---------------- EGYPTAIR ----------------
  {
    const P1 = ['https://www.egyptair.com/en/fly/baggage/Pages/restricted-items.aspx', 'EGYPTAIR: Restricted items', 'Medicines banned on flights to or from Saudi Arabia and the UAE'];
    const P2 = ['https://www.egyptair.com/en/fly/special-services/Pages/special-needs.aspx', 'EGYPTAIR: Special & Medical Assistance', 'Medications & needles, refrigeration, medical equipment'];
    add({
      slug: 'egyptair', name: 'EGYPTAIR',
      h1: 'EGYPTAIR Medication Policy: Needles, Cold Packs and Banned Medicines (2026)',
      desc: 'Can you bring medication on EGYPTAIR? Its special assistance page allows medicines, needles, syringes and auto-injectors onboard, says it cannot refrigerate medication, and its restricted items page bans some medicines on Saudi Arabia and UAE routes. Checked 24 November 2026.',
      answer: 'Yes. EGYPTAIR says customers may carry medications and supplies, including needles, syringes and auto-injectors, onboard for their medical conditions, and advises packing enough in both carry-on and checked bags. It cannot refrigerate medication. On flights to or from Saudi Arabia and the UAE, listed medicines such as tramadol are prohibited.',
      srcNote: 'From EGYPTAIR\'s own special assistance and restricted items pages (read from archived copies, because the live site blocked our reader), last checked 24 November 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('banned', 'Banned medicines', 'stop', 'Saudi Arabia and UAE routes', 'Tramadol and similar', 'EGYPTAIR prohibits listed medicines, such as tramadol, on flights to or from Saudi Arabia and the UAE.', [
          'EGYPTAIR: for customers travelling to or from Saudi Arabia and the United Arab Emirates, it is prohibited to carry certain medicines, such as tramadol, which are on those countries\' drug lists.',
          'EGYPTAIR gives the reason: to avoid the arrest and deportation of their holders.'
        ], [P1], true),
        card('pills', 'Pills & tablets', 'go', 'Carry-on and checked', 'Keep it with you', 'EGYPTAIR says customers are generally permitted to carry medications onboard; carry enough in both carry-on and checked bags.', [
          'EGYPTAIR: customers are generally permitted to carry medications and associated supplies onboard for the treatment and control of their medical conditions.',
          'EGYPTAIR: ensure adequate supplies of medication are carried in both carry-on and checked luggage.',
          'EGYPTAIR recommends a letter from your doctor confirming the need, with medicines clearly labelled, ideally with generic names, because the legal status of medicines differs by country.',
          'EGYPTAIR: a prescription copy or a medical certificate naming the illness may be requested at security, and security authorities make the final decision.'
        ], [P2]),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P2, 'EGYPTAIR', 'liquid limits for medication'),
        card('needles', 'Insulin & syringes', 'go', 'Label them', 'Needles, syringes, injections', 'EGYPTAIR allows needles, syringes and auto-injectors onboard, subject to the security rules of the countries you pass through.', [
          'EGYPTAIR: needles on board may be subject to the local country\'s safety and security clearance, which is beyond the airline\'s control; check the security and customs agencies of the countries you transit.',
          'EGYPTAIR recommends carrying syringes and injectable medication together, labelled with your name and the medication, or carrying a medical certificate or doctor\'s letter naming you and the medication.'
        ], [P2]),
        card('cold', 'Cold medication', 'warn', 'No refrigeration onboard', 'Medication that must stay cold', 'EGYPTAIR cannot refrigerate your medication; pack it in a cool bag or vacuum flask with less than 2.5 kg of dry ice.', [
          'EGYPTAIR: it will not be able to refrigerate your medication.',
          'EGYPTAIR: pack medication that needs cooling in a cool bag or vacuum flask with dry ice in quantities of less than 2.5 kg (5.5 lb), packed so carbon dioxide can escape, and tell airport staff at check-in that you carry dry ice.'
        ], [P2]),
        ab(P2)
      ],
      faq: [
        ['Can I carry tramadol on EGYPTAIR?', 'Not on flights to or from Saudi Arabia or the UAE: EGYPTAIR says carrying it there is prohibited, to avoid arrest and deportation.'],
        ['Can I bring insulin and syringes on EGYPTAIR?', 'Yes, EGYPTAIR says needles, syringes and auto-injectors are generally permitted onboard. Label them with your name and the medication or carry a doctor\'s letter, and check the transit countries\' rules.'],
        ['Does EGYPTAIR keep medication cold?', 'No. EGYPTAIR says it cannot refrigerate medication; use a cool bag or vacuum flask with under 2.5 kg of dry ice and tell staff at check-in.']
      ],
      tableTitle: 'EGYPTAIR medication rules at a glance',
      tableNote: 'What EGYPTAIR\'s own pages say. Where EGYPTAIR is silent we say so.',
      rows: [
        ['Flights to or from Saudi Arabia and the UAE?', 'Listed medicines such as tramadol are prohibited'],
        ['Needles, syringes, auto-injectors?', 'Generally permitted onboard; label them or carry a doctor\'s letter'],
        ['Cold storage?', 'Not provided; cool bag or flask with under 2.5 kg of dry ice'],
        ['Liquid medicine over 100 ml?', NP]
      ],
      extra: steps(['Check the drug lists of Saudi Arabia and the UAE before you fly there.', 'Pack needles with your name and the medication on the label, or bring a doctor\'s letter.', 'Tell check-in staff if you carry dry ice.'])
    });
  }

  // ---------------- INDIGO ----------------
  {
    const P1 = ['https://www.goindigo.in/baggage/dangerous-goods-policy.html', 'IndiGo: Dangerous goods and items not allowed in flight', 'Medicines, liquids, medical equipment'];
    add({
      slug: 'indigo', name: 'IndiGo',
      h1: 'IndiGo Medication Policy: Medicines With and Without a Prescription on an IndiGo Flight (2026)',
      desc: 'Can you bring medication on IndiGo? Its allowed-items list covers medicines with a proper prescription, non-prescribed medicines and medical equipment; IndiGo recommends all medication goes in cabin baggage. Checked 20 October 2026.',
      answer: 'Yes. IndiGo recommends carrying all medication in cabin baggage, not checked baggage, and takes no responsibility for it in checked baggage. Its list of items you may carry names medicines with a proper prescription, non-prescribed medicines and medical equipment without mercury. Liquids in cabin baggage go in one clear resealable litre-sized bag and are subject to screening.',
      srcNote: 'From IndiGo\'s own dangerous goods page, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Cabin baggage', 'Keep it with you', 'IndiGo recommends all medication goes in cabin baggage; its list names medicines with a proper prescription.', [
          'IndiGo: it recommends that all medication, valuables, fragile and perishable items are carried in cabin baggage, not checked baggage, and accepts no responsibility for these items.',
          'IndiGo: its list of items you may carry names "Medicines (with proper prescription)", "Non-prescribed medicines" and "Medical equipment (without mercury content)".'
        ], [P1], true),
        card('liquids', 'Liquid medication', 'warn', 'Screening applies', 'Over 100 ml (3.4 oz)', 'IndiGo allows one clear resealable litre bag of small liquid quantities; contents are screened.', [
          'IndiGo: passengers can carry one clear transparent resealable litre-sized plastic bag containing small quantities of liquids, gels, pastes and aerosols.',
          'IndiGo: the contents are subject to screening and security checks and must follow IndiGo\'s security guidelines about permissible objects.',
          'The IndiGo page we read does not say whether liquid medicine is exempt from this bag rule.'
        ], [P1]),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'IndiGo', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'IndiGo', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I carry medicine on IndiGo?', 'Yes. IndiGo recommends carrying all medication in cabin baggage; its allowed list names medicines with a proper prescription and non-prescribed medicines.'],
        ['Do I need a prescription on IndiGo?', 'IndiGo\'s list names "Medicines (with proper prescription)" and, separately, "Non-prescribed medicines".']
      ],
      tableTitle: 'IndiGo medication rules at a glance',
      tableNote: 'What IndiGo\'s own page says. Where IndiGo is silent we say so.',
      rows: [
        ['Where should medication go?', 'Cabin baggage (recommended)'],
        ['Prescription medicine?', 'Listed as allowed, with a proper prescription'],
        ['Non-prescribed medicine?', 'Listed as allowed'],
        ['Liquids?', 'One clear resealable litre-sized bag, screened'],
        ['Syringes, cold storage?', NP]
      ],
      extra: steps(['Pack medication in cabin baggage.', 'Carry the prescription for prescription medicines.', 'Ask IndiGo about syringes and liquid medicine.'])
    });
  }

  // ---------------- AEROMEXICO (airport source, UNOFFICIAL) ----------------
  {
    const P2 = ['https://www.aicm.com.mx/informacionalpasajero/Archivos/GuiaAICM2014.pdf', 'Mexico City International Airport (AICM): Información al pasajero (2014 security guide, in Spanish)', 'Medicines, liquids, diabetes, oxygen'];
    const P1 = ['https://www.aicm.com.mx/wp-content/uploads/2023/09/GuiaDelPasajero.pdf', 'Mexico City International Airport (AICM): Guía del pasajero (2023, in Spanish)', 'Syringes with needles'];
    add({
      slug: 'aeromexico', name: 'Aeromexico', unofficial: true,
      h1: 'Aeromexico Medication Policy: Medicine & Syringes in Hand Baggage at Mexico City Airport (2026)',
      desc: 'Can you bring medication on Aeromexico? Aeromexico\'s own pages were not readable. Mexico City airport (AICM) allows syringes with needles only with a medical prescription for diabetes or allergies, together with the medicine. Checked 24 October 2026.',
      answer: 'Partly, according to Mexico City International Airport. The AICM passenger guide says syringes with needles are allowed only with a medical prescription for diabetes or allergies, accompanied by the medicine. It gives no rule for ordinary pills or liquid medicine, so ask Aeromexico and check the security rules at your departure airport. This is the airport\'s rule, not an Aeromexico page.',
      srcNote: 'From the AICM passenger guide (2023, in Spanish), not from Aeromexico, whose own pages blocked our reader, last checked 24 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('needles', 'Insulin & syringes', 'warn', 'Prescription needed', 'Needles, syringes, injections', 'AICM: syringes with needles are allowed only with a medical prescription for diabetes or allergies.', [
          'AICM passenger guide: syringes with needles are allowed only with a medical prescription for diabetes or allergies, accompanied by their respective medicine.',
          'The older AICM 2014 security guide says diabetics may enter with the medicines and syringes needed for the trip without showing the prescription, and recommends carrying a diabetes patient card. The two guides differ, so carry a prescription.',
          'This is the rule at Mexico City airport; the guide is not Aeromexico\'s own.'
        ], [P1, P2], true),
        card('pills', 'Pills & tablets', 'go', 'Reasonable amount', 'Medicines for your trip', 'The older AICM security guide allows medicines, in a reasonable quantity for your needs and itinerary, without putting them in the clear bag.', [
          'AICM 2014 security guide: medicines, baby milk and food, and special dietary products are allowed, and do not have to go in the resealable plastic bag if the quantity is reasonable for the passenger need and itinerary.',
          'This is the airport guide, not Aeromexico, and it is from 2014.'
        ], [P2]),
        card('liquids', 'Liquid medication', 'go', 'Over 100 ml (3.4 oz)', 'Liquid medicine', 'AICM exempts medicines from the 100 ml and clear-bag rule in a reasonable quantity; other liquids over 100 ml must go in checked baggage.', [
          'AICM 2014 security guide: people under medical treatment may carry liquids, aerosols and gels above 100 ml; ordinary cosmetic and hygiene liquids are limited to 100 ml containers in one resealable bag of up to 1 litre.',
          'AICM 2014 security guide: oxygen is allowed only as medical gaseous oxygen cylinders up to 5 kg gross with a prescription, or concentrators certified by the civil aviation authority with a prescription.'
        ], [P2]),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'AICM', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I carry insulin and syringes on Aeromexico?', 'The Mexico City airport passenger guide says syringes with needles are allowed only with a medical prescription for diabetes or allergies, together with the medicine. This is the airport\'s rule, not an Aeromexico page.']
      ],
      tableTitle: 'Aeromexico medication rules at a glance (Mexico City airport)',
      tableNote: 'What the Mexico City airport guide says; Aeromexico\'s own page could not be read. Where the guide is silent we say so.',
      rows: [
        ['Syringes with needles?', 'Only with a medical prescription for diabetes or allergies, with the medicine'],
        ['Pills and liquid medicine (2014 AICM guide)?', 'Allowed in a reasonable quantity, outside the clear bag'],
        ['Cold storage?', NP]
      ],
      extra: steps(['Carry the prescription and the medicine together with the syringes.', 'Ask Aeromexico about its own rules.'])
    });
  }

  // ---------------- ALASKA (OWN PAGE read 23 Nov 2026 via archived copy + TSA) ----------------
  {
    const P4 = ['https://www.alaskaair.com/content/travel-info/accessible-services/specialservices-oxygen', 'Alaska Airlines and Hawaiian Airlines: Oxygen and respiratory devices (read from an archived copy, 24 November 2026)', 'Portable oxygen concentrators'];
    const P3 = ['https://www.tsa.gov/travel/security-screening/whatcanibring/items/portable-oxygen-concentrators', 'TSA: Portable Oxygen Concentrators', 'Carry-on and checked bags'];
    const PA = ['https://www.alaskaair.com/content/travel-info/accessible-services/specialservices-other', 'Alaska Airlines and Hawaiian Airlines: Other services and information', 'Traveling with medication (read from an archived copy, 23 November 2026)'];
    add({
      slug: 'alaska-airlines', name: 'Alaska Airlines',
      h1: 'Alaska Airlines Medication Policy: Medicine, Liquids & Syringes on an Alaska Flight (2026)',
      desc: 'Can you bring medication on Alaska Airlines? Alaska says keep medication with you in carry-on, never in checked baggage, and that its aircraft have no refrigerators. TSA allows medically necessary liquids over 3.4 oz if declared and unused syringes with injectable medication. Checked 23 November 2026.',
      answer: 'Yes, in your carry-on. Alaska says medication should always stay with you in carry-on baggage and never go in checked baggage, and its aircraft have no refrigerators. On US flights TSA also lets medically necessary liquids exceed 3.4 oz if you declare them, and unused syringes go with injectable medication.',
      srcNote: 'The carry-on and refrigerator rules are from Alaska\'s own "Traveling with medication" section (read from an archived copy on 23 November 2026, because the live page blocked our reader); the liquid, syringe and ice-pack rules are TSA\'s, which apply on every US flight. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on only', 'Never in checked baggage', 'Alaska says medication should always remain with the traveler in carry-on baggage, never in checked baggage.', [
          'Alaska Airlines: it does not provide medical services or administration of medication, but it helps safely transport medication.',
          X.TSA_PILLS_LINE
        ], [PA, X.TSA_PILLS], true),
        card('liquids', 'Liquid medication', 'warn', 'Declare it', 'Over 100 ml (3.4 oz)', 'TSA allows medically necessary liquids over 3.4 oz if declared.', [X.TSA_LIQ_LINE, X.TSA_REMOVE, 'Alaska Airlines: questions about taking medication or medical supplies through a checkpoint are answered by TSA\'s standard screening procedures.'], [X.TSA_LIQ, X.TSA_FAQ, PA]),
        card('needles', 'Insulin & syringes', 'warn', 'Declare at security', 'Needles, syringes, injections', 'TSA allows unused syringes with injectable medication.', [X.TSA_SYR_LINE], [X.TSA_SYR]),
        card('cold', 'Cold medication', 'warn', 'No refrigerators on board', 'Plan your own cooling', 'Alaska says its aircraft are not equipped with refrigerators, so plan accordingly.', [
          'Alaska Airlines: plan for the whole flight, because crew cannot chill your medication.',
          X.TSA_ICE_LINE
        ], [PA, X.TSA_ICE]),
        card('devices', 'Drips and oxygen', 'warn', 'FAA-approved POC only', 'Intravenous devices, personal oxygen', 'Alaska accepts FAA-approved portable oxygen concentrators and respiratory devices on domestic and international flights if they carry the red FAA label; bring batteries for at least 150% of the flight and tell Alaska 48 hours ahead.', [
          'Alaska Airlines: it accepts oxygen concentrating devices on domestic and international flights provided each has a permanent label with a statement in red lettering that it meets FAA criteria; use the label on the device, not the kit name, to check the model.',
          'Alaska Airlines: bring fully charged batteries for no less than 150% of the flight plus ground connection time; spare batteries must go in the cabin, never in checked baggage, with terminals covered or each battery in its own pouch.',
          'Alaska Airlines: you may use an approved device during taxi, take-off and landing if it stays stowed under the seat in front, positioned so you can see its warnings; a customer service agent must verify the model, the phases of flight you will use it and your batteries.',
          'Alaska Airlines: advance notice is not required but 48 hours is strongly recommended; you must provide the device (rented or owned) and know how to use it, as Alaska supplies none.',
          'Alaska Airlines: an unapproved concentrator may travel in the cabin if it meets carry-on size and weight limits with batteries removed.',
          'TSA: portable oxygen concentrators are allowed in carry-on and checked bags with special instructions, and the officer makes the final decision at the checkpoint.',
          'Alaska Airlines: intravenous devices may not be suspended from the aircraft, so nothing interferes with the deployment of the emergency oxygen masks.'
        ], [PA, P4, P3]),

        ab(PA)
      ],
      faq: [
        ['Can I carry insulin and syringes on Alaska Airlines?', 'TSA allows unused syringes when they come with injectable medication; declare them at the checkpoint. Alaska says medication stays in your carry-on and its aircraft have no refrigerators.'],
        ['Can I put medication in checked baggage on Alaska?', 'No: Alaska says medication should always remain with the traveler in carry-on baggage, never in checked baggage.'],
        ['Does Alaska have a fridge for my medication?', 'No. Alaska says its aircraft are not equipped with refrigerators, so bring a cooling solution; TSA allows medically necessary gel ice packs in reasonable quantities.']
      ],
      tableTitle: 'Alaska Airlines medication rules at a glance',
      tableNote: 'Carry-on, refrigerator, IV and oxygen rows are Alaska\'s own; the other rows are TSA\'s for US flights.',
      rows: [
        ['Where does medication go?', 'Carry-on baggage, never checked'],
        ['Pills?', 'Carry-on and checked bags (TSA)'],
        ['Liquid medicine over 3.4 oz?', 'Allowed if medically necessary and declared (TSA)'],
        ['Syringes?', 'Unused syringes with injectable medication, declared (TSA)'],
        ['Cold storage on board?', 'None: no refrigerators on Alaska aircraft'],
        ['IV devices and own oxygen?', 'IV cannot be suspended; own oxygen only as an approved POC']
      ],
      extra: steps(['Keep all medicine in your carry-on.', 'Bring your own cooling for cold medicine.', 'Tell the officer about liquid medicine and syringes at the checkpoint.'])
    });
  }

  // ---------------- HAWAIIAN (OWN PAGE read 23 Nov 2026 via archived copy + TSA) ----------------
  {
    const PA = ['https://www.alaskaair.com/content/travel-info/accessible-services/specialservices-other', 'Alaska Airlines and Hawaiian Airlines: Other services and information', 'Traveling with medication (read from an archived copy, 23 November 2026)'];
    add({
      slug: 'hawaiian-airlines', name: 'Hawaiian Airlines',
      h1: 'Hawaiian Airlines Medication Policy: Insulin, Pumps & Cold Packs on a Hawaiian Flight (2026)',
      desc: 'Can you bring medication on Hawaiian Airlines? The joint Alaska and Hawaiian page says keep medication in your carry-on and bring your own cooling, because aircraft have no refrigerators. TSA lets you carry insulin and supplies and medically necessary ice packs. Checked 23 November 2026.',
      answer: 'Yes. The joint Alaska and Hawaiian accessible-travel page says medication stays with you in carry-on baggage, never checked, and aircraft have no refrigerators. On US flights TSA adds: insulin goes in a separate bin for x-ray, you tell officers about a pump or glucose monitor, and medically necessary gel ice packs are allowed in reasonable quantities.',
      srcNote: 'The carry-on, refrigerator, IV and oxygen rules are from the joint Alaska Airlines and Hawaiian Airlines "Traveling with medication" section (read from an archived copy on 23 November 2026, because the live page blocked our reader); the insulin, device and ice-pack rules are TSA\'s. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('needles', 'Insulin & syringes', 'warn', 'Separate bin for x-ray', 'Insulin and supplies', 'TSA: tell officers about insulin and put it in a separate bin.', [X.TSA_INS_LINE], [X.TSA_INS], true),
        card('devices', 'Pumps & monitors', 'go', 'Tell the officer', 'Medical devices and supplies', 'TSA: tell officers about a pump or glucose monitor worn on your body.', [X.TSA_DEV_LINE], [X.TSA_SUP]),
        card('cold', 'Cold medication', 'warn', 'Ice packs yes, fridge no', 'Medication that must stay cold', 'TSA allows medically necessary gel ice packs in reasonable quantities, but the joint Alaska and Hawaiian page says the aircraft have no refrigerators.', [X.TSA_ICE_LINE, 'Hawaiian Airlines (joint page with Alaska): bring cooling for the whole flight, since cabin crew have nowhere to chill medicine.'], [X.TSA_ICE, PA]),
        card('pills', 'Pills & tablets', 'go', 'Carry-on, not checked', 'Keep it with you', 'The joint Alaska and Hawaiian page says medication should always remain with you in carry-on baggage, never in checked baggage.', [
          'The page adds that the airline does not give medical services or administer medication, but helps transport it safely.',
          X.TSA_PILLS_LINE
        ], [PA, X.TSA_PILLS]),
        card('drips', 'Drips and oxygen', 'warn', 'Rules for IV and oxygen', 'Intravenous devices, personal oxygen', 'The joint page says IV devices may not be hung from the aircraft, and personal oxygen equipment is banned in flight unless it is an approved portable oxygen concentrator.', [
          'The IV rule keeps the emergency oxygen masks free to deploy.',
          'FAA regulations allow personal oxygen equipment in flight only under the Portable Oxygen Concentrator (POC) guidelines.'
        ], [PA]),
        ab(PA)
      ],
      faq: [
        ['Can I bring insulin on Hawaiian Airlines?', 'TSA says to tell the officers you carry medically necessary liquids such as insulin and put them in a separate bin for x-ray screening. Keep it in your carry-on, as the joint Alaska and Hawaiian page asks.'],
        ['Can I bring ice packs for medicine on Hawaiian?', 'TSA allows medically necessary gel ice packs in reasonable quantities, frozen, melted or slushy; tell the officer at the checkpoint. There are no refrigerators on board, so bring your own cooling.'],
        ['Can I check my medication on Hawaiian Airlines?', 'The joint Alaska and Hawaiian page says medication should always stay in carry-on baggage, never in checked baggage.']
      ],
      tableTitle: 'Hawaiian Airlines medication rules at a glance',
      tableNote: 'Carry-on, refrigerator, IV and oxygen rows come from the joint Alaska and Hawaiian page; the other rows are TSA\'s for US flights.',
      rows: [
        ['Insulin?', 'Separate bin for x-ray; tell the officer (TSA)'],
        ['Pump or glucose monitor?', 'Tell the officer; carry the supplies (TSA)'],
        ['Ice packs for medicine?', 'Allowed in reasonable quantity (TSA); no refrigerators on board'],
        ['Where does medication go?', 'Carry-on baggage, never checked'],
        ['IV devices and own oxygen?', 'IV cannot be hung; own oxygen only as an approved POC']
      ],
      extra: steps(['Keep medicine in your carry-on, with your own cooling if it must stay cold.', 'Tell the officer about insulin, pumps and ice packs.'])
    });
  }
};
