// Volaris baggage entry, read on volaris.com's OWN pages (cms.volaris.com: Baggage Policy en-us, Restricted and Forbidden Items, Additional Service Fees PDF "ancillariesandfees") on 2026-10-12. Same rules as BAGGAGE_DETAIL.md.
// NOT read: domestic Mexico (MXN) fee lines, the Mexico-Central/South America fee lines, sports equipment page, INVEX card terms. The fee PDF is undated and lists ceilings ("up to"), shown as such. An older Volaris page (cabin-baggage, policy "from November 1, 2017", fares Clean Base and v.club) was NOT used.
module.exports = {
  "Volaris": {
    title: "Volaris Baggage Allowance 2026: Zero, Basic, Plus Carry-On and Checked Bag Fees",
    desc: "Volaris baggage allowance 2026: Zero includes only a personal item, Basic adds 1 checked bag of 15 kg, Plus adds a 10 kg carry-on and a 25 kg checked bag. Sizes, add-on bag fees from the US and overweight rules.",
    answer: "Volaris Zero includes only a personal item (35 x 45 x 20 cm). Basic adds one checked bag up to 33 lb (15 kg). Plus adds a carry-on of 22 x 16 x 10 in (55 x 40 x 25 cm, 10 kg) and one checked bag up to 55 lb (25 kg). A carry-on can be added to Zero and Basic for a fee. Checked bags are limited to 158 linear cm, up to 5 per passenger, and a bag can weigh at most 45 kg including excess weight.",
    stats: [
      ["35 × 45 × 20 cm", "personal item size (included on every fare)"],
      ["55 × 40 × 25 cm", "carry-on size, 10 kg (Plus, or add-on)"],
      ["15 / 25 kg", "checked bag on Basic / Plus"],
      ["158 cm", "checked bag, length + width + height"]
    ],
    sections: [
      { h: "🎟️ What each Volaris fare includes",
        table: { head: ["Fare", "Personal item", "Carry-on", "Checked bag"], rows: [
          ["Zero", "1", "Not included", "Not included"],
          ["Basic", "1", "Not included", "1 bag, up to 33 lb (15 kg), 62 in (158 cm) in total"],
          ["Plus", "1", "1 bag, 22 × 16 × 10 in, combined weight with the personal item up to 44 lb", "1 bag, up to 55 lb (25 kg), 62 in (158 cm) in total"] ] },
        list: ["<strong>Plus also includes:</strong> a full refund, unlimited flight changes and Volaris TV on board.",
          "<strong>Check-in opens</strong> 3 days before a domestic flight on Zero, 5 days on Basic and 7 days on Plus; for international flights it opens 24 hours before on every fare."] },
      { h: "📏 Sizes and weights",
        table: { head: ["Bag", "Maximum size", "Maximum weight"], rows: [
          ["Personal item (under the seat in front of you)", "35 × 45 × 20 cm", "—"],
          ["Carry-on", "55 × 40 × 25 cm (length × width × height)", "10 kg"],
          ["Carry-on plus personal item", "—", "20 kg combined"],
          ["Checked bag", "158 cm (length + width + height)", "15 kg or 25 kg depending on the fare; a bag bought separately up to 25 kg"] ] },
        list: ["<strong>Personal item examples:</strong> a handbag, briefcase, laptop bag or small backpack.",
          "<strong>Maximum per piece:</strong> 45 kg including excess weight. Musical instruments up to 200 linear cm, sports equipment up to 280 linear cm."] },
      { h: "➕ Adding bags and what they cost (flights between Mexico and the US)",
        p: "Volaris publishes these as \"up to\" prices in US dollars in its Additional Service Fees document, so the price you see at booking can be lower. Booking early is cheapest.",
        table: { head: ["Item", "When booking", "Pre-flight (My Trips, app)", "At the airport"], rows: [
          ["First checked bag", "Up to $180", "Up to $174", "Up to $228"],
          ["Extra checked bag", "Up to $144", "Up to $180", "Up to $264"],
          ["Carry-on (Zero and Basic only)", "Up to $102", "Up to $140", "Up to $168 at the counter, up to $180 at the gate"] ] },
        list: ["<strong>Overweight checked bag (airport only):</strong> 16 to 25 kg up to $180; 26 to 35 kg up to $204; 36 to 45 kg up to $276.",
          "<strong>Sports equipment:</strong> up to 25 kg and 250 cm in total, up to $170 when booking or pre-flight and up to $240 at the airport. If you bought an extra checked bag you can check sports equipment instead at no extra cost, within your weight allowance and 158 cm.",
          "<strong>Ways to add a bag:</strong> when booking, in My Trips, in the Volaris app, before check-in, at the airport (airport rates apply) or through the call center. Up to 5 checked bags per passenger.",
          "<strong>Carry-on too big?</strong> Volaris says a carry-on over the allowed size must be checked, and if you already checked a bag you pay for an additional one." ] },
      { h: "🛡️ Baggage guarantee and limits",
        list: ["<strong>Baggage guarantee:</strong> Volaris says your bag will arrive on the same flight, and if it does not, its guarantee compensates you with an electronic credit to use on your next flight.",
          "<strong>Operational limits:</strong> if cargo space is limited, additional, oversized or overweight bags may travel on the next flight with space, after you sign an acknowledgment. Volaris remains responsible for delivering them at no extra cost.",
          "<strong>Credit cards:</strong> Volaris INVEX cardholders can get additional baggage at no extra cost for themselves and companions; we did not read the card terms." ] }
    ],
    faq: [
      ["What is the Volaris carry-on size?", "55 × 40 × 25 cm (22 × 16 × 10 in), up to 10 kg, with a combined 20 kg limit for the carry-on and personal item. It is included on Plus and can be added to Zero and Basic."],
      ["Does Volaris Zero include a carry-on or a checked bag?", "No. Zero includes one personal item (35 × 45 × 20 cm) that fits under the seat. A carry-on and checked bags are paid add-ons."],
      ["How much does a checked bag cost on Volaris between Mexico and the US?", "Volaris lists up to $180 for the first checked bag when booking, up to $174 pre-flight and up to $228 at the airport. An extra bag is up to $144, $180 and $264."],
      ["How heavy can a Volaris checked bag be?", "Up to 15 kg on Basic and 25 kg on Plus or when bought separately, and up to 158 linear cm. A bag can weigh at most 45 kg including excess weight, with overweight fees."],
      ["How many bags can I check on Volaris?", "Up to five checked bags per passenger, for a fee beyond your fare's included bag."],
      ["Can I take sports equipment on Volaris?", "Yes, as checked baggage within your weight allowance and 158 cm, in place of an extra bag you bought. Larger equipment up to 280 linear cm has its own fee."]
    ],
    sources: [
      ["https://cms.volaris.com/en/travel-info/baggage-policy/", "Volaris &mdash; Baggage Policy"],
      ["https://cms.volaris.com/globalassets/pdfs/eng/ancillariesandfees.en.pdf", "Volaris &mdash; Additional Service Fees (PDF)"]
    ]
  }
};
