// Slim baggage entries (batch 24, checked 14 October 2026, read on the airline's OWN page). Same rules as BAGGAGE_DETAIL.md.
// EgyptAir: egyptair.com Baggage Allowance page (international, domestic, infants, hand luggage).
// SunExpress (14 Oct 2026): sunexpress.com Hand Baggage and Checked Baggage pages. NOT read: Special Baggage, Dangerous Goods, the UK hand-luggage restrictions page, partner/tour-operator bookings.
// NOT read (EgyptAir): the excess baggage charges page, Restricted Items, Sports Equipment. The extra-piece rows of the allowance tables (frequent flyer / partner status) lost their row labels in the page text, so they are not stated here.
module.exports = {
  "Alaska Airlines": {
    unofficial: "alaskaair.com could not be read, so these figures come from the LugLess baggage-fee guide for Alaska (lugless.com, a luggage-shipping company), read in full on 14 October 2026. The guide shows no date.",
    checked: "14 October 2026",
    title: "Alaska Airlines Baggage Allowance 2026: Carry-on 22 x 14 x 9 in, First Checked Bag $45, 50 lb Limit",
    desc: "Alaska Airlines baggage allowance 2026: free carry-on 22 x 14 x 9 in plus a personal item, first checked bag $45, second $55, third $200, 50 lb and 62 in limits, overweight and oversize fees, who flies free.",
    answer: "Alaska Airlines allows one carry-on bag up to 22 x 14 x 9 in (wheels and handles included, 45 linear inches) and one personal item, free on most fares. A checked bag costs $45 for the first, $55 for the second and $200 for the third and each after, each way on domestic flights. A standard checked bag can weigh up to 50 lb and measure up to 62 in (length + width + height). Overweight bags of 51 to 70 lb add $100 and 71 to 100 lb add $200; oversized bags of 63 to 115 in add $200.",
    stats: [
      ["22 × 14 × 9 in", "carry-on, free on most fares, plus a personal item"],
      ["$45 / $55 / $200", "1st / 2nd / 3rd+ checked bag, domestic"],
      ["50 lb · 62 in", "standard checked bag limits"],
      ["$100 / $200", "overweight 51-70 lb / 71-100 lb"]
    ],
    sections: [
      { h: "🧳 Checked bag fees (domestic)",
        table: { head: ["Bag", "Fee", "Max weight", "Max size (L+W+H)"], rows: [
          ["First checked bag", "$45", "50 lb", "62 in"],
          ["Second checked bag", "$55", "50 lb", "62 in"],
          ["Third and each after", "$200", "50 lb", "62 in"],
          ["Overweight, 51-70 lb", "$100 extra", "70 lb", "62 in"],
          ["Overweight, 71-100 lb", "$200 extra", "100 lb", "62 in"],
          ["Oversized", "$200 extra", "50 lb", "63-115 in"] ] },
        list: ["<strong>Example:</strong> a first bag of 60 lb costs the $45 fee plus $100, $145 in total.",
          "<strong>International flights:</strong> the source says prices can be higher depending on the destination; we have no figures for them.",
          "<strong>Fee waivers:</strong> the source lists First Class, Atmos Rewards elite members, oneworld elite members, eligible Atmos Rewards Visa cardholders, active-duty U.S. military with valid ID, and Club 49 members on qualifying Alaska-only flights. The number of free bags varies by fare type and status." ] },
      { h: "🎒 Carry-on and personal item",
        table: { head: ["Item", "Limit"], rows: [
          ["Carry-on", "22 × 14 × 9 in including wheels and handles (45 linear inches), all flights and aircraft types"],
          ["Personal item", "One small item such as a purse, briefcase or laptop bag; a diabetic kit bag can count as one"] ] },
        list: ["<strong>Free on top:</strong> diaper bags, duty-free purchases, jackets, umbrellas and medically necessary or assistive devices (CPAP machines, walkers, prosthetics) do not count, if they meet safety requirements.",
          "<strong>Also free, not counted as checked bags:</strong> mobility aids, medically necessary equipment, strollers and car seats when travelling with children, and one packaged box of pineapples from Honolulu, Kona, Maui or Kauai.",
          "<strong>Sports gear:</strong> overweight fees are waived for archery, non-motorized bicycles, fishing, golf, hockey and lacrosse, kiteboarding, pole vault, scuba, skis and snowboards, surf and paddleboards and windsurfing equipment; oversize fees up to 70 lb are waived for bicycles and windsurfing equipment.",
          "<strong>Instruments:</strong> small ones can go as a carry-on if they fit in the storage compartment; larger ones need their own seat or go as a checked bag in a proper case, where overweight or oversize fees may apply." ] }
    ],
    faq: [
      ["What is the Alaska Airlines carry-on size?", "22 × 14 × 9 in including wheels and handles, plus one small personal item, free on most fares."],
      ["How much is the first checked bag on Alaska Airlines?", "$45 each way on domestic flights, $55 for the second and $200 for the third and each after."],
      ["What is the Alaska Airlines checked bag weight limit?", "50 lb and 62 in (length + width + height). Overweight 51-70 lb adds $100 and 71-100 lb adds $200; oversized 63-115 in adds $200."],
      ["Who gets free checked bags on Alaska Airlines?", "First Class, Atmos Rewards and oneworld elites, eligible Atmos Rewards Visa cardholders, active-duty U.S. military and Club 49 members on qualifying Alaska-only flights, according to the source."],
      ["What does this page not cover?", "International fees and the difference between fares were not stated by the source; confirm them with Alaska Airlines."]
    ],
    sources: [
      ["https://www.lugless.com/airline-baggage-fees/alaska-airlines-baggage-fees/", "LugLess &mdash; Alaska Airlines baggage fees (undated)"]
    ]
  },
  "SunExpress": {
    checked: "14 October 2026",
    title: "SunExpress Baggage Allowance 2026: Hand Baggage 8 kg, Checked Bag 20 to 35 kg by Fare, Extra Baggage from 19.99 EUR",
    desc: "SunExpress baggage allowance 2026: SunLight 4 kg underseat bag only, SunValue 8 kg hand and 20 kg checked, SunEco+ 20 to 30 kg, SunComfort 25 to 35 kg, 32 kg and 158 cm limit, extra baggage from 19.99 EUR.",
    answer: "SunExpress includes a different bag allowance on each fare. SunLight has a 4 kg underseat bag (max. 30 x 40 x 20 cm) and no checked bag; an 8 kg hand bag can be added from 19.99 EUR. SunValue, SunEco+ and SunComfort include 1 hand bag of 8 kg (max. 55 x 40 x 23 cm). International checked baggage is 20 kg in SunValue, 20 or 30 kg in SunEco+ and 25 or 35 kg in SunComfort depending on the route group. No single piece may weigh more than 32 kg or exceed 158 cm (length + width + height).",
    stats: [
      ["8 kg", "hand bag on SunValue, SunEco+, SunComfort, 55 × 40 × 23 cm"],
      ["4 kg", "underseat bag on SunLight, 30 × 40 × 20 cm"],
      ["20 / 20-30 / 25-35 kg", "international checked: SunValue / SunEco+ / SunComfort"],
      ["32 kg · 158 cm", "maximum per piece"]
    ],
    sections: [
      { h: "🧳 Allowance by fare",
        table: { head: ["Fare", "Hand baggage", "Checked, international", "Checked, domestic"], rows: [
          ["SunLight", "4 kg underseat bag, 30 × 40 × 20 cm (8 kg bag can be added)", "None", "None"],
          ["SunValue", "8 kg, 55 × 40 × 23 cm", "20 kg", "15 kg"],
          ["SunEco+", "8 kg, 55 × 40 × 23 cm", "30 kg (route group 1) / 20 kg (route group 2)", "15 kg"],
          ["SunComfort", "8 kg, 55 × 40 × 23 cm", "35 kg (route group 1) / 25 kg (route group 2)", "25 kg"] ] },
        list: ["<strong>Route group 1:</strong> all international flights except to or from Antalya, Bodrum and Dalaman. <strong>Route group 2:</strong> international flights to or from Antalya, Bodrum and Dalaman.",
          "<strong>Heavy baggage:</strong> bags of 23 to 32 kg are classed as Heavy Baggage and SunExpress takes no responsibility for handling damage to them. Bags above 32 kg are not accepted at check-in.",
          "<strong>Infants under 2:</strong> 20 kg on international flights (not on SunLight bookings), 15 kg within Turkiye. Pushchairs, travel cots and child car seats go in the hold at no charge." ] },
      { h: "💶 Extra baggage and airport fees",
        table: { head: ["Package (per flight, per person)", "International", "To/from UK", "Domestic"], rows: [
          ["5 kg", "from 19.99 EUR", "from 34.99 GBP", "1,200 TRY"],
          ["10 kg", "from 38.99 EUR", "from 59.99 GBP", "2,300 TRY"],
          ["15 kg", "from 57.99 EUR", "from 89.99 GBP", "3,400 TRY"],
          ["20 kg", "from 69.99 EUR", "from 99.99 GBP", "4,500 TRY"] ] },
        list: ["<strong>SunLight:</strong> extra packages are cheaper on international flights (5 kg from 19.99 EUR up to 20 kg from 34.99 EUR; from 24.99 GBP to 54.99 GBP to or from the UK), and an 8 kg hand bag costs from 14.99 EUR (13.99 GBP to or from the UK). Extra baggage is for the hold only and cannot be taken into the cabin.",
          "<strong>Where and when:</strong> up to 70% cheaper online than at the airport; via My Bookings, the Customer Service Center or authorised agencies up to 3 hours before departure. Packages are non-refundable and non-transferable, and cannot be booked for infants under 2.",
          "<strong>At the airport (international):</strong> overweight from 10.00 EUR per kg and oversized 45.00 EUR per piece (80.00 EUR from or to Ireland); from or to the UK 10.00 GBP per kg and 80.00 GBP per piece; domestic from 300 TRY per kg and 700 TRY per piece.",
          "<strong>SunLight at the airport:</strong> checking the 8 kg hand bag costs 40.00 EUR (60.00 EUR from or to Ireland) and a checked bag 80.00 EUR (60.00 GBP and 80.00 GBP to or from the UK)." ] },
      { h: "🧴 Liquids in hand baggage",
        list: ["Liquids, gels, creams and sprays in containers of max. 100 ml, all in 1 transparent resealable 1-litre bag, one per passenger. Medication and baby food needed during the flight are allowed; sealed duty-free liquids bought after security at an EU airport or on an EU airline are allowed with a visible receipt. No liquid limits in checked baggage."] }
    ],
    faq: [
      ["What is the SunExpress hand baggage allowance?", "SunValue, SunEco+ and SunComfort include 1 bag of 8 kg, max. 55 × 40 × 23 cm. SunLight includes only a 4 kg underseat bag, max. 30 × 40 × 20 cm."],
      ["Does SunExpress SunLight include a checked bag?", "No. SunLight has no checked baggage; extra baggage can be added from 19.99 EUR for 5 kg, and an 8 kg hand bag from 14.99 EUR."],
      ["What is the SunExpress checked bag weight limit?", "No single piece may weigh more than 32 kg, and the maximum size is 158 cm (length + width + height). Bags of 23 to 32 kg are Heavy Baggage."],
      ["How much is SunExpress extra baggage?", "Online, from 19.99 EUR for 5 kg to 69.99 EUR for 20 kg on international flights (prices differ by route and fare). At the airport overweight baggage is from 10.00 EUR per kg."],
      ["How much checked baggage is included in SunValue?", "20 kg on international flights and 15 kg on domestic flights."]
    ],
    sources: [
      ["https://www.sunexpress.com/en-gb/information/luggage-info/hand-baggage/", "SunExpress &mdash; Hand baggage"],
      ["https://www.sunexpress.com/en-gb/information/luggage-info/checked-baggage/", "SunExpress &mdash; Checked baggage"]
    ]
  },
  "EgyptAir": {
    title: "EgyptAir Baggage Allowance 2026: Hand Luggage 8 kg, Checked Bag 23 kg Economy, 32 kg Business",
    desc: "EgyptAir baggage allowance 2026: hand luggage 8 kg and 55 x 40 x 23 cm, Economy checked bag 23 kg per piece by fare rules, Business 2 pieces of 32 kg, 158 cm size limit, domestic 1 piece, infants.",
    answer: "EgyptAir allows hand luggage of 1 piece up to 8 kg in Economy and 2 pieces up to 8 kg in Business, with maximum dimensions of 118 cm in total (55 + 40 + 23 cm). On international routes Business includes 2 checked pieces of up to 32 kg (70 lb) each, and Economy includes the number of pieces set by the fare rules, each up to 23 kg (50 lb). Every checked piece can be up to 158 cm (62 in). On domestic routes both cabins include 1 checked piece. Baggage above the allowance is charged as excess baggage.",
    stats: [
      ["8 kg", "hand luggage, 55 × 40 × 23 cm (Business: 2 pieces)"],
      ["23 kg", "checked piece in Economy; pieces by fare rules"],
      ["2 × 32 kg", "checked in Business, international"],
      ["158 cm", "maximum size of a checked piece"]
    ],
    sections: [
      { h: "🎒 Hand luggage",
        table: { head: ["Cabin", "Pieces", "Weight", "Size"], rows: [
          ["Economy", "1 piece", "8 kg", "118 cm in total (55 + 40 + 23 cm)"],
          ["Business", "2 pieces", "8 kg (as stated on the page)", "118 cm in total (55 + 40 + 23 cm)"] ] },
        list: ["The page gives one size limit for all adults and children in both cabins." ] },
      { h: "🧳 Checked baggage",
        table: { head: ["Route", "Cabin", "Pieces", "Weight and size per piece"], rows: [
          ["International", "Business", "2 pieces", "32 kg (70 lb), 158 cm (62 in)"],
          ["International", "Economy", "According to fare rules", "23 kg (50 lb), 158 cm (62 in)"],
          ["Domestic", "Business", "1 piece", "32 kg (70 lb), 158 cm (62 in)"],
          ["Domestic", "Economy", "1 piece", "23 kg (50 lb), 158 cm (62 in)"] ] },
        list: ["<strong>Asmara:</strong> from 1 January 2026, tickets to and from Asmara are limited to one checked piece in both Business and Economy.",
          "<strong>Extra piece:</strong> the allowance tables also list rows with &ldquo;+ 1 extra piece&rdquo; or a 50% discount on excess baggage fees (EGYPTAIR flights only) or a 10 kg checked handbag (MS flights only). The page text did not show which passengers these rows are for, so check the allowance on your ticket.",
          "<strong>Excess baggage:</strong> checked baggage above the allowance is charged; the page points to the excess baggage charges page and local EGYPTAIR offices, which we did not read." ] },
      { h: "👶 Infants",
        table: { head: ["Route", "Checked", "Also allowed"], rows: [
          ["All classes, except USA and Canada", "1 piece, 10 kg (22 lb), 115 cm (45 in)", "1 fold-up collapsible stroller"],
          ["All classes, to and from USA and Canada", "1 piece, 23 kg (50 lb)", "1 fold-up collapsible stroller"] ] } }
    ],
    faq: [
      ["What is the EgyptAir baggage allowance?", "International: Business 2 checked pieces of up to 32 kg, Economy the pieces set by the fare rules, each up to 23 kg. Domestic: 1 checked piece in both cabins. Hand luggage 8 kg."],
      ["What is the EgyptAir cabin bag size?", "Maximum dimensions of 118 cm in total (55 + 40 + 23 cm); 1 piece up to 8 kg in Economy, 2 pieces in Business."],
      ["What is the EgyptAir checked bag weight limit?", "32 kg per piece in Business and 23 kg per piece in Economy, with a size limit of 158 cm (62 in) per piece."],
      ["How many bags can I check on EgyptAir to or from Asmara?", "One checked piece in Economy and in Business, from 1 January 2026."],
      ["Does EgyptAir allow a stroller for an infant?", "Yes: a fold-up collapsible stroller, plus 1 checked piece of 10 kg (23 kg to and from the USA and Canada)."]
    ],
    sources: [
      ["https://www.egyptair.com/en/fly/baggage/Pages/baggage-allowance.aspx", "EGYPTAIR &mdash; Baggage allowance"]
    ]
  }
};
