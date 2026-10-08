// Qantas baggage entry, read on Qantas' OWN pages (Carry-on baggage allowances, en-us; Checked baggage allowances, en-au) on 2026-10-08. Same rules as BAGGAGE_DETAIL.md.
module.exports = {
  "Qantas": {
    title: "Qantas Baggage Allowance 2026: 7 kg Intl Carry-On, 23 kg Domestic",
    desc: "Qantas baggage allowance: international Economy carry-on 7 kg, domestic 14 kg across bags, checked 1 x 23 kg domestic, 30 kg rest of the world, 32 kg per bag max.",
    answer: "Qantas includes checked baggage in every Economy fare: one piece up to 23 kg on Australian domestic flights, one piece up to 32 kg to North and South America and up to 30 kg (by weight) to the rest of the world. Carry-on is 7 kg on international Economy (one overhead bag plus a personal item) and 14 kg in total on domestic Economy and Business, with no single item over 10 kg. No single checked piece may weigh more than 32 kg.",
    stats: [
      ["7 kg", "international Economy carry-on"],
      ["14 kg", "domestic carry-on in total, max 10 kg per item"],
      ["23 kg", "domestic Economy checked piece"],
      ["32 kg", "most any single checked piece may weigh"]
    ],
    sections: [
      { h: "🎒 Qantas carry-on baggage allowance",
        p: "Qantas says carry-on baggage is included on every flight. Size is measured as height x width x depth, including wheels and packed-away handles.",
        table: { head: ["Flight and cabin", "What you can bring", "Weight"], rows: [
          ["Domestic Economy and Business", "1 overhead bag, 1 underseat bag and 1 personal item", "14 kg in total, no item over 10 kg"],
          ["Domestic Qantas Link Dash 8 (Q400)", "1 overhead bag and 1 personal item", "7 kg maximum"],
          ["International Economy", "1 overhead bag and 1 personal item", "7 kg maximum"],
          ["International First, Business and Premium Economy", "1 overhead bag, 1 underseat bag and 1 personal item", "14 kg in total, no item over 10 kg"],
          ["All flights departing India", "1 overhead bag", "Economy 7 kg, Business 10 kg; additional personal items are not permitted"]
        ] },
        list: [
          "<strong>Overhead bag</strong> (for example a small wheelie bag): 56 cm high x 36 cm wide x 23 cm deep.",
          "<strong>Underseat bag</strong> (a small duffle-style bag, backpack or large handbag): 34 cm high x 48 cm wide x 23 cm deep.",
          "<strong>Personal item:</strong> one small item placed under the seat in front, such as a cross-body bag, small handbag or laptop in a slim bag.",
          "<strong>On Dash 8 flights</strong> small wheelie bags do not fit overhead and are collected at boarding and returned on arrival.",
          "<strong>Medical equipment</strong> can be carried in addition to your allowance, up to 10 kg per piece and within carry-on size limits."
        ] },
      { h: "🧳 Qantas checked baggage allowance by cabin",
        p: "Checked baggage is included on all Qantas Economy flights. Your exact allowance depends on route, travel class and Frequent Flyer status, and is shown in Manage booking.",
        table: { head: ["Cabin", "Australian domestic", "North and South America", "Rest of the world"], rows: [
          ["Economy", "1 piece up to 23 kg", "1 piece up to 32 kg", "Up to 30 kg"],
          ["Premium Economy", "2 pieces up to 23 kg each", "2 pieces up to 32 kg each", "Up to 40 kg, no piece over 32 kg"],
          ["Business", "2 pieces up to 32 kg each", "2 pieces up to 32 kg each", "Up to 40 kg, no piece over 32 kg"]
        ] },
        list: [
          "<strong>Exceptions:</strong> domestic allowances differ on Dash 8 services and to Lord Howe, Christmas and Cocos (Keeling) Islands.",
          "<strong>Weight allowances:</strong> where your ticket gives a weight, there is no limit on the number of pieces within that weight, but no single piece may exceed 32 kg.",
          "<strong>Frequent Flyer and Qantas Club members</strong> flying on a Qantas-operated flight may get a bigger allowance; partner airlines and Jetstar flights can have different allowances."
        ] },
      { h: "📏 Maximum checked baggage size",
        p: "Qantas measures each piece as height + width + depth.",
        table: { head: ["Flights", "Maximum size per piece"], rows: [
          ["Australian domestic", "140 cm in total"],
          ["International", "158 cm in total"]
        ] },
        list: ["Power banks are prohibited in checked baggage and must be packed in your carry-on, within reach during the flight."] }
    ],
    faq: [
      ["What is the Qantas baggage allowance?", "Checked baggage is included on Economy: 1 piece up to 23 kg domestic, 1 piece up to 32 kg to North and South America and up to 30 kg to the rest of the world. Carry-on is 7 kg on international Economy and 14 kg on domestic."],
      ["What is the Qantas carry-on weight limit?", "International Economy: 7 kg across one overhead bag and one personal item. Domestic Economy and Business: 14 kg in total with a maximum of 10 kg per item; 7 kg on Qantas Link Dash 8 flights."],
      ["What size is Qantas carry-on?", "Overhead bag 56 x 36 x 23 cm, underseat bag 34 x 48 x 23 cm (height x width x depth), plus one small personal item."],
      ["How heavy can a Qantas checked bag be?", "No single piece may be over 32 kg. Domestic Economy is 1 piece up to 23 kg; Business domestic allows 2 pieces up to 32 kg each."],
      ["How big can a Qantas checked bag be?", "Up to 140 cm (height + width + depth) on Australian domestic flights and 158 cm on international flights."],
      ["Does Qantas include checked baggage?", "Yes. Qantas says checked baggage is included for all Economy flights, with the amount set by route, cabin and Frequent Flyer status."]
    ],
    sources: [
      ["https://www.qantas.com/en-us/baggage/carry-on", "Qantas &mdash; Carry-on baggage allowances"],
      ["https://www.qantas.com/en-au/baggage/checked", "Qantas &mdash; Checked baggage allowances"]
    ]
  }
};
