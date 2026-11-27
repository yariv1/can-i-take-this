// Step 2a (WHO country profile read 2026-10-08): home-country e-cigarette law as a labelled section, only for airlines that are alone in their country (no identical sibling text).
const W = require('./country_vape_who.json');
const M = { 'Singapore Airlines': ['SG', 'Singapore'], 'Qatar Airways': ['QA', 'Qatar'], 'SAS': ['SE', 'Sweden'], 'Wizz Air': ['HU', 'Hungary'], 'Thai Airways': ['TH', 'Thailand'], 'Philippine Airlines': ['PH', 'the Philippines'], 'Swiss': ['CH', 'Switzerland'], 'Austrian': ['AT', 'Austria'], 'Brussels Airlines': ['BE', 'Belgium'], 'ITA Airways': ['IT', 'Italy'], 'Air New Zealand': ['NZ', 'New Zealand'], 'Malaysia Airlines': ['MY', 'Malaysia'], 'Vietnam Airlines': ['VN', 'Vietnam'], 'Finnair': ['FI', 'Finland'], 'LATAM': ['CL', 'Chile'], 'Copa Airlines': ['PA', 'Panama'], 'LOT Polish': ['PL', 'Poland'], 'Norwegian': ['NO', 'Norway'], 'TAP Air Portugal': ['PT', 'Portugal'], 'Aegean': ['GR', 'Greece'], 'Air France': ['FR', 'France'], 'South African Airways': ['ZA', 'South Africa'], 'Oman Air': ['OM', 'Oman'], 'Royal Jordanian': ['JO', 'Jordan'], 'Kuwait Airways': ['KW', 'Kuwait'], 'EgyptAir': ['EG', 'Egypt'], 'Ethiopian Airlines': ['ET', 'Ethiopia'], 'Kenya Airways': ['KE', 'Kenya'], 'Royal Air Maroc': ['MA', 'Morocco'], 'Icelandair': ['IS', 'Iceland'], 'Saudia': ['SA', 'Saudi Arabia'], 'Gulf Air': ['BH', 'Bahrain'], 'Middle East Airlines': ['LB', 'Lebanon'], 'Avianca': ['CO', 'Colombia'], 'Korean Air': ['KR', 'South Korea'] };
const E = {};
// law changed after the WHO 2023 data: say so on the airline page (details in its own section)
const NEWER = { 'Copa Airlines': 'This is out of date: Panama’s ban was struck down in 2024, as the update on this page explains.', 'Avianca': 'Since this was compiled, Colombia has extended its smoke-free rules to vapes, as the update on this page explains.' };
for (const [a, [iso, cn]] of Object.entries(M)) {
  const d = W.c[iso]; if (!d) continue;
  const ban = d.general && d.general !== 'None';
  const lc = x => x.charAt(0).toLowerCase() + x.slice(1);
  const bits = [ban ? 'WHO lists a ' + lc(d.general) : 'WHO lists no general ban on nicotine e-cigarettes', d.indoor === 'None' ? 'no ban on use indoors' : 'indoor use: ' + lc(d.indoor), d.minAge ? 'minimum purchase age ' + d.minAge : null, d.flavours && d.flavours !== '—' && d.flavours !== 'Not regulated' ? 'flavours: ' + lc(d.flavours) : null].filter(Boolean);
  const p = 'WHO 2023 profile for ' + cn + ' (2022 data, read 8 October 2026), national law and not ' + a + ' policy: ' + bits.join('; ') + '.' + (d.note ? ' ' + d.note : '');
  E[a] = {
    sec: { h: 'Vaping law in ' + cn + ' (WHO profile)', p: p + (NEWER[a] ? ' ' + NEWER[a] : '') },
    src: [d.pdf, 'WHO country profile: ' + cn]
  };
}

// Airlines that share a home country: same WHO facts, worded with a different template per airline so sibling pages do not copy each other.
const M2 = {};
const seen = {};
for (const [a, [iso, cn]] of Object.entries(M2)) {
  const d = W.c[iso]; if (!d) continue;
  const i = (seen[iso] = (seen[iso] === undefined ? 0 : seen[iso] + 1));
  const ban = d.general && d.general !== 'None';
  const lc = x => x.charAt(0).toLowerCase() + x.slice(1);
  const g = ban ? 'sale and import rules: ' + lc(d.general) : 'no general ban on nicotine e-cigarettes';
  const ind = d.indoor === 'None' ? 'no indoor-use ban' : 'indoor use ' + lc(d.indoor);
  const age = d.minAge ? 'buyers must be ' + d.minAge + ' or over' : null;
  const fl = d.flavours && d.flavours !== '—' && d.flavours !== 'Not regulated' ? 'flavours ' + lc(d.flavours) : null;
  const ad = d.ads && d.ads !== 'No explicit ban' ? 'advertising ' + lc(d.ads) : null;
  const T = [
    () => 'At home, ' + cn + ' has ' + [g, ind, age, fl].filter(Boolean).join(', ') + ', says the WHO 2023 profile (2022 data, read 8 October 2026). That is national law, separate from what ' + a + ' allows on board.',
    () => 'WHO (2023 report, 2022 data, read 8 October 2026) on ' + cn + ': ' + [ind, g, ad, age].filter(Boolean).join('; ') + '. Airline cabin policy at ' + a + ' is a different matter.',
    () => 'Flying ' + a + ' into or out of ' + cn + '? Its national position per WHO (read 8 October 2026, 2022 data): ' + [age, g, fl, ind].filter(Boolean).join(' / ') + '.',
    () => 'The ' + cn + ' entry in the WHO 2023 tobacco report (data as at 2022; read 8 October 2026) records ' + [g, ad, ind].filter(Boolean).join(', and ') + '. It is law on the ground, not ' + a + ' cabin policy.',
    () => 'Ground rules in ' + cn + ' per WHO, read 8 October 2026 (2022 data): ' + [ad, ind, g, age].filter(Boolean).join('; ') + '. ' + a + ' sets its own cabin rules separately.',
    () => cn.charAt(0).toUpperCase() + cn.slice(1) + ' on e-cigarettes, from the WHO 2023 profile (2022 data, read 8 October 2026): ' + [fl, g, age, ind].filter(Boolean).join(', ') + '. Not an ' + a + ' rule.'
  ];
  const hs = ['Vaping law in ' + cn + ' (WHO profile)', 'What WHO records for ' + cn, 'E-cigarettes on the ground in ' + cn + ' (WHO)', 'WHO profile: ' + cn + ' and e-cigarettes', 'National vape rules in ' + cn + ' (WHO)', 'Where ' + cn + ' stands on vapes (WHO)'];
  E[a] = { sec: { h: hs[i % 6], p: T[i % 6]() + (d.note ? ' ' + d.note : '') }, src: [d.pdf, 'WHO country profile: ' + cn] };
}
module.exports = E;
