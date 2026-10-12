// Pillar: /blog/do-i-need-a-passport-canada-mexico-bahamas-puerto-rico-2026/ (session 21, 2026-10-11). Demand: Ahrefs US, "do i need a passport to go to"
// canada / mexico / the bahamas / puerto rico are each ">1,000"; the by-car / cruise / bus / boat variants are "<100" (sections + FAQ, not titles).
// Data (read 11 October 2026): cbp.gov WHTI page (modified 17 Jun 2026) + WHTI FAQ, travel.state.gov Canada (Level 1, 5 Jun 2026), Mexico and
// The Bahamas pages, canada.ca "What you need to enter Canada", immigration.gov.bs (documents + before your arrival), tsa.gov acceptable ID page.
// Mexico's own migration site (inm.gob.mx) only offers the FMM form, so Mexico rules rest on the State Department page (disclosed in the article).
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;

const SLUG = 'do-i-need-a-passport-canada-mexico-bahamas-puerto-rico-2026';
const fl = (c, n) => `<img src="https://flagcdn.com/w40/${c}.png" alt="" width="22" height="16" style="vertical-align:middle;margin-right:8px;border-radius:2px">${n}`;
const meta = `<div class="art-meta"><span class="tag tag-neutral">Entry Permits</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>7 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="JetBlue gate agent at an Orlando gate podium looking at the open blue U.S. passport book a woman holds out, with the gate screen above reading Cancun CUN boarding" width="800" height="400"><figcaption>To fly to Mexico a U.S. citizen needs a passport book; a passport card does not work for boarding.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="450"><figcaption>${cap}</figcaption></figure>`;

const PCSS = `<style>.pp-y,.pp-n,.pp-p{display:inline-block;padding:3px 10px;border-radius:8px;font-weight:700;font-size:.9rem;color:#08111f}.pp-y{background:#2FCF9B}.pp-n{background:#FF9B8F}.pp-p{background:#FFD36B}.pp-flow{display:grid;gap:0;margin:1.2em 0}.pp-step{display:grid;grid-template-columns:44px 1fr;gap:12px;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:14px;margin-bottom:10px}.pp-num{width:44px;height:44px;border-radius:50%;background:#4CC2FF;color:#08111f;font-weight:800;font-size:1.1rem;display:flex;align-items:center;justify-content:center}.pp-q{font-weight:700;font-size:1.02rem;color:var(--text);margin-bottom:6px}.pp-a{font-size:.95rem;color:var(--text);line-height:1.5}.pp-a .pp-y,.pp-a .pp-p{margin-right:6px}</style>`;
const FLOW = `<h2>🧭 Which document do I need? Four questions</h2><div class="pp-flow">` +
  `<div class="pp-step"><div class="pp-num">1</div><div><div class="pp-q">Are you going to Puerto Rico from the U.S. mainland?</div><div class="pp-a"><span class="pp-y">Yes</span> No passport. Bring a REAL ID or another TSA-accepted ID for the airport checkpoint.</div></div></div>` +
  `<div class="pp-step"><div class="pp-num">2</div><div><div class="pp-q">Are you flying to Canada, Mexico or the Bahamas?</div><div class="pp-a"><span class="pp-y">Yes</span> You need a passport book. A passport card does not work for a flight. The Bahamas wants it valid at least 6 months.</div></div></div>` +
  `<div class="pp-step"><div class="pp-num">3</div><div><div class="pp-q">Are you driving or walking into Canada or Mexico?</div><div class="pp-a"><span class="pp-p">Choice</span> Passport book, passport card, enhanced driver&rsquo;s license or a trusted traveler card (NEXUS, SENTRI, FAST) to come back into the U.S. Mexico also needs an FMM permit beyond the border zone.</div></div></div>` +
  `<div class="pp-step"><div class="pp-num">4</div><div><div class="pp-q">Are you taking a cruise or a boat?</div><div class="pp-a"><span class="pp-p">Check</span> A passport book is the safe choice. CBP lets U.S. citizens return from a closed-loop cruise with a birth certificate and photo ID, but you may still need a passport for the countries the ship visits, so ask your cruise line. The Bahamas Immigration page asks for a passport.</div></div></div></div>`;
const ZONE = `<figure class="cox-dia"><svg viewBox="0 0 360 330" width="360" role="img" aria-label="Mexico border zone: within 12 miles (20 km) of the U.S. border for 6 days or less no FMM permit is needed; further in or for longer stays an FMM permit is needed" xmlns="http://www.w3.org/2000/svg"><style>.zb{fill:var(--surface-2)}.zus{fill:var(--surface);stroke:var(--line);stroke-width:2}.zg{fill:#2FCF9B}.zr{fill:#FF9B8F}.zl{stroke:var(--text);stroke-width:4}.zt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:var(--text)}.zd{font-family:Inter,sans-serif;font-size:16px;fill:var(--text)}.zk{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:#08111f}</style><rect class="zb" x="0" y="0" width="360" height="330" rx="14"/><rect class="zus" x="15" y="50" width="75" height="90"/><rect class="zg" x="90" y="50" width="100" height="90"/><rect class="zr" x="190" y="50" width="155" height="90"/><line class="zl" x1="90" y1="38" x2="90" y2="152"/><text class="zt" x="52" y="90" text-anchor="middle">U.S.</text><text class="zk" x="140" y="90" text-anchor="middle">12 miles</text><text class="zk" x="140" y="112" text-anchor="middle">(20 km)</text><text class="zk" x="267" y="100" text-anchor="middle">Further in Mexico</text><text class="zd" x="90" y="170" text-anchor="middle">Border</text><rect class="zg" x="20" y="190" width="18" height="18"/><text class="zt" x="48" y="205">Within 12 miles (20 km)</text><text class="zd" x="48" y="226">and 6 days or less:</text><text class="zd" x="48" y="246">no FMM permit needed</text><rect class="zr" x="20" y="276" width="18" height="18"/><text class="zt" x="48" y="291">Further in, or a longer stay:</text><text class="zd" x="48" y="312">FMM permit needed</text></svg><figcaption>Mexico by land: an FMM permit is not needed within 12 miles (20 km) of the U.S. border for 6 days or less (State Department).</figcaption></figure>`;
const MAIN = T(
  ['Destination', '✈️ By air', '🚗 By land', '🚢 By sea or cruise'],
  [
    [fl('ca', 'Canada'), '<strong>Passport book.</strong> A NEXUS card also works. A passport card cannot be used for flights.', 'Passport, passport card or NEXUS card. Without a passport, Canada also accepts other ID that shows your name, date of birth and citizenship.', 'Same documents as by land. On a closed-loop cruise, ask your cruise line what it needs to board.'],
    [fl('mx', 'Mexico'), '<strong>Passport book.</strong> You cannot board a plane to Mexico with a passport card.', 'Proof of citizenship such as a passport book or card, plus an FMM entry permit unless you stay within 12 miles (20 km) of the border for 6 days or less.', 'Passport, passport card, trusted traveler card or REAL ID. Closed-loop cruise: certified birth certificate plus photo ID (age 16 and over).'],
    [fl('bs', 'The Bahamas'), '<strong>Passport book</strong> valid at least 6 months. Passport cards are not accepted.', 'No land border.', 'Passport book. The State Department says a cruise passenger may use a WHTI-compliant document instead.'],
    [fl('pr', 'Puerto Rico'), '<strong>No passport.</strong> It is part of the United States. Adults need a REAL ID or other TSA-accepted ID.', 'No land border.', '<strong>No passport</strong> for a trip from the U.S. mainland.']
  ]
);

const DOCS = T(
  ['Document', '✈️ Flying back into the U.S.', '🚗 Land back into the U.S.', '🚢 Sea back into the U.S.'],
  [
    ['Passport book', '<span class="pp-y">Yes</span>', '<span class="pp-y">Yes</span>', '<span class="pp-y">Yes</span>'],
    ['Passport card', '<span class="pp-n">No</span>', '<span class="pp-y">Yes</span>', '<span class="pp-y">Yes</span>'],
    ['Enhanced driver&rsquo;s license (EDL)', '<span class="pp-n">No</span>', '<span class="pp-y">Yes</span>', '<span class="pp-y">Yes</span>'],
    ['NEXUS, SENTRI or FAST card', '<span class="pp-y">Yes</span>', '<span class="pp-y">Yes</span>', '<span class="pp-y">Yes</span>'],
    ['Birth certificate and photo ID', '<span class="pp-n">No</span>', '<span class="pp-p">Children under 16 only</span>', '<span class="pp-p">Under 16, or a closed-loop cruise</span>']
  ]
);

const VALID = T(
  ['', 'How long the passport must be valid', 'Other passport rules'],
  [
    [fl('ca', 'Canada'), 'Valid at the time of entry (State Department).', 'No tourist visa for stays under 180 days.'],
    [fl('mx', 'Mexico'), 'Valid at the time of entry (State Department).', 'One blank page per stamp for air travellers. A visa is needed only for stays over 180 days.'],
    [fl('bs', 'The Bahamas'), 'At least 6 months from entry (Bahamas Immigration). The State Department adds that it must cover your whole stay.', 'Two blank pages (State Department). Return or onward ticket and enough money for the stay (Bahamas Immigration).']
  ]
);

const body = CSS + PCSS + meta + hero +
  `<p><strong>If you fly to Canada, Mexico or the Bahamas, yes: a U.S. citizen needs a passport book.</strong> Puerto Rico is the exception, because it is part of the United States and no passport is needed. By land or sea, Canada and Mexico also accept a passport card and some other documents, and the Bahamas does not accept a passport card at all. Everything below is from the State Department, CBP, TSA and the Canadian and Bahamian immigration pages.</p>` +
  stat([
    ['Yes', 'passport book to fly to Canada, Mexico or the Bahamas'],
    ['No', 'passport for Puerto Rico (U.S. territory)'],
    ['6 months', 'minimum passport validity for the Bahamas'],
    ['Under 16', 'a birth certificate is enough by land or sea back into the U.S.']
  ]) +
  '<h2>🛂 Passport needed? By destination and how you travel</h2>' +
  MAIN +
  FLOW +
  '<h2>📘 Passport book, passport card or something else?</h2>' +
  `<p>The rules for coming home come from CBP&rsquo;s Western Hemisphere Travel Initiative. By <strong>air</strong>, a U.S. citizen needs a passport book or a trusted traveler card (NEXUS, SENTRI or FAST). By <strong>land or sea</strong> the list is longer: passport, passport card, enhanced driver&rsquo;s license, or a trusted traveler card. The passport card is the cheaper wallet-size version, but it never works for a flight. An enhanced driver&rsquo;s license is issued only by some states and also never works for a flight.</p>` +
  DOCS +
  `<p>Closed-loop cruises (they begin and end at the same U.S. port) are the one case where a birth certificate and a government photo ID get a U.S. citizen back into the country. CBP adds that you may still need a passport for the countries the ship visits, so check with your cruise line.</p>` +
  '<h2 id="canada">' + fl('ca', 'Canada') + ': passport book to fly, more choices by road</h2>' +
  callout('✈️', '<strong>Flying to Canada: take a passport book.</strong> The State Department says U.S. citizens can enter with a valid passport, passport card or NEXUS card, and adds that a passport card cannot be used on domestic flights within Canada.') +
  `<p>Canada&rsquo;s own immigration site says it is recommended to always travel with a valid passport, the only reliable and universally accepted travel and ID document. If you have no passport and are not travelling by air, you can present identity documents that show your full name, date of birth and citizenship. Whatever Canada lets you in with, you need a document CBP accepts to come back (see the table above), and CBP&rsquo;s list for adults does not include a birth certificate with a driver&rsquo;s license. The State Department advises U.S. citizens to review Canada&rsquo;s requirements for travelling with minors, and there is no tourist visa for stays under 180 days.</p>` +
  fig(1, 'Driver of a grey SUV holding a passport card out of the window to a navy-uniformed Canada Border Services Agency officer in a booth under a Welcome to Canada sign at the Canadian border', 'By land or sea a passport card works for Canada; it never works for a flight.') +
  '<h2 id="mexico">' + fl('mx', 'Mexico') + ': passport book to fly, plus an FMM permit</h2>' +
  `<p>The State Department says you need a passport book to fly to Mexico and cannot board a plane with a passport card. Mexican authorities issue a digital entry permit (FMMD) at every international airport, and immigration officers decide how long you can stay. By land you need evidence of citizenship, such as a passport book or card, and you must apply for an FMM entry permit online or at an INM office, unless you stay within 12 miles (20 km) of the U.S. border for 6 days or less. By sea you need a passport, passport card, trusted traveler card or REAL ID, and on a closed-loop cruise a certified birth certificate with a raised seal plus a photo ID if you are 16 or older. A private boat needs a permit from the Mexican government before you arrive.</p>` +
  ZONE +
  `<p>CBP&rsquo;s list for getting back into the U.S. does not include a REAL ID, so carry one of the documents in the table above for the return. Mexico&rsquo;s own migration site only offers the FMM form, so this section rests on the State Department&rsquo;s Mexico page. For safety warnings see <a href="/blog/travel-warning-mexico-2026/">travel warnings for Mexico</a>.</p>` +
  '<h2 id="bahamas">' + fl('bs', 'The Bahamas') + ': passport book, valid six months</h2>' +
  `<p>The Bahamas Immigration Department says all persons entering must present a passport valid for at least six months, and that <strong>passport cards are not accepted</strong>. You also need a return ticket or other means of leaving, enough money for the stay (or a local sponsor), and a completed Bahamas Immigration Disembarkation/Embarkation Card before arrival. The department adds that admittance is not automatic. The State Department lists no visa for a U.S. citizen staying one month or less, and says a cruise passenger may use a WHTI-compliant document instead of a passport. For a closed-loop cruise that means a birth certificate and photo ID, but the Bahamas Immigration page itself only mentions passports, so a passport book is the document no one will question.</p>` +
  fig(2, 'Traveler handing a blue U.S. passport book across the counter to a Bahamas immigration officer at an airport desk under a Welcome to the Bahamas sign', 'The Bahamas asks for a passport book valid at least six months; passport cards are not accepted.') +
  '<h2 id="puerto-rico">' + fl('pr', 'Puerto Rico') + ': no passport, but bring ID</h2>' +
  callout('🌴', '<strong>No passport for Puerto Rico.</strong> CBP says U.S. territories are considered part of the United States, so a U.S. citizen travelling directly from one has not left the country and does not need a passport. The WHTI rules do not affect travel between the U.S. mainland and Puerto Rico.') +
  `<p>Flights are still screened by TSA. Adults 18 and over must show valid ID at the checkpoint, and since 7 May 2025 a state driver&rsquo;s license or ID that is not REAL ID compliant is no longer accepted. A passport book or card, a trusted traveler card and a military ID also work. From 1 February 2026, TSA says travellers with no acceptable ID can pay $45 for TSA ConfirmID, which tries to verify identity but is not a guarantee. See <a href="/blog/can-you-fly-without-a-real-id-2026/">flying without a REAL ID</a>.</p>` +
  '<h2>⏳ How long the passport must be valid</h2>' +
  VALID +
  '<h2>✅ Before you go</h2>' +
  cl([
    ['1', 'Check how you travel: air always needs a passport book (or NEXUS, SENTRI or FAST) for Canada, Mexico and the Bahamas.'],
    ['2', 'Check the passport dates: six months of validity for the Bahamas, valid at entry for Canada and Mexico, and blank pages for stamps.'],
    ['3', 'Check the document for coming home: passport card and enhanced driver&rsquo;s license are land and sea only.'],
    ['4', 'Mexico by land: apply for the FMM permit online or at an INM office unless you stay near the border for 6 days or less.'],
    ['5', 'Children under 16 on a land or sea trip need proof of citizenship; on a flight they need their own passport.'],
    ['6', 'Puerto Rico: bring a REAL ID or a passport for the airport checkpoint.']
  ]) +
  '<h2>🔎 More entry rules</h2>' +
  cl([
    ['🛂', '<a href="/blog/can-you-fly-without-a-real-id-2026/">Can you fly without a REAL ID?</a>'],
    ['🛃', '<a href="/blog/global-entry-cost-application-interview-2026/">Global Entry: cost, application and interview</a>'],
    ['🚨', '<a href="/blog/travel-warning-mexico-2026/">Travel warnings: Mexico</a> &middot; <a href="/blog/travel-warning-caribbean-2026/">Caribbean</a> &middot; <a href="/blog/travel-warning-by-country-2026/">by country</a>']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['Do I need a passport to go to Canada?', 'To fly, yes: a passport book (a NEXUS card also works). By land or sea the State Department lists a passport, passport card or NEXUS card, and Canada accepts other ID showing name, date of birth and citizenship if you have no passport. You still need a document CBP accepts to come back.'],
    ['Do I need a passport to go to Mexico?', 'To fly, yes, and it must be a passport book, because a passport card does not work for boarding. By land you need proof of citizenship such as a passport book or card plus an FMM permit, unless you stay within 12 miles (20 km) of the border for 6 days or less.'],
    ['Do I need a passport to go to the Bahamas?', 'Yes. The Bahamas Immigration Department requires a passport valid for at least six months and does not accept passport cards. The State Department says a cruise passenger may use a WHTI-compliant document instead.'],
    ['Do I need a passport to go to Puerto Rico?', 'No. Puerto Rico is a U.S. territory, so a U.S. citizen does not need a passport. You still need a REAL ID or other TSA-accepted ID to fly.'],
    ['Do I need a passport for a cruise?', 'On a closed-loop cruise, CBP says U.S. citizens can return with a birth certificate and a photo ID, but you may still need a passport for the countries the ship visits. Check with your cruise line.'],
    ['Can I drive to Canada or Mexico without a passport?', 'Yes, with a passport card, an enhanced driver&rsquo;s license or a trusted traveler card, which CBP accepts for land and sea. Mexico also requires an FMM permit beyond the border zone.'],
    ['Do children need a passport?', 'Children also need their own passport to fly. By land or sea, U.S. children under 16 (under 19 with a school, religious or other youth group) need only a birth certificate or other proof of citizenship.']
  ]) +
  `<p><em>Entry rules change; the government pages below on the day you travel are the ones that count.</em></p>` +
  '<p><em>Checked October 2026 on the U.S. State Department, CBP and TSA, the Canadian immigration site and the Bahamas Immigration Department. This article is for U.S. citizens; green card holders and other nationalities have different rules.</em></p>' +
  SRC([
    ['https://www.cbp.gov/travel/us-citizens/western-hemisphere-travel-initiative', 'CBP &mdash; Western Hemisphere Travel Initiative'],
    ['https://www.cbp.gov/travel/us-citizens/western-hemisphere-travel-initiative/faqs?language_content_entity=en', 'CBP &mdash; WHTI frequently asked questions'],
    ['https://travel.state.gov/en/international-travel/travel-advisories/canada.html', 'State Department &mdash; Canada'],
    ['https://travel.state.gov/en/international-travel/travel-advisories/mexico.html', 'State Department &mdash; Mexico'],
    ['https://travel.state.gov/en/international-travel/travel-advisories/the-bahamas.html', 'State Department &mdash; The Bahamas'],
    ['https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html', 'Government of Canada &mdash; What you need to enter Canada'],
    ['https://www.immigration.gov.bs/what-documents-do-i-need-to-enter-the-bahamas/', 'Bahamas Immigration &mdash; What documents do I need to enter The Bahamas?'],
    ['https://www.immigration.gov.bs/entry-requirements/before-your-arrival/', 'Bahamas Immigration &mdash; Before your arrival'],
    ['https://www.tsa.gov/travel/security-screening/identification', 'TSA &mdash; Acceptable identification at the checkpoint']
  ]);

module.exports = {
  slug: SLUG,
  title: 'Do You Need a Passport to Go to Canada, Mexico, the Bahamas or Puerto Rico? (US Citizens 2026) | canitakethis.co',
  desc: 'US citizens: a passport book is needed to fly to Canada, Mexico and the Bahamas, but not to Puerto Rico. Land, sea and cruise rules from CBP and State.',
  h1: 'Do You Need a Passport to Go to Canada, Mexico, the Bahamas or Puerto Rico? (US Citizens 2026)',
  body
};
