// Slim baggage entries (batch 22, checked 12 October 2026, read on the airlines' OWN pages:
// Vietnam Airlines "Free checked baggage" + "Hand baggage" (us/en); Asiana "Free Baggage" (international) + "Carry-on Baggage" (flyasiana.com/C/US/EN). Same rules as BAGGAGE_DETAIL.md.
// NOT read: Vietnam Airlines fare-type differences (Economy Lite/Super Lite), excess baggage price list; Asiana domestic Korea checked allowance, excess fees, special items.
module.exports = {
  "Vietnam Airlines": {
    title: "Vietnam Airlines Baggage Allowance 2026: Carry-On 56 x 36 x 23 cm, 10 kg, Checked Bag 23 kg and 158 cm",
    desc: "Vietnam Airlines baggage allowance 2026: carry-on 56 x 36 x 23 cm and 10 kg plus a small accessory, free checked bags by route (1 or 2 pieces of 23 kg in Economy, 32 kg in Business), 158 cm, Lotusmiles extra bags.",
    answer: "Vietnam Airlines allows one carry-on piece up to 56 x 36 x 23 cm (22 x 14 x 9 in) and 10 kg, plus one accessory up to 40 x 30 x 15 cm (16 x 12 x 6 in). In Economy on routes to and from the US, Australia and Europe the total carry-on weight is 12 kg; on other routes it is 10 kg. Free checked baggage is counted in pieces: Economy gets 1 piece of 23 kg on most routes and 2 pieces on routes to and from the Americas, Business gets 2 pieces of 32 kg on long routes. Each piece is up to 158 cm (62 in) in length + width + height.",
    stats: [
      ["56 × 36 × 23 cm", "carry-on piece, up to 10 kg (22 lb)"],
      ["40 × 30 × 15 cm", "accessory (16 × 12 × 6 in)"],
      ["1 or 2 × 23 kg", "free checked bags in Economy, by route"],
      ["158 cm", "checked bag, length + width + height (62 in)"]
    ],
    sections: [
      { h: "🧳 Free checked baggage by route",
        table: { head: ["Route", "Economy", "Premium Economy", "Business"], rows: [
          ["Vietnam domestic", "1 piece, 23 kg", "1 piece, 32 kg", "1 piece, 32 kg"],
          ["Between Southeast Asian countries", "1 piece, 23 kg", "1 piece, 23 kg", "1 piece, 32 kg"],
          ["Vietnam and Hong Kong, China, Taiwan, South Korea", "1 piece, 23 kg", "2 pieces, 23 kg each", "2 pieces, 32 kg each"],
          ["From or to Australia or Europe (not Russia)", "1 piece, 23 kg", "2 pieces, 23 kg each", "2 pieces, 32 kg each"],
          ["From or to the Americas", "2 pieces, 23 kg each", "2 pieces, 23 kg each", "2 pieces, 32 kg each"],
          ["Between Russia and Vietnam (tickets from 1 December 2025)", "1 piece, 23 kg", "2 pieces, 23 kg each", "2 pieces, 32 kg each"],
          ["Other routes", "1 piece, 23 kg", "2 pieces, 23 kg each", "2 pieces, 32 kg each"] ] },
        list: ["<strong>Vietnam and Japan:</strong> it depends on the route and the aircraft. For tickets issued from 29 April 2026, Economy gets 2 pieces of 23 kg between Hanoi or Ho Chi Minh City and Tokyo, and on Osaka or Nagoya flights operated by B787 or A350; 1 piece of 23 kg on A320 or A321 flights and on the Da Nang and Fukuoka routes listed on the page.",
          "Stopovers longer than 24 hours: the allowance applies to each leg separately.",
          "<strong>Maximum size:</strong> 158 cm (62 in) in length + width + height per piece.",
          "<strong>Not read:</strong> how the allowance changes by fare type (for example the lowest Economy fares); check your booking or the Baggage Calculator on vietnamairlines.com." ] },
      { h: "🎒 Carry-on and accessory",
        table: { head: ["Route and cabin", "Carry-on pieces", "Total hand baggage weight"], rows: [
          ["To or from the US, Australia, Europe (incl. Russia): Economy", "1 piece up to 10 kg + 1 accessory", "12 kg"],
          ["To or from the US, Australia, Europe (incl. Russia): Premium Economy and Business", "2 pieces up to 10 kg each + 1 accessory", "18 kg"],
          ["Other routes: Business", "2 pieces up to 10 kg each + 1 accessory", "18 kg"],
          ["Other routes: Premium Economy and Economy", "1 piece of 10 kg + 1 accessory", "10 kg in total"] ] },
        list: ["<strong>Size:</strong> one piece up to 56 × 36 × 23 cm (22 × 14 × 9 in), 115 cm in total; one accessory up to 40 × 30 × 15 cm (16 × 12 × 6 in), 85 cm in total.",
          "A bag over the limits is charged as excess hand baggage: the airport checked-bag fee for 1 piece if only the weight or the number of pieces is exceeded, the oversize fee if only the size is exceeded, and 2 times the airport excess fee if both are exceeded.",
          "Children under 2: 1 piece up to 3 kg (food, diapers or formula) plus 1 foldable stroller." ] },
      { h: "⭐ Extra bags for Lotusmiles and SkyTeam members",
        table: { head: ["Tier", "Extra free checked bags"], rows: [
          ["Silver", "None"],
          ["Titanium, Gold, Elite, Elite Plus", "+1 piece of 23 kg"],
          ["Million Milers or Platinum", "+2 pieces of 23 kg each"] ] },
        list: ["Applies to flights operated by Vietnam Airlines, on top of the ticketed allowance.",
          "Infants under 2 without a seat: to and from the Americas 1 piece up to 23 kg plus a foldable stroller; other routes 1 piece up to 10 kg plus a stroller, if the ticket has a free allowance." ] }
    ],
    faq: [
      ["What is the Vietnam Airlines carry-on size?", "One piece up to 56 × 36 × 23 cm (22 × 14 × 9 in) and 10 kg, plus one accessory up to 40 × 30 × 15 cm."],
      ["How many checked bags are free on Vietnam Airlines in Economy?", "1 piece of 23 kg on most routes, including Vietnam domestic, Europe, Australia and Hong Kong, China, Taiwan and South Korea. Routes to and from the Americas give 2 pieces of 23 kg. Japan depends on route and aircraft."],
      ["What is the Vietnam Airlines checked bag size limit?", "158 cm (62 in) in length + width + height per piece."],
      ["Is the carry-on weight different on long routes?", "Yes. To and from the US, Australia and Europe, Economy hand baggage totals 12 kg (one piece up to 10 kg plus an accessory); on other routes Economy is 10 kg in total."]
    ],
    sources: [
      ["https://www.vietnamairlines.com/us/en/travel-information/baggage/baggage-allowance-checked-baggage", "Vietnam Airlines &mdash; Free checked baggage"],
      ["https://www.vietnamairlines.com/us/en/travel-information/baggage/baggage-allowance-hand-baggage", "Vietnam Airlines &mdash; Hand baggage"]
    ]
  },
  "Asiana": {
    title: "Asiana Airlines Baggage Allowance 2026: Carry-On 115 cm and 10 kg, Checked Bag 23 kg and 32 kg",
    desc: "Asiana Airlines baggage allowance 2026: 1 carry-on (115 cm total, 10 kg) plus a personal item 40 x 30 x 20 cm, 2 free checked bags of 23 kg in Economy on U.S. routes, 1 elsewhere, 2 bags of 32 kg in Business, 158 cm.",
    answer: "Asiana allows one carry-on in Economy (sum of three dimensions up to 115 cm, 10 kg or less) and two in Business (up to 10 kg each), plus one personal item up to 40 x 30 x 20 cm (16 x 12 x 8 in) under the seat. On international flights Economy gets 2 free checked bags of 23 kg (50 lb) on U.S. routes and 1 bag of 23 kg on other routes; Business gets 2 bags of 32 kg (70 lb). Each bag is up to 158 cm (62 in) in length + width + height.",
    stats: [
      ["115 cm / 10 kg", "carry-on, sum of three dimensions"],
      ["40 × 30 × 20 cm", "personal item (16 × 12 × 8 in)"],
      ["2 / 1 × 23 kg", "Economy checked bags, U.S. / other routes"],
      ["2 × 32 kg", "Business checked bags (70 lb)"]
    ],
    sections: [
      { h: "🧳 Free checked baggage (international)",
        table: { head: ["Route", "Economy", "Business"], rows: [
          ["U.S. routes", "2 bags, 23 kg (50 lb) each", "2 bags, 32 kg (70 lb) each"],
          ["Non-U.S. routes", "1 bag, 23 kg (50 lb)", "2 bags, 32 kg (70 lb) each"] ] },
        list: ["<strong>Size:</strong> 158 cm (62 in) in length + width + height per bag, handles and wheels included, in every class.",
          "Business rules also apply to Business Suite. For U.S. territories such as Saipan, the non-U.S. rules apply.",
          "Infants (child or infant ticket): you may add one of a stroller, baby walker, car seat or bassinet; the page lists a stroller up to 23 kg on U.S. routes and up to 10 kg on other routes.",
          "On connecting flights with another airline, that airline's allowance may differ.",
          "<strong>Not read:</strong> the domestic Korea allowance, excess baggage fees and the allowance added by Asiana Club tiers; check them on flyasiana.com." ] },
      { h: "🎒 Carry-on and personal item",
        table: { head: ["Cabin", "Carry-on", "Personal item"], rows: [
          ["Economy", "1 bag in the overhead bin: sum of three dimensions up to 115 cm, 10 kg or less (handles and wheels included)", "1 item under the seat in front: up to 40 × 30 × 20 cm"],
          ["Business", "2 bags in the overhead bin: 115 cm total each, up to 10 kg per bag", "1 item under the seat in front: up to 40 × 30 × 20 cm"] ] },
        list: ["The same carry-on rules apply on domestic and international flights.",
          "Bags cannot be checked at the gate, including duty-free items received at the airport, so they must meet the carry-on rules before boarding.",
          "Even a bag within the limits can be carried as checked baggage depending on cabin space. Cabin crew cannot lift bags for you, except for passengers with reduced mobility.",
          "Walking aids, child seats, baby bassinets and baby food storage bags can be carried in addition to the allowance." ] }
    ],
    faq: [
      ["What is the Asiana carry-on size?", "One bag in Economy (two in Business) with the sum of its three dimensions up to 115 cm and 10 kg or less, plus a personal item up to 40 × 30 × 20 cm."],
      ["How many checked bags are free on Asiana in Economy?", "On international flights: 2 bags of 23 kg on U.S. routes and 1 bag of 23 kg on other routes."],
      ["What is the Asiana checked bag size limit?", "158 cm (62 in) in length + width + height per bag, whatever the class."],
      ["Can I check a bag at the gate on Asiana?", "No. Bags cannot be checked at the gate, so they must fit the carry-on rules before boarding."]
    ],
    sources: [
      ["https://flyasiana.com/C/US/EN/contents/free-baggage", "Asiana Airlines &mdash; Free baggage"],
      ["https://flyasiana.com/C/US/EN/contents/carry-on-baggage", "Asiana Airlines &mdash; Carry-on baggage"]
    ]
  }
};
