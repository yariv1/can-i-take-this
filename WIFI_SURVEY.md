# Wi-Fi / entertainment by aircraft: airline survey (2026-10-13, screening only)

Method: one WebSearch per airline restricted to its own domain. These are SEARCH SUMMARIES, not page reads: an airline only qualifies after its official page is READ and the table is checked. Delta and American were read in full.

Idea (user, 2026-10-13): a Wi-Fi tab ONLY on airline pages with reliable official by-aircraft data (hidden elsewhere), table of aircraft types x Wi-Fi / cost / who gets it free, card-style selector with aircraft-type filter buttons, re-check every 2 weeks (automated change-detector every 3 days where a server fetch works; it only flags, never edits). Entertainment stays a note unless the airline publishes it by aircraft. Demand (Ahrefs US buckets): delta wifi / united wifi >10,000; american airlines wifi >1,000; delta in flight entertainment >1,000; seat pitch, meals <100; loyalty = credit-card dominated, Hard.

## Read in full
- Delta: official "Wi-Fi Service by Aircraft" list (free: A220-100/-300, A319, A320, A321ceo/neo, 737-800/-900, 757-200/-300, 767-300/-400, A330-200/-300/-900neo, A350-900; select 717, CRJ-700/-900 free or paid; ERJ-170/-175 paid). Free for SkyMiles members. No price on page. No per-aircraft entertainment table.
- American: free for AAdvantage members on all A319/A320/A321 and 737, select 787-8/-9, most regional; paid from about $10; streaming on Wi-Fi flights, no seatback table.
- United: reachable pages give no by-aircraft Wi-Fi page. Gap.

## Tier 1: official page seems to list aircraft types (read before building)
Alaska, Air New Zealand, ANA (domestic table), EgyptAir (5 types), Cathay Pacific (dedicated "what aircraft are equipped" FAQ), Thai (lists differ by page), Saudia (counts by type, undated), Qatar, Emirates, Etihad, Singapore (all except 737-800 NG), Virgin Atlantic (per-aircraft pages), Qantas (conflicting pages), Turkish (page may be old), Aer Lingus, TAP, Gulf Air, Malaysia, Air India, Air Europa, Finnair, Oman Air (pages disagree), Ethiopian, KLM (news article), Austrian, ITA (pages disagree), JAL.

## Tier 2: rollout in progress or no per-type list
Southwest, Air Canada, WestJet, British Airways, Lufthansa, Air France, Iberia (by registration), Swiss, Eurowings, Brussels (none yet), SAS, Hawaiian, JetBlue (all aircraft free, coverage by type), LOT, Vietnam, Asiana, Philippine, China Eastern/Southern, Air China, Aegean, Azul, GOL, Avianca, Copa, Aeromexico, LATAM, flydubai, MEA, Royal Jordanian, Royal Air Maroc, Kuwait, Korean Air (paid).

## Tier 3: no Wi-Fi, or entertainment portal only
Frontier (none; Starlink planned 2027), Ryanair, easyJet, Wizz (planned 2027), Transavia, Vueling, SunExpress, Pegasus, IndiGo, Volaris, Air Arabia, Arkia, Israir (paid, no list), Kenya Airways, South African Airways, Norwegian (737-800 only, MAX none).

Risks: Starlink rollouts change lists monthly; some airlines' own pages contradict each other (do not publish those); free is usually members-only.

## Pilot test (agreed with the user 2026-10-13)
Page: /airline/delta/wifi/ (title "Is Delta WiFi Free? Free WiFi by Aircraft Type (2026)"). Target queries: is delta wifi free, delta wifi cost, how to connect to delta wifi, delta wifi free, t mobile delta wifi.
Check Search Console on 2026-11-03 (impressions and clicks for the page and those queries). If it gets impressions: expand in order of demand (American, Alaska, then Cathay, EgyptAir, Air New Zealand after reading each official page in full). If nothing after about 3 weeks: stop, build no more Wi-Fi pages. The site is still demoted, so judge impressions, not only clicks.

## Built locally 2026-10-13 (after reading each official page in full), pending the user's "deploy"
US/Canada: American, JetBlue (every plane free; region chips), Air Canada (own per-aircraft equipped table). Europe: Finnair, TAP, ITA, Austrian, Virgin Atlantic (A350 + A330neo pages only), SAS (own table), Norwegian. Delta already live.
Read and NOT qualifying: Alaska (error page even in Chrome), Southwest (no per-aircraft list), WestJet (only "over 100 aircraft across the 737 fleet"), KLM (no list, "check My Trip"), Air Europa (route-based, "a large part of our fleet"), Aer Lingus (page content not readable), United (page not reachable). Not read (screening said rollout/no per-type list): Hawaiian, Lufthansa, BA, Air France, Swiss, Iberia, Eurowings.
