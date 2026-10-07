// Site-wide SEO audit over every built page (regex based, no DOM: 2k+ pages). Usage: node audit_seo.js [--fail]
// Reports per page type: H1 count/text, title and description presence/length, duplicates, og/twitter tags, JSON-LD types, canonical, images without alt,
// internal links, sitemap lastmod. Exit code 1 with --fail when a hard check fails. Run it before every deploy (see DEPLOY docs / ARTICLE_QA.md).
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const SKIP = new Set(['node_modules', '.git', '.github', '.claude', 'assets', 'scripts']);
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (f.isDirectory()) { if (!SKIP.has(f.name)) walk(path.join(d, f.name)); }
    else if (f.name === 'index.html') files.push(path.join(d, f.name));
  }
})(ROOT);
const sitemap = fs.existsSync(path.join(ROOT, 'sitemap.xml')) ? fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8') : '';
const type = u => u === '/' ? 'home' : /^\/airline\/[^/]+\/baggage-allowance\/$/.test(u) ? 'airline-baggage' : /^\/airline\/[^/]+\/[^/]+\/$/.test(u) ? 'airline-category' : /^\/airline\/[^/]+\/$/.test(u) ? 'airline-hub' :
  /^\/country\/[^/]+\/[^/]+\/$/.test(u) ? 'country-category' : /^\/country\/[^/]+\/$/.test(u) ? 'country-hub' : /^\/medication\/into\//.test(u) ? 'medication-country' : /^\/medication\/[^/]+\/[^/]+\/$/.test(u) ? 'medication-drug-country' : /^\/medication\//.test(u) ? 'medication-other' :
  /^\/food\//.test(u) ? 'food' : /^\/pets\//.test(u) ? 'pets' : /^\/plane\//.test(u) ? 'plane' : /^\/blog\/[^/]+\/$/.test(u) ? 'blog-article' : /^\/blog\/$/.test(u) ? 'blog-hub' : /^\/guides\//.test(u) ? 'guide' : 'other';
const by = {}, titles = {}, descs = {};
const attr = (h, re) => { const m = re.exec(h); return m ? m[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'") : ''; };
for (const f of files) {
  const u = '/' + path.relative(ROOT, path.dirname(f)).replace(/\\/g, '/') + '/'; const url = u === '//' || u === '/./' ? '/' : u;
  if (url === '/app/') continue; // copy of the home app, canonical points to /
  const h = fs.readFileSync(f, 'utf8'); const t = type(url);
  const o = by[t] || (by[t] = { n: 0, h1none: 0, h1multi: 0, h1brand: 0, notitle: 0, titleLong: 0, nodesc: 0, descShort: 0, descLong: 0, noOg: 0, noOgImg: 0, noTw: 0, noCanon: 0, noLd: 0, noArticleOrWebPage: 0, noDateMod: 0, imgNoAlt: 0, noLastmod: 0, fewLinks: 0, noindex: 0 });
  o.n++;
  const body = h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  const h1s = [...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  if (!h1s.length) o.h1none++; else if (h1s.length > 1) o.h1multi++;
  if (h1s.some(x => /^can i take this\??$/i.test(x))) o.h1brand++;
  const title = attr(h, /<title>([\s\S]*?)<\/title>/i); const desc = attr(h, /<meta name="description" content="([^"]*)"/i);
  if (!title) o.notitle++; else if (title.length > 70) o.titleLong++;
  if (!desc) o.nodesc++; else { if (desc.length < 100) o.descShort++; if (desc.length > 165) o.descLong++; }
  (titles[title] = titles[title] || []).push(url); (descs[desc] = descs[desc] || []).push(url);
  if (!/property="og:title"/.test(h)) o.noOg++; if (!/property="og:image"/.test(h)) o.noOgImg++; if (!/name="twitter:card"/.test(h)) o.noTw++;
  if (!/<link rel="canonical"/.test(h)) o.noCanon++;
  if (/<meta name="robots" content="[^"]*noindex/i.test(h)) o.noindex++;
  const ld = [...h.matchAll(/"@type":"(\w+)"/g)].map(m => m[1]);
  if (!ld.length) o.noLd++;
  if (!ld.some(x => /^(Article|BlogPosting|WebPage|WebSite|TechArticle)$/.test(x))) o.noArticleOrWebPage++;
  if (!/"dateModified"/.test(h)) o.noDateMod++;
  for (const m of body.matchAll(/<img\b[^>]*>/gi)) { if (!/\balt="[^"]+"/.test(m[0]) && !/aria-hidden|role="presentation"/.test(m[0]) && !/alt=""/.test(m[0])) { o.imgNoAlt++; break; } }
  const i = sitemap.indexOf('<loc>https://canitakethis.co' + url + '</loc>');
  if (i < 0 || !/<lastmod>/.test(sitemap.slice(i, sitemap.indexOf('</url>', i)))) o.noLastmod++;
  const main = (/<main[\s\S]*?<\/main>/i.exec(body) || [body])[0];
  if ((main.match(/<a\b[^>]*href="\/(?!\/)/gi) || []).length < 3) o.fewLinks++;
}
const dupT = Object.entries(titles).filter(([k, v]) => k && v.length > 1), dupD = Object.entries(descs).filter(([k, v]) => k && v.length > 1);
console.log('pages', files.length);
console.table(by);
console.log('duplicate titles:', dupT.length, 'groups,', dupT.reduce((a, [, v]) => a + v.length, 0), 'pages', dupT.slice(0, 5).map(([k, v]) => v.length + 'x ' + k.slice(0, 70)));
console.log('duplicate descriptions:', dupD.length, 'groups,', dupD.reduce((a, [, v]) => a + v.length, 0), 'pages', dupD.slice(0, 5).map(([k, v]) => v.length + 'x ' + k.slice(0, 70)));
const fail = Object.values(by).some(o => o.h1none || o.h1multi || o.h1brand || o.notitle || o.nodesc || o.noCanon || o.noindex);
if (process.argv.includes('--fail') && fail) { console.error('SEO audit FAILED (H1, title, description, canonical or noindex problem)'); process.exit(1); }
