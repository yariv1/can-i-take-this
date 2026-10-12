// Quick-answer cards (the per-fare "On the plain" / "Checked in" blocks at the top of each airline baggage page), rebuilt 2026-10-12 from the VERIFIED detail entries (baggage_detail*.js), so the top answers and the detail below never disagree.
// Format: name -> [{label, cabin, checked}]. Shown above the detail sections. Design = the original fblock cards (DO NOT change the layout without asking the user).
module.exports = {
  "Wizz Air": [
    { label: "Basic fare", cabin: "1 free bag that fits under the seat, 40 × 30 × 20 cm, up to 10 kg.", checked: "Not included. Buy 10, 20, 26 or 32 kg bags (up to 6 bags per passenger)." },
    { label: "WIZZ Priority or a bundle (WIZZ Go, WIZZ Plus)", cabin: "The free under-seat bag plus a trolley bag, 55 × 40 × 23 cm, up to 10 kg.", checked: "Bundles include one checked bag; otherwise the same paid options." }
  ],
  "Lufthansa": [
    { label: "Economy Basic (short and medium-haul)", cabin: "Personal item only, 40 × 30 × 15 cm.", checked: "Not included." },
    { label: "Economy Light, Classic, Flex", cabin: "Carry-on 55 × 40 × 23 cm, 8 kg, plus a personal item 40 × 30 × 15 cm.", checked: "Economy: 1 bag of 23 kg, up to 158 cm (Light has to be added)." },
    { label: "Business / First", cabin: "Carry-on 55 × 40 × 23 cm, 8 kg, plus a personal item.", checked: "Business 2 bags, First 3 bags, 32 kg each, up to 158 cm." }
  ],
  "Singapore Airlines": [
    { label: "Economy", cabin: "1 cabin bag up to 7 kg, 115 cm in total.", checked: "By weight on most routes: Lite and Value 25 kg, Standard and Flexi 30 kg. To and from the USA and Canada: 2 bags of 23 kg." },
    { label: "Premium Economy, Business, First", cabin: "Premium Economy 1 bag, Business and First 2 bags.", checked: "Premium Economy 35 kg, Business 40 kg, Suites and First 50 kg. No bag over 32 kg." }
  ],
  "Air China": [
    { label: "Economy", cabin: "1 carry-on up to 5 kg, 55 × 40 × 20 cm, plus a personal item.", checked: "International: 1 or 2 pieces of 23 kg by route and fare. Domestic China: 20 kg." },
    { label: "Business / First", cabin: "2 carry-ons up to 8 kg each plus a personal item.", checked: "2 pieces of 32 kg on international flights; domestic China 30 kg Business, 40 kg First." }
  ],
  "Air New Zealand": [
    { label: "Seat (no bag)", cabin: "1 carry-on up to 7 kg, 55 × 40 × 23 cm, plus a personal item.", checked: "Not included. Prepaid bags can be added, up to 3 in total." },
    { label: "Economy with a bag", cabin: "1 carry-on (7 kg) plus a personal item.", checked: "International Economy: 1 bag up to 23 kg, 158 cm." },
    { label: "Premium Economy / Business Premier", cabin: "Carry-on plus a personal item.", checked: "Premium Economy 2 bags, Business Premier 3 bags." }
  ],
  "Etihad Airways": [
    { label: "Economy Basic", cabin: "1 cabin bag up to 7 kg, 56 × 36 × 23 cm.", checked: "Not included; fees apply. No bag over 32 kg." },
    { label: "Economy Value / Comfort / Deluxe", cabin: "1 cabin bag up to 7 kg, 56 × 36 × 23 cm.", checked: "Most routes: 25 / 30 / 40 kg. To and from the USA and Canada: 2 bags of 23 kg." }
  ],
  "Qatar Airways": [
    { label: "Economy", cabin: "1 carry-on up to 7 kg, 50 × 37 × 25 cm.", checked: "By weight on most routes: Lite 20 kg, Classic 25 kg, Convenience 30 kg, Comfort 35 kg. Africa and Americas: Lite 1 × 23 kg, other fares 2 × 23 kg." },
    { label: "Business / First", cabin: "See the detail below.", checked: "Business 40 kg, First 50 kg by weight; 2 × 32 kg on piece routes." }
  ],
  "KLM": [
    { label: "Economy Basic", cabin: "Small bag only, 40 × 30 × 15 cm.", checked: "Not included." },
    { label: "Economy Light, Standard, Flex", cabin: "Small bag plus a hand bag 55 × 35 × 25 cm, up to 12 kg together.", checked: "Standard and Flex: 1 bag up to 23 kg, 158 cm. Light: none." }
  ],
  "China Southern": [
    { label: "Economy and Premium Economy", cabin: "1 carry-on up to 8 kg, 55 × 40 × 20 cm.", checked: "International: 1 piece of 23 or 32 kg, or 2 pieces of 23 kg, by route; domestic China 20 kg." },
    { label: "Business / First", cabin: "Two carry-ons.", checked: "Business 2 pieces and First 3 pieces of 32 kg, each up to 158 cm." }
  ],
  "Aer Lingus": [
    { label: "Saver", cabin: "A small personal item free; the 10 kg cabin bag (55 × 40 × 24 cm) costs from €9.99 / £9.99 or is dropped free at check-in within Europe.", checked: "Not included." },
    { label: "Plus, Advantage, AerSpace, Smart, Flex", cabin: "Personal item plus a 10 kg cabin bag.", checked: "Europe: 1 bag of 20 kg. Transatlantic Smart and Flex: 1 bag of 23 kg. No bag over 32 kg." }
  ],
  "Virgin Australia": [
    { label: "Economy Lite", cabin: "1 carry-on up to 8 kg, 56 × 36 × 23 cm, plus a personal item 45 × 33 × 20 cm.", checked: "Not included." },
    { label: "Choice / Flex", cabin: "Same cabin allowance.", checked: "1 bag of 23 kg (Velocity Silver and Gold: 2 bags)." },
    { label: "Business", cabin: "Carry-on up to 14 kg combined.", checked: "2 bags of 32 kg." }
  ],
  "Icelandair": [
    { label: "Economy Light", cabin: "1 carry-on up to 10 kg, 55 × 40 × 20 cm, plus a personal item 40 × 30 × 15 cm.", checked: "Not included on international flights." },
    { label: "Economy Standard / Flex, Saga Premium", cabin: "Same cabin allowance.", checked: "Standard and Flex: 1 bag of 23 kg. Saga Premium: 1 bag of 32 kg." }
  ],
  "Eurowings": [
    { label: "Basic", cabin: "Small underseat bag only, 40 × 30 × 25 cm.", checked: "Not included; a 23 kg bag is bookable from €18 / £16 online." },
    { label: "Smart / BIZclass", cabin: "Plus a cabin bag 55 × 40 × 23 cm, 8 kg (BIZclass 2 bags).", checked: "Smart 1 × 23 kg; BIZclass 2 × 32 kg." }
  ],
  "Japan Airlines": [
    { label: "Economy and Premium Economy (international)", cabin: "2 items: a personal item plus one bag up to 55 × 40 × 25 cm, 10 kg combined.", checked: "2 pieces of 23 kg, each up to 203 cm." },
    { label: "Business / First", cabin: "Same cabin allowance.", checked: "3 pieces of 32 kg." }
  ],
  "Philippine Airlines": [
    { label: "Economy", cabin: "1 carry-on up to 7 kg, 56 × 36 × 23 cm, plus a personal item.", checked: "To and from the USA: 2 pieces of 23 kg. Asia: a weight allowance by destination and fare." },
    { label: "Business", cabin: "Carry-on plus a personal item.", checked: "To and from the USA: 2 pieces of 32 kg." }
  ],
  "Air Arabia": [
    { label: "Basic", cabin: "1 cabin bag up to 7 kg (55 × 40 × 20 cm) plus a personal item up to 3 kg, 10 kg in total including duty-free.", checked: "Chargeable (20, 30 or 40 kg options)." },
    { label: "Value / Ultimate", cabin: "Same cabin allowance.", checked: "Value 20 or 30 kg; Ultimate 30 or 40 kg. Each bag up to 32 kg." }
  ],
  "China Eastern": [
    { label: "Economy", cabin: "1 cabin bag up to 8 kg, 55 × 40 × 20 cm, plus a small item.", checked: "Domestic: 20 kg. International: 0, 1 or 2 pieces of 23 kg, 158 cm, by route and fare." }
  ],
  "LATAM": [
    { label: "Basic and Light", cabin: "Small bag up to 10 kg, 45 × 35 × 20 cm, plus a carry-on up to 12 kg, 55 × 35 × 25 cm (confirm on your route).", checked: "Not included." },
    { label: "Plus and Top", cabin: "Same cabin allowance.", checked: "Plus 1 or 2 bags, Top 2 bags, 23 kg each, up to 158 cm." }
  ],
  "Air Canada": [
    { label: "Economy Basic (Canada, USA, Mexico, Central America, Caribbean)", cabin: "Personal item only, 43 × 33 × 16 cm.", checked: "First bag CA/US$45, second CA/US$60 (tickets from 13 April 2026). Up to 23 kg, 158 cm." },
    { label: "Standard and above", cabin: "Carry-on 55 × 40 × 23 cm, no weight limit, plus a personal item.", checked: "Standard: first bag CA/US$45. Flex: free." }
  ],
  "Air India": [
    { label: "Economy", cabin: "1 cabin bag up to 7 kg, 55 × 40 × 20 cm, 115 cm total, plus a personal item up to 3 kg.", checked: "Domestic: 15 kg Value, 20 kg Classic, 25 kg Flex. Europe, USA, Canada: Value 1 × 23 kg, Classic and Flex 2 × 23 kg." }
  ],
  "American Airlines": [
    { label: "Basic Economy, Main Cabin", cabin: "1 carry-on 22 × 14 × 9 in plus a personal item 18 × 14 × 8 in.", checked: "First bag $50 ($45 online), second $60 ($55 online); Basic Economy $5 more each. Up to 50 lb, 62 in." }
  ],
  "Aegean": [
    { label: "Economy Light", cabin: "1 cabin piece in total.", checked: "Not included." },
    { label: "Flex, ComfortFlex, Family", cabin: "Carry-on up to 8 kg plus a personal item.", checked: "ComfortFlex 1 × 23 kg; Flex and Family none." },
    { label: "Business", cabin: "Carry-on up to 13 kg plus a personal item.", checked: "2 bags of 32 kg." }
  ],
  "Swiss": [
    { label: "Economy Basic (short and medium-haul)", cabin: "Personal item only, 40 × 30 × 15 cm.", checked: "Not included." },
    { label: "Economy Light and above", cabin: "Carry-on up to 8 kg, 55 × 40 × 23 cm, plus the personal item.", checked: "Europe: Comfort, Comfort Green, Flex 1 × 23 kg; Business Flex 2 × 32 kg. Intercontinental Economy: 1 × 23 kg." }
  ],
  "JetBlue": [
    { label: "All fares", cabin: "1 carry-on 22 × 14 × 9 in plus a personal item 17 × 13 × 8 in, no weight limit.", checked: "First bag $45, second $59 off-peak (Main and EvenMore); Mint includes two bags. Up to 62 in, 50 lb." }
  ],
  "Norwegian": [
    { label: "LowFare", cabin: "Small underseat bag 30 × 40 × 20 cm, up to 10 kg.", checked: "Not included." },
    { label: "LowFare+ and Flex", cabin: "Plus an overhead bag 55 × 40 × 23 cm; hand baggage 10 kg (LowFare+) or 15 kg (Flex) combined.", checked: "LowFare+ 1 × 23 kg; Flex 2 × 23 kg. Each bag 2 to 32 kg." }
  ],
  "Malaysia Airlines": [
    { label: "Economy", cabin: "1 cabin piece up to 7 kg, 56 × 36 × 23 cm, plus a personal item within the same 7 kg.", checked: "By weight: Value 20 kg, Basic 25 kg, Flex 35 kg. A bag can weigh up to 32 kg." }
  ],
  "Aeromexico": [
    { label: "Basic", cabin: "A personal item plus a carry-on up to 55 × 40 × 25 cm, 10 kg together.", checked: "Not included. First bag: $500 MXN domestic, $30 USD USA and Canada." },
    { label: "Classic", cabin: "A personal item plus a carry-on up to 55 × 40 × 25 cm, 15 kg together.", checked: "25% discount on checked baggage." }
  ],
  "Frontier": [
    { label: "Every ticket", cabin: "1 personal item 14 × 18 × 8 in free. A carry-on (24 × 16 × 10 in, up to 35 lb) is paid.", checked: "Paid, higher at the airport. Up to 62 in and 40 lb; oversize $75; overweight $75 (41–50 lb) or $129." }
  ],
  "IndiGo": [
    { label: "Economy", cabin: "1 handbag up to 7 kg, 115 cm total, plus a personal article up to 3 kg.", checked: "Domestic 15 kg; international 20 or 30 kg by route. Lite fare: no check-in baggage." }
  ],
  "Thai Airways": [
    { label: "Economy Standard, Saver, Redeem, domestic", cabin: "1 hand bag up to 7 kg, 56 × 45 × 25 cm, plus free items such as a handbag.", checked: "1 piece of 23 kg, up to 158 cm." },
    { label: "Economy Flex and Full Flex (international)", cabin: "Same.", checked: "2 pieces of 23 kg." }
  ],
  "El Al": [
    { label: "Economy Lite", cabin: "1 hand bag up to 8 kg, 56 × 45 × 25 cm.", checked: "Paid on Europe and Middle East flights." },
    { label: "Economy Classic and Flex", cabin: "Same.", checked: "1 bag of 23 kg included." },
    { label: "Premium / Business", cabin: "Same cabin allowance.", checked: "Premium 2 × 23 kg; Business 2 × 32 kg." }
  ],
  "easyJet": [
    { label: "Standard", cabin: "1 small under-seat bag, 45 × 36 × 20 cm, up to 15 kg.", checked: "Booked separately: up to 3 bags of 15 or 23 kg; no bag over 32 kg." },
    { label: "Plus and Inclusive Plus", cabin: "Plus a large cabin bag 56 × 45 × 25 cm, 15 kg.", checked: "Same hold bag options, paid." }
  ],
  "Korean Air": [
    { label: "Economy and Premium Economy", cabin: "1 carry-on (55 × 40 × 20 cm) plus a personal item (40 × 30 × 15 cm), 10 kg total.", checked: "International (not USA or Brazil): 1 bag of 23 kg. Domestic Economy 20 kg." },
    { label: "Prestige / First", cabin: "Same.", checked: "Prestige 2 bags, First 3 bags, 32 kg each." }
  ],
  "Iberia": [
    { label: "Basic and Executive (short and medium-haul)", cabin: "Hand luggage up to 10 kg, 56 × 40 × 25 cm, plus a personal item 30 × 40 × 15 cm.", checked: "Not included." },
    { label: "Optimal, Comfort, Flexible", cabin: "Same cabin allowance.", checked: "1 piece of 23 kg, up to 158 cm." }
  ],
  "Ryanair": [
    { label: "Basic", cabin: "1 small personal bag, 40 × 30 × 20 cm, under the seat.", checked: "Paid: 10, 20 or 23 kg, from €/£10.49 to €/£80.99 online." },
    { label: "Priority & 2 Cabin Bags", cabin: "Personal bag plus a cabin bag 55 × 40 × 20 cm, up to 10 kg.", checked: "Paid add-on." }
  ],
  "Turkish Airlines": [
    { label: "Economy", cabin: "1 cabin bag up to 8 kg (23 × 40 × 55 cm) plus a personal item up to 4 kg (40 × 30 × 15 cm).", checked: "Piece system: 1 bag up to 23 kg; EcoFly may include none on some lines. No bag over 32 kg." },
    { label: "Business", cabin: "See the detail below.", checked: "Piece system: bags up to 32 kg." }
  ]
};
