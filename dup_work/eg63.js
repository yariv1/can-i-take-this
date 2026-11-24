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

