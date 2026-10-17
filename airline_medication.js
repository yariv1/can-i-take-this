// Airline Medication pages (pilot, 2026-10-17): /airline/<slug>/medication/ + a "Medication" tab, shown ONLY for airlines listed here.
// Rule (user order 2026-10-17, same standard as the Wi-Fi pilot): an airline is listed ONLY when its OWN published pages were READ and say something about medication.
// Everything on the cards comes from those airline pages plus TSA (US government). Anything an airline does not publish is said as "not published", never filled from third-party sources.
// Pilot airlines: Delta, American, United, Southwest. Alaska Airlines is NOT listed: alaskaair.com returned only an error page from every browser tried on 2026-10-17 (summaries are not reading).
const COMP = require('./airline_compensation.js');
const BAGD = require('./baggage_detail.js');
const { CSS, table } = BAGD;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const LEGEND = '<p class="cc-legend"><span class="cc-dot cc-g"></span> Green: allowed, no special step. <span class="cc-dot cc-y"></span> Yellow: allowed, but a condition or a step applies. <span class="cc-dot cc-r"></span> Red: not allowed.</p>';
const CHECKED = '17 October 2026';

// ---------- TSA pages, read 17 October 2026 ----------
const T = 'https://www.tsa.gov/travel/security-screening/whatcanibring/items/';
const TSA_FAQ = ['https://www.tsa.gov/travel/frequently-asked-questions/i-am-traveling-medication-are-there-any-requirements-i-should-be', 'TSA: Traveling with medication', 'Liquids over 3.4 oz, labels, screening'];
const TSA_PILLS = [T + 'medications-pills', 'TSA: Medications (pills)', 'Carry-on and checked bags'];
const TSA_LIQ = [T + 'medications-liquid', 'TSA: Medications (liquid)', 'Larger amounts, declare at the checkpoint'];
const TSA_INS = [T + 'insulin', 'TSA: Insulin', 'Separate bin for x-ray'];
const TSA_SYR = [T + 'unused-syringes', 'TSA: Unused syringes', 'Allowed with injectable medication'];
const TSA_SUP = [T + 'insulin-supplies', 'TSA: Insulin supplies', 'Pumps and monitors'];
const TSA_ICE = [T + 'gel-ice-packs', 'TSA: Gel ice packs', 'Medically necessary ice packs'];

const TSA_PILLS_LINE = 'TSA lists pills and other solid medication as allowed in both carry-on and checked bags.';
const TSA_LIQ_LINE = 'TSA allows larger amounts of medically necessary liquids, gels and aerosols in reasonable quantities for your trip, but you must declare them to TSA officers at the checkpoint for inspection.';
const TSA_REMOVE = 'TSA asks you to take medically necessary liquids, medications and creams over 3.4 oz (100 ml) out of your carry-on to be screened separately from your other belongings.';
const TSA_INS_LINE = 'TSA: tell the officers you have medically necessary liquids such as insulin and put them in a bin separately for x-ray screening.';
const TSA_SYR_LINE = 'TSA: unused syringes are allowed when they come with injectable medication. Declare them to security officers at the checkpoint. Labels on your medication are recommended, not required.';
const TSA_DEV_LINE = 'TSA: tell the officers if you have an insulin pump, glucose monitor or other medical device attached to your body, and that you carry medically necessary supplies. Insulin in any form or dispenser must be clearly identified.';
const TSA_ICE_LINE = 'TSA: medically necessary gel ice packs in reasonable quantities are allowed whether frozen, melted or slushy. Tell the officer at the checkpoint.';
const TSA_FINAL = 'The final decision rests with the TSA officer at the checkpoint.';
const ABROAD_LINES = [
  'This page covers the airline\'s cabin rules and US airport screening. It does not cover what your destination country allows.',
  'Medicines that count as controlled substances can be restricted or need a permit or prescription in the country you fly to. Check the destination country\'s medication rules before you fly.'
];

const out = {};
const card = (id, label, status, verdict, sub, head, lines, sources, first) => ({ id, label, status, verdict, sub, head, lines, sources, first: !!first });

function add(cfg) {
  out[cfg.slug] = {
    h1: cfg.h1, ttl: cfg.h1, desc: cfg.desc, answer: cfg.answer, faq: cfg.faq,
    render: a => COMP.__render(a, cfg.scen, cfg.srcNote, { slab: 'What are you bringing?', tag: 'MEDICATION', legend: LEGEND, srcKind: 'ok', checked: CHECKED }) +
      '<div class="bd-wrap">' + CSS + '<section class="bd-sec"><h2>💊 ' + esc(cfg.tableTitle) + '</h2><p>' + cfg.tableNote + '</p>' +
      table({ head: ['Question', cfg.name + ' says'], rows: cfg.rows }) + '</section>' + (cfg.extra || '') +
      '<p class="bd-chk">Last checked ' + CHECKED + ' on the airline\'s own pages and on tsa.gov. We re-check regularly because airline and TSA rules change.</p></div>'
  };
}
const steps = list => '<section class="bd-sec"><h2>🧳 How to pack your medication</h2><ol>' + list.map(x => '<li>' + x + '</li>').join('') + '</ol></section>';
const NP = 'Not published on the pages we read';

// ---------------- DELTA ----------------
// Read 17 October 2026 on delta.com: Medical Devices and Medication (section "Traveling with Medication").
{
  const PG = ['https://www.delta.com/us/en/accessible-travel-services/assistive-devices-medication', 'Delta: Medical Devices and Medication', 'Traveling with Medication'];
  add({
    slug: 'delta', name: 'Delta',
    h1: 'Delta Medication Policy: Pills, Insulin, Syringes & Liquids on a Delta Flight (2026)',
    desc: 'Can you bring medication on Delta? Yes: keep it in your carry-on. Medically necessary liquids can exceed 100 ml if declared at TSA, syringes need labelled medication, and Delta cannot refrigerate it. From Delta and TSA, checked 17 October 2026.',
    answer: 'Yes. Delta says to keep medication in your carry-on bag, not checked baggage. Medically necessary liquids can go over 100 ml if you declare them to TSA, syringes are allowed with labelled medication, and Delta cannot refrigerate medication: bring your own cooler.',
    srcNote: 'From Delta\'s own medication page and TSA\'s medication pages, last checked 17 October 2026. Rules change, so confirm with the airline and TSA before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed', 'Carry them with you', 'Delta says to carry your medication in your carry-on bag, not in checked baggage.', [
        'Delta: for safety and health, always carry your medication with you in your carry-on baggage rather than in checked baggage.',
        TSA_PILLS_LINE,
        'Delta and TSA both recommend, but do not require, that your medication is labelled to make security screening easier.',
        'Delta employees are not permitted to help you take or administer medication.'
      ], [PG, TSA_PILLS], true),
      card('liquids', 'Liquid medication', 'warn', 'Allowed, declare it', 'Over 100 ml (3.4 oz)', 'Medically necessary liquids can go over the usual liquid limit if you declare them at the checkpoint.', [
        'Delta: outside the usual carry-on rules for liquids, TSA allows larger amounts of medically necessary liquids, gels and aerosols in reasonable quantities for your trip, but you must declare them to security officers at the checkpoint for inspection.',
        TSA_REMOVE,
        'Delta says the final decision rests with the TSA supervisor on whether an item is allowed through the checkpoint.'
      ], [PG, TSA_LIQ, TSA_FAQ]),
      card('needles', 'Insulin & syringes', 'warn', 'Labelled medication needed', 'Needles, syringes, injections', 'Delta lets you carry syringes in your carry-on if you also carry medication with a prescription or pharmacy label.', [
        'Delta: you may carry needles or syringes in your carry-on bag as long as you also have medication with a prescription label that names the medication and a manufacturer\'s name or pharmaceutical label.',
        'Bring your prescription information that connects the medication, syringes and other medical equipment to you.',
        'Tell the cabin crew if you used needles during the flight: they can give you a medical sharps disposal container.',
        TSA_SYR_LINE,
        TSA_INS_LINE
      ], [PG, TSA_SYR, TSA_INS]),
      card('cold', 'Cold medication', 'warn', 'Bring your own cooler', 'Medication that must stay cold', 'Delta cannot refrigerate or store your medication, so bring a cooler.', [
        'Delta: its galleys are not equipped to refrigerate or store medication.',
        'Plan to travel with a personal cooling method such as an insulated travel cooler. You can keep it under the seat in front of you, or Delta can help stow it at the front or back of the aircraft if space permits.',
        'Delta: your method of cooling must meet all FAA requirements.',
        TSA_ICE_LINE
      ], [PG, TSA_ICE]),
      card('devices', 'Pumps & medical devices', 'warn', 'Bring batteries', 'Insulin pump, monitor, other devices', 'Delta provides no power for medical devices, so bring your own batteries.', [
        'Delta: onboard outlets are not made to support medical device use and Delta provides no onboard power source for medical devices. Bring battery power.',
        'Delta: your device must have battery life for 150% of your actual flight time, regardless of how long you plan to use it.',
        'Delta lists separate rules for oxygen, CPAP and BiPAP, respirators and ventilators, portable dialysis machines, pumps and suction devices, EFT devices and prosthetics. Delta\'s accessibility assistance line is 404-209-3434.',
        TSA_DEV_LINE
      ], [PG, TSA_SUP]),
      card('marijuana', 'Medical marijuana', 'stop', 'Not allowed', 'Including medical marijuana', 'Delta does not allow marijuana on its flights, even medical marijuana.', [
        'Delta says it is aware of state laws that allow medical marijuana, but TSA has said that possessing marijuana, even medical marijuana, is illegal under federal law and that it refers travellers with marijuana to law enforcement.',
        'Delta: it does not allow customers to transport marijuana on its flights.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a Delta flight?', 'Yes. Delta says to always keep your medication in your carry-on bag rather than in checked baggage. TSA lists pills and other solid medication as allowed in both carry-on and checked bags.'],
      ['Can I bring liquid medication over 100 ml on Delta?', 'Yes, if it is medically necessary and in a reasonable quantity for your trip. You must declare it to TSA officers at the checkpoint for inspection, and TSA asks you to take it out of your bag for separate screening.'],
      ['Can I bring insulin and syringes on Delta?', 'Yes. Delta lets you carry needles and syringes in your carry-on if you also have medication with a prescription label that names the medication and the manufacturer or has a pharmaceutical label. TSA says to tell officers you have medically necessary liquids such as insulin and put them in a bin separately for x-ray.'],
      ['Does Delta refrigerate medication?', 'No. Delta says its galleys are not equipped to refrigerate or store medication. Bring your own insulated cooler that meets FAA requirements; you can keep it under the seat in front of you.'],
      ['Can I bring medical marijuana on Delta?', 'No. Delta does not allow customers to transport marijuana on its flights, even medical marijuana, because TSA says it is illegal under federal law.']
    ],
    tableTitle: 'Delta medication rules at a glance',
    tableNote: 'What Delta\'s own page and TSA say. Delta\'s page is written for flights in general.',
    rows: [
      ['Where should medication go?', 'In your carry-on bag, not checked baggage'],
      ['Can it be over 100 ml?', 'Yes if medically necessary, declared to TSA at the checkpoint'],
      ['Needles and syringes?', 'In your carry-on with labelled medication'],
      ['Fridge or cooler on board?', 'No fridge. Bring your own cooler that meets FAA rules'],
      ['Help taking medication?', 'Delta employees may not administer it'],
      ['Power for medical devices?', 'None. Bring batteries for 150% of flight time'],
      ['Medical marijuana?', 'Not allowed']
    ],
    extra: steps(['Put all medication in your carry-on bag, in its original packaging or with its pharmacy label.', 'Bring your prescription information, especially if you carry syringes or other injection equipment.', 'At security, tell the officer about any liquids over 100 ml and take them out of your bag to be screened separately.', 'If your medication must stay cold, pack it in your own insulated cooler with medically necessary ice packs.', 'Using needles in flight? Tell the cabin crew so they can give you a sharps container.'])
  });
}

// ---------------- AMERICAN AIRLINES ----------------
// Read 17 October 2026 on aa.com: Mobility and medical devices; Carry-on bags and size limits; Hazardous materials restrictions; International travel planning (Australia medication policy).
{
  const MD = ['https://www.aa.com/web/i18n/travel-info/special-assistance/mobility-and-medical-devices.html', 'American: Mobility and medical devices', 'Carry-on, batteries and power'];
  const CO = ['https://www.aa.com/web/i18n/travel-info/baggage/carry-on-baggage.html', 'American: Carry-on bags and size limits', 'Items that do not count as a carry-on'];
  const HZ = ['https://www.aa.com/web/i18n/travel-info/baggage/hazardous-materials.html', 'American: Hazardous materials restrictions', 'Liquids for medical purposes, medicinal articles'];
  const IN = ['https://www.aa.com/web/i18n/travel-info/international-travel/international-travel.html', 'American: International travel planning', 'Australia: traveling with medication'];
  add({
    slug: 'american-airlines', name: 'American Airlines',
    h1: 'American Airlines Medication Policy: Pills, Insulin, Syringes & Liquids (2026)',
    desc: 'Can you bring medication on American Airlines? Yes. Liquids for medical purposes can exceed 100 ml, and medical devices do not count as a carry-on. American does not publish rules for syringes or cold storage; TSA rules apply. Checked 17 October 2026.',
    answer: 'Yes. American says liquids needed for medical purposes can exceed 100 ml (an agent may ask to verify them), and medical devices do not count as your carry-on or personal item. American\'s pages do not set rules for syringes or cold storage, so TSA\'s rules apply.',
    srcNote: 'From American Airlines\' own pages and TSA\'s medication pages, last checked 17 October 2026. Rules change, so confirm with the airline and TSA before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed', 'Carry them with you', 'American\'s pages set no separate rule for pills, so TSA\'s rules apply.', [
        TSA_PILLS_LINE,
        'TSA recommends that medication is clearly labelled to make screening easier.',
        'American\'s hazardous materials page has a special exception for small quantities (up to 70 ounces in total) of medicinal and toilet articles carried in your bags.'
      ], [HZ, TSA_PILLS, TSA_FAQ], true),
      card('liquids', 'Liquid medication', 'warn', 'Allowed, declare it', 'Over 100 ml (3.4 oz)', 'Liquids needed for medical purposes can go over 100 ml, and an agent may ask to verify them.', [
        'American: liquids, aerosols and gels required for medical purposes or special need in containers over 100 ml are allowed. An agent may request verification of the type and quantity you carry.',
        TSA_LIQ_LINE,
        TSA_REMOVE
      ], [HZ, TSA_LIQ, TSA_FAQ]),
      card('needles', 'Insulin & syringes', 'warn', 'Declare at security', 'Needles, syringes, injections', 'American\'s pages do not set a rule for syringes in the US, so TSA\'s rules apply. Flying to Australia needs a doctor\'s letter.', [
        TSA_SYR_LINE,
        TSA_INS_LINE,
        'American, flights to Australia: you must declare all personal medication on your arrival card and carry medical documentation. If you need to use a syringe during the flight you also need a doctor\'s letter proving there is a medical reason to use it onboard. Without proper documentation the medications may be confiscated.',
        'The other American pages we read say nothing about syringes or insulin.'
      ], [TSA_SYR, TSA_INS, IN]),
      card('cold', 'Cold medication', 'warn', 'Not published', 'Medication that must stay cold', 'American does not say on the pages we read whether it can store medication cold.', [
        'American\'s pages we read do not say whether crew can chill or store medication, so plan to carry your own cooling.',
        TSA_ICE_LINE
      ], [TSA_ICE]),
      card('devices', 'Pumps & medical devices', 'warn', 'Free to carry, bring batteries', 'Insulin pump, monitor, CPAP, other devices', 'Medical devices do not count toward your carry-on limit, but do not count on a power outlet.', [
        'American: medical and mobility devices do not count as your personal item or carry-on. If space is limited, the device does not fit in the cabin or it is not needed during the flight, it may need to be checked.',
        'American offers pre-boarding, deplaning and airport assistance if you travel with a medical device.',
        'American recommends bringing fully charged batteries for your medical devices for the whole flight and not depending on a power outlet. Outlets, if available, may be used and may need a DC power adapter.',
        TSA_DEV_LINE
      ], [MD, CO, TSA_SUP]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES.concat(['American\'s international page lists one country rule: Australia (see the syringe card).']), [IN])
    ],
    faq: [
      ['Can I bring medication on an American Airlines flight?', 'Yes. TSA lists pills and other solid medication as allowed in carry-on and checked bags. American\'s pages set no separate rule for pills.'],
      ['Can I bring liquid medication over 100 ml on American Airlines?', 'Yes. American says liquids, aerosols and gels required for medical purposes or special need in containers over 100 ml are allowed, and an agent may ask to verify the type and quantity. TSA also asks you to declare them at the checkpoint.'],
      ['Do medical devices count as a carry-on on American?', 'No. American says medical and mobility devices do not count as your personal item or carry-on. If space is limited, or the device is not needed during the flight, it may need to be checked.'],
      ['Can I use a power outlet for my medical device on American?', 'American recommends bringing fully charged batteries and not depending on an outlet. If an outlet is available it may be used for medical devices, and it may need a DC power adapter.'],
      ['Do I need a doctor\'s letter for syringes on American flights?', 'For flights to Australia, yes: American says you need a doctor\'s letter proving a medical reason to use a syringe onboard, and you must declare all personal medication on your arrival card. American\'s other pages we read do not set a syringe rule; TSA says unused syringes are allowed with injectable medication.']
    ],
    tableTitle: 'American Airlines medication rules at a glance',
    tableNote: 'What American\'s own pages and TSA say. Where American is silent we say so.',
    rows: [
      ['Where should medication go?', NP + ' (TSA allows both carry-on and checked)'],
      ['Can it be over 100 ml?', 'Yes if needed for medical purposes. An agent may ask to verify it'],
      ['Needles and syringes?', 'Not published for US flights. Flights to Australia: doctor\'s letter'],
      ['Fridge or cooler on board?', NP],
      ['Do medical devices count as a carry-on?', 'No'],
      ['Power for medical devices?', 'Bring charged batteries. Outlets, if any, may be used']
    ],
    extra: steps(['Keep your medication in your carry-on so you can reach it.', 'Bring your prescription or a doctor\'s letter, especially for syringes and for flights to Australia.', 'At security, declare liquids over 100 ml and take them out of your bag to be screened separately.', 'Pack fully charged batteries for any medical device.'])
  });
}

// ---------------- UNITED ----------------
// Read 17 October 2026 on united.com: Traveling with medication and medical equipment (page and its FAQ on syringes).
{
  const PG = ['https://www.united.com/en/us/fly/travel/accessibility-and-assistance/medication.html', 'United: Traveling with medication and medical equipment', 'Medication, medical equipment, FAQ'];
  add({
    slug: 'united', name: 'United',
    h1: 'United Airlines Medication Policy: Pills, Insulin, Syringes & Medical Equipment (2026)',
    desc: 'Can you bring medication on United? Yes, in your carry-on only: never in a checked bag. Syringes are allowed (bring proof of prescription), United cannot store medication in fridges, and cellular glucose monitors cannot be used in flight. Checked 17 October 2026.',
    answer: 'Yes, in your carry-on bag. United says never put medication in a checked bag, even if you do not need it during the flight. Syringes are allowed (bring proof of your prescription), United cannot keep medication in its fridges or coolers, and wireless glucose monitors that use cellular transmission cannot be used in flight.',
    srcNote: 'From United\'s own medication page and TSA\'s medication pages, last checked 17 October 2026. Rules change, so confirm with the airline and TSA before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Carry-on only', 'Never in a checked bag', 'United says to carry medication in your carry-on and never put it in a checked bag.', [
        'United: you can bring any medication with you in your carry-on bag. Never place medication in a checked bag, even if you do not need it during your flight.',
        'If you are asked to gate check your carry-on bag, take your medication out before you hand the bag to an agent.',
        TSA_PILLS_LINE
      ], [PG, TSA_PILLS], true),
      card('liquids', 'Liquid medication', 'warn', 'Allowed, declare it', 'Over 100 ml (3.4 oz)', 'United\'s medication page does not set a liquid limit, so TSA\'s rule applies: declare medically necessary liquids.', [
        'United\'s medication page does not give a separate liquid limit for medication.',
        TSA_LIQ_LINE,
        TSA_REMOVE
      ], [TSA_LIQ, TSA_FAQ]),
      card('needles', 'Insulin & syringes', 'warn', 'Bring proof of prescription', 'Needles, syringes, injections', 'Yes, you can carry syringes. United recommends proof of your prescription.', [
        'United: you can bring medical syringes in your carry-on bag, but it recommends you bring proof of your prescription to the airport in case TSA asks for it.',
        'If you need to use your syringes during the flight, ask a flight attendant to help you dispose of them properly.',
        TSA_SYR_LINE,
        TSA_INS_LINE
      ], [PG, TSA_SYR, TSA_INS]),
      card('cold', 'Cold medication', 'warn', 'Follow TSA ice pack rules', 'Medication that must stay cold', 'United cannot store medication in its fridges or coolers.', [
        'United: it cannot store any medication in United fridges or coolers.',
        'If your medication must stay cold during the flight, United says to follow TSA policy for ice and ice packs.',
        TSA_ICE_LINE
      ], [PG, TSA_ICE]),
      card('devices', 'Pumps & medical devices', 'warn', 'Check 48 hours ahead', 'Insulin pump, glucose monitor, other devices', 'United lets you use electronic medical equipment that meets FAA standards, but wireless monitors that use cellular transmission cannot be used.', [
        'United: you can bring other medical equipment if it fits under your seat or in the overhead bin.',
        'Electronic equipment with a label or other documentation that it meets FAA safety standards can be used on the plane.',
        'Equipment that uses cellular transmission, like a wireless glucose monitor, cannot be used. Equipment that uses Bluetooth or Wi-Fi can be used, but Wi-Fi is not available on every flight.',
        'To use medical equipment in flight, United must confirm it meets safety standards at least 48 hours before. Call the Accessibility Desk at 1-800-228-2744.',
        TSA_DEV_LINE
      ], [PG, TSA_SUP]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I put medication in a checked bag on United?', 'United says never place medication in a checked bag, even if you do not need it during your flight. If you are asked to gate check your carry-on, take the medication out first.'],
      ['Can I bring syringes on United?', 'Yes. United says you can bring medical syringes in your carry-on, and recommends you bring proof of your prescription in case TSA asks for it. Ask a flight attendant to help you dispose of used syringes.'],
      ['Does United have a fridge for medication?', 'No. United says it cannot store any medication in United fridges or coolers. To keep medication cold, follow TSA policy for ice and ice packs.'],
      ['Can I use a wireless glucose monitor on United?', 'United says equipment that uses cellular transmission, like a wireless glucose monitor, cannot be used during the flight. Equipment that uses Bluetooth or Wi-Fi can be used. To use medical equipment in flight, call the Accessibility Desk at 1-800-228-2744 at least 48 hours before.'],
      ['Can I bring liquid medication over 100 ml on United?', 'United\'s medication page gives no liquid limit. TSA allows larger amounts of medically necessary liquids in reasonable quantities, but you must declare them at the checkpoint.']
    ],
    tableTitle: 'United medication rules at a glance',
    tableNote: 'What United\'s own page and TSA say.',
    rows: [
      ['Where should medication go?', 'Carry-on only. Never in a checked bag'],
      ['Can it be over 100 ml?', NP + ' (TSA: yes if medically necessary and declared)'],
      ['Needles and syringes?', 'Allowed in carry-on. Bring proof of prescription'],
      ['Fridge or cooler on board?', 'No. Follow TSA ice pack rules'],
      ['Wireless glucose monitor?', 'Cannot be used if it uses cellular transmission'],
      ['Using medical equipment in flight?', 'Confirm 48 hours before: 1-800-228-2744']
    ],
    extra: steps(['Put all medication in your carry-on bag, never in a checked bag.', 'If you must gate check your carry-on, take the medication out first.', 'Bring proof of your prescription if you carry syringes.', 'If your medication must stay cold, follow TSA\'s rules for ice packs: United has no fridge.', 'Need to use electronic medical equipment in flight? Call the Accessibility Desk at least 48 hours ahead.'])
  });
}

// ---------------- SOUTHWEST ----------------
// Read 17 October 2026 on support.southwest.com: Traveling with Medication or an Assistive Device.
{
  const PG = ['https://support.southwest.com/helpcenter/article/I-need-information-about-traveling-with-medication', 'Southwest: Traveling with medication or an assistive device', 'Medication, airport, onboard'];
  add({
    slug: 'southwest', name: 'Southwest',
    h1: 'Southwest Airlines Medication Policy: Pills, Insulin, Needles & Syringes (2026)',
    desc: 'Can you bring medication on Southwest? Yes: Southwest strongly suggests carry-on. Needles and syringes pass security packed with their medication, planes cannot store refrigerated medication, and flight attendants cannot give you medication. Checked 17 October 2026.',
    answer: 'Yes. Southwest strongly suggests you bring all medication onboard in your carry-on or personal item. Needles and syringes are allowed past security if packed with their medication, the planes cannot store refrigerated medication, and flight attendants will not administer medication.',
    srcNote: 'From Southwest\'s own help page and TSA\'s medication pages, last checked 17 October 2026. Rules change, so confirm with the airline and TSA before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed', 'Carry them with you', 'Southwest strongly suggests bringing all medication onboard in your carry-on or personal item.', [
        'Southwest: bring all your medication onboard in your carry-on bag or personal item.',
        'Medication needed for a disability does not count toward bag limits if it is packed separately from your other personal items.',
        'Checking your medication? Tell the Customer Service Agent or Skycap at the ticket counter. If your trip has an overnight connection you cannot reach checked baggage during the layover.',
        'If your carry-on must be checked because of space, take your medication out and keep it with you.',
        TSA_PILLS_LINE
      ], [PG, TSA_PILLS], true),
      card('liquids', 'Liquid medication', 'warn', 'Allowed, declare it', 'Over 100 ml (3.4 oz)', 'Southwest\'s page sends you to TSA for liquids: declare medically necessary liquids at the checkpoint.', [
        'Southwest: if you have questions about taking medication or medical supplies through a security checkpoint, check TSA\'s security screening procedures. Its page gives no liquid limit of its own.',
        TSA_LIQ_LINE,
        TSA_REMOVE
      ], [PG, TSA_LIQ, TSA_FAQ]),
      card('needles', 'Insulin & syringes', 'warn', 'Pack with the medication', 'Needles, syringes, injections', 'Needles and syringes are allowed past security if they are packed with their medication.', [
        'Southwest: needles and syringes used to inject medication are allowed past the security checkpoint if they are packed with the medication they are needed for.',
        'If you use a needle or syringe onboard, tell a flight attendant so they can give you a disposal container.',
        TSA_SYR_LINE,
        TSA_INS_LINE
      ], [PG, TSA_SYR, TSA_INS]),
      card('cold', 'Cold medication', 'warn', 'No fridge on board', 'Medication that must stay cold', 'Southwest planes are not equipped to store refrigerated medication.', [
        'Southwest: its planes are not equipped for the storage of refrigerated medication, so plan accordingly.',
        TSA_ICE_LINE
      ], [PG, TSA_ICE]),
      card('help', 'Help taking medication', 'warn', 'Crew will not give it', 'Medication during the flight', 'Flight attendants will not give you medication, even from the first-aid kit.', [
        'Southwest: every plane has a first-aid kit with common over-the-counter medication. Flight attendants will offer it if the need arises.',
        'Flight attendants will not physically administer any medication, whether from the first-aid kit or one you bring.',
        'Southwest suggests traveling with a ticketed caregiver or personal care attendant if you need this kind of care during the flight.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Should I put medication in my carry-on or checked bag on Southwest?', 'Southwest strongly suggests you bring all medication onboard in your carry-on or personal item. If you check it, tell the agent or Skycap at the ticket counter, and remember you cannot reach checked bags during an overnight connection.'],
      ['Does medication count as a carry-on on Southwest?', 'Southwest says medication needed for a disability does not count toward bag limits if it is packed separately from your other personal items.'],
      ['Can I bring needles and syringes on Southwest?', 'Yes. Southwest says needles and syringes used to inject medication are allowed past the security checkpoint if they are packed with the medication they are needed for. Tell a flight attendant if you use one onboard so they can give you a disposal container.'],
      ['Does Southwest store medication in a fridge?', 'No. Southwest says its planes are not equipped for storing refrigerated medication.'],
      ['Will Southwest flight attendants give me my medication?', 'No. Flight attendants will not physically administer medication, whether from the first-aid kit or that you bring. They may offer over-the-counter medication from the first-aid kit. Southwest suggests a ticketed caregiver if you need help.']
    ],
    tableTitle: 'Southwest medication rules at a glance',
    tableNote: 'What Southwest\'s own page and TSA say.',
    rows: [
      ['Where should medication go?', 'Carry-on or personal item (strongly suggested)'],
      ['Does it count toward bag limits?', 'Not if needed for a disability and packed separately'],
      ['Needles and syringes?', 'Allowed if packed with the medication'],
      ['Can it be over 100 ml?', NP + ' (TSA: yes if medically necessary and declared)'],
      ['Fridge or cooler on board?', 'No refrigerated storage'],
      ['Help taking medication?', 'Crew will not administer it']
    ],
    extra: steps(['Pack your medication in your carry-on bag or personal item, separate from your other items.', 'Pack needles and syringes together with the medication they are for.', 'If your carry-on has to be checked at the gate, take your medication out first.', 'At security, declare liquids over 100 ml and take them out of your bag to be screened separately.', 'Using a needle onboard? Tell a flight attendant for a disposal container.'])
  });
}

module.exports = out;
