/* patch_flags.js — real flag images (flagcdn.com) instead of emoji, in BOTH build.js and canitakethis.html.
   Guarded, idempotent. Fixes Windows showing "CA"/"US" letters. */
const fs=require('fs'),path=require('path');
function dec(x){return Buffer.from(x,'base64').toString('utf8');}
function patch(file,edits){
  var s=fs.readFileSync(file,'utf8');
  if(s.indexOf('flagcdn.com')>-1){console.log(file+': flags already applied — skipping.');return;}
  edits.forEach(function(e){var o=dec(e[1]),n=dec(e[2]);var c=s.split(o).length-1;console.log('  ['+file+'] '+e[0]+' '+c+' (expect 1)');if(c!==1)throw new Error('ANCHOR FAIL '+e[0]+' in '+file);s=s.replace(o,n);});
  fs.writeFileSync(file,s);console.log(file+': flags applied OK');
}
var B_FF_O='ICBmdW5jdGlvbiBmbGFnRnJvbUNvZGUoY2Mpe3JldHVybiBTdHJpbmcoY2MpLnJlcGxhY2UoLy4vZyxmdW5jdGlvbihjaCl7cmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KDEyNzM5NytjaC50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkpO30pO30=';
var B_FF_N='ICBmdW5jdGlvbiBmbGFnRnJvbUNvZGUoY2Mpe3ZhciBjPVN0cmluZyhjYykudG9Mb3dlckNhc2UoKTtyZXR1cm4gJzxpbWcgY2xhc3M9ImZpbWciIHNyYz0iaHR0cHM6Ly9mbGFnY2RuLmNvbS8nK2MrJy5zdmciIGFsdD0iJytlc2MoU3RyaW5nKGNjKS50b1VwcGVyQ2FzZSgpKSsnIiBsb2FkaW5nPSJsYXp5Ij4nO30=';
var B_CSS_O='KycuYWlyaGVhZCAuY2ZsYWd7Zm9udC1zaXplOjM0cHg7bGluZS1oZWlnaHQ6MTtmbGV4Om5vbmV9XG4n';
var B_CSS_N='KycuYWlyaGVhZCAuY2ZsYWd7bGluZS1oZWlnaHQ6MDtmbGV4Om5vbmV9XG4nCisnLmZpbWd7Ym9yZGVyLXJhZGl1czoycHg7dmVydGljYWwtYWxpZ246bWlkZGxlfVxuJworJy5haXJoZWFkIC5jZmxhZyAuZmltZ3toZWlnaHQ6MjZweDt3aWR0aDphdXRvO2JveC1zaGFkb3c6MCAwIDAgMXB4IHJnYmEoMCwwLDAsLjE4KX1cbicKKycucm91dGUgLmZpbWd7aGVpZ2h0OjExcHg7d2lkdGg6YXV0bzttYXJnaW4tbGVmdDozcHg7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgwLDAsMCwuMTgpfVxuJw==';
var A_FF_O='ZnVuY3Rpb24gZmxhZ0Zyb21Db2RlKGNjKXtyZXR1cm4gY2MucmVwbGFjZSgvLi9nLGZ1bmN0aW9uKGNoKXtyZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoMTI3Mzk3K2NoLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSk7fSk7fQ==';
var A_FF_N='ZnVuY3Rpb24gZmxhZ0Zyb21Db2RlKGNjKXt2YXIgYz1TdHJpbmcoY2MpLnRvTG93ZXJDYXNlKCk7cmV0dXJuICc8aW1nIGNsYXNzPSJmaW1nIiBzcmM9Imh0dHBzOi8vZmxhZ2Nkbi5jb20vJytjKycuc3ZnIiBhbHQ9IicrU3RyaW5nKGNjKS50b1VwcGVyQ2FzZSgpKyciIGxvYWRpbmc9ImxhenkiPic7fQ==';
var A_CSS_O='LmZsYWd7Zm9udC1zaXplOjE4cHg7d2lkdGg6MjRweDt0ZXh0LWFsaWduOmNlbnRlcjtmbGV4Om5vbmV9';
var A_CSS_N='LmZsYWd7d2lkdGg6YXV0bztmbGV4Om5vbmU7bGluZS1oZWlnaHQ6MDtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uZmltZ3tib3JkZXItcmFkaXVzOjJweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmZsYWcgLmZpbWd7aGVpZ2h0OjE2cHg7d2lkdGg6YXV0b30ucm91dGUgLmZpbWd7aGVpZ2h0OjExcHg7d2lkdGg6YXV0bzttYXJnaW4tbGVmdDozcHh9';patch('build.js',[['B_FF',B_FF_O,B_FF_N],['B_CSS',B_CSS_O,B_CSS_N]]);
patch('canitakethis.html',[['A_FF',A_FF_O,A_FF_N],['A_CSS',A_CSS_O,A_CSS_N]]);
console.log('patch_flags.js done');
