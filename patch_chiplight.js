/* patch_chiplight.js — theme-specific chip colors.
   Dark (default, unchanged): PER PASSENGER #AEC3FA, tier #42C2FF.
   Light: PER PASSENGER #4E69C0, tier #1E86D6 (each on its color @16%).
   Only touches build.js (airShell). Guarded: 1 anchor, idempotent. */
const fs = require('fs');
const F = 'build.js';
let s = fs.readFileSync(F, 'utf8');
function cnt(h,n){return h.split(n).length-1;}

const ANCHOR = "+'.tier{display:inline-flex;align-items:center;height:24px;padding:0 6px;border-radius:8px;font-family:\\'Space Mono\\',monospace;font-size:14px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:rgba(66,194,255,.16);color:#42C2FF}\\n'";
const LIGHT = "\n+'[data-theme=\"light\"] .tag-neutral{background:rgba(78,105,192,.16);color:#4E69C0}\\n'\n+'[data-theme=\"light\"] .tier{background:rgba(30,134,214,.16);color:#1E86D6}\\n'";

if(s.indexOf('[data-theme=\"light\"] .tier{')!==-1){
  console.log('skip: light chip overrides already present.');
} else {
  const n=cnt(s,ANCHOR);
  if(n!==1) throw new Error('anchor count = '+n+' (expected 1). Aborting.');
  s=s.replace(ANCHOR, ANCHOR+LIGHT);
  console.log('ok: light chip overrides added (1 anchor).');
}

fs.writeFileSync(F,s);
console.log('DONE.');
