/*
 Food expansion helper (session 34). Adds ONE country's verified food-import page (read in full from official customs / biosecurity pages) to food_extra.json.
 usage: node food_add_country.js spec.json
 spec = {
   "country": "Austria",
   "checked": "17 October 2026",
   "answer": "2-3 sentence answer (also used as the FAQ schema answer on the page)",
   "sources": [["https://...", "Authority — page title"]],
   "faq": [["Question?", "Answer."], ...],           // 3-5 items, every answer from the pages read
   "topics": [ {"id":"meat","label":"Meat & dairy","status":"stop|warn|go","verdict":"short chip text","head":"one sentence",
                 "scen":[{"when":"...","status":"stop|warn|go","tag":"Not allowed|Declare it|Allowed|...","lines":["...","..."]}]} ]
 }
 Rules: only facts stated on the pages read; own words; say what was NOT read in a final "Not read" scenario; no invented URLs/numbers.
 Output feeds food_detail.js (EXTRA). After adding: node build.js; node audit_duplicates.js (food/*); node audit_source_state.js; node audit_seo_change_scope.js.
 Fields title/description/H1 stay unchanged; the FAQ answer (schema) changes for the page: keep within the approved food rebuild.
*/
const fs = require('fs'), path = require('path');
const FILE = path.join(__dirname, 'food_extra.json');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const bad = [];
if (!spec.country) bad.push('country');
if (!spec.answer || spec.answer.length < 60) bad.push('answer');
if (!Array.isArray(spec.sources) || !spec.sources.length || !spec.sources.every(x => /^https?:\/\//.test(x[0]) && x[1])) bad.push('sources');
if (!Array.isArray(spec.faq) || spec.faq.length < 3) bad.push('faq(>=3)');
if (!Array.isArray(spec.topics) || spec.topics.length < 3) bad.push('topics(>=3)');
(spec.topics || []).forEach(t => { if (!t.id || !t.label || !t.status || !t.verdict || !t.head || !Array.isArray(t.scen) || !t.scen.length || !t.scen.every(s => s.when && s.status && s.tag && Array.isArray(s.lines) && s.lines.length)) bad.push('topic ' + t.id); });
if (bad.length) { console.log('bad spec: ' + bad.join(', ')); process.exit(1); }
const all = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : {};
all[spec.country] = { checked: spec.checked || '17 October 2026', answer: spec.answer, sources: spec.sources, faq: spec.faq, topics: spec.topics };
fs.writeFileSync(FILE, JSON.stringify(all, null, 1));
console.log('food_extra.json now has ' + Object.keys(all).length + ' countries (added/updated ' + spec.country + ')');
