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
  'entry-permits': 'Online travel authorizations such as ETIAS and the UK ETA: who needs them, what they cost and how to apply on the official site.',
  'travel-safety': 'Government travel warnings and advisory levels by country, from official data and updated automatically.',
  'packing-rules': 'Liquids, aerosols, vapes and everyday items: what you can pack and how much, in cabin and checked bags.',
  'customs-money': 'Cash declarations, duty-free allowances and customs forms by country.',
  'food-agriculture': 'Food on planes and across borders: what is allowed, biosecurity rules and fines.'
};

const SECTION_TEXT = {
  'medications': ['A medicine that is legal and ordinary at home can be restricted or controlled in the country you fly to. The first article here sets out that problem with common examples, such as a decongestant refill, an ADHD prescription and a codeine painkiller, and explains what to check before you pack them.', 'The other guides cover the practical side of carrying medicine: injectables such as Ozempic, syringes, EpiPens and insulin with gel ice packs, liquid medication under the 3-1-1 rule, pill organizers versus original bottles, CBD, controlled substances, and timing doses across time zones.'],
  'batteries-electronics': ['Lithium batteries are the one electronics topic where airlines and security agencies set firm rules, so this section stays on them. One article explains the global power bank rule and the airline bans that followed cabin fires, and a second compares the power bank rules of 33 airlines.', 'The airline comparison matters because a rule that is fine on one carrier can be banned on another. Use the article for the general rule and the comparison to check the airline on your ticket.'],
  'airline-fees-policies': ['This section has two kinds of guide. Baggage fee articles cover American, Delta, Southwest and JetBlue, with the first, second and third bag prices, overweight charges and the cases where bags fly free, each checked against the airline site.', 'The compensation articles cover what happens when a flight is cancelled, delayed or overbooked, what US airlines owe passengers in each case, and how the European EU261 rule applies to flights that touch Europe.'],
  'carry-on-size-by-airline': ['Carry-on rules differ by airline, so this section has one article per carrier plus two comparisons. The per-airline guides give the official bag size in inches and cm, for example 22 x 14 x 9 in for Delta and United and 24 x 16 x 10 in for Southwest, and say what the airline charges when a bag is too big.', 'The two comparison articles cover personal item limits across airlines and the basic economy question: whether United, Delta or American let a basic economy ticket carry a full-size bag, and which gate fees apply.'],
  'us-travel-programs': ['These guides are for travellers deciding which US screening or ID program is worth paying for. The comparison article sets TSA PreCheck, Global Entry and CLEAR side by side on cost, speed and eligibility, and the follow-ups go deeper on each: fees and steps, the Global Entry interview, and what CLEAR+ adds.', 'Two guides deal with the ID rules at the checkpoint, the REAL ID requirement with its ConfirmID fee and the accepted alternatives, and with TSA PreCheck Touchless ID, which airports offer it and how to opt in. Costs are taken from the official program sites.'],
  'packing-rules': ['The packing guides here start with liquids because that is where most security problems come from. One article explains why a checked bag has no 3.4 oz limit but still caps toiletries and aerosols at 500 ml each and alcohol over 24% at 5 litres.', 'The others answer the questions behind the rule: how many ounces you can bring on a plane, and whether a specific product counts as a liquid, with TSA rules for more than 90 items. Each article links to the official source it uses.'],
  'customs-money': ['Customs rules are decided by the country you land in, not by your airline, which is why this section is split by country. The cash article covers the 10,000 dollar declaration level and what happens to money that is not declared, while the duty-free pages cover general goods, tobacco and alcohol allowances side by side for the countries on this site.', 'The form guides cover the paperwork itself: how the declaration form works in each country and how Japan handles it with a QR code or a paper form. Each article names the customs authority it relies on, so you can check the rule at the source before you travel.'],
  'entry-permits': ['An entry permit is a different thing from a visa: it is an online authorization you apply for before you travel. This section covers the European ETIAS and the UK ETA for US citizens, with what each one is, what it costs and where to apply on the official site.', 'It also answers the passport question US citizens ask before short trips to Canada, Mexico, the Bahamas and Puerto Rico, with the land, sea and cruise differences taken from CBP and the State Department.'],
  'food-agriculture': ['Food rules come in two layers, and the articles here keep them apart. Airport security decides what may pass the checkpoint, and the customs or biosecurity authority of the destination decides what may enter the country. The page on food passing TSA versus customs explains that split.', 'Australia and New Zealand are covered on their own because their biosecurity fines for undeclared food are applied on the spot. Two practical guides cover baby food pouches and a general list of foods you can take on a plane.'],
  'travel-safety': ['This section is about government advisory levels, not opinions. The country page compares the current US State Department, UK FCDO and Canadian levels for 85 countries side by side and explains what each level means.', 'The other guides narrow that data down by place or level: the Caribbean, Mexico by state, Turks and Caicos, and the list of countries at level 4. The levels come from official data and the update date is shown on the page.']
};

const CSS = [
  '.sec-more{display:flex;justify-content:flex-end;margin:-.4em 0 .8em}',
  '.sec-more a{color:var(--accent);font-size:.92rem;font-weight:600;text-decoration:none;text-transform:none}',
  '.sec-more a b{text-transform:uppercase;font-weight:600}',
  '.sec-more a:hover{text-decoration:underline}',
  '.sec-more a:focus-visible,.tag-link:focus-visible,.sec-back:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:4px}',
  '.hs{margin:0 0 2.2em}',
  '.bcard-scroll{display:flex;gap:1em;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x proximity;margin:0 -18px;padding:2px 18px 10px;scroll-padding-inline:18px;scrollbar-width:none}',
  '.bcard-scroll::-webkit-scrollbar{display:none}',
  // custom bar: arrows jump one card, bar aligns with the card column (hidden on touch, where swiping is natural)
  '.hs-bar{display:flex;align-items:center;gap:6px;height:16px;margin-top:4px}',
  '.hs-btn{flex:none;width:16px;height:16px;padding:0;border:0;background:none;color:#2F416A;cursor:pointer;display:grid;place-items:center}',
  '.hs-btn svg{width:16px;height:16px}',
  '.hs-btn:hover:not(:disabled){color:var(--accent)}',
  '.hs-btn:disabled{opacity:.35;cursor:default}',
  '.hs-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:4px}',
  '.hs-track{position:relative;flex:1;height:16px;border-radius:999px;background:var(--surface);cursor:pointer}',
  '.hs-thumb{position:absolute;top:4px;height:8px;border-radius:999px;background:#2F416A;cursor:grab;touch-action:none}',
  '.hs-thumb:hover,.hs-thumb.drag{background:var(--accent)}',
  '@media(hover:none){.hs-bar{display:none}}',
  '.hs.hs-fit .hs-bar{display:none}',
  '.bcard-scroll .bcard{flex:0 0 200px;scroll-snap-align:start}',
  '@media(min-width:640px){.bcard-scroll .bcard{flex-basis:230px}}',
  '.bcard-scroll .bcard .bcard-img-wrap{height:120px;overflow:hidden}',
  '.bcard-scroll .bcard .bcard-img-wrap img{height:100% !important}',
  '.bcard-scroll .bcard .bcard-title{-webkit-line-clamp:4;font-size:1rem}',
  '.sec-back{display:inline-block;color:var(--accent);font-weight:600;text-decoration:none;margin-bottom:.6em}',
  '.sec-back:hover{text-decoration:underline}',
  '.tag-link:hover{color:var(--accent)}'
].join('\n') + '\n';

const CHEV = d => '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>';
const SWIPE_BAR = '<div class="hs-bar"><button type="button" class="hs-btn" data-d="-1" aria-label="Previous articles">' + CHEV('M10 3 5 8l5 5') + '</button><div class="hs-track"><div class="hs-thumb"></div></div><button type="button" class="hs-btn" data-d="1" aria-label="Next articles">' + CHEV('M6 3l5 5-5 5') + '</button></div>';
// One script for all rows: arrows jump one card, thumb shows/drags the position, track click jumps to that spot.
const SWIPE_JS = '<script>(function(){document.querySelectorAll(".hs").forEach(function(hs){var row=hs.querySelector(".bcard-scroll"),track=hs.querySelector(".hs-track"),th=hs.querySelector(".hs-thumb"),b=hs.querySelectorAll(".hs-btn");' +
  'function max(){return row.scrollWidth-row.clientWidth}' +
  'function step(){var c=row.querySelector(".bcard");var g=parseFloat(getComputedStyle(row).columnGap)||16;return c.getBoundingClientRect().width+g}' +
  'function upd(){var m=max();hs.classList.toggle("hs-fit",m<=1);var tw=track.clientWidth,w=Math.max(40,tw*row.clientWidth/row.scrollWidth);th.style.width=w+"px";th.style.left=(m>0?row.scrollLeft/m*(tw-w):0)+"px";b[0].disabled=row.scrollLeft<=1;b[1].disabled=row.scrollLeft>=m-1}' +
  'b.forEach(function(x){x.addEventListener("click",function(){row.scrollTo({left:Math.round(row.scrollLeft/step())*step()+(+x.dataset.d)*step(),behavior:"smooth"})})});' +
  'row.addEventListener("scroll",upd,{passive:true});window.addEventListener("resize",upd);' +
  'track.addEventListener("click",function(e){if(e.target===th)return;var r=track.getBoundingClientRect(),f=(e.clientX-r.left-th.offsetWidth/2)/(r.width-th.offsetWidth);row.scrollTo({left:Math.max(0,Math.min(1,f))*max(),behavior:"smooth"})});' +
  'th.addEventListener("pointerdown",function(e){e.preventDefault();th.setPointerCapture(e.pointerId);th.classList.add("drag");var x0=e.clientX,s0=row.scrollLeft,k=max()/(track.clientWidth-th.offsetWidth);row.style.scrollSnapType="none";function mv(ev){row.scrollLeft=s0+(ev.clientX-x0)*k}function up(){th.classList.remove("drag");row.style.scrollSnapType="";th.removeEventListener("pointermove",mv);th.removeEventListener("pointerup",up)}th.addEventListener("pointermove",mv);th.addEventListener("pointerup",up)});' +
  'upd();setTimeout(upd,300)})})();</script>\n';

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
    if (rest.length) hubBody += '<div class="hs"><div class="bcard-scroll">\n' + rest.map(r => r.html.replace(/\s*<div class="bcard-read">[\s\S]*?<\/div>/, '')).join('\n') + '\n</div>' + SWIPE_BAR + '</div>\n\n';
    // section page: featured + full-width grid with the original cards
    pages.push({
      url: '/blog/' + s.slug + '/', slug: 'blog-section-' + s.slug, sec: true,
      title: s.name + ': All Guides and Articles | canitakethis.co',
      desc: INTROS[s.slug],
      h1: s.name,
      body: '<div class="hub-head">\n  <p><a class="sec-back" href="/blog/">← All articles</a></p>\n  <p>' + esc(INTROS[s.slug]) + '</p>\n' + (SECTION_TEXT[s.slug]||[]).map(t => '  <p>' + esc(t) + '</p>\n').join('') + '</div>\n\n' + featHtml + '\n\n' + (rest.length ? '<div class="bcard-grid">\n' + rest.map(r => r.html).join('\n') + '\n</div>\n' : '')
    });
  }
  const linkTag = (url, html) => {
    const slug = urlToSec[url];
    if (!slug) return html;
    return html.replace(/(class="art-meta"[^>]*>\s*)<span class="tag tag-neutral">([\s\S]*?)<\/span>/, '$1<a class="tag tag-neutral tag-link" href="/blog/' + slug + '/">$2</a>');
  };
  hubBody += SWIPE_JS;
  return { hub: hubBody, pages, linkTag, sections, urlToSec };
}

module.exports = { build, CSS, INTROS };
