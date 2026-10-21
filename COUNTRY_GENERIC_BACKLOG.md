# Country pages still on "BASED ON GLOBAL RULES" (session 38 end, 2026-10-21, origin/main 906fb40b2 LIVE)

User order (HARD): "stop bullshitting the users", no worthless generic answers. Source ladder (DS 8.37) per cell: (1) official page read; (2) if it fails for ANY reason, a reliable NAMED third party read in full (UNOFFICIAL footer + link); (3) global only if both fail. Never report "no source found" without listing which third-party sources were tried.

## Cells still generic (14)
- **Plants & seeds (9):** Bahrain, Cambodia, Dominican Republic, Ethiopia, Jordan, Kuwait, Oman, Ukraine, Vietnam.
- **Alcohol + tobacco (2 each):** Lebanon, Panama.
- **Cash (1):** Lebanon.
- **Vaping (1):** Hong Kong (country_vape.js, WHO card only).

## Already tried for them (do NOT repeat, find a NEW kind of source)
UK FCDO `gov.uk/foreign-travel-advice/<country>/entry-requirements` (all 16 read: no allowances except those already used), Canada travel.gc.ca and US State pages (no allowances), IPPC national reporting pages, FAOLEX, airport operator pages (Queen Alia: arrivals text used for Jordan t/a/c; Cairo used; Tocumen via Wayback used; Beirut DGCA used; Cambodia Airports used; Kuwait Airport, Oman Airports, Boryspil, Hamad: silent), tourism-ministry portals (Cuba, Cambodia, Panama used; Lebanon Destination Lebanon silent), customs sites (Bahrain 403, Oman silent, Kuwait blocked, Vietnam silent, Ukraine silent, Cambodia SPA-only), MEWA Saudi PDF (dead link), Panama ANA (page moved, numbers only in a search summary: NOT usable).
Ideas not yet tried: embassy pages of the country abroad (e.g. embassy of Bahrain/Oman/Vietnam/Ukraine "customs" pages), national duty-free operators (Bahrain Duty Free, Oman Duty Free, Dufry/Lagardere pages quoting allowances), Wikipedia-sourced official citations, regional plant-protection organisations (GCC secretariat agricultural quarantine law PDF, NEPPO, APPPC), GSMA/IATA Timatic-like public summaries, national tourism boards of Vietnam/Oman/Bahrain, "Dominican Republic: DGA Manual del Viajero + Ministry of Agriculture RES-MARD" (weak: only says declare), Hong Kong: Department of Health / Customs and Excise (cap. 371 smoking ban on e-cigarettes since 30 April 2022: official page not yet read).

## Tools (all in repo root)
- `cust_add_country.js spec.json` (alcohol/tobacco/cash). Spec: `{"country","src":[{"label","url","unofficial":true}],"srcByCat":{cat:[...]},"cats":{"alcohol":[head,[lines],"warn|stop|go"],...}}`.
- `plants_add_country.js spec.json` (plants). Spec has `"unofficial":true` for third-party (amber heading + reason line, footer UNOFFICIAL). `src` = `[[url,label]]`, `date`, `lead`, `rows`, `notes`, `faq` (>=2), `card`.
- A cat page must not cite a link that another category page of the same country cites (audit_country_cat_sources.js): use a different URL.
- After adding: `node build.js`, all guards, `node audit_seo_change_scope.js`, `node audit_seo.js --fail`.
- Wayback rescues blocked pages: `curl -sL https://web.archive.org/web/2026id_/<url>` (sometimes gzip: `gunzip -c`); JS-only sites need the Browser pane (`navigate` on tab `seed`, `javascript_tool` with `document.body.textContent`).
- Own words, only facts of the page read that day, say what was NOT read.

## What is done (all live)
Real answers (official or unofficial-labelled) now exist for all other country x category cells, incl. session 38: Russia, Indonesia, Malaysia, Kuwait, Colombia, Cuba, Argentina, Ethiopia, Nepal, Nigeria, Cambodia, Jordan, Egypt, Panama, Jamaica, Maldives (cash/alcohol/tobacco as listed in the roadmap memory) and plants for Cuba, Peru, Taiwan, Russia, Malaysia, Philippines, Serbia, Colombia, UAE, Seychelles, Qatar, Costa Rica, Indonesia, Nepal, Saudi Arabia, Nigeria, Lebanon, Egypt, Panama.
