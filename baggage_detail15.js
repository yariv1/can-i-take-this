// Slim baggage entries (batch 15, checked 12 October 2026, read on each airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// TAP: flytap.com hold-baggage and hand-baggage pages (route fee grid not matched to labels). Brussels: checked + carry-on pages (fee grid unmatched). LOT: short-haul baggage + carry-on help page (long-haul and fee table NOT read).
// ITA: checked + carry-on pages (excess charges NOT read). Pegasus: baggage allowance + general rules (extra baggage price table NOT read). Air Europa: carry-on + checked pages (surcharge amounts NOT read).
module.exports = {
  "TAP Air Portugal": {
    title: "TAP Air Portugal Baggage Allowance 2026: Hand Baggage 10 kg, Checked Bag 23 kg and 32 kg",
    desc: "TAP Air Portugal baggage allowance 2026: hand bag 55 x 40 x 25 cm up to 10 kg plus a personal item, checked bag 23 kg Economy and 32 kg Business, 158 cm, extra bag from 30 EUR, heavy bag fees.",
    answer: "TAP Air Portugal allows one hand bag of up to 10 kg (22 lb) and 55 x 40 x 25 cm, plus a personal item up to 2 kg and 40 x 30 x 15 cm. A checked bag is up to 23 kg (50 lb) in Economy and 32 kg (70 lb) in Business, within 158 cm (62 in) in height + length + width; bags over 32 kg travel as cargo. The number of free pieces depends on fare, route and class: one or two bags of 23 kg, or two of 32 kg in Business.",
    stats: [
      ["55 × 40 × 25 cm", "hand bag, up to 10 kg (22 lb)"],
      ["40 × 30 × 15 cm", "personal item, up to 2 kg"],
      ["23 / 32 kg", "checked bag, Economy / Business"],
      ["from 30 EUR", "extra piece bought online in advance (37 USD / 49 CAD)"]
    ],
    sections: [
      { h: "🎒 Hand baggage",
        table: { head: ["Item", "Maximum"], rows: [
          ["Hand bag", "10 kg / 22 lb, 55 × 40 × 25 cm / 22 × 16 × 10 in"],
          ["Personal item (under the seat)", "2 kg / 4.4 lb, 40 × 30 × 15 cm / 16 × 12 × 5 in"] ] },
        list: ["<strong>Liquids</strong> go in individual containers of up to 100 ml in one transparent bag of up to 1 liter.",
          "<strong>Special cabin baggage</strong> (for example an instrument) needs an extra seat booked when you book or at least 72 hours before the flight." ] },
      { h: "🧳 Checked baggage",
        table: { head: ["Rule", "Limit"], rows: [
          ["Weight per bag", "23 kg / 50 lb in Economy; 32 kg / 70 lb in Business; over 32 kg is transported as cargo"],
          ["Size per bag", "158 cm / 62 in (height + length + width)"],
          ["Pieces included", "Depends on fare, route and class: 1 or 2 items of 23 kg, or 2 items of 32 kg in Business; flights to and from Africa (medium and long haul), Luanda and Maputo have their own entitlements"],
          ["Extra piece, bought online in advance", "From 30 EUR / 37 USD / 49 CAD"] ] },
        list: ["<strong>Heavy and oversize fees</strong> are published by route zone on TAP's hold baggage page: a heavy bag (23 to 32 kg), an oversize bag (over 158 cm) and a bag that is both each have their own price, between roughly 70 EUR and 420 EUR across the table. The grid did not map cleanly to each route, so check your route there.",
          "<strong>Members and partners:</strong> extra allowance exists (an additional 20 kg or 1 piece, within 158 cm); we did not read the member tables in full." ] }
    ],
    faq: [
      ["What is the TAP Air Portugal hand baggage size?", "55 × 40 × 25 cm and up to 10 kg, plus a personal item of 40 × 30 × 15 cm and up to 2 kg."],
      ["What is the TAP checked bag weight limit?", "23 kg (50 lb) in Economy and 32 kg (70 lb) in Business, within 158 cm. Baggage over 32 kg must be transported as cargo."],
      ["How much is an extra bag on TAP?", "From 30 EUR / 37 USD / 49 CAD per extra piece when bought online in advance; heavy and oversize bags are priced by route on TAP's hold baggage page."]
    ],
    sources: [
      ["https://www.flytap.com/en-us/baggage/hold-baggage", "TAP &mdash; Traveling with hold baggage"],
      ["https://www.flytap.com/en-us/information/baggage/hand-baggage", "TAP &mdash; Traveling with hand baggage"]
    ]
  },
  "Brussels Airlines": {
    title: "Brussels Airlines Baggage Allowance 2026: Carry-On 55 x 40 x 23 cm, Checked Bag 23 kg and Fees",
    desc: "Brussels Airlines baggage allowance 2026: carry-on 8 kg and 55 x 40 x 23 cm, personal item 40 x 30 x 15 cm, checked bag 23 kg (32 kg Business), 158 cm, Economy Basic with no carry-on, extra bag fees.",
    answer: "Brussels Airlines allows one personal item (40 x 30 x 15 cm) and one carry-on of up to 8 kg and 55 x 40 x 23 cm; Economy Basic on short and medium-haul flights includes only the personal item. A checked bag is 23 kg per piece, or 32 kg in the cabins that allow it, within 158 cm (width + height + depth, including pockets and wheels). Extra baggage can be bought up to 2 hours before departure and is cheapest on brusselsairlines.com or through the Service Centre.",
    stats: [
      ["55 × 40 × 23 cm", "carry-on, max. 8 kg"],
      ["40 × 30 × 15 cm", "personal item, every fare"],
      ["23 / 32 kg", "checked bag per piece"],
      ["158 cm", "checked bag, width + height + depth"]
    ],
    sections: [
      { h: "🎒 Carry-on baggage",
        table: { head: ["Allowance", "Maximum"], rows: [
          ["1 personal item", "40 × 30 × 15 cm"],
          ["1 item of carry-on baggage", "8 kg, 55 × 40 × 23 cm"],
          ["2 items of carry-on baggage (higher cabins)", "Listed as 57 × 54 × 15 cm and 8 kg, or height + width + length 125 cm and 8 kg"] ] },
        list: ["<strong>Economy Basic on short and medium-haul flights</strong> includes only one personal item (40 × 30 × 15 cm).",
          "<strong>Over the limit?</strong> The bag is taken at check-in or the gate and put in the hold at your expense, with fees significantly higher than for checked baggage booked in advance.",
          "<strong>Operated by another airline:</strong> the carry-on rules of the operating airline apply, even with a Brussels Airlines flight number." ] },
      { h: "🧳 Checked baggage and fees",
        table: { head: ["Rule", "Detail"], rows: [
          ["Weight per piece", "23 kg or 32 kg depending on the cabin"],
          ["Size per piece", "158 cm (a + b + c, pockets and wheels included)"],
          ["Infants", "One free checked bag up to 23 kg, except in Economy Basic on short and medium-haul flights and Economy Light"],
          ["Extra baggage", "Buy up to 2 hours before departure and before check-in; the cheapest price is on brusselsairlines.com or via the Service Centre; airport fees are higher"] ] },
        list: ["<strong>Fee ranges printed by Brussels Airlines (per piece, by route zone):</strong> a prepaid extra bag from EUR 20-35 (USD 30-45) up to EUR 105 (USD 120); heavy bags above 23 kg or oversized bags above 158 cm from EUR 55-70 (USD 70-85) to EUR 550 (USD 640), depending on the zone, weight and size. The page prints these in a grid we could not match to each route, so use your route in the booking flow." ] }
    ],
    faq: [
      ["What is the Brussels Airlines carry-on size?", "8 kg and 55 × 40 × 23 cm, plus a personal item of 40 × 30 × 15 cm."],
      ["Does Brussels Airlines Economy Basic include a carry-on?", "On short and medium-haul flights, no: Economy Basic includes only one personal item of 40 × 30 × 15 cm."],
      ["What is the Brussels Airlines checked bag weight limit?", "23 kg per piece, or 32 kg in the cabins that allow it, within 158 cm (width + height + depth)."],
      ["When can I buy extra baggage on Brussels Airlines?", "Up to 2 hours before departure and before check-in; the cheapest price is on brusselsairlines.com or through the Service Centre, and airport fees are higher."]
    ],
    sources: [
      ["https://www.brusselsairlines.com/us/en/extra-services/baggage/checked-baggage", "Brussels Airlines &mdash; Checked baggage"],
      ["https://www.brusselsairlines.com/us/en/extra-services/baggage/carry-on-baggage", "Brussels Airlines &mdash; Carry-on baggage"]
    ]
  },
  "LOT Polish": {
    title: "LOT Polish Airlines Baggage Allowance 2026: Carry-On 55 x 40 x 23 cm, Checked Bag 23 kg",
    desc: "LOT Polish Airlines baggage allowance 2026: carry-on 8 kg and 55 x 40 x 23 cm plus a 2 kg personal item, checked bag 23 kg in Economy (32 kg Business), 158 cm, short and medium-haul.",
    answer: "LOT Polish Airlines allows in every travel class one carry-on of up to 8 kg and 55 x 40 x 23 cm (individual sides may vary if the total stays within 118 cm) plus one personal item of up to 2 kg (40 x 35 x 12 cm). On short and medium-haul flights Economy includes 1 checked bag of 23 kg, Business 2 bags of 32 kg and Premium Economy 2 bags of 23 kg; a checked bag must not exceed 158 cm in height + width + depth.",
    stats: [
      ["55 × 40 × 23 cm", "carry-on, 8 kg, total within 118 cm"],
      ["40 × 35 × 12 cm", "personal item, 2 kg"],
      ["1 × 23 kg", "Economy checked bag, short and medium-haul"],
      ["158 cm", "checked bag, height + width + depth"]
    ],
    sections: [
      { h: "🎒 Carry-on and personal item",
        table: { head: ["Item", "Maximum"], rows: [
          ["Carry-on bag", "8 kg; 55 cm high, 40 cm wide, 23 cm deep; sum of sides within 118 cm"],
          ["Personal item", "2 kg; 40 × 35 × 12 cm (a handbag, small backpack or waist bag), under the seat"] ] },
        list: ["<strong>Every travel class</strong> includes one carry-on and one personal item; Premium Economy and Business Class have higher allowances.",
          "<strong>Short-haul</strong> means flights within Poland, Europe and the Middle East; <strong>medium-haul</strong> means flights to the UAE, Kazakhstan, Uzbekistan and Saudi Arabia." ] },
      { h: "🧳 Checked baggage (short and medium-haul)",
        table: { head: ["Class", "Checked bags"], rows: [
          ["Economy (Standard and Flex)", "1 × 23 kg"],
          ["Premium Economy (medium-haul)", "2 × 23 kg"],
          ["Business (short-haul)", "2 × 32 kg"] ] },
        list: ["<strong>Size:</strong> a checked bag must not exceed 158 cm (height + width + depth).",
          "<strong>Other tariffs</strong> besides the basic fare include a checked bag up to 23 kg.",
          "<strong>Not read:</strong> the long-haul baggage page, the Economy Saver conditions and the extra bag fee table; check your route and fare on lot.com." ] }
    ],
    faq: [
      ["What is the LOT carry-on size?", "8 kg and 55 × 40 × 23 cm, with the sum of the sides within 118 cm, plus a personal item of 40 × 35 × 12 cm and 2 kg."],
      ["How many checked bags are included on LOT in Economy?", "On short and medium-haul flights, Economy includes 1 bag of 23 kg."],
      ["What is the LOT checked bag size limit?", "158 cm in height + width + depth."]
    ],
    sources: [
      ["https://www.lot.com/us/en/journey/baggage/short-haul-baggage", "LOT &mdash; Baggage on short- and midhaul flights"],
      ["https://www.lot.com/us/en/help-center/baggage/what-is-the-limit-of-the-carry-on-baggage", "LOT &mdash; Carry-on baggage allowance"]
    ]
  },
  "ITA Airways": {
    title: "ITA Airways Baggage Allowance 2026: Carry-On 55 x 40 x 23 cm, 8 kg, Checked Bag 23 kg by Class",
    desc: "ITA Airways baggage allowance 2026: carry-on 8 kg and 55 x 40 x 23 cm plus an accessory, checked bags by class (Economy 1 x 23 kg, Business 2 x 32 kg), 158 cm, Economy Light with no checked bag.",
    answer: "ITA Airways allows one carry-on of up to 8 kg and 55 x 40 x 23 cm (handles, pockets and wheels included) plus one personal item or accessory of 40 x 30 x 15 cm. Checked baggage depends on class: Economy Light none, Economy 1 x 23 kg, Premium Economy 2 x 23 kg, Business 2 x 32 kg (2 x 23 kg on domestic Italy flights). Each piece can be at most 158 cm (height + width + depth).",
    stats: [
      ["55 × 40 × 23 cm", "carry-on, up to 8 kg"],
      ["40 × 30 × 15 cm", "accessory / personal item"],
      ["1 × 23 kg", "Economy checked bag (Economy Light: none)"],
      ["158 cm", "per checked piece, height + width + depth"]
    ],
    sections: [
      { h: "🧳 Checked baggage by travel class",
        table: { head: ["Class", "Checked baggage"], rows: [
          ["Economy Light", "No baggage"],
          ["Economy", "1 × 23 kg"],
          ["Premium Economy", "2 × 23 kg"],
          ["Business", "2 × 32 kg (2 × 23 kg on domestic flights in Italy)"],
          ["Business Comfort", "1 × 23 kg on domestic flights in Italy"] ] },
        list: ["<strong>Economy exceptions:</strong> 2 × 23 kg on flights to and from Japan; 1 × 23 kg from Italy to Japan in Economy Comfort and 2 × 23 kg in Comfort Plus and Flex; 2 × 23 kg from Accra and Dakar in Economy Comfort Plus, Green and Flex; 2 × 23 kg from Saudi Arabia to the USA and Canada in Comfort Plus and Flex.",
          "<strong>Not read:</strong> ITA's excess baggage charge table; check your route and fare." ] },
      { h: "🎒 Carry-on",
        list: ["<strong>Carry-on:</strong> max 8 kg (17.6 lb) and 55 × 40 × 23 cm (21.7 × 15.7 × 9.0 in), including handles, side pockets and wheels.",
          "<strong>Accessory / personal item:</strong> 30 × 40 × 15 cm (11.8 × 15.7 × 5.9 in), for example a handbag, small backpack or laptop bag." ] }
    ],
    faq: [
      ["What is the ITA Airways carry-on size?", "55 × 40 × 23 cm and up to 8 kg, including handles, side pockets and wheels, plus a personal item of 40 × 30 × 15 cm."],
      ["Does ITA Airways Economy Light include a checked bag?", "No. Economy Light has no checked baggage; Economy includes 1 × 23 kg."],
      ["What is the ITA Airways checked bag size limit?", "158 cm per piece (height + width + depth)."]
    ],
    sources: [
      ["https://www.ita-airways.com/en_us/fly-ita/baggage/checked-baggage.html", "ITA Airways &mdash; Checked baggage"],
      ["https://www.ita-airways.com/en_us/fly-ita/baggage/hand-baggage.html", "ITA Airways &mdash; Carry-on baggage"]
    ]
  },
  "Pegasus": {
    title: "Pegasus Airlines Baggage Allowance 2026: Cabin Bag 55 x 40 x 23 cm, 8 kg, Light, Saver and Comfort Flex",
    desc: "Pegasus Airlines baggage allowance 2026: cabin bag 55 x 40 x 23 cm and 8 kg, underseat bag 40 x 30 x 15 cm and 3 kg, 20 kg checked bag on Saver, Saver Plus and Comfort Flex, Light Package with only an underseat bag.",
    answer: "On Pegasus international and North Cyprus flights the Light Package includes only one underseat bag of up to 40 x 30 x 15 cm and 3 kg, with no cabin bag or checked bag. Saver, Saver Plus and Comfort Flex include one underseat bag, one cabin bag (up to 55 x 40 x 23 cm and 8 kg) and a checked bag with a 20 kg allowance. On domestic flights one cabin bag of 55 x 40 x 23 cm is included in all packages.",
    stats: [
      ["55 × 40 × 23 cm", "cabin bag, 8 kg (not on the Light Package)"],
      ["40 × 30 × 15 cm", "underseat bag, 3 kg, every package"],
      ["20 kg", "checked bag on Saver, Saver Plus, Comfort Flex"],
      ["from 12 kg", "checked bag you can add to the Light Package"]
    ],
    sections: [
      { h: "🎟️ What each package includes (international and North Cyprus)",
        table: { head: ["Package", "Underseat bag", "Cabin bag", "Checked bag"], rows: [
          ["Light", "1 (40 × 30 × 15 cm, 3 kg)", "Not included", "Not included"],
          ["Saver, Saver Plus, Comfort Flex", "1 (40 × 30 × 15 cm, 3 kg)", "1 (55 × 40 × 23 cm, 8 kg)", "20 kg check-in allowance"] ] },
        list: ["<strong>Light Package guests</strong> can add a cabin bag where the flight has a cabin bag limit, or check-in baggage starting from 12 kg; the best prices are on flypgs.com.",
          "<strong>Domestic flights:</strong> each passenger may carry one cabin bag of 55 × 40 × 23 cm free of charge in all packages.",
          "<strong>Operations:</strong> a cabin bag may be moved to the hold for operational reasons." ] },
      { h: "👝 Underseat bag and cabin bag",
        list: ["<strong>Cabin bag:</strong> one bag, maximum 55 × 40 × 23 cm and 8 kg, carried in the overhead locker.",
          "<strong>Underseat bag:</strong> one bag, maximum 40 × 30 × 15 cm and 3 kg, included in every package on international and North Cyprus flights.",
          "<strong>Not read:</strong> the per-route extra baggage price table and the domestic checked allowance; check them on flypgs.com." ] }
    ],
    faq: [
      ["What is the Pegasus cabin bag size?", "55 × 40 × 23 cm and up to 8 kg, plus an underseat bag of 40 × 30 × 15 cm and 3 kg on international and North Cyprus flights."],
      ["Does the Pegasus Light Package include baggage?", "No. Light includes only one underseat bag; you can add a cabin bag or check-in baggage starting from 12 kg."],
      ["How much checked baggage do Pegasus Saver and Comfort Flex include?", "A 20 kg check-in allowance on Saver, Saver Plus and Comfort Flex on international and North Cyprus flights."]
    ],
    sources: [
      ["https://www.flypgs.com/en/pegasus-baggage-allowance", "Pegasus &mdash; Baggage allowance"],
      ["https://www.flypgs.com/en/useful-info/info-about-flights/general-rules", "Pegasus &mdash; General rules"]
    ]
  },
  "Air Europa": {
    title: "Air Europa Baggage Allowance 2026: Hand Luggage 55 x 35 x 25 cm, 10 kg, Checked Bag 23 kg",
    desc: "Air Europa baggage allowance 2026: hand luggage 55 x 35 x 25 cm and 10 kg plus a small bag, checked bag up to 23 kg (32 kg Business), 158 cm, up to 10 pieces per passenger.",
    answer: "Air Europa allows one hand luggage bag of up to 55 x 35 x 25 cm and 10 kg in Economy (two bags with 14 kg in total in Business) plus a small handbag or backpack of 40 x 30 x 15 cm under the seat. A checked bag is up to 23 kg (32 kg in Business) and no more than 158 cm in height + width + length. You can check at most 10 pieces per passenger, including those in your ticket.",
    stats: [
      ["55 × 35 × 25 cm", "hand luggage, 10 kg Economy (14 kg Business)"],
      ["40 × 30 × 15 cm", "small bag under the seat"],
      ["23 / 32 kg", "checked bag, Economy / Business"],
      ["158 cm", "checked bag, height + width + length"]
    ],
    sections: [
      { h: "🎒 Hand luggage",
        table: { head: ["Cabin", "Hand luggage", "Maximum size"], rows: [
          ["Economy", "1 bag up to 10 kg", "55 × 35 × 25 cm including handles, pockets and wheels"],
          ["Business", "2 bags, 14 kg in total", "55 × 35 × 25 cm"],
          ["Accessory (both)", "1 small bag or backpack", "40 × 30 × 15 cm, under the seat in front"] ] },
        list: ["<strong>Liquids:</strong> containers of up to 100 ml in a transparent 1-liter bag, up to 10 containers.",
          "<strong>Extra hand luggage</strong> cannot be bought; certain items such as walking sticks and beach umbrellas (under 120 cm) can travel at no extra cost on some flights." ] },
      { h: "🧳 Checked baggage",
        table: { head: ["Rule", "Limit"], rows: [
          ["Weight per bag", "23 kg; 32 kg for Business Class passengers"],
          ["Weight upgrade", "From 23 kg to 32 kg for a surcharge, only at the Call Centre or the airport offices"],
          ["Size per bag", "158 cm (height + width + length), handles, pockets and wheels included; over the limit adds a surcharge"],
          ["Bags per passenger", "Up to 10 pieces including those on your ticket; add up to 4 on the website, more through Customer Service"] ] },
        list: ["<strong>Oversized bags</strong> over 158 cm up to 250 cm and 23 kg (32 kg Business) must be arranged with Customer Service.",
          "<strong>Havana:</strong> only 1 additional bag beyond your included allowance on flights to Havana, including connections.",
          "<strong>Babies</strong> under 2 get one 10 kg carry-on bag, and the same hold allowance as the adult if the adult booked a suitcase fare.",
          "<strong>Not read:</strong> the surcharge amounts." ] }
    ],
    faq: [
      ["What is the Air Europa hand luggage size?", "55 × 35 × 25 cm, up to 10 kg in Economy and 14 kg across two bags in Business, plus a small bag of 40 × 30 × 15 cm."],
      ["What is the Air Europa checked bag weight limit?", "23 kg per bag, or 32 kg in Business Class; you can raise it from 23 to 32 kg for a surcharge at the Call Centre or airport offices."],
      ["How many bags can I check on Air Europa?", "Up to 10 pieces per passenger including those on your ticket, adding up to 4 on the website and more through Customer Service."]
    ],
    sources: [
      ["https://www.aireuropa.com/us/en/aea/travel-information/baggage/carry-on-luggage.html", "Air Europa &mdash; Carry-on luggage"],
      ["https://www.aireuropa.com/es/en/aea/travel-information/baggage/checked-baggage.html", "Air Europa &mdash; Checked baggage"]
    ]
  }
};
