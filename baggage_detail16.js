// Slim baggage entries (batch 16, checked 12 October 2026, read on each airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// flydubai: flydubai.com Checked baggage + Hand baggage pages. NOT read: the per-route excess baggage rate tables, special baggage.
// Oman Air: omanair.com Baggage Allowance page. NOT read: Brand Fares page, extra baggage weight prices, special baggage.
module.exports = {
  "flydubai": {
    title: "flydubai Baggage Allowance 2026: Hand Baggage 7 kg, Checked Bag 20 kg Value, 30 kg Flex",
    desc: "flydubai baggage allowance 2026: hand baggage 7 kg and 55 x 38 x 20 cm (14 kg in Business), Lite fare with no checked bag, Value 20 kg, Flex 30 kg, Business 40 kg, 203 cm size limit and excess fees.",
    answer: "flydubai includes hand baggage on every fare: 1 bag of 7 kg and 55 x 38 x 20 cm in Economy, or 2 bags totalling 14 kg in Business (each bag up to 7 kg), plus a personal item of 25 x 33 x 20 cm. Checked baggage depends on the fare: Lite has none, Value 20 kg, Flex 30 kg and Business 40 kg, up to 3 pieces within that weight. Each piece must weigh less than 32 kg and be no more than 203 cm (height + width + depth).",
    stats: [
      ["7 kg", "hand baggage, 55 × 38 × 20 cm (Business: 2 bags, 14 kg)"],
      ["20 / 30 / 40 kg", "checked: Value / Flex / Business (Lite: none)"],
      ["203 cm", "maximum bag size; 150 cm to 203 cm pays oversize fees"],
      ["AED 200 / USD 55", "fee for hand baggage over the limit at the gate"]
    ],
    sections: [
      { h: "🎒 Hand baggage",
        table: { head: ["Cabin", "Bags", "Weight", "Size"], rows: [
          ["Economy", "1 bag", "7 kg", "55 × 38 × 20 cm"],
          ["Business", "2 bags", "14 kg in total, each bag up to 7 kg", "55 × 38 × 20 cm"] ] },
        list: ["<strong>Personal item:</strong> one of a laptop bag, a small ladies' handbag or a gentlemen's satchel, up to 25 × 33 × 20 cm, under the seat in front of you.",
          "<strong>Over the limit:</strong> check it in at the desk or repack into checked baggage; at the boarding gate a fee of AED 200 / USD 55 per item applies, and local fees or taxes may be added. All hand baggage, including duty-free purchases, is checked for size and weight.",
          "<strong>Remove before checking:</strong> power banks, spare batteries, valuables and essential items such as cash, jewellery, passports, business papers and medications." ] },
      { h: "🧳 Checked baggage by fare",
        table: { head: ["Fare", "Checked baggage"], rows: [
          ["Lite", "None, hand baggage only (you can buy bags)"],
          ["Value", "20 kg"],
          ["Flex", "30 kg"],
          ["Business", "40 kg"] ] },
        list: ["<strong>Weight concept:</strong> up to 3 pieces with a combined weight within your allowance; each piece must weigh less than 32 kg and be within 203 cm (height + width + depth). Bags over 203 cm go as cargo (sporting equipment excepted).",
          "<strong>Partner airlines:</strong> if your booking is with a partner, a piece concept may apply: size limit 150 cm, with bags from 150 to 203 cm paying oversize fees.",
          "<strong>Buying extra baggage:</strong> up to 70% cheaper online when booking; via Manage booking no later than 6 hours before departure; during online check-in 48 to 6 hours before; or via the Customer Centre or a Travel Shop up to 6 hours before.",
          "<strong>Airport excess baggage from Dubai:</strong> AED 40 to AED 80 per kg depending on origin and destination; other airports have their own rates." ] }
    ],
    faq: [
      ["What is the flydubai hand baggage allowance?", "Economy: 1 bag up to 7 kg and 55 × 38 × 20 cm. Business: 2 bags, 14 kg in total, each up to 7 kg. Plus a personal item up to 25 × 33 × 20 cm."],
      ["Does flydubai Lite include a checked bag?", "No. Lite includes only hand baggage; Value includes 20 kg, Flex 30 kg and Business 40 kg."],
      ["What is the flydubai checked bag size and weight limit?", "Each piece must weigh less than 32 kg and be within 203 cm (height + width + depth); up to 3 pieces under the weight concept."],
      ["How much is the flydubai fee for oversized hand baggage?", "AED 200 / USD 55 per item at the boarding gate if it exceeds the size or weight limit."]
    ],
    sources: [
      ["https://www.flydubai.com/en/flying-with-us/baggage/check-in-baggage/", "flydubai &mdash; Checked baggage"],
      ["https://www.flydubai.com/en/flying-with-us/baggage/hand-baggage", "flydubai &mdash; Hand baggage"]
    ]
  },
  "Oman Air": {
    title: "Oman Air Baggage Allowance 2026: Hand Baggage 7 kg, Checked Bag by Fare (Super Saver, Comfort, Flex)",
    desc: "Oman Air baggage allowance 2026: hand baggage 7 kg, Economy Super Saver 0 kg, Comfort 20 kg, Flex 30 kg checked, Business 40 to 60 kg, 32 kg and 158 cm per bag, Sindbad member extras.",
    answer: "Oman Air gives each Economy guest 1 piece of hand baggage up to 7 kg (Business: 2 pieces, up to 7 kg each), with a maximum linear dimension of 115 cm. Checked baggage in Economy is Super Saver 0 kg, Comfort 20 kg and Flex 30 kg (30 / 40 kg on selected routes); Business is Comfort 40 kg, Flex 50 kg and Studio 60 kg. No single bag may weigh more than 32 kg or exceed 158 cm in total dimensions.",
    stats: [
      ["7 kg", "hand baggage per guest, 115 cm linear (Business: 2 pieces)"],
      ["0 / 20 / 30 kg", "Economy checked: Super Saver / Comfort / Flex"],
      ["40 / 50 / 60 kg", "Business Comfort / Flex / Studio"],
      ["32 kg · 158 cm", "maximum per bag"]
    ],
    sections: [
      { h: "🧳 Checked baggage by fare",
        table: { head: ["Cabin and fare", "Standard routes", "Selected routes*"], rows: [
          ["Economy Super Saver", "0 kg", "20 kg"],
          ["Economy Comfort", "20 kg", "30 kg"],
          ["Economy Flex", "30 kg", "40 kg"],
          ["Business Comfort", "40 kg", "—"],
          ["Business Flex", "50 kg", "—"],
          ["Business Studio", "60 kg", "—"] ] },
        list: ["<strong>*Selected routes</strong> with the higher Economy figures: Manila (MNL), Baghdad (BGW), the Indian subcontinent (Mumbai, Calicut, Kochi, Delhi, Goa, Hyderabad, Lucknow, Chennai, Bengaluru, Trivandrum, Karachi, Dhaka) and Cairo, Dar es Salaam and Zanzibar.",
          "<strong>Super Saver</strong> is the low-cost Economy fare with no checked baggage but 7 kg of hand baggage.",
          "<strong>Infants:</strong> guests travelling with infants get 10 kg extra weight on all fares except Economy Saver.",
          "<strong>Sindbad members:</strong> Gold 15 kg and Silver 10 kg extra in Business Studio, Business and Economy (except Economy Saver)." ] },
      { h: "📏 Size, weight and hand baggage",
        table: { head: ["What", "Limit"], rows: [
          ["Single checked bag weight", "32 kg maximum; a heavier bag is not accepted under any circumstances"],
          ["Single checked bag size", "158 cm total dimensions"],
          ["Hand baggage, Economy", "1 piece, up to 7 kg, maximum 115 cm linear (45 in)"],
          ["Hand baggage, Business, Business Comfort and Flex, Studio", "2 pieces, up to 7 kg each"] ] },
        list: ["Baggage that exceeds the standard sizes and weight is subject to the extra baggage fees; we did not read the price table.",
          "Several small items (a handbag, overcoat, umbrella, small camera, reading matter, phone, laptop in a small bag) are allowed on top of the standard hand baggage." ] }
    ],
    faq: [
      ["What is the Oman Air hand baggage allowance?", "1 piece up to 7 kg in Economy, with a linear dimension of up to 115 cm (45 in); Business gets 2 pieces, up to 7 kg each."],
      ["Does Oman Air Super Saver include checked baggage?", "No. Economy Super Saver is 0 kg on standard routes (20 kg on selected routes such as Manila, Delhi and Cairo), with 7 kg of hand baggage."],
      ["What is the Oman Air checked bag weight limit?", "Comfort 20 kg and Flex 30 kg in Economy; no single bag may weigh more than 32 kg or exceed 158 cm."]
    ],
    sources: [
      ["https://www.omanair.com/en/baggage-policy/baggage-allowance", "Oman Air &mdash; Baggage allowance"]
    ]
  }
};
