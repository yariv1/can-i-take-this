/* GATE (2026-11-16, user order, covers EVERY page type of the whole site): SOURCE LADDER RECORD.
   Scans every built page (any index.html in any folder). A page that shows a fallback source marker needs a written ladder record in ladder_log.json:
     marker "UNOFFICIAL SOURCE"   -> log needs official[]  (what was tried on the official side)
     marker "BASED ON GLOBAL"     -> log needs official[], reliable[], other[]  (each: source tried + result, or "none: reason")
   Also covers country_unique.json entries (src "Global rule applied" / "Unofficial") and any page type added in future automatically (marker based).
   Key = page path, e.g. "country/france/tobacco", "airline/aegean/medication", "food/italy". Entry: { official:[..], reliable:[..], other:[..], date }.
   ladder_baseline.json = pages that existed when the gate was built (work queue); it may only SHRINK (`node audit_ladder_record.js --baseline`).
   Any page outside the baseline without a complete record FAILS the gate. `--types` prints the queue per page type. */
const fs = require('fs'), path = require('path');
const rd = f => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null);
const log = rd('ladder_log.json') || {};
const need = {};
const SKIP = new Set(['node_modules', '.git', '.claude', '.github']);
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const f = path.join(d, e.name);
    if (e.isDirectory()) { walk(f); continue; }
    if (e.name !== 'index.html') continue;
    const t = fs.readFileSync(f, 'utf8');
    const key = d.replace(/\\/g, '/').replace(/^\.\/?/, '');
    if (!key) continue;
    if (/BASED ON GLOBAL/.test(t)) need[key] = 'global';
    else if (/UNOFFICIAL SOURCE/.test(t)) need[key] = 'unofficial';
  }
})('.');
const cu = rd('country_unique.json') || {};
for (const cat of Object.keys(cu)) for (const c of Object.keys(cu[cat] || {})) {
  const s = (cu[cat][c] || {}).src || '';
  const k = 'country/' + c + '/' + (cat === 'plants' ? 'plants-seeds' : cat === 'vape' ? 'vaping' : cat);
  if (/Global rule applied/i.test(s)) need[k] = 'global';
  else if (/unofficial/i.test(s) && need[k] !== 'global') need[k] = 'unofficial';
}
const ok = (e, f) => e && Array.isArray(e[f]) && e[f].some(x => typeof x === 'string' && x.trim().length > 8);
const complete = k => { const e = log[k]; return need[k] === 'global' ? (ok(e, 'official') && ok(e, 'reliable') && ok(e, 'other')) : ok(e, 'official'); };
const lacking = Object.keys(need).filter(k => !complete(k)).sort();
const type = k => { const p = k.split('/'); return p.length > 2 ? p[0] + '/*/' + p.slice(2).join('/') : p[0] + (p.length > 1 ? '/*' : ''); };
if (process.argv.includes('--types')) { const c = {}; lacking.forEach(k => { c[type(k)] = (c[type(k)] || 0) + 1; }); console.log(JSON.stringify(c, null, 1)); process.exit(0); }
if (process.argv.includes('--baseline')) {
  const old = rd('ladder_baseline.json');
  if (!old) { fs.writeFileSync('ladder_baseline.json', JSON.stringify(lacking)); console.log('baseline created: ' + lacking.length); process.exit(0); }
  const oldSet = new Set(old); const added = lacking.filter(k => !oldSet.has(k));
  if (added.length) { console.log('REFUSED: baseline may only shrink; new lacking pages: ' + added.slice(0, 8).join(', ')); process.exit(1); }
  fs.writeFileSync('ladder_baseline.json', JSON.stringify(lacking)); console.log('baseline shrunk to ' + lacking.length); process.exit(0);
}
const base = new Set(rd('ladder_baseline.json') || []);
const fresh = lacking.filter(k => !base.has(k));
if (fresh.length) {
  console.log('FAIL ladder record missing (' + fresh.length + '): ' + fresh.slice(0, 10).join(', ') + (fresh.length > 10 ? ' ...' : '') + '\nRun the ladder (official -> reliable third party -> other third party -> global) and record it in ladder_log.json.');
  process.exit(1);
}
console.log('OK ladder record complete for every page outside the baseline; baseline queue still to do: ' + lacking.filter(k => base.has(k)).length);
