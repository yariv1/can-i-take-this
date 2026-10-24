# Trip check: plan (draft for approval, 2026-10-24). NOTHING IS CODED YET.

## Idea (user, 2026-10-24)
For an ITEM (medication, food, plants, vape, power bank, liquids...), one button opens a sheet with the whole journey of that item: leaving country -> airline (cabin, hold) -> entering country (+ optional stop). Each row opens the existing full card with its sources. NOT for baggage, carry-on/checked, baggage allowance, duty-free allowance tabs. Home page and /app/ only (static pages untouched, no SEO fields change).

## Research findings (2026-10-24)
- Name: nobody searches "roadmap". People type "traveling with <item>", "taking <item> through customs", "checklist", "guide". Recommended name: **Trip check** (sheet title "<Item>: trip check"). Final naming = user's call.
- Sheet pattern (eBay, Apple, Toyota design systems): modal sheet, scrim, close button ALWAYS visible (never rely on the backdrop alone), focus trapped inside and returned to the button on close, swipe-down allowed because nothing is edited inside.
- Domestic vs international: needs the user's departure country; the airline's home country is NOT a proxy (example: Austrian/Etihad planes arriving from elsewhere, passenger boards in Israel). Domestic = From country equals To country.
- Rules depend on THREE things: leaving country (screening, export bans), airline, entering country.

## Decisions already made
- Trip = **From -> Airline -> To** (+ optional "+ Stop where I leave the airport"; staying airside adds nothing). No airport field.
- From default = device timezone mapped to a country (works the same on desktop and mobile); fallback browser language region, then United States; always shown in the trip header, editable in one tap, remembered on the device. Never derived from the airline.
- Domestic is automatic (From = To): entry row hidden, airline rows use the domestic rule where we have it (LATAM, Azul, Vietnam Airlines...).
- Mockup fixes accepted: five verdict words (Allowed, Some rules apply, Not allowed, No clear answer, Depends on the destination), no Pass/Fail; source state (Official/Unofficial/Global) on every row; overall line from the strictest row ("Not allowed: blocked at Japan entry"); header with the trip + edit chips instead of the yellow warning; labels "On the plane: in the cabin / in the hold" (not "Check in"); customs icon for the country row; rows open the existing cards, never a second copy (DS 8.48).

## Phase 1: trip model (main app, no new data)
1. State: add `S.from` (country) next to airline and country; timezone->country table (IANA zone.tab, one JS map, guard that every zone resolves or falls back); persist the user's choice per device (try/catch storage).
2. UI: From chip in the trip header (typeahead like the others: clear x, first option auto-selected, hint "Type a country name"); shown in plane-item modes and country mode ("Entering Japan from Israel").
3. Domestic derived; entry row/card hidden when From = To.
4. Rows with no departure data show "No clear answer" (never hidden, never green by guess).
5. QA: every mode/tab/category, desktop + 375 px, light + dark, typeaheads untouched, all guards, DS entry + guard.

## Phase 2: departure-country layer (data, one country/regime at a time, source ladder)
- Inventory first: what exists = 16 screening regimes in `air_med_fill.js` (EU UK CA US KR HK SG DXB AUH TH MX OM SE NO FR JP BR). Needs: country -> regime map for the departure countries people really use.
- Correct a known weakness: silent airline cards are filled from the airline's HOME regime; with From they must use the DEPARTURE country's regime.
- Then power banks and export bans by country (start with the top departure countries by our own impressions). Each row official -> unofficial -> global, with the source label.

## Phase 3: Trip check sheet
- Button on item tabs only; modal sheet; trip header with edit chips; overall line; chronological rows (Leaving X -> Airline: cabin, hold -> Entering Y [+ stop]); each row opens the existing card/page.
- Pilot: medication (data complete: airline cards for 79 of 82 airlines + entry rules for 85 countries), then food, vape, power bank, liquids/perfume, one item type at a time.
- Track taps on the button and on each row (to decide what to extend).

## Rules that apply to every phase
Deploy only on "deploy"; research before each feature; 100% QA with before/after comparison; preview links; no typeahead removed or filled; new global rule -> DESIGN_SYSTEM.md + guard; no SEO field changes on static pages.

## Open points for the user
1. Final name (Trip check recommended).
2. Where the optional stop lives in the UI.
3. Which departure countries to cover first in Phase 2.
