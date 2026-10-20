// Airline Medication batch 12 (2026-10-20): 5 airlines. Only facts from pages READ on 2026-10-20.
// Virgin Atlantic: flywith.virginatlantic.com page read from the Internet Archive copy (the live host returns 403 to our reader) + the live dangerous-items page.
module.exports = function (X) {
  const { add, card, steps, NP, ABROAD_LINES } = X;
  const ab = (P) => card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [P]);
  const gap = (id, title, chip, sub, P, nm, what) => card(id, title, 'warn', 'Not published', sub, 'The ' + nm + ' page we read gives no rule for ' + what + '.', ['The page we read gives no rule for ' + what + ': ask the airline and check the security rules at your departure airport.'], [P]);

  // ---------------- VIRGIN ATLANTIC ----------------
  {
    const P1 = ['https://flywith.virginatlantic.com/gb/en/on-the-flight/wellbeing-and-health/flying-with-medication-or-equipment.html', 'Virgin Atlantic: Bring your medication or medical equipment onboard', 'Medication, cold storage, needles and syringes'];
    const P2 = ['https://www.virginatlantic.com/en-US/policies/dangerous-or-restricted-items', 'Virgin Atlantic: Dangerous or restricted items', 'Hypodermic syringes, medicines with alcohol'];
    add({
      slug: 'virgin-atlantic', name: 'Virgin Atlantic',
      h1: 'Virgin Atlantic Medication Policy: Medicine, Insulin & Syringes on a Virgin Atlantic Flight (2026)',
      desc: 'Can you bring medication on Virgin Atlantic? Yes: prescription and over-the-counter medicine in original packaging, with a doctor\'s letter. Needles and syringes are allowed for medical treatment. No fridge on board, but crew top up a cool bag with ice. Checked 20 October 2026.',
      answer: 'Yes. Virgin Atlantic says to bring enough medication in your hand baggage for the journey plus two or three days, in its original pharmacy-labelled packaging, with a letter from your doctor. Needles and syringes are allowed for treating medical conditions if you also carry a doctor\'s letter or a printed pharmaceutical label in your name. The onboard fridge cannot be used, but crew will top up a cool bag with ice.',
      srcNote: 'From Virgin Atlantic\'s own medication page (read from an archived copy of the page, because the live site blocked our reader) and its live dangerous items page, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand bag + doctor\'s letter', 'Keep it with you', 'Virgin Atlantic wants medicine in original packs, with a doctor\'s letter for prescription medication.', [
          'Virgin Atlantic: bring enough medication in your hand baggage for the journey plus two or three days in case of delay or lost baggage; pack the rest in checked baggage.',
          'Virgin Atlantic: carry a letter from your medical practitioner naming the medication (including the generic drug name), the doses, what it is for and any other medical items such as syringes or EpiPens.',
          'Virgin Atlantic: the medication should be in its original packaging, labelled by a pharmacy to show it was prescribed for you; carry a repeat prescription in case of loss.',
          'Virgin Atlantic: over-the-counter medicines such as headache tablets are fine if they are legal in your destination and stay in the original packaging.'
        ], [P1], true),
        card('liquids', 'Liquid medication', 'warn', 'Airport rules apply', 'Over 100 ml (3.4 oz)', 'Virgin Atlantic points you to your airport\'s own rules for liquid medication.', [
          'Virgin Atlantic: increased security at UK airports affects how much liquid medication you can take in hand baggage; check your airport\'s website or the Department for Transport for the latest advice.',
          'Virgin Atlantic: its dangerous items page lists medicines containing alcohol as allowed in hand and checked baggage, up to 2 kg or 2 litres in total and 0.5 kg or 0.5 litres for each item.'
        ], [P1, P2]),
        card('needles', 'Insulin & syringes', 'warn', 'Letter or label', 'Needles, syringes, injections', 'Virgin Atlantic allows needles and syringes for medical treatment with a doctor\'s letter or a pharmacy label.', [
          'Virgin Atlantic: you may bring needles and syringes onboard for the treatment of medical conditions.',
          'Virgin Atlantic: carry a letter from your medical practitioner confirming the kind of medication and what it is for; without one, the medication must have a printed pharmaceutical label showing it is prescribed for and belongs to you.',
          'Virgin Atlantic: show this evidence at check-in and at security screening, and keep it with you at all times.',
          'Virgin Atlantic: for an insulin pump or continuous glucose monitor it recommends reading and printing the Civil Aviation Authority medical device awareness card.'
        ], [P1, P2]),
        card('cold', 'Cold medication', 'warn', 'Cool bag, crew add ice', 'Medication that must stay cold', 'Virgin Atlantic says the onboard fridge cannot hold medication, but crew will top up a cool bag with ice.', [
          'Virgin Atlantic: the onboard fridge cannot be used to keep medication cold.',
          'Virgin Atlantic: if you bring a cool bag, the crew will be happy to top it up with ice.',
          'Virgin Atlantic: the hold is kept at 4 to 5 degrees Celsius, which is why it advises keeping the medication you need in hand baggage.'
        ], [P1]),
        card('devices', 'Medical equipment', 'warn', 'Call 48 hours ahead', 'CPAP, pumps and other devices', 'Virgin Atlantic asks you to call its Special Assistance team at least 48 hours before you fly with medical equipment.', [
          'Virgin Atlantic: it cannot supply electricity to medical equipment, so devices must run on batteries; carry enough for the flight and wrap spare batteries individually in hand luggage.',
          'Virgin Atlantic: CPAP, Bi-PAP and VPAP machines can be used onboard without medical approval if they have an independent power source that meets the airline\'s requirements.',
          'Virgin Atlantic: call Special Assistance at least 48 hours before travel.'
        ], [P1]),
        ab(P1)
      ],
      faq: [
        ['Can I carry insulin and syringes on Virgin Atlantic?', 'Yes. Needles and syringes are allowed for medical treatment if you carry a doctor\'s letter or a pharmacy label in your name, and show it at check-in and security.'],
        ['Can Virgin Atlantic keep my medication in the fridge?', 'No. The onboard fridge cannot be used, but crew will top up a cool bag with ice.'],
        ['How much medication should I carry in hand baggage on Virgin Atlantic?', 'Enough for the journey plus two or three days in case of delay or lost baggage.']
      ],
      tableTitle: 'Virgin Atlantic medication rules at a glance',
      tableNote: 'What Virgin Atlantic\'s own pages say. Where Virgin Atlantic is silent we say so.',
      rows: [
        ['Where should medication go?', 'Hand baggage: journey plus 2 or 3 days; the rest in the hold'],
        ['Papers?', 'Doctor\'s letter; original pharmacy-labelled packaging'],
        ['Needles and syringes?', 'Allowed for medical treatment, with letter or label'],
        ['Cold medication?', 'Cool bag; crew add ice; no fridge'],
        ['Powered medical equipment?', 'Battery only; call Special Assistance 48 hours ahead']
      ],
      extra: steps(['Pack medication for the flight plus two or three days in hand baggage, in the original packs.', 'Carry a doctor\'s letter and a repeat prescription.', 'Bring a cool bag; ask crew for ice.'])
    });
  }

  // ---------------- VIETNAM AIRLINES ----------------
  {
    const P1 = ['https://www.vietnamairlines.com/vn/en/travel-information/baggage/restricted-baggage/Liquids', 'Vietnam Airlines: Liquids', 'Prescribed drugs, liquid limits'];
    const P2 = ['https://www.vietnamairlines.com/us/en/travel-information/baggage/restricted-baggage/medical-drugs-make-up-aerosol', 'Vietnam Airlines: Medicine, make-up and sprays', 'Medicine in carry-on and checked baggage'];
    add({
      slug: 'vietnam-airlines', name: 'Vietnam Airlines',
      h1: 'Vietnam Airlines Medication Policy: Prescribed Drugs & Liquid Medicine on a Vietnam Airlines Flight (2026)',
      desc: 'Can you bring medication on Vietnam Airlines? Yes: prescribed drugs with a label matching your name are allowed in carry-on and checked baggage without the liquid limit. Flights to or from the US: liquid medicine in checked baggage only. Checked 20 October 2026.',
      answer: 'Yes. Vietnam Airlines allows prescribed drugs in carry-on and checked baggage without the usual liquid limit if the label shows the prescriber\'s name and address and your own name, matching your passport. Other non-radioactive medicine is allowed in single containers under 0.5 kg or 0.5 litre and 2 kg or 2 litres in total. On flights to or from the US, such items are only allowed in checked baggage.',
      srcNote: 'From Vietnam Airlines\' own liquids and medicine pages, last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('liquids', 'Liquid medication', 'go', 'Prescription label', 'Over 100 ml (3.4 oz)', 'Vietnam Airlines lets prescribed drugs with a matching label through without the liquid limit.', [
          'Vietnam Airlines: prescribed drugs are allowed in carry-on and checked baggage without limitation if they carry the prescriber\'s first name, last name and address and the user\'s first and last name, matching the passenger\'s name.',
          'Vietnam Airlines: other non-radioactive medicine, including sprays, is allowed in carry-on and checked baggage in single containers under 0.5 kg or 0.5 litre, and up to 2 kg or 2 litres per passenger in total.',
          'Vietnam Airlines: on domestic flights it does not limit liquid volume, as long as the baggage rules on number, weight and size are met.'
        ], [P1, P2], true),
        card('us', 'Flights to or from the US', 'stop', 'Checked baggage only', 'US routes', 'Vietnam Airlines says on flights from or to the US, these items are only allowed in checked baggage.', [
          'Vietnam Airlines: for flights from or to the US, medicine and spray items of this kind are only allowed in checked baggage.'
        ], [P2]),
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P2, 'Vietnam Airlines', 'ordinary pills and tablets'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P2, 'Vietnam Airlines', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P2, 'Vietnam Airlines', 'keeping medication cold'),
        ab(P2)
      ],
      faq: [
        ['Can I carry liquid medicine on Vietnam Airlines?', 'Yes. Prescribed drugs with your name and the prescriber\'s details on the label are allowed without limitation; on US routes liquid medicine goes in checked baggage only.'],
        ['What is the limit for non-prescribed medicine on Vietnam Airlines?', 'Under 0.5 kg or 0.5 litre per container and 2 kg or 2 litres in total per passenger.']
      ],
      tableTitle: 'Vietnam Airlines medication rules at a glance',
      tableNote: 'What Vietnam Airlines\' own pages say. Where Vietnam Airlines is silent we say so.',
      rows: [
        ['Prescribed drugs?', 'Carry-on and checked, no limit, if the label matches your name'],
        ['Other medicine and sprays?', 'Under 0.5 kg or 0.5 litre each, 2 kg or 2 litres in total'],
        ['US flights?', 'Checked baggage only'],
        ['Domestic flights?', 'No liquid volume limit'],
        ['Syringes, cold storage?', NP]
      ],
      extra: steps(['Keep prescribed drugs in the original container with a label showing your name and the prescriber\'s details.', 'Put liquid medicine in checked baggage on US flights.'])
    });
  }

  // ---------------- VOLARIS ----------------
  {
    const P1 = ['https://cms.volaris.com/es/informacion-util/servicios-especiales/asistencia-medica/', 'Volaris: Asistencia médica a pasajeros (page in Spanish)', 'Medicines on board'];
    add({
      slug: 'volaris', name: 'Volaris',
      h1: 'Volaris Medication Policy: Medicine in Your Carry-on on a Volaris Flight (2026)',
      desc: 'Can you bring medication on Volaris? Yes: Volaris suggests carrying medication in your carry-on, with your doctor\'s prescription and only reasonable amounts. Crew cannot give you medication. Checked 20 October 2026.',
      answer: 'Yes. Volaris suggests carrying your medicines in your carry-on bag, with your doctor\'s prescription, and only reasonable amounts for your trip. Its crew are not allowed to give any medication, so if you cannot take it yourself you need to travel with someone who can help.',
      srcNote: 'From Volaris\' own medical assistance page (read in Spanish), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on + prescription', 'Keep it with you', 'Volaris suggests medicine in the carry-on, with a prescription and reasonable amounts.', [
          'Volaris: it suggests taking your medication in your carry-on bag.',
          'Volaris: you should have your doctor\'s prescription and carry only reasonable amounts for your trip.',
          'Volaris: its crew are not authorised to give any kind of medication; if you cannot take it yourself you need to travel with someone to help.'
        ], [P1], true),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'Volaris', 'liquid limits for medication'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'Volaris', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'Volaris', 'keeping medication cold'),
        card('devices', 'Medical equipment', 'warn', 'Check the list', 'CPAP and oxygen', 'Volaris lists the breathing devices you may take and limits spare batteries.', [
          'Volaris: you may bring a respirator, ventilator or CPAP machine, or one of the portable oxygen concentrators on its list.',
          'Volaris: spare batteries are limited to two of up to 160 Wh, each protected on its own and carried in separate plastic bags.'
        ], [P1]),
        ab(P1)
      ],
      faq: [
        ['Can I bring medicine on Volaris?', 'Yes. Volaris suggests keeping it in your carry-on, with your doctor\'s prescription and only reasonable amounts.'],
        ['Will Volaris crew give me my medication?', 'No. Volaris crew are not authorised to give any medication; bring someone who can help.']
      ],
      tableTitle: 'Volaris medication rules at a glance',
      tableNote: 'What Volaris\' own page says. Where Volaris is silent we say so.',
      rows: [
        ['Where should medicine go?', 'Carry-on bag'],
        ['Papers?', 'Your doctor\'s prescription'],
        ['How much?', 'Reasonable amounts for your trip'],
        ['Crew help?', 'Not allowed to give medication'],
        ['Syringes, liquids, cold storage?', NP]
      ],
      extra: steps(['Pack your medicine in your carry-on with the prescription.', 'Take only what you need for the trip.', 'Ask Volaris about syringes and liquids.'])
    });
  }

  // ---------------- ITA AIRWAYS ----------------
  {
    const P1 = ['https://www.ita-airways.com/it_it/fly-ita/baggage/restricted-prohibited-items.html', 'ITA Airways: Restricted and prohibited items (page in Italian)', 'Medicines, personal-care articles, liquids'];
    add({
      slug: 'ita-airways', name: 'ITA Airways',
      h1: 'ITA Airways Medication Policy: Medicine & Liquid Limits on an ITA Airways Flight (2026)',
      desc: 'Can you bring medication on ITA Airways? Non-radioactive medicines, including ones containing alcohol, are allowed up to 2 kg or 2 litres in total and 0.5 kg or 0.5 litre each. Carry-on liquids are limited to 100 ml at security. Checked 20 October 2026.',
      answer: 'Yes, within limits. ITA Airways lists non-radioactive medicines and personal-care articles, including medicines containing alcohol, as allowed in a total net quantity of up to 2 kg or 2 litres, and up to 0.5 kg or 0.5 litre for each product. For liquids, gels and aerosols in hand baggage the 100 ml container limit also applies at security. The page we read gives no rule for syringes or cold storage.',
      srcNote: 'From ITA Airways\' own restricted items page (read in Italian from an archived copy, because the live site blocked our reader), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('liquids', 'Liquid medication', 'warn', 'Quantity limits', 'Over 100 ml (3.4 oz)', 'ITA Airways limits medicines to 0.5 kg or litre each and 2 kg or litres in total; 100 ml applies in hand baggage.', [
          'ITA Airways: non-radioactive medicines and personal-care articles (including aerosols and medicines containing alcohol) are allowed in a total net quantity of no more than 2 kg or 2 litres, and no more than 0.5 kg or 0.5 litre per product.',
          'ITA Airways: liquids, gels and aerosols in hand baggage are further limited to containers of 100 ml (3.4 oz) at the security check.',
          'ITA Airways: aerosol valves must be protected by a cap or other suitable means.'
        ], [P1], true),
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'ITA Airways', 'ordinary pills and tablets'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'ITA Airways', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'ITA Airways', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['How much medicine can I take on ITA Airways?', 'ITA Airways allows non-radioactive medicines up to 2 kg or 2 litres in total and 0.5 kg or 0.5 litre per product.'],
        ['Does the 100 ml limit apply to medicine on ITA Airways?', 'Its page says liquids, gels and aerosols in hand baggage are limited to 100 ml containers at security; it does not list a medicine exception.']
      ],
      tableTitle: 'ITA Airways medication rules at a glance',
      tableNote: 'What ITA Airways\' own page says. Where ITA Airways is silent we say so.',
      rows: [
        ['Total medicine and personal-care articles?', 'Up to 2 kg or 2 litres'],
        ['Each product?', 'Up to 0.5 kg or 0.5 litre'],
        ['Liquids in hand baggage?', '100 ml containers at security'],
        ['Syringes, cold storage, pills?', NP]
      ],
      extra: steps(['Keep each product under 0.5 kg or 0.5 litre.', 'Ask ITA Airways about syringes and liquid medicine over 100 ml.'])
    });
  }

  // ---------------- SUNEXPRESS ----------------
  {
    const P1 = ['https://www.sunexpress.com/en-gb/information/luggage-info/hazardous-goods/', 'SunExpress: Dangerous goods', 'Medicines and toilet articles'];
    add({
      slug: 'sunexpress', name: 'SunExpress',
      h1: 'SunExpress Medication Policy: Medicines in Hand or Checked Baggage on a SunExpress Flight (2026)',
      desc: 'Can you bring medication on SunExpress? Its dangerous goods page allows non-radioactive medicines up to 2 litres per passenger, with each tube at most 500 ml, and says other liquid and customs rules must be considered. Checked 20 October 2026.',
      answer: 'Yes, within limits. SunExpress lists non-radioactive medicines together with toilet articles and cosmetics: up to 2 litres per passenger in total, each tube at most 500 ml, and other liquid and customs rules must also be considered. The page we read gives no rule for syringes, pills or cold storage.',
      srcNote: 'From SunExpress\' own dangerous goods page (read from an archived copy, because the live site blocked our reader), last checked 20 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('liquids', 'Liquid medication', 'warn', 'Max 2 L, 500 ml each', 'Over 100 ml (3.4 oz)', 'SunExpress allows medicines up to 2 litres per passenger, 500 ml each, and points to other liquid rules.', [
          'SunExpress: non-radioactive medicines, with toilet articles and cosmetics such as aerosols, perfumes and hair sprays, are allowed up to 2 litres per passenger, each tube at most 500 ml.',
          'SunExpress: other liquid and customs legislation must also be considered.'
        ], [P1], true),
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'SunExpress', 'ordinary pills and tablets'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'SunExpress', 'needles and syringes'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'SunExpress', 'keeping medication cold'),
        ab(P1)
      ],
      faq: [
        ['How much medicine can I take on SunExpress?', 'Up to 2 litres per passenger in total, each tube at most 500 ml, according to its dangerous goods page.']
      ],
      tableTitle: 'SunExpress medication rules at a glance',
      tableNote: 'What SunExpress\' own page says. Where SunExpress is silent we say so.',
      rows: [
        ['Non-radioactive medicines?', 'Up to 2 litres per passenger, each tube at most 500 ml'],
        ['Other liquid and customs rules?', 'Must also be considered'],
        ['Syringes, pills, cold storage?', NP]
      ],
      extra: steps(['Keep each medicine container under 500 ml.', 'Ask SunExpress about syringes and cold storage.'])
    });
  }
};
