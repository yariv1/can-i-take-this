// Slim baggage entries (batch 14, checked 12 October 2026, read on each airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// ANA: ana.co.jp International flights "Weight, Size, and Number of Items Which Can Be Checked in Free of Charge" and "Carry-on Baggage Size and Rules". NOT read: excess baggage charge table, domestic flights, member allowances table.
// Austrian: austrian.com free-baggage (weights/size only, the per-fare pieces table did not load), excess-baggage, carry-on (handgepaeck) pages. NOT read: pieces included per fare, Economy Basic fee table.
module.exports = {
  "ANA": {
    title: "ANA Baggage Allowance 2026: Carry-On 55 x 40 x 25 cm, Checked Bag 23 kg and 32 kg (International)",
    desc: "ANA international baggage allowance 2026: 1 carry-on 55 x 40 x 25 cm plus a personal item, 10 kg combined, checked bags up to 23 kg (32 kg in First and Business), 158 cm size limit.",
    answer: "On ANA international flights you can bring one carry-on bag and one personal item with a combined weight of up to 10 kg. The carry-on must be within 55 x 40 x 25 cm and 115 cm in total (length + width + height); the personal item within 40 x 30 x 20 cm. Free checked bags weigh up to 23 kg (50 lb) per piece, or 32 kg (70 lb) in the higher cabins, and up to 158 cm in total. How many pieces are free depends on cabin and fare: 3 pieces, 1 to 2 pieces or 0 to 2 pieces.",
    stats: [
      ["55 × 40 × 25 cm", "carry-on, 115 cm in total; personal item 40 × 30 × 20 cm"],
      ["10 kg", "carry-on and personal item combined"],
      ["23 / 32 kg", "checked bag per piece, 50 / 70 lb"],
      ["158 cm", "checked bag, length + width + height"]
    ],
    sections: [
      { h: "🎒 Carry-on and personal item (international)",
        table: { head: ["Item", "Allowed", "Size"], rows: [
          ["Carry-on bag", "1 piece", "Within 55 × 40 × 25 cm, and 115 cm for length + width + height"],
          ["Personal item", "1", "Within 40 × 30 × 20 cm"],
          ["Weight", "—", "Up to 10 kg in total per passenger"] ] },
        list: ["<strong>Smaller aircraft</strong> (fewer than 100 seats) have limited storage space, and a bag over the stipulated size may not be carried on board.",
          "<strong>Tripods</strong> longer than 60 cm when folded are not permitted in the cabin." ] },
      { h: "🧳 Free checked baggage",
        table: { head: ["What", "Limit"], rows: [
          ["Weight per piece", "32 kg (70 lb) or 23 kg (50 lb), depending on the cabin"],
          ["Size per piece", "158 cm (length + width + height)"],
          ["Number of free pieces", "3 pieces, 1 to 2 pieces or 0 to 2 pieces depending on the cabin and fare (listed in order First, Business and Premium Economy, Economy)"] ] },
        list: ["<strong>Members:</strong> eligible members can check one additional piece free, or up to 20 kg more than the free allowance of the cabin.",
          "<strong>Cargo space:</strong> depending on the route or aircraft type, a bag can be refused even within 292 cm in total because of limited cargo space.",
          "<strong>Fees:</strong> excess baggage fees apply above your free allowance; we did not read ANA's fee table, so check your route on ana.co.jp." ] }
    ],
    faq: [
      ["What is the ANA carry-on size on international flights?", "Within 55 × 40 × 25 cm and no more than 115 cm in length + width + height, plus a personal item within 40 × 30 × 20 cm, 10 kg combined."],
      ["What is the ANA checked bag weight limit?", "23 kg (50 lb) per piece, or 32 kg (70 lb) per piece in the higher cabins, and 158 cm in length + width + height."],
      ["How many checked bags are free on ANA?", "It depends on cabin and fare: 3 pieces, 1 to 2 pieces or 0 to 2 pieces on the page's table. Your reservation shows the allowance for your ticket."],
      ["Can ANA refuse a bag that fits the size limit?", "Yes. Depending on the route or aircraft type, a bag within 292 cm may not be accepted because of limited cargo space."]
    ],
    sources: [
      ["https://www.ana.co.jp/en/jp/guide/boarding-procedures/baggage/international/baggage-free/", "ANA &mdash; Free checked baggage (international)"],
      ["https://www.ana.co.jp/en/jp/guide/boarding-procedures/baggage/international/carry-rule/", "ANA &mdash; Carry-on size and rules (international)"]
    ]
  },
  "Austrian": {
    title: "Austrian Airlines Baggage Allowance 2026: Carry-On 55 x 40 x 23 cm, 8 kg, Checked Bag 23 kg",
    desc: "Austrian Airlines baggage allowance 2026: carry-on 55 x 40 x 23 cm up to 8 kg plus a 40 x 30 x 15 cm personal item, checked bag 23 kg (32 kg Business), 158 cm, excess baggage fees to the USA.",
    answer: "Austrian allows one personal item up to 40 x 30 x 15 cm on every fare, and one carry-on up to 8 kg and 55 x 40 x 23 cm on Economy Light, Comfort, Comfort Green and Flex and in long-haul Economy and Premium Economy; Business and First get two carry-on items. Economy Basic on short and medium-haul flights includes only the personal item. A checked bag is up to 23 kg (32 kg in Business Class) and 158 cm in height + width + length.",
    stats: [
      ["55 × 40 × 23 cm", "carry-on, max. 8 kg"],
      ["40 × 30 × 15 cm", "personal item, every fare"],
      ["23 / 32 kg", "checked bag, Economy / Business"],
      ["158 cm", "checked bag, height + width + length"]
    ],
    sections: [
      { h: "🎒 Carry-on by travel class",
        table: { head: ["Class", "Personal item", "Carry-on (max. 8 kg, 55 × 40 × 23 cm)"], rows: [
          ["Short and medium-haul Economy Basic", "1", "None included"],
          ["Short and medium-haul Economy Light, Comfort, Comfort Green, Flex", "1", "1"],
          ["Short and medium-haul Business Comfort, Comfort Green, Flex", "1", "2"],
          ["Long-haul Economy and Premium Economy", "1", "1"],
          ["Long-haul Business and First", "1", "2"] ] },
        list: ["<strong>Departing from the USA:</strong> under TSA requirements you may take only one carry-on and one personal item through security, regardless of class or status; extra carry-on must be checked before the checkpoint, also on connecting flights in the USA.",
          "<strong>Economy Basic, short and medium-haul:</strong> HON Circle, Senator and Star Alliance Gold members may bring one carry-on free in addition to the personal item." ] },
      { h: "🧳 Checked and excess baggage",
        table: { head: ["What", "Rule"], rows: [
          ["Free checked bag", "Maximum 23 kg, or 32 kg in Business Class, within 158 cm (height + width + length)"],
          ["Counts as excess baggage", "158 to 292 cm in size or 24 to 32 kg in weight (Business bags up to 32 kg are included but count as excess above 158 cm)"],
          ["Not accepted at check-in", "Over 32 kg or over 292 cm"],
          ["Additional bag between the USA, Canada, Mexico, Central America and worldwide", "Online EUR 110 / CHF 120 / USD 120 / CAD 120; at check-in EUR 120 / CHF 130 / USD 130 / CAD 130"] ] },
        list: ["<strong>Currency:</strong> the fee is calculated in the national currency of the departure airport.",
          "<strong>Second bag on some intercontinental Economy routes</strong> has a discounted fee (23 kg, 158 cm); Miles & More members with Frequent Traveller status and above, and Star Gold members, get a higher allowance and then pay the normal excess rules.",
          "<strong>Not read:</strong> how many checked bags each fare includes (the table did not load), and the Economy Basic checked bag fees; check your ticket." ] }
    ],
    faq: [
      ["What is the Austrian Airlines carry-on size?", "55 × 40 × 23 cm and up to 8 kg, plus a personal item up to 40 × 30 × 15 cm, on fares that include a carry-on."],
      ["Does Austrian Economy Basic include a carry-on?", "On short and medium-haul flights Economy Basic includes only the personal item (40 × 30 × 15 cm); HON Circle, Senator and Star Alliance Gold members can bring a carry-on free."],
      ["What is the Austrian checked bag weight limit?", "23 kg, or 32 kg in Business Class, and 158 cm in height + width + length. Bags over 32 kg or 292 cm are not accepted."],
      ["How much is an additional bag on Austrian to the USA?", "Between the USA, Canada, Mexico, Central America and worldwide the page lists EUR 110 / USD 120 online and EUR 120 / USD 130 at check-in, in the departure airport's currency."]
    ],
    sources: [
      ["https://www.austrian.com/us/en/free-baggage", "Austrian &mdash; Free baggage"],
      ["https://www.austrian.com/us/en/excess-baggage", "Austrian &mdash; Excess baggage"],
      ["https://www.austrian.com/us/en/handgepaeck", "Austrian &mdash; Carry-on baggage"]
    ]
  }
};
