// Airline Medication batch 9 (2026-10-18): 15 airlines. Only facts from pages READ on 2026-10-18.
module.exports = function (X) {
  const { add, card, steps, NP, ABROAD_LINES } = X;
  const ab = (P) => card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [P]);
  const noLiq = (P, nm) => card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The ' + nm + ' page we read gives no liquid limit for medication.', ['The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'], [P]);

  // ---------------- WESTJET ----------------
  {
    const P = ['https://www.westjet.com/en-ca/accessible-travel/medication', 'WestJet: Medical equipment and medication', 'Medication, needles and syringes'];
    add({
      slug: 'westjet', name: 'WestJet',
      h1: 'WestJet Medication Policy: Medicine, Insulin Syringes & Epi-Pens on a WestJet Flight (2026)',
      desc: 'Can you bring medication on WestJet? Yes: always in carry-on, ideally your personal item. Syringes are accepted only with the medication they are used for, labelled with your name. WestJet cannot refrigerate medication. Checked 18 October 2026.',
      answer: 'Yes. WestJet says to always take medication in your carry-on, ideally your personal item under the seat. Needles and syringes are accepted only if you need them to administer medication, with the medication in a pharmacy-dispensed label showing your name. WestJet cannot refrigerate medication and crew cannot give you medication.',
      srcNote: 'From WestJet\'s own medical equipment and medication page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on', 'Personal item', 'WestJet says to always take medication in your carry-on, ideally your personal item.', [
          'WestJet: always take medication in your carry-on item; for easy access, put it in the personal item under the seat in front of you.',
          'WestJet: bags are not accessible during transit or delays, and it cannot retrieve your medication for you.',
          'WestJet: leave over-the-counter medication in its original packaging, clearly labelled with the medication information and the manufacturer\'s name.'
        ], [P], true),
        noLiq(P, 'WestJet'),
        card('needles', 'Insulin & syringes', 'warn', 'Only with the medication', 'Needles, syringes, injections', 'WestJet accepts syringes in the personal carry-on item only with the medication they are for.', [
          'WestJet: needles and syringes are accepted in your personal carry-on item only if you require them to administer medication; syringes are not accepted in carry-on without the medication.',
          'WestJet: the medication must carry a pharmacy-dispensed label with your name; syringes need protective needle guards and a proper medical container.',
          'WestJet: dispose of used needles in the onboard sharps container; cabin crew can tell you where it is.',
          'WestJet: if you have an epinephrine auto-injector such as an Epi-pen, it strongly recommends carrying it in your personal carry-on item.'
        ], [P]),
        card('cold', 'Cold medication', 'stop', 'Not refrigerated', 'Medication that must stay cool', 'WestJet cannot refrigerate medication for you.', [
          'WestJet: it is unable to refrigerate medication; if yours must be kept cool, consider an insulated bag with ice packs.'
        ], [P]),
        card('devices', 'Medical devices', 'warn', 'Approved devices', 'Nebulizers, CPAP, pumps', 'WestJet charges no fee for medical equipment, but most portable devices must be approved for air travel.', [
          'WestJet: it does not charge a fee for medical equipment; most portable medical devices must be approved for air travel because their batteries are dangerous goods.',
          'WestJet: batteries must travel in carry-on baggage, never checked; seats such as the emergency exit row are restricted if you need your equipment in flight.',
          'WestJet: acceptance of medical equipment is at its sole discretion.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I bring insulin syringes on WestJet?', 'Yes, in your personal carry-on item, but only with the medication they are used for, which must have a pharmacy label with your name.'],
        ['Does WestJet keep medication cold?', 'No, it is unable to refrigerate medication; bring an insulated bag with ice packs.'],
        ['Where should I pack my medication on WestJet?', 'In your carry-on, ideally the personal item under the seat in front of you.']
      ],
      tableTitle: 'WestJet medication rules at a glance',
      tableNote: 'What WestJet\'s own page says. Where WestJet is silent we say so.',
      rows: [
        ['Where should medication go?', 'Carry-on, ideally the personal item'],
        ['Syringes?', 'Only with the medication, pharmacy label with your name, needle guards'],
        ['Fridge on board?', 'No, bring an insulated bag with ice packs'],
        ['Medical devices?', 'No fee; most must be approved for air travel'],
        ['Over 100 ml?', NP]
      ],
      extra: steps(['Pack medication in your personal item under the seat.', 'Keep the pharmacy label with your name on the medication.', 'Put guards on syringes and carry them in a medical container.', 'Bring an insulated bag with ice packs for cold medication.'])
    });
  }

  // ---------------- VIRGIN AUSTRALIA ----------------
  {
    const P1 = ['https://www.virginaustralia.com/eu/en/travel-info/baggage/carry-on-baggage/', 'Virgin Australia: Carry-on baggage', 'Medical and assistive items'];
    const P2 = ['https://www.virginaustralia.com/us/en/travel-info/international-travel/enhanced-security-procedures/', 'Virgin Australia: Airport security procedures', 'Liquids, medicines and medical items'];
    const P3 = ['https://www.virginaustralia.com/us/en/travel-info/specific-travel/specific-needs-assistance/medical-conditions/', 'Virgin Australia: Flying with medical conditions', 'Medical clearance and medication'];
    add({
      slug: 'virgin-australia', name: 'Virgin Australia',
      h1: 'Virgin Australia Medication Policy: Medicine, Syringes & Insulin on a Virgin Australia Flight (2026)',
      desc: 'Can you bring medication on Virgin Australia? Yes: sharp medical items such as insulin syringes are allowed in the cabin and shown at security; medicines and medical items are exempt from liquid limits with proof such as a doctor\'s letter. Checked 18 October 2026.',
      answer: 'Yes. Virgin Australia allows sharp medical items such as syringes for insulin on board; you present them at security screening. Prescription and non-prescription medicines and medical items needed in flight are exempt from the liquids limit, and you present them with proof such as a doctor\'s letter. Cabin crew cannot help with medication.',
      srcNote: 'From Virgin Australia\'s own carry-on, security and medical pages, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on', 'Show at security', 'Medicines are exempt from the liquids limit when you present proof at the screening point.', [
          'Virgin Australia: prescription and non-prescription medicines (including special dietary products) and medical items required during a flight are exempt from the powders, liquids, aerosols and gels rules.',
          'Virgin Australia: for medicines and medical items you present them with proof (for example a doctor\'s letter) at the screening point.',
          'Virgin Australia: cabin crew cannot assist with the administration of medication under any circumstances; if you cannot do it yourself, travel with a carer.'
        ], [P2, P3], true),
        card('liquids', 'Liquid medication', 'go', 'Exempt', 'Over 100 ml (3.4 oz)', 'Medicines and medical items needed in flight are exempt, shown with proof.', [
          'Virgin Australia: medicines and medical items required during a flight are exempt from the liquids, aerosols and gels limits.',
          'Virgin Australia recommends carrying only essential items on board and placing other liquids in checked baggage.'
        ], [P2]),
        card('needles', 'Insulin & syringes', 'go', 'Allowed in the cabin', 'Needles, syringes, injections', 'Syringes for insulin or other essential treatment are allowed on board and shown at security.', [
          'Virgin Australia: guests who require sharp medical items, such as syringes for insulin or other essential medical treatments, may carry them on board.',
          'Virgin Australia: these items need to be presented during security screening.'
        ], [P1]),
        card('devices', 'Medical devices', 'go', 'Not counted', 'Carry-on allowance', 'Medical and assistive items needed for travel do not count towards your carry-on allowance.', [
          'Virgin Australia: medical and assistive items required for travel, including mobility devices, are permitted in the cabin and exempt from standard carry-on restrictions.',
          'Virgin Australia: examples include CPAP machines, crutches, walking sticks and mobility aids, and prosthetic devices.'
        ], [P1]),
        ab(P2)
      ],
      faq: [
        ['Can I carry insulin syringes on Virgin Australia?', 'Yes, syringes for insulin or other essential treatment are permitted on board and must be presented at security screening.'],
        ['Do I need a doctor\'s letter on Virgin Australia?', 'Virgin Australia says to present medicines and medical items with proof, for example a doctor\'s letter, at the screening point.'],
        ['Does a medical item count as carry-on on Virgin Australia?', 'No, medical and assistive items needed for travel do not count towards your carry-on allowance.']
      ],
      tableTitle: 'Virgin Australia medication rules at a glance',
      tableNote: 'What Virgin Australia\'s own pages say. Where Virgin Australia is silent we say so.',
      rows: [
        ['Insulin syringes?', 'Allowed on board; show at security'],
        ['Liquid limit for medicines?', 'Exempt when needed in flight'],
        ['Proof?', 'For example a doctor\'s letter at the screening point'],
        ['Carry-on allowance?', 'Medical items do not count'],
        ['Help from cabin crew?', 'Not with medication; travel with a carer']
      ],
      extra: steps(['Carry medicines and syringes in your cabin bag.', 'Take a doctor\'s letter and show your medicines at the screening point.', 'Travel with a carer if you cannot take your medication yourself.'])
    });
  }

  // ---------------- ICELANDAIR ----------------
  {
    const P = ['https://www.icelandair.com/support/special-assistance/#medical-concerns', 'Icelandair: Additional assistance, travelers with medical concerns', 'Medication, medical liquids, needles and insulin pump'];
    add({
      slug: 'icelandair', name: 'Icelandair',
      h1: 'Icelandair Medication Policy: Medicine, Insulin Pens & EpiPens on an Icelandair Flight (2026)',
      desc: 'Can you bring medication on Icelandair? Yes: carry it in your hand luggage. Insulin pens and other medically necessary liquids are allowed, syringes and EpiPens can go in carry-on, and there is no refrigeration on board but ice can be provided. Checked 18 October 2026.',
      answer: 'Yes. Icelandair recommends carrying medication in your carry-on. Medically necessary liquids such as insulin pens are allowed on board, and syringes and EpiPens can go in the carry-on. It recommends a doctor\'s note. Refrigeration is not available on board, but it can provide ice.',
      srcNote: 'From Icelandair\'s own special assistance page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Carry-on', 'Keep it with you', 'Icelandair recommends carrying medication in your carry-on.', [
          'Icelandair: it recommends carrying medication in your carry-on.',
          'Icelandair: it encourages adherence to carry-on size limits, but exceptions may be made case by case with a doctor\'s certificate.',
          'Icelandair: carry a doctor\'s note listing your medications.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'go', 'Allowed', 'Insulin pens and medical liquids', 'Medically necessary liquids such as insulin pens are allowed on board.', [
          'Icelandair: medically necessary liquids, such as insulin pens, are allowed on board.',
          'Icelandair: a doctor\'s certificate is recommended in case you are asked to verify the medication.',
          'Icelandair: if refrigeration is needed, bring a cold bag or cooling pack, subject to security approval.'
        ], [P]),
        card('needles', 'Insulin & syringes', 'go', 'Carry-on', 'Needles, syringes, EpiPens', 'Syringes and EpiPens can go in the carry-on.', [
          'Icelandair: you can bring syringes and EpiPens in your carry-on; it recommends a doctor\'s note explaining why you need them in case security asks.',
          'Icelandair: carry only the amount of medication needed for your trip; it is best to keep all medication in your carry-on, but extra syringes can go in checked baggage.',
          'Icelandair: if you use an insulin pump, add it to your booking at least 48 hours before departure.'
        ], [P]),
        card('cold', 'Cold medication', 'warn', 'No fridge', 'Medication that must stay cool', 'There is no refrigeration on board, but Icelandair can provide ice.', [
          'Icelandair: refrigeration is not available on board, but it can provide ice if needed.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I bring insulin pens on Icelandair?', 'Yes, medically necessary liquids such as insulin pens are allowed on board; a doctor\'s certificate is recommended.'],
        ['Do I tell Icelandair about an insulin pump?', 'Yes, add it to your booking at least 48 hours before departure.'],
        ['Can Icelandair keep my medication cold?', 'Refrigeration is not available on board, but it can provide ice.']
      ],
      tableTitle: 'Icelandair medication rules at a glance',
      tableNote: 'What Icelandair\'s own page says. Where Icelandair is silent we say so.',
      rows: [
        ['Where should medication go?', 'Carry-on recommended'],
        ['Insulin pens and liquids?', 'Allowed on board; doctor\'s certificate recommended'],
        ['Syringes and EpiPens?', 'Carry-on; extra syringes may go in checked baggage'],
        ['Insulin pump?', 'Add to booking 48 hours before departure'],
        ['Cold storage?', 'No fridge; ice can be provided']
      ],
      extra: steps(['Pack medication and a doctor\'s note in your carry-on.', 'Add an insulin pump to your booking 48 hours before you fly.', 'Ask for ice on board, or bring a cold bag cleared by security.'])
    });
  }

  // ---------------- ETHIOPIAN ----------------
  {
    const P = ['https://www.ethiopianairlines.com/us/information/special-needs/medical-case-passengers', 'Ethiopian Airlines: Special need / medical case passengers', 'Medications and medical records'];
    add({
      slug: 'ethiopian-airlines', name: 'Ethiopian Airlines',
      h1: 'Ethiopian Airlines Medication Policy: Medicine & Medical Records on an Ethiopian Flight (2026)',
      desc: 'Can you bring medication on Ethiopian Airlines? Yes: carry the medication you may need in your hand luggage with medical documents. Cabin crew cannot refrigerate medication, so bring a cool bag or flask. Checked 18 October 2026.',
      answer: 'Yes. Ethiopian Airlines says passengers must carry any medications they may need in their hand luggage, along with relevant medical documents. Cabin crew cannot refrigerate medications, so temperature-sensitive medication needs your own cool bag or vacuum flask.',
      srcNote: 'From Ethiopian Airlines\' own medical case passengers page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand luggage', 'Keep it with you', 'Ethiopian says to carry any medication you may need in your hand luggage.', [
          'Ethiopian Airlines: passengers must carry any medications they may need in their hand luggage, along with relevant medical documentation.',
          'Ethiopian lists examples of documents: hospital discharge summaries, treatment records, medical history, doctor\'s certificates and emergency treatment plans.'
        ], [P], true),
        noLiq(P, 'Ethiopian'),
        card('needles', 'Insulin & syringes', 'warn', 'Not published', 'Needles, syringes, injections', 'The page we read does not give a rule for needles or syringes.', [
          'The page we read gives no rule for carrying needles or syringes through security: ask the airline and check the airport rules.'
        ], [P]),
        card('cold', 'Cold medication', 'stop', 'Not refrigerated', 'Medication that must stay cold', 'Ethiopian cabin crew cannot refrigerate medications.', [
          'Ethiopian Airlines: cabin crew cannot refrigerate medications; passengers who need temperature-sensitive medication should carry their own cool bag or vacuum flask.'
        ], [P]),
        card('forms', 'Medical clearance', 'warn', 'Tell the airline', 'Ill passengers', 'Tell Ethiopian at booking if the passenger is medically ill.', [
          'Ethiopian Airlines: inform the reservation team at the time of booking if the passenger is medically ill; the MEDIF form must be completed by the attending physician.',
          'Ethiopian Airlines reserves the right to refuse carriage if a passenger\'s condition could compromise flight safety.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Where should I keep my medication on Ethiopian Airlines?', 'In your hand luggage, together with relevant medical documentation.'],
        ['Does Ethiopian Airlines refrigerate medication?', 'No, cabin crew cannot; carry your own cool bag or vacuum flask.'],
        ['Do I need a MEDIF on Ethiopian Airlines?', 'If the passenger is medically ill, tell the reservation team at booking; the attending physician completes the MEDIF.']
      ],
      tableTitle: 'Ethiopian Airlines medication rules at a glance',
      tableNote: 'What Ethiopian Airlines\' own page says. Where Ethiopian is silent we say so.',
      rows: [
        ['Where should medication go?', 'Hand luggage'],
        ['Documents?', 'Relevant medical documentation with you'],
        ['Fridge on board?', 'No; own cool bag or vacuum flask'],
        ['Medically ill passenger?', 'Tell reservations at booking; MEDIF by the physician'],
        ['Needles, syringes, over 100 ml?', NP]
      ],
      extra: steps(['Put all medication you may need in hand luggage.', 'Carry discharge summaries or a doctor\'s certificate.', 'Bring your own cool bag for temperature-sensitive medication.'])
    });
  }

  // ---------------- GOL ----------------
  {
    const P = ['https://www.voegol.com.br/en-us/information/special-assistance/medical-certificates-and-other-forms', 'GOL: Medical certificates and other forms', 'Medicines, needles and syringes'];
    add({
      slug: 'gol', name: 'GOL',
      h1: 'GOL Medication Policy: Medicine, Insulin Syringes & Prescriptions on a GOL Flight (2026)',
      desc: 'Can you bring medication on GOL? Yes: medicines go in hand luggage with a prescription. Needles and syringes are allowed with professionally labelled medication plus a prescription. Dry ice up to 2.5 kg. Checked 18 October 2026.',
      answer: 'Yes. GOL says medicines can go in hand luggage, but you must also take a prescription. Needles and syringes are authorised as long as you have medication with professionally printed labels naming the drug and the manufacturer, plus a prescription. Crew cannot give injectable medication.',
      srcNote: 'From GOL\'s own medical certificates and health tips pages, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand luggage + prescription', 'Keep it with you', 'GOL says medicines can go in hand luggage with a prescription.', [
          'GOL: medicines can be taken in hand luggage, but you must also take a prescription.',
          'GOL recommends asking your doctor for an additional prescription and, if necessary, one in the language of the destination country; a doctor\'s report is also useful at airport security.',
          'GOL: pack food-allergy medication prescribed by your doctor in your carry-on.'
        ], [P], true),
        noLiq(P, 'GOL'),
        card('needles', 'Insulin & syringes', 'warn', 'Labelled + prescription', 'Needles, syringes, injections', 'GOL authorises needles and syringes with professionally labelled medication and a prescription.', [
          'GOL: needles and syringes on board are authorised as long as you have medication with professionally printed labels that identify the drug and the manufacturer or pharmaceutical company, in addition to a prescription.',
          'GOL: in an onboard emergency, crew members are not authorised to administer any injectable medication.'
        ], [P]),
        card('cold', 'Cold medication', 'warn', 'Ask the maker', 'Insulin and cold medicines', 'GOL tells you to ask the manufacturer how to pack medication like insulin.', [
          'GOL: some medications, such as insulin, need proper transport; contact the manufacturer\'s laboratory about packaging during the flight.',
          'GOL: if dry ice is needed to store medicine, only up to 2.5 kg of dry ice is allowed, in hand luggage and checked baggage.'
        ], [P]),
        card('devices', 'Medical devices', 'warn', 'Hand luggage, no use', 'Nebulizers and inhalers', 'Some equipment may be carried in hand luggage but not used on board.', [
          'GOL: some medical equipment is authorised as hand luggage but its use on board is prohibited, such as nebulizers and inhalers.',
          'GOL: essential equipment such as pacemakers and infusion pumps for continuous medication is allowed.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I carry insulin syringes on GOL?', 'Yes, if you have medication with professionally printed labels naming the drug and manufacturer, plus a prescription.'],
        ['Do I need a prescription for medicine on GOL?', 'Yes, GOL says you must take a prescription with medicines in hand luggage.'],
        ['Can I use dry ice for medication on GOL?', 'Yes, up to 2.5 kg in hand luggage and checked baggage.']
      ],
      tableTitle: 'GOL medication rules at a glance',
      tableNote: 'What GOL\'s own pages say. Where GOL is silent we say so.',
      rows: [
        ['Where should medicine go?', 'Hand luggage, with a prescription'],
        ['Needles and syringes?', 'Professionally labelled medication plus a prescription'],
        ['Dry ice?', 'Up to 2.5 kg'],
        ['Nebulizers, inhalers?', 'Hand luggage allowed; not for use on board'],
        ['Over 100 ml?', NP]
      ],
      extra: steps(['Take a prescription, plus a spare, with your medicines.', 'Keep medication in original labelled packaging.', 'Ask the maker how to pack insulin for the flight.'])
    });
  }

  // ---------------- TRANSAVIA ----------------
  {
    const P = ['https://www.transavia.com/help/en-uk/medical-services-assistance/medication-on-board/medicines-on-board', 'Transavia: Bringing medication on board', 'Hand luggage, needles, refrigerated and liquid medicines'];
    add({
      slug: 'transavia', name: 'Transavia',
      h1: 'Transavia Medication Policy: Medicine, Hypodermic Needles & Liquids on a Transavia Flight (2026)',
      desc: 'Can you bring medication on Transavia? Yes: in hand luggage, with an English prescription. The 100 ml rule does not apply to liquid medicines you need in flight. Transavia cannot keep medicine refrigerated; crew cannot inject. Checked 18 October 2026.',
      answer: 'Yes. Transavia says to carry medicines in your hand luggage, with the ones you need during the flight in a separate bag that is easy to reach, and to bring an English prescription. For liquid medicines you need in flight, the 100 ml per bottle rule does not apply; carry proof such as a doctor\'s letter.',
      srcNote: 'From Transavia\'s own help centre medication pages, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand luggage', 'Keep it with you', 'Transavia says to carry medicines in your hand luggage.', [
          'Transavia: carry medicines in your hand luggage; keep the ones you need during the flight in a separate bag inside it, within easy reach.',
          'Transavia: bring an English prescription from your doctor and show it at security if required.',
          'Transavia: you can also request a European Medical Passport from your GP or pharmacist and show it at security.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'go', 'Not limited to 100 ml', 'Over 100 ml (3.4 oz)', 'The 100 ml per bottle rule does not apply to liquid medicines you need in flight.', [
          'Transavia: if you need liquid medicines during your flight, the 100 ml per bottle rule does not apply.',
          'Transavia: carry proof that the medicines are yours, such as a letter from your doctor or pharmacist, in their original packaging.',
          'Transavia: your free hand luggage and any paid cabin bag must not exceed 10 kg in total.'
        ], [P]),
        card('needles', 'Insulin & syringes', 'warn', 'Self-injection only', 'Hypodermic needles', 'Transavia says only you or a travel companion may inject you; crew may not.', [
          'Transavia: make sure hypodermic needles are packed appropriately.',
          'Transavia: only you or a travel companion or attendant may inject you with the necessary medicine during the flight; cabin crew may not give an injection.'
        ], [P]),
        card('cold', 'Cold medication', 'warn', 'Own cool pack', 'Medicine that must stay cool', 'Transavia cannot keep medicines refrigerated on the plane.', [
          'Transavia: it is unable to keep your medicines refrigerated on the plane.',
          'Transavia: pack them in cool packs or vacuum flasks that meet the hand luggage safety rules, in your hand luggage.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Does the 100 ml rule apply to medicine on Transavia?', 'No, for liquid medicines you need during the flight the 100 ml per bottle rule does not apply; carry proof such as a doctor\'s letter.'],
        ['Can Transavia crew give me an injection?', 'No, only you or a travel companion or attendant may inject you.'],
        ['What paper should I bring on Transavia?', 'An English prescription, and optionally a European Medical Passport.']
      ],
      tableTitle: 'Transavia medication rules at a glance',
      tableNote: 'What Transavia\'s own help centre says. Where Transavia is silent we say so.',
      rows: [
        ['Where should medicine go?', 'Hand luggage; flight medicines in a separate bag'],
        ['Liquid medicines?', '100 ml rule does not apply; bring proof'],
        ['Injections?', 'You or a companion; crew may not'],
        ['Cold medicines?', 'Own cool packs or vacuum flask'],
        ['Paper?', 'English prescription; European Medical Passport']
      ],
      extra: steps(['Put flight medicines in a separate bag in your hand luggage.', 'Take an English prescription and a doctor\'s or pharmacist\'s letter.', 'Bring cool packs or a vacuum flask for refrigerated medicine.'])
    });
  }

  // ---------------- PEGASUS ----------------
  {
    const P = ['https://www.flypgs.com/en/useful-info/other-info/passengers-with-reduced-mobility-and-health', 'Pegasus Airlines: Passengers with reduced mobility and health', 'Medical supplies, medications and diabetes'];
    add({
      slug: 'pegasus', name: 'Pegasus',
      h1: 'Pegasus Medication Policy: Medicine, Insulin & Syringes on a Pegasus Flight (2026)',
      desc: 'Can you bring medication on Pegasus? Yes: carry medicine in hand baggage with readable labels and a prescription. Insulin and diabetic needles can go in cabin baggage with medical certification. Crew cannot keep medicine cool. Checked 18 October 2026.',
      answer: 'Yes. Pegasus says medicines, especially prescription drugs, must be in hand baggage with readable labels in their original packets, and medicines needed in flight need a prescription with the full name. Insulin and diabetic needles can go in cabin baggage with medical certification presented at security.',
      srcNote: 'From Pegasus\' own page for passengers with reduced mobility and health, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand baggage', 'Keep it with you', 'Pegasus says medicines go in hand baggage with readable labels in original packets.', [
          'Pegasus: all medicines, especially prescription drugs, must be in the hand baggage with readable adhesive labels and in their original packets or bottles.',
          'Pegasus: passengers with chronic illnesses must carry all medicines needed for their journey into the cabin.',
          'Pegasus: medicines needed in flight or soon after landing must be in hand baggage with a prescription showing the exact name of the medicine; spare medicines may also go in hold baggage.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'warn', 'Usual cabin limits', 'Insulin items', 'Pegasus says diabetic insulin items follow the usual cabin liquid limits with medical certification.', [
          'Pegasus: diabetic insulin items may be carried in line with the usual cabin baggage liquid restrictions as long as they come with medical certification and are shown at security screening.'
        ], [P]),
        card('needles', 'Insulin & syringes', 'warn', 'Proof needed', 'Needles, syringes, injections', 'Pegasus allows insulin and diabetic needles in cabin baggage with medical proof.', [
          'Pegasus: insulin and diabetic needles can be carried in cabin baggage.',
          'Pegasus: passengers who use medical syringes in flight must carry proof of need; the items must be labelled and professionally packed, otherwise they will be confiscated.',
          'Pegasus recommends extra documentation such as an ID document or doctor\'s letter.'
        ], [P]),
        card('cold', 'Cold medication', 'warn', 'Cool bag', 'Medicine that must stay cool', 'Pegasus crew cannot keep medicines cool or warm.', [
          'Pegasus: cabin crew cannot keep medicines cool or warm; cool medicines are accepted in a cool bag or thermos flask.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I carry insulin on Pegasus?', 'Yes, insulin and diabetic needles can go in cabin baggage with medical certification shown at security.'],
        ['What happens to unlabelled syringes on Pegasus?', 'Pegasus says medical items not presented according to its conditions will be confiscated.'],
        ['Can Pegasus keep my medicine cool?', 'No, bring a cool bag or thermos flask.']
      ],
      tableTitle: 'Pegasus medication rules at a glance',
      tableNote: 'What Pegasus\' own page says. Where Pegasus is silent we say so.',
      rows: [
        ['Where should medicine go?', 'Hand baggage, original packets with readable labels'],
        ['Insulin and needles?', 'Cabin baggage with medical certification'],
        ['Prescription?', 'Needed for medicines used in flight or soon after'],
        ['Spare medicine?', 'May go in hold baggage'],
        ['Cold medicine?', 'Cool bag or thermos flask']
      ],
      extra: steps(['Keep medicines in original packets with readable labels.', 'Carry a prescription with the full medicine name.', 'Bring medical certification for insulin and needles.'])
    });
  }

  // ---------------- FLYDUBAI ----------------
  {
    const P = ['https://www.flydubai.com/en/flying-with-us/baggage/hand-baggage/', 'flydubai: Hand baggage allowance (FAQ)', 'Can I carry medications on board?'];
    add({
      slug: 'flydubai', name: 'flydubai',
      h1: 'flydubai Medication Policy: Medicine, Insulin & Controlled Drugs on a flydubai Flight (2026)',
      desc: 'Can you bring medication on flydubai? Yes: medications including approved injectables such as insulin are permitted in hand baggage. Carry a prescription or medical letter. Controlled medications into the UAE need prior approval. Checked 18 October 2026.',
      answer: 'Yes. flydubai says medications, including approved injectables such as insulin, are permitted in your hand baggage. It advises carrying a doctor\'s prescription or a medical letter, and it may not be able to give optimal storage for medication that must stay cool.',
      srcNote: 'From flydubai\'s own hand baggage page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand baggage', 'Keep it with you', 'flydubai says medications are permitted in hand baggage.', [
          'flydubai: medications, including approved injectables such as insulin, are permitted in your hand baggage.',
          'flydubai: to avoid delays, carry your doctor\'s prescription or a medical letter along with supporting documents, and confirm the requirements with the authorities in advance.',
          'flydubai: if your hand baggage is tagged as checked baggage at the gate, remove essential items such as medications first.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'warn', 'Check the liquids page', 'Over 100 ml (3.4 oz)', 'flydubai points to its liquids in hand baggage rules for medication.', [
          'flydubai: for liquids such as baby food, medication or toiletries, check its rules on liquids in hand baggage before you travel.',
          'The hand baggage page itself gives no medication quantity figure.'
        ], [P]),
        card('cold', 'Cold medication', 'warn', 'Ice packs', 'Medication that must stay cool', 'flydubai says ice packs are allowed but storage may not be optimal.', [
          'flydubai: you may bring ice packs or gel ice packs to keep your medication cool, but it may not be able to provide optimal storage conditions on board.'
        ], [P]),
        card('controlled', 'Controlled medicines', 'warn', 'UAE approval', 'Flying into the UAE', 'Controlled medications need prior approval for the UAE.', [
          'flydubai: controlled medications can come into the UAE only with prior approval through the UAE Ministry of Health and Prevention (MOHAP), with a valid doctor\'s prescription and up to a 3-month supply.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I carry insulin on flydubai?', 'Yes, medications including approved injectables such as insulin are permitted in hand baggage.'],
        ['Do I need a prescription for flydubai?', 'flydubai advises carrying a doctor\'s prescription or a medical letter to avoid delays.'],
        ['Can I bring controlled medication to the UAE on flydubai?', 'Only with prior approval from the UAE Ministry of Health and Prevention, a valid prescription and up to a 3-month supply.']
      ],
      tableTitle: 'flydubai medication rules at a glance',
      tableNote: 'What flydubai\'s own page says. Where flydubai is silent we say so.',
      rows: [
        ['Where should medication go?', 'Hand baggage'],
        ['Insulin and injectables?', 'Permitted if approved'],
        ['Paper?', 'Doctor\'s prescription or medical letter advised'],
        ['Cold packs?', 'Allowed; storage not guaranteed'],
        ['Controlled drugs into the UAE?', 'MOHAP approval, up to 3 months']
      ],
      extra: steps(['Carry medication in your hand baggage, not the hold.', 'Bring a prescription or medical letter.', 'Apply to MOHAP first if your medication is controlled and you fly into the UAE.'])
    });
  }

  // ---------------- GULF AIR ----------------
  {
    const P = ['https://www.gulfair.com/help/medical-cases', 'Gulf Air: Medical cases', 'Diabetes'];
    add({
      slug: 'gulf-air', name: 'Gulf Air',
      h1: 'Gulf Air Medication Policy: Insulin, Syringes & Diabetic Travel on a Gulf Air Flight (2026)',
      desc: 'Can you bring medication on Gulf Air? Diabetic passengers should carry all supplies, including insulin, syringes and needles, and inject themselves or travel with an escort. Gulf Air has no insulin chillers; dry ice up to 2.5 kg. Checked 18 October 2026.',
      answer: 'Gulf Air says diabetic passengers should carry all necessary supplies, including insulin, syringes and needles, and either inject themselves or be accompanied by an escort who can. It does not provide chillers for insulin, and only dry ice up to 2.5 kg per passenger is acceptable.',
      srcNote: 'From Gulf Air\'s own medical cases page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'warn', 'Not published', 'Medicine in general', 'The Gulf Air page we read gives no general rule on where to pack tablets.', [
          'Gulf Air: passengers with some conditions need a detailed medical report and approval (for example epilepsy needs a report stating the last seizure and prescribed medications).',
          'The page we read gives no general rule on carry-on or checked bags for everyday tablets.'
        ], [P], true),
        noLiq(P, 'Gulf Air'),
        card('needles', 'Insulin & syringes', 'go', 'Carry them yourself', 'Diabetes supplies', 'Gulf Air says diabetic passengers should carry insulin, syringes and needles.', [
          'Gulf Air: all necessary supplies should be carried by affected passengers, including insulin, syringes and needles.',
          'Gulf Air: diabetic passengers should either be able to inject themselves or be accompanied by an escort who can administer injections.',
          'Gulf Air: stable diabetics do not need medical clearance; those with unstable conditions should get approval from the Gulf Air Head of Medical Services in Bahrain.',
          'Gulf Air: special meals for diabetics can be requested at booking or at least 24 hours before departure.'
        ], [P]),
        card('cold', 'Cold medication', 'stop', 'No chillers', 'Insulin storage', 'Gulf Air does not provide chillers for insulin.', [
          'Gulf Air: it does not provide chillers for insulin storage; passengers must have packaging that keeps insulin at the required temperature.',
          'Gulf Air: only dry ice up to 2.5 kg per passenger is acceptable, in packaging that lets carbon dioxide gas escape.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I carry insulin and syringes on Gulf Air?', 'Gulf Air says diabetic passengers should carry insulin, syringes and needles and inject themselves or travel with an escort.'],
        ['Does Gulf Air store insulin in a fridge?', 'No, it does not provide chillers; bring your own packaging, with dry ice up to 2.5 kg allowed.'],
        ['Do diabetics need clearance on Gulf Air?', 'Stable diabetics do not; unstable ones need approval from the Gulf Air Head of Medical Services.']
      ],
      tableTitle: 'Gulf Air diabetes and medication rules at a glance',
      tableNote: 'What Gulf Air\'s own page says. Where Gulf Air is silent we say so.',
      rows: [
        ['Insulin, syringes, needles?', 'Carry all necessary supplies yourself'],
        ['Injections?', 'Self-inject or travel with an escort'],
        ['Insulin chiller?', 'None; dry ice up to 2.5 kg'],
        ['Diabetic meal?', 'Request at booking or 24 hours before'],
        ['Tablets and liquid limits?', NP]
      ],
      extra: steps(['Carry insulin, syringes and needles with you.', 'Pack insulin so it stays at temperature without a Gulf Air chiller.', 'Request a diabetic meal at least 24 hours ahead.'])
    });
  }

  // ---------------- KENYA AIRWAYS ----------------
  {
    const P = ['https://www.kenya-airways.com/en/plan/baggage-information/baggage-restrictions/', 'Kenya Airways: Baggage restrictions', 'Medically necessary needles and syringes'];
    add({
      slug: 'kenya-airways', name: 'Kenya Airways',
      h1: 'Kenya Airways Medication Policy: Needles, Syringes & Prescription Labels on a Kenya Airways Flight (2026)',
      desc: 'Can you bring medication on Kenya Airways? Medically necessary needles and syringes are exempt from the prohibited items list if you carry prescription medication with a professionally printed label. Checked 18 October 2026.',
      answer: 'Kenya Airways says medically necessary needles and syringes are exempt from its prohibited items list if you have prescription medication with a professionally printed label that identifies the medical office, pharmacy or manufacturer.',
      srcNote: 'From Kenya Airways\' own baggage restrictions page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'warn', 'Not published', 'Medicine in general', 'The page we read gives no rule on where to pack everyday tablets.', [
          'The Kenya Airways baggage restrictions page gives no general rule on carry-on or checked bags for tablets.'
        ], [P], true),
        noLiq(P, 'Kenya Airways'),
        card('needles', 'Insulin & syringes', 'go', 'With a labelled prescription', 'Needles, syringes, injections', 'Needles and syringes are exempt if you carry labelled prescription medication.', [
          'Kenya Airways: medically necessary needles and syringes are exempt from the prohibited items if passengers have in their possession prescription medication with a professionally printed label that identifies the medical office, pharmacy or manufacturer of the medication.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I carry syringes on Kenya Airways?', 'Yes, medically necessary needles and syringes are exempt if you carry prescription medication with a professionally printed label.'],
        ['What label does Kenya Airways need?', 'A professionally printed label identifying the medical office, pharmacy or manufacturer.']
      ],
      tableTitle: 'Kenya Airways medication rules at a glance',
      tableNote: 'What Kenya Airways\' own page says. Where Kenya Airways is silent we say so.',
      rows: [
        ['Needles and syringes?', 'Exempt with labelled prescription medication'],
        ['Label?', 'Printed by the medical office, pharmacy or manufacturer'],
        ['Tablets, liquids, cold storage?', NP]
      ],
      extra: steps(['Keep prescription medication in the labelled pharmacy packaging.', 'Carry syringes only together with that medication.'])
    });
  }

  // ---------------- ASIANA ----------------
  {
    const P = ['https://flyasiana.com/C/TW/EN/contents/medical-assistance-guide', 'Asiana Airlines: Medical assistance guide', 'Passengers with diabetes and allergies'];
    add({
      slug: 'asiana', name: 'Asiana Airlines',
      h1: 'Asiana Airlines Medication Policy: Insulin Syringes & Doctor\'s Notes on an Asiana Flight (2026)',
      desc: 'Can you bring medication on Asiana Airlines? Insulin users can fly if blood sugar is controlled; carrying syringes on board needs two copies of a doctor\'s note for aviation security. Used syringes must be contained and discarded by you. Checked 18 October 2026.',
      answer: 'Yes. Asiana says insulin users with controlled blood sugar are not restricted from flying. To bring an insulin syringe on board, you need two copies of a doctor\'s note for aviation security, and you must contain and discard used syringes yourself. Bring your own medications and supplies for emergencies.',
      srcNote: 'From Asiana Airlines\' own medical assistance guide, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Bring your own', 'Emergencies', 'Asiana asks you to bring your own medications and supplies.', [
          'Asiana Airlines: bring your own medications and medical supplies for emergencies, and take them with you when you leave the aircraft.',
          'Asiana: a doctor\'s referral for air travel may be required for some passengers.'
        ], [P], true),
        noLiq(P, 'Asiana'),
        card('needles', 'Insulin & syringes', 'warn', 'Two doctor\'s notes', 'Needles, syringes, injections', 'Asiana requires two copies of a doctor\'s note to bring syringes on board.', [
          'Asiana Airlines: passengers who need to bring syringes on board for medical purposes need two copies of a doctor\'s note for aviation security.',
          'Asiana: if your blood sugar is controlled by a hypoglycemic agent or insulin injection and you have no complications, you are not restricted from air travel.',
          'Asiana: for safety, contain used syringes and discard them on your own.'
        ], [P]),
        card('devices', 'Medical devices', 'warn', 'Doctor\'s note', 'Pacemaker, insulin pump', 'Implanted equipment needs a doctor\'s note too.', [
          'Asiana Airlines: for implanted medical equipment such as a pacemaker, insulin pump or spinal stimulator, stable passengers with no symptoms and able to look after themselves have no travel restrictions; two copies of a doctor\'s note are still required.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I bring insulin syringes on Asiana Airlines?', 'Yes, with two copies of a doctor\'s note for aviation security.'],
        ['Who discards used syringes on Asiana?', 'You do, Asiana asks you to contain used syringes and discard them yourself.'],
        ['Can I fly Asiana if I use insulin?', 'Yes if your blood sugar is regulated and you have no complications.']
      ],
      tableTitle: 'Asiana Airlines medication rules at a glance',
      tableNote: 'What Asiana\'s own guide says. Where Asiana is silent we say so.',
      rows: [
        ['Syringes on board?', 'Two copies of a doctor\'s note'],
        ['Insulin users?', 'No flight restriction if controlled'],
        ['Used syringes?', 'Contain and discard yourself'],
        ['Implanted equipment?', 'Two copies of a doctor\'s note'],
        ['Over 100 ml, cold storage?', NP]
      ],
      extra: steps(['Print two copies of your doctor\'s note.', 'Bring your own medication and supplies for emergencies.', 'Keep a container for used syringes.'])
    });
  }

  // ---------------- PHILIPPINE ----------------
  {
    const P = ['https://www.philippineairlines.com/us/en/before-you-fly/baggage-information/special-baggage/medications-and-medical-oxygen.html', 'Philippine Airlines: Medication and medical oxygen', 'Medicinal articles and medical devices'];
    add({
      slug: 'philippine-airlines', name: 'Philippine Airlines',
      h1: 'Philippine Airlines Medication Policy: Medicine Limits, CPAP & Oxygen on a PAL Flight (2026)',
      desc: 'Can you bring medication on Philippine Airlines? Yes: non-radioactive medicinal articles up to 2 kg or 2 litres in total, each article 0.5 kg or 0.5 litre, in checked or carry-on. CPAP and portable oxygen concentrators need 48-hour notice and a MEDIF. Checked 18 October 2026.',
      answer: 'Yes. PAL permits non-radioactive medicinal articles in checked or carry-on baggage, up to 2 kg (4.4 lb) or 2 litres in total, with each single article no more than 0.5 kg or 0.5 litre. CPAP machines, portable oxygen concentrators, ventilators and respirators need 48 hours notice and a signed MEDIF.',
      srcNote: 'From Philippine Airlines\' own medication and medical oxygen page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Checked or carry-on', 'Quantity limits', 'PAL permits medicinal articles in checked or carry-on within quantity limits.', [
          'Philippine Airlines: non-radioactive medicinal articles must not exceed 2 kg (4.4 lb) or 2 litres in total, and the net quantity of each single article must not exceed 0.5 kg (1 lb) or 0.5 litre.',
          'Philippine Airlines: these are permitted to be checked in or carried on.'
        ], [P], true),
        card('liquids', 'Liquid medication', 'warn', '0.5 litre each', 'Over 100 ml (3.4 oz)', 'PAL caps each liquid medicinal article at 0.5 litre and all at 2 litres.', [
          'Philippine Airlines: each single medicinal article may not exceed 0.5 litre and the total may not exceed 2 litres.',
          'The page we read does not discuss the 100 ml security rule; check the airport rules.'
        ], [P]),
        card('needles', 'Insulin & syringes', 'warn', 'Not published', 'Needles, syringes, injections', 'The PAL page we read gives no rule for needles or syringes.', [
          'The page we read gives no rule on carrying needles or syringes: ask the airline and check the airport rules.'
        ], [P]),
        card('devices', 'Medical devices', 'warn', '48-hour notice + MEDIF', 'CPAP, POC, ventilators', 'PAL requires 48 hours notice and a signed MEDIF for these devices.', [
          'Philippine Airlines: passengers must give PAL Reservations at least 48 hours notice to use a portable oxygen concentrator, CPAP, ventilator or respirator on board and must check in up to one hour before the general public.',
          'Philippine Airlines: at check-in, present the Medical Information Form (MEDIF) signed by the PAL physician; for a POC, the model must be on the MEDIF. For a CPAP user with sleep apnea only, a medical certificate suffices.',
          'Philippine Airlines: the device must fit in the overhead bin or under the seat; its list of FAA-approved POC models is on the page.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['How much medicine can I bring on Philippine Airlines?', 'Up to 2 kg or 2 litres in total, with each article no more than 0.5 kg or 0.5 litre.'],
        ['Do I need a MEDIF for a CPAP on PAL?', 'Yes, with 48 hours notice, except that sleep apnea alone needs only a medical certificate.'],
        ['Can I bring my own oxygen bottle on PAL?', 'Not for use on board; a bottle under 5 kg may be carried for use before boarding and after landing.']
      ],
      tableTitle: 'Philippine Airlines medication rules at a glance',
      tableNote: 'What PAL\'s own page says. Where PAL is silent we say so.',
      rows: [
        ['Total medicinal articles?', '2 kg or 2 litres'],
        ['Each article?', '0.5 kg or 0.5 litre'],
        ['Where?', 'Checked or carry-on'],
        ['CPAP, POC, ventilator?', '48 hours notice and a signed MEDIF'],
        ['Needles and syringes, cold storage?', NP]
      ],
      extra: steps(['Check each medicinal article against the 0.5 kg or 0.5 litre limit.', 'Call PAL Reservations 48 hours ahead for a CPAP or oxygen concentrator.', 'Get the MEDIF signed by the PAL physician.'])
    });
  }

  // ---------------- ROYAL AIR MAROC ----------------
  {
    const P = ['https://www.royalairmaroc.com/us-en/3.-on-board', 'Royal Air Maroc: On board (items allowed)', 'Prescription drugs and medical instruments'];
    add({
      slug: 'royal-air-maroc', name: 'Royal Air Maroc',
      h1: 'Royal Air Maroc Medication Policy: Prescription Drugs & Syringes on a Royal Air Maroc Flight (2026)',
      desc: 'Can you bring medication on Royal Air Maroc? Yes: prescription drugs, syringes and auto-injectors are listed as items you may take on board, stored under dangerous goods safety rules. Electronic medical devices need 48-hour notice. Checked 18 October 2026.',
      answer: 'Yes. Royal Air Maroc lists prescription drugs and medical instruments such as syringes and auto-injectors among the items you can take on board for use during the flight, provided they can be stored under the safety and security rules for dangerous materials. For an electronic medical device, contact it 48 hours before departure.',
      srcNote: 'From Royal Air Maroc\'s own on-board page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'On board', 'Items for use in flight', 'Royal Air Maroc lists prescription drugs among items allowed on board.', [
          'Royal Air Maroc: it permits you to take prescription drugs on board, among items for use on board, provided they can be stored under the rules of safety and security regarding dangerous materials.'
        ], [P], true),
        noLiq(P, 'Royal Air Maroc'),
        card('needles', 'Insulin & syringes', 'go', 'Listed as allowed', 'Syringes, auto-injectors', 'Syringes and auto-injectors are listed as medical instruments allowed on board.', [
          'Royal Air Maroc: medical instruments such as syringes and auto-injectors are listed among the items you may take on board.'
        ], [P]),
        card('devices', 'Medical devices', 'warn', '48 hours before', 'Electronic devices', 'Contact Royal Air Maroc 48 hours before flying with an electronic medical device.', [
          'Royal Air Maroc: if you plan to use an electronic medical device during the flight, contact it no later than 48 hours before departure to determine the number of batteries needed.',
          'Royal Air Maroc also lists portable oxygen concentrators, manual wheelchairs, walking sticks, crutches and walkers among allowed items.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I carry syringes on Royal Air Maroc?', 'Yes, syringes and auto-injectors are listed among medical instruments you may take on board.'],
        ['Can I take prescription drugs on Royal Air Maroc?', 'Yes, they are listed as items for use on board.'],
        ['What if I use an electronic medical device on Royal Air Maroc?', 'Contact the airline at least 48 hours before departure.']
      ],
      tableTitle: 'Royal Air Maroc medication rules at a glance',
      tableNote: 'What Royal Air Maroc\'s own page says. Where it is silent we say so.',
      rows: [
        ['Prescription drugs?', 'Allowed on board'],
        ['Syringes, auto-injectors?', 'Allowed on board'],
        ['Electronic medical device?', 'Contact 48 hours before departure'],
        ['Over 100 ml, cold storage?', NP]
      ],
      extra: steps(['Keep prescription drugs and syringes in your cabin bag.', 'Contact Royal Air Maroc 48 hours ahead if you use an electronic medical device.'])
    });
  }

  // ---------------- AIR EUROPA ----------------
  {
    const P = ['https://www.aireuropa.com/us/en/aea/travel-information/passengers/special-needs/medical-assistance.html', 'Air Europa: Medical equipment transport and assistance', 'Medicines and syringes in baggage'];
    add({
      slug: 'air-europa', name: 'Air Europa',
      h1: 'Air Europa Medication Policy: Medicines, Syringes & Free Medical Suitcase on an Air Europa Flight (2026)',
      desc: 'Can you bring medication on Air Europa? Yes: carry medicines in the cabin on your person, with any prescription. Syringes are accepted in cabin and hold, but hypodermic needles in the cabin need a medical certificate at check-in. A free 23 kg medical suitcase can be requested. Checked 18 October 2026.',
      answer: 'Yes. Air Europa says you can carry medicines in the cabin, on your person and separate from your hand luggage and checked baggage, with any medical authorisation or prescription. Syringes are accepted in the cabin and the hold, but to carry hypodermic needles in the cabin you must present a medical certificate at check-in.',
      srcNote: 'From Air Europa\'s own medical equipment page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'On your person', 'Keep it with you', 'Air Europa says to carry medicines on your person, separate from your bags.', [
          'Air Europa: you can carry your medicines in the cabin, provided they comply with operational security, airport security and dangerous goods rules.',
          'Air Europa: carry medicines on your person, separated from your hand luggage and checked baggage, for quick identification at check-in; carry any medical authorisation or prescription.'
        ], [P], true),
        noLiq(P, 'Air Europa'),
        card('needles', 'Insulin & syringes', 'warn', 'Medical certificate', 'Needles, syringes, injections', 'Hypodermic needles in the cabin need a medical certificate at check-in.', [
          'Air Europa: syringes and all other injection instruments are not on the list of prohibited items; they are accepted in the cabin and in the hold.',
          'Air Europa: to carry hypodermic needles in the cabin, a medical certificate must be presented at the time of check-in.'
        ], [P]),
        card('cold', 'Cold medication', 'warn', 'Dry ice needs approval', 'Cooling', 'Dry ice needs Air Europa authorisation.', [
          'Air Europa: dry ice is permitted to pack perishable substances if the suitcase lets carbon dioxide escape and the items are identified; Air Europa must authorise it in hand luggage and checked baggage.'
        ], [P]),
        card('suitcase', 'Medical suitcase', 'go', 'Free 23 kg', 'Essential medication or equipment', 'Air Europa gives a free suitcase of up to 23 kg for essential medication or equipment on request.', [
          'Air Europa: for essential medication or medical equipment it provides a suitcase of up to 23 kg free of charge, on top of your allowance; 32 kg is possible for a fee.',
          'Air Europa: request it at least 72 business hours before departure by email to requerimientomedico@aireuropa.com with official medical documentation issued within the 10 days before the flight.'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['Can I carry syringes on Air Europa?', 'Yes, but to carry hypodermic needles in the cabin you must present a medical certificate at check-in.'],
        ['Does Air Europa give a free bag for medication?', 'Yes, a suitcase of up to 23 kg free of charge for essential medication or equipment, requested 72 business hours ahead with documentation.'],
        ['Where should I carry medicines on Air Europa?', 'On your person, separate from hand luggage and checked baggage.']
      ],
      tableTitle: 'Air Europa medication rules at a glance',
      tableNote: 'What Air Europa\'s own page says. Where Air Europa is silent we say so.',
      rows: [
        ['Where should medicines go?', 'On your person, separate from bags'],
        ['Hypodermic needles in the cabin?', 'Medical certificate at check-in'],
        ['Free medical suitcase?', 'Up to 23 kg, request 72 business hours ahead'],
        ['Dry ice?', 'Needs Air Europa authorisation'],
        ['Over 100 ml?', NP]
      ],
      extra: steps(['Carry medicines on your person with the prescription.', 'Bring a medical certificate for hypodermic needles.', 'Email Air Europa 72 business hours ahead to request the free medical suitcase.'])
    });
  }

  // ---------------- EUROWINGS ----------------
  {
    const P = ['https://www.eurowings.com/en/information/on-board/travelling-healthy.html', 'Eurowings: Travelling healthy', 'Taking medication during a flight'];
    add({
      slug: 'eurowings', name: 'Eurowings',
      h1: 'Eurowings Medication Policy: Medicine, Insulin & EpiPens on a Eurowings Flight (2026)',
      desc: 'Can you bring medication on Eurowings? Yes: carry it in hand baggage, 1.5 to 2 times the amount you expect to need. For larger quantities of insulin or EpiPens bring a doctor\'s certificate. Crew cannot store medication cool. Checked 18 October 2026.',
      answer: 'Yes. Eurowings recommends that passengers with pre-existing conditions or allergies always carry their medication in hand baggage, about one and a half to two times the expected amount to cover delays. For larger quantities of medication and injections such as insulin or EpiPens, bring a doctor\'s certificate.',
      srcNote: 'From Eurowings\' own Travelling healthy page, last checked 18 October 2026. Rules change, so confirm with the airline before you fly.',
      scen: [
        card('pills', 'Pills & tablets', 'go', 'Hand baggage', 'Take extra', 'Eurowings recommends carrying all medication in hand baggage.', [
          'Eurowings: it recommends that all passengers with pre-existing conditions or allergies always carry their medication in hand baggage.',
          'Eurowings: pack medication securely against breakage; if possible split it across several hand baggage items.',
          'Eurowings: take about one and a half to two times the expected amount to cover flight delays.',
          'Eurowings: additional items of hand baggage for medicinal purposes must be registered via the contact form.'
        ], [P], true),
        noLiq(P, 'Eurowings'),
        card('needles', 'Insulin & syringes', 'warn', 'Doctor\'s certificate', 'Larger quantities', 'Eurowings advises a doctor\'s certificate for larger quantities of insulin or EpiPens.', [
          'Eurowings: when carrying larger quantities of medication and injections (insulin, EpiPen) in hand baggage, bring a doctor\'s certificate confirming that you personally need the medication.'
        ], [P]),
        card('cold', 'Cold medication', 'warn', 'Own cooling', 'Medication that must stay cool', 'Eurowings crew cannot store medication in a cool place.', [
          'Eurowings: it is not possible for cabin crew to store medication in a cool place; onboard cooling is possible with freezer packs or dry ice (see its prohibited items page).'
        ], [P]),
        ab(P)
      ],
      faq: [
        ['How much medication should I carry on Eurowings?', 'About one and a half to two times the amount you expect to need, in hand baggage.'],
        ['Do I need a doctor\'s certificate for insulin on Eurowings?', 'Eurowings advises one when you carry larger quantities of insulin or EpiPens.'],
        ['Can Eurowings crew refrigerate medication?', 'No, use freezer packs or dry ice.']
      ],
      tableTitle: 'Eurowings medication rules at a glance',
      tableNote: 'What Eurowings\' own page says. Where Eurowings is silent we say so.',
      rows: [
        ['Where should medication go?', 'Hand baggage, split across items if possible'],
        ['How much?', '1.5 to 2 times the expected need'],
        ['Insulin, EpiPens in quantity?', 'Doctor\'s certificate'],
        ['Cold storage?', 'Crew cannot; freezer packs or dry ice'],
        ['Over 100 ml?', NP]
      ],
      extra: steps(['Pack 1.5 to 2 times your expected medication in hand baggage.', 'Take a doctor\'s certificate for larger quantities of insulin or EpiPens.', 'Register extra medical hand baggage via the contact form.'])
    });
  }
};
