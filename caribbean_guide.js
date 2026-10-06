// Article 50 (Travel Safety): Travel warning Caribbean (2026): which islands have a US, UK or Canada advisory.
// Intent (SERP checked Oct 2026): "which Caribbean islands carry a government warning right now, and how serious". One live table of
// 25 Caribbean islands and territories + the islands that carry a warning + hurricane season. Data: advisories.json (US State Dept feed,
// GOV.UK content API, Canada), refreshed every 6 hours. Hurricane dates: NOAA National Hurricane Center. Checked October 2026.
const fs = require('fs');
const path = require('path');
const H = require('./carryon_pages.js').__helpers;
const { CSS, SRC, stat, callout, cl, faq } = H;
const cbRender = require('./caribbean_shared.js');
const TW = require('./travel_warning_guide.js');

const SLUG = 'travel-warning-caribbean-2026';
const A = JSON.parse(fs.readFileSync(path.join(__dirname, 'advisories.json'), 'utf8'));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
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

// Caribbean islands and territories (ISO code -> group). Group is stable (political status), never a level, so the filter chips cannot go stale.
const IND = 'Independent countries', TER = 'Territories and dependencies';
const GROUP = { AG: IND, BS: IND, BB: IND, CU: IND, DM: IND, DO: IND, GD: IND, HT: IND, JM: IND, KN: IND, LC: IND, VC: IND, TT: IND,
  AI: TER, AW: TER, VG: TER, KY: TER, CW: TER, GP: TER, MQ: TER, MS: TER, BL: TER, MF: TER, SX: TER, TC: TER };
const codes = Object.keys(GROUP);
const missing = codes.filter(c => !A.countries[c] || !A.countries[c].us || !A.countries[c].uk || !A.countries[c].ca);
if (missing.length) throw new Error('caribbean_guide: advisories.json is incomplete for ' + missing.join(', ') + ' (run update_advisories.js)');
const N = codes.length;
const rows = codes.map(c => ({ c, o: A.countries[c] })).sort((a, b) => a.o.name.localeCompare(b.o.name));
const LINKS = {};
codes.forEach(c => { if (fs.existsSync(path.join(__dirname, 'country', slugify(A.countries[c].name), 'index.html'))) LINKS[c] = '/country/' + slugify(A.countries[c].name) + '/'; });
LINKS.TC = '/blog/is-turks-and-caicos-safe-2026/';

// table cells: same markup as the client of article 48 (travel_warning_client.js re-renders them from /advisories.json)
const btn = (sys, lvl, inner, extra) => '<button type="button" class="tw-p tw-s' + lvl + '" data-s="' + sys + '"' + (extra || '') + ' aria-haspopup="dialog">' + inner + '</button>';
const dd = iso => dShort(iso) ? '<span class="tw-d">' + dShort(iso) + '</span>' : '';
const usCell = o => btn('us', o.level, '<b>Level ' + o.level + '</b><span>' + US_NAMES[o.level] + '</span>') + dd(o.date);
const caCell = o => btn('ca', o.level, '<b>' + CA_NAMES[o.level] + '</b>' + (o.regional ? '<span>+ regional advisories</span>' : '')) + dd(o.date);
const ukCell = o => {
  const st = (o.status || []).filter(s => UK_ST[s]);
  return (st.length ? st.map(s => btn('uk', UK_ST[s][1], '<b>' + UK_ST[s][0] + '</b>', ' data-st="' + s + '"')).join('') : btn('uk', 1, '<b>No warning</b>', ' data-st="none"')) + dd(o.date);
};
const rowsHtml = rows.map(({ c, o }) => {
  const nm = LINKS[c] ? '<a href="' + LINKS[c] + '">' + esc(o.name) + '</a>' : esc(o.name);
  return '<tr data-n="' + esc(o.name.toLowerCase()) + '" data-c="' + c + '" data-ct="' + GROUP[c] + '"><th scope="row"><img src="https://flagcdn.com/w40/' + c.toLowerCase() + '.png" alt="" width="22" height="16" loading="lazy">' + nm + '</th><td data-k="us">' + usCell(o.us) + '</td><td data-k="uk">' + ukCell(o.uk) + '</td><td data-k="ca">' + caCell(o.ca) + '</td></tr>';
}).join('');

const R = cbRender(A.countries, codes, TWC, LINKS);

const meta = `<div class="art-meta"><span class="tag tag-neutral">Travel Safety</span><span class="art-meta-sep">&middot;</span><span id="tw-updated-meta">Levels checked ${esc(stamp(A.updated))}</span><span class="art-meta-sep">&middot;</span><span>7 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Cruise terminal information officer in Bridgetown, Barbados, pointing at a wall screen with a Caribbean map shaded red, orange and yellow by travel advisory level while a couple reads the warnings" width="800" height="400"><figcaption>Compare all three governments for the island you plan to visit.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const CSS3 = '<style>.cb-grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin:1em 0}.cb-card{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px;display:flex;flex-direction:column;gap:10px}.cb-card h3{margin:0;font-size:1.1rem}.cb-card h3 a{color:var(--text);text-decoration:none}.cb-card h3 a:hover{color:var(--accent);text-decoration:underline}.cb-card p{margin:0;font-size:.95rem}.cb-pills{display:flex;flex-direction:column;gap:6px}.cb-p{cursor:default;margin:0;max-width:none;align-self:stretch}.cb-p:hover{box-shadow:none}' +
  '.cb-mid{list-style:none;margin:1em 0;padding:0;display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.cb-mid li{border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:10px 12px;display:flex;flex-direction:column;gap:2px;font-size:.95rem}.cb-mid a{color:var(--text);text-decoration:none}.cb-why{font-size:.9rem;color:var(--text);margin-top:4px}.cb-mid a:hover{color:var(--accent);text-decoration:underline}.cb-mid .tw-d{color:var(--text);font-weight:300;font-size:.95rem}</style>';

const body = CSS + TW.__css + CSS3 + meta + hero +
  '<p><strong>A travel warning for the Caribbean is not one warning: each island gets its own rating from each government.</strong> Most Caribbean islands carry the mildest US rating, a few are at increased caution because of crime, and a small number carry a serious warning. The table below puts the US, UK and Canadian level for ' + N + ' islands and territories side by side, using each government&rsquo;s own data, re-checked every 6 hours. Hurricane season (June 1 to November 30) is a separate risk that applies to every island, and crime is the usual reason behind a Level 2 rating.</p>' +
  stat([
    ['<span id="cb-s-us3">' + R.us3 + '</span>', 'of <span id="cb-s-n">' + R.n + '</span> islands at US Level 3 or 4'],
    ['<span id="cb-s-uk">' + R.uk + '</span>', 'with a UK warning against travel (all or part)'],
    ['<span id="cb-s-ca3">' + R.ca3 + '</span>', 'at Canada&rsquo;s two highest levels'],
    ['6 hours', 'between automatic checks of the official feeds']
  ]) +
  '<h2>🏝️ Caribbean travel advisory level for every island</h2>' +
  '<p class="tw-lead">Search an island or filter by status. Click or tap any level to read what that government says about it.</p>' +
  '<div class="tw-tools"><input type="search" id="tw-q" placeholder="Search an island, for example Jamaica" aria-label="Search an island" autocomplete="off"><span class="tw-count" id="tw-count" data-one="island" data-many="islands">' + N + ' islands</span></div>' +
  '<div class="tw-chips" id="tw-chips" role="group" aria-label="Filter by status"><button type="button" class="tw-chip" data-ct="" aria-pressed="true">All <span>' + N + '</span></button>' + [IND, TER].map(k => '<button type="button" class="tw-chip" data-ct="' + k + '" aria-pressed="false">' + k + ' <span>' + codes.filter(c => GROUP[c] === k).length + '</span></button>').join('') + '</div>' +
  '<p class="tw-none" id="tw-none">No island matches that name.</p>' +
  '<div class="cox-tw"><table class="tw-t" id="tw-table"><thead><tr><th scope="col">Island</th><th scope="col">US State Department</th><th scope="col">UK FCDO</th><th scope="col">Canada</th></tr></thead><tbody>' + rowsHtml + '</tbody></table></div>' +
  '<p class="tw-d" id="tw-note">Official feeds last checked <strong id="tw-updated">' + esc(stamp(A.updated)) + '</strong>. The date under each level is when that government last updated its advice. Colors compare severity inside one system only: a yellow in one column is not the same warning as a yellow in another. Puerto Rico and the US Virgin Islands are not listed because the US does not rate its own territories.</p>' +
  '<script type="application/json" id="tw-data">' + JSON.stringify({ countries: Object.fromEntries(codes.map(c => [c, A.countries[c]])) }).replace(/</g, '\\u003c') + '</' + 'script>' +
  '<h2>⚠️ Caribbean islands with a travel warning right now</h2>' +
  '<p>These islands are at US Level 3 or 4, at Canada&rsquo;s Level 3 or 4, or under a UK warning against all or part of travel. The reason shown is the government&rsquo;s own wording. This list updates with the table.</p>' +
  '<div id="cb-hot">' + R.hotHtml + '</div>' +
  '<h2>🟡 Islands at increased caution</h2>' +
  '<p>A Level 2 rating is the most common &ldquo;warning&rdquo; in the Caribbean. It does not mean the island is closed or dangerous everywhere: the US uses it for popular, heavily visited destinations too, usually because of crime or weather. These islands are at US Level 2 or Canada&rsquo;s &ldquo;high caution&rdquo;.</p>' +
  '<div id="cb-mid">' + R.midHtml + '</div>' +
  '<p>Everything else in the table is at normal precautions with all three governments that rate it. For the full story on one island that sits at Level 2, read <a href="/blog/is-turks-and-caicos-safe-2026/">is Turks and Caicos safe</a>.</p>' +
  fig(1, 'Tourist at the Nassau Straw Market holding up a straw hat with a vendor while a man behind her unzips the side pocket of her backpack', 'Most Level 2 ratings in the Caribbean are about crime.') +
  '<h2>🌀 Hurricane season: the warning that applies to every island</h2>' +
  '<p>No government level reflects the weather, so check it separately. NOAA&rsquo;s National Hurricane Center says the Atlantic hurricane season, which includes the Caribbean Sea, runs from <strong>June 1 to November 30</strong>, with the peak around <strong>September 10</strong> and most activity from mid-August to mid-October.</p>' +
  cl([
    ['📡', 'Check the <a href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener">National Hurricane Center</a> before and during a trip in those months.'],
    ['📑', 'Read your airline&rsquo;s, hotel&rsquo;s and insurer&rsquo;s terms for storm cancellations before you book.'],
    ['🏛️', 'If a storm is forecast, follow instructions from local authorities and your embassy.']
  ]) +
  fig(2, 'Stranded travelers under an airport departures board showing every flight cancelled while an airline agent tells a couple about storm cancellations', 'Read your airline&rsquo;s and hotel&rsquo;s storm cancellation terms before you book.') +
  '<h2>🧭 How to read a Caribbean travel warning</h2>' +
  cl([
    ['🔍', '<strong>Compare all three columns.</strong> The US, UK and Canada can rate the same island differently, because each weighs crime, health and politics in its own way.'],
    ['🗺️', '<strong>Check for regional advisories.</strong> Canada marks them with &ldquo;+ regional advisories&rdquo; and the UK marks &ldquo;(parts)&rdquo;: a rating for an island can hide a much higher risk in one area.'],
    ['📅', '<strong>Read the date.</strong> A fresh date after a news event is a sign to read the full advice again.'],
    ['🛡️', '<strong>Think about insurance.</strong> The UK warns that your travel insurance could be invalidated if you travel against FCDO advice, and only your insurer can say whether a claim is valid.']
  ]) +
  '<p>How the three scales work, and the full table for more than 80 countries, is on our <a href="/blog/travel-warning-by-country-2026/">travel warning by country</a> page.</p>' +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Is there a Caribbean travel advisory or travel warning?', 'There is no single Caribbean travel advisory for the whole region. The US, UK and Canada each rate every island separately, so the level depends on the island and the government. The table above shows all of them and refreshes every 6 hours.'],
    ['Which Caribbean islands have a travel warning?', 'The section &ldquo;Caribbean islands with a travel warning right now&rdquo; above lists every island at US Level 3 or 4, Canada Level 3 or 4, or under a UK warning against travel. It is rebuilt from the official feeds, so it stays current.'],
    ['Is it safe to travel to the Caribbean right now?', 'It depends on the island. Most islands are at normal precautions with all three governments, a few are at increased caution because of crime, and a small number carry a serious warning. Check the island you plan to visit in the table, then read the government&rsquo;s own page.'],
    ['What does a Level 2 travel advisory mean in the Caribbean?', 'The US says Level 2 is &ldquo;exercise increased caution&rdquo;. It is used for many popular destinations and usually points to crime or weather, not a ban.'],
    ['What do Level 3 and Level 4 mean?', 'In the US system Level 3 is &ldquo;reconsider travel&rdquo; and Level 4 is &ldquo;do not travel&rdquo;. Canada&rsquo;s equivalents are &ldquo;avoid non-essential travel&rdquo; and &ldquo;avoid all travel&rdquo;. The UK uses &ldquo;advise against all but essential travel&rdquo; and &ldquo;advise against all travel&rdquo;.'],
    ['When is Caribbean hurricane season?', 'NOAA says the Atlantic hurricane season runs from June 1 to November 30, with the peak around September 10.'],
    ['Does a travel warning stop me from traveling?', 'No. These are advice, not bans. They can still affect your travel insurance, so check your policy.'],
    ['Where does this page get its levels?', 'From the US State Department feed, the UK government&rsquo;s content API for FCDO travel advice and Canada&rsquo;s travel advice data. Nothing is entered by hand.']
  ]) +
  '<p><em>Checked October 2026 from official government data. Advice can change within hours in a crisis: always confirm on the government&rsquo;s own page before you travel.</em></p>' +
  SRC([
    ['https://travel.state.gov/en/international-travel/travel-advisories.html', 'US State Department &mdash; Travel advisories'],
    ['https://www.gov.uk/foreign-travel-advice', 'GOV.UK &mdash; Foreign travel advice (FCDO)'],
    ['https://travel.gc.ca/travelling/advisories', 'Government of Canada &mdash; Travel advice and advisories'],
    ['https://www.nhc.noaa.gov/climo/', 'NOAA National Hurricane Center &mdash; Climatology: hurricane season']
  ]) +
  '<script>var TWC=' + JSON.stringify(TWC) + ';var CBC=' + JSON.stringify({ codes, links: LINKS }) + ';' + fs.readFileSync(path.join(__dirname, 'caribbean_shared.js'), 'utf8').replace(/if \(typeof module[^\n]*\n?/, '') + fs.readFileSync(path.join(__dirname, 'travel_warning_client.js'), 'utf8') + fs.readFileSync(path.join(__dirname, 'caribbean_client.js'), 'utf8') + '</' + 'script>';

module.exports = {
  slug: SLUG,
  title: 'Travel Warning Caribbean (2026): Which Islands Have a US, UK or Canada Advisory | canitakethis.co',
  desc: 'Travel warning Caribbean: the live US, UK and Canada advisory level for ' + N + ' islands, which ones carry a warning, and hurricane season dates.',
  h1: 'Travel Warning Caribbean (2026): Which Islands Have a US, UK or Canada Advisory',
  body
};
