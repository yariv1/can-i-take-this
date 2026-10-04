// Article 3 of the TSA cluster: Global Entry cost, application, interview, renewal (2026).
// Data: cbp.gov (global-entry, how-apply, eligibility, frequently-asked-questions, enrollment-arrival,
// enrollment-departure, remote-interview-pilot-trusted-traveler-programs), checked October 2026.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, CHK, stat, callout, cl, faq } = H;

const SLUG = 'global-entry-cost-application-interview-2026';
const meta = `<div class="art-meta"><span class="tag tag-neutral">US Travel Programs</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>7 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Female CBP officer in a navy uniform interviewing a traveler at a desk in the international arrivals area at Washington Dulles airport, with his passport, a utility bill and a fingerprint scanner on the desk" width="800" height="400"><figcaption>Conditionally approved? You can finish the interview when you land.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const FLOW_CSS = '<style>.gef{display:grid;gap:10px;margin:1em 0}.gef-step{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:12px 14px;display:flex;gap:12px;align-items:flex-start}.gef-ic{font-size:1.5rem;line-height:1}.gef-t{font-weight:700}.gef-s{color:var(--muted);font-size:.95rem;margin-top:2px}.gef-arrow{text-align:center;color:var(--muted);font-size:1.1rem;line-height:1}.gef-out{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}.gef-o{border:1px solid var(--line);border-radius:14px;background:var(--surface-2);padding:12px 14px}.gef-o b{display:block;margin-bottom:2px}.gef-o span{color:var(--muted);font-size:.95rem}</style>';

const FLOW = FLOW_CSS + '<div class="gef">' +
  '<div class="gef-step"><div class="gef-ic">💻</div><div><div class="gef-t">1. Create a TTP account and apply online</div><div class="gef-s">Every applicant needs their own Trusted Traveler Programs account. Pay the $120 fee by card or bank transfer when you submit.</div></div></div>' +
  '<div class="gef-arrow" aria-hidden="true">&#9660;</div>' +
  '<div class="gef-step"><div class="gef-ic">🔎</div><div><div class="gef-t">2. CBP reviews your application</div><div class="gef-s">CBP says 80% are approved within 2 weeks; some take 12 months or longer. There are three possible results:</div></div></div>' +
  '<div class="gef-out">' +
  '<div class="gef-o"><b>✅ Conditionally approved</b><span>Your TTP account tells you to complete an interview. Go to step 3.</span></div>' +
  '<div class="gef-o"><b>🕵️ Manual review</b><span>CBP needs more time before it can decide. Check your TTP account.</span></div>' +
  '<div class="gef-o"><b>⛔ Denied</b><span>The fee is not refunded.</span></div>' +
  '</div>' +
  '<div class="gef-arrow" aria-hidden="true">&#9660;</div>' +
  '<div class="gef-step"><div class="gef-ic">🪪</div><div><div class="gef-t">3. Finish the interview</div><div class="gef-s">At an enrollment center, when you land from abroad, at a departure desk, or by video if you are renewing. The table below compares the routes.</div></div></div>' +
  '<div class="gef-arrow" aria-hidden="true">&#9660;</div>' +
  '<div class="gef-step"><div class="gef-ic">🛂</div><div><div class="gef-t">4. You are a member for five years</div><div class="gef-s">Kiosks at U.S. airports, expedited lines at land borders and TSA PreCheck access.</div></div></div>' +
  '</div>';

const ROUTES = T(
  ['Route', 'Who can use it', 'Where', 'Appointment?', 'Good to know'],
  [
    ['🏢 Enrollment center', 'Anyone conditionally approved', 'Global Entry enrollment centers', 'Yes, each applicant books their own', 'The default route; slots can be weeks out'],
    ['🛬 Enrollment on Arrival', 'Conditionally approved applicants landing from abroad', 'Participating airports with international flights, including Preclearance locations', '<strong>No</strong>', 'Follow the CBP signs in the international terminal; the interview happens during your normal inspection'],
    ['🛫 Enrollment on Departure', 'Conditionally approved applicants flying the same day, domestic or international', 'Miami (Concourse J, 2nd level) and Detroit (Building #830)', '<strong>No</strong>', 'Miami Mon&ndash;Sat 8am&ndash;6pm ET; Detroit Mon&ndash;Fri 8am&ndash;4pm ET'],
    ['💻 Remote interview', '<strong>Renewals only</strong>: 18+, photo under 10 years old, fingerprints already on file', 'Your own device, over Zoom', 'Yes, from your TTP dashboard', 'About 15 minutes; first-time applicants cannot use it yet']
  ]
);

const WINDOW = (() => {
  const st = '<style>.wt{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:var(--text)}.ws{font-family:Inter,sans-serif;font-size:14px;fill:var(--muted)}</style>';
  const g =
    '<rect x="20" y="52" width="160" height="30" rx="6" fill="var(--accent)"/>' +
    '<rect x="180" y="52" width="320" height="30" rx="6" fill="var(--surface-2)" stroke="var(--line)"/>' +
    '<line x1="180" y1="40" x2="180" y2="96" stroke="var(--text)" stroke-width="2"/>' +
    '<text class="wt" x="180" y="30" text-anchor="middle">Expiry date</text>' +
    '<text class="ws" x="20" y="116">12 months before:</text><text class="ws" x="20" y="134">renewal opens</text>' +
    '<text class="ws" x="500" y="116" text-anchor="end">24 months after:</text><text class="ws" x="500" y="134" text-anchor="end">benefits end</text>' +
    '<text class="wt" x="100" y="72" text-anchor="middle" fill="#fff" style="fill:#fff">Renew now</text>' +
    '<text class="wt" x="340" y="72" text-anchor="middle">Benefits continue</text>' +
    '<text class="ws" x="260" y="170" text-anchor="middle">Only if you submit the renewal before the expiry date</text>';
  return `<figure class="cox-dia"><svg viewBox="0 0 520 186" width="520" role="img" aria-label="Renewal window to scale: renewal opens 12 months before the expiry date, and if you renew before expiry your benefits continue for up to 24 months after it" xmlns="http://www.w3.org/2000/svg">${st}${g}</svg><figcaption>Renewal window, drawn to scale (36 months in total).</figcaption></figure>`;
})();

const body = CSS + meta + hero +
  '<p>Global Entry costs <strong>$120 for five years</strong>. You apply online, wait for conditional approval, then finish with a short in-person interview, and it also includes TSA PreCheck. This page follows the official CBP steps, including the three ways to do the interview and how renewal works.</p>' +
  callout('💡', '<strong>In one line:</strong> $120, non-refundable, five years. After conditional approval you can interview at an enrollment center, when you land from abroad, or at a departure desk in Miami or Detroit. Renewals can sometimes be done by video.') +
  stat([
    ['$120', 'one fee for five years, not refunded if denied'],
    ['80%', 'of applications approved within 2 weeks, says CBP'],
    ['12 months', 'ahead of expiry you can start renewing'],
    ['24 months', 'of benefits after expiry if you renewed in time']
  ]) +
  '<h2>🇺🇸 Who can apply</h2>' +
  '<p>You must be 18 or older (younger applicants need a parent or guardian&rsquo;s consent) and a U.S. citizen or lawful permanent resident. Citizens of some partner countries can also apply; the list is on the <a href="https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/eligibility" target="_blank" rel="noopener noreferrer">CBP eligibility page</a>. CBP will turn you down if you:</p>' +
  cl([
    ['📝', 'Give false or incomplete information on the application.'],
    ['⚖️', 'Have a criminal conviction, pending charges or an outstanding warrant, including DUI.'],
    ['📦', 'Have been found in violation of customs, immigration or agriculture rules.'],
    ['🔍', 'Are the subject of an ongoing investigation, or were denied a firearm purchase.'],
    ['🚫', 'Are inadmissible to the U.S., or cannot show CBP that you are low-risk.']
  ]) +
  '<h2>🧭 From application to approval</h2>' +
  FLOW +
  '<p>Children are free when a parent is already a member or is applying at the same time. Every child still needs their own TTP account and application.</p>' +
  fig(1, 'Woman with red glasses handing her passport to a young CBP officer at a small Enrollment on Departure desk at Detroit airport, next to a sign reading Mon to Fri 8 AM to 4 PM', 'Enrollment on Departure in Detroit needs no appointment: weekdays 8am to 4pm.') +
  '<h2>🪪 Pick your interview route</h2>' +
  '<p>After conditional approval, CBP asks you to complete an interview. You have more than one way to do it, and the routes without an appointment save the most time.</p>' +
  ROUTES +
  fig(2, 'Woman with long chestnut hair at a kitchen table in a home in Austin holding up her passport to a laptop camera during a remote Global Entry renewal interview on Zoom, with a utility bill next to the laptop', 'Eligible renewals can be done on video in about 15 minutes.') +
  '<h2>🎒 What to bring</h2>' +
  cl([
    ['📘', '<strong>Your valid passport.</strong> If you have more than one valid passport, bring all of them. Lawful permanent residents bring their machine-readable permanent resident card.'],
    ['🪪', '<strong>One other photo ID</strong> for an enrollment center interview, such as a driver&rsquo;s license or ID card.'],
    ['🏠', '<strong>Proof of residency</strong> for the enrollment center, arrival, departure and video interviews: a driver&rsquo;s license with your current address, a utility bill, or a mortgage or rental payment statement. Minors do not need it.'],
    ['👤', '<strong>Each applicant books a separate interview.</strong> A family cannot share one appointment.']
  ]) +
  '<h2>🔄 How to renew</h2>' +
  WINDOW +
  cl([
    ['📅', 'You can renew starting <strong>one year before</strong> your membership ends. The fee is $120.'],
    ['🛡️', 'If you submit the renewal <strong>before</strong> it expires, your benefits continue for up to 24 months after the expiry date while CBP processes it.'],
    ['🎥', 'A renewal interview &ldquo;may not be necessary.&rdquo; After you pay, check your TTP account for what CBP wants next. Some renewals offer the video interview above.']
  ]) +
  '<h2>🛂 Using it once you are approved</h2>' +
  cl([
    ['🖥️', '<strong>Kiosks need your passport</strong> (or permanent resident card). The Global Entry card is not accepted at airport kiosks.'],
    ['✈️', '<strong>TSA PreCheck is included</strong>, so one $120 payment covers both. Compare the programs in <a href="/blog/tsa-precheck-vs-global-entry-vs-clear-2026/">PreCheck vs Global Entry vs CLEAR</a>.'],
    ['🚗', 'You can also use it at land borders, and CBP offers a Global Entry mobile app to process even faster when you enter.']
  ]) +
  '<h2>⚠️ Things people get wrong</h2>' +
  cl([
    ['❌', 'Waiting for an enrollment center slot when you travel abroad soon. Enrollment on Arrival needs no appointment.'],
    ['❌', 'Forgetting proof of residency at the interview.'],
    ['❌', 'Waiting until after expiry to renew. The 24-month grace only applies if you submitted before it expired.'],
    ['❌', 'Trusting an older article that says 18 months. That was a temporary COVID-era measure; CBP now states 24 months.']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['How much does Global Entry cost?', 'The fee is $120 for five years. CBP does not refund it, even if your application is denied.'],
    ['How long does Global Entry take?', 'CBP says 80% of applications are approved within 2 weeks, and some take 12 months or longer. After that you still need to complete the interview.'],
    ['Do I have to book an interview appointment?', 'Only at an enrollment center. Enrollment on Arrival and Enrollment on Departure need no appointment.'],
    ['Do I need an interview to renew?', 'Not always. CBP says an interview may not be necessary; check your TTP account after you submit the renewal.'],
    ['Can my child get Global Entry?', 'Yes. Minors are free when a parent is already in the program or applying, and need a parent or guardian&rsquo;s consent.'],
    ['Does Global Entry include TSA PreCheck?', 'Yes, CBP lists TSA PreCheck access as a Global Entry benefit.']
  ]) +
  CHK +
  SRC([
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry', 'CBP &mdash; Global Entry'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/how-apply', 'CBP &mdash; How to apply'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/eligibility', 'CBP &mdash; Eligibility'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/frequently-asked-questions', 'CBP &mdash; FAQ and renewal'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/enrollment-arrival', 'CBP &mdash; Enrollment on Arrival'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/global-entry/enrollment-departure', 'CBP &mdash; Enrollment on Departure'],
    ['https://www.cbp.gov/travel/trusted-traveler-programs/remote-interview-pilot-trusted-traveler-programs', 'CBP &mdash; Remote interview pilot']
  ]);

module.exports = {
  slug: SLUG,
  title: 'Global Entry Cost, Application and Interview (2026): Step by Step to Renewal | canitakethis.co',
  desc: 'Global Entry costs $120 for five years. The application steps, three ways to do the interview, what to bring, and how renewal and the 24-month grace period work.',
  h1: 'Global Entry Cost, Application and Interview (2026): Step by Step to Renewal',
  body
};
