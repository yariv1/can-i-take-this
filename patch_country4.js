/* patch_country4.js — (1) only show Helpful-sources box when a real source link exists;
   (2) tag 10->13px, help-h 9.5->13px, hnote 11->13px. On top of patch_country3.js. Guarded, idempotent. */
const fs=require('fs'),path=require('path');
const F=path.join(process.cwd(),'build.js');
let s=fs.readFileSync(F,'utf8');
function dec(x){return Buffer.from(x,'base64').toString('utf8');}
function one(name,o,n){var c=s.split(o).length-1;console.log('  ['+name+'] '+c+' (expect 1)');if(c!==1)throw new Error('ANCHOR FAIL '+name);s=s.replace(o,n);}

if(s.indexOf("data-country4")>-1){console.log('patch4 already applied — skipping.');process.exit(0);}
if(s.indexOf("mode:'stack'")<0)throw new Error('patch_country3.js not applied — apply it first');

var HB_OLD='ICBmdW5jdGlvbiBoZWxwQmxvY2soYXUpe3ZhciByb3dzPScnO2F1PWF1fHx7fTtpZihhdS51cmwpcm93cys9bGlua1JvdyhhdS5sYWJlbCwnT2ZmaWNpYWwgZ3VpZGFuY2UnLGF1LnVybCk7aWYoIXJvd3Mpcm93cz0nPGRpdiBjbGFzcz0iaG5vdGUiPlNlZSB0aGUgb2ZmaWNpYWwgYXV0aG9yaXR5IGZvciBleGFjdCBkZXRhaWxzLjwvZGl2Pic7cmV0dXJuICc8ZGl2IGNsYXNzPSJoZWxwIj48ZGl2IGNsYXNzPSJoZWxwLWgiPkhlbHBmdWwgc291cmNlczwvZGl2Picrcm93cysnPGRpdiBjbGFzcz0iaG5vdGUiPlRvIGJlIDEwMCUgc3VyZSwgd2UgYWx3YXlzIHJlY29tbWVuZCBjb25maXJtaW5nIHdpdGggdGhlIG9mZmljaWFsIGNoYW5uZWxzLjwvZGl2PjwvZGl2Pic7fQ==';
var HB_NEW='ICBmdW5jdGlvbiBoZWxwQmxvY2soYXUpe2F1PWF1fHx7fTtpZighYXUudXJsKXJldHVybiAnJztyZXR1cm4gJzxkaXYgY2xhc3M9ImhlbHAiPjxkaXYgY2xhc3M9ImhlbHAtaCI+SGVscGZ1bCBzb3VyY2VzPC9kaXY+JytsaW5rUm93KGF1LmxhYmVsLCdPZmZpY2lhbCBndWlkYW5jZScsYXUudXJsKSsnPGRpdiBjbGFzcz0iaG5vdGUiPlRvIGJlIDEwMCUgc3VyZSwgd2UgYWx3YXlzIHJlY29tbWVuZCBjb25maXJtaW5nIHdpdGggdGhlIG9mZmljaWFsIGNoYW5uZWxzLjwvZGl2PjwvZGl2Pic7fQ==';
one('helpBlock-conditional',dec(HB_OLD),dec(HB_NEW));

const TAG_O=".tag{font-family:\\'Space Mono\\',monospace;font-size:10px;letter-spacing:.4px;padding:5px 9px;border-radius:7px}";
const TAG_N=".tag{font-family:\\'Space Mono\\',monospace;font-size:13px;letter-spacing:.4px;padding:5px 9px;border-radius:7px}";
one('tag-size',TAG_O,TAG_N);

const HH_O="help-h{font-family:\\'Space Mono\\',monospace;font-size:9.5px;letter-spacing:1.2px;text-transform:uppercase;color:var(--card-muted);margin-bottom:9px}";
const HH_N="help-h{font-family:\\'Space Mono\\',monospace;font-size:13px;letter-spacing:1.2px;text-transform:uppercase;color:var(--card-muted);margin-bottom:9px}";
one('help-h-size',HH_O,HH_N);

const HN_O="hnote{font-size:11px;color:var(--card-muted);line-height:1.4;margin-top:8px}";
const HN_N="hnote{font-size:13px;color:var(--card-muted);line-height:1.4;margin-top:8px}";
one('hnote-size',HN_O,HN_N);

s=s.replace("function countryShell(o){","function countryShell(o){/*data-country4*/");
fs.writeFileSync(F,s);
console.log('patch_country4.js applied OK');
