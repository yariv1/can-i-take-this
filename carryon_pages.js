// Visual per-airline carry-on size articles. Each page has its own structure and wording on purpose
// (CONTENT_UNIQUENESS_RULES.md). Data: each airline's own website, checked October 2026.
const U = 11; // pixels per inch in the size diagrams
const CSS = `<style>.cox-tw{overflow-x:auto;border:1px solid var(--line);border-radius:14px;background:var(--surface);margin:1em 0}.cox-t{width:100%;border-collapse:collapse;font-size:.95rem;line-height:1.4}.cox-t th,.cox-t td{padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid var(--line);font-weight:300}.cox-t td strong,.cox-t td b{font-weight:600}.cox-t thead th{font-size:.85rem;color:var(--muted);font-weight:700}.cox-t tbody tr:last-child th,.cox-t tbody tr:last-child td{border-bottom:0}.cox-t tbody th{font-weight:700}.cox-q{color:var(--accent)}.cox-dia{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:12px;margin:1em 0;text-align:center}.cox-dia svg{max-width:100%;height:auto}.cox-dia figcaption{font-size:.9rem;color:var(--muted);margin-top:6px}</style>`;
const T = (head, rows) => `<div class="cox-tw"><table class="cox-t"><thead><tr>${head.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const SRC = a => `<div class="art-sources"><div class="art-sources-head">🔗 Official source</div>${a.map(x => `<a class="art-source-link" href="${x[0]}" target="_blank" rel="noopener noreferrer">${x[1]}</a>`).join('')}</div>`;
const CHK = '<p><em>Checked October 2026 on the airline&rsquo;s own website. Rules change; confirm for your ticket before you fly.</em></p>';
const stat = a => `<div class="stat-strip">${a.map(x => `<div class="stat-box"><div class="stat-num">${x[0]}</div><div class="stat-label">${x[1]}</div></div>`).join('')}</div>`;
const callout = (ic, t) => `<div class="callout"><div class="callout-icon">${ic}</div><div>${t}</div></div>`;
const cl = a => `<div class="checklist">${a.map(x => `<div class="cl-item"><span class="cl-num">${x[0]}</span><div>${x[1]}</div></div>`).join('')}</div>`;
const faq = a => a.map(x => `<h3 class="cox-q">${x[0]}</h3><p>${x[1]}</p>`).join('');
const meta = m => `<div class="art-meta"><span class="tag tag-neutral">Carry-On Size</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>${m} min read</span></div>`;
const hero = (k, alt, cap) => `<figure class="art-hero"><img src="/assets/blog/blog-${k}-carry-on-size-2026-hero.webp" alt="${alt}" width="800" height="400"><figcaption>${cap}</figcaption></figure>`;
const fig = (k, alt, cap, n) => `<figure class="art-fig"><img src="/assets/blog/blog-${k}-carry-on-size-2026-inArticle-${n||1}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

// to-scale front view of a bag: h x w inches (depth in the label); dashed outline = a reference size to compare with
function bagSvg(o) {
  const pad = 52, items = [o].concat(o.second ? [o.second] : []);
  const W = Math.max(o.w, o.refW || 0) * U + pad * 2 + (o.second ? o.second.w * U + 44 : 0), H = Math.max(o.h, o.refH || 0, o.second ? o.second.h : 0) * U + pad * 2;
  const style = '<style>.bg{fill:var(--surface-2)}.ln{fill:none;stroke:#1E86D6;stroke-width:3}[data-theme="dark"] .ln{stroke:#4CC2FF}.ln2{fill:none;stroke:#2FCF9B;stroke-width:3}.ref{fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:6 5}.t1{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:var(--text)}.t2{font-family:Inter,sans-serif;font-size:14px;fill:var(--muted)}</style>';
  const g = (b, x, cls, label) => {
    const bw = b.w * U, bh = b.h * U, top = H - pad - bh;
    return '<rect class="bg" x="' + x + '" y="' + top + '" width="' + bw + '" height="' + bh + '" rx="10"/><rect class="' + cls + '" x="' + x + '" y="' + top + '" width="' + bw + '" height="' + bh + '" rx="10"/>' +
      '<path class="' + cls + '" d="M' + (x + bw / 2 - 16) + ' ' + top + ' v-9 h32 v9"/>' +
      '<text class="t1" x="' + (x + bw / 2) + '" y="' + (top + bh / 2) + '" text-anchor="middle">' + label + '</text>' +
      '<text class="t2" x="' + (x + bw / 2) + '" y="' + (top + bh / 2 + 20) + '" text-anchor="middle">' + b.d + ' in deep</text>' +
      '<text class="t1" x="' + (x - 10) + '" y="' + (top + bh / 2) + '" text-anchor="middle" transform="rotate(-90 ' + (x - 10) + ' ' + (top + bh / 2) + ')">' + b.h + ' in</text>' +
      '<text class="t1" x="' + (x + bw / 2) + '" y="' + (H - pad + 24) + '" text-anchor="middle">' + b.w + ' in</text>';
  };
  let body = '';
  if (o.refW) body += '<rect class="ref" x="' + pad + '" y="' + (H - pad - o.refH * U) + '" width="' + (o.refW * U) + '" height="' + (o.refH * U) + '" rx="10"/>';
  body += g(o, pad, 'ln', o.label);
  if (o.second) body += g(o.second, pad + o.w * U + 44, 'ln2', o.second.label);
  return '<figure class="cox-dia"><svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" role="img" aria-label="' + o.alt + '" xmlns="http://www.w3.org/2000/svg">' + style + body + '</svg><figcaption>' + o.cap + '</figcaption></figure>';
}

const pages = {};

// ---------------- DELTA ----------------
pages['delta'] = {
  title: 'Delta Carry-On Size 2026: 22 x 14 x 9 in and the 45-Inch Total | canitakethis.co',
  desc: 'Delta carry-on bag size is 22 x 14 x 9 inches (56 x 35 x 23 cm) with a 45 linear inch total. What counts, the personal item, and the small-plane exception.',
  h1: 'Delta Carry-On Size 2026: 22 x 14 x 9 in and the 45-Inch Total',
  body: CSS + meta(3) +
    hero('delta', 'Delta gate agent at Boston Logan Terminal A holding a bag sizer frame for a traveler roller bag, with the Delta widget logo on the gate sign', 'Delta publishes two numbers: each side and the 45-inch total.') +
    `<p>One carry-on and one personal item. Both Delta numbers matter.</p>` +
    stat([['22×14×9', 'inches, carry-on bag'], ['45 in', 'maximum total of the 3 sides'], ['$0', 'to gate-check a full-flight bag'], ['No limit', 'weight, not stated by Delta']]) +
    bagSvg({ h: 22, w: 14, d: 9, label: 'Carry-on', alt: 'Delta carry-on bag 22 by 14 by 9 inches drawn to scale', cap: 'Delta carry-on limit drawn to scale, 22 x 14 x 9 inches (56 x 35 x 23 cm).' }) +
    '<h2>🧮 The 45-inch total, in three examples</h2>' +
    cl([['✅', '<strong>22 × 14 × 9 = 45.</strong> Passes both rules.'], ['❌', '<strong>23 × 14 × 9 = 46.</strong> Breaks the side limit and the total.'], ['📏', 'Measure with the wheels and the handle, as the bag stands.']]) +
    fig('delta', 'Woman at the Delta check-in area in Atlanta measuring a green roller bag with a tape measure while a Delta agent looks on', 'Measure the whole bag: wheels and handles count.') +
    '<h2>✈️ Small regional planes</h2>' +
    callout('⚠️', '<strong>Delta Connection, 50 seats or fewer:</strong> only personal items fit in the cabin. Larger carry-ons are checked at the gate, free of charge.') +
    '<h2>👜 What else rides free</h2>' +
    cl([['👜', 'One personal item that fits under the seat in front of you.'], ['♿', 'Assistive devices do not need overhead space.'], ['👶', 'Strollers, wheelchairs and child safety seats go free.'], ['🚪', 'Full flight? The agent checks your bag at the gate, free.']]) +
    '<p>Prices for checked bags are separate: <a href="/blog/delta-baggage-fees-2026/">Delta baggage fees</a> &middot; <a href="/airline/delta/baggage-allowance/">Delta baggage allowance</a>.</p>' +
    fig('delta', 'Delta agent at the Minneapolis gate tagging a roller bag at the jet bridge door of a small regional jet', 'Small regional jets: the bag is tagged at the door and returned after landing.', 2) + '<h2>❓ Quick answers</h2>' + faq([['Does the Delta carry-on include wheels?', 'Yes, measure the bag as it is.'], ['Is there a weight limit?', 'Delta lists none on its carry-on page.']]) +
    CHK + SRC([['https://www.delta.com/us/en/baggage/carry-on-baggage', 'Delta &mdash; Carry-on baggage']])
};

// ---------------- JETBLUE ----------------
pages['jetblue'] = {
  title: 'JetBlue Carry-On Size 2026: Bag 22 x 14 x 9 in, Personal Item 17 x 13 x 8 in | canitakethis.co',
  desc: 'JetBlue allows one carry-on bag (22 x 14 x 9 in) and one personal item (17 x 13 x 8 in) on all fares. The personal item is smaller than most airlines allow.',
  h1: 'JetBlue Carry-On Size 2026: Bag 22 x 14 x 9 in, Personal Item 17 x 13 x 8 in',
  body: CSS + meta(3) +
    hero('jetblue', 'JetBlue agent at New York JFK Terminal 5 checking a traveler backpack against the personal item size frame under a jetBlue sign', 'JetBlue\'s personal item is the smallest of the big US airlines.') +
    `<p>The carry-on is standard. The <strong>personal item is not</strong>.</p>` +
    stat([['22×14×9', 'inches, carry-on bag'], ['17×13×8', 'inches, personal item'], ['All fares', 'Blue Basic included'], ['No limit', 'weight, per JetBlue']]) +
    bagSvg({ h: 17, w: 13, d: 8, label: 'JetBlue', alt: 'JetBlue personal item 17 by 13 by 8 inches drawn to scale', cap: 'JetBlue personal item limit, to scale: 17 x 13 x 8 inches.' }) +
    T(['', 'Under the seat or bin', 'Inches', 'Centimetres'], [['🧳 Carry-on bag', 'Overhead bin', '22 × 14 × 9', '55.9 × 35.6 × 22.9'], ['🎒 Personal item', 'Under the seat', '17 × 13 × 8', '43.2 × 33 × 20.3']]) +
    '<h2>🎒 Will my backpack fit?</h2>' +
    cl([['❌', 'A backpack sold as <strong>18 × 14 × 8</strong> is 1 inch too long and 1 inch too wide for JetBlue.'], ['✅', 'Flying two airlines in one trip? Size for JetBlue.'], ['📏', 'Include handles and wheels in every measurement.']]) +
    fig('jetblue', 'Man at the JetBlue gate in Burbank airport placing a small gray backpack into the personal item sizer while the agent watches', 'A little smaller than the usual 18 x 14 x 8 inches.') +
    '<h2>🔵 Blue Basic is not penalized</h2>' +
    callout('💡', '<strong>Same allowance on all fares.</strong> JetBlue announced a free carry-on for Blue Basic starting September 6, 2024. Checked bags cost extra: <a href="/blog/jetblue-baggage-fees-2026/">JetBlue baggage fees</a>.') +
    '<h2>➕ Items that do not count</h2>' +
    cl([['♿', 'Assistive devices'], ['🛍️', 'Duty-free purchases'], ['🍼', 'One diaper bag with a lap infant'], ['🧥', 'A coat, an umbrella and an infant car seat']]) +
    '<p>More: <a href="/airline/jetblue/baggage-allowance/">JetBlue baggage allowance</a>.</p>' +
    fig('jetblue', 'Man at the JetBlue gate in Newark showing a boarding pass and carrying a black roller bag and a small backpack', 'One carry-on and one personal item, on every JetBlue fare.', 2) + '<h2>❓ Quick answers</h2>' + faq([['Does JetBlue weigh carry-ons?', 'No weight limit, but you must be able to lift the bag into the bin.']]) +
    CHK + SRC([['https://www.jetblue.com/help/carry-on-bags', 'JetBlue &mdash; Carry-on bags']])
};

// ---------------- AMERICAN ----------------
pages['american-airlines'] = {
  title: 'American Airlines Carry-On Size 2026: 22 x 14 x 9 in and the Sizer Test | canitakethis.co',
  desc: 'American Airlines carry-on size: 22 x 14 x 9 inches (56 x 36 x 23 cm), personal item 18 x 14 x 8 inches, same on Basic Economy. The bag must fit the airport sizer.',
  h1: 'American Airlines Carry-On Size 2026: 22 x 14 x 9 in and the Sizer Test',
  body: CSS + meta(3) +
    hero('american-airlines', 'American Airlines agent at Chicago OHare Terminal 3 watching a traveler slide a roller bag into the metal sizer frame beside the eagle logo sign', 'At American the airport sizer has the last word.') +
    `<p>The tape measure at home is not the final judge. The <strong>sizer</strong> is.</p>` +
    stat([['22×14×9', 'inches, carry-on'], ['18×14×8', 'inches, personal item'], ['Same', 'on Basic Economy'], ['Sizer', 'bag must fit the frame']]) +
    bagSvg({ h: 22, w: 14, d: 9, label: 'Carry-on', second: { h: 14, w: 18, d: 8, label: 'Personal' }, alt: 'American Airlines carry-on 22 by 14 by 9 inches and personal item 18 by 14 by 8 inches drawn to scale', cap: 'American carry-on (22 x 14 x 9 in) and personal item (18 x 14 x 8 in), to scale.' }) +
    '<h2>🧪 The sizer test</h2>' +
    cl([['1️⃣', 'Wheels and handles are inside the 22 × 14 × 9 inches.'], ['2️⃣', 'The bag has to slide into the sizer frame at the airport.'], ['3️⃣', 'A soft bag stuffed past its size can still be stopped.']]) +
    fig('american-airlines', 'Young man at Phoenix Sky Harbor pressing a stuffed duffel into the American Airlines bag sizer while an agent watches', 'A stuffed soft bag can fail the sizer even if the label says 22 inches.') +
    '<h2>🎟️ Basic Economy: same bags, other rules</h2>' +
    T(['', 'Main Cabin', 'Basic Economy'], [['🧳 Carry-on', '22 × 14 × 9 in', '22 × 14 × 9 in'], ['🎒 Personal item', '18 × 14 × 8 in', '18 × 14 × 8 in'], ['💳 Checked bag', 'Paid', 'Paid, $5 more from May 18, 2026']]) +
    callout('💡', 'Checked prices: <a href="/blog/american-airlines-baggage-fees-2026/">American Airlines baggage fees</a> &middot; <a href="/airline/american-airlines/baggage-allowance/">baggage allowance</a>.') +
    '<h2>🔍 What I did not find</h2>' +
    callout('🔍', 'No carry-on weight limit appears in the American pages I could read, so none is stated here.') +
    fig('american-airlines', 'Woman seated on an American Airlines plane in Austin with a small backpack under the seat in front of her and a roller bag in the bin above', 'The personal item goes under the seat, the carry-on goes in the bin.', 2) + '<h2>❓ Quick answers</h2>' + faq([['Do wheels count on American?', 'Yes, the limit includes handles and wheels.']]) +
    CHK + SRC([['https://www.aa.com/i18n/travel-info/baggage/carry-on-baggage.jsp', 'American Airlines &mdash; Carry-on bags and size limits']])
};

// ---------------- ALASKA ----------------
pages['alaska-airlines'] = {
  title: 'Alaska Airlines Carry-On Size 2026: 22 x 14 x 9 in and Saver Fare Boarding | canitakethis.co',
  desc: 'Alaska Airlines carry-on bag limit is 22 x 14 x 9 inches plus one personal item. On Saver fares you board last, so overhead space is first come, first served.',
  h1: 'Alaska Airlines Carry-On Size 2026: 22 x 14 x 9 in and Saver Fare Boarding',
  body: CSS + meta(3) +
    hero('alaska-airlines', 'Alaska Airlines gate area at Anchorage airport with passengers lining up by boarding group and a traveler holding a roller bag', 'Same bag on every fare, but your boarding group decides if there is room.') +
    `<p>The bag size is the same on every Alaska fare. What a cheaper fare changes is <strong>when you board</strong>.</p>` +
    stat([['22×14×9', 'inches, carry-on'], ['1 + 1', 'carry-on and personal item'], ['Group F', 'where Saver fares board'], ['First come', 'overhead bin space']]) +
    bagSvg({ h: 22, w: 14, d: 9, label: 'Carry-on', alt: 'Alaska Airlines carry-on 22 by 14 by 9 inches drawn to scale', cap: 'Alaska carry-on limit, to scale: 22 x 14 x 9 in, wheels and handles included.' }) +
    '<h2>🎟️ Saver fare vs Main</h2>' +
    T(['', 'Main', 'Saver'], [['🧳 Carry-on size', '22 × 14 × 9 in', '22 × 14 × 9 in'], ['👜 Personal item', 'Yes', 'Yes'], ['🚪 Boarding', 'Earlier groups', 'Group F (last)']]) +
    fig('alaska-airlines', 'Flight attendant on an Alaska Airlines plane at Portland pointing to an overhead bin that is already full while a passenger holds a roller bag', 'Late boarding, full bins: keep valuables in the personal item.') +
    '<h2>🎒 If the bins are full</h2>' +
    cl([['🔌', 'Keep chargers, medicine and documents in the personal item under the seat.'], ['🧳', 'Pack a carry-on that you are happy to gate-check.'], ['⬆️', 'Need the bin? A Main fare boards ahead of Saver.']]) +
    callout('ℹ️', 'Alaska publishes a separate page of exceptions for children, instruments and assistive devices. Check it before you fly.') +
    '<p>More: <a href="/airline/alaska-airlines/baggage-allowance/">Alaska Airlines baggage allowance</a>.</p>' +
    fig('alaska-airlines', 'Passengers at the Alaska Airlines gate in San Diego beside a boarding sign reading Group F', 'Saver fares board in Group F, after the other groups.', 2) + '<h2>❓ Quick answers</h2>' + faq([['What size is the Alaska personal item?', 'Alaska only says a smaller item that fits under the seat; no size in inches was on the pages I read.']]) +
    CHK + SRC([['https://www.alaskaair.com/content/travel-info/baggage/carry-on-luggage', 'Alaska Airlines &mdash; Carry-on luggage size limit'], ['https://www.alaskaair.com/content/travel-info/flight-experience/saver', 'Alaska Airlines &mdash; Saver fares']])
};

// ---------------- SOUTHWEST ----------------
pages['southwest'] = {
  title: 'Southwest Carry-On Size 2026: 24 x 16 x 10 in, the Biggest in the US | canitakethis.co',
  desc: 'Southwest carry-on bag limit is 24 x 16 x 10 inches, larger than most US airlines. One carry-on and one personal item; excess must be checked at the counter.',
  h1: 'Southwest Carry-On Size 2026: 24 x 16 x 10 in, the Biggest in the US',
  body: CSS + meta(3) +
    hero('southwest', 'Southwest agent at the Nashville gate pointing to a large roller bag beside the carry-on size sign with the heart logo', 'Southwest allows a bigger carry-on than Delta, American, JetBlue and Alaska.') +
    `<p>Southwest has the roomiest carry-on of the big US airlines.</p>` +
    stat([['24×16×10', 'inches, Southwest carry-on'], ['22×14×9', 'inches, Delta, American, JetBlue, Alaska'], ['+2 / +2 / +1', 'inches longer, wider, deeper'], ['1 + 1', 'carry-on and personal item']]) +
    bagSvg({ h: 24, w: 16, d: 10, label: 'Southwest', refH: 22, refW: 14, alt: 'Southwest carry-on 24 by 16 by 10 inches against the standard 22 by 14 by 9 inch size', cap: 'Solid: Southwest, 24 x 16 x 10 in. Dashed: the 22 x 14 x 9 in standard.' }) +
    '<h2>📐 What counts toward the size</h2>' +
    cl([['🛞', 'Wheels'], ['🤚', 'Handles'], ['📎', 'Any attachments on the bag']]) +
    fig('southwest', 'Woman on a Southwest plane at Dallas Love Field lifting a large gray roller bag into the overhead bin', 'Southwest\'s 24-inch bag still has to fit the bin.') +
    '<h2>🧾 Too much? Check it at the counter</h2>' +
    callout('⚠️', 'Southwest says that a bag over the limit, or more than one of each item, must be <strong>checked at the ticket counter before the gate</strong>.') +
    '<h2>🐶 Pets and partner airlines</h2>' +
    cl([['🐶', 'A pet carrier counts as your carry-on <strong>or</strong> your personal item, not both.'], ['🤝', 'On a partner airline the rules may differ. Size for the smaller bag.']]) +
    '<p>Checked bags have their own prices: <a href="/blog/southwest-baggage-fees-2026/">Southwest baggage fees</a> &middot; <a href="/airline/southwest/baggage-allowance/">baggage allowance</a>.</p>' +
    fig('southwest', 'Woman at the Southwest gate in St. Louis holding a small dog carrier under her arm with a boarding pass in her other hand', 'A pet carrier counts as the carry-on or the personal item, not both.', 2) + '<h2>❓ Quick answers</h2>' + faq([['Does Southwest charge for a carry-on?', 'The policy page allows one carry-on and one personal item and lists no carry-on fee.'], ['What size is the personal item?', 'The page lists examples (purse, laptop case, backpack) but no size in inches.']]) +
    CHK + SRC([['https://support.southwest.com/helpcenter/article/carryon-baggage-policy', 'Southwest &mdash; Carry-on and personal item policy']])
};

// ---------------- FRONTIER ----------------
pages['frontier'] = {
  title: 'Frontier Carry-On Size 2026: 24 x 16 x 10 in, 35 lb and Why It Is a Paid Bag | canitakethis.co',
  desc: 'Frontier carry-on bag is up to 24 x 16 x 10 inches and 35 lb, but it is a paid bag. The free personal item is 14 x 18 x 8 inches and is checked at boarding.',
  h1: 'Frontier Carry-On Size 2026: 24 x 16 x 10 in, 35 lb and Why It Is a Paid Bag',
  body: CSS + meta(3) +
    hero('frontier', 'Frontier Airlines gate agent at Denver airport measuring a traveler\'s backpack in the personal item sizer while the traveler watches', 'On Frontier the free bag is the personal item, and it gets measured.') +
    `<p>On Frontier only the <strong>personal item is free</strong>. The big carry-on is a paid bag.</p>` +
    stat([['14×18×8', 'inches (H × W × D), free personal item'], ['24×16×10', 'inches, paid carry-on'], ['35 lb', 'carry-on weight limit'], ['62 in / 40 lb', 'checked bag']]) +
    bagSvg({ h: 24, w: 16, d: 10, label: 'Carry-on (paid)', second: { h: 14, w: 18, d: 8, label: 'Personal (free)' }, alt: 'Frontier paid carry-on 24 by 16 by 10 inches and free personal item 14 by 18 by 8 inches drawn to scale', cap: 'Frontier: paid carry-on (24 x 16 x 10 in) and free personal item (14 high x 18 wide x 8 deep).' }) +
    T(['', 'Size', 'Weight', 'Cost'], [['🎒 Personal item', '14 × 18 × 8 in', 'not stated', 'Free'], ['🧳 Carry-on', '24 × 16 × 10 in', 'up to 35 lb', 'Paid or in a bundle'], ['📦 Checked bag', '62 linear in', 'up to 40 lb', 'Paid']]) +
    '<h2>📏 The personal item gets measured</h2>' +
    callout('⚠️', 'Frontier says personal item size is checked at boarding. An item over 14 × 18 × 8 inches is charged.') +
    fig('frontier', 'Woman at the Frontier gate in Orlando squeezing a pink tote bag into the personal item sizer', 'Handles, wheels and straps count toward the size.') +
    '<h2>🎁 Bundles that include the carry-on</h2>' +
    cl([['💺', '<strong>Economy:</strong> personal item and a carry-on'], ['🚀', '<strong>Premium:</strong> adds Board First'], ['💼', '<strong>Business:</strong> adds two 50 lb checked bags']]) +
    '<h2>⏱️ When you pay matters</h2>' +
    callout('💡', 'Frontier says to add the bag when you book for the best price, and that airport prices are higher. Exact amounts are in its Bag Price Checker, so no price is quoted here.') +
    '<h2>⚖️ Heavy checked bags</h2>' +
    cl([['⚠️', '41 to 50 lb: $75'], ['⚠️', '51 to 99 lb: $129 on tickets from April 4, 2026 ($100 before)'], ['❌', 'Over 100 lb: not accepted']]) +
    '<p>More: <a href="/airline/frontier/baggage-allowance/">Frontier baggage allowance</a>.</p>' +
    fig('frontier', 'Man at a Frontier kiosk in Las Vegas looking at a screen that shows the carry-on bag price options', 'Add the carry-on when you book: airport prices are higher.', 2) + '<h2>❓ Quick answers</h2>' + faq([['Is the Frontier carry-on free?', 'No, only the personal item is free.']]) +
    CHK + SRC([['https://www.flyfrontier.com/travel/travel-info/bag-options/', 'Frontier &mdash; Bag options'], ['https://faq.flyfrontier.com/help/bags-seats-general-info-what-are-the-sizes-and-weight-limits-for-bags', 'Frontier &mdash; Bag size limits']])
};

// helpers are shared with the pillar page (carryon_pillar.js); non-enumerable so the per-airline loop in build.js ignores them
Object.defineProperty(pages, '__helpers', { value: { CSS, T, SRC, CHK, stat, callout, cl, faq, meta, hero, fig, bagSvg }, enumerable: false });
// ---------------- UNITED ----------------
// Source: united.com "Carry-on bags" page, read 9 October 2026 (the page carries no date). Demand: Ahrefs ">10,000" for "united carry on size".
pages['united'] = {
  title: 'United Carry-On Size 2026: 22 x 14 x 9 in, Personal Item 17 x 10 x 9 in | canitakethis.co',
  desc: 'United carry-on size is 22 x 14 x 9 in, personal item 17 x 10 x 9 in. Most Basic Economy tickets get the personal item only; exceptions and gate-check rules.',
  h1: 'United Carry-On Size 2026: 22 x 14 x 9 in, Personal Item 17 x 10 x 9 in',
  body: CSS + meta(4) +
    hero('united', 'United gate agent at San Francisco Terminal 3 pointing to an easel sign that reads Basic Economy, personal item only, 17 x 10 x 9 in, while a man with a small grey backpack looks at it', 'Basic Economy: the personal item, 17 x 10 x 9 in, may be all you get.') +
    `<p>United&rsquo;s limits are <strong>22 &times; 14 &times; 9 inches</strong> for the carry-on and <strong>17 &times; 10 &times; 9 inches</strong> for the personal item. The catch: on most Basic Economy tickets you only get the personal item.</p>` +
    stat([['22×14×9', 'inches, carry-on bag'], ['17×10×9', 'inches, personal item'], ['Personal item', 'only, on most Basic Economy trips'], ['$75', 'Basic Economy bag at the gate, tickets from 3 April 2026']]) +
    bagSvg({ h: 22, w: 14, d: 9, label: 'Carry-on', second: { h: 17, w: 10, d: 9, label: 'Personal item' }, alt: 'United carry-on bag 22 by 14 by 9 inches next to the personal item 17 by 10 by 9 inches, drawn to scale', cap: 'United\'s carry-on (blue) and personal item (green) side by side, to scale.' }) +
    '<h2>📏 Both limits at a glance</h2>' +
    T(['', 'Where it goes', 'Inches', 'Centimetres'], [['🧳 Carry-on bag', 'Overhead bin', '22 × 14 × 9', '56 × 35 × 23'], ['🎒 Personal item', 'Under the seat in front of you', '17 × 10 × 9', '43 × 25 × 22']]) +
    '<p>United says to include the handle and wheels when you measure. Purses, backpacks and laptop bags are its examples of personal items. At the airport, United has bag sizers you can use to check a bag.</p>' +
    '<h2>🚫 Basic Economy: the personal item may be all you get</h2>' +
    callout('⚠️', '<strong>On most trips in Basic Economy you can bring one personal item and no carry-on bag.</strong> Every other bag has to be checked.') +
    cl([['✅', '<strong>Flights to South America, across the Atlantic or across the Pacific:</strong> a carry-on is allowed in Basic Economy.'], ['⭐', '<strong>Premier status, or travelling with a Premier member:</strong> one free carry-on bag.'], ['💳', '<strong>Primary cardholder of a qualifying MileagePlus credit card, or Star Alliance Gold:</strong> one free carry-on bag.'], ['❌', '<strong>The United Gateway and MileagePlus Select cards do not qualify</strong> for a free carry-on in Basic Economy.']]) +
    '<p>If you turn up with a carry-on you are not entitled to, it is a checked bag, and the fee depends on when you bought the ticket:</p>' +
    T(['Ticket bought', 'Prepaid online', 'At the lobby', 'At the gate'], [['Before 3 April 2026', 'from $35', 'from $40', 'from $65'], ['On or after 3 April 2026', 'from $45', 'from $50', 'from $75']]) +
    fig('united', 'Man at a United check-in kiosk at Washington Dulles, seen from behind, with the screen showing Basic Economy checked bag prices from $45 prepaid to from $75 at the gate', 'Basic Economy: check the bag rules before you reach the airport.') +
    '<h2>✈️ Gate-checks and United Express</h2>' +
    '<p>United may gate-check your carry-on if the overhead bins are full, if the bag is over the size limit, or if you have more than your allowance.</p>' +
    callout('⚠️', '<strong>CommutAir:</strong> only one personal item is allowed. <strong>Other United Express carriers</strong> allow carry-on bags but have limited space, which is why bags are most often gate-checked on those flights.') +
    '<p>On most United flights, a gate-checked bag comes back at baggage claim at your final destination. On United Express flights, you may get it at baggage claim or on the jet bridge after you land.</p>' +
    fig('united', 'United ground agent at Newark Terminal C tagging a silver carry-on at the jet bridge door of a United Express regional jet while the passenger watches', 'On United Express, the bag may be tagged at the door and returned on the jet bridge.', 2) +
    '<h2>👜 What rides free besides the two bags</h2>' +
    cl([['🧥', 'A jacket or coat.'], ['☂️', 'An umbrella and something to read.'], ['🛍️', 'Food or other items bought at the airport.'], ['♿', 'Mobility devices: wheelchairs, canes and crutches.'], ['👶', 'A car seat, child safety harness or stroller, and a diaper bag with a breast pump (even without your child).'], ['📷', 'A camera.']]) +
    '<p>Small purses and extra small bags are not allowed on top of your personal item and carry-on.</p>' +
    '<h2>🎒 Items with their own rules</h2>' +
    cl([['🔋', '<strong>Smart bags:</strong> the lithium batteries must be removed before the bag comes on board.'], ['🎻', '<strong>Musical instruments:</strong> a small instrument in a hard case counts as your carry-on in the overhead bin, or as your personal item under the seat.'], ['💊', '<strong>Medication, vapes, e-cigarettes and keys:</strong> pack them in your personal item, in case the carry-on is gate-checked. Medical syringes are allowed; ask a flight attendant to help you dispose of them.'], ['💧', '<strong>Liquids:</strong> containers up to 3.4 oz (100 mL), in a quart-size clear bag. <strong>Powders:</strong> TSA recommends checked bags, but United says up to 12 oz (350 mL) is allowed in a carry-on on domestic US flights.'], ['🪑', '<strong>Fragile or bulky items:</strong> if the item is too fragile or bulky to check, you can buy a ticket (a seat) for it.']]) +
    '<h2>⛔ Devices United does not allow on board</h2>' +
    '<p>United bans devices that attach to, block or interfere with seats, tray tables, windows, aisles or cabin access. Its examples: inflatable child beds, seat recline blockers, baby hammocks, non-medical attached foot or leg rests, non-medical travel pods, window-mounted drink holders, full-face helmets and tents.</p>' +
    '<p>Checked-bag details: <a href="/airline/united/baggage-allowance/">United baggage allowance</a> &middot; Other airlines: <a href="/blog/carry-on-size-limits-by-airline-2026/">carry-on size by airline</a>.</p>' +
    '<h2>❓ Quick answers</h2>' + faq([
      ['What size carry-on does United allow?', 'United\'s carry-on bag must fit in the overhead bin and be no larger than 9 x 14 x 22 inches (23 x 35 x 56 cm), including the handle and wheels.'],
      ['What is United\'s personal item size?', 'The personal item must fit under the seat in front of you and be no larger than 9 x 10 x 17 inches (22 x 25 x 43 cm). United gives purses, backpacks and laptop bags as examples.'],
      ['How strict is United about carry-on size?', 'United\'s page does not describe how strictly sizes are enforced. It says to check your bag against its size limits before the airport, that bag sizers are available at the airport, and that bags over the limit, or beyond your allowance, must be checked and may carry a fee. Bags can also be gate-checked when the overhead bins fill up.'],
      ['Can I bring a carry-on in United Basic Economy?', 'On most trips, no: you can bring one personal item only. A carry-on is allowed on flights to South America, across the Atlantic or across the Pacific, and for MileagePlus Premier members, people travelling with a Premier member, primary holders of a qualifying MileagePlus credit card and Star Alliance Gold members.'],
      ['Can I bring a carry-on on a United Express flight?', 'Most United Express carriers allow carry-on bags but have limited space, so gate-checks are common. On CommutAir flights only a personal item is allowed.']
    ]) +
    CHK + SRC([['https://www.united.com/en/us/fly/baggage/carry-on-bags.html', 'United &mdash; Carry-on bags']])
};

module.exports = pages;
