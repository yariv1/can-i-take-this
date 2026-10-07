# Country vaping pages: data source and refresh

**Source (official, one consistent table for every country):** WHO report on the global tobacco epidemic 2023, country profiles (data as at 2022), table "Regulation of ENDS and ENNDS", ENDS (nicotine) column. PDF per country: `https://cdn.who.int/media/docs/default-source/country-profiles/tobacco/gtcr-2023/tobacco-2023-<iso3 lowercase>.pdf` (direct URL works without the `sfvrsn` parameter). Hong Kong and Taiwan have no profile (their pages keep the generic text).

**Data file:** `country_vape_who.json` (83 countries): `general` (general bans, WHO wording), `laws` (national laws regulate e-cigarettes), `indoor` (use ban in indoor public places, workplaces, public transport), `ads`, `minAge`, `flavours`, `note` (WHO footnote), `pdf`.

**Renderer:** `country_vape.js` -> title, description, lead answer, WHO table, four FAQ items and FAQPage markup, injected by `countryShell` (`extra`, `faqExtra`) for `/country/<slug>/vaping/`.

**Rules (HARD):** state only what the WHO table says; WHO lists the law on e-cigarette products, never a traveller allowance, so every page says to confirm with the customs authority; the date (data as at 2022) is shown on every page. Egypt: WHO's 2021 status page listed a sale ban, the 2023 profile (2022 data) lists no general ban; vape-shop blogs claiming other rules are not used.

**Refresh:** WHO publishes a new report every two years (next expected 2025 data). Re-download the PDFs, re-extract the ENDS rows (pypdf text, split on the row labels), regenerate the JSON, rebuild.

**Result 2026-10-08:** country vaping pages 96% -> 52% shared text, about 377 words each (`node audit_dup.js`).
