// Article 7 of the travel series (second Entry Permits article): UK ETA for US citizens (2026).
// Data: gov.uk (gov.uk/eta, /eta/apply, /guidance/using-the-uk-eta-app, enforcement news 25 Feb 2026), Home Office ETA factsheet April 2026, checked October 2026.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;

const SLUG = 'uk-eta-for-us-citizens-2026';
const meta = `<div class="art-meta"><span class="tag tag-neutral">Entry Permits</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Woman at a British Airways check-in desk holding a phone with an approval email while the agent checks her U.S. passport, with a small sign on the desk reading UK ETA required" width="800" height="400"><figcaption>Americans flying to the UK now need an ETA before they board.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const CSS2 = '<style>.ue-who{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));margin:1em 0}.ue-box{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px}.ue-box h3{margin:0 0 8px;font-size:1.05rem}.ue-box ul{margin:0;padding-left:1.1em}.ue-box li{margin:5px 0;font-size:.95rem}.ue-fee{display:flex;align-items:center;gap:14px;border:1px solid var(--accent);border-radius:14px;background:var(--surface);padding:14px;margin:1em 0;flex-wrap:wrap}.ue-fee b{font-size:2rem;color:var(--accent);line-height:1}.ue-fee span{font-size:.95rem;flex:1;min-width:200px}.ue-bars{margin:1em 0;display:grid;gap:10px}.ue-bar{border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:10px 12px}.ue-bar p{margin:0 0 6px;font-size:.95rem}.ue-track{height:10px;border-radius:999px;background:var(--line);overflow:hidden}.ue-fill{height:100%;border-radius:999px;background:var(--muted)}.ue-tl{list-style:none;margin:1em 0;padding:0;border-left:3px solid var(--line)}.ue-tl li{position:relative;margin:0 0 14px;padding:0 0 0 18px}.ue-tl li:before{content:"";position:absolute;left:-9px;top:5px;width:15px;height:15px;border-radius:50%;background:var(--accent);border:3px solid var(--bg)}.ue-tl b{display:block;font-size:1.02rem}.ue-tl span{font-size:.95rem;color:var(--muted)}.ue-tl li.ue-end:before{background:var(--surface);border-color:var(--accent)}</style>';

const WHO = CSS2 + '<div class="ue-who">' +
  '<div class="ue-box"><h3>You need an ETA if you are:</h3><ul>' +
  '<li>A US citizen visiting for tourism, family or certain other short-stay reasons</li>' +
  '<li>A passport holder from one of the 85 non-visa nationalities, such as Americans, Canadians or French citizens</li>' +
  '<li>A child: every traveler needs their own ETA</li></ul></div>' +
  '<div class="ue-box"><h3>You do not need an ETA if you are:</h3><ul>' +
  '<li>A British or Irish citizen, including a dual citizen</li>' +
  '<li>Someone with permission to live, work or study in the UK</li>' +
  '<li>Someone traveling on a UK visa or eVisa instead</li>' +
  '<li>In some cases, a resident of Ireland (listed on gov.uk)</li></ul></div>' +
  '</div>';

const FEE = '<div class="ue-fee"><b>£20</b><span>per person, paid online or in the app. It is not refunded after you apply, even if you are refused.</span></div>';

const BARS = '<div class="ue-bars">' +
  '<div class="ue-bar"><p><strong>Passport valid 5+ more years:</strong> your ETA lasts <strong>2 years</strong></p><div class="ue-track"><div class="ue-fill" style="width:100%"></div></div></div>' +
  '<div class="ue-bar"><p><strong>Passport expires in 1 year:</strong> your ETA ends in <strong>1 year</strong>, with the passport</p><div class="ue-track"><div class="ue-fill" style="width:50%"></div></div></div>' +
  '</div>';

const FLOW = '<ol class="ue-tl">' +
  '<li><b>Apply</b><span>In the UK ETA app or at gov.uk/eta/apply, with the passport you will travel on.</span></li>' +
  '<li><b>Pay £20</b><span>By card, or with Apple Pay or Google Pay.</span></li>' +
  '<li><b>Wait for the decision</b><span>Usually within a day, up to 3 working days.</span></li>' +
  '<li><b>Get your email</b><span>It carries a 16-digit ETA reference linked to your passport. You do not print anything.</span></li>' +
  '<li class="ue-end"><b>Fly with the passport</b><span>The airline checks the ETA before you board.</span></li>' +
  '</ol>';

const body = CSS + meta + hero +
  '<p><strong>Yes: US citizens need a UK ETA to visit the United Kingdom.</strong> It costs <strong>£20</strong>, is valid for <strong>2 years</strong> (or until your passport expires, whichever is sooner), and the decision usually comes within a day. Airlines have refused boarding without one since 25 February 2026.</p>' +
  callout('💡', '<strong>In one line:</strong> apply in the official UK ETA app or at gov.uk/eta/apply, pay £20, and fly on the same passport you applied with.') +
  stat([
    ['£20', 'fee per person'],
    ['2 years', 'validity, or until the passport expires'],
    ['3 days', 'working days at most for a decision'],
    ['6 months', 'longest stay per visit']
  ]) +
  '<h2>🙋 Do Americans need a UK ETA?</h2>' +
  '<p>Since 25 February 2026, travelers who do not need a visa for short UK visits (the Home Office calls them non-visa nationals) cannot enter without an ETA. Airlines will prevent you from boarding without an ETA, an eVisa or another valid document. Americans are in that group.</p>' +
  WHO +
  fig(1, 'Young woman hugging her grandmother in an airport arrivals hall while the grandmother holds a handwritten cardboard sign reading Welcome Maya, stay up to 6 months', 'Visiting family is one of the reasons an ETA covers, for up to 6 months.') +
  '<p>One ETA covers the UK, Jersey, Guernsey and the Isle of Man. It allows stays of up to 6 months for tourism, visiting family and certain other reasons.</p>' +
  '<h2>💷 What the UK ETA costs</h2>' +
  FEE +
  '<p>gov.uk and the Home Office&rsquo;s April 2026 factsheet both say £20. An earlier gov.uk news item still showed £16, so check the price on the application page before you pay.</p>' +
  '<h2>⏳ How long it lasts</h2>' +
  '<p>An ETA is valid for <strong>2 years or until your passport expires, whichever is sooner</strong>, and covers multiple trips. The bars show why a passport near expiry shortens it.</p>' +
  BARS +
  '<p>It is linked to the passport you applied with. A new passport means a new ETA.</p>' +
  '<h2>📱 App or website?</h2>' +
  '<p>Both are official and cost the same. Pick by what you have in your pocket.</p>' +
  T(['', '📱 UK ETA app', '💻 gov.uk website'], [
    ['Device', 'iPhone 7 or later on iOS 16+, or Android 12+ with NFC', 'Any phone or computer'],
    ['Passport', 'Scans the chip in a biometric passport', 'You upload a passport photo page'],
    ['Face photo', 'Taken in the app', 'Uploaded, following the digital photo rules'],
    ['Payment', 'Card, Apple Pay or Google Pay', 'Card, Apple Pay or Google Pay'],
    ['Fee', '£20', '£20']
  ]) +
  fig(2, 'Over-the-shoulder view of a woman at a kitchen table holding her phone against an open U.S. passport while the phone screen shows a scan your passport message', 'The app reads the chip in your passport. No photo upload needed.') +
  '<p>You also need an email address and the passport you will travel on.</p>' +
  '<h2>📝 Step by step</h2>' +
  FLOW +
  '<p>The decision usually comes within a day, but gov.uk says it can take up to 3 working days, so apply before you book non-refundable extras. You travel with your passport only: the ETA is stored against it.</p>' +
  '<h2>✈️ What happens at check-in and the border</h2>' +
  cl([
    ['🛫', '<strong>The airline checks first.</strong> No valid ETA, eVisa or other document means no boarding pass.'],
    ['🛂', '<strong>An ETA does not guarantee entry.</strong> Border officers can still refuse a traveler on arrival.'],
    ['📄', '<strong>Keep the approval email</strong>. You will not be asked to print it, but it holds your ETA reference if anything goes wrong.']
  ]) +
  '<h2>🚫 If your ETA is refused</h2>' +
  '<p>There is no appeal. gov.uk says you can apply for a visa instead. The £20 is not refunded.</p>' +
  '<h2>⚠️ One more thing: no site is faster</h2>' +
  '<p>gov.uk states that you cannot get a faster decision by applying through another website or app. Third-party sites charge extra for the same form, so use only the official app or gov.uk/eta/apply.</p>' +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Do US citizens need a UK ETA?', 'Yes. Since 25 February 2026 Americans need an ETA to visit the UK, and airlines will not let you board without one.'],
    ['How much is the UK ETA?', '£20 per person, non-refundable once you apply.'],
    ['How long is a UK ETA valid?', 'Two years, or until your passport expires, whichever is sooner. You can make multiple trips.'],
    ['How long does the application take?', 'Usually within a day. gov.uk says a decision can take up to 3 working days.'],
    ['Is there a UK ETA app?', 'Yes, the official UK ETA app, for iPhone 7 and later on iOS 16+ and Android 12+ phones with NFC. You can also apply online at gov.uk/eta/apply.'],
    ['How long can I stay with a UK ETA?', 'Up to 6 months per visit, for tourism, visiting family and certain other reasons.'],
    ['Does an ETA cover Scotland and Northern Ireland?', 'Yes. One ETA covers the whole United Kingdom, plus Jersey, Guernsey and the Isle of Man.'],
    ['Do I need to print my ETA?', 'No. It is linked to your passport. You receive an email with a 16-digit reference.']
  ]) +
  '<p><em>Checked October 2026 on gov.uk and the Home Office. Fees and rules can change, so confirm the price and eligibility on the official application page before you apply.</em></p>' +
  SRC([
    ['https://www.gov.uk/eta', 'GOV.UK &mdash; Electronic Travel Authorisation (ETA)'],
    ['https://www.gov.uk/eta/apply', 'GOV.UK &mdash; Apply for an ETA'],
    ['https://www.gov.uk/guidance/using-the-uk-eta-app', 'GOV.UK &mdash; Using the UK ETA app'],
    ['https://www.gov.uk/government/news/uk-enforces-digital-permission-to-travel', 'GOV.UK &mdash; UK enforces digital permission to travel'],
    ['https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/', 'Home Office &mdash; ETA factsheet (April 2026)']
  ]);

module.exports = {
  slug: SLUG,
  title: 'UK ETA for US Citizens (2026): Cost, How to Apply and How Long It Lasts | canitakethis.co',
  desc: 'US citizens need a UK ETA since 25 Feb 2026. It costs £20, lasts 2 years and decisions usually take a day. Official app or gov.uk, who is exempt and what if refused.',
  h1: 'UK ETA for US Citizens (2026): Cost, How to Apply and How Long It Lasts',
  body
};
