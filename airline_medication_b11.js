// Airline Medication batch 11 (2026-10-20): 6 airlines. Only facts from pages READ on 2026-10-20.
module.exports = function (X) {
  const { add, card, steps, NP, ABROAD_LINES } = X;
  const ab = (P) => card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [P]);
  const gap = (id, title, chip, sub, P, nm, what) => card(id, title, 'warn', 'Not published', sub, 'The ' + nm + ' page we read gives no rule for ' + what + '.', ['The page we read gives no rule for ' + what + ': ask the airline and check the security rules at your departure airport.'], [P]);

  // ---------------- LOT ----------------
  {
    const P1 = ['https://www.lot.com/us/en/help-center/health/medicines-in-hand-baggage', 'LOT Polish Airlines: Can I take medicine on a plane?', 'Medicines, liquids, injections'];
    add({
      slug: 'lot-polish', name: 'LOT Polish Airlines',
      h1: 'LOT Polish Airlines Medication Policy: Medicine, Insulin & Syringes on a LOT Flight (2026)',
      desc: 'Can you bring medication on LOT? Yes: prescription and over-the-counter medicines in original packaging, best in carry-on. Liquid medicines are outside the 100 ml limit if declared to security. Syringes with needles: ask LOT. Checked 20 October 2026.',
      answer: 'Yes. LOT says both prescription and over-the-counter medications are permitted, and recommends carrying them in your carry-on bag in the original packaging with the leaflet. Liquid medicines are not counted in the 100 ml allowance if you declare them verbally to security before the inspection. For syringes with needles, LOT asks you to contact its Contact Center.',
      srcNote: 'From LOT\'s own help centre page, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on, original packs', 'Keep it with you', 'LOT permits prescription and over-the-counter medicines and recommends carry-on.', [
          'LOT: both over-the-counter and prescription medications are permitted; you may be asked to confirm they are genuine, so keep them in the original packaging with the leaflet.',
          'LOT: there is no strict limit on the number of packages; the amount should be medically justified and match your needs for the trip.',
          'LOT: a prescription or written recommendation from your doctor helps if security asks questions.'
        ], [P1], true),
        card('liquids', 'Liquid medication', 'warn', 'Declare it at security', 'Over 100 ml (3.4 oz)', 'LOT says liquid medicines are outside the 100 ml allowance if declared and needed for the trip.', [
          'LOT: liquid, aerosol or gel medicines do not count towards the standard 100 ml / 1-litre bag allowance if you declare them verbally to security staff before the inspection starts.',
          'LOT: the medicines must be necessary for the journey, in a quantity that fits your needs.',
          'LOT: pack them where you can reach them easily, because security may ask you to take them out.'
        ], [P1]),
        card('needles', 'Insulin & syringes', 'warn', 'Pens and pumps: no papers', 'Needles, syringes, injections', 'LOT needs no extra documents for pens and pumps; ask LOT about syringes with needles.', [
          'LOT: diabetics who inject during the flight with PEN devices or insulin pumps do not need any extra medical documentation.',
          'LOT: for other cases, such as syringes with needles, consult the LOT Contact Center.',
          'LOT: medicines in injection form may need an extra doctor\'s certificate, and LOT staff are not allowed to help with injections.'
        ], [P1]),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'LOT', 'keeping medication cold in the cabin'),
        card('checked', 'In checked baggage', 'warn', 'Allowed, not advised', 'Hold luggage', 'LOT allows medicines in checked baggage but recommends carry-on.', [
          'LOT: medicines are allowed in checked baggage in their original packaging with the leaflet, but delays and loss are possible.',
          'LOT: temperatures in the hold are very low and may not suit some medicines.'
        ], [P1]),
        ab(P1)
      ],
      faq: [
        ['Can I carry insulin on LOT?', 'Yes. LOT says pens and pumps need no extra medical documents; for syringes with needles contact the LOT Contact Center.'],
        ['Do liquid medicines count in the 100 ml limit on LOT?', 'No, if you declare them verbally to security before the inspection and need them for the trip.'],
        ['Should medicine be in its original packaging on LOT?', 'Yes, because you may be asked to confirm the medicine is genuine.']
      ],
      tableTitle: 'LOT Polish Airlines medication rules at a glance',
      tableNote: 'What LOT\'s own help page says. Where LOT is silent we say so.',
      rows: [
        ['Where should medication go?', 'Carry-on, original packaging and leaflet'],
        ['Liquid medicines?', 'Outside the 100 ml allowance if declared to security'],
        ['Insulin pens and pumps?', 'No extra documents'],
        ['Syringes with needles?', 'Contact the LOT Contact Center'],
        ['Cold storage?', NP]
      ],
      extra: steps(['Keep medicines in the original packs with the leaflet in your carry-on.', 'Say out loud at security that you carry liquid medicine.', 'Ask LOT before you bring syringes with needles.'])
    });
  }

  // ---------------- ISRAIR ----------------
  {
    const P1 = ['https://www.israir.co.il/en-US/Passengers_Info/Accessibility/Flying_With_An_Active_Disease_Allergy_Medical_Equipment', 'Israir: Passengers with an active illness, allergy, medical equipment or injury', 'Medication, cooling, allergy syringe'];
    add({
      slug: 'israir', name: 'Israir',
      h1: 'Israir Medication Policy: Medicine, Cold Medication & Allergy Injectors on an Israir Flight (2026)',
      desc: 'Can you bring medication on Israir? Yes: carry it with you, not in the hold. No fridge on board: bring a soft cooler with ice packs. Bring a medical certificate for an adrenaline syringe. Checked 20 October 2026.',
      answer: 'Yes. Israir tells passengers to carry the medication they need and not send it in the hold. There is no fridge or cold place for passenger medicine, so it recommends a soft cooler with ice. For food allergies it asks you to bring a medical certificate for an adrenaline syringe to show at airport security, and to carry the injector on your body.',
      srcNote: 'From Israir\'s own page (read in Hebrew), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry with you', 'Keep it with you', 'Israir says to carry your medication and not send it in the hold.', [
          'Israir: carry the medication you need and avoid sending it in checked baggage.',
          'Israir: for personal-use medicines it cites the IATA and ICAO limit of up to 500 g or ml per unit and 2 kg or litres in total (non-radioactive).',
          'Israir: cabin crew are trained in first aid but are not allowed to give medication, so a passenger who needs treatment should travel with a companion.'
        ], [P1], true),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'Israir', 'the 100 ml liquid limit for medication'),
        card('needles', 'Insulin & syringes', 'warn', 'Certificate for the injector', 'Needles, syringes, injections', 'Israir asks for a medical certificate for an adrenaline syringe at security.', [
          'Israir: passengers with a food allergy should bring a medical certificate for the adrenaline syringe, to show at airport security.',
          'Israir: carry the allergy medicine your doctor prescribed, such as an auto-injector (for example EpiPen), on your body in an accessible place.',
          'Israir: tell your companions where the medicine is and how to use it, and tell the cabin crew.'
        ], [P1]),
        card('cold', 'Cold medication', 'warn', 'Soft cooler with ice', 'Medication that must stay cold', 'Israir has no fridge for passenger medicine: bring a soft cooler with ice packs.', [
          'Israir: for medicine that needs cooling, bring a soft cooler with ice cubes or ice packs and keep it at your feet during the flight.',
          'Israir: passengers\' medicines cannot be kept in the fridge or any other cold place on board.',
          'Israir: blood samples in any quantity are completely banned on its aircraft.'
        ], [P1]),
        card('allergy', 'Allergies', 'warn', 'No allergen-free promise', 'Emergency medication', 'Israir cannot promise an allergen-free cabin and asks allergic passengers to carry emergency medicine.', [
          'Israir: it cannot guarantee that other passengers will not bring allergens such as peanuts into the cabin.',
          'Israir: it recommends consulting a doctor before the flight, bringing suitable food and wearing an alert bracelet.'
        ], [P1]),
        ab(P1)
      ],
      faq: [
        ['Can I keep medication in the fridge on Israir?', 'No. Israir says passengers\' medicine cannot be stored in a fridge or cold place on board; bring a soft cooler with ice packs.'],
        ['Do I need a certificate for an EpiPen on Israir?', 'Israir asks for a medical certificate for the adrenaline syringe, to show at airport security.'],
        ['Can I put my medication in the hold on Israir?', 'Israir says to avoid it and carry the medication you need with you.']
      ],
      tableTitle: 'Israir medication rules at a glance',
      tableNote: 'What Israir\'s own page says. Where Israir is silent we say so.',
      rows: [
        ['Where should medication go?', 'With you, not in the hold'],
        ['Personal-use limit?', 'Up to 500 g or 500 ml per unit, 2 kg or 2 litres in total (IATA/ICAO, as cited by Israir)'],
        ['Adrenaline syringe?', 'Medical certificate for airport security'],
        ['Cold medication?', 'Soft cooler with ice; no fridge on board'],
        ['Blood samples?', 'Completely banned']
      ],
      extra: steps(['Carry your medication with you, not in the hold.', 'Bring a medical certificate for an adrenaline syringe.', 'Pack a soft cooler with ice for cold medicine.'])
    });
  }

  // ---------------- EL AL ----------------
  {
    const P1 = ['https://www.elal.com/media/4eifwtwx/dangerous-list-en.pdf', 'EL AL: Allowable dangerous goods carried by passengers (PDF, revision October 2022)', 'Insulin and syringes'];
    add({
      slug: 'el-al', name: 'EL AL',
      h1: 'EL AL Medication Policy: Insulin & Syringes in Carry-on or Checked Bags on an EL AL Flight (2026)',
      desc: 'Can you bring insulin and syringes on EL AL? Yes: EL AL\'s allowed-goods list marks insulin and syringes as allowed in carry-on and checked baggage, with no airline approval needed. Checked 20 October 2026.',
      answer: 'Yes for insulin and syringes. EL AL\'s list of dangerous goods that passengers may carry marks insulin and syringes as allowed in both carry-on and checked baggage, with no airline approval required. The page we read does not give rules for other medicines, liquids or keeping medication cold.',
      srcNote: 'From EL AL\'s own allowed-goods document (revision October 2022), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'EL AL', 'ordinary pills and tablets'),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'EL AL', 'the 100 ml liquid limit for medication'),
        card('needles', 'Insulin & syringes', 'go', 'Carry-on and checked', 'Needles, syringes, injections', 'EL AL marks insulin and syringes as allowed in carry-on and in checked baggage.', [
          'EL AL: its list of allowable goods for passengers shows insulin and syringes as YES for carry-on baggage and YES for checked baggage.',
          'EL AL: for this item the document says airline approval is not required.',
          'The document is dated October 2022, so ask EL AL if you need the current rule.'
        ], [P1], true),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'EL AL', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I carry insulin on EL AL?', 'Yes. EL AL\'s allowed-goods list marks insulin and syringes as allowed in carry-on and checked baggage.'],
        ['Do I need EL AL approval for syringes?', 'The EL AL document says airline approval is not required for insulin and syringes.']
      ],
      tableTitle: 'EL AL medication rules at a glance',
      tableNote: 'What EL AL\'s own document says. Where EL AL is silent we say so.',
      rows: [
        ['Insulin and syringes in carry-on?', 'Yes'],
        ['Insulin and syringes in checked bags?', 'Yes'],
        ['Airline approval needed?', 'No, according to the list'],
        ['Other medicines, liquids, cold storage?', NP]
      ],
      extra: steps(['Keep insulin and syringes with you in the cabin.', 'Ask EL AL about other medicines, because its list is silent on them.'])
    });
  }

  // ---------------- KOREAN AIR ----------------
  {
    const P1 = ['https://www.koreanair.com/contents/plan-your-travel/in-flight-experience/travel-tips/healthy-air-travels', 'Korean Air: Healthy air travel', 'Personal medications'];
    add({
      slug: 'korean-air', name: 'Korean Air',
      h1: 'Korean Air Medication Policy: Medicine & Prescriptions on a Korean Air Flight (2026)',
      desc: 'Can you bring medication on Korean Air? Yes: pack medicine you take at regular times in your carry-on. Customs may ask for a prescription or medical certificate. Korean Air suggests an English doctor\'s note. Checked 20 October 2026.',
      answer: 'Yes. Korean Air says to pack medicine you need at regular intervals in your carry-on bag, and notes that customs may ask for a prescription or medical certificate. It suggests keeping documents about your conditions and medicines in English. The page we read gives no rule for liquids, syringes or cold medicine.',
      srcNote: 'From Korean Air\'s own healthy air travel page, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on', 'Keep it with you', 'Korean Air says to pack regular medicine in your carry-on bag.', [
          'Korean Air: if you have a condition that needs medicine at regular times, pack your medicines in your carry-on bag.',
          'Korean Air: customs may ask for a prescription or a medical certificate for your medication.',
          'Korean Air: keep documents about your conditions and medicines in English, in case you need another prescription or a hospital visit.'
        ], [P1], true),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'Korean Air', 'liquid limits for medication'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'Korean Air', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'Korean Air', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I take medication in my carry-on on Korean Air?', 'Yes. Korean Air says to pack regular medicine in your carry-on bag.'],
        ['Do I need a prescription for Korean Air?', 'Korean Air says customs may ask for a prescription or a medical certificate.']
      ],
      tableTitle: 'Korean Air medication rules at a glance',
      tableNote: 'What Korean Air\'s own page says. Where Korean Air is silent we say so.',
      rows: [
        ['Where should regular medicine go?', 'Carry-on bag'],
        ['Papers?', 'Customs may ask for a prescription or medical certificate; English notes advised'],
        ['Syringes, liquids, cold storage?', NP]
      ],
      extra: steps(['Pack regular medicine in your carry-on.', 'Take a prescription or doctor\'s note, in English if you can.'])
    });
  }

  // ---------------- CHINA EASTERN ----------------
  {
    const P1 = ['https://www.ceair.com/global/en_static/Announcement/BaggageService/CarryonBaggage/', 'China Eastern Airlines: Carry-on baggage', 'Liquids and medicines'];
    add({
      slug: 'china-eastern', name: 'China Eastern Airlines',
      h1: 'China Eastern Airlines Medication Policy: Liquid Medicine for Diabetes & Other Illness (2026)',
      desc: 'Can you bring medication on China Eastern? Its carry-on page says liquid medicine needed in flight, for example for diabetes, can be carried after it is examined at the security check. Checked 20 October 2026.',
      answer: 'Yes, for liquid medicine. China Eastern\'s carry-on page says liquid medicines that patients with diabetes or other illnesses need during the flight can be carried only after they are examined at the security check. The page we read gives no rule for pills, syringes or cold medicine.',
      srcNote: 'From China Eastern\'s own carry-on baggage page, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'China Eastern', 'ordinary pills and tablets'),
        card('liquids', 'Liquid medication', 'warn', 'Examined at security', 'Over 100 ml (3.4 oz)', 'China Eastern lets patients carry needed liquid medicine after it is examined at security.', [
          'China Eastern: liquid medicines necessary for patients with diabetes or other illnesses during air travel can be carried only after being examined during the security check.'
        ], [P1], true),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'China Eastern', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'China Eastern', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I carry liquid medicine on China Eastern?', 'Yes, if you need it during the flight: it can be carried after it is examined at the security check.']
      ],
      tableTitle: 'China Eastern medication rules at a glance',
      tableNote: 'What China Eastern\'s own page says. Where China Eastern is silent we say so.',
      rows: [
        ['Liquid medicine for diabetes or other illness?', 'Allowed after examination at security'],
        ['Pills, syringes, cold storage?', NP]
      ],
      extra: steps(['Keep liquid medicine you need on the flight in your carry-on.', 'Show it at the security check.'])
    });
  }

  // ---------------- ARKIA ----------------
  {
    const P1 = ['https://docs.arkia.co.il/fliti/general_terms_eng.htm', 'Arkia: Conditions of contract and notices', 'Dangerous articles and medicines'];
    add({
      slug: 'arkia', name: 'Arkia',
      h1: 'Arkia Medication Policy: What the Conditions of Contract Say About Medicines (2026)',
      desc: 'Can you bring medication on Arkia? Its conditions say medicines and toiletries in minimal quantities needed on the way may be carried. The page gives no rule for syringes or cold medicine. Checked 20 October 2026.',
      answer: 'Yes, in small amounts. Arkia\'s conditions of contract say medicines and toiletries in minimal quantities needed by the passenger on the way may be carried. The page we read gives no rule for syringes, liquids or cold medicine.',
      srcNote: 'From Arkia\'s own conditions of contract, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Minimal quantities', 'Keep it with you', 'Arkia allows medicines in minimal quantities needed on the way.', [
          'Arkia: medicines and toiletries in minimal quantities required by the passenger while en route may be carried.'
        ], [P1], true),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'Arkia', 'liquid limits for medication'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'Arkia', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'Arkia', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I carry medicine on Arkia?', 'Yes, in minimal quantities that you need while travelling, according to its conditions of contract.']
      ],
      tableTitle: 'Arkia medication rules at a glance',
      tableNote: 'What Arkia\'s own conditions say. Where Arkia is silent we say so.',
      rows: [
        ['Medicines on the way?', 'Allowed in minimal quantities'],
        ['Syringes, liquids, cold storage?', NP]
      ],
      extra: steps(['Carry only the amount of medicine you need on the way.', 'Ask Arkia about syringes and cold medicine.'])
    });
  }
};
