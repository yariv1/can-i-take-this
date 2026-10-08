// Fifth batch of verified baggage entries (read on each airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// Ryanair: Help Centre "Ryanair's Bag Policy", the bag-rules articles, and the Help Centre "Fees" page, all read 2026-10-08.
module.exports = {
  "Ryanair": {
    title: "Ryanair Baggage Allowance 2026: Free 40x30x20 Bag, 10/20/23 kg Fees",
    desc: "Ryanair baggage allowance: free small bag 40 x 30 x 20 cm, 10 kg cabin bag 55 x 40 x 20 cm with Priority, checked 10, 20 or 23 kg from €/£10.49.",
    answer: "Every Ryanair fare includes one small personal bag of 40 x 30 x 20 cm that must fit under the seat in front of you. A 10 kg cabin bag (55 x 40 x 20 cm) comes with Priority & 2 Cabin Bags, and checked bags of 10, 20 or 23 kg are paid add-ons. Online prices run from €/£10.49 for a 10 kg checked bag to €/£80.99 for a 23 kg one, depending on the route and date.",
    stats: [
      ["40 x 30 x 20 cm", "free small bag, under the seat"],
      ["10 kg", "cabin bag (55 x 40 x 20 cm) with Priority & 2 Cabin Bags"],
      ["10 / 20 / 23 kg", "checked bag options, paid"],
      ["32 kg", "heaviest single item Ryanair accepts"]
    ],
    sections: [
      { h: "🎒 Ryanair cabin baggage allowance",
        p: "All Ryanair fares include one small personal bag, such as a handbag or laptop bag, that fits under the seat in front of you. A larger cabin bag is an add-on.",
        table: { head: ["Option", "What you can bring", "Price when booking", "Price after booking or at the airport"], rows: [
          ["Free (all fares)", "1 small personal bag, 40 x 30 x 20 cm, under the seat", "Included", "Included"],
          ["Priority & 2 Cabin Bags", "The small bag plus a 10 kg bag of 55 x 40 x 20 cm in the overhead locker, and the Priority boarding queue", "€/£12.49 - €/£36", "€/£19.99 - €/£45.50"]
        ] },
        list: [
          "<strong>Prices vary:</strong> Ryanair says the fee depends on the route and the travel dates selected.",
          "<strong>If Priority & 2 Cabin Bags is sold out</strong>, you can still add a 10 kg check-in bag, but it must be dropped at the airport check-in desk before security.",
          "<strong>Infants</strong> (8 days to 23 months) have no cabin bag allowance. A baby bag up to 5 kg (45 x 35 x 20 cm) is allowed for a baby on an adult's lap, and 2 items of baby equipment are carried free of charge per child."
        ] },
      { h: "🧳 Ryanair checked baggage: 10 kg, 20 kg and 23 kg",
        p: "Checked bags are added to a booking, are dropped at the check-in desk before security, and are charged per flight.",
        table: { head: ["Bag", "Maximum per booking", "Price when booking (per flight)", "After booking or at the airport (per flight)"], rows: [
          ["10 kg Check-in Bag", "Not stated on the pages we read", "€/£10.49 - €/£44.99", "€/£24 - €/£75"],
          ["20 kg Check-in Bag", "Up to 3 bags", "€/£21.49 - €/£59.99", "€/£39.99 - €/£75"],
          ["23 kg Check-in Bag", "1 bag", "€/£28.99 - €/£80.99", "€/£54 - €/£97"]
        ] },
        list: [
          "<strong>Size:</strong> the maximum dimensions of a 20 kg and of a 23 kg check-in bag are 80 x 120 x 120 cm.",
          "<strong>No bag booked:</strong> a passenger who has not added a bag can still buy a 20 kg bag at the airport bag drop desk for €/£59.99, and a non-priority passenger a 10 kg bag for €/£35.99.",
          "<strong>Bag pooling is allowed</strong> between passengers with check-in bags on the same flight reservation. With two 20 kg bags (40 kg total) one can weigh 15 kg and the other 25 kg, as long as no bag weighs more than 32 kg."
        ] },
      { h: "⚖️ Overweight, oversize and gate fees",
        p: "Ryanair charges extra when a bag breaks its limits, and the fee is higher at the airport than online.",
        table: { head: ["Situation", "What Ryanair says"], rows: [
          ["Check-in bag over its weight (10, 20 or 23 kg)", "Excess weight fee of €/£13 per extra kilo at the airport, call centre or kiosk"],
          ["Check-in bag bigger than the size limit", "Checked in at the Oversize Baggage Desk for a fee (see Ryanair's table of fees)"],
          ["Any single item over 32 kg, or combined dimensions over 80 x 120 x 120 cm", "Not accepted for safety reasons; the weight limit does not apply to mobility equipment"],
          ["Cabin bag too big for the sizer (over 55 x 40 x 20 cm)", "Refused at the gate or, where available, placed in the hold for €/£70 - €/£75"],
          ["10 kg check-in bag brought to the gate by a non-priority passenger", "Refused or, where available, placed in the hold for €/£46 - €/£75"]
        ] },
        list: [
          "<strong>Excess baggage online:</strong> Ryanair says excess baggage cannot be bought online on flights from certain airports, including Milan Bergamo, Birmingham, Bologna, Bristol, Cardiff, Dublin, Edinburgh, Krakow, Leeds Bradford, Manchester, Naples, Newcastle and London Stansted. At those airports you pay at the check-in desk.",
          "<strong>Gate bags:</strong> you leave the bag at the aircraft steps, in the gate bag trolley, or as the Ryanair agents direct."
        ] },
      { h: "🎿 Sports and special equipment fees",
        p: "Equipment is charged per item and per one-way flight. These are the figures on Ryanair's fees page.",
        table: { head: ["Item", "Maximum weight", "When booking", "After booking or at the airport"], rows: [
          ["Sports equipment", "20 kg per item", "€/£40", "€/£45"],
          ["Ski equipment", "20 kg", "€/£45", "€/£50"],
          ["Golf clubs", "20 kg", "€/£40", "€/£50"],
          ["Large sports item", "20 kg per item", "€/£60", "€/£70"],
          ["Bike", "30 kg", "€/£60", "€/£75"],
          ["Musical instrument", "20 kg per item", "€/£60", "€/£75"]
        ] }
      }
    ],
    faq: [
      ["What is the Ryanair baggage allowance?", "Every fare includes one small personal bag of 40 x 30 x 20 cm under the seat. A 10 kg cabin bag of 55 x 40 x 20 cm needs Priority & 2 Cabin Bags, and checked bags of 10, 20 or 23 kg are paid extras."],
      ["What is the Ryanair cabin bag size?", "The free small bag is 40 x 30 x 20 cm and must fit under the seat. With Priority & 2 Cabin Bags you may also bring a 10 kg bag of 55 x 40 x 20 cm for the overhead locker."],
      ["How much is a 20 kg bag on Ryanair?", "Online, from €/£21.49 to €/£59.99 per flight depending on route and date; after booking, €/£39.99 to €/£75; at the airport bag drop, €/£59.99 if you have not added a bag."],
      ["What is the Ryanair weight limit for checked bags?", "10, 20 or 23 kg depending on the bag bought. Ryanair accepts no single item over 32 kg, and excess weight costs €/£13 per extra kilo at the airport."],
      ["Can I share my checked baggage allowance on Ryanair?", "Yes. Bag pooling is allowed between passengers with check-in bags on the same flight reservation, but no bag may weigh more than 32 kg."],
      ["What happens if my Ryanair hand luggage is too big?", "A bag that does not fit the sizer is refused at the gate or, where available, put in the hold for €/£70 - €/£75."]
    ],
    sources: [
      ["https://help.ryanair.com/hc/en-us/articles/12888036565521-Ryanair-s-Bag-Policy", "Ryanair Help Centre &mdash; Ryanair's Bag Policy"],
      ["https://www.ryanair.com/us/en/useful-info/help-centre/fees", "Ryanair &mdash; Help Centre fees"],
      ["https://help.ryanair.com/hc/en-us/categories/12489112419089", "Ryanair Help Centre &mdash; Bag Rules"]
    ]
  }
};
