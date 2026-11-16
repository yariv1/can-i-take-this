/* Guard (2026-11-16): SOURCE LADDER. A country page must never end as "we could not read it".
   If the official page is blocked, read an unofficial named source (labelled Unofficial), and only then use the global rule, worded differently per page.
   Fails when any country_unique.json entry is a "could not read" / "adds no new facts" page. */
const fs = require('fs');
const d = JSON.parse(fs.readFileSync('country_unique.json', 'utf8'));
const bad = [];
for (const cat of Object.keys(d)) for (const c of Object.keys(d[cat])) {
  const e = d[cat][c]; const t = (e.h || '') + ' ' + (e.src || '');
  if (/could not read|could and could not|adds no new facts/i.test(t)) bad.push(cat + '/' + c);
}
console.log(bad.length ? 'FAIL unreadable-source pages (' + bad.length + '): ' + bad.slice(0, 12).join(', ') + (bad.length > 12 ? ' ...' : '') : 'OK no "could not read" pages');
process.exit(bad.length ? 1 : 0);
