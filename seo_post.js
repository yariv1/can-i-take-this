// Site-wide SEO post-processor. build.js calls post() for EVERY generated index.html and mod() for every sitemap entry, so one fix applies to all pages
// and to every page type added later. Add new SEO rules HERE, never page by page. Checked by audit_seo.js (run it before every deploy).
// What it does: one real H1 per page (brand is no longer an H1), title suffix only when the title fits, og:image + twitter card + og:site_name,
// WebPage JSON-LD with dateModified (Article gets datePublished/dateModified), honest sitemap lastmod, and related-links blocks (internal linking).
const fs = require('fs');
const path = require('path');

const BASE = 'https://canitakethis.co';
const SITE = 'canitakethis.co';
const SITE_REVIEWED = '2026-10-07'; // date the programmatic rule data and its titles/descriptions were last reviewed in bulk; bump when you re-review the data
const LIVE_SLUGS = new Set(['travel-warning-by-country-2026', 'is-turks-and-caicos-safe-2026', 'travel-warning-caribbean-2026', 'level-4-travel-advisory-countries-2026', 'travel-warning-mexico-2026']); // refreshed every 6 h
const CUR = () => new Date().toISOString().slice(0, 10);

let articleDates = null;
function loadArticleDates() {
  if (articleDates) return articleDates;
  articleDates = {};
  try {
    const t = fs.readFileSync(path.join(__dirname, 'ARTICLES_LIST.md'), 'utf8');
    t.split('\n').forEach(l => { const m = /`(\/blog\/[^`]+\/)`\s*\|\s*(\d{4}-\d{2}-\d{2})/.exec(l); if (m) articleDates[m[1]] = m[2]; });
  } catch (e) {}
  return articleDates;
}
let baggageChecked = null;
function bagChecked(url) {
  if (baggageChecked === null) { try { baggageChecked = require('./baggage_detail.js'); } catch (e) { baggageChecked = false; } }
  const m = /^\/airline\/([^/]+)\/baggage-allowance\/$/.exec(url);
  if (!m || !baggageChecked) return null;
  const names = Object.keys(baggageChecked.DETAIL);
  const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return names.some(n => slug(n) === m[1]) ? '2026-10-07' : null;
}
// dateModified / sitemap lastmod, honest: the date the page content last changed, not the build date (except live pages that refresh every 6 hours)
function mod(url) {
  const m = /^\/blog\/([^/]+)\/$/.exec(url);
  if (m && LIVE_SLUGS.has(m[1])) return CUR();
  if (m) return loadArticleDates()[url] || SITE_REVIEWED;
  return bagChecked(url) || SITE_REVIEWED;
}
function published(url) { return /^\/blog\/[^/]+\/$/.test(url) ? loadArticleDates()[url] || null : null; }

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const unesc = s => String(s).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

// ---------- related links (internal linking) ----------
let LISTS = { airlines: [], countries: [] };
function setLists(l) { LISTS = l; }
const slugify = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function neighbours(list, name, n) {
  const i = list.findIndex(x => x.name === name); if (i < 0) return [];
  const out = []; for (let k = 1; out.length < n && k < list.length; k++) { const a = list[(i + k) % list.length]; out.push(a); if (out.length < n) { const b = list[(i - k + list.length) % list.length]; if (b !== a) out.push(b); } }
  return out.slice(0, n);
}
const blogExists = s => fs.existsSync(path.join(__dirname, 'blog', s, 'index.html'));
const guideLink = (slug, t) => blogExists(slug) ? { u: '/blog/' + slug + '/', t } : null;
const CAT_LABEL = { liquids: 'liquids', 'power-bank': 'power bank', 'perfume-aerosols': 'perfume and aerosol', alcohol: 'alcohol', 'vape-e-cigarette': 'vape' };
const CC_LABEL = { alcohol: 'duty-free alcohol', cash: 'cash limit', tobacco: 'duty-free tobacco', 'plants-seeds': 'plants and seeds', vaping: 'vaping' };
function related(url) {
  if (/^\/blog\/[^/]+\/$/.test(url)) return relatedBlog(url);
  const groups = [];
  const add = (h, links) => { const l = links.filter(Boolean); if (l.length) groups.push({ h, l }); };
  let m;
  if ((m = /^\/airline\/([^/]+)\/(baggage-allowance|liquids|power-bank|perfume-aerosols|alcohol|vape-e-cigarette)\/$/.exec(url))) {
    const a = LISTS.airlines.find(x => slugify(x.name) === m[1]); if (!a) return groups;
    const cat = m[2], lab = cat === 'baggage-allowance' ? 'baggage allowance' : CAT_LABEL[cat] + ' rules';
    add('Compare ' + lab + ' on other airlines', neighbours(LISTS.airlines, a.name, 6).map(x => ({ u: '/airline/' + slugify(x.name) + '/' + cat + '/', t: x.name })));
    add('More rules for ' + a.name, [{ u: '/airline/' + m[1] + '/', t: 'All ' + a.name + ' rules' }, cat !== 'baggage-allowance' && { u: '/airline/' + m[1] + '/baggage-allowance/', t: a.name + ' baggage allowance' }, cat !== 'power-bank' && { u: '/airline/' + m[1] + '/power-bank/', t: a.name + ' power bank rules' }, cat !== 'liquids' && { u: '/airline/' + m[1] + '/liquids/', t: a.name + ' liquids rules' }].filter(Boolean));
    const g = { 'baggage-allowance': [guideLink('carry-on-size-limits-by-airline-2026', 'Carry-on size limits by airline'), { u: '/plane/liquids/', t: 'Liquids in carry-on' }], 'power-bank': [guideLink('power-bank-rules-by-airline-2026', 'Power bank rules by airline'), guideLink('power-bank-rules-2026-crackdown', 'Power bank rules 2026')], liquids: [guideLink('liquids-100ml-rule-2026', 'The 100 ml liquids rule'), guideLink('how-many-ounces-can-you-bring-on-a-plane-2026', 'How many ounces can you bring')], 'vape-e-cigarette': [{ u: '/guides/vapes/', t: 'Vaping on planes: guide' }, guideLink('vapes-country-rules-2026', 'Vape rules by country')], alcohol: [guideLink('alcohol-duty-free-allowance-by-country-2026', 'Alcohol allowance by country')], 'perfume-aerosols': [guideLink('aerosols-on-a-plane-2026', 'Aerosols on a plane')] }[cat] || [];
    add('Guides', g);
  } else if ((m = /^\/country\/([^/]+)\/(alcohol|cash|tobacco|plants-seeds|vaping)\/$/.exec(url))) {
    const c = LISTS.countries.find(x => slugify(x.name) === m[1]); if (!c) return groups; const cat = m[2];
    add('More about ' + c.name, [{ u: '/country/' + m[1] + '/', t: 'All ' + c.name + ' customs rules' }].concat(Object.keys(CC_LABEL).filter(k => k !== cat).map(k => ({ u: '/country/' + m[1] + '/' + k + '/', t: c.name + ' ' + CC_LABEL[k] }))).concat([{ u: '/food/' + m[1] + '/', t: 'Food into ' + c.name }, { u: '/medication/into/' + m[1] + '/', t: 'Medication into ' + c.name }, { u: '/pets/' + m[1] + '/', t: 'Pets into ' + c.name }]));
    add(CC_LABEL[cat].charAt(0).toUpperCase() + CC_LABEL[cat].slice(1) + ' in other countries', neighbours(LISTS.countries, c.name, 6).map(x => ({ u: '/country/' + slugify(x.name) + '/' + cat + '/', t: x.name, c: x.code })));
    const g = { alcohol: [guideLink('duty-free-alcohol-allowance-by-country-2026', 'Duty-free alcohol allowance by country'), guideLink('duty-free-allowance-by-country-2026', 'Duty-free allowance by country')], tobacco: [guideLink('duty-free-tobacco-allowance-by-country-2026', 'Duty-free tobacco allowance by country')], cash: [guideLink('customs-cash-declaration', 'Cash declaration rules'), guideLink('customs-forms-by-country', 'Customs forms by country')], 'plants-seeds': [guideLink('australia-nz-biosecurity-fines', 'Biosecurity fines: Australia and New Zealand')], vaping: [guideLink('vapes-country-rules-2026', 'Vape rules by country')] }[cat] || [];
    add('Guides', g);
  } else if ((m = /^\/food\/([^/]+)\/$/.exec(url))) {
    const c = LISTS.countries.find(x => slugify(x.name) === m[1]); if (!c) return groups;
    add('More about ' + c.name, [{ u: '/country/' + m[1] + '/', t: 'All ' + c.name + ' customs rules' }, { u: '/country/' + m[1] + '/plants-seeds/', t: 'Plants and seeds into ' + c.name }, { u: '/medication/into/' + m[1] + '/', t: 'Medication into ' + c.name }, { u: '/pets/' + m[1] + '/', t: 'Pets into ' + c.name }]);
    add('Food rules in other countries', neighbours(LISTS.countries, c.name, 6).map(x => ({ u: '/food/' + slugify(x.name) + '/', t: x.name, c: x.code })));
    add('Guides', [guideLink('food-you-can-take-on-a-plane-list-2026', 'Food you can take on a plane'), guideLink('food-tsa-vs-customs', 'Food: TSA vs customs')]);
  } else if ((m = /^\/pets\/([^/]+)\/$/.exec(url))) {
    const c = LISTS.countries.find(x => slugify(x.name) === m[1]); if (!c) return groups;
    add('More about ' + c.name, [{ u: '/country/' + m[1] + '/', t: 'All ' + c.name + ' customs rules' }, { u: '/food/' + m[1] + '/', t: 'Food into ' + c.name }, { u: '/medication/into/' + m[1] + '/', t: 'Medication into ' + c.name }]);
    add('Pet rules in other countries', neighbours(LISTS.countries, c.name, 6).map(x => ({ u: '/pets/' + slugify(x.name) + '/', t: x.name, c: x.code })));
  } else if ((m = /^\/medication\/([^/]+)\/([^/]+)\/$/.exec(url)) && m[1] !== 'into') {
    const c = LISTS.countries.find(x => slugify(x.name) === m[2]); if (!c) return groups;
    add('More about ' + c.name, [{ u: '/medication/into/' + m[2] + '/', t: 'All medication rules for ' + c.name }, { u: '/country/' + m[2] + '/', t: 'All ' + c.name + ' customs rules' }, { u: '/food/' + m[2] + '/', t: 'Food into ' + c.name }]);
    add('The same medication in other countries', neighbours(LISTS.countries, c.name, 6).map(x => ({ u: '/medication/' + m[1] + '/' + slugify(x.name) + '/', t: x.name, c: x.code })));
    add('Guides', [guideLink('banned-medications-by-country-2026', 'Banned medications by country'), guideLink('medication-time-zones', 'Medication across time zones')]);
  } else if ((m = /^\/medication\/into\/([^/]+)\/$/.exec(url))) {
    const c = LISTS.countries.find(x => slugify(x.name) === m[1]); if (!c) return groups;
    add('More about ' + c.name, [{ u: '/country/' + m[1] + '/', t: 'All ' + c.name + ' customs rules' }, { u: '/food/' + m[1] + '/', t: 'Food into ' + c.name }, { u: '/pets/' + m[1] + '/', t: 'Pets into ' + c.name }]);
    add('Medication rules in other countries', neighbours(LISTS.countries, c.name, 6).map(x => ({ u: '/medication/into/' + slugify(x.name) + '/', t: x.name, c: x.code })));
    add('Guides', [guideLink('banned-medications-by-country-2026', 'Banned medications by country')]);
  }
  return groups;
}
let articleRows = null;
function loadArticleRows() {
  if (articleRows) return articleRows; articleRows = [];
  try {
    fs.readFileSync(path.join(__dirname, 'ARTICLES_LIST.md'), 'utf8').split('\n').forEach(l => {
      const m = /^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*`(\/blog\/[^`]+\/)`\s*\|\s*(\d{4}-\d{2}-\d{2})/.exec(l);
      if (m) articleRows.push({ n: +m[1], section: m[2], title: m[3], url: m[4], date: m[5] });
    });
  } catch (e) {}
  return articleRows;
}
const SECTION_SLUG = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function relatedBlog(url) {
  const rows = loadArticleRows(); const me = rows.find(r => r.url === url); if (!me) return [];
  const sec = rows.filter(r => r.section === me.section && r.url !== url).sort((a, b) => b.n - a.n).slice(0, 6);
  const out = [{ h: 'More in ' + me.section, l: sec.map(r => ({ u: r.url, t: r.title })) }];
  const hub = '/blog/' + SECTION_SLUG(me.section) + '/';
  if (fs.existsSync(path.join(__dirname, 'blog', SECTION_SLUG(me.section), 'index.html'))) out.push({ h: 'Browse', l: [{ u: hub, t: 'All ' + me.section + ' articles' }, { u: '/blog/', t: 'All articles' }] });
  return out.filter(g => g.l.length);
}
const REL_CSS = '<style>.relnav{margin:2em 0 0;border-top:1px solid var(--line);padding-top:1em}.relnav h2{font-size:1.05rem;margin:0 0 .5em}.relnav h3{font-size:.95rem;margin:1em 0 .4em;color:var(--muted)}.relnav ul{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:8px}.relnav li:has(>a.rc){margin-right:14px}.relnav a{display:inline-block;background:var(--surface);border:1px solid var(--line);padding:7px 12px;border-radius:10px;text-decoration:none;color:var(--text);font-size:.95rem}.relnav a:hover{color:var(--accent);border-color:var(--accent)}.relnav a.rc,.relnav a.rc:visited{display:inline-flex;align-items:center;gap:9px;background:none;border:0;border-radius:0;padding:6px 0;color:var(--accent);font-weight:500}.relnav a.rc .fimg{height:14px;width:20px;object-fit:cover;border-radius:2px;box-shadow:0 0 0 1px rgba(0,0,0,.18);flex:none}.relnav a.rc:hover{text-decoration:underline}</style>';
const READMORE_FALLBACK_CSS = ".readmore{margin:22px 0 0;padding:14px 16px;background:var(--surface);border:1px solid var(--line);border-radius:14px}.readmore h2{font-family:'Space Mono',monospace;font-size:.85rem;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin:0 0 8px;font-weight:700}.readmore ul{list-style:none;margin:0;padding:0}.readmore li{margin:0 0 6px;display:flex;gap:8px;align-items:baseline}.readmore li:before{content:'\\1F4A1';flex:none;font-size:.95rem}.readmore li:last-child{margin:0}.readmore a{color:var(--text);font-size:1rem;font-weight:300;text-decoration:none;border-bottom:1px solid transparent}.readmore a:hover{color:var(--accent);border-bottom-color:var(--accent)}.readmore ul li a,.readmore ul li a:hover{text-decoration:none}[data-theme=\"dark\"] .readmore a{color:#B1BDD5}[data-theme=\"dark\"] .readmore a:hover{color:var(--accent)}";
let _guides = [], _blogMore = null;
function relatedHtml(url) {
  _blogMore = null;
  if (/^\/blog\/[^/]+\/$/.test(url)) { const bg = related(url); const mo = bg.find(x => x.h.indexOf('More in ') === 0), br = bg.find(x => x.h === 'Browse'); if (mo) _blogMore = { h: mo.h, l: mo.l.concat(br ? br.l : []) }; return ''; }
  const all = related(url); _guides = (all.find(x => x.h === 'Guides') || { l: [] }).l; const g = all.filter(x => x.h !== 'Guides'); if (!g.length) return '';
  return '<nav class="relnav" aria-label="Related pages"><h2>Related rules and guides</h2>' + g.map(x => '<h3>' + esc(x.h) + '</h3><ul>' + x.l.map(l => '<li><a href="' + l.u + '"' + (l.c ? ' class="rc"' : '') + '>' + (l.c ? '<img class="fimg" src="https://flagcdn.com/' + String(l.c).toLowerCase() + '.svg" alt="" loading="lazy">' : '') + esc(l.t) + '</a></li>').join('') + '</ul>').join('') + '</nav>';
}

// ---------- the post-processor ----------
function post(url, html) {
  if (!/^<!doctype html/i.test(html)) return html;
  let h = html;
  const warn = [];
  // 1. the brand is not an H1 (same look: .bn copies the old .brand h1 rule)
  h = h.replace(/<h1>can i take this\?<\/h1>/g, '<span class="bn">can i take this?</span>');
  // 2. title: ' | canitakethis.co' only when the title is short enough to show in full
  h = h.replace(/<title>([\s\S]*?)<\/title>/, (m, t) => { const clean = t.replace(/ \| canitakethis\.co$/, ''); const full = t; const out = (full.length <= 60 || !/ \| canitakethis\.co$/.test(full)) ? full : clean; return '<title>' + out + '</title>'; });
  const title = unesc((/<title>([\s\S]*?)<\/title>/.exec(h) || [0, ''])[1]);
  const desc = unesc((/<meta name="description" content="([^"]*)"/.exec(h) || [0, ''])[1]);
  const canonical = (/<link rel="canonical" href="([^"]+)"/.exec(h) || [0, BASE + url])[1];
  // 3. airline / country header: the heading becomes the page's H1 (the title text), same look
  h = h.replace(/(<div class="airhead">[\s\S]*?)<h2>[\s\S]*?<\/h2>(<\/div>)/, (m, a, b) => a + '<h1>' + esc(title.replace(/ \| canitakethis\.co$/, '')) + '</h1>' + b);
  // 4. social tags
  // the default share image only exists when the owner has added a designed assets/og-default.png (1200x630); until then pages without their own image get no og:image
  const ogDefault = fs.existsSync(path.join(__dirname, 'assets', 'og-default.png')) ? BASE + '/assets/og-default.png' : '';
  const ogImg = (/property="og:image" content="([^"]+)"/.exec(h) || [0, ogDefault])[1];
  let add = '';
  if (!/property="og:image"/.test(h) && ogImg) add += '<meta property="og:image" content="' + ogImg + '">';
  if (!/property="og:title"/.test(h)) add += '<meta property="og:title" content="' + esc(title.replace(/ \| canitakethis\.co$/, '')) + '"><meta property="og:description" content="' + esc(desc) + '"><meta property="og:type" content="article"><meta property="og:url" content="' + canonical + '">';
  if (!/property="og:site_name"/.test(h)) add += '<meta property="og:site_name" content="' + SITE + '">';
  if (!/property="og:locale"/.test(h)) add += '<meta property="og:locale" content="en_US">';
  if (!/name="twitter:card"/.test(h)) add += '<meta name="twitter:card" content="' + (ogImg ? 'summary_large_image' : 'summary') + '"><meta name="twitter:title" content="' + esc(title.replace(/ \| canitakethis\.co$/, '')) + '"><meta name="twitter:description" content="' + esc(desc) + '">' + (ogImg ? '<meta name="twitter:image" content="' + ogImg + '">' : '');
  // 5. structured data: WebPage with dateModified (blog Article gets its dates)
  const dm = mod(url), dp = published(url);
  if (/"@type":"(Article|BlogPosting)"/.test(h)) {
    h = h.replace(/<script type="application\/ld\+json">(\{[^<]*"@type":"(?:Article|BlogPosting)"[^<]*\})<\/script>/, (m, j) => { try { const o = JSON.parse(j); if (!o.dateModified) o.dateModified = dm; if (!o.datePublished && dp) o.datePublished = dp; if (!o.mainEntityOfPage) o.mainEntityOfPage = canonical; return '<script type="application/ld+json">' + JSON.stringify(o) + '</script>'; } catch (e) { return m; } });
  } else {
    const wp = { '@context': 'https://schema.org', '@type': 'WebPage', name: title.replace(/ \| canitakethis\.co$/, ''), url: canonical, description: desc, inLanguage: 'en', dateModified: dm, isPartOf: { '@type': 'WebSite', name: SITE, url: BASE + '/' }, publisher: { '@type': 'Organization', name: SITE, url: BASE + '/' } };
    if (url === '/') { wp['@type'] = 'WebSite'; delete wp.isPartOf; delete wp.dateModified; }
    add += '<script type="application/ld+json">' + JSON.stringify(wp).replace(/</g, '\\u003c') + '</script>';
  }
  // 6. styles for the brand span and the airhead H1, related links
  const rel = relatedHtml(url);
  add += '<style>.brand .bn{font-family:"Space Grotesk","Inter",sans-serif;font-weight:700;font-size:18px;letter-spacing:-.4px;margin:0;color:var(--text)}.airhead h1{font-family:"Space Grotesk","Inter",sans-serif;font-size:1.4rem;line-height:1.2;margin:0;font-weight:700}</style>' + (rel ? REL_CSS : '');
  h = h.replace('</head>', add + '</head>');
  if (rel) {
    const i = h.lastIndexOf('</main>');
    if (i >= 0) h = h.slice(0, i) + rel + h.slice(i); else { const j = h.indexOf('<footer'); if (j >= 0) h = h.slice(0, j) + rel + h.slice(j); }
  }
  // 6b. blog articles: the article links use the same card as 'Read the full guide' (DS 8.16), titled 'More in <section>'
  if (_blogMore && _blogMore.l.length) {
    const rows6 = loadArticleRows();
    const li6 = x => { const r = rows6.find(q => q.url === x.u); return '<li><a href="' + x.u + '">' + esc(unesc(r ? r.title : x.t)) + '</a></li>'; };
    const nav6 = (h.indexOf('.readmore{') < 0 ? '<style>' + READMORE_FALLBACK_CSS + '</style>' : '') + '<nav class="readmore" aria-label="' + esc(_blogMore.h) + '"><h2>' + esc(_blogMore.h) + '</h2><ul>' + _blogMore.l.map(li6).join('') + '</ul></nav>\n';
    let k6 = h.lastIndexOf('</main>'); if (k6 < 0) k6 = h.indexOf('<footer');
    if (k6 >= 0) h = h.slice(0, k6) + nav6 + h.slice(k6);
    _blogMore = null;
  }
  // 7. every article link lives in ONE block, "Read the full guide" (user rule 2026-10-08): the old 'Guides' chip group is merged into it
  if (_guides.length) {
    const rows = loadArticleRows();
    const items = _guides.map(l => { const r = rows.find(x => x.url === l.u); return { u: l.u, t: r ? r.title : l.t }; });
    const li = x => '<li><a href="' + x.u + '">' + esc(unesc(x.t)) + '</a></li>';
    const m2 = /(<nav class="readmore"[^>]*><h2>Read the full guide<\/h2><ul>)([\s\S]*?)(<\/ul><\/nav>)/.exec(h);
    if (m2) {
      const add2 = items.filter(x => m2[2].indexOf('href="' + x.u + '"') < 0);
      if (add2.length) h = h.replace(m2[0], () => m2[1] + m2[2] + add2.map(li).join('') + m2[3]);
    } else {
      const nav = (h.indexOf('.readmore{') < 0 ? '<style>' + READMORE_FALLBACK_CSS + '</style>' : '') + '<nav class="readmore" aria-label="Related guides"><h2>Read the full guide</h2><ul>' + items.map(li).join('') + '</ul></nav>\n';
      let k = h.indexOf('<nav class="relnav"'); if (k < 0) k = h.lastIndexOf('</main>'); if (k < 0) k = h.indexOf('<footer');
      if (k >= 0) h = h.slice(0, k) + nav + h.slice(k);
    }
    _guides = [];
  }
  const body = h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  const n1 = (body.match(/<h1\b/gi) || []).length;
  if (n1 !== 1 && url !== '/') warn.push('h1 count ' + n1);
  if (warn.length) console.warn('SEO post:', url, warn.join(', '));
  return h;
}
module.exports = { post, mod, setLists, SITE_REVIEWED };
