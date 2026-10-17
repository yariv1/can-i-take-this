// Airline Medication pages (pilot, 2026-10-17): /airline/<slug>/medication/ + a "Medication" tab, shown ONLY for airlines listed here.
// Rule (user order 2026-10-17, same standard as the Wi-Fi pilot): an airline is listed ONLY when its OWN published pages were READ and say something about medication.
// Everything on the cards comes from those airline pages plus TSA (US government). Anything an airline does not publish is said as "not published", never filled from third-party sources.
// Pilot airlines: Delta, American, United, Southwest, then Ryanair, Emirates, Air Canada, Lufthansa, then JetBlue, KLM, easyJet, Air France, Turkish (non-US carriers use their own pages; Air Canada also uses CATSA, Canada's screening authority). Alaska Airlines is NOT listed (pages unreadable): British Airways (the medicines section did not load), Qatar Airways (no readable medication page), alaskaair.com returned only an error page from every browser tried on 2026-10-17 (summaries are not reading).
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

// ---------------- JETBLUE ----------------
// Read 17 October 2026 on jetblue.com: Medication (help page).
{
  const PG = ['https://www.jetblue.com/help/medication', 'JetBlue: Medication', 'Traveling with medication'];
  add({
    slug: 'jetblue', name: 'JetBlue',
    h1: 'JetBlue Medication Policy: Pills, Insulin, Syringes & Cooling on a JetBlue Flight (2026)',
    desc: 'Can you bring medication on JetBlue? Yes: all prescription and over-the-counter medication, liquids included, plus syringes and pens, but never in checked bags. No fridge on board; bring a small insulated cooler. Checked 17 October 2026.',
    answer: 'Yes. JetBlue lets you bring all prescription and over-the-counter medication for medical purposes, including liquids, gels and aerosols, and supplies such as syringes and pens. Medication must stay with you, never in checked bags. There are no refrigerators on board: bring a small insulated cooler.',
    srcNote: 'From JetBlue\'s own medication page and TSA\'s medication pages, last checked 17 October 2026. Rules change, so confirm with the airline and TSA before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed', 'Keep it with you', 'JetBlue lets you bring all medication in any form, but never in checked bags.', [
        'JetBlue: customers with a disability or medical condition may bring all prescription and over-the-counter medication for medical purposes.',
        'JetBlue: medication should always remain with you, never in checked bags.',
        'JetBlue: all medication in any form (pills, injectable or homeopathic) is allowed through the security checkpoint once screened. Medication in daily-dosage containers is also allowed once screened.',
        'JetBlue and TSA recommend, but do not require, that your medication is labelled to help screening.'
      ], [PG, TSA_PILLS], true),
      card('liquids', 'Liquid medication', 'warn', 'Allowed, declare it', 'Over 100 ml (3.4 oz)', 'There is no limit on medically necessary liquids, but declare anything over 3.4 oz at the checkpoint.', [
        'JetBlue: you may also bring liquids, juice or liquid nutrition and gels, and gels or frozen liquids needed to cool disability- or medically-related items, with no limit on amount or volume in your carry-on.',
        'JetBlue: if the medically necessary items exceed 3.4 ounces or are not in a one-quart zip-top plastic bag, you must declare them to a TSA officer at the checkpoint for further inspection.',
        TSA_LIQ_LINE
      ], [PG, TSA_LIQ]),
      card('needles', 'Insulin & syringes', 'go', 'Allowed once screened', 'Needles, syringes, pens', 'JetBlue allows syringes, pens and sharps containers with your medication once they are screened.', [
        'JetBlue: you may bring associated supplies such as syringes, pens, infusers and saline solution on board. Syringes, sharps disposal containers and pre-loaded syringes are allowed through the checkpoint once screened.',
        TSA_SYR_LINE,
        TSA_INS_LINE
      ], [PG, TSA_SYR, TSA_INS]),
      card('cold', 'Cold medication', 'warn', 'Bring a small cooler', 'Medication that must stay cold', 'JetBlue has no refrigerators on board: bring a small insulated cooler.', [
        'JetBlue: refrigerators are not available on board its aircraft.',
        'JetBlue: if your medication needs to be refrigerated you may bring a small insulated cooler that meets the carry-on bag requirements.',
        TSA_ICE_LINE
      ], [PG, TSA_ICE]),
      card('devices', 'Pumps & medical devices', 'warn', 'Tell the officer', 'Insulin pump, monitor', 'JetBlue\'s medication page gives no device rule; TSA asks you to tell the officer about devices on your body.', [
        'JetBlue\'s medication page does not cover insulin pumps or other medical devices.',
        TSA_DEV_LINE
      ], [TSA_SUP]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a JetBlue flight?', 'Yes. JetBlue says customers with a disability or medical condition may bring all prescription and over-the-counter medication for medical purposes, including liquids, gels and aerosols, and associated supplies such as syringes, pens and infusers. Medication should always remain with you, never in checked bags.'],
      ['Can I bring more than 3.4 oz of liquid medication on JetBlue?', 'Yes. JetBlue says you are not limited in the amount or volume of medically necessary liquids in your carry-on, but if they exceed 3.4 ounces or are not in a one-quart zip-top bag you must declare them to a TSA officer at the checkpoint.'],
      ['Does JetBlue have a fridge for medication?', 'No. JetBlue says refrigerators are not available on board. If your medication needs to be refrigerated you may bring a small insulated cooler that meets the carry-on bag requirements.'],
      ['Can I bring insulin and syringes on JetBlue?', 'Yes. JetBlue allows syringes, pens, sharps disposal containers and pre-loaded syringes through the checkpoint once they have been screened. TSA says to tell officers you have medically necessary liquids such as insulin.']
    ],
    tableTitle: 'JetBlue medication rules at a glance',
    tableNote: 'What JetBlue\'s own page and TSA say.',
    rows: [
      ['Where should medication go?', 'With you, never in checked bags'],
      ['Can it be over 100 ml?', 'Yes. Declare anything over 3.4 oz to TSA'],
      ['Needles and syringes?', 'Allowed once screened'],
      ['Fridge or cooler on board?', 'No fridge. Small insulated cooler allowed'],
      ['Labels?', 'Recommended, not required']
    ],
    extra: steps(['Keep all medication in your carry-on, never in a checked bag.', 'Pack syringes and pens with the medication they are for.', 'At security, declare liquids over 3.4 oz and gel packs to the TSA officer.', 'If your medication must stay cold, bring a small insulated cooler that meets carry-on size limits.'])
  });
}

// ---------------- KLM ----------------
// Read 17 October 2026 on klm.com (Israel version of the same pages): Medicines and medical equipment; Restricted items in hand baggage.
{
  const PG = ['https://www.klm.com/information/assistance-health/medicines-medical-equipment', 'KLM: Travelling with medicines or medical equipment', 'Medication, cooling, medical equipment'];
  const RI = ['https://www.klm.com/information/baggage/restricted-items-hand-baggage', 'KLM: Restricted items in hand baggage', 'Liquids and medicines'];
  add({
    slug: 'klm', name: 'KLM',
    h1: 'KLM Medication Policy: Pills, Insulin, Syringes, Liquids & Cooling (2026)',
    desc: 'Can you bring medication on KLM? Yes: always bring prescribed medication in your hand baggage with an English prescription, including for syringes. Medicines for the flight are exempt from the liquid rule. Small packages can use the onboard fridge. Checked 17 October 2026.',
    answer: 'Yes. KLM says you can always bring prescribed medication on board, in your hand baggage, with a prescription written in English that also covers any syringes. Medicines for the flight are always allowed with a prescription or doctor\'s statement, outside the liquids rule. KLM can store medication in small packaging in the onboard refrigerator.',
    srcNote: 'From KLM\'s own pages, last checked 17 October 2026 (read on KLM\'s Israel site; page wording can differ by country). Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Hand baggage with prescription', 'Carry them with you', 'KLM says you can always bring prescribed medication on board, in your hand baggage.', [
        'KLM: you can always bring prescribed medication onboard. Add it to your hand baggage so you can reach it during and immediately after the flight.',
        'KLM: always pack your essential medicines in your hand baggage, including enough for the first few days after arrival.',
        'KLM asks you to carry a doctor\'s prescription written in English for your medication and any syringes, so customs and security officers can check it.'
      ], [PG, RI], true),
      card('liquids', 'Liquid medication', 'go', 'Allowed with prescription', 'Over 100 ml (3.4 oz)', 'Medicines to take during the flight are always allowed, with a prescription or doctor\'s statement.', [
        'KLM: you are always allowed to bring medicines to be taken during the flight, together with a prescription or doctor\'s statement, even though ordinary liquids are limited to containers of 100 ml in one transparent bag of up to 1 litre.',
        'KLM: you are always allowed to bring liquid medications you need during the flight.'
      ], [RI]),
      card('needles', 'Insulin & syringes', 'warn', 'Bring an English prescription', 'Needles, syringes, injections', 'KLM asks for an English prescription that covers your medication and any syringes.', [
        'KLM: bring a doctor\'s prescription in English for medication and any syringes. Customs or security officers can check it if they have questions.',
        'KLM\'s pages we read give no other rule for syringes or sharps.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Small packages can go in the fridge', 'Medication that must stay cold', 'KLM has limited fridge space: bring a cold bag or flask, small packages may go in the fridge.', [
        'KLM: its aircraft have limited refrigerator space on board. If your medication needs cooling, KLM advises you to bring cold storage bags or vacuum flasks.',
        'KLM: medication in small packaging can be stored in the onboard refrigerator.'
      ], [PG]),
      card('devices', 'Medical equipment', 'warn', 'Bring charged batteries', 'CPAP, oxygen, other equipment', 'Medical equipment cannot use in-seat power: bring enough charged batteries.', [
        'KLM: CPAP and BiPAP equipment and respirators may come on board if they can be stowed under a seat or strapped to an adjoining seat.',
        'KLM: in-seat power outlets cannot be used for medical equipment because the power is unstable and not certified. Bring charged batteries that last at least 150% of the expected maximum flight time.',
        'KLM: you cannot use power banks or batteries, including certified medical batteries, to power medical equipment onboard; only internal or manufacturer-approved external medical batteries are allowed.',
        'KLM: if you use your own oxygen or want KLM to provide it, contact KLM at least 48 hours before departure and fill in the medical information form. KLM-provided oxygen costs EUR 375 per flight.'
      ], [PG]),
      card('opiate', 'Dutch opiate law', 'warn', 'Medicine declaration', 'Medicines that fall under the Dutch Opiate Law', 'Medication covered by the Dutch Opiate Law needs a medicine declaration at customs.', [
        'KLM: a medicine passport is not a legal travel document, but it can be useful.',
        'KLM: if you use medication that falls under the Dutch Opiate Law you need a medicine declaration to declare it at customs. KLM points to the Dutch government website to check.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a KLM flight?', 'Yes. KLM says you can always bring prescribed medication onboard, in your hand baggage, and asks you to carry a doctor\'s prescription in English for your medication and any syringes.'],
      ['Can I bring liquid medication over 100 ml on KLM?', 'Yes. KLM says you are always allowed to bring medicines to be taken during the flight, together with a prescription or doctor\'s statement.'],
      ['Does KLM keep medication in the fridge?', 'KLM has limited refrigerator space and advises you to bring cold storage bags or vacuum flasks. It says medication in small packaging can be stored in the onboard refrigerator.'],
      ['Can I use my medical equipment on KLM power?', 'No. KLM says in-seat power outlets cannot be used for medical equipment. Bring charged batteries that last at least 150% of the expected maximum flight time; power banks cannot be used to power medical equipment.'],
      ['Do I need a medicine declaration on KLM?', 'If your medication falls under the Dutch Opiate Law you need a medicine declaration to declare it at customs. A medicine passport is not a legal document but can be useful.']
    ],
    tableTitle: 'KLM medication rules at a glance',
    tableNote: 'What KLM\'s own pages say.',
    rows: [
      ['Where should medication go?', 'Hand baggage, with an English prescription'],
      ['Can it be over 100 ml?', 'Yes if for the flight, with prescription or doctor\'s statement'],
      ['Needles and syringes?', 'English prescription covering the syringes'],
      ['Fridge on board?', 'Limited. Small packages can be stored; bring a cold bag'],
      ['Power for medical equipment?', 'No in-seat power. Bring charged batteries'],
      ['Opiate Law medication?', 'Needs a medicine declaration at customs']
    ],
    extra: steps(['Put your essential medicines in your hand baggage, with enough for the first few days after arrival.', 'Bring an English prescription for the medication and any syringes.', 'Bring a cold bag or vacuum flask for medication that must stay cold; ask about the fridge for small packages.', 'For medical equipment, bring batteries that last 150% of the flight time.'])
  });
}

// ---------------- EASYJET ----------------
// Read 17 October 2026 on easyjet.com: Medicine, medical conditions and equipment (including the panels "What medication and equipment you can bring on board", "Travelling with diabetes", "Travelling with medication containing a controlled drug").
{
  const PG = ['https://www.easyjet.com/en/help/boarding-and-flying/medicine-medical-conditions-and-equipment', 'easyJet: Medicine, medical conditions and equipment', 'Medication, diabetes, controlled drugs'];
  add({
    slug: 'easyjet', name: 'easyJet',
    h1: 'easyJet Medication Policy: Pills, Insulin, Needles, Liquids & Medical Equipment (2026)',
    desc: 'Can you bring medication on easyJet? Yes, in your cabin bag. You only need a doctor\'s letter for liquids over 100 ml, needles and oxygen. Insulin pens need no certificate; easyJet cannot refrigerate medication. Checked 17 October 2026.',
    answer: 'Yes. easyJet says to pack medication in your cabin bag. A letter from your healthcare practitioner is only needed for liquids over 100 ml, sharp objects such as needles, oxygen cylinders and concentrators, and medical equipment that counts as dangerous goods. Insulin pens need no certificate. easyJet cannot refrigerate medication.',
    srcNote: 'From easyJet\'s own medical page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed, no letter', 'Pack it in your cabin bag', 'easyJet says to pack medication in your cabin bag wherever possible. No letter is needed for pills.', [
        'easyJet: if you pack medicines in hold luggage it does not require a letter from your healthcare practitioner, but advises you to pack medication in your hand luggage where possible, especially medication you may need during the flight.',
        'easyJet: a letter from your healthcare practitioner is only required for liquids over 100 ml, sharp objects such as needles, oxygen cylinders and concentrators, and medical equipment that may be dangerous goods in the cabin.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Letter needed over 100 ml', 'Over 100 ml (3.4 oz)', 'easyJet requires a letter from your healthcare practitioner for liquids over 100 ml.', [
        'easyJet: the letter should confirm that the medication is prescribed to you and that it is necessary for you to bring the items on board.',
        'easyJet does not require a letter for gel packs and cooler bags used to keep your medication cool.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Letter or certificate needed', 'Needles, syringes, insulin pens', 'Insulin pens need no certificate; needles need a letter and must be self-administered.', [
        'easyJet: diabetic insulin pens are permitted for travel without a medical certificate.',
        'easyJet: hypodermic needles are allowed in the cabin for medical purposes only. You must show your medical certificate at the security screening points.',
        'easyJet: keep enough insulin in your cabin baggage, because insulin may be inactivated if carried in the hold due to freezing temperatures.',
        'easyJet: if you need an injection during the flight it must be self-administered. Cabin crew are not allowed to administer any medication or injections. Tell the crew if you need to use a needle so they can arrange a sharps box.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Bring gel packs', 'Medication that must stay cold', 'easyJet cannot refrigerate medication, but allows gel packs and cooler bags without a letter.', [
        'easyJet: it is unable to refrigerate medication on board.',
        'easyJet: you do not need a letter from your healthcare practitioner for gel packs and cooler bags used to maintain the temperature of your medication.'
      ], [PG]),
      card('devices', 'Medical equipment', 'warn', 'Tell easyJet 48 hours ahead', 'CPAP, nebuliser, dialysis, other devices', 'Small portable medical devices can be carried on top of your cabin allowance if you tell easyJet in advance.', [
        'easyJet: portable medical devices such as CPAP machines, TENS machines, nebulisers and portable dialysis machines can be carried in addition to your cabin bag allowance, if no larger than 56 x 45 x 25 cm and you told the Special Assistance Team at least 48 hours before your flight.',
        'easyJet: larger or several devices: contact the Special Assistance team at least 48 hours before your flight. Non-essential medical equipment over your cabin allowance is charged under the baggage policy.',
        'easyJet: nebulisers are permitted in cabin baggage provided they do not contain oxygen cylinders; keep inhalers in your cabin baggage.'
      ], [PG]),
      card('controlled', 'Controlled drugs', 'warn', 'Prove it is yours', 'Diazepam, lorazepam, codeine, tramadol', 'Medication with a controlled drug needs a prescription or doctor\'s letter, and may be restricted at your destination.', [
        'easyJet: check with your doctor or pharmacist if your prescription contains a controlled drug, such as diazepam, lorazepam, codeine or tramadol: some countries have strict laws on these.',
        'easyJet: check the embassy rules and entry requirements of the country you are travelling to before you fly. You will need to prove the medication is yours, with a prescription or a letter from your doctor.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on an easyJet flight?', 'Yes. easyJet says to pack medication in your cabin bag wherever possible. You do not need a letter for medicines in the hold, but easyJet advises carrying them in hand luggage, especially if you may need them during the flight.'],
      ['Do I need a doctor\'s letter for medication on easyJet?', 'Only for liquids over 100 ml, sharp objects such as needles, oxygen cylinders and concentrators, and medical equipment that may be considered dangerous goods in the cabin. The letter should confirm the items are prescribed to you and necessary on board.'],
      ['Can I bring insulin pens on easyJet?', 'Yes. easyJet says diabetic insulin pens are permitted for travel without a medical certificate. Keep insulin in your cabin baggage: it may be inactivated by freezing temperatures in the hold.'],
      ['Does easyJet refrigerate medication?', 'No. easyJet is unable to refrigerate medication on board. Gel packs and cooler bags to keep your medication cool do not need a letter.'],
      ['Can I bring a CPAP machine on easyJet?', 'Yes. easyJet says CPAP machines, nebulisers, TENS machines and portable dialysis machines can be carried in addition to your cabin allowance if no larger than 56 x 45 x 25 cm and you told the Special Assistance Team at least 48 hours before your flight.']
    ],
    tableTitle: 'easyJet medication rules at a glance',
    tableNote: 'What easyJet\'s own medical page says.',
    rows: [
      ['Where should medication go?', 'Cabin bag where possible. No letter if it goes in the hold'],
      ['When is a doctor\'s letter needed?', 'Liquids over 100 ml, needles, oxygen, dangerous-goods equipment'],
      ['Insulin pens?', 'Allowed without a certificate. Keep them in the cabin'],
      ['Fridge on board?', 'No. Gel packs and cooler bags allowed without a letter'],
      ['Portable medical devices?', 'Extra to cabin allowance up to 56 x 45 x 25 cm, 48 hours notice'],
      ['Injections in flight?', 'Self-administered. Crew will not give them']
    ],
    extra: steps(['Pack medication in your cabin bag, with enough insulin for the whole trip.', 'Get a letter from your healthcare practitioner if you carry liquids over 100 ml, needles or oxygen.', 'Bring gel packs or a cooler bag for medication that must stay cold.', 'Tell the Special Assistance Team at least 48 hours ahead if you bring a CPAP, nebuliser or dialysis machine on top of your cabin allowance.', 'Using a needle in flight? Tell the crew for a sharps box.'])
  });
}

// ---------------- AIR FRANCE ----------------
// Read 17 October 2026 on wwws.airfrance.us: Aerosol products, toiletries and medication; Liquids, creams; Health and well-being.
{
  const HW = ['https://wwws.airfrance.us/information/aeroport/sante-et-bien-etre', 'Air France: Health and well-being', 'Travelling with medication'];
  const LQ = ['https://wwws.airfrance.us/information/bagages/popin_produits-interdits-et-reglementes/produits-interdits-et-reglementes-11', 'Air France: Liquids, creams', 'Medication exception'];
  const AE = ['https://wwws.airfrance.us/information/bagages/popin_produits-interdits-et-reglementes/produits-interdits-et-reglementes-1', 'Air France: Aerosol products, toiletries and medication', 'Quantity limits'];
  add({
    slug: 'air-france', name: 'Air France',
    h1: 'Air France Medication Policy: Medicines in Hand Baggage, Liquids & Prescriptions (2026)',
    desc: 'Can you bring medication on Air France? Yes, in your hand baggage with the prescription. Medication with a prescription or doctor\'s statement is exempt from the cabin liquid limit. Checked 17 October 2026.',
    answer: 'Yes. Air France says to place all your medication in your hand baggage with the prescriptions stating their precise names. Medication needed during the flight is allowed without restriction in the cabin liquids rule if you have a prescription or a statement from your doctor.',
    srcNote: 'From Air France\'s own pages, last checked 17 October 2026 (US version of the pages). Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Hand baggage with prescription', 'Keep it within reach', 'Air France says to put all medication in your hand baggage with the prescriptions, which name the drugs precisely.', [
        'Air France: if you need medication during your flight, place all your medication in your hand baggage along with the prescriptions stating their precise names. Keep this document within easy reach.',
        'Air France recommends consulting your doctor before travelling if you are receiving medical treatment or have a chronic illness.'
      ], [HW], true),
      card('liquids', 'Liquid medication', 'go', 'Allowed with prescription', 'Over 100 ml (3.4 oz)', 'Medication with a prescription or a doctor\'s statement is allowed in the cabin without the liquid restriction.', [
        'Air France: liquids, creams and pastes are allowed in the cabin in containers of 100 ml (3.3 oz) maximum each, in one clear plastic bag of up to 1 L.',
        'Air France exceptions: if necessary during your flight, medication with a prescription or a statement from your doctor, baby food and food for a specific dietary regimen are allowed without restrictions.',
        'Air France: toiletries and non-radioactive medication (including aerosol products) are limited to 2 kg or 2 L in total per person, and each item to 0.5 kg or 500 ml. These quantities do not take the cabin liquid rule into account.'
      ], [LQ, AE]),
      card('needles', 'Insulin & syringes', 'warn', 'Not published', 'Needles, syringes, injections', 'The Air France pages we read do not state a rule for syringes or insulin.', [
        'Air France\'s health page has separate entries for insulin and syringes, but their text did not display when we read the page, so we do not state them here.',
        'Air France advises carrying prescriptions that state the precise names of your medication.'
      ], [HW]),
      card('cold', 'Cold medication', 'warn', 'Not published', 'Medication that must stay cold', 'Air France\'s pages we read do not say whether it can store medication cold.', [
        'Air France\'s pages we read do not say whether crew can chill or store medication, so plan to carry your own cooling.'
      ], [HW]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [HW])
    ],
    faq: [
      ['Can I bring medication on an Air France flight?', 'Yes. Air France says to place all your medication in your hand baggage along with the prescriptions stating their precise names, and to keep this document within easy reach.'],
      ['Can I bring liquid medication over 100 ml on Air France?', 'Yes, if it is necessary during your flight and you have a prescription or a statement from your doctor. Air France lists medication with a prescription or doctor\'s statement as an exception to the 100 ml cabin liquid limit.'],
      ['Is there a quantity limit for medication on Air France?', 'Air France limits the net total of toiletries, non-radioactive medication and aerosol products to 2 kg or 2 L per person, with each item at most 0.5 kg or 500 ml. These quantities are separate from the cabin liquids restriction.']
    ],
    tableTitle: 'Air France medication rules at a glance',
    tableNote: 'What Air France\'s own pages say. Where Air France is silent we say so.',
    rows: [
      ['Where should medication go?', 'Hand baggage, with the prescription'],
      ['Can it be over 100 ml?', 'Yes with a prescription or doctor\'s statement'],
      ['Quantity limit?', 'Toiletries and medication: 2 kg or 2 L total, 0.5 kg or 500 ml each'],
      ['Needles and syringes?', NP],
      ['Fridge or cooler on board?', NP]
    ],
    extra: steps(['Put all medication in your hand baggage with the prescription that names the drugs precisely.', 'Keep the prescription or a doctor\'s statement within easy reach for security.', 'Check the limits for medication and toiletries: 2 kg or 2 L in total per person.'])
  });
}

// ---------------- TURKISH AIRLINES ----------------
// Read 17 October 2026 on turkishairlines.com: Special Assistance Services for Passengers; Valuables (baggage information).
{
  const SA = ['https://www.turkishairlines.com/en-es/any-questions/special-assistance-for-passengers/', 'Turkish Airlines: Special assistance services for passengers', 'Medications'];
  const VA = ['https://www.turkishairlines.com/en-us/any-questions/baggage-information/valuables/', 'Turkish Airlines: Valuables', 'Medicines in hand baggage'];
  add({
    slug: 'turkish-airlines', name: 'Turkish Airlines',
    h1: 'Turkish Airlines Medication Policy: Medicines in Hand Baggage, Diabetes & Liquids (2026)',
    desc: 'Can you bring medication on Turkish Airlines? Yes, in your hand baggage. Passengers with diabetes can take their medication without a report; for other conditions keep your prescription. Checked 17 October 2026.',
    answer: 'Yes. Turkish Airlines says to carry medicines you may need during or right after the flight in your hand baggage and to try to keep liquid medicine under 100 ml. Passengers with diabetes can take their medication without a report; passengers with other conditions must keep their prescriptions with them.',
    srcNote: 'From Turkish Airlines\' own pages, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Hand baggage', 'Carry them with you', 'Turkish Airlines says to carry medicines you may need during or right after your flight in your hand baggage.', [
        'Turkish Airlines: carry the medicines you may need during or right after your flight in your hand baggage so you can reach them whenever you need.',
        'Passengers with medical conditions other than diabetes who must take medication during the flight must keep their prescriptions with them.'
      ], [VA, SA], true),
      card('liquids', 'Liquid medication', 'warn', 'Try to stay under 100 ml', 'Over 100 ml (3.4 oz)', 'Turkish Airlines asks you to try to keep liquid medicine under 100 ml.', [
        'Turkish Airlines: also try to limit the amount of your liquid medicine to under 100 ml.',
        'Its pages we read do not say what happens with larger medically necessary amounts, so check the security rules of the airport you fly from.'
      ], [VA]),
      card('needles', 'Insulin & diabetes', 'go', 'No report needed', 'Passengers with diabetes', 'Passengers with diabetes may take their medication without producing a report.', [
        'Turkish Airlines: passengers with diabetes may take their relevant medications without producing a report.',
        'Turkish Airlines\' pages we read give no separate rule for syringes or needles.'
      ], [SA]),
      card('cold', 'Cold medication', 'warn', 'Not published', 'Medication that must stay cold', 'Turkish Airlines\' pages we read do not say whether it can store medication cold.', [
        'The pages we read do not say whether crew can chill or store medication, so plan to carry your own cooling.'
      ], [VA]),
      card('allergy', 'Allergy medication', 'warn', 'Carry your own', 'Epinephrine auto-injectors', 'Passengers must carry their own allergy medication with its prescription.', [
        'Turkish Airlines: passengers must carry their own medication (for example an epinephrine auto-injector) along with the prescription.',
        'Passengers at risk of a severe allergic reaction must travel with a companion who can help give medication in an emergency.'
      ], [SA]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [VA])
    ],
    faq: [
      ['Can I bring medication on a Turkish Airlines flight?', 'Yes. Turkish Airlines says to carry medicines you may need during or right after your flight in your hand baggage, and to try to keep liquid medicine under 100 ml.'],
      ['Do I need a report for diabetes medication on Turkish Airlines?', 'No. Turkish Airlines says passengers with diabetes may take their relevant medications without producing a report. Passengers with other conditions who need medication during the flight must keep their prescriptions with them.'],
      ['Should I carry an epinephrine auto-injector on Turkish Airlines?', 'Yes. Turkish Airlines says passengers must carry their own medication, such as an epinephrine auto-injector, together with the prescription, and passengers at risk of a severe allergic reaction must travel with a companion who can help.']
    ],
    tableTitle: 'Turkish Airlines medication rules at a glance',
    tableNote: 'What Turkish Airlines\' own pages say. Where it is silent we say so.',
    rows: [
      ['Where should medication go?', 'Hand baggage'],
      ['Can it be over 100 ml?', 'Try to keep liquid medicine under 100 ml'],
      ['Diabetes medication?', 'No report needed'],
      ['Other conditions?', 'Keep the prescription with you'],
      ['Needles and syringes?', NP],
      ['Fridge or cooler on board?', NP]
    ],
    extra: steps(['Put the medicines you may need in your hand baggage.', 'Keep your prescription with you if you take medication other than for diabetes.', 'Keep liquid medicine under 100 ml where you can.', 'Carry your own epinephrine auto-injector if you have a severe allergy.'])
  });
}

module.exports = out;
