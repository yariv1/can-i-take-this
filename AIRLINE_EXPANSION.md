# Airline expansion (started 2026-10-12, session 24): add airlines that are missing from the site, in demand order

Vision: canitakethis.co = the authority for airline info and country entry rules. The site had 78 airlines; it now has 82 (Virgin Atlantic, Hawaiian Airlines, WestJet, Volaris added 2026-10-12).

## Demand ranking (Ahrefs free keyword generator, US, head-term bucket of the airline NAME + number of keyword ideas; measured 2026-10-11/12). This is NAME demand, not "baggage" or "compensation" demand.
Not yet on the site, in build order:
1. DONE Virgin Atlantic (>100K, 21,147 ideas), DONE Hawaiian (>100K, 14,804), DONE WestJet (>10,000, 26,371), DONE Volaris (>100K, 34,275)
2. **NEXT: Viva Aerobus** (>10,000, 6,565), Air Transat (>10,000, 9,192), EVA Air (>10,000, 10,634), Avelo (>100K, 1,818), Sun Country (>10,000, 1,871)
3. Porter (>10,000, 3,299), Flair (>10,000, 2,867), Jet2 (head is a slogan phrase >10,000, 16,244), Condor (>10,000, 1,173), China Airlines (>10,000, 7,395), Aerolineas Argentinas (>10,000, 5,794), JetSMART (>10,000, 5,571), Arajet (>10,000, 3,511), Caribbean Airlines (>10,000, 2,303), Fiji Airways (>10,000, 3,184), Air Serbia (>10,000, 4,329)
4. >1000: AirAsia (20,653), Jetstar (19,193), Volotea (8,933), VietJet (2,298), Garuda (4,194), Scoot (942), Edelweiss (878), airBaltic (2,596), Croatia Airlines (1,138), flynas (2,557), Riyadh Air (2,120), SriLankan (2,511), Jeju Air (3,096), Cebu Pacific (137), Breeze (117; head under 1000), TUI Airways (>100, 262)
- Skip: Allegiant (blocks reading), Spirit (closed). Allegiant has a LOGO entry only.
- Existing airlines NOT yet measured for "<airline> customer service" / "refund" etc. Measured: Turkish customer service (>10,000 head, KD easy), Delta/American customer service (>10,000, KD hard, phone number >1000).

## Per-airline page set (what a new airline gets)
Baggage allowance (full reference page), liquids, power bank, vape, perfume/aerosols, alcohol = 6 pages, ALL from the airline's OWN pages (read directly, never summaries; disclose what was not read; if two own pages conflict, say so on the page). Compensation and Customer Service pages come later and only where official data exists (Compensation tab, then Customer Service tab always last).

## Procedure (follow exactly; Hawaiian, WestJet, Volaris are the models)
1. `WebSearch` the airline's own pages (baggage, fees, restricted items, power banks, alcohol). Never type a URL from memory.
2. Read them in Chrome (`mcp__claude-in-chrome__*`). Hawaiian/Alaska pages use shadow DOM: use a `deep(node)` text walker through `shadowRoot`s and `table` collectors; Volaris/WestJet/Virgin pages work with `innerText`; PDFs: `WebFetch` saves the PDF in the tool-results folder, then `ex.py` (pypdf) in the scratchpad. Chrome output truncates around 950 chars per call: store text in `window.__t` and read slices. NO status text between tool calls.
3. Data edits (use a one-off patch script in `.claude/`, run it, delete it):
   - `canitakethis.html`: `AIRLINES` entry `{name,iata,site,cabin:{kg,dim,pcs},checked:{kg,dim,pcs}}` (insert before `{name:'Alaska Airlines',iata:'AS'`), `POWER_RULES` entry (before `"British Airways":{"n"`: fields n, wh, use ok|partial|ban, note, keep, url, optional appr), `LIQ_RULES` entry (before `"British Airways":{"bag"`: bag, extra[], ex, url, label), `FARES` entry (before ` 'British Airways':[{label`: label, cabin, checked), the static all-airlines link in the grid (after the British Airways `data-n` link), and the airline count strings ("on N airlines", "<b>N airlines</b>", "across all N airlines"). In `build.js`: `AIR_ORDER` (names must be listed or the build throws "AIR_ORDER incomplete"), all "N airlines" strings, `LOGO_AIR` only if a short key is needed (logos come from gstatic by IATA).
   - Content files: `baggage_detailN.js` (title, desc, answer, stats, sections with table/table2/list, faq, sources; register in `baggage_detail.js`) and `airline_topicsN.js` (vape, power, alcohol, perfume entries; register in `airline_topics.js`). Latest numbers: baggage_detail10.js, airline_topics7.js. Next free: baggage_detail11.js, airline_topics8.js.
   - Add a line to `BAGGAGE_DETAIL.md`, add the 6 URLs to `GSC_PRIORITY.md` and `GSC_INDEXING_TRACKER.md` at deploy.
4. `node build.js`, `node audit_seo.js --fail` (0 FAILED), `node audit_seo_change_scope.js`, then open the preview and check: tabs (Baggage selected), 6 URLs load (200), tables render, logo shows.
5. Preview link to the user, WAIT for "deploy". Deploy recipe in DEPLOY_FLOW.md. The live Pages build can take 2 to 4 minutes: verify with curl then re-run `node indexnow.js`.

## Rules learned here (HARD)
- Airline overview pages (`/airline/<slug>/`) no longer exist as pages: they redirect to the Baggage page (user order). Never link to or request them.
- The tab row: Baggage, Liquids, Power bank, Vape, Perfume, Alcohol, [Compensation], [Customer Service always last].
- Stat cards: accent-blue number 1.25rem (article and airline pages identical), label muted 1rem.
- No "More rules for <airline>" block on airline pages.
- Liquids page title text is generated by the app (100 ml wording); airline-specific limits go in `LIQ_RULES`.
