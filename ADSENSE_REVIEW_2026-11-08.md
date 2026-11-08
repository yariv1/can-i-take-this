# AdSense rejection #3 — "Low value content" (read 2026-11-08, session 43)

Message in AdSense: "Your site isn't ready to show ads. Low value content." Ownership verified. Google does not name pages, so the cause below is the best-supported reading, not proof.

## What Google says it judges (from the message itself)
1. Authentic, high-quality information, tools or services.
2. Ongoing curation and structural maintenance.
3. Genuine, sustained user interest.
Plus "a consistent presence on the web" and "substantial unique value".
Google Search spam policy (scaled content abuse, thin/cookie-cutter templates): many pages made from templates or data "without adding value for users", and "cookie-cutter ... templates with the same or similar content" within one site. The policy judges the result, not how it was made. (https://developers.google.com/search/docs/essentials/spam-policies)
The official AdSense "low value content" help page could not be read (404 from our fetch); third-party guides agree on the same three tests and add: wait for real change before re-requesting.

## Evidence from our own build (2026-11-08, script scratchpad thin.js)
Sitemap 2,174 URLs: medication 846 (39%), airline 660, country 409, pets 85, food 85, blog 72 (3.3%), other 17.
Median unique words per page (text not shared with 20% of the same type):
| type | pages | median words | unique words | pages under 250 unique |
|---|---|---|---|---|
| medication | 846 | 211 | 114 | 837 |
| country | 515 | 140 | 105 | 315 |
| food | 85 | 703 | 57 (92% repeated frames) | 49 |
| pets | 85 | 326 | 174 | 47 |
| airline | 742 | 485 | 377 | 132 |
| blog | 72 | 1,049 | 1,033 | 10 |
| guides | 4 | 1,107 | 1,107 | 0 |
Traffic (GSC, 3 months): 1.02K clicks, 145K impressions, CTR 0.7%; two drops to ~0 (Oct 7-11, Oct 26-29). Domain age 12 weeks (first commit 2026-08-10). No backlinks known.

## Verdict per test
1. Information/tools: partly. Facts are sourced and the Can-I-take-this tool is real, but about 1,700 pages are one-fact pages built on the same sentence frames (medication, country, food, pets).
2. Curation: mixed. Site-wide rebuilds (titles, labels, "Updated" dates on all pages) in short windows look like churn, not curation.
3. User interest: fails today. About 330 clicks a month, two collapses to zero, no external links. No content rewrite fixes this criterion; only sustained traffic and links do.
Presence on the web: 12-week-old domain.

## Plan (one path)
1. Do NOT request review again now. Nothing the reviewer judges has changed since rejection #2.
2. Protect and grow organic traffic first (recovery since Oct 30; keep the freeze on mass edits).
3. Deepen real content where Google already shows us: the ~40 thin pages with the most impressions (pilot), only with facts read from the same official source, no guessing. Needs written approval (SEO rule: more than 40 pages).
4. Keep adding articles (72 now): they are the pages that clearly pass test 1.
5. Re-check on 2026-12-08: no zero-traffic day for 4 weeks, pilot pages deepened, then request review once.
Do not delete or merge the 846 medication URLs for AdSense: they carry the long-tail impressions; merging risks traffic for a revenue stream worth a few dollars a month at 330 clicks.

## Pilot log (approved 2026-11-08)
Mechanism: `country_depth.js` (section under the verdict card, own words, official page read, title/description/H1 untouched), hooked in `build.js` for country category pages and hubs.
Batch 1 done (not deployed): country/egypt/, country/egypt/tobacco/, country/norway/tobacco/, country/india/plants-seeds/ (unique text 47-69 -> 337-422 words). Guards pass (seo, source label, card label, capsules).
Finding: many airline pages (e.g. etihad-airways/alcohol) restate a global IATA rule because the airline's own pages say nothing on the topic. Words cannot honestly be added there; those pages need a different decision (see wrap-up), not more text.
Sources not readable by our fetch: abf.gov.au (403), Israel Tax Authority (search returned none), PDFs need pdftotext.

Batch 2 (not deployed): country/turkey/, turkey/tobacco/, chile/, chile/alcohol/, chile/tobacco/, chile/cash/ (now 239-344 words). Total pilot pages deepened: 10. Guards pass.
Blocked, not guessed: food pages (Malaysia, Philippines, Colombia, Indonesia, India, Nepal, Dominican Republic, Israel) have NO official source on the page at all (all 7 cards "based on global rules") and the agencies' sites are unreachable (DNS error, 403, bot check). Israel gov.il and Australian Border Force return 403. Medication pages already quote the INCB entry in full; no further official text exists to add.
Decision needed for the other 30 pilot slots: food (8), airline (21), medication (2) cannot be deepened with verified facts.
