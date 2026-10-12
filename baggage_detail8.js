// Hawaiian Airlines baggage entry, read on hawaiianairlines.com's OWN pages (Carry-on luggage, Checked baggage fees and policies) on 2026-10-12. Same rules as BAGGAGE_DETAIL.md.
// NOT read: the numbered footnotes of the fee tables, the Saver fare carry-on conditions, the special baggage pages, claims for delayed or damaged bags, the military rows beyond a summary. No carry-on weight limit is stated on the carry-on page.
module.exports = {
  "Hawaiian Airlines": {
    title: "Hawaiian Airlines Baggage Allowance 2026: Carry-On 22 x 14 x 9 in, Checked Bag Fees",
    desc: "Hawaiian Airlines baggage allowance 2026: carry-on 22 x 14 x 9 in plus a personal item, checked bags $45 and $55 in North America, $30 and $40 inter-island, 2 free bags in First Class, free bags for Atmos status.",
    answer: "Hawaiian Airlines allows one carry-on up to 22 x 14 x 9 in (45 linear inches, wheels and handles included) plus one personal item, free. Checked bags up to 50 lb and 62 linear inches cost $45 for the first and $55 for the second on North America flights, $30 and $40 on flights wholly within Hawaii, and are free in First Class (2 bags up to 70 lb). On flights to Asia and Oceania the first two bags are free.",
    stats: [
      ["22 × 14 × 9 in", "carry-on size (45 linear in)"],
      ["$45", "1st checked bag, North America"],
      ["$30", "1st checked bag, within Hawaii"],
      ["50 lb", "standard bag, up to 62 linear in"]
    ],
    sections: [
      { h: "🧳 Carry-on: one bag 22 × 14 × 9 in plus a personal item",
        p: "This is the limit on Hawaiian Airlines' carry-on page, for flights on all aircraft types. The dimensions include the wheels and handles.",
        list: ["<strong>Carry-on:</strong> one piece up to 22 × 14 × 9 in, or 45 linear inches (length + height + width), free of charge.",
          "<strong>Personal item:</strong> one small item such as a purse, briefcase or laptop bag, and medically necessary items. At least one of your two items must fit under the seat in front of you, and you must be able to lift your own bag into the overhead bin.",
          "<strong>Measuring:</strong> there are bag sizers at airports. Measure the body of the bag together with the wheels and handles, and measure a soft-sided or expandable suitcase again after you pack it.",
          "<strong>Smart bags:</strong> only smart luggage whose battery can be removed without a tool is accepted; the battery must be removed and carried in the cabin.",
          "<strong>Weight:</strong> the carry-on page states no weight limit."] },
      { h: "🛄 Checked bag fees (US dollars)",
        p: "Checked bags up to 50 lb and 62 linear inches. These are the figures on Hawaiian Airlines' checked baggage page.",
        table: { head: ["Traveler", "1st bag", "2nd bag", "3rd bag", "4th bag and more"], rows: [
          ["Main Cabin, North America", "$45", "$55", "$200", "$200 each"],
          ["Wholly within the state of Hawaii", "$30", "$40", "$50", "$50 each"],
          ["Huaka'i member, wholly within Hawaii", "Free up to 50 lb", "Free up to 50 lb", "$50", "$50 each"],
          ["First Class, North America", "Free up to 70 lb", "Free up to 70 lb", "$200", "$200 each"] ] },
        list: ["<strong>Overweight and oversize (North America):</strong> 51 to 70 lb is $100 per bag, 71 to 100 lb is $200 per bag, and an oversize bag of 63 to 115 in is $200. Within Hawaii: $35 for 51 to 70 lb, $70 for 71 to 100 lb and $35 for oversize.",
          "<strong>First Class:</strong> the first two overweight bags up to 70 lb are free, then $100 per bag." ] },
      { h: "🌏 International flights",
        p: "For Main Cabin guests traveling internationally, the page lists the first two bags by region, each up to 50 lb and 62 linear inches:",
        table: { head: ["Region", "1st bag", "2nd bag"], rows: [
          ["Asia", "Free", "Free"],
          ["Oceania (Australia and Pacific Islands outside Hawaii)", "Free", "Free"],
          ["Europe", "Free", "$100"] ] },
        list: ["<strong>Europe in more detail:</strong> to Great Britain, France, Greece, Italy and Iceland the 3rd and later bags are $200 each, an overweight bag up to 70 lb is $100, an oversize bag is $200, and a bag of 71 to 100 lb is not accepted. Business Class gets two free bags up to 70 lb; First Class gets three.",
          "We did not read the fee tables for other regions in full."] },
      { h: "⭐ Free bags with status, a card or a program",
        p: "From the same page:",
        table: { head: ["Who", "Free checked bags"], rows: [
          ["Atmos Rewards Silver / oneworld Ruby", "1st bag, up to 50 lb"],
          ["Atmos Rewards Gold / oneworld Sapphire", "First 2 bags, up to 50 lb each"],
          ["Atmos Rewards Platinum and Titanium / oneworld Emerald", "First 3 bags, up to 50 lb each"],
          ["Eligible Atmos Rewards Visa cardholders", "1st bag, up to 50 lb"],
          ["Hawaiian Airlines World Elite Mastercard primary cardmembers", "First 2 bags, up to 50 lb each"],
          ["Club 49 member with at least 1 city in Alaska", "First 2 bags, up to 50 lb each"],
          ["Business or First Class ticket", "2 bags at 70 lb each (up to a $285 value)"] ] },
        list: ["The page also lists rows for active-duty military, their dependents and retirees; we did not read the footnotes that set their conditions."] }
    ],
    faq: [
      ["What is the Hawaiian Airlines carry-on size?", "22 × 14 × 9 in (45 linear inches), including wheels and handles, on all aircraft types, plus one personal item such as a purse, briefcase or laptop bag."],
      ["How much is the first checked bag on Hawaiian Airlines?", "$45 on North America flights, $30 on flights wholly within Hawaii. The second bag is $55 and $40. Both are up to 50 lb and 62 linear inches."],
      ["Are checked bags free on Hawaiian Airlines to Asia?", "Yes for Main Cabin: the first two bags are free to Asia and to Oceania, each up to 50 lb. To Europe the first bag is free and the second is $100."],
      ["How many free bags do I get in Hawaiian First Class?", "Two bags up to 70 lb each on North America flights; the third is $200. To Europe First Class gets three."],
      ["How much is an overweight bag on Hawaiian Airlines?", "$100 per bag for 51 to 70 lb and $200 for 71 to 100 lb on North America flights; within Hawaii it is $35 and $70."],
      ["Do Hawaiian Airlines Mastercard holders get free bags?", "Primary Hawaiian Airlines World Elite Mastercard cardmembers get the first 2 checked bags free, up to 50 lb each. Eligible Atmos Rewards Visa cardholders get the first bag."]
    ],
    sources: [
      ["https://www.hawaiianairlines.com/content/travel-info/baggage/carry-on-luggage", "Hawaiian Airlines &mdash; Carry-on luggage size limit"],
      ["https://www.hawaiianairlines.com/content/travel-info/baggage/checked-bags", "Hawaiian Airlines &mdash; Checked baggage fees and policies"]
    ]
  }
};
