// SAS baggage entry, read on SAS's OWN pages (Carry-on baggage and Checked baggage under Travel info) on 2026-10-08. Same rules as BAGGAGE_DETAIL.md.
module.exports = {
  "SAS": {
    title: "SAS Baggage Allowance 2026: 8 kg Carry-On 55x40x23, Underseat Bag",
    desc: "SAS baggage allowance: underseat bag 40 x 30 x 15 cm, carry-on 55 x 40 x 23 cm and 8 kg, checked bag max 158 cm and 23-32 kg. Light ticket carry-on from 16 EUR.",
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
          ["More than 14 days before departure", "16"],
          ["13 days up to 4 hours before departure", "16"],
          ["Less than 4 hours before departure", "35"],
          ["At the airport (check-in or gate)", "50"]
        ] },
        list: ["Other routes, such as Scandinavia to the Canary Islands, Madeira and Morocco, have their own prices on the same SAS page."] },
      { h: "🧳 SAS checked baggage size, weight and heavy-bag fees",
        p: "Checked baggage includes larger bags such as suitcases and strollers. SAS gives these limits:",
        table: { head: ["Item", "What SAS says"], rows: [
          ["Maximum size", "158 cm (length + width + height)"],
          ["Maximum weight", "23 to 32 kg, depending on ticket type and destination"],
          ["Flights to and from Greenland", "Maximum checked baggage weight 30 kg"],
          ["Bags over 23 kg or over the size limit", "A flat fee per bag, per one way, payable only at the airport"]
        ] },
        list: ["The heavy or oversized fee differs by route, as the next table shows."] },
      { h: "⚖️ Heavy-bag fees by weight and route",
        p: "SAS charges a flat rate per bag, per one-way flight, for bags that weigh 23 to 32 kg.",
        table: { head: ["Route", "23.1 - 28 kg", "28.1 - 32 kg"], rows: [
          ["Domestic", "EUR 55", "EUR 85"],
          ["Europe, Greenland and within Scandinavia", "EUR 65", "EUR 105"],
          ["Flights to and from Asia and North America", "EUR 75", "EUR 135"]
        ] },
        list: ["SAS lists the same fees in DKK, NOK, SEK and USD, with CAD on North America flights."] },
      { h: "🎿 SAS sports equipment fees (more than 22 hours before departure)",
        p: "Bikes and ski, snowboard or golf bags are charged per item. Closer to departure the fee is higher, and SAS lists a separate table for less than 22 hours.",
        table: { head: ["Route", "Bike", "Ski, snowboard or golf bag"], rows: [
          ["Domestic Denmark, Norway and Sweden including the Faroe Islands", "EUR 40", "EUR 35"],
          ["Scandinavia to and from Europe, Lebanon and the United Arab Emirates", "EUR 45", "EUR 40"],
          ["Flights to and from Asia and North America", "EUR 100", "EUR 85"]
        ] }
      }
    ],
    faq: [
      ["What is the SAS baggage allowance?", "An underseat bag up to 40 x 30 x 15 cm and a carry-on up to 55 x 40 x 23 cm and 8 kg on tickets that include it. Checked bags may be up to 158 cm and 23 to 32 kg depending on ticket type and destination."],
      ["What is the SAS carry-on size and weight limit?", "55 x 40 x 23 cm and 8 kg for the carry-on, plus an underseat bag of 40 x 30 x 15 cm (18 litres)."],
      ["Does SAS Light include a carry-on bag?", "No. A carry-on can be bought only for Economy Light tickets; Standard, Flex, Premium and Business tickets already include one."],
      ["How much is a carry-on on SAS Light?", "On domestic and Scandinavian routes, EUR 16 more than 14 days before departure and up to 4 hours before, EUR 35 within 4 hours and EUR 50 at the airport."],
      ["What is the SAS maximum weight for a checked bag?", "23 to 32 kg depending on ticket type and destination; flights to and from Greenland allow 30 kg. Bags over 23 kg pay a heavy-bag fee at the airport."],
      ["What is the SAS maximum size for a checked bag?", "158 cm, measured as length + width + height."]
    ],
    sources: [
      ["https://www.flysas.com/en/travel-info/baggage/carry-on", "SAS &mdash; Carry-on baggage"],
      ["https://www.flysas.com/en/travel-info/baggage/checked", "SAS &mdash; Checked baggage"]
    ]
  }
};
