// Airline Medication batch 8 (2026-10-18): Wizz Air, Thai Airways, Qatar Airways. Only facts from pages READ on 2026-10-18.
module.exports = function (X) {
  const { add, card, steps, NP, ABROAD_LINES } = X;

  // ---------------- WIZZ AIR ----------------
  {
    const PG = ['https://www.wizzair.com/en-gb/information-and-services/travel-information/special-assistance', 'Wizz Air: Special Assistance Information', 'Medicine and medical equipment'];
    add({
      slug: 'wizz-air', name: 'Wizz Air',
      h1: 'Wizz Air Medication Policy: Medicine & Insulin on a Wizz Air Flight (2026)',
      desc: 'Can you bring medication on Wizz Air? Yes: keep medicine in your hand luggage at all times; essential medicines such as insulin need a medical certificate. Wizz Air cannot keep medication refrigerated and crew cannot help with it. Checked 18 October 2026.',
      answer: 'Yes. Wizz Air says to keep medicine in your hand luggage at all times. For essential medicines such as insulin, carry a medical certificate confirming you need the medicine during the trip. Wizz Air cannot keep your medication refrigerated on board and cabin crew cannot help with medication.',
      srcNote: 'From Wizz Air\'s own special assistance page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand luggage', 'Keep it with you', 'Wizz Air says to keep medicine in your hand luggage at all times.', [
          'Wizz Air: keep medicine in your hand luggage at all times.',
          'Wizz Air: cabin crew cannot provide assistance with drinks, meals or medication; for help taking medication it recommends travelling with a personal assistant.'
        ], [PG], true),
        card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The Wizz Air page we read gives no liquid limit for medication.', [
          'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
        ], [PG]),
        card('needles', 'Insulin & syringes', 'warn', 'Medical certificate', 'Insulin and essential medicines', 'Wizz Air asks you to carry a medical certificate for essential medicines such as insulin.', [
          'Wizz Air: if you need to carry essential medicines such as insulin, carry a medical certificate confirming that you need the medicine during your trip.',
          'The page we read does not give a separate rule for needles or syringes.'
        ], [PG]),
        card('cold', 'Cold medication', 'stop', 'Not refrigerated', 'Medication that must stay cold', 'Wizz Air cannot keep your medication refrigerated on board.', [
          'Wizz Air: it cannot keep your medication refrigerated on board.',
          'Plan to bring your own way of keeping it cool.'
        ], [PG]),
        card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
      ],
      faq: [
        ['Can I bring medication on a Wizz Air flight?', 'Yes. Wizz Air says to keep medicine in your hand luggage at all times.'],
        ['Do I need a certificate for insulin on Wizz Air?', 'Yes: Wizz Air says to carry a medical certificate confirming you need essential medicines such as insulin during your trip.'],
        ['Can Wizz Air keep my medication cold?', 'No, it cannot keep medication refrigerated on board.']
      ],
      tableTitle: 'Wizz Air medication rules at a glance',
      tableNote: 'What Wizz Air\'s own page says. Where Wizz Air is silent we say so.',
      rows: [
        ['Where should medicine go?', 'Hand luggage at all times'],
        ['Insulin?', 'Carry a medical certificate that you need it during the trip'],
        ['Fridge on board?', 'No, Wizz Air cannot refrigerate medication'],
        ['Help with taking medication?', 'Cabin crew cannot help; travel with an assistant'],
        ['Over 100 ml, needles and syringes?', NP]
      ],
      extra: steps(['Keep all medicine in your hand luggage.', 'Carry a medical certificate for insulin and other essential medicines.', 'Bring your own cooler for medication that must stay cold.', 'Travel with an assistant if you need help taking medication.'])
    });
  }

  // ---------------- THAI AIRWAYS ----------------
  {
    const PG = ['https://www.thaiairways.com/en-th/content/special-assistance/advice-for-sick-passengers/', 'Thai Airways: Advice for sick passengers', 'Medication in carry-on luggage'];
    add({
      slug: 'thai-airways', name: 'Thai Airways',
      h1: 'Thai Airways Medication Policy: Medicine, Insulin Needles & Inhalers on a Thai Flight (2026)',
      desc: 'Can you bring medication on Thai Airways? Yes: it advises carrying prescribed medicines, inhalers, needles and syringes in carry-on luggage, not checked bags, with enough for delays. Checked 18 October 2026.',
      answer: 'Yes. Thai Airways advises carrying your prescribed medication in your carry-on baggage, enough for the whole trip and for unexpected delays. Diabetic travellers should carry all medication, needles, syringes and glucose monitors in carry-on luggage, and asthmatics should hand-carry inhalers.',
      srcNote: 'From Thai Airways\' own "Advice for sick passengers" page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on', 'Keep it with you', 'Thai advises carrying prescribed medication in your carry-on baggage.', [
          'Thai Airways: carry your prescribed medications in your carry-on baggage.',
          'Thai: heart and respiratory patients should have enough cardiac medication for the whole trip, including sublingual nitroglycerin, in carry-on luggage, plus a separate list of medications with dosing intervals and tablet size in case they are lost.',
          'Thai: passengers with epilepsy should have enough medication in hand baggage for the flight and for unexpected delays.',
          'Thai recommends carrying your medication or a medical ID bracelet at all times and alerting Thai staff in case of allergic reaction.'
        ], [PG], true),
        card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The Thai page we read gives no liquid limit for medication.', [
          'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
        ], [PG]),
        card('needles', 'Insulin & syringes', 'warn', 'Carry-on, not checked', 'Needles, syringes, injections', 'Thai advises diabetic travellers to carry needles and syringes in carry-on luggage.', [
          'Thai Airways: diabetic travellers should carry all medications, needles, syringes, blood glucose monitors, sugared snacks and a device to store needles or lancets in carry-on luggage and not in checked luggage.',
          'Thai: for well controlled diabetes, order the appropriate diabetic meal from the airline in advance.'
        ], [PG]),
        card('inhaler', 'Inhalers', 'go', 'Hand-carry', 'Asthma', 'Thai says asthmatics must hand-carry vital medication, especially quick-relief inhalers.', [
          'Thai Airways: asthmatics fit to fly should hand-carry any vital medication on board, particularly inhalers for rapid relief of symptoms.'
        ], [PG]),
        card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
      ],
      faq: [
        ['Can I bring medication on a Thai Airways flight?', 'Yes. Thai advises carrying prescribed medication in your carry-on baggage, enough for the trip and for delays.'],
        ['Where should I pack insulin needles on Thai Airways?', 'Thai says diabetic travellers should carry medications, needles, syringes and glucose monitors in carry-on luggage, not checked luggage.'],
        ['Should I hand-carry my inhaler on Thai Airways?', 'Yes, Thai says asthmatics should hand-carry vital medication, particularly quick-relief inhalers.']
      ],
      tableTitle: 'Thai Airways medication rules at a glance',
      tableNote: 'What Thai Airways\' own page says. Where Thai is silent we say so.',
      rows: [
        ['Where should medication go?', 'Carry-on luggage, enough for the trip and delays'],
        ['Needles and syringes?', 'Carry-on luggage, not checked'],
        ['Inhalers?', 'Hand-carry on board'],
        ['Diabetic meal?', 'Order it from the airline in advance'],
        ['Over 100 ml and cold storage?', NP]
      ],
      extra: steps(['Pack all prescribed medication in your carry-on, enough for delays.', 'Keep a separate list of medications with doses in case they are lost.', 'Put needles, syringes and glucose monitors in carry-on luggage.', 'Hand-carry quick-relief inhalers.'])
    });
  }

  // ---------------- QATAR AIRWAYS ----------------
  {
    const PG1 = ['https://www.qatarairways.com/en/baggage/restricted.html', 'Qatar Airways: Restrictions on dangerous goods', 'Medicinal and toiletry items'];
    const PG2 = ['https://www.qatarairways.com/en/services-special/disability-and-medical.html', 'Qatar Airways: Disability and medical assistance', 'Medication, diabetic and asthmatic passengers'];
    add({
      slug: 'qatar-airways', name: 'Qatar Airways',
      h1: 'Qatar Airways Medication Policy: Medicine, Insulin & Inhalers on a Qatar Airways Flight (2026)',
      desc: 'Can you bring medication on Qatar Airways? Yes: non-radioactive medicinal items can go in hand or checked baggage within quantity limits, and Qatar Airways recommends carrying necessary medication and a fit-to-fly letter in your carry-on. Checked 18 October 2026.',
      answer: 'Yes. Qatar Airways allows non-radioactive medicinal and toiletry items, including medicines containing alcohol, in checked and hand baggage within set quantity limits, and recommends carrying any necessary medication and a fit-to-fly letter in your carry-on. A diabetic passenger who injects insulin once or twice a day must self-administer it.',
      srcNote: 'From Qatar Airways\' own pages, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on recommended', 'Keep it with you', 'Qatar Airways recommends carrying any necessary medication in your carry-on baggage.', [
          'Qatar Airways: it recommends carrying a fit-to-fly letter and any necessary medication in your carry-on baggage.',
          'Qatar Airways: you may carry non-radioactive medicinal and toiletry items in your checked and hand baggage.',
          'Qatar Airways: if your condition needs it, you must provide a medical certificate confirming you are fit to travel by air, with or without medication.'
        ], [PG1, PG2], true),
        card('liquids', 'Liquid medication', 'warn', 'Quantity limits apply', 'Medicinal items and sprays', 'Qatar Airways allows medicinal items, including aerosols and medicines containing alcohol, within total quantity limits.', [
          'Qatar Airways: medicinal and toiletry items include aerosols such as hairsprays, perfumes and colognes, and medicines containing alcohol.',
          'Qatar Airways: a limit on the total net quantity of these items applies (the exact figures are in its dangerous goods rules); exemptions for baby foods, medication and special dietary requirements are explained in its FAQs.'
        ], [PG1]),
        card('needles', 'Insulin & syringes', 'warn', 'Self-administer', 'Insulin injections', 'Qatar Airways says insulin injections once or twice a day must be self-administered.', [
          'Qatar Airways: a controlled diabetic passenger on insulin injections does not need to fill in the Medical Information Form (MEDIF); an unstable diabetic passenger or one with complications does.',
          'Qatar Airways: if a diabetic passenger needs an insulin injection once or twice a day, it must be self-administered.',
          'Qatar Airways: diabetic passengers can choose a Diabetic Meal via Manage booking at least 24 hours before departure.',
          'The pages we read do not give a rule for carrying syringes through security.'
        ], [PG2]),
        card('inhaler', 'Inhalers', 'go', 'Carry them', 'Asthma', 'Qatar Airways reminds asthmatic passengers to carry any necessary medication.', [
          'Qatar Airways: asthmatic passengers are reminded to carry any necessary medication; a MEDIF is needed if you had asthma attacks resulting in hospitalisation within six months before the flight or need medical oxygen on the flight.'
        ], [PG2]),
        card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG2])
      ],
      faq: [
        ['Can I bring medication on a Qatar Airways flight?', 'Yes. Qatar Airways allows medicinal items in hand and checked baggage within quantity limits and recommends carrying necessary medication and a fit-to-fly letter in your carry-on.'],
        ['Can I inject insulin on a Qatar Airways flight?', 'Yes, but Qatar Airways says an insulin injection needed once or twice a day must be self-administered; cabin crew are not permitted to give injections.'],
        ['Do I need a MEDIF for diabetes on Qatar Airways?', 'Not if you are a controlled diabetic on insulin injections; you do if you are unstable or have complications.']
      ],
      tableTitle: 'Qatar Airways medication rules at a glance',
      tableNote: 'What Qatar Airways\' own pages say. Where Qatar Airways is silent we say so.',
      rows: [
        ['Where should medication go?', 'Carry-on recommended; allowed in hand and checked baggage'],
        ['Insulin?', 'Self-administered; no MEDIF if controlled'],
        ['Fit-to-fly letter?', 'Recommended; required for certain conditions'],
        ['Diabetic meal?', 'Book at least 24 hours before departure'],
        ['Needles and syringes at security, cold storage?', NP]
      ],
      extra: steps(['Pack necessary medication and a fit-to-fly letter in your carry-on.', 'Check the quantity limits for medicinal and toiletry items on Qatar Airways\' dangerous goods page.', 'Book a diabetic meal at least 24 hours before departure if you need one.', 'Fill in the MEDIF if your condition is unstable or needs oxygen.'])
    });
  }
};
