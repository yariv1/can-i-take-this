/* LADDER QUEUE (2026-11-17, user order: "make it an automatic workflow, I should never have to repeat it").
   Lists every page in ladder_log.json whose ladder is NOT finished. A ladder is finished when ONE of these is true:
     A) official[] has a source that was READ (words "read", "pasted", "pasted by user", "saved copy")      -> tier 1 done
     B) official[] only tried, AND reliable[] or other[] has a source that was READ (not "tried", "not re-read", "403", "blocked") -> tier 2 done
     C) tier 3 (global rule) is only allowed when official[] has a tried entry AND reliable[] has a READ-or-tried entry
        AND other[] has a tried entry that names a concrete source (URL or site name), not just "none".
   Everything else = INCOMPLETE: run steps 2a then 2b NOW (web search, read the page myself, label Unofficial) before any report.
   Usage: node ladder_queue.js            (summary + first 40)
          node ladder_queue.js airline    (filter by key prefix)
   RULE FOR REPLIES: never write "blocked", "unreadable", "leftover" or "stays as is" about a page that is in this list.
   Run this at the start of every session and before every handoff; the queue is the to-do list, not prose notes. */
const fs = require('fs');
const log = JSON.parse(fs.readFileSync('ladder_log.json', 'utf8'));
const filter = process.argv[2] || '';
const READ = /\b(read|pasted|saved copy|cross-check read|cited on the page|none needed)\b/i;
const NOT = /(not re-?read|not read|tried|403|404|406|blocked|denied|failed|unreadable|redirect|captcha|snippet)/i;
const readOk = s => typeof s === 'string' && READ.test(s) && !/^(tried|browser navigation)/i.test(s.trim()) && !/\bnot (re-?)?read\b/i.test(s);
const concrete = s => typeof s === 'string' && (/https?:\/\//.test(s) || /\.(com|org|gov|net|int|io|is|br|ca)\b/.test(s)) && NOT.test(s);
const arr = (e, f) => (Array.isArray(e[f]) ? e[f] : []);
const bad = [];
for (const k of Object.keys(log).sort()) {
  if (filter && !k.startsWith(filter)) continue;
  const e = log[k];
  if (arr(e, 'official').some(readOk)) continue;
  if (arr(e, 'reliable').some(readOk) || arr(e, 'other').some(readOk)) continue;
  const t3 = arr(e, 'official').length && arr(e, 'reliable').length && arr(e, 'other').some(concrete);
  if (t3) continue;
  bad.push(k);
}
console.log('LADDER QUEUE: ' + bad.length + ' of ' + Object.keys(log).filter(k => !filter || k.startsWith(filter)).length + ' logged pages not finished (no read source at tier 1 or 2, and no concrete step-2b attempt for tier 3).');
bad.slice(0, 40).forEach(k => console.log(' - ' + k));
if (bad.length > 40) console.log(' ... +' + (bad.length - 40) + ' more');
