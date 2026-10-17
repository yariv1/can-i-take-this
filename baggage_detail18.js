// Slim baggage entries (batch 18, checked 12 October 2026, read on each airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// Royal Air Maroc: royalairmaroc.com/us-en checked-baggage and carry-on-baggage pages. NOT read: fare conditions page, excess baggage fees, special baggage.
// Royal Jordanian: rj.com checked-luggage and carry-on-pieces pages (the allowance is region-specific and the labels of its tables did not all load, so pieces are shown as printed without a fare or route mapping). NOT read: excess baggage price list.
module.exports = {
  "Royal Air Maroc": {
    title: "Royal Air Maroc Baggage Allowance 2026: Cabin Bag 55 x 40 x 25 cm, Checked Bag 23 kg and 32 kg",
    desc: "Royal Air Maroc baggage allowance 2026: cabin bag 55 x 40 x 25 cm (10 kg Economy, 12 kg Business) plus a 2 kg personal item, 0 to 3 checked pieces of 23 or 32 kg, 203 cm size limit, bags over 32 kg as cargo.",
    answer: "Royal Air Maroc allows one cabin bag plus one personal item: the cabin bag up to 55 x 40 x 25 cm and 10 kg in Economy or 12 kg in Business, the personal item up to 40 x 30 x 15 cm and 2 kg. Checked baggage runs on a piece system: 0 to 3 pieces depending on the flight, class and Safar Flyer status, with a standard weight of 23 or 32 kg per piece and a maximum of 203 cm (height + length + width). Anything over 32 kg or 203 cm must go through the Cargo service.",
    stats: [
      ["55 × 40 × 25 cm", "cabin bag: 10 kg Economy, 12 kg Business"],
      ["40 × 30 × 15 cm", "personal item, up to 2 kg"],
      ["23 / 32 kg", "standard weight per checked piece"],
      ["203 cm", "maximum bag size (H + L + W)"]
    ],
    sections: [
      { h: "🎒 Cabin baggage",
        table: { head: ["Item", "Allowed", "Maximum"], rows: [
          ["Cabin baggage", "1", "55 × 40 × 25 cm; 10 kg in Economy, 12 kg in Business"],
          ["Personal item (handbag, laptop, camera)", "1", "40 × 30 × 15 cm, 2 kg"] ] },
        list: ["<strong>Liquids and gels</strong> only in containers of 100 ml or less, in one transparent resealable 1-liter bag, shown separately at security.",
          "<strong>Pets:</strong> a dog or cat up to 8 kg in a special ventilated bag.",
          "<strong>Powders of 350 ml or more</strong> (such as flour or ground coffee) must be checked in as hold baggage." ] },
      { h: "🧳 Checked baggage",
        table: { head: ["What", "Detail on Royal Air Maroc's page"], rows: [
          ["Pieces", "0 to 3 depending on the flight, class and Safar Flyer status; piece concept, so the weight limit applies to each piece"],
          ["Economy examples", "No bag or 1 piece of 23 kg on some routes; 1 to 2 pieces of 23 kg each on others; 1 piece of up to 23 kg on long-haul and transit flights"],
          ["Business examples", "2 pieces of 32 kg each, or 3 pieces of 32 kg each"],
          ["Extra piece for status", "+1 piece of 32 kg in Business, +1 piece of 23 kg in Economy"],
          ["Weight and size", "Standard 23 or 32 kg depending on class and loyalty status; at most 32 kg and 203 cm (height + width + length)"] ] },
        list: ["<strong>Peak periods:</strong> on certain routes and classes the allowance can be reduced from 2 pieces to 1 in high season and summer.",
          "<strong>Weight cannot be shared</strong> or averaged between bags.",
          "<strong>Over the limit:</strong> a bag over 32 kg or 203 cm must be checked through the Cargo service.",
          "<strong>Not read:</strong> which routes and fares map to each line (check the fare conditions or your booking) and the excess baggage fees." ] }
    ],
    faq: [
      ["What is the Royal Air Maroc cabin bag size?", "55 × 40 × 25 cm, up to 10 kg in Economy and 12 kg in Business, plus a personal item of 40 × 30 × 15 cm and 2 kg."],
      ["How many checked bags does Royal Air Maroc allow?", "0 to 3 pieces depending on the flight, class and Safar Flyer status, each up to 23 or 32 kg and 203 cm."],
      ["What is the Royal Air Maroc weight limit for a checked bag?", "The standard is 23 or 32 kg depending on class and loyalty status, and no bag may exceed 32 kg; heavier bags go through the Cargo service."]
    ],
    sources: [
      ["https://www.royalairmaroc.com/us-en/checked-baggage", "Royal Air Maroc &mdash; Checked baggage allowance"],
      ["https://www.royalairmaroc.com/us-en/carry-on-baggage", "Royal Air Maroc &mdash; Carry-on baggage rules"]
    ]
  },
  "Royal Jordanian": {
    title: "Royal Jordanian Baggage Allowance 2026: Carry-On 7 kg, 23 kg and 30 kg Checked Pieces, 158 cm",
    desc: "Royal Jordanian baggage allowance 2026: carry-on 7 kg (2 pieces in Crown class) plus a 5 kg personal item, checked pieces of 23, 30 or 32 kg within 158 cm, heavy bag and oversize charges.",
    answer: "Royal Jordanian allows one carry-on of up to 7 kg in Economy (two pieces of 7 kg in Crown class, except on Embraers where only one) with dimensions up to 23 x 41 x 51 cm and 115 cm in total, plus one personal item up to 20 x 40 x 35 cm and 5 kg. Checked baggage is on a piece concept: pieces of up to 23 kg (1 or 2 pieces depending on the fare and destination), 30 kg or 32 kg, each no more than 158 cm (62 in) in total.",
    stats: [
      ["7 kg", "carry-on (Crown: 2 pieces); 23 × 41 × 51 cm, 115 cm total"],
      ["5 kg", "personal item, 20 × 40 × 35 cm"],
      ["23 / 30 / 32 kg", "checked piece weights listed by cabin and route"],
      ["158 cm", "per checked piece (62 in)"]
    ],
    sections: [
      { h: "🎒 Carry-on and personal item",
        table: { head: ["Item", "Allowed", "Maximum"], rows: [
          ["Carry-on, Economy", "1 piece", "7 kg; 23 × 41 × 51 cm (9 × 16 × 20 in), sum of the sides within 115 cm (45 in), wheels and handles included"],
          ["Carry-on, Crown class", "2 pieces", "7 kg each on all aircraft except Embraers (1 piece)"],
          ["Personal item", "1", "20 × 40 × 35 cm, 5 kg, under the seat"] ] },
        list: ["<strong>Space is not guaranteed:</strong> if cabin stowage is not possible, the item is carried in the hold.",
          "<strong>Infants:</strong> baby food and necessities for the flight up to 7 kg (15 lb) in addition to the adult's allowance." ] },
      { h: "🧳 Checked luggage (piece concept)",
        table: { head: ["Piece rule printed on the page", "Size"], rows: [
          ["1 piece up to 23 kg (50 lb), the limit on some fares", "158 cm (62 in)"],
          ["2 pieces, up to 23 kg (50 lb) each", "158 cm (62 in)"],
          ["2 pieces, up to 32 kg (70 lb) each", "158 cm (62 in)"],
          ["2 pieces up to 30 kg each, or 1 piece up to 30 kg to other destinations", "158 cm (62 in)"],
          ["Infants: 1 checked piece up to 23 kg", "115 cm (45 in)"] ] },
        list: ["<strong>Heavy bags:</strong> bags weighing between 23 kg and 32 kg pay an excess weight charge, and extra bags are paid at the airport.",
          "<strong>Savings:</strong> up to 25% on excess baggage bought online, up to 15% through RJ sales offices or a travel agent.",
          "<strong>Not read:</strong> which fares and destinations each line applies to, and the price list; check your ticket on rj.com." ] }
    ],
    faq: [
      ["What is the Royal Jordanian carry-on allowance?", "1 piece up to 7 kg in Economy (23 × 41 × 51 cm, 115 cm total); Crown class gets two pieces of 7 kg each, plus a personal item up to 5 kg."],
      ["What is the Royal Jordanian checked bag size limit?", "158 cm (62 inches) as the sum of the 3 dimensions of one piece."],
      ["How much can a Royal Jordanian checked bag weigh?", "Up to 23 kg on the standard piece, up to 32 kg where listed; bags between 23 and 32 kg pay an excess weight charge."]
    ],
    sources: [
      ["https://www.rj.com/en/info-and-tips/baggage-information/checked-luggage", "Royal Jordanian &mdash; Checked luggage information"],
      ["https://www.rj.com/en/info-and-tips/baggage-information/carry-on-pieces", "Royal Jordanian &mdash; Carry-on luggage allowance"]
    ]
  }
};
