// Second batch of verified baggage entries (read on each airline's OWN pages on 2026-10-07): Etihad, Qatar Airways, KLM, China Southern, Aer Lingus.
// Same rules as baggage_detail.js and BAGGAGE_DETAIL.md: state only what the airline's page states; no third-party numbers.
module.exports = {
  "Etihad Airways": {
    title: "Etihad Baggage Allowance 2026: Cabin 7 kg, Checked 25-40 kg",
    desc: "Etihad baggage allowance 2026: cabin bag 7 kg and 56 x 36 x 23 cm, Economy checked 25, 30 or 40 kg by fare, 2 x 23 kg to the USA and Canada.",
    answer: "Etihad Economy passengers can take one cabin bag of up to 7 kg and 56 x 36 x 23 cm on every fare. Checked baggage depends on the fare: Basic has none (fees apply), Value is 25 kg, Comfort 30 kg and Deluxe 40 kg on flights to or from most of the world, and Value, Comfort and Deluxe get 2 bags of 23 kg on flights to or from the USA and Canada. No single bag may weigh more than 32 kg.",
    stats: [["7 kg", "Economy cabin bag, 56 x 36 x 23 cm"], ["25 / 30 / 40 kg", "Value / Comfort / Deluxe, most routes"], ["2 x 23 kg", "Economy to and from the USA and Canada"], ["32 kg", "most a single checked bag may weigh"]],
    sections: [
      { h: "🎒 Etihad cabin baggage allowance", p: "Etihad's cabin baggage rule is the same on every Economy fare, Basic included.",
        table: { head: ["Cabin", "Cabin bags", "Size and weight"], rows: [
          ["Economy", "1 cabin bag", "Up to 7 kg and 56 x 36 x 23 cm"],
          ["Business, First and The Residence", "2 cabin bags, or 1 bag when flying to or from the USA", "Combined up to 12 kg (one bag up to 12 kg to or from the USA); each bag up to 56 x 36 x 23 cm"] ] },
        list: ["Business, First and The Residence passengers can also carry one additional smaller bag of up to 5 kg and up to 23 x 39 x 19 cm.",
          "If your cabin baggage is over the weight or size limits you will be asked to check it in, and excess baggage charges apply."] },
      { h: "🧳 Etihad Economy checked baggage by fare", p: "This is the baggage table on Etihad's fares page for Economy. Etihad publishes separate tables for tickets issued before and after certain dates, so the allowance on your booking confirmation is the one that applies.",
        table: { head: ["Economy fare", "Checked baggage to or from most of the world", "Checked baggage to or from the USA and Canada"], rows: [
          ["Basic", "Fees apply", "Fees apply"],
          ["Value", "25 kg", "2 bags, 23 kg each"],
          ["Comfort", "30 kg", "2 bags, 23 kg each"],
          ["Deluxe", "40 kg", "2 bags, 23 kg each"] ] },
        list: ["<strong>Basic fare:</strong> no checked baggage is included, and Etihad Guest free checked baggage benefits do not apply to it. You can add bags in Manage your booking and save up to 65% compared with the airport: the discount is available up to 4 hours before departure on weight-concept routes and up to 30 hours before departure on piece-concept routes.",
          "<strong>Business, First and The Residence:</strong> Etihad's fares page shows several checked-baggage tables depending on the ticket issue date, so read the allowance on your booking. On flights to or from the USA, Canada, Tunisia or Morocco it is 2 bags of up to 32 kg each."] },
      { h: "⚖️ How many bags, weight limit and partner airlines", p: "",
        list: ["<strong>Flights to or from the USA, Canada, Tunisia or Morocco:</strong> Economy (excluding Basic) is 2 bags of up to 23 kg each.",
          "<strong>All other destinations:</strong> you can check in multiple bags as long as the total weight is within your allowance. No single bag may weigh more than 32 kg.",
          "<strong>TVs:</strong> a TV can go in checked baggage and is only charged an oversized fee if it is 40 inches or larger.",
          "<strong>Zamzam water:</strong> one package of up to 5 litres is free on top of your allowance, safely packed and labelled; from Jeddah only with an Umrah or Hajj visa.",
          "<strong>Partner airlines:</strong> on flights operated by a partner the allowance may differ and is shown on your ticket. If your trip starts or ends in the USA, the first airline you fly with decides which baggage rules apply to the whole trip, under US Department of Transportation rules.",
          "<strong>Connecting flights:</strong> you may need to collect and re-check your bags depending on the route. For flights to the USA via Abu Dhabi you pre-clear US customs and your bags go through to your final destination."] }
    ],
    faq: [
      ["What is the Etihad baggage allowance in Economy?", "Cabin: one bag up to 7 kg and 56 x 36 x 23 cm. Checked: Basic none, Value 25 kg, Comfort 30 kg, Deluxe 40 kg on most routes, and 2 bags of 23 kg on Value, Comfort and Deluxe to or from the USA and Canada."],
      ["What is the Etihad cabin baggage size and weight?", "Economy: one bag up to 7 kg and 56 x 36 x 23 cm. Business, First and The Residence: two bags with a combined weight of up to 12 kg (one bag up to 12 kg to or from the USA), plus a smaller bag up to 5 kg and 23 x 39 x 19 cm."],
      ["Does Etihad Basic include a checked bag?", "No. The Basic fare does not include checked baggage, and Etihad Guest checked baggage benefits do not apply to it. Adding bags online costs up to 65% less than at the airport."],
      ["What is the Etihad baggage weight limit?", "No single checked bag may weigh more than 32 kg. On most routes the total weight allowance depends on your fare, and on the USA and Canada routes it is 2 bags up to 23 kg each in Economy."],
      ["How many bags can I check on Etihad?", "To or from the USA, Canada, Tunisia or Morocco, Economy (not Basic) allows 2 bags of up to 23 kg. To other destinations you can check several bags as long as the total weight stays within your allowance."],
      ["Does Etihad charge for a TV in checked baggage?", "Only an oversized baggage fee, and only if the TV is 40 inches or larger."]
    ],
    sources: [["https://www.etihad.com/en-us/help/faq/fares", "Etihad &mdash; What is included in Economy, Business and First fares"], ["https://www.etihad.com/en-us/help/faq/baggage", "Etihad &mdash; Baggage FAQs"]]
  },

  "Qatar Airways": {
    title: "Qatar Airways Baggage Allowance 2026: Cabin 7 kg, Checked 20-35 kg",
    desc: "Qatar Airways baggage allowance 2026: cabin bag 7 kg and 50 x 37 x 25 cm, Economy checked 20 to 35 kg, 2 x 23 kg to the Americas and Africa.",
    answer: "Qatar Airways Economy passengers can carry one cabin bag of up to 7 kg and 50 x 37 x 25 cm. Checked baggage depends on the route: to or from Africa or the Americas it is counted in pieces (Economy Lite 1 piece of 23 kg, Classic and higher 2 pieces of 23 kg), and on all other routes by weight (Lite 20 kg, Classic 25 kg, Convenience 30 kg, Comfort 35 kg). No single bag can exceed 32 kg.",
    stats: [["7 kg", "Economy cabin bag, 50 x 37 x 25 cm"], ["20 / 25 / 30 / 35 kg", "Economy Lite / Classic / Convenience / Comfort, most routes"], ["2 x 23 kg", "Economy Classic and above, Africa and the Americas"], ["32 kg", "most a single checked bag may weigh"]],
    sections: [
      { h: "🎒 Qatar Airways cabin baggage allowance", p: "The maximum cabin bag size is 50 x 37 x 25 cm (20 x 15 x 10 in). If a laptop bag is carried separately, it counts as carry-on baggage.",
        table: { head: ["Cabin", "Carry-on baggage"], rows: [
          ["Economy (all fares)", "1 piece up to 7 kg (15 lb); flights to or from Brazil: 1 piece up to 10 kg (22 lb)"],
          ["Business", "2 pieces up to 15 kg (33 lb) in total"],
          ["First", "2 pieces up to 15 kg (33 lb) in total"] ] },
        list: ["Flights departing the USA follow TSA rules: only 1 piece of hand baggage and 1 personal item, such as a handbag, briefcase or laptop bag.",
          "Also allowed in the cabin on top of your allowance: one small purse or small briefcase, a blanket or piece of outerwear, an umbrella, crutches or a walking stick, a small camera or binoculars case, limited reading material, an infant's carrying basket, and duty-free items bought on the day of your flight."] },
      { h: "🧳 Qatar Airways checked baggage by fare and route", p: "Checked baggage is included on all Qatar Airways flights. The number and weight depend on the route and the cabin and fare you booked. Routes to or from Africa or the Americas are counted in pieces, all other routes in total weight.",
        table: { head: ["Economy fare", "Africa or the Americas", "All other destinations"], rows: [
          ["Economy Lite", "1 piece up to 23 kg", "20 kg"],
          ["Economy Classic", "2 pieces up to 23 kg each", "25 kg"],
          ["Economy Convenience", "2 pieces up to 23 kg each", "30 kg"],
          ["Economy Comfort", "2 pieces up to 23 kg each", "35 kg"] ] },
        table2: { head: ["Business and First", "Africa or the Americas", "All other destinations"], rows: [
          ["Business (Lite, Classic, Comfort, Elite)", "2 pieces up to 32 kg each", "40 kg"],
          ["First Elite", "2 pieces up to 32 kg each", "50 kg"] ] },
        list: ["Exceptions apply to certain routes, and Brazil has its own cabin rule, so check the allowance shown when you book, on your confirmation email, and in Manage booking or My Trips.",
          "If you fly in different travel classes on one booking, the allowance of the highest class applies to the whole journey.",
          "Infants have their own checked baggage allowance plus one baby stroller or collapsible carrycot; an infant with a separate seat also gets one car seat."] },
      { h: "⚖️ Size, weight and extra items", p: "",
        list: ["<strong>Weight:</strong> a single piece of checked baggage cannot exceed 32 kg (70 lb).",
          "<strong>Size on Africa and the Americas routes:</strong> up to 158 cm (length + width + height) per bag. <strong>On all other routes:</strong> up to 300 cm per bag. Items over the maximum dimensions may be sent as cargo.",
          "<strong>Number of pieces:</strong> on weight routes there is no limit to the number of pieces as long as the total is within your weight allowance.",
          "<strong>Sports equipment</strong> counts toward your checked allowance if it fits the size and weight limits; larger items or extra pieces need a sporting equipment allowance.",
          "<strong>Irregular baggage:</strong> carefully wrapped and sealed boxes within the limits are accepted; round or irregular-shaped items, items tied with loose rope or string, wrapped in blankets or with loose straps are not.",
          "<strong>Privilege Club:</strong> Silver, Gold and Platinum members, and oneworld Emerald, Sapphire and Ruby members, get additional baggage allowance based on tier and route.",
          "<strong>Partner flights:</strong> baggage allowances on code-share routes are set by IATA's Most Significant Marketing Carrier rule, and the allowance for your trip is shown on your booking confirmation."] }
    ],
    faq: [
      ["What is the Qatar Airways baggage allowance in Economy?", "Cabin: 1 piece up to 7 kg. Checked: on routes to or from Africa or the Americas, 1 piece of 23 kg on Economy Lite and 2 pieces of 23 kg on Classic and above; on all other routes 20 kg (Lite), 25 kg (Classic), 30 kg (Convenience) or 35 kg (Comfort)."],
      ["What is the Qatar Airways cabin baggage size?", "50 cm x 37 cm x 25 cm (20 x 15 x 10 in), up to 7 kg in Economy and up to 15 kg in total over 2 pieces in Business and First. Flights to or from Brazil allow 10 kg in Economy."],
      ["What is the Qatar Airways baggage weight limit?", "A single checked piece cannot exceed 32 kg (70 lb). In Economy on Africa and Americas routes each piece is up to 23 kg."],
      ["What is the maximum size of a Qatar Airways checked bag?", "158 cm (length + width + height) on flights to or from Africa or the Americas, and 300 cm on all other routes."],
      ["Can I take sports equipment on Qatar Airways?", "Yes, as part of your checked baggage allowance if it fits the size and weight limits. Larger items or additional pieces need a sporting equipment allowance."],
      ["How much baggage do Privilege Club members get?", "Silver, Gold and Platinum Privilege Club members, and oneworld Emerald, Sapphire and Ruby members, receive an additional allowance depending on their tier and route."]
    ],
    sources: [["https://www.qatarairways.com/en-us/baggage/allowance.html", "Qatar Airways &mdash; Baggage allowance for flights"]]
  },

  "KLM": {
    title: "KLM Baggage Allowance 2026: Hand Baggage 12 kg, Checked Bag 23 kg",
    desc: "KLM baggage allowance 2026: small bag 40 x 30 x 15 cm, hand baggage up to 12 kg, 1 checked bag of 23 kg on Standard and Flex, none on Basic and Light.",
    answer: "On KLM every passenger can bring a small bag of 40 x 30 x 15 cm. In Economy, Light, Standard and Flex tickets add one piece of hand baggage of 55 x 35 x 25 cm, with both together up to 12 kg; Basic does not include it. Checked baggage in Economy is one bag of up to 23 kg and 158 cm on Standard and Flex tickets, and none on Basic and Light.",
    stats: [["40 x 30 x 15 cm", "small bag, always included"], ["55 x 35 x 25 cm", "hand baggage, 12 kg with the small bag"], ["23 kg", "Economy Standard and Flex checked bag"], ["158 cm", "length + width + height per checked bag"]],
    sections: [
      { h: "🎒 KLM cabin baggage allowance by ticket", p: "A small bag goes under the seat in front of you (if you sit near the emergency exit you may use the overhead bin). Hand baggage, including handles and wheels, goes in the overhead bin.",
        table: { head: ["Class and ticket", "Small bag (40 x 30 x 15 cm)", "Hand baggage (55 x 35 x 25 cm)", "Combined weight"], rows: [
          ["Economy Basic", "1 included", "Not included; can be bought in My Trip up to 4 hours before departure", "Up to 12 kg"],
          ["Economy Light, Standard, Flex", "1 included", "1 piece included", "Up to 12 kg"],
          ["Premium Comfort (all tickets)", "1 included", "2 pieces included", "Up to 12 kg"],
          ["Business", "1 included", "2 pieces included", "Up to 18 kg"] ] },
        list: ["Departing the United States, hand baggage is limited by TSA rules to 1 piece of hand baggage and 1 small bag, whatever your class.",
          "If your hand baggage is too large or too heavy, you will need to check it in for a fee.",
          "On full flights KLM may ask you to check in your hand baggage at the gate for free, even if it meets the requirements. You can always keep a small bag, so pack medicines and travel essentials in it.",
          "Cabin crew cannot help you place baggage in the overhead bins, barring certain exceptions."] },
      { h: "🧳 KLM checked baggage allowance", p: "The number of checked bags depends on your class, ticket type and destination. You can always buy extra bags during or after booking.",
        table: { head: ["Class and ticket", "Checked baggage included"], rows: [
          ["Economy Basic", "None"],
          ["Economy Light", "None"],
          ["Economy Standard or Flex", "1 bag, up to 23 kg and 158 cm (length + width + height, including handles and wheels)"],
          ["Premium Comfort Standard or Flex", "2 bags, each up to 23 kg and 158 cm"],
          ["Premium Comfort Light", "None"],
          ["Business Standard or Flex", "2 bags, each up to 32 kg and 158 cm"],
          ["Business Light", "1 bag, up to 32 kg"] ] },
        list: ["On some routes you can bring 1 additional checked bag on top of the regular allowance. Check My Trip for the exact allowance on your booking.",
          "Baggage for kids: lap infants (0 to 23 months) get 1 hand baggage item of up to 55 x 35 x 25 cm and 12 kg plus baby food for the flight, and 1 checked bag of up to 10 kg unless the ticket is Basic or Light. Infants with their own seat and children with a ticket get the hand and checked baggage of their ticket type."] },
      { h: "➕ Extra bags and what KLM will not accept", p: "",
        list: ["<strong>Extra baggage</strong> can be bought when booking, when checking in online and in My Trip, and is often cheaper than at the airport. At some departure airports extra baggage cannot be arranged on KLM.com and must be bought at the airport desk. Extra baggage is personal, non-transferable and valid for one direction on KLM flights.",
          "<strong>Hand baggage option:</strong> on an Economy Basic ticket you can buy one piece of hand baggage up to 4 hours before departure.",
          "<strong>Irregular packing:</strong> KLM refuses baggage whose packing or shape can damage or block the baggage handling system, such as ball-shaped baggage or baggage wrapped in food-packaging cling film. Professional sealing is allowed if it does not make the bag unmanageable.",
          "The prices of extra bags depend on route and date: KLM shows the price when you choose extra baggage in your booking."] }
    ],
    faq: [
      ["What is the KLM baggage allowance in Economy?", "Every ticket includes a small bag of 40 x 30 x 15 cm. Light, Standard and Flex add 1 hand baggage piece of 55 x 35 x 25 cm, up to 12 kg combined. Checked baggage is 1 bag of up to 23 kg on Standard and Flex, and none on Basic and Light."],
      ["What is the KLM hand baggage size and weight?", "Hand baggage including handles and wheels can be up to 55 x 35 x 25 cm. The small bag and hand baggage together can weigh up to 12 kg (18 kg in Business)."],
      ["Does KLM Basic include hand baggage?", "No. A Basic ticket includes only the small bag of 40 x 30 x 15 cm, and you can buy one piece of hand baggage in My Trip up to 4 hours before departure."],
      ["What is the KLM checked baggage weight and size limit?", "Economy and Premium Comfort bags can be up to 23 kg and Business bags up to 32 kg, each up to 158 cm (length + width + height) including handles and wheels."],
      ["How many checked bags do I get on KLM Business Class?", "Business Standard or Flex includes 2 bags of up to 32 kg each, and Business Light includes 1 bag of up to 32 kg."],
      ["Can I add an extra bag on KLM?", "Yes, during or after booking, at online check-in and in My Trip, and it is often cheaper than at the airport. At some airports it must be arranged at the desk."]
    ],
    sources: [["https://www.klm.com/information/baggage/hand-baggage-allowance", "KLM &mdash; Hand baggage allowance"], ["https://www.klm.com/information/baggage/checked-baggage-allowance", "KLM &mdash; Checked baggage allowance"], ["https://www.klm.com/information/legal/extra-options/extra-baggage", "KLM &mdash; Extra baggage conditions"]]
  },

  "China Southern": {
    title: "China Southern Baggage Allowance 2026: Carry-On 8 kg, Checked by Route",
    desc: "China Southern baggage allowance 2026: carry-on 8 kg and 55 x 40 x 20 cm, Economy checked 1 or 2 pieces of 23 or 32 kg by route, 20 kg domestic, 158 cm limit.",
    answer: "China Southern allows one carry-on of up to 8 kg and 55 x 40 x 20 cm in Economy and Premium Economy, and two in Business and First. Checked baggage on international and regional flights is counted in pieces by route and fare: Economy is 2 pieces of 23 kg, 1 piece of 32 kg or 1 piece of 23 kg depending on the route, Business 2 pieces of 32 kg, First 3 pieces of 32 kg, each up to 158 cm. Domestic China flights use weight: 20 kg Economy.",
    stats: [["8 kg", "carry-on per piece, 55 x 40 x 20 cm"], ["2 x 23 kg", "Economy on long-haul route groups"], ["2 x 32 kg", "Business, all international itineraries"], ["20 kg", "Economy checked, domestic China"]],
    sections: [
      { h: "🎒 China Southern carry-on baggage allowance", p: "The rule for each passenger (not counting an infant without a seat) is the same on domestic and international flights: each piece up to 8 kg and 55 x 40 x 20 cm (22 x 16 x 8 in).",
        table: { head: ["Cabin class", "Maximum number of pieces", "Max weight per piece", "Max size per piece"], rows: [
          ["First and Business", "2 pieces", "8 kg", "55 x 40 x 20 cm"],
          ["Premium Economy and Economy", "1 piece", "8 kg", "55 x 40 x 20 cm"] ] },
        list: ["Carry-on items must fit under the seat in front or in the closed storage. Anything over the weight, piece or size limit is transported as checked baggage, handled at the check-in counter or self check-in kiosk in advance.",
          "China Southern may inspect your baggage at check-in, security, the boarding gate and in the cabin. Over-limit carry-on is placed in the cargo compartment with an excess baggage fee and may not arrive on the same flight."] },
      { h: "🧳 China Southern checked baggage: international and regional (piece system)", p: "All international and regional itineraries use the piece system. Each piece is limited to the sum of length + width + height of 158 cm. These are China Southern's free allowances for general passengers on Standard, Flex and Full Flex fares:",
        table: { head: ["Class", "Allowance"], rows: [
          ["First", "3 pieces of 32 kg (70 lb), all itineraries"],
          ["Business (Standard, Flex, Full Flex)", "2 pieces of 32 kg (70 lb), all itineraries"] ] },
        table2: { head: ["Economy route group (Standard, Flex, Full Flex)", "Allowance"], rows: [
          ["Europe and Japan, the Southwest Pacific, the Americas, the Middle East or Africa; the Americas and China (mainland, Hong Kong, Macao, Taiwan), Japan, South Korea, Southeast Asia, South Asia, Central and West Asia, the Southwest Pacific, the Middle East or Africa; the Southwest Pacific, the Middle East or Africa and China or most of Asia; Japan and China, South Korea, Southeast, South and Central and West Asia; Singapore and mainland China", "2 pieces of 23 kg"],
          ["Turkey and China (mainland, Hong Kong, Macao, Taiwan); Central and West Asia and China", "1 piece of 32 kg"],
          ["Europe (except Turkey) and China; Europe and South Korea, Southeast Asia or South Asia; South Korea and China, Southeast, South and Central and West Asia; Southeast Asia and China, South Asia, Central and West Asia; South Asia and China or Central and West Asia; mainland China and Hong Kong, Macao, Taiwan; other itineraries not listed", "1 piece of 23 kg"] ] },
        table3: { head: ["Premium Economy route group (Standard, Flex, Full Flex)", "Allowance"], rows: [
          ["Europe, the Americas, the Southwest Pacific, the Middle East or Africa and China (mainland, Hong Kong, Macao, Taiwan) or most of Asia; Japan and China, South Korea, Southeast, South and Central and West Asia; South Korea and mainland China; Singapore and mainland China", "2 pieces of 23 kg"],
          ["South Korea and Hong Kong, Macao, Taiwan, Southeast, South or Central and West Asia; Southeast Asia and China, South Asia or Central and West Asia; South Asia and China or Central and West Asia; Central and West Asia and China; mainland China and Hong Kong, Macao, Taiwan; other itineraries not listed", "1 piece of 32 kg"] ] },
        list: ["<strong>Economy Saver</strong> brand fares get one piece less than Economy Standard, with the weight and size limits unchanged, and <strong>Economy Light</strong> fares have no free checked baggage.",
          "The exact route groups are listed on China Southern's free checked baggage page, which also lists the countries in each region; the allowance on your ticket is the one that applies.",
          "Infants without a seat get 1 piece of 10 kg (22 lb), with the sum of three sides up to 115 cm, plus one collapsible stroller free.",
          "International students (under 30) and labor passengers on certain itineraries can add one extra piece, subject to the conditions and the system display; this is not available on Saver or Light fares."] },
      { h: "🇨🇳 Domestic China flights (weight system)", p: "",
        table: { head: ["Class", "Free checked baggage"], rows: [["First", "40 kg"], ["Business", "30 kg"], ["Premium Economy", "20 kg"], ["Economy", "20 kg"]] },
        list: ["A child passenger has the same basic baggage allowance as an adult. An infant without a seat has no free allowance but can bring a collapsible stroller free.",
          "For domestic segments of an international trip, the free allowance is the one for the international segment.",
          "Passengers who involuntarily change cabin class keep the allowance of the original class."] }
    ],
    faq: [
      ["What is the China Southern baggage allowance in Economy?", "Carry-on: 1 piece up to 8 kg and 55 x 40 x 20 cm. Checked on international routes: 2 pieces of 23 kg, 1 piece of 32 kg or 1 piece of 23 kg depending on the route group, each up to 158 cm. Domestic China: 20 kg."],
      ["What is the China Southern carry-on size and weight?", "Each piece can be up to 8 kg and 55 x 40 x 20 cm (22 x 16 x 8 in). First and Business allow 2 pieces; Premium Economy and Economy allow 1 piece."],
      ["What is the China Southern baggage allowance in Business Class?", "On international and regional flights, 2 pieces of up to 32 kg each (First: 3 pieces of 32 kg). Domestic China flights: 30 kg in Business and 40 kg in First."],
      ["What is the China Southern checked baggage size limit?", "On international and regional flights, the sum of length + width + height of each piece must not exceed 158 cm."],
      ["Does China Southern Economy Light include a checked bag?", "No. Economy Light has no free checked baggage, and Economy Saver gets one piece less than Economy Standard."],
      ["What baggage does an infant get on China Southern?", "An infant without a seat gets 1 piece of 10 kg (22 lb), with the sum of three sides up to 115 cm, and a collapsible stroller can be checked free."]
    ],
    sources: [["https://csair.com/hk/en/tourguide/luggage_service/checked_luggage/free_checked/", "China Southern &mdash; Free checked baggage allowance"], ["https://csair.com/hk/en/tourguide/luggage_service/carryon_luggage/", "China Southern &mdash; Carry-on baggage allowance"]]
  },

  "Aer Lingus": {
    title: "Aer Lingus Baggage Allowance 2026: 10 kg Carry-On, Checked 20-23 kg",
    desc: "Aer Lingus baggage allowance 2026: 10 kg carry-on 55 x 40 x 24 cm, 20 kg checked bag within Europe, 23 kg transatlantic, none on Saver fares.",
    answer: "Aer Lingus passengers can bring a small personal item free, and a 10 kg carry-on bag of 55 x 40 x 24 cm that is included on some fares and costs from €9.99/£9.99 on others (or can be dropped at check-in for free on flights within Europe). Checked bags: Saver fares include none; within Europe Plus, Advantage and AerSpace include one 20 kg bag; transatlantic Smart and Flex include one 23 kg bag. No bag can weigh more than 32 kg.",
    stats: [["10 kg", "carry-on bag, 55 x 40 x 24 cm"], ["€9.99 / £9.99", "10 kg carry-on bag, from, when not included"], ["20 kg / 23 kg", "included bag, Europe / transatlantic"], ["32 kg", "most any single bag may weigh"]],
    sections: [
      { h: "🎒 Aer Lingus carry-on baggage allowance", p: "This applies to all Aer Lingus and Aer Lingus Regional flights within Europe (including Emerald Airlines flights numbered EI 3000-3999). A small personal item, such as a handbag or laptop bag, is included for every customer and must fit under the seat in front of you.",
        table: { head: ["Item", "Size", "Weight"], rows: [
          ["10 kg carry-on bag", "55 x 40 x 24 cm (21.5 x 15.5 x 9.5 in), including wheels and handles, must fit the airport gauge", "Up to 10 kg (22 lb)"],
          ["Small personal item", "40 x 30 x 20 cm (15.5 x 11.5 x 8 in)", "-"] ] },
        list: ["<strong>Within Europe, two ways to take the 10 kg bag:</strong> book a 10 kg carry-on online from €9.99/£9.99 and store it in the overhead locker, or drop it off free at check-in or the bag drop kiosk (Dublin, Shannon and London) and collect it at the carousel.",
          "<strong>Gate fee:</strong> if you bring a 10 kg bag to the boarding gate without having bought a carry-on bag or having one included, you are charged €35/£35 to place it in the hold.",
          "<strong>When the 10 kg bag is included:</strong> AerClub Silver, Platinum and Concierge members, AerClub Reward Flight bookings, Plus, Advantage and AerSpace fares and Economy fares bought via British Airways (not Saver), the adult travelling with an infant, and customers connecting to or from an Aer Lingus transatlantic flight or an interline partner flight. When it is included you must take it on board, and cannot drop it off at check-in.",
          "<strong>Transatlantic flights:</strong> 1 x 10 kg carry-on bag per passenger goes in the overhead locker, there is no free check-in option for it, and a small personal item is also included.",
          "<strong>Power banks:</strong> keep them on you or at your seat, not in the overhead locker; maximum two per person, 100 Wh or less, and not used or charged during the flight."] },
      { h: "🧳 Aer Lingus checked baggage: within Europe", p: "Checked baggage allowance is per customer, each way. Prebooking online is cheaper than paying at the airport, and you can book bags online up to two hours before departure.",
        table: { head: ["Fare", "Checked bag included"], rows: [
          ["Saver", "Not included"], ["Plus", "1 x 20 kg"], ["Advantage", "1 x 20 kg"], ["AerSpace", "1 x 20 kg"] ] },
        list: ["<strong>Bag options you can buy within Europe:</strong> 20 kg in 1 bag, 25 kg in 1 bag, or 40 kg in 2 bags (a combined total).",
          "<strong>Size and weight:</strong> up to 158 cm (length + width + height) per bag, and no single piece can weigh more than 32 kg.",
          "<strong>Excess baggage:</strong> €10 per kilo for weight over your personal allowance. You cannot upgrade a bag to a higher weight at the airport on the day of departure. Bag fees are non-refundable.",
          "<strong>Sharing:</strong> the 20 kg allowance can be pooled with a travel companion on the same booking who checks in at the same time. One collapsible buggy or stroller is free for an infant or child, plus one car seat, booster seat or travel cot."] },
      { h: "🇺🇸 Aer Lingus transatlantic checked baggage", p: "",
        table: { head: ["Fare", "Checked bags included"], rows: [
          ["Saver", "Not included"], ["Smart", "1 x 23 kg (50 lb)"], ["Flex", "1 x 23 kg (50 lb)"], ["Business and Business Flex", "3 bags, 69 kg (150 lb) combined"] ] },
        list: ["You can buy a 20 kg, 25 kg or 30 kg bag, up to 2 additional bags on Smart and Flex, and a maximum of 3 checked bags per customer per direction.",
          "<strong>Excess baggage fee</strong> for any bag weighing 23-32 kg (50-70 lb): EUR 75 / GBP 68 / USD 100 / CAD 100.",
          "Infant bookings (under 2) include a 10 kg checked baggage allowance plus a collapsible buggy and one car seat, booster seat or travel cot.",
          "For journeys between North America and the UK or continental Europe, the transatlantic allowance applies to all flights in a single reservation; separate reservations follow the European or transatlantic policy of each.",
          "<strong>Partner airlines:</strong> on a journey with another airline your allowance may differ; one bag can be booked online for itineraries with partner flights and more may be paid for at the airport."] }
    ],
    faq: [
      ["What is the Aer Lingus baggage allowance?", "A small personal item (40 x 30 x 20 cm) is free. A 10 kg carry-on bag of 55 x 40 x 24 cm is included on some fares or costs from €9.99/£9.99. Checked bags: Saver none; Plus, Advantage and AerSpace 1 x 20 kg within Europe; Smart and Flex 1 x 23 kg transatlantic."],
      ["What is the Aer Lingus carry-on size and weight?", "55 cm x 40 cm x 24 cm, up to 10 kg, and it must fit the gauge at the airport including wheels and handles. The personal item is up to 40 x 30 x 20 cm."],
      ["How much is the Aer Lingus carry-on bag fee?", "A 10 kg carry-on bag costs from €9.99/£9.99 when booked online on flights within Europe, or you can drop it off at check-in for free. Bringing it to the gate without having bought it costs €35/£35."],
      ["What is the Aer Lingus checked baggage weight limit?", "No single piece can weigh more than 32 kg (70 lb), and the maximum size is 158 cm (length + width + height). Excess baggage within Europe is €10 per kilo; transatlantic bags of 23-32 kg cost EUR 75 / GBP 68 / USD 100 / CAD 100."],
      ["Does Aer Lingus Saver include a checked bag?", "No. Saver fares include no checked bag, within Europe or transatlantic. AerClub benefits that add a free checked bag cannot be added to a Saver fare."],
      ["How many bags can I take on a transatlantic Aer Lingus flight?", "Smart and Flex include one 23 kg bag and you can add up to 2 more, for a maximum of 3 checked bags per direction. Business includes 3 bags with 69 kg combined."]
    ],
    sources: [["https://www.aerlingus.com/prepare/bags/checked-baggage/", "Aer Lingus &mdash; Checked baggage"], ["https://www.aerlingus.com/prepare/bags/carry-on-baggage/index.html", "Aer Lingus &mdash; Carry-on baggage"]]
  }
};
