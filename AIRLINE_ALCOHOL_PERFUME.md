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
