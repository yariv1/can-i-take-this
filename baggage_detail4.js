// Fourth batch of verified baggage entries (read on each airline's OWN pages on 2026-10-07). Same rules as BAGGAGE_DETAIL.md.
module.exports = {
  "Air Arabia": {
    title: "Air Arabia Baggage Allowance: 7 kg Cabin + 3 kg, Checked 20-40 kg",
    desc: "Air Arabia baggage allowance: 7 kg cabin bag 55 x 40 x 20 cm plus a 3 kg personal item, checked 20, 30 or 40 kg by fare, AED 100 gate fee.",
    answer: "Air Arabia lets every passenger carry one cabin bag of up to 7 kg (55 x 40 x 20 cm) plus one personal item of up to 3 kg (25 x 33 x 20 cm), within a 10 kg total that includes duty-free purchases. Checked baggage is bought or included by fare in three total weights, 20 kg, 30 kg or 40 kg: on flights from, to or via the UAE, Basic has chargeable baggage, Value includes 20 or 30 kg and Ultimate 30 or 40 kg. Each checked bag can weigh up to 32 kg.",
    stats: [["7 kg + 3 kg", "cabin bag plus personal item"], ["20 / 30 / 40 kg", "checked weight options"], ["32 kg", "most a single checked bag may weigh"], ["AED 100", "per cabin piece over the limit at the gate"]],
    sections: [
      { h: "🎒 Air Arabia hand baggage allowance", p: "Air Arabia's cabin allowance is the same on every fare, Basic included. It covers your bag, your personal item and any duty-free purchases.",
        table: { head: ["Item", "Size", "Weight"], rows: [
          ["1 cabin bag", "Up to 55 x 40 x 20 cm", "Up to 7 kg"],
          ["1 personal item (laptop bag, handbag, small backpack)", "Up to 25 x 33 x 20 cm", "Up to 3 kg"],
          ["Duty-free purchases", "-", "Allowed while the combined total stays within 10 kg"] ] },
        list: ["<strong>Over the limit:</strong> you may be asked to check the bag at the counter (fees may apply) or repack. If the bag still exceeds the limit at the boarding gate, a fee of AED 100 per piece may apply.",
          "<strong>Infants:</strong> with an infant under 2 years you may carry one additional small bag of up to 3 kg for baby essentials, which must fit under the seat and may need to be declared at check-in.",
          "<strong>Liquids:</strong> liquids over 100 ml, sharp objects and flammable materials are not permitted in cabin baggage."] },
      { h: "🧳 Air Arabia checked baggage by fare", p: "Air Arabia sells checked baggage in three total-weight options, and the fare you book decides how much is included. This is the table for flights from, to or via the UAE; Air Arabia publishes separate tables for Egypt and other routes.",
        table: { head: ["Item", "Basic", "Value", "Ultimate"], rows: [
          ["Hand baggage", "7 kg + 3 kg personal item", "7 kg + 3 kg personal item", "7 kg + 3 kg personal item"],
          ["Checked baggage", "Chargeable (20 or 30 kg for CAI flights)", "20 or 30 kg", "30 or 40 kg"] ] },
        list: ["<strong>Egypt table:</strong> Basic 20 or 30 kg (CAI flights only), Value 30 or 40 kg, Ultimate 40 kg.",
          "<strong>Pieces:</strong> the 20 kg allowance is limited to 1 piece; the 30 kg and 40 kg allowances can be split into a maximum of 2 pieces per passenger, and each bag must not exceed 32 kg.",
          "<strong>Size:</strong> each checked bag must not exceed 158 cm (62 in) in length + width + height.",
          "<strong>At the airport:</strong> you can buy checked baggage there, but only limited weight options may be available and prices are typically higher; Air Arabia suggests pre-booking online, through the call centre or at a sales office.",
          "<strong>Restricted bags:</strong> carton boxes are not allowed as checked baggage on Bangladesh flights and flights departing from Türkiye, and irregular-shaped baggage that cannot be safely transported may not be accepted.",
          "<strong>TVs:</strong> a TV of 40 inches or more costs AED 150 plus a handling fee per item; the maximum size is 60 inches, subject to acceptance and proper packaging."] }
    ],
    faq: [
      ["What is the Air Arabia baggage allowance?", "Cabin: one 7 kg bag (55 x 40 x 20 cm) plus a 3 kg personal item. Checked baggage is 20, 30 or 40 kg depending on the fare and route; on UAE flights Basic is chargeable, Value 20 or 30 kg and Ultimate 30 or 40 kg."],
      ["What is the Air Arabia hand baggage size and weight?", "The cabin bag is up to 55 x 40 x 20 cm and 7 kg; the personal item is up to 25 x 33 x 20 cm and 3 kg. Duty-free purchases count within a combined 10 kg."],
      ["Does Air Arabia Basic include a checked bag?", "On flights from, to or via the UAE, Basic checked baggage is chargeable; on Cairo (CAI) flights Basic shows 20 or 30 kg. Value and Ultimate include checked baggage."],
      ["What is the Air Arabia checked baggage weight limit?", "Each checked bag must not exceed 32 kg and 158 cm (62 in) in length + width + height. A 20 kg allowance is one piece; 30 and 40 kg can be split into at most 2 pieces."],
      ["How much is the Air Arabia cabin baggage fee at the gate?", "A fee of AED 100 per piece may apply if your cabin baggage still exceeds the limit at the boarding gate."],
      ["Can I buy extra baggage at the airport with Air Arabia?", "Yes, but only limited weight options may be available and prices are typically higher than pre-booking online, by call centre or at a sales office."]
    ],
    sources: [["https://www.airarabia.com/en/help/baggage-enquiries/hand-baggage_baggage-enquiries", "Air Arabia &mdash; Cabin baggage"], ["https://www.airarabia.com/en/help/baggage-enquiries/checked-baggage_baggage-enquiries", "Air Arabia &mdash; Checked baggage"], ["https://www.airarabia.com/en/plan/reservation/fare-types", "Air Arabia &mdash; Fare types"]]
  },
  "China Eastern": {
    title: "China Eastern Baggage Allowance: 8 kg Carry-On, 20 kg Domestic",
    desc: "China Eastern baggage allowance: 1 carry-on up to 8 kg 55 x 40 x 20 cm, 20 kg free domestic, 1 to 2 pieces of 23 kg international by route and fare.",
    answer: "China Eastern Economy passengers can carry one cabin bag of up to 8 kg (55 x 40 x 20 cm) plus one small item under the seat. Domestic Economy has a 20 kg free allowance, with each piece up to 50 kg. On international and regional routes Economy uses a piece system of 23 kg per piece (158 cm in length + width + height) with 0, 1 or 2 free pieces depending on the route and on whether you hold Basic, Standard, Flexible Economy or Y or B class.",
    stats: [["8 kg", "Economy carry-on, 55 x 40 x 20 cm"], ["20 kg", "free domestic Economy allowance"], ["2 x 23 kg", "Economy on Australia, NZ and Japan routes (not Basic)"], ["158 cm", "length + width + height per piece"]],
    sections: [
      { h: "🎒 China Eastern carry-on baggage allowance", p: "Economy and Premium Economy passengers on domestic, international and regional flights may carry one piece, in addition to a free item under the seat.",
        table: { head: ["Cabin", "Carry-on pieces", "Weight per piece"], rows: [
          ["First", "2", "Up to 10 kg"],
          ["Business and Premium Business", "2", "Up to 8 kg"],
          ["Economy and Premium Economy", "1", "Up to 8 kg"] ] },
        list: ["<strong>Size:</strong> each carry-on piece is up to 55 x 40 x 20 cm (22 x 16 x 8 in).",
          "<strong>Item under the seat:</strong> one free item that fits under the seat in front (reference space 35 x 32 x 18 cm), such as a handbag, briefcase, laptop bag or camera bag.",
          "<strong>Over the limit:</strong> items over the weight, quantity or volume limits must be checked in.",
          "<strong>Infants:</strong> baby food and equipment such as diapers, a fully collapsible lightweight stroller (folded up to 55 x 40 x 20 cm) and an infant cradle or child restraint device are free.",
          "<strong>Liquids, international and regional:</strong> containers of 100 ml or less in one transparent re-sealable bag of up to 1 L, one bag per flight. Domestic flights do not allow liquid items except cosmetics, toothpaste and shaving cream for use during the journey, within the conditions the page lists."] },
      { h: "🧳 China Eastern free checked baggage: domestic and Economy by route", p: "Domestic flights use a weight system. International and regional flights use a piece system, and the number of free pieces depends on the route and the Economy brand.",
        table: { head: ["Domestic cabin", "Free allowance", "Per-piece limit"], rows: [
          ["First", "40 kg", "Up to 50 kg"],
          ["Business and Premium Business", "30 kg", "Up to 50 kg"],
          ["Economy and Premium Economy", "20 kg", "Up to 50 kg"] ] },
        table2: { head: ["International Economy route", "Y and B class", "Flexible and Standard Economy", "Basic Economy"], rows: [
          ["Africa, the Americas, Canada, Middle East, Singapore waypoints", "2 pieces", "2 pieces", "1 piece"],
          ["Europe (including Russia and Türkiye) waypoints", "1 piece", "1 piece", "0"],
          ["Australia, New Zealand, Japan waypoints", "2 pieces", "2 pieces", "1 piece"],
          ["Hong Kong, Macau, Taiwan, South and Southeast Asia, South Korea (not Thailand, Singapore)", "2 pieces", "Flexible 2, Standard 1", "0"],
          ["Thailand", "2 pieces", "Flexible 2, Standard 1", "1 piece"] ] },
        list: ["<strong>Piece limits:</strong> Economy pieces are up to 23 kg and 158 cm (sum of three sides). Premium Economy has 2 pieces of up to 23 kg on these routes; First and Business pieces are up to 32 kg.",
          "<strong>Infants:</strong> on domestic routes an infant ticket without a seat has no free allowance, and one baby stroller may be checked free.",
          "<strong>Read the exact brand:</strong> the airline's table differs by route group, class and brand, so confirm the allowance on your ticket."] },
      { h: "💲 China Eastern excess baggage fees", p: "Excess baggage is anything above your free allowance.",
        table: { head: ["Route", "Charge"], rows: [
          ["Domestic", "1.5% of the highest published adult one-way Economy fare that day, per kilogram, in RMB"],
          ["Mainland China and the Americas: first extra piece (up to 23 kg, 158 cm)", "RMB 1,300 per piece"],
          ["Mainland China and the Americas: second and more extra pieces", "RMB 2,000 per piece"],
          ["Australia and New Zealand: first extra piece", "RMB 1,100 per piece"],
          ["Europe, Africa (not Egypt), Japan, South Korea: first extra piece", "RMB 1,000 per piece"],
          ["Economy overweight, 23 to 32 kg (all these groups)", "RMB 1,000 per piece"],
          ["Extra large, 159 to 203 cm", "RMB 1,000 per piece"] ] },
        list: ["Oversize, overweight and extra baggage charges are cumulative.",
          "For South America and Canada routes one piece may not exceed 32 kg; for other North American routes, 45 kg. On the other groups one piece must not exceed 32 kg.",
          "Overweight charges are payable in the currency of the country or region."] }
    ],
    faq: [
      ["What is the China Eastern baggage allowance?", "Cabin: one 8 kg piece (55 x 40 x 20 cm) plus an item under the seat. Checked: 20 kg free on domestic Economy, and 0 to 2 free pieces of 23 kg on international routes depending on route and brand."],
      ["What is the China Eastern carry-on size and weight?", "55 x 40 x 20 cm (22 x 16 x 8 in) and up to 8 kg for Economy, with one extra item that fits under the seat (reference 35 x 32 x 18 cm)."],
      ["How much free checked baggage does China Eastern Economy include?", "Domestic: 20 kg. International: for example 2 pieces on Americas and Australia routes for Y, B, Flexible and Standard Economy, and 1 piece on Europe routes; Basic Economy has fewer."],
      ["What is the China Eastern checked baggage weight limit?", "International Economy pieces are up to 23 kg and 158 cm in total dimensions. Domestic pieces may weigh up to 50 kg. Economy overweight of 23 to 32 kg is charged on international routes."],
      ["How much is excess baggage on China Eastern?", "Domestic: 1.5% of the highest published adult one-way Economy fare per kilogram. International: for example RMB 1,300 for a first extra piece between Mainland China and the Americas, and RMB 1,000 for overweight 23 to 32 kg."],
      ["Does China Eastern Basic Economy include a checked bag?", "It depends on the route: 1 piece on Americas, Australia, New Zealand, Japan and Thailand routes, and 0 pieces on Europe, Hong Kong, Macau, Taiwan, Southeast Asia and South Korea routes, per the airline's table."]
    ],
    sources: [["https://www.ceair.com/global/en_static/Announcement/BaggageService/FreeBaggageAllowanceandSpecifications/", "China Eastern &mdash; Free baggage allowance"], ["https://www.ceair.com/global/en_static/Announcement/BaggageService/CarryonBaggage/", "China Eastern &mdash; Carry-on baggage"], ["https://www.ceair.com/global/en_static/Announcement/BaggageService/ExcessBaggageFees/", "China Eastern &mdash; Excess baggage fees"]]
  },
  "LATAM": {
    title: "LATAM Baggage Allowance: Carry-On 12 kg, Checked 23 kg by Fare",
    desc: "LATAM baggage allowance: 10 kg small bag plus 12 kg carry-on (55 x 35 x 25 cm) in Economy, checked 23 kg bags on Plus and Top, none on Basic and Light.",
    answer: "LATAM allows a small bag or backpack of up to 10 kg (45 x 35 x 20 cm) and a carry-on bag of up to 12 kg in Economy or 16 kg in Premium Economy and Premium Business (55 x 35 x 25 cm). Checked baggage depends on the fare: Basic and Light include none, Plus includes one or two 23 kg bags depending on the route, and Top includes two 23 kg bags. Each extra 23 kg bag may measure up to 158 cm in length + width + height.",
    stats: [["10 kg", "small bag, 45 x 35 x 20 cm"], ["12 kg", "Economy carry-on, 55 x 35 x 25 cm"], ["23 kg", "checked bag on Plus and Top"], ["158 cm", "length + width + height per bag"]],
    sections: [
      { h: "🎒 LATAM cabin baggage allowance", p: "LATAM separates a small bag that goes under the seat from a carry-on bag that goes in the overhead locker. The Basic fare includes only the small item.",
        table: { head: ["Item", "Weight", "Size"], rows: [
          ["Small bag or backpack", "Up to 10 kg (22 lb)", "45 x 35 x 20 cm (17.8 x 13.8 x 7.9 in), including pockets, wheels and handle"],
          ["Carry-on bag, Economy", "Up to 12 kg (26 lb)", "55 cm high + 35 cm long + 25 cm wide"],
          ["Carry-on bag, Premium Economy and Premium Business", "Up to 16 kg (35 lb)", "55 cm high + 35 cm long + 25 cm wide"] ] },
        list: ["<strong>Basic fare:</strong> on the simplest fare, for flights within Chile, Peru, Colombia and Ecuador, you can carry one handbag in the cabin but not a 10 kg suitcase.",
          "<strong>Light fare:</strong> you travel with your carry-on baggage and pay only for the extras you choose.",
          "<strong>Over the limit:</strong> if your cabin baggage exceeds the allowed weight or dimensions, it is sent to the hold and you pay the additional cost."] },
      { h: "🧳 LATAM checked baggage by fare", p: "These are the four LATAM fares. Your ticket shows the allowance for your route: check My trips, then Review your baggage.",
        table: { head: ["Fare", "Checked baggage", "Other"], rows: [
          ["Basic", "Not included", "Simplest fare, flights within Chile, Peru, Colombia and Ecuador"],
          ["Light", "Not included", "Carry-on included, pay only for chosen extras, earn Miles or LATAM Pass Points"],
          ["Plus", "One or two 23 kg bags depending on the route", "Choose your seat, earn Miles or Points"],
          ["Top", "Two 23 kg bags", "Most flexible fare, allows changes, choose your seat, more Miles or Points"] ] },
        list: ["<strong>Size:</strong> a 23 kg bag may be up to 158 linear cm (length + width + height); each bag counts as one piece and cannot be split into several lighter bags.",
          "<strong>LATAM Pass:</strong> members from the Platinum category and above, and LATAM Pass cardholders, are entitled to 1 additional checked bag of up to 23 kg at no extra cost on LATAM-operated flights, on a Light fare or higher; the two benefits do not add together.",
          "<strong>Infants:</strong> LATAM publishes a separate allowance for infants up to 2 years on its infants page."] },
      { h: "⚖️ LATAM overweight and special baggage", p: "You can pay for overweight and oversize at check-in at the airport if your destination allows it.",
        table: { head: ["Case", "Limit"], rows: [
          ["Overweight checked bag to, from or via Argentina, Aruba, Cuba, Europe, Oceania, South Africa or Venezuela", "Up to 32 kg per piece, with an extra fee"],
          ["Overweight checked bag, other destinations", "Up to 45 kg (99.2 lb) per piece and 300 linear cm of oversize, with an extra fee"],
          ["Flights connecting with Air Canada, British Airways, Iberia or Qantas", "Up to 32 kg (70.5 lb) per piece"],
          ["Special baggage (musical instruments, TVs, monitors, sports and audiovisual equipment)", "Up to 45 kg per piece, 32 kg on the Argentina, Aruba, Cuba, Europe, Oceania, South Africa and Venezuela group; up to 300 linear cm"] ] },
        list: ["Special baggage is carried in the hold for an extra charge.",
          "If your first flight is operated by another airline, check that airline's weight and dimension limits and prices on its own website."] }
    ],
    faq: [
      ["What is the LATAM baggage allowance?", "A small bag up to 10 kg (45 x 35 x 20 cm) and a carry-on up to 12 kg in Economy (55 x 35 x 25 cm). Checked baggage: none on Basic and Light, one or two 23 kg bags on Plus, two on Top."],
      ["What is the LATAM carry-on size and weight?", "55 cm high + 35 cm long + 25 cm wide, up to 12 kg in Economy and 16 kg in Premium Economy or Premium Business. The small bag is 45 x 35 x 20 cm and up to 10 kg."],
      ["Does LATAM Light include a checked bag?", "No. Light includes your carry-on and you pay only for the extras you choose; Plus adds checked baggage and seat selection."],
      ["What is the LATAM checked baggage size and weight limit?", "A 23 kg bag can be up to 158 linear cm. Overweight bags are accepted up to 32 kg on routes to, from or via Argentina, Aruba, Cuba, Europe, Oceania, South Africa or Venezuela, and up to 45 kg elsewhere, for an extra fee."],
      ["Does the LATAM Basic fare include a carry-on bag?", "Basic, available for flights within Chile, Peru, Colombia and Ecuador, includes one handbag in the cabin but not a 10 kg suitcase and no hold baggage."],
      ["Do LATAM Pass members get a free checked bag?", "Platinum and above members, and LATAM Pass cardholders, get 1 additional 23 kg checked bag on LATAM flights with a Light fare or higher; the benefits are not cumulative."]
    ],
    sources: [["https://www.latamairlines.com/us/en/help-center/faq/baggage/included/dimensions-weight", "LATAM &mdash; Baggage dimensions and weight"], ["https://www.latamairlines.com/us/en/help-center/faq/purchases/asistance/ticket-fares", "LATAM &mdash; Basic, Light, Plus and Top fares"], ["https://www.latamairlines.com/us/en/help-center/faq/baggage/included/allowed-trip", "LATAM &mdash; Allowed baggage for my trip"]]
  },
  "Air Canada": {
    title: "Air Canada Carry-On Size 2026: 55 x 40 x 23 cm, Checked Bag Fees",
    desc: "Air Canada carry-on size 2026: standard bag 55 x 40 x 23 cm (no weight limit), personal item 43 x 33 x 16 cm, Basic fares personal item only, first checked bag CA/US$45.",
    answer: "Air Canada's standard carry-on is 55 x 40 x 23 cm with no weight limit, plus a personal item of 43 x 33 x 16 cm. Economy Basic tickets bought on or after 3 January 2025 allow only a personal item within Canada, to and from the U.S. and to and from Mexico, Central America and the Caribbean. Checked bags are up to 23 kg (50 lb) and 158 cm: on tickets bought from 13 April 2026 on those routes the first bag is CA/US$45 on Basic and Standard and free on Flex, and the second bag is CA/US$60.",
    stats: [["55 x 40 x 23 cm", "standard carry-on, no weight limit"], ["CA/US$45", "first bag, Basic and Standard, North America"], ["23 kg", "most a standard checked bag may weigh"], ["CA/US$90", "first bag, Basic, Europe and other long-haul"]],
    sections: [
      { h: "🎒 Air Canada carry-on baggage allowance", p: "Air Canada's page lists maximum dimensions including wheels and handles. All carry-on rules are strictly enforced, and automated carry-on baggage sizers are used at pre-security and pre-boarding.",
        table: { head: ["Item", "Maximum size (D x W x H)", "Weight"], rows: [
          ["Standard item", "23 x 40 x 55 cm (9 x 15.5 x 21.5 in)", "No weight limit, but you must be able to lift it into the overhead bin unaided"],
          ["Personal item", "33 x 43 x 16 cm (13 x 17 x 6 in)", "-"] ] },
        list: ["<strong>Economy Basic, tickets bought on or after 3 January 2025:</strong> one personal item only when travelling within Canada, to and from the U.S. (including Hawaii and Puerto Rico), and to and from Mexico, Central America and the Caribbean. If you connect onward to an international destination on Basic, you may bring one standard carry-on bag and one personal item.",
          "<strong>Other bags on those Basic routes</strong> must be checked before security. If you check in online or at a kiosk, a credit card is needed to pre-authorize gate handling fees of CA/US$65-$78 (tax inclusive).",
          "<strong>Extra small bag:</strong> you can bring an additional small purse or bag no larger than 25 x 30 x 14 cm; larger bags count toward your allowance.",
          "<strong>Infant on your lap:</strong> 1 additional standard article for the child's belongings, such as a diaper bag.",
          "<strong>Too big:</strong> bags that exceed the maximum sizes must be checked, and additional checked baggage charges may apply."] },
      { h: "🧳 Air Canada checked baggage allowance and fees", p: "A standard checked bag is up to 23 kg (50 lb) and 158 cm (62 in) in length + width + height. Fees depend on the fare, the route and the purchase date, and exclude taxes.",
        table: { head: ["Route and fare", "1st bag", "2nd bag"], rows: [
          ["Canada, U.S., Mexico, Caribbean, Central America (bought from 13 Apr 2026): Basic and Standard", "CA/US$45", "CA/US$60"],
          ["Same routes: Flex", "Free", "CA/US$60"],
          ["Africa, Asia and the South Pacific, Europe, Middle East, South America (bought from 14 May 2026): Basic", "CA/US$90", "CA/US$120"],
          ["Same routes: Standard and Flex", "Free", "CA/US$120"] ] },
        list: ["<strong>Extra, overweight and oversized bags:</strong> additional fees apply; use Air Canada's baggage calculator for the charge on your trip, and arrive at least 120 minutes before departure when checking these.",
          "<strong>Over the limits:</strong> contact Air Canada Cargo if a bag exceeds 32 kg (70 lb), 203 cm (80 in) in length or 292 cm (115 in) in total linear dimensions.",
          "<strong>Military:</strong> active, retired and reserve members of the Canadian and U.S. military get up to three checked bags of 32 kg each at no charge on itineraries fully operated by Air Canada, Rouge or Express, with valid military ID.",
          "<strong>Other airlines:</strong> for itineraries that include flights operated by another airline, including Star Alliance partners, standard baggage fees apply."] }
    ],
    faq: [
      ["What is the Air Canada baggage allowance?", "A standard carry-on of 23 x 40 x 55 cm with no weight limit and a personal item of 33 x 43 x 16 cm. Checked bags up to 23 kg and 158 cm; on Basic and Standard the first bag is CA/US$45 within North America."],
      ["What is the Air Canada carry-on size?", "Standard item 23 x 40 x 55 cm (9 x 15.5 x 21.5 in) and personal item 33 x 43 x 16 cm (13 x 17 x 6 in), including wheels and handles. There is no weight limit, but you must be able to stow it unaided."],
      ["Does Air Canada Basic include a carry-on bag?", "Not within Canada, to and from the U.S., or to and from Mexico, Central America and the Caribbean, for tickets bought on or after 3 January 2025: only a personal item is allowed. Connecting onward to an international destination, one standard carry-on and one personal item are allowed."],
      ["How much is the first checked bag on Air Canada?", "On Basic and Standard it is CA/US$45 within Canada, to and from the U.S. and Mexico, the Caribbean and Central America, and CA/US$90 on Basic to Europe, Asia, Africa, the Middle East and South America (Standard and Flex are free). Flex is free on the North American routes."],
      ["What is the Air Canada checked baggage weight limit?", "A standard bag is up to 23 kg (50 lb) and 158 cm in total dimensions. Contact Air Canada Cargo if a bag exceeds 32 kg, 203 cm in length or 292 cm in total linear dimensions."],
      ["What is the Air Canada gate handling fee?", "If you bring other bags to the airport on a Basic fare, gate handling fees of CA/US$65-$78 (tax inclusive) are pre-authorized on your credit card when you check in online or at a kiosk."]
    ],
    sources: [["https://www.aircanada.com/us/en/aco/home/plan/baggage/carry-on.html", "Air Canada &mdash; Carry-on baggage"], ["https://www.aircanada.com/us/en/aco/home/plan/baggage/checked.html", "Air Canada &mdash; Checked baggage"], ["https://www.aircanada.com/ca/en/aco/home/book/travel-news-and-updates/baggage-fee-changes.html", "Air Canada &mdash; Baggage fee changes"]]
  },
  "Air India": {
    title: "Air India Baggage Allowance: 7 kg Cabin, Checked 15-25 kg Domestic",
    desc: "Air India baggage allowance: 7 kg cabin bag 55 x 40 x 20 cm plus a 3 kg personal item, domestic checked 15, 20 or 25 kg by fare, 2 x 23 kg to Europe and the USA.",
    answer: "Air India Economy passengers can carry one cabin bag of up to 7 kg (55 x 40 x 20 cm, 115 cm in total) plus one personal item of up to 3 kg. Domestic checked baggage is 15 kg on Value, 20 kg on Classic and 25 kg on Flex. International allowances depend on the route: Europe, the USA and Canada use pieces of 23 kg (1 on Economy Value, 2 on Classic and Flex), and other routes use a weight such as 25, 30 or 35 kg. No single piece may weigh more than 32 kg.",
    stats: [["7 kg", "Economy cabin bag, 55 x 40 x 20 cm"], ["15 / 20 / 25 kg", "domestic Value / Classic / Flex"], ["2 x 23 kg", "Economy Classic and Flex to Europe and USA"], ["32 kg", "most a single piece may weigh"]],
    sections: [
      { h: "🎒 Air India cabin baggage allowance", p: "Air India allows one carry-on bag plus one small personal item. The one-bag rule follows Indian security regulations and applies to all classes and frequent-flyer statuses.",
        table: { head: ["Cabin", "Cabin bag weight", "Size"], rows: [
          ["Economy and Premium Economy", "7 kg (15 lb)", "55 x 40 x 20 cm, total up to 115 cm (45 in)"],
          ["Business and First", "10 kg (22 lb)", "55 x 40 x 20 cm, total up to 115 cm (45 in)"] ] },
        list: ["<strong>Personal item:</strong> one of a handbag or purse, camera or binoculars, a laptop in a bag, an overcoat or wrap, a blanket, a folding umbrella, medicines needed onboard, reading material or a small amount of duty-free goods, up to 3 kg (6 lb) and fitting under the seat. Bags in that list are up to 40 x 30 x 20 cm each; over 90 cm in total counts as your cabin bag.",
          "<strong>Infants:</strong> personal and infant cabin items up to a total of 5 kg (11 lb), such as food for the flight, feeding bottles and a carry-on tote.",
          "<strong>Extra or oversize carry-on:</strong> must be checked in, and an additional charge applies: USD 75 international, INR 3,000 domestic.",
          "<strong>Liquids:</strong> avoid liquids, aerosols and gels over 100 ml in cabin baggage."] },
      { h: "🧳 Air India domestic checked baggage", p: "These allowances apply only to Air India-operated flights, not to Air India Express or codeshare flights.",
        table: { head: ["Cabin", "Brand", "Checked baggage"], rows: [
          ["Economy", "Value", "15 kg (33 lb)"],
          ["Economy", "Classic", "20 kg (44 lb)"],
          ["Economy", "Flex", "25 kg (55 lb)"],
          ["Premium Economy", "Value", "15 kg"],
          ["Premium Economy", "Flex", "25 kg"],
          ["Business", "Value", "30 kg"],
          ["Business", "Flex", "40 kg"],
          ["First", "First", "40 kg"] ] },
        list: ["<strong>Pieces:</strong> an allowance under 25 kg is 1 piece of check-in baggage; 25 kg or more is 2 pieces.",
          "<strong>Single piece:</strong> the maximum weight of a single piece is 32 kg (70 lb) across the whole network.",
          "<strong>Mixed tickets:</strong> passengers flying on Air India domestic and international sectors on the same ticket get the allowance of the international sector.",
          "<strong>Star Alliance Gold:</strong> members can carry an additional 20 kg (44 lb) in economy class."] },
      { h: "🌍 Air India international checked baggage", p: "On piece routes, Economy and Premium Economy pieces are up to 23 kg and First and Business pieces up to 32 kg. On weight routes, the figure depends on the route and brand.",
        table: { head: ["Route", "Economy Value / Classic / Flex", "Premium Economy Value / Flex", "Business Value / Flex"], rows: [
          ["Europe, United States and Canada", "1 piece / 2 pieces / 2 pieces of 23 kg", "2 pieces of 23 kg each", "2 pieces of 32 kg each"],
          ["Japan and South Korea", "1 piece / 2 pieces / 2 pieces of 23 kg", "2 pieces of 23 kg each", "2 pieces of 32 kg each"],
          ["Gulf and Middle East", "25 / 30 / 35 kg", "25 / 35 kg", "40 / 45 kg"],
          ["Singapore, Hong Kong, Indonesia, Malaysia, Philippines, Vietnam", "25 / 30 / 35 kg", "25 / 35 kg", "40 / 45 kg"],
          ["Australia and New Zealand", "25 / 30 / 35 kg", "30 / 35 kg", "40 / 45 kg"],
          ["India to Sri Lanka", "30 / 30 / 40 kg", "30 / 40 kg", "40 / 45 kg"],
          ["Nepal, Maldives", "20 / 20 / 30 kg", "20 / 30 kg", "35 / 40 kg"] ] },
        list: ["<strong>Dimensions on piece routes:</strong> the two Economy pieces together must not exceed 271 cm (107 in) and each piece 158 cm (62 in).",
          "<strong>Maharaja Club:</strong> Platinum and Gold (Star Gold) members get 1 extra piece up to 23 kg on piece routes and 20 kg on weight routes; Silver gets 5 kg on weight routes.",
          "<strong>Other routes:</strong> Air India publishes separate pages for Gulf, Middle East and Africa, SAARC countries, Saudi Arabia and Australia and Far East-Southeast Asia; check the one for your route."] }
    ],
    faq: [
      ["What is the Air India baggage allowance?", "Cabin: one 7 kg bag (55 x 40 x 20 cm) plus a 3 kg personal item in Economy. Domestic checked: 15 kg Value, 20 kg Classic, 25 kg Flex. International: for example 2 x 23 kg on Economy Classic and Flex to Europe and the USA."],
      ["What is the Air India cabin baggage size and weight?", "Economy and Premium Economy: up to 7 kg. Business and First: up to 10 kg. Size is 55 x 40 x 20 cm and 115 cm in total."],
      ["How much checked baggage is free on Air India domestic flights?", "Economy Value 15 kg, Classic 20 kg, Flex 25 kg. Business Value 30 kg and Flex 40 kg; First 40 kg."],
      ["What is the Air India checked baggage weight limit?", "No single piece can weigh more than 32 kg (70 lb) anywhere on the network, and Economy pieces on piece routes are up to 23 kg."],
      ["How many bags can I take to the USA or Europe on Air India?", "Economy Value 1 piece of 23 kg; Classic and Flex 2 pieces of 23 kg each. Business gets 2 pieces of 32 kg each."],
      ["What happens if my Air India cabin bag is too heavy?", "Baggage beyond your cabin allowance must be checked in, and a charge applies: USD 75 international or INR 3,000 domestic."]
    ],
    sources: [["https://www.airindia.com/in/en/travel-information/baggage-guidelines/cabin-baggage.html", "Air India &mdash; Cabin baggage"], ["https://www.airindia.com/in/en/travel-information/baggage-guidelines/checked-baggage-allowance.html", "Air India &mdash; Checked baggage allowance"]]
  },
  "American Airlines": {
    title: "American Airlines Baggage Allowance: Carry-On and Bag Fees 2026",
    desc: "American Airlines baggage: carry-on 22 x 14 x 9 in plus a personal item, first checked bag $50 ($45 online) domestic, 50 lb and 62 in limits.",
    answer: "American Airlines lets you bring one carry-on bag (up to 22 x 14 x 9 in, 56 x 36 x 23 cm) and one personal item (up to 18 x 14 x 8 in, 45 x 35 x 20 cm). For travel within and between the U.S., Canada, Mexico, the Caribbean and Central America, the first checked bag is $50 ($45 if you pay online) and the second $60 ($55 online), with Basic Economy paying $5 more for each. A standard checked bag is up to 50 lb (23 kg) and 62 in (158 cm).",
    stats: [["22 x 14 x 9 in", "carry-on bag, plus a personal item"], ["$50 / $45", "first checked bag, airport / online, domestic"], ["50 lb", "most a standard checked bag may weigh"], ["62 in", "length + width + height per bag"]],
    sections: [
      { h: "🎒 American Airlines carry-on baggage allowance", p: "You can bring 1 personal item and 1 carry-on bag on board if they meet the requirements. Some airports and planes may have additional carry-on restrictions.",
        table: { head: ["Item", "Maximum size", "Where it goes"], rows: [
          ["Personal item (purse, small handbag)", "18 x 14 x 8 in (45 x 35 x 20 cm)", "Under the seat in front of you"],
          ["Carry-on bag", "22 x 14 x 9 in (56 x 36 x 23 cm), including handles and wheels", "Overhead bin or under the seat; must fit the airport sizer"],
          ["Soft-sided garment bag", "51 in (130 cm) in length + width + height", "Counts as your carry-on"] ] },
        list: ["<strong>Not counted:</strong> diaper bags (1 per child), a breast pump, a small soft-sided cooler of breast milk, child safety seats, strollers and medical or mobility devices.",
          "<strong>Label it</strong> in case the bag needs to be checked.",
          "<strong>Batteries and e-cigarettes</strong> can't go in checked bags; keep them in your carry-on, and remove them if your carry-on must be checked."] },
      { h: "🧳 American Airlines checked bag fees", p: "These are the fees American lists for travel within and between the U.S., Puerto Rico, the U.S. Virgin Islands, Canada, the Caribbean (except Cuba and Haiti), Mexico, Central America (except Panama) and Guyana, updated 18 May 2026. Fees are per person and each direction.",
        table: { head: ["Checked bag", "Pay at the airport", "Pay online", "Basic Economy"], rows: [
          ["1st bag", "$50", "$45", "$5 more"],
          ["2nd bag", "$60", "$55", "$5 more"] ] },
        list: ["<strong>Free bags:</strong> up to 3 free checked bags depending on AAdvantage or oneworld status on itineraries marketed and operated by American; the first bag is free for eligible AAdvantage credit cardholders on domestic American-operated itineraries, AAdvantage Gold, and on several international destinations (excluding Basic Economy on some).",
          "<strong>Refunds:</strong> checked bag fees paid at the airport are non-refundable.",
          "<strong>How many bags:</strong> up to 10 bags on American-operated domestic, trans-Atlantic and trans-Pacific flights, and up to 5 bags to, through or from Mexico, the Caribbean and Central America, South America and Brazil."] },
      { h: "⚖️ American Airlines size, weight and excess fees", p: "A standard checked bag is up to 62 in (158 cm) in length + width + height and 50 lb (23 kg). First and Business free bags can weigh up to 70 lb (32 kg).",
        table: { head: ["Fee (per bag, each way)", "Amount"], rows: [
          ["Oversize, over 62 in to 65 in", "$30"],
          ["Oversize, over 65 in to 115 in, U.S., Canada, Mexico, Caribbean, China, Japan, Korea, India, Australia, New Zealand", "$200"],
          ["Oversize, over 65 in to 115 in, Europe, Israel, Qatar, South America", "$150"],
          ["Overweight, over 50 lb to 53 lb, U.S. and Canada", "$30"],
          ["Overweight, over 53 lb to 70 lb, U.S. and Canada", "$100"],
          ["Overweight, over 70 lb to 100 lb, U.S. and Canada", "$200"] ] },
        list: ["<strong>Limits:</strong> American does not accept checked bags over 100 lb (45 kg) or over 115 in (292 cm) in total dimensions on its flights.",
          "<strong>Both oversize and overweight:</strong> the higher of the two fees applies, in addition to the checked bag fee.",
          "<strong>Australia and New Zealand:</strong> free bags can weigh up to 70 lb (32 kg) for all confirmed customers.",
          "Fees and seasonal limits vary by destination; contact Reservations to be sure oversize bags will fit on the plane."] }
    ],
    faq: [
      ["What is the American Airlines baggage allowance?", "One carry-on bag (22 x 14 x 9 in) and one personal item (18 x 14 x 8 in). Checked bags are charged: domestic first bag $50 at the airport or $45 online, second bag $60 or $55."],
      ["What is the American Airlines carry-on size?", "22 x 14 x 9 inches (56 x 36 x 23 cm) including handles and wheels, and the personal item is 18 x 14 x 8 inches (45 x 35 x 20 cm). The carry-on must fit the airport sizer."],
      ["How much is the first checked bag on American Airlines?", "$50 at the airport or $45 online within and between the U.S., Canada, Mexico, the Caribbean and Central America; Basic Economy pays $5 more. It is free for eligible AAdvantage status holders and credit cardholders."],
      ["What is the American Airlines checked bag weight limit?", "50 lb (23 kg) and 62 in (158 cm) in total dimensions for a standard bag. Bags over 100 lb (45 kg) or 115 in (292 cm) are not accepted."],
      ["How much is an overweight bag on American Airlines?", "Between the U.S. and Canada: $30 for 51 to 53 lb, $100 for 54 to 70 lb and $200 for 71 to 100 lb, in addition to the bag fee. Other regions have their own table."],
      ["How many checked bags can I take on American Airlines?", "Up to 10 bags on domestic, trans-Atlantic and trans-Pacific American-operated flights, and up to 5 on flights to, through or from Mexico, the Caribbean, Central America, South America and Brazil."]
    ],
    sources: [["https://www.aa.com/i18n/travel-info/baggage/carry-on-baggage.jsp", "American Airlines &mdash; Carry-on bags and size limits"], ["https://www.aa.com/i18n/travel-info/baggage/checked-baggage-policy.html", "American Airlines &mdash; Checked bag fees and policies"], ["https://www.aa.com/i18n/travel-info/baggage/oversize-and-overweight-baggage.html", "American Airlines &mdash; Oversize and overweight bags fees"]]
  },
  "Aegean": {
    title: "Aegean Baggage Allowance: Cabin 8 kg, Checked Bag by Fare Family",
    desc: "Aegean baggage allowance: personal item plus a carry-on bag up to 8 kg, no checked bag on Light and Flex, 1 x 23 kg on ComfortFlex, 2 x 32 kg in Business.",
    answer: "On Aegean, Economy Light includes one cabin piece in total, Flex, ComfortFlex and Family include a carry-on bag of up to 8 kg plus a personal item, and Business allows a carry-on bag of up to 13 kg plus a personal item. Checked baggage is not included on Light, Flex or Family, ComfortFlex includes 1 piece of up to 23 kg, and Business includes 2 pieces of up to 32 kg each. Bags can measure up to 158 cm in length + width + height, and the maximum weight is 32 kg.",
    stats: [["8 kg", "carry-on bag, Economy"], ["13 kg", "carry-on bag, Business"], ["1 x 23 kg", "checked bag, ComfortFlex"], ["2 x 32 kg", "checked bags, Business"]],
    sections: [
      { h: "🎒 Aegean cabin baggage allowance", p: "Aegean's allowance depends on the fare family (Light, Flex, ComfortFlex, Family, Business Basic, Business).",
        table: { head: ["Item", "Size", "Weight"], rows: [
          ["Carry-on bag, Economy fares", "Airbus fleet 56 x 45 x 25 cm; turboprop fleet 55 x 40 x 23 cm", "1 bag up to 8 kg"],
          ["Carry-on bag, Business", "Airbus fleet 56 x 45 x 25 cm; turboprop fleet 55 x 40 x 23 cm", "1 bag up to 13 kg"],
          ["Personal item (handbag or thin laptop case)", "Under the seat in front", "-"],
          ["Infants (0-2 years)", "55 x 40 x 23 cm", "1 carry-on bag up to 6 kg"] ] },
        list: ["<strong>Economy Light:</strong> if cabin storage is full you must check in your carry-on bag for free at boarding and collect it at the baggage belt; remove laptops, cameras and power banks first.",
          "<strong>Cabin total:</strong> the comparison table shows 1 piece in total on Light and 2 pieces in total on the other fares, with a personal item shown separately for the fares that include one."] },
      { h: "🧳 Aegean checked baggage by fare family", p: "Aegean says the maximum weight for checked baggage is 32 kg; anything heavier must be sent as cargo. Each bag may measure up to 158 cm (62 in) in length + width + height.",
        table: { head: ["Fare", "Checked baggage included"], rows: [
          ["Economy Light", "Not included"],
          ["Economy Flex", "Not included"],
          ["Economy ComfortFlex", "1 piece up to 23 kg"],
          ["Economy Family", "Not included"],
          ["Business Basic and Business", "2 pieces up to 32 kg and 158 cm each"] ] },
        list: ["<strong>Miles+Bonus Gold and Star Alliance Gold:</strong> their checked baggage becomes 1 piece of up to 23 kg on Light, Flex and Family, and 2 pieces of up to 23 kg on ComfortFlex.",
          "<strong>Infants (0-2):</strong> a collapsible stroller is included on every fare, and ComfortFlex shows 1 piece up to 23 kg for infants.",
          "<strong>Fare comparison:</strong> Aegean's comparison tool is the reference for your ticket; the allowance for your booking is the one that applies."] },
      { h: "💲 Aegean extra and overweight baggage", p: "Extra baggage is any bag above the free allowance of your fare: the first piece on Light, Flex or Family, the second on ComfortFlex, or the third in Business.",
        table: { head: ["Case", "Rule"], rows: [
          ["Overweight baggage", "Over the weight allowance and up to 32 kg"],
          ["Over 32 kg", "Can only be accepted as cargo"],
          ["Up to 32 kg but over 158 cm", "Special baggage, charged accordingly"],
          ["Family fare", "Pre-purchased additional baggage at a 50% discount compared with the Light fare"] ] },
        list: ["Fees depend on the fare family, the destination and the date of the flight; Aegean points you to its baggage calculator for the exact cost before the flight.",
          "Charges apply only to flights operated by AEGEAN and Olympic Air aircraft.",
          "Pre-purchased baggage is non-refundable except for flight changes due to cancellations, delays or schedule changes, or baggage loss."] }
    ],
    faq: [
      ["What is the Aegean baggage allowance?", "Cabin: a carry-on bag up to 8 kg (13 kg in Business) plus a personal item on most fares. Checked: none on Light, Flex and Family, 1 x 23 kg on ComfortFlex, 2 x 32 kg in Business."],
      ["What is the Aegean carry-on size and weight?", "Up to 8 kg in Economy and 13 kg in Business; maximum dimensions 56 x 45 x 25 cm on the Airbus fleet and 55 x 40 x 23 cm on the turboprop fleet."],
      ["Does Aegean Flex include a checked bag?", "No. Aegean's fare comparison shows no checked bag on Light, Flex and Family; ComfortFlex includes one piece up to 23 kg."],
      ["What is the Aegean checked baggage weight limit?", "32 kg is the maximum for any checked bag, and the size limit is 158 cm in length + width + height. Anything heavier must go as cargo."],
      ["What happens if the cabin is full on Aegean Light?", "You check in your carry-on bag for free at boarding and collect it at the baggage belt; remove valuables, laptops, cameras and power banks first."],
      ["How much is an extra bag on Aegean?", "It depends on the fare family, destination and date; use Aegean's baggage calculator. Family fare gets a 50% discount compared with Light on pre-purchased extra baggage."]
    ],
    sources: [["https://en.aegeanair.com/travel-info/travelling-with-aegean/baggage/baggage-allowance/", "Aegean &mdash; Baggage allowance"], ["https://en.aegeanair.com/travel-info/travelling-with-aegean/baggage/add-baggage/", "Aegean &mdash; Extra and overweight baggage"]]
  },
  "Swiss": {
    title: "SWISS Baggage Allowance: 8 kg Carry-On, 23 kg Checked by Fare",
    desc: "SWISS baggage allowance: personal item 40 x 30 x 15 cm, 8 kg carry-on 55 x 40 x 23 cm, 1 x 23 kg checked on Comfort and Flex, none on Light.",
    answer: "SWISS allows one personal item (40 x 30 x 15 cm) on every fare, and, from Economy Light, a carry-on bag of up to 8 kg and 55 x 40 x 23 cm (Economy Basic on short and medium-haul has the personal item only). On European routes Economy Basic and Light include no checked bag, Comfort, Comfort Green and Flex include 1 x 23 kg, and Business Flex includes 2 x 32 kg. On intercontinental flights Economy includes 1 x 23 kg. A bag may measure up to 158 cm.",
    stats: [["8 kg", "carry-on bag, 55 x 40 x 23 cm"], ["40 x 30 x 15 cm", "personal item, every fare"], ["1 x 23 kg", "checked, Economy Comfort and Flex"], ["158 cm", "width + height + depth per bag"]],
    sections: [
      { h: "🎒 SWISS carry-on baggage allowance", p: "SWISS reminds passengers departing from the USA that, under TSA rules, only one carry-on bag and one personal item go through security, whatever the class.",
        table: { head: ["Route and fare", "Personal item", "Carry-on bag"], rows: [
          ["Short and medium-haul, Economy Basic", "1 item, max 40 x 30 x 15 cm", "None"],
          ["Short and medium-haul, Economy Light, Comfort, Comfort Green and Flex", "1 item, max 40 x 30 x 15 cm", "1 bag, max 8 kg, 55 x 40 x 23 cm"],
          ["Short and medium-haul, Business", "1 item, max 40 x 30 x 15 cm", "2 bags, max 8 kg each, 55 x 40 x 23 cm"],
          ["Long-haul, Economy and Premium Economy", "1 item, max 40 x 30 x 15 cm", "1 bag, max 8 kg, 55 x 40 x 23 cm"],
          ["Long-haul, Business and First", "1 item, max 40 x 30 x 15 cm", "2 bags, max 8 kg each, 55 x 40 x 23 cm"] ] },
        list: ["<strong>Top-tier status:</strong> HON Circle, Senator and Star Alliance Gold members on Economy Basic on short and medium-haul may bring one carry-on bag free in addition to the personal item.",
          "<strong>Also allowed in the cabin, within your allowance:</strong> a foldable garment bag (max 57 x 54 x 15 cm and 8 kg) and a foldable pushchair, 1 per infant. Duty-free purchases do not count as an additional item."] },
      { h: "🧳 SWISS checked baggage by fare", p: "On European routes you choose between a low-priced fare without checked baggage and Comfort and Flex fares that include one item. Additional baggage can be booked for a fee.",
        table: { head: ["Fare", "Checked baggage"], rows: [
          ["Economy Basic and Light (Europe)", "None"],
          ["Economy Comfort, Comfort Green and Flex (Europe)", "1 x max 23 kg"],
          ["Business Comfort and Comfort Green (Europe)", "1 x max 32 kg"],
          ["Business Flex (Europe)", "2 x max 32 kg, 64 kg total"],
          ["Economy (intercontinental)", "1 x max 23 kg"],
          ["Premium Economy (intercontinental)", "2 x max 23 kg, 46 kg total"],
          ["Business (intercontinental)", "2 x max 32 kg, 64 kg total"],
          ["First (intercontinental)", "3 x max 32 kg"] ] },
        list: ["<strong>Size and limits:</strong> a bag must not exceed 158 cm (width + height + depth); larger or heavier bags travel as excess baggage for a charge. SWISS does not accept a bag weighing more than 32 kg and exceeding total dimensions of 292 cm.",
          "<strong>Status:</strong> HON Circle, Senators and Star Gold get +1 bag of 23 kg in Economy and +1 of 32 kg in Business and First on Comfort, Comfort Green, Flex and Business fares, but not on Economy Basic or Light.",
          "<strong>Infants:</strong> small children in all fare classes get a foldable pushchair or travel pram; infants in Comfort, Comfort Green and Flex also get one bag of up to 23 kg."] }
    ],
    faq: [
      ["What is the SWISS baggage allowance?", "A personal item (40 x 30 x 15 cm) on every fare and, from Economy Light, an 8 kg carry-on (55 x 40 x 23 cm). Checked: none on Basic and Light in Europe, 1 x 23 kg on Comfort, Comfort Green and Flex, 1 x 23 kg Economy intercontinental."],
      ["What is the SWISS carry-on size and weight?", "55 x 40 x 23 cm and up to 8 kg; the personal item is up to 40 x 30 x 15 cm. Business and First may bring 2 carry-on bags."],
      ["Does SWISS Economy Basic or Light include a checked bag?", "No. Economy Basic and Light include no checked baggage on European routes, and you can book additional baggage for a fee. Economy Basic on short and medium-haul also has no carry-on bag."],
      ["What is the SWISS checked baggage weight limit?", "Economy bags are up to 23 kg and Business bags up to 32 kg; each bag up to 158 cm. SWISS does not accept a bag over 32 kg that also exceeds 292 cm in total."],
      ["How many checked bags does SWISS Business include?", "Business Flex in Europe includes 2 x 32 kg; Business Comfort 1 x 32 kg; intercontinental Business 2 x 32 kg and First 3 x 32 kg."],
      ["Can I take skis or extra bags with SWISS?", "Excess baggage is charged per additional item above your free allowance. Status holders get an extra bag on Comfort, Comfort Green, Flex and Business fares."]
    ],
    sources: [["https://www.swiss.com/us/en/prepare/baggage/hand-baggage", "SWISS &mdash; Hand baggage"], ["https://www.swiss.com/us/en/prepare/baggage/checked-baggage", "SWISS &mdash; Checked baggage"]]
  },
  "JetBlue": {
    title: "JetBlue Baggage Allowance: Carry-On Included, Checked Bag Fees",
    desc: "JetBlue baggage allowance: one carry-on 22 x 14 x 9 in and a personal item on all fares, first checked bag from $45, second from $59, 62 in and 50 lb limits.",
    answer: "JetBlue lets every customer bring one carry-on bag (up to 22 x 14 x 9 in, 55.88 x 35.56 x 22.86 cm) and one personal item (17 x 13 x 8 in) on all fares, with no weight limit as long as you can lift the bag. Within the U.S., Latin America, the Caribbean and Canada, the first checked bag is $45 and the second $59 off-peak (booked more than 24 hours before departure) on Main and EvenMore fares, with Mint including two bags. Checked bags should not exceed 62 in and 50 lb.",
    stats: [["22 x 14 x 9 in", "carry-on bag, all fares"], ["$45 / $59", "1st / 2nd checked bag, off-peak"], ["$49 / $69", "1st / 2nd checked bag, peak"], ["50 lb", "most a standard checked bag may weigh"]],
    sections: [
      { h: "🎒 JetBlue carry-on baggage allowance", p: "Each customer is allowed one carry-on bag and one personal item on all fares. Carry-on bags go in the overhead bin or under the seat; personal items go beneath the seat.",
        table: { head: ["Item", "Maximum size", "Weight"], rows: [
          ["Carry-on bag (overhead bin)", "22 x 14 x 9 in (55.88 x 35.56 x 22.86 cm), including wheels and handles", "No weight limit; you must be able to lift it"],
          ["Personal item (under the seat)", "17 x 13 x 8 in (43.2 x 33 x 20.32 cm)", "No weight limit"] ] },
        list: ["<strong>Not counted:</strong> assistive devices, duty-free items in a reasonable and limited amount, one diaper bag for lap infants, and special items such as a coat, umbrella or infant car seat.",
          "<strong>Garment bags:</strong> closets for hanging garment bags are not available on JetBlue planes.",
          "<strong>Mixed trips:</strong> on a trip with a JetBlue and an American flight, the first airline on your first leg each way generally determines the bag rules; check both airlines."] },
      { h: "🧳 JetBlue checked bag fees", p: "Within the U.S., Latin America, the Caribbean and Canada, for bags added more than 24 hours before departure. Peak pricing applies at busy times such as Thanksgiving, the winter holidays and peak spring and summer; JetBlue lists the dates.",
        table: { head: ["Fare", "Off-peak", "Peak"], rows: [
          ["Main, Main Base, Main Flex, EvenMore, EvenMore Base, EvenMore Flex", "1st $45, 2nd $59", "1st $49, 2nd $69"],
          ["Mint and Mint Flex", "1st and 2nd included (up to 70 lb / 32 kg)", "1st and 2nd included (up to 70 lb / 32 kg)"],
          ["Mosaic 1", "1st included, 2nd $59", "1st included, 2nd $69"],
          ["Mosaic 2-4", "1st and 2nd included", "1st and 2nd included"],
          ["JetBlue Plus and Premier cardmembers", "1st included, 2nd $59", "1st included, 2nd $69"] ] },
        list: ["<strong>Third bag or more:</strong> $200 on all routes except transatlantic, where it is $200 / £150 / €185 off-peak and $210 / £160 / €195 peak; a 3rd bag can only be added at check-in or at the airport.",
          "<strong>Savings:</strong> up to $10 each on your first two checked bags when you add them before check-in (at least 24 hours before departure).",
          "<strong>Transatlantic:</strong> Main Base and EvenMore Base pay $75 / £65 / €70 for the first bag off-peak ($85 / £75 / €80 peak) and $109 / £89 / €99 for the second ($119 / £99 / €109 peak); Main and EvenMore include the first bag.",
          "<strong>Refunds:</strong> checked bag fees are refundable only if the entire booking is canceled before scheduled departure."] },
      { h: "⚖️ JetBlue size, weight and excess fees", p: "Checked bags should not exceed 62 in (157.48 cm) in length + width + height or 50 lb (22.68 kg).",
        table: { head: ["Case", "Fee or limit"], rows: [
          ["Oversized, 63 to 80 in (160 to 203.3 cm)", "$150 / £120 / €140 per bag"],
          ["Over 80 in", "Not accepted"],
          ["Overweight, 51 to 99 lb (23.13 to 44.91 kg)", "$150 / £120 / €140 per bag"],
          ["Over 99 lb", "Not accepted"] ] },
        list: ["If a bag is both overweight and oversized, both fees apply.",
          "Some destinations have their own limits: flights to or from Ecuador allow a maximum of two bags and no bag over 70 lb; Dominican Republic and several other destinations do not accept bags over 70 lb."] }
    ],
    faq: [
      ["What is the JetBlue baggage allowance?", "One carry-on bag (22 x 14 x 9 in) and one personal item on all fares. Checked bags cost from $45 for the first and $59 for the second within the U.S., Latin America, the Caribbean and Canada; Mint includes two."],
      ["What is the JetBlue carry-on size and weight?", "22 x 14 x 9 inches (55.88 x 35.56 x 22.86 cm) including wheels and handles for the overhead bin; the personal item is 17 x 13 x 8 inches. There is no weight limit, but you must be able to lift the bag."],
      ["Does JetBlue Main Base include a checked bag?", "No. Main Base pays $45 for the first and $59 for the second bag off-peak (booked more than 24 hours before departure) within the U.S., Latin America, the Caribbean and Canada; transatlantic Main Base pays $75 for the first."],
      ["What is the JetBlue checked bag size and weight limit?", "62 inches (157.48 cm) and 50 pounds (22.68 kg); bags over those limits pay an oversize or overweight fee, and bags over 80 in or 99 lb are not accepted."],
      ["How much is the third checked bag on JetBlue?", "$200 on all routes except transatlantic, where it is $200 / £150 / €185 off-peak and $210 / £160 / €195 peak."],
      ["Can I save money on JetBlue bag fees?", "Yes, up to $10 each on your first two checked bags when you add them at least 24 hours before departure, and you can pay with TrueBlue points before check-in."]
    ],
    sources: [["https://www.jetblue.com/help/carry-on-bags", "JetBlue &mdash; Carry-on bags"], ["https://www.jetblue.com/help/checked-bags", "JetBlue &mdash; Checked bag policy"]]
  },
  "Norwegian": {
    title: "Norwegian Baggage Allowance: 10 kg Hand, Checked 23 kg by Fare",
    desc: "Norwegian baggage allowance: underseat bag on every fare, overhead bag on LowFare+ and Flex, 10 or 15 kg hand total, checked bag from LowFare+ (1 x 23 kg).",
    answer: "Everyone on Norwegian can bring one small underseat bag (30 x 40 x 20 cm); LowFare+ and Flex tickets also include one overhead cabin bag (55 x 40 x 23 cm). Hand baggage weighs up to 10 kg combined on LowFare and LowFare+ and 15 kg combined on Flex. Checked baggage: LowFare includes none, LowFare+ includes 1 x 23 kg and Flex includes 2 x 23 kg. Each checked bag must weigh between 2 kg and 32 kg, and all checked bags together cannot exceed 74 kg.",
    stats: [["10 kg / 15 kg", "combined hand baggage, LowFare+ / Flex"], ["0 / 1 / 2 x 23 kg", "LowFare / LowFare+ / Flex checked"], ["32 kg", "most a single checked bag may weigh"], ["15 USD", "per kilo over 23 kg, per leg"]],
    sections: [
      { h: "🎒 Norwegian hand baggage allowance", p: "Your ticket type determines the allowance, and it is the combined weight of your hand baggage that counts.",
        table: { head: ["Fare", "Weight limit", "Underseat bag", "Overhead cabin bag"], rows: [
          ["LowFare", "10 kg", "30 x 40 x 20 cm", "Not included"],
          ["LowFare+", "10 kg combined", "30 x 40 x 20 cm", "55 x 40 x 23 cm"],
          ["Flex", "15 kg combined", "30 x 40 x 20 cm", "55 x 40 x 23 cm"] ] },
        list: ["<strong>Airport shopping bag:</strong> everyone may also bring one airport shopping bag in addition to their ticket type allowance.",
          "<strong>Pack essentials</strong> such as medicine, baby items and valuables in your underseat bag.",
          "<strong>Instead of a bag:</strong> you can bring an item such as a gift box or mini board instead of a standard bag, if it does not exceed the hand baggage limits or the restricted items list."] },
      { h: "🧳 Norwegian checked baggage by ticket type", p: "You can add checked baggage to an existing booking until 4 hours before departure, online or through the Contact Centre. Norwegian says booking extra baggage online before you check in can save up to 50%.",
        table: { head: ["Fare", "Checked baggage included"], rows: [
          ["LowFare", "No bags included"],
          ["LowFare+", "1 x 23 kg"],
          ["Flex", "2 x 23 kg"] ] },
        list: ["<strong>Weight:</strong> each bag must not weigh more than 32 kg or less than 2 kg, and the total of your checked bags cannot weigh more than 74 kg.",
          "<strong>Size:</strong> each bag must not exceed a total of 300 cm (length + height + width).",
          "<strong>Excess:</strong> charges apply to any piece over the 2 checked bags and 1 small checked bag limit, and to any checked bag weighing over 23 kg: 15 USD per kilo, per leg on the US site. A small bag over 10 kg is treated as a regular checked bag.",
          "<strong>Infants (under 2):</strong> 5 kg of checked baggage included, plus one car seat and/or one stroller as checked baggage. Children aged 2 to 11 get what their ticket type allows, plus a car seat and/or stroller.",
          "<strong>Special baggage</strong> such as ski equipment and golf bags cannot be ordered as checked baggage."] }
    ],
    faq: [
      ["What is the Norwegian baggage allowance?", "An underseat bag (30 x 40 x 20 cm) on every fare; LowFare+ and Flex add an overhead bag (55 x 40 x 23 cm). Checked: none on LowFare, 1 x 23 kg on LowFare+, 2 x 23 kg on Flex."],
      ["What is the Norwegian hand baggage size and weight?", "Underseat bag 30 x 40 x 20 cm and overhead bag 55 x 40 x 23 cm. The combined hand baggage weight is up to 10 kg on LowFare and LowFare+ and up to 15 kg on Flex."],
      ["Does Norwegian LowFare include a checked bag?", "No. LowFare includes no checked bags and only the underseat bag for hand baggage; the overhead cabin bag comes with LowFare+ and Flex."],
      ["What is the Norwegian checked baggage weight limit?", "Each bag must weigh between 2 kg and 32 kg, all checked bags together up to 74 kg, and each bag up to 300 cm in total dimensions. Any bag over 23 kg incurs excess baggage charges."],
      ["How much is excess baggage on Norwegian?", "15 USD per kilo per leg on the US site for any checked bag weighing over 23 kg, and charges for any piece over the 2 checked bags plus 1 small checked bag limit."],
      ["Can I add a bag to my Norwegian booking later?", "Yes, until 4 hours before departure, online or through the Contact Centre; booking online before check-in saves up to 50% according to Norwegian."]
    ],
    sources: [["https://www.norwegian.com/us/travel-info/baggage/hand-baggage/", "Norwegian &mdash; Hand baggage"], ["https://www.norwegian.com/us/travel-info/baggage/checked-baggage/", "Norwegian &mdash; Checked baggage"]]
  },
  "Malaysia Airlines": {
    title: "Malaysia Airlines Baggage Allowance: 7 kg Cabin, Checked 20-35 kg",
    desc: "Malaysia Airlines baggage allowance: one 7 kg cabin bag 56 x 36 x 23 cm in Economy, checked 20 kg Value, 25 kg Basic, 35 kg Flex, 32 kg per bag.",
    answer: "Malaysia Airlines Economy passengers can carry one piece of cabin baggage up to 7 kg (15 lb) plus one personal item within the same 7 kg, and large cabin baggage must not exceed 56 x 36 x 23 cm (115 cm in total). Checked baggage in Economy is 20 kg on Value, 25 kg on Basic and 35 kg on Flex; a single checked item can weigh up to 32 kg, and a bag under 158 cm in length + height + width is standard.",
    stats: [["7 kg", "Economy cabin baggage, 56 x 36 x 23 cm"], ["20 / 25 / 35 kg", "checked: Value / Basic / Flex"], ["32 kg", "most a single checked item may weigh"], ["158 cm", "linear dimensions per checked bag"]],
    sections: [
      { h: "🎒 Malaysia Airlines cabin baggage allowance", p: "Economy gets one piece and Business two, and a personal item counts inside that weight.",
        table: { head: ["Cabin", "Cabin baggage", "Weight"], rows: [
          ["Economy", "1 piece plus 1 personal item (option A, B or C)", "7 kg (15 lb) in total"],
          ["Business Suite and Business", "2 pieces plus 1 personal item", "14 kg (31 lb) combined, each piece up to 7 kg"] ] },
        list: ["<strong>Size:</strong> large or bulky cabin baggage must not exceed 56 x 36 x 23 cm (115 cm in total) and must be stored in the overhead compartment.",
          "<strong>Personal item, one of:</strong> a briefcase, handbag, laptop bag or small camera bag; with an infant, an infant amenities bag up to 5 kg, a small carrycot or a cabin-size collapsible stroller; plus a duty-free shopping bag, crutches or walking stick, or an overcoat.",
          "<strong>Liquids:</strong> containers up to 100 ml in one re-sealable transparent bag of up to one litre in total.",
          "<strong>Enrich:</strong> the extra allowance for Platinum, Gold and oneworld Emerald and Sapphire members applies only to checked baggage."] },
      { h: "🧳 Malaysia Airlines checked baggage by Economy fare", p: "This is the Economy allowance table Malaysia Airlines publishes for its Enrich members, shown here without the elite extra. Platinum members get double the base allowance, Gold, Silver and oneworld tiers get more on top.",
        table: { head: ["Economy fare", "Basic allowance"], rows: [
          ["Economy Value", "20 kg"],
          ["Economy Basic", "25 kg"],
          ["Economy Flex", "35 kg"] ] },
        list: ["<strong>Enrich extras (Economy):</strong> Platinum +100% (Value 20 + 20 = 40 kg, Basic 25 + 25 = 50 kg, Flex 35 + 35 = 70 kg); Gold +15 / +15 / +18 kg; Silver +10 kg; oneworld Emerald +20 kg and Sapphire +15 kg.",
          "<strong>Business:</strong> from 1 January 2026 the Business Class table lists 40 kg Basic, 50 kg Flex and 55 kg Suite as the base for Enrich Platinum, Gold and Silver additions.",
          "<strong>Some flights follow a different table:</strong> Malaysia Airlines excludes Malaysia to Japan and Japan to Malaysia, Malaysia to Jeddah, and routes operated by AMAL.",
          "<strong>Size and weight:</strong> each piece must be under 158 cm (62 in) in length + height + width; between 158 and 204 cm (62 to 80 in) is oversized and may be surcharged; over 204 cm goes through MASKargo. The maximum single item is 32 kg (70 lb).",
          "<strong>Domestic Malaysia:</strong> fully domestic Malaysia bookings in Economy include a checked baggage allowance of 20 kg, per the airline's Economy page."] }
    ],
    faq: [
      ["What is the Malaysia Airlines baggage allowance?", "Economy cabin: one piece up to 7 kg plus a personal item within the 7 kg. Checked: Value 20 kg, Basic 25 kg, Flex 35 kg."],
      ["What is the Malaysia Airlines cabin baggage size and weight?", "Up to 7 kg in Economy and 14 kg combined in Business; large cabin baggage must not exceed 56 x 36 x 23 cm (115 cm in total)."],
      ["How much checked baggage does Malaysia Airlines Economy Value include?", "20 kg for Value, 25 kg for Basic and 35 kg for Flex, per Malaysia Airlines' Enrich baggage table."],
      ["What is the Malaysia Airlines checked baggage weight limit?", "The maximum single item is 32 kg (70 lb) and a bag must be under 158 cm in linear dimensions; 158 to 204 cm is oversized and may be surcharged."],
      ["Do Enrich members get extra baggage on Malaysia Airlines?", "Yes, on checked baggage only: for example Platinum doubles the Economy allowance and oneworld Emerald adds 20 kg."],
      ["Is domestic Malaysia baggage different on Malaysia Airlines?", "The airline's Economy page says fully domestic Malaysia bookings in Economy include 20 kg of checked baggage."]
    ],
    sources: [["https://www.malaysiaairlines.com/us/en/travel-info/baggage/cabin-baggage.html", "Malaysia Airlines &mdash; Cabin baggage"], ["https://www.malaysiaairlines.com/us/en/travel-info/baggage/checked-baggage.html", "Malaysia Airlines &mdash; Checked baggage"], ["https://enrich.malaysiaairlines.com/enrich/news/baggage-allowance/baggage-allowance-updates.html", "Enrich &mdash; Baggage allowance entitlement"], ["https://www.malaysiaairlines.com/hq/en/plan-trip/cabin-classes/economy-class.html", "Malaysia Airlines &mdash; Economy Class"]]
  },
  "Aeromexico": {
    title: "Aeromexico Baggage Allowance: Carry-On 10-15 kg, Bag Fees by Fare",
    desc: "Aeromexico baggage allowance: carry-on 55 x 40 x 25 cm plus a personal item, 10 kg on Basic and 15 kg on Classic, first checked bag $30 USD to the USA.",
    answer: "Aeromexico lets every passenger bring one personal item under the seat plus one carry-on bag of up to 55 x 40 x 25 cm: on Basic the two together can weigh no more than 10 kg, and on Classic up to 15 kg. Basic does not include a checked bag; the first one is $500 MXN on domestic flights, $30 USD on flights to and from the USA and Canada, $35 USD in the Caribbean and Central America, $50 USD to South America and $60 EUR to Europe. Classic gives a 25% discount on checked baggage.",
    stats: [["10 kg", "carry-on plus personal item, Basic"], ["15 kg", "carry-on plus personal item, Classic"], ["$30 USD", "first checked bag, Basic, USA and Canada"], ["25%", "off checked bags on Classic"]],
    sections: [
      { h: "🎒 Aeromexico carry-on baggage allowance", p: "Basic and Classic both include one personal item and one carry-on bag, with different weight limits.",
        table: { head: ["Fare", "Carry-on bag", "Weight limit"], rows: [
          ["Basic", "1 piece, 55 x 40 x 25 cm (21.6 x 15.7 x 9.8 in), plus 1 personal item under the seat", "10 kg (23 lb) between both"],
          ["Classic", "1 piece, 55 x 40 x 25 cm (21.6 x 15.7 x 9.8 in), plus 1 personal item under the seat", "15 kg (33 lb) between both"] ] },
        list: ["<strong>Basic:</strong> 5 extra kg in the carry-on is not included, and the fare is restricted: changes are not allowed and it is non-refundable.",
          "<strong>Classic:</strong> a standard seat is included, check-in opens 48 hours before (Basic: 24 hours), and changes are allowed with a cost."] },
      { h: "🧳 Aeromexico checked baggage on Basic and Classic", p: "Neither fare is shown with a checked bag on Aeromexico's fare pages; the route decides the price or whether it is included on Classic.",
        table: { head: ["Route", "First checked bag, Basic"], rows: [
          ["Domestic (Mexico)", "Not included, $500 MXN"],
          ["Transborder (USA and Canada)", "Not included, $30 USD"],
          ["The Caribbean and Central America", "Not included, $700 MXN or $35 USD"],
          ["South America", "Not included, $1,000 MXN or $50 USD"],
          ["Europe", "Not included, $1,400 MXN or $60 EUR"] ] },
        list: ["<strong>Classic:</strong> checked baggage can be purchased with a 25% discount and the Classic fare does not include it on domestic flights. Aeromexico's footnote adds that on international flights checked baggage is included except to the USA, Canada, South America and the Caribbean; check the terms for your route.",
          "<strong>Paying:</strong> you can pay for the first bag on the website, the app, the call center or at the airport during check-in.",
          "<strong>Aeromexico Rewards:</strong> the Rewards level benefits do not apply to purchases made in Basic class V, except the additional suitcase granted by the Elite and Elite Plus levels."] }
    ],
    faq: [
      ["What is the Aeromexico baggage allowance?", "One personal item and one carry-on bag (55 x 40 x 25 cm): up to 10 kg combined on Basic and 15 kg combined on Classic. Checked bags are not included on Basic."],
      ["What is the Aeromexico carry-on size and weight?", "55 x 40 x 25 cm (21.6 x 15.7 x 9.8 in); the weight limit between carry-on and personal item is 10 kg on Basic and 15 kg on Classic."],
      ["How much is the first checked bag on Aeromexico Basic?", "$500 MXN on domestic flights, $30 USD to and from the USA and Canada, $35 USD or $700 MXN in the Caribbean and Central America, $50 USD or $1,000 MXN to South America and $60 EUR or $1,400 MXN to Europe."],
      ["Does Aeromexico Classic include a checked bag?", "Not on domestic flights; Aeromexico says international checked baggage is included except to the USA, Canada, South America and the Caribbean. Classic also gives a 25% discount on checked baggage."],
      ["Can I change an Aeromexico Basic ticket?", "No. Basic does not allow changes and is non-refundable; Classic allows changes with a cost."],
      ["Where can I pay for a checked bag on Aeromexico?", "On the website, the app, the call center or at the airport during check-in."]
    ],
    sources: [["https://www.vuela.aeromexico.com/branded-fares/basic/", "Aeromexico &mdash; Basic fare"], ["https://www.vuela.aeromexico.com/branded-fares/classic/", "Aeromexico &mdash; Classic fare"]]
  },
  "Frontier": {
    title: "Frontier Baggage Allowance: Personal Item Free, Bag Fees and Sizes",
    desc: "Frontier baggage: free personal item 14 x 18 x 8 in, paid carry-on 24 x 16 x 10 in up to 35 lb, checked bag 62 in and 40 lb, overweight $75 to $129.",
    answer: "A Frontier ticket includes one personal item (14 x 18 x 8 in) in each direction; carry-on bags (up to 24 x 16 x 10 in and 35 lb) and checked bags (up to 62 linear inches and 40 lb) are paid unless a bundle or status includes them, and prices are higher at the airport. Oversize bags of 63 to 110 inches cost $75 per bag per direction; overweight bags of 41 to 50 lb cost $75 and 51 to 99.99 lb cost $129 on bookings made on or after 4 April 2026 ($100 before).",
    stats: [["14 x 18 x 8 in", "free personal item"], ["24 x 16 x 10 in", "carry-on bag, up to 35 lb, paid"], ["62 in / 40 lb", "checked bag size and weight"], ["$75", "oversize 63-110 in or overweight 41-50 lb"]],
    sections: [
      { h: "🎒 Frontier carry-on and personal item", p: "Frontier checks the size of your carry-on during boarding. Bags larger than the allowed dimensions are subject to an additional charge.",
        table: { head: ["Item", "Maximum size", "Weight"], rows: [
          ["Personal item (free, one per passenger per direction)", "14 H x 18 W x 8 D in, including handles, wheels and straps", "-"],
          ["Carry-on bag (paid unless in a bundle or status)", "24 H x 16 W x 10 D in, including handles, wheels and straps", "Up to 35 lb"] ] },
        list: ["<strong>Personal item examples:</strong> purses, totes, computer bags, briefcases and kids' backpacks.",
          "<strong>Carry-on examples:</strong> large backpacks, small duffel bags and small wheeled suitcases; it must fit in the overhead bin or under the seat.",
          "<strong>Buying early:</strong> prices are typically higher at the airport, so Frontier recommends buying baggage in advance. If you bought a bundle, a carry-on and/or checked bags may already be included.",
          "<strong>Elite:</strong> all Elite members may bring a carry-on bag for free, and Elite 100k bookings can bring a carry-on and check one bag for free."] },
      { h: "🧳 Frontier checked bag size, weight and fees", p: "Checked bag prices vary by route and when you buy, so Frontier gives you a Bag Price Checker; the table below shows the limits and charges Frontier publishes.",
        table: { head: ["Item", "Limit or charge"], rows: [
          ["Checked bag size", "62 linear inches (length + width + depth), including handles, wheels and straps"],
          ["Checked bag weight", "40 lb (18.1 kg) or less"],
          ["Oversize, 63 to 110 linear inches", "$75 per bag, per direction"],
          ["Over 110 linear inches", "Not accepted (except assistive devices)"],
          ["Overweight, 41 to 50 lb", "$75 per bag, per direction"],
          ["Overweight, 51 to 99.99 lb", "$129 per bag if booked on or after 4 April 2026; $100 if booked earlier"],
          ["Over 99.99 lb", "Not accepted (except assistive devices)"] ] },
        list: ["<strong>Special items:</strong> bicycles are $100 per bag per direction for bookings made on or after 29 May 2026 ($75 on or before 28 May), and antlers are $100.",
          "<strong>Military:</strong> active duty military passengers, subject to verification, may bring one carry-on and/or check up to two bags, which may be oversized or overweight, for free.",
          "<strong>Fees are non-refundable.</strong> Medical devices, wheelchairs and essential baby gear can be carried or checked at no charge and do not count toward your allowance."] }
    ],
    faq: [
      ["What is the Frontier baggage allowance?", "One free personal item (14 x 18 x 8 in) per direction. Carry-on bags (24 x 16 x 10 in, 35 lb) and checked bags (62 in, 40 lb) are paid unless a bundle or status covers them."],
      ["What is the Frontier carry-on size and weight?", "24 H x 16 W x 10 D inches including handles, wheels and straps, and no more than 35 lb. The free personal item is 14 x 18 x 8 inches."],
      ["Does Frontier include a carry-on bag?", "No, the carry-on bag is paid unless a bundle or Elite status includes it; the personal item is free. If there is no overhead space, a bag may be gate-checked at no additional cost."],
      ["What is the Frontier checked bag weight limit?", "40 lb (18.1 kg) and 62 linear inches. Overweight bags pay $75 for 41 to 50 lb and $129 for 51 to 99.99 lb on bookings from 4 April 2026; bags over 99.99 lb are not accepted."],
      ["How much is Frontier's oversize bag fee?", "$75 per bag per direction for 63 to 110 linear inches; bags over 110 inches are not accepted."],
      ["Is it cheaper to buy Frontier bags in advance?", "Yes, prices are typically higher at the airport; use Frontier's Bag Price Checker for your route."]
    ],
    sources: [["https://faq.flyfrontier.com/help/bags-seats-general-info-what-are-the-sizes-and-weight-limits-for-bags", "Frontier &mdash; Bag size limits and weight allowances"], ["https://www.flyfrontier.com/optional-services", "Frontier &mdash; Optional services"]]
  },
  "IndiGo": {
    title: "IndiGo Baggage Allowance: 7 kg Cabin, 15 kg Check-In Domestic",
    desc: "IndiGo baggage allowance: one 7 kg handbag up to 115 cm plus a 3 kg personal item, 15 kg free check-in domestic, 20 to 30 kg by international route.",
    answer: "IndiGo allows one handbag of up to 7 kg and 115 cm (length + width + height) plus one personal article such as a purse or laptop bag of up to 3 kg. Free check-in baggage is 15 kg per person on domestic flights (an extra 10 kg for double or multi-seat bookings), and on international flights it is 20 kg on routes such as Bangkok, Bali, Kathmandu, Male and Phuket, and 30 kg on routes such as Dubai, Singapore, Istanbul and Hong Kong. The Lite fare includes no check-in baggage, and one checked bag cannot weigh more than 32 kg.",
    stats: [["7 kg + 3 kg", "handbag plus personal article"], ["15 kg", "free check-in, domestic"], ["20 / 30 kg", "free check-in, international by route"], ["INR 2,000", "Lite fare 15 kg check-in, domestic"]],
    sections: [
      { h: "🎒 IndiGo hand baggage allowance", p: "IndiGo allows one handbag plus one small personal article on a standard fare.",
        table: { head: ["Item", "Weight", "Size"], rows: [
          ["One handbag", "Up to 7 kg", "115 cm in length + width + height"],
          ["One personal article (ladies' purse or a small bag containing a laptop)", "Up to 3 kg", "-"] ] },
        list: ["<strong>Codeshare sectors:</strong> on Australia, EU, African and US codeshare sectors IndiGo shows hand baggage of one bag, up to 7 kg or 8 kg depending on the sector, with dimensions 55 x 35 x 25 cm.",
          "<strong>Lite fare:</strong> allows only one cabin bag of up to 7 kg and no check-in baggage.",
          "<strong>Liquids:</strong> each container up to 100 ml, fitting in a transparent re-sealable 1 litre plastic bag."] },
      { h: "🧳 IndiGo free check-in baggage allowance", p: "The domestic allowance is per person; international allowances depend on the sector.",
        table: { head: ["Flight", "Free check-in baggage"], rows: [
          ["Domestic", "15 kg per person; double or multi-seat bookings get an extra 10 kg"],
          ["Bangkok, Bali, Kathmandu, Krabi, Male, Mauritius, Phuket", "20 kg per person"],
          ["Jeddah, Madinah", "30 kg per person, including Zam Zam water on flights from Jeddah or Madinah to India"],
          ["Abu Dhabi, Amsterdam, Doha, Dubai, Hong Kong, Istanbul, Kuala Lumpur, Manchester, Singapore and others", "30 kg per person"],
          ["Nairobi", "25 kg per person"],
          ["Jaffna", "15 kg per person"],
          ["Australia codeshare, from Australia / from India", "46 kg / 30 kg (2 pieces)"],
          ["US codeshare", "46 kg (2 pieces, max 23 kg per piece)"] ] },
        list: ["<strong>Size and weight:</strong> a checked bag must not exceed 158 cm (62 in) in length + width + height, and carrying more than 32 kg in one bag is not allowed, even with excess baggage charges.",
          "<strong>Extra pieces:</strong> additional pieces can be pre-booked online (maximum two pieces) at INR 800 per piece service fee, and cost INR 1,000 per piece at the airport; excess weight is charged on top.",
          "<strong>Lite fare check-in:</strong> INR 2,000 for 15 kg (1 piece) on domestic flights and INR 3,500 on international flights, pre-booked or at the airport."] }
    ],
    faq: [
      ["What is the IndiGo baggage allowance?", "Hand baggage: one 7 kg handbag (115 cm in total) plus a 3 kg personal article. Free check-in: 15 kg domestic, and 20 or 30 kg on most international sectors."],
      ["What is the IndiGo cabin baggage size and weight?", "One handbag up to 7 kg and 115 cm in length + width + height, plus one personal article up to 3 kg such as a purse or small laptop bag."],
      ["Does IndiGo Lite include check-in baggage?", "No. Lite includes only one cabin bag up to 7 kg. Check-in baggage for Lite is INR 2,000 for 15 kg domestic and INR 3,500 international."],
      ["What is the IndiGo check-in baggage weight limit?", "15 kg free on domestic flights (one piece), 20 or 30 kg on most international routes, and no single bag can weigh more than 32 kg or exceed 158 cm."],
      ["How much is an extra piece of baggage on IndiGo?", "INR 800 per extra piece when pre-booked online (maximum two pieces) and INR 1,000 per piece at the airport, plus charges for excess weight."],
      ["Do IndiGo double seat bookings get more baggage?", "Yes, domestic double or multi-seat bookings get an extra 10 kg of check-in baggage."]
    ],
    sources: [["https://www.goindigo.in/baggage/baggage-allowance.html", "IndiGo &mdash; Baggage allowance"], ["https://www.goindigo.in/add-on-services/excess-baggage.html", "IndiGo &mdash; Excess baggage"]]
  },
  "Thai Airways": {
    title: "Thai Airways Baggage Allowance: 7 kg Cabin, Checked by Piece",
    desc: "Thai Airways baggage allowance: 7 kg carry-on 56 x 45 x 25 cm, Economy 1 x 23 kg on Standard and Saver, 2 x 23 kg on Flex, 158 cm per piece.",
    answer: "Thai Airways Economy passengers can carry one piece of hand baggage of up to 7 kg (56 x 45 x 25 cm) plus free items such as a handbag. Under Thai's piece concept, for travel from 2 March 2026 on domestic routes, within Asia, Australia and New Zealand, and between Europe, Africa, the Middle East and Asia, Economy Flex and Full Flex include 2 pieces of 23 kg, Standard, Saver and Redeem include 1 piece of 23 kg, and domestic Economy is 1 piece of 23 kg. Each piece may measure up to 158 cm.",
    stats: [["7 kg", "Economy hand baggage, 56 x 45 x 25 cm"], ["1 x 23 kg", "Economy Standard, Saver and domestic"], ["2 x 23 kg", "Economy Flex and Full Flex, international"], ["158 cm", "linear dimension per piece"]],
    sections: [
      { h: "🎒 Thai Airways carry-on baggage allowance", p: "Passengers may hand carry one piece in addition to the checked baggage allowance.",
        table: { head: ["Cabin", "Pieces", "Weight and size"], rows: [
          ["Economy and Economy Plus", "1", "Up to 7 kg each; 56 cm length, 45 cm width, 25 cm thickness, including wheels, handles and side pockets"],
          ["Royal First, Royal Silk and Premium Economy Plus", "1", "Up to 7 kg each; same size"] ] },
        list: ["<strong>Where it goes:</strong> the bag must be placed in the overhead compartment or under the seat in front.",
          "<strong>Free items:</strong> a handbag, wallet, purse, notebook or portable personal computer within 37.5 x 25 x 12.5 cm (or 75 cm in total, up to 1.5 kg), crutches or walking sticks for those who need them, and infant food.",
          "<strong>Spot checks:</strong> Thai may check the bag against a test unit or weighing machine at check-in or the boarding gate."] },
      { h: "🧳 Thai Airways checked baggage by fare (piece concept)", p: "Thai announced on 25 November 2025 that it moves from the weight concept to the piece concept. It applies to tickets for travel commencing on or after 2 March 2026 on all domestic routes, journeys within Asia, Australia and New Zealand, and journeys between Europe, Africa, the Middle East and that region; additional routes follow, and travel to and from the USA and Canada already uses the piece concept.",
        table: { head: ["Fare and route", "Free checked baggage"], rows: [
          ["Domestic, Economy (Flexi, Full Flex, Standard, Saver)", "1 piece, 23 kg"],
          ["International Economy, Flex and Full Flex", "2 pieces, 23 kg per piece"],
          ["International Economy, Standard, Saver and Redeem", "1 piece, 23 kg"],
          ["Premium Economy", "2 pieces, 23 kg per piece"],
          ["Royal Silk and Redeem, Premium Economy Plus", "2 pieces, 32 kg per piece"],
          ["Royal First", "3 pieces, 32 kg per piece"] ] },
        list: ["<strong>Size:</strong> each piece must not exceed a total linear dimension of 158 cm (62 in).",
          "<strong>Infants without a seat:</strong> 1 piece according to the adult's allowance.",
          "<strong>Older weight table:</strong> Thai's Checked Baggage page still shows the weight concept for some routes (for example 23 kg for Saver and Standard and 30 kg for Flexi and Full Flex on tickets sold after 1 April 2025, and no allowance for Saver between Bangkok and Cambodia, Laos, Myanmar and Vietnam); the allowance printed on your ticket is the one that applies.",
          "<strong>Partner airlines:</strong> on codeshare flights with a point in the United States, the marketing carrier's baggage rule applies, and other partner itineraries may follow the partner's rules."] }
    ],
    faq: [
      ["What is the Thai Airways baggage allowance?", "Hand baggage: one piece up to 7 kg (56 x 45 x 25 cm). Checked: Economy 1 x 23 kg on Standard, Saver and domestic, 2 x 23 kg on Flex and Full Flex, under the piece concept from 2 March 2026."],
      ["What is the Thai Airways carry-on size and weight?", "Up to 7 kg, with maximum length 56 cm, width 45 cm and thickness 25 cm including wheels, handles and side pockets."],
      ["Does Thai Airways Economy Saver include a checked bag?", "Thai's piece-concept announcement lists 1 piece of 23 kg for Standard, Saver and Redeem, but its older weight table shows no allowance for Saver on routes between Bangkok and Cambodia, Laos, Myanmar and Vietnam; check your ticket."],
      ["What is the Thai Airways checked baggage size limit?", "Each piece must not exceed 158 cm (62 in) in total linear dimensions, and Economy pieces are 23 kg."],
      ["Did Thai Airways change to the piece concept?", "Yes: announced 25 November 2025 for travel on or after 2 March 2026 on domestic routes, Asia, Australia and New Zealand, and Europe, Africa and the Middle East to Asia, with more routes to follow."],
      ["Do Royal Orchid Plus members get extra baggage on Thai?", "Thai lists extra allowance for Silver, Star Alliance Gold and Platinum members on its flights; check the Royal Orchid Plus page for the figure for your tier."]
    ],
    sources: [["https://www.thaiairways.com/en-th/content/news-and-announcements/piece-concept/", "Thai Airways &mdash; Piece concept announcement"], ["https://www.thaiairways.com/en-th/content/baggage/checked-baggage/", "Thai Airways &mdash; Checked baggage"], ["https://www.thaiairways.com/en-th/content/baggage/carry-on-baggage/", "Thai Airways &mdash; Carry-on baggage"]]
  },
  "El Al": {
    title: "EL AL Baggage Allowance: 8 kg Carry-On, 23 kg Checked by Fare",
    desc: "EL AL baggage allowance: one 8 kg carry-on up to 115 cm in Economy, 1 x 23 kg checked on Classic and Flex to Europe and North America, paid on Lite.",
    answer: "EL AL Economy passengers can carry one hand-baggage piece of up to 8 kg (56 x 45 x 25 cm, 115 cm in total). On flights to Europe and the Middle East one 23 kg checked bag is paid on Lite and included on Classic and Flex; flights from and to North America have Classic and Flex only, with one 23 kg bag included. Premium includes 2 x 23 kg and Business 2 x 32 kg. Each Economy checked piece can weigh up to 23 kg, and extra pieces cost a fee that varies by destination and date.",
    stats: [["8 kg", "Economy carry-on, up to 115 cm total"], ["1 x 23 kg", "checked bag, Classic and Flex"], ["2 x 23 kg", "Premium class checked bags"], ["2 x 32 kg", "Business class checked bags"]],
    sections: [
      { h: "🎒 EL AL carry-on baggage allowance", p: "This comes from EL AL's summary of its terms of contract. Your ticket states the allowance for your class and tier.",
        table: { head: ["Class", "Pieces and weight"], rows: [
          ["Economy", "1 piece, maximum 8 kg (17 lb)"],
          ["Economy, Gold and Platinum frequent flyers", "1 piece, up to 12 kg (26 lb), including a laptop"],
          ["Business", "1 piece up to 16 kg (35 lb) and 1 laptop"],
          ["First", "2 pieces: 16 kg (35 lb) and 8 kg (17 lb)"] ] },
        list: ["<strong>Size:</strong> pieces must not exceed 115 cm (45 in) in total: length 56 cm (22 in), depth 25 cm (10 in), width 45 cm (18 in).",
          "<strong>Full cabin:</strong> in unusual cases with limited storage space, carry-ons may be sent to the aircraft cargo hold.",
          "<strong>Spot checks:</strong> spot checks may be performed during boarding to ensure compliance."] },
      { h: "🧳 EL AL checked baggage by fare", p: "EL AL says the allowance depends mainly on your travel class and destination, and that the number and weight of bags included are on your ticket and in Manage Your Booking. You can add pieces up to three hours before the flight.",
        table: { head: ["Economy fare", "Europe, Dubai and Morocco", "North America"], rows: [
          ["Lite", "1 piece (23 kg) paid, fee varies", "Not offered"],
          ["Classic", "1 piece (23 kg) included", "1 piece (23 kg) included"],
          ["Flex", "1 piece (23 kg) included", "1 piece (23 kg) included"] ] },
        list: ["<strong>Extra pieces:</strong> two to five additional pieces of 23 kg can be pre-ordered; the fee varies with the destination and date.",
          "<strong>Premium class</strong> includes up to 2 pieces of up to 23 kg each; <strong>Business class</strong> up to 2 pieces of up to 32 kg each.",
          "<strong>Paying:</strong> on the website without handling fees, through the EL AL Service Center (handling fee $5 per passenger per reservation), at the airport or via a travel agent; prices are per passenger per flight segment.",
          "<strong>Matmid members:</strong> status adds bags in Economy (Silver 2 x 23 kg, Gold and Platinum 2 x 32 kg, Top Platinum 3 x 32 kg), but members are not entitled to checked baggage on Lite tickets.",
          "<strong>Sundor:</strong> the baggage policy on scheduled Sundor flights is the same as EL AL's. Far East and Africa flights have their own policy page."] }
    ],
    faq: [
      ["What is the EL AL baggage allowance?", "Economy carry-on: one piece up to 8 kg and 115 cm in total. Checked: 1 x 23 kg on Classic and Flex to Europe and North America, paid on Lite; Premium 2 x 23 kg and Business 2 x 32 kg."],
      ["What is the EL AL carry-on size and weight?", "One piece up to 8 kg (17 lb) in Economy, with length 56 cm, width 45 cm and depth 25 cm (115 cm in total); Gold and Platinum frequent flyers may carry up to 12 kg."],
      ["Does EL AL Lite include a checked bag?", "No. On flights to Europe and the Middle East the 23 kg bag is pre-ordered at a fee that varies on Lite and is included on Classic and Flex."],
      ["What is the EL AL checked baggage weight limit?", "Each Economy checked piece can weigh up to 23 kg; Business pieces up to 32 kg."],
      ["How much is an extra bag on EL AL?", "The fee varies by destination and date; you can pre-order two to five additional 23 kg pieces up to three hours before the flight, and the Service Center adds a $5 handling fee."],
      ["Where do I find my exact EL AL allowance?", "On your ticket and in Manage Your Booking; EL AL says the number and weight of bags depends on travel class, destination and Matmid status."]
    ],
    sources: [["https://www.elal.com/eng/baggage/baggage-allowance", "EL AL &mdash; Checked baggage allowance"], ["https://www.elal.com/eng/frequentflyer/baggage", "EL AL &mdash; Checked baggage and carry-ons (Matmid)"], ["https://book.elal.com/newBooking/pdfTicketLinks/ENGLISH.pdf", "EL AL &mdash; Summary of terms of contract"]]
  },
  "easyJet": {
    title: "easyJet Baggage Allowance: Cabin Bag Sizes and Hold Bag Weights",
    desc: "easyJet baggage allowance: free under-seat bag 45 x 36 x 20 cm, paid large cabin bag 56 x 45 x 25 cm, hold bags 15, 23 or up to 32 kg, max three.",
    answer: "Everyone on easyJet can bring one small under-seat cabin bag of up to 45 x 36 x 20 cm and 15 kg for free. A large cabin bag (up to 56 x 45 x 25 cm and 15 kg) is added for a fee, or comes with easyJet Plus or an Inclusive Plus fare. Hold luggage is booked separately: each customer can book up to three hold bags of 15 kg or 23 kg, add weight in 3 kg steps, and no single bag may weigh more than 32 kg or measure 275 cm or more in length + width + height.",
    stats: [["45 x 36 x 20 cm", "free small under-seat bag"], ["56 x 45 x 25 cm", "large cabin bag, paid or with Plus"], ["15 / 23 kg", "hold bag options, up to 32 kg with extra weight"], ["£60", "hold bag at the airport bag drop desk"]],
    sections: [
      { h: "🎒 easyJet cabin bag allowance", p: "The maximum number of cabin bags per person is two: one small bag for everyone and one large bag if it is included or paid for.",
        table: { head: ["Bag", "Maximum size", "Weight and where it goes"], rows: [
          ["Small under-seat cabin bag (free)", "45 x 36 x 20 cm, including handles and wheels", "Up to 15 kg; fits under the seat in front; you must be able to lift it yourself"],
          ["Large cabin bag (paid or with Plus / Inclusive Plus)", "56 x 45 x 25 cm, including handles and wheels", "Up to 15 kg; fits in an overhead locker; includes Speedy Boarding"] ] },
        list: ["<strong>Cheaper online:</strong> it is always cheaper to add a large cabin bag online than at the boarding gate, where it costs £60.",
          "<strong>easyJet Plus and Inclusive Plus:</strong> customers who have not added a large cabin bag can still bring one, subject to available space; if there is none, it goes in the hold.",
          "<strong>Seat selection:</strong> if you are auto-allocated an Up Front or Extra Legroom seat, your allowance is one small under-seat bag.",
          "<strong>Size checks:</strong> easyJet checks cabin bag sizes before boarding. A bag that is too big, or a large bag brought to the gate without the right seat or a pre-booked bag, goes in the hold and charges apply."] },
      { h: "🧳 easyJet hold luggage allowance", p: "Hold luggage is chosen when you book. Each customer, including children and infants, can bring up to three hold bags.",
        table: { head: ["Bag", "Use", "Limits"], rows: [
          ["15 kg bag", "Ideal for weekend breaks or light packers; cheapest when added online in advance", "Up to 15 kg"],
          ["23 kg standard bag", "Most popular for week-long holidays or family trips", "Up to 23 kg"],
          ["Up to 32 kg bag", "For those who pack a lot", "Add extra weight in 3 kg steps, never more than 32 kg per bag"] ] },
        list: ["<strong>Size:</strong> the maximum total of length + width + height is under 275 cm.",
          "<strong>Pooling weight:</strong> families or friends on the same flight and booking can pool their total weight allowance across bags, as long as no single item weighs more than 32 kg; you cannot pool weight between hold bags and sports equipment.",
          "<strong>Adding bags:</strong> via Manage Bookings up to two hours before departure. Adding online is always cheaper than paying at the airport, where bag drop desk fees are £60.",
          "<strong>Over your allowance:</strong> if your bag weighs more than your allowance at the airport, extra weight is charged; buy the right amount of weight before you fly.",
          "<strong>Smart luggage:</strong> a lithium battery or power bank in smart luggage must be removed at bag drop and taken into the cabin."] }
    ],
    faq: [
      ["What is the easyJet baggage allowance?", "A free small under-seat bag (45 x 36 x 20 cm, up to 15 kg). A large cabin bag (56 x 45 x 25 cm) and hold bags (15 kg or 23 kg, up to three, max 32 kg each) are extra unless included in your fare."],
      ["What is the easyJet cabin bag size?", "Small under-seat bag 45 x 36 x 20 cm; large cabin bag 56 x 45 x 25 cm, both including handles and wheels, each up to 15 kg."],
      ["How much is a large cabin bag on easyJet?", "It is added online for a fee that varies; at the boarding gate it costs £60. It comes free with easyJet Plus membership or an Inclusive Plus fare, subject to space if you did not add it."],
      ["What is the easyJet hold bag weight limit?", "You choose 15 kg or 23 kg and can add 3 kg steps, but no single bag can weigh more than 32 kg, and the total length + width + height must be under 275 cm."],
      ["How many hold bags can I take on easyJet?", "Up to three hold bags per customer, including children and infants. Weight can be pooled across a booking, but not with sports equipment."],
      ["How much does a hold bag cost at the easyJet airport desk?", "£60 at the bag drop desk, which is why easyJet says adding bags online is always cheaper."]
    ],
    sources: [["https://www.easyjet.com/en/help/baggage/cabin-bags", "easyJet &mdash; Cabin bags"], ["https://www.easyjet.com/en/help/baggage/hold-luggage", "easyJet &mdash; Hold luggage"]]
  },
  "Korean Air": {
    title: "Korean Air Baggage Allowance: 10 kg Carry-On, Checked 23 kg",
    desc: "Korean Air baggage allowance: one carry-on 55 x 40 x 20 cm plus a personal item, 10 kg total in Economy; 1 x 23 kg checked, 2 x 32 kg Prestige.",
    answer: "Korean Air Economy and Premium Economy passengers can carry one carry-on bag plus one personal item, weighing no more than 10 kg in total. The carry-on is within 115 cm in total or 55 x 40 x 20 cm, and the personal item up to 40 x 30 x 15 cm. Free checked baggage on international flights (excluding the U.S. and Brazil) is 1 bag of up to 23 kg in Economy and Premium, 2 bags of up to 32 kg in Prestige and 3 bags of up to 32 kg in First. On domestic flights in Korea Economy is up to 20 kg.",
    stats: [["10 kg", "Economy carry-on plus personal item"], ["1 x 23 kg", "Economy, international (excluding the U.S. and Brazil)"], ["2 x 32 kg", "Prestige, international"], ["20 kg", "Economy, domestic flights in Korea"]],
    sections: [
      { h: "🎒 Korean Air carry-on baggage allowance", p: "Korean Air lists the allowance by booking class.",
        table: { head: ["Class", "Pieces", "Weight and size"], rows: [
          ["Economy and Premium", "1 carry-on bag + 1 personal item", "10 kg in total; carry-on within 115 cm in total or 55 x 40 x 20 cm, including handles and wheels; personal item up to 40 x 30 x 15 cm"],
          ["First and Prestige", "2 carry-on bags", "18 kg (40 lb) in total; within 115 cm or 55 x 40 x 20 cm each"] ] },
        list: ["<strong>Personal item examples:</strong> a handbag, briefcase or laptop bag. <strong>Carry-on examples:</strong> a carry-on suitcase, backpack or Boston bag.",
          "<strong>Heavy bags:</strong> a carry-on too heavy to store in the overhead bin should be checked in. Even a bag within the limits may be processed as checked baggage at the gate because of a lack of storage space.",
          "<strong>Duty-free:</strong> duty-free items that exceed the carry-on allowance must be checked in at the boarding gate, and an excess baggage fee may apply.",
          "<strong>Codeshare flights:</strong> the allowance may vary by operating airline."] },
      { h: "🧳 Korean Air free checked baggage", p: "Details of your free allowance appear on your e-ticket itinerary after purchase. Availability of Economy (Saver) and Premium seats may vary by flight.",
        table: { head: ["Flight and class", "Free checked baggage"], rows: [
          ["International (excluding the U.S. and Brazil), Economy Saver", "1 bag, 23 kg or less"],
          ["International (excluding the U.S. and Brazil), Economy above Saver and Premium", "1 bag, 23 kg or less"],
          ["Prestige", "2 bags, 32 kg or less each"],
          ["First", "3 bags, 32 kg or less each"],
          ["To/from the Americas (excluding Brazil), Economy above Saver and Premium", "2 bags, 23 kg or less each"],
          ["To/from Brazil, tickets issued on or after 30 June 2025, Economy above Saver and Premium", "2 bags, 23 kg or less each"],
          ["Domestic flights in Korea, Economy / Prestige", "20 kg / 30 kg or less"] ] },
        list: ["<strong>Infants:</strong> on international flights 1 baggage + 1 foldable stroller + 1 car seat or bassinet; on domestic flights 1 foldable stroller + 1 car seat or bassinet. Children get the same allowance as adults plus a stroller and car seat.",
          "<strong>Limits to know:</strong> some countries restrict a single piece over 32 kg (70 lb) or 158 cm (62 in) in total linear dimensions, whether or not you pay excess fees.",
          "<strong>Partners:</strong> on codeshare flights, the baggage regulations of the marketing or operating airline apply under the codeshare agreement."] }
    ],
    faq: [
      ["What is the Korean Air baggage allowance?", "Economy carry-on: one bag plus a personal item, 10 kg in total. Checked: 1 x 23 kg internationally in Economy, 2 x 32 kg in Prestige, 20 kg in Economy on Korean domestic flights."],
      ["What is the Korean Air carry-on size and weight?", "Within 115 cm in total or 55 x 40 x 20 cm including handles and wheels, with a 40 x 30 x 15 cm personal item, and 10 kg in total in Economy."],
      ["How many checked bags does Korean Air Economy include?", "1 bag of up to 23 kg on international flights excluding the U.S. and Brazil, and 2 bags of 23 kg for Economy above Saver and Premium to and from the Americas excluding Brazil."],
      ["What is the Korean Air checked baggage weight limit?", "Economy bags are up to 23 kg, Prestige and First bags up to 32 kg; some countries restrict single pieces over 32 kg or 158 cm."],
      ["Does Korean Air allow more baggage in Prestige?", "Yes: 2 bags up to 32 kg each in Prestige and 3 bags up to 32 kg in First, plus two carry-on bags up to 18 kg in total."],
      ["How much domestic baggage does Korean Air allow?", "Economy 20 kg or less and Prestige 30 kg or less on domestic flights in Korea."]
    ],
    sources: [["https://www.koreanair.com/contents/plan-your-travel/baggage/carry-on-baggage?hl=en", "Korean Air &mdash; Carry-on baggage"], ["https://www.koreanair.com/contents/plan-your-travel/baggage/checked-baggage/free-baggage?hl=en", "Korean Air &mdash; Free baggage allowance"]]
  },
  "Iberia": {
    title: "Iberia Baggage Allowance: 10 kg Hand Luggage, Checked Bag Fees",
    desc: "Iberia baggage allowance: 10 kg hand luggage 56 x 40 x 25 cm plus a free personal item, 23 kg checked up to 158 cm, Basic and Executive pay for hold bags.",
    answer: "All Iberia fares include a hand luggage bag of up to 10 kg (56 x 40 x 25 cm) and one personal item of up to 30 x 40 x 15 cm. On Economy short and medium-haul flights, Basic and Executive include no checked bag (it is purchased), while Optimal, Comfort, Flexible and Air Shuttle include one piece. A standard checked piece is 23 kg (up to 32 kg for an excess fee) and 158 cm in height + width + length, and you can add up to 9 bags depending on your destination.",
    stats: [["10 kg", "hand luggage, 56 x 40 x 25 cm"], ["30 x 40 x 15 cm", "free personal item"], ["23 kg", "standard checked bag, up to 158 cm"], ["32 kg", "maximum per bag, with excess fee"]],
    sections: [
      { h: "🎒 Iberia hand luggage allowance", p: "At Iberia, all fares include baggage up to 10 kg and a free personal item.",
        table: { head: ["Item", "Maximum size", "Weight and place"], rows: [
          ["Hand luggage", "56 x 40 x 25 cm", "Up to 10 kg, in the overhead compartment (Business: one or two items up to 14 kg, depending on flight time)"],
          ["Personal item (backpack or handbag)", "30 x 40 x 15 cm", "Under the seat in front of you"] ] },
        list: ["<strong>Liquids:</strong> up to 1 litre in containers of up to 100 ml.",
          "<strong>Busy flights:</strong> on flights with high occupancy Iberia may ask you to check your 10 kg bag at the check-in desk or boarding gate, free of charge. On flights operated by Iberia Regional Air Nostrum, the bag is collected and delivered at the aircraft door to go in the hold free of charge."] },
      { h: "🧳 Iberia checked baggage and fees", p: "These are the checked-bag rules and the price ranges Iberia publishes for extra bags. The fare table is for Economy on short and medium-haul flights.",
        table: { head: ["Fare (Economy, short and medium-haul)", "Checked bag"], rows: [
          ["Basic", "Purchase"],
          ["Optimal", "1 piece"],
          ["Executive", "Purchase"],
          ["Comfort", "1 piece"],
          ["Flexible", "1 piece"],
          ["Air Shuttle (Madrid-Barcelona)", "1 piece"] ] },
        table2: { head: ["First 23 kg bag by zone", "Online", "At the airport"], rows: [
          ["Spain", "From EUR 18 to EUR 57", "From EUR 42 to EUR 83"],
          ["Europe, Israel and North Africa", "From EUR 20 to EUR 95", "From EUR 45 to EUR 110"],
          ["America, Asia and Qatar", "From EUR 50 to EUR 135", "From EUR 70 to EUR 164"] ] },
        list: ["<strong>Standard checked bag:</strong> 23 kg (maximum 32 kg on payment of an excess fee) and 158 cm in height + width + length, including handle, pockets and wheels. Iberia does not accept bags over 32 kg.",
          "<strong>Extra bags:</strong> you can add up to 9 bags depending on your destination, at 15 kg, 23 kg or 32 kg; the price is lowest when you book your ticket and highest during online check-in, and always lower than at the airport.",
          "<strong>Zones:</strong> if your flight connects different zones, the fare for the zone with the highest price applies. Iberia lists prices in EUR, USD and GBP."] }
    ],
    faq: [
      ["What is the Iberia baggage allowance?", "Hand luggage up to 10 kg (56 x 40 x 25 cm) plus a free personal item (30 x 40 x 15 cm) on all fares. Checked: Basic and Executive pay for hold bags on short and medium-haul Economy; Optimal, Comfort and Flexible include one piece."],
      ["What is the Iberia hand luggage size and weight?", "56 x 40 x 25 cm and up to 10 kg, stored in the overhead locker, plus a personal item of up to 30 x 40 x 15 cm under the seat."],
      ["Does Iberia Basic include a checked bag?", "No. On Economy short and medium-haul flights Basic requires you to purchase a checked bag; Optimal, Comfort and Flexible include one piece."],
      ["What is the Iberia checked baggage weight limit?", "23 kg standard, up to 32 kg for an excess fee, and 158 cm in height + width + length. Iberia does not accept bags over 32 kg."],
      ["How much is an extra bag on Iberia?", "A first 23 kg bag online ranges from EUR 18 to EUR 57 in the Spain zone, EUR 20 to EUR 95 in Europe, Israel and North Africa and EUR 50 to EUR 135 for America, Asia and Qatar; airport prices are higher."],
      ["How many bags can I check with Iberia?", "Up to 9 bags depending on your destination, including those in your luggage allowance."]
    ],
    sources: [["https://www.iberia.com/us/luggage/hand-luggage/", "Iberia &mdash; Hand luggage"], ["https://www.iberia.com/us/luggage/allowance-in-hold/", "Iberia &mdash; Baggage in the hold"], ["https://www.iberia.com/us/fare-classes/economy/", "Iberia &mdash; Economy fare"]]
  }
};
