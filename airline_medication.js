// Airline Medication pages (pilot, 2026-10-17): /airline/<slug>/medication/ + a "Medication" tab, shown ONLY for airlines listed here.
// Rule (user order 2026-10-17, same standard as the Wi-Fi pilot): an airline is listed ONLY when its OWN published pages were READ and say something about medication.
// Everything on the cards comes from those airline pages plus TSA (US government). Anything an airline does not publish is said as "not published", never filled from third-party sources.
// Pilot airlines: Delta, American, United, Southwest, then Ryanair, Emirates, Air Canada, Lufthansa (non-US carriers use their own pages; Air Canada also uses CATSA, Canada's screening authority). Alaska Airlines is NOT listed (pages unreadable): British Airways (the medicines section did not load), Qatar Airways (no readable medication page), alaskaair.com returned only an error page from every browser tried on 2026-10-17 (summaries are not reading).
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

// ---------------- RYANAIR ----------------
// Read 17 October 2026 on help.ryanair.com: Essential Medical Supplies; Can I fly with diabetes?; What liquids are permitted on board?; Adding a Medical Device; Dialysis Machine, CPAP Machine or Bipap Machine.
{
  const ES = ['https://help.ryanair.com/hc/en-gb/articles/12892718483089-Essential-Medical-Supplies', 'Ryanair: Essential Medical Supplies', 'Tablets, liquids, syringes, waiver letter'];
  const DB = ['https://help.ryanair.com/hc/en-gb/articles/12894493819793-Can-I-fly-with-diabetes', 'Ryanair: Can I fly with diabetes?', 'Syringes, needles, doctor\'s letter'];
  const LQ = ['https://help.ryanair.com/hc/en-gb/articles/12890779032209-What-liquids-are-permitted-on-board', 'Ryanair: What liquids are permitted on board?', 'Liquid medicine'];
  const AD = ['https://help.ryanair.com/hc/en-gb/articles/12892770395921-Adding-a-Medical-Device', 'Ryanair: Adding a Medical Device', 'POC and CPAP'];
  const CP = ['https://help.ryanair.com/hc/en-gb/articles/12892454741521-Dialysis-Machine-CPAP-Machine-or-Bipap-Machine', 'Ryanair: Dialysis, CPAP or BiPAP machine', 'Carried in the cabin'];
  add({
    slug: 'ryanair', name: 'Ryanair',
    h1: 'Ryanair Medication Policy: Pills, Insulin, Syringes & Liquid Medicine (2026)',
    desc: 'Can you bring medication on Ryanair? Yes, in your cabin bag with no waiver letter. Liquid medicine does not need the clear bag, and syringes need a doctor\'s letter. From Ryanair\'s own help pages, checked 17 October 2026.',
    answer: 'Yes. Ryanair says EpiPens, tablets, pills, liquid medicines, inhalers, creams and diabetic supplies can go in your cabin baggage without a waiver letter. Liquid medicine does not need to fit the clear liquids bag. For syringes and needles Ryanair says you need a doctor\'s letter.',
    srcNote: 'From Ryanair\'s own help pages, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed in cabin bag', 'No waiver letter needed', 'Ryanair lets you carry tablets, pills, capsules, inhalers and EpiPens in your cabin baggage.', [
        'Ryanair: EpiPens, capsules, tablets, pills, liquid medications (such as syrups or drops), inhalers, topical medications (like creams or gels) and diabetic supplies can be carried in your cabin baggage.',
        'Ryanair says these items are generally small in size and do not require a baggage waiver letter.'
      ], [ES], true),
      card('liquids', 'Liquid medicine', 'go', 'Allowed, show it', 'Over 100 ml (3.4 oz)', 'You can carry as much liquid medicine as you need for your flight, outside the clear liquids bag.', [
        'Ryanair: you can carry on board as much liquid medicine as you need for your flight.',
        'Your medicine does not need to fit in the transparent bag used for all other liquids, but have it ready for inspection by airport security.',
        'Ryanair says liquids rules follow the current EU security requirements: each ordinary liquid in a container of no more than 100 ml, in one transparent re-sealable bag of up to 1 litre.'
      ], [LQ]),
      card('needles', 'Insulin & syringes', 'warn', 'Doctor\'s letter needed', 'Needles, syringes, injections', 'Ryanair says you need a doctor\'s letter to carry syringes and needles in the cabin.', [
        'Ryanair: passengers are permitted to carry syringes in the aircraft cabin if they are needed for medical reasons, for example a diabetic passenger. They should carry a doctor\'s letter confirming the requirement.',
        'Ryanair: since airport security checks are not its responsibility, you will always need a doctor\'s letter stating that you need to carry "sharp" objects on board.',
        'Ryanair: keep and then discard any syringes, needles or medication after you leave the aircraft. They should not be disposed of onboard.',
        'Passengers with diabetes do not need a medical agreement to travel with Ryanair as long as their condition is stable and they can administer their own treatment. If you cannot, bring someone who can help.'
      ], [DB, ES]),
      card('cold', 'Cold medication', 'warn', 'Not published', 'Medication that must stay cold', 'Ryanair\'s help pages we read do not say whether it can keep medication cold.', [
        'Ryanair\'s help pages we read do not say whether crew can chill or store medication, so plan to carry your own cooling.'
      ], [ES]),
      card('devices', 'Supplies & medical devices', 'warn', 'Waiver letter for extras', 'CPAP, dialysis, ostomy and other supplies', 'Small devices and supplies ride in your cabin bag; anything extra needs a free waiver letter.', [
        'Ryanair: dialysis, CPAP or BiPAP machines may be carried in the cabin without prior notification if the device fits in your cabin baggage. If it is carried in addition to your baggage allowance you need a medical baggage waiver letter from Ryanair\'s Assisted Travel team.',
        'Ryanair: essential medical supplies such as ostomy equipment, PKU products, TPN feed or dialysis fluids carried in addition to your standard baggage need a medical baggage waiver letter. Only items listed in the letter are carried free of charge; pack them separately and have them ready for inspection at the airport.',
        'To carry or use a special medical device such as a portable oxygen concentrator or CPAP machine onboard, submit your requirements in the online form. Ryanair\'s assistance team reviews it and gives written confirmation if approved.'
      ], [CP, ES, AD]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'Controlled medicines', 'Your destination country sets its own medication rules.', ABROAD_LINES, [ES])
    ],
    faq: [
      ['Can I bring medication on a Ryanair flight?', 'Yes. Ryanair says EpiPens, capsules, tablets, pills, liquid medications, inhalers, topical medications and diabetic supplies can be carried in your cabin baggage, and these generally do not need a baggage waiver letter.'],
      ['Can I bring liquid medicine over 100 ml on Ryanair?', 'Yes. Ryanair says you can carry as much liquid medicine as you need for your flight. It does not need to fit in the transparent liquids bag, but have it ready for inspection by airport security.'],
      ['Do I need a doctor\'s letter for syringes on Ryanair?', 'Yes. Ryanair says passengers can carry syringes in the cabin if needed for medical reasons, but should carry a doctor\'s letter confirming the need. It also says you will always need a letter stating that you need to carry sharp objects on board, because airport security checks are not Ryanair\'s responsibility.'],
      ['Can I fly with Ryanair if I have diabetes?', 'Yes. Ryanair says people with insulin-dependent diabetes do not need a medical agreement to travel as long as their condition is stable and they can administer their own treatment. If you cannot, you should bring someone to help.'],
      ['Can I bring a CPAP machine on Ryanair?', 'Yes. Ryanair says dialysis, CPAP and BiPAP machines can be carried in the cabin without prior notification if the device fits in your cabin baggage. If it is in addition to your baggage allowance, you need a medical baggage waiver letter from the Assisted Travel team.']
    ],
    tableTitle: 'Ryanair medication rules at a glance',
    tableNote: 'What Ryanair\'s own help pages say.',
    rows: [
      ['Where should medication go?', 'Cabin baggage'],
      ['Waiver letter for pills and liquids?', 'No. They are generally small'],
      ['Can liquid medicine be over 100 ml?', 'Yes, as much as you need for the flight. Show it to security'],
      ['Needles and syringes?', 'Allowed with a doctor\'s letter'],
      ['Fridge or cooler on board?', NP],
      ['Extra medical supplies or devices?', 'Free with a medical baggage waiver letter']
    ],
    extra: steps(['Put your medication in your cabin bag, in its original packaging.', 'Carry a doctor\'s letter if you have syringes, needles or other sharp items.', 'Take liquid medicine out and show it at security. It does not go in the clear liquids bag.', 'Extra supplies beyond your baggage allowance? Ask the Assisted Travel team for a medical baggage waiver letter first.', 'Throw away syringes and needles after you leave the aircraft, not onboard.'])
  });
}

// ---------------- EMIRATES ----------------
// Read 17 October 2026 on emirates.com: Before the flight (Your Emirates Journey, Travelling with medication); Before You Leave (Travel health); Dangerous Goods Policy (Bringing medication into the UAE).
{
  const BF = ['https://www.emirates.com/english/help/accessibility-hub/your-emirates-journey/before-the-flight/', 'Emirates: Before the flight', 'Travelling with medication'];
  const BL = ['https://www.emirates.com/english/before-you-fly/health/before-you-leave/', 'Emirates: Before You Leave (travel health)', 'Medication and cooling'];
  const DG = ['https://www.emirates.com/english/before-you-fly/travel/dangerous-goods-policy/', 'Emirates: Dangerous Goods Policy', 'Bringing medication into the UAE'];
  add({
    slug: 'emirates', name: 'Emirates',
    h1: 'Emirates Medication Policy: Carrying Medicines, Cold Storage & Entering the UAE (2026)',
    desc: 'Can you bring medication on Emirates? Yes, in your cabin bag with your prescription. Emirates cannot chill medication, and controlled medication needs UAE Ministry of Health approval. From Emirates\' own pages, checked 17 October 2026.',
    answer: 'Yes. Emirates says to carry your prescription and keep enough medication for the journey in your cabin baggage. Crew cannot put medication in galley chillers (they can give you ice for your own insulated container), and controlled medication for the UAE needs Ministry of Health approval.',
    srcNote: 'From Emirates\' own pages, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Carry-on with prescription', 'Keep it in your cabin bag', 'Emirates says to carry your prescription and keep your medication in your cabin baggage.', [
        'Emirates: carry your prescription with you when you board any flight, and carry enough medication for your journey in your cabin baggage.',
        'Ask your doctor for a letter describing your medical conditions and usual treatments, including specific medications and dosages.',
        'Emirates: check that your medication is not prohibited in your destination and whether you need special authorisation.'
      ], [BF, BL], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'Emirates\' pages we read give no liquid limit for medication.', [
        'Emirates says the acceptance of medication, in the cabin or in checked baggage, is subject to the customs regulations and airport security checks of your departure and arrival country.',
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [DG]),
      card('needles', 'Insulin & syringes', 'warn', 'Not published', 'Needles, syringes, injections', 'Emirates\' pages we read do not give a rule for syringes or needles.', [
        'Emirates advises carrying your prescription and a doctor\'s letter listing your treatments and dosages.',
        'Security rules for needles and syringes depend on the airports you fly from and to.'
      ], [BF]),
      card('cold', 'Cold medication', 'warn', 'Bring an insulated pouch', 'Medication that must stay cold', 'Emirates cannot put your medication in galley chillers: bring an insulated container and ask crew for ice.', [
        'Emirates: personal medication cannot be placed in galley chillers.',
        'Pack medicine that needs temperature-controlled storage in a medically approved insulated container or pouch.',
        'Emirates cabin crew can provide ice on request to keep your container chilled throughout the flight.'
      ], [BF, BL]),
      card('uae', 'Flying to the UAE', 'warn', 'Approval for controlled medication', 'Entering Dubai or the UAE', 'Controlled medication needs approval from the UAE Ministry of Health before you travel.', [
        'Emirates: if you carry controlled medication into the UAE you must apply for approval through the Ministry of Health (MoH) website. Ask your doctor whether your medication is controlled.',
        'You must also carry the prescription for the quantity you bring, with a maximum of 3 months\' supply.',
        'Other medication (prescription for uncontrolled medication and over-the-counter medication) does not need prior approval from MoH.',
        'The UAE has a zero-tolerance anti-drugs policy and airports search thoroughly. See also our <a href="/medication/adderall/united-arab-emirates/">UAE medication rules</a>.'
      ], [DG]),
      card('abroad', 'Other destinations', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [BF])
    ],
    faq: [
      ['Can I bring medication on an Emirates flight?', 'Yes. Emirates says to carry your prescription and to carry enough medication for your journey in your cabin baggage. Check that your medication is not prohibited in your destination.'],
      ['Does Emirates keep medication cold?', 'No. Emirates says personal medication cannot be placed in galley chillers. Pack it in a medically approved insulated container or pouch; cabin crew can provide ice on request.'],
      ['Can I bring medication into the UAE on Emirates?', 'Controlled medication needs approval through the UAE Ministry of Health website, and you must carry the prescription for the quantity (maximum 3 months\' supply). Other prescription medicines and over-the-counter medicines do not need prior approval, according to Emirates.'],
      ['Do I need a doctor\'s letter for medication on Emirates?', 'Emirates advises you to ask your doctor for a letter describing your conditions and usual treatments, including medications and dosages, and to carry your prescription when you board any flight.']
    ],
    tableTitle: 'Emirates medication rules at a glance',
    tableNote: 'What Emirates\' own pages say.',
    rows: [
      ['Where should medication go?', 'Cabin baggage, with your prescription'],
      ['Can it be over 100 ml?', NP],
      ['Needles and syringes?', NP],
      ['Fridge or cooler on board?', 'No galley chillers. Bring an insulated pouch; crew give ice'],
      ['Controlled medication into the UAE?', 'Ministry of Health approval and prescription, max 3 months\' supply'],
      ['Other medicines into the UAE?', 'No prior approval needed']
    ],
    extra: steps(['Keep your medication in your cabin bag with your prescription and a doctor\'s letter.', 'Check whether your medication is controlled in the country you fly to. For the UAE, apply for Ministry of Health approval first.', 'If your medication must stay cold, pack a medically approved insulated pouch and ask crew for ice.'])
  });
}

// ---------------- AIR CANADA ----------------
// Read 17 October 2026: aircanada.com Health and Travel Tips (medication, medical cannabis, insulin); catsa-acsta.gc.ca (Canada's screening authority): Medication and Medical Items, Diabetic supplies, Syringes.
{
  const HT = ['https://www.aircanada.com/ca/en/aco/home/plan/peace-of-mind/travel-tips.html', 'Air Canada: Health and Travel Tips', 'Medication, medical cannabis, insulin'];
  const CM = ['https://www.catsa-acsta.gc.ca/en/what-can-bring/medication-and-medical-items', 'CATSA: Medication and Medical Items', 'Liquid medication, packing, cooling'];
  const CD = ['https://www.catsa-acsta.gc.ca/en/what-can-bring/item/diabetic-supplies', 'CATSA: Diabetic supplies', 'Insulin, syringes, pumps'];
  const CS = ['https://www.catsa-acsta.gc.ca/en/what-can-bring/item/syringes', 'CATSA: Syringes', 'Needle guard, medication'];
  const CAN = 'Security screening in Canada is run by CATSA (Canadian Air Transport Security Authority). Air Canada\'s pages send you to CATSA for screening rules.';
  add({
    slug: 'air-canada', name: 'Air Canada',
    h1: 'Air Canada Medication Policy: Pills, Insulin, Syringes, Liquids & Cannabis (2026)',
    desc: 'Can you bring medication on Air Canada? Yes, in your carry-on. Medication and insulin liquids can exceed 100 ml at Canadian security, syringes need their medication, and medical cannabis only flies within Canada. Checked 17 October 2026.',
    answer: 'Yes. Air Canada says always carry prescription medication on board in your carry-on. At Canadian security (CATSA), liquid medication such as insulin can exceed 100 ml and syringes are allowed with their medication. Medical cannabis can only be carried within Canada.',
    srcNote: 'From Air Canada\'s own travel tips page and CATSA, Canada\'s screening authority, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Carry-on', 'Keep it with you', 'Air Canada says to always carry prescription medication on board in your carry-on.', [
        'Air Canada: always carry your prescription medication on board in your carry-on baggage. This is especially important if you take medication for heart disease, diabetes or seizures.',
        'Air Canada: passengers with severe allergies should carry one or more EpiPens as they would under any other circumstances.',
        'CATSA: solid tablet non-prescription medication (for example acetaminophen, ibuprofen, vitamins) has no volume limit. CATSA recommends packing all medication in your carry-on in an easy-to-reach place; you will be asked to show it to the screening officer.'
      ], [HT, CM], true),
      card('liquids', 'Liquid medication', 'go', 'Allowed over 100 ml', 'Over 100 ml (3.4 oz)', 'At Canadian security, prescription and essential liquid medication can exceed 100 ml and stays out of the 1 L bag.', [
        CAN,
        'CATSA: you may bring prescription and essential non-prescription liquid, gel and aerosol medications (for example cough syrup, eye drops, decongestant spray, puffers) in your carry-on in quantities larger than 100 ml. They do not have to be placed in your 1 L plastic bag.',
        'CATSA recommends keeping liquid, gel or aerosol prescription medication in its original container with a pharmacy label identifying the medication.'
      ], [CM]),
      card('needles', 'Insulin & syringes', 'warn', 'Keep the medication with them', 'Needles, syringes, injections', 'Syringes are allowed with the medication they are for, with the needle guard in place.', [
        'CATSA: syringes must be for personal medical use and the needle guard must be in place. You must have the medication that is to be given with the syringe. CATSA recommends the medication be labelled (printed label naming the medication, a manufacturer\'s name or a pharmaceutical label).',
        'CATSA: diabetic supplies such as syringes, insulin auto-injectors, jet injectors, insulin pumps and continuous glucose monitors are permitted in carry-on and checked baggage.',
        'CATSA: declare any liquids, juice or gels to the screening officer separately.',
        'Air Canada\'s travel tips page gives no separate rule for syringes.'
      ], [CD, CS]),
      card('cold', 'Cold medication', 'warn', 'Bring your own cooler', 'Medication that must stay cold', 'Air Canada crew cannot look after your medication: bring a small cooler.', [
        'Air Canada: insulin does not generally require refrigeration. If you want your medication kept cold, bring a small cooler, because cabin crew cannot look after medication on board. Extra ice may be provided if available.',
        'CATSA: for medication that needs strict temperature control use cooling gel packs or non-electric insulated containers, and declare them to the screening officer. Ice or gel packs are exempt when needed to refrigerate medicine. Put battery-operated or electric coolers in checked luggage.'
      ], [HT, CM]),
      card('cannabis', 'Medical cannabis', 'stop', 'Only within Canada', 'Flying outside Canada', 'Medical cannabis can only be carried on flights within Canada.', [
        'Air Canada: travel with properly packaged medical cannabis is only permitted within Canada. Flying outside Canada with medical cannabis is illegal and prohibited by airport authorities.',
        'Air Canada points to its carry-on page, and to CATSA and Government of Canada websites, for details on travelling with medical cannabis.'
      ], [HT]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [HT])
    ],
    faq: [
      ['Can I bring medication on an Air Canada flight?', 'Yes. Air Canada says to always carry your prescription medication on board in your carry-on baggage, especially if you take medication for heart disease, diabetes or seizures.'],
      ['Can I bring liquid medication over 100 ml on Air Canada?', 'At Canadian airports, yes. CATSA says prescription and essential non-prescription liquid, gel and aerosol medication can be carried in your carry-on in quantities larger than 100 ml, outside the 1 L bag. You will be asked to show it to the screening officer.'],
      ['Can I bring insulin and syringes on Air Canada?', 'Yes. CATSA says diabetic supplies such as syringes, insulin auto-injectors and insulin pumps are permitted. Syringes must be for personal medical use with the needle guard in place, and you must have the medication to be given with them. Declare liquids to the screening officer.'],
      ['Does Air Canada keep insulin in a fridge?', 'No. Air Canada says insulin does not generally require refrigeration, and passengers who want it kept cold should bring a small cooler because cabin crew cannot look after medication on board.'],
      ['Can I fly with medical cannabis on Air Canada?', 'Only within Canada. Air Canada says flying outside Canada with medical cannabis is illegal and prohibited by airport authorities.']
    ],
    tableTitle: 'Air Canada medication rules at a glance',
    tableNote: 'What Air Canada\'s own page and CATSA (Canada\'s screening authority) say.',
    rows: [
      ['Where should medication go?', 'Carry-on, with you'],
      ['Can it be over 100 ml?', 'Yes at Canadian security, outside the 1 L bag'],
      ['Needles and syringes?', 'Allowed with their medication, needle guard in place'],
      ['Fridge or cooler on board?', 'No. Bring a small cooler'],
      ['Medical cannabis?', 'Only on flights within Canada']
    ],
    extra: steps(['Put all medication in your carry-on in an easy-to-reach place, in its original container with the pharmacy label.', 'Take liquid medication and cooling packs out to show the screening officer.', 'Keep syringes with the medication they are for, with the needle guard on.', 'If your medication must stay cold, bring a small cooler: crew cannot store it.'])
  });
}

// ---------------- LUFTHANSA ----------------
// Read 17 October 2026 on lufthansa.com: Transporting medicines (Cube), A healthy journey, Carry-on baggage; Passenger Medical Care information sheet (PDF).
{
  const TM = ['https://www.lufthansa.com/at/en/medikamenten-transport', 'Lufthansa: Transporting medicines', 'Cube, free carriage, ordering'];
  const CB = ['https://www.lufthansa.com/us/en/carry-on-baggage', 'Lufthansa: Carry-on baggage', 'Medicines into the cabin'];
  const MC = ['https://www.lufthansa.com/content/dam/lh/documents/prepare-for-your-trip/special-travel-needs/travelling-healthy/en-information-special-assistance.pdf', 'Lufthansa: Passenger Medical Care information sheet (PDF)', 'Cabin crew and medication'];
  add({
    slug: 'lufthansa', name: 'Lufthansa',
    h1: 'Lufthansa Medication Policy: Carry-On Medicines, Insulin Cooling & The Cube (2026)',
    desc: 'Can you bring medication on Lufthansa? Yes, take medicines you need on the journey into the cabin. Lufthansa carries its partner\'s Cube cooler free as a medically necessary item, and crew cannot give injections or medication. Checked 17 October 2026.',
    answer: 'Yes. Lufthansa says to take medicines required on the journey into the cabin with you. Temperature-sensitive medicine can travel in the Cube from Lufthansa\'s partner Tec4Med, carried free of charge in addition to your carry-on, and cabin crew are not permitted to administer injections or give medication.',
    srcNote: 'From Lufthansa\'s own pages, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Take them into the cabin', 'Keep them with you', 'Lufthansa says to take the medicines you need on your journey into the cabin.', [
        'Lufthansa: if your carry-on has to go in the hold (for example because overhead space is limited), take out your valuables, any medicines required on the journey and battery-powered devices and take them into the cabin with you.',
        'Lufthansa\'s pages we read do not give a separate rule for pills in checked baggage.'
      ], [CB], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'Lufthansa\'s pages we read give no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [CB]),
      card('needles', 'Insulin & syringes', 'warn', 'Not published', 'Needles, syringes, injections', 'Lufthansa\'s pages we read give no rule for carrying syringes.', [
        'Lufthansa: cabin crew are only trained in first aid and are not permitted to administer any injection or give medication.',
        'Security rules for needles and syringes depend on the airports you fly from and to.'
      ], [MC]),
      card('cold', 'Cold medication', 'go', 'The Cube is free', 'Medication that must stay cold', 'Lufthansa carries its partner\'s Cube cooler free of charge as a medically necessary item.', [
        'Lufthansa: the Cube by Tec4Med LifeScience, an official Lufthansa partner, keeps medicines at 2 to 8 degrees Celsius from take-off to your destination.',
        'It can be transported free of charge as a medically necessary item in addition to your regular carry-on baggage, and does not have to be declared separately to Lufthansa.',
        'You must buy the Cube in advance from the partner: it cannot be hired at the airport.'
      ], [TM]),
      card('help', 'Help taking medication', 'warn', 'Crew will not give it', 'Medication during the flight', 'Lufthansa cabin crew cannot give you injections or medication.', [
        'Lufthansa: cabin attendants are trained only in first aid and are not permitted to administer any injection or give medication.',
        'Passengers who need medical clearance can contact Lufthansa\'s Medical Operation Center (medicaloperation@dlh.de, phone +49 69 696 55077).'
      ], [MC]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [TM])
    ],
    faq: [
      ['Can I bring medication on a Lufthansa flight?', 'Yes. Lufthansa says to take the medicines you need on your journey into the cabin, including when your carry-on has to be loaded into the hold.'],
      ['Does Lufthansa have a cooler for insulin or other cold medicine?', 'Lufthansa works with Tec4Med LifeScience, whose Cube keeps medicines at 2 to 8 degrees Celsius. It is carried free of charge as a medically necessary item in addition to your carry-on, and you must buy it in advance: it cannot be hired at the airport.'],
      ['Will Lufthansa cabin crew give me my medication or an injection?', 'No. Lufthansa says cabin crew are trained only in first aid and are not permitted to administer any injection or give medication.'],
      ['Do I need to tell Lufthansa about the Cube?', 'No. Lufthansa says the Cube does not have to be declared separately to Lufthansa.']
    ],
    tableTitle: 'Lufthansa medication rules at a glance',
    tableNote: 'What Lufthansa\'s own pages say.',
    rows: [
      ['Where should medication go?', 'In the cabin with you'],
      ['Can it be over 100 ml?', NP],
      ['Needles and syringes?', NP],
      ['Fridge or cooler on board?', 'Cube cooler carried free; buy it in advance'],
      ['Help taking medication?', 'Crew may not administer injections or medication']
    ],
    extra: steps(['Keep medication you need on the journey in your cabin bag. If your carry-on goes to the hold, take the medicines out first.', 'For cold medicine, order the Cube from Lufthansa\'s partner before your trip: it cannot be hired at the airport.', 'Check the medication rules of your destination country.'])
  });
}

module.exports = out;
