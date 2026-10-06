// Article 52 (Travel Safety): Travel warning Mexico (2026): state-by-state US, UK and Canada advisory levels.
// Intent (SERP checked Oct 2026: CBS, The Points Guy, Time Out, Mexico travel blogs): "is there a travel warning for Mexico, which states, is my
// destination (Cancun, Los Cabos, Mexico City, Puerto Vallarta) affected, how do the US, UK and Canada compare".
// Data: national levels = advisories.json (live, every 6 h); UK and Canada regions = mexico.json (live, every 6 h); US state levels = mexico_us.json
// (read by hand from travel.state.gov, which blocks scripts; re-read at each site update; the page warns when the US date has moved on).
const fs = require('fs');
const path = require('path');
const H = require('./carryon_pages.js').__helpers;
const { CSS, SRC, stat, callout, cl, faq } = H;
const mxRender = require('./mexico_shared.js');
const TW = require('./travel_warning_guide.js');

const SLUG = 'travel-warning-mexico-2026';
const A = JSON.parse(fs.readFileSync(path.join(__dirname, 'advisories.json'), 'utf8'));
const US = JSON.parse(fs.readFileSync(path.join(__dirname, 'mexico_us.json'), 'utf8'));
const MX = JSON.parse(fs.readFileSync(path.join(__dirname, 'mexico.json'), 'utf8'));
const ADV = A.countries.MX;
if (!ADV || !ADV.us || !ADV.uk || !ADV.ca) throw new Error('mexico_guide: advisories.json has no complete MX entry (run update_advisories.js)');
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
const TWC = { USN: US_NAMES, CAN: CA_NAMES, UKS: UK_ST };
// destination label -> state key in mexico_us.json
const DEST = [['Cancún, Playa del Carmen, Tulum and Cozumel', 'quintana roo'], ['Los Cabos and La Paz', 'baja california sur'], ['Mexico City', 'mexico city'],
  ['Puerto Vallarta and Guadalajara', 'jalisco'], ['Oaxaca, Puerto Escondido and Huatulco', 'oaxaca'], ['Mazatlán', 'sinaloa'], ['Acapulco', 'guerrero'],
  ['Tijuana', 'baja california'], ['Mérida and Chichén Itzá', 'yucatan']];

const R = mxRender(US, MX, ADV, TWC, DEST);
const L4 = US.states.filter(s => s.l === 4);

const meta = `<div class="art-meta"><span class="tag tag-neutral">Travel Safety</span><span class="art-meta-sep">&middot;</span><span>Levels checked <span id="mx-updated">${esc(stamp(A.updated))}</span></span><span class="art-meta-sep">&middot;</span><span>8 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Couple seated at a gate in Chicago O'Hare Terminal 1 looking up at a wall TV that shows Mexico travel advisory levels by state in red, orange and yellow panels, with a carry-on and a straw sun hat beside them" width="800" height="400"><figcaption>Mexico has no single warning: check the state you will visit.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const CSS5 = '<style>.mx-grid{display:block;column-width:290px;column-count:2;column-gap:12px;margin:1em 0}.mx-nat{column-width:250px;column-count:3}.mx-card{break-inside:avoid;-webkit-column-break-inside:avoid;margin:0 0 12px;border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px;display:flex;flex-direction:column;gap:10px}.mx-card h3{margin:0;font-size:1.1rem}.mx-card p{margin:0;font-size:.95rem;font-weight:300}.mx-st{color:var(--muted);font-size:.9rem!important}' +
  '.mx-pills{display:flex;flex-direction:column;gap:6px}.mx-p{cursor:default;margin:0 0 4px;max-width:none;align-self:flex-start}.mx-p:hover{box-shadow:none}.mx-x{display:block;font-size:.9rem;font-weight:300;color:var(--text);margin-top:2px}.mx-flag{color:#FFB020}' +
  '.mx-note strong{font-weight:600}.mx-gov{display:flex;flex-direction:column;gap:2px}.mx-gh{font-weight:700;font-size:.9rem;color:var(--muted)}.mx-card .mx-gov:last-child{margin-top:auto}' +
  '#mx-table{min-width:600px}#mx-table th,#mx-table td{white-space:normal}#mx-table th[scope=row]{width:130px;min-width:110px}#mx-table td{min-width:150px;width:30%}#mx-table tbody tr[hidden]{display:none}.mx-x{white-space:normal;overflow-wrap:anywhere}</style>';

const body = CSS + TW.__css + CSS5 + meta + hero +
  '<p><strong>Mexico does not have one travel warning: the US rates the whole country at Level 2 (&ldquo;exercise increased caution&rdquo;) but rates some states at Level 3 and Level 4, and the UK and Canada single out other states and areas.</strong> Which warning applies to you depends on the state you will be in, so the table below gives the US, UK and Canadian level for every Mexican state, with the reason, and the section after it answers the question for popular destinations such as Cancún, Los Cabos and Mexico City. The national levels and the UK and Canada regions refresh every 6 hours from the official sources.</p>' +
  stat([
    ['<span id="mx-s-l4">' + R.l4 + '</span>', 'Mexican states at US Level 4: Do not travel'],
    ['<span id="mx-s-l3">' + R.l3 + '</span>', 'states at US Level 3: Reconsider travel'],
    ['<span id="mx-s-uk">' + R.ukN + '</span>', 'states where the UK advises against all but essential travel (all or part)'],
    ['<span id="mx-s-ca">' + R.caN + '</span>', 'states with a Canada regional advisory to avoid non-essential travel']
  ]) +
  '<h2>🇲🇽 Travel warning Mexico: what the US, UK and Canada say about the country</h2>' +
  '<div id="mx-nat">' + R.natHtml + '</div>' +
  '<h2>🗺️ Mexico travel warning by state: US, UK and Canada levels</h2>' +
  '<p class="tw-lead">Search a state or filter by US level. The US reason is the State Department&rsquo;s own &ldquo;due to&rdquo; wording. Where the UK or Canada lists exceptions, such as a city that is outside the warning, they are shown under the level.</p>' +
  '<div id="mx-banner">' + R.banner + '</div>' +
  '<div class="tw-tools"><input type="search" id="mx-q" placeholder="Search a state, for example Quintana Roo" aria-label="Search a state" autocomplete="off"><span class="tw-count" id="mx-count">' + R.n + ' states</span></div>' +
  '<div class="tw-chips" id="mx-chips" role="group" aria-label="Filter by US level">' + R.chipsHtml + '</div>' +
  '<p class="tw-none" id="mx-none">No state matches that search.</p>' +
  '<div class="cox-tw"><table class="tw-t" id="mx-table"><thead><tr><th scope="col">State</th><th scope="col">US State Department</th><th scope="col">UK FCDO</th><th scope="col">Canada</th></tr></thead><tbody id="mx-body">' + R.rowsHtml + '</tbody></table></div>' +
  '<p class="tw-d" id="mx-note-dates">US state levels: State Department advisory issued <strong>' + esc(dShort(US.issued)) + '</strong>, read from its page on <strong>' + esc(dShort(US.checked)) + '</strong> (the State Department blocks automatic reading of this page, so we re-read it at every update of this article, and this page warns you if the US advisory changes in between). UK advice updated ' + esc(dShort(MX.uk.date)) + ' and Canada advice updated ' + esc(dShort(MX.ca.date)) + ' (both refreshed every 6 hours). Colors compare severity inside one system only.</p>' +
  '<script type="application/json" id="mx-data">' + JSON.stringify({ us: US, mx: { uk: MX.uk, ca: MX.ca }, adv: ADV }).replace(/</g, '\\u003c') + '</' + 'script>' +
  '<h2>📍 Is my destination affected? Cancún, Los Cabos, Mexico City and more</h2>' +
  '<p>A state rating covers the whole state, but the advisories often say more about the cities travelers actually visit. Each card shows the level for the state, then what the governments themselves say about that area. A destination that is not mentioned by the UK or Canada is not under their regional warnings.</p>' +
  '<div id="mx-dest">' + R.destHtml + '</div>' +
  '<h2>🛑 The real reason behind the Level 4 warnings</h2>' +
  '<p>The US puts the highest warning on states where cartels and criminal groups fight for control, and where the US government cannot help much. This is what the State Department says for each Level 4 state:</p>' +
  cl(L4.map(s => ['🚫', '<strong>' + esc(s.n) + ':</strong> Do not travel due to ' + esc(s.r) + '.' + (US.notes[s.k] ? ' ' + esc(US.notes[s.k]) : '')])) +
  '<p>Level 3 states (Reconsider travel) carry the same reasons with fewer restrictions. Read the full state text on the <a href="' + esc(US.url) + '" target="_blank" rel="noopener">State Department page</a> before you plan a road trip: it lists exactly which highways and cities US government employees may use.</p>' +
  '<h2>🚗 The rules the US tells its own staff, and advises citizens, to follow in Mexico</h2>' +
  '<p>' + esc(US.national.citizens) + ' The restrictions for US government employees are:</p>' +
  cl(US.national.restrictions.map((t, i) => [['🌙', '🚕', '👥', '🛣️'][i], esc(t)])) +
  cl([
    ['🚧', '<strong>At a road checkpoint, comply.</strong> The State Department says fleeing or ignoring instructions can lead to you being hurt or killed.'],
    ['📍', '<strong>Enroll in STEP.</strong> The State Department asks US travelers to enroll in the Smart Traveler Enrollment Program for alerts from the US embassy.'],
    ['🛡️', '<strong>Buy travel insurance.</strong> The State Department highly recommends it, with evacuation, medical and trip cancellation cover. The UK warns that insurance could be invalidated if you travel against FCDO advice.']
  ]) +
  fig(1, 'Hands on the steering wheel of a rental car at dusk on the Riviera Maya highway, with a handwritten yellow sticky note on the dashboard reading NO DRIVING BETWEEN CITIES AFTER DARK', 'The US tells its own staff not to travel between cities after dark, and advises citizens to follow the same rules.') +
  '<h2>🧭 How to read a Mexico travel warning</h2>' +
  cl([
    ['🔍', '<strong>Read the state, not the country.</strong> A Level 2 country can contain a Level 4 state, and a Level 4 state can contain a city the UK or Canada treats as an exception.'],
    ['✈️', '<strong>Check how you arrive.</strong> Several exceptions only apply if you travel by air or sea, for example Mazatlán and Manzanillo. Driving there is not covered by the exception.'],
    ['🗺️', '<strong>Compare all three columns.</strong> The US, UK and Canada weigh crime differently, so the same state can be at different levels.'],
    ['📅', '<strong>Check the dates.</strong> A fresh date after a news event is a sign to read the full advice again.']
  ]) +
  fig(2, 'Traveler walking off a cruise ship at the Mazatlan cruise terminal past a wayfinding sign pointing to Centro Historico and Zona Dorada', 'In Mazatlán the exceptions to the warnings apply only if you arrive by air or sea.') +
  '<p>For the full list of countries see <a href="/blog/travel-warning-by-country-2026/">travel warning by country</a>, for the highest level see <a href="/blog/level-4-travel-advisory-countries-2026/">Level 4 travel advisory countries</a>, and for Mexico&rsquo;s entry, customs and money rules see our <a href="/country/mexico/">Mexico page</a>.</p>' +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Is there a travel warning for Mexico?', 'Yes, but not one for the whole country. The US rates Mexico as a whole at Level 2, &ldquo;exercise increased caution&rdquo;, and rates individual states from Level 1 to Level 4. The UK and Canada warn against travel to specific states and areas. The table above shows every state.'],
    ['Which Mexican states have a Level 4 travel warning?', 'At our last check (' + esc(dShort(US.checked)) + ') the US listed six states at Level 4, Do not travel: ' + L4.map(s => esc(s.n)).join(', ') + '. The table above is the current reference.'],
    ['Is it safe to travel to Mexico right now?', 'It depends on the state and on where you go inside it. The US says many violent crimes take place in Mexico, and also that conditions vary widely from state to state. Check the state in the table and the destination cards, then read the government&rsquo;s own advice.'],
    ['Is Cancún under a travel warning?', 'Cancún is in Quintana Roo, which the US rates Level 2. The UK and Canada do not list Quintana Roo in their regional warnings. The US still warns about crime and says to stay in well-lit pedestrian streets and tourist zones after dark.'],
    ['Is Mexico City safe to visit?', 'The US rates Mexico City Level 2 and says to exercise extra caution, especially at night, outside popular tourist areas. The UK and Canada do not list it in their regional warnings.'],
    ['What does Level 2 mean for Mexico?', 'In the US system Level 2 is &ldquo;exercise increased caution&rdquo;. For Mexico it is the national level, and some states carry Level 3 or 4 on top of it.'],
    ['Does a travel warning stop me from traveling to Mexico?', 'No. These are advice, not a legal ban. They can still matter for your travel insurance, so check your policy.'],
    ['Where does this page get its levels?', 'The national levels and the UK and Canada regions come from the official US, UK and Canadian sources and refresh every 6 hours. The US state levels are read from the State Department page at each update of this article, and the page warns you if the US advisory changes in between.']
  ]) +
  '<p><em>Checked October 2026 from official government data. Advice can change within hours in a crisis: always confirm on the government&rsquo;s own page before you travel.</em></p>' +
  SRC([
    ['https://travel.state.gov/en/international-travel/travel-advisories/mexico.html', 'US State Department &mdash; Mexico travel advisory'],
    ['https://www.gov.uk/foreign-travel-advice/mexico', 'GOV.UK &mdash; Mexico travel advice (FCDO)'],
    ['https://travel.gc.ca/destinations/mexico', 'Government of Canada &mdash; Mexico travel advice and advisories']
  ]) +
  '<script>var TWC=' + JSON.stringify(TWC) + ';var MXC=' + JSON.stringify({ us: US, mx: { uk: MX.uk, ca: MX.ca }, adv: ADV, dest: DEST }).replace(/<\//g, '<\\/') + ';' + fs.readFileSync(path.join(__dirname, 'mexico_shared.js'), 'utf8').replace(/if \(typeof module[^\n]*\n?/, '') + fs.readFileSync(path.join(__dirname, 'mexico_client.js'), 'utf8') + '</' + 'script>';

module.exports = {
  slug: SLUG,
  title: 'Travel Warning Mexico (2026): State-by-State US, UK and Canada Advisory Levels | canitakethis.co',
  desc: 'Travel warning Mexico: the US, UK and Canada advisory level for every state, the real reason for each Level 4 state, and what they say about Cancún and Los Cabos.',
  h1: 'Travel Warning Mexico (2026): State-by-State US, UK and Canada Advisory Levels',
  body
};
