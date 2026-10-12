// Slim baggage entry (batch 21, checked 12 October 2026, read on arkia.com's OWN pages: "Terms of engagement" (international) and the domestic-flight terms of engagement. Same rules as BAGGAGE_DETAIL.md.
// NOT read: the Baggage Policy price document (fees per bag), Arkia flights to the U.S. beyond the one sentence below, the Paris/London free baggage promotion.
module.exports = {
  "Arkia": {
    title: "Arkia Baggage Allowance 2026: Hand Bag 40 x 30 x 20 cm, Trolley 56 x 45 x 25 cm 8 kg, Checked Bag Rules",
    desc: "Arkia baggage allowance 2026: hand bag 40 x 30 x 20 cm under the seat, trolley 56 x 45 x 25 cm and 8 kg, checked bag rules on international, U.S. and domestic flights, 20 kg domestic limit.",
    answer: "Arkia's terms say every ticket includes a hand bag up to 40 x 30 x 20 cm (16 x 12 x 8 in) that fits under the seat in front. A trolley suitcase up to 8 kg (18 lb) and 56 x 45 x 25 cm (22 x 18 x 10 in) is not included unless your reservation says so. On international flights the ticket price does not include a checked bag unless the reservation says otherwise; on flights to the U.S. the price includes one checked bag up to 23 kg (50 lb), and for tickets ordered from 21 February 2025 also an 8 kg trolley. On domestic flights a bag cannot weigh more than 20 kg (44 lb).",
    stats: [
      ["40 × 30 × 20 cm", "hand bag under the seat (16 × 12 × 8 in)"],
      ["8 kg", "trolley, 56 × 45 × 25 cm (18 lb)"],
      ["23 kg", "checked bag included on U.S. flights (50 lb)"],
      ["20 kg", "maximum bag weight on domestic flights (44 lb)"]
    ],
    sections: [
      { h: "🎟️ What the ticket includes",
        table: { head: ["Flight", "Hand bag", "Trolley (8 kg)", "Checked bag"], rows: [
          ["International (most flights)", "Free", "Not included unless your reservation says so", "Not included unless your reservation says so; add one for a fee"],
          ["Flights to the U.S.", "Free", "Included for tickets ordered from 21 February 2025", "1 bag of 23 kg included"],
          ["Domestic", "Free", "Included only on a ticket bought at the maximum regulated price", "Included only on a ticket bought at the maximum regulated price (up to 20 kg)"] ] },
        list: ["<strong>Not read:</strong> the fee for each extra bag. It is in Arkia's Baggage Policy price document; check it in your booking on arkia.com.",
          "Baggage ordered at check-in costs more than baggage ordered in advance." ] },
      { h: "🎒 Hand bag and trolley",
        table: { head: ["Item", "Maximum size", "Maximum weight"], rows: [
          ["Hand bag", "40 × 30 × 20 cm (16 × 12 × 8 in), stored under the seat in front or in the compartment above", "—"],
          ["Trolley suitcase", "56 × 45 × 25 cm (22 × 18 × 10 in), wheels and outer handles included", "8 kg (18 lb)"] ] },
        list: ["A bag over the size or weight limit for the cabin is sent to the hold and you are charged for it as checked baggage.",
          "A ticket for an infant under two years does not include a seat or any baggage." ] },
      { h: "🧳 Checked baggage",
        list: ["<strong>International:</strong> you can order a checked bag for a fee when you buy the ticket and until 48 hours before check-in opens. Over the included weight, an excess weight fee applies.",
          "<strong>Domestic:</strong> you can order a checked bag when you book, during web check-in, or at the check-in counter (the most expensive option). No bag may weigh more than 20 kg, and Arkia may refuse a heavier one.",
          "Take your checked bag to the Arkia check-in counter to have it tagged." ] }
    ],
    faq: [
      ["What is the Arkia hand bag size?", "Up to 40 × 30 × 20 cm (16 × 12 × 8 in), stored under the seat in front of you. It is included in the ticket price."],
      ["Is a trolley included on Arkia?", "Only if your reservation says so, on a domestic ticket at the maximum regulated price, or on a U.S. ticket ordered from 21 February 2025. The trolley limit is 8 kg and 56 × 45 × 25 cm."],
      ["Is a checked bag included on Arkia?", "On most international flights not unless your reservation says so; flights to the U.S. include one bag of 23 kg."],
      ["What is the Arkia domestic bag weight limit?", "20 kg (44 lb) per bag; Arkia can refuse a heavier one."]
    ],
    sources: [
      ["https://www.arkia.com/en/content/legal-terms", "Arkia &mdash; Terms of engagement (international)"],
      ["https://www.arkia.com/en/content/movil-domestic", "Arkia &mdash; Terms of engagement (domestic flights)"]
    ]
  }
};
