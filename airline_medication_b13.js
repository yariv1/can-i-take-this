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
    add({
      slug: 'egyptair', name: 'EGYPTAIR',
      h1: 'EGYPTAIR Medication Policy: Medicines You Cannot Carry To or From Saudi Arabia & the UAE (2026)',
      desc: 'Can you bring medication on EGYPTAIR? Its restricted items page bans certain medicines, such as tramadol, for customers travelling to or from Saudi Arabia and the UAE. Checked 20 October 2026.',
      answer: 'It depends on the route. EGYPTAIR says that for customers travelling to or from Saudi Arabia and the United Arab Emirates it is prohibited to carry medicines on a listed set (it names tramadol and two brand names), to avoid arrest and deportation. The page we read (an archived copy) gives no rule for ordinary pills, liquids, syringes or cold storage.',
      srcNote: 'From EGYPTAIR\'s own restricted items page (read from an archived copy, because the live site blocked our reader), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('banned', 'Banned medicines', 'stop', 'Saudi Arabia and UAE routes', 'Tramadol and similar', 'EGYPTAIR prohibits listed medicines, such as tramadol, on flights to or from Saudi Arabia and the UAE.', [
          'EGYPTAIR: for customers travelling to or from Saudi Arabia and the United Arab Emirates, it is prohibited to carry certain medicines, such as tramadol, which are on those countries\' drug lists.',
          'EGYPTAIR gives the reason: to avoid the arrest and deportation of their holders.',
          'EGYPTAIR: for customers travelling to or from France, it prohibits meat, milk and other animal products, eggs, fruits and vegetables, seeds and plants.'
        ], [P1], true),
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'EGYPTAIR', 'ordinary pills and tablets'),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'EGYPTAIR', 'liquid limits for medication'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'EGYPTAIR', 'needles and syringes'),
        ab(P1)
      ],
      faq: [
        ['Can I carry tramadol on EGYPTAIR?', 'Not on flights to or from Saudi Arabia or the UAE: EGYPTAIR says carrying it there is prohibited, to avoid arrest and deportation.']
      ],
      tableTitle: 'EGYPTAIR medication rules at a glance',
      tableNote: 'What EGYPTAIR\'s own page says. Where EGYPTAIR is silent we say so.',
      rows: [
        ['Flights to or from Saudi Arabia and the UAE?', 'Listed medicines such as tramadol are prohibited'],
        ['Reason given?', 'To avoid arrest and deportation'],
        ['Pills, liquids, syringes, cold storage?', NP]
      ],
      extra: steps(['Check the drug lists of Saudi Arabia and the UAE before you fly there.', 'Ask EGYPTAIR about any other medicine.'])
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
    const P1 = ['https://www.aicm.com.mx/en/passengers/tips-for-passengers/special-medical-needs', 'Mexico City International Airport (AICM): Passengers with special medical needs', 'Medications, diabetics and syringes'];
    add({
      slug: 'aeromexico', name: 'Aeromexico', unofficial: true,
      h1: 'Aeromexico Medication Policy: Medicine & Diabetic Syringes in Hand Baggage at Mexico City Airport (2026)',
      desc: 'Can you bring medication on Aeromexico? Aeromexico\'s own pages were not readable. Mexico City airport (AICM) allows medications in reasonable amounts without the resealable bag, and diabetics may carry their medicines and syringes without a prescription. Checked 20 October 2026.',
      answer: 'Yes, according to Mexico City International Airport. AICM says medications, milk and baby food (with the baby on board) and special diets are allowed and do not have to go in the resealable plastic bag if the amount is reasonable for your need and itinerary. Diabetics may carry the medicines and syringes they need for the trip and do not have to show a prescription; AICM advises carrying a diabetic credential. This is the airport\'s rule, not an Aeromexico page.',
      srcNote: 'From the AICM airport page (read from an archived copy), not from Aeromexico, whose own pages blocked our reader, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Allowed, reasonable amount', 'Keep it with you', 'AICM allows medications in an amount reasonable for your need and itinerary.', [
          'AICM: medications are allowed, and do not have to go inside the resealable plastic bag if the amount is reasonable for the passenger\'s need and itinerary.',
          'This is the rule at Mexico City airport; the page is not Aeromexico\'s own.'
        ], [P1], true),
        card('needles', 'Insulin & syringes', 'go', 'No prescription needed (diabetics)', 'Needles, syringes, injections', 'AICM: diabetics may carry the medicines and syringes needed for the trip without a prescription.', [
          'AICM: diabetics may enter with the medicines and syringes necessary for the trip; it is not necessary to show the prescription.',
          'AICM: it is advisable to carry your diabetic credential.'
        ], [P1]),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'AICM', 'the liquid size limit for medication beyond "a reasonable amount"'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'AICM', 'keeping medication cold'),
        card('oxygen', 'Oxygen', 'warn', 'Prescription + 5 kg limit', 'Medical oxygen', 'AICM allows gaseous medical oxygen cylinders with a prescription up to 5 kg gross weight.', [
          'AICM: gaseous oxygen cylinders for medical use are allowed with a medical prescription, provided they do not exceed 5 kg gross weight.',
          'AICM: portable oxygen concentrators certified by Mexico\'s civil aviation authority are allowed with a medical prescription.'
        ], [P1]),
        ab(P1)
      ],
      faq: [
        ['Can I carry insulin and syringes on Aeromexico?', 'Mexico City airport says diabetics may carry the medicines and syringes they need for the trip without showing a prescription. This is the airport\'s rule, not an Aeromexico page.'],
        ['Does medicine have to go in the clear bag at Mexico City airport?', 'No: AICM says medications do not have to be placed in the resealable bag if the amount is reasonable for your need and itinerary.']
      ],
      tableTitle: 'Aeromexico medication rules at a glance (Mexico City airport)',
      tableNote: 'What the Mexico City airport page says; Aeromexico\'s own page could not be read. Where the page is silent we say so.',
      rows: [
        ['Medication in hand baggage?', 'Allowed, reasonable amount, no resealable bag needed'],
        ['Diabetics: syringes?', 'Allowed with the medicines needed for the trip; no prescription needed'],
        ['Medical oxygen?', 'Gaseous cylinders with prescription up to 5 kg gross'],
        ['Liquid size limit, cold storage?', NP]
      ],
      extra: steps(['Carry only a reasonable amount for your trip.', 'Diabetics: carry your diabetic credential.', 'Ask Aeromexico about its own rules.'])
    });
  }

  // ---------------- ALASKA (TSA, UNOFFICIAL) ----------------
  {
    add({
      slug: 'alaska-airlines', name: 'Alaska Airlines', unofficial: true,
      h1: 'Alaska Airlines Medication Policy: Medicine, Liquids & Syringes on an Alaska Flight (2026)',
      desc: 'Can you bring medication on Alaska Airlines? Alaska\'s own pages were not readable. TSA allows pills in carry-on and checked bags, medically necessary liquids over 3.4 oz if declared, and unused syringes with injectable medication. Checked 20 October 2026.',
      answer: 'Yes, under TSA rules. Alaska\'s own pages blocked our reader, so the rules below are TSA\'s, which apply on every US flight: pills are allowed in carry-on and checked bags, medically necessary liquids can exceed 3.4 oz if you declare them at the checkpoint, and unused syringes are allowed with injectable medication.',
      srcNote: 'From TSA\'s medication pages (the US government screening authority), not from Alaska Airlines, whose own pages blocked our reader, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on and checked', 'Keep it with you', 'TSA lists pills as allowed in carry-on and checked bags.', [X.TSA_PILLS_LINE], [X.TSA_PILLS], true),
        card('liquids', 'Liquid medication', 'warn', 'Declare it', 'Over 100 ml (3.4 oz)', 'TSA allows medically necessary liquids over 3.4 oz if declared.', [X.TSA_LIQ_LINE, X.TSA_REMOVE], [X.TSA_LIQ, X.TSA_FAQ]),
        card('needles', 'Insulin & syringes', 'warn', 'Declare at security', 'Needles, syringes, injections', 'TSA allows unused syringes with injectable medication.', [X.TSA_SYR_LINE], [X.TSA_SYR]),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', X.TSA_ICE, 'TSA', 'keeping medication cold on board'),
        ab(X.TSA_FAQ)
      ],
      faq: [
        ['Can I carry insulin and syringes on Alaska Airlines?', 'TSA allows unused syringes when they come with injectable medication; declare them at the checkpoint. This is TSA\'s rule, not an Alaska page.']
      ],
      tableTitle: 'Alaska Airlines medication rules at a glance (TSA)',
      tableNote: 'What TSA says for US flights; Alaska\'s own page could not be read.',
      rows: [
        ['Pills?', 'Carry-on and checked bags'],
        ['Liquid medicine over 3.4 oz?', 'Allowed if medically necessary and declared'],
        ['Syringes?', 'Unused syringes with injectable medication, declared'],
        ['Cold storage on board?', NP]
      ],
      extra: steps(['Keep medicine in your carry-on.', 'Tell the officer about liquid medicine and syringes at the checkpoint.', 'Ask Alaska about anything TSA does not cover.'])
    });
  }

  // ---------------- HAWAIIAN (TSA, UNOFFICIAL) ----------------
  {
    add({
      slug: 'hawaiian-airlines', name: 'Hawaiian Airlines', unofficial: true,
      h1: 'Hawaiian Airlines Medication Policy: Insulin, Pumps & Cold Packs on a Hawaiian Flight (2026)',
      desc: 'Can you bring medication on Hawaiian Airlines? Hawaiian\'s own pages were not readable. TSA lets you carry insulin and supplies, tell officers about pumps and monitors, and bring medically necessary ice packs. Checked 20 October 2026.',
      answer: 'Yes, under TSA rules. Hawaiian\'s own pages blocked our reader, so the rules below are TSA\'s, which apply on every US flight: insulin goes in a separate bin for x-ray, you tell officers about a pump or glucose monitor, and medically necessary gel ice packs are allowed in reasonable quantities.',
      srcNote: 'From TSA\'s medication pages (the US government screening authority), not from Hawaiian Airlines, whose own pages blocked our reader, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('needles', 'Insulin & syringes', 'warn', 'Separate bin for x-ray', 'Insulin and supplies', 'TSA: tell officers about insulin and put it in a separate bin.', [X.TSA_INS_LINE], [X.TSA_INS], true),
        card('devices', 'Pumps & monitors', 'go', 'Tell the officer', 'Medical devices and supplies', 'TSA: tell officers about a pump or glucose monitor worn on your body.', [X.TSA_DEV_LINE], [X.TSA_SUP]),
        card('cold', 'Cold medication', 'warn', 'Ice packs allowed', 'Medication that must stay cold', 'TSA allows medically necessary gel ice packs in reasonable quantities.', [X.TSA_ICE_LINE], [X.TSA_ICE]),
        card('pills', 'Pills & tablets', 'go', 'Carry-on and checked', 'Keep it with you', 'TSA lists pills as allowed in carry-on and checked bags.', [X.TSA_PILLS_LINE], [X.TSA_PILLS]),
        ab(X.TSA_FAQ)
      ],
      faq: [
        ['Can I bring insulin on Hawaiian Airlines?', 'TSA says to tell the officers you carry medically necessary liquids such as insulin and put them in a separate bin for x-ray screening. This is TSA\'s rule, not a Hawaiian page.'],
        ['Can I bring ice packs for medicine on Hawaiian?', 'TSA allows medically necessary gel ice packs in reasonable quantities, frozen, melted or slushy; tell the officer at the checkpoint.']
      ],
      tableTitle: 'Hawaiian Airlines medication rules at a glance (TSA)',
      tableNote: 'What TSA says for US flights; Hawaiian\'s own page could not be read.',
      rows: [
        ['Insulin?', 'Separate bin for x-ray; tell the officer'],
        ['Pump or glucose monitor?', 'Tell the officer; carry the supplies'],
        ['Ice packs for medicine?', 'Allowed, medically necessary, in reasonable quantity'],
        ['Pills, syringes beyond TSA?', NP]
      ],
      extra: steps(['Tell the officer about insulin, pumps and ice packs.', 'Ask Hawaiian about anything TSA does not cover.'])
    });
  }
};
