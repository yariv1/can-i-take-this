// SAS baggage entry, read on SAS's OWN pages (Carry-on baggage and Checked baggage under Travel info) on 2026-10-08. Same rules as BAGGAGE_DETAIL.md.
module.exports = {
  "SAS": {
    title: "SAS Baggage Allowance 2026: 8 kg Carry-On 55x40x23, Underseat Bag",
    desc: "SAS baggage allowance: underseat bag 40 x 30 x 15 cm, carry-on 55 x 40 x 23 cm and 8 kg, checked bag max 158 cm and 23-32 kg. Light ticket carry-on from 12 EUR.",
    answer: "SAS allows an underseat bag of up to 40 x 30 x 15 cm (18 litres) and a carry-on bag of up to 55 x 40 x 23 cm and 8 kg. A carry-on is included on Economy Standard, Economy Flex, Premium and Business tickets and can be bought only on an Economy Light ticket. Checked bags may be up to 158 cm (length + width + height) and 23 to 32 kg depending on ticket type and destination, and SAS shows what your ticket includes when you book.",
    stats: [
      ["40 x 30 x 15 cm", "underseat bag, up to 18 litres"],
      ["55 x 40 x 23 cm", "carry-on bag, up to 8 kg"],
      ["158 cm", "checked bag, length + width + height"],
      ["23 - 32 kg", "checked bag weight, by ticket type and destination"]
    ],
    sections: [
      { h: "🎒 SAS carry-on baggage allowance",
        p: "SAS separates a small underseat bag from a carry-on bag that goes in the overhead compartment.",
        table: { head: ["Bag", "Maximum size", "Maximum weight"], rows: [
          ["Underseat bag (handbag, backpack, laptop bag), stored under the seat in front of you", "40 x 30 x 15 cm", "Capacity up to 18 litres"],
          ["Carry-on bag, placed in the overhead compartment", "55 x 40 x 23 cm", "8 kg"]
        ] },
        list: [
          "<strong>Who gets a carry-on:</strong> Economy Standard, Economy Flex, Premium and Business travellers already have a carry-on included and cannot buy an additional one. Buying a carry-on is available only for Economy Light tickets.",
          "<strong>Too big or too heavy:</strong> SAS checks carry-on bags against the size and weight limits before departure. A bag that is a bit too big or heavy is placed in the hold and a fee applies.",
          "<strong>What your ticket includes:</strong> SAS says baggage depends on ticket type, destination and EuroBonus level, and you see what is included when you book or in My trips."
        ] },
      { h: "💶 What a carry-on costs on an Economy Light ticket",
        p: "For domestic Denmark, Sweden and flights within Scandinavia, SAS charges a fixed fee per bag per one-way flight, maximum one bag per traveller, and the price rises as departure gets closer.",
        table: { head: ["When you add it", "Fee (EUR)"], rows: [
          ["More than 8 days before departure", "12"],
          ["7 days up until 4 hours before departure", "14"],
          ["Less than 4 hours before departure", "30"],
          ["At the airport (check-in or gate)", "45"]
        ] },
        list: ["Other routes, such as domestic Norway and Scandinavia to and from Europe, have their own prices on the same SAS page."] },
      { h: "🧳 SAS checked baggage size, weight and heavy-bag fees",
        p: "Checked baggage includes larger bags such as suitcases and strollers. SAS gives these limits:",
        table: { head: ["Item", "What SAS says"], rows: [
          ["Maximum size", "158 cm (length + width + height)"],
          ["Maximum weight", "23 to 32 kg, depending on ticket type and destination"],
        ] },
        list: ["Checked bag fees depend on route and time before departure; SAS lists them on its extra baggage fees page. We did not re-read heavy-bag fees or special-baggage rules, check them on the SAS pages."] }
    ],
    faq: [
      ["What is the SAS baggage allowance?", "An underseat bag up to 40 x 30 x 15 cm and a carry-on up to 55 x 40 x 23 cm and 8 kg on tickets that include it. Checked bags may be up to 158 cm and 23 to 32 kg depending on ticket type and destination."],
      ["What is the SAS carry-on size and weight limit?", "55 x 40 x 23 cm and 8 kg for the carry-on, plus an underseat bag of 40 x 30 x 15 cm (18 litres)."],
      ["Does SAS Light include a carry-on bag?", "No. A carry-on can be bought only for Economy Light tickets; Standard, Flex, Premium and Business tickets already include one."],
      ["How much is a carry-on on SAS Light?", "On domestic Denmark, Sweden and Scandinavian routes, EUR 12 more than 8 days before departure, EUR 14 from 7 days up to 4 hours before, EUR 30 within 4 hours and EUR 45 at the airport."],
      ["What is the SAS maximum weight for a checked bag?", "23 to 32 kg depending on ticket type and destination."],
      ["What is the SAS maximum size for a checked bag?", "158 cm, measured as length + width + height."]
    ],
    sources: [
      ["https://www.flysas.com/en/travel-info/baggage/carry-on", "SAS &mdash; Carry-on baggage"],
      ["https://www.flysas.com/en/travel-info/baggage/checked", "SAS &mdash; Checked baggage"]
    ]
  }
};
