/*
 Airline alcohol / perfume helper (session 35): adds ONE airline's alcohol and/or perfume section, read on the airline's OWN page, to topics_new.json.
 airline_topics.js loads it (never replaces an existing entry); the page keeps its title, description and schema (keepSchema), the extra FAQ is visible only.
 usage: node airline_topic_add.js spec.json
 spec = {"airline":"Delta","alcohol":{answer,sections:[{h,p,table:{head,rows},list}],faq:[[q,a],..],sources:[[url,label]]},"perfume":{...}}
 Rules: only facts stated on the page, own words, no invented numbers; say what was not read in a list item; airlines outside the US must not cite TSA.
*/
const fs = require('fs'), path = require('path');
const FILE = path.join(__dirname, 'topics_new.json');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
if (!spec.airline) { console.log('bad spec'); process.exit(1); }
const N = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : {};
N[spec.airline] = N[spec.airline] || {};
for (const c of ['alcohol', 'perfume', 'vape', 'liquids', 'power']) {
  const e = spec[c]; if (!e) continue;
  if (!e.answer || !Array.isArray(e.sections) || !e.sections.length || !Array.isArray(e.faq) || e.faq.length < 2 || !Array.isArray(e.sources) || !e.sources.length) { console.log('bad ' + c); process.exit(1); }
  N[spec.airline][c] = { answer: e.answer, sections: e.sections, faq: e.faq, sources: e.sources, keepSchema: true, checked: '18 October 2026', unofficial: !!e.unofficial };
}
fs.writeFileSync(FILE, JSON.stringify(N, null, 1));
console.log('topics_new now has ' + Object.keys(N).length + ' airlines (added/updated ' + spec.airline + ')');
