// Airline Medication batch 14 (2026-10-22): Kuwait Airways, Middle East Airlines (MEA), Saudia. Only facts from the airline's OWN pages READ on 2026-10-22.
// Kuwait Airways and MEA block our reader from this region (MEA: Cloudflare country ban; Kuwait Airways: timeout), so those pages were read from archived copies (Wayback) of the airline's own pages.
// Saudia pages were read live in Chrome (MEDIF page, carry-on, permitted, prohibited items) and the portable-oxygen page from an archived copy.
// Kinds the pages say nothing about (pills, needles, cold, and liquids where silent) are filled by the ladder in airline_medication.js polish() (airline's other pages -> named third party UNOFFICIAL -> global).
module.exports = function (X) {
  const { add, card, steps, NP, ABROAD_LINES } = X;
  const ab = (P) => card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [P]);
  const gap = (id, title, chip, sub, P, nm, what) => card(id, title, 'warn', 'Not published', sub, 'The ' + nm + ' page we read gives no rule for ' + what + '.', ['The page we read gives no rule for ' + what + ': ask the airline and check the security rules at your departure airport.'], [P]);

  // ---------------- KUWAIT AIRWAYS ----------------
  {
    const P1 = ['https://kuwaitairways.com/en/is/free-baggage', 'Kuwait Airways: Free baggage, liquids rules and dangerous goods in baggage', 'Liquids, medicines, oxygen cylinders'];
    const P2 = ['https://kuwaitairways.com/en/services/optionalservices/Pages/medical-attention.aspx', 'Kuwait Airways: Optional services, medical attention', 'Medical oxygen and equipment'];
    add({
      slug: 'kuwait-airways', name: 'Kuwait Airways',
      h1: 'Kuwait Airways Medication Policy: Medicine, Liquids & Medical Oxygen on a Kuwait Airways Flight (2026)',
      desc: 'Can you bring medication on Kuwait Airways? Prescription medicines are exempt from the 100 ml liquids limit at Kuwait airport if you can show proof. Medical oxygen needs 72 hours notice. Checked 22 October 2026.',
      answer: 'Yes, with proof. Kuwait Airways says that at Kuwait International Airport prescription medicines, infant food, milk and formulas, and health diet food are exempt from the 100 ml liquids limit, in reasonable quantities for the whole flight, subject to security staff assessment, and you must show official proof of need if asked. Medical oxygen supplied by the airline needs 72 hours notice on international flights, and a respirator, ventilator, portable oxygen concentrator or CPAP needs 48 hours notice.',
      srcNote: 'From Kuwait Airways\' own pages (read from archived copies, because the airline\'s site did not load for us), last checked 22 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'Kuwait Airways', 'ordinary pills and tablets'),
        card('liquids', 'Liquid medication', 'warn', 'Exempt with proof', 'Over 100 ml (3.4 oz)', 'Kuwait Airways says prescription medicines are exempt from the 100 ml liquids limit at Kuwait airport, with proof of need.', [
          'Kuwait Airways: passengers leaving Kuwait International Airport may carry liquids, aerosols and gels in containers of 100 ml each, in a re-sealable bag of up to one litre.',
          'Kuwait Airways: prescription medicines, infant food, milk and formulas, and health diet food are exempt from this measure, in reasonable quantities for the total duration of the flight, allowing for delays or diversions.',
          'Kuwait Airways: carrying these items is subject to security staff assessment, and you must show official proof that you need them when asked.',
          'Kuwait Airways: medicines and toiletries in limited quantities necessary for the journey, such as medicines containing alcohol, may go in hold or cabin baggage if all the packing together does not exceed 2 kg or 2 litres.'
        ], [P1], true),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'Kuwait Airways', 'needles, syringes and insulin'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'Kuwait Airways', 'keeping medication cold'),
        card('oxygen', 'Oxygen & devices', 'warn', 'Notice needed', 'Medical oxygen and equipment', 'Kuwait Airways asks for 72 hours notice for its medical oxygen and 48 hours for a ventilator, POC or CPAP.', [
          'Kuwait Airways: 72 hours advance notice for medical oxygen supplied by the airline on international flights, charged at 200% of the normal one-way fare.',
          'Kuwait Airways: 48 hours advance notice for the use of a respirator, ventilator, portable oxygen concentrator or CPAP.',
          'Kuwait Airways: small gaseous oxygen or air cylinders required for medical use may be carried with the passenger subject to the dangerous goods rules and the airline\'s approval.'
        ], [P2, P1]),
        ab(P1)
      ],
      faq: [
        ['Can I bring liquid medicine over 100 ml on Kuwait Airways?', 'Kuwait Airways says prescription medicines are exempt from the 100 ml liquids limit at Kuwait International Airport, in reasonable quantities for the flight, subject to security assessment and with official proof of need if asked.'],
        ['Does Kuwait Airways provide medical oxygen?', 'Yes. The airline asks for 72 hours notice for the medical oxygen it supplies on international flights and charges 200% of the normal one-way fare. Equipment such as a ventilator, POC or CPAP needs 48 hours notice.']
      ],
      tableTitle: 'Kuwait Airways medication rules at a glance',
      tableNote: 'What Kuwait Airways\' own pages say. Where the pages are silent we say so.',
      rows: [
        ['Liquid medication over 100 ml?', 'Exempt for prescription medicines, reasonable quantity, proof of need, security assessment'],
        ['Medicines in hold or cabin?', 'Limited quantities, total packing up to 2 kg or 2 litres'],
        ['Medical oxygen from the airline?', '72 hours notice, 200% of the normal one-way fare'],
        ['Ventilator, POC or CPAP?', '48 hours notice'],
        ['Pills, syringes, cold storage?', NP]
      ],
      extra: steps(['Carry medicine in its original packaging with the prescription.', 'Bring proof that you need liquid medicine over 100 ml.', 'Give 72 hours notice for airline oxygen, 48 hours for a POC or CPAP.'])
    });
  }

  // ---------------- MEA ----------------
  {
    const P1 = ['https://www.mea.com.lb/english/traveler-info/passenger-services/special-assistance-for-travelers', 'MEA: Special assistance for travelers', 'Syringes, medicines, oxygen, medical conditions'];
    add({
      slug: 'middle-east-airlines', name: 'MEA',
      h1: 'MEA Medication Policy: Syringes, Medicines & Oxygen on a Middle East Airlines Flight (2026)',
      desc: 'Can you bring medication on MEA? Syringes and medicines need a medical report showing the quantity, type and reason, sent 48 hours before departure for approval. Oxygen is free on MEA flights with a doctor\'s form. Checked 22 October 2026.',
      answer: 'With a medical report. MEA says that for syringes and medicines you need a medical report showing the quantity and type of medicine and the medical reason, sent 48 hours before departure to specialsvcs@mea.com.lb for approval. Oxygen on board is free of charge on MEA-operated flights with a form signed by your doctor and approved by MEA\'s doctor, and your own portable concentrator must be notified 48 hours before departure.',
      srcNote: 'From MEA\'s own special assistance page (read from an archived copy, because MEA\'s site blocks our reader), last checked 22 October 2026. MEA\'s baggage pages on liquids and medicines were not readable. Rules change, so confirm with the airline before you fly.',
      scen: [
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'MEA', 'ordinary pills and tablets'),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'MEA', 'liquid limits for medication'),
        card('needles', 'Insulin & syringes', 'warn', 'Medical report, 48 hours ahead', 'Needles, syringes, injections', 'MEA asks for a medical report showing the quantity and type of medicine, sent 48 hours before departure for approval.', [
          'MEA: for syringes and medicines, a medical report is required showing the quantity and type of medicine and stating the medical reason, 48 hours prior to departure.',
          'MEA: to request approval, email specialsvcs@mea.com.lb.'
        ], [P1], true),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'MEA', 'keeping medication cold'),
        card('oxygen', 'Oxygen & devices', 'warn', 'Doctor\'s form + 48 hours', 'Medical oxygen and equipment', 'MEA gives oxygen free on its own flights with a doctor\'s form, and needs 48 hours notice for your own concentrator.', [
          'MEA: oxygen service is free of charge, only on MEA-operated flights and not accepted on codeshare flights.',
          'MEA: the medical form comes from MEA sales offices or specialsvcs@mea.com.lb, must be signed by the patient\'s doctor and approved by MEA\'s doctor through the special services unit.',
          'MEA: oxygen on the ground must be arranged by the passenger, with confirmation sent to special services.',
          'MEA: if you bring your own portable concentrator, notify MEA its name, type, catalogue and specifications including battery details (type, voltage, amp-hours, watt-hours) at least 48 hours before departure, so MEA can say if it is accepted.'
        ], [P1]),
        card('conditions', 'Medical conditions', 'warn', 'Report 72 hours ahead', 'Illness or medical condition', 'MEA asks for a medical report 72 hours before departure and an escort if you cannot manage your needs on board.', [
          'MEA: send a medical report to the special services unit at least 72 hours before departure; the MEDA form must be filled and signed by the patient\'s doctor in English or French.',
          'MEA: a passenger who cannot attend to their own needs during the flight must be escorted.',
          'MEA: for any special assistance, notify MEA at least 48 hours before departure.'
        ], [P1]),
        ab(P1)
      ],
      faq: [
        ['Can I carry syringes and insulin on MEA?', 'MEA says syringes and medicines need a medical report showing the quantity, type and reason, sent 48 hours before departure to specialsvcs@mea.com.lb for approval.'],
        ['Does MEA provide oxygen on board?', 'Yes, free of charge on MEA-operated flights (not codeshares), with a form signed by your doctor and approved by MEA\'s doctor. Your own portable concentrator must be notified 48 hours before departure.']
      ],
      tableTitle: 'MEA medication rules at a glance',
      tableNote: 'What MEA\'s own special assistance page says. Where the page is silent we say so.',
      rows: [
        ['Syringes and medicines?', 'Medical report with quantity, type and reason, 48 hours before departure, approval by email'],
        ['Oxygen on board?', 'Free on MEA flights, doctor\'s form approved by MEA\'s doctor'],
        ['Own portable concentrator?', 'Notify specifications and battery details 48 hours before'],
        ['Medical condition?', 'Report 72 hours before; escort if you cannot manage alone'],
        ['Pills, liquid limit, cold storage?', NP]
      ],
      extra: steps(['Email specialsvcs@mea.com.lb 48 hours before you fly if you carry syringes.', 'Ask your doctor for a report listing the medicine, quantity and reason.', 'Keep medicine in its original packaging.'])
    });
  }

  // ---------------- SAUDIA ----------------
  {
    const P1 = ['https://www.saudia.com/en-SA/book/special-assistance/medif', 'Saudia: Medical certificates (MEDIF)', 'Stretcher, oxygen, medical devices'];
    const P2 = ['https://www.saudia.com/before-flying/special-assistance/medif/portable-oxygen-concentrator', 'Saudia: Portable oxygen concentrator', 'Conditions for using a POC on board'];
    const P3 = ['https://www.saudia.com/en-SA/manage/baggage/prohibited-items', 'Saudia: Prohibited items in baggage and cabin', 'Liquids on flights to the US, Canada and EU'];
    add({
      slug: 'saudia', name: 'Saudia',
      h1: 'Saudia Medication Policy: Medicine, Oxygen & Medical Devices on a Saudia Flight (2026)',
      desc: 'Can you bring medication on Saudia? Saudia\'s pages cover medical oxygen and portable concentrators: a doctor\'s MEDIF form 3 or 7 days ahead, a physician\'s statement 48 hours ahead for a POC. Checked 22 October 2026.',
      answer: 'Saudia\'s pages are about medical assistance and devices, not ordinary medicine. For a stretcher or oxygen kit you send a MEDIF form signed and stamped by your doctor and hospital to meda@saudia.com at least 3 days before domestic and 7 days before international flights. A portable oxygen concentrator needs a physician\'s statement 48 hours ahead and enough battery for the flight plus 150%. The pages we read do not give a rule for pills, syringes or liquid medicine.',
      srcNote: 'From Saudia\'s own pages (MEDIF and baggage pages read on the live site, the portable oxygen concentrator page from an archived copy), last checked 22 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'Saudia', 'ordinary pills and tablets'),
        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P3, 'Saudia', 'liquid medicine over 100 ml (its prohibited-items page lists liquids beyond the permitted limits for flights to and from the US, Canada and the EU, and mentions no medicine exemption)'),
        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'Saudia', 'needles, syringes and insulin'),
        gap('cold', 'Cold medication', 'x', 'Medication that must stay cold', P1, 'Saudia', 'keeping medication cold'),
        card('medif', 'Stretcher or oxygen kit', 'warn', 'MEDIF form 3 or 7 days ahead', 'Medical assistance on board', 'Saudia needs a doctor-signed MEDIF form for a stretcher or oxygen kit, 3 days ahead on domestic and 7 days ahead on international flights.', [
          'Saudia: for a stretcher or oxygen kit on board, fill in the MEDIF form completely, with both the doctor\'s and the hospital\'s stamps, and state its validity (10, 30 or 90 days).',
          'Saudia: send it to meda@saudia.com with the booking details of the patient and any escort.',
          'Saudia: submit medical requests at least three days before departure on domestic flights and seven days before on international flights.',
          'Saudia: if the patient needs a stretcher or continuous oxygen, an ambulance must be arranged at the arrival station.'
        ], [P1]),
        card('oxygen', 'Portable oxygen concentrator', 'warn', 'Approval + battery rules', 'Your own POC', 'Saudia allows approved portable oxygen concentrators with a physician\'s statement 48 hours ahead and enough battery for the flight plus 150%.', [
          'Saudia: the device must meet the Saudi Food and Drug Authority requirements or carry a mark showing it is safe on aircraft, and you must provide the certificate.',
          'Saudia: send the physician\'s statement to meda@saudia.com at least 48 hours before departure, check in at least 3 hours before, and carry the device, batteries and the statement.',
          'Saudia: the batteries go in your hand bag in the cabin, with a maximum of two spare batteries in carry-on baggage.',
          'Saudia: bring batteries for the whole flight plus at least 150% of the expected maximum flight time; for a 10-hour flight, enough charge for 15 hours.'
        ], [P2], true),
        ab(P1)
      ],
      faq: [
        ['Can I bring a portable oxygen concentrator on Saudia?', 'Yes, if it is an approved device. Saudia needs a physician\'s statement emailed to meda@saudia.com at least 48 hours before departure, check-in at least 3 hours ahead, and batteries for the flight plus 150%, with at most two spare batteries in carry-on.'],
        ['How do I arrange a stretcher or oxygen kit on Saudia?', 'Send a MEDIF form signed and stamped by your doctor and hospital to meda@saudia.com at least 3 days before a domestic flight or 7 days before an international flight.']
      ],
      tableTitle: 'Saudia medication rules at a glance',
      tableNote: 'What Saudia\'s own pages say. Where the pages are silent we say so.',
      rows: [
        ['Stretcher or oxygen kit?', 'MEDIF form signed by doctor and hospital, 3 days ahead (domestic) or 7 days (international)'],
        ['Own portable oxygen concentrator?', 'Approved device, physician\'s statement 48 hours ahead, battery for flight + 150%'],
        ['Spare batteries?', 'Maximum two in carry-on'],
        ['Pills, syringes, liquid medicine, cold storage?', NP]
      ],
      extra: steps(['Carry your medicine in its original packaging with the prescription.', 'Email meda@saudia.com early for oxygen or a stretcher.', 'Ask Saudia about syringes and liquid medicine before you fly.'])
    });
  }
};
