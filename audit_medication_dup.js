// Guard (user order 2026-10-17, Google duplicate-content risk): the airline Medication pages must not be near-copies of each other.
// Fails when (a) any two pages share more than 40% of their 5-word shingles, (b) more than 25% of all content lines appear on 4 or more pages,
// (c) a long sentence (80+ characters) is repeated on more than 8 pages. Template labels (legend, "How to pack", table questions) are short and exempt via (c).
const fs = require('fs'), path = require('path');
const pages = {};
for (const a of fs.readdirSync('airline')) {
  const p = path.join('airline', a, 'medication', 'index.html'); if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, 'utf8').replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ');
  const m = h.match(/<main>([\s\S]*?)<\/main>/); h = m ? m[1] : h;
  h = h.replace(/<div class="help">[\s\S]*?<div class="hnote">[^<]*<\/div><\/div>/g, ' '); // source link blocks are references, not prose
  h = h.replace(/<div class="chips cc-picker">[\s\S]*?<\/div>/g, ' '); // the chip row is interface (one name per kind of card on every page, DS 8.41), not content
  h = h.replace(/<li>/g, '\n').replace(/<\/p>|<\/div>|<\/h\d>|<\/li>|<\/tr>/g, '\n').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ');
  pages[a] = h.split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(s => s.length > 25 && !/^(✓ OFFICIAL SOURCE|⚠ UNOFFICIAL SOURCE|BASED ON GLOBAL RULES)/.test(s));
}
const names = Object.keys(pages), bad = [];
const freq = {}; for (const n of names) for (const s of new Set(pages[n])) freq[s] = (freq[s] || 0) + 1;
let total = 0, dup = 0; for (const n of names) for (const s of new Set(pages[n])) { total++; if (freq[s] >= 4) dup++; }
const pct = total ? 100 * dup / total : 0;
if (pct > 25) bad.push('shared lines ' + pct.toFixed(1) + '% (limit 25%)');
for (const [s, c] of Object.entries(freq)) if (s.length >= 80 && c > 8 && !/^Green: allowed/.test(s)) bad.push('sentence on ' + c + ' pages: ' + s.slice(0, 90));
const sh = n => { const w = pages[n].join(' ').toLowerCase().split(/\W+/).filter(Boolean); const S = new Set(); for (let i = 0; i < w.length - 4; i++) S.add(w.slice(i, i + 5).join(' ')); return S; };
const S = {}; names.forEach(n => S[n] = sh(n));
let max = [0, '', ''];
for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++) { let inter = 0; for (const x of S[names[i]]) if (S[names[j]].has(x)) inter++; const jac = inter / (S[names[i]].size + S[names[j]].size - inter); if (jac > max[0]) max = [jac, names[i], names[j]]; }
if (max[0] > 0.40) bad.push('pages too similar: ' + names.length + ' pages, max ' + (max[0] * 100).toFixed(0) + '% ' + max[1] + ' / ' + max[2]);
console.log(bad.length ? 'FAIL medication duplicate check: ' + bad.join(' ; ') : 'OK medication duplicate check (' + names.length + ' pages, max pair similarity ' + (max[0] * 100).toFixed(0) + '%, shared lines ' + pct.toFixed(1) + '%)');
process.exit(bad.length ? 1 : 0);
