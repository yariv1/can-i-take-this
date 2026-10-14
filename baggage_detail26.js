// Slim baggage entries (batch 26, checked 14 October 2026, read on the airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// Saudia: saudia.com Carry-on baggage page, Additional baggage page, Branded Fares page. NOT stated on any reachable page: how many checked bags each fare includes (the Branded Fares table has no baggage rows). Extra baggage fee list not read.
// Gulf Air: gulfair.com Baggage Information page. The page holds an allowance calculator (route, class, fare type, Falconflyer status) and gives no allowance table; adult cabin allowance and per-fare figures NOT stated. Excess baggage prices not read (they need the contact centre).
// Cathay Pacific: cathaypacific.com Economy fares page (undated) and the carry-on and checked-baggage FAQ pages. The allowance by cabin class and membership tier is only in the Baggage Calculator (not readable): cabin bag size, Premium Economy, Business, First, route differences and fees NOT read.
module.exports = {
  "Saudia": {
    checked: "14 October 2026",
    title: "Saudia Baggage Allowance 2026: Cabin Bag 7 kg Guest, 12 kg Business, Checked Bag Limits 32 kg and 158 cm",
    desc: "Saudia baggage allowance 2026: Guest Class cabin bag 56 x 45 x 25 cm and 7 kg, Business and First 12 kg plus a 9 kg briefcase, checked bag up to 32 kg and 158 cm, AlFursan Elite extra piece, sports equipment fees.",
    answer: "Saudia allows one hand bag or briefcase of up to 56 x 45 x 25 cm and 7 kg in Guest Class, and in First and Business a hand bag of 12 kg plus a briefcase of 45 x 20 x 35 cm and 9 kg, plus one free personal item. Checked baggage is the number of pieces shown on your ticket; Saudia's pages we could read do not say how many bags each Guest fare (Saver, Basic, Semi Flex, Flex) includes. A piece can be up to 32 kg and 158 cm (62 in), and AlFursan Elite and Elite Plus members get one extra piece.",
    stats: [
      ["7 kg", "Guest Class cabin bag, 56 × 45 × 25 cm"],
      ["12 kg + 9 kg", "First and Business: hand bag plus briefcase"],
      ["32 kg · 158 cm", "maximum checked piece (70 lb, 62 in)"],
      ["+1 piece", "AlFursan Elite and Elite Plus, on international flights"]
    ],
    sections: [
      { h: "🎒 Cabin baggage",
        table: { head: ["Class", "Item", "Size", "Weight"], rows: [
          ["Guest", "1 hand bag or briefcase", "56 × 45 × 25 cm (22 × 18 × 10 in)", "up to 7 kg"],
          ["First and Business", "1 hand bag", "56 × 45 × 25 cm (22 × 18 × 10 in)", "up to 12 kg"],
          ["First and Business", "1 briefcase", "45 × 20 × 35 cm (18 × 8 × 14 in)", "up to 9 kg"] ] },
        list: ["<strong>Personal item:</strong> one free item on top, such as a coat, tablet, women's handbag, stroller or baby cradle, or essential items for guests with disabilities.",
          "<strong>From the USA or Canada to Saudi Arabia:</strong> only one carry-on item in all classes, up to 16 lb and 45 in.",
          "<strong>Power banks:</strong> a maximum of two, in carry-on only, never charged on board." ] },
      { h: "🧳 Checked baggage",
        table: { head: ["Who", "Allowance"], rows: [
          ["Every guest", "The number of pieces shown on your ticket (the Branded Fares page lists no bags per fare)"],
          ["AlFursan Gold, Silver, Elite, Elite Plus, domestic", "1 extra piece up to 23 kg"],
          ["AlFursan Elite and Elite Plus, international", "1 extra piece: up to 32 kg in First and Business, up to 23 kg in Guest"],
          ["Renal failure patients with the official card or report", "8 pieces up to 32 kg each, domestic and international departures from Saudi Arabia"] ] },
        list: ["<strong>Size:</strong> up to 158 cm (62 in); sports equipment from 158 to 205 cm costs USD 100 more and 205 to 300 cm a further USD 67 (USD 167 in total); above 300 cm or over 32 kg it goes as cargo.",
          "<strong>Extra baggage is not granted</strong> on code-share, SPA agreement, promotional fares or when combining with other airlines.",
          "<strong>Departing Riyadh to JFK, IAD, LAX or Toronto:</strong> checked baggage must be sealed with safe wrap.",
          "<strong>Not on the pages we could read:</strong> bags included per Guest fare and the price list for extra bags. Check your ticket." ] }
    ],
    faq: [
      ["What is the Saudia cabin baggage allowance?", "Guest Class: one hand bag or briefcase, 56 × 45 × 25 cm, up to 7 kg. First and Business: a 12 kg hand bag plus a 9 kg briefcase. One free personal item as well."],
      ["What is the Saudia checked baggage weight limit?", "A piece can be up to 32 kg and 158 cm (62 in). The number of pieces is the one shown on your ticket."],
      ["Does Saudia Guest Saver include a checked bag?", "Saudia's Branded Fares page lists Saver, Basic, Semi Flex and Flex but gives no baggage rows, so we cannot say. Check the allowance on your ticket."],
      ["Do AlFursan members get extra baggage on Saudia?", "Gold, Silver, Elite and Elite Plus members get one extra piece (up to 23 kg) on domestic flights; Elite and Elite Plus get one extra piece on international flights (32 kg in First and Business, 23 kg in Guest)."],
      ["How many power banks can I take on Saudia?", "A maximum of two, in carry-on baggage only."]
    ],
    sources: [
      ["https://www.saudia.com/en-SA/manage/baggage/carry-on-baggage", "Saudia &mdash; Carry-on baggage"],
      ["https://www.saudia.com/en-SA/manage/baggage/additional-baggage", "Saudia &mdash; Additional baggage"],
      ["https://www.saudia.com/en-SA/book/travel-information/branded-fares", "Saudia &mdash; Branded fares"]
    ]
  },
  "Cathay Pacific": {
    checked: "14 October 2026",
    title: "Cathay Pacific Baggage Allowance 2026: Economy Light 1 x 23 kg, Essential and Flex 2 x 23 kg, Cabin Bag 7 kg",
    desc: "Cathay Pacific baggage allowance 2026 for Economy fares: cabin baggage 1 piece 7 kg on Light, Essential and Flex, checked baggage Light 1 piece of 23 kg, Essential and Flex 2 pieces of 23 kg each.",
    answer: "On Cathay Pacific's Economy fares, Light, Essential and Flex each include 1 piece of cabin baggage of 7 kg. Checked baggage is 1 piece of 23 kg on Light and 2 pieces of 23 kg each on Essential and Flex. Customers with a reserved seat can also bring one small item (a small handbag, laptop bag, small backpack, camera bag or briefcase). Cathay says the allowance varies by cabin class and Cathay membership tier, so use its baggage calculator or the allowance on your e-ticket for your own figure.",
    stats: [
      ["7 kg", "cabin baggage, 1 piece, on every Economy fare"],
      ["1 × 23 kg", "checked bag on Economy Light"],
      ["2 × 23 kg", "checked bags on Economy Essential and Flex"],
      ["Calculator", "allowance also depends on cabin and membership tier"]
    ],
    sections: [
      { h: "🧳 Economy fares",
        table: { head: ["Fare", "Cabin baggage", "Checked baggage"], rows: [
          ["Light", "1 piece, 7 kg", "1 piece, 23 kg"],
          ["Essential", "1 piece, 7 kg", "2 pieces, 23 kg each"],
          ["Flex", "1 piece, 7 kg", "2 pieces, 23 kg each"] ] },
        list: ["<strong>Small item:</strong> customers with a reserved seat can carry one additional small item, such as a small handbag, laptop bag, small backpack, camera bag or briefcase, and necessary items such as a small camera or a walking stick.",
          "<strong>Your own allowance:</strong> the free checked and carry-on allowance varies by cabin class and Cathay membership tier. Cathay's pages send you to its Baggage Calculator (flight and membership details); the calculator is not something we could read.",
          "<strong>Not on the pages we could read:</strong> cabin bag size, Premium Economy, Business and First allowances, route differences and extra baggage fees. The Economy fares page is undated, so check your ticket." ] }
    ],
    faq: [
      ["What is the Cathay Pacific carry-on baggage allowance?", "One piece of cabin baggage of 7 kg on Economy Light, Essential and Flex, plus one small item for customers with a reserved seat."],
      ["What is the Cathay Pacific checked baggage allowance in Economy?", "Light: 1 piece of 23 kg. Essential and Flex: 2 pieces of 23 kg each."],
      ["Does the Cathay Pacific allowance depend on my membership?", "Yes. Cathay says the free allowance varies by cabin class and membership tier; the baggage calculator shows yours."],
      ["What can I bring as a small item on Cathay Pacific?", "A small handbag, laptop bag, small backpack, camera bag or briefcase; a small camera or a walking stick can also go on board."],
      ["What does this page not cover?", "Cabin bag size, Premium Economy, Business, First, route differences and extra baggage fees were not on the pages we could read."]
    ],
    sources: [
      ["https://www.cathaypacific.com/cx/en_US/book-a-trip/book-flights/new-economy-fares.html", "Cathay Pacific &mdash; Our Economy fares (undated)"],
      ["https://www.cathaypacific.com/cx/en_US/faqs/baggage/cabin-baggage-allowance/what-is-my-carry-on-baggage-allowance.html", "Cathay Pacific &mdash; Carry-on baggage allowance"],
      ["https://www.cathaypacific.com/cx/en_US/faqs/baggage/check-in-baggage-allowance/what-is-my-free-checked-baggage-allowance.html", "Cathay Pacific &mdash; Free checked baggage allowance"]
    ]
  },
  "Gulf Air": {
    checked: "14 October 2026",
    title: "Gulf Air Baggage Allowance 2026: 32 kg and 158 cm Limits, Infants, US Flights 2 x 23 kg",
    desc: "Gulf Air baggage allowance 2026: allowance depends on fare family, Falconflyer status and destination (use the Gulf Air calculator), 32 kg and 158 cm per bag, infant allowance, 2 pieces of 23 kg on US-operated flights.",
    answer: "Gulf Air does not publish one allowance table: your allowance depends on your ticket fare family, Falconflyer membership and final destination, and the airline provides a baggage calculator for it. What the page states for everyone: no single bag may exceed 32 kg or 158 cm (62 in), a bag over 32 kg must be repacked, and on weight-concept destinations you may carry up to five bags within your total weight. On US-operated flights Economy passengers can carry two pieces of up to 23 kg each, with combined dimensions up to 273 cm (107 in).",
    stats: [
      ["Calculator", "allowance depends on fare, Falconflyer status and destination"],
      ["32 kg · 158 cm", "maximum per bag (70 lb, 62 in)"],
      ["2 × 23 kg", "Economy on US-operated flights"],
      ["10 kg", "infant checked piece (15 kg on US-operated flights)"]
    ],
    sections: [
      { h: "🧳 What Gulf Air states",
        table: { head: ["Rule", "Limit"], rows: [
          ["Weight per bag", "32 kg maximum; over 32 kg must be repacked (mobility aids excepted)"],
          ["Size per bag", "158 cm (62 in) maximum"],
          ["Weight-concept destinations", "up to 5 bags, within the total weight allowed for your route"],
          ["US-operated flights, Economy", "2 pieces, each up to 23 kg (50 lb), combined linear dimensions up to 273 cm (107 in)"],
          ["Cabin baggage", "must be weighed and labelled"] ] },
        list: ["<strong>Your own figure:</strong> use the baggage calculator on Gulf Air's baggage page (choose route, class, fare type and Falconflyer status); the page we read does not list the allowance per fare.",
          "<strong>Excess baggage:</strong> sold in multiples of 5 kg on Gulf Air-operated flights, online up to the maximum for your flight (up to 50 kg or 99 pieces depending on the route); prepaid rates are not available at the airport, where standard rates apply. Zones: 1 the Gulf, 2 Middle East, Africa and the Indian subcontinent, 3 the Far East, Europe and New York. Prices need the contact centre; we did not read them.",
          "<strong>Other airlines in your itinerary:</strong> different baggage rules may apply; your ticket shows each flight." ] },
      { h: "👶 Children and infants",
        table: { head: ["Passenger", "Allowance"], rows: [
          ["Children 2 and over", "Same as adults, plus a collapsible stroller and a child car seat, free"],
          ["Infants under 2", "1 checked piece up to 10 kg, plus a collapsible stroller and an infant car seat, free"],
          ["Infant cabin bag", "1 bag up to 44 × 35 × 20 cm and 3 kg"],
          ["Infants, US-operated flights", "1 checked piece up to 15 kg and a 3 kg carry-on"] ] } }
    ],
    faq: [
      ["What is the Gulf Air baggage allowance?", "It depends on your fare family, Falconflyer status and destination; Gulf Air provides a calculator. No bag may exceed 32 kg or 158 cm."],
      ["What is the Gulf Air checked bag weight limit?", "32 kg per bag and 158 cm (62 in); a heavier bag must be repacked."],
      ["How many bags can I check on Gulf Air?", "On weight-concept destinations up to five bags within your total weight; on US-operated flights Economy passengers can take two pieces of up to 23 kg."],
      ["What is the Gulf Air infant baggage allowance?", "One checked piece up to 10 kg (15 kg on US-operated flights), a stroller and an infant car seat, plus a cabin bag of 3 kg."],
      ["Can I buy extra baggage on Gulf Air?", "Yes, in multiples of 5 kg on Gulf Air-operated flights, online or via the contact centre; prepaid rates are not available at the airport."]
    ],
    sources: [
      ["https://www.gulfair.com/en/help/baggage/baggage-information", "Gulf Air &mdash; Baggage information"]
    ]
  }
};
