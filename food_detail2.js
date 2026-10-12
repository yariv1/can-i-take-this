// Food test group, batch 2 (read 12 October 2026). See food_detail.js for the rules and the rollback.
// Norway: toll.no "Regulations for meat, milk, cheese and other foods" (updated 27 Nov 2025), mattilsynet.no "Personal import of food to Norway", and the Tolletaten fruit/vegetable limits already recorded in country_plants_data.js. NOT read: Mattilsynet's list of foods with special rules.
// Mauritius: Mauritius Revenue Authority "Import Restrictions" only. It lists agricultural items to declare and says nothing about meat, dairy, eggs or packaged food: the page states this.
// Taiwan: Taipei Customs FAQ "What kind of food products can I bring into Taiwan" (released 2024-07-22) and "Items Subject to Other Regulations" (agricultural or food products section). NOT read: the APHIA reference table of common animals and plants.
module.exports = {
  "Norway": {
    answer: "What you can bring into Norway depends on where you come from. From the EEA, the quota is 10 kg in total of meat, meat products, cheese and animal feed products per person aged 12 or over. From outside the EEA you cannot bring meat or dairy products in your luggage without a special permit from the Norwegian Food Safety Authority, with listed exceptions. Potatoes need special permission, and fruit, berries and vegetables are limited to 10 kg.",
    stats: [
      ["10 kg", "meat, meat products, cheese and animal feed from the EEA, per person aged 12+"],
      ["Permit", "needed for meat and dairy from outside the EEA"],
      ["10 kg", "fruit, berries and vegetables"],
      ["Potatoes", "special permission, any quantity"]
    ],
    sections: [
      { h: "🥩 Meat, cheese and dairy",
        table: { head: ["Where you travel from", "Rule on Norway's official pages"], rows: [
          ["EEA countries", "Quota of 10 kg in total of meat, meat products, cheese and animal feed products, per person over 12. It does not apply to dog and cat food. Above the quota, the value limit decides how much you can bring without paying Norwegian tax."],
          ["Countries outside the EEA", "All personal consignments of meat and milk and their products are prohibited, to prevent travellers importing animal diseases into Norway and the EU, unless you have a special permit from Mattilsynet."],
          ["Switzerland, Liechtenstein, Iceland, Andorra, San Marino", "No permit needed for meat, meat products, milk, cheese and other dairy products, for private use."],
          ["Faroe Islands and Greenland", "Meat and milk and their products up to 5 kg in total; fishery products no restriction."] ] },
        list: ["<strong>Infant milk powder, infant food and special foods</strong> needed for medical reasons are allowed if the total is under 2 kg, the product needs no refrigeration, it is a packaged proprietary brand with unbroken packaging, and it is not infant milk or infant food from China.",
          "<strong>Exempt from the rules above:</strong> bread, cakes, biscuits, chocolate and confectionery not mixed or filled with meat product, food supplements packaged for the final consumer, meat extracts and concentrates, pasta and noodles without meat, soup stocks and flavourings packaged for the final consumer.",
          "<strong>Food of animal origin other than meat and milk:</strong> up to 1 kg can be brought without submitting it for control.",
          "<strong>Fish and certain shellfish:</strong> up to 20 kg without veterinary control.",
          "<strong>Children</strong> may bring only soft drinks, chocolate and sugar products duty-free; other products require the traveller to be at least 12." ] },
      { h: "🍎 Fruit, vegetables and potatoes",
        table: { head: ["Item", "Limit on Tolletaten's page"], rows: [
          ["Fruit, berries and vegetables", "Up to 10 kilograms"],
          ["Potatoes", "A special permit is needed regardless of the quantity"],
          ["Larger amounts", "A phytosanitary certificate is required"] ] } },
      { h: "⚠️ If you break the rules",
        list: ["Animal products that do not conform must be surrendered on arrival for official disposal, and failure to declare them can lead to criminal prosecution.",
          "<strong>Not read:</strong> Mattilsynet's list of food products with special rules (protective measures against disease, infection and pollution), published in Norwegian." ] }
    ],
    faq: [
      ["How much meat and cheese can I bring into Norway from the EU?", "A quota of 10 kg in total of meat, meat products, cheese and animal feed products applies per person aged over 12 when travelling from the EEA."],
      ["Can I bring meat or dairy into Norway from outside the EEA?", "Not without a special permit from the Norwegian Food Safety Authority; there are exceptions for Switzerland, Liechtenstein, Iceland, Andorra and San Marino, and for small amounts of infant milk and special foods."],
      ["Can I bring potatoes into Norway?", "No, not without special permission, whatever the quantity."],
      ["How much fruit and vegetables can I bring into Norway?", "Tolletaten lists up to 10 kilograms of fruit, berries and vegetables; larger amounts need a phytosanitary certificate."]
    ],
    sources: [
      ["https://www.toll.no/en/goods/food/regulations-for-meat-milk-cheese-and-other-foods", "Tolletaten (Norwegian Customs) &mdash; Regulations for meat, milk, cheese and other foods"],
      ["https://www.mattilsynet.no/en/food-and-beverages/personal-import-of-food-to-norway", "Mattilsynet (Norwegian Food Safety Authority) &mdash; Personal import of food to Norway"],
      ["https://www.toll.no/en/goods/plants-and-seeds/regulations-for-fruits-vegetables-plants-flowers-and-seeds", "Tolletaten &mdash; Regulations for fruits, vegetables, plants, flowers and seeds"]
    ]
  },
  "Mauritius": {
    answer: "Mauritius requires you to declare all fresh fruits and vegetables, and dried fruits and vegetables that still have seeds or fruit skin, and these items need clearance from the Ministry of Agro-Industry and Food Security before Customs releases them. The same applies to seeds (including commercially packaged ones), spices, plants, coconuts and remedies containing herbs. The Mauritius Revenue Authority page we read gives no rule for meat, dairy, eggs or packaged food, so we do not state one.",
    stats: [
      ["Declare", "all fresh fruits and vegetables"],
      ["Clearance", "from the Ministry of Agro-Industry and Food Security"],
      ["Seeds + spices", "must be declared, even commercially packaged"],
      ["Not stated", "meat, dairy, eggs, packaged food"]
    ],
    sections: [
      { h: "🍎 What the Mauritius Revenue Authority says to declare",
        p: "Mauritius says it is relatively free from exotic pests and diseases. Plants and products thereof, micro-organisms, soil and products containing soil are subject to phytosanitary control. These classes of goods must be declared to Customs or to the representative of the Ministry of Agro-Industry and Food Security, and clearance from the Ministry is required before Customs releases them.",
        table: { head: ["Class", "Items listed"], rows: [
          ["Fruits and vegetables", "All fresh fruits and vegetables; dried fruits and vegetables containing seeds or fruit skin"],
          ["Plants, seeds and soil", "Plants, cuttings, roots and bulbs; live plants, cut foliage and flowers; seeds (including commercially packaged seeds) and spices; coconuts and coconut by-products"],
          ["Dried plant material", "Remedies and medicine containing herbs, seeds, fungi, bark and dried plant material"],
          ["Handicrafts", "Souvenirs and goods made of unprocessed animal products (rawhide, feathers, teeth, bones); dried flower arrangements and pot pourri; goods containing seed, pinecones, bark, moss, straw or bamboo"],
          ["Other", "Camping gear, golf clubs, used sports shoes and bicycles that may contain soil; wood with bark"] ] } },
      { h: "🐾 Pets and endangered species",
        list: ["The import of pets as accompanied baggage or in the cabin is strictly prohibited; an import permit from the Veterinary Service is required before importing animals.",
          "Species protected under CITES, such as caviar, are prohibited except for non-commercial purposes like scientific research." ] },
      { h: "📋 What this page does not cover",
        list: ["The Mauritius Revenue Authority page we read lists agricultural items to declare, and says nothing about meat, dairy, eggs, honey or sealed packaged food. We did not find a separate traveller rule for them, so we do not claim they are allowed.",
          "For anything not listed above, contact the Ministry of Agro-Industry and Food Security, whose Veterinary Services and plant protection divisions issue permits." ] }
    ],
    faq: [
      ["Can I bring fresh fruit into Mauritius?", "All fresh fruits and vegetables must be declared and need clearance from the Ministry of Agro-Industry and Food Security before Customs releases them."],
      ["Do I need to declare seeds and spices in Mauritius?", "Yes. The Mauritius Revenue Authority lists seeds, including commercially packaged seeds, and spices among items that must be declared."],
      ["Can I bring my pet into Mauritius in the cabin?", "No. The import of pets as accompanied baggage or in cabin is strictly prohibited, and an import permit from the Veterinary Service is required."],
      ["Can I bring meat or dairy into Mauritius?", "The Mauritius Revenue Authority page we read gives no rule for meat or dairy; ask the Ministry of Agro-Industry and Food Security before you travel."]
    ],
    sources: [
      ["https://www.mra.mu/customs1/travellers/13-customs/150-import-restrictions", "Mauritius Revenue Authority &mdash; Import Restrictions"]
    ]
  },
  "Taiwan": {
    answer: "Taiwan bans fresh fruits and almost all meat products made from land animals, with exceptions such as dried or marinated aquatic products and items that comply with quarantine regulations. Pork products from African swine fever areas are banned, and a first violation carries a fine of NTD 200,000. Agricultural products are limited to 6 kg in total, with 1 kg limits for milled rice, roasted or prepared peanuts, prepared garlic, dried day-lily flower, dried mushrooms and tea; food of one kind over 6 kg or USD 1,000 needs a TFDA inspection.",
    stats: [
      ["Banned", "fresh fruits; almost all land-animal meat products"],
      ["6 kg", "total agricultural products without a permit"],
      ["1 kg each", "milled rice, roasted peanuts, prepared garlic, dried day-lily, dried mushrooms, tea"],
      ["NTD 200,000", "fine for a first African swine fever violation"]
    ],
    sections: [
      { h: "🥩 What Taiwan bans (quarantine regulations)",
        table: { head: ["Banned item", "Exceptions on Taipei Customs' page"], rows: [
          ["Live animals and products thereof", "Dried or marinated aquatic products; products compliant with quarantine regulations; dogs, cats and rabbits imported under quarantine rules"],
          ["Fresh fruits", "—"],
          ["Seeds, live plants and fresh products thereof", "Those compliant with the quarantine regulations"],
          ["Almost all meat products made from land animals", "They do not meet processing and quarantine criteria"] ] },
        list: ["<strong>African swine fever:</strong> all pork products from infected areas are banned. A passenger in first violation is fined NTD 200,000 regardless of nationality, and foreigners who do not pay at the border are repatriated.",
          "<strong>Undeclared:</strong> arriving passengers carrying such products without declaring them to Customs are fined NTD 10,000 to NTD 1,000,000 under the Statute for Prevention and Control of Infectious Animal Disease.",
          "<strong>Doubts?</strong> consult the Animal and Plant Health Inspection Agency (APHIA) counter near the baggage carousel, or go through the red channel." ] },
      { h: "⚖️ Quantity limits and food inspection",
        table: { head: ["Category", "Limit"], rows: [
          ["Agricultural products, general", "6 kg in total"],
          ["Milled rice, roasted or prepared peanuts, prepared garlic, dried day-lily flower, dried mushrooms, tea", "1 kg each"],
          ["Products from China: dried scallops, dried abalone, edible bird's nest, dried shark's fin", "1.2 kg each"],
          ["Products from China: canned products", "6 cans each"] ] },
        list: ["<strong>Above these limits</strong> an import permit issued by the International Trade Administration is required; for milled rice above the limit a permit from the Agricultural and Food Agency is also required.",
          "<strong>TFDA food inspection</strong> is required if one kind of food (excluding tablets or capsules) exceeds 6 kg or its total value is more than USD 1,000. Contact the TFDA on +886-2-2787-8000 before customs clearance.",
          "<strong>Endangered species:</strong> items such as dried or sliced American ginseng need a CITES permit or certificate." ] },
      { h: "📋 Not read",
        list: ["The APHIA reference table of common animals and plants, and rules for specific foods (cheese, milk powder, instant noodles) beyond the pages above."] }
    ],
    faq: [
      ["Can I bring fresh fruit into Taiwan?", "No. Fresh fruits are listed among articles banned from being brought in, unless they comply with quarantine regulations."],
      ["Can I bring meat into Taiwan?", "Generally no. Almost all kinds of meat products made from land animals are not permitted, and pork products from African swine fever areas are banned; dried or marinated aquatic products are an exception."],
      ["How much food can I bring into Taiwan?", "Agricultural products up to 6 kg in total, with 1 kg limits for milled rice, roasted or prepared peanuts, prepared garlic, dried day-lily flower, dried mushrooms and tea; more needs an import permit."],
      ["What is the fine for bringing meat into Taiwan?", "Fines range from NTD 10,000 to NTD 1,000,000 for undeclared products, and NTD 200,000 for a first African swine fever violation."]
    ],
    sources: [
      ["https://web.customs.gov.tw/etaipei/singlehtml/1367?cntId=df67c73ce2f449f09c487bf7f3ed88bb", "Taipei Customs &mdash; What kind of food products can I bring into Taiwan"],
      ["https://web.customs.gov.tw/etaipei/singlehtml/3396?cntId=1c1ab06901934524b5c7494c42251bf7", "Taipei Customs &mdash; Items Subject to Other Regulations (agricultural or food products)"]
    ]
  }
};
