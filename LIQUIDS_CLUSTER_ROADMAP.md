# Liquids cluster: roadmap to dominate the topic

Written 2026-10-02. Goal (user decision): "attack" the liquids topic from many angles, one page per search intent, and be dominant. Liquids is one of the most-searched airport questions. Never push back on making more pages here.

Workflow for every page below (HARD): 1) demand check first (Ahrefs Keyword Generator or Google Trends, user sends screenshots), 2) competitor check + our angle, 3) title/slug proposal, wait for "lock it", 4) verify facts on official pages (TSA item pages, FAA, gov), 5) build + preview link, 6) four image prompts per `IMAGE_PROMPT_GUIDE.md`, 7) user says "deploy" then commit and push at once.

## Demand evidence collected (2026-10-02)

Ahrefs free Keyword Generator (volume buckets only: ">1000", ">100", "<100"; KD = difficulty):

| Seed | Result |
|---|---|
| `bring on a plane` (1,751 kws) | about 15 top kws are >1000 and mostly Easy: how many oz / ounces / fl oz / fluid ounces can you bring on a plane; how much liquid can you / can i bring on a plane; what size liquid (>100). "what can i bring on a plane" is >1000 but Hard. |
| `take on a plane` (2,452 kws) | >1000: how much liquid can you take on a plane in checked baggage; how many ounces / oz / fl oz / fluid ounces can you take; what size toothpaste / deodorant can you take on a plane. |
| `a liquid tsa` (515 kws) | >1000: is deodorant / toothpaste / mascara a liquid tsa; does deodorant / toothpaste / mascara / lotion count as a liquid tsa. Lotion and mascara KD Hard. >100: lipstick, makeup, "is deodorant considered a liquid tsa". |
| `considered a liquid` (1,001 kws) | >1000: is mascara considered a liquid when flying; is toothpaste considered a liquid. >100: lotion, lipstick, deodorant variants; "what is considered a liquid for tsa" (Hard). |
| `is cream a liquid` | all <100. Cream as a texture word is thin; people search the named product. |
| `is a liquid on a plane` | 1 keyword, <100 (too literal a seed). |

Search Console (to 2026-09-30): "how many ml allowed on a plane" cluster about 400 impressions at positions 67 to 94; airline liquids programmatic pages 150 to 390 impressions each at positions 8 to 30. The blog pages do not yet appear in the top pages.

## What we already have (read, not assumed)

- `liquids-100ml-rule-2026` (about 840 words): ml framing, never says oz, "3.4", "fluid" or "checked". Whole US-ounce and checked-bag cluster uncovered.
- `is-deodorant-a-liquid-2026` (about 760 words): short item-by-item, no table, no lotion or sunscreen. Title also names mascara and toothpaste.
- `aerosols-on-a-plane-2026` (about 970 words), `liquid-medication-exemption-2026`, `duty-free-bag-extra-carry-on-2026`, baby food (formula) article, food list article (spreads and sauces rows).
- 78 airline liquids pages (`/airline/<x>/liquids/`), generic template.
- The main app (`canitakethis.html`) already has a liquids checker with a size picker, but no product-type search.

## Architecture: one pillar, many spokes

Pillar = the master "Is it a liquid?" list. Spokes link up to it and sideways to each other. Add a "Liquids" section on the blog hub. Link every airline liquids page to the pillar and the oz page.

## Roadmap, in priority order

1. **Master list: "Is It a Liquid? TSA Rules for 100+ Products: Cream, Toothpaste, Mascara, Lotion & More (2026)"** (proposed slug `is-it-a-liquid-tsa-list-2026`, awaiting "lock it"). Searchable product-type table: liquid or not, carry-on verdict, checked bag, "if it is over 100 ml, do this". Captures the 515 plus 1,001 long-tail keywords and the woman-with-an-expensive-cream scenario. Data: TSA "What can I bring" personal-care and food items (scrape like the food list), TSA 3-1-1 page. Demand: measured (Ahrefs). Competitor check: not done.
2. **Oz page: "How Many Ounces Can You Bring on a Plane? 3.4 oz Carry-On Limit, Checked Bags & Size Chart (2026)"** (slug `how-many-ounces-can-you-bring-on-a-plane-2026`). Size chart (1 to 8 oz, 4 oz edge case), containers per quart bag, checked-bag column, toothpaste, deodorant and sunscreen sizes from TSA item pages. Demand: measured (about 15 kws >1000). Competitors read: KAYAK, Remitly, Booking, AirHelp, Afar, Travelpro (mostly prose). Title/slug proposed, not locked.
3. **Checked bag liquids: "How Much Liquid Can You Put in a Checked Bag?"** (">1000"). TSA: no general limit; aerosol toiletries 18 oz per container and 70 oz total (verify on TSA page); alcohol 24 to 70% ABV 5 L; over 70% banned; flammables; airline weight; leak-proof packing; destination customs. Demand: measured. Do not duplicate the alcohol-in-checked-luggage topic that was dropped; link to the alcohol article.
4. **Over-the-limit options: "Your product is over 100 ml: what are your options?"** Half-empty full-size bottle (container size counts, not content), decanting into travel bottles, travel size, buy at destination, solid swaps, ship ahead, checked bag, duty-free bag. This is the scenario page. Demand: NOT measured yet (seeds to try in Ahrefs: `half empty`, `bigger than 3.4`, `over 100ml`).
5. **Product spokes** (each needs its own demand check and TSA verification):
   - Toothpaste: "is toothpaste a liquid" (>1000, four variants, Easy). Size traps (4 oz tubes), toothpaste tablets.
   - Mascara, lipstick, foundation, makeup: mascara >1000 (Hard), makeup/lipstick >100. Cosmetics were dropped earlier on Trends but Ahrefs now shows demand; re-check.
   - Lotion, sunscreen, skincare, face cream: lotion >1000 (Hard); sunscreen and skincare not measured.
   - Deodorant: deepen the existing article (stick vs gel vs spray vs roll-on).
   - Shampoo, conditioner, hair gel, hairspray; contact lens solution; perfume and cologne (earlier Trends about 0, re-check in Ahrefs).
6. **Liquid-like foods: peanut butter, Nutella, hummus, yogurt, jam, honey, soup** (TSA's most confiscated items). Dropped earlier on Trends; re-check in Ahrefs. Overlaps the food list article, so make it the "spreads and sauces" angle with a different intent.
7. **Water bottle and drinks through security** (empty it, refill after). Not measured.
8. **Rule changes by country or airport scanner** (CT scanners, countries lifting 100 ml): must be verified on official sources (EU, UK DfT, TSA). Trends showed "ct scanner airports" about 0; check Ahrefs before any work.
9. **Tool: product-type typeahead plus size checker** in the main app (type "face cream", enter 120 ml, get verdict and what to do), linking to the pillar. Brand-level search needs a product-size database we cannot verify, so product type plus size first.
10. **Upgrade the thin existing pages**: add oz and conversions to `liquids-100ml-rule-2026`, add checked-bag and oz cross-links, bring the deodorant page up to the new standard.

## Angles considered and rejected (do not re-propose)

- "Is cream a liquid" as a standalone page (under 100).
- Hair straighteners, razors, scissors, lighters/matches, drones, AirTags, CT-scanner list, food article 3 (frozen/homemade/canned), carry-on 2026 (seasonal and fading), per-airline vape rules (about 1 to 2 each in Trends).

## Open data-quality notes

- Ahrefs buckets are coarse; ask the user for exact volumes only if a choice depends on them.
- Verify every product statement on TSA's own item pages; label customs or other-country statements "typical".
