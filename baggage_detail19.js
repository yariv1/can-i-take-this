// Slim baggage entry (batch 19, checked 12 October 2026, read on avianca.com's OWN pages: "Information and advice for your luggage" and "Fare types"). Same rules as BAGGAGE_DETAIL.md.
// NOT read: checked/extra bag fees, domestic Basic fare detail, per-route piece caps, Elite baggage.
module.exports = {
  "Avianca": {
    title: "Avianca Baggage Allowance 2026: Carry-On 55 x 35 x 25 cm, 10 kg, Checked Bag 23 kg and 32 kg",
    desc: "Avianca baggage allowance 2026: carry-on 55 x 35 x 25 cm and 10 kg plus a personal item 45 x 35 x 20 cm, checked bag 23 kg Economy and 32 kg Business, 158 cm, what Light, Classic and Business Classic include.",
    answer: "Avianca allows one carry-on of up to 55 x 35 x 25 cm (22 x 14 x 10 in) and 10 kg, wheels and handles included, plus a personal item up to 45 x 35 x 20 cm (18 x 14 x 8 in). A checked bag can be up to 158 cm (62 in) in length + width + height and 23 kg (50 lb) in Economy or 32 kg (70 lb) in Business Class. On the fare page, Light on international flights includes 1 carry-on bag (10 kg), Classic includes 1 checked bag (23 kg) and Business Classic includes 2 checked bags (32 kg).",
    stats: [
      ["55 × 35 × 25 cm", "carry-on, up to 10 kg (22 lb)"],
      ["45 × 35 × 20 cm", "personal item (18 × 14 × 8 in)"],
      ["23 / 32 kg", "checked bag, Economy / Business"],
      ["158 cm", "checked bag, length + width + height"]
    ],
    sections: [
      { h: "🎟️ What the fares include",
        table: { head: ["Fare", "Included"], rows: [
          ["Light (international)", "1 carry-on bag (10 kg)"],
          ["Classic", "1 checked bag (23 kg)"],
          ["Business Classic", "2 checked bags (32 kg)"] ] },
        list: ["<strong>Flex and Business Flex</strong> add changes and refunds before the flight; the fare page does not list a different bag allowance for them.",
          "<strong>Not read:</strong> the price of a checked bag by route and the per-route cap on pieces; check them in your booking on avianca.com." ] },
      { h: "🎒 Carry-on and personal item",
        table: { head: ["Item", "Maximum size", "Maximum weight"], rows: [
          ["Carry-on", "55 × 35 × 25 cm (22 × 14 × 10 in), wheels and handles included", "10 kg (22 lb)"],
          ["Personal item", "45 × 35 × 20 cm (18 × 14 × 8 in)", "—"] ] },
        list: ["If your carry-on exceeds the allowed size or weight, it must be registered as checked baggage.",
          "<strong>Liquids</strong> in carry-on bags must be in containers of 100 ml (3.4 oz) or less.",
          "<strong>Power banks:</strong> a maximum of 2 (up to 10 Wh each), always with you in the cabin and never in checked baggage." ] },
      { h: "🧳 Checked baggage limits",
        list: ["<strong>Size:</strong> 158 cm (62 in) total dimensions (length + width + height).",
          "<strong>Weight:</strong> 23 kg (50 lb) in Economy Class and 32 kg (70 lb) in Business Class.",
          "<strong>Excess baggage:</strong> the airline checking you in charges the applicable fee through to your final destination, so keep your proof of payment." ] }
    ],
    faq: [
      ["What is the Avianca carry-on size?", "55 × 35 × 25 cm (22 × 14 × 10 in) including wheels and handles, up to 10 kg, plus a personal item of 45 × 35 × 20 cm."],
      ["What is the Avianca checked bag weight limit?", "23 kg (50 lb) in Economy and 32 kg (70 lb) in Business Class, within 158 cm (62 in) in length + width + height."],
      ["Does Avianca Light include a checked bag?", "On international flights the fare page lists Light with 1 carry-on bag (10 kg) and Classic with 1 checked bag (23 kg)."],
      ["How many power banks can I carry on Avianca?", "A maximum of 2, up to 10 Wh each, in the cabin only."]
    ],
    sources: [
      ["https://www.avianca.com/en/my-booking/prepare-your-trip/baggage", "Avianca &mdash; Information and advice for your luggage"],
      ["https://www.avianca.com/en/information-and-help/avianca-fares/", "Avianca &mdash; Fare types"]
    ]
  }
};
