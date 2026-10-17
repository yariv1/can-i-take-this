// Verified food-into-country pages (TEST GROUP, started 2026-10-12): the 20 /food/<country>/ pages with the most GSC clicks over 90 days.
// A country listed in DETAIL replaces the generic 7-card template page (and its interactive "Which food?" tool, which only holds the generic rule) with a page built from the country's OWN official pages.
// Rollback for any country: delete its entry here (build then falls back to the template page), or revert to the git tag pre-food-rebuild-2026-10-12.
// Rules: SEO_RULES.md CHANGE CONTROL. Test = these pages vs the 65 untouched food pages. Title, description and H1 are NOT changed (content-only test).
// Every fact below was read on the official pages listed in `sources`; anything not read is stated on the page.
const { CSS, table, esc } = require('./baggage_detail.js');
const CHECKED = '12 October 2026';

const DETAIL = {};
Object.assign(DETAIL, require('./food_detail1.js'));
Object.assign(DETAIL, require('./food_detail2.js'));
Object.assign(DETAIL, require('./food_detail3.js'));
Object.assign(DETAIL, require('./food_detail4.js'));
Object.assign(DETAIL, require('./food_detail5.js'));

const FC = require('./food_cards.js');

// verdict objects for the card component in build.js (same pass/warn/stop cards as the original food pages, now with real per-country text)
function cards(name) {
  if (TOPICS[name]) return [];
  const f = FC[name];
  if (!f) return null;
  return f.cards.map(x => ({ status: x.status, tags: [{ k: 'neutral', t: 'Category · ' + x.cat }], head: x.head, lines: x.lines, src: '' }));
}

const ICON = { go: '<path d="M20 6 9 17l-5-5"/>', warn: '<path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>', stop: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>' };
const TOPICS = Object.assign({ Romania: require('./food_topics_romania.js') }, require('./food_topics.js'));
// Session 34: countries added with food_add_country.js live in food_extra.json (answer, faq, sources, checked, topics)
const EXTRA = (function () { try { return JSON.parse(require('fs').readFileSync(require('path').join(__dirname, 'food_extra.json'), 'utf8')); } catch (e) { return {}; } })();
Object.keys(EXTRA).forEach(function (k) { const e = EXTRA[k]; DETAIL[k] = { answer: e.answer, stats: [], sections: [], faq: e.faq, sources: e.sources, checked: e.checked }; TOPICS[k] = { slab: 'What are you bringing?', topics: e.topics }; });

// Source block inside every verified card: links first, then the OFFICIAL SOURCE footer (DESIGN_SYSTEM.md 8.28)
function srcBlock(c) {
  const d = DETAIL[c.name];
  if (!d || !d.sources) return '';
  const rows = d.sources.map(x => '<a class="hitem" href="' + x[0] + '" target="_blank" rel="noopener"><span class="hi-ic">🌐</span><span class="hi-l">' + x[1] + '<small>Official guidance</small></span><span class="hi-go">↗</span></a>').join('');
  return '<div class="help"><div class="help-h">Helpful sources</div>' + rows + '<div class="hnote">To be 100% sure, we always recommend confirming with the official channels.</div></div>' +
    '<div class="src"><b class="src-ok">✓ OFFICIAL SOURCE</b> These rules come from the official customs or quarantine authority, linked above. Food rules protect against pests and disease. When unsure, always declare it - declaring is free, smuggling is fined.</div>';
}

// Chip picker + one expanded card per topic (the same pattern as the Compensation pages). EXAMPLE on Romania, pending the user's approval for the others.
function picker(c, T) {
  const chips = T.topics.map((t, i) => '<button class="chip' + (i === 0 ? ' on' : '') + '" data-c="' + t.id + '">' + esc(t.label) + '</button>').join('');
  const card = (t, i) => '<div class="cc" id="cc-' + t.id + '"' + (i === 0 ? '' : ' hidden') + '><div class="pass ' + t.status + ' print"><div class="strip"><div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' + ICON[t.status] + '</svg></div><div><div class="verdict">' + esc(t.verdict) + '</div><div class="vsub">' + esc(t.label) + '</div></div></div><div class="perf"></div><div class="body"><div class="route"><span>🥩 <b>' + esc(c.name) + '</b></span><span>FOOD</span></div><p class="headline">' + esc(t.head) + '</p>' +
    t.scen.map(s => '<div class="fsc"><div class="fsc-h"><span class="fsc-b fsc-' + s.status + '">' + esc(s.tag) + '</span><span>' + esc(s.when) + '</span></div><ul class="detail">' + s.lines.map(l => '<li>' + esc(l) + '</li>').join('') + '</ul></div>').join('') +
    srcBlock(c) + '</div></div></div>';
  const css = '<style>.slab{font-family:"Space Mono",monospace;font-size:13.6px;letter-spacing:1.6px;text-transform:uppercase;color:var(--muted);margin:16px 4px 10px}.chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}.chip{background:var(--surface);border:1px solid var(--line);border-radius:999px;color:var(--text);cursor:pointer;font-family:"Inter",sans-serif;font-weight:500;font-size:14px;padding:9px 14px;transition:.14s;display:inline-flex;align-items:center;gap:7px}.chip:hover{border-color:var(--surface-2)}.chip.on{background:var(--sel-bg);color:var(--sel-text);border-color:var(--sel-bg);font-weight:600}.cc[hidden]{display:none}.fsc{border-top:1px solid var(--line);margin-top:14px;padding-top:12px}.fsc-h{display:flex;align-items:center;gap:10px;font-weight:700;margin-bottom:6px}.fsc-b{font-size:.85rem;font-weight:700;padding:3px 10px;border-radius:8px;color:#08111f}.fsc-go{background:#2FCF9B}.fsc-warn{background:#F5B841}.fsc-stop{background:#FF6B6B}</style>';
  const script = '<script>(function(){var cs=document.querySelectorAll(".cc-picker .chip"),cc=document.querySelectorAll(".cc");function go(id){[].forEach.call(cc,function(x){x.hidden=x.id!=="cc-"+id;});[].forEach.call(cs,function(x){x.classList.toggle("on",x.dataset.c===id);});}[].forEach.call(cs,function(b){b.onclick=function(){go(b.dataset.c);};});var h=location.hash.slice(1);if(h&&document.getElementById("cc-"+h))go(h);})();</scr' + 'ipt>';
  return css + '<div class="slab">' + esc(T.slab) + '</div><div class="chips cc-picker">' + chips + '</div>' + T.topics.map(card).join('') + script;
}

// Depth BELOW the cards: tables, exceptions, penalties, FAQ, sources. No lead paragraph and no stat strip (they repeated the cards: user rule 2026-10-12, no repeated content).
function render(c, d) {
  const skip = (FC[c.name] && FC[c.name].skip) || [];
  return CSS + (TOPICS[c.name] ? picker(c, TOPICS[c.name]) : '') +
    (TOPICS[c.name] ? [] : d.sections.filter((s, i) => skip.indexOf(i) < 0)).map(s => '<section class="bd-sec"><h2>' + s.h + '</h2>' + (s.p ? '<p>' + s.p + '</p>' : '') + (s.table ? table(s.table) : '') +
      (s.list ? '<ul>' + s.list.map(x => '<li>' + x + '</li>').join('') + '</ul>' : '') + '</section>').join('') +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + d.faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">Checked ' + (d.checked || CHECKED) + ' on ' + esc(c.name) + "'s official government pages (linked in the cards above). Food import rules change with animal and plant disease outbreaks: confirm with the authority before you travel.</p>" +
    (TOPICS[c.name] ? '' : '<div class="bd-src"><div class="h">✓ Official sources</div>' + d.sources.map(s => '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>').join('') + '</div>');
}

module.exports = { DETAIL, render, cards };
