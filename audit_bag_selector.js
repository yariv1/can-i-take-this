// Consistency gate (DESIGN_SYSTEM.md 8.18): the Carry-on / Checked choice must be the SAME component, with the SAME texts, on every page that offers it.
// Run after node build.js. Exit 1 on any violation.
const fs = require('fs');
const path = require('path');
const CARRY = 'Carry-on <small>Goes on the plane with you</small>';
const CHECKED = 'Checked <small>Suitcases and bags you check in</small>';
const bad = [];
let withSel = 0;
function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (f.name === 'node_modules' || f.name === '.git' || f.name === '.claude') continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith('.html')) check(p);
  }
}
function check(p) {
  const s = fs.readFileSync(p, 'utf8');
  const hasBag2 = /class="bag2[ "]/.test(s);
  if (/>Trolley, backpack, under-seat</.test(s) || />Goes in the hold</.test(s)) bad.push(p + ': old selector text (Trolley, backpack... / Goes in the hold)');
  if (/data-c="cabin"/.test(s) && !hasBag2) bad.push(p + ': Carry-on/Checked offered with a different component (must be .bag2)');
  if (hasBag2) {
    withSel++;
    if (!s.includes(CARRY)) bad.push(p + ': Carry-on option text is not the standard text');
    if (!s.includes(CHECKED)) bad.push(p + ': Checked option text is not the standard text');
  }
}
walk('.');
console.log('pages with the Carry-on / Checked selector: ' + withSel);
if (bad.length) { console.log(bad.slice(0, 20).join('\n')); console.log('FAIL: ' + bad.length + ' violation(s)'); process.exit(1); }
console.log('OK');
