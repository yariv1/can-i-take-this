    const P = ['https://www.omanair.com/en/faqs-baggage', 'Oman Air: Baggage FAQ', 'Essential medication and valuables'];
    const P2 = ['https://www.omanair.com/en/dangerous-goods-policy', 'Oman Air: Batteries & Dangerous Goods Policy', 'Medicinal articles, dry ice, oxygen'];
    add({
      slug: 'oman-air', name: 'Oman Air',
      h1: 'Oman Air Medication Policy: Essential Medicine, Dry Ice and Oxygen on an Oman Air Flight (2026)',
      desc: 'Can you bring medication on Oman Air? Essential medication should never be checked. Its dangerous goods policy allows medicines containing alcohol and toilet articles in hand and checked bags up to 2 L, allows up to 2.5 kg of dry ice with approval, and needs medical clearance for oxygen. Checked 24 November 2026.',
      answer: 'Oman Air says essential medication should never be checked and recommends hand baggage for medicines and medical documents. Its dangerous goods policy allows medicinal articles, including medicines containing alcohol, in hand and checked bags up to 2 kg or 2 L in total (0.5 per item), allows dry ice up to 2.5 kg per passenger with Oman Air approval, and needs a medical form and clinic approval for oxygen. It gives no rule for syringes.',
      srcNote: 'From Oman Air\'s own baggage FAQ and dangerous goods policy pages, last checked 24 November 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand baggage', 'Never check them', 'Oman Air says essential medication should never be checked.', [
          'Oman Air: essential medication should never be checked; it will not be liable for loss, damage or spoilage of such items in checked baggage.',
          'Oman Air: use your hand baggage allowance for important items including medicines and medical documents.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'go', 'Within 2 L in total', 'Medicinal articles and aerosols', 'Oman Air allows medicinal articles, including medicines containing alcohol, in hand and checked baggage up to 2 kg or 2 L in total and 0.5 kg or 0.5 L per item.', [
          'Oman Air: non-radioactive medicinal or toilet articles, including medicines containing alcohol, are permitted in both hand and checked baggage with no Oman Air approval.',
          'Oman Air: the maximum net quantity is 2 kg or 2 L in total, and each single article may not exceed 0.5 kg or 0.5 L.',
          'Oman Air: the item is restricted and the rules of the airport you fly from also apply.'
        ], [P2]),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P, 'Oman Air', 'needles and syringes'),
        card('cold', 'Cold medication', 'warn', 'Dry ice 2.5 kg, with approval', 'Medication that must stay cold', 'Oman Air allows up to 2.5 kg of dry ice per passenger for non-hazardous perishables, with Oman Air approval; the package must let the gas escape.', [
          'Oman Air: dry ice is permitted for packing non-hazardous perishable items, up to 2.5 kg per passenger, and the Oman Air approval column is ticked for this item.',
          'Oman Air: the bag must allow carbon dioxide gas to escape, and checked baggage with dry ice must be labelled "dry ice" or "carbon dioxide, solid" with the net weight.'
        ], [P2]),
        card('oxygen', 'Oxygen & equipment', 'warn', 'Medical clearance needed', 'Oxygen cylinders and concentrators', 'Oman Air allows medical oxygen cylinders up to 5 kg only for carriage, with a MEDIF form and clinic approval; using one on board needs medical clearance.', [
          'Oman Air: gaseous oxygen or air cylinders for medical use may be carried up to 5 kg gross weight, but not used during the flight, with a MEDIF form filled and approval from its clinic.',
          'Oman Air: portable oxygen concentrators must be battery-operated electronic devices, and using one or a cylinder on board needs MEDA medical clearance. Devices using liquid oxygen are forbidden.'
        ], [P2]),
        ab(P)
      ],
      faq: [
        ['Can I check my medication on Oman Air?', 'Oman Air says essential medication should never be checked; carry it in hand baggage.'],
        ['Can I bring dry ice for medicine on Oman Air?', 'Up to 2.5 kg per passenger for non-hazardous perishables, with Oman Air approval, in a bag that lets the gas escape.'],
        ['Can I use a portable oxygen concentrator on Oman Air?', 'Only with MEDA medical clearance from the Oman Air clinic; the concentrator must be battery-operated.']
      ],
      tableTitle: 'Oman Air medication rules at a glance',
      tableNote: 'What Oman Air\'s own pages say. Where Oman Air is silent we say so.',
      rows: [
        ['Essential medication?', 'Hand baggage; never check it'],
        ['Medicines containing alcohol, toilet articles?', 'Hand and checked bags, up to 2 L in total and 0.5 L per item'],
        ['Dry ice?', 'Up to 2.5 kg per passenger, with Oman Air approval'],
        ['Medical oxygen?', 'Cylinder up to 5 kg for carriage only; MEDIF and clinic approval'],
        ['Syringes?', NP]
      ],
      extra: steps(['Carry medicine and medical documents in hand baggage.', 'Ask Oman Air for approval before you pack dry ice.', 'Ask Oman Air about syringes before you fly.'])
    });
