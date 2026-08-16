/* patch_country2.js — CSS-only Show more/less label, auto-open when active cat in More, larger fonts.
   Applies on top of patch_country.js. */
const fs=require('fs'),path=require('path');
const F=path.join(process.cwd(),'build.js');
let s=fs.readFileSync(F,'utf8');

function cnt(x){return s.split(x).length-1;}
function need(x,n,label){const c=cnt(x);console.log('  ['+label+'] '+c+' (expect '+n+')');if(c!==n)throw new Error('ANCHOR FAIL '+label);}

if(s.indexOf('data-country2')>-1){console.log('patch2 already applied — skipping (idempotent).');process.exit(0);}
if(s.indexOf('function countryShell(')<0)throw new Error('countryShell missing — apply patch_country.js first');

const A_MORE=`  var moreBlock='<details class="more"><summary><span>More</span><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></summary><div class="morerow">'+moreHtml+'</div></details>';`;
const A_CHEVOPEN=`+'.more[open] summary .chev{transform:rotate(180deg)}\\n'`;
const A_HEADLINE=`+'.headline{font-family:\\'Space Grotesk\\',sans-serif;font-weight:600;font-size:16px;`;
const A_DETAIL=`+'.detail li{position:relative;padding-left:18px;font-size:13.5px;`;
const A_SRC=`+'.src{margin-top:12px;padding-top:11px;border-top:1px solid var(--card-line);font-family:\\'Space Mono\\',monospace;font-size:9.5px;`;
const A_QLB=`+'.qcard .ql b{font-family:\\'Space Grotesk\\',sans-serif;font-weight:600;font-size:14.5px}\\n'`;
const A_QH=`+'.qcard .qh{font-size:12.5px;color:var(--card-muted);line-height:1.4}\\n'`;
need(A_MORE,1,'moreBlock');
need(A_CHEVOPEN,1,'chev-open-css');
need(A_HEADLINE,1,'headline-css');
need(A_DETAIL,1,'detail-css');
need(A_SRC,1,'src-css');
need(A_QLB,1,'qcard-label-css');
need(A_QH,1,'qcard-head-css');

const newMore=`  var moreActive=more.some(function(t){return t.key&&t.key===act;});
  var moreBlock='<details class="more" data-country2'+(moreActive?' open':'')+'><summary><span class="mlabel"></span><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></summary><div class="morerow">'+moreHtml+'</div></details>';`;
s=s.replace(A_MORE,newMore);

const cssLabel=A_CHEVOPEN
+`\n+'.more summary .mlabel::before{content:"Show more"}\\n'`
+`\n+'.more[open] summary .mlabel::before{content:"Show less"}\\n'`;
s=s.replace(A_CHEVOPEN,cssLabel);

s=s.replace(A_HEADLINE,A_HEADLINE.replace('font-size:16px;','font-size:18px;'));
s=s.replace(A_DETAIL,A_DETAIL.replace('font-size:13.5px;','font-size:16px;'));
s=s.replace(A_SRC,A_SRC.replace('font-size:9.5px;','font-size:14px;'));
s=s.replace(A_QLB,A_QLB.replace('font-size:14.5px','font-size:16px'));
s=s.replace(A_QH,A_QH.replace('font-size:12.5px','font-size:14px'));

fs.writeFileSync(F,s);
console.log('patch_country2.js applied OK');
