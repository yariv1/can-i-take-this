// Topic picker content for /food/romania/ (EXAMPLE of the chip + card format, 2026-10-12; waiting for the user's approval before it is used on other countries).
// Facts: European Commission "Personal imports" and Your Europe "Taking animal products, food or plants with you" (both read 12 Oct 2026). Same facts as food_detail3.js, reorganised by the question a traveller asks.
module.exports = {
  slab: "What are you bringing?",
  topics: [
    { id: "meat", label: "Meat", status: "warn", verdict: "Depends where you come from", head: "Meat and meat products: allowed inside the EU, not allowed from outside it.", scen: [
      { when: "From another EU country", status: "go", tag: "Allowed", lines: ["You can carry meat and meat products for your own personal consumption.", "The same applies from Andorra, Iceland, Liechtenstein, Norway, San Marino and Switzerland.", "In a local animal-disease outbreak, restrictions can apply to the type and amount."] },
      { when: "From outside the EU", status: "stop", tag: "Not allowed", lines: ["Travellers arriving from a non-EU country are not allowed to bring any meat or meat products.", "Why: the pathogens that cause foot and mouth disease and classical swine fever can live in meat and be carried in baggage.", "Exception: up to 10 kg from the Faroe Islands or Greenland.", "Caught with it: the meat is seized and destroyed, and you can be liable for costs or penalties."] } ] },
    { id: "dairy", label: "Dairy", status: "warn", verdict: "Depends where you come from", head: "Milk and dairy products follow the same rule as meat.", scen: [
      { when: "From another EU country", status: "go", tag: "Allowed", lines: ["Milk, cheese and other dairy are allowed for your own personal consumption."] },
      { when: "From outside the EU", status: "stop", tag: "Not allowed", lines: ["No milk or dairy products can be brought in.", "Exception: up to 10 kg from the Faroe Islands or Greenland.", "Exception: less than 2 kg of powdered infant milk, infant food or special foods needed for medical reasons, if they need no refrigeration, are a packaged proprietary brand and the packaging is unbroken."] } ] },
    { id: "eggs", label: "Eggs & honey", status: "warn", verdict: "Depends where you come from", head: "Eggs, egg products and honey: a limited quantity from outside the EU.", scen: [
      { when: "From another EU country", status: "go", tag: "Allowed", lines: ["Allowed for your own personal consumption."] },
      { when: "From outside the EU", status: "warn", tag: "Small amount only", lines: ["A limited quantity of eggs, egg products and honey can be brought.", "The Commission lists up to 2 kg for other animal products such as honey, live oysters, live mussels and snails."] } ] },
    { id: "fish", label: "Fish", status: "warn", verdict: "Depends where you come from", head: "Fish and shellfish: up to 20 kg from outside the EU.", scen: [
      { when: "From another EU country", status: "go", tag: "Allowed", lines: ["Allowed for your own personal consumption."] },
      { when: "From outside the EU", status: "warn", tag: "Small amount only", lines: ["Up to 20 kg, or the weight of one fish if that is more.", "Covers eviscerated fresh fish and prepared or processed fishery products, including prawns, lobsters, dead mussels and dead oysters."] } ] },
    { id: "fruit", label: "Fruit & veg", status: "warn", verdict: "Depends where you come from", head: "Fruit and vegetables: free inside the EU, a limited quantity from outside.", scen: [
      { when: "From another EU country", status: "go", tag: "Allowed", lines: ["Allowed if they were grown in an EU country and are free from pests or disease."] },
      { when: "From outside the EU", status: "warn", tag: "Small amount only", lines: ["A limited quantity of fruit and vegetables can be brought.", "We did not find the exact weight on the pages we read: check Romanian customs for the current limit."] } ] },
    { id: "plants", label: "Plants & flowers", status: "warn", verdict: "Depends where you come from", head: "Plants and cut flowers need a certificate from outside the EU.", scen: [
      { when: "From another EU country", status: "go", tag: "Allowed", lines: ["Plants and cut flowers grown in an EU country and free from pests or disease can be carried."] },
      { when: "From outside the EU", status: "warn", tag: "Needs a certificate", lines: ["Plants or plant products, including cut flowers, need a phytosanitary (plant health) certificate attesting they are free from certain specific pests."] } ] },
    { id: "baby", label: "Baby & special food", status: "warn", verdict: "Under 2 kg", head: "Powdered infant milk, infant food, medical foods and special pet feed: small amounts.", scen: [
      { when: "From any country", status: "warn", tag: "Under 2 kg", lines: ["Less than 2 kg of powdered infant milk, infant food and special foods required for medical reasons.", "No refrigeration needed before opening, packaged proprietary brand for direct sale, packaging unbroken unless in current use.", "Pet food required for health reasons: no more than 2 kg, shelf-stable, for the pet travelling with you."] } ] }
  ]
};
