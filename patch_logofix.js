/* patch_logofix.js — symbol-only square logos (Google Flights) + white tiles.
   Edits BOTH canitakethis.html (the app) and build.js (the pages / airShell).
   Guarded: each edit expects exactly 1 anchor and throws otherwise; idempotent. */
const fs = require('fs');

function edit(file, jobs){
  let s = fs.readFileSync(file, 'utf8');
  jobs.forEach(j=>{
    if(s.indexOf(j.neu)!==-1){console.log('['+file+'] '+j.label+' skip: already applied.');return;}
    const n = s.split(j.old).length-1;
    if(n!==1) throw new Error('['+file+'] '+j.label+' anchor count = '+n+' (expected 1). Aborting.');
    s = s.replace(j.old, j.neu);
    console.log('['+file+'] '+j.label+' ok (1 anchor).');
  });
  fs.writeFileSync(file, s);
}

/* ---------- APP: canitakethis.html ---------- */
edit('canitakethis.html', [
  {
    label:'app logoHTML source + white tile',
    old:"function logoHTML(a){var col=LOGOCOLORS[a.iata.charCodeAt(0)%LOGOCOLORS.length];var srcs=['https://pics.avs.io/64/64/'+a.iata+'.png','https://images.kiwi.com/airlines/64/'+a.iata+'.png'];return '<span class=\"logo\" style=\"background:'+col+'\"><span>'+a.iata+'</span><img class=\"logo-img\" data-srcs=\"'+srcs.join('|')+'\" data-i=\"0\" src=\"'+srcs[0]+'\" alt=\"\"></span>';}",
    neu:"function logoHTML(a){var srcs=['https://www.gstatic.com/flights/airline_logos/70px/'+a.iata+'.png'];return '<span class=\"logo\" style=\"background:#fff\"><span>'+a.iata+'</span><img class=\"logo-img\" data-srcs=\"'+srcs.join('|')+'\" data-i=\"0\" src=\"'+srcs[0]+'\" alt=\"\"></span>';}"
  },
  {
    label:'app .logo initials color -> dark',
    old:".logo{position:relative;width:26px;height:26px;border-radius:6px;overflow:hidden;display:inline-grid;place-items:center;color:#fff;font-family:'Space Mono',monospace;font-size:8.5px;font-weight:700;flex:none}",
    neu:".logo{position:relative;width:26px;height:26px;border-radius:6px;overflow:hidden;display:inline-grid;place-items:center;color:#1B2233;background:#fff;font-family:'Space Mono',monospace;font-size:8.5px;font-weight:700;flex:none}"
  }
]);

/* ---------- PAGES: build.js (airShell) ---------- */
edit('build.js', [
  {
    label:'pages airShell logo source',
    old:"const srcs=['https://pics.avs.io/64/64/'+a.iata+'.png','https://images.kiwi.com/airlines/64/'+a.iata+'.png'];",
    neu:"const srcs=['https://www.gstatic.com/flights/airline_logos/70px/'+a.iata+'.png'];"
  },
  {
    label:'pages airShell white tile',
    old:"const logo='<span class=\"logo\" style=\"background:'+col+'\">",
    neu:"const logo='<span class=\"logo\" style=\"background:#fff\">"
  },
  {
    label:'pages .airhead .logo initials color -> dark',
    old:".airhead .logo{position:relative;width:40px;height:40px;border-radius:9px;overflow:hidden;display:inline-grid;place-items:center;color:#fff;",
    neu:".airhead .logo{position:relative;width:40px;height:40px;border-radius:9px;overflow:hidden;display:inline-grid;place-items:center;color:#1B2233;background:#fff;"
  }
]);

console.log('DONE.');
