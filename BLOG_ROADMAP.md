# Blog roadmap (written 2026-10-10, session 20)

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
