// Automated QA gate for blog articles. Run BEFORE every preview link and again before deploy.
// Usage: node audit_article_qa.js            (all articles, summary)
//        node audit_article_qa.js <slug>     (one article, full detail, exit 1 on any FAIL)
// Why it exists: the ETIAS article showed "€20" while the site currency was USD (currency.js skipped USD mode)
// and only the user's eye caught it. Every check below is something a human must not be the only one to catch.
// Checks: RUNTIME currency (real page + real units.js/currency.js in jsdom, switch USD/EUR/GBP, read the DOM),
// static currency, images (files, sizes, alts, names), wiring (hub card, ARTICLES_LIST, BLOG_SYSTEM, sitemap),
// typography (font floor), structure (one h1, checked-date line, sources), NaN/undefined leftovers.
const fs = require('fs'), path = require('path');
process.chdir(__dirname);
const C = require('./currency.js');
const { JSDOM } = require('jsdom');
const rates = JSON.parse(fs.readFileSync('rates.json', 'utf8')).rates;
const only = process.argv[2];
const dec = s => s.replace(/&nbsp;/g, ' ').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&rsquo;|&lsquo;/g, "'").replace(/&euro;/g, '€').replace(/&pound;/g, '£');
const read = f => fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '';
const hub = read('blog/index.html'), list = read('ARTICLES_LIST.md'), sys = read('BLOG_SYSTEM.md'), sitemap = read('sitemap.xml');
const slugs = fs.readdirSync('blog', { withFileTypes: true }).filter(e => e.isDirectory() && fs.existsSync('blog/' + e.name + '/index.html')).map(e => e.name).filter(s => /-20\d\d$/.test(s)).filter(s => !only || s === only); // section pages (/blog/medications/ ...) are not articles
const SYM = { USD: '$', EUR: '€', GBP: '£' };
const EXEMPT = /customs|duty-free|declaration|-by-country/i; // identical to EXEMPT_PATH in currency.js: legal-limit pages are never converted
const RX = /(?<![A-Za-z0-9$€£])(?<!(?:AUD|CAD|NZD|SGD|HKD|MXN|BRL|ARS|COP|CLP)\s?)(US\$|\$|€|£)\s?(\d{1,3}(?:,\d{3})*|\d+)/g;

function webpSize(f) {
  const b = fs.readFileSync(f); if (b.toString('ascii', 8, 12) !== 'WEBP') return null;
  const t = b.toString('ascii', 12, 16);
  if (t === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
  if (t === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  const v = b.readUInt32LE(21); return [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1];
}

// RUNTIME currency check: the real built page with the real units.js + currency.js; switch currency, read the DOM.
async function runtimeCurrency(slug, fail) {
  const page = read('blog/' + slug + '/index.html').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const dom = new JSDOM(page, { url: 'http://localhost/blog/' + slug + '/', runScripts: 'outside-only', pretendToBeVisual: true });
  const w = dom.window;
  w.fetch = u => Promise.resolve({ json: () => Promise.resolve(JSON.parse(fs.readFileSync(String(u).replace(/^\//, ''), 'utf8'))) });
  w.eval(read('units.js'));
  w.eval(read('currency.js'));
  await new Promise(r => setTimeout(r, 900));
  if (!w.cittCurrency) { fail.push('RUNTIME: window.cittCurrency missing (currency.js not loaded on the page)'); w.close(); return; }
  for (const c of ['USD', 'EUR', 'GBP']) {
    w.cittCurrency.set(c);
    await new Promise(r => setTimeout(r, 400));
    const walker = w.document.createTreeWalker(w.document.body, 4);
    let n;
    while ((n = walker.nextNode())) {
      const el = n.parentNode;
      if (el.closest && el.closest('[data-currency="keep"],script,style,.cur-toggle,.cur-tip')) continue;
      const t = n.nodeValue.replace(/~/g, '');
      for (const a of (t.match(RX) || [])) {
        const sy = a.match(/^(US\$|\$|€|£)/)[1].replace('US$', '$');
        const num = parseFloat(a.replace(/^(US\$|\$|€|£)\s?/, '').replace(/,/g, ''));
        if (sy !== SYM[c] && num < 3000) fail.push('RUNTIME currency ' + c + ': "' + a + '" shown unconverted in "' + t.trim().slice(0, 60) + '"');
      }
    }
  }
  w.close();
}

(async () => {
  let totalFail = 0, totalWarn = 0;
  for (const slug of slugs) {
    const html = read('blog/' + slug + '/index.html');
    const fail = [], warn = [];
    const body = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<head[\s\S]*?<\/head>/i, '');
    const visible = body.replace(/<[^>]*data-currency="keep"[^>]*>[\s\S]*?<\/(div|span|p|td|li)>/gi, '');

    // 1. CURRENCY, runtime (catches script bugs) and static (catches content/regex gaps)
    const exemptPage = EXEMPT.test('/blog/' + slug + '/');
    if (!exemptPage) await runtimeCurrency(slug, fail);
    for (const target of exemptPage ? [] : ['USD', 'EUR', 'GBP']) {
      for (const s of visible.split(/<[^>]+>/).map(dec).filter(x => x.trim())) {
        const r = C.convertText(s, target, rates).text;
        if (/NaN|undefined|Infinity/.test(r)) fail.push(`currency ${target}: bad output "${r.slice(0, 80)}"`);
        for (const a of (r.replace(/~/g, '').match(RX) || [])) {
          const sy = a.match(/^(US\$|\$|€|£)/)[1].replace('US$', '$');
          const num = parseFloat(a.replace(/^(US\$|\$|€|£)\s?/, '').replace(/,/g, ''));
          if (sy !== SYM[target] && num < 3000) fail.push(`currency ${target}: "${a}" stayed unconverted in "${s.slice(0, 70)}"`);
        }
      }
    }

    // 2. IMAGES
    const need = [['blogHome-' + slug + '-card.webp', 800, 400], ['blog-' + slug + '-hero.webp', 800, 400], ['blog-' + slug + '-inArticle-1.webp', 800, 320], ['blog-' + slug + '-inArticle-2.webp', 800, 320]];
    for (const [f, w, h] of need) {
      const p = 'assets/blog/' + f;
      if (!fs.existsSync(p)) { fail.push('image missing: ' + f); continue; }
      const sz = webpSize(p);
      if (!sz) fail.push('not a webp: ' + f); else if (sz[0] !== w || sz[1] < h) fail.push(`image size ${f}: ${sz.join('x')} (want ${w}x${h})`);
      if (f.startsWith('blog-') && !html.includes(f)) fail.push('image not used in page: ' + f);
    }
    if (!hub.includes('blogHome-' + slug + '-card.webp')) fail.push('hub card missing in blog/index.html');
    if (!/class="art-meta"[^>]*>\s*<a class="tag tag-neutral tag-link" href="\/blog\/[a-z0-9-]+\/"/.test(html)) fail.push('article tag does not link to its blog section page');
    for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
      if (/class="fimg"|width="26"|flagcdn\.com|gstatic\.com/.test(m[0])) continue;
      const alt = (m[0].match(/\balt="([^"]*)"/) || [])[1];
      if (!alt || alt.trim().length < 15) fail.push('img alt missing/too short: ' + (m[0].match(/src="([^"]+)"/) || [])[1]);
    }

    // 3. WIRING
    if (!list.includes('`/blog/' + slug + '/`')) fail.push('ARTICLES_LIST.md row missing');
    if (!sys.includes('`' + slug + '`')) fail.push('BLOG_SYSTEM.md row missing');
    if (!sitemap.includes('/blog/' + slug + '/')) fail.push('not in sitemap.xml');
    if (!/<title>[^<]{20,}<\/title>/.test(html)) fail.push('title missing/short');
    const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    if (desc.length < 80 || desc.length > 175) warn.push('meta description length ' + desc.length);

    // 4. TYPOGRAPHY: font floor 0.85rem / 13.6px in inline CSS
    const artHtml = html.slice(Math.max(0, html.indexOf('class="guide-h1"')));
    for (const m of artHtml.matchAll(/font-size:\s*([\d.]+)(rem|px|em)/g)) {
      const v = parseFloat(m[1]), px = m[2] === 'px' ? v : v * 16;
      if (px < 13.6) { fail.push('font below 0.85rem: ' + m[0]); break; }
    }

    // 4b. EQUAL-HEIGHT CARD GRIDS: a flex-column card needs its footer/link pinned to the bottom (margin-top:auto), DESIGN_SYSTEM 8.11
    const cssAll = (html.match(/<style[\s\S]*?<\/style>/gi) || []).join('');
    if (/\.[a-z0-9-]+-card\{[^}]*flex-direction:column/.test(cssAll) && !/margin-top:auto/.test(cssAll)) fail.push('card grid with no footer pinned to the bottom (add margin-top:auto to the footer, DESIGN_SYSTEM 8.11)');

    // 5. STRUCTURE
    const h1s = (html.match(/<h1 class="guide-h1"/g) || []).length + (artHtml.match(/<h1\b(?! class="guide-h1")/g) || []).length;
    if (h1s !== 1) fail.push('h1 count ' + h1s + ' (want 1)');
    if (!/art-sources/.test(html)) fail.push('no official sources block');
    if (!/Checked [A-Z][a-z]+ 20\d\d/.test(html)) warn.push('no "Checked <Month Year>" line');
    if (/NaN|undefined|\[object/.test(body)) fail.push('NaN/undefined/[object] in page text');

    totalFail += new Set(fail).size; totalWarn += warn.length;
    if (only || fail.length || warn.length) {
      console.log((fail.length ? 'FAIL ' : warn.length ? 'warn ' : 'PASS ') + slug);
      [...new Set(fail)].slice(0, only ? 60 : 6).forEach(x => console.log('   FAIL ' + x));
      [...new Set(warn)].slice(0, 6).forEach(x => console.log('   warn ' + x));
    }
  }
  console.log(`\n${slugs.length} article(s) checked: ${totalFail} FAIL, ${totalWarn} warn. Runtime checks you still do in the browser pane: 360px width, light/dark.`);
  process.exit(only && totalFail ? 1 : 0);
})();
