// Per-airline topic detail for the airline rule pages (vape, alcohol, liquids, perfume, power bank).
// Every entry is written from the airline's OWN published terms/pages (source listed), never from third-party blogs.
// Shape: TOPICS[airline name][cat] = { ttl, desc, answer, sections:[{h,p,table:{head,rows},list:[...]}], faq:[[q,a]], sources:[[url,label]] }
// cat is one of: vape, alcohol, liquids, perfume, power.
const BAGD = require('./baggage_detail.js');
const { CSS, table, esc } = BAGD;
const CHECKED = '8 October 2026';

const TOPICS = {};
Object.assign(TOPICS, require('./airline_topics1.js'));
Object.assign(TOPICS, require('./airline_topics2.js'));
Object.assign(TOPICS, require('./airline_topics3.js'));
Object.assign(TOPICS, require('./airline_topics4.js'));
Object.assign(TOPICS, require('./airline_topics5.js'));
Object.assign(TOPICS, require('./airline_topics6.js'));
Object.assign(TOPICS, require('./airline_topics7.js'));
{ const T8 = require('./airline_topics8.js'); for (const a of Object.keys(T8)) TOPICS[a] = Object.assign(TOPICS[a] || {}, T8[a]); }
{ const T9 = require('./airline_topics9.js'); for (const a of Object.keys(T9)) { TOPICS[a] = TOPICS[a] || {}; if (!TOPICS[a].power) TOPICS[a].power = T9[a].power; } }

// topics_new.json (session 35, written by airline_topic_add.js): alcohol / perfume sections read on the airline's own page; they never replace an existing entry and keep title, description and schema unchanged (keepSchema)
{
  const fs = require('fs'), p = __dirname + '/topics_new.json';
  if (fs.existsSync(p)) { const N = JSON.parse(fs.readFileSync(p, 'utf8')); for (const a of Object.keys(N)) { TOPICS[a] = TOPICS[a] || {}; for (const c of Object.keys(N[a])) if (!TOPICS[a][c]) TOPICS[a][c] = N[a][c]; } }
}

function render(a, T) {
  return '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(T.answer) + '</strong></p>' +
    (T.sections || []).map(s => '<section class="bd-sec"><h2>' + s.h + '</h2>' + (s.p ? '<p>' + s.p + '</p>' : '') +
      (s.table ? table(s.table) : '') + (s.list ? '<ul>' + s.list.map(x => '<li>' + x + '</li>').join('') + '</ul>' : '') + '</section>').join('') +
    (T.faq ? '<section class="bd-faq"><h2>❓ Quick answers</h2>' + T.faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' : '') +
    '<p class="bd-chk">Checked ' + (T.checked || CHECKED) + (T.unofficial ? ' on an unofficial source, not on the airline\'s own pages. Rules change: confirm with ' : ' on the airline\'s own terms and pages. Rules change: confirm with ') + esc(a.name) + ' before you fly.</p>' +
    (T.sources ? '<div class="bd-src"><div class="h"' + (T.unofficial ? ' style="color:var(--tg-amber,#f3c765)"' : '') + '>' + (T.unofficial ? '⚠ Unofficial sources' : '✓ Official sources') + '</div>' + T.sources.map(s => '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>').join('') + '</div>' : '') +
    '</div>';
}

module.exports = { TOPICS, render, CHECKED };
