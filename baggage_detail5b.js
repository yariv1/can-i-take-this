// Turkish Airlines baggage entry, read on Turkish Airlines' OWN pages (cabin baggage page and checked baggage page) on 2026-10-08. Same rules as BAGGAGE_DETAIL.md.
module.exports = {
  "Turkish Airlines": {
    title: "Turkish Airlines Baggage Allowance 2026: 8 kg Cabin, 23 kg Checked",
    desc: "Turkish Airlines baggage allowance: Economy cabin bag 8 kg (23 x 40 x 55 cm) plus a 4 kg personal item, one 23 kg checked piece on piece routes, 10 kg on weight routes.",
    answer: "In Economy, Turkish Airlines allows one cabin bag of up to 8 kg (23 x 40 x 55 cm) plus one personal item of up to 4 kg (40 x 30 x 15 cm). Checked baggage follows either the piece system (one bag up to 23 kg in Economy, 32 kg in Business) or the weight system (10 kg on the lines that use it), and no single bag may weigh more than 32 kg. EcoFly fares may include no checked baggage on some lines.",
    stats: [
      ["8 kg + 4 kg", "Economy cabin bag plus personal item"],
      ["23 kg", "one checked piece in Economy on piece-system routes"],
      ["32 kg", "most any single checked bag may weigh"],
      ["158 cm", "total of width + height + depth before oversize fees"]
    ],
    sections: [
      { h: "🎒 Turkish Airlines cabin baggage allowance",
        p: "Turkish Airlines sets a standard cabin bag size and weight and adds a personal item on top, so your allowance is two pieces in Economy and three in Business.",
        table: { head: ["Class", "Cabin bag", "Personal item"], rows: [
          ["Economy", "1 piece, up to 23 x 40 x 55 cm and 8 kg", "1 piece, up to 40 x 30 x 15 cm and 4 kg"],
          ["Business", "2 pieces, each up to 23 x 40 x 55 cm and 8 kg, 16 kg in total", "1 piece, up to 40 x 30 x 15 cm and 4 kg"],
          ["Infant passengers (Economy or Business)", "1 piece of cabin baggage up to 8 kg", "Not stated on the page"]
        ] },
        list: [
          "<strong>Star Alliance Gold:</strong> in Economy one cabin bag (23 x 40 x 55 cm, 8 kg) and one personal item; in Business two pieces of 8 kg each and one personal item.",
          "<strong>At the gate:</strong> cabin baggage that does not comply with the rules and is untagged is charged at the boarding gate and carried in the hold; if the hold is full it is sent on the next available flight.",
          "<strong>Handed in at check-in:</strong> on full flights the crew may ask you to hand in a standard cabin bag at check-in. It is then treated as checked baggage and no extra fee is charged.",
          "<strong>Personal item:</strong> Turkish Airlines asks that it be stowed under the seat during the flight."
        ] },
      { h: "🧳 Turkish Airlines checked baggage: piece system and weight system",
        p: "The allowance on your ticket depends on whether your route uses the piece concept or the kilogram (weight) concept, and on your fare. These are the rules Turkish Airlines publishes on its checked baggage page.",
        table: { head: ["Rule", "What Turkish Airlines says"], rows: [
          ["Piece-system routes: Economy", "One bag up to 23 kg (charges apply if it is overweight)"],
          ["Piece-system routes: Business", "Bags up to 32 kg"],
          ["Weight-system lines (not EcoFly)", "10 kg of free baggage allowance"],
          ["EcoFly lines that include baggage", "1 piece of 23 kg under the piece system, 10 kg under the weight system"],
          ["EcoFly lines that do not include baggage", "No free checked baggage"],
          ["Maximum size of a free bag", "No more than 158 cm (width + height + depth) on flights that apply the piece and kilogram concept"],
          ["Any single bag", "Cannot exceed 32 kg; heavier baggage must be divided into two or more pieces"],
          ["Domestic flights", "The kilogram concept is used, not the piece concept"],
          ["Star Alliance Gold", "+1 extra bag in the piece system or +20 kg in the weight system"]
        ] },
        list: [
          "<strong>The page does not list your exact allowance by route.</strong> Which system and how much applies to your flight is shown for your booking, so check your ticket.",
          "<strong>Separate bookings:</strong> passengers travelling on different reservation numbers on international flights cannot combine their checked baggage allowances.",
          "<strong>Interline flights:</strong> the baggage rules of the most significant carrier apply under IATA methods, and US DOT or Canadian CTA rules apply on interline flights to or from those countries.",
          "<strong>Extra baggage fees</strong> may change up to 8 hours before the flight."
        ] },
      { h: "📏 Oversize baggage fees",
        p: "A bag whose width + height + depth (wheels excluded) is between 158 cm and 292 cm is oversized and is measured at the check-in counter.",
        table: { head: ["Flight type", "Oversize fee per piece"], rows: [
          ["Local flights (departing from or arriving in Turkey, for example Istanbul to Los Angeles)", "USD 110"],
          ["Beyond flights (for example Frankfurt to Los Angeles)", "USD 150"],
          ["Domestic flights", "TRY 1,000"]
        ] },
        list: [
          "The fee applies to Economy and Business, whether the bag is part of your free allowance or paid extra baggage, and each oversized piece is charged separately.",
          "Fees may vary with the itinerary and travel date. You can pay at a sales office, at check-in or through the call centre.",
          "Baggage over 292 cm in total is not accepted as checked baggage."
        ] }
    ],
    faq: [
      ["What is the Turkish Airlines baggage allowance?", "Economy: one cabin bag up to 8 kg (23 x 40 x 55 cm) and a personal item up to 4 kg (40 x 30 x 15 cm). Checked baggage is one 23 kg bag on piece-system routes or 10 kg on weight-system lines, depending on route and fare."],
      ["What is the Turkish Airlines cabin baggage size and weight?", "One piece of up to 23 x 40 x 55 cm and 8 kg, plus a personal item of up to 40 x 30 x 15 cm and 4 kg in Economy. Business may carry two cabin bags of 8 kg each (16 kg in total)."],
      ["How many kg is checked baggage on Turkish Airlines?", "On piece-system routes the maximum per bag is 23 kg in Economy and 32 kg in Business. On weight-system lines the free allowance is 10 kg. No single bag may exceed 32 kg."],
      ["Does Turkish Airlines EcoFly include a checked bag?", "Only on some lines. EcoFly lines that include baggage give 1 piece of 23 kg (piece system) or 10 kg (weight system); other EcoFly lines include no free checked baggage."],
      ["What is the Turkish Airlines oversize baggage fee?", "Bags between 158 cm and 292 cm in total dimensions pay USD 110 on local flights, USD 150 on beyond flights and TRY 1,000 on domestic flights, per piece."],
      ["Can I combine baggage allowance on Turkish Airlines?", "Not across different reservation numbers on international flights. Passengers travelling on different PNRs cannot combine their checked baggage allowances."]
    ],
    sources: [
      ["https://www.turkishairlines.com/en-de/any-questions/carry-on-baggage/", "Turkish Airlines &mdash; Cabin baggage"],
      ["https://www.turkishairlines.com/en-us/any-questions/checked-baggage/", "Turkish Airlines &mdash; Checked baggage policy, limits and fees"]
    ]
  }
};
