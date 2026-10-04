// Article 6 of the travel series (first Entry Permits article): ETIAS travel authorization (2026).
// Data: EU Commission (home-affairs.ec.europa.eu, travel-europe.europa.eu), EEAS, Frontex, EUR-Lex Reg. 2025/1411, checked October 2026.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;

const SLUG = 'etias-travel-authorization-2026';
const meta = `<div class="art-meta"><span class="tag tag-neutral">Entry Permits</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Traveler in the departures hall of Rome Fiumicino airport holding a U.S. passport and a paper boarding pass and smiling at the camera, with check-in desks behind him" width="800" height="400"><figcaption>Flying to Europe in 2026? Your passport is still all you need.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const CSS2 = '<style>.et-flow{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin:1em 0}.et-step{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px;position:relative}.et-step h3{margin:0 0 6px;font-size:1.05rem}.et-step p{margin:0;font-size:.95rem}.et-pill{display:inline-block;font-size:.85rem;font-weight:700;border-radius:999px;padding:2px 10px;margin-bottom:8px;border:1px solid var(--line);color:var(--muted)}.et-now{border-color:var(--accent)}.et-now .et-pill{background:var(--accent);color:#08111f;border-color:var(--accent)}[data-theme="light"] .et-now .et-pill{color:#fff}.et-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:1em 0}.et-c{display:flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:10px;background:var(--surface);padding:8px 10px;font-size:.95rem}.et-c img{width:26px;height:18px;object-fit:cover;border-radius:2px;flex:none}.et-vs{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));margin:1em 0}.et-box{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px}.et-box h3{margin:0 0 8px;font-size:1.05rem}.et-box ul{margin:0;padding-left:1.1em}.et-box li{margin:5px 0;font-size:.95rem}.et-bad{border-color:#c0392b}.et-fee{display:flex;align-items:center;gap:14px;border:1px solid var(--accent);border-radius:14px;background:var(--surface);padding:14px;margin:1em 0;flex-wrap:wrap}.et-fee b{font-size:2rem;color:var(--accent);line-height:1}.et-fee span{font-size:.95rem;flex:1;min-width:200px}</style>';

const FLOW = CSS2 + '<div class="et-flow">' +
  '<div class="et-step"><span class="et-pill">Done</span><h3>The rules are set</h3><p>The EU law and the €20 fee (Regulation 2025/1411, July 2025) are in place.</p></div>' +
  '<div class="et-step et-now"><span class="et-pill">Now</span><h3>Not operational</h3><p>ETIAS is not in operation and no applications are accepted. You apply for nothing yet.</p></div>' +
  '<div class="et-step"><span class="et-pill">Later</span><h3>Launch date announced</h3><p>The EU says it will announce the date several months before launch, followed by a transition of at least 12 months.</p></div>' +
  '</div>';

const C = [['at','Austria'],['be','Belgium'],['bg','Bulgaria'],['hr','Croatia'],['cy','Cyprus'],['cz','Czechia'],['dk','Denmark'],['ee','Estonia'],['fi','Finland'],['fr','France'],['de','Germany'],['gr','Greece'],['hu','Hungary'],['is','Iceland'],['it','Italy'],['lv','Latvia'],['li','Liechtenstein'],['lt','Lithuania'],['lu','Luxembourg'],['mt','Malta'],['nl','Netherlands'],['no','Norway'],['pl','Poland'],['pt','Portugal'],['ro','Romania'],['sk','Slovakia'],['si','Slovenia'],['es','Spain'],['se','Sweden'],['ch','Switzerland']];
const GRID = '<div class="et-grid">' + C.map(c => `<div class="et-c"><img src="https://flagcdn.com/w40/${c[0]}.png" alt="" width="26" height="18" loading="lazy"><span>${c[1]}</span></div>`).join('') + '</div>';

const VS = '<div class="et-vs">' +
  '<div class="et-box"><h3>✅ The real thing</h3><ul>' +
  '<li>The web address ends in <strong>europa.eu</strong></li>' +
  '<li>It is run by the EU, not by a company</li>' +
  '<li>The fee is <strong>€20</strong>, with nothing added</li>' +
  '<li>Asks only for the details listed above and a payment</li>' +
  '<li>Opens only once the EU announces a launch date</li></ul></div>' +
  '<div class="et-box et-bad"><h3>❌ A lookalike</h3><ul>' +
  '<li>Domain with &ldquo;etias&rdquo; in it but not ending in europa.eu</li>' +
  '<li>Says you can apply today</li>' +
  '<li>Adds a &ldquo;service fee&rdquo; or &ldquo;fast track&rdquo; charge</li>' +
  '<li>Copies the EU logo and layout</li>' +
  '<li>Offers to apply &ldquo;on your behalf&rdquo;</li></ul></div>' +
  '</div>';

const body = CSS + meta + hero +
  '<p>ETIAS is the EU&rsquo;s planned online travel authorization for visa-free visitors, including U.S. citizens, to 30 European countries. <strong>It is not in operation yet</strong>: the EU says it is not collecting applications, and it has not confirmed a start date. Once it starts it will cost <strong>€20</strong> and last up to three years.</p>' +
  callout('💡', '<strong>In one line:</strong> in 2026 you do not need ETIAS and cannot apply for it. Any site that says it will approve you today is not the official one.') +
  stat([
    ['€20', 'fee per application once ETIAS starts'],
    ['3 years', 'validity, or until your passport expires'],
    ['30', 'European countries covered'],
    ['90 days', 'short stay in any 180-day period']
  ]) +
  '<h2>📅 When does ETIAS start?</h2>' +
  FLOW +
  '<p>The latest EU Commission page we could read (April 28, 2026) says ETIAS is scheduled for the last quarter of 2026 and that the exact date will be communicated later this year. Press reports from July 2026, including the Financial Times, say the EU has since dropped the 2026 target from its ETIAS pages and that 2027 is now more likely. We could not confirm that on a live EU page, so treat any date you see as unconfirmed until the EU announces one.</p>' +
  '<p>When it does start, the EU says travelers will get a transition and a grace period of at least 12 months in total.</p>' +
  '<h2>🌍 Which countries will ask for ETIAS?</h2>' +
  '<p>The EU lists 30 European countries. U.S. citizens will need ETIAS for each of them once it is live.</p>' +
  GRID +
  '<p>Ireland is not on the list: travelers from outside the EU do not need ETIAS for Ireland.</p>' +
  fig(1, 'Wide view of the departures hall at Frankfurt airport with two large boards listing only cities such as Lisbon, Athens, Oslo, Zurich, Reykjavik and Vienna, and a traveler with a wheeled bag looking up at them', 'Every city on this board is in one of the 30 countries.') +
  '<h2>🙋 Who needs it?</h2>' +
  cl([
    ['🛂', '<strong>Visa-free visitors</strong> staying up to 90 days in any 180-day period, a group that includes U.S. citizens, say the EU&rsquo;s own pages.'],
    ['✅', '<strong>Only for short stays.</strong> The EU describes ETIAS as the authorization for visa-free travel of up to 90 days in any 180-day period.'],
    ['🧒', '<strong>The fee is waived</strong> for applicants under 18 and over 70. They still apply.']
  ]) +
  '<h2>💶 The fee and how long it lasts</h2>' +
  '<div class="et-fee"><b>€20</b><span>per application, set by Commission Delegated Regulation (EU) 2025/1411 of 16 July 2025. It replaces the earlier €7 figure that still appears on some older EU pages.</span></div>' +
  '<p>An approval is valid for <strong>three years or until your passport expires</strong>, whichever comes first. A new passport means a new application.</p>' +
  '<h2>📝 How to apply once it opens</h2>' +
  cl([
    ['1️⃣', 'Use the <strong>official ETIAS website or the official ETIAS mobile app</strong>. The EU runs both.'],
    ['2️⃣', 'Fill in the online form: name, date and place of birth, sex, nationality, address, email, phone number, your parents&rsquo; first names and your travel document details.'],
    ['3️⃣', 'Pay the one-time fee. You get an email with your application number.'],
    ['4️⃣', 'Wait for the outcome by email. Most decisions come within minutes, otherwise within 4 days, up to 14 days if the EU asks for more documents, or up to 30 days if you are invited to an interview.']
  ]) +
  '<p>The EU says to apply well in advance of your trip, because approval is required before you board.</p>' +
  '<h2>⚠️ Official site or lookalike?</h2>' +
  '<p>Frontex, the EU border agency, warned in 2024 that more than 100 unofficial websites were already offering ETIAS information. It lists identity theft, inflated fees and data misuse among the risks.</p>' +
  VS +
  fig(2, 'Over-the-shoulder view of a laptop in a Lisbon cafe showing a web browser with an address bar and a blue European Union style website', 'Check the address bar before you type in your passport details.') +
  '<h2>🧳 What to do for a trip in 2026</h2>' +
  cl([
    ['🛂', 'Travel on your <strong>passport</strong>. The EU says no action is required from travelers at this point.'],
    ['📅', 'Check the EU&rsquo;s official ETIAS page again about a month before you fly, in case a date has been announced.'],
    ['🔖', 'Do not pay any site for &ldquo;ETIAS approval&rdquo; now. No real approvals exist yet.']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['What is ETIAS?', 'The European Travel Information and Authorisation System: an online travel authorization for visa-free visitors to 30 European countries. It is a check before you travel, not a visa.'],
    ['When does ETIAS start?', 'No confirmed date. The EU&rsquo;s April 2026 page said the last quarter of 2026, and press reports from July 2026 say the target was dropped and 2027 is more likely. The EU says it will announce the date several months ahead.'],
    ['How much does ETIAS cost?', '€20 per application once it starts, free for applicants under 18 and over 70.'],
    ['Do US citizens need ETIAS?', 'Not yet. Once it is live, U.S. citizens will need it for the 30 countries, as shown above.'],
    ['How long is ETIAS valid?', 'Three years, or until your passport expires, whichever comes first.'],
    ['Can I apply for ETIAS now?', 'No. The EU says ETIAS is not operational and no applications are collected. Sites that say otherwise are not official.'],
    ['What is the official ETIAS website?', 'An official EU website ends in europa.eu. Frontex gives europa.eu/etias, and the Commission&rsquo;s travel site is travel-europe.europa.eu.']
  ]) +
  '<p><em>Checked October 2026 on EU official sites. The EU has delayed ETIAS before and may do so again, so confirm the latest on the official ETIAS page before you plan around it.</em></p>' +
  SRC([
    ['https://travel-europe.europa.eu/', 'EU &mdash; Travel to Europe (ETIAS)'],
    ['https://home-affairs.ec.europa.eu/policies/schengen/smart-borders/european-travel-information-authorisation-system_en', 'European Commission &mdash; ETIAS'],
    ['https://home-affairs.ec.europa.eu/news/main-differences-between-ees-and-etias-what-travellers-need-know-2026-04-28_en', 'European Commission &mdash; EES and ETIAS differences (April 2026)'],
    ['https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32025R1411', 'EUR-Lex &mdash; Delegated Regulation (EU) 2025/1411'],
    ['https://www.frontex.europa.eu/media-centre/news/news-release/beware-of-risks-posed-by-unofficial-etias-websites-eNZniu', 'Frontex &mdash; Beware of unofficial ETIAS websites']
  ]);

module.exports = {
  slug: SLUG,
  title: 'ETIAS Travel Authorization (2026): What It Is, Start Date and How to Apply | canitakethis.co',
  desc: 'ETIAS is not live yet and has no confirmed start date. The EU fee will be €20, valid 3 years, for 30 countries. How to apply once it opens and how to spot fake sites.',
  h1: 'ETIAS Travel Authorization (2026): What It Is, Start Date and How to Apply',
  body
};
