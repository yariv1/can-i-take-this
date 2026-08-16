/* canitakethis.co — static SEO page generator
   Reuses the app's REAL verdict functions (via jsdom) so pages never drift from the tool. */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const SRC = path.join(__dirname, 'canitakethis.html');
const OUT = __dirname;
const BASE = 'https://canitakethis.co';
const html = fs.readFileSync(SRC, 'utf8');

const dom = new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true, url: BASE });
const w = dom.window;

// ---- extract the checker's own style/markup/script for inlining on the homepage ----
const CHK_STYLE_M = html.match(/<style>([\s\S]*?)<\/style>/);
const CHK_STYLE = CHK_STYLE_M ? CHK_STYLE_M[1] : '';
const CHK_SCRIPT_M = html.match(/<script>([\s\S]*?)<\/script>/);
let CHK_SCRIPT = CHK_SCRIPT_M ? CHK_SCRIPT_M[1] : '';
const CHK_BODY = CHK_STYLE_M && CHK_SCRIPT_M
  ? html.slice(CHK_STYLE_M.index + CHK_STYLE_M[0].length, CHK_SCRIPT_M.index).trim()
  : '';
// persist theme changes made from the homepage checker's own toggle, and pick up
// whatever the head-guard script already set on <html> instead of forcing 'dark'
CHK_SCRIPT = CHK_SCRIPT
  .replace("var theme='dark';", "var theme=document.documentElement.getAttribute('data-theme')||'dark';")
  .replace(
    "function applyTheme(){document.documentElement.setAttribute('data-theme',theme);",
    "function applyTheme(){document.documentElement.setAttribute('data-theme',theme);localStorage.setItem('citt-theme',theme);"
  );

// wait a tick for load-time script to settle
setTimeout(run, 300);

function slug(s){return s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function fareTiers(label){var L=String(label).toLowerCase();var noPE=L.replace(/premium\s+economy/g,' ');var peSrc=L.replace(/saga premium/g,' ');var first=/\bfirst\b|suites|premi\u00E8re|premiere/.test(L);var biz=/business|\bclub\b|crown|\bmint\b|bizclass|cloud nine|prestige|\bpremier\b|aerspace|delta one|polaris|royal silk|business select|saga premium|clase premier/.test(L);var pe=/premium/.test(peSrc);var econ=/economy|\u00E9conomy|b\u00E1sica|cl\u00E1sica|econo/.test(noPE);var t=[];if(econ||!(first||biz||pe))t.push('Economy');if(pe)t.push('Premium Economy');if(biz)t.push('Business');if(first)t.push('First');return t.join(' / ');}
function ensure(d){fs.mkdirSync(d,{recursive:true});}
function write(rel, content){const p=path.join(OUT,rel);ensure(path.dirname(p));fs.writeFileSync(p,content);}

const pages=[]; // {url,title,changefreq}

const STATUS={go:{w:'Yes',c:'#137a3f',bg:'#e7f6ec'},warn:{w:'With limits',c:'#8a5a00',bg:'#fdf3e0'},stop:{w:'No',c:'#b0202f',bg:'#fbe9ea'},info:{w:'Check',c:'#555',bg:'#eee'}};

function shell({url,title,desc,h1,badge,answer,lines,source,related,faq,intro}){
  const canonical=BASE+url;
  const st=STATUS[badge]||STATUS.info;
  const faqLd={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":faq.q,"acceptedAnswer":{"@type":"Answer","text":faq.a}}]};
  const bread={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":BASE+"/"},{"@type":"ListItem","position":2,"name":h1,"item":canonical}]};
  const linksHtml=related&&related.length?`<nav class="rel"><h2>Related checks</h2><ul>${related.map(r=>`<li><a href="${r.url}">${esc(r.t)}</a></li>`).join('')}</ul></nav>`:'';
  const linesHtml=lines&&lines.length?`<ul class="lines">${lines.filter(Boolean).map(l=>`<li>${esc(l)}</li>`).join('')}</ul>`:'';
  const srcHtml=source?`<p class="src">Source: ${source.url?`<a href="${esc(source.url)}" rel="nofollow noopener" target="_blank">${esc(source.label)}</a>`:esc(source.label)}</p>`:'';
  return `<!doctype html><html lang="en"><head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0HQ16GNH78"></script>
<script>
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','G-0HQ16GNH78');
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6832331505671007" crossorigin="anonymous"></script>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="/assets/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="article"><meta property="og:url" content="${canonical}">
<script type="application/ld+json">${JSON.stringify(faqLd)}</script>
<script type="application/ld+json">${JSON.stringify(bread)}</script>
<script>(function(){var t=localStorage.getItem('citt-theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();</script>
<style>
:root,[data-theme="dark"]{--bg:#0E1428;--glow:#1A2542;--surface:#161F3A;--surface-2:#22304F;--line:#2A3A5E;--text:#EDF0F7;--muted:#8A96B8;--accent:#4CC2FF;--card:#182238;--card-text:#EDF0F7;--card-muted:#98A4C2;--card-line:#2A3A5E;}
[data-theme="light"]{--bg:#ECEAE1;--glow:#FFFFFF;--surface:#FFFFFF;--surface-2:#F0EEE4;--line:#DED9CB;--text:#1B2233;--muted:#6B7488;--accent:#1E86D6;--card:#FFFFFF;--card-text:#141414;--card-muted:#6A6A6A;--card-line:#E7E3D6;}
*{box-sizing:border-box}body{margin:0;font:16px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--text);background:var(--bg);transition:background .25s,color .25s}
.wrap{max-width:720px;margin:0 auto;padding:22px 18px 60px}
header{display:flex;align-items:center;gap:10px}header a{color:var(--accent);text-decoration:none;font-weight:700}header .back{font-size:1.7rem;line-height:1}
h1{font-size:1.55rem;line-height:1.25;margin:.6em 0 .2em}
.badge{display:inline-block;font-weight:700;padding:4px 12px;border-radius:999px;font-size:.95rem;margin:.4em 0}
.answer{font-size:1.15rem;font-weight:600;margin:.3em 0 .1em}
.lines{margin:.6em 0;padding-left:1.15em}.lines li{margin:.35em 0}
.src{color:var(--muted);font-size:.9rem}
.cta{display:inline-block;margin:1.2em 0;background:var(--accent);color:#fff;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:700}
.rel{margin-top:2em;border-top:1px solid var(--line);padding-top:1em}.rel h2{font-size:1rem}.rel ul{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:8px}
.rel a{display:inline-block;background:var(--surface);border:1px solid var(--line);padding:7px 12px;border-radius:10px;text-decoration:none;color:var(--text);font-size:.9rem}
.tlinks{margin-top:.7em;text-align:center;line-height:2}.tlinks a{color:#8A96B8;text-decoration:none}.tlinks a:hover{color:var(--accent)}.tlinks a+a::before{content:"•";color:#8A96B8;margin:0 10px}
footer{margin-top:2.5em;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);padding-top:1em}
.intro{color:var(--muted)}
.theme-toggle{position:fixed;top:12px;right:12px;z-index:99;display:inline-flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--line);color:var(--text);border-radius:999px;padding:7px 12px;font:600 12px/1 Inter,system-ui,sans-serif;cursor:pointer}
</style></head><body>
<button class="theme-toggle" id="themeToggle" onclick="__tt()"><span id="themeIcon">&#9788;</span> <span id="themeLabel">Light</span></button>
<div class="wrap">
<header><a href="/" class="back" aria-label="Back to home">&#8249;</a><a href="/" class="logo">canitakethis.co</a></header>
<main>
<h1>${esc(h1)}</h1>
<span class="badge" style="background:${st.bg};color:${st.c}">${st.w}</span>
<p class="answer">${esc(answer)}</p>
${intro?`<p class="intro">${esc(intro)}</p>`:''}
${linesHtml}
${srcHtml}
<a class="cta" href="/">Check your exact trip on canitakethis.co →</a>
${linksHtml}
</main>
<footer>Rules change and vary by nationality, route and fare. This is guidance, not legal advice — always confirm with the airline or the official customs authority before you travel. Updated 2026. <nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
</div>
<script>function __lbl(c){var l=document.getElementById('themeLabel'),i=document.getElementById('themeIcon');if(l)l.textContent=c==='dark'?'Light':'Dark';if(i)i.innerHTML=c==='dark'?'☼':'☽';}function __tt(){var t=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',t);localStorage.setItem('citt-theme',t);__lbl(t);}window.addEventListener('DOMContentLoaded',function(){__lbl(document.documentElement.getAttribute('data-theme'));});</script>
<script src="/feedback.js" defer></script>
</body></html>`;
}

function airShell({url,title,desc,a,fares}){
  const canonical=BASE+url;
  const LOGOCOLORS=['#2E6BE6','#12A150','#B8412E','#7A5CFF','#D98A00','#0E7C86','#C0356B','#3A6E3A'];
  const col=LOGOCOLORS[a.iata.charCodeAt(0)%LOGOCOLORS.length];
  const srcs=['https://www.gstatic.com/flights/airline_logos/70px/'+a.iata+'.png'];
  const logo='<span class="logo" style="background:#fff"><span>'+esc(a.iata)+'</span><img class="logo-img" data-srcs="'+srcs.join('|')+'" data-i="0" src="'+srcs[0]+'" alt=""></span>';
  const NOTICE=/no checked bag|for a fee|not included|not sold|add one|add a|add 1/i;
  const faqLd={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is "+a.name+"'s baggage allowance?","acceptedAnswer":{"@type":"Answer","text":a.name+" economy: "+fares[0].cabin+" "+fares[0].checked}}]};
  const bread={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":BASE+"/"},{"@type":"ListItem","position":2,"name":a.name+" baggage","item":canonical}]};
  const tabs=[
    {t:'\u2039 All rules',u:'/',back:true},
    {t:'Baggage',u:url,on:true},
    {t:'Liquids in carry-on',u:'/plane/liquids/'},
    {t:'Power banks on a plane',u:'/plane/power-bank/'},
    {t:'Vapes on a plane',u:'/plane/vape-e-cigarette/'}
  ];
  const tabsHtml=tabs.map(t=>'<a class="tab'+(t.on?' on':'')+(t.back?' back':'')+'" href="'+t.u+'">'+esc(t.t)+'</a>').join('');
  const blocks=fares.map(fr=>{
    const notice=NOTICE.test(fr.checked)?'<div class="notice"><div class="ntitle">Please notice</div><div class="ntext">'+esc(fr.checked)+'</div></div>':'';
    return '<section class="fblock"><h2>'+esc(fr.label)+' <span class="tier">'+esc(fareTiers(fr.label))+'</span> <span class="tag tag-neutral">PER PASSENGER</span></h2>'
      +'<div class="sub-h">On the plain</div><p class="sub-p">'+esc(fr.cabin)+'</p>'
      +'<div class="sub-h">Checked in</div><p class="sub-p">'+esc(fr.checked)+'</p>'
      +notice+'</section>';
  }).join('');
  return '<!doctype html><html lang="en"><head>\n'
+'<!-- Google tag (gtag.js) -->\n'
+'<script async src="https://www.googletagmanager.com/gtag/js?id=G-0HQ16GNH78"></scr'+'ipt>\n'
+'<script>\nwindow.dataLayer=window.dataLayer||[];\nfunction gtag(){dataLayer.push(arguments);}\ngtag(\'js\',new Date());\ngtag(\'config\',\'G-0HQ16GNH78\');\n</scr'+'ipt>\n'
+'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6832331505671007" crossorigin="anonymous"></scr'+'ipt>\n'
+'<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n'
+'<title>'+esc(title)+'</title>\n'
+'<meta name="description" content="'+esc(desc)+'">\n'
+'<link rel="canonical" href="'+canonical+'">\n'
+'<link rel="icon" href="/assets/favicon.ico" sizes="any">\n'
+'<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">\n'
+'<meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(desc)+'"><meta property="og:type" content="article"><meta property="og:url" content="'+canonical+'">\n'
+'<script type="application/ld+json">'+JSON.stringify(faqLd)+'</scr'+'ipt>\n'
+'<script type="application/ld+json">'+JSON.stringify(bread)+'</scr'+'ipt>\n'
+'<script>(function(){var t=localStorage.getItem(\'citt-theme\')||\'dark\';document.documentElement.setAttribute(\'data-theme\',t);})();</scr'+'ipt>\n'
+'<style>\n'
+"@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');\n"
+':root,[data-theme="dark"]{--bg:#0E1428;--glow:#1A2542;--surface:#161F3A;--surface-2:#22304F;--line:#2A3A5E;--text:#EDF0F7;--muted:#8A96B8;--accent:#4CC2FF;--go:#2FCF9B;--warn:#F5B841;--stop:#FF6B6B;--info:#4CC2FF;--tg-neutral:#C2CCE4;--tg-green:#54DDAD;--tg-amber:#F3C765;--tg-stop:#FF9A9A;--mark-bg:#26324E;--sel-bg:#4CC2FF;--sel-text:#08111f;--ntc-title:#FFC9A7;--ntc-text:#9E8373;--ntc-stroke:#9E8373;--ntc-bg:rgba(158,131,115,.10);}\n'
+'[data-theme="light"]{--bg:#ECEAE1;--glow:#FFFFFF;--surface:#FFFFFF;--surface-2:#F0EEE4;--line:#DED9CB;--text:#1B2233;--muted:#6B7488;--accent:#1E86D6;--go:#2FCF9B;--warn:#F5B841;--stop:#FF6B6B;--info:#4CC2FF;--tg-neutral:#333333;--tg-green:#0F6F49;--tg-amber:#8A6410;--tg-stop:#A23131;--mark-bg:#333A48;--sel-bg:#1B2233;--sel-text:#FFFFFF;--ntc-title:#E88345;--ntc-text:#9C4E1E;--ntc-stroke:#E59868;--ntc-bg:rgba(229,152,104,.14);}\n'
+'*{box-sizing:border-box}body{margin:0;font-family:\'Inter\',system-ui,sans-serif;font-size:16px;line-height:1.55;color:var(--text);background:radial-gradient(1200px 600px at 50% -10%,var(--glow) 0%,transparent 60%),var(--bg);min-height:100vh;-webkit-font-smoothing:antialiased;transition:background .25s,color .25s}\n'
+'.wrap{max-width:760px;margin:0 auto;padding:20px 18px 64px}\n'
+'.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}\n'
+'.brand{display:flex;align-items:center;gap:10px;text-decoration:none}\n'
+'.mark{width:34px;height:34px;border-radius:10px;flex:none;background:var(--mark-bg);display:grid;place-items:center;color:#EDF0F7;box-shadow:0 6px 18px rgba(0,0,0,.22)}\n'
+'.mark svg{width:18px;height:18px}\n'
+'.brand h1{font-family:\'Space Grotesk\',\'Inter\',sans-serif;font-weight:700;font-size:18px;letter-spacing:-.4px;margin:0;color:var(--text)}\n'
+'.theme-toggle{display:flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--line);color:var(--text);border-radius:999px;padding:7px 12px;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:600;cursor:pointer}\n'
+'.theme-toggle .ico{font-size:13px}\n'
+'.airhead{display:flex;align-items:center;gap:12px;margin:6px 0 16px}\n'
+'.airhead .logo{position:relative;width:40px;height:40px;border-radius:9px;overflow:hidden;display:inline-grid;place-items:center;color:#1B2233;background:#fff;font-family:\'Space Mono\',monospace;font-size:11px;font-weight:700;flex:none}\n'
+'.airhead .logo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n'
+'.airhead h2{font-family:\'Space Grotesk\',\'Inter\',sans-serif;font-size:1.7rem;line-height:1.15;margin:0;font-weight:700}\n'
+'.airhead h2 .muted{color:var(--muted);font-weight:600}\n'
+'.tabs{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 26px}\n'
+'.tab{background:var(--surface);border:1px solid var(--line);border-radius:999px;color:var(--text);text-decoration:none;font-weight:500;font-size:13.5px;padding:9px 15px;transition:.14s;display:inline-flex;align-items:center;gap:6px}\n'
+'.tab:hover{border-color:var(--surface-2)}\n'
+'.tab.on{background:var(--sel-bg);color:var(--sel-text);border-color:var(--sel-bg);font-weight:600}\n'
+'.tab.back{color:var(--muted)}\n'
+'.fblock{margin:0 0 34px}\n'
+'.fblock h2{font-family:\'Space Grotesk\',\'Inter\',sans-serif;font-size:1.32rem;font-weight:700;margin:0 0 14px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}\n'
+'.tag{display:inline-flex;align-items:center;height:24px;padding:0 6px;border-radius:8px;font-family:\'Space Mono\',monospace;font-size:14px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}\n'
+'.tag-neutral{background:rgba(174,195,250,.16);color:#AEC3FA}\n'
+'.tier{display:inline-flex;align-items:center;height:24px;padding:0 6px;border-radius:8px;font-family:\'Space Mono\',monospace;font-size:14px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:rgba(66,194,255,.16);color:#42C2FF}\n'
+'[data-theme="light"] .tag-neutral{background:rgba(78,105,192,.16);color:#4E69C0}\n'
+'[data-theme="light"] .tier{background:rgba(30,134,214,.16);color:#1E86D6}\n'
+'.sub-h{color:var(--accent);font-weight:600;font-size:1rem;margin:14px 0 3px}\n'
+'.sub-p{margin:0;color:var(--text)}\n'
+'.notice{margin:16px 0 0;border:1px dashed var(--ntc-stroke);border-radius:12px;background:var(--ntc-bg);padding:14px 16px}\n'
+'.notice .ntitle{color:var(--ntc-title);font-weight:700;margin-bottom:4px}\n'
+'.notice .ntext{color:var(--ntc-text)}\n'
+'.tlinks{margin-top:.7em;text-align:center;line-height:2}.tlinks a{color:#8A96B8;text-decoration:none}.tlinks a:hover{color:var(--accent)}.tlinks a+a::before{content:"\u2022";color:#8A96B8;margin:0 10px}\n'
+'footer{margin-top:2.4em;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);padding-top:1em;line-height:1.55}\n'
+'</style></head><body>\n'
+'<div class="wrap">\n'
+'<div class="topbar"><a class="brand" href="/" aria-label="canitakethis.co home"><span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.9 4.3-2 2-2.2-.4a.5.5 0 0 0-.5.8L6 17l2.7 2.4a.5.5 0 0 0 .8-.5l-.4-2.2 2-2 4.3 3.9a.5.5 0 0 0 .8-.5Z"/></svg></span><h1>can i take this?</h1></a>'
+'<button class="theme-toggle" id="themeToggle" onclick="__tt()"><span class="ico" id="themeIcon">&#9728;</span><span id="themeLabel">Light</span></button></div>\n'
+'<div class="airhead">'+logo+'<h2>'+esc(a.name)+' <span class="muted">Airline Rules</span></h2></div>\n'
+'<nav class="tabs">'+tabsHtml+'</nav>\n'
+'<main>'+blocks+'</main>\n'
+'<footer>Rules change and vary by nationality, route and fare. This is guidance, not legal advice \u2014 always confirm with the airline or the official customs authority before you travel. Updated 2026.<nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>\n'
+'</div>\n'
+'<script>function advLogo(im){var l=(im.dataset.srcs||"").split("|"),i=parseInt(im.dataset.i||"0",10)+1;if(i<l.length){im.dataset.i=i;im.src=l[i];}else{im.style.display="none";}}document.querySelectorAll("img.logo-img").forEach(function(im){im.onerror=function(){advLogo(im);};if(im.complete&&im.naturalWidth===0)advLogo(im);});</scr'+'ipt>\n'
+'<script>function __lbl(c){var l=document.getElementById(\'themeLabel\'),i=document.getElementById(\'themeIcon\');if(l)l.textContent=c===\'dark\'?\'Light\':\'Dark\';if(i)i.innerHTML=c===\'dark\'?\'\u263C\':\'\u263D\';}function __tt(){var t=document.documentElement.getAttribute(\'data-theme\')===\'dark\'?\'light\':\'dark\';document.documentElement.setAttribute(\'data-theme\',t);localStorage.setItem(\'citt-theme\',t);__lbl(t);}window.addEventListener(\'DOMContentLoaded\',function(){__lbl(document.documentElement.getAttribute(\'data-theme\'));});</scr'+'ipt>\n'
+'<script src="/feedback.js" defer></scr'+'ipt>\n'
+'</body></html>';
}

const TA_LIB=Buffer.from('dmFyIFZJQ09OPXtnbzonPHBhdGggZD0iTTIwIDYgOSAxN2wtNS01Ii8+Jyx3YXJuOic8cGF0aCBkPSJNMTIgOXY0bTAgNGguMDFNMTAuMyAzLjkgMS44IDE4YTIgMiAwIDAgMCAxLjcgM2gxN2EyIDIgMCAwIDAgMS43LTNMMTMuNyAzLjlhMiAyIDAgMCAwLTMuNCAwWiIvPicsc3RvcDonPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iOSIvPjxwYXRoIGQ9Ik04IDEyaDgiLz4nLGluZm86JzxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjkiLz48cGF0aCBkPSJNMTIgOGguMDFNMTEgMTJoMXY0aDEiLz4nLG5vbWF0Y2g6JzxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjkiLz48cGF0aCBkPSJNOS42IDkuNGEyLjQgMi40IDAgMCAxIDQuMiAxLjZjMCAxLjYtMi4yIDItMi4yIDMuNCIvPjxwYXRoIGQ9Ik0xMiAxNy4zaC4wMSIvPid9Owp2YXIgVkxBQkVMPXtnbzonQWxsb3dlZCcsd2FybjonQ2hlY2sgZmlyc3QnLHN0b3A6J05vdCBhbGxvd2VkJyxpbmZvOidDaGVjayB0aGUgc291cmNlJyxub21hdGNoOidObyBtYXRjaGVzIGZvdW5kJ307CmZ1bmN0aW9uIGVzYyhzKXtyZXR1cm4gU3RyaW5nKHMpLnJlcGxhY2UoLyYvZywnJmFtcDsnKS5yZXBsYWNlKC88L2csJyZsdDsnKS5yZXBsYWNlKC8+L2csJyZndDsnKS5yZXBsYWNlKC8iL2csJyZxdW90OycpO30KZnVuY3Rpb24gbWVyZ2UoYSxiKXt2YXIgbz17fSxrO2ZvcihrIGluIGEpb1trXT1hW2tdO2ZvcihrIGluIGIpb1trXT1iW2tdO3JldHVybiBvO30KZnVuY3Rpb24gZm9vZFYoZW50cnkpewogIHZhciBjPWVudHJ5LmMsY291bnRyeT1ELmNuLHJ1bGVzPUQuZm9vZFJ1bGVzLGxldmVsPXJ1bGVzW2NdfHxydWxlcy5kZWYsY249RC5jYXRuYW1lW2NdfHwnRm9vZCc7CiAgdmFyIGNhdFRhZz17dDonQ2F0ZWdvcnkgXHUwMEI3ICcrY24sazonbmV1dHJhbCd9OwogIHZhciBiYXNlPXtzb3VyY2U6RC5hdXRoLHNyYzonRm9vZCBydWxlcyBwcm90ZWN0IGFnYWluc3QgcGVzdHMgYW5kIGRpc2Vhc2UuIFdoZW4gdW5zdXJlLCBhbHdheXMgZGVjbGFyZSBpdCAtIGRlY2xhcmluZyBpcyBmcmVlLCBzbXVnZ2xpbmcgaXMgZmluZWQuJ307CiAgaWYobGV2ZWw9PT0nZ28nKXJldHVybiBtZXJnZShiYXNlLHtzdGF0dXM6J2dvJyx0YWdzOltjYXRUYWcse3Q6J0dlbmVyYWxseSBhY2NlcHRlZCcsazonZ3JlZW4nfV0saGVhZDplbnRyeS5uKycgaXMgdXN1YWxseSBmaW5lIHRvIGJyaW5nIGluLicsbGluZXM6WydTZWFsZWQsIGNvbW1lcmNpYWxseSBwYWNrYWdlZCAnK2NuLnRvTG93ZXJDYXNlKCkrJyBpcyBnZW5lcmFsbHkgYWNjZXB0ZWQuJywnU3RpbGwgdGljayB0aGUgImZvb2QiIGJveCBvbiB5b3VyIGFycml2YWwgY2FyZCBpZiB0aGVyZSBpcyBvbmUuJ119KTsKICBpZihsZXZlbD09PSdzdG9wJylyZXR1cm4gbWVyZ2UoYmFzZSx7c3RhdHVzOidzdG9wJyx0YWdzOltjYXRUYWcse3Q6J05vdCBwZXJtaXR0ZWQnLGs6J3N0b3AnfV0saGVhZDonTGVhdmUgdGhlICcrZW50cnkubi50b0xvd2VyQ2FzZSgpKycgYmVoaW5kIFx1MjAxNCAnK2NvdW50cnkrJyB3b25cJ3QgYWxsb3cgaXQuJyxsaW5lczpbY24rJyBpcyBwcm9oaWJpdGVkIG9yIGRlc3Ryb3llZCBvbiBhcnJpdmFsIGluICcrY291bnRyeSsnLicsJ1VuZGVjbGFyZWQgcmlza3MgYSBmaW5lOyBkZWNsYXJlZCwgaXQgd2lsbCBzaW1wbHkgYmUgdGFrZW4uJ119KTsKICBpZihsZXZlbD09PSd3YXJuJylyZXR1cm4gbWVyZ2UoYmFzZSx7c3RhdHVzOid3YXJuJyx0YWdzOltjYXRUYWcse3Q6J0RlY2xhcmUgb24gYXJyaXZhbCcsazonYW1iZXInfV0saGVhZDplbnRyeS5uKycgaXMgcmVzdHJpY3RlZCBcdTIwMTQgZGVjbGFyZSBpdC4nLGxpbmVzOltjbisnIGlzIGxpbWl0ZWQgaW4gJytjb3VudHJ5KycgYW5kIG1heSBiZSBpbnNwZWN0ZWQgb3IgcmVmdXNlZC4nLCdEZWNsYXJlIGl0IG9uIGFycml2YWw7IHNlYWxlZCBjb21tZXJjaWFsIHByb2R1Y3RzIGhhdmUgdGhlIGJlc3QgY2hhbmNlLiddfSk7CiAgcmV0dXJuIG1lcmdlKGJhc2Use3N0YXR1czonaW5mbycsdGFnczpbY2F0VGFnXSxoZWFkOidXZVwncmUgbm90IHN1cmUgYWJvdXQgJytlbnRyeS5uKycuJyxsaW5lczpbJ1dlIGNhblwndCBjb25maXJtIGhvdyAnK2NvdW50cnkrJyB0cmVhdHMgdGhpcyBpdGVtLicsJ0RlY2xhcmUgaXQgdG8gYmUgc2FmZSBhbmQgc2VlIEhlbHBmdWwgc291cmNlcyBiZWxvdy4nXX0pOwp9CmZ1bmN0aW9uIG1lZFYoZW50cnkpewogIHZhciBpbmc9ZW50cnkuaW5nLGNvdW50cnk9RC5jbixydWxlcz1ELm1lZFJ1bGVzW2luZ107CiAgdmFyIGxldmVsPXJ1bGVzPyhydWxlc1tjb3VudHJ5XXx8cnVsZXMuZGVmKTondW5rbm93bic7CiAgdmFyIGF1dGg9RC5hdXRoOwogIHZhciBpbmdUYWc9e3Q6J0FjdGl2ZSBpbmdyZWRpZW50IFx1MDBCNyAnK2luZyxrOiduZXV0cmFsJ307CiAgdmFyIGJhc2U9e3NvdXJjZTphdXRoLHNyYzonTWVkaWNhdGlvbiBydWxlcyB2YXJ5IGJ5IGNvdW50cnkgYW5kIGNhbiBjaGFuZ2UuIFRoaXMgaXMgZ3VpZGFuY2UsIG5vdCBsZWdhbCBhZHZpY2UgLSBjYXJyeSB5b3VyIHByZXNjcmlwdGlvbiBhbmQgY29uZmlybSB3aXRoIHRoZSBvZmZpY2lhbCBhdXRob3JpdHkgYmVmb3JlIHlvdSBmbHkuJ307CiAgaWYobGV2ZWw9PT0nYmFuJylyZXR1cm4gbWVyZ2UoYmFzZSx7c3RhdHVzOidzdG9wJyx0YWdzOltpbmdUYWcse3Q6J05vdCBwZXJtaXR0ZWQnLGs6J3N0b3AnfV0saGVhZDplbnRyeS5uKycgY29udGFpbnMgJytpbmcrJyBcdTIwMTQgYmFubmVkIGluICcrY291bnRyeSsnLicsbGluZXM6WydBIHByZXNjcmlwdGlvbiBkb2VzIG5vdCBjaGFuZ2UgdGhpcyAtICcraW5nKycgaXMgcHJvaGliaXRlZCBpbiAnK2NvdW50cnkrJy4nLCdEbyBub3QgcGFjayBpdC4gQXNrIHlvdXIgZG9jdG9yIGFib3V0IGFuIGFwcHJvdmVkIGFsdGVybmF0aXZlIGZvciB0aGUgdHJpcC4nXX0pOwogIGlmKGxldmVsPT09J3Blcm1pdCcpcmV0dXJuIG1lcmdlKGJhc2Use3N0YXR1czond2FybicsdGFnczpbaW5nVGFnLHt0OidQcmVzY3JpcHRpb24gKyBwcmlvciBhcHByb3ZhbCcsazonYW1iZXInfV0saGVhZDonQWxsb3dlZCBvbmx5IGlmIHlvdSBhcnJhbmdlIGFwcHJvdmFsIGZpcnN0LicsbGluZXM6W2luZysnIGlzIGNvbnRyb2xsZWQgaW4gJytjb3VudHJ5KycgLSB5b3UgbmVlZCBhbiBpbXBvcnQgcGVybWl0IG9yIGFkdmFuY2UgYXBwcm92YWwgYmVmb3JlIHlvdSB0cmF2ZWwuJywnQXBwbHkgYWhlYWQgb2YgdGltZSBhbmQgY2FycnkgdGhlIGFwcHJvdmFsIHRvZ2V0aGVyIHdpdGggeW91ciBwcmVzY3JpcHRpb24uJ119KTsKICBpZihsZXZlbD09PSdyeCcpcmV0dXJuIG1lcmdlKGJhc2Use3N0YXR1czonZ28nLHRhZ3M6W2luZ1RhZyx7dDonUHJlc2NyaXB0aW9uIG5lZWRlZCcsazonYW1iZXInfV0saGVhZDonWWVzIC0gYnJpbmcgaXQgd2l0aCB5b3VyIHByZXNjcmlwdGlvbi4nLGxpbmVzOlsnQ2FycnkgJytlbnRyeS5uKycgaW4gaXRzIG9yaWdpbmFsIHBhY2thZ2luZyB3aXRoIHRoZSBwcmVzY3JpcHRpb24gb3IgYSBkb2N0b3IgbGV0dGVyLicsJ0JyaW5nIG9ubHkgYSBwZXJzb25hbCBzdXBwbHkgKHVzdWFsbHkgdXAgdG8gfjMwLTkwIGRheXMpLiddfSk7CiAgaWYobGV2ZWw9PT0nb2snKXJldHVybiBtZXJnZShiYXNlLHtzdGF0dXM6J2dvJyx0YWdzOltpbmdUYWcse3Q6J05vIHByZXNjcmlwdGlvbiBuZWVkZWQnLGs6J2dyZWVuJ31dLGhlYWQ6J1llcyAtIHlvdSBjYW4gYnJpbmcgdGhpcyBpbi4nLGxpbmVzOltpbmcrJyBpcyBub3Qgc3BlY2lhbGx5IHJlc3RyaWN0ZWQgaW4gJytjb3VudHJ5KycuJywnS2VlcCBpdCBpbiBvcmlnaW5hbCBwYWNrYWdpbmcgYW5kIGJyaW5nIGEgcmVhc29uYWJsZSBwZXJzb25hbCBzdXBwbHkuJ119KTsKICByZXR1cm4gbWVyZ2UoYmFzZSx7c3RhdHVzOidpbmZvJyx0YWdzOltpbmdUYWddLGhlYWQ6J1dlIGRvblwndCBoYXZlIHZlcmlmaWVkIGluZm8gZm9yIHRoaXMgeWV0LicsbGluZXM6WydXZSBjYW5cJ3QgY29uZmlybSBob3cgJytjb3VudHJ5KycgdHJlYXRzICcraW5nKycsIHNvIHdlIHdvblwndCBndWVzcy4nLCdTZWUgSGVscGZ1bCBzb3VyY2VzIGJlbG93IGFuZCBjYXJyeSB5b3VyIHByZXNjcmlwdGlvbi4nXX0pOwp9CmZ1bmN0aW9uIG5vTWF0Y2gocSl7CiAgcmV0dXJuIHtzdGF0dXM6J25vbWF0Y2gnLHRhZ3M6W3t0OihELmlzTWVkPydNZWRpY2luZSc6J0Zvb2QnKSsnIFx1MDBCNyAnK3EsazonbmV1dHJhbCd9XSxzb3VyY2U6RC5hdXRoLGhlYWQ6J1NvcnJ5LCB3ZSBjb3VsZG5cJ3QgZmluZCBhbnkgbWF0Y2hlcyBmb3IgdGhlIGl0ZW0geW91IHdlcmUgbG9va2luZyB0byBnZXQgYW5zd2VycyBvbi4gUGxlYXNlIHVzZSB0aGUgaGVscGZ1bCBzb3VyY2Uocykgd2UgcHJvdmlkZWQgZm9yIGZ1cnRoZXIgaGVscC4nLGxpbmVzOltdLHNyYzonV2Ugb25seSBnaXZlIGEgdmVyZGljdCB3aGVuIHdlIGNhbiBiYWNrIGl0IHVwLiBGb3IgZXZlcnl0aGluZyBlbHNlLCB3ZSBoYW5kIHlvdSB0aGUgcmlnaHQgcGVvcGxlLid9Owp9CmZ1bmN0aW9uIGhlbHBCbG9jayhhdSl7YXU9YXV8fHt9O2lmKCFhdS51cmwpcmV0dXJuICcnO3JldHVybiAnPGRpdiBjbGFzcz0iaGVscCI+PGRpdiBjbGFzcz0iaGVscC1oIj5IZWxwZnVsIHNvdXJjZXM8L2Rpdj48YSBjbGFzcz0iaGl0ZW0iIGhyZWY9IicrYXUudXJsKyciIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIj48c3BhbiBjbGFzcz0iaGktaWMiPlx1RDgzQ1x1REYxMDwvc3Bhbj48c3BhbiBjbGFzcz0iaGktbCI+Jytlc2MoYXUubGFiZWwpKyc8c21hbGw+T2ZmaWNpYWwgZ3VpZGFuY2U8L3NtYWxsPjwvc3Bhbj48c3BhbiBjbGFzcz0iaGktZ28iPlx1MjE5Nzwvc3Bhbj48L2E+PGRpdiBjbGFzcz0iaG5vdGUiPlRvIGJlIDEwMCUgc3VyZSwgd2UgYWx3YXlzIHJlY29tbWVuZCBjb25maXJtaW5nIHdpdGggdGhlIG9mZmljaWFsIGNoYW5uZWxzLjwvZGl2PjwvZGl2Pic7fQpmdW5jdGlvbiBjYXJkSFRNTCh2KXsKICB2YXIgbGluZXM9KHYubGluZXN8fFtdKS5maWx0ZXIoQm9vbGVhbikubWFwKGZ1bmN0aW9uKGwpe3JldHVybiAnPGxpPicrZXNjKGwpKyc8L2xpPic7fSkuam9pbignJyk7CiAgdmFyIHRhZ3M9KHYudGFncyYmdi50YWdzLmxlbmd0aCk/JzxkaXYgY2xhc3M9InRhZ3JvdyI+Jyt2LnRhZ3MubWFwKGZ1bmN0aW9uKHQpe3JldHVybiAnPHNwYW4gY2xhc3M9InRhZyB0YWctJyt0LmsrJyI+Jytlc2ModC50KSsnPC9zcGFuPic7fSkuam9pbignJykrJzwvZGl2Pic6Jyc7CiAgcmV0dXJuICc8ZGl2IGNsYXNzPSJwYXNzICcrdi5zdGF0dXMrJyBwcmludCI+PGRpdiBjbGFzcz0ic3RyaXAiPjxkaXYgY2xhc3M9ImJhZGdlIj48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPicrVklDT05bdi5zdGF0dXNdKyc8L3N2Zz48L2Rpdj48ZGl2PjxkaXYgY2xhc3M9InZlcmRpY3QiPicrVkxBQkVMW3Yuc3RhdHVzXSsnPC9kaXY+PGRpdiBjbGFzcz0idnN1YiI+QXQgdGhlIGJvcmRlcjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9InBlcmYiPjwvZGl2PjxkaXYgY2xhc3M9ImJvZHkiPicrdGFncysnPHAgY2xhc3M9ImhlYWRsaW5lIj4nK2VzYyh2LmhlYWR8fCcnKSsnPC9wPjx1bCBjbGFzcz0iZGV0YWlsIj4nK2xpbmVzKyc8L3VsPicraGVscEJsb2NrKHYuc291cmNlKSsnPGRpdiBjbGFzcz0ic3JjIj4nK2VzYyh2LnNyY3x8JycpKyc8L2Rpdj48L2Rpdj48L2Rpdj4nOwp9CnZhciBfaW49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhSW5wdXQnKSxfc3VnPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YVN1Z2dlc3QnKSxfcmVzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YVJlc3VsdCcpLF9vcmlnPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YU9yaWdpbmFsJyk7CmZ1bmN0aW9uIF9waWNrKGl0ZW0pe3ZhciB2PWl0ZW0uZnJlZT9ub01hdGNoKGl0ZW0ubik6KEQuaXNNZWQ/bWVkVihpdGVtKTpmb29kVihpdGVtKSk7X3Jlcy5pbm5lckhUTUw9Y2FyZEhUTUwodik7X29yaWcuc3R5bGUuZGlzcGxheT0nbm9uZSc7X3N1Zy5pbm5lckhUTUw9Jyc7fQpmdW5jdGlvbiBfcmVzdG9yZSgpe19yZXMuaW5uZXJIVE1MPScnO19vcmlnLnN0eWxlLmRpc3BsYXk9Jyc7fQppZihfaW4pe19pbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsZnVuY3Rpb24oKXsKICB2YXIgcT1faW4udmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCk7CiAgaWYoIXEpe19zdWcuaW5uZXJIVE1MPScnO19yZXN0b3JlKCk7cmV0dXJuO30KICB2YXIgaWR4PVtdLGk7Zm9yKGk9MDtpPEQuZGIubGVuZ3RoO2krKyl7aWYoRC5kYltpXS5uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxKT4tMSl7aWR4LnB1c2goaSk7aWYoaWR4Lmxlbmd0aD49NilicmVhazt9fQogIHZhciBodG1sPWlkeC5tYXAoZnVuY3Rpb24oaSl7dmFyIHg9RC5kYltpXSxzPUQuaXNNZWQ/eC5pbmc6KEQuY2F0bmFtZVt4LmNdfHwnJyk7cmV0dXJuICc8ZGl2IGNsYXNzPSJzdWciIGRhdGEtaT0iJytpKyciPicrZXNjKHgubikrKHM/JzxzcGFuIGNsYXNzPSJpbmciPicrZXNjKHMpKyc8L3NwYW4+JzonJykrJzwvZGl2Pic7fSkuam9pbignJyk7CiAgaWYoaWR4Lmxlbmd0aD09PTApaHRtbCs9JzxkaXYgY2xhc3M9InN1ZyBhbnl3YXkiIGRhdGEtYW55PSIxIj5DaGVjayBcdTIwMUMnK2VzYyhfaW4udmFsdWUpKydcdTIwMUQgYW55d2F5PHNwYW4gY2xhc3M9ImluZyI+bm90IGluIG91ciBsaXN0PC9zcGFuPjwvZGl2Pic7CiAgX3N1Zy5pbm5lckhUTUw9aHRtbDsKICBbXS5mb3JFYWNoLmNhbGwoX3N1Zy5xdWVyeVNlbGVjdG9yQWxsKCcuc3VnJyksZnVuY3Rpb24oZWwpe2VsLm9uY2xpY2s9ZnVuY3Rpb24oKXtpZihlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW55Jykpe19waWNrKHtmcmVlOnRydWUsbjpfaW4udmFsdWUudHJpbSgpfSk7fWVsc2V7dmFyIHg9RC5kYlsrZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWknKV07X2luLnZhbHVlPXgubjtfcGljayh4KTt9fTt9KTsKfSk7fQo=','base64').toString('utf8');
function countryShell(o){/*data-country4*/
  var cn=o.c.name, sl=slug(cn), canonical=BASE+o.url;
  function flagFromCode(cc){var c=String(cc).toLowerCase();return '<img class="fimg" src="https://flagcdn.com/'+c+'.svg" alt="'+esc(String(cc).toUpperCase())+'" loading="lazy">';}
  var flag=flagFromCode(o.c.code);
  var VICON={go:'<path d="M20 6 9 17l-5-5"/>',warn:'<path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',stop:'<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/>'};
  var VLABEL={go:'Allowed',warn:'Check first',stop:'Not allowed',info:'Check the source'};
  var visible=[
    {t:'\u2039 All rules',u:'/',back:true},
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
  var moreActive=more.some(function(t){return t.key&&t.key===act;});
  var moreBlock='<details class="more" data-country2'+(moreActive?' open':'')+'><summary><span class="mlabel"></span><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></summary><div class="morerow">'+moreHtml+'</div></details>';

  var main;
  var SICON={web:'\uD83C\uDF10'};
  function linkRow(label,sub,url){var inner='<span class="hi-ic">'+SICON.web+'</span><span class="hi-l">'+esc(label)+(sub?'<small>'+esc(sub)+'</small>':'')+'</span>'+(url?'<span class="hi-go">\u2197</span>':'');return url?('<a class="hitem" href="'+url+'" target="_blank" rel="noopener">'+inner+'</a>'):('<div class="hitem">'+inner+'</div>');}
  function helpBlock(au){au=au||{};if(!au.url)return '';return '<div class="help"><div class="help-h">Helpful sources</div>'+linkRow(au.label,'Official guidance',au.url)+'<div class="hnote">To be 100% sure, we always recommend confirming with the official channels.</div></div>';}
  function tagsRow(tags){return (tags&&tags.length)?'<div class="tagrow">'+tags.map(function(t){return '<span class="tag tag-'+t.k+'">'+esc(t.t)+'</span>';}).join('')+'</div>':'';}
  function card(v,showRoute){var lines=(v.lines||[]).filter(Boolean).map(function(l){return '<li>'+esc(l)+'</li>';}).join('');var route=showRoute?'<div class="route"><span>&#128706; ENTERING</span><span><b>'+esc(cn)+'</b> '+flag+'</span></div>':'';return '<div class="pass '+v.status+' print"><div class="strip"><div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">'+VICON[v.status]+'</svg></div><div><div class="verdict">'+VLABEL[v.status]+'</div><div class="vsub">At the border</div></div></div><div class="perf"></div><div class="body">'+route+tagsRow(v.tags)+'<p class="headline">'+esc(v.head||'')+'</p><ul class="detail">'+lines+'</ul>'+helpBlock(v.source)+'<div class="src">'+esc(v.src||'')+'</div></div></div>';}
  var topRoute='<span class="route toproute"><span>&#128706; ENTERING</span><span><b>'+esc(cn)+'</b> '+flag+'</span></span>';
  if(o.mode==='hub'){
    var cards=o.cards.map(function(cd){return '<a class="qcard '+cd.status+'" href="'+cd.u+'"><span class="qv">'+VLABEL[cd.status]+'</span><span class="ql"><b>'+esc(cd.label)+'</b><span class="qh">'+esc(cd.head)+'</span></span></a>';}).join('');
    main='<div class="hubintro">'+topRoute+'<p class="hublead">'+esc(o.lead||('What you can bring into '+cn+' at a glance. Tap a topic for the exact rule.'))+'</p></div><div class="qgrid">'+cards+'</div>';
  } else if(o.mode==='stack'){
    var stack=o.items.map(function(v){return card(v,false);}).join('');
    main='<div class="hubintro">'+topRoute+(o.lead?'<p class="hublead">'+esc(o.lead)+'</p>':'')+'</div><div class="stack">'+stack+'</div>';
  } else {
    main=card(o.v,true);
  }
  var taBlock='',taScript='';/*ta-inject*/
  if(o.cat==='food'||o.cat==='med'){
    var _isMed=o.cat==='med';
    var _auth=_isMed?(w.MED_AUTH[cn]||{label:cn+' health & customs authority',url:null}):{label:cn+' customs / biosecurity authority',url:null};
    var _D={cn:cn,isMed:_isMed,db:_isMed?w.MED_DB:w.FOOD_DB,auth:_auth,foodRules:_isMed?null:(w.FOOD_RULES[cn]||w.FOOD_RULES.def),medRules:_isMed?w.MED_RULES:null,catname:w.CATNAME};
    taBlock='<div class="tasearch"><label class="talabel" for="taInput">'+(_isMed?'Which medicine?':'Which food?')+'</label><div class="tapick"><input id="taInput" class="tinput" type="text" autocomplete="off" placeholder="'+(_isMed?'Type a medicine or ingredient (e.g. Sudafed)':'Type a food (e.g. beef jerky)')+'"><div id="taSuggest" class="suggest"></div></div></div>';
    taScript='<scr'+'ipt>(function(){var D='+JSON.stringify(_D)+';'+TA_LIB+'})();</scr'+'ipt>';
  }

  var faqLd={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":o.h1||('What can I bring into '+cn+'?'),"acceptedAnswer":{"@type":"Answer","text":o.faqA||''}}]};
  var bread={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":BASE+"/"},{"@type":"ListItem","position":2,"name":cn+" customs","item":canonical}]};

  return '<!doctype html><html lang="en"><head>\n'
+'<!-- Google tag (gtag.js) -->\n'
+'<script async src="https://www.googletagmanager.com/gtag/js?id=G-0HQ16GNH78"></scr'+'ipt>\n'
+'<script>\nwindow.dataLayer=window.dataLayer||[];\nfunction gtag(){dataLayer.push(arguments);}\ngtag(\'js\',new Date());\ngtag(\'config\',\'G-0HQ16GNH78\');\n</scr'+'ipt>\n'
+'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6832331505671007" crossorigin="anonymous"></scr'+'ipt>\n'
+'<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n'
+'<title>'+esc(o.title)+'</title>\n'
+'<meta name="description" content="'+esc(o.desc)+'">\n'
+'<link rel="canonical" href="'+canonical+'">\n'
+'<link rel="icon" href="/assets/favicon.ico" sizes="any">\n'
+'<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">\n'
+'<meta property="og:title" content="'+esc(o.title)+'"><meta property="og:description" content="'+esc(o.desc)+'"><meta property="og:type" content="article"><meta property="og:url" content="'+canonical+'">\n'
+'<script type="application/ld+json">'+JSON.stringify(faqLd)+'</scr'+'ipt>\n'
+'<script type="application/ld+json">'+JSON.stringify(bread)+'</scr'+'ipt>\n'
+'<script>(function(){var t=localStorage.getItem(\'citt-theme\')||\'dark\';document.documentElement.setAttribute(\'data-theme\',t);})();</scr'+'ipt>\n'
+'<style>\n'
+"@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');\n"
+':root,[data-theme="dark"]{--bg:#0E1428;--glow:#1A2542;--surface:#161F3A;--surface-2:#22304F;--line:#2A3A5E;--text:#EDF0F7;--muted:#8A96B8;--accent:#4CC2FF;--go:#2FCF9B;--warn:#F5B841;--stop:#FF6B6B;--info:#4CC2FF;--card:#182238;--card-text:#EDF0F7;--card-muted:#98A4C2;--card-line:#2A3A5E;--card-notch:#0E1428;--card-sub:#1E2A46;--card-sub-line:#2A3A5E;--tg-neutral:#C2CCE4;--tg-green:#54DDAD;--tg-amber:#F3C765;--tg-stop:#FF9A9A;--mark-bg:#26324E;--sel-bg:#4CC2FF;--sel-text:#08111f;--more-t:#A4B0CF;--more-th:#D2DAEF;--more-hbg:#161F3A;}\n'
+'[data-theme="light"]{--bg:#ECEAE1;--glow:#FFFFFF;--surface:#FFFFFF;--surface-2:#F0EEE4;--line:#DED9CB;--text:#1B2233;--muted:#6B7488;--accent:#1E86D6;--go:#2FCF9B;--warn:#F5B841;--stop:#FF6B6B;--info:#4CC2FF;--card:#FFFFFF;--card-text:#141414;--card-muted:#6A6A6A;--card-line:#E7E3D6;--card-notch:#ECEAE1;--card-sub:#F4F1E8;--card-sub-line:#E4DFCE;--tg-neutral:#333333;--tg-green:#0F6F49;--tg-amber:#8A6410;--tg-stop:#A23131;--mark-bg:#333A48;--sel-bg:#1B2233;--sel-text:#FFFFFF;--more-t:#6B7488;--more-th:#1B2233;--more-hbg:#FFFFFF;}\n'
+'*{box-sizing:border-box}body{margin:0;font-family:\'Inter\',system-ui,sans-serif;font-size:16px;line-height:1.55;color:var(--text);background:radial-gradient(1200px 600px at 50% -10%,var(--glow) 0%,transparent 60%),var(--bg);min-height:100vh;-webkit-font-smoothing:antialiased;transition:background .25s,color .25s}\n'
+'.wrap{max-width:760px;margin:0 auto;padding:20px 18px 64px}\n'
+'.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}\n'
+'.brand{display:flex;align-items:center;gap:10px;text-decoration:none}\n'
+'.mark{width:34px;height:34px;border-radius:10px;flex:none;background:var(--mark-bg);display:grid;place-items:center;color:#EDF0F7;box-shadow:0 6px 18px rgba(0,0,0,.22)}\n'
+'.mark svg{width:18px;height:18px}\n'
+'.brand h1{font-family:\'Space Grotesk\',\'Inter\',sans-serif;font-weight:700;font-size:18px;letter-spacing:-.4px;margin:0;color:var(--text)}\n'
+'.theme-toggle{display:flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--line);color:var(--text);border-radius:999px;padding:7px 12px;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:600;cursor:pointer}\n'
+'.theme-toggle .ico{font-size:13px}\n'
+'.airhead{display:flex;align-items:center;gap:12px;margin:6px 0 16px}\n'
+'.airhead .cflag{line-height:0;flex:none}\n'
+'.fimg{border-radius:2px;vertical-align:middle}\n'
+'.airhead .cflag .fimg{height:26px;width:auto;box-shadow:0 0 0 1px rgba(0,0,0,.18)}\n'
+'.route .fimg{height:11px;width:auto;margin-left:3px;box-shadow:0 0 0 1px rgba(0,0,0,.18)}\n'
+'.airhead h2{font-family:\'Space Grotesk\',\'Inter\',sans-serif;font-size:1.7rem;line-height:1.15;margin:0;font-weight:700}\n'
+'.airhead h2 .muted{color:var(--muted);font-weight:600}\n'
+'.tabs{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 8px}\n'
+'.tab{background:var(--surface);border:1px solid var(--line);border-radius:999px;color:var(--text);text-decoration:none;font-weight:500;font-size:13.5px;padding:9px 15px;transition:.14s;display:inline-flex;align-items:center;gap:6px}\n'
+'.tab:hover{border-color:var(--surface-2)}\n'
+'.tab.on{background:var(--sel-bg);color:var(--sel-text);border-color:var(--sel-bg);font-weight:600}\n'
+'.tab.back{color:var(--muted)}\n'
+'.more{margin:0 0 26px}\n'
+'.more summary{list-style:none;display:inline-flex;align-items:center;gap:5px;cursor:pointer;color:var(--more-t);font-size:13.5px;font-weight:600;padding:6px 10px;border-radius:8px;user-select:none;transition:.14s}\n'
+'.more summary::-webkit-details-marker{display:none}\n'
+'.more summary:hover{color:var(--more-th);background:var(--more-hbg)}\n'
+'.more summary .chev{width:15px;height:15px;transition:transform .18s}\n'
+'.more[open] summary .chev{transform:rotate(180deg)}\n'
+'.more summary .mlabel::before{content:"Show more"}\n'
+'.more[open] summary .mlabel::before{content:"Show less"}\n'
+'.morerow{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 0}\n'
+'.pass{position:relative;background:var(--card);color:var(--card-text);border-radius:18px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.30);transition:background .25s,color .25s}\n'
+'.pass.print{animation:print .5s cubic-bezier(.2,.9,.25,1) both}\n'
+'@keyframes print{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}\n'
+'.strip{padding:15px 18px;display:flex;align-items:center;gap:12px;color:#08111f}\n'
+'.strip .badge{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:rgba(0,0,0,.16)}\n'
+'.strip .badge svg{width:19px;height:19px}\n'
+'.strip .verdict{font-family:\'Space Grotesk\',sans-serif;font-weight:700;font-size:20px;letter-spacing:-.4px;line-height:1}\n'
+'.strip .vsub{font-family:\'Space Mono\',monospace;font-size:9.5px;letter-spacing:1px;text-transform:uppercase;opacity:.75;margin-top:3px}\n'
+'.go .strip{background:var(--go)}.warn .strip{background:var(--warn)}.stop .strip{background:var(--stop)}.info .strip{background:var(--info)}.nomatch .strip{background:#363F52;color:#EDF0F7}\n'
+'.perf{position:relative;height:0;border-top:2px dashed var(--card-line)}\n'
+'.perf::before,.perf::after{content:"";position:absolute;top:-11px;width:22px;height:22px;border-radius:50%;background:var(--card-notch);transition:background .25s}\n'
+'.perf::before{left:-11px}.perf::after{right:-11px}\n'
+'.body{padding:16px 18px 18px}\n'
+'.route{font-family:\'Space Mono\',monospace;font-size:10.5px;letter-spacing:.5px;color:var(--card-muted);display:flex;flex-wrap:wrap;gap:6px 10px;margin-bottom:12px}\n'
+'.route b{color:var(--card-text)}\n'
+'.headline{font-family:\'Space Grotesk\',sans-serif;font-weight:600;font-size:18px;line-height:1.3;margin:0 0 10px;color:var(--card-text)}\n'
+'.detail{list-style:none;margin:0;padding:0}\n'
+'.detail li{position:relative;padding-left:18px;font-size:16px;line-height:1.5;color:var(--card-text);opacity:.92;margin-bottom:6px}\n'
+'.detail li::before{content:"";position:absolute;left:0;top:8px;width:6px;height:6px;border-radius:50%;background:var(--card-text);opacity:.4}\n'
+'.src{margin-top:12px;padding-top:11px;border-top:1px solid var(--card-line);font-family:\'Space Mono\',monospace;font-size:14px;letter-spacing:.3px;color:var(--card-muted);line-height:1.5}\n'
+'.hubintro{margin:0 0 14px}\n'
+'.hubintro .route{margin-bottom:8px}\n'
+'.hublead{margin:0;color:var(--muted);font-size:.95rem}\n'
+'.qgrid{display:flex;flex-direction:column;gap:10px}\n'
+'.qcard{display:flex;align-items:stretch;gap:0;background:var(--card);border-radius:14px;overflow:hidden;text-decoration:none;box-shadow:0 12px 30px rgba(0,0,0,.22);transition:transform .12s}\n'
+'.qcard:hover{transform:translateY(-1px)}\n'
+'.qcard .qv{flex:none;width:96px;display:flex;align-items:center;justify-content:center;text-align:center;padding:12px 8px;font-family:\'Space Grotesk\',sans-serif;font-weight:700;font-size:13px;line-height:1.15;color:#08111f}\n'
+'.qcard.go .qv{background:var(--go)}.qcard.warn .qv{background:var(--warn)}.qcard.stop .qv{background:var(--stop)}.qcard.info .qv{background:var(--info)}\n'
+'.qcard .ql{padding:11px 14px;color:var(--card-text);display:flex;flex-direction:column;justify-content:center;gap:3px}\n'
+'.qcard .ql b{font-family:\'Space Grotesk\',sans-serif;font-weight:600;font-size:16px}\n'
+'.qcard .qh{font-size:14px;color:var(--card-muted);line-height:1.4}\n'
+'.stack{display:flex;flex-direction:column;gap:16px}\n'
+'.tasearch{margin:0 0 16px}\n'
+'.talabel{display:block;font-family:\'Space Mono\',monospace;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin:0 0 7px}\n'
+'.tapick{position:relative}\n'
+'.tinput{width:100%;box-sizing:border-box;background:var(--surface);border:1px solid var(--line);border-radius:13px;color:var(--text);font-family:\'Inter\',sans-serif;font-size:15px;padding:13px 14px}\n'
+'.tinput:focus{outline:none;border-color:var(--accent)}\n'
+'.tinput::placeholder{color:var(--muted)}\n'
+'.suggest{margin-top:6px;background:var(--surface);border:1px solid var(--line);border-radius:12px;overflow:hidden}\n'
+'.suggest:empty{display:none}\n'
+'.sug{padding:11px 14px;cursor:pointer;font-size:14px;display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid var(--bg);color:var(--text)}\n'
+'.sug:last-child{border-bottom:0}\n'
+'.sug:hover{background:var(--surface-2)}\n'
+'.sug.anyway{color:var(--accent);font-weight:600}\n'
+'.sug .ing{font-family:\'Space Mono\',monospace;font-size:10.5px;color:var(--muted);align-self:center;font-weight:400}\n'
+'.tagrow{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:11px}\n'
+'.tag{font-family:\'Space Mono\',monospace;font-size:13px;letter-spacing:.4px;padding:5px 9px;border-radius:7px}\n'
+'.tag-neutral{background:rgba(140,150,170,.16);color:var(--tg-neutral)}\n'
+'.tag-green{background:rgba(47,207,155,.16);color:var(--tg-green);font-weight:700}\n'
+'.tag-amber{background:rgba(245,184,65,.18);color:var(--tg-amber);font-weight:700}\n'
+'.tag-stop{background:rgba(255,107,107,.18);color:var(--tg-stop);font-weight:700}\n'
+'.help{margin-top:13px;background:var(--card-sub);border-radius:12px;padding:12px 13px}\n'
+'.help-h{font-family:\'Space Mono\',monospace;font-size:13px;letter-spacing:1.2px;text-transform:uppercase;color:var(--card-muted);margin-bottom:9px}\n'
+'.hitem{display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:9px;background:var(--card);text-decoration:none;color:var(--card-text);margin-bottom:6px;border:1px solid var(--card-sub-line)}\n'
+'a.hitem:hover{border-color:var(--accent)}\n'
+'.hi-ic{width:20px;text-align:center;font-size:14px;flex:none}\n'
+'.hi-l{font-size:13px;font-weight:600;line-height:1.25;display:flex;flex-direction:column;min-width:0}\n'
+'.hi-l small{font-weight:400;font-size:11px;color:var(--card-muted);margin-top:1px}\n'
+'.hi-go{margin-left:auto;color:var(--card-muted)}\n'
+'.hnote{font-size:13px;color:var(--card-muted);line-height:1.4;margin-top:8px}\n'
+'.toproute{margin-bottom:8px}\n'
+'.tlinks{margin-top:.7em;text-align:center;line-height:2}.tlinks a{color:#8A96B8;text-decoration:none}.tlinks a:hover{color:var(--accent)}.tlinks a+a::before{content:"\u2022";color:#8A96B8;margin:0 10px}\n'
+'footer{margin-top:2.4em;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);padding-top:1em;line-height:1.55}\n'
+'</style></head><body>\n'
+'<div class="wrap">\n'
+'<div class="topbar"><a class="brand" href="/" aria-label="canitakethis.co home"><span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.9 4.3-2 2-2.2-.4a.5.5 0 0 0-.5.8L6 17l2.7 2.4a.5.5 0 0 0 .8-.5l-.4-2.2 2-2 4.3 3.9a.5.5 0 0 0 .8-.5Z"/></svg></span><h1>can i take this?</h1></a>'
+'<button class="theme-toggle" id="themeToggle" onclick="__tt()"><span class="ico" id="themeIcon">&#9728;</span><span id="themeLabel">Light</span></button></div>\n'
+'<div class="airhead"><span class="cflag">'+flag+'</span><h2>'+esc(cn)+' <span class="muted">Customs Rules</span></h2></div>\n'
+'<nav class="tabs">'+tabHtml+'</nav>\n'
+moreBlock+'\n'
+'<main>'+taBlock+'<div id="taResult"></div><div id="taOriginal">'+main+'</div></main>\n'+taScript
+'<footer>Rules change and vary by nationality, route and fare. This is guidance, not legal advice \u2014 always confirm with the airline or the official customs authority before you travel. Updated 2026.<nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>\n'
+'</div>\n'
+'<script>function __lbl(c){var l=document.getElementById(\'themeLabel\'),i=document.getElementById(\'themeIcon\');if(l)l.textContent=c===\'dark\'?\'Light\':\'Dark\';if(i)i.innerHTML=c===\'dark\'?\'\u263C\':\'\u263D\';}function __tt(){var t=document.documentElement.getAttribute(\'data-theme\')===\'dark\'?\'light\':\'dark\';document.documentElement.setAttribute(\'data-theme\',t);localStorage.setItem(\'citt-theme\',t);__lbl(t);}window.addEventListener(\'DOMContentLoaded\',function(){__lbl(document.documentElement.getAttribute(\'data-theme\'));});</scr'+'ipt>\n'
+'<script src="/feedback.js" defer></scr'+'ipt>\n'
+'</body></html>';
}

function setS(o){Object.assign(w.S,o);}

function run(){
  ensure(OUT);
  const AIRLINES=w.AIRLINES, COUNTRIES=w.COUNTRIES, FARES=w.FARES;

  // ---------- 1. AIRLINE BAGGAGE PAGES ----------
  AIRLINES.forEach(a=>{
    const f=FARES[a.name]; if(!f) return;
    const url=`/airline/${slug(a.name)}/baggage-allowance/`;
    const fareHtml=f.map(fr=>`<h3>${esc(fr.label)}</h3><p><b>Cabin:</b> ${esc(fr.cabin)}</p><p><b>Checked:</b> ${esc(fr.checked)}</p>`).join('');
    const first=f[0];
    const answer=`${a.name} economy: ${first.cabin}`;
    const desc=`${a.name} cabin & checked baggage allowance for 2026 — sizes, weights and fees by fare class. ${first.cabin}`.slice(0,155);
    const related=[
      {url:'/plane/liquids/',t:'Liquids in carry-on'},
      {url:'/plane/power-bank/',t:'Power banks on a plane'},
      {url:'/plane/vape-e-cigarette/',t:'Vapes on a plane'},
      {url:`/airline/${slug(a.name)}/`,t:`All ${a.name} rules`}
    ];
    write(url+'index.html', airShell({
      url,
      title:`${a.name} Baggage Allowance 2026 — Cabin & Checked | canitakethis.co`,
      desc, a, fares:f
    }));
    pages.push({url,changefreq:'weekly'});

    // airline hub
    const hub=`/airline/${slug(a.name)}/`;
    write(hub+'index.html', shell({
      url:hub, title:`Flying ${a.name}? Baggage & Cabin Rules 2026 | canitakethis.co`,
      desc:`What you can bring on ${a.name}: baggage allowance, liquids, power banks, vapes, sharp objects and more — 2026 rules.`,
      h1:`What can I bring on ${a.name}? (2026)`, badge:'info',
      answer:`${a.name} baggage plus the standard aviation-security rules for liquids, batteries, vapes and sharp items.`,
      lines:['Baggage allowance is set by your fare class — see the baggage page.','Liquids, power banks, vapes, alcohol, lighters and sharp objects follow international aviation-security rules that are the same on every airline.'],
      source:null, intro:null,
      related:[
        {url:`/airline/${slug(a.name)}/baggage-allowance/`,t:`${a.name} baggage allowance`},
        {url:'/plane/liquids/',t:'Liquids'},{url:'/plane/power-bank/',t:'Power banks'},
        {url:'/plane/vape-e-cigarette/',t:'Vapes'},{url:'/plane/sharp-objects/',t:'Sharp objects'},{url:'/plane/alcohol/',t:'Alcohol'}
      ],
      faq:{q:`What can I bring on ${a.name}?`,a:`${a.name} sets baggage by fare class; liquids, batteries, vapes and sharp items follow standard aviation-security rules.`}
    }));
    pages.push({url:hub,changefreq:'monthly'});
  });

  // ---------- 2. UNIVERSAL PLANE CATEGORY PAGES ----------
  const planeCats=[
    {cat:'liquids',detail:'100',url:'liquids',q:'Can I bring liquids in my carry-on? (2026 rules)',t:'Liquids in Carry-On 2026 — 100ml Rule Explained'},
    {cat:'perfume',detail:'100',url:'perfume-aerosols',q:'Can I take perfume and aerosols on a plane? (2026)',t:'Perfume & Aerosols on a Plane 2026'},
    {cat:'power',detail:'lo',url:'power-bank',q:'Can I bring a power bank on a plane? (2026 rules)',t:'Power Banks on a Plane 2026 — Wh Limits'},
    {cat:'vape',detail:null,url:'vape-e-cigarette',q:'Can I take a vape or e-cigarette on a plane? (2026)',t:'Vapes & E-Cigarettes on a Plane 2026'},
    {cat:'alcohol',detail:'100',url:'alcohol',q:'Can I bring alcohol on a plane? (2026 rules)',t:'Alcohol on a Plane 2026 — Carry-On & Checked'},
    {cat:'lighter',detail:null,url:'lighter',q:'Can I bring a lighter on a plane? (2026)',t:'Lighters on a Plane 2026'}
  ];
  planeCats.forEach(pc=>{
    setS({mode:'plane',bag:'carry',cat:pc.cat,detail:pc.detail,airline:'your airline'});
    const v=w.verdict()||{status:'info',head:'',lines:[]};
    const url=`/plane/${pc.url}/`;
    write(url+'index.html', shell({
      url, title:`${pc.t} | canitakethis.co`,
      desc:`${v.head} ${(v.lines||[]).filter(Boolean)[0]||''}`.slice(0,155),
      h1:pc.q, badge:v.status, answer:v.head, lines:v.lines,
      source:{label:'Standard IATA / aviation-security rules',url:null},
      intro:'This rule is set by aviation security and is the same on every airline worldwide.',
      related:[{url:'/plane/liquids/',t:'Liquids'},{url:'/plane/power-bank/',t:'Power banks'},{url:'/plane/vape-e-cigarette/',t:'Vapes'},{url:'/plane/alcohol/',t:'Alcohol'},{url:'/plane/lighter/',t:'Lighters'},{url:'/plane/sharp-objects/',t:'Sharp objects'}].filter(r=>r.url!==url),
      faq:{q:pc.q,a:`${v.head} ${(v.lines||[]).filter(Boolean).join(' ')}`}
    }));
    pages.push({url,changefreq:'monthly'});
  });

  // sharp objects — item examples from SHARP_DB (real per-item cabin rule)
  {
    const url='/plane/sharp-objects/';
    const rows=w.SHARP_DB.map(it=>{const s=STATUS[it.carry]||STATUS.info;return `<tr><td>${esc(it.n)}</td><td style="color:${s.c};font-weight:700">${s.w} in cabin</td><td>${esc(it.note)}</td></tr>`;}).join('');
    const table=`<table style="width:100%;border-collapse:collapse;margin:1em 0"><thead><tr><th align="left">Item</th><th align="left">Cabin?</th><th align="left">Note</th></tr></thead><tbody>${rows}</tbody></table>`;
    write(url+'index.html', shell({
      url, title:'Sharp Objects on a Plane 2026 — Knives, Scissors, Razors | canitakethis.co',
      desc:'What sharp objects you can take in carry-on vs checked: knives, scissors, razors, nail clippers, tools and more — 2026 aviation-security rules.',
      h1:'What sharp objects can I take on a plane? (2026)', badge:'warn',
      answer:'Blades over ~6 cm and most tools must go in checked baggage; small grooming items are usually fine in the cabin.',
      lines:null, source:{label:'Standard aviation-security rules',url:null},
      intro:'These rules are set by aviation security and are the same on every airline.',
      related:[{url:'/plane/liquids/',t:'Liquids'},{url:'/plane/lighter/',t:'Lighters'},{url:'/plane/power-bank/',t:'Power banks'}],
      faq:{q:'What sharp objects can I take on a plane?',a:'Blades over about 6 cm and most tools must be checked; small scissors, razors, nail clippers and tweezers are usually allowed in the cabin.'}
    }).replace('<a class="cta"', table+'<a class="cta"'));
    pages.push({url,changefreq:'monthly'});
  }

  // ---------- 3. COUNTRY CUSTOMS PAGES ----------
  const countryCats=[
    {cat:'alcohol',url:'alcohol',q:c=>`Duty-free alcohol allowance for ${c} (2026)`,t:c=>`${c} Duty-Free Alcohol Allowance 2026`},
    {cat:'cash',url:'cash',q:c=>`How much cash can I bring into ${c}? (2026)`,t:c=>`${c} Cash Declaration Limit 2026`},
    {cat:'tobacco',url:'tobacco',q:c=>`Duty-free cigarette & tobacco allowance for ${c} (2026)`,t:c=>`${c} Duty-Free Tobacco Allowance 2026`},
    {cat:'plants',url:'plants-seeds',q:c=>`Can I bring plants or seeds into ${c}? (2026)`,t:c=>`Bringing Plants & Seeds into ${c} 2026`},
    {cat:'vape',url:'vaping',q:c=>`Is vaping allowed in ${c}? Can I bring a vape? (2026)`,t:c=>`Vaping in ${c} 2026 — Is It Legal?`}
  ];
  COUNTRIES.forEach(c=>{
    const cn=c.name;
    countryCats.forEach(cc=>{
      setS({mode:'country',cat:cc.cat,country:cn,detail:null});
      const v=w.verdict(); if(!v) return;
      const url=`/country/${slug(cn)}/${cc.url}/`;
      write(url+'index.html', countryShell({
        mode:'cat', url, c, cat:cc.cat, v,
        title:`${cc.t(cn)} | canitakethis.co`,
        desc:`${v.head} ${(v.lines||[]).filter(Boolean)[0]||''}`.slice(0,155),
        h1:cc.q(cn), faqA:`${v.head} ${(v.lines||[]).filter(Boolean).join(' ')}`
      }));
      pages.push({url,changefreq:'monthly'});
    });
    // country hub
    const hub=`/country/${slug(cn)}/`;
    const hubCards=countryCats.map(cc=>{setS({mode:'country',cat:cc.cat,country:cn,detail:null});const v=w.verdict();return {u:`/country/${slug(cn)}/${cc.url}/`,label:cc.q(cn).replace(' (2026)',''),status:v.status,head:v.head};});
    write(hub+'index.html', countryShell({
      mode:'hub', url:hub, c, cat:null, cards:hubCards,
      title:`Travelling to ${cn}? Customs & What You Can Bring 2026 | canitakethis.co`,
      desc:`What you can bring into ${cn}: duty-free alcohol and tobacco, cash declaration limit, plants, and vaping rules — 2026.`,
      h1:`What can I bring into ${cn}? (2026 customs)`,
      faqA:`${cn} sets duty-free limits for alcohol and tobacco, a cash declaration threshold, and rules for plants and vaping. See each category for the exact figure.`
    }));
    pages.push({url:hub,changefreq:'monthly'});
  });

  // ---------- 3b. MEDICATION INTO COUNTRY (high-friction) ----------
  const medEntries=[
    {ing:'Amphetamine',brand:'Adderall',brands:'Adderall',controlled:true},
    {ing:'Methylphenidate',brand:'Ritalin',brands:'Ritalin, Concerta',controlled:true},
    {ing:'Pseudoephedrine',brand:'Sudafed',brands:'Sudafed, Claritin-D',controlled:true},
    {ing:'Cannabidiol',brand:'CBD oil',brands:'CBD oil',controlled:true},
    {ing:'Codeine',brand:'Codeine',brands:'codeine, Solpadeine',controlled:true},
    {ing:'Tramadol',brand:'Tramadol',brands:'Tramadol',controlled:true},
    {ing:'Levomethamphetamine',brand:'Vicks inhaler',brands:'Vicks VapoInhaler'},
    {ing:'Diphenhydramine',brand:'Benadryl',brands:'Benadryl'}
  ];
  medEntries.forEach(m=>{
    COUNTRIES.forEach(c=>{
      setS({mode:'country',cat:'med',country:c.name,item:null});
      const v=w.medCountryVerdict({n:m.brand,ing:m.ing,controlled:m.controlled});
      if(!v) return;
      const url=`/medication/${slug(m.brand)}/${slug(c.name)}/`;
      const others=COUNTRIES.filter(x=>['Japan','United Arab Emirates','Singapore','Thailand','United States','United Kingdom','Australia'].includes(x.name)&&x.name!==c.name).slice(0,4).map(x=>({url:`/medication/${slug(m.brand)}/${slug(x.name)}/`,t:`${m.brand} in ${x.name}`}));
      write(url+'index.html', countryShell({
        mode:'stack', url, c, cat:'med', items:[v],
        title:`Is ${m.brand} Legal in ${c.name}? Travel Rules 2026 | canitakethis.co`,
        desc:`${v.head} ${(v.lines||[]).filter(Boolean)[0]||''}`.slice(0,155),
        h1:`Can I bring ${m.brand} into ${c.name}? (2026)`,
        lead:`${m.brand} contains ${m.ing}${m.brands!==m.brand?' (also sold as '+m.brands+')':''}. Carry it in original packaging with your prescription or a doctor's letter.`,
        faqA:`${v.head} ${(v.lines||[]).filter(Boolean).join(' ')}`
      }));
      pages.push({url,changefreq:'monthly'});
    });
  });

  // medication-into-country hub (per country)
  COUNTRIES.forEach(c=>{
    const url=`/medication/into/${slug(c.name)}/`;
    const hubCards=medEntries.map(m=>{setS({mode:'country',cat:'med',country:c.name});const v=w.medCountryVerdict({n:m.brand,ing:m.ing,controlled:m.controlled});return {u:`/medication/${slug(m.brand)}/${slug(c.name)}/`,label:`${m.brand} (${m.ing})`,status:v.status,head:v.head};});
    write(url+'index.html', countryShell({
      mode:'hub', url, c, cat:'med', cards:hubCards,
      lead:`Some everyday medicines are controlled or banned in ${c.name}. Tap one to see its exact rule.`,
      title:`Bringing Medication into ${c.name} — What's Restricted (2026) | canitakethis.co`,
      desc:`Which common medications are controlled, restricted or banned when entering ${c.name} — ADHD meds, codeine, CBD, cold & flu tablets and more. 2026.`,
      h1:`Bringing medication into ${c.name}: what to check (2026)`,
      faqA:`In ${c.name}, several common medicines (such as ADHD stimulants, codeine, tramadol and CBD) can be controlled, restricted or banned. Carry a prescription and check each medicine before you travel.`
    }));
    pages.push({url,changefreq:'monthly'});
  });

  // ---------- 3c. PETS INTO COUNTRY (the dog question) ----------
  COUNTRIES.forEach(c=>{
    setS({mode:'country',cat:'animal',country:c.name,animal:'Dog',dogSize:null});
    const vd=w.animalVerdict();
    setS({animal:'Cat'}); const vc=w.animalVerdict();
    setS({animal:'Dog'});
    const url=`/pets/${slug(c.name)}/`;
    write(url+'index.html', countryShell({
      mode:'stack', url, c, cat:'pets', items:[vd,vc],
      title:`Can I Bring a Dog or Cat into ${c.name}? Pet Import Rules 2026 | canitakethis.co`,
      desc:`${vd.head} ${(vd.lines||[]).filter(Boolean)[0]||''}`.slice(0,155),
      h1:`Can I bring a dog into ${c.name}? (2026 pet import)`,
      lead:`Pet import into ${c.name} is time-sensitive — some steps (microchip, rabies titre test, permits) take months. Start early.`,
      faqA:`${vd.head} ${(vd.lines||[]).filter(Boolean).join(' ')}`
    }));
    pages.push({url,changefreq:'monthly'});
  });

  // ---------- 3d. FOOD INTO COUNTRY ----------
  const foodCats=[
    {n:'Meat & cured meats',c:'meat'},{n:'Dairy & cheese',c:'dairy'},{n:'Fresh fruit & vegetables',c:'fresh'},
    {n:'Eggs',c:'egg'},{n:'Honey',c:'honey'},{n:'Seeds, nuts & grains',c:'seeds'},{n:'Sealed packaged food',c:'packaged'}
  ];
  COUNTRIES.forEach(c=>{
    const url=`/food/${slug(c.name)}/`;
    let worst='go';
    const items=foodCats.map(fc=>{
      setS({mode:'country',cat:'food',country:c.name});
      const v=w.foodCountryVerdict({n:fc.n,c:fc.c});
      if(v.status==='stop')worst='stop'; else if(v.status==='warn'&&worst!=='stop')worst='warn';
      return v;
    });
    write(url+'index.html', countryShell({
      mode:'stack', url, c, cat:'food', items,
      title:`Can I Bring Food into ${c.name}? Meat, Dairy, Fruit Rules 2026 | canitakethis.co`,
      desc:`What food you can bring into ${c.name} — meat, dairy, fresh fruit, eggs, honey and packaged food. 2026 biosecurity rules. When unsure, declare it.`,
      h1:`Can I bring food into ${c.name}? (2026)`,
      lead:`Some foods are fine, others are restricted or destroyed on arrival in ${c.name}.`,
      faqA:`In ${c.name}, sealed packaged food is usually fine, while meat, dairy and fresh produce are often restricted or banned. Always declare food on arrival.`
    }));
    pages.push({url,changefreq:'monthly'});
  });

  // ---------- 4. HOME, SITEMAP, ROBOTS ----------
  const allAir=AIRLINES.map(a=>`<a href="/airline/${slug(a.name)}/baggage-allowance/" data-n="${esc(a.name).toLowerCase()}">${esc(a.name)}</a>`).join("");
  const topCo=COUNTRIES.slice(0,24).map(c=>`<a href="/country/${slug(c.name)}/">${esc(c.name)}</a>`).join('');
  write('index.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0HQ16GNH78"></script>
<script>
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','G-0HQ16GNH78');
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6832331505671007" crossorigin="anonymous"></script>
<script>(function(){var t=localStorage.getItem('citt-theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();</script>
<title>canitakethis.co — Can I bring this on a plane or into a country? (2026)</title>
<meta name="description" content="Fast, sourced answers on what you can bring on 78 airlines and into 85 countries — baggage, liquids, power banks, vapes, medication, alcohol, cash and more.">
<link rel="canonical" href="${BASE}/">
<link rel="icon" href="/assets/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
<style>
:root,[data-theme="dark"]{--bg:#0E1428;--glow:#1A2542;--surface:#161F3A;--surface-2:#22304F;--line:#2A3A5E;--text:#EDF0F7;--muted:#8A96B8;--accent:#4CC2FF;--card:#182238;--card-text:#EDF0F7;--card-muted:#98A4C2;--card-line:#2A3A5E;}
[data-theme="light"]{--bg:#ECEAE1;--glow:#FFFFFF;--surface:#FFFFFF;--surface-2:#F0EEE4;--line:#DED9CB;--text:#1B2233;--muted:#6B7488;--accent:#1E86D6;--card:#FFFFFF;--card-text:#141414;--card-muted:#6A6A6A;--card-line:#E7E3D6;}
${CHK_STYLE}
body{margin:0;font:16px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color:var(--text);background:var(--bg);transition:background .25s,color .25s}
.seo{max-width:820px;margin:0 auto;padding:24px 18px 60px}
.seo h1{font-size:1.7rem}
.seo .grid a{display:inline-block;background:var(--surface);border:1px solid var(--line);margin:4px;padding:8px 12px;border-radius:10px;text-decoration:none;color:var(--text);font-size:.92rem}
.seo h2{margin-top:1.6em;font-size:1.1rem}
.seo .sub{color:var(--muted);font-size:.9rem;margin:.2em 0 .6em}
.seo .airsearch{width:100%;box-sizing:border-box;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--text);font-size:.95rem;margin:.4em 0 .6em}
.seo .airsearch:focus{outline:none;border-color:var(--accent)}
.seo .allair a.hide{display:none}
.seo .nomatch{color:var(--muted);font-size:.9rem;display:none}
.tlinks{margin-top:.7em;text-align:center;line-height:2}.tlinks a{color:#8A96B8;text-decoration:none}.tlinks a:hover{color:var(--accent)}.tlinks a+a::before{content:"•";color:#8A96B8;margin:0 10px}
</style></head><body>
${CHK_BODY}
<div class="seo">
<h1>Can I take this? Know before you pack.</h1>
<p>Fast, sourced answers on what you can bring — on <b>78 airlines</b> and into <b>85 countries</b>. Baggage, liquids, power banks, vapes, medication, alcohol, cash, plants and more.</p>
<h2>Airline baggage allowances</h2>
<p class="sub">Search across all ${AIRLINES.length} airlines we cover.</p>
<input class="airsearch" id="airq" type="text" placeholder="Type an airline name..." autocomplete="off" aria-label="Search airlines">
<div class="grid allair" id="allair">${allAir}</div>
<p class="nomatch" id="airnm">No airline matches that name.</p>
<h2>Country customs rules</h2><div class="grid">${topCo}</div>
<h2>On the plane</h2><div class="grid"><a href="/plane/liquids/">Liquids</a><a href="/plane/power-bank/">Power banks</a><a href="/plane/vape-e-cigarette/">Vapes</a><a href="/plane/alcohol/">Alcohol</a><a href="/plane/lighter/">Lighters</a><a href="/plane/sharp-objects/">Sharp objects</a></div>
<p style="color:var(--muted);font-size:.82rem;margin-top:2em">Guidance, not legal advice. Confirm with the airline or customs authority before you travel. Updated 2026.</p>
<footer style="margin-top:1.4em;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);padding-top:1em"><nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
</div>
<script>${CHK_SCRIPT}</script>
<script>(function(){var q=document.getElementById("airq");if(!q)return;var box=document.getElementById("allair");var nm=document.getElementById("airnm");var links=[].slice.call(box.querySelectorAll("a"));q.addEventListener("input",function(){var v=q.value.trim().toLowerCase();var shown=0;links.forEach(function(a){var m=!v||a.getAttribute("data-n").indexOf(v)>-1;a.classList.toggle("hide",!m);if(m)shown++;});nm.style.display=shown?"none":"block";});})();</script>
<script src="/feedback.js" defer></script>
</body></html>`);
  pages.push({url:'/',changefreq:'weekly'});

  // copy the interactive app to /app/
  fs.copyFileSync(SRC, path.join(OUT,'app.html'));
  ensure(path.join(OUT,'app')); fs.copyFileSync(SRC, path.join(OUT,'app','index.html'));

  const sm=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`+
    pages.map(p=>`<url><loc>${BASE}${p.url}</loc><changefreq>${p.changefreq}</changefreq></url>`).join('\n')+`\n</urlset>\n`;
  write('sitemap.xml', sm);
  write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${BASE}/sitemap.xml\n`);

  
  // ---------- TRUST_PAGES_BLOCK: About / Contact / Privacy / Terms ----------
  (function(){
    function tShell(url, title, desc, h1, bodyHtml){
      const canonical = BASE + url;
      return `<!doctype html><html lang="en"><head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0HQ16GNH78"></script>
<script>
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','G-0HQ16GNH78');
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6832331505671007" crossorigin="anonymous"></script>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="/assets/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
<script>(function(){var t=localStorage.getItem('citt-theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();</script>
<style>
:root,[data-theme="dark"]{--bg:#0E1428;--glow:#1A2542;--surface:#161F3A;--surface-2:#22304F;--line:#2A3A5E;--text:#EDF0F7;--muted:#8A96B8;--accent:#4CC2FF;--card:#182238;--card-text:#EDF0F7;--card-muted:#98A4C2;--card-line:#2A3A5E;}
[data-theme="light"]{--bg:#ECEAE1;--glow:#FFFFFF;--surface:#FFFFFF;--surface-2:#F0EEE4;--line:#DED9CB;--text:#1B2233;--muted:#6B7488;--accent:#1E86D6;--card:#FFFFFF;--card-text:#141414;--card-muted:#6A6A6A;--card-line:#E7E3D6;}
*{box-sizing:border-box}body{margin:0;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--text);background:var(--bg);transition:background .25s,color .25s}
.wrap{max-width:720px;margin:0 auto;padding:22px 18px 60px}
header{display:flex;align-items:center;gap:10px}header a{color:var(--accent);text-decoration:none;font-weight:700}header .back{font-size:1.7rem;line-height:1}
h1{font-size:1.55rem;line-height:1.25;margin:.6em 0 .5em}
h2{font-size:1.12rem;margin:1.6em 0 .4em}
p{margin:.7em 0}a{color:var(--accent)}
.legal{color:var(--muted);font-size:.92rem}
.tlinks{margin-top:.7em;text-align:center;line-height:2}.tlinks a{color:#8A96B8;text-decoration:none}.tlinks a:hover{color:var(--accent)}.tlinks a+a::before{content:"•";color:#8A96B8;margin:0 10px}
footer{margin-top:2.5em;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);padding-top:1em}
.theme-toggle{position:fixed;top:12px;right:12px;z-index:99;display:inline-flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--line);color:var(--text);border-radius:999px;padding:7px 12px;font:600 12px/1 system-ui,sans-serif;cursor:pointer}
</style></head><body>
<button class="theme-toggle" id="themeToggle" onclick="__tt()"><span id="themeIcon">&#9788;</span> <span id="themeLabel">Light</span></button>
<div class="wrap">
<header><a href="/" class="back" aria-label="Back to home">&#8249;</a><a href="/" class="logo">canitakethis.co</a></header>
<main>
<h1>${esc(h1)}</h1>
${bodyHtml}
</main>
<footer>${esc('canitakethis.co')} — guidance, not legal advice. Updated 2026.<nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
</div>
<script>function __lbl(c){var l=document.getElementById('themeLabel'),i=document.getElementById('themeIcon');if(l)l.textContent=c==='dark'?'Light':'Dark';if(i)i.innerHTML=c==='dark'?'☼':'☽';}function __tt(){var t=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',t);localStorage.setItem('citt-theme',t);__lbl(t);}window.addEventListener('DOMContentLoaded',function(){__lbl(document.documentElement.getAttribute('data-theme'));});</script>
<script src="/feedback.js" defer></script>
</body></html>`;
    }

    const EMAIL = 'getapps.support@gmail.com';

    write('about/index.html', tShell('/about/',
      'About — canitakethis.co',
      'What canitakethis.co is, who it is for, and how our airline and customs answers are put together.',
      'About canitakethis.co',
      `<p>canitakethis.co helps travellers get fast, clear answers to one stubborn question: <em>can I take this on the plane, or into the country?</em> We cover cabin and checked baggage rules for ${AIRLINES.length} airlines and customs guidance for ${COUNTRIES.length} countries.</p>
<p>The site grew out of the frustration of digging through long, contradictory policy pages minutes before a flight. Our goal is simple: give you a straight answer — yes, no, or with limits — with a pointer to the official source so you can double-check.</p>
<h2>How our answers are built</h2>
<p>Each answer is based on published airline baggage policies and official government customs guidance, then written in plain language. Rules change often and vary by nationality, route, and fare, so we mark every answer as guidance and always link you back to the authority that has the final say.</p>
<h2>Get in touch</h2>
<p>Spotted something out of date or wrong? We genuinely want to know. Email us at <a href="mailto:${EMAIL}">${EMAIL}</a> or use the feedback button in the corner of any page.</p>`
    ));
    pages.push({url:'/about/',changefreq:'monthly'});

    write('contact/index.html', tShell('/contact/',
      'Contact — canitakethis.co',
      'How to contact canitakethis.co with questions, corrections, or feedback.',
      'Contact us',
      `<p>We read every message. Whether you have found an error, have a question we do not cover yet, or just want to tell us what would make the site more useful — please reach out.</p>
<h2>Email</h2>
<p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
<h2>Feedback button</h2>
<p>Every page has a feedback button in the bottom-right corner. Tap it, type your note, and it comes straight to us — no form-filling, no account needed.</p>
<h2>Corrections</h2>
<p>Airline and customs rules change constantly. If an answer looks out of date, tell us which page and what you saw, and we will check it against the official source and update it.</p>`
    ));
    pages.push({url:'/contact/',changefreq:'monthly'});

    write('privacy/index.html', tShell('/privacy/',
      'Privacy Policy — canitakethis.co',
      'How canitakethis.co handles data, cookies, analytics, and advertising.',
      'Privacy Policy',
      `<p class="legal">Last updated: 2026. This policy explains what information canitakethis.co ("we", "us") collects when you use this website, and how it is used.</p>
<h2>Information we collect</h2>
<p class="legal">We do not ask you to create an account or to provide personal details to use the site. If you contact us by email or through the feedback button, we receive the message you send and the email address or information you choose to include, and we use it only to respond to you and to improve the site.</p>
<h2>Cookies and analytics</h2>
<p class="legal">We use Google Analytics to understand how the site is used (for example, which pages are visited and from which country). Google Analytics sets cookies and collects standard usage data such as your approximate location, device, and browser. This helps us improve the content and fix problems. You can block cookies in your browser settings or use browser add-ons to opt out of analytics.</p>
<h2>Advertising</h2>
<p class="legal">We may display advertising provided by third parties, including Google. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits. You can opt out of personalised advertising through Google's Ads Settings, or opt out of a third-party vendor's use of cookies for personalised advertising via <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info</a>.</p>
<h2>Third-party links</h2>
<p class="legal">Our pages link to airline and government websites so you can confirm the official rules. We are not responsible for the content or privacy practices of those sites.</p>
<h2>Children</h2>
<p class="legal">This site is intended for a general audience and is not directed at children under 13. We do not knowingly collect personal information from children.</p>
<h2>Changes</h2>
<p class="legal">We may update this policy from time to time. Continued use of the site after changes means you accept the updated policy.</p>
<h2>Contact</h2>
<p class="legal">Questions about this policy? Email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>`
    ));
    pages.push({url:'/privacy/',changefreq:'yearly'});

    write('terms/index.html', tShell('/terms/',
      'Terms of Use — canitakethis.co',
      'The terms governing your use of canitakethis.co, including disclaimers and limitation of liability.',
      'Terms of Use',
      `<p class="legal">Last updated: 2026. By using canitakethis.co ("the site"), you agree to these Terms of Use. If you do not agree, please do not use the site.</p>
<h2>Guidance only — not professional advice</h2>
<p class="legal">The information on this site is provided for general informational purposes only. It is <strong>guidance, not legal, travel, customs, or professional advice</strong>. Airline baggage rules and country customs regulations change frequently and vary by nationality, route, fare class, and individual circumstances.</p>
<h2>No warranty</h2>
<p class="legal">The site is provided "as is" and "as available" without warranties of any kind, whether express or implied, including accuracy, completeness, reliability, or fitness for a particular purpose. We do not warrant that the information is current, error-free, or applicable to your specific situation.</p>
<h2>Always confirm with the official authority</h2>
<p class="legal">Before you travel or pack, you must confirm any rule directly with the relevant airline and the official government or customs authority. Those sources — not this site — have the final say. Decisions you make based on information found here are your own responsibility.</p>
<h2>Limitation of liability</h2>
<p class="legal">To the fullest extent permitted by law, canitakethis.co and its operators shall not be liable for any direct, indirect, incidental, consequential, or special loss or damage — including but not limited to missed flights, denied boarding, confiscated items, fines, penalties, delays, or additional costs — arising from or connected with your use of, or reliance on, the site or its content. Your sole and exclusive remedy for dissatisfaction with the site is to stop using it.</p>
<h2>External links</h2>
<p class="legal">The site contains links to third-party websites for your convenience. We do not control and are not responsible for their content, accuracy, or practices.</p>
<h2>Changes to these terms</h2>
<p class="legal">We may revise these Terms of Use at any time. Continued use of the site after changes constitutes acceptance of the revised terms.</p>
<h2>Contact</h2>
<p class="legal">Questions about these terms? Email <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>`
    ));
    pages.push({url:'/terms/',changefreq:'yearly'});
  })();

  console.log('PAGES GENERATED:', pages.length);
  console.log('airlines:', AIRLINES.length, 'countries:', COUNTRIES.length);
  dom.window.close();
}
