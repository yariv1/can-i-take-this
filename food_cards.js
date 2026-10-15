// Quick-answer verdict cards for the food test group (the pass/warn/stop cards at the top of /food/<country>/), 2026-10-12.
// Each card is a REAL country-specific answer from the official pages listed in food_detail*.js; no generic text.
// status: go = Allowed, warn = Some rules apply, stop = Not allowed, info = Check the source. `skip` = indexes of detail sections that would only repeat the cards.
module.exports = {
  "South Korea": {
    skip: [3],
    cards: [
      { status: "stop", cat: "Fresh fruit & vegetables", head: "Almost all fresh fruits and vegetables are prohibited.", lines: ["Rice plants, unshelled walnuts, unpeeled potatoes and saplings are also prohibited."] },
      { status: "warn", cat: "Meat & poultry", head: "Declare it, and bring a quarantine or heat-treatment certificate from the country you travel from.", lines: ["Processed meat (ham, sausage, jerky, canned) counts too.", "Anything from a prohibited region is banned."] },
      { status: "warn", cat: "Dairy & eggs", head: "Declare milk, cheese, butter and egg products.", lines: ["Animal products need the same certificate."] },
      { status: "warn", cat: "Dried plants, nuts, seeds, herbs", head: "Must be declared and inspected.", lines: ["Includes dried or fresh agricultural products and medicinal herbs."] },
      { status: "info", cat: "Sealed packaged food", head: "No separate rule on the official pages we read.", lines: ["If it contains meat, dairy, egg or plant material, treat it as that category and declare it."] },
      { status: "info", cat: "Tax-free amount", head: "Up to 5 kg of each farm, livestock or fishery product and 40 kg in total.", lines: ["Within the US$800 total taxable value."] }
    ]
  },
  "Norway": {
    skip: [1],
    cards: [
      { status: "warn", cat: "Meat & cheese from the EEA", head: "Quota: 10 kg in total of meat, meat products, cheese and animal feed per person over 12.", lines: ["Above the quota the value limit decides what is tax-free."] },
      { status: "stop", cat: "Meat & dairy from outside the EEA", head: "Prohibited without a special permit from the Norwegian Food Safety Authority.", lines: ["No permit needed from Switzerland, Liechtenstein, Iceland, Andorra or San Marino."] },
      { status: "warn", cat: "Fruit, berries & vegetables", head: "Up to 10 kg.", lines: ["Larger amounts need a phytosanitary certificate."] },
      { status: "stop", cat: "Potatoes", head: "Special permission is needed, whatever the quantity.", lines: [] },
      { status: "go", cat: "Bread, sweets & pasta", head: "Exempt from the meat and dairy rules.", lines: ["Bread, cakes, biscuits, chocolate, confectionery, pasta and noodles without meat."] }
    ]
  },
  "Mauritius": {
    skip: [2],
    cards: [
      { status: "warn", cat: "Fresh fruit & vegetables", head: "Declare them: clearance from the Ministry of Agro-Industry and Food Security is needed before release.", lines: ["Dried fruit and vegetables with seeds or fruit skin too."] },
      { status: "warn", cat: "Seeds, spices & coconuts", head: "Must be declared, even commercially packaged seeds.", lines: [] },
      { status: "stop", cat: "Pets", head: "Not allowed as baggage or in the cabin.", lines: ["An import permit from the Veterinary Service is required."] },
      { status: "info", cat: "Meat, dairy, eggs, packaged food", head: "No rule on the customs page we read.", lines: ["Ask the Ministry of Agro-Industry and Food Security before you travel."] }
    ]
  },
  "Taiwan": {
    skip: [],
    cards: [
      { status: "stop", cat: "Fresh fruit", head: "Banned.", lines: ["Seeds, live plants and fresh plant products only if they meet quarantine rules."] },
      { status: "stop", cat: "Meat", head: "Almost all land-animal meat products are not allowed.", lines: ["Pork from African swine fever areas is banned: NTD 200,000 fine for a first violation."] },
      { status: "go", cat: "Dried or marinated seafood", head: "An exception to the ban on animal products.", lines: [] },
      { status: "warn", cat: "Agricultural products", head: "6 kg in total without a permit.", lines: ["1 kg each: milled rice, roasted peanuts, prepared garlic, dried day-lily, dried mushrooms, tea."] },
      { status: "warn", cat: "Large food quantities", head: "One kind over 6 kg or USD 1,000 needs a TFDA inspection.", lines: ["Call +886-2-2787-8000 before customs clearance."] }
    ]
  },
  "Romania": {
    skip: [0, 1],
    cards: [
      { status: "go", cat: "From another EU country", head: "Meat and dairy are allowed for your own consumption.", lines: ["Also Andorra, Iceland, Liechtenstein, Norway, San Marino and Switzerland."] },
      { status: "stop", cat: "Meat & dairy from outside the EU", head: "Not allowed.", lines: ["Narrow exceptions: under 2 kg of powdered infant milk, baby food and special medical foods."] },
      { status: "warn", cat: "Fish", head: "Up to 20 kg, or the weight of one fish if it is more.", lines: [] },
      { status: "warn", cat: "Honey, eggs & other animal products", head: "A limited quantity; honey and similar up to 2 kg.", lines: [] },
      { status: "warn", cat: "Fruit & vegetables", head: "A limited quantity from outside the EU.", lines: [] },
      { status: "warn", cat: "Plants & cut flowers", head: "A phytosanitary certificate is required from outside the EU.", lines: [] }
    ]
  },
  "Iceland": {
    skip: [],
    cards: [
      { status: "go", cat: "Food from the EU/EEA", head: "Allowed for personal use in sealed consumer packaging with a list of ingredients.", lines: ["No fixed quantity, but customs may comment on an abnormally large amount."] },
      { status: "stop", cat: "Meat, dairy & eggs from outside the EU/EEA", head: "Prohibited, including cooked, canned, dried and freeze-dried.", lines: ["Up to 10 kg of meat and dairy from the Faroe Islands and Greenland."] },
      { status: "warn", cat: "Honey & other animal products", head: "Up to 2 kg.", lines: ["Honey, live oysters, mussels and snails."] },
      { status: "warn", cat: "Fish & seafood", head: "Up to 20 kg, or the weight of one fish.", lines: [] },
      { status: "go", cat: "Non-animal food from third countries", head: "Allowed for personal use under 30 kg.", lines: ["Vegan food for personal consumption is permitted."] },
      { status: "info", cat: "Duty-free food", head: "Up to 25,000 ISK in value and 10 kg in luggage.", lines: [] }
    ]
  },
  "Argentina": {
    skip: [],
    cards: [
      { status: "go", cat: "Packaged, labelled processed food", head: "Allowed in personal quantities if packaged and labelled by the producer under official control.", lines: ["Canned fish, pork and poultry, pasteurised dairy, jam, juices, sugar, oil."] },
      { status: "stop", cat: "Meat, sausages & ham", head: "Not permitted.", lines: ["Exception: boneless cut or sliced Serrano and Iberico ham from Spain in the original pack."] },
      { status: "stop", cat: "Honey & homemade food", head: "Not permitted.", lines: [] },
      { status: "stop", cat: "Fresh fruit, vegetables, plants & seeds", head: "Not permitted.", lines: [] },
      { status: "stop", cat: "Unlabelled food", head: "Not permitted.", lines: ["Foods without identification or label are seized."] }
    ]
  },
  "Serbia": {
    skip: [0],
    cards: [
      { status: "go", cat: "Food in your luggage", head: "Reasonable quantities for personal or family use, in the manufacturer's original wrapping.", lines: ["Flying out? Pack food specialties in checked luggage."] },
      { status: "warn", cat: "Food of animal origin", head: "Maximum one kilogram.", lines: [] },
      { status: "warn", cat: "Fresh fruit & vegetables", head: "Up to 5 kg without a phytosanitary certificate.", lines: ["Potato tubers are excluded."] },
      { status: "warn", cat: "Seeds, bulbs & plants", head: "Small amounts allowed without a certificate.", lines: ["Seeds up to 100 grams or five packages; bulbs up to 3 kg; up to 3 house plants."] }
    ]
  }
};
