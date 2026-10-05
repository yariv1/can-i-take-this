// Article 47 (US Travel Programs): TSA PreCheck Touchless ID (2026).
// Data: tsa.gov/touchless-id, TSA press releases 2026, TSA Touchless ID partner guide (Jan 2026), TSA facial comparison fact sheet,
// airline pages (Delta, Southwest), Google blog (24 June 2026). Checked October 2026.
const H = require('./carryon_pages.js').__helpers;
const { CSS, T, SRC, stat, callout, cl, faq } = H;

const SLUG = 'tsa-precheck-touchless-id-2026';
const meta = `<div class="art-meta"><span class="tag tag-neutral">US Travel Programs</span><span class="art-meta-sep">&middot;</span><span>Updated October 2026</span><span class="art-meta-sep">&middot;</span><span>6 min read</span></div>`;
const hero = `<figure class="art-hero"><img src="/assets/blog/blog-${SLUG}-hero.webp" alt="Wide view of a TSA checkpoint with a dedicated Touchless ID lane, a Touchless ID sign above it and a traveler looking into the lane camera while others queue behind" width="800" height="400"><figcaption>At 65 airports, a camera replaces the ID check in the Touchless ID lane.</figcaption></figure>`;
const fig = (n, alt, cap) => `<figure class="art-fig"><img src="/assets/blog/blog-${SLUG}-inArticle-${n}.webp" alt="${alt}" width="800" height="320"><figcaption>${cap}</figcaption></figure>`;

const CSS2 = '<style>.tc-paths{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));margin:1em 0}.tc-path{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px}.tc-path h3{margin:0 0 8px;font-size:1.05rem}.tc-path ol{margin:0;padding-left:0;list-style:none;counter-reset:s}.tc-path li{counter-increment:s;display:flex;gap:10px;align-items:flex-start;margin:8px 0;font-size:.95rem}.tc-path li:before{content:counter(s);flex:none;display:grid;place-items:center;width:1.5em;height:1.5em;border-radius:.35em;background:var(--accent);color:#08111f;font:700 .85rem/1 Inter,sans-serif}[data-theme="light"] .tc-path li:before{color:#fff}' +
  '.tc-pill{display:flex;align-items:center;gap:14px;flex-wrap:wrap;border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px;margin:1em 0}.tc-pill svg{width:240px;max-width:100%;height:auto;flex:none}.tc-pill p{margin:0;flex:1;min-width:200px;font-size:.95rem}' +
  '.tc-codes{display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:6px;margin:1em 0}.tc-ap{border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--text);padding:7px 0;font:700 .9rem/1.3 "Space Mono",monospace;text-align:center;cursor:pointer}.tc-ap:hover,.tc-ap:focus-visible{border-color:var(--accent);outline:none}@media(max-width:640px){.tc-codes{grid-template-columns:repeat(5,1fr)}}@media(max-width:420px){.tc-codes{grid-template-columns:repeat(4,1fr)}.tc-ap{padding:9px 0;font-size:.95rem}}.tc-tip{position:fixed;z-index:200;max-width:260px;padding:9px 12px;border:1px solid var(--line);border-radius:10px;background:var(--surface-2);color:var(--text);font:500 .85rem/1.4 Inter,system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.35);pointer-events:none}.tc-tip[hidden]{display:none}.tc-tip b{font-weight:700;display:block}.tc-tip span{display:block;color:var(--muted);margin-top:2px}' +
  '.tc-lane{list-style:none;margin:1em 0;padding:0;display:grid;gap:10px}.tc-lane li{display:flex;gap:12px;align-items:flex-start;border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:10px 12px;font-size:.95rem}.tc-lane b{flex:none;color:var(--accent);font-family:"Space Mono",monospace}</style>';

// Illustration of the boarding-pass indicator (TSA partner guide: Homeland Security Blue pill, green circle with a figure and scan marks). Not the official artwork.
const PILL = '<div class="tc-pill"><svg viewBox="0 0 240 56" role="img" aria-label="Illustration of the blue pill-shaped Touchless ID indicator with a green circle icon"><rect x="1" y="1" width="238" height="54" rx="27" fill="#005288" stroke="#fff" stroke-opacity=".6"/><circle cx="29" cy="28" r="20" fill="#89d94c"/><path d="M17 21v-4h4M37 17h4v4M41 35v4h-4M21 39h-4v-4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="29" cy="24" r="4" fill="#005288"/><path d="M21 37c0-5 3-8 8-8s8 3 8 8" fill="#005288"/><text x="58" y="25" fill="#fff" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="700">TSA PreCheck</text><text x="58" y="43" fill="#fff" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="700">Touchless ID</text></svg><p><strong>Look for this pill on your mobile boarding pass.</strong> It appears after you opt in, and only at airports where Touchless ID is live. (Illustration, not the official artwork.)</p></div>';

const PATHS = '<div class="tc-paths">' +
  '<div class="tc-path"><h3>With an airline</h3><ol>' +
  '<li>Log in to your rewards account on the airline&rsquo;s app or website.</li>' +
  '<li>Open the TSA PreCheck section.</li>' +
  '<li>Scan your passport.</li>' +
  '<li>Enter your Known Traveler Number.</li>' +
  '<li>Opt in, then check the pill on boarding passes for trips booked afterward.</li></ol></div>' +
  '<div class="tc-path"><h3>With Google Wallet</h3><ol>' +
  '<li>Create a Google ID pass backed by your U.S. passport.</li>' +
  '<li>Check in for your flight and save the boarding pass to Google Wallet.</li>' +
  '<li>Tap &ldquo;Get started&rdquo; on the boarding pass.</li>' +
  '<li>Agree to share the ID pass and boarding pass with TSA.</li>' +
  '<li>Look for the Touchless ID indicator on the boarding pass.</li></ol></div>' +
  '</div>';

const AP = 'SEA DEN SLC LAS DFW ATL BNA MSP MDW DTW BOS SFO DAL LAX ORD PDX BWI CLT ABQ AUS BDL BHM BOI BUF CHS CLE CMH CVG HOU IND JAX MCO MCI MKE MSY OAK SNA PBI FLL PHX PIT PSP LGB RDU SAN SAT SMF SJC STL TPA TUL OKC ANC HNL SJU LGA'.split(' ');
const AN = {"SEA":["Seattle-Tacoma International","Seattle, WA"],"DEN":["Denver International","Denver, CO"],"SLC":["Salt Lake City International","Salt Lake City, UT"],"LAS":["Harry Reid International","Las Vegas, NV"],"DFW":["Dallas Fort Worth International","Dallas-Fort Worth, TX"],"ATL":["Hartsfield-Jackson Atlanta International","Atlanta, GA"],"BNA":["Nashville International","Nashville, TN"],"MSP":["Minneapolis-Saint Paul International","Minneapolis, MN"],"MDW":["Chicago Midway International","Chicago, IL"],"DTW":["Detroit Metropolitan Wayne County","Detroit, MI"],"BOS":["Boston Logan International","Boston, MA"],"SFO":["San Francisco International","San Francisco, CA"],"DAL":["Dallas Love Field","Dallas, TX"],"LAX":["Los Angeles International","Los Angeles, CA"],"ORD":["Chicago O'Hare International","Chicago, IL"],"PDX":["Portland International","Portland, OR"],"BWI":["Baltimore/Washington International","Baltimore, MD"],"CLT":["Charlotte Douglas International","Charlotte, NC"],"ABQ":["Albuquerque International Sunport","Albuquerque, NM"],"AUS":["Austin-Bergstrom International","Austin, TX"],"BDL":["Bradley International","Hartford, CT"],"BHM":["Birmingham-Shuttlesworth International","Birmingham, AL"],"BOI":["Boise Airport","Boise, ID"],"BUF":["Buffalo Niagara International","Buffalo, NY"],"CHS":["Charleston International","Charleston, SC"],"CLE":["Cleveland Hopkins International","Cleveland, OH"],"CMH":["John Glenn Columbus International","Columbus, OH"],"CVG":["Cincinnati/Northern Kentucky International","Cincinnati, OH"],"HOU":["Houston Hobby","Houston, TX"],"IND":["Indianapolis International","Indianapolis, IN"],"JAX":["Jacksonville International","Jacksonville, FL"],"MCO":["Orlando International","Orlando, FL"],"MCI":["Kansas City International","Kansas City, MO"],"MKE":["Milwaukee Mitchell International","Milwaukee, WI"],"MSY":["Louis Armstrong New Orleans International","New Orleans, LA"],"OAK":["Oakland International","Oakland, CA"],"SNA":["John Wayne Airport","Orange County, CA"],"PBI":["Palm Beach International","West Palm Beach, FL"],"FLL":["Fort Lauderdale-Hollywood International","Fort Lauderdale, FL"],"PHX":["Phoenix Sky Harbor International","Phoenix, AZ"],"PIT":["Pittsburgh International","Pittsburgh, PA"],"PSP":["Palm Springs International","Palm Springs, CA"],"LGB":["Long Beach Airport","Long Beach, CA"],"RDU":["Raleigh-Durham International","Raleigh, NC"],"SAN":["San Diego International","San Diego, CA"],"SAT":["San Antonio International","San Antonio, TX"],"SMF":["Sacramento International","Sacramento, CA"],"SJC":["San Jose Mineta International","San Jose, CA"],"STL":["St. Louis Lambert International","St. Louis, MO"],"TPA":["Tampa International","Tampa, FL"],"TUL":["Tulsa International","Tulsa, OK"],"OKC":["Will Rogers World Airport","Oklahoma City, OK"],"ANC":["Ted Stevens Anchorage International","Anchorage, AK"],"HNL":["Daniel K. Inouye International","Honolulu, HI"],"SJU":["Luis Munoz Marin International","San Juan, PR"],"LGA":["LaGuardia Airport","New York, NY"]};
const CODES = '<p>Hover or tap a code to see the airport name.</p><div class="tc-codes" id="tcc">' + AP.map(c => '<button type="button" class="tc-ap" data-n="' + AN[c][0].replace(/"/g, '&quot;') + '" data-c="' + AN[c][1] + '" aria-label="' + c + ': ' + AN[c][0].replace(/"/g, '&quot;') + ', ' + AN[c][1] + '">' + c + '</button>').join('') + '</div>' +
  '<script>(function(){var g=document.getElementById("tcc");if(!g)return;var tip=document.createElement("div");tip.className="tc-tip";tip.hidden=true;document.body.appendChild(tip);var cur=null;' +
  'function show(b){cur=b;tip.innerHTML="<b></b><span></span>";tip.firstChild.textContent=b.textContent+": "+b.getAttribute("data-n");tip.lastChild.textContent=b.getAttribute("data-c");tip.hidden=false;var r=b.getBoundingClientRect(),w=tip.offsetWidth,h=tip.offsetHeight;var x=Math.max(8,Math.min(innerWidth-w-8,r.left+r.width/2-w/2));var y=r.top-h-8;if(y<8)y=r.bottom+8;tip.style.left=x+"px";tip.style.top=y+"px"}' +
  'function hide(){tip.hidden=true;cur=null}' +
  'var hv=window.matchMedia&&window.matchMedia("(hover:hover)").matches;[].forEach.call(g.querySelectorAll(".tc-ap"),function(b){if(hv){b.addEventListener("mouseenter",function(){show(b)});b.addEventListener("mouseleave",hide)}b.addEventListener("focus",function(){show(b)});b.addEventListener("click",function(e){e.stopPropagation();show(b)})});' +
  'g.addEventListener("focusout",function(e){if(!g.contains(e.relatedTarget))hide()});document.addEventListener("click",hide);document.addEventListener("keydown",function(e){if(e.key==="Escape")hide()});window.addEventListener("scroll",function(){if(cur&&!tip.hidden)show(cur)},{passive:true})})();</'+'script>';

const LANE = '<ol class="tc-lane">' +
  '<li><b>1</b><span>Show the <strong>pill</strong> on your mobile boarding pass at the checkpoint.</span></li>' +
  '<li><b>2</b><span>Go to the <strong>dedicated Touchless ID lane</strong>, marked with Touchless ID signs.</span></li>' +
  '<li><b>3</b><span><strong>Look into the camera.</strong> Your live photo is matched against your stored passport.</span></li>' +
  '<li><b>4</b><span>If you are matched, you continue. <strong>Keep your physical ID in your pocket</strong> in case an officer asks for it.</span></li>' +
  '</ol>';

const body = CSS + CSS2 + meta + hero +
  '<p><strong>TSA PreCheck Touchless ID lets you verify your identity at security by looking into a camera instead of showing a physical ID.</strong> It is an opt-in benefit for TSA PreCheck members, it works at 65 airports, and you set it up through an airline account or Google Wallet. You still need to carry your ID.</p>' +
  callout('💡', '<strong>In one line:</strong> be a PreCheck member with a valid passport, opt in once with your airline or Google Wallet, check for the Touchless ID pill on your boarding pass, and bring a physical ID anyway.') +
  stat([
    ['65', 'airports with Touchless ID lanes'],
    ['6', 'airlines to opt in with, plus Google Wallet'],
    ['24 hours', 'photo and data deleted after the scheduled departure'],
    ['17 million', 'travelers opted in, per TSA in January 2026']
  ]) +
  '<h2>🧭 What Touchless ID changes at security</h2>' +
  '<p>Touchless ID replaces one step: the identity check. Everything else about the PreCheck lane stays the same.</p>' +
  T(['', 'Regular PreCheck lane', 'Touchless ID lane'], [
    ['🪪 Identity check', 'You show your ID and boarding pass', 'You look into a camera; the photo is matched to your passport'],
    ['📝 Set-up', 'None beyond PreCheck', 'Opt in once through an airline or Google Wallet'],
    ['📍 Where', 'Any PreCheck lane', 'Dedicated lanes at 65 airports'],
    ['🛡️ Backup', 'Your ID', 'A physical ID, if asked or if the match fails']
  ]) +
  '<h2>🪪 Do you still need to bring ID?</h2>' +
  '<p><strong>Yes.</strong> TSA says to bring a physical ID as a backup and to show it if an officer asks or if the face match fails. Southwest&rsquo;s page repeats it: bring your physical ID. Opting in does not replace a REAL ID or a passport, so check ours first: <a href="/blog/can-you-fly-without-a-real-id-2026/">can you fly without a REAL ID</a>.</p>' +
  fig(1, 'Woman in a home hallway zipping a jacket pocket that holds a REAL ID driver license and a passport, with a sticky note on the mirror reading ID in pocket', 'Bring your physical ID anyway: TSA calls it the backup.') +
  '<h2>✅ Who can use it</h2>' +
  cl([
    ['🛂', '<strong>An active TSA PreCheck membership</strong> with a valid Known Traveler Number. Not a member yet? See <a href="/blog/tsa-precheck-cost-how-to-apply-2026/">how to apply for TSA PreCheck</a>.'],
    ['📕', '<strong>A valid passport.</strong> You opt in with it, and the live photo is matched against it.'],
    ['✈️', '<strong>A rewards account with a participating airline</strong>, or a Google ID pass in Google Wallet. TSA names American, Alaska, Delta, Hawaiian, Southwest and United.'],
    ['👤', '<strong>Each traveler opts in separately.</strong> Delta says everyone in your party must opt in, including children. Southwest requires you to be 18 or older.']
  ]) +
  '<h2>🔧 How to opt in</h2>' +
  '<p>There are two routes. Pick the one that matches where you keep your boarding passes.</p>' +
  PATHS +
  '<p>Google launched the Wallet route on 24 June 2026 and said it would roll out over the following weeks. With it, TSA says Touchless ID works with 100+ TSA PreCheck airlines at participating airports. Delta adds that a change can take up to 10 minutes to appear on your profile, and you check in with its app to get the badge.</p>' +
  PILL +
  fig(2, 'Over-the-shoulder view of a man on an airport gate bench holding a phone that shows a boarding pass with a Get started button and a message about sharing his ID pass with TSA', 'In Google Wallet, opting in starts from the boarding pass.') +
  '<h2>🚶 At the airport</h2>' +
  LANE +
  '<p>Southwest says you must use a mobile boarding pass to use the Touchless ID lane. TSA&rsquo;s own materials describe the check as 10 seconds or less.</p>' +
  '<h2>📍 Which airports</h2>' +
  '<p>TSA says Touchless ID is available at <strong>65 airports</strong>. TSA&rsquo;s map labels the airports below. The rest sit in the map&rsquo;s East Coast inset, which TSA does not spell out in text, and one of them, Miami, TSA announced separately in February 2026. Your airline&rsquo;s page shows its own list, so check it before you fly.</p>' +
  CODES +
  '<h2>🔒 Photos, privacy and saying no</h2>' +
  cl([
    ['🗑️', '<strong>Deleted within 24 hours.</strong> TSA says your photo and personal data are deleted within 24 hours of your scheduled flight departure.'],
    ['🚫', '<strong>Not used for law enforcement or surveillance</strong>, and not shared, says TSA.'],
    ['🙅', '<strong>It is voluntary.</strong> TSA says travelers can decline the photo and have an officer check their ID instead, with no negative consequences.']
  ]) +
  '<h2>❓ Quick answers</h2>' +
  faq([
    ['What is TSA PreCheck Touchless ID?', 'An opt-in benefit for TSA PreCheck members that verifies your identity with a camera and your stored passport photo, instead of showing a physical ID at the checkpoint.'],
    ['Is TSA PreCheck Touchless ID free?', 'TSA describes it as a benefit for PreCheck members and its page lists no separate fee. You still need a PreCheck membership.'],
    ['Which airports have TSA PreCheck Touchless ID?', 'TSA says 65. Its map labels the airports listed above, and your airline&rsquo;s page shows its own list.'],
    ['Which airlines offer it?', 'American, Alaska, Delta, Hawaiian, Southwest and United through their own accounts, plus 100+ TSA PreCheck airlines through Google Wallet at participating airports.'],
    ['Do I still need my ID with Touchless ID?', 'Yes. TSA says to bring a physical ID as a backup, in case an officer asks or the face match fails.'],
    ['Do I need a passport to use it?', 'Yes. You opt in with a valid passport, and the live photo is matched against it.'],
    ['How long does TSA keep my photo?', 'TSA says your photo and personal data are deleted within 24 hours of your scheduled departure.'],
    ['Can I say no to the camera?', 'Yes. TSA says the photo is optional and an officer can check your ID instead, with no penalty.']
  ]) +
  '<p><em>Checked October 2026 on TSA, airline and Google pages. Airports and airlines keep being added, so confirm yours on the TSA page and your airline&rsquo;s page before you fly.</em></p>' +
  SRC([
    ['https://www.tsa.gov/touchless-id', 'TSA &mdash; TSA PreCheck Touchless ID'],
    ['https://www.tsa.gov/news/press/releases/2026/06/24/tsa-google-wallet-launch-new-tsa-precheck-touchless-id-opt', 'TSA &mdash; Google Wallet opt-in (24 June 2026)'],
    ['https://www.tsa.gov/news/press/releases/2026/05/28/tsa-precheckr-touchless-id-now-available-albuquerque-international', 'TSA &mdash; Touchless ID at Albuquerque (28 May 2026)'],
    ['https://www.tsa.gov/news/press/factsheets/facial-comparison-technology', 'TSA &mdash; Facial comparison technology fact sheet'],
    ['https://www.tsa.gov/sites/default/files/tsa-precheck-touchless-id-partner-guide_2026.pdf', 'TSA &mdash; Touchless ID partner guide (January 2026)'],
    ['https://www.delta.com/us/en/check-in-security/expedited-airport-security/touchless-id', 'Delta &mdash; Touchless ID'],
    ['https://www.southwest.com/tsa-precheck-touchless-id/', 'Southwest &mdash; Touchless ID'],
    ['https://blog.google/products-and-platforms/platforms/google-pay/google-wallet-tsa/', 'Google &mdash; Google Wallet and TSA PreCheck Touchless ID']
  ]);

module.exports = {
  slug: SLUG,
  title: 'TSA PreCheck Touchless ID (2026): How It Works, Airports and How to Opt In | canitakethis.co',
  desc: 'TSA PreCheck Touchless ID lets members verify identity with a camera at 65 airports. Who can opt in, airlines and Google Wallet, which airports, and why you still bring ID.',
  h1: 'TSA PreCheck Touchless ID (2026): How It Works, Airports and How to Opt In',
  body
};
