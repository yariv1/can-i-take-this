# Medication expansion: workflow and rules (session 32, 2026-10-16)

Mission (user order): ALL the most searched medicines, country by country in demand order, every fact from an OFFICIAL page read in full, and "keep growing the list". Do NOT ask the user which country is next: take the next NOT DONE country in MEDICATION_COUNTRIES.md and continue (his order: "stop asking me each country, just go on").

## Data model (all in canitakethis.html, the built copies app.html, app/index.html, index.html are generated)
- `MED_DB`: searchable products (brand -> ingredient, flags controlled/injectable). `MED_PAGE`: brands that get their own /medication/<brand>/<country>/ page (only for countries that have a per-medicine row for that ingredient). The 8 base pages (adderall, benadryl, cbd-oil, codeine, ritalin, sudafed, tramadol, vicks-inhaler) exist for all 85 countries (build.js `medEntries`/`medFor`).
- `MED_RULES`: ingredient -> {country: level}; levels ban | permit | rx | ok; `def` = the OLD generic default (NOT verified: never present it as a country fact).
- `MED_VER`: verified per-medicine rows per country (head/lines/tag/src). `verified:true` is set automatically; page + search box + app card show the official wording.
- `MED_NOTE`: category-level rule per country `{c:[controlled lines],o:[other-medicine lines]}`. Controlled ingredients (MED_DB `controlled:true` or level ban/permit) become amber "It depends on whether it counts as a controlled substance"; others show the `o` lines.
- `MED_AUTH`: official links per country (array of {label,url}); the Helpful sources box and the footer state come from this.
- Generic wording for unverified levels: `medGeneric()` (never "controlled in <country>"). Search box copy: `TA_LIB` base64 in build.js (only needs patching if the card LOGIC changes, not for new countries).
- Tool: `node med_add_country.js note|verified spec.json` (see the header of that file). Status table: MEDICATION_COUNTRIES.md (regenerate after changes: the generator logic = parse MED_VER/MED_NOTE keys; update the table by hand or re-derive).

## Footer / source-state rules (DS 8.28, HARD, from the user)
- Footer = state label + one sentence per category and state + the category's OWN original text (the medication text "Medication rules vary by country and can change. This is guidance, not legal advice - carry your prescription and confirm with the official authority before you fly." must stay; he was furious when it was replaced).
- State follows the SOURCE LINK: link in the card = OFFICIAL SOURCE (green); none = BASED ON GLOBAL RULES (amber) with "We did not find an official source specific to <country> for this <medicine/food rule/pet import rule>, so this shows the general rules most countries follow."; UNOFFICIAL only for a named, dated third party (none used yet).
- NEVER write "we have not checked". A missing source in a western country means the search was not good enough: search harder.
- An unverified rule with a link is worded as the GENERAL rule and the footer says "The rule above is the general rule most countries follow. Confirm the rule for X at the official source linked above." (status info: "We do not have a verified rule for this one yet."). A category note country says "The rule above is the official rule for controlled substances."
- Guards (must pass before any deploy): audit_source_state.js, audit_internal_links.js, audit_source_links.js, audit_source_label.js and the rest of DEPLOY_FLOW.md.

## How to research one country (what worked)
1. `WebSearch` with `allowed_domains` limited to the country's health ministry / medicines agency / customs / embassy domains, query in English and the local language.
2. Read the page IN FULL: built-in browser pane `mcp__Claude_Browser__navigate` then `mcp__Claude_Browser__javascript_tool` (`await new Promise(r=>setTimeout(r,3500)); document.body.innerText`) or `get_page_text`. curl is blocked by many gov sites; the pane often works. PDFs: curl + `pdftotext -layout` (xpdf: no -bbox); tables with floating numbers: pypdf `extract_text(visitor_text=...)` and match by coordinates. Old .doc: decode UTF-16LE to read lists. WebSearch summaries are NOT reading.
3. Only state what the page says: quantity limits, documents, permits, named ingredients. If the page names no ingredients, use `note` mode (category rule), never invent a mapping.
4. Prefer pages updated recently; disclose old dates only inside the source label if relevant. Do not use a secondary/unofficial source without the Unofficial label (DS 8.21).
5. After adding: `node build.js`, check 3 built pages (a controlled ingredient, a non-controlled one, the hub), run audits, add new URLs to GSC_INDEXING_TRACKER.md, preview links to the user.

## Facts learned (corrections already shipped)
Japan Sudafed: not banned, needs permission if >10% pseudoephedrine (official list excludes products with 10% or less); Japan codeine: narcotic, permission needed (excluded if 1% or less); Japan Ritalin/Concerta: psychotropic, no permission up to the table amount; Australia Adderall: allowed with prescription up to 3 months (ODC page); Singapore Vicks (levomethamphetamine): approval needed, CBD banned; UAE: official controlled-medicine list, allowed for the stay up to 3 months with prescription/attested report (shown amber).

## Still open / unverified in the data
- 35 countries still NOT DONE as of session 34 (see MEDICATION_COUNTRIES.md for the reason each one failed; retry the blocked ones from another route). Old generic MED_RULES defaults remain for them (e.g. Pseudoephedrine `rx`).
- Japan rows not verified: Vicks inhaler (shown as general-rule text), Benadryl, CBD (unknown).
- Mexico, Malaysia, Saudi Arabia, USA (DEA), Italy ministry page, Thailand drug lists, Finland, Bulgaria, Philippines, Brazil, Chile, Argentina, Vietnam are blocked/unreadable from here (reasons in the table); try again with a different route (another official domain, embassy page, PDF link inside the page) before giving up.
- Food: 8 countries verified (South Korea, Norway, Mauritius, Taiwan, Romania, Iceland, Argentina, Serbia) with their own source block; all other food pages show global-rules or a link with the "general rule" sentence. Pets: no country verified (ANIMAL_AUTH links only). Next after medication: food and pets per-country official sources the same way.

## Header vs footer (session 33)
A note country must show its official note on every controlled card, CBD included (fix in `medCountryVerdict`: unknown level + controlled -> `medNoteApply`). Guard in `audit_source_state.js`. Remaining "Check the source" + OFFICIAL SOURCE pages (CBD in per-medicine countries with no CBD row) are intentional: no rule found, link to the official source.

**8.28 addendum 2 (session 33):** a non-controlled medicine card in a country with official medicine lines (MED_NOTE `o`) must not show the generic "Allowed" / "No prescription needed" header: it shows "Some rules apply", the tag "See the official rule" and the head "The official rule for medicines is below." (function `medNoteApply`). Guard: `audit_source_state.js` (note country with official lines showing the generic header). Countries whose note has no `o` lines still show the general-rule card, with the "general rule most countries follow" footer.

## CBD rows (session 33)
CBD rows added to per-medicine countries from official pages: Hong Kong (banned), Canada (Health Canada permit), Japan (cannabis products banned, depends on plant part), United Kingdom (Home Office licence unless exempt), Australia (traveller's exemption, prescription, 3 months), New Zealand (prescription, 3 months). UAE and China still show 'Check the source': no CBD-specific traveller rule found on an official page.

## Session 34 (2026-10-17): routes that worked for "blocked" countries
- **Internet Archive copy via curl** (the pane/WebFetch cannot reach many gov sites, but curl reaches web.archive.org): `curl -sL --compressed https://web.archive.org/web/<timestamp>id_/<url>`; find the snapshot with `https://web.archive.org/cdx/search/cdx?url=<url>&fl=timestamp,statuscode&filter=statuscode:200` (the bare `2026id_` picks the nearest capture, which can be a 404/403 one). Used for Russia, Bulgaria, Saudi Arabia, Lithuania, Costa Rica.
- **INCB "Country Regulations for Travellers"** (https://www.incb.org/incb/en/travellers/country-regulations.html): one-page government-submitted table per country (documents a-e, days limits, prohibited list). Checkbox X positions are ambiguous in text: render the PDF with `pymupdf` (pip install pymupdf) and READ THE PNG. Used for Peru, Morocco, Kenya, Ukraine, Malta, Luxembourg, Lebanon, Kuwait, Bahrain, Oman, Seychelles, Panama, Slovakia, Jordan (image-only), Cuba (rotated Spanish scan).
- Still NOT DONE (3): Nigeria (NAFDAC/NCS pages only cover commercial import), Cambodia (customs lists drugs as restricted, no traveller rule; INCB has none), Nepal (Gazette notice on duty-free personal items is a 12-page scanned PDF, not a medicine rule; INCB none).

## 2026-10-20 batches 7-10
Airlines 34-60 built from pages read the same day (files airline_medication_b7.js to b10.js). Remaining 22 and read status: see memory project_blog_roadmap.md section 17.
