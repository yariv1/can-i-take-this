// Slim baggage entries (batch 12, checked 12 October 2026, read on each airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// Southwest: support.southwest.com Checked Bag Policy + Carryon policy + southwest.com Optional Travel Charges (fee tables read in full). NOT read: international checked-bag page, embargoes.
// British Airways: britishairways.com Baggage essentials (hand baggage sizes, checked weights, member allowances, heavy bag charge). NOT read: the baggage calculator (per-route allowance), Club World / First allowance count.
module.exports = {
  "Southwest": {
    title: "Southwest Baggage Allowance 2026: Checked Bag Fees $45 and $55, Carry-On 24 x 16 x 10 in",
    desc: "Southwest baggage allowance 2026: first checked bag $45 and second $55 on Basic, Choice and Choice Preferred (booked on or after April 9, 2026), Choice Extra free, 50 lb and 62 in limits, carry-on 24 x 16 x 10 in.",
    answer: "Southwest charges $45 for the first checked bag and $55 for the second on Basic, Choice and Choice Preferred fares ticketed or changed on or after April 9, 2026 (earlier tickets: $35 and $45); a third bag and beyond is $150. Choice Extra and Rapid Rewards A-List Preferred include two free bags, and A-List members and Rapid Rewards credit cardmembers get the first bag free. A checked bag is up to 50 lb and 62 inches (length + width + height). You can bring one carry-on up to 24 x 16 x 10 in and one personal item.",
    stats: [
      ["$45 / $55", "1st / 2nd checked bag, Basic, Choice, Choice Preferred (from Apr 9, 2026)"],
      ["50 lb · 62 in", "checked bag weight and size limit"],
      ["24 × 16 × 10 in", "carry-on size, plus 1 personal item"],
      ["$150", "3rd and each further checked bag"]
    ],
    sections: [
      { h: "🧳 Checked bag fees, U.S. mainland (each way)",
        table: { head: ["Fare or customer", "1st bag", "2nd bag", "3rd+ bag"], rows: [
          ["Basic, Choice, Choice Preferred (on or after Apr 9, 2026)", "$45", "$55", "$150"],
          ["Basic, Choice, Choice Preferred (before Apr 9, 2026)", "$35", "$45", "$150"],
          ["Choice Extra", "Free", "Free", "$150"],
          ["Rapid Rewards A-List Preferred", "Free", "Free", "$150"],
          ["Rapid Rewards A-List", "Free", "$35", "$150"],
          ["Rapid Rewards credit cardmember (on or after Apr 9, 2026)", "Free", "$55", "$150"],
          ["Active-duty military with valid ID", "Free", "Free", "Free"] ] },
        list: ["<strong>Who else benefits:</strong> free bag benefits extend to up to eight additional passengers on the same reservation. They do not apply on flights booked with a partner airline.",
          "<strong>Interisland Hawaii</strong> has its own fees: for non-residents on or after April 9, 2026 the first bag is $30, the second $40 and the third $50; Hawaii residents get two free bags." ] },
      { h: "⚖️ Size, weight and extra fees",
        table: { head: ["Bag", "Limit", "Fee on top of the bag fee (mainland)"], rows: [
          ["Standard checked bag", "62 in (length + width + height), 50 lb", "—"],
          ["Overweight 51–70 lb", "—", "$100"],
          ["Overweight 71–100 lb", "—", "$200"],
          ["Oversized 63–80 in", "—", "$200"],
          ["Oversized and overweight", "—", "$200"] ] },
        list: ["Wheels and handles count toward the 62 inches.",
          "Southwest waives the oversize fee for listed sports equipment and musical instruments, but the standard and overweight fees still apply." ] },
      { h: "🎒 Carry-on and personal item",
        list: ["<strong>Carry-on:</strong> 24 × 16 × 10 in including wheels, handles and attachments; it must fit in the overhead bin. The page lists no weight limit.",
          "<strong>Personal item:</strong> one, must fit under the seat in front of you. No size is listed on the page.",
          "<strong>Counts or not:</strong> neck pillows do not count toward the limit; a pet carrier counts as your carry-on or your personal item.",
          "<strong>Partners:</strong> partner airlines can have different carry-on and personal item rules." ] }
    ],
    faq: [
      ["How much is the first checked bag on Southwest?", "$45 for Basic, Choice and Choice Preferred tickets booked or changed on or after April 9, 2026 ($35 for earlier tickets). Choice Extra and A-List Preferred include it free."],
      ["How much is the second checked bag on Southwest?", "$55 on or after April 9, 2026, $45 before. It is free on Choice Extra and A-List Preferred."],
      ["What are Southwest's checked bag size and weight limits?", "62 inches in total (length + width + height, wheels and handles included) and up to 50 pounds. Heavier bags pay $100 (51 to 70 lb) or $200 (71 to 100 lb)."],
      ["What is the Southwest carry-on size?", "24 × 16 × 10 inches including wheels, handles and attachments, plus one personal item under the seat."],
      ["Do Southwest credit cardmembers get free bags?", "Rapid Rewards credit cardmembers get the first checked bag free, and pay $55 for the second on or after April 9, 2026."]
    ],
    sources: [
      ["https://support.southwest.com/helpcenter/article/checked-baggage-policy", "Southwest &mdash; Checked Bag Policy"],
      ["https://support.southwest.com/helpcenter/article/carryon-baggage-policy", "Southwest &mdash; Carryon and Personal Item Policy"],
      ["https://www.southwest.com/html/customer-service/travel-fees.html", "Southwest &mdash; Optional Travel Charges"]
    ]
  },
  "British Airways": {
    title: "British Airways Baggage Allowance 2026: Cabin Bag 56 x 45 x 25 cm, Checked Bag 23 kg",
    desc: "British Airways baggage allowance 2026: 1 cabin bag 56 x 45 x 25 cm plus a handbag, checked bag up to 23 kg (32 kg for members and premium cabins), heavy bag charge 100 USD, Economy Basic with no hold bag.",
    answer: "British Airways allows one cabin bag up to 56 x 45 x 25 cm (22 x 18 x 10 in) including wheels and handles, plus one handbag or backpack. A checked bag is limited to 23 kg (50 lb) per bag in Economy, and no checked bag may weigh over 32 kg. The hand-baggage-only Economy Basic fare includes no checked bag. A bag between 23 kg and 32 kg over your allowance pays a heavy bag charge of 65 GBP / 75 EUR / 100 USD / 100 CAD per bag and one-way journey.",
    stats: [
      ["56 × 45 × 25 cm", "cabin bag (22 × 18 × 10 in), wheels and handles included"],
      ["40 × 30 × 15 cm", "handbag or backpack (16 × 12 × 6 in)"],
      ["23 kg (50 lb)", "checked bag per bag in Economy; 32 kg is the maximum"],
      ["100 USD", "heavy bag charge per bag, one way (65 GBP / 75 EUR)"]
    ],
    sections: [
      { h: "🎒 Hand baggage",
        table: { head: ["Item", "Maximum size"], rows: [
          ["Cabin bag", "56 × 45 × 25 cm (22 × 18 × 10 in) including wheels and handles"],
          ["Handbag or backpack (under the seat)", "40 × 30 × 15 cm (16 × 12 × 6 in)"] ] },
        list: ["If you have more than two pieces of hand baggage, or they are over the permitted size, you may have to put them in the hold as checked baggage.",
          "<strong>Pack medication, laptops, tablets, power banks and spare batteries in the smaller under-seat bag:</strong> power banks and spare batteries are forbidden in checked baggage, and bigger cabin bags can be moved to the hold on busy flights." ] },
      { h: "🧳 Checked baggage",
        table: { head: ["Fare or member", "What the page says"], rows: [
          ["Economy (no checked bag), the hand-baggage-only fare", "No checked baggage; any bag in the hold is an extra charge"],
          ["Economy and other fares with a bag", "Up to 23 kg (50 lb) per bag, bag size up to 90 × 75 × 43 cm (35 × 30 × 17 in); the number of bags depends on the fare and route, so use the calculator"],
          ["Gold, Emerald, Concierge or Silver, Sapphire, Platinum member in Economy", "2 bags checked into the hold, up to 32 kg (70 lb) per bag"],
          ["Blue or Bronze member in Economy", "Up to 23 kg (50 lb) per bag, up to 90 × 75 × 43 cm"] ] },
        list: ["<strong>Weight rule:</strong> the 23 kg limit applies to each bag and cannot be split between bags. No checked bag may weigh over 32 kg.",
          "<strong>Heavy bag charge:</strong> 65 GBP / 75 EUR / 100 USD / 100 CAD per overweight bag and one-way journey, converted to local currency elsewhere; local taxes may apply.",
          "<strong>Oversize bag in the hold:</strong> maximum 190 × 75 × 65 cm.",
          "<strong>Other airlines:</strong> if your trip includes a flight on another airline, its allowance may be different." ] }
    ],
    faq: [
      ["What is the British Airways cabin bag size?", "56 × 45 × 25 cm (22 × 18 × 10 in) including wheels and handles, plus one handbag or backpack of 40 × 30 × 15 cm."],
      ["What is the British Airways checked bag weight limit?", "23 kg (50 lb) per bag in Economy, applied to each bag separately. No checked bag may weigh more than 32 kg."],
      ["Does British Airways Economy Basic include a checked bag?", "No. The hand-baggage-only (Economy Basic) fare includes no checked baggage, so any bag in the hold is an extra charge."],
      ["How much is the British Airways heavy bag charge?", "65 GBP / 75 EUR / 100 USD / 100 CAD per overweight bag and one-way journey, for a bag between 23 kg and 32 kg over your allowance."],
      ["How many bags do British Airways Club members get?", "Gold, Emerald, Concierge, Silver, Sapphire and Platinum members get 2 checked bags in Economy, up to 32 kg each; Blue and Bronze members get the standard 23 kg bags."]
    ],
    sources: [
      ["https://www.britishairways.com/en-gb/information/baggage-essentials/checked-baggage-allowances", "British Airways &mdash; Baggage essentials"]
    ]
  }
};
