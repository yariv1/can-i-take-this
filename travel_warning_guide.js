// Article 48 (Travel Safety): Travel warning by country (2026): current US, UK and Canada advisory levels.
// Data: advisories.json (update_advisories.js: US State Dept data feed, UK GOV.UK content API, Canada data.international.gc.ca),
// level definitions from travel.gc.ca and gov.uk. Checked October 2026.
const fs = require('fs');
const path = require('path');
const H = require('./carryon_pages.js').__helpers;
const { CSS, SRC, stat, callout, cl, faq } = H;

const SLUG = 'travel-warning-by-country-2026';
const A = JSON.parse(fs.readFileSync(path.join(__dirname, 'advisories.json'), 'utf8'));
const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dShort = iso => { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || ''); return m ? MON[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : ''; };
const stamp = iso => { const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(iso || ''); return m ? (+m[3]) + ' ' + MON[+m[2] - 1] + ' ' + m[1] + ', ' + m[4] + ':' + m[5] + ' UTC' : ''; };

const US_NAMES = ['', 'Normal precautions', 'Increased caution', 'Reconsider travel', 'Do not travel'];
const CA_NAMES = ['', 'Normal precautions', 'High caution', 'Avoid non-essential travel', 'Avoid all travel'];
// UK: GOV.UK alert_status values, with a severity rank for the colour (colours compare severity inside one system only)
const UK_ST = {
  avoid_all_but_essential_travel_to_parts: ['Essential travel only (parts)', 2],
  avoid_all_travel_to_parts: ['Avoid all travel (parts)', 3],
  avoid_all_but_essential_travel_to_whole_country: ['Essential travel only', 3],
  avoid_all_travel_to_whole_country: ['Avoid all travel', 4]
};

const btn = (sys, lvl, inner, extra) => '<button type="button" class="tw-p tw-s' + lvl + '" data-s="' + sys + '"' + (extra || '') + ' aria-haspopup="dialog">' + inner + '</button>';
const dd = iso => dShort(iso) ? '<span class="tw-d">' + dShort(iso) + '</span>' : '';
const usCell = o => o ? btn('us', o.level, '<b>Level ' + o.level + '</b><span>' + US_NAMES[o.level] + '</span>') + dd(o.date) : '<span class="tw-n">No advisory for itself</span>';
const caCell = o => o ? btn('ca', o.level, '<b>' + CA_NAMES[o.level] + '</b>' + (o.regional ? '<span>+ regional advisories</span>' : '')) + dd(o.date) : '<span class="tw-n">No advisory for itself</span>';
const ukCell = o => {
  if (!o) return '<span class="tw-n">No advice for itself</span>';
  const st = (o.status || []).filter(s => UK_ST[s]);
  const pills = st.length ? st.map(s => btn('uk', UK_ST[s][1], '<b>' + UK_ST[s][0] + '</b>', ' data-st="' + s + '"')).join('') : btn('uk', 1, '<b>No warning</b>', ' data-st="none"');
  return pills + dd(o.date);
};

const CONT = {"FR":"Europe","DE":"Europe","IT":"Europe","ES":"Europe","GR":"Europe","NL":"Europe","CH":"Europe","PT":"Europe","AT":"Europe","BE":"Europe","PL":"Europe","IE":"Europe","SE":"Europe","NO":"Europe","DK":"Europe","FI":"Europe","IS":"Europe","CZ":"Europe","HU":"Europe","RO":"Europe","BG":"Europe","HR":"Europe","SI":"Europe","SK":"Europe","RS":"Europe","UA":"Europe","RU":"Europe","MT":"Europe","LU":"Europe","EE":"Europe","LV":"Europe","LT":"Europe","GB":"Europe","IL":"Asia","JP":"Asia","AE":"Asia","TH":"Asia","TR":"Asia","IN":"Asia","CN":"Asia","KR":"Asia","QA":"Asia","SA":"Asia","CY":"Asia","GE":"Asia","SG":"Asia","JO":"Asia","LB":"Asia","KW":"Asia","BH":"Asia","OM":"Asia","ID":"Asia","MY":"Asia","PH":"Asia","VN":"Asia","KH":"Asia","LK":"Asia","NP":"Asia","HK":"Asia","TW":"Asia","MV":"Asia","EG":"Africa","ZA":"Africa","MA":"Africa","KE":"Africa","NG":"Africa","ET":"Africa","MU":"Africa","SC":"Africa","US":"North America","CA":"North America","MX":"North America","CR":"North America","PA":"North America","DO":"North America","JM":"North America","CU":"North America","BR":"South America","AR":"South America","CL":"South America","CO":"South America","PE":"South America","AU":"Oceania","NZ":"Oceania","FJ":"Oceania"};
const CONT_ORDER = ['Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania'];
const codes = Object.keys(A.countries).filter(c => !A.countries[c].extra);
const unknown = codes.filter(c => !CONT[c]);
if (unknown.length) throw new Error('travel_warning_guide: no continent for ' + unknown.join(', '));
const rows = codes.map(c => A.countries[c]).sort((a, b) => a.name.localeCompare(b.name));
const hasPage = n => fs.existsSync(path.join(__dirname, 'country', slug(n), 'index.html'));
const rowsHtml = rows.map(r => {
  const code = Object.keys(A.countries).find(k => A.countries[k] === r);
  const name = hasPage(r.name) ? '<a href="/country/' + slug(r.name) + '/">' + esc(r.name) + '</a>' : esc(r.name);
  return '<tr data-n="' + esc(r.name.toLowerCase()) + '" data-c="' + code + '" data-ct="' + CONT[code] + '"><th scope="row"><img src="https://flagcdn.com/w40/' + code.toLowerCase() + '.png" alt="" width="22" height="16" loading="lazy">' + name + '</th><td data-k="us">' + usCell(r.us) + '</td><td data-k="uk">' + ukCell(r.uk) + '</td><td data-k="ca">' + caCell(r.ca) + '</td></tr>';
}).join('');

const cnt = f => rows.filter(f).length;
const N = rows.length;
const usHigh = cnt(r => r.us && r.us.level >= 3), caHigh = cnt(r => r.ca && r.ca.level >= 3), ukAny = cnt(r => r.uk && (r.uk.status || []).length);

const meta = `<div class="art-meta"><span class="tag tag-neutral">Travel Safety</span><span class="art-meta-sep">&middot;</span><span id="tw-updated-meta">Levels checked ${esc(stamp(A.updated))}</span><span class="art-meta-sep">&middot;</span><span>7 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Travel agent showing a customer a tablet with a table of US, UK and Canada columns and a highlighted row, across her desk in a travel agency" width="800" height="400"><figcaption>Compare all three governments before you decide.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const CSS2 = '<style>.tw-tools{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:1em 0 .4em}.tw-tools input{flex:1;min-width:220px;height:46px;font:inherit;font-size:1rem;color:var(--text);background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:10px 12px}.tw-tools input:focus{outline:2px solid var(--accent);outline-offset:1px;border-color:var(--accent)}.tw-count{font-size:.95rem;color:var(--muted)}.tw-chips{display:flex;flex-wrap:wrap;gap:8px;margin:.6em 0 .8em}.tw-chip{font:inherit;font-size:.9rem;font-weight:600;color:var(--text);background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:6px 14px;cursor:pointer}.tw-chip span{color:var(--muted);font-weight:500;margin-left:2px}.tw-chip:hover{border-color:var(--accent)}.tw-chip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.tw-chip[aria-pressed=true]{background:#4CC2FF;border-color:#4CC2FF;color:#08111f}.tw-chip[aria-pressed=true] span{color:#08111f}[data-theme="light"] .tw-chip[aria-pressed=true]{background:#1E86D6;border-color:#1E86D6;color:#fff}[data-theme="light"] .tw-chip[aria-pressed=true] span{color:#fff}.tw-none{display:none;padding:12px 2px;color:var(--muted)}' +
  '.tw-t{width:100%;border-collapse:collapse;min-width:640px}.tw-t th,.tw-t td{padding:10px;border-top:1px solid var(--line);vertical-align:top;text-align:left;font-size:.95rem}.tw-t thead th{border-top:0;color:var(--muted);font-weight:700;font-size:.9rem}.tw-t tbody th{font-weight:600;white-space:nowrap}.tw-t tbody th img{vertical-align:-2px;margin-right:8px;border-radius:2px}.tw-t tbody th a{color:var(--text);text-decoration:none}.tw-t tbody th a:hover{color:var(--accent);text-decoration:underline}' +
  '.tw-p{display:flex;flex-direction:column;align-items:flex-start;gap:1px;border:0;border-radius:8px;padding:5px 9px;color:#08111f;font:inherit;font-size:.9rem;line-height:1.25;margin:0 0 4px;max-width:210px;text-align:left;cursor:pointer}.tw-p:hover,.tw-p[aria-expanded=true]{box-shadow:0 0 0 2px var(--accent)}.tw-p:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.tw-lead{margin:.2em 0 .6em;color:var(--muted)}.tw-pop{position:fixed;z-index:200;max-height:calc(100vh - 16px);overflow-y:auto;width:min(340px,calc(100vw - 16px));padding:12px 14px;border:1px solid var(--line);border-radius:12px;background:var(--surface-2);color:var(--text);box-shadow:0 12px 32px rgba(0,0,0,.4);font-size:.95rem;line-height:1.45}.tw-pop[hidden]{display:none}.tw-pop p{margin:.5em 0 0;font-size:.9rem}.tw-pop-c{font-size:.85rem;color:var(--muted)}.tw-pop-t{font-weight:700;margin-top:2px}.tw-pop-d{margin-top:.6em;font-size:.85rem;color:var(--muted)}.tw-pop-l{display:inline-block;margin-top:.5em;font-size:.9rem;color:var(--accent);text-decoration:none}.tw-pop-l:hover{text-decoration:underline}.tw-p b{font-weight:700}.tw-p span{font-size:.85rem}.tw-s1{background:#6FD08C}.tw-s2{background:#F5B841}.tw-s3{background:#FF9F5A}.tw-s4{background:#FF6B6B}.tw-d{display:block;font-size:.85rem;color:var(--muted)}.tw-n{font-size:.85rem;color:var(--muted)}' +
  '.tw-sys{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));margin:1em 0}.tw-card{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px}.tw-card h3{margin:0 0 4px;font-size:1.05rem}.tw-card .tw-by{margin:0 0 10px;font-size:.9rem;color:var(--muted)}.tw-lad{list-style:none;margin:0;padding:0;display:grid;gap:6px}.tw-lad li{display:flex;gap:10px;align-items:flex-start;font-size:.95rem}.tw-lad li>b{flex:none;min-width:1.6em;height:1.6em;display:grid;place-items:center;border-radius:6px;color:#08111f;font-size:.85rem}.tw-lad li span small{display:block;color:var(--muted);font-size:.85rem}</style>';

const ladder = (arr, descs) => '<ul class="tw-lad">' + arr.map((t, i) => '<li><b class="tw-s' + (i + 1) + '">' + (i + 1) + '</b><span><strong>' + t + '</strong>' + (descs && descs[i] ? '<small>' + descs[i] + '</small>' : '') + '</span></li>').join('') + '</ul>';

const SYS = '<div class="tw-sys">' +
  '<div class="tw-card"><h3>United States</h3><p class="tw-by">State Department, 4 levels</p>' + ladder(US_NAMES.slice(1), null) + '<p class="tw-by" style="margin-top:10px">Each advisory can also carry risk letters: crime (C), terrorism (T), unrest (U), kidnapping or hostage-taking (K), health (H) and natural disaster (N).</p></div>' +
  '<div class="tw-card"><h3>United Kingdom</h3><p class="tw-by">FCDO, no numbered levels</p><ul class="tw-lad">' +
  '<li><b class="tw-s1">&ndash;</b><span><strong>No warning</strong><small>The FCDO gives advice but does not advise against travel.</small></span></li>' +
  '<li><b class="tw-s2">&#9888;</b><span><strong>Advise against all but essential travel</strong><small>Amber on the maps. &ldquo;You must decide whether your travel is essential.&rdquo;</small></span></li>' +
  '<li><b class="tw-s4">&#9888;</b><span><strong>Advise against all travel</strong><small>Red on the maps. Used when the risk to British nationals is unacceptably high.</small></span></li></ul>' +
  '<p class="tw-by" style="margin-top:10px">Either can apply to the whole country or only to parts of it.</p></div>' +
  '<div class="tw-card"><h3>Canada</h3><p class="tw-by">Global Affairs Canada, 4 levels</p>' + ladder(CA_NAMES.slice(1), ['Take similar precautions to those in Canada.', 'Certain safety and security concerns, or the situation could change quickly.', 'Your safety and security could be at risk. Think about your need to travel.', 'You should not travel. Your personal safety and security are at great risk.']) + '</div>' +
  '</div>';

const body = CSS + CSS2 + meta + hero +
  '<p><strong>A travel warning is a government telling its citizens how risky a country is.</strong> The US, UK and Canada each publish one for nearly every country, in different wording and on different scales. The table below puts all three side by side for ' + N + ' countries, using each government&rsquo;s own data.</p>' +
  callout('💡', '<strong>In one line:</strong> the table is rebuilt from the official feeds, checked automatically every 6 hours, and every cell shows when that government last updated it. None of these systems bans you from traveling. They advise.') +
  stat([
    [String(usHigh), 'of ' + N + ' countries at US Level 3 or 4'],
    [String(ukAny), 'of ' + N + ' with a UK warning against travel (all or part)'],
    [String(caHigh), 'of ' + N + ' at Canada&rsquo;s two highest levels'],
    ['6 hours', 'between automatic checks of the official feeds']
  ]) +
  '<h2>🌍 Current advisory levels by country</h2>' +
  '<p class="tw-lead">We are currently covering ' + N + ' countries and we keep adding. Click or tap any level to see what it means for that country.</p>' +
  '<div class="tw-tools"><input type="search" id="tw-q" placeholder="Search a country, for example Mexico" aria-label="Search a country" autocomplete="off"><span class="tw-count" id="tw-count">' + N + ' countries</span></div>' +
  '<div class="tw-chips" id="tw-chips" role="group" aria-label="Filter by continent"><button type="button" class="tw-chip" data-ct="" aria-pressed="true">All</button>' + CONT_ORDER.map(k => '<button type="button" class="tw-chip" data-ct="' + k + '" aria-pressed="false">' + k + ' <span>' + codes.filter(c => CONT[c] === k).length + '</span></button>').join('') + '</div>' +
  '<p class="tw-none" id="tw-none">No country matches that name.</p>' +
  '<div class="cox-tw"><table class="tw-t" id="tw-table"><thead><tr><th scope="col">Country</th><th scope="col">US State Department</th><th scope="col">UK FCDO</th><th scope="col">Canada</th></tr></thead><tbody>' + rowsHtml + '</tbody></table></div>' +
  '<p class="tw-d" id="tw-note">Official feeds last checked <strong id="tw-updated">' + esc(stamp(A.updated)) + '</strong>. The date under each level is when that government last updated its advice. &ldquo;No advisory for itself&rdquo; means a government does not rate its own country. Colors compare severity inside one system only: a yellow in one column is not the same warning as a yellow in another.</p>' +
  '<script type="application/json" id="tw-data">' + JSON.stringify({ countries: Object.fromEntries(codes.map(c => [c, A.countries[c]])) }).replace(/</g, '\\u003c') + '</' + 'script>' +
  '<h2>📖 What the levels mean in each country&rsquo;s system</h2>' +
  '<p>The three governments use different scales, so the same destination can look different depending on who you ask.</p>' +
  SYS +
  '<h2>🔎 Travel warning, advisory or ban?</h2>' +
  cl([
    ['📢', '<strong>Travel warning</strong> is the everyday phrase. The US and UK call their version an advisory or travel advice, and Canada calls it travel advice and advisories.'],
    ['⚠️', '<strong>Advisory</strong> is guidance. It tells you how risky the government thinks a place is and does not stop you from going.'],
    ['⛔', '<strong>A travel ban</strong> is a different thing: a legal restriction on entering or leaving a country, set by law or by a government order.']
  ]) +
  '<h2>🛡️ Why the level matters for insurance</h2>' +
  '<p>The UK government warns that <strong>your travel insurance could be invalidated if you travel against FCDO advice</strong>, and that only your insurer can say whether a claim is valid. Check your own policy before you book to a country with a warning, whatever government you follow.</p>' +
  fig(2, 'Couple at a kitchen table reading a travel insurance policy with a highlighted line and a sticky note reading check your policy', 'Check your policy before you book to a country with a warning.') +
  '<h2>🧭 How to use the table</h2>' +
  cl([
    ['🔍', '<strong>Look at all three columns.</strong> One government may warn against a country while another does not.'],
    ['🗺️', '<strong>Check for regional advisories.</strong> A country-level rating can hide a much higher risk in one region. Canada marks this with &ldquo;+ regional advisories&rdquo;, and the UK marks &ldquo;(parts)&rdquo;.'],
    ['📅', '<strong>Read the date.</strong> An advisory from months ago can still be current, but a fresh date after a news event is a sign to re-check.'],
    ['🔗', '<strong>Open the country page.</strong> Click a country for its entry and customs rules on this site, then confirm the advice on the government&rsquo;s own page.']
  ]) +
  fig(1, 'Woman in a hostel lobby pointing at a wall map of Mexico with a highlighted coastal region and a sticky note reading plus regional advisories', 'A country rating can hide a much higher risk in one region.') +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['What is a travel warning?', 'A government rating that tells its citizens how risky it considers a country. The US, UK and Canada each publish one, on different scales.'],
    ['Is a travel warning the same as a travel advisory?', 'In everyday use, yes. The US State Department calls its rating a travel advisory, the UK calls it travel advice and Canada calls it travel advice and advisories.'],
    ['What does Level 3 or Level 4 mean?', 'In the US system Level 3 is &ldquo;Reconsider travel&rdquo; and Level 4 is &ldquo;Do not travel&rdquo;. Canada&rsquo;s equivalents are &ldquo;Avoid non-essential travel&rdquo; and &ldquo;Avoid all travel&rdquo;. The UK uses &ldquo;advise against all but essential travel&rdquo; and &ldquo;advise against all travel&rdquo;.'],
    ['Does a travel warning stop me from traveling?', 'No. These are advice, not bans. They can still affect your travel insurance, so check your policy.'],
    ['Which government should I follow?', 'The one for your citizenship, because it plans consular help around its own citizens. Reading all three gives a fuller picture.'],
    ['How often does this page update?', 'The data is re-checked from the official feeds automatically every 6 hours. The date under each level is when that government last changed its own advice.'],
    ['Where does the data come from?', 'The US State Department data feed, the UK government content API for FCDO travel advice, and Global Affairs Canada&rsquo;s travel advice data. Nothing is entered by hand.']
  ]) +
  '<p><em>Checked October 2026 from official government data. Advice can change within hours in a crisis: always confirm on the government&rsquo;s own page before you travel.</em></p>' +
  SRC([
    ['https://travel.state.gov/en/international-travel/travel-advisories.html', 'US State Department &mdash; Travel advisories'],
    ['https://www.gov.uk/foreign-travel-advice', 'GOV.UK &mdash; Foreign travel advice (FCDO)'],
    ['https://www.gov.uk/guidance/about-foreign-commonwealth-development-office-travel-advice', 'GOV.UK &mdash; About FCDO travel advice'],
    ['https://travel.gc.ca/travelling/advisories', 'Government of Canada &mdash; Travel advice and advisories']
  ]) +
  '<script>var TWC=' + JSON.stringify({ USN: US_NAMES, CAN: CA_NAMES, UKS: UK_ST }) + ';' + fs.readFileSync(path.join(__dirname, 'travel_warning_client.js'), 'utf8') + '</' + 'script>';

module.exports = {
  __css: CSS2,
  slug: SLUG,
  title: 'Travel Warning by Country (2026): Current US, UK and Canada Advisory Levels | canitakethis.co',
  desc: 'Current travel warning levels for ' + N + ' countries from the US State Department, UK FCDO and Canada, side by side. What each level means, with a country search and update dates.',
  h1: 'Travel Warning by Country (2026): Current US, UK and Canada Advisory Levels',
  body
};
