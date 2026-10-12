// Slim baggage entry (batch 20, checked 12 October 2026, read on israir.co.il's OWN page "Israir baggage policy" (Hebrew version, the English URL returned "page not found"). Same rules as BAGGAGE_DETAIL.md.
// NOT read: codeshare flights (policy covers Israir flights with 3-digit numbers only), infant allowances outside New York, musical-instrument fees.
module.exports = {
  "Israir": {
    title: "Israir Baggage Allowance 2026: Personal Item 40 x 30 x 20 cm, Trolley 55 x 40 x 25 cm 10 kg, Checked Bag 23 kg",
    desc: "Israir baggage allowance 2026: free personal item 40 x 30 x 20 cm, paid trolley 55 x 40 x 25 cm and 10 kg on international flights, checked bag 23 kg from $65 each way, what is included on New York flights and domestic flights.",
    answer: "On international Israir flights (flight numbers with 3 digits) the ticket includes one personal item up to 40 x 30 x 20 cm (16 x 12 x 8 in), which goes under the seat in front. A trolley or large backpack up to 55 x 40 x 25 cm (22 x 16 x 10 in) and 10 kg (22 lb) costs $30 each way when bought in advance, and a checked bag up to 23 kg (50 lb) costs $65 each way for the first bag. Flights to New York include a carry-on and a 23 kg checked bag in Economy. On domestic flights the trolley is free and the first checked bag costs 20 NIS each way.",
    stats: [
      ["40 × 30 × 20 cm", "personal item, free (16 × 12 × 8 in)"],
      ["55 × 40 × 25 cm", "trolley, 10 kg (22 lb), $30 each way"],
      ["23 kg", "checked bag (50 lb), first bag $65 each way"],
      ["~50 bags", "cabin space per flight, then bags go to the hold"]
    ],
    sections: [
      { h: "🎟️ What the ticket includes",
        table: { head: ["Flight", "Personal item", "Trolley (cabin bag)", "Checked bag"], rows: [
          ["International (3-digit flight numbers)", "Free", "Costs extra: $30 each way", "Costs extra: first bag $65 each way"],
          ["New York, Economy", "Free", "1 carry-on included", "1 bag of 23 kg included"],
          ["New York, Premium", "Free", "1 carry-on included", "2 bags of 23 kg each included"],
          ["New York, Business", "Free", "2 carry-ons included", "2 bags of 32 kg each included"],
          ["Domestic", "Free", "Free", "First bag 23 kg: 20 NIS each way"] ] },
        list: ["The policy covers Israir flights with 3-digit flight numbers only. It does not apply to other carriers' flights sold by Israir; for those, the operating airline's rules apply.",
          "<strong>Not read:</strong> baggage rules of codeshare flights; check them with Israir or the operating airline." ] },
      { h: "🎒 Carry-on and personal item",
        table: { head: ["Item", "Maximum size", "Maximum weight", "Price on international flights"], rows: [
          ["Personal item", "40 × 30 × 20 cm (16 × 12 × 8 in), under the seat in front", "—", "Free"],
          ["Trolley or large backpack", "55 × 40 × 25 cm (22 × 16 × 10 in), wheels, handles and side pockets included", "10 kg (22 lb)", "$30 each way ($40 at Ben Gurion, 35 euro or 30 pounds at airports abroad)"] ] },
        list: ["Only one personal item is allowed per passenger; extra bags and shopping bags are not accepted in the cabin.",
          "Cabin space is limited to about 50 bags per flight. Once it is full, extra hand bags go to the hold and come out on the baggage belt at the destination, and paying for a trolley does not guarantee it stays in the cabin.",
          "A bag over the size or weight limit is sent to the hold and charged as checked baggage.",
          "<strong>Liquids</strong> in the cabin: containers of 100 ml (3.4 oz) or less, all in one resealable plastic bag, 1 litre in total, one bag per passenger. Medicines and special food such as baby food are allowed outside the bag with a suitable medical certificate.",
          "Strollers of every type, including umbrella strollers, go to the hold and are handed over at the screening counters or before boarding." ] },
      { h: "🧳 Checked baggage and extra fees (international)",
        table: { head: ["Item", "Booked online or in My Israir (up to 6 hours before)", "At Ben Gurion", "At airports abroad"], rows: [
          ["First bag, up to 23 kg", "$65 each way", "$100", "85 euro or 75 pounds"],
          ["Second bag, up to 23 kg", "$80 each way", "$120", "102 euro or 90 pounds"],
          ["Third to fifth bag, up to 23 kg", "$120 each way, each bag", "$150", "128 euro or 110 pounds"],
          ["First bag 24 to 30 kg (extra weight)", "+$20 each way", "+$70", "+60 euro or 53 pounds"],
          ["Pet in cabin, up to 8 kg with carrier", "$80 each way", "—", "—"] ] },
        list: ["<strong>Size:</strong> a checked bag is up to 65 × 45 × 30 cm in the policy's piece size, with a maximum of 23 kg per piece. Anything above counts as excess baggage.",
          "<strong>Sports equipment and bicycles</strong> up to 20 kg: $80 each way ($90 at Ben Gurion, 77 euro or 68 pounds abroad); on New York flights up to 23 kg: $100 each way ($120 at the airport). The total of length + height + width is at most 277 cm.",
          "<strong>New York flights:</strong> a second bag (a third in Premium and Business) up to the fifth costs $100 each way ($120 at the airport). Extra weight from 23 to 32 kg on the first bag costs $40 each way ($70 at the airport). A pet in the cabin costs $100 each way.",
          "A bag bought through My Israir can be changed or cancelled only under Israel's Consumer Protection Law; outside it, a purchased bag cannot be cancelled, changed or upgraded." ] },
      { h: "🇮🇱 Domestic flights",
        table: { head: ["Item", "Price (paid in advance, up to 4 hours before)"], rows: [
          ["Personal item 40 × 30 × 20 cm", "Free"],
          ["Trolley or large backpack, 55 × 40 × 25 cm, up to 10 kg", "Free"],
          ["First checked bag, 65 × 45 × 30 cm, up to 23 kg", "20 NIS each way"],
          ["Extra weight, 24 to 32 kg (first bag only)", "10 NIS per extra kilo each way"],
          ["Sports equipment or bicycle, up to 20 kg", "100 NIS each way"],
          ["Dog or cat in cabin, up to 8 kg with carrier", "40 NIS each way"],
          ["Surfboard, up to 1 m / 1 to 2 m", "75 NIS / 150 NIS each way"] ] } }
    ],
    faq: [
      ["What is the Israir personal item size?", "40 × 30 × 20 cm (16 × 12 × 8 in), under the seat in front of you. It is free on every ticket and you may take only one."],
      ["Is a trolley free on Israir?", "On international flights no: a trolley up to 55 × 40 × 25 cm and 10 kg costs $30 each way when bought in advance. On domestic flights and on New York flights it is free or included."],
      ["How much is a checked bag on Israir?", "On international flights the first bag up to 23 kg costs $65 each way when added online or in My Israir up to 6 hours before the flight, and more at the airport. New York flights include a 23 kg bag in Economy."],
      ["What is the Israir checked bag weight limit?", "23 kg (50 lb) per piece. On the first bag you can add up to 30 kg on international flights for an extra fee, or up to 32 kg on New York and domestic flights."],
      ["Does Israir keep my trolley in the cabin if I pay for it?", "Not always. Space is limited to about 50 hand bags per flight; when it is full, extra bags go to the hold and are collected on the baggage belt."]
    ],
    sources: [
      ["https://www.israir.co.il/Passengers_Info/Baggage_Policy", "Israir &mdash; Baggage policy (Hebrew)"]
    ]
  }
};
