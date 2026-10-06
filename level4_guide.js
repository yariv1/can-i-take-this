// Article 51 (Travel Safety): Level 4 travel advisory countries (2026): live US "Do Not Travel" list with the real reason, UK and Canada beside it.
// Intent (SERP checked Oct 2026: Newsweek, AXA, Yahoo, Squaremouth): "which countries are at Level 4 right now, why, and can/should I go".
// Data: level4.json (update_advisories.js: every destination the US State Dept feed rates Level 3 or 4, with the advisory's own "due to ..." reason,
// the US help/embassy statements, UK FCDO status via the GOV.UK content API and the Canada data feed), refreshed every 6 hours.
// Level definitions: travel.gc.ca (read in full), GOV.UK FCDO (warnings-and-insurance part). Checked October 2026.
const fs = require('fs');
const path = require('path');
const H = require('./carryon_pages.js').__helpers;
const { CSS, SRC, stat, callout, cl, faq } = H;
const l4Render = require('./level4_shared.js');
const TW = require('./travel_warning_guide.js');

const SLUG = 'level-4-travel-advisory-countries-2026';
const L = JSON.parse(fs.readFileSync(path.join(__dirname, 'level4.json'), 'utf8'));
if (!L.countries || !Object.keys(L.countries).length) throw new Error('level4_guide: level4.json is empty (run update_advisories.js)');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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

const slugify = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const LINKS = {};
Object.keys(L.countries).forEach(k => { const s = slugify(L.countries[k].name); if (fs.existsSync(path.join(__dirname, 'country', s, 'index.html'))) LINKS[k] = '/country/' + s + '/'; });
LINKS.haiti = '/blog/travel-warning-caribbean-2026/';

const R = l4Render(L.countries, TWC, LINKS);

const meta = `<div class="art-meta"><span class="tag tag-neutral">Travel Safety</span><span class="art-meta-sep">&middot;</span><span>Levels checked <span id="l4-updated">${esc(stamp(L.updated))}</span></span><span class="art-meta-sep">&middot;</span><span>8 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Traveler in the Doha Hamad departures hall holding up a tablet that shows a red LEVEL 4: DO NOT TRAVEL list of five countries with the reason for each, looking at the camera with raised eyebrows" width="800" height="400"><figcaption>Check the reason and the level before you book, not after.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const CSS4 = '<style>.l4-grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));margin:1em 0}.l4-card{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px;display:flex;flex-direction:column;gap:10px}.l4-card[hidden],.l4-l3 li[hidden]{display:none}' +
  '.l4-card h3{margin:0;font-size:1.15rem;display:flex;align-items:center;gap:8px}.l4-card h3 img{border-radius:3px;flex:none}.l4-card h3 a{color:var(--text);text-decoration:none}.l4-card h3 a:hover{color:var(--accent);text-decoration:underline}.l4-card p{margin:0;font-size:.95rem}' +
  '.cb-pills{display:flex;flex-direction:column;gap:6px}.l4-p{cursor:default;margin:0;max-width:none;align-self:stretch}.l4-p:hover{box-shadow:none}.l4-h{font-weight:700;font-size:.9rem;margin:2px 0 -4px!important;color:var(--muted)}' +
  '.l4-help{margin:0;padding-left:1.1em;font-size:.95rem;font-weight:300}.l4-help li{margin:.25em 0}.l4-rule{border-left:3px solid #FF6B6B;padding-left:10px;font-weight:300}.l4-why strong,.l4-rule strong,.l4-uk strong{font-weight:600}.l4-why,.l4-uk{font-weight:300}' +
  '.l4-foot{margin-top:auto;font-size:.9rem}.l4-card .tw-d a{color:var(--accent)}' +
  '.l4-l3{list-style:none;margin:1em 0;padding:0;display:grid;gap:8px}.l4-l3 li{border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:10px 12px;display:grid;gap:6px;grid-template-columns:minmax(150px,1fr) 2fr minmax(200px,1.2fr);align-items:start;font-size:.95rem}.l4-l3n{display:flex;align-items:center;gap:8px;font-weight:600}.l4-l3n img{border-radius:3px}.l4-l3n a{color:var(--text);text-decoration:none}.l4-l3n a:hover{color:var(--accent);text-decoration:underline}.l4-l3w{font-weight:300}.l4-l3p{gap:4px}' +
  '@media(max-width:760px){.l4-l3 li{grid-template-columns:1fr}}' +
  '.cb-mid{list-style:none;margin:1em 0;padding:0;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.cb-mid li{border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:10px 12px;display:flex;flex-direction:column;gap:2px;font-size:.95rem}.cb-mid a{color:var(--text);text-decoration:none}.cb-mid a:hover{color:var(--accent);text-decoration:underline}.cb-mid .tw-d{color:var(--text);font-weight:300;font-size:.95rem}' +
  '.l4-det{list-style:none;margin:1em 0;padding:0;display:flex;flex-wrap:wrap;gap:8px}.l4-det li{border:1px solid #FF6B6B;border-radius:999px;padding:6px 14px;background:var(--surface);font-weight:600;font-size:.95rem}.l4-det a{color:var(--text);text-decoration:none}.l4-det a:hover{text-decoration:underline}</style>';

const body = CSS + TW.__css + CSS4 + meta + hero +
  '<p><strong>Level 4 means &ldquo;Do Not Travel&rdquo;: the US State Department&rsquo;s highest advisory, used where the risks can be life-threatening or where the US government can do very little to help you.</strong> The list below is built straight from the State Department feed and re-checked every 6 hours, so it shows the countries at Level 4 <em>today</em>, not the ones a news article listed last year. For each country you get the reason the US gives in its own words, what help to expect if something goes wrong, and what the UK and Canada say, so you can decide whether to go.</p>' +
  stat([
    ['<span id="l4-s-us4">' + R.us4 + '</span>', 'destinations at US Level 4: Do not travel'],
    ['<span id="l4-s-ukwhole">' + R.ukWhole + '</span>', 'of them the UK advises against all travel to, in the whole country'],
    ['<span id="l4-s-caavoid">' + R.caAvoid + '</span>', 'of them Canada says: avoid all travel'],
    ['<span id="l4-s-us3">' + R.us3 + '</span>', 'more at Level 3: reconsider travel']
  ]) +
  '<h2>🚫 Countries with a Level 4 travel advisory right now</h2>' +
  '<p class="tw-lead">Every card is one destination at US Level 4. The reason is the State Department&rsquo;s own &ldquo;due to&rdquo; wording from the advisory headline. Filter by region or search a country below.</p>' +
  '<div class="tw-tools"><input type="search" id="l4-q" placeholder="Search a country, for example Russia" aria-label="Search a country" autocomplete="off"><span class="tw-count" id="l4-count">' + R.us4 + ' countries</span></div>' +
  '<div class="tw-chips" id="l4-chips" role="group" aria-label="Filter by region">' + R.chipsHtml + '</div>' +
  '<p class="tw-none" id="l4-none">No Level 4 or Level 3 country matches that search and region.</p>' +
  '<div id="l4-cards">' + R.l4Html + '</div>' +
  '<p class="tw-d">The list is every destination the US rates Level 4. Gaza is a territory, not a country, and is listed because the State Department rates it separately. The UK and Canada rate some of these destinations by region, so check the full advice for the exact areas. Colors compare severity inside one system only.</p>' +
  '<h2>🧭 Where the US, UK and Canada disagree</h2>' +
  '<p>The three governments rarely match exactly. A destination can be at US Level 4 while Canada is one step lower, or while the UK warns against only part of the country. These are the Level 4 destinations where at least one of them is not at its top level for the whole country. This list updates with the cards above.</p>' +
  '<div id="l4-dis">' + R.disHtml + '</div>' +
  '<p>Read the difference as a question to answer, not a loophole: ask which government has the most recent update and what it says about the specific area you would visit.</p>' +
  '<h2>⚖️ Do not travel countries: what Level 4 means and whether you can still go</h2>' +
  cl([
    ['🇺🇸', '<strong>United States, Level 4: Do not travel.</strong> The highest of four levels. Many Level 4 advisories also say the US government has very limited ability, or none, to help Americans there. The card for each country shows what that advisory says.'],
    ['🇨🇦', '<strong>Canada, Avoid all travel.</strong> Canada&rsquo;s wording: you should not travel to this country, territory or region because your personal safety and security are at great risk, and if you are already there you should think about leaving if it is safe to do so.'],
    ['🇬🇧', '<strong>UK, FCDO advises against all travel.</strong> The UK has its own scale: &ldquo;advises against all travel&rdquo; is its top warning, &ldquo;advises against all but essential travel&rdquo; is one step lower, and either can apply to the whole country or only to parts of it.'],
    ['📜', '<strong>These are advice, not a legal ban.</strong> No government stops you at the border for traveling to a Level 4 country. Some advisories do add real rules on top of the advice, such as a passport restriction or a flight rule for travelers returning to the US. Those appear in the cards as &ldquo;Rule beyond the advice&rdquo;.'],
    ['🛡️', '<strong>Insurance is the practical limit.</strong> The UK government warns that your travel insurance could be invalidated if you travel against FCDO advice. Check your own policy before you book: only your insurer can tell you what is covered.']
  ]) +
  fig(1, 'Insurance agent behind a counter speaking to a customer seen from behind, with a leaflet stand beside them saying a travel insurance policy could be invalid if you travel against FCDO advice', 'Check your policy before you book: travel against government advice can invalidate it.') +
  '<h2>🔒 Level 4 and wrongful detention: the risk to check first</h2>' +
  '<p>For some destinations the main danger is not crime but being arrested or held, and a government with no embassy access can do very little about it. These are the Level 4 destinations where the State Department names detention or arbitrary arrest as a reason. This list updates with the cards above.</p>' +
  '<ul class="l4-det" id="l4-det">' + R.detHtml + '</ul>' +
  '<p>If a country is on this list, read the full advisory for what it says about dual nationals, electronic devices and consular access before you decide.</p>' +
  '<h2>🟧 Level 3 countries: &ldquo;reconsider travel&rdquo; is one step below</h2>' +
  '<p>Level 3 is the step below Do Not Travel, and it includes destinations that many travelers do visit. A country can move between 3 and 4 when conditions change, so this list is built the same way and updates with it. The reason shown is the State Department&rsquo;s own wording.</p>' +
  '<div id="l4-l3">' + R.l3Html + '</div>' +
  '<p>For every other country, see the full table in <a href="/blog/travel-warning-by-country-2026/">travel warning by country</a>, and for the islands see <a href="/blog/travel-warning-caribbean-2026/">travel warning Caribbean</a>.</p>' +
  '<h2>🧳 If you decide to travel anyway, or you are already there</h2>' +
  cl([
    ['🚪', '<strong>Plan an exit that does not depend on an embassy.</strong> For Libya the State Department says it cannot offer emergency services, and it advises travelers to high-risk areas to have their own plan to leave. Read the &ldquo;help if something goes wrong&rdquo; line on the card of your destination.'],
    ['📝', '<strong>Prepare the paperwork.</strong> For high-risk destinations the State Department advises a will and end-of-life instructions, a power of attorney, and sharing important documents and logins with someone at home.'],
    ['📞', '<strong>Agree a communication plan.</strong> The State Department also advises a &ldquo;proof of life&rdquo; protocol with family for kidnapping or detention, and leaving a DNA sample with a medical provider.'],
    ['📍', '<strong>Enroll with your government.</strong> US citizens can enroll a trip in STEP, the State Department&rsquo;s Smart Traveler Enrollment Program; Canadians can register a trip with Global Affairs Canada. Neither is a guarantee of rescue.'],
    ['🩺', '<strong>Check insurance and medical evacuation.</strong> Read the exclusions for war, terrorism and travel against advice, and confirm medical evacuation is covered. Many Level 4 advisories describe very limited local health care.'],
    ['🔁', '<strong>Check again the day you leave.</strong> A level can change within hours in a crisis. This page re-checks every 6 hours, but your government&rsquo;s own page is the final word.']
  ]) +
  fig(2, 'Woman at a home desk signing a document beside a binder labelled IF I DON&rsquo;T CALL: WILL, POWER OF ATTORNEY, LOGINS, with a sticky note about a proof of life question', 'Paperwork and a communication plan come before the flight, not after.') +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['What is a Level 4 travel advisory?', 'It is the highest of the four levels used by the US State Department, called &ldquo;Do Not Travel&rdquo;. It is used where the risks can be life-threatening or where the US government has very limited ability to help Americans. It is advice, not a legal ban.'],
    ['Which countries have a Level 4 travel advisory?', 'The section &ldquo;Countries with a Level 4 travel advisory right now&rdquo; above lists every destination the State Department rates Level 4, with its reason. The list is rebuilt from the official feed every 6 hours, so it is current.'],
    ['What are the &ldquo;do not travel&rdquo; countries?', '&ldquo;Do not travel&rdquo; is the State Department&rsquo;s wording for Level 4. The UK says &ldquo;advises against all travel&rdquo; and Canada says &ldquo;avoid all travel&rdquo;. The cards show all three for each country.'],
    ['What is the difference between Level 3 and Level 4?', 'Level 3 is &ldquo;reconsider travel&rdquo; and Level 4 is &ldquo;do not travel&rdquo;. Level 4 is used for the most serious risks, and often where the US can provide little or no emergency help.'],
    ['Is it illegal to travel to a Level 4 country?', 'Generally no: advisories are advice. Some advisories add real rules, for example a restriction on using a US passport for a destination or a rule for flying back to the US. Those are shown on the country&rsquo;s card as &ldquo;Rule beyond the advice&rdquo;.'],
    ['Will my travel insurance cover me in a Level 4 country?', 'Often not by default. The UK government warns that insurance could be invalidated if you travel against FCDO advice. Read your policy&rsquo;s exclusions and ask your insurer before you book.'],
    ['What should I do if I am already in a Level 4 country?', 'Read the card for your country: some advisories tell citizens to leave immediately, and Canada says to think about leaving if it is safe to do so. Enroll with your government&rsquo;s traveler program, tell family where you are, and follow instructions from your embassy.'],
    ['Where does the reason for each country come from?', 'From the US State Department advisory itself: the &ldquo;due to&rdquo; line in the headline and the statements about embassy help. The UK status comes from the GOV.UK foreign travel advice API and Canada&rsquo;s from its travel advice data. Nothing is typed in by hand.']
  ]) +
  '<p><em>Checked October 2026 from official government data. Advice can change within hours in a crisis: always confirm on the government&rsquo;s own page before you travel.</em></p>' +
  SRC([
    ['https://travel.state.gov/en/international-travel/travel-advisories.html', 'US State Department &mdash; Travel advisories'],
    ['https://travel.state.gov/en/international-travel/travel-advisories/high-risk-areas.html', 'US State Department &mdash; Travel to high-risk areas'],
    ['https://www.gov.uk/foreign-travel-advice', 'GOV.UK &mdash; Foreign travel advice (FCDO)'],
    ['https://travel.gc.ca/travelling/advisories', 'Government of Canada &mdash; Travel advice and advisories']
  ]) +
  '<script>var TWC=' + JSON.stringify(TWC) + ';var L4C=' + JSON.stringify({ links: LINKS }) + ';' + fs.readFileSync(path.join(__dirname, 'level4_shared.js'), 'utf8').replace(/if \(typeof module[^\n]*\n?/, '') + fs.readFileSync(path.join(__dirname, 'level4_client.js'), 'utf8') + '</' + 'script>';

module.exports = {
  slug: SLUG,
  title: 'Level 4 Travel Advisory Countries (2026): Live List of US Do Not Travel Countries | canitakethis.co',
  desc: 'Level 4 travel advisory countries: the live US Do Not Travel list with the real reason for each, plus UK and Canada levels, updated every 6 hours.',
  h1: 'Level 4 Travel Advisory Countries (2026): Live List of US Do Not Travel Countries',
  body
};
