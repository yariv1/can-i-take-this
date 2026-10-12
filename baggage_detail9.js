// WestJet baggage entry, read on westjet.com's OWN pages (en-us: Carry-on baggage, Checked and excess baggage, Service fees) on 2026-10-12. Same rules as BAGGAGE_DETAIL.md.
// NOT read: the WestJet Rewards tier bag benefits, the tariff and terms pages, sporting equipment details. Fees are shown by WestJet as ranges because taxes vary by departure airport.
module.exports = {
  "WestJet": {
    title: "WestJet Baggage Allowance 2026: Carry-On 22 x 14 x 9 in, Checked Bag Fees by Fare",
    desc: "WestJet baggage allowance 2026: carry-on 22 x 14 x 9 in and a personal item on Econo and up, UltraBasic personal item only, checked bag fees by fare, free bags in Premium and Business, overweight rules.",
    answer: "WestJet allows one carry-on (22 x 14 x 9 in, 56 x 36 x 23 cm) and one personal item (16 x 13 x 6 in) on Econo, Member Exclusive, EconoFlex, Premium and Business fares. UltraBasic includes only a personal item, with exceptions for Europe and Asia flights. Within Canada and the US a prepaid first checked bag is about $45 to $53 on Econo, free on EconoFlex, Premium and Business; a bag over 23 kg (51 lb) is overweight.",
    stats: [
      ["22 × 14 × 9 in", "carry-on size (56 × 36 × 23 cm)"],
      ["16 × 13 × 6 in", "personal item size"],
      ["$45–53", "Econo first bag, prepaid, Canada and US"],
      ["23 kg", "heaviest standard checked bag (51 lb)"]
    ],
    sections: [
      { h: "🧳 Carry-on and personal item by fare",
        p: "Items that do not fit the sizing device (wheels included) or exceed your allowance are treated as checked baggage and may be charged.",
        table: { head: ["Fare", "Carry-on", "Personal item"], rows: [
          ["UltraBasic", "Not allowed, with exceptions below", "1"],
          ["Econo, Member Exclusive, EconoFlex", "1", "1"],
          ["Premium, PremiumFlex, Business, BusinessFlex", "1", "1"] ] },
        list: ["<strong>Carry-on:</strong> up to 56 × 23 × 36 cm (22 × 9 × 14 in), a backpack, bag or suitcase. It must be light enough for you to place in the overhead bin unaided.",
          "<strong>Personal item:</strong> up to 41 × 15 × 33 cm (16 × 6 × 13 in), stored under the seat in front of you: a briefcase, purse, camera bag, laptop, small musical instrument or a kennel. One WestJet text gives the depth as 14 cm and its table as 15 cm.",
          "<strong>UltraBasic exceptions:</strong> one carry-on is allowed on flights to and from Europe and Asia, and when Extended Comfort has been bought for all flights in one direction, including connections. An UltraBasic guest who arrives at the gate with a carry-on that does not meet an exception must check it and pay a checked baggage fee and a service fee.",
          "<strong>Also allowed:</strong> a diaper bag with items for an infant and an approved car seat for a seat you bought, on top of your allowance. Duty free must fit inside your carry-on and personal item allowance." ] },
      { h: "💵 Checked bag fees within Canada and the US (US dollars)",
        p: "WestJet shows fees as ranges because taxes vary by departure airport; your exact total is confirmed before you pay. Prepaying is the best price.",
        table: { head: ["Fare", "1st bag prepaid", "1st bag online check-in", "1st bag at the airport"], rows: [
          ["UltraBasic", "$55–65", "$70–83", "$80–94"],
          ["Econo or Member Exclusive", "$45–53", "$60–71", "$70–83"],
          ["EconoFlex", "No fee", "No fee", "No fee"],
          ["Premium and Business (incl. PremiumFlex, BusinessFlex)", "No fee", "No fee", "No fee"] ] },
        table2: { head: ["Fare", "2nd bag prepaid", "2nd bag online check-in", "2nd bag at the airport"], rows: [
          ["UltraBasic", "$70–83", "$85–100", "$95–112"],
          ["Econo or Member Exclusive", "$60–71", "$75–89", "$85–100"],
          ["EconoFlex", "$60–71", "$75–89", "$85–100"],
          ["Premium and Business", "No fee", "No fee", "No fee"] ] },
        list: ["<strong>Third and fourth bags:</strong> not available prepaid. $150–177 at online check-in and $160–189 at the airport, for every fare.",
          "<strong>Where fees apply:</strong> fees are charged in CAD or USD depending on where your trip starts; for flights departing outside Canada and the US they are converted to local currency." ] },
      { h: "🌎 Mexico, the Caribbean, Europe and Asia",
        p: "Prepaid prices from the same page, in US dollars:",
        table: { head: ["Fare", "Latin Caribbean and Mexico (and all other destinations)", "Europe and Asia"], rows: [
          ["UltraBasic", "1st $55–65, 2nd $70–83", "1st $80–94, 2nd $110–130"],
          ["Econo or Member Exclusive", "1st $45–53, 2nd $60–71", "1st $45–53 (no fee to or from Asia), 2nd $110–130"],
          ["EconoFlex", "1st no fee, 2nd $60–71", "1st no fee, 2nd $110–130"],
          ["Premium and Business", "1st and 2nd no fee", "1st and 2nd no fee"] ] },
        list: ["On these routes the third and fourth bags are $200–236 at online check-in and $210–248 at the airport." ] },
      { h: "⚖️ Weight, size and overweight fees",
        table: { head: ["Bag", "Rule"], rows: [
          ["Standard checked bag", "Up to 23 kg (51 lb)"],
          ["Overweight", "More than 23 kg and up to 45 kg (100 lb); to or from Europe, up to 32 kg (70 lb)"],
          ["Oversized", "158 to 203 cm (62 to 80 in) in combined dimensions"],
          ["Overweight and oversized fee", "$150–177 on the Service fees page"] ] },
        list: ["<strong>Sporting equipment</strong> is subject to standard checked bag fees; multiple fees may apply to the same item (overweight, oversized or an extra bag).",
          "<strong>Pets:</strong> in the cabin as your personal item, $50–59 within Canada and the US and $100–118 outside; as checked baggage, $100–118 within Canada and the US and $200–236 outside. Fees apply in both directions." ] },
      { h: "⭐ Free bags and benefits",
        list: ["If you are a WestJet Rewards member, your tier benefits apply instead of the fees shown by fare. We did not read the tier chart.",
          "The WestJet RBC World Elite Mastercard includes your first checked bag free when the card is used to book your flight.",
          "Bag benefits do not combine: you receive the highest single benefit that applies to your booking." ] }
    ],
    faq: [
      ["What is the WestJet carry-on size?", "56 × 23 × 36 cm (22 × 9 × 14 in), including wheels, plus a personal item of 41 × 15 × 33 cm (16 × 6 × 13 in) on every fare except UltraBasic, which includes only the personal item."],
      ["Does WestJet UltraBasic include a carry-on bag?", "No, only a personal item. Exceptions: flights to and from Europe and Asia, and when Extended Comfort has been bought for all flights in one direction."],
      ["How much is the first checked bag on WestJet?", "Within Canada and the US, prepaid: $45 to $53 on Econo and Member Exclusive, $55 to $65 on UltraBasic, and no fee on EconoFlex, Premium and Business. It costs more at online check-in and at the airport."],
      ["How heavy can a WestJet checked bag be?", "23 kg (51 lb). Up to 45 kg (100 lb) is accepted as overweight for a fee, and 32 kg (70 lb) on flights to or from Europe."],
      ["How many free checked bags do I get in WestJet Premium or Business?", "Two, with no fee at prepay, online check-in or the airport. The third and fourth bags are charged."],
      ["Does WestJet charge for overweight bags?", "Yes. The Service fees page shows $150 to $177 for an overweight or oversized bag."]
    ],
    sources: [
      ["https://www.westjet.com/en-us/baggage/carry-on", "WestJet &mdash; Carry-on baggage"],
      ["https://www.westjet.com/en-us/baggage/allowance", "WestJet &mdash; Checked and excess baggage"],
      ["https://www.westjet.com/en-us/flights/fees", "WestJet &mdash; Service fees"]
    ]
  }
};
