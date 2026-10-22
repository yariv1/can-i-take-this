# Airline source audit (session 40, 2026-10-22): does the OFFICIAL link on a tab answer the card?
Scope: airline tabs liquids, power bank, vape, perfume/aerosols, alcohol (273 cited official links; 88 unique pages re-read in a real browser). Baggage tab not audited.

## FIXED (page really lacked the rule; link replaced by the airline's page that has it, read 2026-10-22)
- IndiGo liquids: cabin-baggage page has no liquids rule -> https://www.goindigo.in/baggage/dangerous-goods-policy.html (litre bag, shampoos etc.)
- easyJet liquids: cabin-bags page has no liquids rule -> https://www.easyjet.com/en/help/baggage/restricted-and-unusual-items (100 ml, 20x20 bag, 1,000 ml)

## FALSE ALARMS after reading context (first check missed wording like "e cigarettes", "electronic smoking devices", "cigarettes", icon-labelled table rows)
Air Arabia, Malaysia Airlines, Turkish, Pegasus (states the use ban), Vueling (lists e-cigarette as allowed hand luggage), WestJet, Lufthansa, Austrian, SWISS, Brussels, ITA (rule block sits right above the e-cigarette note; the row label is an icon, not text). They answer their cards.

## VERIFIED OK: all other pages that loaded had real topic content.

## NOT VERIFIED (page blocks our browsers even in the user's Chrome from this IP: Cloudflare/403/SPA/geo)
Alaska, Hawaiian (3 pages), El Al, EgyptAir (2), SunExpress (3), KLM, Air France (2), Aeromexico beta, MEA (geo-ban), Azul, ANA, Korean news, Israir + 6 PDFs. Needs a check from a US/EU IP or by the user. Method: open the page, search the tab topic, compare with the card text.
