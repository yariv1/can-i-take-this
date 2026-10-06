// Article 49 (Travel Safety): Is Turks and Caicos safe? (2026): live US/UK/Canada levels, then each risk.
// Levels: advisories.json (US State Dept feed, GOV.UK content API, Canada), refreshed every 6 hours. Local law: US advisory text,
// Turks and Caicos Customs, Visit TCI, Turks and Caicos Government press office. Checked October 2026.
const fs = require('fs');
const path = require('path');
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;

const SLUG = 'is-turks-and-caicos-safe-2026';
const A = JSON.parse(fs.readFileSync(path.join(__dirname, 'advisories.json'), 'utf8'));
const TC = A.countries.TC;
if (!TC || !TC.us || !TC.ca || !TC.uk) throw new Error('turks_caicos_guide: advisories.json has no complete TC entry (run update_advisories.js)');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dShort = iso => { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || ''); return m ? MON[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : ''; };
const stamp = iso => { const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(iso || ''); return m ? (+m[3]) + ' ' + MON[+m[2] - 1] + ' ' + m[1] + ', ' + m[4] + ':' + m[5] + ' UTC' : ''; };

const US_NAMES = ['', 'Normal precautions', 'Increased caution', 'Reconsider travel', 'Do not travel'];
const CA_NAMES = ['', 'Normal precautions', 'High caution', 'Avoid non-essential travel', 'Avoid all travel'];
const UK_ST = {
  avoid_all_but_essential_travel_to_parts: ['Essential travel only (parts)', 2],
  avoid_all_travel_to_parts: ['Avoid all travel (parts)', 3],
  avoid_all_but_essential_travel_to_whole_country: ['Essential travel only', 3],
  avoid_all_travel_to_whole_country: ['Avoid all travel', 4]
};

const meta = `<div class="art-meta"><span class="tag tag-neutral">Travel Safety</span><span class="art-meta-sep">&middot;</span><span id="tc-updated-meta">Levels checked ${esc(stamp(A.updated))}</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Woman dozing in a blue beach chair on Grace Bay beach while a man beside her open straw tote bag lifts a pink wallet out of it" width="800" height="400"><figcaption>Most crime in the islands is opportunistic: unattended bags are the target.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const CSS2 = '<style>.tc-gov{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin:1em 0}.tc-card{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px;display:flex;flex-direction:column;gap:8px}.tc-card h3{margin:0;font-size:1.05rem}.tc-card .tc-by{margin:0;font-size:.9rem;color:var(--muted)}.tc-body{display:flex;flex-direction:column;gap:12px;flex:1}.tc-body .tc-p{align-self:stretch}.tc-body .tc-d{margin-top:auto;margin-bottom:-6px}.tc-card p{margin:0;font-size:.95rem}.tc-card a{font-size:.9rem;color:var(--accent);text-decoration:none}.tc-card a:hover{text-decoration:underline}' +
  '.tc-p{display:flex;flex-direction:column;align-items:flex-start;gap:1px;border-radius:8px;padding:6px 10px;color:#08111f;font-size:.95rem;line-height:1.25;align-self:flex-start}.tc-p b{font-weight:700}.tc-p span{font-size:.85rem}.tc-s1{background:#6FD08C}.tc-s2{background:#F5B841}.tc-s3{background:#FF9F5A}.tc-s4{background:#FF6B6B}.tc-d{font-size:.85rem;color:var(--muted)}' +
  '.tc-law{border:1px solid #FF6B6B;border-radius:14px;background:var(--surface);padding:14px 16px;margin:1em 0}.tc-law h3{margin:0 0 6px;font-size:1.05rem}.tc-law p{margin:.4em 0;font-size:.95rem}' +
  '.tc-steps{list-style:none;margin:1em 0;padding:0;counter-reset:s;display:grid;gap:8px}.tc-steps li{counter-increment:s;display:flex;gap:10px;align-items:flex-start;border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:10px 12px;font-size:.95rem}.tc-steps li:before{content:counter(s);flex:none;display:grid;place-items:center;width:1.5em;height:1.5em;border-radius:.35em;background:var(--accent);color:#08111f;font:700 .85rem/1 Inter,sans-serif}[data-theme="light"] .tc-steps li:before{color:#fff}</style>';

const pill = (cls, b, sub) => '<div class="tc-p tc-s' + cls + '"><b>' + b + '</b>' + (sub ? '<span>' + sub + '</span>' : '') + '</div>';
const usCard = o => pill(o.level, 'Level ' + o.level, US_NAMES[o.level]) + '<p>' + esc(o.summary || '') + '</p><div class="tc-d">Updated ' + dShort(o.date) + '</div><a href="' + esc(o.url) + '" target="_blank" rel="noopener">Read the full advisory on travel.state.gov &#8599;</a>';
const ukCard = o => {
  const st = (o.status || []).filter(s => UK_ST[s]);
  const pills = st.length ? st.map(s => pill(UK_ST[s][1], UK_ST[s][0])).join('') : pill(1, 'No warning');
  const txt = st.length ? (o.summary || 'The FCDO advises against travel to parts of the islands or to the whole territory. Open the full advice for the exact areas.') : 'The FCDO does not advise against travel to the Turks and Caicos Islands. It is a British Overseas Territory, so there is no British Embassy and the Turks and Caicos Islands government supports you if you need help.';
  return pills + '<p>' + esc(txt) + '</p><div class="tc-d">Updated ' + dShort(o.date) + '</div><a href="https://www.gov.uk/foreign-travel-advice/' + esc(o.slug) + '" target="_blank" rel="noopener">Read the full advice on GOV.UK &#8599;</a>';
};
const caCard = o => pill(o.level, CA_NAMES[o.level], o.text && o.text.toLowerCase() !== CA_NAMES[o.level].toLowerCase() ? esc(o.text) : '') + '<p>' + esc(o.update ? 'Latest update: ' + o.update : 'Canada publishes this level on its travel advice page.') + '</p><div class="tc-d">Updated ' + dShort(o.date) + '</div><a href="https://travel.gc.ca/destinations/' + esc(o.slug) + '" target="_blank" rel="noopener">Read the full advice on travel.gc.ca &#8599;</a>';

const GOV = '<div class="tc-gov" id="tc-gov">' +
  '<div class="tc-card" data-k="us"><h3>United States</h3><p class="tc-by">State Department</p><div class="tc-body">' + usCard(TC.us) + '</div></div>' +
  '<div class="tc-card" data-k="uk"><h3>United Kingdom</h3><p class="tc-by">FCDO</p><div class="tc-body">' + ukCard(TC.uk) + '</div></div>' +
  '<div class="tc-card" data-k="ca"><h3>Canada</h3><p class="tc-by">Global Affairs Canada</p><div class="tc-body">' + caCard(TC.ca) + '</div></div>' +
  '</div>';

const GLANCE = (h => h.replace('class="cox-t"', 'class="cox-t tc-glance"'))(T(['Risk', 'What the governments say', 'Where'], [
  ['👜 Theft and robbery', 'Common and mostly opportunistic. Armed robbery and gang-related gun crime have been reported, mainly on Providenciales and Grand Turk.', 'US, UK, Canada'],
  ['🛍️ Scams and overcharging', 'Aggressive vendors, &ldquo;free&rdquo; gifts that turn into demands for money, unmarked taxis.', 'US, UK, Canada'],
  ['💣 Terrorism', 'No recent history in the islands, but the UK says attacks cannot be ruled out.', 'UK'],
  ['🌀 Hurricanes and earthquakes', 'Hurricane season runs June to November. The UK says earthquakes could be a risk.', 'US, UK, Canada'],
  ['🦟 Health', 'Dengue, chikungunya and Zika. Hospitals are limited, so medical evacuation can be very expensive.', 'UK, Canada'],
  ['🚗 Roads', 'Frequent fatal accidents, wandering livestock, poor lighting, driving on the left.', 'UK, Canada'],
  ['🌊 Water and diving', 'Operators may not meet your home safety standards. Canada also warns about sharks.', 'UK, Canada'],
  ['⚖️ Local laws', 'Even one bullet can mean arrest. Drugs, including cannabis, carry severe penalties.', 'US, UK, Canada']
]));

const LAW = T(['Source', 'What it says'], [
  ['US State Department', 'Firearms and ammunition are illegal in the islands, including &ldquo;single bullets and cartridges&rdquo; brought by mistake in carry-on bags or luggage. A US or other foreign firearm license is not valid. Police enforce this strictly, especially at the airport when you leave.'],
  ['🇨🇦 Government of Canada', 'Strictly prohibited unless you have prior permission from the Commissioner of Police. Penalties include a minimum 12-year prison sentence.'],
  ['🛃 Turks and Caicos Customs', 'Firearms, explosives and ammunition are <strong>restricted goods</strong> that can only be brought in with a permit from the Commissioner of Police. Blank-firing or replica firearms that can be converted to fire bullets are included.'],
  ['⚖️ Turks and Caicos Government', 'Said in May 2024 that possession of firearm or ammunition offences carries a <strong>mandatory minimum sentence of twelve years plus a fine</strong>, with judges able to depart from it in exceptional circumstances.']
]);

const DONT = T(['Item', 'Rule on arrival (Turks and Caicos Customs)'], [
  ['🔫 Firearms, ammunition, explosives', 'Restricted: only with a permit. Even one bullet is treated as ammunition.'],
  ['🔪 Flick, gravity and butterfly knives, throwing stars, knuckledusters, spear guns, spring-loaded batons', 'Prohibited: banned completely.'],
  ['🧴 Self-defense sprays with noxious or inflammatory gas or liquid', 'Prohibited: banned completely.'],
  ['⚡ Stun guns and similar incapacitating weapons', 'Prohibited: banned completely.'],
  ['🌿 Illegal drugs, including cannabis', 'Prohibited. Visit TCI says importing drugs, including cannabis and marijuana, carries a 5-year sentence and a fine of up to $75,000.']
]);

const body = CSS + CSS2 + meta + hero +
  '<p><strong>Is Turks and Caicos safe? Mostly yes for visitors, but three governments warn about specific risks, and one local law has put travelers in jail.</strong> The US rates the islands Level 2 (increased caution) because of crime. The panel below shows each government&rsquo;s current level, checked every 6 hours. Then we go risk by risk: crime, safer habits, scams, terrorism, hurricanes, health, roads, water and local laws.</p>' +
  stat([
    ['3', 'governments, each with its own level for the islands'],
    ['12 years', 'mandatory minimum sentence for firearm or ammunition offences, per the islands&rsquo; government'],
    ['June 1 to Nov 30', 'Atlantic hurricane season, per NOAA']
  ]) +
  '<h2>🧭 What the three governments say right now</h2>' +
  GOV +
  '<p class="tc-d" id="tc-note">Official feeds last checked <strong id="tc-updated">' + esc(stamp(A.updated)) + '</strong>. The date on each card is when that government last updated its advice. Colors compare severity inside one system only. For how the three scales work, see our <a href="/blog/travel-warning-by-country-2026/">travel warning by country</a> table.</p>' +
  '<h2>📋 The risks at a glance</h2>' +
  GLANCE +
  '<h2>👜 Crime and robbery</h2>' +
  cl([
    ['📍', '<strong>Most crime is in Providenciales</strong>, says the US. The UK adds that Providenciales and Grand Turk have seen more serious crime, including gang-related crime involving guns and robbery, and that crime on the other islands is low. Canada says the risk is greater on Providenciales.'],
    ['⚠️', '<strong>Violent crime exists.</strong> Canada lists armed robberies, home invasions, murders and sexual assaults, and adds that tourists are not usually targeted but could be in the wrong place at the wrong time. The UK says the risk is lower in tourist areas.'],
    ['👜', '<strong>Most crime is opportunistic.</strong> The UK lists burglary, theft and muggings. The US names purse snatching and pickpocketing in popular tourist spots. Canada adds theft from beaches, vehicles and homes.'],
    ['📅', '<strong>Crime rises in December and January</strong>, says Canada.'],
    ['👮', '<strong>Police may have limited resources</strong> to investigate, says the US. Canada says the response can be long when you report a crime.'],
    ['🛡️', '<strong>Do not resist a robbery.</strong> The UK says not to resist anyone trying to take your things, not to carry large amounts of cash or valuables, and to avoid isolated areas at night and be careful at ATMs. Canada says to use ATMs in public areas or inside banks.'],
    ['🔐', '<strong>Keep your passport in the hotel or villa safe</strong> if you can. The UK says you cannot get a replacement passport locally.']
  ]) +
  fig(1, 'Police officer writing a report at night beside a parked rental SUV with a smashed rear window and glass on the road while a shocked tourist couple stands beside it under a streetlight', 'Canada lists theft from vehicles; the US says police may have limited resources to investigate.') +
  '<h2>🌙 Safer places and safer habits</h2>' +
  cl([
    ['🏝️', '<strong>Island matters.</strong> The UK says Providenciales and Grand Turk have the higher levels of serious crime and that crime on the other islands is low. The US says most crime is in Providenciales.'],
    ['🌙', '<strong>At night:</strong> the US advises not to walk alone at night. The UK says to avoid isolated areas at night and to take care walking alone off the main roads.'],
    ['🏠', '<strong>At your villa or hotel:</strong> the US says not to answer the door unless you know who it is. Canada lists home invasions among the violent crime on the islands, and says theft from homes, vehicles and beaches occurs regularly.'],
    ['🎒', '<strong>Valuables:</strong> the UK says not to carry large amounts of cash or valuables. Do not leave bags unattended on the beach or in a parked car.'],
    ['📲', '<strong>Alerts:</strong> the US recommends enrolling in its Smart Traveler Enrollment Program (STEP) to receive alerts.']
  ]) +
  '<h2>🛍️ Scams, taxis and online fraud</h2>' +
  cl([
    ['🎁', '<strong>The &ldquo;free&rdquo; gift.</strong> The US warns of aggressive vendors who offer a gift and then demand money. It also warns of overcharging in tourist areas. Most sites have tourist police.'],
    ['🚕', '<strong>Use licensed, marked taxis only.</strong> The UK says to avoid unregistered taxis called &ldquo;jitneys&rdquo;. Canada says drivers of unmarked taxis have committed sexual assaults. Confirm the fare before you ride.'],
    ['🍹', '<strong>Watch your drink.</strong> Canada says never to leave food or drinks unattended and to avoid accepting snacks, drinks, gum or cigarettes from new acquaintances, because they may contain drugs.'],
    ['📶', '<strong>Avoid public Wi-Fi for banking.</strong> Canada says criminals can compromise public networks to steal personal and card data.']
  ]) +
  '<h2>💣 Terrorism</h2>' +
  '<p>The UK says the terrorist threat is high globally. It says there is <strong>no recent history of terrorism in the Turks and Caicos Islands</strong>, but attacks cannot be ruled out. The US and Canadian advice we checked does not single out terrorism for the islands: both focus on crime.</p>' +
  '<h2>🌀 Hurricanes and earthquakes</h2>' +
  '<p>The US advisory says the islands &ldquo;regularly experience hurricanes&rdquo;. NOAA&rsquo;s National Hurricane Center says the Atlantic hurricane season runs from <strong>June 1 to November 30</strong>. Canada warns that small tropical storms can quickly become major hurricanes and says to be ready to change your plans. The UK adds that <strong>earthquakes could be a risk</strong>.</p>' +
  fig(2, 'Storm waves and bent palm trees at Grace Bay as resort staff stack lounge chairs ahead of an approaching hurricane', 'The islands regularly experience hurricanes: the season runs June 1 to November 30.') +
  cl([
    ['📡', 'Check the <a href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener">National Hurricane Center</a> before and during a trip in those months.'],
    ['📑', 'Read your airline&rsquo;s and hotel&rsquo;s change and cancellation terms before you book.'],
    ['🏛️', 'Follow instructions from local authorities if a storm approaches.']
  ]) +
  '<h2>🦟 Health and medical care</h2>' +
  cl([
    ['🦟', '<strong>Mosquito-borne diseases:</strong> the UK lists Zika, dengue and chikungunya, and Canada lists the same three. There is no dengue vaccine. Zika can cause birth defects, so Canada says to avoid travel if you are pregnant or planning a pregnancy.'],
    ['🏥', '<strong>Medical care is limited.</strong> There are public hospitals in Providenciales and Grand Turk. Canada says good care is only available in and around major tourist areas and that facilities may lack supplies. Private practitioners want payment immediately.'],
    ['🚁', '<strong>Medical evacuation can be very expensive.</strong> The UK says serious cases are referred to South America or the USA, so take insurance that covers evacuation and hospital stays.'],
    ['💊', '<strong>Bring your medication</strong> in its original container with a copy of the prescription: Canada says some medicines are not available.'],
    ['💉', '<strong>Check vaccines early.</strong> The UK advises checking about 8 weeks before you travel. Canada recommends routine vaccines plus hepatitis A and B, among others.']
  ]) +
  '<h2>🚗 Roads and driving</h2>' +
  cl([
    ['↔️', '<strong>Traffic drives on the left.</strong> The UK says most rental cars are left-hand drive, which makes overtaking harder for visitors.'],
    ['💥', '<strong>Accidents are frequent.</strong> Canada says fatal accidents are common. The UK reports increasing accidents on the Leeward Highway in Providenciales, especially at night.'],
    ['🐐', '<strong>Animals on the road.</strong> The UK warns of goats, cows, donkeys and horses on the roads, especially on Grand Turk, and says street lighting is limited.'],
    ['⏱️', '<strong>Speed limits:</strong> 20 mph in towns and 40 mph elsewhere, per the UK and Canada.'],
    ['📄', '<strong>Insurance is compulsory.</strong> Canada says driving without third-party insurance can bring a US$1,000 fine and/or 3 months in prison. A home license is accepted for a limited time (UK: one month for a UK photocard; Canada: 30 days).']
  ]) +
  '<h2>🌊 Water and diving</h2>' +
  cl([
    ['🤿', '<strong>Check your dive or snorkel operator.</strong> The UK says to check credentials, safety equipment and oxygen on the boat, and to leave your trip details with someone. Canada warns operators may not meet Canadian safety standards.'],
    ['🦈', '<strong>Sharks.</strong> Canada says to avoid water where fishermen use bait and to ask residents or tour operators where it is safe to swim.'],
    ['⛵', '<strong>Boating:</strong> Canada says you may meet watercraft operated by armed smugglers and advises using only officially recognized docking facilities.']
  ]) +
  '<h2>⚖️ Local laws that catch visitors out</h2>' +
  '<div class="tc-law"><h3>The ammunition rule sends travelers to jail</h3><p>People who would never carry a gun have been caught with ammunition by mistake: a bullet left in a coat pocket, a range bag, a souvenir cartridge. The US says intent does not stop an arrest at the airport, and some US citizens have been detained for weeks.</p></div>' +
  LAW +
  '<p>The sources do not word it the same way: the US says it is illegal, Customs says it needs a permit and the tourism site says it is banned. For a visitor the result is the same. Do not bring any.</p>' +
  '<ol class="tc-steps">' +
  '<li>Empty every pocket of every coat, backpack and bag you will bring, including ones you use for hunting, shooting or camping.</li>' +
  '<li>Remove any bullets, casings, cartridges and decorative or souvenir ammunition. Do not pack replicas that can be converted to fire bullets.</li>' +
  '<li>Check the bag again just before you leave for the airport. The US says the strictest checks happen when you leave the islands.</li>' +
  '<li>If you hold a firearm permit at home, it does not help: the US says a license from the US or any other country is not valid there.</li></ol>' +
  '<p><strong>Other banned items and drugs.</strong> Turks and Caicos Customs lists goods that are banned completely. Several are everyday travel items. The UK adds that drug penalties are severe even for small amounts, with fines up to US$5,000 and up to 2 years in prison.</p>' +
  DONT +
  '<h2>🆘 If something goes wrong</h2>' +
  cl([
    ['📞', '<strong>Emergency number: 911</strong> for ambulance, fire and police (Canada also lists 999).'],
    ['🏛️', '<strong>British travelers:</strong> the islands are a British Overseas Territory with no British Embassy, so the Turks and Caicos Islands government supports you.'],
    ['🧳', '<strong>US citizens:</strong> the US Embassy in Nassau, The Bahamas, helps US citizens who are victims of crime in the islands. It cannot get you out of detention.'],
    ['🍁', '<strong>Canadian citizens:</strong> Canada lists an honorary consul in Providenciales and consular help through its High Commission in Kingston, Jamaica.'],
    ['👮', '<strong>Report a crime</strong> to the Royal Turks and Caicos Islands Police Force.']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Is Turks and Caicos safe for tourists?', 'Mostly, with precautions. The US advises increased caution because of crime, mostly in Providenciales. Canada says tourists are not usually targeted. The UK says crime is low on the islands other than Providenciales and Grand Turk. Read the three cards above for each government&rsquo;s current wording.'],
    ['What is the Turks and Caicos travel advisory?', 'It is the US, UK and Canadian governments&rsquo; official rating of the islands. The current level from each is in the panel above and refreshes automatically every 6 hours.'],
    ['Is there a terrorism risk in Turks and Caicos?', 'The UK says there is no recent history of terrorism in the islands, but attacks cannot be ruled out.'],
    ['Can I bring a bullet to the Turks and Caicos Islands?', 'No. The US advisory says even a single bullet brought by mistake can lead to arrest, and the islands&rsquo; government has said firearm and ammunition offences carry a mandatory minimum sentence of twelve years plus a fine.'],
    ['Can I bring pepper spray or a stun gun?', 'No. Turks and Caicos Customs lists self-defense sprays with noxious or inflammatory gas or liquid, and stun guns, among goods banned completely.'],
    ['When is hurricane season in the Turks and Caicos Islands?', 'NOAA says the Atlantic hurricane season runs from June 1 to November 30.'],
    ['Do I need travel insurance?', 'The UK and Canada both advise comprehensive insurance that covers medical evacuation, because serious cases may be flown to another country and the cost can be very high.'],
    ['Where does this page get its levels?', 'From the US State Department feed, the UK government&rsquo;s content API for FCDO travel advice and Canada&rsquo;s travel advice data. Nothing is entered by hand.']
  ]) +
  '<p><em>Checked October 2026 from official sources. Advice and laws can change quickly: confirm on the government pages before you travel.</em></p>' +
  SRC([
    ['https://travel.state.gov/en/international-travel/travel-advisories/turks-and-caicos-islands.html', 'US State Department &mdash; Turks and Caicos Islands travel advisory'],
    ['https://www.gov.uk/foreign-travel-advice/turks-and-caicos-islands', 'GOV.UK &mdash; Turks and Caicos Islands travel advice (FCDO)'],
    ['https://travel.gc.ca/destinations/turks-and-caicos-islands', 'Government of Canada &mdash; Turks and Caicos Islands travel advice'],
    ['https://customs.gov.tc/webuploads/currdoc/Prohibited%20and%20restricted%20goods-Turks%20and%20Caicos.pdf', 'Turks and Caicos Customs &mdash; Prohibited and restricted goods'],
    ['https://www.visittci.com/travel-info/entry-requirements/customs-allowances', 'Visit Turks and Caicos Islands &mdash; Customs allowances'],
    ['https://gov.tc/pressoffice/latest/us-congressional-delegation', 'Turks and Caicos Islands Government &mdash; US Congressional delegation (20 May 2024)'],
    ['https://www.nhc.noaa.gov/', 'NOAA National Hurricane Center']
  ]) +
  '<script type="application/json" id="tc-data">' + JSON.stringify(TC).replace(/</g, '\\u003c') + '</' + 'script>' +
  '<script>var TCC=' + JSON.stringify({ USN: US_NAMES, CAN: CA_NAMES, UKS: UK_ST }) + ';' + fs.readFileSync(path.join(__dirname, 'turks_caicos_client.js'), 'utf8') + '</' + 'script>';

module.exports = {
  slug: SLUG,
  title: 'Is Turks and Caicos Safe? Current US, UK and Canada Advisory Levels (2026) | canitakethis.co',
  desc: 'Is Turks and Caicos safe? Live US, UK and Canada advisory levels, then each risk: crime, scams, hurricanes, health, roads and the ammunition law.',
  h1: 'Is Turks and Caicos Safe? Current US, UK and Canada Advisory Levels (2026)',
  body
};
