/* patch_tier_and_style.js — one clean run: adds cabin-tier chips to fare blocks AND
   applies the final chip styling (image 2 spec). Only touches build.js. Idempotent. */
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

/* A1: fareTiers() classifier after esc() */
const ESC = "function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;');}";
const HELPER = "\nfunction fareTiers(label){var L=String(label).toLowerCase();var noPE=L.replace(/premium\\s+economy/g,' ');var peSrc=L.replace(/saga premium/g,' ');var first=/\\bfirst\\b|suites|premi\\u00E8re|premiere/.test(L);var biz=/business|\\bclub\\b|crown|\\bmint\\b|bizclass|cloud nine|prestige|\\bpremier\\b|aerspace|delta one|polaris|royal silk|business select|saga premium|clase premier/.test(L);var pe=/premium/.test(peSrc);var econ=/economy|\\u00E9conomy|b\\u00E1sica|cl\\u00E1sica|econo/.test(noPE);var t=[];if(econ||!(first||biz||pe))t.push('Economy');if(pe)t.push('Premium Economy');if(biz)t.push('Business');if(first)t.push('First');return t.join(' / ');}";
if(s.indexOf('function fareTiers(')!==-1){console.log('A1 skip: fareTiers() already present.');}
else{
  const n=cnt(s,ESC);
  if(n!==1)throw new Error('A1 anchor count = '+n+' (expected 1). Aborting.');
  s=s.replace(ESC, ESC+HELPER);
  console.log('A1 ok: fareTiers() added (1 anchor).');
}

/* A2: tier chip in the fare block h2 */
swap(
  "return '<section class=\"fblock\"><h2>'+esc(fr.label)+' <span class=\"tag tag-neutral\">PER PASSENGER</span></h2>'",
  "return '<section class=\"fblock\"><h2>'+esc(fr.label)+' <span class=\"tier\">'+esc(fareTiers(fr.label))+'</span> <span class=\"tag tag-neutral\">PER PASSENGER</span></h2>'",
  'A2 tier chip in h2'
);

/* A3: PER PASSENGER color + final .tier CSS after .tag-neutral */
swap(
  "+'.tag-neutral{background:rgba(140,150,170,.16);color:var(--tg-neutral)}\\n'",
  "+'.tag-neutral{background:rgba(174,195,250,.16);color:#AEC3FA}\\n'\n+'.tier{display:inline-flex;align-items:center;height:24px;padding:0 6px;border-radius:8px;font-family:\\'Space Mono\\',monospace;font-size:14px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:rgba(66,194,255,.16);color:#42C2FF}\\n'",
  'A3 tier CSS + PER PASSENGER color'
);

/* B1: shared chip base (.tag) -> 24px height, 6px pad, uppercase */
swap(
  "+'.tag{font-family:\\'Space Mono\\',monospace;font-size:14px;letter-spacing:.4px;padding:5px 9px;border-radius:7px}\\n'",
  "+'.tag{display:inline-flex;align-items:center;height:24px;padding:0 6px;border-radius:8px;font-family:\\'Space Mono\\',monospace;font-size:14px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}\\n'",
  'B1 .tag base'
);

fs.writeFileSync(F,s);
console.log('DONE.');
