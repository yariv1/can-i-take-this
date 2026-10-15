# NotebookLM research prompt (written 2026-10-15)

Use: add sources to a NotebookLM notebook first (Search Console query export, Ahrefs keyword exports, competitor pages such as airline help centres, TSA/CBP, Wego/Kayak/Skyscanner help pages, Reddit r/travel and r/flying threads; or use NotebookLM "Discover sources" / Deep Research), then paste the prompt below.

```
You are a travel-search demand analyst. I run canitakethis.co, an English-language reference site and app for travellers: "Can I bring this on a plane or into a country?". Every page is built from official sources (airline websites, customs and aviation authorities).

WHAT WE ALREADY COVER (do NOT suggest these again):
A) Per airline (82 airlines), one page each:
 - Baggage allowance (carry-on and checked, by fare, sizes and weights)
 - Liquids (100 ml rule), Power banks and lithium batteries, Vapes and e-cigarettes, Perfume and aerosols, Alcohol you may bring
 - In-flight Wi-Fi (free or paid, which aircraft), Flight delay / cancellation / overbooking compensation rules, Customer service contacts
B) Per country (85 countries), one page each:
 - Alcohol, tobacco and cash/currency allowances when entering, Plants and seeds, Vaping rules, Pets entry rules, Food you may bring in
 - Medication rules for 9 products (Adderall, Ritalin, codeine, tramadol, Sudafed, Benadryl, Vicks inhaler, CBD oil, "into the country" general) in each country
C) Generic "on the plane" item rules: liquids, perfume/aerosols, power banks, vapes, alcohol, lighters, sharp objects, sports gear, animals, food, medication, cigarettes.
D) Guides (articles): carry-on sizes by airline, personal item sizes, TSA PreCheck / Global Entry / CLEAR, REAL ID, ETIAS, UK ETA, duty-free allowances, customs declaration forms, US/EU flight compensation, travel advisories (level 4 countries, Mexico, Caribbean).

WHAT WE DO NOT COVER YET (known gaps from our own Search Console queries): baggage fees and prices, duty-free "from country X to country Y", onboard alcohol SERVICE (does airline X serve alcohol), shop price lists, other languages.

TASK: Using ONLY the sources in this notebook (and say when a claim is not supported by a source), list the information travellers search for most, per airline or per country, that is NOT in the list above.

For each topic return a table row with:
1. Topic name (plain words a traveller would type)
2. Level: per airline / per country / per airline+country / generic
3. Example search queries (real phrasings found in the sources)
4. Evidence of demand (volume, number of threads or questions, source name). If there is no number, say "no volume in sources"; never invent volumes.
5. Can it be answered with a verifiable official source per airline or country (yes/no, which official page)?
6. Fits our pattern "one factual answer card per airline or country" (yes/no)

Then:
- Rank the top 15 by demand x answerability.
- Separate "quick win, data is on one official page" from "needs a data set we would have to build".
- List topics travellers ask about that are tied to a specific item ("can I bring X on a plane / into country Y") that we do not have as an item yet (for example baby formula and breast milk, drones, CPAP and medical devices, fireworks, firearms and ammunition, knives and tools, hair straighteners, e-scooters, wheelchairs, camera batteries). Rank those by demand too.
- Flag anything where the sources disagree or look unreliable.
- Do not recommend blog articles; I only want information features for the app and the airline/country pages.
```
