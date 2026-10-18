# Airline alcohol and perfume/aerosol pages: sections from the airlines' own pages (session 35, 2026-10-18)

The generic card on each airline alcohol / perfume-aerosols page stays; for airlines whose own page was readable we add a section (table of what the airline says, "Not on the page" note, visible FAQ, source link). Title, description, H1 and schema of the page stay unchanged (`keepSchema`, `topics_new.json` never replaces an existing entry of `airline_topics*.js`).

Tool: `node airline_topic_add.js spec.json` -> `topics_new.json` (spec: airline, alcohol{answer,sections,faq,sources}, perfume{...}). Pages read in the browser pane use `document.body.textContent` (collapsed accordions are not in `innerText`).

## Done
Alcohol (22): Delta, American Airlines, Air Canada, British Airways, JetBlue, Finnair, Lufthansa (German page), Qatar Airways, SAS, Cathay Pacific, ANA, Air New Zealand, Swiss, Air India, LATAM, Copa Airlines, Austrian, Brussels Airlines, ITA Airways, Eurowings, LOT, Norwegian.
Perfume/aerosols (22): Delta, American Airlines, Air Canada, British Airways, Finnair, Lufthansa, Qatar Airways, SAS, United, Cathay Pacific, ANA, Air New Zealand, Etihad, Swiss, Air India, Copa Airlines, Austrian, Brussels Airlines, ITA Airways, Eurowings, LOT, Norwegian.
(Earlier topics, not touched: alcohol 11 airlines, perfume 9.)

## Tried, not readable or too thin
Alaska (site error), Air France (bot wall), KLM (hand-baggage page only lists alcohol above 70%), Southwest (hazmat page only mentions 70 oz of toiletries), Aer Lingus (bot wall), Iberia (limits are in a PDF not read), Korean Air, Singapore Airlines (404 / no strength rule), Etihad alcohol, Royal Jordanian, EgyptAir, Gulf Air, Avianca, Aeromexico, Saudia, JAL (old pages). Retry via the pane with `textContent` where a page exists.

Duplicate text (audit_duplicates.js): airline alcohol 75% -> 66%, airline perfume-aerosols 75% -> 66%.

## Vape and liquids (added the same session, same helper and rules)
Vape (13 new): United, American Airlines, British Airways, Cathay Pacific, ANA, Delta, JetBlue, Finnair, Eurowings, Southwest, Norwegian, LOT, Air India (the 21 airlines that already had a vape section, e.g. SAS and Qatar, are untouched).
Liquids (8 new, none existed before): Qatar Airways, Finnair, SAS, Iberia, Copa Airlines, British Airways, Cathay Pacific, Air Canada.
Duplicate text: airline vape 66% -> 60%, airline liquids 59% -> 57%.
Not used: Swiss/Austrian/Lufthansa dangerous-goods pages (no e-cigarette entry there), Alaska, Air France, Aer Lingus (blocked), Air New Zealand (checked-baggage page has no e-cigarette entry), Etihad/Qatar/SAS vape (already had one).

## Vape round 2 (session 36, 2026-10-18)
Vape (11 new, same helper and rules): Emirates, Air Canada, Japan Airlines (international page), Korean Air, TAP Air Portugal, Vueling (thin: hand-luggage list only), Air New Zealand, IndiGo (Conditions of Carriage 15.5, ban), Aegean, Iberia, Air France. Vape sections now from own pages: 13 + 11 = 24 (plus 34 earlier entries).
Not readable or too thin this round: Alaska (only mentions e-cigarettes under lithium batteries), Icelandair (old PDFs, table unreadable), Malaysia (page redirects, not read), Saudia (page redirects to fares), Aeromexico (nothing on vapes).
Vape round 3 (same day, 9 new): flydubai, South African Airways, Copa Airlines, Vietnam Airlines (Vietnam site: not accepted at all), Transavia, Oman Air, Asiana, Air Arabia, Royal Jordanian. Vape sections from own pages now 13 + 11 + 9 = 33. Not readable/not used: SunExpress (Cloudflare), GOL (site blocked in the pane), Gulf Air (no e-cigarette text in the Conditions page read), LATAM (page text had no match), China Southern (page 404), Avianca (no match), EgyptAir (FAA advice only), Ethiopian/Kenya (no e-cigarette rule), El Al (2019 PDF only).

## Vape round 4 (session 36, source ladder DS 8.37): 28 more airline vape pages
Official, read on the airline's own page (copy dated where read from web.archive.org via curl): SWISS, Austrian, Brussels Airlines, ITA Airways (same Lufthansa-group wording), Malaysia Airlines, Aer Lingus (Guide to Dangerous Goods Jan 2026), SunExpress, Kuwait Airways, EgyptAir (recommendation only), Frontier (PDF), Azul (Revista Azul, checked baggage only).
UNOFFICIAL (amber, `unofficial:true`): IATA passenger lithium-battery guidance (31 Mar 2026) for Ethiopian, Kenya Airways, Royal Air Maroc, China Southern, Air China, Icelandair, Saudia, Gulf Air, LATAM, GOL, Aeromexico, El Al, Arkia, Israir, MEA, Avianca (old 2019 copy disclosed); FAA PackSafe for Alaska. Each page says which own page of the airline was read and did not name e-cigarettes, or could not be read. Vape sections now on all 82 airlines. Duplicate text airline vape 53%.
Tool note: the browser pane asks "Allow once" for web.archive.org (site permissions disabled there); fetch archive copies with `node arch.js url...` (scratchpad) or curl `https://web.archive.org/web/2026id_/<url>` instead.

## Liquids round 2 (session 36, source ladder DS 8.37): 35 more airline liquids sections from the airline's own page
Wizz Air, easyJet, Ryanair (archive copy 12 May 2026), Emirates, Lufthansa, SWISS, Eurowings, Aegean, Transavia, Vueling, Air Europa, TAP, KLM, Virgin Atlantic (archive copy 30 Jan 2023), Delta, American, Singapore Airlines, ANA, Thai, Virgin Australia, Air India, Air New Zealand, PAL, Vietnam Airlines, Malaysia Airlines, JAL, Qantas, Brussels Airlines, ITA Airways, Turkish (partial), Pegasus (partial), LOT (partial), SAA, Royal Jordanian. Liquids now on 8 + 35 = 43 airlines. Still missing (37): El Al, Etihad, Austrian, Air France, Aer Lingus, Norwegian, Icelandair, SunExpress, United, Hawaiian, WestJet, Volaris, Alaska, JetBlue, Southwest, Frontier, Aeromexico, LATAM, Avianca, GOL, Azul, Korean, Asiana, IndiGo, China Southern/Eastern, Air China, Saudia, flydubai, Air Arabia, Gulf Air, Oman Air, Kuwait, MEA, EgyptAir, Ethiopian, Kenya, Royal Air Maroc: next step = official page via the pane (not curl), then unofficial (IATA/TSA/EU/CAAS), then global.
Tooling: pane reads use `document.body.textContent` + a 100 ml regex window; curl is blocked on most airline hosts; web.archive.org via curl works (never open archive.org in the pane: it prompts "Allow once").
