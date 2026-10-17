// Food test group, batch 4 (read 12 October 2026). See food_detail.js for the rules and the rollback.
// Iceland: MAST (Icelandic Food and Veterinary Authority) "Import of food/feed and dietary supplements for personal use" and "What can I bring with me to Iceland" (updated 21.06.2021), and island.is "What you can bring or order to Iceland". NOT read: Icelandic Revenue and Customs pages themselves.
// Argentina: SENASA page "Ingresar o regresar al pais con alimentos" (argentina.gob.ar, in Spanish; read in full). NOT read: Resolution 295/1999 itself.
module.exports = {
  "Iceland": {
    answer: "Iceland bans personal imports of food containing meat, milk or eggs from countries outside the EU/EEA, whether cooked, canned, dried or freeze-dried, with narrow exceptions (up to 10 kg from the Faroe Islands and Greenland, up to 2 kg of infant milk and medical food, up to 2 kg of honey and similar products, and up to 20 kg of fishery products). Food from the EU/EEA can be brought for personal use if it is in sealed consumer packaging with a list of ingredients. Non-animal food from third countries is allowed for personal use up to 30 kg.",
    stats: [
      ["Banned", "meat, dairy and egg food from outside the EU/EEA"],
      ["Sealed", "EU/EEA food must be in sealed packaging with ingredients"],
      ["10 kg / 25,000 ISK", "food without import charges in luggage"],
      ["30 kg", "non-animal food from third countries for personal use"]
    ],
    sections: [
      { h: "🥩 Animal products: where you travel from decides",
        table: { head: ["Origin", "Rule on MAST's page"], rows: [
          ["EU/EEA countries", "Food containing animal products is permitted for personal consumption, in luggage or by mail, if it is in consumer packaging with a list of ingredients. There is no fixed quantity, but customs may comment on an abnormally large amount. MAST also tells EU/EEA travellers to avoid bringing meat or milk products because they can carry animal diseases."],
          ["Third countries (outside the EU/EEA)", "It is prohibited to import for private consumption food containing meat, milk or eggs, in luggage or by post, including cooked, canned, dried, freeze-dried and dehydrated meat and dairy products."],
          ["Faroe Islands and Greenland", "Up to 10 kg of meat and dairy products"],
          ["Infant milk, infant formula, medical food (or medical pet food)", "Up to 2 kg, needed for medical reasons, in the manufacturer's consumer packaging, stored at room temperature, seal unbroken unless in use"],
          ["Fishery products (gutted, prepared or processed; also shrimp, lobster, mussels, oysters)", "Combined quantity up to 20 kg or the weight of one fish"],
          ["Other animal products considered food (honey, live oysters, mussels, snails)", "Up to 2 kg"] ] },
        list: ["<strong>Sealed packaging is essential:</strong> customs will confiscate unlabelled and unpacked food and feed; products must be in unopened packaging with a list of ingredients.",
          "<strong>Unpasteurised milk</strong> and milk products cannot be distributed in Iceland.",
          "<strong>Vegan food</strong> for personal consumption is permitted." ] },
      { h: "🧾 Duty-free food in luggage",
        list: ["You do not need to pay import charges on food in luggage up to a maximum value of 25,000 ISK and a maximum weight of 10 kilograms, according to island.is. Import charges apply above that.",
          "<strong>Gifts</strong> up to a value of 13,500 ISK are exempt from charges (not for alcohol or tobacco).",
          "<strong>Food supplements</strong> that contain prohibited substances or need a permit cannot be imported; CBD in food is prohibited." ] },
      { h: "🥬 Non-animal food and plants",
        list: ["<strong>Products of non-animal origin</strong> from third countries are allowed for personal consumption (under 30 kg), though certain products from certain countries are under special monitoring as high-risk.",
          "<strong>Flowers and plants:</strong> travellers may bring a bouquet of cut flowers and branches (up to 25 plants), flower bulbs and tubers from Europe in unopened retail packaging (up to 2 kg), and individual potted plants from Europe (up to 3 items); larger amounts need a phytosanitary certificate and a permit from MAST.",
          "<strong>Also:</strong> used riding equipment is prohibited, used fishing equipment must be disinfected, and live animals need a permit from MAST." ] }
    ],
    faq: [
      ["Can I bring meat or cheese into Iceland?", "From the EU/EEA, food containing animal products is permitted for personal consumption if it is in sealed consumer packaging with a list of ingredients. From outside the EU/EEA, meat, dairy and egg food is prohibited, with small exceptions."],
      ["How much food can I bring into Iceland duty-free?", "Up to a value of 25,000 ISK and a weight of 10 kilograms in luggage, according to island.is."],
      ["Can I bring fruit and vegetables into Iceland?", "Non-animal food (products of non-animal origin) from third countries is allowed for personal consumption under 30 kg; plants and bulbs have their own limits and rules."],
      ["Can I bring honey into Iceland?", "Honey is counted as an animal product: up to 2 kg is allowed under the third-country exceptions, in sealed packaging."]
    ],
    sources: [
      ["https://www.mast.is/en/import-export", "MAST (Icelandic Food and Veterinary Authority) &mdash; Import of food for personal use"],
      ["https://www.mast.is/en/travel", "MAST &mdash; What can I bring with me to Iceland?"],
      ["https://island.is/en/what-you-can-bring-or-order-to-iceland", "Island.is &mdash; What you can bring or order to Iceland"]
    ]
  },
  "Argentina": {
    answer: "Argentina's food and agriculture authority (SENASA) lets travellers bring in only certain packaged foods: they must be packaged and labelled by the producer under official sanitary control, in quantities consistent with personal consumption. Meat of any species, sausages, ham, honey, homemade foods, unlabelled foods, fresh fruit and vegetables, plants and seeds are listed as not permitted. SENASA staff can seize products that do not comply.",
    stats: [
      ["Allowed", "packaged, labelled processed foods (canned fish, pasteurised dairy, jam, juices...)"],
      ["Not allowed", "meat, sausages, honey, fresh fruit and vegetables, homemade food"],
      ["Labelled", "producer packaging under official sanitary control"],
      ["Personal", "quantities consistent with personal consumption"]
    ],
    sections: [
      { h: "✅ Foods SENASA lists as authorised",
        p: "These products must be properly packaged and labelled by the producer under official sanitary control, and quantities consistent with personal consumption are allowed.",
        table: { head: ["Group", "Examples on SENASA's page"], rows: [
          ["Canned products", "Fish, pork, poultry"],
          ["Dairy", "Pasteurised fluid milk, condensed milk, powdered milk, yogurt, butter, dulce de leche, cheeses made from pasteurised milk"],
          ["Processed fruit and vegetables", "Fries, fruit in syrup, vegetables in vinegar or other preservatives, canned fruit and vegetables, dried roasted or salted products (peanuts, almonds), canned vegetables"],
          ["Other", "Jam, candied fruit, juices, sugar, oil"],
          ["Pork products from Spain", "Serrano and Iberico ham, cut or sliced, boneless, in the original factory vacuum or controlled-atmosphere pack, labelled and freely sold in Spain (Resolution 655/2017)"] ] },
        list: ["<strong>Suspended:</strong> the authorisation for boneless, cut or sliced Iberico loin from Spain is suspended (Resolution 940/2025)." ] },
      { h: "🚫 Not permitted",
        table: { head: ["Group", "Listed as not permitted"], rows: [
          ["Foods", "Homemade products; meat of any animal species; charcuterie and sausages; hams; honey; dairy products and derivatives; foods without identification or label"],
          ["Vegetables", "Fresh fruit and vegetables; garden flowers and plants; fruit, ornamental and forest plants; plant parts such as seeds, roots and buds"],
          ["Live animals", "Pets have their own entry requirements"],
          ["Other", "Animal feed; bee products (wax, propolis); veterinary products; insects, bacteria, fungi, reproductive material and other research micro-organisms"] ] },
        list: ["<strong>Reading the two lists together:</strong> the page authorises specific packaged, labelled dairy products and lists dairy products and derivatives and unlabelled food as not permitted. We therefore understand that only the packaged, labelled, pasteurised items in the authorised list are allowed."] },
      { h: "⚠️ What happens if you break the rules",
        list: ["SENASA staff can seize products that do not meet the authorisations. The page says unauthorised animal or plant products can bring pests and diseases and harm national production.",
          "SENASA refers travellers to Resolution 295/1999, which regulates the entry of food, animals, plants and agricultural products; we did not read it, so check it for anything not on the lists above."] }
    ],
    faq: [
      ["Can I bring cheese into Argentina?", "SENASA authorises cheeses made from pasteurised milk if they are packaged and labelled by the producer under official sanitary control, in personal quantities."],
      ["Can I bring meat or ham into Argentina?", "Meat of any species, sausages and hams are listed as not permitted, except boneless cut or sliced Serrano and Iberico ham from Spain in the original labelled pack."],
      ["Can I bring fruit into Argentina?", "Fresh fruit and vegetables are not permitted; processed products such as canned fruit and fruit in syrup in labelled packaging are authorised."],
      ["Can I bring honey into Argentina?", "Honey is listed among products that are not permitted."]
    ],
    sources: [
      ["https://www.argentina.gob.ar/senasa/informacion-al-viajero/ingresar-o-regresar-al-pais", "SENASA (Argentina) &mdash; Ingresar o regresar al pais con alimentos (in Spanish)"]
    ]
  }
};
