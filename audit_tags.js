// Guard for the TAG SYSTEM (DESIGN_SYSTEM 8.40, user order 2026-10-20, HARD):
// a tag names a TYPE (Animal, Ingredient, Medicine, Food, Item: one fixed colour per type) or a STATUS (a fixed vocabulary, one fixed colour per label).
// Same label => same colour everywhere; a sentence, an instruction or an invented label is not a tag.
const fs = require('fs'), path = require('path');
const { JSDOM } = require('jsdom');
const html = fs.readFileSync(path.join(__dirname, 'canitakethis.html'), 'utf8');
const w = new JSDOM(html, { runScripts: 'dangerously', url: 'http://localhost/' }).window;
const TYPE = w.TAG_TYPE, STATUS = w.TAG_STATUS;
const bad = [];
const NEUTRAL_OK = new Set(['PER PASSENGER']); // scope label on baggage pages
const DOT = ' \u00B7 ';
function check(label, color, where) {
  label = label.replace(/&amp;/g, '&').replace(/&middot;/g, '\u00B7').trim();
  if (STATUS[label] !== undefined) { if (STATUS[label] !== color) bad.push(where + ': status tag "' + label + '" is ' + color + ', must be ' + STATUS[label]); return; }
  const i = label.indexOf(DOT);
  if (i > 0) { const type = label.slice(0, i); if (TYPE[type] !== undefined) { if (TYPE[type] !== color) bad.push(where + ': type tag "' + label + '" is ' + color + ', "' + type + '" tags must be ' + TYPE[type]); return; } }
  if (color === 'neutral' && (NEUTRAL_OK.has(label) || /^blog[\\/]/.test(where))) return; // blog topic tags and scope labels are plain grey
  bad.push(where + ': "' + label + '" (' + color + ') is not in the tag vocabulary');
}

// 1. built pages
let pages = 0, tags = 0;
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name === '.claude' || e.name === 'node_modules' || e.name.startsWith('.git')) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'index.html') {
      pages++;
      const h = fs.readFileSync(p, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '');
      for (const m of h.matchAll(/<span class="tag tag-([a-z]+)">([^<]*)<\/span>/g)) { tags++; check(m[2], m[1], path.relative(__dirname, p)); }
    }
  }
})(__dirname);

// 2. no literal tag objects left in the app code (every tag goes through tgT / tgS)
const code = html.replace(/var TAG_TYPE=[\s\S]*?function tgM[^\n]*\n/, '');
for (const m of code.matchAll(/\{t:\s*[^{}]{1,120}?,\s*k:\s*['"][a-z]+['"]\s*\}/g)) bad.push('canitakethis.html: literal tag ' + m[0].slice(0, 80) + ' (use tgT / tgS)');

// 3. every answer the typeahead / app can give, for every country x medicine and country x food
const b = fs.readFileSync(path.join(__dirname, 'build.js'), 'utf8');
const lib = Buffer.from(b.match(/const TA_LIB=\/\*v(\d+)\*\/Buffer\.from\('([^']+)'/)[2], 'base64').toString();
const f = new Function('D', 'document', 'window', lib + ';return {medV:medV,foodV:foodV};');
const stub = { getElementById: () => null, querySelectorAll: () => [] };
let answers = 0;
for (const cn of Object.keys(w.MED_AUTH || {})) {
  const D = { cn, isMed: true, db: w.MED_DB, auth: w.MED_AUTH[cn] || { label: cn, url: null }, medRules: w.MED_RULES, medVer: (w.MED_VER && w.MED_VER[cn]) || null, medNote: (w.MED_NOTE && w.MED_NOTE[cn]) || null, medNoteTag: (w.MED_NOTE_TAG && w.MED_NOTE_TAG[cn]) || null, catname: w.CATNAME, tagReg: { type: TYPE, status: STATUS } };
  const api = f(D, stub, { innerHeight: 800 });
  for (const e of w.MED_DB) { const v = api.medV(e); answers++; (v.tags || []).forEach(t => check(t.t, t.k, cn + '/' + e.n)); }
}
for (const cn of Object.keys(w.FOOD_AUTH || {})) {
  const D = { cn, isMed: false, db: w.FOOD_DB, auth: w.FOOD_AUTH[cn] || { label: cn, url: null }, foodRules: w.FOOD_RULES[cn] || w.FOOD_RULES.def, catname: w.CATNAME, tagReg: { type: TYPE, status: STATUS } };
  const api = f(D, stub, { innerHeight: 800 });
  for (const e of w.FOOD_DB) { const v = api.foodV(e); answers++; (v.tags || []).forEach(t => check(t.t, t.k, cn + '/' + e.n)); }
}
// 4. the pages' own typeahead modules
const PT = require('./page_typeahead.js');
for (const type of ['Ingredient', 'Food', 'Medicine', 'Item', 'Animal']) { const t = PT.tagT(type, 'x'); check(t.t, t.k, 'page_typeahead ' + type); }

if (bad.length) {
  const uniq = [...new Set(bad)];
  console.log('FAIL tag system:\n' + uniq.slice(0, 40).join('\n') + (uniq.length > 40 ? '\n... ' + uniq.length + ' total' : ''));
  process.exit(1);
}
console.log('OK tag system (' + tags + ' tags on ' + pages + ' pages, ' + answers + ' answers; ' + Object.keys(STATUS).length + ' status labels, ' + Object.keys(TYPE).length + ' types)');

// VERDICT WORDS (DESIGN_SYSTEM 8.42, user order 2026-10-20, HARD): the big title of every card is one of five plain answers, the same on every page type
const VERDICTS = ['Allowed', 'Some rules apply', 'Not allowed', 'No clear answer', 'No matches found', 'Depends on the destination'];
(function () {
  const v = [];
  const dup = [];
  function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.name === '.claude' || e.name === 'node_modules' || e.name.startsWith('.git')) continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'index.html' && /^airline[\/][^\/]+[\/]medication[\/]/.test(path.relative(__dirname, p))) {
        const h = fs.readFileSync(p, 'utf8');
        for (const m of h.matchAll(/<div class="pass (?:go|warn|stop|info|nomatch)[^"]*"><div class="strip">[\s\S]*?<div class="verdict">([^<]*)<\/div>/g)) if (VERDICTS.indexOf(m[1]) < 0) v.push(path.relative(__dirname, p) + ': card title "' + m[1] + '"');
      }
    }
  }
  walk(path.join(__dirname, 'airline'));
  // the old vague words must not come back anywhere
  for (const f of ['canitakethis.html', 'build.js']) { const s = fs.readFileSync(path.join(__dirname, f), 'utf8'); for (const w of ["info:'Check the source'", '>Check the source<', "warn:'Check first'"]) if (s.includes(w)) dup.push(f + ' contains "' + w + '"'); }
  const all = v.concat(dup);
  if (all.length) { console.log('FAIL verdict words:\n' + all.slice(0, 15).join('\n') + (all.length > 15 ? '\n... ' + all.length + ' total' : '')); process.exit(1); }
  console.log('OK verdict words: every airline medication card title is one of ' + VERDICTS.length + ' plain answers');
})();
