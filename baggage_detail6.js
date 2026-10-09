// United baggage entry, read on united.com's OWN pages (Checked bags + Prepay for your checked bags, en-us) on 2026-10-09. Same rules as BAGGAGE_DETAIL.md.
// The standard first/second bag prices are NOT on the page (they sit in United's fee calculator), so no price is stated for them.
module.exports = {
  "United": {
    title: "United Baggage Allowance 2026: Checked Bag 62 in, 50 lb, Fees",
    desc: "United baggage allowance 2026: checked bag max 62 total inches (30 x 20 x 12 in) and 50 lb in Economy, 70 lb in Business, Basic Economy bag fees $50 lobby / $75 gate, free bags by status.",
    answer: "United's checked bag can measure up to 62 total inches (30 x 20 x 12 in, handles and wheels included) and weigh 50 lb in Economy and Premium Economy or 70 lb in Business, First and Polaris. Whether a bag is free depends on your ticket, route and MileagePlus status. Basic Economy includes only a personal item: a carry-on checked for a fee starts at $50 in the lobby and $75 at the gate.",
    stats: [
      ["62 in", "total size of a checked bag (30 x 20 x 12 in)"],
      ["50 lb", "Economy and Premium Economy bag"],
      ["70 lb", "Business, First, Polaris, and Premier members"],
      ["115 in", "most United accepts: length + width + height"]
    ],
    sections: [
      { h: "📏 Checked bag size: 62 total inches, handles and wheels included",
        p: "United's checked bag limit is one number you can measure at home: 30 x 20 x 12 in (76 x 52 x 30 cm), or 62 total inches (length + width + height) including handles and wheels. A bag over that is charged as oversized, and United will not accept anything above 115 total inches (292 cm).",
        list: ["Measure the whole bag with wheels and handles, not just the shell.",
          "If a bag is both oversized and overweight, each charge applies separately.",
          "United says some destinations and some travel periods do not accept oversized, overweight or extra bags at all. It keeps a separate list on united.com."] },
      { h: "⚖️ Weight limit: it depends on your cabin and your MileagePlus status",
        p: "United gives you the higher of the two limits when your cabin and your status differ. This is the chart on united.com:",
        table: { head: ["Your cabin or status", "Maximum weight per bag"], rows: [
          ["United Economy, Premium Economy", "50 lb (23 kg)"],
          ["United Business, United First, United Polaris business class", "70 lb (32 kg)"],
          ["MileagePlus Premier Silver, Gold, Platinum, 1K", "70 lb (32 kg)"],
          ["Star Alliance Gold member, flying Business", "70 lb (32 kg)"],
          ["Star Alliance Gold member, flying Economy", "50 lb (23 kg)"] ] },
        list: ["United will not accept a bag over 100 lb (45 kg). Musical instruments are the exception: up to 165 lb (75 kg). Assistive devices are always accepted."] },
      { h: "🎟️ Basic Economy: personal item only, so a carry-on is a checked bag",
        p: "Basic Economy tickets include one personal item and no carry-on bag. If you bring a carry-on anyway, you must check it for a fee. United's page gives two price sets, depending on when you bought the ticket:",
        table: { head: ["Ticket bought", "Checked in the airport lobby", "Checked at the gate"], rows: [
          ["On or after 3 April 2026", "from $50", "from $75"],
          ["Before 3 April 2026", "from $40", "from $65"] ] },
        list: ["United words it as fees that \"start at\" these amounts, so treat them as the lowest price. The gate price is the higher one in both rows, so sort the bag out before you reach the gate."] },
      { h: "🧾 Why the fee changed depending on when and where you bought",
        p: "United raised checked bag fees in steps, and each step applies by ticket purchase date, not travel date. This is the order on united.com:",
        table: { head: ["Tickets bought on or after", "Which flights"], rows: [
          ["3 April 2026", "Domestic, short U.S.-Latin America, and U.S. to Canada, the Caribbean and Mexico"],
          ["12 May 2026", "Many flights between the U.S. and Africa, Asia, Europe and South America"],
          ["21 July 2026", "U.S. to Japan, Hong Kong and the Philippines, and flights between countries in Asia"] ] },
        list: ["A ticket you bought before the date keeps the earlier fee, so check the purchase date on your confirmation email, not the flight date."] },
      { h: "✅ Who checks bags for free",
        p: "Free bags apply only on flights operated by United and United Express. If you qualify under more than one exemption, the larger one applies. A Premier member can share the benefit with up to nine other travellers on the same itinerary.",
        table: { head: ["Route and cabin", "Silver", "Gold", "Platinum", "1K"], rows: [
          ["Economy: U.S. to the continental U.S., Alaska, Hawaii, Canada, Mexico, Caribbean, Central America", "1 bag", "2 bags", "3 bags", "3 bags"],
          ["Economy: U.S. to South America, Asia, Australia, New Zealand, Europe, Middle East, Africa", "2 bags", "3 bags", "3 bags", "3 bags"],
          ["Any premium cabin", "3 bags", "3 bags", "3 bags", "3 bags"] ] },
        list: ["Every free bag in the chart can weigh up to 70 lb (32 kg).",
          "Some Central American and Caribbean cities carry their own rule: 2 bags at 70 lb each from San Salvador, Havana, Santo Domingo, Managua, San Pedro Sula, Tegucigalpa and Guatemala City, all year."] },
      { h: "🚫 What counts as a bag, and what United will refuse",
        p: "United checks that an item qualifies as a bag before it accepts it. An item must:",
        list: ["be fully enclosed and made of a material that withstands normal handling",
          "meet all size and weight limits",
          "not be several bags tied together as one checked item",
          "not have protrusions, sharp points or removable straps",
          "not contain items banned in the cargo hold, such as lithium batteries or personal vaporizers",
          "not be made of Styrofoam, unless the box is packed inside another container with a secure lid"] },
      { h: "🔄 Connecting flights, prepaying and drop-off",
        p: "On most trips with a connection your checked bags go to the last stop on your ticket. You collect and re-check them at the connection if:",
        list: ["you have a layover",
          "the connection involves an overnight stay",
          "the connecting flight leaves more than 12 hours after you arrive at the airport",
          "you connect to a trip on a separate ticket and that flight is not with a Star Alliance partner",
          "<strong>Prepay online:</strong> on some routes you pay less if you prepay more than 24 hours before the flight. Within the U.S. you can use miles to pay before check-in.",
          "<strong>Bag drop shortcut:</strong> check the bag during online or app check-in, then use the bag drop shortcut area at the airport."] }
    ],
    faq: [
      ["What is United's checked bag size limit?", "30 x 20 x 12 in (76 x 52 x 30 cm), or 62 total inches including handles and wheels. United accepts bags up to 115 total inches, but charges for oversized ones."],
      ["What is the United checked bag weight limit?", "50 lb (23 kg) in Economy and Premium Economy, 70 lb (32 kg) in Business, First and Polaris. Premier Silver, Gold, Platinum and 1K members also get 70 lb."],
      ["How much is a bag on a United Basic Economy ticket?", "Basic Economy includes a personal item only. A carry-on checked for a fee starts at $50 in the airport lobby and $75 at the gate for tickets bought on or after 3 April 2026 ($40 and $65 before that date)."],
      ["How many free checked bags do United Premier members get?", "On Economy trips within North America, Central America and the Caribbean: Silver 1, Gold 2, Platinum and 1K 3. On Economy trips to Europe, Asia and the other long-haul regions: Silver 2, Gold, Platinum and 1K 3. Every bag can weigh up to 70 lb."],
      ["What is the maximum weight United will accept?", "100 lb (45 kg) per bag. Musical instruments up to 165 lb (75 kg) and all assistive devices are exceptions."],
      ["Do I have to collect my bag on a connecting flight?", "Usually not: bags go to your last stop. You must re-check them after a layover, an overnight stay, a connection of more than 12 hours, or a separate ticket on a non-Star Alliance airline."]
    ],
    sources: [
      ["https://www.united.com/en/us/fly/baggage/checked-bags.html", "United &mdash; Checked bags"],
      ["https://www.united.com/en/us/fly/baggage/prepay-for-your-checked-bags.html", "United &mdash; Prepay for your checked bags"]
    ]
  },

  "Emirates": {
    title: "Emirates Baggage Allowance 2026: Weight vs Piece Rule, 7 kg Carry-On",
    desc: "Emirates baggage allowance 2026: Economy 20-35 kg by fare on most routes, 2 x 23 kg to the Americas and Africa, 7 kg carry-on 55 x 38 x 22 cm, 203 cm size limit.",
    answer: "Emirates uses two systems. On most routes you get a total weight by fare and class (Economy 20 kg Special, 25 kg Saver, 30 kg Flex, 35 kg Flex Plus; Business 40 kg; First 50 kg), with no bag over 32 kg. On flights to and from the Americas and Africa you get a number of pieces instead, mostly two bags of 23 kg in Economy. Carry-on is 7 kg, 55 x 38 x 22 cm in Economy.",
    stats: [
      ["20-35 kg", "Economy total weight by fare (weight routes)"],
      ["2 x 23 kg", "Economy Saver, Flex, Flex Plus to the Americas and Africa"],
      ["32 kg", "heaviest single checked bag (weight routes)"],
      ["55 x 38 x 22 cm", "carry-on size, 7 kg in Economy"]
    ],
    sections: [
      { h: "🧭 First find out which Emirates rule applies to your flight",
        p: "Emirates does not give one allowance for everyone. Your flight decides whether your free allowance is counted in kilograms or in bags:",
        table: { head: ["System", "Where it applies", "How the allowance works"], rows: [
          ["Weight concept", "Most routes", "A total weight for all your bags; bring as many bags as you like"],
          ["Piece concept", "Flights to and from the Americas and flights originating in Africa (flights into Africa too, for tickets issued on or after 9 August 2021)", "A set number of bags, each with its own weight limit"] ] },
        list: ["If you travel from Australia, New Zealand or Asia to the Americas with a sector in Europe or a Dubai stopover longer than 24 hours, the weight concept applies to the whole ticket.",
          "Skywards Platinum and Gold members get one extra piece (23 kg in Economy, 32 kg in Business and First) on piece routes flown on Emirates only. Platinum, Gold and Silver members get extra weight on weight routes.",
          "For your exact journey Emirates points you to Manage Your Booking."] },
      { h: "⚖️ Weight routes: how many kilograms you get",
        p: "On weight routes you can check as many bags as you like, as long as the total stays inside your allowance and each bag is no heavier than 32 kg (70.5 lb).",
        table: { head: ["Class", "Special", "Saver", "Flex", "Flex Plus"], rows: [
          ["Economy", "20 kg", "25 kg", "30 kg", "35 kg"] ] },
        list: ["Economy Saver is 30 kg for journeys starting in Australia and New Zealand (tickets issued from 26 November 2019) and from Europe to Australia or New Zealand (tickets issued from 5 July 2024).",
          "Premium Economy 35 kg, Business 40 kg, First 50 kg.",
          "Each bag may measure up to 203 cm (length + width + height). Anything bigger must go as cargo."] },
      { h: "🎒 Piece routes: the Americas and Africa",
        p: "On piece routes each bag has a weight cap, and Economy depends on your fare:",
        table: { head: ["Class", "To and from the Americas and Africa", "Within the Americas and between the US and Europe"], rows: [
          ["Economy Special", "1 piece, 23 kg", "1 piece, 23 kg"],
          ["Economy Saver", "2 pieces, 23 kg each", "1 piece, 23 kg"],
          ["Economy Flex, Flex Plus", "2 pieces, 23 kg each", "2 pieces, 23 kg each"],
          ["Premium Economy", "2 pieces, 23 kg each", "2 pieces, 23 kg each"],
          ["Business, First", "2 pieces, 32 kg each", "2 pieces, 32 kg each"] ] },
        list: ["Each bag may measure up to 150 cm (59 in) in total. Between 150 cm and 203 cm it is charged as oversize; over 203 cm it must go as cargo.",
          "Africa exception: if your trip starts in Africa and your ticket was issued before 11 May 2020, Economy Special gets two 23 kg pieces."] },
      { h: "💼 Emirates carry-on: 7 kg in Economy, 10 kg in Premium Economy",
        p: "Cabin allowances depend on your route and class. Emirates gives these figures:",
        table: { head: ["Class", "Weight", "Size"], rows: [
          ["Economy", "7 kg", "55 x 38 x 22 cm (21.6 x 14.9 x 8.6 in)"],
          ["Premium Economy", "10 kg", "55 x 38 x 22 cm"],
          ["Business and First", "7 kg bag + 7 kg briefcase or garment bag", "Bag 55 x 38 x 22 cm; briefcase 45 x 35 x 20 cm; garment bag max 20 cm thick folded"] ] },
        list: ["Boarding in India: one carry-on of up to 115 cm total in Economy and Premium Economy.",
          "Flights leaving Brazil: up to 10 kg of cabin baggage.",
          "Bags must fit under the seat or in an overhead locker, never in the aisle, behind your legs or in front of an emergency exit."] },
      { h: "🧴 Liquids, powders and medicine in the cabin",
        p: "Emirates repeats the standard liquid rule and adds a powder rule for some flights:",
        list: ["Liquids, gels, aerosols and pastes: containers of 100 ml or less in one transparent resealable bag of 1 litre or less, one bag per person. Larger containers are refused even if partly filled.",
          "Baby milk or food, medicines and special dietary items are exempt, but you must be able to show proof of what they are.",
          "On flights to, from or through the US, and from or through Australia and New Zealand, powders in containers of 350 ml or more cannot go in the cabin. Baby formula and prescription medicines are exempt.",
          "Medicine that needs cooling cannot go in the galley chillers: use an insulated pouch. Cabin crew can give ice on request."] },
      { h: "📦 Many bags, interline tickets and duty free",
        p: "",
        list: ["<strong>More than 15 bags:</strong> Emirates may not fly them all with you; the extra bags follow on the next available flight and are delivered within five days (not applicable to flights to and from the United States).",
          "<strong>First airline is not Emirates (US departures):</strong> different rules may apply, because the partner airline's allowance covers its own flights.",
          "<strong>Duty free:</strong> reasonable quantities of liquor, cigarettes and perfume are allowed in every class, but airport liquid rules may stop them at security."] }
    ],
    faq: [
      ["What is the Emirates baggage allowance?", "It depends on the route. Most routes use a total weight: Economy 20 kg (Special), 25 kg (Saver), 30 kg (Flex) or 35 kg (Flex Plus), Premium Economy 35 kg, Business 40 kg, First 50 kg. Flights to and from the Americas and Africa use pieces, mostly two bags of 23 kg in Economy."],
      ["What is the Emirates carry-on size and weight?", "Economy 7 kg, Premium Economy 10 kg, each up to 55 x 38 x 22 cm. Business and First get a 7 kg bag plus a 7 kg briefcase or garment bag."],
      ["What is the maximum weight of one Emirates checked bag?", "32 kg (70.5 lb) on weight-concept routes. On piece routes the cap is 23 kg per bag in Economy and Premium Economy, and 32 kg in Business and First."],
      ["How big can an Emirates checked bag be?", "Up to 203 cm (length + width + height) on weight routes. On piece routes 150 cm is the standard limit; 150-203 cm is charged as oversize, and anything bigger must go as cargo."],
      ["How many bags can I check on Emirates to the USA?", "Flights to and from the Americas use the piece concept. Economy Special gets one 23 kg bag, Saver, Flex and Flex Plus get two 23 kg bags (on flights between the US and Europe, Saver gets one). Business and First get two bags of 32 kg."],
      ["Do Emirates Skywards members get extra baggage?", "Yes. Platinum, Gold and Silver get extra weight on weight routes; on piece routes flown on Emirates only, Platinum and Gold get one extra piece (23 kg Economy, 32 kg Business and First)."]
    ],
    sources: [
      ["https://www.emirates.com/us/english/before-you-fly/baggage/checked-baggage/", "Emirates &mdash; Checked baggage"],
      ["https://www.emirates.com/us/english/before-you-fly/baggage/cabin-baggage-rules/", "Emirates &mdash; Carry-on baggage rules"]
    ]
  },

  "Qatar Airways": {
    title: "Qatar Airways Baggage Allowance 2026: Carry-On 50 x 37 x 25 cm, 7 kg",
    desc: "Qatar Airways baggage allowance 2026: carry-on 1 piece 7 kg (50 x 37 x 25 cm), checked 20-35 kg by Economy fare, 2 x 23 kg to the Americas and Africa, 40-50 kg in Business and First.",
    answer: "Qatar Airways includes checked baggage on every flight. In Economy the carry-on is one piece up to 7 kg, 50 x 37 x 25 cm. Checked baggage is a total weight on most routes (Economy Lite 20 kg, Classic 25 kg, Convenience 30 kg, Comfort 35 kg; Business 40 kg; First 50 kg) and a number of bags on flights to and from Africa and the Americas (1 x 23 kg in Economy Lite, 2 x 23 kg in the other Economy fares, 2 x 32 kg in Business and First).",
    stats: [
      ["50 x 37 x 25 cm", "carry-on size, 7 kg in Economy"],
      ["20-35 kg", "Economy checked weight by fare (most routes)"],
      ["2 x 23 kg", "Economy Classic and above to the Americas and Africa"],
      ["32 kg", "heaviest single checked bag"]
    ],
    sections: [
      { h: "🧭 Which Qatar Airways rule applies: weight or pieces",
        p: "Qatar Airways counts your checked allowance in one of two ways, and the route decides which:",
        table: { head: ["Route", "How the allowance is counted", "Per-bag limit"], rows: [
          ["Flights to or from Africa or the Americas", "Number of pieces, set by your fare", "23 kg per piece in Economy; 32 kg in Business and First"],
          ["All other routes", "Total weight for all your bags, with no limit on the number of pieces", "No single bag over 32 kg (70 lb)"] ] },
        list: ["If a booking has several flights in different cabins, the allowance of the highest cabin applies to the whole journey.",
          "Qatar Airways marks some routes as exceptions. The allowance for your own trip is shown when you book, in the confirmation email, and in Manage booking or the app."] },
      { h: "🎒 Economy checked baggage by fare",
        p: "Economy has four fares on Qatar Airways, and they are the only thing that changes the allowance inside the cabin:",
        table: { head: ["Economy fare", "Most routes (total weight)", "To or from Africa or the Americas"], rows: [
          ["Lite", "20 kg (44 lb)", "1 piece up to 23 kg (50 lb)"],
          ["Classic", "25 kg (55 lb)", "2 pieces up to 23 kg each"],
          ["Convenience", "30 kg (66 lb)", "2 pieces up to 23 kg each"],
          ["Comfort", "35 kg (77 lb)", "2 pieces up to 23 kg each"] ] },
        list: ["On weight routes you can bring as many bags as you like, as long as the total is within your allowance and no bag exceeds 32 kg (70 lb)."] },
      { h: "💺 Business and First checked baggage",
        p: "Business has four fares and First one, and the checked allowance is the same across the Business fares:",
        table: { head: ["Cabin", "Most routes (total weight)", "To or from Africa or the Americas"], rows: [
          ["Business Lite, Classic, Comfort, Elite", "40 kg (88 lb)", "2 pieces up to 32 kg (70 lb) each"],
          ["First Elite", "50 kg (110 lb)", "2 pieces up to 32 kg (70 lb) each"] ] },
        list: ["Silver, Gold and Platinum Privilege Club members, and oneworld Emerald, Sapphire and Ruby members, get extra allowance based on their tier and route."] },
      { h: "📏 Bag size: 158 cm on the Americas and Africa, 300 cm elsewhere",
        p: "The size limit changes with the same route split as the allowance. Measure length + width + height:",
        table: { head: ["Route", "Maximum size per checked bag"], rows: [
          ["To or from Africa or the Americas", "158 cm"],
          ["All other routes", "300 cm"] ] },
        list: ["Items over the limit may be sent as cargo.",
          "Boxes that are carefully wrapped and sealed, and within the weight and size limits, are accepted. Round or irregular items, items tied with loose rope or string, wrapped in blankets, or with loose straps are not accepted.",
          "Sporting equipment counts as part of your checked allowance if it fits the size and weight limits. Larger items or extra pieces need a sporting equipment allowance."] },
      { h: "💼 Carry-on: one piece, 7 kg in Economy, 15 kg in Business and First",
        p: "The carry-on limits for each cabin:",
        table: { head: ["Cabin", "Carry-on allowance", "Maximum size"], rows: [
          ["Economy", "1 piece up to 7 kg (15 lb)", "50 x 37 x 25 cm (20 x 15 x 10 in)"],
          ["Business", "2 pieces up to 15 kg (33 lb) in total", "50 x 37 x 25 cm"],
          ["First", "2 pieces up to 15 kg (33 lb) in total", "50 x 37 x 25 cm"] ] },
        list: ["Flights to or from Brazil: Economy passengers can carry one piece up to 10 kg (22 lb).",
          "Flights leaving the United States: to follow TSA rules you can carry only 1 piece of hand baggage and 1 personal item, such as a handbag, briefcase or laptop bag.",
          "A laptop must fit in your carry-on. A separate laptop bag counts as a carry-on piece."] },
      { h: "👶 Extras that do not count toward your carry-on",
        p: "On top of the carry-on allowance, Qatar Airways lets you carry these items in the cabin:",
        list: ["one small purse or small briefcase",
          "one blanket or piece of outerwear, such as a jacket or coat",
          "one umbrella",
          "one pair of crutches or a walking stick",
          "one carrying case for a small camera or a pair of binoculars",
          "limited reading material",
          "an infant's carrying basket",
          "duty-free items bought on the day of your flight",
          "<strong>Infants:</strong> own checked baggage allowance, plus one baby stroller or collapsible carrycot at no extra cost. An infant on a separate seat can also bring one car seat free."] }
    ],
    faq: [
      ["What is the Qatar Airways baggage allowance?", "Checked baggage is included on every flight. Economy: 20 kg (Lite), 25 kg (Classic), 30 kg (Convenience) or 35 kg (Comfort) on most routes; 1 x 23 kg (Lite) or 2 x 23 kg (other fares) to and from Africa and the Americas. Business 40 kg, First 50 kg. Carry-on 7 kg in Economy."],
      ["What is the Qatar Airways carry-on size?", "50 x 37 x 25 cm (20 x 15 x 10 in), one piece up to 7 kg in Economy. Business and First get two pieces up to 15 kg in total."],
      ["What is the maximum weight of one Qatar Airways checked bag?", "32 kg (70 lb). On flights to and from Africa and the Americas each piece in Economy is limited to 23 kg."],
      ["How big can a Qatar Airways checked bag be?", "158 cm (length + width + height) to and from Africa and the Americas, and 300 cm on all other routes. Larger items may be sent as cargo."],
      ["Does Qatar Airways include checked baggage on every ticket?", "Yes. The amount depends on the route, the cabin and the fare, and Economy Lite has the smallest allowance: 20 kg on most routes and one 23 kg piece to and from Africa and the Americas."],
      ["How many carry-on bags can I take on Qatar Airways from the US?", "One piece of hand baggage and one personal item, such as a handbag, briefcase or laptop bag, to follow TSA rules."]
    ],
    sources: [
      ["https://www.qatarairways.com/en-us/baggage/allowance.html", "Qatar Airways &mdash; Baggage allowance"]
    ]
  }
};
