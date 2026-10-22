# Airline source audit (session 40, 2026-10-22): does the OFFICIAL link on a tab answer the card?
Scope: airline tabs liquids, power bank, vape, perfume/aerosols, alcohol (273 cited official links, 88 unique pages not readable by a plain fetch re-read in the browser pane). Test: the page must contain the topic. Baggage tab not audited.

## DOES NOT ANSWER (page read in a real browser, topic missing or only a country-ban note) - fix pending
- liquids: IndiGo (cabin-baggage page: 0 mentions of liquids), easyJet (cabin-bags page: 0)
- vape: Malaysia Airlines (additional-restrictions: 0), Air Arabia (prohibited-items: 0), Turkish (restrictions: 0)
- vape, page only says "in some/many countries e-cigarettes are prohibited", NOT the cabin-only rule the card states: Austrian, Lufthansa, SWISS, Brussels Airlines, ITA Airways
- vape, page only bans USING e-cigarettes on board (Pegasus); Vueling and WestJet only list e-cigarettes among items allowed in hand luggage (partial: no "never checked")
- liquids: Air Arabia hand-baggage page has 3 weak mentions (check card text)
Fix per ladder: another page of the same airline that answers, else named regulator (UNOFFICIAL), else GLOBAL footer without an official link.

## VERIFIED OK (topic present with real content): the rest that loaded (Gulf Air, GOL, Icelandair, Virgin Atlantic, China Eastern, Emirates, Air NZ, JetBlue, JAL, Thai, Copa, Eurowings, ITA hand-baggage, LOT, Korean, Philippine, SAS, Transavia, SWISS hand-baggage, United, Turkish carry-on, Lufthansa Group power banks, easyJet dangerous goods, Oman Air, Norwegian, Thai power-bank, Southwest, Delta, Ryanair, Air Canada, Norwegian DG, Austrian DG etc.)

## NOT VERIFIED: the page blocks our browsers (Cloudflare/403/SPA/geo/PDF); needs the user's own Chrome or Wayback
Alaska, Hawaiian (3 pages), El Al, EgyptAir (2), SunExpress (3), KLM, Air France (2), Aeromexico, MEA, Azul, ANA, Korean news, Israir, plus 6 PDFs (Air Canada liquid_rules, Aer Lingus x2, Frontier, others). Full list was in the audit output (93 URL x tab pairs).
