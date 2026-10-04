// Article 4 of the TSA cluster: CLEAR vs TSA PreCheck (2026).
// Data: clearme.com (clear-plus, member-terms, support FAQs), tsa.gov (precheck, precheck/renew), checked October 2026.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, CHK, stat, callout, cl, faq } = H;

const SLUG = 'clear-vs-tsa-precheck-2026';
const meta = `<div class="art-meta"><span class="tag tag-neutral">US Travel Programs</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="CLEAR ambassador in a blue-and-white gingham shirt helping a traveler at a CLEAR pod at the Indianapolis airport checkpoint while a separate TSA PreCheck lane with a blue sign runs beside it" width="800" height="400"><figcaption>CLEAR checks who you are. PreCheck changes how you are screened.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const LANE_CSS = '<style>.lw{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin:1em 0 1.6em}.lw-c{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px;display:flex;flex-direction:column;position:relative}.lw-c h3{margin:0 0 8px;font-size:1.05rem}.lw-c ol{margin:0;padding-left:1.2em}.lw-c li{margin:4px 0;font-size:.95rem}.lw-pill{position:absolute;left:50%;bottom:-15px;transform:translateX(-50%);padding:3px 14px;border:1px solid var(--accent);border-radius:999px;background:var(--surface);color:var(--accent);font-size:.85rem;font-weight:700;line-height:1.4;white-space:nowrap}.lw-tag{display:block;font-size:.85rem;color:var(--muted);margin-top:auto;padding-top:10px}</style>';
const LANES = LANE_CSS + '<div class="lw">' +
  '<div class="lw-c"><h3>🛡️ PreCheck only</h3><ol><li>Show your ID and boarding pass at the travel document checker.</li><li>Walk through the PreCheck lane.</li><li>Leave electronics and 3-1-1 liquids in your bag, and keep belt, light jacket and shoes on.</li></ol><span class="lw-tag">Speeds up the screening</span></div>' +
  '<div class="lw-c"><h3>👁️ CLEAR+ only</h3><ol><li>Scan your boarding pass at the CLEAR+ lane.</li><li>Verify your face at a CLEAR pod or eGate.</li><li>Go to bag screening. This is the regular screening, so shoes, laptops and liquids still come out unless you also have PreCheck.</li></ol><span class="lw-tag">Speeds up the ID check</span></div>' +
  '<div class="lw-c"><h3>⚡ Both together</h3><ol><li>Scan your boarding pass at the CLEAR+ lane.</li><li>Verify at the pod or eGate.</li><li>Go to bag screening in the PreCheck way.</li></ol><span class="lw-tag">CLEAR calls this the fastest way to your gate</span><span class="lw-pill">Fastest</span></div>' +
  '</div>';

const COST = (() => {
  const st = '<style>.bt{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:var(--text)}.bs{font-family:Inter,sans-serif;font-size:14px;fill:var(--muted)}.bk{fill:var(--surface-2)}</style>';
  const rows = [
    ['TSA PreCheck', 15.95, '$15.95 a year', 'var(--muted)'],
    ['CLEAR+, 1 adult', 219, '$219 a year', 'var(--accent)'],
    ['CLEAR+, 2 adults', 344, '$344 a year', 'var(--accent)']
  ];
  const X0 = 20, W = 480, MAX = 344, BAR = 24, GAP = 58;
  let g = '';
  rows.forEach((r, i) => {
    const y = 14 + i * GAP;
    const w = Math.max(6, Math.round(W * r[1] / MAX));
    g += `<text class="bt" x="${X0}" y="${y + 2}">${r[0]}</text><rect class="bk" x="${X0}" y="${y + 10}" width="${W}" height="${BAR}" rx="6"/><rect x="${X0}" y="${y + 10}" width="${w}" height="${BAR}" rx="6" fill="${r[3]}"/>`;
    g += r[1] > 100 ? `<text class="bt" x="${X0 + w - 8}" y="${y + 28}" text-anchor="end" style="fill:#fff">${r[2]}</text>` : `<text class="bt" x="${X0 + w + 8}" y="${y + 28}">${r[2]}</text>`;
  });
  return `<figure class="cox-dia"><svg viewBox="0 0 520 190" width="520" role="img" aria-label="Yearly cost to scale: TSA PreCheck 15 dollars 95 cents a year, CLEAR Plus 219 dollars a year for one adult, 344 dollars a year for two adults" xmlns="http://www.w3.org/2000/svg">${st}${g}</svg><figcaption>Cost per year, drawn to scale. PreCheck is $79.75 for five years (IDEMIA new price) divided by 5. CLEAR+ second adult adds $125.</figcaption></figure>`;
})();

const TRIPS = T(
  ['Round trips a year', '🧮 CLEAR+ cost per round trip'],
  [
    ['4', '$54.75'],
    ['10', '$21.90'],
    ['20', '$10.95'],
    ['40', '$5.48']
  ]
);

const body = CSS + meta + hero +
  '<p>CLEAR and TSA PreCheck are different things. <strong>PreCheck</strong> changes how you are screened. <strong>CLEAR+</strong> speeds up checking who you are. CLEAR+ costs <strong>$219 a year</strong>, PreCheck is about $16 a year over its five years, and many people pair them. This page shows what each does, what the add-on really costs and who should skip it.</p>' +
  callout('💡', '<strong>In one line:</strong> if you can only get one, TSA PreCheck covers the screening for a fraction of the price. CLEAR+ is an add-on that only helps at airports where CLEAR operates.') +
  stat([
    ['$219', 'a year for CLEAR+, one adult'],
    ['62', 'airports with CLEAR+ lanes (150+ lanes)'],
    ['$125', 'for each extra adult, up to 3, kids free'],
    ['99%', 'of PreCheck passengers wait under 10 minutes, per TSA']
  ]) +
  '<h2>🛤️ What each one does at the checkpoint</h2>' +
  LANES +
  '<p>CLEAR+ members do not need PreCheck or Global Entry to use CLEAR, and CLEAR&rsquo;s own FAQ describes the two as separate services that speed up different parts of the checkpoint.</p>' +
  fig(1, 'Woman at a CLEAR eGate at the Kansas City airport looking at its camera for face verification after scanning her phone boarding pass, with a blue TSA PreCheck sign over a lane behind her', 'At a CLEAR eGate you scan your boarding pass and verify with your face, then go to bag screening.') +
  '<h2>💲 What it costs</h2>' +
  COST +
  '<p>Per year, adding CLEAR+ costs about 14 times what PreCheck does. A second adult adds $125 a year, and children 17 and under are free.</p>' +
  '<h3 class="cox-q">Cost per trip at $219 a year</h3>' +
  TRIPS +
  '<p>This is our arithmetic on the $219 price, not a CLEAR figure. CLEAR also claims members save about 4 hours a year; that is CLEAR&rsquo;s own number, so treat it as marketing. The table shows how many trips you need before the price per trip is small.</p>' +
  '<h2>🔁 The bundle: PreCheck and CLEAR+ together</h2>' +
  cl([
    ['🆓', 'TSA lists CLEAR as one of three PreCheck enrollment providers and says you can <strong>get TSA PreCheck free when you join CLEAR+</strong> (terms apply).'],
    ['🔄', '<strong>Renewing PreCheck through CLEAR?</strong> After you finish the online renewal, CLEAR issues a one-time code to join CLEAR+ for <strong>$146</strong>, which is the CLEAR+ price minus the PreCheck cost. CLEAR&rsquo;s own PreCheck prices are $72.95 to renew online and $84.95 in person or for a new member.'],
    ['⚖️', 'Compare with the other two providers in <a href="/blog/tsa-precheck-cost-how-to-apply-2026/">TSA PreCheck cost and how to apply</a> before you choose CLEAR for PreCheck.']
  ]) +
  '<h2>🧭 Who should add CLEAR+</h2>' +
  cl([
    ['✅', '<strong>Worth a look:</strong> you fly often from an airport that has CLEAR lanes, you already have PreCheck, and the price per trip in the table above feels small to you.'],
    ['✅', '<strong>Worth a look:</strong> two adults who travel together often. The second adult is $125 instead of $219, and children are free.'],
    ['⛔', '<strong>Probably skip:</strong> you fly a few times a year, or mostly from airports without CLEAR lanes. Check CLEAR&rsquo;s own &ldquo;Where to use CLEAR&rdquo; list for your home airport first.'],
    ['⛔', '<strong>Not a substitute:</strong> CLEAR+ does not replace PreCheck. Without PreCheck you still go through regular bag screening.']
  ]) +
  fig(2, 'Man showing his driver license to a CLEAR ambassador at a CLEAR enrollment pod in Terminal B at John Wayne airport in Orange County, with a stand-up sign about enrolling without an appointment', 'You can enroll at a CLEAR enrollment center at the airport with no appointment, or online.') +
  '<h2>📝 Signing up and the fine print</h2>' +
  cl([
    ['🪪', '<strong>You must be 18 or older</strong> with a valid government photo ID: a REAL ID-compliant driver&rsquo;s license or state ID, or a U.S. passport. Citizens of some other countries can join with a passport.'],
    ['🏢', '<strong>Enroll at an airport enrollment center</strong> with no appointment, or start online.'],
    ['🔁', '<strong>It renews automatically</strong> for the period you signed up for. You can cancel anytime, by account, email or phone.'],
    ['💵', '<strong>Refund window:</strong> a full refund if you cancel within 14 days of being charged. After 14 days you keep access through the end of the term but get no refund.'],
    ['👨‍👩‍👧', '<strong>Family plan:</strong> the primary member controls renewals; family members must be 18 or older. If the primary member stops paying, the whole family loses paid access.']
  ]) +
  '<h2>⚠️ Things people get wrong</h2>' +
  cl([
    ['❌', 'Thinking CLEAR+ lets you skip security. It speeds up the ID check; you still get screened.'],
    ['❌', 'Buying CLEAR+ before checking your own airport has CLEAR lanes.'],
    ['❌', 'Forgetting that CLEAR+ auto-renews. Set a reminder before the 14-day refund window closes.'],
    ['❌', 'Believing the older numbers you see on blogs. Third-party sites quote different airport counts and a $209 price; CLEAR&rsquo;s own page says 62 airports and $219.']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Is CLEAR the same as TSA PreCheck?', 'No. PreCheck is a TSA program that changes how you are screened. CLEAR is a separate paid service that speeds up the identity check, and also one of three PreCheck enrollment providers.'],
    ['Do I need PreCheck to use CLEAR?', 'No. CLEAR+ members do not need PreCheck or Global Entry, but without PreCheck you still go through regular bag screening.'],
    ['How much is CLEAR+?', '$219 a year for one adult. Each added adult is $125, up to 3, and children 17 and under are free.'],
    ['Can I get a refund?', 'Yes, in full if you cancel within 14 days of being charged. After that you keep access until the term ends with no refund.'],
    ['Is CLEAR worth it?', 'It depends on how often you fly from an airport with CLEAR lanes. The cost-per-trip table shows the price per trip at 4, 10, 20 and 40 trips a year.'],
    ['Does CLEAR work at every airport?', 'No. CLEAR lists over 150 lanes across 62 airports. Check its Where to use CLEAR page for yours.']
  ]) +
  CHK +
  SRC([
    ['https://www.clearme.com/clear-plus', 'CLEAR &mdash; CLEAR+'],
    ['https://www.clearme.com/member-terms', 'CLEAR &mdash; Membership terms'],
    ['https://www.clearme.com/support/how-is-clear-plus-different-from-tsa-precheck-or-global-entry', 'CLEAR &mdash; How CLEAR+ differs from PreCheck'],
    ['https://www.clearme.com/support/do-i-need-to-be-a-clear-member-to-use-clear-egates', 'CLEAR &mdash; eGates'],
    ['https://www.tsa.gov/precheck', 'TSA &mdash; TSA PreCheck'],
    ['https://www.tsa.gov/precheck/renew', 'TSA &mdash; Renewals and CLEAR offer']
  ]);

module.exports = {
  slug: SLUG,
  title: 'CLEAR vs TSA PreCheck (2026): What Each Does and Is CLEAR+ Worth It | canitakethis.co',
  desc: 'CLEAR+ costs $219 a year, TSA PreCheck about $16 a year. What each does at the checkpoint, the cost per trip, the bundle and who should skip CLEAR.',
  h1: 'CLEAR vs TSA PreCheck (2026): What Each Does and Is CLEAR+ Worth It',
  body
};
