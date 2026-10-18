// Airline Medication batch 7 (session 36, 2026-10-18): same rules as the pilot (only facts from pages READ on 2026-10-18; "Not published" where the page is silent).
// Loaded by airline_medication.js: module.exports = ctx => { ... add({...}) ... }
module.exports = function (X) {
  const { add, card, steps, NP, ABROAD_LINES } = X;

  // ---------------- ANA ----------------
  {
    const PG1 = ['https://www.ana.co.jp/en/us/travel-information/customers-with-disabilities/medical-requirements/carrying-medical-equipment-on-board/', 'ANA: Traveling with medication and medical equipment', 'Medications, self-injectable medications and needles'];
    const PG2 = ['https://www.ana.co.jp/en/us/travel-information/customers-with-disabilities/medical-requirements/using-autoinjectors-and-portable-medical-devices/', 'ANA: Autoinjectors and portable medical devices', 'Insulin syringes, EpiPens, insulin pumps, CGM'];
    add({
      slug: 'ana', name: 'ANA',
      h1: 'ANA Medication Policy: Medicine, Insulin Pens, EpiPens & Needles on an ANA Flight (2026)',
      desc: 'Can you bring medication on ANA? Yes: prescribed medicine and inhalers, with containers up to 0.5 kg or 0.5 L and 2 kg or 2 L in total. Insulin and EpiPen needles need no advance notice. ANA cannot refrigerate medication. Checked 18 October 2026.',
      answer: 'Yes. ANA lets you bring prescribed medication and asthma inhalers on board: each container up to 0.5 kg or 0.5 L, 2 kg or 2 L in total per passenger. Insulin pens, EpiPens and self-use needles need no advance notice or doctor\'s certificate, but tell security. ANA cannot store or refrigerate medication.',
      srcNote: 'From ANA\'s own medication pages, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Allowed', 'Prescribed medicine and inhalers', 'ANA lets you bring prescribed medication and asthma inhalers on board and use them during the flight.', [
          'ANA: you may bring your prescribed medications and asthma inhalers on board and use them during the flight.',
          'ANA recommends carrying documents that give details about your medication, such as a medication notebook, prescription label, copy of a prescription or doctor\'s certificate.',
          'ANA: for international flights, importing and exporting rules for medication vary by country, so check with the relevant embassy before your trip.'
        ], [PG1], true),
        card('liquids', 'Liquid medication', 'warn', 'Size limit applies', 'Up to 0.5 kg or 0.5 L per container', 'ANA says each medication container must not exceed 0.5 kg or 0.5 L, with a total of 2 kg or 2 L per passenger.', [
          'ANA: by law, each container must not exceed 0.5 kg or 0.5 liters, with a total limit of 2 kg or 2 liters per passenger.',
          'ANA: if you carry a liquid-type cooling pack on an international flight to keep medication cold, choose a pack that clearly shows this purpose on its outside, or bring an English medical certificate saying it is required.'
        ], [PG1, PG2]),
        card('needles', 'Insulin & syringes', 'warn', 'Tell security', 'Insulin pens, EpiPens, needles', 'ANA lets you carry and use insulin syringes, autoinjectors and self-use needles on board without advance notice.', [
          'ANA: insulin syringes, autoinjectors such as EpiPens and needles for self-administered injections of doctor-prescribed medicine can be carried and used on board.',
          'ANA: you do not need to notify it in advance or submit a Medical Information Form (MEDIF), and a doctor\'s certificate is not required.',
          'ANA: tell the security inspector at the checkpoint that you carry an autoinjector or needles, and prepare a prescription, doctor\'s certificate or diabetic ID card (in English for international flights) to pass security smoothly.',
          'ANA: take used syringes and needles with you when you leave the aircraft and discard them as your medical institution says; never leave them on board or put them in aircraft trash bins.',
          'ANA: cabin attendants cannot give injections or medication or operate medical equipment; you or your escort must do it.'
        ], [PG1, PG2]),
        card('cold', 'Cold medication', 'warn', 'Bring your own cooler', 'Medication that must stay cold', 'ANA cannot refrigerate your medication: bring a cooling box or cold pouch.', [
          'ANA: cabin attendants are not allowed to look after or refrigerate your medication on board.',
          'ANA: bring a cooling box, cold pouch or similar if you need one.'
        ], [PG1, PG2]),
        card('devices', 'Pumps & medical devices', 'warn', 'Tell ANA in advance', 'Insulin pump, CGM, oxygen, ventilator', 'Tell the ANA Disability Desk in advance about an insulin pump or CGM.', [
          'ANA: for an insulin pump or continuous glucose monitor, tell the ANA Disability Desk in advance the manufacturer, product name and model number.',
          'ANA: tell the security inspector about the device; if you worry about X-ray screening, say so before the checkpoint and you will get a pat-down instead of walk-through detection and X-ray baggage screening.',
          'ANA: some pumps and CGMs emit radio waves: switch them off or to airplane mode on the aircraft.',
          'ANA: a portable oxygen concentrator or ventilator needs the prescribed ANA Medical Certificate (only on ANA-operated flights under an ANA flight number, not codeshare flights operated by other airlines).'
        ], [PG1, PG2]),
        card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES.concat(['ANA: because airport standards outside Japan differ, ask the embassy or another relevant institution of your destination in advance. On codeshare flights under an ANA number the rules of the operating airline apply.']), [PG2])
      ],
      faq: [
        ['Can I bring medication on an ANA flight?', 'Yes. ANA lets you bring prescribed medication and asthma inhalers on board; each container up to 0.5 kg or 0.5 L, 2 kg or 2 L in total per passenger.'],
        ['Can I carry insulin pens or an EpiPen on ANA?', 'Yes. ANA says insulin pens, autoinjectors and self-use needles can be carried and used on board with no advance notice and no doctor\'s certificate; tell the security inspector.'],
        ['Does ANA refrigerate medication?', 'No. ANA cabin attendants cannot look after or refrigerate your medication: bring a cooling box or cold pouch.']
      ],
      tableTitle: 'ANA medication rules at a glance',
      tableNote: 'What ANA\'s own pages say. Where ANA is silent we say so.',
      rows: [
        ['Pills and inhalers?', 'Allowed; carry documents about your medication'],
        ['Container size?', 'Each container up to 0.5 kg or 0.5 L, 2 kg or 2 L in total per passenger'],
        ['Needles and syringes?', 'Allowed for self-use; no advance notice or certificate; tell security'],
        ['Fridge or cooler on board?', 'Crew cannot refrigerate it: bring your own cooling box'],
        ['Insulin pump or CGM?', 'Tell the ANA Disability Desk in advance; airplane mode on board']
      ],
      extra: steps(['Pack prescribed medication in your carry-on in containers of 0.5 kg or 0.5 L or less, 2 kg or 2 L in total.', 'Carry a prescription, doctor\'s certificate or diabetic ID card, in English for international flights.', 'Tell the security inspector about insulin pens, EpiPens, needles or a medical device.', 'Bring a cooling box if medication must stay cold.', 'Take used syringes and needles with you when you leave the aircraft.'])
    });
  }

  // ---------------- FRONTIER ----------------
  {
    const PG = ['https://faq.flyfrontier.com/help/may-i-bring-medicine-andor-medical-devices-on-the-plane', 'Frontier: May I bring medicine and/or medical devices on the plane?', 'Medicine and medical devices'];
    const PG2 = ['https://faq.flyfrontier.com/help/what-does-tsa-allow-and-not-allow-on-flights', 'Frontier: What does TSA allow and not allow on flights?', '3-1-1 liquids rule'];
    add({
      slug: 'frontier', name: 'Frontier',
      h1: 'Frontier Medication Policy: Medicine & Medical Devices in a Frontier Carry-On (2026)',
      desc: 'Can you bring medication on Frontier? Yes: pack medicine in your carry-on, not checked luggage. Medical devices are allowed in carry-on or checked bags, and bags with only medical devices and supplies are exempt from bag fees. Checked 18 October 2026.',
      answer: 'Yes. Frontier says you may bring both medicine and medical devices. Pack medicine in your carry-on, not checked luggage. Medical devices go in carry-on or checked bags, within carry-on size, and a bag with only medical devices and supplies is exempt from carry-on and checked bag fees. Liquid and syringe rules come from TSA.',
      srcNote: 'From Frontier\'s own help pages and TSA\'s medication pages, last checked 18 October 2026. Rules change, so confirm with the airline and TSA before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Allowed', 'Carry them with you', 'Frontier says to pack medicine in your carry-on bag, not in checked luggage.', [
          'Frontier: yes, you are allowed to bring both medicine and medical devices on board.',
          'Frontier: medicine should always be packed in your carry-on bag, not in checked luggage, so you can reach it during the flight and so temperature changes or delays do not affect it.',
          X.TSA_PILLS_LINE
        ], [PG, X.TSA_PILLS], true),
        card('liquids', 'Liquid medication', 'warn', 'Allowed, declare it', 'Over 100 ml (3.4 oz)', 'Frontier points to TSA: medically necessary liquids can exceed 3.4 oz if declared.', [
          'Frontier: liquids in carry-ons must follow the TSA 3-1-1 rule (containers of 3.4 oz / 100 mL or less in one quart-sized clear bag, one bag per passenger); it tells you to check TSA for other items.',
          X.TSA_LIQ_LINE,
          X.TSA_REMOVE
        ], [PG2, X.TSA_LIQ, X.TSA_FAQ]),
        card('needles', 'Insulin & syringes', 'warn', 'Declare at security', 'Needles, syringes, injections', 'Frontier\'s page does not give a syringe rule; TSA allows unused syringes with injectable medication.', [
          'The Frontier page we read does not say anything about needles or syringes.',
          X.TSA_SYR_LINE,
          X.TSA_INS_LINE
        ], [PG, X.TSA_SYR, X.TSA_INS]),
        card('devices', 'Pumps & medical devices', 'go', 'Allowed', 'Medical devices and supplies', 'Frontier allows medical devices in carry-on or checked bags, within carry-on size, with no bag fee for bags holding only devices and supplies.', [
          'Frontier: medical devices are allowed in both carry-on and checked bags, but must not exceed the allotted carry-on dimensions.',
          'Frontier: bags containing only medical devices and supplies are exempt from carry-on and checked bag fees.',
          'Frontier: extra requirements apply to portable oxygen concentrators and other respiratory devices; see its Special Services page.',
          X.TSA_DEV_LINE
        ], [PG, X.TSA_SUP]),
        card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
      ],
      faq: [
        ['Can I bring medication on a Frontier flight?', 'Yes. Frontier says you may bring medicine and medical devices; pack medicine in your carry-on, not in checked luggage.'],
        ['Does Frontier charge a bag fee for medical devices?', 'No: a bag containing only medical devices and supplies is exempt from carry-on and checked bag fees.'],
        ['Can I bring liquid medicine over 3.4 oz on Frontier?', 'Frontier points to the TSA 3-1-1 rule; TSA allows medically necessary liquids over 3.4 oz if you declare them at the checkpoint.']
      ],
      tableTitle: 'Frontier medication rules at a glance',
      tableNote: 'What Frontier\'s own pages say, plus the TSA rules Frontier refers to. Where Frontier is silent we say so.',
      rows: [
        ['Where should medicine go?', 'Carry-on, not checked luggage'],
        ['Can it be over 100 ml?', 'Frontier follows the TSA 3-1-1 rule; TSA allows more for medical need if declared'],
        ['Needles and syringes?', NP],
        ['Fridge or cooler on board?', NP],
        ['Medical device fees?', 'None for a bag with only devices and supplies']
      ],
      extra: steps(['Pack medicine in your carry-on, not in checked luggage.', 'Declare liquid medication over 3.4 oz to the TSA officer at the checkpoint.', 'Keep a bag with only medical devices and supplies separate to use the fee exemption.', 'Check Frontier\'s Special Services page for oxygen concentrators.'])
    });
  }

  // ---------------- BRITISH AIRWAYS ----------------
  {
    const PG = ['https://www.britishairways.com/content/information/help/faq/baggage/medical-supplies-and-equipment', 'British Airways: Where should I pack medical supplies and equipment?', 'Medical supplies and equipment'];
    add({
      slug: 'british-airways', name: 'British Airways',
      h1: 'British Airways Medication Policy: Medical Supplies & Equipment on a BA Flight (2026)',
      desc: 'Can you bring medical supplies on British Airways? Yes: essential supplies can go in an extra checked bag at no charge with a doctor\'s letter, and there is no limit on medical equipment, which may need BA\'s permission. Checked 18 October 2026.',
      answer: 'Yes. British Airways lets you pack essential medical supplies such as dialysis fluid, colostomy bags or liquid food in bags checked into the hold, in addition to your free allowance and free of charge if the extra bag holds only those supplies and you can show a letter from a medical professional. Medical equipment has no weight or number limit but may need BA\'s permission.',
      srcNote: 'From British Airways\' own help page (last updated by BA 24 April 2024), read 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'warn', 'Not published', 'Pills and everyday medicine', 'The BA page we read does not give a rule for pills or everyday medicine.', [
          'The page we read covers medical supplies and equipment and does not mention pills or everyday medicine.'
        ], [PG], true),
        card('supplies', 'Medical supplies', 'go', 'Extra checked bag, no charge', 'Dialysis fluid, colostomy bags, liquid food', 'BA lets you pack essential medical supplies in an extra checked bag at no charge with a doctor\'s letter.', [
          'British Airways: essential medical supplies for your own use, such as dialysis fluid, colostomy bags or liquid food, can be packed in bags checked into the hold.',
          'British Airways: these bags are in addition to your free baggage allowance and free of charge as long as the extra bag contains only your medical supplies and you can show a letter from a medical professional confirming you need them.'
        ], [PG]),
        card('devices', 'Pumps & medical devices', 'warn', 'May need BA\'s permission', 'CPAP, nebuliser, insulin pump, oxygen concentrator', 'There is no limit on medical equipment, but it may need BA\'s permission to be brought on board.', [
          'British Airways: there is no limit on the weight or number of items of medical equipment you can carry, though they may need British Airways\' permission to be brought on board.',
          'British Airways recommends carrying a letter from a medical professional saying you need the equipment on board or at your destination; this includes a CPAP machine, a nebuliser, an insulin pump or a portable oxygen concentrator (POC).',
          'British Airways recommends bringing these items as hand baggage, not checked baggage, in case you need them in the first days of the journey.'
        ], [PG]),
        card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES.concat(['British Airways: if your journey includes a flight with another airline, that airline\'s policies may be different: check before you fly.']), [PG])
      ],
      faq: [
        ['Can I take medical supplies on British Airways for free?', 'Yes, essential supplies such as dialysis fluid, colostomy bags or liquid food can go in an extra checked bag at no charge if it holds only those supplies and you can show a letter from a medical professional.'],
        ['Is there a limit on medical equipment on British Airways?', 'No weight or number limit, but equipment may need British Airways\' permission to be brought on board; carry a letter from a medical professional.'],
        ['Should I put my CPAP or insulin pump in hand baggage on British Airways?', 'BA recommends bringing medical equipment as hand baggage, in case you need it in the first few days of your journey.']
      ],
      tableTitle: 'British Airways medication rules at a glance',
      tableNote: 'What British Airways\' own page says. Where BA is silent we say so.',
      rows: [
        ['Medical supplies in the hold?', 'Extra bag at no charge with a letter from a medical professional'],
        ['Limit on medical equipment?', 'No weight or number limit; may need BA\'s permission'],
        ['Hand baggage or checked?', 'BA recommends hand baggage for equipment'],
        ['Pills, liquids, needles, cold storage?', NP]
      ],
      extra: steps(['Get a letter from a medical professional saying you need your supplies and equipment.', 'Pack essential supplies in an extra checked bag that holds only those supplies.', 'Ask British Airways about permission to bring medical equipment on board.', 'Carry equipment you may need on day one in your hand baggage.'])
    });
  }
};
