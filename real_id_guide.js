// Article 5 of the US travel programs series: Can you fly without a REAL ID (2026).
// Data: tsa.gov (real-id, travel/security-screening/identification, confirmid, realid/realid-faqs), checked October 2026.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, CHK, stat, callout, cl, faq } = H;

const SLUG = 'can-you-fly-without-a-real-id-2026';
const meta = `<div class="art-meta"><span class="tag tag-neutral">US Travel Programs</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Man in an airport departures hall holding a standard driver license in one hand and a U.S. passport in the other, looking at the two with a puzzled smile, with a security checkpoint queue behind him" width="800" height="400"><figcaption>No star on your license? A passport works just as well.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const TREE_CSS = '<style>.rid{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin:1em 0}.rid-q{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px}.rid-q h3{margin:0 0 10px;font-size:1.05rem;display:flex;align-items:flex-start;gap:10px;line-height:1.3}.rid-q h3 .num-ic{flex:none;margin-top:.05em}.rid-a{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:.95rem}.rid-a b{flex:none;min-width:2.6em;color:var(--accent)}.rid-n{color:var(--muted);font-size:.9rem;margin-top:6px}</style>';
const TREE = TREE_CSS + '<div class="rid">' +
  '<div class="rid-q"><h3>1️⃣ Is there a star on your license?</h3><div class="rid-a"><b>Yes</b><span>You are set. Show it at the checkpoint.</span></div><div class="rid-a"><b>No</b><span>Go to question 2.</span></div></div>' +
  '<div class="rid-q"><h3>2️⃣ Do you have a passport, passport card or another accepted ID?</h3><div class="rid-a"><b>Yes</b><span>Show that instead. TSA needs only one acceptable ID, not both.</span></div><div class="rid-a"><b>No</b><span>Go to question 3.</span></div></div>' +
  '<div class="rid-q"><h3>3️⃣ Can you get a REAL ID before you fly?</h3><div class="rid-a"><b>Yes</b><span>Apply in person at your state licensing office with the documents listed below.</span></div><div class="rid-a"><b>No</b><span>Use TSA ConfirmID: $45, valid 10 days, no guarantee it works.</span></div></div>' +
  '</div>';

const IDS = T(
  ['ID', 'Accepted at the TSA checkpoint?', 'Good to know'],
  [
    ['🪪 REAL ID driver&rsquo;s license or state ID', '✅ Yes', 'Marked with a star'],
    ['🪪 Standard license without the REAL ID mark', '❌ No', 'No longer accepted since May 7, 2025'],
    ['🛂 Enhanced driver&rsquo;s license or ID', '✅ Yes', 'Marked with a flag or the word &ldquo;Enhanced&rdquo;'],
    ['📘 U.S. passport or passport card', '✅ Yes', 'The simplest alternative'],
    ['🛃 DHS trusted traveler card', '✅ Yes', 'Global Entry, NEXUS, SENTRI or FAST'],
    ['🎖️ U.S. Department of Defense ID', '✅ Yes', 'Includes IDs issued to dependents'],
    ['💳 Permanent resident card or border crossing card', '✅ Yes', ''],
    ['🪶 Photo ID from a federally recognized Tribal Nation', '✅ Yes', 'Must be an acceptable photo ID'],
    ['🌍 Foreign government passport', '✅ Yes', ''],
    ['🍁 Canadian provincial driver&rsquo;s license', '✅ Yes', ''],
    ['📱 Mobile driver&rsquo;s license from some states', '✅ Yes', 'TSA accepts certain mobile IDs only']
  ]
);

const body = CSS + meta + hero +
  '<p>Yes, you can still fly without a REAL ID, but only with another acceptable ID such as a passport, or by paying <strong>$45</strong> for TSA ConfirmID, which TSA says does not guarantee that you get through. This page shows which IDs work, how to check yours and what the $45 route involves, all from tsa.gov.</p>' +
  callout('💡', '<strong>In one line:</strong> since May 7, 2025, a license without the REAL ID mark does not work at the airport. A passport does. If you have neither, ConfirmID costs $45 and may fail.') +
  stat([
    ['May 7, 2025', 'REAL ID enforcement began'],
    ['$45', 'TSA ConfirmID fee, if you have no accepted ID'],
    ['10 days', 'how long a ConfirmID payment is valid'],
    ['Under 18', 'no ID needed for domestic flights']
  ]) +
  '<h2>🧭 Do you need a REAL ID?</h2>' +
  TREE +
  '<p>TSA says that if you travel domestically you need only one valid form of ID, either your REAL ID or another acceptable alternative such as a passport.</p>' +
  '<h2>🪪 IDs TSA accepts at the checkpoint</h2>' +
  IDS +
  '<p>This is TSA&rsquo;s own list of accepted IDs. TSA also says it accepts expired ID for up to two years after the expiry date. TSA is testing digital ID passes from Apple, CLEAR and Google, so the mobile list may grow.</p>' +
  fig(1, 'Woman sitting in a parked car at an airport departures curb holding a driver license close to her face to look for the star in its top corner', 'Look at the top of the card: a star means REAL ID-compliant.') +
  '<h2>⭐ How to check your own ID</h2>' +
  cl([
    ['⭐', '<strong>A star</strong> in the upper top portion of the card means your license or ID is REAL ID-compliant.'],
    ['🏳️', '<strong>A flag symbol or the word &ldquo;Enhanced&rdquo;</strong> means an enhanced license, which TSA also accepts.'],
    ['❌', '<strong>No marking?</strong> Then it is not REAL ID-compliant and will not work as your only ID at the checkpoint.'],
    ['🌎', '<strong>Not a border document:</strong> TSA says REAL ID cards cannot be used for border crossings into Canada or Mexico, other international travel or international sea cruises. You need a passport for those.']
  ]) +
  '<h2>💵 No acceptable ID: TSA ConfirmID</h2>' +
  callout('⚠️', '<strong>TSA does not guarantee this works.</strong> It says it will &ldquo;attempt to verify your identity,&rdquo; and that declining the option when you have no acceptable ID may mean being denied security access and missing your flight.') +
  cl([
    ['1️⃣', 'Go to <a href="https://www.tsa.gov/confirmid" target="_blank" rel="noopener noreferrer">tsa.gov/confirmid</a> and press Pay Now. It opens Pay.gov.'],
    ['2️⃣', 'Enter your legal name, the start date of your travel and a payment method (bank account, debit or credit card, Venmo or PayPal). The fee is <strong>$45</strong>.'],
    ['3️⃣', 'Pay.gov emails you a confirmation. Print the receipt or keep it on your phone.'],
    ['4️⃣', 'Show the receipt to the TSA officer at the checkpoint. It works for <strong>10 days</strong> from the travel date on the receipt.']
  ]) +
  fig(2, 'View over a traveler&rsquo;s shoulder at a smartphone showing a payment page while he sits on a bench in the Cincinnati airport terminal', 'Pay on Pay.gov before the checkpoint, then keep the receipt on your phone.') +
  '<h2>📝 How to get a REAL ID</h2>' +
  '<p>You apply in person with your state licensing office. TSA lists what you must show:</p>' +
  cl([
    ['🔤', '<strong>Your full legal name</strong> and <strong>date of birth</strong>.'],
    ['🔢', '<strong>Your Social Security number.</strong> A law change removed the requirement to show a separate SSN document, but some states may still ask for one.'],
    ['🏠', '<strong>Two proofs of address</strong> for your principal residence.'],
    ['🇺🇸', '<strong>Proof of lawful status</strong> in the U.S.']
  ]) +
  '<p>Requirements and appointments vary by state, so start on your state&rsquo;s own DMV site. TSA&rsquo;s REAL ID page has a state selector that points you to it.</p>' +
  '<h2>👨‍👩‍👧 Kids, lost IDs and expired IDs</h2>' +
  cl([
    ['🧒', 'TSA does not require children under 18 to show ID for flights within the U.S. Unaccompanied minors who want PreCheck screening must show an acceptable ID.'],
    ['🔍', 'Lost or stolen your ID on the way? TSA says you may still be allowed to fly.'],
    ['📅', 'Expired ID is accepted for up to two years after it expires.'],
    ['✍️', 'Suffixes such as Jr. or III on your boarding pass and ID do not have to match exactly.']
  ]) +
  '<h2>⚠️ Things people get wrong</h2>' +
  cl([
    ['❌', 'Assuming any license works. A license without the REAL ID mark is not accepted at the airport.'],
    ['❌', 'Thinking you need both a REAL ID and a passport. One acceptable ID is enough.'],
    ['❌', 'Using a REAL ID for an international flight. It does not replace a passport.'],
    ['❌', 'Counting on ConfirmID. It costs $45, lasts 10 days and is not guaranteed.']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Can I fly without a REAL ID?', 'Yes, if you have another acceptable ID such as a passport or passport card. Without any acceptable ID you can try TSA ConfirmID for $45, which is not guaranteed.'],
    ['How much is the ConfirmID fee?', '$45, paid on Pay.gov, valid for 10 days from the travel date on your receipt.'],
    ['How do I know if my license is a REAL ID?', 'Look for a star, or a flag or the word Enhanced, on the upper top portion of the card.'],
    ['Do I need a REAL ID if I have a passport?', 'No. TSA needs only one acceptable ID for domestic flights, and a passport is one.'],
    ['Do children need a REAL ID?', 'No. TSA does not require children under 18 to show ID on domestic flights.'],
    ['Can I use a REAL ID to fly abroad?', 'No. TSA says REAL ID cards cannot be used for border crossings, other international travel or international sea cruises.']
  ]) +
  CHK +
  SRC([
    ['https://www.tsa.gov/real-id', 'TSA &mdash; REAL ID'],
    ['https://www.tsa.gov/travel/security-screening/identification', 'TSA &mdash; Acceptable identification'],
    ['https://www.tsa.gov/confirmid', 'TSA &mdash; ConfirmID'],
    ['https://www.tsa.gov/realid/realid-faqs', 'TSA &mdash; REAL ID FAQ']
  ]);

module.exports = {
  slug: SLUG,
  title: 'Can You Fly Without a REAL ID? (2026): The $45 ConfirmID Fee and Accepted IDs | canitakethis.co',
  desc: 'You can fly without a REAL ID with a passport or other accepted ID. Without any, TSA ConfirmID costs $45 and is not guaranteed. The full accepted-ID list and how to get one.',
  h1: 'Can You Fly Without a REAL ID? (2026): The $45 ConfirmID Fee and Accepted IDs',
  body
};
