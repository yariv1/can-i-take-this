// Virgin Atlantic baggage entry, read on virginatlantic.com's OWN pages (Help centre: hand baggage allowance, checked in baggage allowance, extra bags; Optional service and travel fees, en-US) on 2026-10-12. Same rules as BAGGAGE_DETAIL.md.
// NOT read: the baggage calculator (final price for your route and date), the definition of an overweight bag, sports equipment, children and infant pages.
module.exports = {
  "Virgin Atlantic": {
    title: "Virgin Atlantic Baggage Allowance 2026: Carry-On Size, Checked Bag Fees",
    desc: "Virgin Atlantic baggage allowance 2026: hand baggage 10 kg and 23 x 36 x 56 cm, Economy Light has no checked bag, Classic and Delight 1 x 23 kg, Premium 2 x 23 kg, Upper Class 2 x 32 kg, and extra bag fees from the US.",
    answer: "Virgin Atlantic gives every passenger one hand baggage piece up to 10 kg and 23 x 36 x 56 cm (Upper Class: up to two bags, 12 kg for one or 16 kg combined) plus one under-seat bag of 40 x 30 x 15 cm. Checked bags: none in Economy Light, 1 x 23 kg in Economy Classic and Delight, 2 x 23 kg in Premium and 2 x 32 kg in Upper Class. For a journey starting in the US, an extra bag costs 100 USD for the first or second and 200 USD from the third.",
    stats: [
      ["10 kg", "hand baggage in Economy and Premium (22 lb)"],
      ["23 × 36 × 56 cm", "hand baggage size (9 × 14 × 22 in)"],
      ["23 kg", "checked bag in Economy and Premium"],
      ["100 USD", "an extra bag from the US (bags 1 and 2)"]
    ],
    sections: [
      { h: "🧳 Hand baggage: one bag, 10 kg, 23 × 36 × 56 cm",
        p: "This is the chart on Virgin Atlantic's help centre. Hand baggage is included on every ticket.",
        table: { head: ["Cabin", "Hand baggage", "Maximum weight", "Maximum size per bag"], rows: [
          ["Economy Light", "1 bag", "10 kg (22 lb)", "23 × 36 × 56 cm (9 × 14 × 22 in)"],
          ["Economy Classic", "1 bag", "10 kg (22 lb)", "23 × 36 × 56 cm (9 × 14 × 22 in)"],
          ["Economy Delight", "1 bag", "10 kg (22 lb)", "23 × 36 × 56 cm (9 × 14 × 22 in)"],
          ["Premium", "1 bag", "10 kg (22 lb)", "23 × 36 × 56 cm (9 × 14 × 22 in)"],
          ["Upper Class", "Up to 2 bags", "12 kg for one bag, or 16 kg (35 lb) combined for two", "23 × 36 × 56 cm (9 × 14 × 22 in)"] ] },
        list: ["<strong>Under-seat bag:</strong> on top of that, every passenger in every cabin can bring one under-seat bag (a handbag, laptop bag or small rucksack) up to 40 × 30 × 15 cm that fits under the seat in front.",
          "<strong>New charge:</strong> Virgin Atlantic says that from 23 March 2026 a bag over the allowance may incur a 65 GBP charge and be placed in the hold.",
          "<strong>Lifting:</strong> you must be able to place your hand baggage in the overhead bin unaided. If you need help, tell the Accessible Travel Services team when you arrange medical clearance.",
          "<strong>Laptops:</strong> you can carry laptops and other electrical items as long as they fit in your hand baggage. Take large electricals out of the bag for security screening." ] },
      { h: "🛄 Checked baggage by cabin",
        p: "The standard allowance depends on the cabin you are travelling in. Each checked bag can be up to 90 × 75 × 43 cm (35.5 × 29.5 × 16 in).",
        table: { head: ["Cabin", "Checked bag included", "Maximum weight each"], rows: [
          ["Economy Light", "None. You can buy one before you fly or at check-in", "23 kg if you buy one"],
          ["Economy Classic", "1 bag", "23 kg"],
          ["Economy Delight", "1 bag", "23 kg"],
          ["Premium", "2 bags", "23 kg"],
          ["Upper Class", "2 bags", "32 kg"] ] },
        list: ["<strong>Flying Club:</strong> Silver and Gold members get one extra checked bag (up to 23 kg) on Virgin Atlantic flights. In Economy Light, that means one bag, even though checked baggage is not included.",
          "<strong>Key West (EYW):</strong> because of aircraft and runway restrictions the allowance is lower, for everyone including Flying Club members: 1 × 23 kg in Economy Classic, Economy Delight, Premium and Upper Class, none in Economy Light.",
          "<strong>Two bags on some routes:</strong> Economy Classic and Delight include two checked bags between UK/Ireland and Nigeria, Ghana or India, and between the US/Canada and India or Lebanon. Between the US/Canada and Nigeria it applies to bookings made before 15 April 2026; after that date it is one bag when flying directly from the US or Canada to Nigeria. If your flight connects via London you still get two bags.",
          "<strong>Other airlines:</strong> if part of your trip is on a partner airline, check that airline's own rules. Virgin Atlantic says baggage with other airlines may be included or have an extra charge." ] },
      { h: "💷 Extra and overweight bag fees (journey starting in the US)",
        p: "Virgin Atlantic's fees are per flight and based on the country where your journey begins. The table shows the US dollar rate from its Optional service and travel fees page; for journeys starting in the UK, Canada or the euro zone it lists 80 GBP, 110 CAD or 85 EUR for the same bag.",
        table: { head: ["Bag number", "Economy Light", "Economy Classic and Delight", "Premium", "Upper Class"], rows: [
          ["Bag 1", "100 USD", "Included", "Included", "Included"],
          ["Bag 2", "100 USD", "100 USD", "Included", "Included"],
          ["Bag 3", "200 USD", "200 USD", "200 USD", "200 USD"],
          ["Bag 4", "200 USD", "200 USD", "200 USD", "200 USD"] ] },
        list: ["<strong>Overweight bag:</strong> 100 USD (65 GBP) per bag. <strong>Oversized bag:</strong> 300 USD (200 GBP) per bag. We did not read how Virgin Atlantic defines overweight.",
          "<strong>Where to pay:</strong> during online check-in, which opens 24 hours before departure and closes 70 minutes before, or at the airport for the same price. You can check in a total of 10 bags on each flight, including your free allowance.",
          "<strong>Non-refundable:</strong> extra bag fees cannot be refunded or transferred.",
          "<strong>Calculator:</strong> Virgin Atlantic points to its baggage calculator for the cost of your whole trip. It applies to adults, young adults, children and seated infants. We did not use the calculator, so check it for your route and date.",
          "<strong>Infants:</strong> a lap infant (no seat) has 1 checked bag, except in Economy Light where none is included. A fully collapsible pushchair and a car seat can be taken in addition to the free allowance."] }
    ],
    faq: [
      ["What is the Virgin Atlantic carry-on size?", "One hand baggage piece up to 23 × 36 × 56 cm (9 × 14 × 22 in) and 10 kg in Economy and Premium. In Upper Class up to two bags: 12 kg for one, or 16 kg combined for two. Everyone can also bring one under-seat bag of 40 × 30 × 15 cm."],
      ["Does Virgin Atlantic Economy Light include a checked bag?", "No. You can add one before you fly or when you check in: from the US the first bag is 100 USD. The bag can weigh up to 23 kg and measure 90 × 75 × 43 cm."],
      ["How heavy can a Virgin Atlantic checked bag be?", "23 kg in Economy and Premium, 32 kg in Upper Class. Each bag can be up to 90 × 75 × 43 cm (35.5 × 29.5 × 16 in)."],
      ["How much is an extra bag on Virgin Atlantic from the US?", "100 USD for the first or second bag where it is not included and 200 USD for the third and fourth. An overweight bag is 100 USD and an oversized bag 300 USD. Rates are per flight and depend on where the journey begins."],
      ["How many checked bags do I get in Virgin Atlantic Premium?", "Two bags up to 23 kg each. Upper Class also has two, up to 32 kg each. Flights to and from Key West allow one 23 kg bag in all cabins except Economy Light."],
      ["Do Flying Club members get extra baggage on Virgin Atlantic?", "Silver and Gold members get one extra checked bag (up to 23 kg) on Virgin Atlantic operated flights, including a bag in Economy Light."]
    ],
    sources: [
      ["https://www.virginatlantic.com/en-US/help/articles/what-is-my-hand-baggage-allowance----a5a24d4c-a652-4fbd-925d-57d0ead2ed5e", "Virgin Atlantic &mdash; What is my hand baggage allowance?"],
      ["https://www.virginatlantic.com/en-US/help/articles/what-is-my-checked-in-baggage-allowance----70858c8e-6bdf-433c-b421-ef796757727d", "Virgin Atlantic &mdash; What is my checked in baggage allowance?"],
      ["https://www.virginatlantic.com/en-US/help/articles/how-much-is-an-extra-bag----f1102355-6499-427d-94c4-6b36630f4785", "Virgin Atlantic &mdash; How much is an extra bag?"],
      ["https://www.virginatlantic.com/en-US/experience/upgrades-and-extras/optional-service-and-travel-fees", "Virgin Atlantic &mdash; Optional service and travel fees"]
    ]
  }
};
