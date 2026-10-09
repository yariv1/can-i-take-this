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
  }
};
