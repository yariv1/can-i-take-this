// Airline Medication pages (pilot, 2026-10-17): /airline/<slug>/medication/ + a "Medication" tab, shown ONLY for airlines listed here.
// Rule (user order 2026-10-17, same standard as the Wi-Fi pilot): an airline is listed ONLY when its OWN published pages were READ and say something about medication.
// Everything on the cards comes from those airline pages plus TSA (US government). Anything an airline does not publish is said as "not published", never filled from third-party sources.
// Pilot airlines: Delta, American, United, Southwest, then Ryanair, Emirates, Air Canada, Lufthansa, then JetBlue, KLM, easyJet, Air France, Turkish, then Qantas, Singapore Airlines, Cathay Pacific, Vueling, Finnair, Iberia, SAS, then Etihad, Air India, LATAM, Air New Zealand, Aer Lingus, TAP, then Avianca, SWISS, Austrian, Brussels Airlines, Norwegian (non-US carriers use their own pages; Air Canada also uses CATSA, Canada's screening authority). Alaska Airlines is NOT listed (pages unreadable): British Airways (the medicines section did not load), Qatar Airways (no readable medication page), alaskaair.com returned only an error page from every browser tried on 2026-10-17 (summaries are not reading).
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


// ---------- anti-duplication polish (user order 2026-10-17: no generic, repeated text across airline pages) ----------
// 1) Cards whose only content is "the page does not say" are merged into ONE airline-specific card ("Not published") instead of 3-4 identical cards.
// 2) The "Flying abroad" card names the airline and links to the medication rules of its home country; the generic sentences are not repeated.
const HOME = { 'copa-airlines': 'panama', 'south-african-airways': 'south-africa', 'royal-jordanian': 'jordan', aegean: 'greece', 'air-arabia': 'united-arab-emirates', azul: 'brazil', 'oman-air': 'oman', 'malaysia-airlines': 'malaysia', westjet: 'canada', 'virgin-australia': 'australia', icelandair: 'iceland', 'ethiopian-airlines': 'ethiopia', gol: 'brazil', transavia: 'netherlands', pegasus: 'turkey', flydubai: 'united-arab-emirates', 'gulf-air': 'bahrain', 'kenya-airways': 'kenya', asiana: 'south-korea', 'philippine-airlines': 'philippines', 'royal-air-maroc': 'morocco', 'air-europa': 'spain', eurowings: 'germany', 'wizz-air': 'hungary', 'thai-airways': 'thailand', 'qatar-airways': 'qatar', ana: 'japan', frontier: 'united-states', 'british-airways': 'united-kingdom', delta: 'united-states', 'american-airlines': 'united-states', united: 'united-states', southwest: 'united-states', jetblue: 'united-states', ryanair: 'ireland', 'aer-lingus': 'ireland', emirates: 'united-arab-emirates', 'etihad-airways': 'united-arab-emirates', 'air-canada': 'canada', lufthansa: 'germany', klm: 'netherlands', easyjet: 'united-kingdom', 'air-france': 'france', 'turkish-airlines': 'turkey', qantas: 'australia', 'singapore-airlines': 'singapore', 'cathay-pacific': 'hong-kong', vueling: 'spain', iberia: 'spain', finnair: 'finland', sas: 'sweden', 'air-india': 'india', latam: 'chile', 'air-new-zealand': 'new-zealand', 'tap-air-portugal': 'portugal', avianca: 'colombia', swiss: 'switzerland', austrian: 'austria', 'brussels-airlines': 'belgium', norwegian: 'norway', 'lot-polish': 'poland', israir: 'israel', 'el-al': 'israel', arkia: 'israel', 'korean-air': 'south-korea', 'china-eastern': 'china', 'virgin-atlantic': 'united-kingdom', 'vietnam-airlines': 'vietnam', volaris: 'mexico', 'ita-airways': 'italy', sunexpress: 'turkey' };
const HOMENAME = { poland: 'Poland', vietnam: 'Vietnam', mexico: 'Mexico', italy: 'Italy', israel: 'Israel', china: 'China', panama: 'Panama', 'south-africa': 'South Africa', jordan: 'Jordan', greece: 'Greece', oman: 'Oman', malaysia: 'Malaysia', iceland: 'Iceland', ethiopia: 'Ethiopia', brazil: 'Brazil', bahrain: 'Bahrain', kenya: 'Kenya', 'south-korea': 'South Korea', philippines: 'the Philippines', morocco: 'Morocco', hungary: 'Hungary', thailand: 'Thailand', qatar: 'Qatar', japan: 'Japan', 'united-states': 'the United States', ireland: 'Ireland', 'united-arab-emirates': 'the UAE', canada: 'Canada', germany: 'Germany', netherlands: 'the Netherlands', 'united-kingdom': 'the UK', france: 'France', turkey: 'Turkey', australia: 'Australia', singapore: 'Singapore', 'hong-kong': 'Hong Kong', spain: 'Spain', finland: 'Finland', sweden: 'Sweden', india: 'India', chile: 'Chile', 'new-zealand': 'New Zealand', portugal: 'Portugal', colombia: 'Colombia', switzerland: 'Switzerland', austria: 'Austria', belgium: 'Belgium', norway: 'Norway' };
const SLUG = a => a.name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const GENERIC_LINE = /not say|does not say|do not say|set by the security rules|gives no|give no|plan to carry your own cooling|depend on the airports|does not cover|do not cover|did not display|not state/i;
const UNK = { pills: 'ordinary pills and tablets', liquids: 'the liquid limit for medication', needles: 'the rule for needles and syringes', cold: 'cold storage or a fridge', devices: 'the rule for medical equipment', allergy: 'allergy medication' };
function polish(scen, a) {
  const sl = SLUG(a), home = HOME[sl], HN = home && HOMENAME[home], name = a.name;
  const merged = [], keep = [];
  for (const c of scen) {
    if (c.verdict === 'Not published' && UNK[c.id] && c.lines.every(l => GENERIC_LINE.test(l))) merged.push(c); else keep.push(c);
  }
  let out = keep.slice();
  if (merged.length) {
    const labels = merged.map(c => UNK[c.id]);
    const titles = [...new Set(merged.map(c => String(c.sources[0][1]).replace(/^[^:]+: /, '')))];
    const srcs = []; const seen = new Set();
    merged.forEach(c => c.sources.forEach(x => { if (!seen.has(x[0])) { seen.add(x[0]); srcs.push(x); } }));
    const list = labels.length > 1 ? labels.slice(0, -1).join(', ') + ' and ' + labels[labels.length - 1] : labels[0];
    const card = { id: 'unknown', label: 'Not published', status: 'warn', verdict: 'Not published', sub: 'What ' + name + ' does not say',
      head: name + '\'s pages we read do not state ' + list + '.',
      lines: ['Page read: ' + titles.join('; ') + '.', 'Where an airline is silent, the rule of the airport you fly from applies: check its security rules, or ask ' + name + ' before you rely on it.'], sources: srcs, first: false };
    const ai = out.findIndex(c => c.id === 'abroad' || c.id === 'uae');
    if (ai < 0) out.push(card); else out.splice(ai, 0, card);
  }
  out = out.map(c => {
    if (c.id !== 'abroad') return c;
    const rest = c.lines.filter(l => l !== ABROAD_LINES[0] && l !== ABROAD_LINES[1]);
    const last = HN ? name + ' does not list destination rules for medication. For ' + HN + ' see <a href="/medication/into/' + home + '/">our medication rules for ' + HN.replace(/^the /, 'the ') + '</a>; for other countries check the destination\'s rules first, because controlled medicines (strong painkillers, ADHD or sleep medication, for example) are restricted in many places.' : ABROAD_LINES[1];
    return Object.assign({}, c, { head: 'The country you fly to sets the rules for your medication, not ' + name + '.', lines: rest.concat([last]) });
  });
  out.forEach((c, i) => { c.first = i === 0; });
  return out;
}

const out = {};
const card = (id, label, status, verdict, sub, head, lines, sources, first) => ({ id, label, status, verdict, sub, head, lines, sources, first: !!first });

function add(cfg) {
  out[cfg.slug] = {
    h1: cfg.h1, ttl: cfg.h1, desc: cfg.desc, answer: cfg.answer, faq: cfg.faq,
    render: a => COMP.__render(a, polish(cfg.scen, a), cfg.srcNote, { slab: 'What are you bringing?', tag: 'MEDICATION', legend: LEGEND, srcKind: 'ok', checked: CHECKED, medStyle: true }) +
      '<div class="bd-wrap">' + CSS + '<section class="bd-sec"><h2>💊 ' + esc(cfg.tableTitle) + '</h2><p>' + cfg.tableNote + '</p>' +
      table({ head: ['Question', cfg.name + ' says'], rows: cfg.rows }) + '</section>' + (cfg.extra || '') +
      '<p class="bd-chk">Last checked ' + CHECKED + ' on ' + esc(cfg.name) + '\'s own pages' + (/tsa\.gov/.test(JSON.stringify(cfg.scen)) ? ' and on tsa.gov' : (/catsa/.test(JSON.stringify(cfg.scen)) ? ' and on catsa-acsta.gc.ca' : '')) + '. We re-check regularly because airline' + (/tsa\.gov/.test(JSON.stringify(cfg.scen)) ? ' and TSA' : '') + ' rules change.</p></div>'
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

// ---------------- QANTAS ----------------
// Read 17 October 2026 on qantas.com: Taking medical equipment and medications onboard; help.qantas.com: Taking medication and needles inflight.
{
  const PG = ['https://www.qantas.com/en-au/travel-information/specific-needs-assistance/medical-equipment-medications-onboard', 'Qantas: Taking medical equipment and medications onboard', 'Medications, needles, insulin'];
  const HP = ['https://help.qantas.com/support/s/article/Taking-medication-and-needles-inflight', 'Qantas Help: Taking medication and needles inflight', 'Medical certificate, packaging'];
  add({
    slug: 'qantas', name: 'Qantas',
    h1: 'Qantas Medication Policy: Pills, Insulin, Needles & Medical Equipment (2026)',
    desc: 'Can you bring medication on Qantas? Yes, in your carry-on in original packaging. Declare needles at screening and carry a doctor\'s letter. Qantas cannot refrigerate insulin: bring a small cooler and crew add ice. Checked 17 October 2026.',
    answer: 'Yes. Qantas says to carry all medication in your carry-on, in its original labelled packaging, and to bring only what you need. Declare needles at airport screening and carry a doctor\'s letter. Qantas cannot refrigerate insulin or other drugs: bring a small cooler and the crew will replenish the ice.',
    srcNote: 'From Qantas\' own pages, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Carry-on, labelled', 'Keep it with you', 'Qantas says to carry all your medication in your carry-on, in its original labelled packaging.', [
        'Qantas: carry all medication in your carry-on baggage. Bring only the amount needed for your trip.',
        'Qantas: keep medication in its original packaging, so it is clearly labelled with the medication, the manufacturer\'s name or pharmaceutical label, your name and the dosage.',
        'Qantas: you may need a medical certificate, with your name, date of birth and details of the prescribed medication. Carry or enclose a letter from your doctor with the details of the medication, how much you take with you, and that it is for personal use.'
      ], [PG, HP], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'Qantas\' medication pages we read give no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Needles & syringes', 'warn', 'Declare and carry proof', 'Insulin needles, syringes, injections', 'Declare hypodermic needles at the screening point and carry proof of your medical need.', [
        'Qantas: hypodermic needles must be declared at the screening point. Under Australian law they are prohibited items in an aircraft cabin unless you can show a genuine need to have them, so carry documentation and identification confirming that the needles are required for a medical condition.',
        'Qantas lets you carry needles on board for the period from initial uplift until you are reunited with your checked baggage, and does not object to a small additional supply in the cabin as a contingency. Supplies beyond your inflight needs belong in checked baggage.',
        'Qantas: not all airport screening points are managed by Qantas and screening authorities may have different policies. Qantas accepts no responsibility if needles are confiscated.'
      ], [PG, HP]),
      card('cold', 'Cold medication', 'warn', 'Bring a small cooler', 'Insulin and other cold medication', 'Qantas cannot refrigerate insulin or other drugs onboard.', [
        'Qantas: it is not able to refrigerate insulin or other drugs onboard.',
        'If your medication requires refrigeration you can carry a small cooler on board. Cabin crew can replenish the cooler with ice as required.'
      ], [PG]),
      card('devices', 'Medical equipment', 'warn', 'Clearance and inspection', 'CPAP, other devices', 'Equipment used onboard needs a Travel Clearance Form and must be inspected before departure.', [
        'Qantas: to use medical support equipment onboard, give Qantas a Travel Clearance Form (PDF) and your equipment must be authorised as safe for use on its aircraft. You must inform Qantas up to 72 hours before your flight.',
        'Qantas: equipment to be used onboard must be made available for inspection a few hours before departure. Your device can be an extra standard piece of carry-on baggage without charge. Any equipment used on domestic services must be battery operated.',
        'Qantas: CPAP and PAP machines do not need approval to travel or be used on board, but Qantas recommends a letter from a medical professional. In-seat power is not available in all cabins or on all aircraft and cannot be guaranteed: bring enough batteries for the whole journey.',
        'Qantas: lithium batteries over 160 Wh are forbidden on any Qantas aircraft.'
      ], [PG]),
      card('abroad', 'Flying to or from Australia', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ['Qantas: contact the embassy of the country you are visiting to check that your medication is legal there.', 'Qantas: a visitor to Australia may generally bring up to 3 months\' supply of prescribed medication without an import approval or permit. Some medications need permits or an import licence, and the Therapeutic Goods Administration (TGA) issues approvals for those or for more than 3 months\' supply.', 'Qantas: it is illegal to take medication subsidised by the Pharmaceutical Benefits Scheme out of Australia for reasons other than personal use.'].concat(ABROAD_LINES), [PG])
    ],
    faq: [
      ['Can I bring medication on a Qantas flight?', 'Yes. Qantas says to carry all medication in your carry-on baggage, in its original labelled packaging, and to bring only the amount you need for your trip.'],
      ['Can I bring needles and syringes on Qantas?', 'Yes, if you can show a medical need. Qantas says hypodermic needles must be declared at the screening point and you must carry documentation and identification confirming the needles are for a medical condition. Supplies beyond your inflight needs should go in checked baggage.'],
      ['Does Qantas refrigerate insulin?', 'No. Qantas says it cannot refrigerate insulin or other drugs onboard. Carry a small cooler; cabin crew can replenish it with ice.'],
      ['Can I use a CPAP machine on Qantas?', 'Yes. Qantas says CPAP and PAP machines do not need approval to be used on board, though a letter from a medical professional is recommended. In-seat power is not available on every aircraft, so bring enough batteries.'],
      ['How much medication can I bring into Australia?', 'Qantas says a visitor may generally bring up to 3 months\' supply of prescribed medication without an import approval or permit, but some medications need permits or an import licence from the TGA.']
    ],
    tableTitle: 'Qantas medication rules at a glance',
    tableNote: 'What Qantas\' own pages say.',
    rows: [
      ['Where should medication go?', 'Carry-on, in original labelled packaging'],
      ['Can it be over 100 ml?', NP],
      ['Needles and syringes?', 'Declare them; carry a doctor\'s letter and ID'],
      ['Fridge on board?', 'No. Bring a small cooler; crew add ice'],
      ['Medical equipment?', 'Travel Clearance Form, 72 hours notice; CPAP needs no approval'],
      ['Into Australia?', 'Up to 3 months\' supply without a permit; some medications need one']
    ],
    extra: steps(['Pack all medication in your carry-on, in its original labelled packaging.', 'Carry a doctor\'s letter with your name, date of birth, the medication and quantity, and that it is for personal use.', 'Declare needles at the screening point and carry proof of your medical need.', 'Bring a small cooler if your medication must stay cold; ask the crew for ice.'])
  });
}

// ---------------- SINGAPORE AIRLINES ----------------
// Read 17 October 2026 on singaporeair.com: Health Regulations (medical information).
{
  const PG = ['https://www.singaporeair.com/en_UK/sg/travel-info/special-assistance/medical-information/', 'Singapore Airlines: Health Regulations', 'Syringes, medication, diabetes, equipment'];
  add({
    slug: 'singapore-airlines', name: 'Singapore Airlines',
    h1: 'Singapore Airlines Medication Policy: Medicines, Syringes, Diabetes & Equipment (2026)',
    desc: 'Can you bring medication on Singapore Airlines? Yes, in your hand luggage, with a letter from your physician. Syringes and hypodermic needles need a prescription or physician\'s note. Checked 17 October 2026.',
    answer: 'Yes. Singapore Airlines says to bring enough medication for your trip in your hand luggage (not checked in) with a letter from your physician outlining your condition and medications. To carry syringes or hypodermic needles you need a prescription or note from a registered physician.',
    srcNote: 'From Singapore Airlines\' own page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Hand luggage with letter', 'Keep it with you', 'Bring enough medication for your trip in your hand luggage, not checked in.', [
        'Singapore Airlines: bring sufficient medication for your trip, which you should keep in your hand luggage (not checked in).',
        'Singapore Airlines: also have a letter from your physician outlining your condition and medication(s).',
        'Singapore Airlines: if you have a medical condition, consult your physician on your fitness to travel. Some conditions may need medical clearance before you fly.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Prescription or note needed', 'Syringes and hypodermic needles', 'You need a prescription or a note from a registered physician to carry syringes or hypodermic needles.', [
        'Singapore Airlines: you are required to carry a prescription or note from a registered physician to carry syringes or hypodermic needles on board.',
        'Singapore Airlines: do not dispose of used syringes or needles in the seat pockets or without the protective caps. If you need to use them during the flight, ask the cabin crew for safe disposal.',
        'Singapore Airlines (diabetes): have your insulin shots and meals on time. Diabetics are advised to stay on home time throughout the journey and readjust to local time on arrival.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Not published', 'Medication that must stay cold', 'The page we read does not say whether Singapore Airlines can store medication cold.', [
        'The page we read does not say whether crew can chill or store medication, so plan to carry your own cooling.'
      ], [PG]),
      card('devices', 'Medical equipment', 'warn', 'Approval required', 'Electrical and electronic equipment', 'Electrical and electronic medical equipment needs approval before use on board.', [
        'Singapore Airlines: approval is mandatory for electrical and electronic medical equipment to be used on board, so it does not interfere with the aircraft navigation and communication systems. Crew may ask you to turn it off if it causes interference.',
        'Singapore Airlines: you must operate your own medical equipment without the help of cabin crew.',
        'Singapore Airlines: for a stretcher, supplementary oxygen or when fitness to travel is in doubt you need medical clearance from a doctor. Inform Singapore Airlines at least 5 working days before the flight.'
      ], [PG]),
      card('allergy', 'Allergy medication', 'warn', 'Carry it with your plan', 'Auto-injectors', 'Carry allergy medication and your written emergency plan in your carry-on.', [
        'Singapore Airlines: always carry your allergy medication and written emergency plan in your carry-on baggage, easily accessible during the flight.',
        'Carry a prescription for the auto-injector and an emergency plan signed by your doctor, if requested at airport security.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a Singapore Airlines flight?', 'Yes. Singapore Airlines says to bring sufficient medication for your trip in your hand luggage, not in checked baggage, with a letter from your physician outlining your condition and medication.'],
      ['Do I need a letter for syringes on Singapore Airlines?', 'Yes. Singapore Airlines says you are required to carry a prescription or note from a registered physician to carry syringes or hypodermic needles on board.'],
      ['Can I use my medical device on Singapore Airlines?', 'Electrical and electronic medical equipment needs approval before use on board, and you must operate it yourself. The cabin crew may ask you to turn it off if it interferes with aircraft systems.']
    ],
    tableTitle: 'Singapore Airlines medication rules at a glance',
    tableNote: 'What Singapore Airlines\' own page says.',
    rows: [
      ['Where should medication go?', 'Hand luggage, not checked in'],
      ['Can it be over 100 ml?', NP],
      ['Needles and syringes?', 'Prescription or physician\'s note required'],
      ['Fridge or cooler on board?', NP],
      ['Electrical medical equipment?', 'Approval mandatory']
    ],
    extra: steps(['Keep your medication in your hand luggage, not in checked baggage.', 'Carry a letter from your physician listing your condition and medications, and a prescription or note for syringes.', 'Ask the cabin crew for safe disposal of used needles.', 'Get approval before you use electrical medical equipment on board.'])
  });
}

// ---------------- CATHAY PACIFIC ----------------
// Read 17 October 2026 on cathaypacific.com: Medications and needles (Medical assistance).
{
  const PG = ['https://www.cathaypacific.com/cx/en_AU/prepare-trip/help-for-passengers/medical-assistance/medications-and-needles.html', 'Cathay Pacific: Medications and needles', 'Medication, needles, refrigeration'];
  add({
    slug: 'cathay-pacific', name: 'Cathay Pacific',
    h1: 'Cathay Pacific Medication Policy: Medicines, Needles, Syringes & Cooling (2026)',
    desc: 'Can you bring medication on Cathay Pacific? Yes, medication and needles for your condition are generally permitted onboard. Carry a doctor\'s letter. Cathay cannot refrigerate medication: use a cool bag or flask. Checked 17 October 2026.',
    answer: 'Yes. Cathay Pacific says passengers are generally permitted to carry medications and supplies, including needles, syringes and auto-injectors, for their medical conditions onboard. Carry a doctor\'s letter and label everything. Cathay cannot refrigerate medication: bring a cool bag or vacuum flask.',
    srcNote: 'From Cathay Pacific\'s own page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed with a letter', 'Carry them with you', 'Cathay says passengers are generally permitted to carry medications and supplies onboard.', [
        'Cathay Pacific: generally passengers are permitted to carry medications and associated supplies for the treatment and control of their medical conditions onboard.',
        'Cathay recommends a letter from your doctor confirming your need for the medication, with the medication clearly labelled along with its generic name if possible.',
        'Cathay advice: carry medicines in a correctly labelled pharmacy container and a copy of all prescriptions, with generic names, along with the medication in your hand luggage, especially for controlled substances and injectables. Carry adequate supplies in both carry-on and checked luggage.',
        'Cathay: contact Customer Care or your travel agent at least 48 hours before the flight to tell them about any special medical requirements.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Needles & syringes', 'warn', 'Label them or carry a letter', 'Syringes, injectables, auto-injectors', 'Carry syringes and injectable medication together, labelled with your name, or bring a doctor\'s letter.', [
        'Cathay Pacific: bringing needles on board may be subject to the local country\'s safety and security clearance procedures, beyond the airline\'s control. Check with the security and customs agencies of the countries you pass through.',
        'Cathay recommends carrying syringes and injectable medications together, clearly labelled with your name and the medication, or a medical certificate or supporting letter from your doctor with your name and the medication.',
        'Cathay: used syringes go in the sharps box carried on all its flights; ask the cabin crew.',
        'Cathay: on flights departing Australia, hypodermic needles can be packed in carry-on bags but you must have proof that they are medically necessary.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Cool bag or flask', 'Medication that must stay cold', 'Cathay cannot refrigerate medication for hygiene reasons.', [
        'Cathay Pacific: for hygiene reasons it cannot refrigerate your medication.',
        'Pack medication that needs cooling in a cool bag or vacuum flask with dry ice of less than 2.5 kg (5.5 lbs), packed so the carbon dioxide gas can escape. Tell airport staff at check-in that you are bringing dry ice.',
        'Ice gel packs (each not more than 100 ml, subject to security control of liquids, aerosols and gels) may also be used in flight.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'Controlled medication', 'The legal status of medicines differs by country.', ['Cathay Pacific: the legal status of different types of medicine, over-the-counter and prescription, varies from country to country, and carriage requirements are not consistently enforced.', 'Cathay advises you to review medication regulations with the relevant authorities, especially for controlled drugs.'].concat(ABROAD_LINES), [PG])
    ],
    faq: [
      ['Can I bring medication on a Cathay Pacific flight?', 'Yes. Cathay Pacific says passengers are generally permitted to carry medications and associated supplies, including needles, syringes and auto-injectors, for their medical conditions onboard. A doctor\'s letter and clear labels are recommended.'],
      ['Does Cathay Pacific refrigerate medication?', 'No. Cathay cannot refrigerate medication for hygiene reasons. It suggests a cool bag or vacuum flask with less than 2.5 kg of dry ice (tell airport staff at check-in), or ice gel packs of up to 100 ml each, which are subject to security control.'],
      ['How should I carry syringes on Cathay Pacific?', 'Cathay recommends carrying syringes and injectable medications together, labelled with your name and the medication, or carrying a medical certificate or doctor\'s letter. Used syringes go in the sharps box; ask the cabin crew.']
    ],
    tableTitle: 'Cathay Pacific medication rules at a glance',
    tableNote: 'What Cathay Pacific\'s own page says.',
    rows: [
      ['Can I carry medication?', 'Generally yes, with a doctor\'s letter and labels'],
      ['Can it be over 100 ml?', NP],
      ['Needles and syringes?', 'Carry together and labelled, or a doctor\'s letter'],
      ['Fridge on board?', 'No. Cool bag or flask; dry ice under 2.5 kg'],
      ['Used syringes?', 'Sharps box on every flight']
    ],
    extra: steps(['Carry medication in labelled pharmacy containers, with copies of the prescriptions that give generic names.', 'Carry syringes and injectable medication together, labelled with your name and the medication.', 'Pack cold medication in a cool bag or vacuum flask; tell airport staff if you use dry ice.', 'Check the rules of the countries you fly through, especially for controlled drugs.'])
  });
}

// ---------------- VUELING ----------------
// Read 17 October 2026 on help.vueling.com: Medicine and Medical Equipment; Liquids in Hand Luggage; Diabetes.
{
  const ME = ['https://help.vueling.com/hc/en-gb/articles/19798835871377-Medicine-and-Medical-Equipment', 'Vueling: Medicine and Medical Equipment', 'Cabin bag, certificate'];
  const LQ = ['https://help.vueling.com/hc/en-gb/articles/19798809556113-Liquids-in-Hand-Luggage', 'Vueling: Liquids in Hand Luggage', 'Medication and syringes'];
  const DB = ['https://help.vueling.com/hc/en-gb/articles/24407123976849-Diabetes', 'Vueling: Diabetes', 'Diabetes kit'];
  add({
    slug: 'vueling', name: 'Vueling',
    h1: 'Vueling Medication Policy: Medicines, Syringes, Diabetes Kits & Liquids (2026)',
    desc: 'Can you bring medication on Vueling? Yes, in your cabin bag or hold. Liquid or injectable medication over 100 ml and diabetes kits need a medical certificate shown at the airport. Checked 17 October 2026.',
    answer: 'Yes. Vueling says you can carry medication in your cabin or checked baggage, though it recommends keeping it with you. In the cabin, medication goes in the transparent bag with each container up to 100 ml. If it is over 100 ml or injectable (such as a diabetes kit) you must show a medical certificate at the airport.',
    srcNote: 'From Vueling\'s own help pages, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Cabin or hold', 'Keep it with you', 'Vueling says you can carry medication in your cabin or checked baggage, and recommends keeping it with you.', [
        'Vueling: you can carry your medication in your cabin baggage or checked baggage, although it recommends keeping it with you whenever possible.',
        'Vueling: if you carry it in the cabin it must be kept in a transparent bag and each container must not exceed 100 ml.'
      ], [ME], true),
      card('liquids', 'Liquid medication', 'warn', 'Certificate over 100 ml', 'Over 100 ml (3.4 oz)', 'Liquid medication over 100 ml needs a medical certificate shown at the airport.', [
        'Vueling: if the medication exceeds 100 ml, or is injectable (such as a diabetes kit), you must present a medical certificate at the airport to take it on board.',
        'Vueling: under EU Regulation 185/2010, ordinary liquids go in containers of up to 100 ml in one transparent sealable bag of up to 1 litre. It is also permitted to carry diet products and medication (liquids or semi-solids) to be used on board, and necessary medical instruments such as syringes, with a certificate of authenticity at security when required.'
      ], [ME, LQ]),
      card('needles', 'Insulin & syringes', 'warn', 'Certificate needed', 'Diabetes kit, syringes', 'Syringes and diabetes kits need a medical certificate.', [
        'Vueling: to bring your diabetes kit on board (lancets, glucose meter, ice packs and so on) you must show a medical certificate at the airport on the day of your flight.',
        'Vueling: syringes are allowed as necessary medical instruments; provide a certificate of authenticity at security when required.'
      ], [DB, LQ]),
      card('cold', 'Cold medication', 'warn', 'Ice packs with a certificate', 'Medication that must stay cold', 'Ice packs in a diabetes kit are allowed with a medical certificate.', [
        'Vueling: ice packs belonging to a diabetes kit may be carried on board if you show a medical certificate at the airport on the day of your flight.',
        'Vueling\'s pages we read do not say whether crew can chill or store medication.'
      ], [DB]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [ME])
    ],
    faq: [
      ['Can I bring medication on a Vueling flight?', 'Yes. Vueling says you can carry medication in your cabin or checked baggage, although it recommends keeping it with you. In the cabin it must be in a transparent bag with each container up to 100 ml.'],
      ['Do I need a medical certificate for medication on Vueling?', 'Yes if the medication exceeds 100 ml or is injectable (such as a diabetes kit): Vueling says you must present a medical certificate at the airport.'],
      ['Can I bring a diabetes kit on Vueling?', 'Yes. Vueling says to bring your diabetes kit on board (lancets, glucose meter, ice packs and so on) you must show a medical certificate at the airport on the day of your flight.'],
      ['Can I bring syringes on Vueling?', 'Yes. Vueling permits necessary medical instruments such as syringes, and asks for a certificate of authenticity at security when required.']
    ],
    tableTitle: 'Vueling medication rules at a glance',
    tableNote: 'What Vueling\'s own help pages say.',
    rows: [
      ['Where should medication go?', 'Cabin or hold; Vueling recommends the cabin'],
      ['Can it be over 100 ml?', 'Yes with a medical certificate shown at the airport'],
      ['Needles and syringes?', 'Allowed; certificate at security when required'],
      ['Diabetes kit and ice packs?', 'Medical certificate on the day of the flight'],
      ['Fridge on board?', NP]
    ],
    extra: steps(['Keep medication in a transparent bag, with each container up to 100 ml.', 'Bring a medical certificate for liquid or injectable medication over 100 ml, syringes and diabetes kits.', 'Show the certificate at the airport on the day of your flight.'])
  });
}

// ---------------- FINNAIR ----------------
// Read 17 October 2026 on finnair.com: Can I take my medication along as carry-on baggage?; I have diabetes, can I carry my medication on board?
{
  const CB = ['https://www.finnair.com/en/frequently-asked-questions/special-assistance-and-health/can-i-take-my-medication-along-as-carry-on-baggage--1889994', 'Finnair: Can I take my medication along as carry-on baggage?', 'Packing and prescriptions'];
  const DB = ['https://www.finnair.com/fi-en/frequently-asked-questions/special-assistance-and-health/i-have-diabetes--can-i-carry-my-medication-on-board--4163800', 'Finnair: I have diabetes, can I carry my medication on board?', 'Insulin pens, needles, monitors'];
  add({
    slug: 'finnair', name: 'Finnair',
    h1: 'Finnair Medication Policy: Medicines in Carry-On, Insulin, Needles & Prescriptions (2026)',
    desc: 'Can you bring medication on Finnair? Yes, take what you need in your carry-on, in a separate bag with prescriptions in English. Insulin pens, needles and glucose monitors are allowed in the cabin; Finnair cannot refrigerate medication. Checked 17 October 2026.',
    answer: 'Yes. Finnair recommends you always take the medication you may need during and after your flight in your carry-on, in a separate bag, preferably in the original packaging, with prescriptions in English. You can take insulin pens, needles and glucose monitors into the cabin. Finnair cannot store medication in the aircraft refrigerators.',
    srcNote: 'From Finnair\'s own FAQ pages, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Carry-on, separate bag', 'Keep it with you', 'Finnair recommends carrying all the medication you need during and after the flight in your carry-on.', [
        'Finnair: take all the necessary medication you might need during and after your flight in your carry-on baggage, in a separate bag, preferably in the original packaging.',
        'Finnair: bring prescriptions in English for any prescription medications, especially if you need injectable medication. This makes inspections easier at customs and security checkpoints. Security staff will tell you whether you need to show your medication or prescriptions; policies differ by situation and country.',
        'Finnair: you may also transport medication in checked baggage, but it does not recommend that for medication you might need after your flight, in case your bag is delayed.'
      ], [CB], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The Finnair pages we read give no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [CB]),
      card('needles', 'Insulin & diabetes', 'go', 'Allowed in the cabin', 'Insulin pens, needles, glucose monitors', 'You can take diabetes injection supplies into the cabin.', [
        'Finnair: you can take diabetes injection supplies, such as insulin pens and needles and glucose monitors, into the cabin.',
        'Finnair: bring prescriptions in English, especially for injectable medication, to make inspections easier at customs and security checkpoints.',
        'Finnair: glucose monitors, for example, should not be exposed to X-rays. Check your device\'s instructions and inform security personnel about your devices.'
      ], [DB]),
      card('cold', 'Cold medication', 'warn', 'No fridge on board', 'Medication that must stay cold', 'Finnair cannot store medication in the aircraft refrigerators.', [
        'Finnair: it cannot store medication in the aircraft\'s refrigerators.',
        'Finnair: if your medication needs to be kept cool, talk to your pharmacist about different options.'
      ], [DB]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ['Finnair: if you are travelling abroad, check the regulations of your destination country on the import of medication.'].concat(ABROAD_LINES.slice(1)), [CB])
    ],
    faq: [
      ['Can I bring medication on a Finnair flight?', 'Yes. Finnair recommends you always take all the medication you might need during and after your flight in your carry-on, in a separate bag, preferably in the original packaging, with prescriptions in English.'],
      ['Can I bring insulin and needles on Finnair?', 'Yes. Finnair says you can take diabetes injection supplies such as insulin pens, needles and glucose monitors into the cabin. It asks you to bring prescriptions in English and to inform security personnel about your devices.'],
      ['Does Finnair keep medication in a fridge?', 'No. Finnair says it cannot store medication in the aircraft\'s refrigerators. Talk to your pharmacist about options for keeping medication cool.'],
      ['Can I put medication in checked baggage on Finnair?', 'You may, but Finnair does not recommend it for medication you might need after the flight, because a delayed bag would leave you without it.']
    ],
    tableTitle: 'Finnair medication rules at a glance',
    tableNote: 'What Finnair\'s own FAQ pages say.',
    rows: [
      ['Where should medication go?', 'Carry-on, in a separate bag, original packaging'],
      ['Prescriptions?', 'In English, especially for injectables'],
      ['Can it be over 100 ml?', NP],
      ['Insulin pens, needles, monitors?', 'Allowed in the cabin'],
      ['Fridge on board?', 'No']
    ],
    extra: steps(['Put the medication you need in a separate bag in your carry-on, in its original packaging.', 'Bring prescriptions in English, especially for injectable medication.', 'Tell security staff about glucose monitors and other devices; do not expose monitors to X-rays.', 'Ask your pharmacist how to keep cold medication cool.'])
  });
}

// ---------------- IBERIA ----------------
// Read 17 October 2026 on iberia.com (US site): Health and special requirements (Bringing medication; Hypodermic needles and EpiPens).
{
  const PG = ['https://www.iberia.com/us/fly-with-iberia/special-needs/', 'Iberia: Health and special requirements', 'Bringing medication, needles'];
  add({
    slug: 'iberia', name: 'Iberia',
    h1: 'Iberia Medication Policy: Medicines, Syringes, Needles & Liquids over 100 ml (2026)',
    desc: 'Can you bring medication on Iberia? Yes, in your hand luggage. Injectable treatment or liquid medication over 100 ml needs a medical certificate. Hypodermic needles and EpiPens are allowed. Iberia cannot refrigerate medication. Checked 17 October 2026.',
    answer: 'Yes. Iberia recommends carrying liquid medicines and solid doses in your hand luggage. If you need injections or liquid medication over 100 ml you need a medical certificate for the syringes, needles and medication. Hypodermic needles and EpiPens are allowed. Iberia cannot refrigerate medication.',
    srcNote: 'From Iberia\'s own page (US site), last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Hand luggage', 'Keep it with you', 'Iberia recommends carrying both liquid medicines and solid doses in your hand luggage.', [
        'Iberia: carry both liquid medicines and solid doses in your hand luggage.',
        'Iberia: if you have a chronic illness, bring more than you need to cover your stay. Bring your doctor\'s prescription, which should always give the generic name of the drug.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Certificate over 100 ml', 'Over 100 ml (3.4 oz)', 'Liquid medication over the 100 ml limit needs a medical certificate.', [
        'Iberia: if you need liquid medication exceeding the permitted 100 ml, or injectable treatment, you will need a medical certificate to take the syringes, needles and necessary medication on board.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Prescription or report', 'Hypodermic needles and EpiPens', 'You can take hypodermic needles and EpiPens on board.', [
        'Iberia: you can take hypodermic needles and EpiPen auto-injectors on board. It recommends carrying them in your hand luggage, but you can check them in.',
        'Iberia: remember to bring your prescription or medical report.',
        'Iberia: if you need injectable treatment (diabetes, for example) you need a medical certificate for the syringes, needles and medication.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'No fridge on board', 'Medication that must stay cold', 'Iberia cannot refrigerate medication on board.', [
        'Iberia: it will not be able to refrigerate on board any medicines that require cold storage. It recommends discussing alternatives with your doctor.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ['Iberia: a doctor\'s prescription is also useful in case you need to buy medication at the destination, especially if you travel abroad.'].concat(ABROAD_LINES), [PG])
    ],
    faq: [
      ['Can I bring medication on an Iberia flight?', 'Yes. Iberia recommends carrying both liquid medicines and solid doses in your hand luggage, with your doctor\'s prescription showing the generic name of the drug.'],
      ['Do I need a medical certificate for syringes on Iberia?', 'Yes if you need injectable treatment (such as diabetes) or liquid medication over 100 ml: Iberia says you need a medical certificate to take the syringes, needles and necessary medication on board.'],
      ['Can I bring an EpiPen on Iberia?', 'Yes. Iberia says you can take hypodermic needles and EpiPen auto-injectors on board. It recommends hand luggage, and asks you to bring your prescription or medical report.'],
      ['Does Iberia refrigerate medication?', 'No. Iberia says it cannot refrigerate medicines that need cold storage on board and recommends discussing alternatives with your doctor.']
    ],
    tableTitle: 'Iberia medication rules at a glance',
    tableNote: 'What Iberia\'s own page says.',
    rows: [
      ['Where should medication go?', 'Hand luggage'],
      ['Can it be over 100 ml?', 'Yes with a medical certificate'],
      ['Needles and syringes?', 'Allowed; medical certificate, prescription or report'],
      ['EpiPens?', 'Allowed in hand luggage or checked'],
      ['Fridge on board?', 'No']
    ],
    extra: steps(['Carry liquid medicines and solid doses in your hand luggage.', 'Bring a medical certificate for injectable treatment or liquid medication over 100 ml.', 'Bring your prescription or medical report, with the generic drug name.', 'Discuss cold storage alternatives with your doctor.'])
  });
}

// ---------------- SAS ----------------
// Read 17 October 2026 on flysas.com (US site): Health & Medical Conditions (FAQ).
{
  const PG = ['https://www.flysas.com/us-en/travel-info/assistance/health-medical', 'SAS: Health & Medical Conditions', 'Medication, equipment, fridge'];
  add({
    slug: 'sas', name: 'SAS',
    h1: 'SAS Medication Policy: Medication, Medical Equipment & Cold Storage (2026)',
    desc: 'Can you bring medication on SAS? Yes. SAS cannot store personal medication on board, so bring a cooler. CPAP and dialysis machines travel free. Allergy medication belongs on board with you. Checked 17 October 2026.',
    answer: 'Yes. SAS says to consult your doctor before booking if you take medication, and to bring allergy medication on board with you. SAS cannot store personal medication on board: bring a cooler. CPAP and dialysis machines are carried free of charge.',
    srcNote: 'From SAS\' own page (US site), last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Consult your doctor', 'Keep it with you', 'SAS advises talking to your doctor before booking if you take medication.', [
        'SAS: if you have a medical condition, physical impairment or take medication, consult your doctor before booking. For some conditions you must notify SAS and get medical approval.',
        'SAS: you may need to complete a medical information form (MEDIF), for example if you need medical oxygen or other medical equipment on board, are travelling for medical treatment, have an unstable condition or were recently ill, injured or operated on. Upload it for approval before you leave; approval can take up to 7 days.',
        'SAS: its pages we read give no separate rule for where to pack medication.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The SAS page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Not published', 'Needles, syringes, injections', 'The SAS page we read gives no rule for syringes or needles.', [
        'The page we read does not cover needles or syringes. Security rules depend on the airports you fly from and to.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Bring a cooler', 'Medication that must stay cold', 'SAS cannot store personal medication on board.', [
        'SAS: it cannot store personal medication on board. It suggests you keep your medication in a cooler that you bring with you.'
      ], [PG]),
      card('devices', 'Medical equipment', 'go', 'CPAP and dialysis free', 'CPAP, dialysis machine', 'SAS carries CPAP and dialysis machines free of charge.', [
        'SAS: you can bring medical equipment like a CPAP or dialysis machine free of charge on all SAS flights. Contact SAS if you have questions.'
      ], [PG]),
      card('allergy', 'Allergy medication', 'warn', 'Bring it on board', 'Severe allergies', 'Bring your allergy medication on board with you.', [
        'SAS: if you have a severe peanut allergy, tell the cabin crew when you board. Bring any allergy medications on board with you.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I store medication in the fridge on SAS?', 'No. SAS says it cannot store personal medication on board and suggests you keep your medication in a cooler that you bring with you.'],
      ['Can I bring a CPAP or dialysis machine on SAS?', 'Yes. SAS says you can bring medical equipment like a CPAP or dialysis machine free of charge on all SAS flights.'],
      ['Do I need medical approval to fly with SAS?', 'For some conditions. SAS says you may need to complete a MEDIF form if you need medical oxygen or other medical equipment on board, travel for medical treatment, have an unstable condition or were recently ill, injured or operated on. Approval can take up to 7 days.']
    ],
    tableTitle: 'SAS medication rules at a glance',
    tableNote: 'What SAS\' own page says. Where SAS is silent we say so.',
    rows: [
      ['Where should medication go?', NP],
      ['Can it be over 100 ml?', NP],
      ['Needles and syringes?', NP],
      ['Fridge on board?', 'No. Bring your own cooler'],
      ['CPAP or dialysis machine?', 'Carried free of charge'],
      ['Medical approval?', 'MEDIF form for some conditions, up to 7 days']
    ],
    extra: steps(['Consult your doctor before booking if you take medication.', 'Complete and upload a MEDIF form if your situation needs one, well before you leave.', 'Bring a cooler for medication that must stay cold.', 'Bring your allergy medication on board with you.'])
  });
}

// ---------------- ETIHAD ----------------
// Read 17 October 2026 on etihad.com: How to request special assistance on your flight (Medication, Diabetes, Allergies, Medical equipment).
{
  const PG = ['https://www.etihad.com/en-us/help/faq/special-assistance', 'Etihad: How to request special assistance', 'Medication, diabetes, allergies, equipment'];
  add({
    slug: 'etihad-airways', name: 'Etihad Airways',
    h1: 'Etihad Medication Policy: Medicines, Insulin, Needles & Medical Devices (2026)',
    desc: 'Can you bring medication on Etihad? Yes, in your cabin baggage with a prescription or doctor\'s letter. Etihad cannot refrigerate medication. Dispose of needles through the cabin crew. Checked 17 October 2026.',
    answer: 'Yes. Etihad says to always carry medication, including insulin, in your cabin baggage with a prescription or a letter from your doctor. Medication cannot be refrigerated onboard, and needles and syringes must be disposed of by telling a cabin crew member.',
    srcNote: 'From Etihad\'s own page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Cabin bag with prescription', 'Keep it with you', 'Etihad says to always carry medication in your cabin baggage with a prescription or letter from your doctor.', [
        'Etihad: always carry medication in your cabin baggage with a prescription or letter from your doctor.',
        'Etihad: regulations vary depending on the country you visit, so always check what medication you can or cannot take on your trip.',
        'Etihad (asthma): always carry your medication in your cabin baggage.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The Etihad page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Prescription or letter', 'Needles, syringes, insulin', 'Carry insulin in your cabin baggage with a prescription or letter, and dispose of needles through the crew.', [
        'Etihad (diabetes): always carry medication, including insulin, appropriately packaged in your cabin baggage with a prescription or letter from your doctor.',
        'Etihad: dispose of needles and syringes responsibly by telling a member of the cabin crew.',
        'Etihad: you do not need medical clearance to fly with diabetes. If you need a specific meal or treatment during the flight, tell Etihad at least 24 hours before. You may need clearance if your condition is unstable or you were recently admitted to hospital.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'No fridge on board', 'Medication that must stay cold', 'Etihad says medication cannot be refrigerated onboard.', [
        'Etihad: medication cannot be refrigerated onboard.'
      ], [PG]),
      card('devices', 'Medical devices', 'warn', 'FAA label and batteries', 'CPAP, other devices', 'Medical devices used on board must be tested to US FAA requirements and run on battery.', [
        'Etihad: medical devices intended for use on board must be labelled by the manufacturer to show they meet US Federal Aviation Administration / Department of Transportation requirements for medical portable electronic devices, or you provide a manufacturer\'s compliance letter or certificate.',
        'Etihad: all medical devices must be dry-cell battery operated with a battery supply for 1.5 times the flight duration.'
      ], [PG]),
      card('allergy', 'Allergy medication', 'warn', 'Letter not older than 3 months', 'Auto-injectors (EpiPen)', 'If you are at risk of anaphylaxis, carry an auto-injector and a doctor\'s letter.', [
        'Etihad: carry an auto-injector device (for example an EpiPen) or a syringe in your cabin baggage and make sure you or an escort are willing and capable of using it. Carry enough medication for the flight.',
        'Etihad: present a medical certificate or doctor\'s letter confirming your need for the auto-injector, not older than three months from the date of travel.',
        'Etihad: ask your doctor for preventative treatment and complete a MEDIF for clearance to fly.'
      ], [PG]),
      card('uae', 'Flying to the UAE', 'warn', 'Check UAE rules', 'Abu Dhabi and the UAE', 'The UAE has its own rules for controlled medication.', [
        'Etihad\'s page does not state the UAE rules itself. See our <a href="/medication/adderall/united-arab-emirates/">UAE medication rules</a> from the official UAE sources.'
      ].concat(ABROAD_LINES.slice(1)), [PG])
    ],
    faq: [
      ['Can I bring medication on an Etihad flight?', 'Yes. Etihad says to always carry medication in your cabin baggage with a prescription or letter from your doctor, and to check which medication you can take to the country you visit.'],
      ['Does Etihad refrigerate medication?', 'No. Etihad says medication cannot be refrigerated onboard.'],
      ['Can I bring insulin on Etihad?', 'Yes. Etihad says to carry insulin appropriately packaged in your cabin baggage with a prescription or doctor\'s letter, and to dispose of needles and syringes by telling a cabin crew member. You do not need medical clearance with diabetes unless your condition is unstable.'],
      ['Can I bring an EpiPen on Etihad?', 'Yes. Etihad says to carry the auto-injector in your cabin baggage, with a medical certificate or doctor\'s letter not older than three months, and to complete a MEDIF for clearance.']
    ],
    tableTitle: 'Etihad medication rules at a glance',
    tableNote: 'What Etihad\'s own page says.',
    rows: [
      ['Where should medication go?', 'Cabin baggage, with prescription or doctor\'s letter'],
      ['Can it be over 100 ml?', NP],
      ['Insulin and needles?', 'Cabin baggage with letter; dispose via cabin crew'],
      ['Fridge on board?', 'No'],
      ['Medical devices?', 'FAA label or letter; battery for 1.5 times the flight'],
      ['Auto-injector?', 'Cabin baggage, doctor\'s letter under 3 months old']
    ],
    extra: steps(['Carry all medication, including insulin, in your cabin baggage with a prescription or doctor\'s letter.', 'Tell the cabin crew if you used needles so you can dispose of them safely.', 'Bring your auto-injector with a doctor\'s letter not older than three months.', 'Check the rules of the country you fly to.'])
  });
}

// ---------------- AIR INDIA ----------------
// Read 17 October 2026 on airindia.com: Restricted Baggage & Prohibited Items Guidelines (medical needs, diabetes-related supplies).
{
  const PG = ['https://www.airindia.com/in/en/travel-information/baggage-guidelines/restricted-baggage.html', 'Air India: Restricted baggage and prohibited items', 'Medical needs, diabetes supplies'];
  add({
    slug: 'air-india', name: 'Air India',
    h1: 'Air India Medication Policy: Medicines, Insulin, Syringes & Liquids over 100 ml (2026)',
    desc: 'Can you bring medication on Air India? Yes. Medicines over 100 ml may be accepted if needed for the journey, with proof of authenticity. Insulin, pens, pumps and syringes are allowed after inspection. Checked 17 October 2026.',
    answer: 'Yes. Air India lists diabetes supplies (insulin, pens, infusers, unused syringes with insulin, pumps) as allowed in cabin and checked baggage after inspection. For domestic passengers, medicines over 100 ml may be accepted if essential for the journey, with proof of authenticity and a doctor\'s note for prescription medication.',
    srcNote: 'From Air India\'s own restricted baggage page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed with a note', 'Prescription and over-the-counter', 'Prescription medication needs a matching label and a doctor\'s note on request.', [
        'Air India: the name on the label of prescription medication should match the name on the boarding pass, and the passenger should be able to produce a note from the doctor.',
        'Air India: for over-the-counter medication, the quantity should be just enough for the duration of the journey.',
        'Air India: nitroglycerine pills or spray for medical use are allowed in cabin and checked baggage if properly marked with a professionally printed label identifying the medication or the manufacturer\'s name or a pharmaceutical label.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Allowed if essential', 'Over 100 ml (3.4 oz)', 'For domestic passengers, medicines over 100 ml may be acceptable if essential for the journey.', [
        'Air India (exceptions for domestic passengers): medicines with a total volume over 100 ml, prescribed or over the counter, may be acceptable if it is essential to carry them during the journey and the amount is no more than needed for the journey.',
        'Air India: proof of authenticity must be shown for the liquids. Substances used for medical purposes that are not medicines, such as ice, are permitted.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'go', 'Allowed after inspection', 'Insulin, pens, syringes, pumps', 'Diabetes supplies are allowed in cabin and checked baggage once inspected.', [
        'Air India: diabetes-related supplies and equipment are allowed in cabin and checked baggage. This includes insulin and insulin-loaded dispensing products, vials or boxes of individual vials, jet injectors, pens, infusers, preloaded syringes, an unlimited number of unused syringes (when accompanied by insulin), lancets, blood glucose meters and test strips, insulin pumps and pump supplies.',
        'Air India: these can be carried only after inspection to make sure prohibited items are not concealed.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Ice allowed', 'Medication that must stay cold', 'Ice for medical purposes is permitted for domestic passengers; Air India\'s page gives no fridge rule.', [
        'Air India: substances used for medical purposes that are not medicines, such as ice, are permitted (exceptions for domestic passengers).',
        'The page we read does not say whether crew can chill or store medication, so plan to carry your own cooling.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on an Air India flight?', 'Yes. Air India says the name on the label of prescription medication should match the boarding pass and you should be able to produce a doctor\'s note. For over-the-counter medication, bring just enough for the journey.'],
      ['Can I carry more than 100 ml of liquid medicine on Air India?', 'For domestic passengers, Air India says medicines over 100 ml, prescribed or over the counter, may be acceptable if essential for the journey and no more than needed, with proof of authenticity.'],
      ['Can I bring insulin and syringes on Air India?', 'Yes. Air India lists insulin, pens, infusers, preloaded syringes, an unlimited number of unused syringes when accompanied by insulin, lancets, glucose meters, insulin pumps and supplies as allowed in cabin and checked baggage, after inspection.']
    ],
    tableTitle: 'Air India medication rules at a glance',
    tableNote: 'What Air India\'s own page says.',
    rows: [
      ['Prescription medication?', 'Label name matches boarding pass; doctor\'s note on request'],
      ['Can it be over 100 ml?', 'Domestic: yes if essential, with proof of authenticity'],
      ['Insulin, pens, syringes, pumps?', 'Allowed in cabin and checked, after inspection'],
      ['Ice for medical use?', 'Permitted (domestic exceptions)'],
      ['Fridge on board?', NP]
    ],
    extra: steps(['Keep medication in its labelled packaging, with the name matching your boarding pass.', 'Carry a doctor\'s note for prescription medication.', 'Pack syringes together with the insulin they are for.', 'Bring only as much over-the-counter medication as the journey needs.'])
  });
}

// ---------------- LATAM ----------------
// Read 17 October 2026 on latamairlines.com: Can I take medication on the trip? (help center).
{
  const PG = ['https://www.latamairlines.com/ca/en/help-center/faq/baggage/restricted-articles/medications', 'LATAM: Can I take medication on the trip?', 'Medication, prescription, cold chain'];
  add({
    slug: 'latam', name: 'LATAM',
    h1: 'LATAM Medication Policy: Can You Bring Medication on a LATAM Flight? (2026)',
    desc: 'Can you bring medication on LATAM? Yes, but you may be asked for a prescription that certifies its use during the trip. LATAM has no cold chain service for medication: use your own container. Checked 17 October 2026.',
    answer: 'Yes. LATAM says you can bring medication, but you may be asked to provide a medical prescription certifying its use during your trip, considering flight times and connections. LATAM does not offer cold chain service: carry cold medication in your own suitable container.',
    srcNote: 'From LATAM\'s own help center, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed, keep the prescription', 'Carry them with you', 'LATAM says you can bring your medication, but you may be asked for a prescription.', [
        'LATAM: you can bring your medication on the trip, but you may be asked to provide a medical prescription that certifies its use during your trip, considering flight times and connections.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The LATAM page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Not published', 'Needles, syringes, injections', 'The LATAM page we read gives no rule for syringes or needles.', [
        'Bring the prescription that certifies your treatment. Security rules for needles depend on the airports you fly from and to.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'No cold chain service', 'Medication that must stay cold', 'LATAM has no cold chain service: carry cold medication in your own container.', [
        'LATAM: it does not offer cold chain service for the transportation of medications.',
        'LATAM: to transport such medication you must carry it in an appropriate container that stays under your care during the entire trip and complies with the carry-on baggage and dangerous goods standards.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a LATAM flight?', 'Yes. LATAM says you can bring medication, but you may be asked to provide a medical prescription certifying its use during your trip, considering flight times and connections.'],
      ['Does LATAM have a fridge or cold chain for medication?', 'No. LATAM says it does not offer cold chain service for the transport of medications. You must carry it in an appropriate container that stays under your care for the whole trip and meets carry-on and dangerous goods standards.']
    ],
    tableTitle: 'LATAM medication rules at a glance',
    tableNote: 'What LATAM\'s own help center says. Where LATAM is silent we say so.',
    rows: [
      ['Can I bring medication?', 'Yes. You may be asked for a prescription'],
      ['Can it be over 100 ml?', NP],
      ['Needles and syringes?', NP],
      ['Cold medication?', 'No cold chain service. Use your own container, kept with you']
    ],
    extra: steps(['Carry your medication with the prescription that certifies its use for the length of your trip and connections.', 'Keep cold medication in your own suitable container, under your care for the whole trip.', 'Check the rules of the countries you fly to and through.'])
  });
}

// ---------------- AIR NEW ZEALAND ----------------
// Read 17 October 2026 on airnewzealand.com: Flying with medical conditions (Medications section).
{
  const PG = ['https://www.airnewzealand.com/special-assistance-flying-with-medical-conditions', 'Air New Zealand: Flying with medical conditions', 'Medications, syringes, equipment'];
  add({
    slug: 'air-new-zealand', name: 'Air New Zealand',
    h1: 'Air New Zealand Medication Policy: Medicines, Syringes, Liquids & Cooling (2026)',
    desc: 'Can you bring medication on Air New Zealand? Yes, in your carry-on, with a pharmacy-printed label. A doctor\'s letter is recommended for syringes and liquids over 100 ml. Crew cannot store medication in fridges. Checked 17 October 2026.',
    answer: 'Yes. Air New Zealand says to pack medication you might need in your carry-on, with a pharmacy-printed label. It recommends a doctor\'s letter for syringes and for liquids in containers over 100 mL. Crew cannot store medication in refrigerators: bring a container and coolant.',
    srcNote: 'From Air New Zealand\'s own page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Carry-on, labelled', 'Keep it with you', 'Air New Zealand says to pack medication you might need in your carry-on, with a pharmacy-printed label.', [
        'Air New Zealand: pack medications you might need at the airport, on the plane or on arrival at your destination in your carry-on baggage.',
        'Air New Zealand: civil aviation rules now require medicines to have a pharmacy-printed label.',
        'Air New Zealand: if you change time zones, ask your doctor how to adjust your doses, particularly for diabetes, epilepsy and other serious conditions.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Doctor\'s letter over 100 ml', 'Over 100 ml (3.4 oz)', 'Air New Zealand recommends a doctor\'s letter for liquids in containers over 100 ml.', [
        'Air New Zealand: for liquids in containers over 100 mL, it recommends you also carry a letter from your doctor.'
      ], [PG]),
      card('needles', 'Syringes & sharps', 'warn', 'Doctor\'s letter recommended', 'Syringes and needles', 'Carry a doctor\'s letter saying you need your syringes.', [
        'Air New Zealand: if you carry syringes for medical use, it recommends you also carry a letter from your doctor saying you need them.',
        'Air New Zealand: all its aircraft have sharps containers for safe disposal of needles, syringes and vials. Ask the cabin crew.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Bring a container and coolant', 'Medication that must stay cold', 'Air New Zealand crew cannot store medication in refrigerators.', [
        'Air New Zealand: cabin crew are not able to take care of medication or store it in refrigerators. If your medication has to be kept chilled, arrange a suitable container and coolant, and talk to your doctor or pharmacist.',
        'Air New Zealand: if you use dry ice, contact the baggage team.'
      ], [PG]),
      card('devices', 'Medical equipment', 'warn', 'Clearance (MEDA) needed', 'CPAP, oxygen, nebuliser, syringe pump', 'Special medical equipment needs medical clearance before you fly.', [
        'Air New Zealand: clearance is required if you travel with special medical equipment, including CPAP/VPAP, medical oxygen (concentrator or bottles), nebulisers, syringe pumps, stretchers and ventilators.',
        'Air New Zealand: use the Medical Fitness for Air Travel form (MEDA). Where possible, submit it 3 to 14 days before travel; if it is submitted within three days of travel, approval before departure cannot be guaranteed.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on an Air New Zealand flight?', 'Yes. Air New Zealand says to pack the medication you might need at the airport, on the plane or on arrival in your carry-on baggage, with a pharmacy-printed label.'],
      ['Do I need a doctor\'s letter for syringes on Air New Zealand?', 'Air New Zealand recommends it. If you carry syringes for medical use, it suggests a letter from your doctor saying you need them. All its aircraft carry sharps containers.'],
      ['Does Air New Zealand store medication in a fridge?', 'No. Air New Zealand says cabin crew cannot take care of medication or store it in refrigerators. Arrange a suitable container and coolant.'],
      ['Can I bring a CPAP machine on Air New Zealand?', 'CPAP/VPAP and other special medical equipment need medical clearance with the MEDA form, ideally submitted 3 to 14 days before travel.']
    ],
    tableTitle: 'Air New Zealand medication rules at a glance',
    tableNote: 'What Air New Zealand\'s own page says.',
    rows: [
      ['Where should medication go?', 'Carry-on, with a pharmacy-printed label'],
      ['Can it be over 100 ml?', 'Doctor\'s letter recommended for containers over 100 mL'],
      ['Needles and syringes?', 'Doctor\'s letter recommended; sharps containers on every aircraft'],
      ['Fridge on board?', 'No. Bring a container and coolant'],
      ['Medical equipment?', 'Medical clearance (MEDA) 3 to 14 days ahead']
    ],
    extra: steps(['Pack your medication in your carry-on, with the pharmacy-printed label.', 'Carry a doctor\'s letter for syringes and for liquids over 100 mL.', 'Bring a suitable container and coolant for cold medication.', 'Submit a MEDA form 3 to 14 days before travel if you bring special medical equipment.'])
  });
}

// ---------------- AER LINGUS ----------------
// Read 17 October 2026 on aerlingus.com: Medical Conditions (Carriage of Medication table, Allergies and EpiPens, Carriage of Medical Devices).
{
  const PG = ['https://www.aerlingus.com/support/special-assistance/medical-conditions/', 'Aer Lingus: Medical Conditions', 'Carriage of medication'];
  add({
    slug: 'aer-lingus', name: 'Aer Lingus',
    h1: 'Aer Lingus Medication Policy: Insulin, Needles, Liquids, Tablets & EpiPens (2026)',
    desc: 'Can you bring medication on Aer Lingus? Yes: tablets, liquids, insulin, EpiPens and hypodermic needles are permitted. Carry insulin in the cabin so it does not freeze. Liquid medicine can exceed 100 ml. Checked 17 October 2026.',
    answer: 'Yes. Aer Lingus lists tablets, capsules, liquid medication, insulin, inhalers, EpiPens and hypodermic needles as permitted in carry-on, for use on board and in checked baggage. Carry insulin in the cabin because it may freeze in the hold. Liquid medicine can exceed the usual limit and need not go in the clear bag.',
    srcNote: 'From Aer Lingus\' own page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Allowed', 'Tablets and capsules', 'Tablets and capsules are permitted in carry-on or checked baggage.', [
        'Aer Lingus: you can take tablets and capsules in your carry-on baggage (with a doctor\'s note or prescription) or in your checked baggage.',
        'Aer Lingus: asthma inhalers are permitted in carry-on or checked baggage.',
        'Aer Lingus: it allows the carriage and use of prescribed medication onboard.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'go', 'Allowed over 100 ml', 'Over 100 ml (3.4 oz)', 'Liquid medicine needed during the flight can exceed the usual limit and stays out of the clear bag.', [
        'Aer Lingus: if needed during your flight, place liquid medication in your carry-on baggage. You can carry as much as you need, even if it exceeds the usual limit on liquids.',
        'Aer Lingus: liquid medicine does not need to fit in the transparent bag for carrying liquids, but have it ready for inspection by airport security.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Doctor\'s note or prescription', 'Insulin, EpiPens, hypodermic needles', 'Insulin, EpiPens and hypodermic needles are permitted; carry insulin in the cabin.', [
        'Aer Lingus: insulin is permitted in carry-on, for use on board and in checked baggage. Carry it in your carry-on because it may freeze in the hold. It should be in its original packaging, easily identifiable and accessible during the flight.',
        'Aer Lingus: EpiPens and hypodermic needles are permitted in carry-on baggage (with a doctor\'s note or prescription) or in checked baggage.',
        'Aer Lingus: your epinephrine/adrenaline auto-injector should be in your carry-on, accompanied by a letter from your doctor or a copy of your prescription to show airport security.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Not published', 'Medication that must stay cold', 'The Aer Lingus page we read does not say whether it can store medication cold.', [
        'The page we read does not say whether crew can chill or store medication, so plan to carry your own cooling.'
      ], [PG]),
      card('devices', 'Medical devices', 'go', 'Most are permitted', 'Insulin pumps, CGMs, CPAP, nebulisers', 'Insulin pumps and glucose monitors are permitted in cabin, in checked baggage and for use on board.', [
        'Aer Lingus: insulin pumps or continuous glucose monitors are permitted in carry-on, checked baggage and for use on board, provided they can be placed in Flight Mode.',
        'Aer Lingus: nebulisers, infusion pumps, TENS machines and ventilators are permitted in carry-on, checked baggage and for use on board. Some devices, such as humidifiers, oximeters, portable dialysis machines and suction units, may be carried but not used in the cabin.',
        'Aer Lingus: portable oxygen concentrators must be FAA-approved and show an approval label. Due to safety requirements some devices may not be used on Aer Lingus Regional flights.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'Controlled substances', 'In some countries certain medications are controlled substances, even with a prescription.', [
        'Aer Lingus: in some countries certain medications may be classified as controlled substances that would not be permitted, even with a prescription. Check that it is legal to take your medication to the country you fly to or connect through.'
      ].concat(ABROAD_LINES.slice(1)), [PG])
    ],
    faq: [
      ['Can I bring medication on an Aer Lingus flight?', 'Yes. Aer Lingus allows the carriage and use of prescribed medication onboard: tablets and capsules, liquid medication, insulin, inhalers, EpiPens and hypodermic needles.'],
      ['Can I bring liquid medicine over 100 ml on Aer Lingus?', 'Yes. Aer Lingus says to place liquid medication needed during the flight in your carry-on and you can carry as much as you need, even above the usual limit. It does not need to fit in the transparent bag, but have it ready for inspection by security.'],
      ['Where should I keep insulin on Aer Lingus?', 'In your carry-on, because it may freeze in the hold. Aer Lingus says insulin should be in its original packaging, easily identifiable and accessible during the flight.'],
      ['Can I bring an insulin pump or glucose monitor on Aer Lingus?', 'Yes. Aer Lingus says insulin pumps and continuous glucose monitors are permitted in carry-on, checked baggage and for use on board, provided they can be placed in Flight Mode.']
    ],
    tableTitle: 'Aer Lingus medication rules at a glance',
    tableNote: 'What Aer Lingus\' own page says.',
    rows: [
      ['Tablets and capsules?', 'Carry-on (doctor\'s note or prescription) or checked'],
      ['Liquid medication?', 'Carry-on; as much as you need, even over the usual limit'],
      ['Insulin?', 'Carry-on, original packaging; it may freeze in the hold'],
      ['EpiPens and hypodermic needles?', 'Carry-on with doctor\'s note or prescription, or checked'],
      ['Insulin pumps and CGMs?', 'Permitted, in Flight Mode'],
      ['Fridge on board?', NP]
    ],
    extra: steps(['Keep tablets, liquids and insulin in your carry-on, in the original packaging.', 'Carry a doctor\'s note or prescription for EpiPens and hypodermic needles.', 'Have liquid medicine ready for inspection; it does not go in the clear bag.', 'Check that your medication is legal in the country you fly to or connect through.'])
  });
}

// ---------------- TAP AIR PORTUGAL ----------------
// Read 17 October 2026 on flytap.com: Health problems and assistance (Medication and medical devices).
{
  const PG = ['https://www.flytap.com/en-us/information/special-needs/health-problems', 'TAP: Health problems and assistance', 'Medication and medical devices'];
  add({
    slug: 'tap-air-portugal', name: 'TAP Air Portugal',
    h1: 'TAP Air Portugal Medication Policy: Medicines, Insulin, Prescriptions & Devices (2026)',
    desc: 'Can you bring medication on TAP Air Portugal? Yes: carry your usual medication in hand baggage, enough for longer than the trip, with the written prescription for injectables such as insulin. Checked 17 October 2026.',
    answer: 'Yes. TAP says to carry your usual prescribed medication in your hand baggage, including emergency medication such as asthma inhalers, enough for longer than the expected trip. For injectable medication such as insulin carry enough medication and accessories plus the written medical prescription.',
    srcNote: 'From TAP\'s own page (US site), last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Hand baggage', 'Enough for longer than the trip', 'TAP says to carry your usual prescribed medication in your hand baggage, enough for longer than the trip.', [
        'TAP: carry any usual medication prescribed by your doctor in your hand baggage, including emergency medication such as asthma inhalers.',
        'TAP: the medication must be enough for a period of time longer than the expected duration of the trip.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The TAP page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Written prescription', 'Injectable medication', 'For injectable medication such as insulin, carry enough medication, accessories and the written prescription.', [
        'TAP: if you use injectable medication, such as insulin, make sure you carry enough medication and accessories for your trip and stay, as well as the corresponding written medical prescription.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Not published', 'Medication that must stay cold', 'The TAP page we read does not say whether it can store medication cold.', [
        'The page we read does not say whether crew can chill or store medication, so plan to carry your own cooling.'
      ], [PG]),
      card('devices', 'Medical devices', 'warn', 'Contact TAP early', 'POC, CPAP, other devices', 'You can carry or use medical devices on TAP flights; contact TAP as soon as possible.', [
        'TAP: if you need to use or carry medical devices, especially fragile ones or those that need batteries or a power connection, such as a portable oxygen concentrator (POC) or a CPAP machine, you can on TAP flights, but contact TAP as soon as possible to find out the conditions.',
        'TAP: for a serious or disabling illness, your doctor must fill in the MEDIF form and you send it to TAP at least 72 hours before the trip.'
      ], [PG]),
      card('allergy', 'Allergy medication', 'warn', 'Carry it with you', 'Allergies', 'If you have allergies, carry the appropriate medication in your hand baggage.', [
        'TAP: if you have allergies, check with your doctor before travelling and carry the appropriate medication in your hand baggage. TAP cannot guarantee the cabin is free of allergens.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a TAP Air Portugal flight?', 'Yes. TAP says to carry your usual prescribed medication in your hand baggage, including emergency medication such as asthma inhalers, in a quantity enough for longer than the expected trip.'],
      ['Can I bring insulin on TAP?', 'Yes. TAP says if you use injectable medication such as insulin, carry enough medication and accessories for your trip and stay, and the corresponding written medical prescription.'],
      ['Can I use a CPAP or oxygen concentrator on TAP?', 'TAP says you can carry or use devices such as a portable oxygen concentrator or CPAP on its flights, but you should contact TAP as soon as possible to find out the conditions.']
    ],
    tableTitle: 'TAP medication rules at a glance',
    tableNote: 'What TAP\'s own page says. Where TAP is silent we say so.',
    rows: [
      ['Where should medication go?', 'Hand baggage'],
      ['How much?', 'Enough for longer than the expected trip'],
      ['Can it be over 100 ml?', NP],
      ['Insulin and injectables?', 'Enough medication and accessories, with the written prescription'],
      ['Fridge on board?', NP],
      ['Medical devices?', 'Allowed; contact TAP early']
    ],
    extra: steps(['Carry your usual medication in your hand baggage, enough for longer than your trip.', 'Carry the written prescription for injectable medication such as insulin.', 'Contact TAP early if you bring a POC, CPAP or other powered device.'])
  });
}

// ---------------- AVIANCA ----------------
// Read 17 October 2026 on ayuda.avianca.com: Can I bring medications on board?; Can I bring liquids in my carry-on baggage?
{
  const MD = ['https://ayuda.avianca.com/hc/en-us/articles/43737509334427-Can-I-bring-medications-on-board', 'Avianca Help Center: Can I bring medications on board?', 'Permitted medications, documents'];
  const LQ = ['https://ayuda.avianca.com/hc/en-us/articles/13083098505627-Can-I-bring-liquids-in-my-carry-on-baggage', 'Avianca Help Center: Can I bring liquids in my carry-on baggage?', 'Liquids rule'];
  add({
    slug: 'avianca', name: 'Avianca',
    h1: 'Avianca Medication Policy: Tablets, Syrups, Insulin, Syringes & Controlled Medication (2026)',
    desc: 'Can you bring medication on Avianca? Yes, in your carry-on. Insulin, syringes, liquids over 100 ml and controlled medication need a prescription or medical certificate. Crew cannot give you medication. Checked 17 October 2026.',
    answer: 'Yes. Avianca says medication goes in your carry-on and must be for personal use. You need a prescription or medical certificate for insulin and other injectables, syringes and needles, liquid medication over 100 ml, controlled medication and medical devices used in flight. Avianca staff cannot help you give medication.',
    srcNote: 'From Avianca\'s own help center, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Carry-on, personal use', 'Tablets, capsules, inhalers', 'Tablets, capsules, syrups and inhalers go in your carry-on, for personal use.', [
        'Avianca: you can bring medication on the plane. Carry it in your carry-on baggage and, if applicable, show your prescription or medical certificate at security.',
        'Avianca lists tablets or capsules, syrups or liquids (which may exceed 100 ml if for medical use) and inhalers or medical aerosols as permitted medications.',
        'Avianca: medications must be for personal use. If they exceed 100 ml or are injectable, extra verification may be required.'
      ], [MD], true),
      card('liquids', 'Liquid medication', 'warn', 'Prescription over 100 ml', 'Over 100 ml (3.4 oz)', 'Liquid medication over 100 ml is allowed for medical use, with a prescription or certificate.', [
        'Avianca: syrups or liquids may exceed 100 ml if for medical use, and liquid medication over 100 ml needs a prescription or medical certificate.',
        'Avianca\'s general liquids rule is 100 ml containers in one transparent bag of up to 1 litre, and its exceptions list covers medical needs. Airport security and customs rules vary by airport, including where you connect.'
      ], [MD, LQ]),
      card('needles', 'Insulin & syringes', 'warn', 'Prescription or certificate', 'Injectables, syringes, needles', 'Insulin, other injectables, syringes and needles need a prescription or medical certificate.', [
        'Avianca: you need a prescription or medical certificate when you carry insulin or other injectable medications, and syringes or needles.',
        'Avianca: its staff are not authorised to help give medication, carry out medical procedures or operate medical equipment during the flight.'
      ], [MD]),
      card('controlled', 'Controlled medication', 'warn', 'Prescription or certificate', 'Controlled and special medication', 'Controlled medication needs a prescription or medical certificate.', [
        'Avianca: you need a prescription or medical certificate when carrying controlled medications and medical devices you will use during the flight.',
        'Avianca points to its page on medical certificates for the full details.'
      ], [MD]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [MD])
    ],
    faq: [
      ['Can I bring medication on an Avianca flight?', 'Yes. Avianca says to carry medication in your carry-on baggage, for personal use, and to show your prescription or medical certificate at security if asked.'],
      ['Do I need a prescription for insulin and syringes on Avianca?', 'Yes. Avianca says you need a prescription or medical certificate when carrying insulin or other injectable medications, and syringes or needles.'],
      ['Can I bring liquid medication over 100 ml on Avianca?', 'Yes, if it is for medical use and you carry a prescription or medical certificate. Avianca lists syrups or liquids as allowed above 100 ml for medical use.'],
      ['Will Avianca crew help me take my medication?', 'No. Avianca says its team is not authorised to assist with giving medication, medical procedures or operating medical equipment during the flight.']
    ],
    tableTitle: 'Avianca medication rules at a glance',
    tableNote: 'What Avianca\'s own help center says.',
    rows: [
      ['Where should medication go?', 'Carry-on, for personal use'],
      ['Can it be over 100 ml?', 'Yes for medical use, with a prescription or certificate'],
      ['Insulin, syringes and needles?', 'Prescription or medical certificate'],
      ['Controlled medication?', 'Prescription or medical certificate'],
      ['Help with medication on board?', 'Crew cannot assist'],
      ['Fridge on board?', NP]
    ],
    extra: steps(['Carry medication in your carry-on and keep it for personal use.', 'Bring a prescription or medical certificate for insulin, syringes, liquids over 100 ml and controlled medication.', 'Check the security rules of every airport on your route, including connections.'])
  });
}

// ---------------- SWISS ----------------
// Read 17 October 2026 on swiss.com: Medication, pacemakers and implants (medical services).
{
  const PG = ['https://www.swiss.com/medicalservices/en/health/medical-equipment-and-care/medication-pacemakers-and-implants', 'SWISS: Medication, pacemakers and implants', 'Carry-on, security, cooling'];
  add({
    slug: 'swiss', name: 'SWISS',
    h1: 'SWISS Medication Policy: Carrying Medicines, Syringes, Insulin & Time Zones (2026)',
    desc: 'Can you bring medication on SWISS? Yes. Carry 1.5 to 2 times what you expect to need in your hand baggage, with an English medical certificate for medication and syringes. SWISS cannot refrigerate medication. Checked 17 October 2026.',
    answer: 'Yes. SWISS advises carrying 1.5 to 2 times the amount of regular medication you expect to need in your carry-on baggage, because flights can be diverted or delayed. For security, bring a medical certificate in English confirming that medication and syringes are for your personal use. SWISS cannot refrigerate medication.',
    srcNote: 'From SWISS\'s own medical services page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Take extra in hand baggage', 'Regular medication', 'SWISS advises taking 1.5 to 2 times the amount you expect to need in your carry-on.', [
        'SWISS: if you take regular medication, take 1.5 to 2 times the amount you expect to need in your carry-on baggage, since flights can be diverted and sometimes suffer substantial delays even once you are seated.',
        'SWISS: if you take medication at regular intervals and fly across time zones, consult your doctor before the flight. For insulin, SWISS has a separate section for diabetics.',
        'SWISS: ask your doctor for a document with key health data and the names of your medication, including the active agents and the doses, in case you lose it, and carry the papers you may need to get treatment or a prescription abroad.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The SWISS page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'English medical certificate', 'Medication and syringes at security', 'SWISS advises an English medical certificate for medication and syringes.', [
        'SWISS: if you have medication or syringes in your carry-on baggage, it is advisable to carry a medical certificate in English confirming that they are medical supplies you need for personal use.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Bring a cool bag or flask', 'Medication that must stay cold', 'SWISS cannot refrigerate medication for you.', [
        'SWISS: it cannot refrigerate medication for you. If your medication must be kept cool, a cool bag or vacuum flask may be appropriate, or discuss the options with your pharmacist.'
      ], [PG]),
      card('devices', 'Pacemakers & implants', 'warn', 'Certificate before security', 'Pacemaker, metal implants', 'A pacemaker or metal implant needs a medical certificate in English before the security check.', [
        'SWISS: if you have a heart pacemaker or a metal implant (an artificial joint, or metal wires or screws for a fracture), produce a medical certificate in English confirming this before the security check.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a SWISS flight?', 'Yes. SWISS advises taking 1.5 to 2 times the amount of regular medication you expect to need in your carry-on baggage.'],
      ['Do I need a medical certificate for syringes on SWISS?', 'SWISS advises it: carry a medical certificate in English confirming that your medication and syringes are medical supplies for your personal use.'],
      ['Does SWISS refrigerate medication?', 'No. SWISS says it cannot refrigerate medication. It suggests a cool bag or vacuum flask, or asking your pharmacist about options.'],
      ['What if I lose my medication on a SWISS trip?', 'SWISS recommends a document from your doctor stating your key health data, the names and active agents of your medication and your doses, plus the papers needed to get treatment or a prescription abroad.']
    ],
    tableTitle: 'SWISS medication rules at a glance',
    tableNote: 'What SWISS\'s own medical services page says.',
    rows: [
      ['How much to carry?', '1.5 to 2 times what you expect to need, in the carry-on'],
      ['Can it be over 100 ml?', NP],
      ['Medication and syringes at security?', 'Medical certificate in English advised'],
      ['Fridge on board?', 'No. Cool bag or vacuum flask'],
      ['Pacemaker or metal implant?', 'Medical certificate in English before security']
    ],
    extra: steps(['Pack 1.5 to 2 times the medication you expect to need in your carry-on.', 'Carry an English medical certificate for medication and syringes.', 'Ask your doctor for a list of your medication, active agents and doses in case you lose it.', 'Use a cool bag or vacuum flask for medication that must stay cold.'])
  });
}

// ---------------- AUSTRIAN ----------------
// Read 17 October 2026 on austrian.com: FAQs Flying and Health (Medical care on board).
{
  const PG = ['https://www.austrian.com/us/en/faq-medizinische-fragen', 'Austrian Airlines: FAQs Flying and Health', 'Medical care on board'];
  add({
    slug: 'austrian', name: 'Austrian Airlines',
    h1: 'Austrian Airlines Medication Policy: Hand Luggage, Syringes, Cooling & Lost Medication (2026)',
    desc: 'Can you bring medication on Austrian Airlines? Yes, spread across your hand luggage, 1.5 to 2 times what you need. Medication cannot be refrigerated on board; a cooling pack or dry ice can be used. Bring a medical certificate for medication and syringes. Checked 17 October 2026.',
    answer: 'Yes. Austrian Airlines recommends spreading your medication across different pieces of hand luggage and taking 1.5 to 2 times what you need. Medication cannot be refrigerated on board, but it can be cooled with a cooling pack or dry ice. For medication and syringes in your hand luggage, a medical certificate is advisable.',
    srcNote: 'From Austrian Airlines\' own FAQ page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Spread across hand luggage', 'Regular medication', 'Austrian recommends distributing your medication across different pieces of hand luggage.', [
        'Austrian Airlines: pack medication so it resists impact and, as far as possible, distribute your needs across different pieces of hand luggage.',
        'Austrian Airlines: take 1.5 to 2 times the medicine you need in your hand luggage, in case your flight is unexpectedly diverted or departure is delayed for a long time, even once you are in the aircraft.',
        'Austrian Airlines: if you take medication at regular intervals and fly across one or more time zones, consult your doctor before the flight.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The Austrian page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Medical certificate advised', 'Medication and syringes in hand luggage', 'Austrian advises a medical certificate for medication and syringes in your hand luggage.', [
        'Austrian Airlines: when you take medication and syringes in your hand luggage, it is advisable to carry a medical certificate confirming that it is your essential personal medication.'
      ], [PG]),
      card('cold', 'Cold medication', 'warn', 'Cooling pack or dry ice', 'Medication that must stay cold', 'Austrian cannot refrigerate medication, but allows a cooling pack or dry ice.', [
        'Austrian Airlines: your medication cannot be refrigerated on board. It can be cooled on board with a cooling pack or with dry ice.'
      ], [PG]),
      card('lost', 'If you lose medication', 'warn', 'Carry a doctor\'s note', 'Lost medication', 'Carry a doctor\'s note with your blood type, doses and the generic name of your medication.', [
        'Austrian Airlines: in case your medication is lost on your trip or at your destination, get a note from your doctor with a summary of your blood type and other important health information, including the dosage of your medication and its generic (international non-proprietary) name.',
        'Austrian Airlines: also take the documents you need to get a prescription in a foreign country.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on an Austrian Airlines flight?', 'Yes. Austrian Airlines recommends distributing your medication across different pieces of hand luggage and taking 1.5 to 2 times the amount you need.'],
      ['Can I keep medication cold on Austrian Airlines?', 'Medication cannot be refrigerated on board, but Austrian says it can be cooled with a cooling pack or with dry ice.'],
      ['Do I need a medical certificate for syringes on Austrian Airlines?', 'Austrian advises it: when taking medication and syringes in your hand luggage, carry a medical certificate confirming it is your essential personal medication.'],
      ['What should I carry in case I lose my medication?', 'A note from your doctor with your blood type and other key health information, the dose of your medication and its generic name, plus the documents you need to obtain a prescription abroad.']
    ],
    tableTitle: 'Austrian Airlines medication rules at a glance',
    tableNote: 'What Austrian Airlines\' own FAQ page says.',
    rows: [
      ['How much to carry?', '1.5 to 2 times what you need, spread across hand luggage'],
      ['Can it be over 100 ml?', NP],
      ['Medication and syringes?', 'Medical certificate advised'],
      ['Fridge on board?', 'No. Cooling pack or dry ice is possible'],
      ['If you lose it?', 'Doctor\'s note with doses and generic names']
    ],
    extra: steps(['Spread your medication across several pieces of hand luggage, packed to resist impact.', 'Carry 1.5 to 2 times the amount you need.', 'Carry a medical certificate for medication and syringes.', 'Pack a cooling pack or dry ice for cold medication.'])
  });
}

// ---------------- BRUSSELS AIRLINES ----------------
// Read 17 October 2026 on brusselsairlines.com: Medication & Medical devices (special assistance).
{
  const PG = ['https://www.brusselsairlines.com/cv/en/special-care/special-assistance/medication-and-medical-devices', 'Brussels Airlines: Medication & Medical devices', 'Medication, CPAP, dialysis, oxygen'];
  add({
    slug: 'brussels-airlines', name: 'Brussels Airlines',
    h1: 'Brussels Airlines Medication Policy: Pills, Syringes, CPAP, Dialysis & Oxygen (2026)',
    desc: 'Can you bring medication on Brussels Airlines? Yes: pills, syringes and small devices in your carry-on, with a doctor\'s note. On flights from Belgium the Cube refrigerated box keeps medication cool. Medical oxygen costs EUR 250 or 400. Checked 17 October 2026.',
    answer: 'Yes. Brussels Airlines lets you carry small portable medical devices (such as an insulin tester) and medication (pills, syringes) in your carry-on if needed during the flight, and recommends a doctor\'s note. On flights from Belgium it offers the Cube, a refrigerated box, for medication that must stay cool.',
    srcNote: 'From Brussels Airlines\' own page, last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Carry-on, doctor\'s note', 'Pills, syringes', 'Medication and syringes are allowed in your carry-on if you need them during the flight.', [
        'Brussels Airlines: you may carry small, portable medical devices (for example an insulin tester) or medication (for example pills and syringes) in your carry-on baggage if needed during the flight.',
        'Brussels Airlines recommends a sufficient supply, in case of flight delays or other irregularities, and a doctor\'s note that names the medication, says it is for personal use and that you need it with you at all times.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The Brussels Airlines page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('cold', 'Cold medication', 'go', 'The Cube from Belgium', 'Medication that must stay cold', 'On flights from Belgium the Cube refrigerated box keeps medication cool.', [
        'Brussels Airlines: on its flights from Belgium it offers the Cube service, a refrigerated box you take on board as hand luggage to keep your medication cool for the whole trip.',
        'The page we read does not describe cold storage on other routes.'
      ], [PG]),
      card('devices', 'CPAP & dialysis', 'warn', 'Conditions apply', 'CPAP, kidney dialysis machines, CAPD bags', 'CPAP machines are accepted under conditions; dialysis machines cannot be used on board.', [
        'Brussels Airlines: CPAP devices are accepted on board and can be used if switched off and stowed for take-off and landing and whenever the crew requires. A lithium battery must not exceed 160 Wh, and you cannot charge the CPAP from the aircraft power outlets. Charge it for the whole flight plus a margin for irregularities.',
        'Brussels Airlines: a CPAP that does not fit in your carry-on and weighs up to 3 kg can be brought separately in addition to your carry-on.',
        'Brussels Airlines: kidney dialysis machines and CAPD bags can travel as carry-on or checked baggage, but using a dialysis machine on board is not allowed.'
      ], [PG]),
      card('oxygen', 'Oxygen', 'warn', 'Request at booking', 'Medical oxygen, POC', 'Medical oxygen must be requested and paid for at booking.', [
        'Brussels Airlines: notify its special assistance team at booking if you want to request or bring oxygen; your doctor fills in the MEDIF form.',
        'Brussels Airlines can supply up to 5.2 litres of oxygen per minute. Fee: EUR 250 on short-haul and EUR 400 on long-haul flights, paid at booking.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a Brussels Airlines flight?', 'Yes. Brussels Airlines allows small portable medical devices and medication (pills, syringes) in your carry-on if needed during the flight, and recommends a doctor\'s note naming the medication.'],
      ['Does Brussels Airlines have a fridge for medication?', 'On flights from Belgium it offers the Cube, a refrigerated box you carry on board as hand luggage. The page we read does not describe cold storage on other routes.'],
      ['Can I use a CPAP on Brussels Airlines?', 'Yes, under conditions: switched off and stowed during take-off, landing and when the crew requires, with a lithium battery of at most 160 Wh, and not charged from the aircraft outlets.'],
      ['How much does medical oxygen cost on Brussels Airlines?', 'EUR 250 on short-haul and EUR 400 on long-haul flights, requested and paid at booking, up to 5.2 litres per minute.']
    ],
    tableTitle: 'Brussels Airlines medication rules at a glance',
    tableNote: 'What Brussels Airlines\' own page says.',
    rows: [
      ['Where should medication go?', 'Carry-on, if needed during the flight'],
      ['Doctor\'s note?', 'Recommended: medication name, personal use, needed at all times'],
      ['Can it be over 100 ml?', NP],
      ['Cold medication?', 'The Cube on flights from Belgium'],
      ['CPAP?', 'Accepted; battery max 160 Wh; no aircraft charging'],
      ['Medical oxygen?', 'EUR 250 short-haul, EUR 400 long-haul']
    ],
    extra: steps(['Carry your medication and syringes in your carry-on, with a doctor\'s note.', 'Ask about the Cube for cold medication on flights from Belgium.', 'Charge your CPAP fully and bring a battery margin.', 'Request medical oxygen at booking.'])
  });
}

// ---------------- NORWEGIAN ----------------
// Read 17 October 2026 on norwegian.com (UK site): Travelling with medical conditions (Medication, Medical equipment, Allergies).
{
  const PG = ['https://www.norwegian.com/uk/travel-info/special-needs-assistance/medical-conditions/', 'Norwegian: Travelling with medical conditions', 'Medication, equipment, allergies'];
  add({
    slug: 'norwegian', name: 'Norwegian',
    h1: 'Norwegian Medication Policy: Medicines in Hand Baggage, Equipment & Allergies (2026)',
    desc: 'Can you bring medication on Norwegian? Yes: it strongly recommends hand baggage with the prescription and original packaging. Crew cannot give or cool your medication. Respirator, POC and CPAP users need 150% battery. Checked 17 October 2026.',
    answer: 'Yes. Norwegian strongly recommends packing necessary medication in your hand baggage, with your prescription if relevant and in its original packaging if possible. Cabin crew cannot give your medication or store it in a cool place. Respirators, POCs and CPAP machines need enough battery for 150% of the flight.',
    srcNote: 'From Norwegian\'s own page (UK site), last checked 17 October 2026. Rules change, so confirm with the airline before you fly.',
    scen: [
      card('pills', 'Pills & tablets', 'go', 'Hand baggage with prescription', 'Keep it with you', 'Norwegian strongly recommends packing medication in your hand baggage.', [
        'Norwegian: strongly recommended: pack any necessary medication in your hand baggage, along with your prescription if relevant and, if possible, in its original packaging.',
        'Norwegian: cabin crew cannot administer your medication or store it in a cool place.'
      ], [PG], true),
      card('liquids', 'Liquid medication', 'warn', 'Not published', 'Over 100 ml (3.4 oz)', 'The Norwegian page we read gives no liquid limit for medication.', [
        'The liquid limit for medication is set by the security rules at the airport you fly from: check them before you pack.'
      ], [PG]),
      card('needles', 'Insulin & syringes', 'warn', 'Not published', 'Needles, syringes, injections', 'The Norwegian page we read gives no rule for syringes or needles.', [
        'The page we read covers medication in general and does not mention needles or syringes. Security rules depend on the airports you fly from and to.'
      ], [PG]),
      card('devices', 'Medical equipment', 'warn', 'Tell Norwegian, 150% battery', 'Respirator, ventilator, POC, CPAP', 'Tell Norwegian about a respirator, ventilator, POC or CPAP at the airport, and bring enough battery.', [
        'Norwegian: tell the airport staff about your respirator, ventilator, portable oxygen concentrator or CPAP. If you will use the device on board you may need a medical certificate confirming you are fit to fly.',
        'Norwegian: the certificate must be less than 10 days old and, on international flights, in English.',
        'Norwegian: bring enough battery for 150% of the flight, because devices cannot be charged on board.'
      ], [PG]),
      card('allergy', 'Allergy medication', 'warn', 'Keep it easy to reach', 'Allergy medicine', 'Bring your allergy medicine on board in an easy-to-reach place.', [
        'Norwegian: bring your allergy medicine on board and keep it in an easy-to-access place in your hand luggage.',
        'Norwegian: tell the cabin crew about a nut allergy when you board; it cannot guarantee that traces of nuts are absent from meals, snacks or anywhere on the aircraft.'
      ], [PG]),
      card('abroad', 'Flying abroad', 'warn', 'Check the destination', 'International flights', 'Your destination country sets its own medication rules.', ABROAD_LINES, [PG])
    ],
    faq: [
      ['Can I bring medication on a Norwegian flight?', 'Yes. Norwegian strongly recommends packing any necessary medication in your hand baggage, with your prescription if relevant and in its original packaging if possible.'],
      ['Will Norwegian cabin crew give me or cool my medication?', 'No. Norwegian says cabin crew cannot administer medication or store it in a cool place.'],
      ['Can I use a CPAP or oxygen concentrator on Norwegian?', 'Tell the airport staff about the device. If you use it on board you may need a medical certificate less than 10 days old (in English on international flights), and enough battery for 150% of the flight, since it cannot be charged on board.']
    ],
    tableTitle: 'Norwegian medication rules at a glance',
    tableNote: 'What Norwegian\'s own page says. Where Norwegian is silent we say so.',
    rows: [
      ['Where should medication go?', 'Hand baggage, with the prescription, in original packaging'],
      ['Can it be over 100 ml?', NP],
      ['Needles and syringes?', NP],
      ['Fridge or cooler on board?', 'Crew cannot store medication in a cool place'],
      ['Respirator, POC or CPAP?', 'Tell the airport; certificate under 10 days old; 150% battery']
    ],
    extra: steps(['Pack your medication in your hand baggage with the prescription, in its original packaging.', 'Tell the airport staff about a respirator, ventilator, POC or CPAP.', 'Bring a medical certificate under 10 days old (English on international flights) and battery for 150% of the flight.', 'Keep allergy medicine somewhere easy to reach.'])
  });
}

require('./airline_medication_b7.js')({ add, card, steps, NP, ABROAD_LINES, TSA_FAQ, TSA_PILLS, TSA_LIQ, TSA_INS, TSA_SYR, TSA_SUP, TSA_ICE, TSA_PILLS_LINE, TSA_LIQ_LINE, TSA_REMOVE, TSA_INS_LINE, TSA_SYR_LINE, TSA_DEV_LINE, TSA_ICE_LINE, TSA_FINAL });
require('./airline_medication_b8.js')({ add, card, steps, NP, ABROAD_LINES });
require('./airline_medication_b9.js')({ add, card, steps, NP, ABROAD_LINES });
require('./airline_medication_b10.js')({ add, card, steps, NP, ABROAD_LINES });
require('./airline_medication_b11.js')({ add, card, steps, NP, ABROAD_LINES });
require('./airline_medication_b12.js')({ add, card, steps, NP, ABROAD_LINES });

module.exports = out;
