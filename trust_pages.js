// About / Contact / Privacy / Terms. Rendered through guideShell so they share the global header and footer with every other page.
// Rewritten 2026-10-05: previously a separate legacy shell without the header controls.
module.exports = function (ctx) {
  const { write, guideShell, pages, AIRLINES, COUNTRIES } = ctx;
  const EMAIL = 'getapps.support@gmail.com';
  const ENDPOINT = 'https://formsubmit.co/ajax/' + EMAIL;

  const CSS = '<style>.tp-grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin:1em 0}.tp-card{border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:14px}.tp-card h3{margin:0 0 6px;font-size:1.05rem}.tp-card p{margin:0;font-size:.95rem;color:var(--muted)}' +
    '.cf{display:grid;gap:14px;margin:1.2em 0;border:1px solid var(--line);border-radius:14px;background:var(--surface);padding:18px}.cf label{display:block;font-size:.95rem;font-weight:600;margin:0 0 6px}.cf label span{font-weight:400;color:var(--muted)}' +
    '.cf input,.cf textarea,.cs-btn{width:100%;font:inherit;font-size:1rem;color:var(--text);background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:10px 12px}.cf input,.cs-btn{height:46px}.cf input[type=hidden]{display:none}.cf textarea{min-height:140px;resize:vertical}.cf input:focus,.cf textarea:focus,.cs-btn:focus-visible{outline:2px solid var(--accent);outline-offset:1px;border-color:var(--accent)}' +
    '.cf-row{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}.cf-hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}' +
    '.cs{position:relative}.cs-btn{display:flex;align-items:center;justify-content:space-between;gap:10px;text-align:left;cursor:pointer;font-weight:400}.cs-btn:hover,.cs-btn[aria-expanded="true"]{border-color:var(--accent)}.cs-btn svg{flex:none;width:16px;height:16px}.cs-val{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.cs-menu{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:50;padding:8px;border:1px solid var(--line);border-radius:14px;background:var(--surface);box-shadow:0 12px 32px rgba(0,0,0,.35)}.cs-menu[hidden]{display:none}' +
    '.cs-item{display:block;width:100%;border:0;background:transparent;color:var(--text);font:500 .95rem/1.3 Inter,system-ui,sans-serif;padding:9px 10px;border-radius:9px;cursor:pointer;text-align:left;justify-self:auto}.cs-item:hover,.cs-item:focus-visible{background:var(--surface-2);outline:none}.cs-item[aria-selected="true"]{background:#4CC2FF;color:#08111f}[data-theme="light"] .cs-item[aria-selected="true"]{background:#1B2233;color:#fff}' +
    '.cf button.cs-btn,.cf button.cs-item{padding:10px 12px;font-size:1rem}.cf button.cs-item{padding:9px 10px;font-size:.95rem;font-weight:500;color:var(--text);background:transparent;border-radius:9px}.cf button.cs-item[aria-selected="true"]{background:#4CC2FF;color:#08111f}[data-theme="light"] .cf button.cs-item[aria-selected="true"]{background:#1B2233;color:#fff}.cf button.cs-btn{background:var(--bg);color:var(--text);font-weight:400}' +
    '.cf button[type=submit]{justify-self:start;font:inherit;font-weight:700;font-size:1rem;border:0;border-radius:10px;padding:11px 22px;background:var(--accent);color:#08111f;cursor:pointer}[data-theme="light"] .cf button[type=submit]{color:#fff}.cf button[type=submit]:hover{opacity:.9}.cf button[type=submit]:disabled{opacity:.5;cursor:default}' +
    '.cf-msg{font-size:.95rem;min-height:1.4em}.cf-msg.err{color:var(--stop)}.cf-ok{border:1px solid var(--go);border-radius:14px;background:var(--surface);padding:18px;margin:1.2em 0}.cf-ok b{font-size:1.1rem}</style>';

  const FORM = CSS +
    '<form class="cf" id="cf" novalidate>' +
    '<div class="cf-row"><div><label for="cf-name">Name <span>(optional)</span></label><input id="cf-name" name="name" type="text" autocomplete="name"></div>' +
    '<div><label for="cf-email">Email <span>(only if you want a reply)</span></label><input id="cf-email" name="email" type="email" autocomplete="email"></div></div>' +
    '<div class="cf-row"><div><label for="cs-btn">What is this about?</label><div class="cs" id="cs"><input type="hidden" name="topic" id="cf-topic" value="Correction (wrong or out of date)"><button type="button" class="cs-btn" id="cs-btn" aria-haspopup="listbox" aria-expanded="false"><span class="cs-val">Correction (wrong or out of date)</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="cs-menu" role="listbox" hidden><button type="button" class="cs-item" role="option" aria-selected="true">Correction (wrong or out of date)</button><button type="button" class="cs-item" role="option" aria-selected="false">Question about a page</button><button type="button" class="cs-item" role="option" aria-selected="false">Suggestion (topic or feature)</button><button type="button" class="cs-item" role="option" aria-selected="false">Business or press</button><button type="button" class="cs-item" role="option" aria-selected="false">Something else</button></div></div></div>' +
    '<div><label for="cf-page">Page address <span>(optional)</span></label><input id="cf-page" name="page" type="text" placeholder="https://canitakethis.co/..."></div></div>' +
    '<div><label for="cf-msg">Message</label><textarea id="cf-msg" name="message" required></textarea></div>' +
    '<div class="cf-hp" aria-hidden="true"><label>Leave this empty<input name="_honey" type="text" tabindex="-1" autocomplete="off"></label></div>' +
    '<button type="submit" id="cf-send">Send message</button><div class="cf-msg" id="cf-status" role="status" aria-live="polite"></div></form>' +
    '<div class="cf-ok" id="cf-done" hidden><b>Thanks, your message is on its way.</b><p>We read every message. If you left an email address we will reply there.</p></div>' +
    '<script>(function(){var cs=document.getElementById("cs");if(cs){var bt=cs.querySelector(".cs-btn"),mn=cs.querySelector(".cs-menu"),it=[].slice.call(cs.querySelectorAll(".cs-item")),hv=document.getElementById("cf-topic");' +
    'function op(o){mn.hidden=!o;bt.setAttribute("aria-expanded",o?"true":"false")}function pick(i){it.forEach(function(x){x.setAttribute("aria-selected",x===i?"true":"false")});hv.value=i.textContent;bt.querySelector(".cs-val").textContent=i.textContent;op(false);bt.focus()}' +
    'bt.addEventListener("click",function(){op(mn.hidden);if(!mn.hidden){var s=cs.querySelector("[aria-selected=true]");if(s)s.focus()}});it.forEach(function(x){x.addEventListener("click",function(){pick(x)})});' +
    'document.addEventListener("click",function(e){if(!cs.contains(e.target))op(false)});' +
    'cs.addEventListener("keydown",function(e){var k=e.key,i=it.indexOf(document.activeElement);if(k==="Escape"){op(false);bt.focus()}else if(k==="ArrowDown"||k==="ArrowUp"){e.preventDefault();if(mn.hidden){op(true);(cs.querySelector("[aria-selected=true]")||it[0]).focus();return}var n=k==="ArrowDown"?Math.min(it.length-1,i+1):Math.max(0,i<0?0:i-1);it[n].focus()}});}' +
    'var f=document.getElementById("cf");if(!f)return;var st=document.getElementById("cf-status"),b=document.getElementById("cf-send");' +
    'f.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(f);if(d.get("_honey"))return;var m=(d.get("message")||"").toString().trim();var em=(d.get("email")||"").toString().trim();' +
    'st.className="cf-msg";if(!m){st.className="cf-msg err";st.textContent="Please write a message first.";return}' +
    'if(em&&!/^[^@ ]+@[^@ ]+[.][^@ ]+$/.test(em)){st.className="cf-msg err";st.textContent="That email address does not look right.";return}' +
    'b.disabled=true;st.textContent="Sending...";var p={name:d.get("name")||"",topic:d.get("topic"),page:d.get("page")||"",message:m,_subject:"canitakethis.co contact form",_template:"table",_honey:""};if(em){p.email=em;p._replyto=em}' +
    'fetch(' + JSON.stringify(ENDPOINT) + ',{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(p)}).then(function(r){return r.json().catch(function(){return{}})}).then(function(j){' +
    'if(j&&(j.success==="true"||j.success===true)){f.hidden=true;document.getElementById("cf-done").hidden=false}else{throw 0}}).catch(function(){b.disabled=false;st.className="cf-msg err";st.textContent="Could not send. Please try again or email us directly."})})})();</script>';

  const page = (url, title, desc, h1, body, freq) => {
    write(url.slice(1) + 'index.html', guideShell({ url, title, desc, h1, body }));
    pages.push({ url, changefreq: freq });
  };

  page('/about/', 'About canitakethis.co: Who We Are and How We Check Rules', 'What canitakethis.co is, what it covers, where its answers come from and how to send a correction.', 'About canitakethis.co',
    CSS +
    '<p>canitakethis.co answers one stubborn question: <strong>can I take this on the plane, or into the country?</strong> It also explains the travel paperwork around it, such as TSA PreCheck, REAL ID, ETIAS and the UK ETA, in plain language and with the official source next to every answer.</p>' +
    '<h2>What you will find here</h2>' +
    '<div class="tp-grid">' +
    '<div class="tp-card"><h3>' + AIRLINES.length + ' airlines</h3><p>Cabin and checked baggage rules, liquids, power banks, vapes and more, taken from each airline&rsquo;s own website.</p></div>' +
    '<div class="tp-card"><h3>' + COUNTRIES.length + ' countries</h3><p>Customs rules for cash, duty-free, alcohol, tobacco, food and medicines, from official customs authorities.</p></div>' +
    '<div class="tp-card"><h3>Travel guides</h3><p>In-depth articles in the <a href="/blog/">blog</a>: packing rules, medications, airline fees, U.S. travel programs and entry permits.</p></div>' +
    '</div>' +
    '<h2>Who it is for</h2>' +
    '<p>Travelers anywhere in the world. Sizes and weights show in inches and pounds first, and prices in U.S. dollars first, because most of our readers start from the United States. The unit and currency switches in the header change every page to centimeters, kilograms and your own currency.</p>' +
    '<h2>How we check what we publish</h2>' +
    '<ul><li><strong>Official sources only.</strong> Airline rules come from the airline&rsquo;s own site. Government rules come from the agency that sets them, such as TSA, CBP, gov.uk or the European Commission.</li>' +
    '<li><strong>Sources and dates are shown.</strong> Articles list their sources and say when they were last checked.</li>' +
    '<li><strong>We say what we could not confirm.</strong> If an official page is unavailable or unclear, the page says so instead of guessing.</li>' +
    '<li><strong>Prices are converted for convenience.</strong> Converted amounts are approximate; the published price is the one that counts.</li></ul>' +
    '<h2>What we are not</h2>' +
    '<p>We are not an airline, a government agency or an application service. We do not process visas, ETIAS, ESTA, UK ETA or TSA PreCheck applications and we never ask for your passport details. Always apply on the official site, and treat any site that offers to apply for you for an extra fee with caution.</p>' +
    '<h2>How the site is paid for</h2>' +
    '<p>The site is free to use and is supported by advertising. Ads never change what an answer says. See the <a href="/privacy/">Privacy Policy</a> for how advertising cookies work.</p>' +
    '<h2>Corrections</h2>' +
    '<p>Rules change often. If something is out of date or wrong, tell us the page and what you saw through the <a href="/contact/">contact form</a> or at <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>. We check it against the official source and update the page.</p>',
    'monthly');

  page('/contact/', 'Contact canitakethis.co: Corrections, Questions and Feedback', 'Send a correction, question or suggestion to canitakethis.co with the contact form or by email.', 'Contact us',
    '<p>We read every message. Use the form for a correction, a question about a page or an idea for a topic. Replies go to the email address you leave; without one, we still read your message.</p>' +
    FORM +
    '<h2>Other ways to reach us</h2>' +
    '<ul><li><strong>Email:</strong> <a href="mailto:' + EMAIL + '">' + EMAIL + '</a></li>' +
    '<li><strong>Feedback button:</strong> the round button in the bottom-right corner of every page sends a quick note without leaving the page.</li></ul>' +
    '<h2>To help us fix a correction fast</h2>' +
    '<ul><li>Paste the page address.</li><li>Say what the page says and what you saw instead.</li><li>Add a link to the official page if you have one.</li></ul>' +
    '<h2>What we cannot do</h2>' +
    '<p>We cannot give personal travel advice, check a specific item for you or contact an airline on your behalf. For a decision about your own trip, ask the airline or the official authority named on the page.</p>',
    'monthly');

  page('/privacy/', 'Privacy Policy | canitakethis.co', 'How canitakethis.co handles data, cookies, analytics, advertising, preferences and messages you send us.', 'Privacy Policy',
    '<p>Last updated: October 2026. This policy explains what information canitakethis.co (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects when you use this website and how it is used.</p>' +
    '<h2>Information we collect</h2>' +
    '<p>We do not ask you to create an account or to give personal details to use the site. If you write to us by email, the contact form or the feedback button, we receive your message and any name or email address you choose to include. We use it only to reply and to improve the site. Messages from the contact form and the feedback button are delivered to our inbox by FormSubmit, a third-party form service.</p>' +
    '<h2>Your preferences</h2>' +
    '<p>The site stores your theme, unit and currency choices in your browser (local storage) so they are remembered on your next visit. They stay on your device and are not sent to us.</p>' +
    '<h2>Cookies and analytics</h2>' +
    '<p>We use Google Analytics to understand how the site is used, for example which pages are visited and from which country. Google Analytics sets cookies and collects standard usage data such as approximate location, device and browser. You can block cookies in your browser settings or use a browser add-on to opt out of analytics.</p>' +
    '<h2>Advertising</h2>' +
    '<p>We may display advertising provided by third parties, including Google. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising in Google&rsquo;s Ads Settings, or opt out of a third-party vendor&rsquo;s use of cookies via <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info</a>.</p>' +
    '<h2>Exchange rates</h2>' +
    '<p>Currency conversion uses a rates file published on our own site (daily reference rates from the European Central Bank). Your browser does not contact a third party for rates.</p>' +
    '<h2>Third-party links</h2>' +
    '<p>Our pages link to airline and government websites so you can confirm the official rules. We are not responsible for the content or privacy practices of those sites.</p>' +
    '<h2>Children</h2>' +
    '<p>This site is for a general audience and is not directed at children under 13. We do not knowingly collect personal information from children.</p>' +
    '<h2>Changes</h2>' +
    '<p>We may update this policy from time to time. Continued use of the site after changes means you accept the updated policy.</p>' +
    '<h2>Contact</h2>' +
    '<p>Questions about this policy? Use the <a href="/contact/">contact form</a> or email <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.</p>',
    'yearly');

  page('/terms/', 'Terms of Use | canitakethis.co', 'The terms governing your use of canitakethis.co, including disclaimers and limitation of liability.', 'Terms of Use',
    '<p>Last updated: October 2026. By using canitakethis.co (&ldquo;the site&rdquo;), you agree to these Terms of Use. If you do not agree, please do not use the site.</p>' +
    '<h2>Guidance only, not professional advice</h2>' +
    '<p>The information on this site is for general information. It is <strong>guidance, not legal, travel, customs or professional advice</strong>. Airline baggage rules and country customs regulations change often and vary by nationality, route, fare class and individual circumstances.</p>' +
    '<h2>Not an official service</h2>' +
    '<p>canitakethis.co is independent. It is not affiliated with any airline, government agency or authorization program, including TSA, CBP, ETIAS or the UK ETA, and it does not accept applications for them.</p>' +
    '<h2>No warranty</h2>' +
    '<p>The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied, including accuracy, completeness, reliability or fitness for a particular purpose. We do not warrant that the information is current, error-free or applicable to your situation.</p>' +
    '<h2>Always confirm with the official authority</h2>' +
    '<p>Before you travel or pack, confirm any rule with the airline and the official government or customs authority. Those sources, not this site, have the final say. Decisions you make based on information found here are your own responsibility.</p>' +
    '<h2>Converted units and prices</h2>' +
    '<p>Unit and currency conversions are rounded and based on reference exchange rates. They are for convenience; the published size, weight or price from the official source is the one that counts.</p>' +
    '<h2>Limitation of liability</h2>' +
    '<p>To the fullest extent permitted by law, canitakethis.co and its operators are not liable for any direct, indirect, incidental, consequential or special loss or damage, including missed flights, denied boarding, confiscated items, fines, penalties, delays or extra costs, arising from your use of or reliance on the site or its content. Your sole remedy for dissatisfaction with the site is to stop using it.</p>' +
    '<h2>External links</h2>' +
    '<p>The site links to third-party websites for your convenience. We do not control them and are not responsible for their content, accuracy or practices.</p>' +
    '<h2>Changes to these terms</h2>' +
    '<p>We may revise these terms at any time. Continued use of the site after changes means you accept the revised terms.</p>' +
    '<h2>Contact</h2>' +
    '<p>Questions about these terms? Use the <a href="/contact/">contact form</a> or email <a href="mailto:' + EMAIL + '">' + EMAIL + '</a>.</p>',
    'yearly');
};
