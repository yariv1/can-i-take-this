// Slim baggage entries (batch 17, checked 12 October 2026, read on each airline's OWN pages). Same rules as BAGGAGE_DETAIL.md.
// Ethiopian: ethiopianairlines.com/us Free baggage allowance (incl. its FAQ). NOT read: extra baggage fees, route list for 3 pieces.
// Kenya Airways: kenya-airways.com baggage-allowance and hand-baggage pages (the route labels of the allowance table did not load, so pieces are shown without a route mapping). NOT read: optional fees.
// South African Airways: flysaa.com checked-baggage page (route labels did not load). NOT read: hand baggage page, optional service fees.
module.exports = {
  "Ethiopian Airlines": {
    title: "Ethiopian Airlines Baggage Allowance 2026: Carry-On 7 kg, Checked Bags 23 kg and 32 kg, 158 cm",
    desc: "Ethiopian Airlines baggage allowance 2026: carry-on 7 kg (2 pieces in Business), checked bags 2 x 23 kg in Economy on most routes, 23 kg or 32 kg per piece, 158 cm, Star Alliance Gold extra allowance.",
    answer: "Ethiopian Airlines allows 1 carry-on piece of up to 7 kg in Economy (23 x 40 x 55 cm) and 2 pieces of 7 kg each in Business, plus a laptop, books, a purse or a tablet or phone up to 3 kg together. Checked baggage depends on route and class: in Economy the page gives 2 pieces of 23 kg each, 3 pieces of 23 kg each on some routes, or 2 pieces of 32 kg; Business gets 2 or 3 bags. Each bag can be up to 158 cm (62 in) in total including handles and wheels.",
    stats: [
      ["7 kg", "carry-on, 1 piece Economy (Business: 2 pieces)"],
      ["2 × 23 kg", "Economy checked (3 × 23 kg or 2 × 32 kg on some routes)"],
      ["158 cm", "maximum bag size, 62 in, handles and wheels included"],
      ["+20 kg / +1 piece", "Star Alliance Gold extra allowance"]
    ],
    sections: [
      { h: "🧳 Checked baggage",
        table: { head: ["Class", "Free checked allowance (depends on route)"], rows: [
          ["Economy", "2 pieces of 23 kg each; 3 pieces of 23 kg each on some routes (listed as C-9); or 2 pieces of 32 kg"],
          ["Business", "2 or 3 bags, depending on the route"] ] },
        list: ["<strong>Size and weight:</strong> maximum 62 inches (158 cm) including handles and wheels; standard weight 50 lb (23 kg), and 70 lb (32 kg) where the route allows it.",
          "<strong>Star Alliance Gold</strong> passengers in Business or Economy get 20 kg additional allowance in the weight system, or 1 piece in the piece system within 158 cm.",
          "<strong>Infants:</strong> one checked bag of 10 kg (weight system) or 23 kg (piece system) depending on the route; strollers and car seats go free.",
          "<strong>Not read:</strong> Ethiopian's extra baggage fee table; check your route on ethiopianairlines.com." ] },
      { h: "🎒 Carry-on",
        table: { head: ["Class", "Pieces", "Weight", "Size"], rows: [
          ["Economy", "1", "7 kg", "23 × 40 × 55 cm"],
          ["Business", "2", "7 kg each", "—"] ] },
        list: ["<strong>Extras on top:</strong> one laptop, books, a purse, one tablet or one phone, with a maximum combined weight of 3 kg.",
          "<strong>Pets in the cabin:</strong> only a dog or cat, in a box of no more than 55 × 40 × 20 cm and 8 kg including the carrier; limited per cabin.",
          "<strong>Check-in:</strong> arrive at least 2 hours before departure if you need to check in at the airport." ] }
    ],
    faq: [
      ["What is the Ethiopian Airlines carry-on allowance?", "1 piece up to 7 kg in Economy and 2 pieces of 7 kg each in Business, with a laptop, books, purse or tablet or phone up to 3 kg in addition."],
      ["How many checked bags does Ethiopian Airlines allow in Economy?", "Depending on the route: 2 pieces of 23 kg each, 3 pieces of 23 kg each on some routes, or 2 pieces of 32 kg."],
      ["What is the Ethiopian Airlines bag size limit?", "62 inches (158 cm) in total, including handles and wheels."]
    ],
    sources: [
      ["https://www.ethiopianairlines.com/us/information/baggage-information/free-baggage-allowance", "Ethiopian Airlines &mdash; Free baggage allowance"]
    ]
  },
  "Kenya Airways": {
    title: "Kenya Airways Baggage Allowance 2026: Hand Baggage 10 or 12 kg, Checked 23 kg and 32 kg",
    desc: "Kenya Airways baggage allowance 2026: hand baggage up to 12 kg (EU, US, UK) or 10 kg, 2 pieces and 18 kg in Business, checked pieces of 23 kg or 32 kg, extra piece for Asante members.",
    answer: "Kenya Airways allows 1 cabin piece in Economy (up to 12 kg on flights to or from the EU, US and UK, 10 kg otherwise) and 2 pieces totalling 18 kg in Business, each up to 55 x 25 x 35 cm, plus an accessory of 40 x 15 x 30 cm and one duty-free bag. Checked baggage is 1 or 2 pieces: 23 kg per piece in Economy and 32 kg per piece in Business, depending on the route; Asante members get one additional piece.",
    stats: [
      ["55 × 25 × 35 cm", "cabin piece size (L × W × H)"],
      ["12 / 10 kg", "Economy cabin weight: EU, US, UK / other routes"],
      ["23 / 32 kg", "checked piece, Economy / Business"],
      ["+1 piece", "Asante Silver, Gold and Platinum members"]
    ],
    sections: [
      { h: "🎒 Cabin baggage",
        table: { head: ["Cabin", "Pieces", "Weight"], rows: [
          ["Economy", "1 cabin piece + 1 accessory", "Up to 12 kg (26 lb) on EU, US and UK flights; 10 kg (22 lb) on others"],
          ["Business", "2 cabin pieces + 1 accessory", "18 kg (39 lb) in total"] ] },
        list: ["<strong>Size:</strong> each cabin piece up to 55 × 25 × 35 cm (L × W × H); accessory (handbag, backpack, briefcase, camera, laptop) up to 40 × 15 × 30 cm; one duty-free shopping bag per passenger is also allowed.",
          "<strong>Infants</strong> under 2 without a seat: 1 cabin piece up to 12 kg and 55 × 25 × 35 cm, plus a collapsible stroller and a car seat free." ] },
      { h: "🧳 Checked baggage",
        table: { head: ["Piece rule printed on Kenya Airways' page", "Detail"], rows: [
          ["2 pieces, max 32 kg / 70 lb each", "Listed; the page's route labels did not load"],
          ["2 pieces, max 23 kg / 50 lb each", "Listed; the page's route labels did not load"],
          ["1 piece, max 32 kg / 70 lb", "Listed; the page's route labels did not load"],
          ["1 piece, max 23 kg / 50 lb", "Listed; the page's route labels did not load"],
          ["+1 additional piece", "Asante members: 23 kg in Economy, 32 kg in Business"] ] },
        list: ["<strong>Piece pooling:</strong> you can pool the number of bags, not the weight per piece (with 2 pieces of 23 kg you cannot bring one bag of 18 kg and another of 26 kg).",
          "<strong>Operated by other airlines:</strong> interline and codeshare journeys can apply a different allowance.",
          "<strong>Over 23 kg:</strong> motorized wheelchairs and special sporting equipment may be accepted above 23 kg under special conditions or authorization.",
          "<strong>Not read:</strong> the route labels of the allowance table did not load, so check your route and any excess baggage fee on kenya-airways.com." ] }
    ],
    faq: [
      ["What is the Kenya Airways hand baggage allowance?", "Economy: 1 cabin piece up to 12 kg on EU, US and UK flights and 10 kg elsewhere; Business: 2 pieces totalling 18 kg; each piece up to 55 × 25 × 35 cm."],
      ["What is the Kenya Airways checked bag weight limit?", "23 kg per piece in Economy and 32 kg per piece in Business, with the number of pieces depending on your route."],
      ["Can I combine my Kenya Airways bags weights?", "No. Kenya Airways pools the number of pieces, not the weight per piece."]
    ],
    sources: [
      ["https://www.kenya-airways.com/en/plan/baggage-information/baggage-allowance/", "Kenya Airways &mdash; Baggage allowance"],
      ["https://www.kenya-airways.com/en/plan/baggage-information/hand-baggage/", "Kenya Airways &mdash; Hand baggage"]
    ]
  },
  "South African Airways": {
    title: "South African Airways Baggage Allowance 2026: Checked Bags 23 kg and 32 kg, 158 cm, Extra Pieces",
    desc: "South African Airways checked baggage allowance 2026: 1 or 2 pieces of 23 kg in Economy and 2 pieces of 32 kg in Business, 158 cm per piece, domestic weight system, extra pieces for members, bags over 32 kg as cargo.",
    answer: "South African Airways checked baggage is counted in pieces on most routes: 1 piece of up to 23 kg (50 lb) in Economy and 2 pieces of up to 32 kg (70 lb) in Business, each within 158 cm (62 in), with some routes giving 2 or 3 pieces. For Star Alliance Round-the-World travellers the page lists a weight system: First Class gets 2 pieces with a combined weight of 40 kg, Business 2 pieces with 30 kg and Economy 1 piece with 20 kg. A bag over 32 kg must travel as cargo.",
    stats: [
      ["23 / 32 kg", "checked piece, Economy / Business (piece system)"],
      ["158 cm", "per piece, 62 in"],
      ["20 / 30 / 40 kg", "Star Alliance Round-the-World weight system: Economy / Business / First, combined"],
      ["3 pieces", "most you can bring in total, with fees above your allowance"]
    ],
    sections: [
      { h: "🧳 Checked baggage",
        table: { head: ["System", "Allowance printed on SAA's page"], rows: [
          ["Piece system, Business", "2 pieces not exceeding 32 kg (70 lb) per piece, 158 cm each"],
          ["Piece system, Economy", "1 piece of 23 kg (50 lb), 158 cm; some routes 2 or 3 pieces"],
          ["Star Alliance Round-the-World travellers (weight system)", "First 2 pieces, 40 kg combined; Business 2 pieces, 30 kg combined; Economy 1 piece, 20 kg combined"] ] },
        list: ["<strong>Extra pieces:</strong> members get 1 extra piece of 23 kg or 32 kg (or based on the booked cabin), and some tiers 2 extra pieces of 32 kg, on SAA-operated flights.",
          "<strong>Children and infants</strong> paying at least 50% of the adult fare get the adult allowance; an infant without a seat gets 1 bag up to 23 kg plus a collapsible pram or buggy and a car seat free.",
          "<strong>Total:</strong> up to 3 pieces per passenger; beyond your carry-on and checked free allowance, excess baggage charges apply.",
          "<strong>Over 32 kg:</strong> a bag that weighs more than 32 kg must be checked in as cargo and charged the SAA cargo rate.",
          "<strong>Safety:</strong> power banks over 100 Wh and LED lanterns are prohibited in carry-on and checked baggage.",
          "<strong>Not read:</strong> which routes use which system (the labels did not load), the hand baggage page and the fee table; check your route on flysaa.com." ] }
    ],
    faq: [
      ["How many checked bags does South African Airways allow in Economy?", "Typically 1 piece of up to 23 kg (50 lb) per the piece system, within 158 cm, with some routes giving more; your booking shows your exact allowance."],
      ["What is the South African Airways bag size limit?", "158 cm (62 inches) per piece, and a bag over 32 kg must go as cargo."],
      ["How many bags can I bring on South African Airways in total?", "Up to 3 pieces per passenger; once you exceed your carry-on and checked free allowance, excess baggage charges apply."]
    ],
    sources: [
      ["https://www.flysaa.com/manage-fly/baggage/checked-baggage", "South African Airways &mdash; Checked baggage"]
    ]
  }
};
