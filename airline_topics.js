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

function render(a, T) {
  return '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(T.answer) + '</strong></p>' +
    (T.sections || []).map(s => '<section class="bd-sec"><h2>' + s.h + '</h2>' + (s.p ? '<p>' + s.p + '</p>' : '') +
      (s.table ? table(s.table) : '') + (s.list ? '<ul>' + s.list.map(x => '<li>' + x + '</li>').join('') + '</ul>' : '') + '</section>').join('') +
    (T.faq ? '<section class="bd-faq"><h2>❓ Quick answers</h2>' + T.faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' : '') +
    '<p class="bd-chk">Checked ' + CHECKED + ' on the airline\'s own terms and pages. Rules change: confirm with ' + esc(a.name) + ' before you fly.</p>' +
    (T.sources ? '<div class="bd-src"><div class="h">🔗 Official sources</div>' + T.sources.map(s => '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>').join('') + '</div>' : '') +
    '</div>';
}

module.exports = { TOPICS, render, CHECKED };
