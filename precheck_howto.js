// Article 2 of the TSA cluster: TSA PreCheck cost, how to apply, how to renew (2026).
// Data: tsa.gov (precheck, renew, faq, required-identification, military/spouse, touchless-id), checked October 2026.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, CHK, stat, callout, cl, faq } = H;

const SLUG = 'tsa-precheck-cost-how-to-apply-2026';
const meta = `<div class="art-meta"><span class="tag tag-neutral">US Travel Programs</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Man in a camel coat holding up a phone with a mobile boarding pass showing the TSA PreCheck indicator to a TSA officer at the travel document checker at Raleigh-Durham airport" width="800" height="400"><figcaption>Add your KTN to every booking so PreCheck shows on your boarding pass.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;
const timeline = (head, items) => `<div class="timeline"><div class="tl-head">${head}</div>${items.map(i => `<div class="tl-item"><div class="tl-icon">${i[0]}</div><div class="tl-body"><span class="tl-when">${i[1]}</span>${i[2]}</div></div>`).join('')}</div>`;

const PRICES = T(
  ['Provider', '🆕 New, 5 years', '🔄 Renew online', '🏢 Renew in person', '📍 Locations'],
  [
    ['IDEMIA', '<strong>$79.75</strong>', '<strong>$58.75</strong>', '$66.75', '529'],
    ['CLEAR', '$84.95', '$72.95', '$84.95', '348'],
    ['Telos', '$85.00', '$69.95', '<strong>$58.75</strong>', '512']
  ]
);

const body = CSS + meta + hero +
  '<p>TSA PreCheck costs between <strong>$79.75 and $85</strong> for five years, depending on which of three providers you use. You apply online, finish in person, wait a few days, then add one number to your bookings. This page has the prices, the documents and the steps, all from tsa.gov.</p>' +
  callout('💡', '<strong>In one line:</strong> new members pay $79.75 to $85, renewals run $58.75 to $84.95, and most people get their Known Traveler Number (KTN) in 3 to 5 days.') +
  stat([
    ['$79.75–$85', 'new five-year membership, by provider'],
    ['$58.75', 'the lowest renewal price (IDEMIA online, Telos in person)'],
    ['3–5 days', 'usual wait for your KTN; some take up to 60'],
    ['1,300+', 'enrollment locations across the three providers']
  ]) +
  '<h2>💲 What it costs, by provider</h2>' +
  PRICES +
  '<p>Lowest price in each column is bold. CLEAR renewals are free if you join CLEAR+, with terms. The provider changes the price you pay; the membership is TSA PreCheck either way.</p>' +
  '<h2>🧾 Who can apply and what to bring</h2>' +
  cl([
    ['🇺🇸', '<strong>Who:</strong> U.S. citizens, U.S. nationals and lawful permanent residents. Applicants can be ineligible for incomplete or false information or disqualifying offenses.'],
    ['📘', '<strong>One document is enough</strong> if it is on TSA&rsquo;s List A: an unexpired U.S. passport (book or card), a permanent resident card, an enhanced driver&rsquo;s license or ID, a FAST card, or an enhanced tribal card.'],
    ['🪪', '<strong>No List A document?</strong> Bring two: a valid photo ID (a REAL ID driver&rsquo;s license or state ID, a U.S. military ID, a tribal photo document, a TWIC or Merchant Mariner Credential) <strong>and</strong> proof of citizenship (a U.S. birth certificate, a certificate of citizenship or naturalization, or a U.S. passport that expired within 12 months).'],
    ['✍️', '<strong>Names must match exactly.</strong> If you changed your name, bring the original or certified name-change document, such as a marriage certificate or divorce decree.']
  ]) +
  fig(1, 'Woman with a grey-streaked braid handing a U.S. passport to an enrollment agent at a TSA PreCheck enrollment desk, with a driver license and a certified marriage certificate on the counter', 'Bring one List A document, such as a passport, or a photo ID plus proof of citizenship.') +
  '<h2>📝 How to apply, step by step</h2>' +
  timeline('From application to your first PreCheck flight', [
    ['💻', 'Step 1 &middot; about 5 minutes', 'Start your application online with one of the three providers: CLEAR, IDEMIA or Telos.'],
    ['🏢', 'Step 2 &middot; about 10 minutes', 'Go to an in-person appointment for the document check, fingerprints, photo and payment. There are no refunds once enrollment is complete.'],
    ['⏳', 'Step 3 &middot; 3 to 5 days, up to 60', 'Wait for approval. TSA recommends applying at least 60 days before you travel.'],
    ['🔢', 'Step 4 &middot; on approval', 'You receive your Known Traveler Number (KTN).'],
    ['🎫', 'Step 5 &middot; every booking', 'Add the KTN to each airline reservation so TSA PreCheck shows on your boarding pass.']
  ]) +
  '<h2>🔄 How to renew</h2>' +
  callout('⏰', '<strong>Renew up to 6 months before your membership ends.</strong> The new five years start when the old ones end, so renewing early costs you nothing. TSA recommends renewing at least 60 days before expiry to avoid a gap.') +
  '<p>Renew online at tsa.gov/precheck/renew and pick your provider. Online is the cheaper route at IDEMIA and CLEAR; at Telos the in-person price is lower, as the table above shows.</p>' +
  fig(2, 'Woman with long dark layered hair seen from behind, renewing TSA PreCheck on a laptop whose screen reads Renew TSA PreCheck, in a gate area at Columbus airport with a regional jet outside the window', 'Renew online up to six months before it expires.') +
  '<h2>💰 Ways to pay less</h2>' +
  cl([
    ['🎖️', '<strong>Military spouses get $25 off</strong> enrollment or renewal with an unexpired Department of Defense or Uniformed Services photo ID that lists the relationship as Spouse. How you claim it depends on the provider.'],
    ['💳', '<strong>Some credit cards rebate the fee.</strong> TSA mentions participating cards but lists no amounts, so check your card&rsquo;s terms.'],
    ['🌍', '<strong>Global Entry includes PreCheck.</strong> If you also fly abroad, $120 for five years covers both: <a href="/blog/tsa-precheck-vs-global-entry-vs-clear-2026/">PreCheck vs Global Entry vs CLEAR</a>.']
  ]) +
  '<h2>👨‍👩‍👧 Kids and Touchless ID</h2>' +
  cl([
    ['🧒', 'Children 17 and under can join an adult in the PreCheck lane for free. Children 12 and under do not need their own KTN when traveling with an enrolled adult; ages 13 to 17 need the PreCheck indicator on their own boarding pass.'],
    ['🙂', '<strong>Touchless ID is free for members.</strong> Opt in through your airline profile with your KTN and passport details. It is offered by American, Alaska, Delta, Hawaiian, Southwest and United at 65 airports.']
  ]) +
  '<h2>⚠️ Things people get wrong</h2>' +
  cl([
    ['❌', 'Waiting too long. Most people get the KTN in 3 to 5 days, but some wait up to 60.'],
    ['❌', 'Leaving the KTN off the booking. Without it, PreCheck will not show on your boarding pass.'],
    ['❌', 'Documents that do not match the application name.'],
    ['✅', 'Lost your KTN or want your expiry date? TSA has a <a href="https://tsaenrollmentbyidemia.tsa.dhs.gov/ktn-lookup" rel="noopener noreferrer">KTN lookup tool</a>.']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['How much does TSA PreCheck cost?', 'A new five-year membership costs $79.75 with IDEMIA, $84.95 with CLEAR and $85.00 with Telos.'],
    ['How long does TSA PreCheck take?', 'Most applicants get their KTN in 3 to 5 days. Some applications take up to 60 days.'],
    ['How often do I renew?', 'Every five years. You can renew online up to six months before it expires.'],
    ['Can I get a refund if I change my mind?', 'No. TSA says there are no refunds once in-person enrollment is complete and payment is taken.'],
    ['Do I need my own KTN for my kid?', 'Not for ages 12 and under traveling with an enrolled adult. Ages 13 to 17 need the PreCheck indicator on their boarding pass.']
  ]) +
  CHK +
  SRC([
    ['https://www.tsa.gov/precheck', 'TSA &mdash; TSA PreCheck'],
    ['https://www.tsa.gov/precheck/renew', 'TSA &mdash; Renewals and fees by provider'],
    ['https://www.tsa.gov/precheck/faq', 'TSA &mdash; PreCheck FAQ'],
    ['https://www.tsa.gov/precheck/required-identification', 'TSA &mdash; Required documents'],
    ['https://www.tsa.gov/precheck/military/spouse', 'TSA &mdash; Military spouse discount'],
    ['https://www.tsa.gov/precheck/touchless-id', 'TSA &mdash; Touchless ID']
  ]);

module.exports = {
  slug: SLUG,
  title: 'TSA PreCheck Cost and How to Apply (2026): Fees by Provider, Steps and Renewal | canitakethis.co',
  desc: 'TSA PreCheck costs $79.75 to $85 for five years. Fees by provider, documents to bring, the steps from application to KTN, and how to renew.',
  h1: 'TSA PreCheck Cost and How to Apply (2026): Fees by Provider, Steps and Renewal',
  body
};
