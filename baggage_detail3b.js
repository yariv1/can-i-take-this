// Third batch, part 2 (read on the airline's OWN pages on 2026-10-07): Philippine Airlines.
module.exports = {
  "Philippine Airlines": {
    title: "Philippine Airlines Baggage Allowance: 7 kg Carry-On, by Route",
    desc: "Philippine Airlines baggage allowance 2026: 7 kg carry-on 56 x 36 x 23 cm plus a personal item, 2 x 23 kg to the USA, weight allowance by route in Asia.",
    answer: "Philippine Airlines allows one carry-on bag of up to 7 kg and 56 x 36 x 23 cm plus one personal item. Checked baggage depends on the route: flights to and from the United States use a piece system of 2 pieces at 23 kg (50 lb) each in Economy and 2 x 32 kg (70 lb) in Business, while Asia routes use a weight allowance that depends on the destination and fare. No single piece may weigh more than 32 kg.",
    stats: [["7 kg", "carry-on bag, 56 x 36 x 23 cm"], ["2 x 23 kg", "Economy to and from the USA"], ["32 kg", "most a single checked piece may weigh"], ["USD 125", "fee for non-compliant hand carry, from US/Canada"]],
    sections: [
      { h: "🎒 Philippine Airlines carry-on baggage allowance", p: "Each passenger is allowed one piece of carry-on baggage, plus one personal item and some extra items for specific needs.",
        table: { head: ["Item", "Size", "Weight"], rows: [
          ["Carry-on bag", "56 x 36 x 23 cm (22 x 14 x 9 in) total", "Up to 7 kg (15 lb)"],
          ["Personal item (one of the listed items)", "Laptop with case up to 45 x 35 x 20 cm (18 x 14 x 8 in)", "-"] ] },
        list: ["<strong>Personal item, one of:</strong> a small handbag, pocket book or purse; an overcoat, wrap or blanket; a laptop with case; a reasonable amount of reading material; a duty free bag; infant food for consumption in flight.",
          "<strong>Also allowed, one of:</strong> medical assistance items (crutches, walkers, folding wheelchairs, a walking stick or prosthetic device the passenger depends on), a small musical instrument, a small camera or binoculars, and an extension cord or power strip. A guitar that cannot fit in the overhead compartment or under the seat is accepted only as checked baggage.",
          "<strong>Tied together:</strong> multiple items that are strapped, wrapped or tied together are not counted as one piece of cabin item.",
          "<strong>Intercepted hand carry fee:</strong> from Seattle, San Francisco, Vancouver and Toronto, a fee of USD 125 / CAD 125 may be charged when you have more than one piece of hand carry, or one piece over the size or weight limit; the bag must then be accepted as checked baggage.",
          "<strong>Power banks:</strong> spare and loose batteries and power banks must not be placed in the overhead bins on any PAL flight; power banks must not exceed 100 Wh and must show a clear capacity label."] },
      { h: "🧳 Philippine Airlines checked baggage by route", p: "Philippine Airlines uses a piece system on some routes and a weight system on others. The allowance shown on your ticket is the one that applies, and a single piece of checked baggage should weigh no more than 32 kg (70 lb); anything heavier must be repacked or will not be accepted.",
        table: { head: ["Route and cabin", "Free baggage allowance"], rows: [
          ["United States, Economy Supersaver, Saver, Value and Flex", "Piece system: 2 pieces at 50 lb (23 kg) each"],
          ["United States, Premium Economy", "Piece system: 2 pieces at 55 lb per piece"],
          ["United States, Business Value and Flex", "Piece system: 2 pieces at 70 lb (32 kg) each"],
          ["Asia, for example Philippines to Hong Kong, tickets sold on or after 19 Nov 2024", "Weight system by fare: Supersaver none, Saver 23 kg, Value 30 kg, Flex 35 kg, Premium Economy 40 kg"],
          ["Asia, Business Value and Flex, Philippines to Hong Kong and Taipei", "40 kg"] ] },
        list: ["<strong>Asia routes:</strong> PAL publishes a table per destination (Bali, Bangkok, Beijing, Hong Kong, Singapore, Taipei and others), and the figure also depends on the date the ticket was sold. Passengers may bring 2 or more pieces as long as the total weight does not exceed their allowance.",
          "<strong>Korea:</strong> for Seoul and Busan flights, tickets sold on or before 4 Oct 2026 have 20 kg in Economy Value and 25 kg in Economy Flex; for tickets sold on or after 5 Oct 2026 the page shows no free allowance in Economy Supersaver, 20 kg in Saver and 25 kg in Value.",
          "<strong>Connections:</strong> PAL notes that a free baggage allowance is valid on that flight only and may not apply to connecting flights, where you may have to pay excess baggage charges.",
          "<strong>Packing boxes:</strong> use thick cartons, put styrofoam boxes inside a sturdy carton, and wrap food and liquids to avoid leakage."] },
      { h: "💲 Philippine Airlines excess baggage charges", p: "Charges apply to baggage over your free allowance. Routes on the weight system are charged per kilo and routes on the piece system per piece.",
        table: { head: ["Route", "Excess baggage charge"], rows: [
          ["Domestic (PAL and PAL Express)", "PHP 350 per kilo VAT inclusive; PHP 400 from 10 April 2025"],
          ["Philippines to Hong Kong", "USD 13 per kilo"],
          ["Philippines to Singapore", "SGD 14 per kilo"],
          ["Philippines to Bangkok", "THB 360 per kilo"],
          ["Philippines to Sydney or Brisbane", "USD 24 per kilo"],
          ["Philippines to Dubai (piece system)", "AED 590 per extra, overweight 23.1-32 kg or oversized 63-80 in piece; AED 1,175 for 81 in or more"],
          ["Philippines to the US (San Francisco, Los Angeles, Honolulu, Seattle, New York, Chicago, Vancouver)", "USD 250 per extra, overweight 23.1-32 kg or oversized 63-80 in piece; USD 750 for 81 in or more"],
          ["Philippines to Tokyo, Nagoya, Osaka, Fukuoka, Sapporo", "USD 120 per piece"] ] },
        list: ["<strong>Oversize on weight-system routes:</strong> an individual item over 62 inches (158 cm) in total dimensions, within the weight limit, is treated as oversized and carries an additional charge.",
          "<strong>Several charges:</strong> when two or more types of excess baggage charge apply, the passenger pays all of them.",
          "PAL lists rates in the opposite direction (to Manila) separately, and in other currencies: check the Excess Baggage Charge page for your route."] }
    ],
    faq: [
      ["What is the Philippine Airlines baggage allowance?", "One carry-on bag up to 7 kg (56 x 36 x 23 cm) plus one personal item. Checked baggage depends on your route and fare: for example 2 x 23 kg in Economy to and from the United States, and a weight allowance on Asia routes."],
      ["What is the Philippine Airlines carry-on size and weight?", "56 cm x 36 cm x 23 cm in total dimensions and up to 7 kg (15 lb). A laptop with case, as a personal item, can be up to 45 x 35 x 20 cm."],
      ["Does Philippine Airlines Economy Supersaver include a checked bag?", "On Asia routes, tickets sold on or after the dates PAL lists (for example 19 Nov 2024 for Hong Kong) show no free baggage allowance in Economy Supersaver. To and from the United States, PAL's page lists 2 pieces of 50 lb for Supersaver."],
      ["What is the Philippine Airlines checked baggage weight limit?", "A single piece of checked baggage should weigh no more than 32 kg (70 lb); heavier baggage must be repacked or will not be accepted. Oversized items over 62 inches (158 cm) in total dimensions carry an additional charge."],
      ["How much is excess baggage on Philippine Airlines?", "It depends on the route: PHP 350 per kilo within the Philippines (PHP 400 from 10 April 2025), USD 13 per kilo to Hong Kong, USD 24 per kilo to Sydney or Brisbane, and USD 250 per extra piece to the US."],
      ["Can I bring a power bank on Philippine Airlines?", "Yes in the cabin, not in the overhead bins: power banks must not exceed 100 Wh and must show a clear capacity label. Spare and loose batteries must not be placed in the overhead bins either."]
    ],
    sources: [["https://www.philippineairlines.com/ph/en/before-you-fly/baggage-information/baggage-allowance/baggage-allowance-fees/carry-on-baggage.html", "Philippine Airlines &mdash; Carry-on baggage"], ["https://www.philippineairlines.com/ph/en/before-you-fly/baggage-information/baggage-allowance/baggage-allowance-fees/international-flights/asia.html", "Philippine Airlines &mdash; Asia baggage allowance"], ["https://www.philippineairlines.com/us/en/before-you-fly/farerulesandconditions/united-states.html", "Philippine Airlines &mdash; United States fare rules"], ["https://www.philippineairlines.com/us/en/before-you-fly/baggage-information/baggage-allowance/baggage-allowance-fees/international-flights/international-excess-baggage.html", "Philippine Airlines &mdash; Excess baggage charge"]]
  }
};
