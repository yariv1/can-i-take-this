// Delta baggage entry, read on delta.com's OWN pages (baggage/overview, carry-on-baggage, checked-baggage/excess-overweight-baggage, checked-baggage/medallion-baggage-allowance) on 2026-10-12. Same rules as BAGGAGE_DETAIL.md.
// NOT read: the international first/second checked bag fee table (the Baggage Calculator), the special-items pages, the Delta Connection carrier pages beyond the carry-on note, the Amex card terms. Fees below are the ones Delta lists for domestic Comfort/Main without a Delta Amex card, status or military exception.
module.exports = {
  "Delta": {
    title: "Delta Baggage Allowance 2026: Carry-On 22 x 14 x 9 in, Checked Bag Fees $45 and $55",
    desc: "Delta baggage allowance 2026: 1 free carry-on (22 x 14 x 9 in) and 1 personal item, first checked bag $45 and second $55 on domestic Main and Comfort, 50 lb limit, overweight and oversize fees.",
    answer: "Delta lets every passenger bring 1 carry-on and 1 personal item free. The carry-on must not exceed 22 x 14 x 9 in (56 x 35 x 23 cm) and 45 linear inches (114 cm) in total, handles and wheels included. On domestic flights in Delta Main or Comfort, without a Delta SkyMiles Amex card, Medallion status or military exception, the first standard checked bag costs $45 and the second $55, each way, for a bag up to 50 lb (23 kg) and 62 in (157 cm) in total.",
    stats: [
      ["22 × 14 × 9 in", "carry-on size (56 × 35 × 23 cm), 1 free + 1 personal item"],
      ["$45 / $55", "first / second checked bag, domestic Main and Comfort, each way"],
      ["50 lb (23 kg)", "standard checked bag weight"],
      ["62 in (157 cm)", "checked bag, length + width + height"]
    ],
    sections: [
      { h: "🎒 Carry-on and personal item",
        table: { head: ["Item", "Allowed", "Size or note"], rows: [
          ["Carry-on bag", "1, free", "22 × 14 × 9 in (56 × 35 × 23 cm) including handles and wheels, and no more than 45 linear inches (114 cm) in total"],
          ["Personal item", "1, free", "Fits under the seat in front of you: a purse, briefcase, small backpack, belt bag, fanny pack, camera bag, diaper bag or a laptop bag"],
          ["Extras that are also free", "In addition", "A jacket or umbrella, food or drink bought past security, duty-free merchandise, and special items such as strollers, wheelchairs, child safety seats and crutches"] ] },
        list: ["<strong>Delta says</strong> there is a limit on how many bags flight attendants can help place in the overhead bins, and gate agents can check a bag at the gate if the flight is full.",
          "<strong>Delta Connection flights, including flights with 50 seats or less:</strong> only personal items are permitted on board because overhead space is limited. Some carry-ons may be gate checked free of charge, with a pink Gate Claim tag, and returned when you get off.",
          "<strong>Partners:</strong> SkyTeam and codeshare partners can have different guidelines on certain flights, so check before you check in." ] },
      { h: "🧳 Checked bag fees and size on domestic flights",
        p: "These are the fees Delta lists for Delta Comfort and Delta Main customers on flights within the U.S., without a Delta SkyMiles American Express card, Medallion status or an active-military exception.",
        table: { head: ["Bag", "Fee (each way)", "Limit"], rows: [
          ["First standard checked bag", "$45", "Up to 50 lb (23 kg)"],
          ["Second standard checked bag", "$55", "Up to 50 lb (23 kg)"],
          ["Third bag", "$200", "Bags 3 to 10 are $200 each"],
          ["Size", "—", "62 in (157 cm): length + width + height"] ] },
        list: ["<strong>Online check-in:</strong> you can select the number of bags you plan to check and pay, or redeem miles (domestically, at most airports), in the 24-hour check-in window on delta.com, in the Fly Delta app or at a kiosk at the airport.",
          "<strong>Number of bags:</strong> up to 10 per passenger on flights operated by Delta or Delta Shuttle, and up to 4 on Delta Connection carrier flights. Delta can limit excess baggage if it prevents carrying up to two bags per passenger.",
          "<strong>International flights:</strong> the first and second checked bag fees depend on the route and fare; Delta shows them in its Baggage Calculator, which we did not read." ] },
      { h: "⚖️ Overweight and oversized bags",
        p: "Delta charges a separate fee for each limit a bag exceeds (size, weight, quantity), so a bag that is extra, overweight and oversize pays three fees.",
        table: { head: ["Situation (within the U.S., Canada, Puerto Rico, USVI)", "Fee (each way)"], rows: [
          ["Overweight bag, 51 to 70 lb (23 to 31.75 kg)", "$100"],
          ["Overweight bag, 71 to under 100 lb (32 to 45.36 kg)", "$200"],
          ["Oversized bag, 63 to 80 in (161 to 203 cm)", "$200"],
          ["Bag of 100 lb (45.36 kg) or more, or larger than 80 in (203 cm)", "Not permitted"] ] },
        list: ["<strong>Between North, Central or South America and Europe or North Africa:</strong> overweight 51 to 70 lb is $100 (or $120 CAD or €85 when departing Canada or Europe), and bags over 70 lb (31.75 kg) are not allowed.",
          "<strong>Also limited to 70 lb (31.75 kg):</strong> flights to, from or within Australia and New Zealand, and flights to, from or through Europe, South Africa or the United Arab Emirates.",
          "<strong>Extra bags (3 to 10) on international routes:</strong> $200 on most routes, $285 USD between North, Central or South America and Europe or North Africa. CAD or EUR amounts are charged when leaving Canada or Europe." ] },
      { h: "🏅 Who gets bags free",
        list: ["<strong>Medallion members:</strong> the first checked bag fee is waived with Delta Medallion status, or as a SkyTeam Elite or Elite Plus member. This also covers companions on the reservation, up to 8, on Delta-operated flights (not from Paris CDG or Amsterdam AMS).",
          "<strong>Medallion, Delta Main and Comfort within the U.S. and Canada:</strong> Silver 1, Gold 2, Platinum 3 and Diamond 3 free bags, as listed in Delta's allowance table. Delta One and Delta First: up to 3 free bags at 70 lb (32 kg) each. Delta Premium Select: 3 free bags.",
          "<strong>Delta SkyMiles American Express card:</strong> first checked bag free on Delta flights booked with the card, for the cardholder and up to 8 companions on the reservation. The Basic cardholder also gets a second bag free on domestic flights. The waiver does not apply to overweight or oversize bags.",
          "<strong>Military:</strong> exceptions apply for active military; we did not read that page." ] }
    ],
    faq: [
      ["What is the Delta carry-on size?", "22 × 14 × 9 in (56 × 35 × 23 cm), including handles and wheels, and no more than 45 linear inches (114 cm) in total. You can also bring one personal item that fits under the seat."],
      ["Is a carry-on free on Delta?", "Yes. Each passenger can bring 1 carry-on bag and 1 personal item free, with exceptions for infants-in-arms and pets in the cabin. On Delta Connection flights with 50 seats or less, only personal items are allowed on board."],
      ["How much is the first checked bag on Delta?", "$45 each way on domestic Delta Main and Comfort flights for a bag up to 50 lb (23 kg), and $55 for the second, unless you have a Delta SkyMiles Amex card, Medallion status or a military exception. International fees depend on the route and are shown in Delta's Baggage Calculator."],
      ["What is the Delta checked bag weight limit?", "50 lb (23 kg) for a standard checked bag. Heavier bags pay $100 for 51 to 70 lb and $200 for 71 to under 100 lb within the U.S. and Canada; bags of 100 lb or more are not permitted. Some international routes cap bags at 70 lb."],
      ["What is the Delta checked bag size limit?", "62 inches (157 cm) in length + width + height. Bags of 63 to 80 inches pay $200 each way, and bags larger than 80 inches (203 cm) are not permitted."],
      ["How many bags can I check on Delta?", "Up to 10 per passenger on Delta or Delta Shuttle flights and up to 4 on Delta Connection flights. Bags 3 to 10 cost $200 each on domestic flights."]
    ],
    sources: [
      ["https://www.delta.com/us/en/baggage/overview", "Delta &mdash; Baggage Policy and Fees"],
      ["https://www.delta.com/us/en/baggage/carry-on-baggage", "Delta &mdash; Carry-On Baggage"],
      ["https://www.delta.com/us/en/baggage/checked-baggage/excess-overweight-baggage", "Delta &mdash; Excess &amp; Overweight Baggage"],
      ["https://www.delta.com/us/en/baggage/checked-baggage/medallion-baggage-allowance", "Delta &mdash; Medallion &amp; Credit Card Bag Allowance"]
    ]
  }
};
