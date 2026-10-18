/* Guard (DS 8.37 source ladder): every airline x category that has a topic entry says which step it is on (official, or unofficial with `unofficial:true`);
   an airline WITHOUT an entry may stay on global rules only if LADDER_GLOBAL.json records that BOTH the official and the unofficial step were tried (what, and why it failed).
   Categories listed in COMPLETE must have no gaps (fails). Other categories are reported only (work in progress).
   usage: node audit_ladder.js */
const fs = require('fs'), path = require('path');
const COMPLETE = ['vape', 'liquids'];
const TOPICS = require('./airline_topics.js').TOPICS;
const html = fs.readFileSync(path.join(__dirname, 'canitakethis.html'), 'utf8');
const airlines = [...html.matchAll(/\{name:'([^']+)',iata:'/g)].map(m => m[1]);
const gp = path.join(__dirname, 'LADDER_GLOBAL.json');
const G = fs.existsSync(gp) ? JSON.parse(fs.readFileSync(gp, 'utf8')) : {};
const bad = [], rep = [];
for (const cat of ['vape', 'liquids', 'alcohol', 'perfume', 'power']) {
  let off = 0, un = 0, glob = 0, gap = 0;
  for (const a of airlines) {
    const e = (TOPICS[a] || {})[cat];
    if (e) { if (e.unofficial) un++; else off++; continue; }
    const r = (G[cat] || {})[a];
    if (r && r.official && r.unofficial) glob++;
    else { gap++; if (COMPLETE.includes(cat)) bad.push(cat + ': ' + a + ' has no section and no ladder record'); }
  }
  rep.push(cat + ' official ' + off + ' | unofficial ' + un + ' | global (both steps recorded) ' + glob + ' | still to do ' + gap);
}
console.log(rep.join('\n'));
if (bad.length) { console.log('FAIL ladder: ' + bad.slice(0, 10).join(' ; ')); process.exit(1); }
console.log('OK ladder (complete categories: ' + COMPLETE.join(', ') + ')');
