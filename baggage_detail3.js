// Third batch of verified baggage entries (read on each airline's OWN pages on 2026-10-07): Virgin Australia, Icelandair, Eurowings, Japan Airlines, Philippine Airlines.
// Same rules as baggage_detail.js and BAGGAGE_DETAIL.md: state only what the airline's page states; no third-party numbers.
module.exports = {
  "Virgin Australia": {
    title: "Virgin Australia Baggage Allowance: 8 kg Carry-On, Checked by Fare",
    desc: "Virgin Australia baggage allowance 2026: 8 kg carry-on 56 x 36 x 23 cm plus a personal item, 1 x 23 kg checked on Choice and Flex, none on Lite.",
    answer: "Virgin Australia Economy passengers can bring one carry-on bag of up to 8 kg (56 x 36 x 23 cm) plus one personal item (45 x 33 x 20 cm). Checked baggage depends on the fare: Lite includes none, Choice and Flex include 1 x 23 kg, and Business includes 2 x 32 kg. Velocity Silver and Gold members get 2 bags on Choice and Flex, and no single checked bag may weigh more than 32 kg.",
    stats: [["8 kg", "Economy carry-on bag, 56 x 36 x 23 cm"], ["14 kg", "combined carry-on in Business and Economy X"], ["1 x 23 kg", "checked bag on Choice and Flex"], ["32 kg", "most a single checked bag may weigh"]],
    sections: [
      { h: "🎒 Virgin Australia carry-on baggage allowance", p: "Virgin Australia says carry-on allowances vary by cabin class and Velocity membership status. Velocity Red and Silver members receive the standard Economy allowance.",
        table: { head: ["Who", "Carry-on", "Personal item"], rows: [
          ["Economy, Velocity Red and Silver", "One standard bag, up to 8 kg, L56 x W36 x H23 cm", "1 item, L45 x W33 x H20 cm, fits under the seat in front"],
          ["Business, Economy X, Velocity Gold, Platinum and Platinum Plus", "One option, up to 14 kg combined, no single item over 8 kg", "1 item, L45 x W33 x H20 cm"] ] },
        list: ["<strong>The three options for the 14 kg allowance:</strong> one standard bag (8 kg, 56 x 36 x 23 cm); two small bags (14 kg combined, each up to 48 x 34 x 23 cm); or one standard bag plus one suit pack (14 kg combined, suit pack up to 114 x 60 x 11 cm).",
          "<strong>Personal item examples</strong> on Virgin Australia's page: purse or handbag, laptop or camera bag, small backpack, reading material.",
          "<strong>Partner-operated flights:</strong> guests on flights operated by Alliance Airlines or Link Airways on behalf of Virgin Australia receive the Economy carry-on allowance whatever their cabin or Velocity status. Charter guests receive the Economy allowance only.",
          "<strong>Musical instruments</strong> up to L85 x W34 x H23 cm count as one carry-on bag; a cello or guitar that is larger needs an extra seat booked through the Guest Contact Centre.",
          "<strong>Full lockers:</strong> if the overhead lockers are full, the team may ask you to check your carry-on at the gate. A bag over the size or weight limit cannot go in the cabin and must be checked, and baggage fees may apply."] },
      { h: "🧳 Virgin Australia checked baggage by fare", p: "This is the table for the Domestic and International Short Haul network. Velocity allowances depend on your status at the time of travel, not at booking.",
        table: { head: ["Fare", "Non-members and Red", "Silver and Gold", "Platinum", "Platinum Plus"], rows: [
          ["Lite", "None", "None", "None", "None"],
          ["Choice and Flex", "1 x 23 kg", "2 x 23 kg", "3 x 23 kg", "5 x 32 kg"],
          ["Economy Reward", "1 x 23 kg", "2 x 23 kg", "3 x 23 kg", "5 x 32 kg"],
          ["Business", "2 x 32 kg", "2 x 32 kg", "3 x 32 kg", "5 x 32 kg"] ] },
        list: ["<strong>Size and weight:</strong> each bag must not exceed 140 cm (55 in) in length + width + height, and no single item can weigh more than 32 kg. Heavier items must go as freight.",
          "<strong>Infants:</strong> an infant not occupying a seat gets 3 special infant items; an infant with their own seat gets 3 items, plus 1 x 23 kg on every fare except Lite. A pram, portable cot, car seat and baby capsule are examples of infant items.",
          "<strong>Wheelchairs and mobility aids</strong> for personal use are always carried free of charge.",
          "<strong>Partner flights and codeshares:</strong> Velocity Silver, Gold and Platinum extras vary with the operating carrier; for Virgin Australia codeshare bookings, Virgin Australia refers you to the non-member allowance."] },
      { h: "💲 Virgin Australia extra and overweight bag fees", p: "Prices are per piece (maximum 23 kg) and per sector, in the booking currency. Peak pricing applies on the dates listed below the table; every other date is off-peak.",
        table: { head: ["Domestic fee (per bag)", "Under 3 hours", "3+ hours"], rows: [
          ["Off-peak, online at flight booking", "$67", "$72"],
          ["Off-peak, online after booking", "$77", "$82"],
          ["Off-peak, online check-in", "$82", "$92"],
          ["Peak, online at flight booking", "$72", "$77"],
          ["Peak, online after booking", "$82", "$87"],
          ["At the airport (peak or off-peak)", "$120", "$170"] ] },
        list: ["<strong>Peak dates:</strong> 12 Dec 2025 to 27 Jan 2026, 3 to 19 Apr 2026, 27 Jun to 19 Jul 2026, 19 Sep to 11 Oct 2026, and 12 Dec 2026 to 27 Jan 2027.",
          "<strong>How many you can add:</strong> on domestic flights up to two extra bags can be bought online or through the Guest Contact Centre; more can be requested at the airport but are not guaranteed.",
          "<strong>Overweight:</strong> a bag over 23 kg and up to 32 kg is charged at the airport on the day of departure, $65 per piece on domestic flights, and AUD 110 (or NZD 110 from New Zealand) on international short haul flights departing Australia (or New Zealand), per piece, per one-way journey.",
          "<strong>International extra bags</strong> on short haul from Australia: AUD 87 online at flight booking, AUD 107 online after booking, AUD 112 or AUD 122 through the Guest Contact Centre, and AUD 170 at the airport. Virgin Australia publishes separate prices for New Zealand, Bali, Fiji, Vanuatu and Samoa, and may change its fees at any time."] }
    ],
    faq: [
      ["What is the Virgin Australia baggage allowance?", "Economy: one carry-on bag up to 8 kg (56 x 36 x 23 cm) plus one personal item (45 x 33 x 20 cm). Checked baggage by fare: Lite none, Choice and Flex 1 x 23 kg, Business 2 x 32 kg, with extra bags for Velocity members."],
      ["What is the Virgin Australia carry-on size and weight?", "The standard bag is up to 8 kg and L56 x W36 x H23 cm; the personal item is L45 x W33 x H20 cm and must fit under the seat in front. Business, Economy X and Gold, Platinum and Platinum Plus members can take up to 14 kg combined, no single bag over 8 kg."],
      ["Does Virgin Australia Lite include checked baggage?", "No. Lite includes no checked baggage for anyone, including Velocity Red, Silver, Gold, Platinum and Platinum Plus members. Choice and Flex include 1 x 23 kg for non-members and Red members."],
      ["What is the Virgin Australia checked baggage weight limit?", "No single item can weigh more than 32 kg, and each bag must be no more than 140 cm in length + width + height. A bag over 23 kg and up to 32 kg pays an overweight fee at the airport; $65 per piece domestically."],
      ["How much is an extra bag on Virgin Australia domestic flights?", "From $67 per bag online at flight booking off-peak on flights under 3 hours, up to $170 at the airport on flights of 3 hours or more. Peak pricing applies on the dates Virgin Australia lists."],
      ["Can Velocity members carry more on Virgin Australia?", "Gold, Platinum and Platinum Plus members get the 14 kg carry-on allowance; Red and Silver members receive the standard Economy allowance. For checked bags on Choice and Flex, Silver and Gold get 2 x 23 kg, Platinum 3 x 23 kg and Platinum Plus 5 x 32 kg."]
    ],
    sources: [["https://www.virginaustralia.com/au/en/travel-info/baggage/carry-on-baggage/", "Virgin Australia &mdash; Carry-on baggage"], ["https://www.virginaustralia.com/au/en/travel-info/baggage/checked-baggage/", "Virgin Australia &mdash; Checked baggage"]]
  },
  "Icelandair": {
    title: "Icelandair Baggage Allowance 2026: 10 kg Carry-On, 23 kg Checked",
    desc: "Icelandair baggage allowance 2026: 10 kg carry-on 55 x 40 x 20 cm plus personal item, 1 x 23 kg checked on Standard and Flex, none on Light.",
    answer: "Every Icelandair ticket includes one carry-on bag of up to 10 kg (22 lb) and 55 x 40 x 20 cm, plus a personal item of 40 x 30 x 15 cm. On international flights Economy Light includes no checked bag, Economy Standard and Flex include one bag up to 23 kg (50 lb), and Saga Premium includes one bag up to 32 kg (70 lb). No bag can weigh more than 32 kg.",
    stats: [["10 kg", "carry-on bag, 55 x 40 x 20 cm"], ["1 x 23 kg", "checked bag, Economy Standard and Flex"], ["$100", "added bag at the airport, US to Iceland"], ["32 kg", "most any bag may weigh"]],
    sections: [
      { h: "🎒 Icelandair carry-on baggage allowance", p: "Every ticket includes a carry-on bag (two if you book Saga Premium Flex) and a personal item that fits under the seat in front of you.",
        table: { head: ["Item", "Size", "Weight"], rows: [
          ["Carry-on bag", "55 x 40 x 20 cm (21.6 x 15.7 x 7.8 in), including wheels and handles", "10 kg (22 lb) on international flights; 6 kg (13 lb) within Iceland and to and from Greenland and the Faroe Islands"],
          ["Personal item", "40 x 30 x 15 cm (15.7 x 11.8 x 5.9 in)", "-"] ] },
        list: ["<strong>Saga Premium Flex:</strong> 2 carry-on bags of up to 10 kg each, plus 1 personal item.",
          "<strong>Too big or heavy:</strong> the bag must be checked in and baggage fees apply if your allowance is exceeded. A gate fee equal to the cost of excess baggage applies if your carry-on is checked in at the gate.",
          "<strong>Keep essentials with you:</strong> Icelandair recommends keeping medication, phones, electronics, passports and valuables in your personal item, because the carry-on may need to go in the hold.",
          "<strong>Infants (under 2):</strong> 1 checked bag (except in Economy Light) and no carry-on; a stroller and car seat are included."] },
      { h: "🧳 Icelandair checked baggage on international flights", p: "Your allowance depends on your fare. You can add a checked bag in Manage booking or the app up to 3 hours before departure on international flights.",
        table: { head: ["Fare", "Checked bags", "Carry-on and personal item"], rows: [
          ["Economy Light", "None", "1 carry-on up to 10 kg, 1 personal item"],
          ["Economy Standard", "1 bag up to 23 kg (50 lb)", "1 carry-on up to 10 kg, 1 personal item"],
          ["Economy Flex", "1 bag up to 23 kg (50 lb)", "1 carry-on up to 10 kg, 1 personal item"],
          ["Saga Premium", "1 bag up to 32 kg (70 lb)", "1 carry-on up to 10 kg, 1 personal item"],
          ["Saga Premium Flex", "2 bags up to 32 kg (70 lb) each", "2 carry-ons up to 10 kg each, 1 personal item"] ] },
        list: ["<strong>Booked Saga Premium before 10 August 2026:</strong> 2 checked bags of up to 32 kg each are included.",
          "<strong>Saga Gold and Silver members:</strong> 1 extra checked bag is included.",
          "<strong>Children (2-11):</strong> the same allowance as adults, and a folding stroller is free. Wheelchairs and other mobility equipment are checked free of charge.",
          "<strong>Size:</strong> a bag you can drop at the normal desk must be under 158 cm (62 in) in height + length + depth. Larger items go to the desk for odd-sized items."] },
      { h: "💲 Icelandair extra and heavy bag fees", p: "These are the prices charged at the airport for flights departing the United States. Pre-purchasing in Manage booking is cheaper: Icelandair says you can save up to 44% against airport prices.",
        table: { head: ["From the United States", "Added bag", "Heavy bag"], rows: [
          ["To Iceland", "$100", "$85"], ["To Europe", "$130", "$110"], ["To Greenland", "$190", "$160"] ] },
        list: ["<strong>Other departures:</strong> Icelandair also lists airport prices from Canada (for example C$135 added bag to Iceland), Europe (€80), Iceland (10,900 ISK to Europe) and Greenland.",
          "<strong>Weight limits:</strong> added bags follow the same weight limits as included bags. A bag over the limit pays a heavy bag fee at the airport. No bag can exceed 32 kg on any flight, except Greenland flights where the limit is 30 kg.",
          "<strong>How many:</strong> passengers can check up to 10 bags on all flights except those to Greenland, where the maximum is one additional checked bag.",
          "<strong>Partner flights:</strong> additional baggage for connecting flights with other airlines must be bought at the airport, and fees follow the most significant carrier on the ticket. Excess baggage fees are non-refundable."] }
    ],
    faq: [
      ["What is the Icelandair baggage allowance?", "One carry-on bag up to 10 kg (55 x 40 x 20 cm) and one personal item on every ticket. Checked bags on international flights: Economy Light none, Economy Standard and Flex 1 x 23 kg, Saga Premium 1 x 32 kg."],
      ["What is the Icelandair carry-on size and weight?", "55 cm tall, 40 cm wide and 20 cm deep including wheels and handles, up to 10 kg on international flights. Within Iceland and to and from Greenland and the Faroe Islands the limit is 6 kg. The personal item is 40 x 30 x 15 cm."],
      ["Does Icelandair Economy Light include a checked bag?", "No. Economy Light includes a carry-on up to 10 kg and a personal item but no checked bag. You can add one in Manage booking up to 3 hours before an international flight."],
      ["What is the Icelandair checked baggage weight limit?", "Included bags are up to 23 kg on Economy Standard and Flex and 32 kg on Saga Premium. No bag can exceed 32 kg (30 kg on Greenland flights), and the combined height, length and depth must be under 158 cm."],
      ["How much is an extra bag on Icelandair?", "At the airport, an added bag from the United States costs $100 to Iceland, $130 to Europe and $190 to Greenland. Pre-purchasing online is cheaper, by up to 44% according to Icelandair."],
      ["How many bags can I check with Icelandair?", "Up to 10 bags on all flights except Greenland, where the maximum is one additional checked bag. Contact Icelandair Cargo if you need to travel with more than 10."]
    ],
    sources: [["https://www.icelandair.com/support/baggage/overview/", "Icelandair &mdash; Baggage: carry-on, checked baggage, additional and heavy baggage"]]
  },
  "Eurowings": {
    title: "Eurowings Baggage 2026: Hand 8 kg, Checked 23 kg on Smart",
    desc: "Eurowings baggage allowance 2026: small underseat bag free on every fare, 55 x 40 x 23 cm 8 kg cabin bag, 1 x 23 kg included on Smart, from €18 on Basic.",
    answer: "Every Eurowings fare includes one small underseat bag of 40 x 30 x 25 cm. A large cabin bag (55 x 40 x 23 cm, up to 8 kg) is included on Smart and BIZclass (2 bags) and costs extra on Basic. Checked baggage: Basic includes none (a 23 kg bag is bookable from €18 / £16 online), Smart includes 1 x 23 kg, and BIZclass includes 2 x 32 kg. A maximum of 5 checked bags of up to 32 kg each can be carried per person.",
    stats: [["40 x 30 x 25 cm", "small underseat bag, every fare"], ["8 kg", "large cabin bag, 55 x 40 x 23 cm"], ["1 x 23 kg", "checked bag included on Smart"], ["from €18", "23 kg bag on Basic, booked online"]],
    sections: [
      { h: "🎒 Eurowings hand baggage allowance", p: "Eurowings splits hand baggage into a small underseat bag and a large cabin bag; which of them is included depends on the fare.",
        table: { head: ["Fare", "Small underseat bag", "Large cabin bag", "Reserved overhead space"], rows: [
          ["Basic", "Included", "Not included, bookable from €21 / £18 (depending on route)", "Not included"],
          ["Smart", "Included", "1 included", "Not included"],
          ["BIZclass", "Included", "2 included", "Included"] ] },
        list: ["<strong>Size:</strong> the small underseat bag is 40 x 30 x 25 cm (a laptop bag, purse or small backpack); the large cabin bag is up to 55 x 40 x 23 cm and 8 kg.",
          "<strong>Infants:</strong> a second small underseat bag can be taken on board free of charge for an infant (0-23 months) seated on your lap.",
          "<strong>Full flights:</strong> on fully booked flights Eurowings may ask you (unless you fly BIZclass) to check in your hand baggage. This is free if it meets the size and weight restrictions, and you collect it from the carousel on arrival."] },
      { h: "🧳 Eurowings checked baggage by fare", p: "These are the prices when booked online up to two hours before departure; Eurowings says you save up to 50% against booking at the airport. Prices are per leg and person and depend on the route.",
        table: { head: ["Checked bag", "Basic", "Smart", "BIZclass"], rows: [
          ["First bag up to 12 kg", "From €17 / £15", "Not included", "Not included"],
          ["First bag up to 23 kg", "From €18 / £16 / $21", "Included", "See 32 kg bag"],
          ["Second bag up to 23 kg", "From €75 / £66", "From €75 / £65", "See 32 kg bag"],
          ["First bag up to 32 kg", "From €67 / £59", "Not included", "Included"],
          ["Second bag up to 32 kg", "From €125 / £108", "From €125 / £108", "Included"] ] },
        list: ["<strong>Maximum:</strong> a maximum of 5 checked bags of up to 32 kg each per person can be transported. Anything you add to the free allowance of your fare counts as excess baggage.",
          "<strong>Excess at the airport:</strong> an excess baggage surcharge of €15 / £13 / 14 CHF / $17 per additional piece of baggage and per kilogram is charged at the airport.",
          "<strong>Oversize and special baggage:</strong> a surcharge is required on every fare and it is subject to availability; the price depends on the service."] },
      { h: "🎿 Eurowings sports equipment and special baggage", p: "Each piece of sports baggage may weigh up to 32 kg.",
        table: { head: ["Item", "Price"], rows: [
          ["Skis and snowboards with accessories", "From €30"],
          ["Golf bags, bicycles, diving equipment, surfboards, musical instruments", "From €50"] ] },
        list: ["Transport of ski equipment is up to 32 kg: skis or snowboards (maximum 3 sets or boards per person) including accessories such as poles and ski or snowboard boots.",
          "Sports baggage (for example a bicycle, sport weapon, ski or snowboard, up to 32 kg) is free of charge when you pay with a Eurowings credit card on Eurowings flights."] }
    ],
    faq: [
      ["What is the Eurowings baggage allowance?", "Every fare includes a small underseat bag (40 x 30 x 25 cm). Smart adds a large cabin bag (55 x 40 x 23 cm, 8 kg) and 1 x 23 kg checked; BIZclass includes 2 large cabin bags and 2 x 32 kg checked; Basic includes neither."],
      ["What is the Eurowings hand baggage size and weight limit?", "The small underseat bag is 40 x 30 x 25 cm. The large cabin bag is up to 55 x 40 x 23 cm and 8 kg; it is included on Smart and BIZclass and can be added to Basic for a surcharge."],
      ["Does Eurowings Basic include a checked bag?", "No. Basic includes no checked bag; a bag up to 12 kg is bookable from €17 / £15, up to 23 kg from €18 / £16 and up to 32 kg from €67 / £59 when booked online."],
      ["What is the Eurowings checked baggage weight limit?", "Each checked bag can weigh up to 32 kg, and a maximum of 5 checked bags of up to 32 kg each can be transported per person."],
      ["How much is an extra bag on Eurowings?", "A second 23 kg bag is from €75 / £65-66 online, and a second 32 kg bag from €125 / £108. At the airport, excess baggage is charged €15 / £13 per additional piece and per kilogram."],
      ["How much does it cost to take skis or a bike on Eurowings?", "Skis and snowboards with accessories are from €30 and other sports baggage such as golf, bicycles, diving equipment, surfboards and instruments from €50, up to 32 kg per piece."]
    ],
    sources: [["https://www.eurowings.com/en/information/baggage.html", "Eurowings &mdash; Baggage regulations"], ["https://www.eurowings.com/en/information/baggage/checked-baggage.html", "Eurowings &mdash; Checked baggage"]]
  },
  "Japan Airlines": {
    title: "JAL Baggage Allowance 2026: 10 kg Carry-On, 2 x 23 kg Checked",
    desc: "Japan Airlines baggage allowance 2026: two cabin items up to 10 kg total, 2 x 23 kg free checked in Economy, 3 x 32 kg in Business, 203 cm size limit.",
    answer: "On Japan Airlines international flights you can carry two items on board, a personal item plus one bag of up to 55 x 40 x 25 cm (115 cm total), with a combined weight of 10 kg. Checked baggage is free in two pieces of 23 kg each in Economy and Premium Economy, and three pieces of 32 kg each in Business and First. Each bag must be within 203 cm in length + width + height.",
    stats: [["10 kg", "total weight of both cabin items"], ["2 x 23 kg", "free checked, Economy and Premium Economy"], ["3 x 32 kg", "free checked, Business and First"], ["203 cm", "length + width + height per bag"]],
    sections: [
      { h: "🎒 JAL carry-on baggage allowance", p: "This is JAL's rule for international flights: a total of two items, and the 10 kg limit covers both of them together.",
        table: { head: ["Item", "Size", "Weight"], rows: [
          ["Personal belonging (shopping bag, handbag, shoulder bag)", "Must fit under the seat in front of you", "Counts toward the 10 kg total"],
          ["One additional bag", "W 55 x H 40 x D 25 cm, and 115 cm or less in length + width + height (22 x 16 x 10 in)", "Total of both items within 10 kg (22 lb)"] ] },
        list: ["Dimensions include handles, casters and wheels.",
          "<strong>Too big or heavy:</strong> if your bag is oversized, overweight or cannot be stowed in the cabin, it may need to be checked in the cargo compartment at the boarding gate or cabin.",
          "<strong>Stowing:</strong> you stow your bag yourself under the seat in front or in the overhead compartment. Leaving baggage in the aisle or at emergency exits is prohibited by law, and passengers in an emergency exit row may not place carry-on baggage at their feet or on their lap."] },
      { h: "🧳 JAL free checked baggage allowance", p: "This is the standard allowance on JAL international flights. Different rules apply on itineraries to or from the United States and Canada, and on codeshare flights or flights operated by another airline.",
        table: { head: ["Cabin", "Free pieces", "Weight per piece"], rows: [
          ["First and Business", "3 pieces", "32 kg"],
          ["Premium Economy and Economy", "2 pieces", "23 kg"] ] },
        list: ["<strong>Size:</strong> each piece must be within 203 cm in total outside dimensions (length + width + height), including wheels and handles.",
          "<strong>JMB FLY ON and JGC members</strong> on a JAL Group operated flight: 4 pieces of 32 kg in First and Business, and 3 pieces of 32 kg in Premium Economy and Economy.",
          "<strong>Infants:</strong> an infant in their own seat follows the allowance of the cabin class. An infant not in their own seat gets 1 piece, with the weight limit of the accompanying adult's cabin (32 kg in First and Business, 23 kg in Premium Economy and Economy). A stroller, baby carriage and child seat can be checked without charge.",
          "<strong>Weight on some routes:</strong> on London, Paris, Helsinki, Dubai and Australia routes, a piece of checked baggage over 32 kg cannot be accepted in principle.",
          "<strong>Needs enquiry:</strong> baggage over 203 cm, large baggage that cannot be laid on its side and is higher than 150 cm, and large baggage or musical instruments over 32 kg."] },
      { h: "💲 JAL excess, overweight and oversize charges", p: "Charges depend on your route and are per piece. JAL lists two groups: the first is headed &quot;Between Japan, Asia, India, Oceania and Hawaii, North/Central/South America, Europe, Russia (Moscow), Middle East, Africa&quot; and the second &quot;Between Japan and Asia, Guam, Russia (Vladivostok), Oceania&quot;.",
        table: { head: ["Charge", "First group (long-haul)", "Second group (Japan, Asia, Guam, Vladivostok, Oceania)"], rows: [
          ["Additional bag", "JPY 20,000 (USD 200 / CAD 200)", "JPY 10,000 (USD 100 / CAD 100)"],
          ["Overweight 23-32 kg", "JPY 10,000 (USD 100 / CAD 100)", "JPY 6,000 (USD 60 / CAD 60)"],
          ["Overweight 32-45 kg", "JPY 60,000 (USD 600 / CAD 600)", "JPY 30,000 (USD 300 / CAD 300)"],
          ["Oversize, over 203 cm", "JPY 20,000 (USD 200 / CAD 200)", "JPY 10,000 (USD 100 / CAD 100)"] ] },
        list: ["<strong>Example from JAL:</strong> an Economy passenger flying Los Angeles to Tokyo with 3 bags, one of them overweight (23-32 kg), pays USD 200 for the additional bag and USD 100 for overweight, USD 300 in total.",
          "<strong>Limits:</strong> the maximum number of checked bags is your free allowance plus 7 (10 bags in First and Business, 9 in Premium Economy and Economy), and each piece must not exceed 45 kg.",
          "<strong>Within Japan</strong> (when the international conditions of carriage apply): an additional bag is JPY 5,000 (JPY 5,500 with tax) and overweight 23-32 kg is JPY 1,000 (JPY 1,100 with tax).",
          "JMB miles can be used to pay excess baggage charges on JAL international flights."] }
    ],
    faq: [
      ["What is the JAL baggage allowance?", "Cabin: a personal item plus one bag (55 x 40 x 25 cm), 10 kg total. Checked on international flights: 2 x 23 kg in Economy and Premium Economy, 3 x 32 kg in Business and First, each within 203 cm."],
      ["What is the JAL carry-on size and weight limit?", "The extra bag can be up to 55 x 40 x 25 cm and 115 cm in length + width + height including handles and wheels. Both items together must weigh 10 kg (22 lb) or less."],
      ["How many checked bags are free on JAL Economy?", "Two pieces of up to 23 kg each on international flights. JMB FLY ON and JGC members get 3 pieces of 32 kg each in Economy on JAL Group operated flights."],
      ["What is the JAL checked baggage weight and size limit?", "Free pieces are 23 kg in Economy and Premium Economy, 32 kg in Business and First, and 203 cm in length + width + height. No piece can exceed 45 kg, and on London, Paris, Helsinki, Dubai and Australia routes no piece over 32 kg is accepted in principle."],
      ["How much is an extra bag on JAL?", "An additional bag is JPY 20,000 (USD 200) on JAL's long-haul group of routes and JPY 10,000 (USD 100) between Japan and Asia, Guam, Vladivostok and Oceania. Overweight 23-32 kg is JPY 10,000 or JPY 6,000 by route group."],
      ["Do JAL baggage rules differ on US and Canada flights?", "Yes. For tickets to or from the US and Canada, JAL says the baggage provisions of one airline apply to the whole itinerary under US and Canadian law, so check the allowance on your ticket."]
    ],
    sources: [["https://www.jal.co.jp/jp/en/inter/baggage/checked/", "JAL &mdash; International flights: checked baggage"], ["https://www.jal.co.jp/jp/en/inter/baggage/inflight/", "JAL &mdash; Carry-on baggage"]]
  }
};
