/* patch_tagstyle.js — restyle the two fare chips to spec (image 2).
   PER PASSENGER: text #AEC3FA on #AEC3FA @16%. Tier: text #42C2FF on #42C2FF @16%.
   Both: height 24px, horizontal padding 6px, uppercase, same in dark + light.
   Only touches build.js (airShell). Guarded: 1 anchor each, idempotent. */
const fs = require('fs');
const F = 'build.js';
let s = fs.readFileSync(F, 'utf8');
function cnt(h,n){return h.split(n).length-1;}
function swap(oldStr,newStr,label){
  if(s.indexOf(newStr)!==-1){console.log(label+' skip: already applied.');return;}
  const n=cnt(s,oldStr);
  if(n!==1)throw new Error(label+' anchor count = '+n+' (expected 1). Aborting.');
  s=s.replace(oldStr,newStr);
  console.log(label+' ok (1 anchor).');
}

/* 1. shared chip base (.tag) */
swap(
  "+'.tag{font-family:\\'Space Mono\\',monospace;font-size:14px;letter-spacing:.4px;padding:5px 9px;border-radius:7px}\\n'",
  "+'.tag{display:inline-flex;align-items:center;height:24px;padding:0 6px;border-radius:8px;font-family:\\'Space Mono\\',monospace;font-size:14px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}\\n'",
  'STEP 1 .tag base'
);

/* 2. PER PASSENGER color (.tag-neutral) */
swap(
  "+'.tag-neutral{background:rgba(140,150,170,.16);color:var(--tg-neutral)}\\n'",
  "+'.tag-neutral{background:rgba(174,195,250,.16);color:#AEC3FA}\\n'",
  'STEP 2 .tag-neutral color'
);

/* 3. tier chip (.tier) -> same shape as .tag, blue */
swap(
  "+'.tier{font-family:\\'Inter\\',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:.2px;padding:5px 11px;border-radius:999px;background:rgba(76,194,255,.14);color:var(--accent);border:1px solid rgba(76,194,255,.28)}\\n'",
  "+'.tier{display:inline-flex;align-items:center;height:24px;padding:0 6px;border-radius:8px;font-family:\\'Space Mono\\',monospace;font-size:14px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:rgba(66,194,255,.16);color:#42C2FF}\\n'",
  'STEP 3 .tier restyle'
);

fs.writeFileSync(F,s);
console.log('DONE.');
