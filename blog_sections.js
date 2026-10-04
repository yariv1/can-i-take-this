// Blog hub sections (2026-10-04, user design): the hub shows, per section, the featured card + "More on <section> →"
// + a horizontal swipe row of the other articles (no "Read article" on swipe cards). Each section also gets its own page
// /blog/<section-slug>/ with the featured card and the full-width card grid. Article tags link to the section page.
// Source of truth is still BODY_BLOG_INDEX in build.js: hub cards are added there as before (first card of a section is the
// featured one). This module parses that HTML at build time, so nothing else has to change when an article is added.

const INTROS = {
  'medications': 'Rules for flying with prescription and over-the-counter medicines, injectables, CBD and pill organizers, checked against official sources.',
  'batteries-electronics': 'Power banks, lithium batteries and other electronics: what airlines and airport security allow in the cabin and in checked bags.',
  'airline-fees-policies': 'Baggage fees by airline, checked on each airline\'s own website and dated.',
  'carry-on-size-by-airline': 'Carry-on and personal item size limits for each airline, with the fee when a bag is too big.',
  'us-travel-programs': 'TSA PreCheck, Global Entry, CLEAR and REAL ID: costs, how to apply and which one is worth it, from official sources.',
  'entry-permits': 'Online travel authorizations such as ETIAS: who needs them, what they cost and how to apply on the official site.',
  'packing-rules': 'Liquids, aerosols, vapes and everyday items: what you can pack and how much, in cabin and checked bags.',
  'customs-money': 'Cash declarations, duty-free allowances and customs forms by country.',
  'food-agriculture': 'Food on planes and across borders: what is allowed, biosecurity rules and fines.'
};

const CSS = [
  '.sec-more{display:flex;justify-content:flex-end;margin:-.4em 0 .8em}',
  '.sec-more a{color:var(--accent);font-size:.92rem;font-weight:600;text-decoration:none;text-transform:none}',
  '.sec-more a b{text-transform:uppercase;font-weight:600}',
  '.sec-more a:hover{text-decoration:underline}',
  '.sec-more a:focus-visible,.tag-link:focus-visible,.sec-back:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:4px}',
  '.bcard-scroll{display:flex;gap:1em;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x proximity;margin:0 -18px 2.2em;padding:2px 18px 14px;scroll-padding-inline:18px;scrollbar-width:thin;scrollbar-color:var(--accent) var(--surface)}',
  '.bcard-scroll::-webkit-scrollbar{height:8px}.bcard-scroll::-webkit-scrollbar-track{background:var(--surface);border-radius:999px}.bcard-scroll::-webkit-scrollbar-thumb{background:var(--muted);border-radius:999px}.bcard-scroll::-webkit-scrollbar-thumb:hover{background:var(--accent)}',
  '.bcard-scroll .bcard{flex:0 0 200px;scroll-snap-align:start}',
  '@media(min-width:640px){.bcard-scroll .bcard{flex-basis:230px}}',
  '.bcard-scroll .bcard .bcard-img-wrap{height:120px;overflow:hidden}',
  '.bcard-scroll .bcard .bcard-img-wrap img{height:100% !important}',
  '.bcard-scroll .bcard .bcard-title{-webkit-line-clamp:4;font-size:1rem}',
  '.sec-back{display:inline-block;color:var(--accent);font-weight:600;text-decoration:none;margin-bottom:.6em}',
  '.sec-back:hover{text-decoration:underline}',
  '.tag-link:hover{color:var(--accent)}'
].join('\n') + '\n';

const decode = s => s.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#39;|&rsquo;/g, "'");
const stripTags = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function build(hub, guides) {
  const head = hub.slice(0, hub.indexOf('<div class="cat-label">'));
  const parts = hub.split('<div class="cat-label">').slice(1);
  const sections = [], urlToSec = {};
  for (const p of parts) {
    const label = p.slice(0, p.indexOf('</div>'));
    const name = decode(label.replace(/^[^\p{L}\p{N}]+/u, '').trim());
    const slug = name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const rest = p.slice(p.indexOf('</div>') + 6);
    const feat = (rest.match(/<a class="bcard-featured"[\s\S]*?<\/a>/) || [null])[0];
    const cards = rest.match(/<a class="bcard" [\s\S]*?<\/a>/g) || [];
    const all = [];
    if (feat) all.push({ feat: true, html: feat });
    cards.forEach(c => all.push({ feat: false, html: c }));
    if (!all.length) throw new Error('blog_sections: section without cards: ' + name);
    if (!INTROS[slug]) throw new Error('blog_sections: no intro for section ' + slug + ' (add it to INTROS)');
    const items = all.map(a => ({ href: a.html.match(/href="([^"]+)"/)[1], html: a.html, feat: a.feat }));
    items.forEach(i => { if (urlToSec[i.href]) throw new Error('blog_sections: article in two sections ' + i.href); urlToSec[i.href] = slug; });
    sections.push({ label, name, slug, items });
  }

  const descOf = href => { const g = guides.find(x => x.url === href); return g ? g.desc : ''; };
  const excerpt = d => { d = String(d || '').replace(/\s+/g, ' ').trim(); if (d.length <= 175) return d; const c = d.slice(0, 172); return c.slice(0, c.lastIndexOf(' ')).replace(/[,;:.]$/, '') + '…'; };
  const toFeatured = card => {
    const href = card.match(/href="([^"]+)"/)[1];
    const img = card.match(/<img src="([^"]+)" alt="([^"]*)"/);
    const tm = card.match(/<span class="tag tag-neutral bcard-tag">([\s\S]*?)<\/span>\s*<div class="bcard-title">/);
    if (!tm) throw new Error('blog_sections: card tag not parsed ' + href);
    const title = card.match(/<div class="bcard-title">([\s\S]*?)<\/div>/)[1];
    return '<a class="bcard-featured" href="' + href + '">\n  <div class="bcard-img-wrap">\n    <img src="' + img[1] + '" alt="' + img[2] + '" width="800" height="400">\n  </div>\n  <div class="bcard-body">\n    <span class="tag tag-neutral bcard-tag">' + tm[1] + '</span>\n    <h2 class="bcard-title">' + title + '</h2>\n    <p class="bcard-excerpt">' + esc(excerpt(descOf(href))) + '</p>\n    <span class="bcard-read">Read article →</span>\n  </div>\n</a>';
  };

  let hubBody = head, pages = [];
  for (const s of sections) {
    const first = s.items[0];
    const featHtml = first.feat ? first.html : toFeatured(first.html);
    const rest = s.items.slice(1);
    s.count = s.items.length;
    // hub: label, featured, "More on", swipe row without "Read article"
    hubBody += '<div class="cat-label">' + s.label + '</div>\n\n' + featHtml + '\n\n';
    hubBody += '<div class="sec-more"><a href="/blog/' + s.slug + '/">More on <b>' + esc(s.name) + '</b> →</a></div>\n\n';
    if (rest.length) hubBody += '<div class="bcard-scroll">\n' + rest.map(r => r.html.replace(/\s*<div class="bcard-read">[\s\S]*?<\/div>/, '')).join('\n') + '\n</div>\n\n';
    // section page: featured + full-width grid with the original cards
    pages.push({
      url: '/blog/' + s.slug + '/', slug: 'blog-section-' + s.slug, sec: true,
      title: s.name + ': All Guides and Articles | canitakethis.co',
      desc: INTROS[s.slug],
      h1: s.name,
      body: '<div class="hub-head">\n  <p><a class="sec-back" href="/blog/">← All articles</a></p>\n  <p>' + esc(INTROS[s.slug]) + '</p>\n</div>\n\n' + featHtml + '\n\n' + (rest.length ? '<div class="bcard-grid">\n' + rest.map(r => r.html).join('\n') + '\n</div>\n' : '')
    });
  }
  const linkTag = (url, html) => {
    const slug = urlToSec[url];
    if (!slug) return html;
    return html.replace(/(class="art-meta"[^>]*>\s*)<span class="tag tag-neutral">([\s\S]*?)<\/span>/, '$1<a class="tag tag-neutral tag-link" href="/blog/' + slug + '/">$2</a>');
  };
  return { hub: hubBody, pages, linkTag, sections, urlToSec };
}

module.exports = { build, CSS, INTROS };
