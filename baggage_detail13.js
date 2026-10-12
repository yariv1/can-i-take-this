// Slim baggage entries (batch 13, checked 12 October 2026, read on each airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// Finnair: finnair.com/us-en Checked baggage, Carry-on baggage, Extra baggage fees (prices updated 8 June 2026 per the page). NOT read: special baggage, pets, route list for Light fares.
module.exports = {
  "Finnair": {
    title: "Finnair Baggage Allowance 2026: Carry-On 55 x 40 x 23 cm, Checked Bag 23 kg, Extra Bag Fees",
    desc: "Finnair baggage allowance 2026: carry-on 55 x 40 x 23 cm plus a small bag, checked bag up to 23 kg (32 kg in Business), what Light and Superlight include, and extra bag fees prepaid vs at the airport.",
    answer: "Finnair allows one carry-on of 55 x 40 x 23 cm plus a small bag of 40 x 30 x 15 cm on most fares; Economy Superlight includes only the small bag. Economy Classic and Flex include one checked bag up to 23 kg (50 lb) on most routes and two on Japan to Europe; Light and Superlight fares include none on the listed routes. A standard checked bag is up to 90 x 75 x 45 cm. Extra bags are cheaper prepaid than at the airport, for example a second bag is 50 to 70 euros prepaid in the rest of Europe and 90 euros at the airport.",
    stats: [
      ["55 × 40 × 23 cm", "carry-on, plus a 40 × 30 × 15 cm small bag"],
      ["23 kg (50 lb)", "standard checked bag (32 kg in Business long-haul)"],
      ["90 × 75 × 45 cm", "standard checked bag size"],
      ["€60", "fee for a carry-on that is not in your booking or is too big"]
    ],
    sections: [
      { h: "🧳 What each fare includes (checked bags)",
        table: { head: ["Fare", "Included checked bags"], rows: [
          ["Economy Classic / Flex", "2 bags of 23 kg on Japan to Europe; 1 bag of 23 kg on all other route categories"],
          ["Economy Light / Superlight", "0 bags on the listed routes (Superlight is not offered on the first three route categories)"],
          ["Premium Economy Classic / Flex", "2 bags of 23 kg on Japan to Europe and North America to Europe; 1 bag of 23 kg on Asia and Middle East"],
          ["Business Classic / Flex", "3 bags of 32 kg Japan to Europe; 2 bags of 32 kg Asia/Middle East and North America to Europe; 1 bag of 23 kg other routes"] ] },
        list: ["<strong>Weight and size:</strong> Economy and Premium Economy 23 kg (50 lb); Business 23 kg short-haul and 32 kg (70 lb) long-haul; up to 90 × 75 × 45 cm. Absolute maximum 190 × 75 × 65 cm.",
          "<strong>Children</strong> get the adult allowance; infants (0 to 2) get 1 bag of 23 kg plus a stroller and car seat free.",
          "<strong>Members:</strong> Finnair Plus Gold, Platinum and Platinum Lumo get one extra 23 kg bag on Finnair-operated and marketed flights; Silver gets 50% off the extra bag fee." ] },
      { h: "🎒 Carry-on and small bag",
        table: { head: ["Item", "Size", "Note"], rows: [
          ["Carry-on bag", "55 × 40 × 23 cm", "Not included on Economy Superlight (only buyable there)"],
          ["Small bag (under the seat)", "40 × 30 × 15 cm", "Included on every fare"],
          ["Combined weight", "—", "8 or 12 kg depending on fare; Business Flex 12 kg, Premium Economy Flex 8 kg"] ] },
        list: ["A bag that is not in your booking, or exceeds the size or weight limit, is charged a €60 fee to place it in the hold.",
          "The crew may move excess carry-on bags to the hold before departure, so check oversized bags at the airport." ] },
      { h: "💶 Extra bag fees (per journey, one direction)",
        p: "Prices depend on the ticket purchase date and route; Finnair says some prices were updated on 8 June 2026.",
        table: { head: ["Route", "2nd bag prepaid", "2nd bag at airport", "3rd+ at airport"], rows: [
          ["Finland and Northern Europe", "€45–65", "€85", "€95"],
          ["Rest of Europe", "€50–70", "€90", "€100"],
          ["North America to Europe", "€90 / $100 / £75", "€105 / $110 / £90", "€200 / $215 / £175"],
          ["Asia, Middle East", "€95–125", "€150", "€220"] ] },
        list: ["<strong>First bag on Light fares</strong> (Europe, prepaid): €27–55; at the airport €65–70.",
          "<strong>Heavy (23 to 32 kg) or oversized bags:</strong> prepaid within Europe €65–100; to or from North America €160 to €180 ($180 to $200) depending on how early you buy. At the airport €65 within Europe and €85 ($95) on long-haul routes, charged on top of the extra bag fee; heavy and oversized together double it.",
          "<strong>Not accepted:</strong> cash payments for Finnair services at Helsinki Airport." ] }
    ],
    faq: [
      ["What is the Finnair carry-on size?", "55 × 40 × 23 cm for the carry-on and 40 × 30 × 15 cm for the small bag that goes under the seat, with a combined weight of 8 or 12 kg depending on the fare."],
      ["Does Finnair Economy Light include a checked bag?", "No. Light and Superlight fares include no checked bag on the listed routes; Classic and Flex include one 23 kg bag (two on Japan to Europe)."],
      ["What is the Finnair checked bag weight limit?", "23 kg (50 lb) in Economy and Premium Economy, and 32 kg (70 lb) in Business on long-haul. Bags of 23 to 32 kg pay a heavy bag charge in Economy."],
      ["How much is an extra bag on Finnair?", "A second bag is €50–70 prepaid in the rest of Europe and €90 at the airport; between North America and Europe it is €90 / $100 / £75 prepaid and €105 / $110 / £90 at the airport."],
      ["What happens if my Finnair carry-on is too big?", "A bag that is not in your booking, or exceeds the size or weight limit, is charged a €60 fee to be put in the hold."]
    ],
    sources: [
      ["https://www.finnair.com/us-en/baggage-on-finnair-flights/checked-baggage", "Finnair &mdash; Checked baggage"],
      ["https://www.finnair.com/us-en/baggage-on-finnair-flights/carry-on-baggage", "Finnair &mdash; Carry-on baggage"],
      ["https://www.finnair.com/us-en/baggage-on-finnair-flights/extra-baggage-fees", "Finnair &mdash; Extra baggage fees"]
    ]
  },
  "Air France": {
    title: "Air France Baggage Allowance 2026: Hand Baggage 12 kg, Checked Bag 23 kg, Extra Bag Fees",
    desc: "Air France baggage allowance 2026: hand baggage plus a small bag (12 kg in Economy), checked bag up to 23 kg (32 kg in Business), 158 cm size limit, MiNi fare with no checked bag, extra and heavy bag fees.",
    answer: "Air France allows 0 to 1 hand bag depending on the fare plus one small bag (40 x 30 x 15 cm) in Economy, up to 12 kg in total; Business and La Premiere allow 2 hand bags plus a small bag up to 18 kg. A checked bag is up to 23 kg in Economy and Premium (32 kg in Business and La Premiere) and 158 cm in length + width + height. Economy passengers get 0 or 1 checked bag of 23 kg depending on the fare, and MiNi fares include none.",
    stats: [
      ["12 kg", "hand baggage + small bag, Economy (18 kg in Business)"],
      ["40 × 30 × 15 cm", "small bag that goes under the seat"],
      ["23 / 32 kg", "checked bag, Economy and Premium / Business and La Première"],
      ["158 cm", "checked bag, height + length + width"]
    ],
    sections: [
      { h: "🧳 Checked baggage allowance (Air France US site)",
        table: { head: ["Cabin", "Included checked bags"], rows: [
          ["La Première", "3 bags of 32 kg each"],
          ["Business", "2 bags of 32 kg each"],
          ["Premium Economy", "2 bags of 23 kg each"],
          ["Economy (all passengers occupying a seat)", "0 or 1 bag of 23 kg depending on the fare; Europe MiNi fares include none"],
          ["Club 2000, SkyTeam Elite, Elite Plus", "1 extra piece (32 kg in La Première and Business, 23 kg in Premium Economy and Economy)"] ] },
        list: ["<strong>Weight and size:</strong> each checked piece must stay within 23 kg or 32 kg depending on the cabin, and within 158 cm (height + length + width).",
          "<strong>MiNi fares</strong> (some intra-European routes) do not allow free checked bags. A bag can be added from about $20 (15 euros) online in advance and from about $40 (30 euros) at the airport." ] },
      { h: "🎒 Hand baggage",
        table: { head: ["Cabin", "Allowed", "Maximum weight"], rows: [
          ["Economy", "0 to 1 hand bag depending on the fare + 1 small bag", "12 kg total (26.4 lb)"],
          ["Premium Economy", "2 hand bags + 1 small bag (intercontinental)", "12 kg total"],
          ["Business and La Première", "2 hand bags + 1 small bag", "18 kg total (40 lb)"] ] },
        list: ["<strong>Small bag:</strong> 40 × 30 × 15 cm (16 × 12 × 6 in), under the seat.",
          "<strong>Basic fare hand bag:</strong> up to 55 × 35 × 25 cm (21.7 × 13.8 × 9.9 in) including pockets, wheels and handles, stored in the overhead bin; an additional hand baggage option can be bought up to 4 hours before departure.",
          "<strong>Liquids:</strong> in a plastic bag of up to 1 liter, no larger than 20 × 20 cm, one bag per passenger." ] },
      { h: "💵 Extra and heavy bag fees",
        p: "Air France prints these prices by route zone on its US fees page; the column labels did not map cleanly to each figure, so check your route in the booking flow.",
        table: { head: ["Item", "Fee range printed (each way)"], rows: [
          ["2nd bag, if your allowance is 1 piece", "$55, $55, $75 or $100 depending on the route zone"],
          ["Heavy bag, over 23 kg up to 32 kg", "$55, $55, $75 or $100 depending on the route zone; must be bought at the airport"],
          ["Each piece beyond the free allowance", "$200, $200, $285 or $200 depending on the route zone"] ] },
        list: ["<strong>Online purchase:</strong> buying additional baggage online gives a 20% reduction on these prices; heavy bags must be bought at the airport with no discount. Online purchase is not available for departures from Atlanta, Detroit, Newark, Orlando, Damascus and Seoul or to and from Mauritius."] }
    ],
    faq: [
      ["What is the Air France hand baggage allowance in Economy?", "0 to 1 hand bag depending on the fare plus one small bag (40 × 30 × 15 cm), with a combined weight of 12 kg. Business and La Première allow 18 kg."],
      ["What is the Air France checked bag weight limit?", "23 kg per bag in Economy and Premium Economy, 32 kg in Business and La Première, and 158 cm in height + length + width."],
      ["Does Air France MiNi include a checked bag?", "No. MiNi fares do not allow free checked bags; adding one starts around $20 (15 euros) online in advance and $40 (30 euros) at the airport."],
      ["How much is a heavy bag on Air France?", "A bag over 23 kg up to 32 kg is charged $55 to $100 depending on the route zone, paid at the airport."],
      ["Do SkyTeam Elite members get extra bags on Air France?", "Club 2000, SkyTeam Elite and Elite Plus members get one extra piece: 32 kg in La Première and Business, 23 kg in Premium Economy and Economy."]
    ],
    sources: [
      ["https://wwws.airfrance.us/information/bagages/bagage-cabine-soute", "Air France &mdash; Baggage (hand baggage)"],
      ["https://wwws.airfrance.us/information/legal/us-regulation", "Air France &mdash; Fees and paid options (USA)"],
      ["https://wwws.airfrance.us/information/bagages/bagages-supplementaires-plus-grands-plus-lourds", "Air France &mdash; Extra and overweight baggage"]
    ]
  }
};
