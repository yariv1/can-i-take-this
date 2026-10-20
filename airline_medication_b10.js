// Airline Medication batch 10 (2026-10-20): 8 airlines. Only facts from pages READ on 2026-10-20.
module.exports = function (X) {
  const { add, card, steps, NP, ABROAD_LINES } = X;
  const ab = (P) => card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [P]);
  const gap = (id, title, chip, sub, P, nm, what) => card(id, title, 'warn', 'Not published', sub, 'The ' + nm + ' page we read gives no rule for ' + what + '.', ['The page we read gives no rule for ' + what + ': ask the airline and check the security rules at your departure airport.'], [P]);

  // ---------------- COPA ----------------
  {
    const P1 = ['https://help.copaair.com/hc/en-us/articles/360051949233-Can-I-take-my-medications-with-me', 'Copa Airlines: Can I take my medications with me?', 'Medication and syringes'];
    const P2 = ['https://help.copaair.com/hc/en-us/articles/17528362406935-Can-I-carry-insulin-in-my-carry-on', 'Copa Airlines: Can I carry insulin in my carry-on?', 'Insulin'];
    add({
      slug: 'copa-airlines', name: 'Copa Airlines',
      h1: 'Copa Airlines Medication Policy: Medicine, Insulin & Syringes on a Copa Flight (2026)',
      desc: 'Can you bring medication on Copa Airlines? Yes: as carry-on with a prescription. Syringes need a doctor\'s note or prescription shown at the counter, professionally labelled medication and original packaging. Checked 20 October 2026.',
      answer: 'Yes. Copa says medications must travel with you in the cabin as carry-on, with a medical prescription. You may carry medically necessary syringes if you show a doctor\'s note or prescription at the counter, the medication has a pharmaceutical or professionally printed label, and syringes and vials stay in their original packaging.',
      srcNote: 'From Copa Airlines\' own help centre articles, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on + prescription', 'Keep it with you', 'Copa says medications travel with you as carry-on, with a prescription.', [
          'Copa Airlines: medications have to travel with you onboard as carry-on baggage, with a medical prescription, preferably stating the number of doses and the times to take them.',
          'Copa recommends taking enough medication for the whole trip.',
          'Copa: you may be asked to check your carry-on bag at the gate; it is your responsibility to remove your medications first.'
        ], [P1], true),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'Copa', 'liquid limits for medication'),
        card('needles', 'Insulin & syringes', 'warn', 'Note + labels', 'Needles, syringes, injections', 'Copa allows medically necessary syringes with a doctor\'s note or prescription and labelled medication.', [
          'Copa Airlines: show a doctor\'s note verifying your condition, or a prescription for the medication that needs syringes, at the counter.',
          'Copa: the medication must carry a pharmaceutical or professionally printed label identifying the medication or the manufacturer, whatever its form.',
          'Copa: syringes and vials must be in their original packaging or box and always accompanied by a prescription.',
          'Copa: for insulin, a physician\'s notification is required to have it onboard; amounts over the maximum must be declared to the TSA or inspection personnel.'
        ], [P1, P2]),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'Copa', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['Can I carry insulin on Copa Airlines?', 'Yes in carry-on, with a physician\'s notification; amounts over the maximum must be declared to inspection personnel.'],
        ['What do I need to carry syringes on Copa?', 'A doctor\'s note or prescription at the counter, professionally labelled medication, and syringes and vials in original packaging.'],
        ['Should I remove medication if Copa checks my bag at the gate?', 'Yes, Copa says it is your responsibility to remove your medications first.']
      ],
      tableTitle: 'Copa Airlines medication rules at a glance',
      tableNote: 'What Copa\'s own articles say. Where Copa is silent we say so.',
      rows: [
        ['Where should medication go?', 'Carry-on, with a prescription'],
        ['Syringes?', 'Doctor\'s note or prescription; labelled medication; original packaging'],
        ['Insulin?', 'Physician\'s notification required onboard'],
        ['Gate-checked bag?', 'Remove medication first'],
        ['Over 100 ml, cold storage?', NP]
      ],
      extra: steps(['Carry medication in the cabin with the prescription.', 'Keep syringes and vials in original packaging with the label.', 'Take a physician\'s notification for insulin.'])
    });
  }

  // ---------------- SAA ----------------
  {
    const P = ['https://www.flysaa.com/manage-fly/before-flying/special-assistance', 'South African Airways: Special travelling assistance', 'Travelling with medication'];
    add({
      slug: 'south-african-airways', name: 'South African Airways',
      h1: 'South African Airways Medication Policy: Medicine, Syringes & Cooler Boxes on an SAA Flight (2026)',
      desc: 'Can you bring medication on South African Airways? Yes: in hand luggage with a doctor\'s letter. Diabetic prescription medicine, syringes and needles must be sealed and labelled, limited to what the flight needs. Checked 20 October 2026.',
      answer: 'Yes. SAA says to keep medication in your hand luggage (within the 8 kg limit) with a doctor\'s letter outlining your condition, medication and dosage. Prescription medicine, syringes and needles used by diabetics must be sealed and properly labelled, and syringes and needles are limited to the amount the flight needs.',
      srcNote: 'From South African Airways\' own special assistance page, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand luggage', 'Keep it with you', 'SAA says to keep medication in hand luggage with a doctor\'s letter.', [
          'South African Airways: keep your medication in your hand luggage, not exceeding the required 8 kg, and carry a doctor\'s letter outlining your condition, medication and dosage requirements.',
          'SAA: all excess medicines and liquids are to be carried in checked baggage.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'warn', 'Airport rules apply', 'Over 100 ml (3.4 oz)', 'SAA says to follow the airport\'s liquid restrictions; excess goes in checked baggage.', [
          'South African Airways: when taking liquids through security control, comply with the airport\'s restrictions; excess medicines and liquids go in checked baggage.',
          'Its restricted items page says exemptions are made for medications, baby products and special dietary requirements (liquid rules apply to international flights only).'
        ], [P]),
        card('needles', 'Insulin & syringes', 'warn', 'Sealed + labelled', 'Needles, syringes, injections', 'SAA requires diabetic medicine, syringes and needles to be sealed and labelled.', [
          'South African Airways: all prescription medicine, syringes and needles used by diabetics must be sealed and properly labelled.',
          'SAA: the quantity of syringes and needles is limited to the amount required for the flight; dispose of them safely as your doctor instructs.'
        ], [P]),
        card('cold', 'Cold medication', 'warn', 'Cooler box', 'Medication that must stay cold', 'SAA says to bring a cooler box with ice packs and keep it with you.', [
          'South African Airways: for medication requiring refrigeration, bring a cooler box with ice packs; keep this medication with you throughout the flight.'
        ], [P]),
        card('allergy', 'Allergies', 'warn', 'Bring your own', 'Emergency medication', 'SAA asks severely allergic travellers to bring their own emergency medication.', [
          'South African Airways: if you have a severe allergy you must bring your own emergency medication; SAA takes no responsibility for an allergic reaction on board.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I carry syringes on South African Airways?', 'Yes for diabetics, if medicine, syringes and needles are sealed and properly labelled and limited to the flight\'s needs.'],
        ['Do I need a doctor\'s letter on SAA?', 'SAA says to carry a letter outlining your condition, medication and dosage in case of difficulties.'],
        ['How do I keep medication cold on SAA?', 'Bring a cooler box with ice packs and keep it with you during the flight.']
      ],
      tableTitle: 'South African Airways medication rules at a glance',
      tableNote: 'What SAA\'s own page says. Where SAA is silent we say so.',
      rows: [
        ['Where should medication go?', 'Hand luggage (8 kg), with a doctor\'s letter'],
        ['Diabetic syringes and needles?', 'Sealed, labelled, only what the flight needs'],
        ['Cold medication?', 'Cooler box with ice packs, kept with you'],
        ['Excess medicine?', 'Checked baggage'],
        ['Severe allergy?', 'Bring your own emergency medication']
      ],
      extra: steps(['Pack medication and a doctor\'s letter in hand luggage.', 'Seal and label syringes and needles.', 'Bring a cooler box with ice packs for cold medication.'])
    });
  }

  // ---------------- ROYAL JORDANIAN ----------------
  {
    const P1 = ['https://www.rj.com/en/info-and-tips/special-services/passenger-with-special-needs-ada', 'Royal Jordanian: Traveling with special needs', 'Medication storage and assistance'];
    const P2 = ['https://www.rj.com/en/info-and-tips/baggage-information/what-not-to-carry', 'Royal Jordanian: Baggage restrictions', 'Liquids, medicines and hypodermic needles'];
    add({
      slug: 'royal-jordanian', name: 'Royal Jordanian',
      h1: 'Royal Jordanian Medication Policy: Medicine, Insulin & Hypodermic Needles on an RJ Flight (2026)',
      desc: 'Can you bring medication on Royal Jordanian? Medicines needed in flight skip the liquid bag and are shown at security. Hypodermic needles are allowed if required for medical reasons. No fridge on board; crew can give a bag and ice. Checked 20 October 2026.',
      answer: 'Yes. Royal Jordanian says medicines required during the flight do not need to go in the liquids plastic bag, and must be presented at the security check. Hypodermic needles are not allowed unless required for medical reasons. Its aircraft have no refrigerators for insulin, and crew cannot administer medication.',
      srcNote: 'From Royal Jordanian\'s own special needs and baggage restrictions pages, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Show at security', 'Needed in flight', 'Medicines needed during the flight are exempt from the liquids bag and shown at security.', [
          'Royal Jordanian: medicines and special food (e.g. baby food) required during the flight do not need to be carried in the plastic bag.',
          'Royal Jordanian: all these items have to be presented at the security check.',
          'Royal Jordanian: it is unable to provide medical services or administration of medication.'
        ], [P1, P2], true),
        card('liquids', 'Liquid medication', 'go', 'Exempt if needed in flight', 'Over 100 ml (3.4 oz)', 'Medicines needed in flight need not go in the 100 ml bag.', [
          'Royal Jordanian: other liquids go through security in containers of at most 100 ml in one transparent re-sealable 1 litre bag; medicines required during the flight are the exception and are shown at the check.',
          'Royal Jordanian: non-radioactive medicinal articles, including medicines containing alcohol, are restricted to specific quantity limits.'
        ], [P2]),
        card('needles', 'Insulin & syringes', 'warn', 'Medical reasons only', 'Hypodermic needles', 'Royal Jordanian does not allow hypodermic needles unless required for medical reasons.', [
          'Royal Jordanian: hypodermic needles are on its list of items removed at security unless required for medical reasons.',
          'The pages we read do not say what proof is needed; carry a doctor\'s letter and ask the airline.'
        ], [P2]),
        card('cold', 'Cold medication', 'stop', 'No fridge', 'Insulin and cold medicines', 'Royal Jordanian aircraft have no refrigerators or chillers for medication.', [
          'Royal Jordanian: its aircraft are not equipped with refrigerators or chillers for medication such as insulin.',
          'Royal Jordanian: cabin crew may provide a plastic bag and ice or iced water to chill medication, at your own responsibility.'
        ], [P1]),
        ab(P2)
      ],
      faq: [
        ['Can I carry insulin on Royal Jordanian?', 'Medicines needed in flight skip the liquids bag but are shown at security; there is no fridge on board.'],
        ['Are syringes allowed on Royal Jordanian?', 'Hypodermic needles are allowed if required for medical reasons.'],
        ['Will RJ crew give me my medication?', 'No, it cannot administer medication; crew may provide a bag and ice.']
      ],
      tableTitle: 'Royal Jordanian medication rules at a glance',
      tableNote: 'What Royal Jordanian\'s own pages say. Where RJ is silent we say so.',
      rows: [
        ['Medicines needed in flight?', 'Not in the liquids bag; show at security'],
        ['Hypodermic needles?', 'Only if required for medical reasons'],
        ['Fridge on board?', 'No; crew can give a bag and ice'],
        ['Help taking medication?', 'Not provided'],
        ['Proof required for syringes?', NP]
      ],
      extra: steps(['Show medicines at the security check.', 'Carry a doctor\'s letter for needles.', 'Bring your own cooling for insulin.'])
    });
  }

  // ---------------- AEGEAN ----------------
  {
    const P = ['https://en.aegeanair.com/travel-info/travelling-with-aegean/baggage/baggage-allowance/', 'Aegean: Baggage allowance FAQ', 'Can I carry medicine in my personal item or carry-on bag?'];
    add({
      slug: 'aegean', name: 'Aegean Airlines',
      h1: 'Aegean Airlines Medication Policy: Medicine in Hand Baggage on an Aegean Flight (2026)',
      desc: 'Can you bring medication on Aegean? Yes: essential medications are allowed in your carry-on or personal item. Liquid medication over 100 ml may need a prescription or doctor\'s note; check with the Aegean call center. Checked 20 October 2026.',
      answer: 'Yes. Aegean says essential medications are allowed in your personal item or carry-on bag. If liquid medication exceeds 100 ml, you may need a prescription or a doctor\'s note, and Aegean asks you to check with its call center.',
      srcNote: 'From Aegean\'s own baggage allowance FAQ, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on', 'Personal item or carry-on', 'Aegean says essential medications are allowed in your personal item or carry-on.', [
          'Aegean: yes, essential medications are allowed in your personal item or carry-on bag.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'warn', 'May need a note', 'Over 100 ml (3.4 oz)', 'Aegean says liquid medication over 100 ml may need a prescription or doctor\'s note.', [
          'Aegean: if liquid medication exceeds 100 ml, you may need a prescription or a doctor\'s note; verify with the Aegean call center.'
        ], [P]),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P, 'Aegean', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P, 'Aegean', 'keeping medication cold'),
        ab(P)
      ],
      faq: [
        ['Can I carry medicine in my carry-on on Aegean?', 'Yes, essential medications are allowed in your personal item or carry-on bag.'],
        ['Do I need a doctor\'s note for liquid medicine on Aegean?', 'Over 100 ml you may need a prescription or doctor\'s note; check with the Aegean call center.']
      ],
      tableTitle: 'Aegean medication rules at a glance',
      tableNote: 'What Aegean\'s own FAQ says. Where Aegean is silent we say so.',
      rows: [
        ['Where should medicine go?', 'Personal item or carry-on'],
        ['Liquid medication over 100 ml?', 'May need a prescription or doctor\'s note'],
        ['Needles, syringes, cold storage?', NP]
      ],
      extra: steps(['Keep essential medication in your carry-on.', 'Carry a prescription or doctor\'s note for liquids over 100 ml.'])
    });
  }

  // ---------------- AIR ARABIA ----------------
  {
    const P = ['https://www.airarabia.com/en/about-us/conditions-of-carriage', 'Air Arabia: General conditions of carriage', 'Restricted articles'];
    add({
      slug: 'air-arabia', name: 'Air Arabia',
      h1: 'Air Arabia Medication Policy: Syringes & Medical Needles on an Air Arabia Flight (2026)',
      desc: 'Can you bring medication on Air Arabia? Hypodermic needles and syringes are allowed only if required for medical reasons and accompanied by a medical certificate confirming the condition. Checked 20 October 2026.',
      answer: 'Air Arabia\'s conditions of carriage list hypodermic needles and syringes among articles you may not carry, unless they are required for medical reasons and accompanied by a medical certificate confirming the medical condition that requires them.',
      srcNote: 'From Air Arabia\'s own general conditions of carriage, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        gap('pills', 'Pills & tablets', 'x', 'Medicine in general', P, 'Air Arabia', 'where to pack everyday tablets'),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P, 'Air Arabia', 'liquid medication limits'),
        card('needles', 'Insulin & syringes', 'warn', 'Medical certificate', 'Needles, syringes, injections', 'Syringes are allowed only for medical reasons with a medical certificate.', [
          'Air Arabia: hypodermic needles and syringes are on its list of articles you may not carry, unless required for medical reasons and accompanied by a medical certificate confirming the medical condition necessitating carriage.'
        ], [P], true),
        ab(P)
      ],
      faq: [
        ['Can I carry syringes on Air Arabia?', 'Only if required for medical reasons and accompanied by a medical certificate confirming the condition.']
      ],
      tableTitle: 'Air Arabia medication rules at a glance',
      tableNote: 'What Air Arabia\'s conditions of carriage say. Where Air Arabia is silent we say so.',
      rows: [
        ['Hypodermic needles and syringes?', 'Only for medical reasons, with a medical certificate'],
        ['Tablets, liquids, cold storage?', NP]
      ],
      extra: steps(['Carry a medical certificate for syringes.', 'Ask Air Arabia about liquids and cold medication.'])
    });
  }

  // ---------------- AZUL ----------------
  {
    const P = ['https://www.voeazul.com.br/br/pt/sua-viagem/planeje/bagagens/de-mao', 'Azul: Bagagem de mao (carry-on baggage)', 'Valuable and fragile items'];
    add({
      slug: 'azul', name: 'Azul',
      h1: 'Azul Medication Policy: Essential Medicine in Your Carry-On on an Azul Flight (2026)',
      desc: 'Can you bring medication on Azul? Essential medicines must travel with you in the cabin and never be checked. The Azul carry-on page we read gives no rules for syringes or liquids. Checked 20 October 2026.',
      answer: 'Azul\'s carry-on page lists essential medicines among the items that must go with you in the cabin: never check them. The page we read gives no rule for syringes, liquid medication or cold storage.',
      srcNote: 'From Azul\'s own carry-on baggage page (in Portuguese), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Cabin only', 'Never check them', 'Azul says essential medicines must go with you in the cabin.', [
          'Azul: essential medicines are among the items that must go with you in the cabin; never check them in.'
        ], [P], true),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P, 'Azul', 'liquid medication limits'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P, 'Azul', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P, 'Azul', 'keeping medication cold'),
        ab(P)
      ],
      faq: [
        ['Can I check my medicine on Azul?', 'Azul says essential medicines must go in the cabin with you and should never be checked.']
      ],
      tableTitle: 'Azul medication rules at a glance',
      tableNote: 'What Azul\'s own carry-on page says. Where Azul is silent we say so.',
      rows: [
        ['Essential medicines?', 'Cabin only; never check them'],
        ['Syringes, liquids, cold storage?', NP]
      ],
      extra: steps(['Keep essential medicine in your cabin bag.', 'Ask Azul about syringes and liquids before you fly.'])
    });
  }

  // ---------------- OMAN AIR ----------------
  {
    const P = ['https://www.omanair.com/en/faqs-baggage', 'Oman Air: Baggage FAQ', 'Essential medication and valuables'];
    add({
      slug: 'oman-air', name: 'Oman Air',
      h1: 'Oman Air Medication Policy: Essential Medicine in Hand Baggage on an Oman Air Flight (2026)',
      desc: 'Can you bring medication on Oman Air? Essential medication should never be checked: use your hand baggage allowance for medicines and medical documents. Checked 20 October 2026.',
      answer: 'Oman Air says essential medication should never be checked, and recommends using your hand baggage allowance for medicines and medical documents. The FAQ page we read gives no rule for syringes, liquids or cold storage.',
      srcNote: 'From Oman Air\'s own baggage FAQ, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand baggage', 'Never check them', 'Oman Air says essential medication should never be checked.', [
          'Oman Air: essential medication should never be checked; it will not be liable for loss, damage or spoilage of such items in checked baggage.',
          'Oman Air: use your hand baggage allowance for important items including medicines and medical documents.'
        ], [P], true),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P, 'Oman Air', 'liquid medication limits'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P, 'Oman Air', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P, 'Oman Air', 'keeping medication cold'),
        ab(P)
      ],
      faq: [
        ['Can I check my medication on Oman Air?', 'Oman Air says essential medication should never be checked; carry it in hand baggage.']
      ],
      tableTitle: 'Oman Air medication rules at a glance',
      tableNote: 'What Oman Air\'s own FAQ says. Where Oman Air is silent we say so.',
      rows: [
        ['Essential medication?', 'Hand baggage; never check it'],
        ['Medical documents?', 'Hand baggage'],
        ['Syringes, liquids, cold storage?', NP]
      ],
      extra: steps(['Carry medicine and medical documents in hand baggage.', 'Ask Oman Air about syringes before you fly.'])
    });
  }

  // ---------------- MALAYSIA AIRLINES ----------------
  {
    const P = ['https://www.malaysiaairlines.com/ph/en/travel-info/baggage/cabin-baggage.html', 'Malaysia Airlines: Cabin baggage', 'Exempted items'];
    add({
      slug: 'malaysia-airlines', name: 'Malaysia Airlines',
      h1: 'Malaysia Airlines Medication Policy: Medicine & Liquids Exemption on a Malaysia Airlines Flight (2026)',
      desc: 'Can you bring medication on Malaysia Airlines? Yes: medicine is an exempted item in the cabin; carry documents showing your special medical needs and present them at airport security. Checked 20 October 2026.',
      answer: 'Yes. Malaysia Airlines lists medicine among the exempted items you can bring into the cabin outside the liquids bag. Carry documents that show your special medical needs and present them when passing airport security.',
      srcNote: 'From Malaysia Airlines\' own cabin baggage page, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Cabin, with documents', 'Exempted items', 'Malaysia Airlines lets you bring medicine into the cabin with documents.', [
          'Malaysia Airlines: if you have special needs items such as medicine, baby milk or food, you can bring them on board.',
          'Malaysia Airlines: carry the documents that show your special medical or dietary needs and present them at airport security.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'go', 'Exempted', 'Over 100 ml (3.4 oz)', 'Medicine is an exempted item from the liquids bag when you show documents.', [
          'Malaysia Airlines: liquids, aerosols and gels go in one re-sealable transparent bag of at most one litre total; medicine for special needs is an exempted item shown with documents.'
        ], [P]),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P, 'Malaysia Airlines', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P, 'Malaysia Airlines', 'keeping medication cold'),
        ab(P)
      ],
      faq: [
        ['Can I bring liquid medicine on Malaysia Airlines?', 'Yes, medicine is an exempted item; present documents showing your medical needs at security.']
      ],
      tableTitle: 'Malaysia Airlines medication rules at a glance',
      tableNote: 'What Malaysia Airlines\' own page says. Where it is silent we say so.',
      rows: [
        ['Medicine in the cabin?', 'Exempted item'],
        ['Proof?', 'Documents showing special medical needs, shown at security'],
        ['Syringes, cold storage?', NP]
      ],
      extra: steps(['Carry documents showing your medical needs.', 'Show the medicine at airport security.'])
    });
  }
};
