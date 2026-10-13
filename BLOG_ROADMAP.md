# Blog roadmap (written 2026-10-10, session 20)

## SESSION 27 STATE (end of session 27, 2026-10-13, same day as session 26): READ THIS FIRST
- **Live: origin/main `06d0ff4ae` + docs commits (DEPLOY_FLOW, this handoff).** Full handoff = memory file `project_blog_roadmap.md` (session 27); this block is the repo copy. Site = 82 airlines, 85 countries, 11 Wi-Fi pages.
- **User order this session:** content RELIABILITY (official, verified) matters most; same page structure on all pages is fine. Wording/facts/tables only, NO structural change; the card-style quick answer stays; nothing is changed without telling him first and him understanding it; never invent. Purpose of everything = traffic from what people really search (check intent, measure, test before expanding).
- **Google "September 2026 spam update"** (24 Sep to 8 Oct) researched: Google named no target; only confirmed: enforces existing spam policies (scaled content abuse etc.), recovery takes months. Our drop (impressions about 2,000/day to 5-19/day from Oct 7) fits it, not proven. No manual action. Sources and reasoning in the memory file; `SEO_INCIDENT_2026-10-07.md`.
- **Airline reliability audit (read-only) done:** 15 sample stamps checked against live airline pages (Delta, Lufthansa, Qantas, Turkish, Emirates, KLM, JAL, LATAM, Ryanair, easyJet, Wizz, BA mostly confirmed; Aer Lingus and Iberia had details not on the cited page). About 65 vape, 78 perfume, 75 alcohol airline pages carry only generic "standard IATA" wording. Deployed `6992ad2d7`: Aer Lingus + Iberia liquids wording fixed; official vape/alcohol/perfume detail for Qantas, Philippine Airlines, Thai Airways (vape, alcohol, perfume), easyJet (alcohol, perfume), Virgin Australia (vape, perfume) in `airline_topics8.js`. Not found/blocked: Wizz (no rule on page), Etihad alcohol/perfume (PDF), Gulf Air, Malaysia, Air China (conflicting pages), Frontier/IndiGo/Kuwait unreadable or ambiguous. Untried from the priority list: Cathay, Vietnam, Air France, Lufthansa alcohol, Air Arabia, Pegasus perfume.
- **Bug found and fixed:** one invalid UTF-8 byte in BLOG_ROADMAP.md broke the GitHub Pages (Jekyll) build; the handoff commit of session 26 never published. Rule: after EVERY push run `gh run list --limit 1` = completed success; never write .md as latin1.
- **NEW: Wi-Fi tab (pilot), 11 pages LIVE:** Delta, American, JetBlue, Air Canada, Finnair, TAP, ITA, Austrian, Virgin Atlantic, SAS, Norwegian (`airline_wifi.js`, tab wired in `build.js` `airTabs`, page via `airPlaneShell` like Compensation). Rule: tab ONLY where the airline's own page gives reliable Wi-Fi info; hidden elsewhere. Format = chip + verdict cards per aircraft family + full table + how-to-connect + entertainment note + "last checked" date. Titles use "WiFi" (how people search). **PILOT TEST: check Search Console 2026-11-03** (impressions/clicks on the pages and queries "is delta wifi free", "delta wifi cost", "how to connect to delta wifi", "american airlines wifi cost"); if impressions: expand; if nothing after about 3 weeks: stop building Wi-Fi pages. Survey of all 82 airlines in `WIFI_SURVEY.md`.
- **NEXT TASK (user, last message):** airlines WITHOUT an organised per-aircraft list should still get a Wi-Fi tab with whatever official info they publish, card style, NOT filtered by aircraft type. Already read (data in the memory file): Southwest, WestJet, KLM, Air Europa. Still to read: United (page not reachable), Alaska (error page), Hawaiian, Lufthansa, BA, Air France, Swiss, Iberia, Eurowings, Aer Lingus (page text not readable) and others from the survey tiers.
- **Dates:** recheck GSC+GA 2026-10-15 and 2026-10-20 (log in `SEO_BASELINE.md`); food test compare 2026-10-26 and 2026-11-09; Wi-Fi pilot 2026-11-03.
- **User asked twice "what other ideas did you bring?" (unanswered): ask again once.**

## SESSION 26 STATE (end of session 26, 2026-10-13): READ THIS FIRST
- **Live: origin/main `3fae9406e` (+ this docs commit).** Site = 82 airlines, 85 countries. Full handoff = memory file `project_blog_roadmap.md` (session 26); this block is the repo copy.
- **NEXT SESSION = SEO audit and research** (user said so). Candidate scope: page types that look templated and may have been hit by the Sept spam update (765 medication pages, country pages, airline liquids/power-bank pages, 77 untouched food pages), what the pages that held up (blog articles) have in common, SERP/competitor comparison for lost queries, GSC query data, trust signals (About / How we verify / last-checked / contact: not started, needs approval). Recheck GSC + GA on Oct 15 and Oct 20; food test compare Oct 26 and Nov 9. No site-wide SEO change without CHANGE CONTROL (`SEO_RULES.md`).
- **SEO state 13 Oct:** GSC impressions Oct 7-10 = 16, 19, 5, 8 (before: about 2,000-2,800/day); GA organic Oct 6-12 = 45 sessions vs 154 the week before; no recovery. Numbers in `SEO_BASELINE.md`.
- **Done in session 26:** 72 of 82 airlines on the new baggage layout (added Israir, Arkia, Vietnam Airlines, Asiana, Vueling, Transavia, GOL; `baggage_detail20-23.js` + `baggage_cards2.js`); Ryanair price fix in `currency.js` (€/£); DESIGN_SYSTEM.md 8.20 coloured capsules = 8px + `audit_capsules.js`; homepage search covers airlines and all 85 countries, clear button, new placeholder and "write to us" line, heading/subtitle removed, H1 extended (build.js ~1085-1145); sitemap lastmod real dates for 81 pages (`lastmod_overrides.json` read by `seo_post.js`, user approved).
- **10 airlines still on the old page:** Saudia, Gulf Air, Cathay Pacific, Copa, Kuwait Airways, Alaska, Azul (no usable allowance figures or blocked), SunExpress, EgyptAir, Middle East Airlines (Cloudflare check: only readable if the user passes it in the Chrome tab; open offer). Details in `BAGGAGE_DETAIL.md`.
- **GSC indexing queue (user requests by hand):** done united, vueling, asiana, avianca, austrian; failed air-europa, pegasus (transient GSC error); not done ethiopian-airlines, gulf-air. Next order: 8 food test pages (Norway last crawled 2026-09-07 = old version), homepage, new baggage pages (israir, arkia, vietnam-airlines, transavia, gol), food UAE/Costa Rica/Slovenia, 2 duty-free blogs. See `GSC_INDEXING_TRACKER.md`.
- **HARD rules added:** zero narration between tool calls (user interrupted twice); say the field format when giving a URL to paste (GSC sitemap box takes the full URL here); coloured capsules 8px; give a browser link at once when asked; deploy only on "deploy".

## SESSION 25 STATE (end of session 25, 2026-10-12): READ THIS FIRST
- **Live: origin/main `71bd018d3`.** Site = 82 airlines, 85 countries. Full handoff = the memory file `project_blog_roadmap.md` (session 25); this block is the repo copy.
- **Baggage:** 65 of 82 airlines have the detailed page (`baggage_detail*.js`) and the card layout (`baggage_cards1/2.js`): top = the ONE Carry-on / Checked selector (`.bag2`, DESIGN_SYSTEM.md 8.18) + verdict card per fare with plain tags (Free, Costs extra, No free bag; 8.19), depth below with no repeated content. **17 airlines still on the old short page / old blocks** (Alaska, Vueling, Cathay Pacific, SunExpress, EgyptAir, MEA, Saudia, Kuwait, Copa, Gulf Air, Vietnam, Asiana, Transavia, Azul, GOL, Arkia, Israir): sites block automation or data unreadable; need the user to open them in his Chrome. New detailed airline = detail entry + cards entry.
- **Food test group (live):** 8 of 85 food pages rebuilt from official sources in chip + card format (South Korea, Norway, Mauritius, Taiwan, Romania, Iceland, Argentina, Serbia); title/description/H1 unchanged; control = 77 untouched; rollback tag `pre-food-rebuild-2026-10-12`; compare 2026-10-26 and 2026-11-09 (`SEO_BASELINE.md`).
- **SEO incident:** drop matches Google's September 2026 spam update (24 Sep to about 8 Oct); technical checks clean; see `SEO_INCIDENT_2026-10-07.md`. Recheck GSC + GA on Oct 15 and Oct 20. No site-wide SEO changes (CHANGE CONTROL).
- **Open:** decide the 17 old-layout airlines; Ryanair price label (currency converter turns "€/£10.49" into "€/$14"); user requests indexing when quota returns (`GSC_INDEXING_TRACKER.md`); trust-signal page, Bing Webmaster, linkable data page only on his approval.
- **HARD rules added:** never change a designed UX without asking; one component per job (selector); plain self-explanatory texts; no repeated content; deploy only on "deploy"; zero narration.

## SESSION 24 STATE (end of session 24, 2026-10-12)

- **Live: origin/main `d40804f0a` (+ the docs commit that follows it).** Site = 82 airlines, 85 countries.
- **THE SEO INCIDENT (top priority context): read `SEO_INCIDENT_2026-10-07.md`.** Google traffic collapsed from about 2,400 impressions/day to about 16 starting Oct 7, right after the site-wide SEO batch (`75cfe3397`, `e8119662a`). Cause not proven. On Oct 12 the ORIGINAL title + meta description text of 1,260 pages was restored (`seo_restore.json`, deployed `d40804f0a`). **Recheck GSC + GA on Oct 15 and Oct 20 (read via the user's Chrome) and log the numbers in `SEO_BASELINE.md`.** Decision tree is in the incident file section 6. NEW HARD rules: `SEO_RULES.md` CHANGE CONTROL, `node audit_seo_change_scope.js` in `DEPLOY_FLOW.md` step 3b. No site-wide SEO changes while recovering.
- **Shipped in session 24:** Iberia Compensation; Turkish Airlines Compensation + Customer Service (new "Customer Service" tab, always last, official contact info only); Virgin Atlantic, Hawaiian Airlines, WestJet, Volaris (6 pages each); airline overview pages removed (redirect to Baggage); "More rules for <airline>" block removed; stat cards unified (accent number 1.25rem); GSC lists rebuilt (`GSC_PRIORITY.md` NEXT REQUESTS, Day 2 to Day 6, full URLs; the user requests about 10 per day by hand).
- **European compensation run STOPPED:** Ahrefs showed "<carrier> compensation" phrases are under 100 searches for European carriers (Turkish: all under 100, refund policy over 100). Remaining EU carriers get a Compensation page only if the user asks.
- **NEXT WORK (user order of priority): (1) SEO recovery monitoring (above). (2) Airline expansion: next = Viva Aerobus (see `AIRLINE_EXPANSION.md`: ranking, procedure, models). (3) Customer Service pages for other airlines only after measuring demand and finding official contact pages (Turkish is the model; Delta/American are KD Hard).**
- Still true: demand first, official sources only, deploy only on "deploy", zero narration between tool calls, one short question at the end.


Rule: articles only where measured demand exists (Ahrefs free keyword generator, US, buckets only), official sources only, intent check + 3 title passes before locking each title, image workflow after. Update this file after each article ships.

## Measured demand (US, monthly search bucket of the top phrasing)

| Rank | Topic | Bucket | Variants | Covered now? |
|---|---|---|---|---|
| 1 | Personal item size (generic + Frontier, Delta, American, United) | over 10,000 | 2,846 | Only inside carry-on articles; no page leads with "personal item size" |
| 2 | TSA wait times (per airport: IAH, LAX, JFK) | over 10,000 | 8,904 | No. Needs live data: NOT buildable, skip |
| 3 | Do I need a passport to go to (Canada, Puerto Rico, Mexico, Bahamas) | over 1,000 each | 633 | No |
| 4 | Basic economy carry-on (United, Delta, American) | over 1,000 each | 243 | No |
| 5 | Flight delay compensation | over 1,000 (Delta, American over 100) | 2,053 | No |
| 6 | How early to arrive at the airport (also international, domestic) | over 1,000 | 91 | No |
| 7 | Flying with a baby | over 1,000 | 167 | Partly (baby food article) |
| 8 | ESTA visa | over 1,000 (KD hard, official site competes) | 1,049 | No (ETIAS and UK ETA exist) |
| 9 | Lost luggage | over 1,000 but retail intent ("lost luggage store"), mixed | 3,219 | No |
| 10 | Airline pet policy (per airline) | over 100 (head "news" over 1,000) | 161 | No |
| 11 | Overweight baggage fee (per airline) | over 100 each | 545 | Partly (baggage pages) |
| 12 | Customs declaration form (US) | over 100 | 972 | Forms-by-country article exists |
| 13 | Do I need a visa for (Japan, Thailand, Vietnam, Italy) | over 100 each, KD hard | 2,156 | No |
| 14 | Single items on a plane: CBD, drone, CPAP, gun | over 100 each | 33-255 | Only CBD article; rejected as buttons (too small) |

Rejected (under 100): prohibited items on a plane, airport security rules, minimum layover time, flying without ID (over 100 head, Real ID article covers it), musical instruments.

## STATUS 2026-10-11 (end of session 20): #1 DONE (/blog/personal-item-size-by-airline-2026/) and #2 DONE (/blog/basic-economy-carry-on-rules-2026/), both deployed (b39c16428, b1e3bd932). NEXT = #3 passport article (US citizens: Canada, Mexico, Bahamas, Puerto Rico).

## Build order

1. **DONE: Personal item size by airline (2026)**: pillar. Title leads "Personal Item Size", all major airlines in one table with cm and inches, official airline pages only. Then per-airline pages only for Frontier, American, Delta, United if the pillar shows impressions (avoid clones of the carry-on articles: different structure, personal-item rules, under-seat fit, fees).
2. **DONE: Basic economy carry-on (title: Basic Economy Carry-On 2026: Does United, Delta or American Allow One?)**: separate intent from carry-on size (fare rules, gate-check fees), United, Delta, American, plus Alaska, JetBlue, Southwest, Frontier from their own fare pages.
3. **DONE 2026-10-11 (/blog/do-i-need-a-passport-canada-mexico-bahamas-puerto-rico-2026/): Do I need a passport to go to Canada, Mexico, the Bahamas, Puerto Rico (US citizens)**: borders pillar, State Department, CBP and territory pages; air versus land and sea; Puerto Rico is domestic.
4. **Flight delay compensation: US rules versus EU and UK**: US Department of Transportation and the EU/UK rules, what an airline owes by delay length, official pages only.
5. **How early to arrive at the airport**: domestic and international, from airport and airline official guidance.
6. **Flying with a baby**: ID, lap infant, formula and gear, TSA and airline pages.
7. Later, if impressions justify: ESTA (hard), airline pet policy per airline, overweight fees per airline.

## Not buildable or not worth it
TSA wait times (live data), lost luggage store intent, single-item buttons for the app (all under 1,000).

## Open work from the queue (not articles)
Turkey, Spain, France duty free done. Cuba vapes parked until an official text exists. Workflow per article: see memory project_blog_roadmap.md section 4.

## STATUS 2026-10-11 (session 21): #3 DONE and deployed (4 photos + 3 graphics). NEXT = #4 flight delay compensation US vs EU/UK.

## UPDATE 2026-10-11 (user): VISION + COMPENSATION PLAN
Vision: the AUTHORITY for airline info and country customs/entry rules, all in one place. Roadmap #4 is replaced by: (1) Delayed Flight Compensation 2026: What US Airlines Owe You (/blog/delayed-flight-compensation-us-airlines-2026/; EU/UK only a short box); (2) Bumped / overbooked / denied boarding compensation (DOT cash rules); (3) Cancelled flight compensation; (4) airline "Compensation" pages (delayed, overbooking, cancelled) for the most popular US, European, Asian and Arab airlines, button visible ONLY where reliable official data exists. Demand (Ahrefs US): delayed flight compensation >1000, american airlines delayed >1000; Delta/United/Southwest/JetBlue delayed >100; cancelled, bumped, overbooked, denied boarding generic >100.

## STATUS END OF SESSION 21 (2026-10-11) - READ THIS BLOCK FIRST
- DEPLOYED this session: /blog/do-i-need-a-passport-canada-mexico-bahamas-puerto-rico-2026/ (commit b34df43a6, roadmap #3) and /blog/delayed-flight-compensation-us-airlines-2026/ (commit 45318d0c0, compensation article #1). origin/main = 45318d0c0, nothing unpushed.
- NEXT = compensation article #2: bumped / overbooked / denied boarding (DOT cash rules; AMOUNTS MUST BE READ ON DOT PAGES AND EACH AIRLINE'S OWN PLAN BEFORE USE, not from search summaries). Then #3 cancelled flight compensation, then #4 airline "Compensation" pages + button (visible only where reliable official data exists; sections: delayed, overbooking, cancelled). Remaining original roadmap: how early to arrive at the airport, flying with a baby, ESTA, pet policy per airline, overweight fees per airline.
- Demand (Ahrefs US buckets): bumped flight compensation >100, overbooked flight compensation >100, denied boarding compensation >100 (airline variants <100); cancelled flight compensation >100 (american, delta >100); delayed flight compensation >1000.
- Visual mix is decided PER ARTICLE by relevance (4 photos + graphs is fine; 2 photos + 3 graphics is fine); QA gate requires only card + hero; see IMAGE_PROMPT_GUIDE.md end.

## STATUS END OF SESSION 22 (2026-10-11) - READ THIS BLOCK FIRST (also memory project_blog_roadmap.md)
- DEPLOYED this session: /blog/overbooked-flight-compensation-us-airlines-2026/ (4b910b125, compensation #2: DOT 200%/400%, caps $1,075/$2,150, American/Delta/United/Southwest/JetBlue contracts, EU/UK amounts) and /blog/eu261-compensation-explained-us-travelers-2026/ (435e438ef: which flights EU261 covers, direction diagram, amounts, extraordinary circumstances, claim route, 2026 reform status). origin/main = 435e438ef, nothing unpushed. Only this handoff text (BLOG_ROADMAP.md, IMAGE_PROMPT_GUIDE.md, ARTICLE_QA.md) is uncommitted: it rides along with the next deploy (`git add -u`).
- NEXT = compensation #4 "cancelled flight compensation + refund": sources READ (DOT Refunds page updated 7 Nov 2025; American Conditions of Carriage; Delta Rule 19; United Rules 24/27 (partly); Southwest CoC s9.b; JetBlue CoC s25), demand measured, WAITING for "lock it" on: title "Cancelled Flight Compensation 2026: Refund Rights and What US Airlines Owe You", slug /blog/cancelled-flight-compensation-refund-us-airlines-2026/. Angle = REFUNDS (automatic refund 7 business days card / 20 calendar days other, cash vs credit with 5-year validity, fees and bag fees, agents as merchant of record), not the meal/hotel table already in the delayed article. Full fact list: memory project_blog_roadmap.md section 3.
- Ranked demand (Ahrefs US buckets, session 22): EU261 DONE; cancelled + refund = #4; trip delay insurance (credit cards; ask the user, financial-product caution); airline compensation hub; missed connection; delay calculator; DOT complaint. LOW: tarmac, lost/delayed luggage, Canada, weather-only, strike, schedule change, bag fee refund, hotel voucher.
- Brainstorm directions (open, not a plan): data pages (which airline bumps the most, DOT/BTS quarterly), calculators, passenger-rights-by-country table, extra rights (missed connection, strike, schedule change, downgrade, delayed-bag fee refund, wheelchair damage), credit-card trip-delay cover, how-to-complain pages, Canada APPR.
- Then airline "Compensation" pages + button (visible only where official own-page data exists; sections delayed / overbooked / cancelled).
- Rules learned: visual mix per article by relevance and never the easy default; measure before claiming a phrasing is bigger; SVG text must render 14 px or more at 375 px; build.js is CRLF; Commons needs a throttled Python script.

## STATUS END OF SESSION 23 (2026-10-11) - READ THIS BLOCK FIRST (full detail in memory project_blog_roadmap.md)
- origin/main = 0b578b256, LIVE, nothing unpushed. Vision: the authority for airline info and country entry rules.
- LIVE this session: compensation article #4 (/blog/cancelled-flight-compensation-refund-us-airlines-2026/) and 13 airline Compensation pages /airline/<slug>/compensation/ in chip + green/yellow/red verdict-card format (american-airlines, delta, united, southwest, jetblue, ryanair, easyjet, lufthansa, british-airways, air-france, klm, wizz-air, aer-lingus); files airline_compensation.js, airline_compensation_eu.js, airtabs.js. The Compensation tab shows only for airlines that have a page, always last.
- Global design changes live (DESIGN_SYSTEM.md): left-aligned stat cards; verdict chips 8px; card text at least 13.6px; airline and country tabs = one scrollable row (no All rules, no Show more); Carry-on tab removed (own carry-on article in Read the full guide).
- NEXT: remaining European carriers without a compensation page (iberia, vueling, tap-air-portugal, sas, finnair, swiss, austrian, brussels-airlines, eurowings, norwegian, transavia, lot-polish, ita-airways, icelandair, air-europa, aegean, turkish-airlines, pegasus, sunexpress). Method: WebSearch for official URLs, read them directly, only read facts on the cards, disclose unread. The user said "continue Wizz Air and Aer Lingus Compensation": both are ALREADY built and live (c4e26cbcd): clarify (GSC request vs next carriers).
- GSC: GSC_PRIORITY.md is the order of requests. REQUESTED 2026-10-11: Tier 1 (10 URLs) + american-airlines compensation. Day 2 next: delta, united, southwest, jetblue, ryanair, easyjet, british-airways, lufthansa, air-france, klm compensation. Recheck GSC about 2026-10-15.
- Not done: QA-gate entry for compensation pages, Compensation tile on airline hub pages, light-mode check.
