// Slim baggage entries (batch 23, checked 13 October 2026, read on the airlines' OWN pages:
// Vueling help center "Hand Luggage Allowance", "Checked Luggage Allowance", "Bundle Comparison";
// Transavia help center "How much baggage can I bring in the cabin?", "Basic, Smart, Plus and Max fare", "Fees for checked baggage", "Checked baggage rules";
// GOL "Checked baggage" and "Carry-on baggage" (voegol.com.br/en). Same rules as BAGGAGE_DETAIL.md.
// NOT read: Vueling codeshare and Family/Optima legacy fares, Transavia partner-airline bookings, GOL tickets bought before the dates named on the page, special baggage.
module.exports = {
  "Vueling": {
    title: "Vueling Baggage Allowance 2026: Underseat Bag 40 x 30 x 20 cm, Overhead Bag 10 kg, Checked Bag 25 kg",
    desc: "Vueling baggage allowance 2026: free underseat bag 40 x 30 x 20 cm, overhead bag 55 x 40 x 20 cm and 10 kg, checked bag 15 to 30 kg from 10 to 120 EUR online, what Fly Light, Fly, Fly Pro and Fly Grande include.",
    answer: "Every Vueling ticket includes one underseat cabin bag up to 40 x 30 x 20 cm (16 x 12 x 8 in). A piece in the overhead locker up to 55 x 40 x 20 cm (22 x 16 x 8 in) and 10 kg (22 lb) is included in Fly Pro and Fly Grande, and in Fly you choose it or a checked bag. Fly Light has only the underseat bag. A checked bag of 15, 20, 25 or 30 kg can be added online from 10 to 120 EUR depending on the weight and route; 25 kg is included in Fly Grande. Maximum size is 158 cm (62 in) in length + height + width.",
    stats: [
      ["40 × 30 × 20 cm", "underseat bag, free (16 × 12 × 8 in)"],
      ["55 × 40 × 20 cm", "overhead bag, 10 kg (22 lb), Fly Pro and Fly Grande"],
      ["25 kg", "checked bag in Fly Grande (55 lb)"],
      ["158 cm", "checked bag, length + height + width"]
    ],
    sections: [
      { h: "🎟️ What each fare includes",
        table: { head: ["Fare", "Underseat bag", "Overhead bag (10 kg)", "Checked bag"], rows: [
          ["Fly Light", "Free", "Costs extra", "Costs extra"],
          ["Fly", "Free", "Choose this or a checked bag", "Choose this or a 25 kg bag"],
          ["Fly Pro", "Free", "Free", "Costs extra"],
          ["Fly Grande", "Free", "Free", "1 bag of 25 kg included"] ] },
        list: ["Fly (when you pick the checked bag option), Fly Grande, Optima and Family include a 25 kg checked bag, according to the checked luggage page.",
          "Premium customers and passengers travelling with infants also get the underseat bag and the overhead piece.",
          "Luggage already booked cannot be changed or cancelled.",
          "<strong>Not read:</strong> the allowance on codeshare flights, which depends on the airline operating the flight." ] },
      { h: "🎒 Cabin bags",
        table: { head: ["Bag", "Maximum size", "Maximum weight"], rows: [
          ["Underseat bag", "40 × 30 × 20 cm (16 × 12 × 8 in)", "—"],
          ["Overhead locker piece", "55 × 40 × 20 cm (22 × 16 × 8 in)", "10 kg (22 lb)"] ] },
        list: ["On Fly Light you can add the overhead piece with the 2 pieces on board service, or choose a Space One, Space Plus or Space seat.",
          "At the gate an underseat bag over 40 × 30 × 20 cm is checked for 60 to 75 EUR per item and flight; any piece over 55 × 40 × 20 cm is checked for 110 to 140 EUR. The same gate fee applies to pieces that were not booked in advance.",
          "Shoes and helmets must be packed inside your bag, not attached to the outside.",
          "You must be able to lift your cabin bag into the overhead compartment yourself, or it will be checked." ] },
      { h: "🧳 Checked bag prices",
        table: { head: ["Bag", "Online or in the app", "At the airport"], rows: [
          ["15 kg", "From 10 to 95 EUR", "—"],
          ["20 kg", "From 14 to 96 EUR", "—"],
          ["25 kg", "From 18 to 99 EUR (included in Fly Grande)", "From 50 to 160 EUR"],
          ["30 kg", "From 25 to 120 EUR", "—"] ] },
        list: ["The price depends on the destination. You can add one bag of each weight per passenger.",
          "Over the bought weight: 12 EUR per extra kilo at the airport, up to 32 kg per bag.",
          "A bag is 50% cheaper to add online than at the airport.",
          "On some flights to and from Africa (except the Canary Islands) and the Middle East, the number of checked bags can be limited to 1 or 2 per passenger." ] }
    ],
    faq: [
      ["What is the Vueling cabin bag size?", "The free underseat bag is up to 40 × 30 × 20 cm. An overhead piece, if your fare includes it, is up to 55 × 40 × 20 cm and 10 kg."],
      ["Does Vueling Fly Light include a bag?", "Only the underseat bag (40 × 30 × 20 cm). The overhead bag and a checked bag cost extra."],
      ["How much is a checked bag on Vueling?", "Online, from 10 to 95 EUR for 15 kg, 18 to 99 EUR for 25 kg and 25 to 120 EUR for 30 kg, depending on the route; at the airport a 25 kg bag is from 50 to 160 EUR."],
      ["What happens if my bag is too big at the Vueling gate?", "An underseat bag over the limit is checked for 60 to 75 EUR, and a piece over 55 × 40 × 20 cm for 110 to 140 EUR, per item and flight."]
    ],
    sources: [
      ["https://help.vueling.com/hc/en-gb/articles/19798835176081-Hand-Luggage-Allowance-Cabin-bags-allowance", "Vueling &mdash; Hand luggage allowance"],
      ["https://help.vueling.com/hc/en-gb/articles/19798784049041-Checked-Luggage-Allowance", "Vueling &mdash; Checked luggage allowance"],
      ["https://help.vueling.com/hc/en-gb/articles/19798843450129-Bundle-Comparison", "Vueling &mdash; Bundle comparison"]
    ]
  },
  "Transavia": {
    title: "Transavia Baggage Allowance 2026: Hand Luggage 40 x 30 x 20 cm, Cabin Bag 55 x 40 x 25 cm, Hold Bag 20 kg or 30 kg",
    desc: "Transavia baggage allowance 2026: hand luggage 40 x 30 x 20 cm, cabin bag 55 x 40 x 25 cm, 10 kg combined, 20 kg hold bag in Plus and 30 kg in Max, hold bag prices from 29.99 euro, what Basic, Smart, Plus and Max include.",
    answer: "Every Transavia ticket includes one piece of hand luggage up to 40 x 30 x 20 cm (16 x 12 x 8 in) under the seat; hand luggage and cabin bag together may weigh up to 10 kg (22 lb). A cabin bag up to 55 x 40 x 25 cm (22 x 16 x 10 in) is included in Smart and Max and costs extra on Basic and Plus. A hold bag is included in Plus (20 kg) and Max (30 kg); on Basic and Smart you can add one, with 15 kg from 29.99 euro online. Each hold piece is up to 32 kg and 165 cm (65 in).",
    stats: [
      ["40 × 30 × 20 cm", "hand luggage, under the seat (16 × 12 × 8 in)"],
      ["55 × 40 × 25 cm", "cabin bag, Smart and Max (22 × 16 × 10 in)"],
      ["10 kg", "hand luggage and cabin bag combined (22 lb)"],
      ["20 / 30 kg", "hold bag included, Plus / Max"]
    ],
    sections: [
      { h: "🎟️ What each fare includes",
        table: { head: ["Fare", "Hand luggage", "Cabin bag", "Hold bag"], rows: [
          ["Basic", "Free", "Costs extra", "Costs extra"],
          ["Smart", "Free", "Free", "Costs extra"],
          ["Plus", "Free", "Costs extra", "20 kg included"],
          ["Max", "Free", "Free", "30 kg included"] ] },
        list: ["Max also includes Priority Boarding. Be at the gate on time to board in the first group; the cabin bag is no longer guaranteed if you arrive late.",
          "The prices on this page apply to flight numbers that start with TO. Bookings through a partner airline, a travel agency, and other airlines' rules differ.",
          "<strong>Not read:</strong> baggage on bookings made through partner airlines such as KLM or Delta; check your booking." ] },
      { h: "🎒 Hand luggage and cabin bag",
        table: { head: ["Bag", "Maximum size", "Maximum weight"], rows: [
          ["Hand luggage (small backpack or handbag)", "40 × 30 × 20 cm (16 × 12 × 8 in), under the seat in front", "10 kg together with the cabin bag"],
          ["Cabin bag (trolley or travel bag)", "55 × 40 × 25 cm (22 × 16 × 10 in), wheels and handles included", "10 kg together with the hand luggage"] ] },
        list: ["You can always take an umbrella, a walking stick and one bag of duty free items on board.",
          "A cabin bag can be added to your booking for a fee while booking, before check-in, or up to 2 hours before departure.",
          "A bag over the allowed size or weight costs 70 euro or more at the gate and goes in the hold." ] },
      { h: "🧳 Hold bag prices (one way, flight numbers starting with TO)",
        table: { head: ["Weight", "Online", "At the airport"], rows: [
          ["10 kg", "—", "60 euro"],
          ["15 kg", "From 29.99 euro", "70 euro"],
          ["20 kg", "From 36.99 euro", "80 euro"],
          ["25 kg", "From 41.99 euro", "90 euro"],
          ["30 kg", "From 51.99 euro", "100 euro"],
          ["40 kg", "From 64.99 euro", "120 euro"],
          ["50 kg", "From 89.99 euro", "180 euro"] ] },
        list: ["Prices depend on the destination, the flight and the booking date. Flights to and from Senegal and Saudi Arabia have higher airport prices.",
          "At the airport, excess baggage costs 15 euro per kilo.",
          "<strong>Size and limits:</strong> up to 50 kg per passenger split over at most 5 pieces, each piece up to 32 kg and 165 cm (length + width + height, wheels and handles included). For some destinations the limit is 30 kg per passenger. Pieces between 165 and 300 cm cost extra at the airport." ] }
    ],
    faq: [
      ["What is the Transavia hand luggage size?", "40 × 30 × 20 cm under the seat, such as a small backpack or handbag. Hand luggage and cabin bag together may weigh up to 10 kg."],
      ["Does Transavia Basic include a cabin bag?", "No. Basic and Plus include only the 40 × 30 × 20 cm hand luggage; Smart and Max include a cabin bag of 55 × 40 × 25 cm."],
      ["How many kilos of hold baggage does Transavia Plus include?", "Plus includes a 20 kg hold bag and Max a 30 kg hold bag. On Basic and Smart you can add one."],
      ["How much does a hold bag cost on Transavia?", "Online from 29.99 euro for 15 kg and from 36.99 euro for 20 kg; at the airport 70 euro for 15 kg and 80 euro for 20 kg."]
    ],
    sources: [
      ["https://www.transavia.com/help/en-eu/baggage/cabin-baggage/how-much-to-bring", "Transavia &mdash; Cabin baggage"],
      ["https://www.transavia.com/help/en-eu/search-and-book/basic-smart-plus-max-fare", "Transavia &mdash; Basic, Smart, Plus and Max fare"],
      ["https://transavia.com/help/en-fr/baggage/checked-baggage/fares-hold-luggage", "Transavia &mdash; Fees for checked baggage"],
      ["https://www.transavia.com/help/en-fr/baggage/checked-baggage/checked-baggage-rules", "Transavia &mdash; Checked baggage rules"]
    ]
  },
  "GOL": {
    title: "GOL Baggage Allowance 2026: Small Bag 55 x 35 x 25 cm 12 kg, Personal Item 10 kg, Checked Bag 23 kg",
    desc: "GOL baggage allowance 2026: small bag 55 x 35 x 25 cm up to 12 kg, personal item up to 10 kg, checked bag 23 kg, which fares include a checked bag (Classic, Flex, Premium Economy, Business) and what Basic and Light cost extra.",
    answer: "Every GOL ticket includes a personal item for under the seat, up to 32 x 43 x 22 cm (13 x 17 x 9 in) and 10 kg (22 lb). For tickets issued from 14 October 2025 (not Basic), a small bag up to 55 x 35 x 25 cm (22 x 14 x 10 in) and 12 kg (26 lb) is also included on domestic flights in Light, Classic and Flex, and on international flights in every fare except Basic. A checked bag of up to 23 kg (50 lb), at most 80 x 50 x 28 cm, is included from Classic upward for customers outside the Smiles program; Basic and Light include none.",
    stats: [
      ["32 × 43 × 22 cm", "personal item, up to 10 kg (22 lb)"],
      ["55 × 35 × 25 cm", "small bag, up to 12 kg (26 lb)"],
      ["23 kg", "checked bag (50 lb)"],
      ["80 × 50 × 28 cm", "checked bag maximum size"]
    ],
    sections: [
      { h: "🎟️ What each fare includes",
        table: { head: ["Fare", "Small bag, domestic", "Small bag, international", "Checked bag (no Smiles status)"], rows: [
          ["Basic", "Not on this fare", "Costs extra", "None"],
          ["Light", "1 included", "1 included", "None"],
          ["Classic", "1 included", "1 included", "1st bag included"],
          ["Flex", "1 included", "1 included", "1st bag included"],
          ["Premium Economy", "Not sold on domestic flights", "1 included", "1st bag included"],
          ["INSIGNIA Business Classic and Flex", "Not sold on domestic flights", "1 included", "1st and 2nd bag included"] ] },
        list: ["Smiles members get more checked bags: Prata includes the first bag on Light as well, Ouro includes two bags on every fare except Basic, Diamante and Magno include three bags on every fare except Basic. Basic includes none for any category.",
          "Tickets issued before 14 October 2025 have a 10 kg small bag and may follow older rules; the page links the older contract.",
          "<strong>Not read:</strong> the flights of partner airlines and tickets issued separately; the baggage allowance applies only to flights on the same ticket." ] },
      { h: "🎒 Personal item and small bag",
        table: { head: ["Bag", "Maximum size", "Maximum weight", "Where it goes"], rows: [
          ["Personal item (purse, backpack, laptop bag)", "32 × 43 × 22 cm (13 × 17 × 9 in)", "10 kg (22 lb)", "Under the seat in front"],
          ["Small bag", "55 × 35 × 25 cm (22 × 14 × 10 in), wheels included", "12 kg (26 lb)", "Overhead compartment"] ] },
        list: ["Small bags over the size or weight limit must be checked and baggage fees may apply.",
          "For operational or security reasons, boarding groups 3, 4 and 5 may need to check their small bag at boarding. If it has removable wheels, take them off.",
          "On international flights with the Basic fare you can buy the small bag: online more than 48 hours before takeoff from 40 USD to 89 USD depending on the destination, and at the airport from 85 to 120 USD." ] },
      { h: "🧳 Checked bag and prices",
        table: { head: ["Domestic first bag", "Price"], rows: [
          ["More than 48 hours before takeoff", "R$ 175 to R$ 230"],
          ["Less than 48 hours before takeoff", "R$ 220 to R$ 249"],
          ["At the airport", "R$ 250"] ] },
        list: ["<strong>Size and weight:</strong> 1 bag up to 23 kg, at most 80 cm high, 50 cm wide and 28 cm deep. Remove removable wheels before checking in.",
          "A second bag costs more (domestic from R$ 220 online, R$ 275 at the airport) and the 3rd to 5th bag more again; GOL accepts at most 5 pieces per customer.",
          "Prices outside Brazil are in dollars and depend on the destination (South America, Central America and the Caribbean, USA, Europe).",
          "With a lap infant under 2 you can check one car seat, stroller or infant carrier per child free of charge." ] }
    ],
    faq: [
      ["What is the GOL carry-on size?", "A personal item up to 32 × 43 × 22 cm and 10 kg under the seat, plus a small bag up to 55 × 35 × 25 cm and 12 kg where your fare includes it."],
      ["Does GOL Basic include a small bag?", "No. Basic includes only the personal item; the small bag can be bought on international flights, and it is not available on domestic Basic fares."],
      ["Which GOL fares include a checked bag?", "Classic, Flex, Premium Economy and the INSIGNIA Business fares include a 23 kg bag (two in Business). Basic and Light include none, before any Smiles status."],
      ["What is the GOL checked bag size?", "Up to 23 kg and 80 × 50 × 28 cm; GOL accepts at most 5 pieces per customer."]
    ],
    sources: [
      ["https://www.voegol.com.br/en/informacoes/bagagem/bagagem-despachada", "GOL &mdash; Checked baggage"],
      ["https://www.voegol.com.br/en/informacoes/bagagem/bagagem-de-m%C3%A3o", "GOL &mdash; Carry-on baggage"]
    ]
  }
};
