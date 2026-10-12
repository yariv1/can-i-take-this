// Food test group, batch 3 (read 12 October 2026). See food_detail.js for the rules and the rollback.
// Romania: Romania applies the EU rules. Read: European Commission "Personal imports" (Delegated Regulation (EU) 2019/2122) and the EU's Your Europe page "Taking animal products, food or plants with you". NOT read: Romanian customs (customs.ro) and ANSVSA pages, the exact fruit/vegetable quantities.
module.exports = {
  "Romania": {
    answer: "Romania follows the EU rules. Inside the EU (and from Andorra, Iceland, Liechtenstein, Norway, San Marino and Switzerland) you can carry meat and dairy for your own consumption. Arriving from a non-EU country you are not allowed to bring any meat or dairy products, with narrow exceptions such as less than 2 kg of powdered infant milk and baby food. You can bring a limited quantity of fruit and vegetables, eggs, egg products and honey, and up to 20 kg of fish (or one fish if heavier).",
    stats: [
      ["0", "meat or dairy from a non-EU country"],
      ["20 kg", "fish, or the weight of one fish if higher"],
      ["2 kg", "honey and other animal products; infant milk and special foods"],
      ["Personal use", "meat and dairy are allowed within the EU"]
    ],
    sections: [
      { h: "🇪🇺 Travelling from another EU country",
        list: ["You can carry meat or dairy products with you as long as they are for your own personal consumption. This also applies to plants or plant products such as cut flowers, fruit or vegetables grown in an EU country and free from pests or disease.",
          "<strong>Here EU means</strong> the 27 EU countries plus Andorra, Iceland, Liechtenstein, Norway, San Marino and Switzerland.",
          "<strong>Outbreaks:</strong> in cases of localised animal disease or pest outbreaks, restrictions may apply to the type and amount of products you are allowed to carry." ] },
      { h: "🌍 Arriving from a non-EU country",
        table: { head: ["Product", "Allowed amount per person"], rows: [
          ["Meat, meat products, milk, dairy", "Not allowed (exception below for the Faroe Islands and Greenland)"],
          ["Powdered infant milk, infant food, special foods required for medical reasons", "Less than 2 kg: no refrigeration needed before opening, packaged proprietary brand for direct sale, unbroken packaging"],
          ["Pet food required for health reasons", "No more than 2 kg, shelf-stable, branded packaging, for the pet travelling with you"],
          ["Fish and fishery products (including prawns, lobsters, dead mussels and oysters)", "Up to 20 kg or the weight of one fish, whichever is more"],
          ["Other animal products (honey, live oysters, live mussels, snails)", "Up to 2 kg"],
          ["Eggs, egg products and honey", "A limited quantity"],
          ["Fruit and vegetables", "A limited quantity"],
          ["Plants or plant products, including cut flowers", "A phytosanitary (plant health) certificate attesting freedom from certain pests is required"] ] },
        list: ["<strong>Faroe Islands and Greenland:</strong> up to 10 kg of meat or meat products, 10 kg of dairy, and 10 kg each of honey, eggs and egg products, snails and live bivalves; no limit for fish.",
          "<strong>Why:</strong> pathogens that cause Foot and Mouth Disease and classical swine fever can live in meat, milk or their products and be introduced by travellers' baggage." ] },
      { h: "🔍 Checks and what happens to banned food",
        list: ["The EU organises controls at entry points and can use scanning equipment and detector dogs to screen baggage.",
          "Personal consignments found in breach of the rules are seized and destroyed, and those responsible may be liable for costs or penalties.",
          "<strong>Not read:</strong> Romania's own customs (customs.ro) and veterinary authority (ANSVSA) pages, and the exact quantity limit for fruit and vegetables. These EU pages apply in Romania; check Romanian customs for national details." ] }
    ],
    faq: [
      ["Can I bring meat or cheese into Romania from another EU country?", "Yes, for your own personal consumption. The same applies to fruit and vegetables grown in an EU country and free from pests or disease."],
      ["Can I bring meat or dairy into Romania from outside the EU?", "No. Travellers arriving from a non-EU country are not allowed to bring any meat or dairy products, apart from narrow exceptions such as less than 2 kg of powdered infant milk, baby food and special medical foods."],
      ["Can I bring honey or eggs into Romania from outside the EU?", "A limited quantity of eggs, egg products and honey can be brought; the Commission lists up to 2 kg for other animal products such as honey."],
      ["How much fish can I bring into Romania from outside the EU?", "Up to 20 kg of fishery products, or the weight of one fish if it weighs more."]
    ],
    sources: [
      ["https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_en.htm", "Your Europe &mdash; Taking animal products, food or plants with you"],
      ["https://food.ec.europa.eu/animals/animal-products-movements/personal-imports_en", "European Commission &mdash; Personal imports of meat, milk and their products"]
    ]
  }
};
