// Food test group, batch 5 (read 12 October 2026). See food_detail.js for the rules and the rollback.
// Serbia: Serbian Customs Administration (carina.rs) "Useful information" for passengers (FOOD, PLANTS, MEDICINES sections). NOT read: the Veterinary Directorate pages, the rest of the plants list (it was cut off on the page extract), rules for travellers from specific countries.
module.exports = {
  "Serbia": {
    answer: "Serbia's Customs Administration says food may be brought in only in reasonable quantities obviously intended for personal use or family consumption, in the original manufacturer's wrapping. Food of animal origin is limited to a maximum of one kilogram. Passengers may bring a small amount of plant products without a phytosanitary certificate, for example up to 5 kg of fresh fruit and vegetables (potato tubers excluded). If you fly, the customs page advises packing food specialties in checked luggage.",
    stats: [
      ["1 kg", "maximum food of animal origin"],
      ["5 kg", "fresh fruit and vegetables without a phytosanitary certificate (no potato tubers)"],
      ["Original wrapping", "manufacturer's packaging, personal or family use"],
      ["Checked bag", "pack food specialties in checked luggage when flying"]
    ],
    sections: [
      { h: "🍽️ Food in your luggage",
        list: ["<strong>General rule:</strong> food may be brought into or taken out of the country only in reasonable quantities that are obviously intended for personal use or the consumption of family members, in the original manufacturer's wrapping.",
          "<strong>Animal origin:</strong> if you import food of animal origin, the quantity is limited to a maximum of one kilogram.",
          "<strong>By plane:</strong> to take Serbian food specialties home, pack them in your checked luggage." ] },
      { h: "🌱 Plants and plant products",
        table: { head: ["Item", "Without a phytosanitary certificate"], rows: [
          ["Fresh fruit and vegetables", "Up to 5 kg (potato tubers excluded)"],
          ["Cut flowers and plant parts", "A single bouquet or wreath"],
          ["Flower and vegetable seeds", "Up to 100 grams or a maximum of five packages of original seeds"],
          ["Flower bulbs or tubers", "Up to 3 kg"],
          ["House plants and potted plants", "Up to 3 (bonsai trees excluded)"] ] },
        list: ["The customs page lists these as a small amount of plant products or a few plants that passengers can bring without a phytosanitary certificate; the rest of its list was not read." ] },
      { h: "💊 Medicines and pets (same customs page)",
        list: ["<strong>Medicines</strong> for the passenger and for animals travelling with them may be brought in the quantity needed for regular therapy of not longer than 15 days.",
          "<strong>Pets</strong> must come with documentation confirming veterinary and sanitary conditions (vaccination, chipping and so on); the Veterinary Directorate has the detail." ] },
      { h: "📋 What we could not confirm",
        list: ["The customs page sets the 1 kg limit for food of animal origin but does not list product by product (for example whether cheese or cured meat from a specific country is treated differently). Check with Serbian Customs or the Veterinary Directorate before you travel with meat or dairy, especially from outside the EU."] }
    ],
    faq: [
      ["How much food can I bring into Serbia?", "Reasonable quantities obviously intended for personal or family use, in the manufacturer's original wrapping; food of animal origin is limited to a maximum of one kilogram."],
      ["Can I bring fruit and vegetables into Serbia?", "Serbian Customs lists up to 5 kg of fresh fruit and vegetables (excluding potato tubers) that can be brought without a phytosanitary certificate."],
      ["Can I bring cheese or meat into Serbia?", "They are food of animal origin, which the customs page limits to a maximum of one kilogram."],
      ["Can I bring food in my hand luggage on a flight out of Serbia?", "The customs page advises packing Serbian food specialties in your checked luggage when you fly."]
    ],
    sources: [
      ["https://www.carina.rs/en/passengers/passenger-custom-clerance/useful-information-for-passengers.html", "Serbian Customs Administration &mdash; Useful information for passengers"]
    ]
  }
};
