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
  if (fs.existsSync(p)) { const N = JSON.parse(fs.readFileSync(p, 'utf8')); for (const a of Object.keys(N)) { TOPICS[a] = TOPICS[a] || {}; for (const c of Object.keys(N[a])) { if (!TOPICS[a][c]) TOPICS[a][c] = N[a][c]; else if (c === 'power' || N[a][c].checked === '22 November 2026') TOPICS[a][c] = Object.assign({}, TOPICS[a][c], N[a][c]); } } }
}

function render(a, T) {
  return '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(T.answer) + '</strong></p>' +
    (T.sections || []).map(s => '<section class="bd-sec"><h2>' + s.h + '</h2>' + (s.p ? '<p>' + s.p + '</p>' : '') +
      (s.table ? table(s.table) : '') + (s.list ? '<ul>' + s.list.map(x => '<li>' + x + '</li>').join('') + '</ul>' : '') + '</section>').join('') +
    (T.faq ? '<section class="bd-faq"><h2>❓ Quick answers</h2>' + T.faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' : '') +
    srcBlock(a, T) +
    '</div>';
}

// Source tiers: official / unofficial from a reliable third party (airport operator, public authority, WHO) / unofficial from a less reliable source. Always says why.
function tierOf(label) { return /airport|airports|WHO |WHO$|authority|customs|\bTSA\b|\bFAA\b|ministry|aeroporti|fraport|dubai airports|government|civil aviation|IATA|ICAO|EASA|\bCAA\b|\bCASA\b|Transport Canada|\bUSDA\b|border|home affairs/i.test(label) ? 'reliable' : 'less'; }
function link(s) { return '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>'; }
const CONTACT = (() => { try { return JSON.parse(require('fs').readFileSync(__dirname + '/airline_contact.json', 'utf8')); } catch (e) { return {}; } })();
function contactLine(a) { const c = CONTACT[a.name]; if (!c) return ''; return c.kind === 'contact' ? ' <a href="' + c.url + '" target="_blank" rel="noopener noreferrer">Contact ' + esc(a.name) + ' on its official contact page</a>.' : ' <a href="' + c.url + '" target="_blank" rel="noopener noreferrer">Find ' + esc(a.name) + ' contact options on its official website</a>.'; }
function srcBlock(a, T) {
  const all = T.sources || [];
  const isUn = s => T.unofficial || /^Unofficial source/i.test(s[1]);
  const off = all.filter(s => !isUn(s)), un = all.filter(isUn);
  const chk = 'Checked ' + (T.checked || CHECKED);
const lab = x => String(x[1]).replace(/^Unofficial source:s*/i,'').replace(/&mdash;/g,'-');
  const first = off[0] ? lab(off[0]) : (un[0] ? lab(un[0]) : '');
  let h = '<p class="bd-chk">' + (off.length ? 'We read ' + first + ' on ' + (T.checked || CHECKED) + (un.length ? ', and the unofficial source below for the rest' : '') + '. ' : un.length ? 'We read ' + first + ' on ' + (T.checked || CHECKED) + '; it is not a page published by ' + esc(a.name) + '. ' : '') + 'Rules change, so before you fly confirm this with ' + esc(a.name) + ' using the channels on its own website.' + contactLine(a) + '</p>';
  if (off.length) h += '<div class="bd-src"><div class="h">✓ Official sources</div>' + off.map(link).join('') + '</div>';
  if (un.length) {
    const rel = un.every(s => tierOf(s[1]) === 'reliable'), n = esc(a.name);
    h += '<div class="bd-src"><div class="h" style="color:var(--tg-amber,#f3c765)">⚠ Unofficial sources</div>' + un.map(link).join('') +
      '<p class="bd-why">' + (rel ? 'No ' + n + ' page we could read answers this, so ' : 'No ' + n + ' page we could read answers this, so ') + (rel ? 'we used a reliable third party. It is likely right but not confirmed by ' + n + '; check with ' + n + ' too.' : 'we used a source we rate as less reliable. It may be wrong, so check with ' + n + ' yourself.') + '</p></div>';
  }
  return h;
}

// perfume_extra.js: labelled authority/airport sections (unofficial), added after all merges
{ const X = require('./perfume_extra.js'); for (const a of Object.keys(X)) { const e = TOPICS[a] && TOPICS[a].perfume; if (!e || !e.sections) continue; if (!e.sections.some(s => s.h === X[a].sec.h)) e.sections.push(X[a].sec); const s = [X[a].src[0], 'Unofficial source: ' + X[a].src[1]]; e.sources = e.sources || []; if (!e.sources.some(x => x[0] === s[0])) e.sources.push(s); } }

{ const X = require('./liquids_extra.js'); for (const a of Object.keys(X)) { const e = TOPICS[a] && TOPICS[a].liquids; if (!e || !e.sections) continue; if (!e.sections.some(s => s.h === X[a].sec.h)) e.sections.push(X[a].sec); const s = [X[a].src[0], 'Unofficial source: ' + X[a].src[1]]; e.sources = e.sources || []; if (!e.sources.some(x => x[0] === s[0])) e.sources.push(s); } }

{ const X = require('./vape_extra.js'); for (const a of Object.keys(X)) { const e = TOPICS[a] && TOPICS[a].vape; if (!e || !e.sections) continue; if (!e.sections.some(s => s.h === X[a].sec.h)) e.sections.push(X[a].sec); const s = [X[a].src[0], 'Unofficial source: ' + X[a].src[1]]; e.sources = e.sources || []; if (!e.sources.some(x => x[0] === s[0])) e.sources.push(s); } }

{ const X = require('./vape_extra2.js'); for (const a of Object.keys(X)) { const e = TOPICS[a] && TOPICS[a].vape; if (!e || !e.sections) continue; if (!e.sections.some(s => s.h === X[a].sec.h)) e.sections.push(X[a].sec); if (a === 'Aegean' && e.sections[0].list) e.sections[0].list = e.sections[0].list.map(x => x.replace('no battery size limit and no e-liquid rule', 'no e-liquid rule; the battery limits are in the section below')); const s = [X[a].src[0], X[a].src[1]]; e.sources = e.sources || []; if (!e.sources.some(x => x[0] === s[0])) e.sources.push(s); } }

module.exports = { TOPICS, render, CHECKED };
