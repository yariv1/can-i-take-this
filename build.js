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
const CHK_SCRIPT_M = (()=>{var all=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];return all[all.length-1]||null;})();
let CHK_SCRIPT = CHK_SCRIPT_M ? CHK_SCRIPT_M[1] : '';
const CHK_BODY = CHK_STYLE_M && CHK_SCRIPT_M
  ? html.slice(CHK_STYLE_M.index + CHK_STYLE_M[0].length, CHK_SCRIPT_M.index).trim().replace(/^<\/head><body>\s*/,'')
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
.hdr-blog-link{font-family:Inter,sans-serif;font-size:12px;font-weight:600;color:var(--muted);text-decoration:none;padding:6px 10px;border:1px solid var(--line);border-radius:999px;background:var(--surface);transition:color .18s,border-color .18s}.hdr-blog-link:hover{color:var(--accent);border-color:var(--accent)}.topbar-right{display:flex;align-items:center;gap:6px}
</style></head><body>
<div class="topbar-right" style="position:fixed;top:10px;right:12px;z-index:99;display:flex;align-items:center;gap:6px;"><a href="/blog/" class="hdr-blog-link">Blog</a><button class="theme-toggle" id="themeToggle" onclick="__tt()"><span id="themeIcon">&#9788;</span> <span id="themeLabel">Light</span></button></div>
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
<footer>Rules change and vary by nationality, route and fare. This is guidance, not legal advice — always confirm with the airline or the official customs authority before you travel. Updated 2026. <nav class="tlinks"><a href="/guides/">All Guides</a><a href="/guides/liquids/">Liquids 100ml Rule</a><a href="/guides/power-banks/">Power Bank Rules</a><a href="/guides/vapes/">Vape &amp; E-Cig Guide</a><a href="/blog/">Blog</a></nav><nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
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
  const _at=airTabs(slug(a.name),'baggage');
  const tabsHtml=_at.tabHtml;
  const moreBlock=_at.moreBlock;
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
+'.hdr-blog-link{font-family:Inter,sans-serif;font-size:12px;font-weight:600;color:var(--muted);text-decoration:none;padding:6px 10px;border:1px solid var(--line);border-radius:999px;background:var(--surface);transition:color .18s,border-color .18s}.hdr-blog-link:hover{color:var(--accent);border-color:var(--accent)}.topbar-right{display:flex;align-items:center;gap:6px}\n'
+'.airhead{display:flex;align-items:center;gap:12px;margin:6px 0 16px}\n'
+'.airhead .logo{position:relative;width:40px;height:40px;border-radius:9px;overflow:hidden;display:inline-grid;place-items:center;color:#1B2233;background:#fff;font-family:\'Space Mono\',monospace;font-size:11px;font-weight:700;flex:none}\n'
+'.airhead .logo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n'
+'.airhead h2{font-family:\'Space Grotesk\',\'Inter\',sans-serif;font-size:1.7rem;line-height:1.15;margin:0;font-weight:700}\n'
+'.airhead h2 .muted{color:var(--muted);font-weight:600}\n'
+'.tabs{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 8px}\n'
+'.tab{background:var(--surface);border:1px solid var(--line);border-radius:999px;color:var(--text);text-decoration:none;font-weight:500;font-size:13.5px;padding:9px 15px;transition:.14s;display:inline-flex;align-items:center;gap:6px}\n'
+'.tab:hover{border-color:var(--surface-2)}\n'
+'.tab.on{background:var(--sel-bg);color:var(--sel-text);border-color:var(--sel-bg);font-weight:600}\n'
+'.tab.back{color:var(--muted)}\n'
+'.more{margin:0 0 26px}\n'
+'.more summary{list-style:none;display:inline-flex;align-items:center;gap:5px;cursor:pointer;color:var(--muted);font-size:13.5px;font-weight:600;padding:6px 10px;border-radius:8px;user-select:none;transition:.14s}\n'
+'.more summary::-webkit-details-marker{display:none}\n'
+'.more summary:hover{color:var(--text);background:var(--surface)}\n'
+'.more summary .chev{width:15px;height:15px;transition:transform .18s}\n'
+'.more[open] summary .chev{transform:rotate(180deg)}\n'
+'.more summary .mlabel::before{content:"Show more"}\n'
+'.more[open] summary .mlabel::before{content:"Show less"}\n'
+'.morerow{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 0}\n'
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
+'<div class="topbar-right"><a href="/blog/" class="hdr-blog-link">Blog</a><button class="theme-toggle" id="themeToggle" onclick="__tt()"><span class="ico" id="themeIcon">&#9728;</span><span id="themeLabel">Light</span></button></div></div>\n'
+'<div class="airhead">'+logo+'<h2>'+esc(a.name)+' <span class="muted">Airline Rules</span></h2></div>\n'
+'<nav class="tabs">'+tabsHtml+'</nav>\n'
+moreBlock+'\n'
+'<main>'+blocks+'</main>\n'
+'<footer>Rules change and vary by nationality, route and fare. This is guidance, not legal advice \u2014 always confirm with the airline or the official customs authority before you travel. Updated 2026.<nav class="tlinks"><a href="/guides/">All Guides</a><a href="/guides/liquids/">Liquids 100ml Rule</a><a href="/guides/power-banks/">Power Bank Rules</a><a href="/guides/vapes/">Vape &amp; E-Cig Guide</a><a href="/blog/">Blog</a></nav><nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>\n'
+'</div>\n'
+'<script>function advLogo(im){var l=(im.dataset.srcs||"").split("|"),i=parseInt(im.dataset.i||"0",10)+1;if(i<l.length){im.dataset.i=i;im.src=l[i];}else{im.style.display="none";}}document.querySelectorAll("img.logo-img").forEach(function(im){im.onerror=function(){advLogo(im);};if(im.complete&&im.naturalWidth===0)advLogo(im);});</scr'+'ipt>\n'
+'<script>function __lbl(c){var l=document.getElementById(\'themeLabel\'),i=document.getElementById(\'themeIcon\');if(l)l.textContent=c===\'dark\'?\'Light\':\'Dark\';if(i)i.innerHTML=c===\'dark\'?\'\u263C\':\'\u263D\';}function __tt(){var t=document.documentElement.getAttribute(\'data-theme\')===\'dark\'?\'light\':\'dark\';document.documentElement.setAttribute(\'data-theme\',t);localStorage.setItem(\'citt-theme\',t);__lbl(t);}window.addEventListener(\'DOMContentLoaded\',function(){__lbl(document.documentElement.getAttribute(\'data-theme\'));});</scr'+'ipt>\n'
+'<script src="/feedback.js" defer></scr'+'ipt>\n'
+'</body></html>';
}

const TA_LIB=/*v3*/Buffer.from('dmFyIFZJQ09OPXtnbzonPHBhdGggZD0iTTIwIDYgOSAxN2wtNS01Ii8+Jyx3YXJuOic8cGF0aCBkPSJNMTIgOXY0bTAgNGguMDFNMTAuMyAzLjkgMS44IDE4YTIgMiAwIDAgMCAxLjcgM2gxN2EyIDIgMCAwIDAgMS43LTNMMTMuNyAzLjlhMiAyIDAgMCAwLTMuNCAwWiIvPicsc3RvcDonPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iOSIvPjxwYXRoIGQ9Ik04IDEyaDgiLz4nLGluZm86JzxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjkiLz48cGF0aCBkPSJNMTIgOGguMDFNMTEgMTJoMXY0aDEiLz4nLG5vbWF0Y2g6JzxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjkiLz48cGF0aCBkPSJNOS42IDkuNGEyLjQgMi40IDAgMCAxIDQuMiAxLjZjMCAxLjYtMi4yIDItMi4yIDMuNCIvPjxwYXRoIGQ9Ik0xMiAxNy4zaC4wMSIvPid9Owp2YXIgVkxBQkVMPXtnbzonQWxsb3dlZCcsd2FybjonQ2hlY2sgZmlyc3QnLHN0b3A6J05vdCBhbGxvd2VkJyxpbmZvOidDaGVjayB0aGUgc291cmNlJyxub21hdGNoOidObyBtYXRjaGVzIGZvdW5kJ307CmZ1bmN0aW9uIGVzYyhzKXtyZXR1cm4gU3RyaW5nKHMpLnJlcGxhY2UoLyYvZywnJmFtcDsnKS5yZXBsYWNlKC88L2csJyZsdDsnKS5yZXBsYWNlKC8+L2csJyZndDsnKS5yZXBsYWNlKC8iL2csJyZxdW90OycpO30KZnVuY3Rpb24gbWVyZ2UoYSxiKXt2YXIgbz17fSxrO2ZvcihrIGluIGEpb1trXT1hW2tdO2ZvcihrIGluIGIpb1trXT1iW2tdO3JldHVybiBvO30KZnVuY3Rpb24gZm9vZFYoZW50cnkpewogIHZhciBjPWVudHJ5LmMsY291bnRyeT1ELmNuLHJ1bGVzPUQuZm9vZFJ1bGVzLGxldmVsPXJ1bGVzW2NdfHxydWxlcy5kZWYsY249RC5jYXRuYW1lW2NdfHwnRm9vZCc7CiAgdmFyIGNhdFRhZz17dDonQ2F0ZWdvcnkgXHUwMEI3ICcrY24sazonbmV1dHJhbCd9OwogIHZhciBiYXNlPXtzb3VyY2U6RC5hdXRoLHNyYzonRm9vZCBydWxlcyBwcm90ZWN0IGFnYWluc3QgcGVzdHMgYW5kIGRpc2Vhc2UuIFdoZW4gdW5zdXJlLCBhbHdheXMgZGVjbGFyZSBpdCAtIGRlY2xhcmluZyBpcyBmcmVlLCBzbXVnZ2xpbmcgaXMgZmluZWQuJ307CiAgaWYobGV2ZWw9PT0nZ28nKXJldHVybiBtZXJnZShiYXNlLHtzdGF0dXM6J2dvJyx0YWdzOltjYXRUYWcse3Q6J0dlbmVyYWxseSBhY2NlcHRlZCcsazonZ3JlZW4nfV0saGVhZDplbnRyeS5uKycgaXMgdXN1YWxseSBmaW5lIHRvIGJyaW5nIGluLicsbGluZXM6WydTZWFsZWQsIGNvbW1lcmNpYWxseSBwYWNrYWdlZCAnK2NuLnRvTG93ZXJDYXNlKCkrJyBpcyBnZW5lcmFsbHkgYWNjZXB0ZWQuJywnU3RpbGwgdGljayB0aGUgImZvb2QiIGJveCBvbiB5b3VyIGFycml2YWwgY2FyZCBpZiB0aGVyZSBpcyBvbmUuJ119KTsKICBpZihsZXZlbD09PSdzdG9wJylyZXR1cm4gbWVyZ2UoYmFzZSx7c3RhdHVzOidzdG9wJyx0YWdzOltjYXRUYWcse3Q6J05vdCBwZXJtaXR0ZWQnLGs6J3N0b3AnfV0saGVhZDonTGVhdmUgdGhlICcrZW50cnkubi50b0xvd2VyQ2FzZSgpKycgYmVoaW5kIFx1MjAxNCAnK2NvdW50cnkrJyB3b25cJ3QgYWxsb3cgaXQuJyxsaW5lczpbY24rJyBpcyBwcm9oaWJpdGVkIG9yIGRlc3Ryb3llZCBvbiBhcnJpdmFsIGluICcrY291bnRyeSsnLicsJ1VuZGVjbGFyZWQgcmlza3MgYSBmaW5lOyBkZWNsYXJlZCwgaXQgd2lsbCBzaW1wbHkgYmUgdGFrZW4uJ119KTsKICBpZihsZXZlbD09PSd3YXJuJylyZXR1cm4gbWVyZ2UoYmFzZSx7c3RhdHVzOid3YXJuJyx0YWdzOltjYXRUYWcse3Q6J0RlY2xhcmUgb24gYXJyaXZhbCcsazonYW1iZXInfV0saGVhZDplbnRyeS5uKycgaXMgcmVzdHJpY3RlZCBcdTIwMTQgZGVjbGFyZSBpdC4nLGxpbmVzOltjbisnIGlzIGxpbWl0ZWQgaW4gJytjb3VudHJ5KycgYW5kIG1heSBiZSBpbnNwZWN0ZWQgb3IgcmVmdXNlZC4nLCdEZWNsYXJlIGl0IG9uIGFycml2YWw7IHNlYWxlZCBjb21tZXJjaWFsIHByb2R1Y3RzIGhhdmUgdGhlIGJlc3QgY2hhbmNlLiddfSk7CiAgcmV0dXJuIG1lcmdlKGJhc2Use3N0YXR1czonaW5mbycsdGFnczpbY2F0VGFnXSxoZWFkOidXZVwncmUgbm90IHN1cmUgYWJvdXQgJytlbnRyeS5uKycuJyxsaW5lczpbJ1dlIGNhblwndCBjb25maXJtIGhvdyAnK2NvdW50cnkrJyB0cmVhdHMgdGhpcyBpdGVtLicsJ0RlY2xhcmUgaXQgdG8gYmUgc2FmZSBhbmQgc2VlIEhlbHBmdWwgc291cmNlcyBiZWxvdy4nXX0pOwp9CmZ1bmN0aW9uIG1lZFYoZW50cnkpewogIHZhciBpbmc9ZW50cnkuaW5nLGNvdW50cnk9RC5jbixydWxlcz1ELm1lZFJ1bGVzW2luZ107CiAgdmFyIGxldmVsPXJ1bGVzPyhydWxlc1tjb3VudHJ5XXx8cnVsZXMuZGVmKTondW5rbm93bic7CiAgdmFyIGF1dGg9RC5hdXRoOwogIHZhciBpbmdUYWc9e3Q6J0FjdGl2ZSBpbmdyZWRpZW50IFx1MDBCNyAnK2luZyxrOiduZXV0cmFsJ307CiAgdmFyIGJhc2U9e3NvdXJjZTphdXRoLHNyYzonTWVkaWNhdGlvbiBydWxlcyB2YXJ5IGJ5IGNvdW50cnkgYW5kIGNhbiBjaGFuZ2UuIFRoaXMgaXMgZ3VpZGFuY2UsIG5vdCBsZWdhbCBhZHZpY2UgLSBjYXJyeSB5b3VyIHByZXNjcmlwdGlvbiBhbmQgY29uZmlybSB3aXRoIHRoZSBvZmZpY2lhbCBhdXRob3JpdHkgYmVmb3JlIHlvdSBmbHkuJ307CiAgaWYobGV2ZWw9PT0nYmFuJylyZXR1cm4gbWVyZ2UoYmFzZSx7c3RhdHVzOidzdG9wJyx0YWdzOltpbmdUYWcse3Q6J05vdCBwZXJtaXR0ZWQnLGs6J3N0b3AnfV0saGVhZDplbnRyeS5uKycgY29udGFpbnMgJytpbmcrJyBcdTIwMTQgYmFubmVkIGluICcrY291bnRyeSsnLicsbGluZXM6WydBIHByZXNjcmlwdGlvbiBkb2VzIG5vdCBjaGFuZ2UgdGhpcyAtICcraW5nKycgaXMgcHJvaGliaXRlZCBpbiAnK2NvdW50cnkrJy4nLCdEbyBub3QgcGFjayBpdC4gQXNrIHlvdXIgZG9jdG9yIGFib3V0IGFuIGFwcHJvdmVkIGFsdGVybmF0aXZlIGZvciB0aGUgdHJpcC4nXX0pOwogIGlmKGxldmVsPT09J3Blcm1pdCcpcmV0dXJuIG1lcmdlKGJhc2Use3N0YXR1czond2FybicsdGFnczpbaW5nVGFnLHt0OidQcmVzY3JpcHRpb24gKyBwcmlvciBhcHByb3ZhbCcsazonYW1iZXInfV0saGVhZDonQWxsb3dlZCBvbmx5IGlmIHlvdSBhcnJhbmdlIGFwcHJvdmFsIGZpcnN0LicsbGluZXM6W2luZysnIGlzIGNvbnRyb2xsZWQgaW4gJytjb3VudHJ5KycgLSB5b3UgbmVlZCBhbiBpbXBvcnQgcGVybWl0IG9yIGFkdmFuY2UgYXBwcm92YWwgYmVmb3JlIHlvdSB0cmF2ZWwuJywnQXBwbHkgYWhlYWQgb2YgdGltZSBhbmQgY2FycnkgdGhlIGFwcHJvdmFsIHRvZ2V0aGVyIHdpdGggeW91ciBwcmVzY3JpcHRpb24uJ119KTsKICBpZihsZXZlbD09PSdyeCcpcmV0dXJuIG1lcmdlKGJhc2Use3N0YXR1czonZ28nLHRhZ3M6W2luZ1RhZyx7dDonUHJlc2NyaXB0aW9uIG5lZWRlZCcsazonYW1iZXInfV0saGVhZDonWWVzIC0gYnJpbmcgaXQgd2l0aCB5b3VyIHByZXNjcmlwdGlvbi4nLGxpbmVzOlsnQ2FycnkgJytlbnRyeS5uKycgaW4gaXRzIG9yaWdpbmFsIHBhY2thZ2luZyB3aXRoIHRoZSBwcmVzY3JpcHRpb24gb3IgYSBkb2N0b3IgbGV0dGVyLicsJ0JyaW5nIG9ubHkgYSBwZXJzb25hbCBzdXBwbHkgKHVzdWFsbHkgdXAgdG8gfjMwLTkwIGRheXMpLiddfSk7CiAgaWYobGV2ZWw9PT0nb2snKXJldHVybiBtZXJnZShiYXNlLHtzdGF0dXM6J2dvJyx0YWdzOltpbmdUYWcse3Q6J05vIHByZXNjcmlwdGlvbiBuZWVkZWQnLGs6J2dyZWVuJ31dLGhlYWQ6J1llcyAtIHlvdSBjYW4gYnJpbmcgdGhpcyBpbi4nLGxpbmVzOltpbmcrJyBpcyBub3Qgc3BlY2lhbGx5IHJlc3RyaWN0ZWQgaW4gJytjb3VudHJ5KycuJywnS2VlcCBpdCBpbiBvcmlnaW5hbCBwYWNrYWdpbmcgYW5kIGJyaW5nIGEgcmVhc29uYWJsZSBwZXJzb25hbCBzdXBwbHkuJ119KTsKICByZXR1cm4gbWVyZ2UoYmFzZSx7c3RhdHVzOidpbmZvJyx0YWdzOltpbmdUYWddLGhlYWQ6J1dlIGRvblwndCBoYXZlIHZlcmlmaWVkIGluZm8gZm9yIHRoaXMgeWV0LicsbGluZXM6WydXZSBjYW5cJ3QgY29uZmlybSBob3cgJytjb3VudHJ5KycgdHJlYXRzICcraW5nKycsIHNvIHdlIHdvblwndCBndWVzcy4nLCdTZWUgSGVscGZ1bCBzb3VyY2VzIGJlbG93IGFuZCBjYXJyeSB5b3VyIHByZXNjcmlwdGlvbi4nXX0pOwp9CmZ1bmN0aW9uIG5vTWF0Y2gocSl7CiAgcmV0dXJuIHtzdGF0dXM6J25vbWF0Y2gnLHRhZ3M6W3t0OihELmlzTWVkPydNZWRpY2luZSc6J0Zvb2QnKSsnIFx1MDBCNyAnK3EsazonbmV1dHJhbCd9XSxzb3VyY2U6RC5hdXRoLGhlYWQ6J1NvcnJ5LCB3ZSBjb3VsZG5cJ3QgZmluZCBhbnkgbWF0Y2hlcyBmb3IgdGhlIGl0ZW0geW91IHdlcmUgbG9va2luZyB0byBnZXQgYW5zd2VycyBvbi4gUGxlYXNlIHVzZSB0aGUgaGVscGZ1bCBzb3VyY2Uocykgd2UgcHJvdmlkZWQgZm9yIGZ1cnRoZXIgaGVscC4nLGxpbmVzOltdLHNyYzonV2Ugb25seSBnaXZlIGEgdmVyZGljdCB3aGVuIHdlIGNhbiBiYWNrIGl0IHVwLiBGb3IgZXZlcnl0aGluZyBlbHNlLCB3ZSBoYW5kIHlvdSB0aGUgcmlnaHQgcGVvcGxlLid9Owp9CmZ1bmN0aW9uIGhlbHBCbG9jayhhdSl7dmFyIGFycj0oYXUmJmF1Lmxlbmd0aCk/YXU6KGF1JiZhdS51cmw/W2F1XTpbXSk7dmFyIHJvd3M9Jyc7Zm9yKHZhciBpPTA7aTxhcnIubGVuZ3RoO2krKyl7dmFyIGE9YXJyW2ldO2lmKCFhfHwhYS51cmwpY29udGludWU7cm93cys9JzxhIGNsYXNzPSJoaXRlbSIgaHJlZj0iJythLnVybCsnIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciI+PHNwYW4gY2xhc3M9ImhpLWljIj5cdUQ4M0NcdURGMTA8L3NwYW4+PHNwYW4gY2xhc3M9ImhpLWwiPicrZXNjKGEubGFiZWwpKyc8c21hbGw+T2ZmaWNpYWwgZ3VpZGFuY2U8L3NtYWxsPjwvc3Bhbj48c3BhbiBjbGFzcz0iaGktZ28iPlx1MjE5Nzwvc3Bhbj48L2E+Jzt9aWYoIXJvd3MpcmV0dXJuICcnO3JldHVybiAnPGRpdiBjbGFzcz0iaGVscCI+PGRpdiBjbGFzcz0iaGVscC1oIj5IZWxwZnVsIHNvdXJjZXM8L2Rpdj4nK3Jvd3MrJzxkaXYgY2xhc3M9Imhub3RlIj5UbyBiZSAxMDAlIHN1cmUsIHdlIGFsd2F5cyByZWNvbW1lbmQgY29uZmlybWluZyB3aXRoIHRoZSBvZmZpY2lhbCBjaGFubmVscy48L2Rpdj48L2Rpdj4nO30KZnVuY3Rpb24gY2FyZEhUTUwodil7CiAgdmFyIGxpbmVzPSh2LmxpbmVzfHxbXSkuZmlsdGVyKEJvb2xlYW4pLm1hcChmdW5jdGlvbihsKXtyZXR1cm4gJzxsaT4nK2VzYyhsKSsnPC9saT4nO30pLmpvaW4oJycpOwogIHZhciB0YWdzPSh2LnRhZ3MmJnYudGFncy5sZW5ndGgpPyc8ZGl2IGNsYXNzPSJ0YWdyb3ciPicrdi50YWdzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gJzxzcGFuIGNsYXNzPSJ0YWcgdGFnLScrdC5rKyciPicrZXNjKHQudCkrJzwvc3Bhbj4nO30pLmpvaW4oJycpKyc8L2Rpdj4nOicnOwogIHJldHVybiAnPGRpdiBjbGFzcz0icGFzcyAnK3Yuc3RhdHVzKycgcHJpbnQiPjxkaXYgY2xhc3M9InN0cmlwIj48ZGl2IGNsYXNzPSJiYWRnZSI+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4nK1ZJQ09OW3Yuc3RhdHVzXSsnPC9zdmc+PC9kaXY+PGRpdj48ZGl2IGNsYXNzPSJ2ZXJkaWN0Ij4nK1ZMQUJFTFt2LnN0YXR1c10rJzwvZGl2PjxkaXYgY2xhc3M9InZzdWIiPkF0IHRoZSBib3JkZXI8L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJwZXJmIj48L2Rpdj48ZGl2IGNsYXNzPSJib2R5Ij4nK3RhZ3MrJzxwIGNsYXNzPSJoZWFkbGluZSI+Jytlc2Modi5oZWFkfHwnJykrJzwvcD48dWwgY2xhc3M9ImRldGFpbCI+JytsaW5lcysnPC91bD4nK2hlbHBCbG9jayh2LnNvdXJjZSkrJzxkaXYgY2xhc3M9InNyYyI+Jytlc2Modi5zcmN8fCcnKSsnPC9kaXY+PC9kaXY+PC9kaXY+JzsKfQp2YXIgX2luPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YUlucHV0JyksX3N1Zz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFTdWdnZXN0JyksX3Jlcz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFSZXN1bHQnKSxfb3JpZz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFPcmlnaW5hbCcpOwpmdW5jdGlvbiBfcGljayhpdGVtKXt2YXIgdj1pdGVtLmZyZWU/bm9NYXRjaChpdGVtLm4pOihELmlzTWVkP21lZFYoaXRlbSk6Zm9vZFYoaXRlbSkpO19yZXMuaW5uZXJIVE1MPWNhcmRIVE1MKHYpO19vcmlnLnN0eWxlLmRpc3BsYXk9J25vbmUnO19zdWcuaW5uZXJIVE1MPScnO19zdWcuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTt9CmZ1bmN0aW9uIF9yZXN0b3JlKCl7X3Jlcy5pbm5lckhUTUw9Jyc7X29yaWcuc3R5bGUuZGlzcGxheT0nJzt9CmZ1bmN0aW9uIF9wbGFjZSgpe2lmKCFfc3VnLnF1ZXJ5U2VsZWN0b3IoJy5zdWcnKSl7X3N1Zy5jbGFzc0xpc3QucmVtb3ZlKCd1cCcpO3JldHVybjt9dmFyIHI9X2luLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGJlbG93PXdpbmRvdy5pbm5lckhlaWdodC1yLmJvdHRvbSxhYm92ZT1yLnRvcCxuZWVkPU1hdGgubWluKF9zdWcuc2Nyb2xsSGVpZ2h0LHdpbmRvdy5pbm5lckhlaWdodCowLjQ2KTtpZihiZWxvdzxuZWVkJiZhYm92ZT5iZWxvdyl7X3N1Zy5jbGFzc0xpc3QuYWRkKCd1cCcpO31lbHNle19zdWcuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTt9fQppZihfaW4pe19pbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsZnVuY3Rpb24oKXsKICB2YXIgcT1faW4udmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCk7CiAgaWYoIXEpe19zdWcuaW5uZXJIVE1MPScnO19yZXN0b3JlKCk7cmV0dXJuO30KICB2YXIgaWR4PVtdLGk7Zm9yKGk9MDtpPEQuZGIubGVuZ3RoO2krKyl7aWYoRC5kYltpXS5uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxKT4tMSl7aWR4LnB1c2goaSk7aWYoaWR4Lmxlbmd0aD49NilicmVhazt9fQogIHZhciBodG1sPWlkeC5tYXAoZnVuY3Rpb24oaSl7dmFyIHg9RC5kYltpXSxzPUQuaXNNZWQ/eC5pbmc6KEQuY2F0bmFtZVt4LmNdfHwnJyk7cmV0dXJuICc8ZGl2IGNsYXNzPSJzdWciIGRhdGEtaT0iJytpKyciPicrZXNjKHgubikrKHM/JzxzcGFuIGNsYXNzPSJpbmciPicrZXNjKHMpKyc8L3NwYW4+JzonJykrJzwvZGl2Pic7fSkuam9pbignJyk7CiAgaWYoaWR4Lmxlbmd0aD09PTApaHRtbCs9JzxkaXYgY2xhc3M9InN1ZyBhbnl3YXkiIGRhdGEtYW55PSIxIj5DaGVjayBcdTIwMUMnK2VzYyhfaW4udmFsdWUpKydcdTIwMUQgYW55d2F5PHNwYW4gY2xhc3M9ImluZyI+bm90IGluIG91ciBsaXN0PC9zcGFuPjwvZGl2Pic7CiAgX3N1Zy5pbm5lckhUTUw9aHRtbDtfcGxhY2UoKTsKICBbXS5mb3JFYWNoLmNhbGwoX3N1Zy5xdWVyeVNlbGVjdG9yQWxsKCcuc3VnJyksZnVuY3Rpb24oZWwpe2VsLm9uY2xpY2s9ZnVuY3Rpb24oKXtpZihlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW55Jykpe19waWNrKHtmcmVlOnRydWUsbjpfaW4udmFsdWUudHJpbSgpfSk7fWVsc2V7dmFyIHg9RC5kYlsrZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWknKV07X2luLnZhbHVlPXgubjtfcGljayh4KTt9fTt9KTsKfSk7fQo=','base64').toString('utf8');
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
  function helpBlock(au){var arr=(au&&au.length)?au:(au&&au.url?[au]:[]);var rows='';for(var _i=0;_i<arr.length;_i++){var a=arr[_i];if(a&&a.url)rows+=linkRow(a.label,'Official guidance',a.url);}if(!rows)return '';return '<div class="help"><div class="help-h">Helpful sources</div>'+rows+'<div class="hnote">To be 100% sure, we always recommend confirming with the official channels.</div></div>';}
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
  if(o.cat==='food'||o.cat==='med'){/*ta-hoist*/
    var _isMed=o.cat==='med';
    /*SRC_LINKS_V1B*/var _auth=_isMed?(w.MED_AUTH[cn]||{label:cn+' health & customs authority',url:null}):(w.FOOD_AUTH[cn]||{label:cn+' customs / biosecurity authority',url:null});
    var _D={cn:cn,isMed:_isMed,db:_isMed?w.MED_DB:w.FOOD_DB,auth:_auth,foodRules:_isMed?null:(w.FOOD_RULES[cn]||w.FOOD_RULES.def),medRules:_isMed?w.MED_RULES:null,catname:w.CATNAME};
    var _intro='<div class="hubintro">'+topRoute+'<p class="hublead">'+esc(o.lead)+'</p></div>';
    if(main.indexOf(_intro)===0)main=main.slice(_intro.length);
    taBlock=_intro+'<div class="tasearch"><label class="talabel" for="taInput">'+(_isMed?'Which medicine?':'Which food?')+'</label><div class="tapick"><input id="taInput" class="tinput" type="text" autocomplete="off" placeholder="'+(_isMed?'Type a medicine or ingredient (e.g. Sudafed)':'Type a food (e.g. beef jerky)')+'"><div id="taSuggest" class="suggest"></div></div></div>';
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
+'.hdr-blog-link{font-family:Inter,sans-serif;font-size:12px;font-weight:600;color:var(--muted);text-decoration:none;padding:6px 10px;border:1px solid var(--line);border-radius:999px;background:var(--surface);transition:color .18s,border-color .18s}.hdr-blog-link:hover{color:var(--accent);border-color:var(--accent)}.topbar-right{display:flex;align-items:center;gap:6px}\n'
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
+'.tapick .suggest{position:absolute;left:0;right:0;top:100%;margin:6px 0 0;max-height:46vh;overflow:auto;z-index:60;box-shadow:0 14px 30px rgba(0,0,0,.45)}\n'
+'.tapick .suggest.up{top:auto;bottom:100%;margin:0 0 6px;box-shadow:0 -14px 30px rgba(0,0,0,.45)}\n'
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
+'<div class="topbar-right"><a href="/blog/" class="hdr-blog-link">Blog</a><button class="theme-toggle" id="themeToggle" onclick="__tt()"><span class="ico" id="themeIcon">&#9728;</span><span id="themeLabel">Light</span></button></div></div>\n'
+'<div class="airhead"><span class="cflag">'+flag+'</span><h2>'+esc(cn)+' <span class="muted">Customs Rules</span></h2></div>\n'
+'<nav class="tabs">'+tabHtml+'</nav>\n'
+moreBlock+'\n'
+'<main>'+taBlock+'<div id="taResult"></div><div id="taOriginal">'+main+'</div></main>\n'+taScript
+'<footer>Rules change and vary by nationality, route and fare. This is guidance, not legal advice \u2014 always confirm with the airline or the official customs authority before you travel. Updated 2026.<nav class="tlinks"><a href="/guides/">All Guides</a><a href="/guides/liquids/">Liquids 100ml Rule</a><a href="/guides/power-banks/">Power Bank Rules</a><a href="/guides/vapes/">Vape &amp; E-Cig Guide</a><a href="/blog/">Blog</a></nav><nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>\n'
+'</div>\n'
+'<script>function __lbl(c){var l=document.getElementById(\'themeLabel\'),i=document.getElementById(\'themeIcon\');if(l)l.textContent=c===\'dark\'?\'Light\':\'Dark\';if(i)i.innerHTML=c===\'dark\'?\'\u263C\':\'\u263D\';}function __tt(){var t=document.documentElement.getAttribute(\'data-theme\')===\'dark\'?\'light\':\'dark\';document.documentElement.setAttribute(\'data-theme\',t);localStorage.setItem(\'citt-theme\',t);__lbl(t);}window.addEventListener(\'DOMContentLoaded\',function(){__lbl(document.documentElement.getAttribute(\'data-theme\'));});</scr'+'ipt>\n'
+'<script src="/feedback.js" defer></scr'+'ipt>\n'
+'</body></html>';
}

/*AIRPLANE_PAGES_V1*/
function airTabs(sl, active){
  var visible=[
    {t:'\u2039 All rules',u:'/',back:true},
    {t:'Baggage',u:'/airline/'+sl+'/baggage-allowance/',key:'baggage'},
    {t:'Liquids',u:'/airline/'+sl+'/liquids/',key:'liquids'},
    {t:'Power bank',u:'/airline/'+sl+'/power-bank/',key:'power'},
    {t:'Vape',u:'/airline/'+sl+'/vape-e-cigarette/',key:'vape'}
  ];
  var more=[
    {t:'Perfume',u:'/airline/'+sl+'/perfume-aerosols/',key:'perfume'},
    {t:'Alcohol',u:'/airline/'+sl+'/alcohol/',key:'alcohol'}
  ];
  var tabHtml=visible.map(function(t){return '<a class="tab'+(t.key&&t.key===active?' on':'')+(t.back?' back':'')+'" href="'+t.u+'">'+esc(t.t)+'</a>';}).join('');
  var moreHtml=more.map(function(t){return '<a class="tab'+(t.key&&t.key===active?' on':'')+'" href="'+t.u+'">'+esc(t.t)+'</a>';}).join('');
  var moreActive=more.some(function(t){return t.key===active;});
  var moreBlock='<details class="more" data-airmore'+(moreActive?' open':'')+'><summary><span class="mlabel"></span><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></summary><div class="morerow">'+moreHtml+'</div></details>';
  return {tabHtml:tabHtml, moreBlock:moreBlock};
}
function airPlaneShell(o){
  var a=o.a, cat=o.cat, url=o.url, sl=slug(a.name), canonical=BASE+url;
  var VOL=(cat==='liquids'||cat==='perfume'||cat==='alcohol'), POWER=(cat==='power'), VAPE=(cat==='vape');
  var VICON={go:'<path d="M20 6 9 17l-5-5"/>',warn:'<path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',stop:'<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/>'};
  var VLABEL={go:'Allowed',warn:'Check first',stop:'Not allowed',info:'Check the source'};
  function help(){ if(!a.site) return ''; return '<div class="help"><div class="help-h">Helpful sources</div><a class="hitem" href="https://www.'+esc(a.site)+'" target="_blank" rel="noopener"><span class="hi-ic">\uD83C\uDF10</span><span class="hi-l">'+esc(a.name)+' website<small>Baggage & rules</small></span><span class="hi-go">\u2197</span></a><div class="hnote">To be 100% sure, we always recommend confirming with the official channels.</div></div>'; }
  function card(v,bagLabel){
    var lines=(v.lines||[]).filter(Boolean).map(function(l){return '<li>'+esc(l)+'</li>';}).join('');
    var route='<div class="route"><span>&#9992; <b>'+esc(a.name)+'</b></span><span>'+bagLabel+'</span></div>';
    return '<div class="pass '+v.status+' print"><div class="strip"><div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">'+VICON[v.status]+'</svg></div><div><div class="verdict">'+VLABEL[v.status]+'</div><div class="vsub">On the plane</div></div></div><div class="perf"></div><div class="body">'+route+'<p class="headline">'+esc(v.head||'')+'</p><ul class="detail">'+lines+'</ul>'+help()+'<div class="src">'+esc(v.src||'')+'</div></div></div>';
  }
  /*AIRPLANE_TOGGLE_V2*/
  var opts=VOL?['50','100','300','500']:(POWER?['lo','mid','hi']:[]);
  var def=VOL?'100':(POWER?'lo':null);
  var carryMap={}, vdef=null;
  opts.forEach(function(id){ setS({mode:'plane',bag:'carry',cat:cat,detail:id,airline:a.name}); var v=w.verdict(); carryMap[id]=card(v,'CARRY-ON'); if(id===def)vdef=v; });
  var carryVape='';
  if(VAPE){ setS({mode:'plane',bag:'carry',cat:cat,detail:null,airline:a.name}); vdef=w.verdict(); carryVape=card(vdef,'CARRY-ON'); }
  setS({mode:'plane',bag:'checked',cat:cat,detail:(VOL?'100':(POWER?'lo':null)),airline:a.name});
  var checkedCard=card(w.verdict(),'CHECKED');
  var initCard=VAPE?carryVape:carryMap[def];
  var bagToggle='<div class="slab">Where in your bags?</div><div class="bag2" id="bagSeg"><button data-bag="carry" class="on">Carry-on <small>Trolley, backpack, under-seat</small></button><button data-bag="checked">Checked <small>Goes in the hold</small></button></div>';
  var pickerHtml='';
  if(!VAPE){ var list=VOL?w.DETAILS.vol:w.DETAILS.wh; var lbl=POWER?'Battery capacity?':'How much?'; pickerHtml='<div class="slab">'+lbl+'</div><div class="chips" id="detChips">'+list.map(function(d){return '<button class="chip sm'+(d.id===def?' on':'')+'" data-d="'+d.id+'">'+esc(d.label)+'</button>';}).join('')+'</div>'; }
  var clientScript;
  if(VAPE){
    clientScript='<scr'+'ipt>(function(){var CA='+JSON.stringify(carryVape)+',CH='+JSON.stringify(checkedCard)+';var box=document.getElementById("planeCard"),bag="carry";var bb=document.querySelectorAll("#bagSeg button");function r(){box.innerHTML=bag==="checked"?CH:CA;}[].forEach.call(bb,function(b){b.onclick=function(){bag=b.dataset.bag;[].forEach.call(bb,function(x){x.classList.toggle("on",x===b);});r();};});})();</scr'+'ipt>\n';
  } else {
    clientScript='<scr'+'ipt>(function(){var CARRY='+JSON.stringify(carryMap)+',CH='+JSON.stringify(checkedCard)+';var box=document.getElementById("planeCard"),bag="carry",det='+JSON.stringify(def)+';var bb=document.querySelectorAll("#bagSeg button"),ch=document.querySelectorAll("#detChips .chip");function r(){box.innerHTML=bag==="checked"?CH:CARRY[det];}[].forEach.call(bb,function(b){b.onclick=function(){bag=b.dataset.bag;[].forEach.call(bb,function(x){x.classList.toggle("on",x===b);});r();};});[].forEach.call(ch,function(c){c.onclick=function(){det=c.dataset.d;[].forEach.call(ch,function(x){x.classList.toggle("on",x===c);});r();};});})();</scr'+'ipt>\n';
  }
  var CATMETA={
    liquids:{h1:'Can I bring liquids on '+a.name+'? (2026)',ttl:a.name+' Liquids Rules 2026 \u2014 Carry-On & Checked'},
    perfume:{h1:'Perfume & aerosols on '+a.name+' (2026)',ttl:a.name+' Perfume & Aerosol Rules 2026'},
    alcohol:{h1:'Bringing alcohol on '+a.name+' (2026)',ttl:a.name+' Alcohol Rules 2026 \u2014 Carry-On & Checked'},
    power:{h1:'Power banks on '+a.name+' (2026)',ttl:a.name+' Power Bank Rules 2026 \u2014 Wh Limits'},
    vape:{h1:'Vapes & e-cigarettes on '+a.name+' (2026)',ttl:a.name+' Vape & E-Cigarette Rules 2026'}
  };
  var meta=CATMETA[cat];
  var faqA=(vdef.head||'')+' '+((vdef.lines||[]).filter(Boolean).join(' '));
  var desc=((vdef.head||'')+' '+((vdef.lines||[]).filter(Boolean)[0]||'')).slice(0,155);
  var LOGOSRC='https://www.gstatic.com/flights/airline_logos/70px/'+a.iata+'.png';
  var logo='<span class="logo" style="background:#fff"><span>'+esc(a.iata)+'</span><img class="logo-img" data-srcs="'+LOGOSRC+'" data-i="0" src="'+LOGOSRC+'" alt=""></span>';
  var t=airTabs(sl,cat);
  var faqLd={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":meta.h1,"acceptedAnswer":{"@type":"Answer","text":faqA}}]};
  var bread={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":BASE+"/"},{"@type":"ListItem","position":2,"name":a.name+" "+cat,"item":canonical}]};
  return '<!doctype html><html lang="en"><head>\n'
+'<!-- Google tag (gtag.js) -->\n'
+'<script async src="https://www.googletagmanager.com/gtag/js?id=G-0HQ16GNH78"></scr'+'ipt>\n'
+'<script>\nwindow.dataLayer=window.dataLayer||[];\nfunction gtag(){dataLayer.push(arguments);}\ngtag(\'js\',new Date());\ngtag(\'config\',\'G-0HQ16GNH78\');\n</scr'+'ipt>\n'
+'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6832331505671007" crossorigin="anonymous"></scr'+'ipt>\n'
+'<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n'
+'<title>'+esc(meta.ttl)+' | canitakethis.co</title>\n'
+'<meta name="description" content="'+esc(desc)+'">\n'
+'<link rel="canonical" href="'+canonical+'">\n'
+'<link rel="icon" href="/assets/favicon.ico" sizes="any">\n'
+'<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">\n'
+'<meta property="og:title" content="'+esc(meta.ttl)+'"><meta property="og:description" content="'+esc(desc)+'"><meta property="og:type" content="article"><meta property="og:url" content="'+canonical+'">\n'
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
+'.hdr-blog-link{font-family:Inter,sans-serif;font-size:12px;font-weight:600;color:var(--muted);text-decoration:none;padding:6px 10px;border:1px solid var(--line);border-radius:999px;background:var(--surface);transition:color .18s,border-color .18s}.hdr-blog-link:hover{color:var(--accent);border-color:var(--accent)}.topbar-right{display:flex;align-items:center;gap:6px}\n'
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
+'.tapick .suggest{position:absolute;left:0;right:0;top:100%;margin:6px 0 0;max-height:46vh;overflow:auto;z-index:60;box-shadow:0 14px 30px rgba(0,0,0,.45)}\n'
+'.tapick .suggest.up{top:auto;bottom:100%;margin:0 0 6px;box-shadow:0 -14px 30px rgba(0,0,0,.45)}\n'
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
+'.airhead .logo{position:relative;width:40px;height:40px;border-radius:9px;overflow:hidden;display:inline-grid;place-items:center;color:#1B2233;background:#fff;font-family:\'Space Mono\',monospace;font-size:11px;font-weight:700;flex:none}\n'
+'.airhead .logo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n'
+'.slab{font-family:\'Space Mono\',monospace;font-size:9.5px;letter-spacing:1.6px;text-transform:uppercase;color:var(--muted);margin:16px 4px 10px}\n'
+'.chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}\n'
+'.chip{background:var(--surface);border:1px solid var(--line);border-radius:999px;color:var(--text);cursor:pointer;font-family:\'Inter\',sans-serif;font-weight:500;font-size:13.5px;padding:9px 14px;transition:.14s;display:inline-flex;align-items:center;gap:7px}\n'
+'.chip:hover{border-color:var(--surface-2)}\n'
+'.chip.on{background:var(--sel-bg);color:var(--sel-text);border-color:var(--sel-bg);font-weight:600}\n'
+'.chip.sm{font-family:\'Space Mono\',monospace;font-size:12.5px;font-weight:700;padding:8px 13px}\n'
+'.bag2{display:grid;grid-template-columns:1fr 1fr;gap:9px;align-items:stretch;margin:0 0 14px}\n'
+'.bag2 button{background:var(--surface);border:1px solid var(--line);border-radius:13px;color:var(--text);cursor:pointer;font-family:\'Inter\',sans-serif;font-weight:600;font-size:13.5px;padding:13px 12px;text-align:left;transition:.15s;line-height:1.22;display:flex;flex-direction:column;justify-content:flex-start}\n'
+'.bag2 button small{display:block;font-weight:400;font-size:11px;color:var(--muted);margin-top:3px}\n'
+'.bag2 button.on{border-color:var(--sel-bg);background:var(--surface);box-shadow:inset 0 0 0 1px var(--sel-bg)}\n'
+'</style></head><body>\n'
+'<div class="wrap">\n'
+'<div class="topbar"><a class="brand" href="/" aria-label="canitakethis.co home"><span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.9 4.3-2 2-2.2-.4a.5.5 0 0 0-.5.8L6 17l2.7 2.4a.5.5 0 0 0 .8-.5l-.4-2.2 2-2 4.3 3.9a.5.5 0 0 0 .8-.5Z"/></svg></span><h1>can i take this?</h1></a>'
+'<div class="topbar-right"><a href="/blog/" class="hdr-blog-link">Blog</a><button class="theme-toggle" id="themeToggle" onclick="__tt()"><span class="ico" id="themeIcon">&#9728;</span><span id="themeLabel">Light</span></button></div></div>\n'
+'<div class="airhead">'+logo+'<h2>'+esc(a.name)+' <span class="muted">Airline Rules</span></h2></div>\n'
+'<nav class="tabs">'+t.tabHtml+'</nav>\n'
+t.moreBlock+'\n'
+'<main>'+bagToggle+pickerHtml+'<div id="planeCard">'+initCard+'</div></main>\n'+clientScript
+'<footer>Rules change and vary by nationality, route and fare. This is guidance, not legal advice \u2014 always confirm with the airline or the official customs authority before you travel. Updated 2026.<nav class="tlinks"><a href="/guides/">All Guides</a><a href="/guides/liquids/">Liquids 100ml Rule</a><a href="/guides/power-banks/">Power Bank Rules</a><a href="/guides/vapes/">Vape &amp; E-Cig Guide</a><a href="/blog/">Blog</a></nav><nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>\n'
+'</div>\n'
+'<script>function advLogo(im){var l=(im.dataset.srcs||"").split("|"),i=parseInt(im.dataset.i||"0",10)+1;if(i<l.length){im.dataset.i=i;im.src=l[i];}else{im.style.display="none";}}document.querySelectorAll("img.logo-img").forEach(function(im){im.onerror=function(){advLogo(im);};if(im.complete&&im.naturalWidth===0)advLogo(im);});</scr'+'ipt>\n'
+'<script>function __lbl(c){var l=document.getElementById(\'themeLabel\'),i=document.getElementById(\'themeIcon\');if(l)l.textContent=c===\'dark\'?\'Light\':\'Dark\';if(i)i.innerHTML=c===\'dark\'?\'\u263C\':\'\u263D\';}function __tt(){var t=document.documentElement.getAttribute(\'data-theme\')===\'dark\'?\'light\':\'dark\';document.documentElement.setAttribute(\'data-theme\',t);localStorage.setItem(\'citt-theme\',t);__lbl(t);}window.addEventListener(\'DOMContentLoaded\',function(){__lbl(document.documentElement.getAttribute(\'data-theme\'));});</scr'+'ipt>\n'
+'<script src="/feedback.js" defer></scr'+'ipt>\n'
+'</body></html>';
}

var BODY_DIR="<p>Welcome to the central resource library for <strong>canitakethis.co</strong>. Here, we break down complex aviation security standards, lithium battery regulations, and international customs policies into simple, stress-free packing checklists.</p><p>Use these deep-dive guides to prepare for your trip across our database of <strong>78 covered airlines</strong> and <strong>85 countries</strong>.</p><hr><h2>✈️ Core Security &amp; Packing Guides</h2><h3>💧 <a href=\"/guides/liquids/\">The Flight 100ml Liquids Rule Explained</a></h3><p>Confused about what actually counts as a liquid? Learn the science behind the 100ml limit, discover surprising prohibited items (like peanut butter and toothpaste), and understand vital exceptions for baby food and prescription medications.</p><ul><li><strong>Key Topics:</strong> LAGs definition, 3-1-1 rules, CT airport scanner updates.</li><li><a href=\"/guides/liquids/\">Read: Liquids 100ml Rule →</a></li></ul><h3>🔋 <a href=\"/guides/power-banks/\">Aviation Power Bank &amp; Battery Rules</a></h3><p>Don't get your expensive backup chargers confiscated at the security gate. We explain the strict watt-hour (Wh) restrictions, how to calculate your device's capacity, and why lithium batteries are legally barred from your checked luggage.</p><ul><li><strong>Key Topics:</strong> Wh calculation formula, airline limits (100Wh to 160Wh), carry-on mandates.</li><li><a href=\"/guides/power-banks/\">Read: Power Bank Rules →</a></li></ul><h3>💨 <a href=\"/guides/vapes/\">Vapes, E-Cigarettes &amp; Airport Security</a></h3><p>Flying with vapes requires strict adherence to airline safety and international customs laws. This guide covers how to safely pack your vaping hardware, airline carry-on requirements, and critical local bans that could lead to heavy fines.</p><ul><li><strong>Key Topics:</strong> Liquid limits, pressure changes, high-risk destination warnings.</li><li><a href=\"/guides/vapes/\">Read: Vapes &amp; E-Cig Guide →</a></li></ul><hr><h2>🔍 Quick-Search Travel Tools</h2><p>Need an instant answer for a specific item? Use our lightning-fast lookup tools to check airline-specific baggage restrictions and country customs rules before you fly:</p><ul><li><strong><a href=\"/\">Search Airline Baggage Rules:</a></strong> Find allowance requirements and cabin restrictions across <strong>78 airlines</strong>, including El Al, Wizz Air, Ryanair, and Delta.</li><li><strong><a href=\"/\">Search Country Customs Rules:</a></strong> Check restricted agricultural, medication, and currency regulations for <strong>85 international destinations</strong>, including Israel, the US, UK, and Japan.</li></ul><hr><p><em>Guides are updated in 2026. Always confirm with your airline or customs authority before you depart.</em></p>";
var BODY_LIQUIDS="<p>Packing for a flight can be a stressful balancing act. Between weight limits, baggage fees, and security regulations, there is one rule that consistently trips up even the most seasoned travellers: <strong>the 100ml liquids rule</strong>.</p><p>We have all been there — standing in the security line, watching a beloved bottle of perfume, high-end face cream, or even a jar of peanut butter get swept into the bin. But why does this rule exist? What actually counts as a \"liquid\"? And how are new security technologies in 2026 changing the way we pack?</p><hr><h2>🛡️ 1. Why Does the 100ml Rule Exist?</h2><p>The restriction on carry-on liquids has its roots in global security history. In August 2006, British police thwarted a major terrorist plot to detonate liquid explosives disguised as soft drinks aboard transatlantic flights.</p><p>In response, aviation authorities worldwide established a compromise based on extensive laboratory testing: <strong>the 100ml (3.4 ounces) limit</strong>. Scientists determined that liquid explosives in volumes under 100ml could not be easily combined to create a blast of critical mass. This compromise has remained the global aviation standard ever since.</p><hr><h2>🧴 2. What Actually Counts as a \"Liquid\"? (The LAGs Definition)</h2><p>Most travellers know that water and shampoo are liquids. However, airport security operates under a broader classification: <strong>LAGs — Liquids, Aerosols, and Gels</strong>. If an item can be poured, squeezed, sprayed, smeared, or spread, it is a liquid.</p><p>Here are some of the most commonly confiscated items people get wrong:</p><ul><li><strong>Spreads and Foods:</strong> Peanut butter, Nutella, hummus, honey, maple syrup, jam, cream cheese, and wet pet food are all classified as liquids. Even a soft creamy cheese like Brie can be confiscated if it exceeds 100ml.</li><li><strong>Cosmetics and Toiletries:</strong> Mascara, liquid foundation, lip gloss, toothpaste, creams, lotions, hair gel, and roll-on deodorants are all LAGs.</li><li><strong>Aerosols:</strong> Hairspray, spray deodorants, shaving cream, and dry shampoo fall under the liquids rule.</li><li><strong>Gelled items:</strong> Gel shoe inserts, gel-filled cooling packs, and snowglobes are also restricted.</li></ul><blockquote><p><strong>The Golden Rule of Packing:</strong> If you can smear it, spray it, or squeeze it, treat it as a liquid. When in doubt, <a href=\"/\">check your item on canitakethis.co</a> before heading to the airport.</p></blockquote><hr><h2>👜 3. The 3-1-1 / 1-Litre Bag Rule Explained</h2><p>To bring liquids in your carry-on, follow these three rules (known as the <strong>3-1-1 rule</strong> in the US):</p><ul><li><strong>100ml or Less:</strong> All liquid containers must have a maximum capacity of 100ml or less.</li><li><strong>1 Clear Plastic Bag:</strong> All containers must fit inside a single, transparent, resealable plastic bag with a volume of no more than <strong>1 litre</strong> (approximately 20cm × 20cm).</li><li><strong>1 Bag Per Passenger:</strong> Each traveller is allowed only one liquids bag — it must be removed from your hand luggage and placed in a separate tray at the security scanner.</li></ul><svg viewBox=\"0 0 460 200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:460px;margin:1.5em 0;display:block\" role=\"img\" aria-label=\"Liquids bag rule illustration\"><rect x=\"10\" y=\"30\" width=\"430\" height=\"138\" rx=\"10\" fill=\"none\" stroke=\"#4CC2FF\" stroke-width=\"2\" stroke-dasharray=\"7,4\"/><text x=\"230\" y=\"22\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"11\" fill=\"#4CC2FF\" letter-spacing=\"1.5\">1 LITRE CLEAR RESEALABLE BAG</text><rect x=\"35\" y=\"55\" width=\"55\" height=\"95\" rx=\"6\" fill=\"#182238\" stroke=\"#2FCF9B\" stroke-width=\"2\"/><text x=\"62\" y=\"102\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"11\" fill=\"#2FCF9B\">100ml</text><text x=\"62\" y=\"118\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"10\" fill=\"#8A96B8\">shampoo</text><rect x=\"110\" y=\"68\" width=\"48\" height=\"82\" rx=\"6\" fill=\"#182238\" stroke=\"#2FCF9B\" stroke-width=\"2\"/><text x=\"134\" y=\"110\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"11\" fill=\"#2FCF9B\">75ml</text><text x=\"134\" y=\"126\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"10\" fill=\"#8A96B8\">toothpaste</text><rect x=\"178\" y=\"78\" width=\"42\" height=\"72\" rx=\"6\" fill=\"#182238\" stroke=\"#2FCF9B\" stroke-width=\"2\"/><text x=\"199\" y=\"118\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"11\" fill=\"#2FCF9B\">50ml</text><text x=\"199\" y=\"132\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"10\" fill=\"#8A96B8\">perfume</text><rect x=\"238\" y=\"58\" width=\"52\" height=\"92\" rx=\"6\" fill=\"#182238\" stroke=\"#2FCF9B\" stroke-width=\"2\"/><text x=\"264\" y=\"106\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"11\" fill=\"#2FCF9B\">100ml</text><text x=\"264\" y=\"120\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"10\" fill=\"#8A96B8\">moisturiser</text><rect x=\"310\" y=\"48\" width=\"68\" height=\"110\" rx=\"6\" fill=\"#1a0505\" stroke=\"#FF6B6B\" stroke-width=\"2\"/><text x=\"344\" y=\"96\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"12\" fill=\"#FF6B6B\">200ml</text><text x=\"344\" y=\"113\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"18\" fill=\"#FF6B6B\">✗</text><text x=\"344\" y=\"130\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"10\" fill=\"#FF6B6B\">confiscated</text><text x=\"230\" y=\"192\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#8A96B8\">Container capacity counts — not how much liquid is inside</text></svg><h3>🛑 The \"Container Capacity\" Trap</h3><p>The most common mistake travellers make is bringing a large bottle that is only partially full. <strong>Security measures the container's capacity, not the liquid inside.</strong> A 200ml bottle containing only 20ml of shampoo will be confiscated. Decant your liquids into travel-sized bottles (100ml or under) before your trip.</p><hr><h2>✨ 4. Crucial Exceptions to the Rule</h2><h3>🍼 Baby Milk, Formula, and Food</h3><p>If you are travelling with an infant (typically aged 2 or under), you are permitted to bring breast milk, formula, sterilised water, baby juice, and baby food in quantities larger than 100ml. These items must be declared to security officers for separate screening but do not need to fit in your 1-litre bag.</p><h3>💊 Prescription Medications and Medical Liquids</h3><p>Essential liquid, gel, or aerosol medications are fully exempt from the 100ml rule — including insulin, saline solution, inhalers, and liquid cough medicines. Keep them in their original packaging with the pharmacy label, or carry a doctor's note explaining your medical necessity.</p><h3>🛍️ Duty-Free Liquids</h3><p>Liquids purchased at duty-free shops after the security checkpoint are exempt from carry-on limits, provided they are packed in a <strong>Secure Tamper-Evident Bag (STEB)</strong> by the store clerk. Do not open this bag until your final destination — if you have a connecting flight and must pass through security again, the bag must remain sealed with the receipt visible inside.</p><hr><h2>🚀 5. The 2026 Landscape: CT Scanners Changing the Rules</h2><p>At some airports you may no longer need to remove liquids from your bags, thanks to the rollout of advanced <strong>CT / C3 security scanners</strong> that use 3D X-ray imaging to distinguish safe liquids from explosive chemicals.</p><p>However, the rollout is highly inconsistent. Many airports still operate older 2D scanners and strictly enforce the 1-litre bag rule. Even if your departure airport has upgraded scanners, your return airport or connecting hub might not. <strong>Always pack under the 100ml rule</strong> unless you are certain both ends of your trip support the new technology.</p><hr><h2>🔗 6. Checking Your Airline and Destination Rules</h2><p>Individual airlines can enforce their own cabin constraints. Before you travel, verify your hand luggage size and weight limits — search our database of <a href=\"/\">78 airlines we cover</a> or read a specific guide like the <a href=\"/airline/el-al/baggage-allowance/\">El Al Baggage Allowance Guide</a>. Also use our <a href=\"/\">customs search tool</a> to confirm what is allowed past the border at your destination.</p><hr><h2>❓ 7. Frequently Asked Questions</h2><h3>Do wet wipes count as liquids?</h3><p>No. Wet wipes, baby wipes, and makeup remover wipes are classified as solid items and do not need to go into your 1-litre liquids bag.</p><h3>Does solid bar soap or solid deodorant count as a liquid?</h3><p>No. Solid toiletries — bar soap, solid stick deodorant, solid perfume, and lipstick — are solids and are exempt from the liquids bag. Gel or roll-on deodorants, however, must go in the bag.</p><h3>Can I bring contact lens solution?</h3><p>Yes. Contact lens solution is classified as a medical liquid and is exempt from the 100ml limit, but you must declare it to security for separate screening. Many travellers prefer to pack travel-sized bottles (under 100ml) to save time at the scanner.</p><hr><p><em>This guide was last updated in 2026. Because airline and customs security policies can shift, always verify your flight's exact baggage rules on <a href=\"/\">canitakethis.co</a> before you depart.</em></p>";
var BODY_POWERBANKS="<p>With phones, tablets, laptops, e-readers, and vapes demanding constant power, a high-capacity power bank is a traveller's lifeline. But batteries are one of the most strictly regulated categories in global aviation — because of a very real physical danger.</p><hr><h2>🔥 1. Why Are Batteries Restricted on Planes?</h2><p>The restrictions on carrying power banks are designed to prevent a catastrophic event in flight: <strong>thermal runaway</strong>.</p><p>Modern electronics run on <strong>lithium-ion (Li-ion) batteries</strong>, which pack a massive amount of energy into a tiny space. If a lithium battery is damaged, short-circuited, or overheated, it can suffer a rapid, self-sustaining temperature increase — catching fire and emitting toxic, flammable gases.</p><ul><li><strong>In the Cabin:</strong> If a lithium battery catches fire in the passenger cabin, flight attendants are trained to extinguish it quickly with specialised fire-suppression equipment.</li><li><strong>In the Cargo Hold:</strong> If a battery catches fire in the hold, there is no one there to see or suppress it. A cargo fire can quickly overwhelm automated fire suppression systems, with catastrophic results.</li></ul><p>Because of this, <strong>global regulatory bodies (IATA, TSA, FAA) strictly ban loose lithium batteries and power banks from checked luggage.</strong></p><hr><h2>👝 2. The Golden Rule: Carry-On Only</h2><blockquote><p><strong>Power banks must go in your carry-on bag. They are strictly forbidden in checked baggage.</strong></p></blockquote><p>If you put a loose power bank in your checked suitcase, your bag will likely be pulled aside by baggage handlers, opened, and the power bank confiscated.</p><h3>What if my carry-on gets gate-checked?</h3><p>If you are flying on a crowded flight and your roller bag gets checked at the boarding gate due to limited cabin space, <strong>you must open your bag and remove all power banks, spare batteries, and vapes before handing it over to the gate agent.</strong></p><hr><h2>🧪 3. The Maths: Calculating Watt-Hours (Wh)</h2><p>Aviation regulations measure battery capacity in <strong>Watt-hours (Wh)</strong>. However, almost all power banks sold in stores are marketed in <strong>Milliampere-hours (mAh)</strong> — for example, a \"20,000 mAh charger\".</p><p>To pass airport security, you need to know the Wh rating. If your power bank only shows mAh, calculate it using this formula:</p><p><strong>Watt-hours (Wh) = milliamp-hours (mAh) × voltage (V) ÷ 1,000</strong></p><p>Most portable chargers operate at a nominal battery voltage of <strong>3.7 Volts</strong> (regardless of their output charging voltage like 5V or 9V). For a standard 20,000 mAh power bank:</p><p><strong>Wh = 20,000 × 3.7 ÷ 1,000 = 74 Wh</strong></p><p>Since 74 Wh is well under the 100 Wh limit, this power bank is legal to bring on your flight. The Wh rating is legally required to be printed on the back of the device — if it has worn off, security has the authority to confiscate it.</p><hr><h2>📊 4. The Three Capacity Tiers</h2><p>Global aviation rules group lithium-ion power banks into three capacity tiers:</p><svg viewBox=\"0 0 600 230\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:600px;margin:1.5em 0;display:block;border-radius:12px;overflow:hidden\" role=\"img\" aria-label=\"Power bank capacity tiers diagram\"><rect x=\"0\" y=\"0\" width=\"200\" height=\"230\" fill=\"#0a1f0a\"/><rect x=\"200\" y=\"0\" width=\"200\" height=\"230\" fill=\"#1a1500\"/><rect x=\"400\" y=\"0\" width=\"200\" height=\"230\" fill=\"#1a0505\"/><text x=\"100\" y=\"38\" text-anchor=\"middle\" font-family=\"Space Grotesk,Inter,sans-serif\" font-weight=\"700\" font-size=\"13\" fill=\"#2FCF9B\" letter-spacing=\"1\">GREEN ZONE</text><text x=\"100\" y=\"72\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-weight=\"700\" font-size=\"22\" fill=\"#2FCF9B\">&lt; 100 Wh</text><text x=\"100\" y=\"96\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"11\" fill=\"#8A96B8\">≈ up to 27,000 mAh</text><text x=\"100\" y=\"130\" text-anchor=\"middle\" font-family=\"Space Grotesk,sans-serif\" font-weight=\"700\" font-size=\"15\" fill=\"#2FCF9B\">✓ Allowed</text><text x=\"100\" y=\"153\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#8A96B8\">No quantity limit</text><text x=\"100\" y=\"172\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#8A96B8\">No approval needed</text><text x=\"100\" y=\"210\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#2FCF9B\">Most consumer devices</text><text x=\"300\" y=\"38\" text-anchor=\"middle\" font-family=\"Space Grotesk,Inter,sans-serif\" font-weight=\"700\" font-size=\"13\" fill=\"#F5B841\" letter-spacing=\"1\">AMBER ZONE</text><text x=\"300\" y=\"72\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-weight=\"700\" font-size=\"18\" fill=\"#F5B841\">100 – 160 Wh</text><text x=\"300\" y=\"96\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"11\" fill=\"#8A96B8\">27,000 – 43,000 mAh</text><text x=\"300\" y=\"130\" text-anchor=\"middle\" font-family=\"Space Grotesk,sans-serif\" font-weight=\"700\" font-size=\"15\" fill=\"#F5B841\">⚠ Airline Approval</text><text x=\"300\" y=\"153\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#8A96B8\">Max 2 per passenger</text><text x=\"300\" y=\"172\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#8A96B8\">Contact airline in advance</text><text x=\"300\" y=\"210\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#F5B841\">Large laptop chargers</text><text x=\"500\" y=\"38\" text-anchor=\"middle\" font-family=\"Space Grotesk,Inter,sans-serif\" font-weight=\"700\" font-size=\"13\" fill=\"#FF6B6B\" letter-spacing=\"1\">RED ZONE</text><text x=\"500\" y=\"72\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-weight=\"700\" font-size=\"22\" fill=\"#FF6B6B\">&gt; 160 Wh</text><text x=\"500\" y=\"96\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"11\" fill=\"#8A96B8\">43,000+ mAh</text><text x=\"500\" y=\"130\" text-anchor=\"middle\" font-family=\"Space Grotesk,sans-serif\" font-weight=\"700\" font-size=\"15\" fill=\"#FF6B6B\">✗ Banned</text><text x=\"500\" y=\"153\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#8A96B8\">Not in cabin or hold</text><text x=\"500\" y=\"172\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#8A96B8\">Requires HAZMAT shipping</text><text x=\"500\" y=\"210\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"11\" fill=\"#FF6B6B\">E-bike &amp; scooter batteries</text><line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"230\" stroke=\"#0E1428\" stroke-width=\"2\"/><line x1=\"400\" y1=\"0\" x2=\"400\" y2=\"230\" stroke=\"#0E1428\" stroke-width=\"2\"/></svg><h3>Tier 1: Under 100 Wh — Green Zone</h3><ul><li><strong>Allowed:</strong> Yes, in carry-on bag.</li><li><strong>Quantity:</strong> Generally unlimited (within reasonable personal use).</li><li><strong>Equivalent:</strong> Up to approximately 27,000 mAh at 3.7V.</li><li>Covers almost every consumer smartphone charger, laptop battery, tablet, and camera battery.</li></ul><h3>Tier 2: 100–160 Wh — Amber Zone</h3><ul><li><strong>Allowed:</strong> Carry-on only, but <strong>requires explicit approval from the airline</strong> before boarding.</li><li><strong>Quantity:</strong> Strictly limited to a maximum of <strong>2 spare batteries or power banks</strong> per passenger.</li><li><strong>Equivalent:</strong> Approximately 27,000–43,000 mAh at 3.7V.</li><li>Applies to large external laptop chargers, heavy-duty outdoor power stations, and professional video production batteries.</li></ul><h3>Tier 3: Over 160 Wh — Red Zone</h3><ul><li><strong>Allowed: Strictly Banned</strong> on passenger aircraft.</li><li>Cannot be carried in cabin bags or checked baggage. Must be shipped separately as cargo following strict HAZMAT regulations.</li><li>Covers large e-bike batteries, solar generators, and electric scooter batteries.</li></ul><hr><h2>⚠️ 5. Special Electronics and Common Traps</h2><h3>🎒 Smart Luggage (Suitcases with Built-in Chargers)</h3><p>Smart bags with built-in GPS trackers, electronic locks, and USB charging ports pose a special problem. If you want to check your smart suitcase, <strong>the battery pack must be completely removable</strong>. You must pop the battery out and carry it into the passenger cabin. If your smart bag has a non-removable battery, it is banned from the aircraft entirely (both cabin and hold).</p><h3>💻 Spare Laptop Batteries</h3><p>If you carry a replacement battery pack for your laptop, it is classified as a \"loose spare battery\" and must go in your carry-on bag.</p><h3>💨 Vapes, E-Cigarettes, and Spare Vape Batteries</h3><p>Vapes and electronic cigarettes use high-drain lithium batteries that pose a significant fire risk if they accidentally activate. <strong>Vapes must go in carry-on bags only.</strong> Store any spare, loose batteries in dedicated plastic cases to prevent terminals from touching metallic items in your bag.</p><h3>🛸 Drone Batteries</h3><p>Drone batteries (such as DJI quadcopter batteries) often sit in the 40–80 Wh range and must go in your carry-on bag. It is recommended to store them in fire-retardant LiPo battery bags during your flight.</p><hr><h2>✈️ 6. Cross-Referencing Airline and Country Rules</h2><p>While international standards are set by the ICAO and IATA, individual airlines and countries can enforce stricter guidelines. Some airlines set strict limits on the total number of power banks per passenger. Some destinations (such as China) will confiscate any power bank whose Wh or mAh rating is not clearly printed on its shell.</p><p>Before completing your packing, search our database of <a href=\"/\">78 covered airlines</a> or check the <a href=\"/airline/el-al/baggage-allowance/\">El Al Baggage Guide</a> to see how individual airlines handle electronics.</p><hr><h2>❓ 7. Frequently Asked Questions</h2><h3>Can I use my power bank to charge my phone during a flight?</h3><p>Almost all airlines strictly prohibit passengers from charging devices with a portable power bank while on board, to avoid overheating risks in confined seats. You must rely on the plane's built-in USB ports.</p><h3>What happens if the label on my power bank is worn off?</h3><p>If airport security cannot read the printed capacity label (Wh or mAh) on the casing, they cannot verify it is safe and have the authority to confiscate it. If your labels are fading, replace the charger before your trip.</p><h3>Is there a limit on how many power banks I can bring?</h3><p>For batteries under 100 Wh, most security administrations do not enforce a hard numerical limit, provided they are clearly for personal use. However, carrying more than 3 or 4 power banks will likely trigger a manual baggage inspection.</p><hr><p><em>This guide was last updated in 2026. Travel rules change frequently. Always check your specific airline, customs, and security rules on <a href=\"/\">canitakethis.co</a> before you pack.</em></p>";
var BODY_VAPES="<p>Navigating airport security with vapes, e-cigarettes, e-liquids, and spare batteries can be incredibly confusing. While airlines and security agencies focus heavily on the lithium-ion batteries that power these devices, customs officers at your destination may focus on the legality of the devices themselves.</p><p>If you pack your vape incorrectly, you risk having expensive gear confiscated at the security gate — or facing severe legal penalties upon arrival. This guide breaks down the global rules for flying with vapes and e-cigarettes in 2026.</p><hr><h2>🛑 1. The Golden Rule: Carry-On Only, Never in Checked Bags</h2><p>The most important rule when travelling with vapes, e-cigarettes, vape pens, and vaporizers is this: <strong>your devices and spare batteries must go in your hand luggage. They are strictly prohibited in checked baggage.</strong></p><svg viewBox=\"0 0 400 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width:100%;max-width:400px;margin:1.5em 0;display:block\" role=\"img\" aria-label=\"Vapes carry-on allowed, checked bag banned\"><rect x=\"15\" y=\"15\" width=\"175\" height=\"130\" rx=\"12\" fill=\"#0a1f0a\" stroke=\"#2FCF9B\" stroke-width=\"2\"/><text x=\"102\" y=\"48\" text-anchor=\"middle\" font-family=\"Space Grotesk,Inter,sans-serif\" font-weight=\"700\" font-size=\"13\" fill=\"#2FCF9B\">CARRY-ON BAG</text><text x=\"102\" y=\"95\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"40\" fill=\"#2FCF9B\">✓</text><text x=\"102\" y=\"130\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#8A96B8\">Vapes allowed here</text><rect x=\"210\" y=\"15\" width=\"175\" height=\"130\" rx=\"12\" fill=\"#1a0505\" stroke=\"#FF6B6B\" stroke-width=\"2\"/><text x=\"297\" y=\"48\" text-anchor=\"middle\" font-family=\"Space Grotesk,Inter,sans-serif\" font-weight=\"700\" font-size=\"13\" fill=\"#FF6B6B\">CHECKED BAG</text><text x=\"297\" y=\"95\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"40\" fill=\"#FF6B6B\">✗</text><text x=\"297\" y=\"130\" text-anchor=\"middle\" font-family=\"Inter,sans-serif\" font-size=\"12\" fill=\"#8A96B8\">Strictly prohibited</text></svg><h3>Why this rule is strictly enforced</h3><ul><li><strong>Thermal Runaway Risk:</strong> Vapes operate using rechargeable lithium-ion batteries and a heating element. If a device is accidentally activated in the cargo hold, or if a battery short-circuits, it can overheat and catch fire.</li><li><strong>Safety in the Cabin:</strong> In the aircraft cabin, a battery fire can be detected immediately and extinguished by cabin crew. In the pressurised, inaccessible cargo hold, a cargo fire is a catastrophic risk.</li></ul><blockquote><p><strong>Security Alert:</strong> If you are forced to gate-check your carry-on bag (for example, if the overhead bins are full), <strong>you must open your bag and remove all vapes, e-cigarettes, and spare batteries before handing it to the airline crew.</strong></p></blockquote><hr><h2>🧪 2. E-Liquids, Pods, and the 100ml Rule</h2><p>Because e-liquids are classified as Liquids, Aerosols, and Gels (LAGs), they fall strictly under standard aviation liquid limits:</p><ul><li><strong>Under 100ml (3.4 oz):</strong> Any e-liquid bottles, pre-filled pods, cartridges, and tanks must contain 100ml of liquid or less.</li><li><strong>The 1-Litre Clear Bag:</strong> All of your e-liquids and pods must fit comfortably inside your single, transparent, resealable 1-litre plastic bag alongside your toothpaste, shampoo, and other toiletries.</li><li><strong>Empty Your Tank:</strong> Cabin pressure changes during a flight can cause the air inside your vape tank to expand, forcing e-liquid out of the seals. To prevent leaks, empty your vape tank or pod before boarding, or pack your device inside a sealed ziplock bag.</li></ul><hr><h2>🔋 3. Handling Spare Batteries Safely</h2><p>If your vape uses removable rechargeable batteries (such as 18650, 20700, or 21700 lithium-ion cells), they are subject to strict safety protocols:</p><ul><li><strong>Carry-On Only:</strong> Just like the devices themselves, spare batteries must be packed in your carry-on luggage.</li><li><strong>Short-Circuit Prevention:</strong> To prevent loose batteries from touching metallic items and short-circuiting, pack them in a designated plastic battery case, keep them in their original packaging, or place electrical tape over the exposed terminals.</li><li><strong>Limits:</strong> Most airlines permit a maximum of 20 spare batteries per passenger, though individual airline allowances can vary.</li></ul><hr><h2>🌏 4. The Ultimate Trap: Destination Customs Restrictions</h2><p>This is the biggest mistake vapers make. While airport security and airline staff are perfectly fine with you bringing a vape on board, <strong>customs officers at your destination might not be.</strong></p><p>Several countries have completely banned e-cigarettes, and arriving with one can lead to confiscation, massive fines, or even arrest and imprisonment.</p><h3>Countries with Strict Vape Bans (2026)</h3><p>Before flying, check destination-specific customs limits using our <a href=\"/\">customs search tool</a>. Key examples include:</p><ul><li><strong>Thailand:</strong> Possession, import, and sale of e-cigarettes are strictly illegal. Travellers caught with vapes can face confiscation, heavy fines, or up to 5 years in prison.</li><li><strong>Singapore:</strong> Possessing, buying, or importing vapes is an offence. Fines can reach up to $2,000 SGD per device, and customs officers actively screen bags for them.</li><li><strong>India:</strong> All e-cigarettes, including import, export, transport, and sale, are completely banned.</li><li><strong>Australia:</strong> Bringing any vape into Australia now requires a valid medical prescription from an Australian doctor. Importing vapes without a prescription is illegal and will be seized at customs.</li></ul><hr><h2>✈️ 5. Cabin Etiquette: Do Not Do This Onboard</h2><p>Once you are on the plane, keep your devices safely packed away. Airline regulations on this are non-negotiable:</p><ul><li><strong>No Vaping Onboard:</strong> Vaping in the cabin or aircraft lavatories is strictly illegal on all airlines globally. Aircraft smoke detectors are highly sensitive and can be triggered by vapour, leading to flight diversions, heavy civil penalties, and permanent blacklisting by the airline.</li><li><strong>No Charging Onboard:</strong> You are strictly prohibited from charging your vape, e-cigarette, or spare batteries using the aircraft's seat-power outlets or personal power banks.</li></ul><hr><h2>🔗 6. Check Your Airline and Destination Allowances</h2><p>Airlines frequently review their dangerous goods protocols, and individual hand luggage weight and size limits can vary significantly. Before you head out, make sure to cross-reference:</p><ul><li>Your specific carry-on baggage allowance for any of the <a href=\"/\">78 airlines we cover</a>.</li><li>The restricted import laws for any of our <a href=\"/\">85 covered countries</a> to ensure you don't face penalties upon landing.</li></ul><hr><h2>❓ 7. Frequently Asked Questions</h2><h3>Do disposable vapes (like Elf Bars) count as liquids or batteries?</h3><p>They count as both. Because they contain a non-removable lithium battery, they must be packed in your carry-on luggage. Additionally, because they are pre-filled with e-liquid, airport security in some regions may require you to place them in your 1-litre liquids bag.</p><h3>Can I put my vape juice in my checked bag?</h3><p>Yes. Large e-liquid refill bottles (over 100ml) can be packed in your checked baggage, as they do not contain batteries. Just make sure they are tightly sealed and wrapped to prevent leaks due to cargo hold pressure changes.</p><h3>Can I carry a vape if I have a layover in a country where vaping is banned?</h3><p>If you have a layover and must clear customs or pass through a security checkpoint in a country with a strict ban (like Singapore or Thailand), your device can still be confiscated. It is best to avoid carrying e-cigarettes if transiting through these regions.</p><hr><p><em>This guide was last updated in 2026. Because airline and customs security policies can shift, always verify your flight's exact baggage rules on <a href=\"/\">canitakethis.co</a> before you depart.</em></p>";


/*BLOG_V1*/
var BODY_BLOG_INDEX="<div class=\"hub-head\">\n  <p>Original articles on airline rules, packing limits, and customs changes — updated as they shift.</p>\n</div>\n\n<div class=\"cat-label\">✈ Batteries &amp; Electronics</div>\n\n<a class=\"bcard-featured\" href=\"/blog/power-bank-rules-2026-crackdown/\">\n  <div class=\"bcard-img-wrap\">\n    <img src=\"/assets/blog/blog-power-bank-2026-hero.webp\" alt=\"Power bank in carry-on bag beside aircraft seat\" width=\"800\" height=\"400\">\n  </div>\n  <div class=\"bcard-body\">\n    <span class=\"tag tag-neutral bcard-tag\">Batteries &amp; Electronics <span class=\"bcard-new\">New</span></span>\n    <h2 class=\"bcard-title\">Power Banks on Planes: What Actually Changed in 2026</h2>\n    <p class=\"bcard-excerpt\">A new global rule, a wave of airline bans, and three cabin fires rewrote the power bank playbook. Here's what every traveller needs to know before the gate.</p>\n    <span class=\"bcard-read\">Read article →</span>\n  </div>\n</a>\n\n<div class=\"cat-label\">📋 Packing Rules</div>\n\n<div class=\"bcard-grid\">\n  <a class=\"bcard-soon\" href=\"/blog/liquids-100ml-rule-2026/\">\n    <div class=\"bcard-ph\"><img src=\"/assets/blog/blog-liquids-100ml-rule-2026-card.webp\" alt=\"Liquids 100ml rule\" style=\"width:100%;height:140px;object-fit:cover;display:block\"></div>\n    <div class=\"bcard-body\">\n      <span class=\"tag tag-neutral bcard-tag\">Liquids</span>\n      <div class=\"bcard-title\">The 100ml Rule in 2026: What Still Trips Travellers Up</div>\n      <div class=\"bcard-read\">Read article →</div>\n    </div>\n  </a>\n  <div class=\"bcard-soon\">\n    <div class=\"bcard-ph\"><img src=\"/assets/blog/blog-vapes-country-rules-hero.webp\" alt=\"Vapes country rules\" style=\"width:100%;height:140px;object-fit:cover;display:block\"></div>\n    <div class=\"bcard-body\">\n      <span class=\"tag tag-neutral bcard-tag\">Vapes</span>\n      <div class=\"bcard-title\">Flying with a Vape: The Country-by-Country Minefield</div>\n      <div class=\"bcard-date\">Coming soon</div>\n    </div>\n  </div>\n  <div class=\"bcard-soon\">\n    <div class=\"bcard-ph\"><img src=\"/assets/blog/blog-carry-on-size-wars-hero.webp\" alt=\"Carry-on size wars\" style=\"width:100%;height:140px;object-fit:cover;display:block\"></div>\n    <div class=\"bcard-body\">\n      <span class=\"tag tag-neutral bcard-tag\">Carry-on</span>\n      <div class=\"bcard-title\">Carry-On Size Wars: Which Airlines Actually Enforce It</div>\n      <div class=\"bcard-date\">Coming soon</div>\n    </div>\n  </div>\n</div>";
var BODY_PB_ARTICLE="<div class=\"art-meta\">\n  <span class=\"tag tag-neutral\">Batteries &amp; Electronics</span>\n  <span class=\"art-meta-sep\">·</span>\n  <span>Updated 2026</span>\n  <span class=\"art-meta-sep\">·</span>\n  <span>7 min read</span>\n</div>\n\n<figure class=\"art-hero\">\n  <img src=\"/assets/blog/blog-power-bank-2026-hero.webp\" alt=\"Power bank in a carry-on bag beside an aircraft seat\" width=\"800\" height=\"400\">\n  <figcaption>Keep it low, keep it reachable — the idea behind every 2026 rule change.</figcaption>\n</figure>\n\n<p>If you have flown this year, you may have noticed a flight attendant asking passengers to keep power banks out of the overhead bins. You are not imagining it. 2026 is the year the rules changed more than they had in the previous decade — and they changed almost everywhere at once.</p>\n\n<p>Your power bank still belongs in your carry-on, never in checked baggage. That part has not moved. What is new is <em>how many</em> you can bring, <em>where</em> it can sit, and <em>whether you can use it at all</em> once the doors close.</p>\n\n<hr>\n\n<h2>The one rule that now applies almost everywhere</h2>\n\n<p>The International Civil Aviation Organization (ICAO) — the UN body whose standards filter into law across 193 countries — set the first coordinated international standard on portable batteries in the cabin, effective <strong>27 March 2026</strong>.</p>\n\n<div class=\"callout\">\n  <div class=\"callout-icon\">🌐</div>\n  <div>\n    <strong>ICAO Standard — 27 March 2026</strong>\n    <ul>\n      <li><strong>Max two power banks per passenger</strong> — a hard cap on international flights, not a guideline.</li>\n      <li><strong>No in-flight charging</strong> — no using it to charge your phone or laptop once airborne.</li>\n      <li><strong>No overhead bins</strong> — must stay in a seat pocket, under the seat, or on your person.</li>\n    </ul>\n  </div>\n</div>\n\n<p>The logic: a power bank that starts smoking in your lap is dealt with in seconds. One sealed in a closed overhead bin is discovered only when smoke pours out — by which point the fire is self-sustaining. This is the floor. Airlines and countries have stacked stricter rules on top.</p>\n\n<hr>\n\n<h2>What the major airlines changed — and when</h2>\n\n<div class=\"airline-rules\">\n<div class=\"ar-card\"><div class=\"ar-head\"><div class=\"ar-logo\"><img src=\"https://www.gstatic.com/flights/airline_logos/70px/UA.png\" alt=\"UA\" onerror=\"this.style.display='none'\"></div><div class=\"ar-name\">United Airlines</div></div><div class=\"ar-date\">Mar 1, 2026</div><div class=\"ar-rule\">No overhead bins — seat pocket, under-seat, or on your person only.</div><span class=\"ar-pill strict\">Overhead ban</span></div><div class=\"ar-card\"><div class=\"ar-head\"><div class=\"ar-logo\"><img src=\"https://www.gstatic.com/flights/airline_logos/70px/AA.png\" alt=\"AA\" onerror=\"this.style.display='none'\"></div><div class=\"ar-name\">American Airlines</div></div><div class=\"ar-date\">May 1, 2026</div><div class=\"ar-rule\">Max 2 banks, each under 100Wh, within reach at all times.</div><span class=\"ar-pill mod\">2-bank cap</span></div><div class=\"ar-card\"><div class=\"ar-head\"><div class=\"ar-logo\"><img src=\"https://www.gstatic.com/flights/airline_logos/70px/DL.png\" alt=\"DL\" onerror=\"this.style.display='none'\"></div><div class=\"ar-name\">Delta Air Lines</div></div><div class=\"ar-date\">May 1, 2026</div><div class=\"ar-rule\">Max 2 banks, each under 100Wh, kept within reach.</div><span class=\"ar-pill mod\">2-bank cap</span></div><div class=\"ar-card\"><div class=\"ar-head\"><div class=\"ar-logo\"><img src=\"https://www.gstatic.com/flights/airline_logos/70px/LH.png\" alt=\"LH\" onerror=\"this.style.display='none'\"></div><div class=\"ar-name\">Lufthansa</div></div><div class=\"ar-date\">Jan 15, 2026</div><div class=\"ar-rule\">Carry 2 banks — but zero in-flight use. Switched off, stowed for entire flight.</div><span class=\"ar-pill strict\">Use banned</span></div><div class=\"ar-card\"><div class=\"ar-head\"><div class=\"ar-logo\"><img src=\"https://www.gstatic.com/flights/airline_logos/70px/WN.png\" alt=\"WN\" onerror=\"this.style.display='none'\"></div><div class=\"ar-name\">Southwest Airlines</div></div><div class=\"ar-date\">2026</div><div class=\"ar-rule\">Single power bank limit — strictest of the US majors.</div><span class=\"ar-pill strict\">1 bank only</span></div>\n</div>\n\n<p>Every one of these rules pushes the same direction — fewer batteries, kept low, kept off, kept reachable. Lufthansa's rule covers SWISS, Austrian, Brussels Airlines, Eurowings, ITA, and Eurowings Discover. Check each airline before you fly — our <a href=\"/\">airline pages</a> cover 78 carriers.</p>\n\n<hr>\n\n<h2>Some countries enforce nationwide bans</h2>\n\n<p>The restriction can follow the <em>destination</em>, not just the airline. Check both ends of your trip.</p>\n\n<div class=\"country-row\">\n  <span class=\"cpill\"><span class=\"cpill-flag\">🇯🇵</span> <strong>Japan</strong> — in-flight use banned, 2-bank / 160Wh limit (Apr 2026)</span>\n  <span class=\"cpill\"><span class=\"cpill-flag\">🇦🇺</span> <strong>Australia</strong> — no in-flight use, no overhead bins, 2-bank limit</span>\n  <span class=\"cpill\"><span class=\"cpill-flag\">🇮🇳</span> <strong>India</strong> — switched off, on your person, out of overhead lockers</span>\n</div>\n\n<p>Our <a href=\"/\">country customs pages</a> cover restricted-item rules for 85 destinations.</p>\n\n<hr>\n\n<h2>The numbers that still decide everything</h2>\n\n<p>Underneath all the new rules, capacity limits are unchanged. Watt-hours (Wh) are what security measures — not mAh, not \"size\".</p>\n\n<div class=\"wh-tiers\">\n  <div class=\"wh-tier green\">\n    <div class=\"wh-label\">Green zone</div>\n    <div class=\"wh-val\">&lt; 100 Wh</div>\n    <div class=\"wh-mah\">≈ up to 27,000 mAh</div>\n    <div class=\"wh-verdict\">✓ Carry-on OK</div>\n  </div>\n  <div class=\"wh-tier amber\">\n    <div class=\"wh-label\">Amber zone</div>\n    <div class=\"wh-val\">100–160 Wh</div>\n    <div class=\"wh-mah\">27,000–43,000 mAh</div>\n    <div class=\"wh-verdict\">⚠ Airline approval</div>\n  </div>\n  <div class=\"wh-tier red\">\n    <div class=\"wh-label\">Red zone</div>\n    <div class=\"wh-val\">&gt; 160 Wh</div>\n    <div class=\"wh-mah\">43,000+ mAh</div>\n    <div class=\"wh-verdict\">✗ Banned entirely</div>\n  </div>\n</div>\n\n<figure class=\"art-fig\"><img src=\"/assets/blog/blog-power-bank-wh-tiers.webp\" alt=\"Power bank watt-hour capacity tiers\" width=\"800\" height=\"400\"><figcaption>The three capacity tiers — under 100Wh allowed, 100–160Wh needs approval, over 160Wh banned.</figcaption></figure><p>Most chargers show mAh, not Wh. The formula: <strong>Wh = (mAh × 3.7) ÷ 1000</strong>. A 20,000mAh bank works out to 74Wh — comfortably in the green zone. Our <a href=\"/guides/power-banks/\">power bank guide</a> walks through the full maths.</p>\n\n<hr>\n\n<h2>Why now? The incidents that forced the crackdown</h2>\n\n<p>Unlike a phone or laptop, a bare power bank has no thermal management and no fault software. If a cell is damaged or badly made, it can enter <em>thermal runaway</em> — and once it does, there is no built-in system to stop it.</p>\n\n<div class=\"stat-strip\">\n  <div class=\"stat-box\"><div class=\"stat-num\">89</div><div class=\"stat-label\">FAA lithium-battery incidents in 2024 — a record</div></div>\n  <div class=\"stat-box\"><div class=\"stat-num\">4+</div><div class=\"stat-label\">Average lithium devices per passenger on a modern flight</div></div>\n  <div class=\"stat-box\"><div class=\"stat-num\">1,800+</div><div class=\"stat-label\">Batteries sharing a single full A380 cabin</div></div>\n</div>\n\n<div class=\"timeline\">\n  <div class=\"tl-head\">🔥 Three incidents that pushed regulators to act</div>\n  <div class=\"tl-item\">\n    <div class=\"tl-icon\">✈️</div>\n    <div class=\"tl-body\"><span class=\"tl-when\">January 2025 · Air Busan A321 · South Korea</span>A power bank in an overhead bin ignited on the ground. The aircraft was destroyed beyond repair; 27 people were injured in the evacuation.</div>\n  </div>\n  <div class=\"tl-item\">\n    <div class=\"tl-icon\">✈️</div>\n    <div class=\"tl-body\"><span class=\"tl-when\">July 2025 · Virgin Australia · In-flight</span>A charger in an overhead locker caught fire during descent. Cabin crew extinguished it before landing.</div>\n  </div>\n  <div class=\"tl-item\">\n    <div class=\"tl-icon\">✈️</div>\n    <div class=\"tl-body\"><span class=\"tl-when\">October 2025 · Air China · In-flight</span>A power bank burst into flames in an overhead bin mid-flight. This incident directly triggered United's overhead-bin ban from March 2026.</div>\n  </div>\n</div>\n\n<hr>\n\n<h2>How to pack so you sail through</h2>\n\n<div class=\"checklist\">\n  <div class=\"cl-item\"><span class=\"cl-num\">1</span><div><strong>Carry-on only, always.</strong> Never in checked baggage — global, absolute rule.</div></div>\n  <div class=\"cl-item\"><span class=\"cl-num\">2</span><div><strong>Bring no more than two</strong> (one if flying Southwest). Each ideally under 100Wh.</div></div>\n  <div class=\"cl-item\"><span class=\"cl-num\">3</span><div><strong>Keep them reachable.</strong> Seat pocket, under-seat bag, or on you. Assume overhead bins are off-limits.</div></div>\n  <div class=\"cl-item\"><span class=\"cl-num\">4</span><div><strong>Don't plan to charge in flight.</strong> On Lufthansa Group and Japan routes you simply cannot — charge before boarding.</div></div>\n  <div class=\"cl-item\"><span class=\"cl-num\">5</span><div><strong>Protect the terminals.</strong> Original packaging, a pouch, or tape over contacts — prevent shorts against your keys.</div></div>\n  <div class=\"cl-item\"><span class=\"cl-num\">6</span><div><strong>Check both ends of your trip.</strong> Rules vary by carrier <em>and</em> country — what was fine outbound may not be on the return.</div></div>\n</div>\n\n<p><em>Rules change and vary by nationality, route, and fare. Always confirm with the airline or the official customs authority before you travel. Updated 2026.</em></p>";
var BODY_LIQ_ARTICLE="<div class=\"art-meta\">\n  <span class=\"tag tag-neutral\">Liquids &amp; Packing</span>\n  <span class=\"art-meta-sep\">&middot;</span>\n  <span>Updated 2026</span>\n  <span class=\"art-meta-sep\">&middot;</span>\n  <span>8 min read</span>\n</div>\n\n<figure class=\"art-hero\">\n  <img src=\"/assets/blog/blog-liquids-100ml-rule-2026-hero.webp\" alt=\"Traveller placing a clear liquids bag into a security tray at an airport\" width=\"800\" height=\"400\">\n  <figcaption>The 1-litre bag &mdash; unchanged since 2006, still catching people out in 2026.</figcaption>\n</figure>\n\n<p>The 100ml rule has been in place since 2006. Nearly every traveller knows it exists. And yet it remains one of the single biggest sources of confiscations at airport security, every day, at every major hub in the world. Not because the rule is complicated &mdash; but because the details that matter are almost never explained properly.</p>\n\n<p>This article is the explanation that should have existed from the start.</p>\n\n<hr>\n\n<h2>Why the rule exists &mdash; the 60-second history</h2>\n\n<p>In August 2006, British police disrupted a plot to detonate liquid explosives disguised as soft drinks on transatlantic flights. Aviation authorities responded within days. The 100ml limit was set because laboratory testing showed that volumes under 100ml could not be reliably combined to produce a critical explosive mass at a security checkpoint. The 1-litre transparent bag was added so that officers could visually inspect everything at once.</p>\n\n<p>That compromise &mdash; containers under 100ml, all inside one clear 1-litre bag &mdash; has been the global standard ever since. It has not changed.</p>\n\n<hr>\n\n<h2>What actually counts as a liquid</h2>\n\n<p>The rule covers <strong>LAGs</strong>: Liquids, Aerosols, and Gels. The category is broader than most people expect:</p>\n\n<ul>\n  <li>Liquids &mdash; water, juice, perfume, contact lens solution, mouthwash</li>\n  <li>Aerosols &mdash; deodorant spray, hairspray, shaving foam</li>\n  <li>Gels &mdash; toothpaste, hair gel, moisturiser, sunscreen, lip gloss</li>\n  <li>Pastes &mdash; peanut butter, hummus, Marmite, cream cheese</li>\n  <li>Creams &mdash; foundation, after-sun, body lotion</li>\n  <li>Foams &mdash; shaving foam, mousse</li>\n  <li>Jams, spreads, and soft foods of similar consistency</li>\n</ul>\n\n<p>The working rule used at most checkpoints: <strong>if it flows, squishes, or can be poured, it is a LAG</strong>. Officers have wide discretion. If something could plausibly carry or conceal a liquid, it may be treated as one.</p>\n\n<hr>\n\n<h2>The bag &mdash; what the rules actually say</h2>\n\n<p>Each container must hold <strong>100ml or less</strong>. The container's printed volume is what matters &mdash; not how much is left inside. A 200ml bottle that is half-empty is still a 200ml bottle. It will be confiscated.</p>\n\n<p>All containers must fit inside <strong>one transparent, resealable plastic bag with a maximum capacity of 1 litre</strong>. In practice, the standard is a 20cm &times; 20cm zip-lock bag. You are allowed one bag per person.</p>\n\n<p>The bag must be <strong>removed from your hand luggage</strong> and placed separately in the security tray. Leaving it inside your bag, even inside a clear packing cube, is not acceptable at most airports.</p>\n\n<h2>Container size matters &mdash; not bag size</h2>\n\n<p>This is the most common misunderstanding. A 1-litre bag does not give you 1 litre of product. It gives you one bag's worth of <em>containers</em>, each individually capped at 100ml. The total volume you can carry through is well under 1 litre &mdash; typically 500&ndash;700ml if you pack small bottles efficiently.</p>\n\n<figure>\n  <img src=\"/assets/blog/blog-liquids-100ml-rule-2026-inArticle-1.webp\" alt=\"Travel toiletry bottles under 100ml beside a clear zip-lock bag, with a larger bottle set aside\" width=\"800\" height=\"320\">\n  <figcaption>Only containers labelled 100ml or less pass through &mdash; regardless of how full they are.</figcaption>\n</figure>\n\n<hr>\n\n<h2>What catches people out</h2>\n\n<p><strong>Food items.</strong> Security makes no food exception. Peanut butter, hummus, Nutella, jam, cream cheese, and yoghurt are all LAGs. A 300g jar will be confiscated. A sealed 85ml portion cup will pass.</p>\n\n<p><strong>Oversized containers.</strong> A 150ml tube of toothpaste &mdash; even 90% used &mdash; is a 150ml container. Transfer toothpaste to a compliant travel tube, or buy an 80ml tube before you fly.</p>\n\n<p><strong>Snow globes.</strong> Treated as liquids by most security authorities. Only those under 100ml pass. Standard snow globes do not.</p>\n\n<p><strong>Solid alternatives.</strong> Solid shampoo bars, conditioner bars, and soap are not LAGs and do not need to go in the bag. They can eliminate the size problem entirely for toiletries.</p>\n\n<hr>\n\n<h2>Exceptions that actually apply</h2>\n\n<p><strong>Essential medicines.</strong> Prescription and over-the-counter medications needed for the flight are exempt from the 100ml limit. Carry documentation &mdash; a prescription, GP letter, or original pharmacy packaging &mdash; and declare them separately at the checkpoint.</p>\n\n<p><strong>Baby and infant food.</strong> Liquids, gels, and pastes required for a baby or young child travelling with you are allowed in quantities sufficient for the journey. This includes formula, breast milk, and baby food pouches. You must be travelling with the child.</p>\n\n<p><strong>Duty-free liquids purchased airside.</strong> Alcohol, perfume, and other liquids bought after security are allowed in the cabin if sealed in a tamper-evident security bag (STEB) with the receipt visible. The caveat: some airports &mdash; particularly certain transit hubs in Asia and the Middle East &mdash; do not accept another country's STEB on connecting flights. Check before you buy.</p>\n\n<hr>\n\n<h2>2026: has anything changed?</h2>\n\n<p>The 100ml rule itself has not changed. What has changed partially is how some airports verify liquids. CT (computed tomography) scanners can analyse the molecular composition of liquids without opening containers. Airports with certified CT scanners have the technical ability to exempt liquids from the 100ml rule &mdash; the UK trialled this and briefly relaxed the rule at certain airports, then reversed course after operational challenges.</p>\n\n<p>As of 2026, the 100ml rule remains in effect at every major airport, including those with CT scanners, unless the airport has specifically announced otherwise for your lane. Assume the rule applies. Check your departure airport's current guidance before you fly if you want to be certain.</p>\n\n<hr>\n\n<h2>The takeaway</h2>\n\n<p>The rule has three working parts: containers under 100ml, one 1-litre transparent bag, bag out at the tray. The rest follows from understanding what counts as a LAG.</p>\n\n<p>Repack into travel-size bottles. Transfer toothpaste and creams. Eat the peanut butter before you leave. Switch to solid toiletries where you can. Everything else is a straightforward trade-off, and the checkpoint is not the place to negotiate it.</p>";

/*GUIDES_V1*//*LIQ_SVG_FIX_V1*//*GUIDE_ICONS_V1*/
function guideShell(o){
  var canonical=BASE+o.url;
  var GNAV='<nav class="tlinks"><a href="/guides/">All Guides</a><a href="/guides/liquids/">Liquids 100ml Rule</a><a href="/guides/power-banks/">Power Bank Rules</a><a href="/guides/vapes/">Vape &amp; E-Cig Guide</a><a href="/blog/">Blog</a></nav>';
  var TNAV='<nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav>';
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
  +'<script>(function(){var t=localStorage.getItem(\'citt-theme\')||\'dark\';document.documentElement.setAttribute(\'data-theme\',t);})();</scr'+'ipt>\n'
  +'<style>\n'
  +"@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');\n"
  +':root,[data-theme="dark"]{--bg:#0E1428;--glow:#1A2542;--surface:#161F3A;--surface-2:#22304F;--line:#2A3A5E;--text:#EDF0F7;--muted:#8A96B8;--accent:#4CC2FF;--go:#2FCF9B;--warn:#F5B841;--stop:#FF6B6B;--mark-bg:#26324E;--sel-bg:#4CC2FF;--sel-text:#08111f;}\n'
  +'[data-theme="light"]{--bg:#ECEAE1;--glow:#FFFFFF;--surface:#FFFFFF;--surface-2:#F0EEE4;--line:#DED9CB;--text:#1B2233;--muted:#6B7488;--accent:#1E86D6;--go:#2FCF9B;--warn:#F5B841;--stop:#FF6B6B;--mark-bg:#333A48;--sel-bg:#1B2233;--sel-text:#FFFFFF;}\n'
  +'*{box-sizing:border-box}body{margin:0;font-family:\'Inter\',system-ui,sans-serif;font-size:16px;line-height:1.55;color:var(--text);background:radial-gradient(1200px 600px at 50% -10%,var(--glow) 0%,transparent 60%),var(--bg);min-height:100vh;-webkit-font-smoothing:antialiased;transition:background .25s,color .25s}\n'
  +'.wrap{max-width:760px;margin:0 auto;padding:20px 18px 64px}\n'
  +'.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}\n'
  +'.brand{display:flex;align-items:center;gap:10px;text-decoration:none}\n'
  +'.mark{width:34px;height:34px;border-radius:10px;flex:none;background:var(--mark-bg);display:grid;place-items:center;color:#EDF0F7;box-shadow:0 6px 18px rgba(0,0,0,.22)}\n'
  +'.mark svg{width:18px;height:18px}\n'
  +'.brand h1{font-family:\'Space Grotesk\',\'Inter\',sans-serif;font-weight:700;font-size:18px;letter-spacing:-.4px;margin:0;color:var(--text)}\n'
  +'.theme-toggle{display:flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--line);color:var(--text);border-radius:999px;padding:7px 12px;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:600;cursor:pointer}\n'
  +'.theme-toggle .ico{font-size:13px}\n'
+'.hdr-blog-link{font-family:Inter,sans-serif;font-size:12px;font-weight:600;color:var(--muted);text-decoration:none;padding:6px 10px;border:1px solid var(--line);border-radius:999px;background:var(--surface);transition:color .18s,border-color .18s}.hdr-blog-link:hover{color:var(--accent);border-color:var(--accent)}.topbar-right{display:flex;align-items:center;gap:6px}\n'
  +'.tlinks{margin-top:.7em;text-align:center;line-height:2}.tlinks a{color:#8A96B8;text-decoration:none}.tlinks a:hover{color:var(--accent)}.tlinks a+a::before{content:"\u2022";color:#8A96B8;margin:0 10px}\n'
  +'footer{margin-top:2.4em;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);padding-top:1em;line-height:1.55}\n'
  +'.prose .guide-h1{font-family:\'Space Grotesk\',sans-serif;font-weight:700;font-size:1.9rem;line-height:1.15;margin:0 0 .6em}\n'
  +'.prose h2{font-family:\'Space Grotesk\',sans-serif;font-weight:700;font-size:1.4rem;margin:1.8em 0 .55em;line-height:1.2}\n'
  +'.prose h3{font-family:\'Space Grotesk\',sans-serif;font-weight:600;font-size:1.1rem;margin:1.4em 0 .45em;line-height:1.3}\n'
  +'.prose p{margin:.8em 0;line-height:1.65}\n'
  +'.prose ul{padding-left:1.4em;margin:.7em 0}\n'
  +'.prose ul li{margin:.35em 0;line-height:1.55}\n'
  +'.prose blockquote{border-left:3px solid var(--accent);padding:.7em 1em;margin:1.2em 0;background:var(--surface);border-radius:0 8px 8px 0}\n'
  +'.prose blockquote p{margin:0;color:var(--muted)}\n'
  +'.prose hr{border:none;border-top:1px solid var(--line);margin:2em 0}\n'
  +'.prose strong{font-weight:700}\n'
  +'.prose a{color:var(--accent);text-decoration:none}\n'
  +'.prose a:hover{text-decoration:underline}\n'
  +"/* ── hub page hero ── */\n.hub-head{margin:0 0 2em}\n.hub-head h1{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:2rem;line-height:1.1;margin:0 0 .3em}\n.hub-head p{color:var(--muted);margin:0;font-size:.97rem}\n\n/* ── category label ── */\n.cat-label{display:flex;align-items:center;gap:.6em;margin:0 0 1em;font-family:'Space Mono',monospace;font-size:.72rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted)}\n.cat-label::after{content:'';flex:1;height:1px;background:var(--line)}\n\n/* ── card grid ── */\n.bcard-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.1em;margin-bottom:2.2em}\n\n/* ── featured card (full-width hero) ── */\n.bcard-featured{display:grid;grid-template-columns:1fr;background:var(--surface);border:1px solid var(--line);border-radius:16px;overflow:hidden;text-decoration:none;color:var(--text);margin-bottom:1.8em;transition:border-color .18s,box-shadow .18s}\n@media(min-width:580px){.bcard-featured{grid-template-columns:1.1fr 1fr}}\n.bcard-featured,.bcard,.bcard-soon,.bcard-featured *,.bcard *,.bcard-soon *{text-decoration:none !important}\n.bcard-featured:hover,.bcard:hover,.bcard-soon:hover{background:#192443;text-decoration:none}\n.bcard-featured:hover *,.bcard:hover *,.bcard-soon:hover *{text-decoration:none}\n[data-theme='light'] .bcard-featured:hover,[data-theme='light'] .bcard:hover,[data-theme='light'] .bcard-soon:hover{background:#F2F2F2}\n.bcard-featured .bcard-img-wrap{min-height:200px}\n.bcard-featured .bcard-img-wrap img{width:100%;height:100%;object-fit:cover;display:block}\n.bcard-featured .bcard-body{padding:1.4em 1.5em;display:flex;flex-direction:column;gap:.5em;justify-content:center}\n.bcard-featured .bcard-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.2rem;line-height:1.25;margin:0}\n.bcard-featured .bcard-excerpt{color:var(--text);font-size:.92rem;line-height:1.6;margin:0}\n.bcard-featured .bcard-read{color:var(--accent);font-size:.85rem;font-weight:600;margin-top:.4em}\n.bcard-new{display:inline-flex;align-items:center;height:20px;padding:0 7px;border-radius:5px;font-family:'Space Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;background:rgba(47,207,155,.15);color:#2FCF9B;margin-left:.5em}\n\n/* ── regular card ── */\n.bcard{display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--line);border-radius:13px;overflow:hidden;text-decoration:none;color:var(--text);transition:border-color .18s,box-shadow .18s}\n.bcard .bcard-img-wrap{height:140px}\n.bcard .bcard-img-wrap img{width:100%;height:100%;object-fit:cover;display:block}\n.bcard .bcard-body{padding:.95em 1em;display:flex;flex-direction:column;gap:.4em;flex:1}\n.bcard .bcard-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:.97rem;line-height:1.3;margin:0}\n.bcard .bcard-excerpt{color:var(--muted);font-size:.85rem;line-height:1.5;margin:0;flex:1}\n.bcard .bcard-read{color:var(--accent);font-size:.82rem;font-weight:600;margin-top:.5em}\n.bcard-tag{font-size:.7rem;letter-spacing:.4px;margin-bottom:.1em}\n.tag-link{color:inherit;text-decoration:none}\n\n/* ── coming-soon placeholder card ── */\n.bcard-soon{display:flex;flex-direction:column;background:var(--surface);border:1px dashed var(--line);border-radius:13px;overflow:hidden;opacity:1}\n.bcard-soon .bcard-ph{height:140px;background:var(--surface-2);display:grid;place-items:center}\n.bcard-soon .bcard-ph svg{opacity:.3}\n.bcard-soon .bcard-body{padding:.95em 1em;display:flex;flex-direction:column;gap:.35em}\n.bcard-soon .bcard-title{font-family:'Space Grotesk',sans-serif;font-weight:400;font-size:.97rem;line-height:1.3;margin:0;color:var(--text)}\n.bcard-soon .bcard-tag{color:var(--accent)}\n.bcard-soon .bcard-date{font-family:'Space Mono',monospace;font-size:.72rem;color:var(--muted)}\n.prose .guide-h1{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.85rem;line-height:1.15;margin:0 0 .5em}\n.prose h2{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.35rem;margin:2em 0 .55em;line-height:1.2}\n.prose h3{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:1.05rem;margin:1.4em 0 .4em;line-height:1.3}\n.prose p{margin:.8em 0;line-height:1.7}\n.prose ul{padding-left:1.4em;margin:.7em 0}\n.prose ul li{margin:.35em 0;line-height:1.6}\n.prose hr{border:none;border-top:1px solid var(--line);margin:2em 0}\n.prose strong{font-weight:700}\n.prose a{color:var(--accent);text-decoration:none}\n.prose a:hover{text-decoration:underline}\n\n/* article meta bar */\n.art-meta{display:flex;align-items:center;gap:.7em;flex-wrap:wrap;margin:0 0 1.6em;font-size:.85rem;color:var(--muted)}\n.art-meta .tag{font-size:.7rem}\n.art-meta-sep{opacity:.4}\n\n/* hero image */\n.art-hero{margin:0 0 2em;border-radius:14px;overflow:hidden;border:1px solid var(--line)}\n.art-hero img{width:100%;display:block;height:auto}\n.art-hero figcaption{padding:.5em 1em;font-size:.8rem;color:var(--muted);background:var(--surface);border-top:1px solid var(--line)}\n\n/* inline figure */\n.art-fig{margin:1.8em 0;border-radius:12px;overflow:hidden;border:1px solid var(--line)}\n.art-fig img{width:100%;display:block;height:auto}\n.art-fig figcaption{padding:.45em .9em;font-size:.8rem;color:var(--muted);background:var(--surface)}\n\n/* info callout */\n.callout{display:flex;gap:.85em;background:var(--surface);border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:0 12px 12px 0;padding:1em 1.1em;margin:1.6em 0}\n.callout-icon{font-size:1.2rem;flex:none;line-height:1.4}\n.callout ul{margin:.35em 0 0;padding-left:1.25em}\n.callout li{margin:.3em 0;font-size:.93rem}\n\n/* airline rule cards */\n.airline-rules{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75em;margin:1.4em 0}\n.ar-card{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:.85em 1em;display:flex;flex-direction:column;gap:.4em}\n.ar-head{display:flex;align-items:center;gap:.6em}\n.ar-logo{width:28px;height:28px;border-radius:7px;background:#fff;display:grid;place-items:center;flex:none;overflow:hidden;font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:#1B2233}\n.ar-logo img{width:100%;height:100%;object-fit:cover}\n.ar-name{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:.9rem}\n.ar-date{font-family:'Space Mono',monospace;font-size:.68rem;color:var(--muted)}\n.ar-rule{font-size:.83rem;color:var(--muted);line-height:1.45}\n.ar-pill{display:inline-flex;height:18px;padding:0 6px;border-radius:5px;font-family:'Space Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.3px;text-transform:uppercase;align-items:center}\n.ar-pill.strict{background:rgba(255,107,107,.15);color:#FF6B6B}\n.ar-pill.mod{background:rgba(245,184,65,.12);color:#F5B841}\n\n/* wh tiers (inline SVG replacement) */\n.wh-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:.6em;margin:1.4em 0;border-radius:12px;overflow:hidden;border:1px solid var(--line)}\n.wh-tier{padding:.9em .7em;text-align:center;display:flex;flex-direction:column;gap:.25em}\n.wh-tier.green{background:#0a1f0a}\n.wh-tier.amber{background:#1a1500}\n.wh-tier.red{background:#1a0505}\n.wh-tier .wh-label{font-family:'Space Mono',monospace;font-size:.65rem;font-weight:700;letter-spacing:1px;text-transform:uppercase}\n.wh-tier.green .wh-label{color:#2FCF9B}\n.wh-tier.amber .wh-label{color:#F5B841}\n.wh-tier.red .wh-label{color:#FF6B6B}\n.wh-tier .wh-val{font-family:'Space Mono',monospace;font-weight:700;font-size:1rem;margin:.1em 0}\n.wh-tier.green .wh-val{color:#2FCF9B}\n.wh-tier.amber .wh-val{color:#F5B841}\n.wh-tier.red .wh-val{color:#FF6B6B}\n.wh-tier .wh-mah{font-size:.68rem;color:var(--muted)}\n.wh-tier .wh-verdict{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:.78rem;margin-top:.2em}\n.wh-tier.green .wh-verdict{color:#2FCF9B}\n.wh-tier.amber .wh-verdict{color:#F5B841}\n.wh-tier.red .wh-verdict{color:#FF6B6B}\n[data-theme='light'] .wh-tier.green{background:#e6f9f1}\n[data-theme='light'] .wh-tier.amber{background:#fdf8e3}\n[data-theme='light'] .wh-tier.red{background:#fdeaea}\n\n/* incident timeline */\n.timeline{margin:1.4em 0;border:1px solid var(--line);border-radius:12px;overflow:hidden}\n.tl-head{padding:.65em 1em;font-family:'Space Grotesk',sans-serif;font-size:.85rem;font-weight:700;background:var(--surface);border-bottom:1px solid var(--line)}\n.tl-item{display:grid;grid-template-columns:28px 1fr;gap:.7em;padding:.8em 1em;border-top:1px solid var(--line);align-items:start}\n.tl-item:first-of-type{border-top:none}\n.tl-icon{font-size:1rem;line-height:1.3;text-align:center}\n.tl-body{font-size:.88rem;line-height:1.5}\n.tl-when{font-family:'Space Mono',monospace;font-size:.68rem;color:var(--muted);display:block;margin-bottom:.2em}\n\n/* stat callout strip */\n.stat-strip{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:.7em;margin:1.5em 0}\n.stat-box{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:.9em;text-align:center}\n.stat-num{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.6rem;color:var(--accent);line-height:1}\n.stat-label{font-size:.78rem;color:var(--muted);margin-top:.25em;line-height:1.35}\n\n/* country pills */\n.country-row{display:flex;flex-wrap:wrap;gap:.6em;margin:1.2em 0}\n.cpill{display:flex;align-items:center;gap:.45em;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:.4em .85em;font-size:.85rem}\n.cpill-flag{font-size:1rem}\n\n/* checklist */\n.checklist{display:flex;flex-direction:column;gap:.55em;margin:1.5em 0}\n.cl-item{display:flex;gap:.75em;align-items:flex-start;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:.8em 1em;font-size:.91rem;line-height:1.55}\n.cl-num{font-family:'Space Mono',monospace;font-size:.75rem;font-weight:700;color:var(--accent);flex:none;min-width:1.4em;padding-top:.12em}"+'</style></head><body>\n'
  +'<div class="wrap">\n'
  +'<div class="topbar"><a class="brand" href="/" aria-label="canitakethis.co home"><span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.9 4.3-2 2-2.2-.4a.5.5 0 0 0-.5.8L6 17l2.7 2.4a.5.5 0 0 0 .8-.5l-.4-2.2 2-2 4.3 3.9a.5.5 0 0 0 .8-.5Z"/></svg></span><h1>can i take this?</h1></a>'
  +'<div class="topbar-right"><a href="/blog/" class="hdr-blog-link">Blog</a><button class="theme-toggle" id="themeToggle" onclick="__tt()"><span class="ico" id="themeIcon">&#9728;</span><span id="themeLabel">Light</span></button></div></div>\n'
  +'<main class="prose">\n'
  +'<h1 class="guide-h1">'+esc(o.h1)+'</h1>\n'
  +o.body+'\n'
  +'</main>\n'
  +'<footer>Guidance, not legal advice — always confirm with your airline or customs authority before you travel. Updated 2026.'+GNAV+TNAV+'</footer>\n'
  +'</div>\n'
  +'<script>function __lbl(c){var l=document.getElementById(\'themeLabel\'),i=document.getElementById(\'themeIcon\');if(l)l.textContent=c===\'dark\'?\'Light\':\'Dark\';if(i)i.innerHTML=c===\'dark\'?\'☼\':\'☽\';}function __tt(){var t=document.documentElement.getAttribute(\'data-theme\')=== \'dark\'?\'light\':\'dark\';document.documentElement.setAttribute(\'data-theme\',t);localStorage.setItem(\'citt-theme\',t);__lbl(t);}window.addEventListener(\'DOMContentLoaded\',function(){__lbl(document.documentElement.getAttribute(\'data-theme\'));});</scr'+'ipt>\n'
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

    /*AIRPLANE_GEN_V1*/
    var _airCats=[{seg:'liquids',cat:'liquids'},{seg:'perfume-aerosols',cat:'perfume'},{seg:'alcohol',cat:'alcohol'},{seg:'power-bank',cat:'power'},{seg:'vape-e-cigarette',cat:'vape'}];
    _airCats.forEach(function(pc){
      var purl='/airline/'+slug(a.name)+'/'+pc.seg+'/';
      write(purl+'index.html', airPlaneShell({a:a,cat:pc.cat,url:purl}));
      pages.push({url:purl,changefreq:'monthly'});
    });
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
.hdr-blog-link{font-family:Inter,sans-serif;font-size:12px;font-weight:600;color:var(--muted);text-decoration:none;padding:6px 10px;border:1px solid var(--line);border-radius:999px;background:var(--surface);transition:color .18s,border-color .18s}.hdr-blog-link:hover{color:var(--accent);border-color:var(--accent)}.topbar-right{display:flex;align-items:center;gap:6px}
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
<footer style="margin-top:1.4em;color:var(--muted);font-size:.82rem;border-top:1px solid var(--line);padding-top:1em"><nav class="tlinks"><a href="/guides/">All Guides</a><a href="/guides/liquids/">Liquids 100ml Rule</a><a href="/guides/power-banks/">Power Bank Rules</a><a href="/guides/vapes/">Vape &amp; E-Cig Guide</a><a href="/blog/">Blog</a></nav><nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
</div>
<script>${CHK_SCRIPT}</script>
<script>(function(){var q=document.getElementById("airq");if(!q)return;var box=document.getElementById("allair");var nm=document.getElementById("airnm");var links=[].slice.call(box.querySelectorAll("a"));q.addEventListener("input",function(){var v=q.value.trim().toLowerCase();var shown=0;links.forEach(function(a){var m=!v||a.getAttribute("data-n").indexOf(v)>-1;a.classList.toggle("hide",!m);if(m)shown++;});nm.style.display=shown?"none":"block";});})();</script>
<script src="/feedback.js" defer></script>
</body></html>`);
  pages.push({url:'/',changefreq:'weekly'});

  // copy the interactive app to /app/
  fs.copyFileSync(SRC, path.join(OUT,'app.html'));
  ensure(path.join(OUT,'app')); fs.copyFileSync(SRC, path.join(OUT,'app','index.html'));


  // ---------- GUIDES SECTION ----------
  var GUIDES=[
    {url:'/guides/',slug:'directory',
     title:'Travel Packing & Customs Guides | canitakethis.co',
     desc:'Deep-dive guides on the 100ml liquids rule, power bank Wh limits, and flying with vapes — for 78 airlines and 85 countries.',
     h1:'Travel Packing & Customs Guides',
     body:BODY_DIR},
    {url:'/guides/liquids/',slug:'liquids',
     title:'The 100ml Liquids Rule Explained (2026) | canitakethis.co',
     desc:'What counts as a liquid at airport security? Learn the 100ml rule, LAGs definition, bag requirements, exceptions for baby food and medications, and 2026 CT scanner updates.',
     h1:'The Flight 100ml Liquids Rule Explained (2026)',
     body:BODY_LIQUIDS},
    {url:'/guides/power-banks/',slug:'power-banks',
     title:'Power Bank & Battery Rules for Flights (2026) | canitakethis.co',
     desc:'Don\'t get your power bank confiscated. Learn the 3 Wh capacity tiers, how to calculate watt-hours from mAh, and why lithium batteries are banned from checked luggage.',
     h1:'Aviation Power Bank & Battery Rules (2026)',
     body:BODY_POWERBANKS},
    {url:'/guides/vapes/',slug:'vapes',
     title:'Flying with Vapes & E-Cigarettes (2026 Guide) | canitakethis.co',
     desc:'Carry-on only rules for vapes, e-liquid 100ml limits, country ban warnings for Thailand, Singapore and more — complete 2026 guide.',
     h1:'Vapes, E-Cigarettes & Airport Security (2026)',
     body:BODY_VAPES},
    // ----- BLOG -----
    {url:'/blog/',slug:'blog-index',
     title:'Travel News & Packing Guides — Blog | canitakethis.co',
     desc:'Original articles on airline rules, power bank crackdowns, packing tips and customs changes — updated as the rules shift.',
     h1:'Travel & Packing Blog',
     body:BODY_BLOG_INDEX},
    {url:'/blog/power-bank-rules-2026-crackdown/',slug:'power-bank-rules-2026-crackdown',
     title:'Power Banks on Planes: What Actually Changed in 2026 | canitakethis.co',
     desc:'A new global rule, airline bans, and three cabin fires rewrote the power bank playbook in 2026. Full breakdown of ICAO, United, American, Delta, Lufthansa, Southwest rules.',
     h1:'Power Banks on Planes: What Actually Changed in 2026',
     body:BODY_PB_ARTICLE},
    {url:'/blog/liquids-100ml-rule-2026/',slug:'liquids-100ml-rule-2026',
     title:'The 100ml Rule in 2026: What Still Trips Travellers Up | canitakethis.co',
     desc:'Toothpaste, peanut butter, sunscreen — the 100ml liquids rule catches far more than you expect. Full 2026 breakdown of what counts, what the bag rules actually say, and the exceptions that apply.',
     h1:'The 100ml Rule in 2026: What Still Trips Travellers Up',
     body:BODY_LIQ_ARTICLE}
  ];
  GUIDES.forEach(function(g){
    write(g.url+'index.html', guideShell(g));
    var isBlogHub = g.url === '/blog/';
    var isBlogArticle = g.url.startsWith('/blog/') && g.url !== '/blog/';
    var priority = isBlogHub ? '0.8' : isBlogArticle ? '0.7' : '0.6';
    var changefreq = isBlogHub ? 'weekly' : 'monthly';
    pages.push({url:g.url,changefreq:changefreq,priority:priority});
  });

  const sm=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`+
    pages.map(p=>`<url><loc>${BASE}${p.url}</loc><changefreq>${p.changefreq}</changefreq>${p.priority?`<priority>${p.priority}</priority>`:''}</url>`).join('\n')+`\n</urlset>\n`;
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
.hdr-blog-link{font-family:system-ui,sans-serif;font-size:12px;font-weight:600;color:var(--muted);text-decoration:none;padding:6px 10px;border:1px solid var(--line);border-radius:999px;background:var(--surface);position:fixed;top:12px;right:90px;z-index:99;transition:color .18s,border-color .18s}.hdr-blog-link:hover{color:var(--accent);border-color:var(--accent)}
</style></head><body>
<div class="topbar-right" style="position:fixed;top:10px;right:12px;z-index:99;display:flex;align-items:center;gap:6px;"><a href="/blog/" class="hdr-blog-link">Blog</a><button class="theme-toggle" id="themeToggle" onclick="__tt()"><span id="themeIcon">&#9788;</span> <span id="themeLabel">Light</span></button></div>
<div class="wrap">
<header><a href="/" class="back" aria-label="Back to home">&#8249;</a><a href="/" class="logo">canitakethis.co</a></header>
<main>
<h1>${esc(h1)}</h1>
${bodyHtml}
</main>
<footer>${esc('canitakethis.co')} — guidance, not legal advice. Updated 2026.<nav class="tlinks"><a href="/guides/">All Guides</a><a href="/guides/liquids/">Liquids 100ml Rule</a><a href="/guides/power-banks/">Power Bank Rules</a><a href="/guides/vapes/">Vape &amp; E-Cig Guide</a><a href="/blog/">Blog</a></nav><nav class="tlinks"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></footer>
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

  /* ===== INDEXNOW:START ===== */
  (function(){
    try{
      var _fs=require('fs'),_https=require('https');
      var _KEY='YOUR_INDEXNOW_KEY';
      var _HOST='canitakethis.co';
      var _sm=_fs.readFileSync('sitemap.xml','utf8');
      var _urls=(_sm.match(/<loc>([^<]+)<\/loc>/g)||[]).map(function(m){return m.replace(/<\/?loc>/g,'').trim();});
      if(!_urls.length){console.log('IndexNow: no <loc> URLs — skipped.');return;}
      var _payload=JSON.stringify({host:_HOST,key:_KEY,keyLocation:'https://'+_HOST+'/'+_KEY+'.txt',urlList:_urls});
      var _req=_https.request({hostname:'api.indexnow.org',path:'/indexnow',method:'POST',headers:{'Content-Type':'application/json; charset=utf-8','Content-Length':Buffer.byteLength(_payload)}},function(res){console.log('IndexNow: submitted '+_urls.length+' URLs -> HTTP '+res.statusCode);res.resume();});
      _req.on('error',function(e){console.log('IndexNow: skipped (network) - '+e.message);});
      _req.write(_payload);_req.end();
    }catch(e){console.log('IndexNow: skipped - '+e.message);}
  })();
  /* ===== INDEXNOW:END ===== */

  dom.window.close();
}
