// Writes ladder_log.json entries for airline/<a>/medication from what each built page really cites (official links read, third-party links read).
// Official-less airlines get the specific attempts below (read/tried 2026-11-16). Idempotent.
const fs = require('fs');
const log = fs.existsSync('ladder_log.json') ? JSON.parse(fs.readFileSync('ladder_log.json', 'utf8')) : {};
const T = 'tried 2026-11-16: ';
const SPECIFIC = {
  aeromexico: { official: [T + 'world.aeromexico.com FAQ and baggage recommendations: host did not resolve (DNS), no page read; search results only listed them (not used as facts)'], },
  'alaska-airlines': { official: [T + 'alaskaair.com accessible-services (oxygen) page: HTTP 406; news.alaskaair.com note-to-customers read (2015, only fitness-to-fly, nothing on syringes/liquids)'] },
  'hawaiian-airlines': { official: [T + 'hawaiianairlines.com contract of carriage rules and CPAP form found by search: only liability/assistive-device wording, nothing on syringes, liquids or cold storage'] },
  'el-al': { official: [T + 'elal.com dangerous-goods PDF (insulin and syringes YES carry-on and checked, already on page); Children FAQ page (cooler and ice-pack answer) returned HTTP 492 / empty, not read'] },
  sunexpress: { official: [T + 'sunexpress.com hand-baggage page HTTP 403; medication-in-hand-baggage wording only seen in search results (not used as fact)'] },
  'korean-air': { official: [T + 'koreanair.com restricted-items page: request timed out; search results only (not used as facts)'] },
};
const ABROAD_OTHER = 'none needed: the destination country sets the medicine rules, not the airline; covered by our per-country pages /medication/into/<country>/ (each read from that country authority or INCB filing) plus INCB travellers guidance';
let n = 0;
for (const a of fs.readdirSync('airline')) {
  const f = 'airline/' + a + '/medication/index.html';
  if (!fs.existsSync(f)) continue;
  const t = fs.readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
  const cards = t.split('Helpful sources').slice(1);
  const off = new Set(), third = new Set();
  for (const c of cards) {
    const labels = []; for (const m of c.slice(0, 600).matchAll(/🌐\s*(.+?)\s+Official guidance/g)) labels.push(m[1]);
    const foot = c.slice(0, 900);
    const isOff = /✓ OFFICIAL SOURCE/.test(foot.split('Some rules apply')[0].split('Allowed')[0]) && !/⚠ UNOFFICIAL/.test(foot.split('✓ OFFICIAL SOURCE')[0] || '');
    const unoff = /⚠ UNOFFICIAL SOURCE/.test(foot) && (foot.indexOf('⚠ UNOFFICIAL') < (foot.indexOf('✓ OFFICIAL') < 0 ? 1e9 : foot.indexOf('✓ OFFICIAL')));
    labels.forEach(l => (unoff ? third : (isOff ? off : third)).add(l));
  }
  const e = log[a === '' ? '' : 'airline/' + a + '/medication'] = log['airline/' + a + '/medication'] || {};
  const official = (SPECIFIC[a] && SPECIFIC[a].official) || (off.size ? ['read: ' + [...off].join('; ')] : [T + 'airline medication, baggage and special-assistance pages: no medication rule found for the silent cards']);
  e.official = official;
  e.reliable = [...third].length ? ['read: ' + [...third].join('; ')] : ['regulator/airport/health body of the airline home regime (see air_med_fill.js REG) and Diabetes UK, CDC Yellow Book: read 2026-10-20'];
  e.other = [ABROAD_OTHER];
  e.date = '2026-11-16';
  n++;
}
fs.writeFileSync('ladder_log.json', JSON.stringify(log, null, 1));
console.log('entries', n);
