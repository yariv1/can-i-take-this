/* patch_country.js — add countryShell() and route country customs + hub pages through it */
const fs=require('fs'),path=require('path');
const F=path.join(process.cwd(),'build.js');
let s=fs.readFileSync(F,'utf8');

function must(re,n,label){const m=s.match(re);const c=m?m.length:0;console.log('  anchor ['+label+'] matched '+c+' (expected '+n+')');if(c!==n)throw new Error('ANCHOR FAIL '+label+': got '+c+' expected '+n);}

if(s.indexOf('function countryShell(')>-1){console.log('countryShell already present — skipping (idempotent).');process.exit(0);}

/* ---- anchor checks ---- */
must(/function setS\(o\)\{Object\.assign\(w\.S,o\);\}/g,1,'setS');
must(/const url=`\/country\/\$\{slug\(cn\)\}\/\$\{cc\.url\}\/`;\n      write\(url\+'index\.html', shell\(\{/g,1,'cat-write');
must(/write\(hub\+'index\.html', shell\(\{\n      url:hub, title:`Travelling to /g,1,'hub-write');

/* ---- 1. countryShell definition (inserted before setS) ---- */
const CS = `function countryShell(o){
  var cn=o.c.name, sl=slug(cn), canonical=BASE+o.url;
  function flagFromCode(cc){return String(cc).replace(/./g,function(ch){return String.fromCodePoint(127397+ch.toUpperCase().charCodeAt(0));});}
  var flag=flagFromCode(o.c.code);
  var VICON={go:'<path d="M20 6 9 17l-5-5"/>',warn:'<path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',stop:'<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/>'};
  var VLABEL={go:'Allowed',warn:'Check first',stop:'Not allowed',info:'Check the source'};
  var visible=[
    {t:'\\u2039 All rules',u:'/',back:true},
    {t:'Duty-free',u:'/country/'+sl+'/alcohol/',key:'alcohol'},
    {t:'Vapes',u:'/country/'+sl+'/vaping/',key:'vape'},
    {t:'Tobacco',u:'/country/'+sl+'/tobacco/',key:'tobacco'},
    {t:'Medication',u:'/medication/into/'+sl+'/',key:'med'}
  ];
  var more=[
    {t:'Pets',u:'/pets/'+sl+'/',key:'pets'},
    {t:'Food',u:'/food/'+sl+'/',key:'food'},
    {t:'Cash',u:'/country/'+sl+'/cash/',key:'cash'},
    {t:'Plants',u:'/country/'+sl+'/plants-seeds/',key:'plants'}
  ];
  var act=o.cat||null;
  var tabHtml=visible.map(function(t){return '<a class="tab'+(t.key&&t.key===act?' on':'')+(t.back?' back':'')+'" href="'+t.u+'">'+esc(t.t)+'</a>';}).join('');
  var moreHtml=more.map(function(t){return '<a class="tab'+(t.key&&t.key===act?' on':'')+'" href="'+t.u+'">'+esc(t.t)+'</a>';}).join('');
  var moreBlock='<details class="more"><summary><span>More</span><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></summary><div class="morerow">'+moreHtml+'</div></details>';

  var main;
  if(o.mode==='hub'){
    var cards=o.cards.map(function(cd){return '<a class="qcard '+cd.status+'" href="'+cd.u+'"><span class="qv">'+VLABEL[cd.status]+'</span><span class="ql"><b>'+esc(cd.label)+'</b><span class="qh">'+esc(cd.head)+'</span></span></a>';}).join('');
    main='<div class="hubintro"><span class="route"><span>&#128706; ENTERING</span><span><b>'+esc(cn)+'</b> '+flag+'</span></span><p class="hublead">What you can bring into '+esc(cn)+' at a glance. Tap a topic for the exact rule.</p></div><div class="qgrid">'+cards+'</div>';
  } else {
    var v=o.v, lines=(v.lines||[]).filter(Boolean).map(function(l){return '<li>'+esc(l)+'</li>';}).join('');
    var route='<span>&#128706; ENTERING</span><span><b>'+esc(cn)+'</b> '+flag+'</span>';
    main='<div class="pass '+v.status+' print"><div class="strip"><div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">'+VICON[v.status]+'</svg></div><div><div class="verdict">'+VLABEL[v.status]+'</div><div class="vsub">At the border</div></div></div><div class="perf"></div><div class="body"><div class="route">'+route+'</div><p class="headline">'+esc(v.head||'')+'</p><ul class="detail">'+lines+'</ul><div class="src">'+esc(v.src||'')+'</div></div></div>';
  }

  var faqLd={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":o.h1||('What can I bring into '+cn+'?'),"acceptedAnswer":{"@type":"Answer","text":o.faqA||''}}]};
  var bread={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":BASE+"/"},{"@type":"ListItem","position":2,"name":cn+" customs","item":canonical}]};

  return '<!doctype html><html lang="en"><head>\\n'
+'<!-- Google tag (gtag.js) -->\\n'
+'<script async src="https://www.googletagmanager.com/gtag/js?id=G-0HQ16GNH78"></scr'+'ipt>\\n'
+'<script>\\nwindow.dataLayer=window.dataLayer||[];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag(\\'js\\',new Date());\\ngtag(\\'config\\',\\'G-0HQ16GNH78\\');\\n</scr'+'ipt>\\n'
+'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6832331505671007" crossorigin="anonymous"></scr'+'ipt>\\n'
+'<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\\n'
+'<title>'+esc(o.title)+'</title>\\n'
+'<meta name="description" content="'+esc(o.desc)+'">\\n'
+'<link rel="canonical" href="'+canonical+'">\\n'
+'<link rel="icon" href="/assets/favicon.ico" sizes="any">\\n'
+'<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">\\n'
+'<meta property="og:title" content="'+esc(o.title)+'"><meta property="og:description" content="'+esc(o.desc)+'"><meta property="og:type" content="article"><meta property="og:url" content="'+canonical+'">\\n'
+'<script type="application/ld+json">'+JSON.stringify(faqLd)+'</scr'+'ipt>\\n'
+'<script type="application/ld+json">'+JSON.stringify(bread)+'</scr'+'ipt>\\n'
+'<script>(function(){var t=localStorage.getItem(\\'citt-theme\\')||\\'dark\\';document.documentElement.setAttribute(\\'data-theme\\',t);})();</scr'+'ipt>\\n'
+'<style>\\n'
+"@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');\\n"
+':root,[data-theme="dark"]{--bg:#0E1428;--glow:#1A2542;--surface:#161F3A;--surface-2:#22304F;--line:#2A3A5E;--text:#EDF0F7;--muted:#8A96B8;--accent:#4CC2FF;--go:#2FCF9B;--warn:#F5B841;--stop:#FF6B6B;--info:#4CC2FF;--card:#182238;--card-text:#EDF0F7;--card-muted:#98A4C2;--card-line:#2A3A5E;--card-notch:#0E1428;--card-sub:#1E2A46;--card-sub-line:#2A3A5E;--tg-neutral:#C2CCE4;--tg-green:#54DDAD;--tg-amber:#F3C765;--tg-stop:#FF9A9A;--mark-bg:#26324E;--sel-bg:#4CC2FF;--sel-text:#08111f;--more-t:#A4B0CF;--more-th:#D2DAEF;--more-hbg:#161F3A;}\\n'
+'[data-theme="light"]{--bg:#ECEAE1;--glow:#FFFFFF;--surface:#FFFFFF;--surface-2:#F0EEE4;--line:#DED9CB;--text:#1B2233;--muted:#6B7488;--accent:#1E86D6;--go:#2FCF9B;--warn:#F5B841;--stop:#FF6B6B;--info:#4CC2FF;--card:#FFFFFF;--card-text:#141414;--card-muted:#6A6A6A;--card-line:#E7E3D6;--card-notch:#ECEAE1;--card-sub:#F4F1E8;--card-sub-line:#E4DFCE;--tg-neutral:#333333;--tg-green:#0F6F49;--tg-amber:#8A6410;--tg-stop:#A23131;--mark-bg:#333A48;--sel-bg:#1B2233;--sel-text:#FFFFFF;--more-t:#6B7488;--more-th:#1B2233;--more-hbg:#FFFFFF;}\\n'
+'*{box-sizing:border-box}body{margin:0;font-family:\\'Inter\\',system-ui,sans-serif;font-size:16px;line-height:1.55;color:var(--text);background:radial-gradient(1200px 600px at 50% -10%,var(--glow) 0%,transparent 60%),var(--bg);min-height:100vh;-webkit-font-smoothing:antialiased;transition:background .25s,color .25s}\\n'
+'.wrap{max-width:760px;margin:0 auto;padding:20px 18px 64px}\\n'
+'.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}\\n'
+'.brand{display:flex;align-items:center;gap:10px;text-decoration:none}\\n'
+'.mark{width:34px;height:34px;border-radius:10px;flex:none;background:var(--mark-bg);display:grid;place-items:center;color:#EDF0F7;box-shadow:0 6px 18px rgba(0,0,0,.22)}\\n'
+'.mark svg{width:18px;height:18px}\\n'
+'.brand h1{font-family:\\'Space Grotesk\\',\\'Inter\\',sans-serif;font-weight:700;font-size:18px;letter-spacing:-.4px;margin:0;color:var(--text)}\\n'
+'.theme-toggle{display:flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--line);color:var(--text);border-radius:999px;padding:7px 12px;font-family:\\'Inter\\',sans-serif;font-size:12px;font-weight:600;cursor:pointer}\\n'
+'.theme-toggle .ico{font-size:13px}\\n'
+'.airhead{display:flex;align-items:center;gap:12px;margin:6px 0 16px}\\n'
+'.airhead .cflag{font-size:34px;line-height:1;flex:none}\\n'
+'.airhead h2{font-family:\\'Space Grotesk\\',\\'Inter\\',sans-serif;font-size:1.7rem;line-height:1.15;margin:0;font-weight:700}\\n'
+'.airhead h2 .muted{color:var(--muted);font-weight:600}\\n'
+'.tabs{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 8px}\\n'
+'.tab{background:var(--surface);border:1px solid var(--line);border-radius:999px;color:var(--text);text-decoration:none;font-weight:500;font-size:13.5px;padding:9px 15px;transition:.14s;display:inline-flex;align-items:center;gap:6px}\\n'
+'.tab:hover{border-color:var(--surface-2)}\\n'
+'.tab.on{background:var(--sel-bg);color:var(--sel-text);border-color:var(--sel-bg);font-weight:600}\\n'
+'.tab.back{color:var(--muted)}\\n'
+'.more{margin:0 0 26px}\\n'
+'.more summary{list-style:none;display:inline-flex;align-items:center;gap:5px;cursor:pointer;color:var(--more-t);font-size:13.5px;font-weight:600;padding:6px 10px;border-radius:8px;user-select:none;transition:.14s}\\n'
+'.more summary::-webkit-details-marker{display:none}\\n'
+'.more summary:hover{color:var(--more-th);background:var(--more-hbg)}\\n'
+'.more summary .chev{width:15px;height:15px;transition:transform .18s}\\n'
+'.more[open] summary .chev{transform:rotate(180deg)}\\n'
+'.morerow{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 0}\\n'
+'.pass{position:relative;background:var(--card);color:var(--card-text);border-radius:18px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.30);transition:background .25s,color .25s}\\n'
+'.pass.print{animation:print .5s cubic-bezier(.2,.9,.25,1) both}\\n'
+'@keyframes print{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}\\n'
+'.strip{padding:15px 18px;display:flex;align-items:center;gap:12px;color:#08111f}\\n'
+'.strip .badge{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:rgba(0,0,0,.16)}\\n'
+'.strip .badge svg{width:19px;height:19px}\\n'
+'.strip .verdict{font-family:\\'Space Grotesk\\',sans-serif;font-weight:700;font-size:20px;letter-spacing:-.4px;line-height:1}\\n'
+'.strip .vsub{font-family:\\'Space Mono\\',monospace;font-size:9.5px;letter-spacing:1px;text-transform:uppercase;opacity:.75;margin-top:3px}\\n'
+'.go .strip{background:var(--go)}.warn .strip{background:var(--warn)}.stop .strip{background:var(--stop)}.info .strip{background:var(--info)}\\n'
+'.perf{position:relative;height:0;border-top:2px dashed var(--card-line)}\\n'
+'.perf::before,.perf::after{content:"";position:absolute;top:-11px;width:22px;height:22px;border-radius:50%;background:var(--card-notch);transition:background .25s}\\n'
+'.perf::before{left:-11px}.perf::after{right:-11px}\\n'
+'.body{padding:16px 18px 18px}\\n'
+'.route{font-family:\\'Space Mono\\',monospace;font-size:10.5px;letter-spacing:.5px;color:var(--card-muted);display:flex;flex-wrap:wrap;gap:6px 10px;margin-bottom:12px}\\n'
+'.route b{color:var(--card-text)}\\n'
+'.headline{font-family:\\'Space Grotesk\\',sans-serif;font-weight:600;font-size:16px;line-height:1.3;margin:0 0 10px;color:var(--card-text)}\\n'
+'.detail{list-style:none;margin:0;padding:0}\\n'
+'.detail li{position:relative;padding-left:18px;font-size:13.5px;line-height:1.5;color:var(--card-text);opacity:.92;margin-bottom:6px}\\n'
+'.detail li::before{content:"";position:absolute;left:0;top:8px;width:6px;height:6px;border-radius:50%;background:var(--card-text);opacity:.4}\\n'
+'.src{margin-top:12px;padding-top:11px;border-top:1px solid var(--card-line);font-family:\\'Space Mono\\',monospace;font-size:9.5px;letter-spacing:.3px;color:var(--card-muted);line-height:1.5}\\n'
+'.hubintro{margin:0 0 14px}\\n'
+'.hubintro .route{margin-bottom:8px}\\n'
+'.hublead{margin:0;color:var(--muted);font-size:.95rem}\\n'
+'.qgrid{display:flex;flex-direction:column;gap:10px}\\n'
+'.qcard{display:flex;align-items:stretch;gap:0;background:var(--card);border-radius:14px;overflow:hidden;text-decoration:none;box-shadow:0 12px 30px rgba(0,0,0,.22);transition:transform .12s}\\n'
+'.qcard:hover{transform:translateY(-1px)}\\n'
+'.qcard .qv{flex:none;width:96px;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px 8px;font-family:\\'Space Grotesk\\',sans-serif;font-weight:700;font-size:13px;line-height:1.15;color:#08111f}\\n'
+'.qcard.go .qv{background:var(--go)}.qcard.warn .qv{background:var(--warn)}.qcard.stop .qv{background:var(--stop)}.qcard.info .qv{background:var(--info)}\\n'
+'.qcard .ql{padding:11px 14px;color:var(--card-text);display:flex;flex-direction:column;justify-content:center;gap:3px}\\n'
+'.qcard .ql b{font-family:\\'Space Grotesk\\',sans-serif;font-weight:600;font-size:14.5px}\\n'
+'.qcard .qh{font-size:12.5px;color:var(--card-muted);line-height:1.4}\\n'
+'.tlinks{margin-top:.7em;text-align:center;line-height:2}.tlinks a{color:#8A96B8;text-decoration:none}.tlinks a:hover{color:var(--accent)}.tlinks a+a::before{content:"\\u2022";color:#8A96B8;margin:0 10px}\\n'
+'footer{margin-top:2.4em;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);padding-top:1em;line-height:1.55}\\n'
+'</style></head><body>\\n'
+'<div class="wrap">\\n'
+'<div class="topbar"><a class="brand" href="/" aria-label="canitakethis.co home"><span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.9 4.3-2 2-2.2-.4a.5.5 0 0 0-.5.8L6 17l2.7 2.4a.5.5 0 0 0 .8-.5l-.4-2.2 2-2 4.3 3.9a.5.5 0 0 0 .8-.5Z"/></svg></span><h1>can i take this?</h1></a>'
+'<button class="theme-toggle" id="themeToggle" onclick="__tt()"><span class="ico" id="themeIcon">&#9728;</span><span id="themeLabel">Light</span></button></div>\\n'
+'<div class="airhead"><span class="cflag">'+flag+'</span><h2>'+esc(cn)+' <span class="muted">Customs Rules</span></h2></div>\\n'
+'<nav class="tabs">'+tabHtml+'</nav>\\n'
+moreBlock+'\\n'
+'<main>'+main+'</main>\\n'
+'<footer>Rules change and vary by nationality, route and fare. This is guidance, not legal advice \\u2014 always confirm with the airline or the official customs authority before you travel. Updated 2026.<nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>\\n'
+'</div>\\n'
+'<script>function __lbl(c){var l=document.getElementById(\\'themeLabel\\'),i=document.getElementById(\\'themeIcon\\');if(l)l.textContent=c===\\'dark\\'?\\'Light\\':\\'Dark\\';if(i)i.innerHTML=c===\\'dark\\'?\\'\\u263C\\':\\'\\u263D\\';}function __tt(){var t=document.documentElement.getAttribute(\\'data-theme\\')===\\'dark\\'?\\'light\\':\\'dark\\';document.documentElement.setAttribute(\\'data-theme\\',t);localStorage.setItem(\\'citt-theme\\',t);__lbl(t);}window.addEventListener(\\'DOMContentLoaded\\',function(){__lbl(document.documentElement.getAttribute(\\'data-theme\\'));});</scr'+'ipt>\\n'
+'<script src="/feedback.js" defer></scr'+'ipt>\\n'
+'</body></html>';
}

`;

s=s.replace(/function setS\(o\)\{Object\.assign\(w\.S,o\);\}/, CS+'function setS(o){Object.assign(w.S,o);}');

/* ---- 2. rewire country CAT page ---- */
const catOld=`      const url=\`/country/\${slug(cn)}/\${cc.url}/\`;
      write(url+'index.html', shell({
        url, title:\`\${cc.t(cn)} | canitakethis.co\`,
        desc:\`\${v.head} \${(v.lines||[]).filter(Boolean)[0]||''}\`.slice(0,155),
        h1:cc.q(cn), badge:v.status, answer:v.head, lines:v.lines,
        source:v.source||{label:\`\${cn} customs authority\`,url:null},
        intro:null,
        related:countryCats.filter(x=>x.cat!==cc.cat).map(x=>({url:\`/country/\${slug(cn)}/\${x.url}/\`,t:x.t(cn).replace(' 2026','')})).concat([{url:\`/country/\${slug(cn)}/\`,t:\`All \${cn} rules\`}]),
        faq:{q:cc.q(cn),a:\`\${v.head} \${(v.lines||[]).filter(Boolean).join(' ')}\`}
      }));`;
const catNew=`      const url=\`/country/\${slug(cn)}/\${cc.url}/\`;
      write(url+'index.html', countryShell({
        mode:'cat', url, c, cat:cc.cat, v,
        title:\`\${cc.t(cn)} | canitakethis.co\`,
        desc:\`\${v.head} \${(v.lines||[]).filter(Boolean)[0]||''}\`.slice(0,155),
        h1:cc.q(cn), faqA:\`\${v.head} \${(v.lines||[]).filter(Boolean).join(' ')}\`
      }));`;
if(s.indexOf(catOld)<0)throw new Error('cat block exact match not found');
s=s.replace(catOld,catNew);

/* ---- 3. rewire country HUB page ---- */
const hubOld=`    const cards=countryCats.map(cc=>{setS({mode:'country',cat:cc.cat,country:cn,detail:null});const v=w.verdict();const s=STATUS[v.status]||STATUS.info;return \`<a class="card" href="/country/\${slug(cn)}/\${cc.url}/" style="display:block;border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin:8px 0;text-decoration:none;color:inherit"><b>\${esc(cc.q(cn).replace(' (2026)',''))}</b><br><span style="color:\${s.c};font-weight:700">\${s.w}</span> — \${esc(v.head)}</a>\`;}).join('');
    write(hub+'index.html', shell({
      url:hub, title:\`Travelling to \${cn}? Customs & What You Can Bring 2026 | canitakethis.co\`,
      desc:\`What you can bring into \${cn}: duty-free alcohol and tobacco, cash declaration limit, plants, and vaping rules — 2026.\`,
      h1:\`What can I bring into \${cn}? (2026 customs)\`, badge:'info',
      answer:\`\${cn} customs at a glance — alcohol, tobacco, cash, plants and vaping.\`,
      lines:null, source:null, intro:null, related:null,
      faq:{q:\`What can I bring into \${cn}?\`,a:\`\${cn} sets duty-free limits for alcohol and tobacco, a cash declaration threshold, and rules for plants and vaping. See each category for the exact figure.\`}
    }).replace('<a class="cta"', cards+'<a class="cta"'));`;
const hubNew=`    const hubCards=countryCats.map(cc=>{setS({mode:'country',cat:cc.cat,country:cn,detail:null});const v=w.verdict();return {u:\`/country/\${slug(cn)}/\${cc.url}/\`,label:cc.q(cn).replace(' (2026)',''),status:v.status,head:v.head};});
    write(hub+'index.html', countryShell({
      mode:'hub', url:hub, c, cat:null, cards:hubCards,
      title:\`Travelling to \${cn}? Customs & What You Can Bring 2026 | canitakethis.co\`,
      desc:\`What you can bring into \${cn}: duty-free alcohol and tobacco, cash declaration limit, plants, and vaping rules — 2026.\`,
      h1:\`What can I bring into \${cn}? (2026 customs)\`,
      faqA:\`\${cn} sets duty-free limits for alcohol and tobacco, a cash declaration threshold, and rules for plants and vaping. See each category for the exact figure.\`
    }));`;
if(s.indexOf(hubOld)<0)throw new Error('hub block exact match not found');
s=s.replace(hubOld,hubNew);

fs.writeFileSync(F,s);
console.log('patch_country.js applied OK');
