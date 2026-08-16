/* patch_app.js — sync main app (canitakethis.html) card styling to inner pages:
   headline 18, detail 16, src 14, tag 13, help-h 13, hnote 13, and Helpful-sources box only when a real link exists.
   Guarded, idempotent. */
const fs=require('fs'),path=require('path');
const F=path.join(process.cwd(),'canitakethis.html');
let s=fs.readFileSync(F,'utf8');
function dec(x){return Buffer.from(x,'base64').toString('utf8');}
function one(name,o,n){var c=s.split(o).length-1;console.log('  ['+name+'] '+c+' (expect 1)');if(c!==1)throw new Error('ANCHOR FAIL '+name);s=s.replace(o,n);}

if(s.indexOf("/*app-synced*/")>-1){console.log('app already synced — skipping.');process.exit(0);}

one('headline',
 ".headline{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:16px;",
 ".headline{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:18px;");
one('detail',
 ".detail li{position:relative;padding-left:18px;font-size:13.5px;",
 ".detail li{position:relative;padding-left:18px;font-size:16px;");
one('src',
 ".src{margin-top:12px;padding-top:11px;border-top:1px solid var(--card-line);font-family:'Space Mono',monospace;font-size:9.5px;",
 ".src{margin-top:12px;padding-top:11px;border-top:1px solid var(--card-line);font-family:'Space Mono',monospace;font-size:14px;");
one('tag',
 ".tag{font-family:'Space Mono',monospace;font-size:10px;letter-spacing:.4px;padding:5px 9px;border-radius:7px}",
 ".tag{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:.4px;padding:5px 9px;border-radius:7px}");
one('help-h',
 ".help-h{font-family:'Space Mono',monospace;font-size:9.5px;letter-spacing:1.2px;",
 ".help-h{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:1.2px;");
one('hnote',
 ".hnote{font-size:11px;color:var(--card-muted);line-height:1.4;margin-top:8px}",
 ".hnote{font-size:13px;color:var(--card-muted);line-height:1.4;margin-top:8px}");

var HB_OLD='ICBpZighcm93cylyb3dzPSc8ZGl2IGNsYXNzPSJobm90ZSI+U2VlIHRoZSBhaXJsaW5lXHUyMDE5cyBvZmZpY2lhbCB3ZWJzaXRlIGZvciBleGFjdCBkZXRhaWxzLjwvZGl2Pic7CiAgcmV0dXJuICc8ZGl2IGNsYXNzPSJoZWxwIj48ZGl2IGNsYXNzPSJoZWxwLWgiPkhlbHBmdWwgc291cmNlczwvZGl2Picrcm93cysnPGRpdiBjbGFzcz0iaG5vdGUiPlRvIGJlIDEwMCUgc3VyZSwgd2UgYWx3YXlzIHJlY29tbWVuZCBjb25maXJtaW5nIHdpdGggdGhlIG9mZmljaWFsIGNoYW5uZWxzLjwvZGl2PjwvZGl2Pic7';
var HB_NEW='ICBpZighcm93cylyZXR1cm4gJyc7CiAgcmV0dXJuICc8ZGl2IGNsYXNzPSJoZWxwIj48ZGl2IGNsYXNzPSJoZWxwLWgiPkhlbHBmdWwgc291cmNlczwvZGl2Picrcm93cysnPGRpdiBjbGFzcz0iaG5vdGUiPlRvIGJlIDEwMCUgc3VyZSwgd2UgYWx3YXlzIHJlY29tbWVuZCBjb25maXJtaW5nIHdpdGggdGhlIG9mZmljaWFsIGNoYW5uZWxzLjwvZGl2PjwvZGl2Pic7';
one('helpBlock-conditional',dec(HB_OLD),dec(HB_NEW));

s=s.replace("function helpBlock(authority){","/*app-synced*/function helpBlock(authority){");
fs.writeFileSync(F,s);
console.log('patch_app.js applied OK');
