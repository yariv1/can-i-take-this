// Pillar: TSA PreCheck vs Global Entry vs CLEAR (2026). Data: tsa.gov, cbp.gov, clearme.com, checked October 2026.
// Prices are written as "checked October 2026"; recheck before changing. Numbers in dollars only (units.js ignores them).
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, CHK, stat, callout, cl, faq } = H;

const SLUG = 'tsa-precheck-vs-global-entry-vs-clear-2026';
const meta = `<div class="art-meta"><span class="tag tag-neutral">US Travel Programs</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Smiling woman in an olive field jacket beside the belt of a TSA PreCheck lane at Phoenix Sky Harbor Terminal 4, sneakers still on and her laptop left inside the open grey canvas tote, under the blue TSA PreCheck sign and its keep-shoes-on notice" width="800" height="400"><figcaption>TSA PreCheck: shoes, belt and light jacket stay on; laptop and liquids stay in the bag.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

// five-year cost at today's prices, drawn to scale (CLEAR+ $219 x 5 = $1,095)
const bars = (() => {
  const rows = [['TSA PreCheck', 85, '#2FCF9B', 'up to $85'], ['Global Entry', 120, '#4CC2FF', '$120'], ['CLEAR+', 1095, '#F5B841', '$1,095']];
  const W = 640, left = 130, maxW = 430, rowH = 46;
  const style = '<style>.bt{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:var(--text)}.bv{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:var(--text)}.bs{font-family:Inter,sans-serif;font-size:14px;fill:var(--muted)}.bk{fill:var(--surface-2)}</style>';
  let g = '';
  rows.forEach((r, i) => {
    const y = 14 + i * rowH, w = Math.max(6, Math.round(r[1] / 1095 * maxW));
    g += `<text class="bt" x="0" y="${y + 20}">${r[0]}</text><rect class="bk" x="${left}" y="${y}" width="${maxW}" height="28" rx="6"/><rect x="${left}" y="${y}" width="${w}" height="28" rx="6" fill="${r[2]}"/><text class="bv" x="${left + w + 10 > left + maxW - 80 ? left + maxW - 78 : left + w + 10}" y="${y + 20}" ${left + w + 10 > left + maxW - 80 ? 'style="fill:#08111f"' : ''}>${r[3]}</text>`;
  });
  const H2 = 14 + rows.length * rowH + 8;
  return `<figure class="cox-dia"><svg viewBox="0 0 ${W} ${H2}" width="${W}" role="img" aria-label="Five-year cost at today's prices: TSA PreCheck up to 85 dollars, Global Entry 120 dollars, CLEAR Plus 1,095 dollars" xmlns="http://www.w3.org/2000/svg">${style}${g}</svg><figcaption>Five years of each program at today&rsquo;s prices, drawn to scale. CLEAR+ is billed every year: $219 &times; 5.</figcaption></figure>`;
})();

const TABLE = T(
  ['Program', '⚡ What it does', '💲 Cost', '⏳ Lasts', '🛂 Includes PreCheck?', '👤 Who can apply'],
  [
    ['🟢 TSA PreCheck', 'A faster US security lane: electronics, 3-1-1 liquids, belt, light jacket and shoes stay on or in your bag.', '$79.75 to $85 (depends on the enrollment provider)', '5 years', '&mdash;', 'U.S. citizens, U.S. nationals and lawful permanent residents'],
    ['🔵 Global Entry', 'Expedited US customs when you land from abroad, <strong>plus</strong> TSA PreCheck.', '$120', '5 years', '✅ Yes', 'U.S. citizens, lawful permanent residents and citizens of some partner countries'],
    ['🟡 CLEAR+', 'A separate lane that checks your face and boarding pass instead of your ID. You still go through bag screening.', '$219 a year; add up to 3 adults for $125 each', '1 year, renews yearly', '❌ No, it is used with PreCheck', 'Anyone who enrolls and verifies identity']
  ]
);

const body = CSS + meta + hero +
  '<p>These three are often compared, but they do different jobs. <strong>PreCheck</strong> speeds up US security. <strong>Global Entry</strong> does that and also speeds up US customs when you return. <strong>CLEAR+</strong> only speeds up the ID check and works as an add-on.</p>' +
  callout('💡', '<strong>The short answer.</strong> Flying only within the US: PreCheck. Flying abroad even once in five years: Global Entry, which already includes PreCheck for $120. Fly often through big hubs and want the shortest line: add CLEAR+.') +
  stat([
    ['$79.75–$85', 'five years of TSA PreCheck, depending on the provider'],
    ['$120', 'five years of Global Entry, PreCheck included'],
    ['$219', 'per year for CLEAR+ (CLEAR&rsquo;s price)'],
    ['62', 'US airports with CLEAR+ lanes, per CLEAR']
  ]) +
  '<h2>⚖️ The three programs side by side</h2>' +
  TABLE +
  '<h2>💰 What five years really costs</h2>' +
  bars +
  '<p>Global Entry costs $35 to $40 more than PreCheck alone for the same five years and adds customs. CLEAR+ is a yearly subscription, so it costs far more over time and does not replace PreCheck.</p>' +
  fig(1, 'Man with glasses in a navy blazer holding his passport toward the reader of a blue Global Entry kiosk with a green fingerprint scanner, in the Miami International Airport arrivals hall', 'Global Entry adds a customs kiosk on the way home, for $35 to $40 more than PreCheck.') +
  '<h2>🎯 Which one should you get?</h2>' +
  cl([
    ['🏠', '<strong>Domestic flights only:</strong> TSA PreCheck. It is the cheapest way to a faster security line.'],
    ['🌍', '<strong>Any trip abroad in the next five years:</strong> Global Entry. It includes PreCheck, so you do not need both.'],
    ['🏙️', '<strong>Fly often through big hubs and want the fastest line:</strong> add CLEAR+ on top of PreCheck or Global Entry. CLEAR says its members save about 4 hours a year on average.'],
    ['👨‍👩‍👧', '<strong>Traveling with kids:</strong> children 17 and under can use the PreCheck lane with you for free. Minors are free on Global Entry if a parent is in or applying for it. Kids 17 and under join you in the CLEAR+ lane free.']
  ]) +
  '<h2>📝 How to get each one</h2>' +
  '<h3>🟢 TSA PreCheck</h3>' +
  cl([
    ['1', 'Apply online with one of three providers. TSA says it takes as little as 5 minutes.'],
    ['2', 'Go to an in-person appointment of about 10 minutes for document check, fingerprints, photo and payment.'],
    ['3', 'After approval, add your Known Traveler Number (KTN) to each airline reservation so PreCheck shows on your boarding pass.']
  ]) +
  T(['Provider', 'New five-year enrollment'], [['IDEMIA', '$79.75'], ['CLEAR', '$84.95'], ['Telos', '$85.00']]) +
  '<h3>🔵 Global Entry</h3>' +
  cl([
    ['1', 'Submit and pay the $120 application online. The fee is non-refundable, even if you are denied.'],
    ['2', 'Wait for the background check. CBP says most applications are reviewed within 2 weeks, and some take 12 months or longer.'],
    ['3', 'First-timers need an in-person interview. You can also do it through Enrollment on Arrival at airports, once you have conditional approval and are arriving from abroad.'],
    ['4', 'Use your membership. At Global Entry kiosks you scan your passport or permanent resident card, not the Global Entry card.']
  ]) +
  '<h3>🟡 CLEAR+</h3>' +
  cl([
    ['1', 'Enroll online and pay the yearly fee.'],
    ['2', 'At the airport, scan your boarding pass and verify with your face at a CLEAR pod or eGate.'],
    ['3', 'Head to bag screening. CLEAR says it can also be used together with TSA PreCheck.']
  ]) +
  fig(2, 'Woman in a plum vest facing a CLEAR eGate whose screen shows a green check, while a bearded CLEAR ambassador in a black branded polo gestures toward the gate beside a CLEAR+ Lane sign at San Jose airport', 'CLEAR+ checks your face at a pod or eGate. You still go to bag screening.') +
  '<h2>⚠️ Things people get wrong</h2>' +
  cl([
    ['❌', 'Buying PreCheck <strong>and</strong> Global Entry. Global Entry members are already eligible for PreCheck benefits.'],
    ['❌', 'Forgetting the KTN. Without it on the booking, the PreCheck indicator will not appear on your boarding pass.'],
    ['❌', 'Expecting CLEAR+ to skip security. It skips the ID check, not bag screening.'],
    ['✅', 'In PreCheck lanes the 3-1-1 liquids can stay in your bag; elsewhere the rules still apply: <a href="/guides/liquids/">liquids rules</a>.']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Does Global Entry include TSA PreCheck?', 'Yes. CBP lists TSA PreCheck access as a Global Entry benefit.'],
    ['Is CLEAR+ worth it if I already have PreCheck?', 'It depends on how often you fly through an airport that has CLEAR+ lanes. It is a yearly add-on, not a replacement, and it only speeds up the ID check.'],
    ['How long do the memberships last?', 'PreCheck and Global Entry last five years. CLEAR+ is billed yearly.'],
    ['Do children need their own membership?', 'Not to use the lanes with you: PreCheck and CLEAR+ allow children 17 and under. Global Entry minors are free when a parent is a member or applying.'],
    ['Can I get a refund if Global Entry is denied?', 'No. CBP says the fees are non-refundable.']
  ]) +
  CHK +
  SRC([
    ['https://www.tsa.gov/precheck', 'TSA &mdash; TSA PreCheck'],
    ['https://www.tsa.gov/precheck/renew', 'TSA &mdash; PreCheck renewals and providers'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry', 'CBP &mdash; Global Entry'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/eligibility', 'CBP &mdash; Global Entry eligibility'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/frequently-asked-questions', 'CBP &mdash; Trusted Traveler FAQ'],
    ['https://www.clearme.com/clear-plus', 'CLEAR &mdash; CLEAR+']
  ]);

module.exports = {
  slug: SLUG,
  title: 'TSA PreCheck vs Global Entry vs CLEAR (2026): Cost, Speed and Which to Get | canitakethis.co',
  desc: 'TSA PreCheck costs $79.75 to $85, Global Entry $120 (PreCheck included), CLEAR+ $219 a year. What each does, who can apply and which one to get.',
  h1: 'TSA PreCheck vs Global Entry vs CLEAR (2026): Cost, Speed and Which to Get',
  body
};
