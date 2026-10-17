// Food test group, batch 1 (read 12 October 2026). See food_detail.js for the rules and the rollback.
// South Korea: VisitKorea "Animal/Plant Quarantines" (Korea Tourism Organization, information courtesy of the Animal and Plant Quarantine Agency and Incheon Airport; page says last updated 8 Sep 2024) and Korea Customs Service "Customs clearance procedure for passenger belongings".
// NOT read: the APQA site itself (qia.go.kr redirected to a Korean home page), the current list of prohibited regions, any rule for sealed packaged food.
module.exports = {
  "South Korea": {
    answer: "South Korea bans all fresh fruit and vegetables. Meat, poultry, processed meat, eggs and dairy must be declared, and animal products need a valid quarantine or heat-treatment certificate issued by the country you travel from; anything from a prohibited region is banned. Dried or fresh agricultural products, nuts, seeds and medicinal herbs must also be reported and inspected. Prohibited items are confiscated, and a traveler found carrying one can be punished under Korean customs law.",
    stats: [
      ["Declare", "meat, processed meat, eggs, dairy"],
      ["Banned", "all fresh fruit and vegetables"],
      ["Certificate", "quarantine or heat-treatment certificate for animal products"],
      ["5 kg / 40 kg", "tax-free limit per farm, livestock or fishery product / in total"]
    ],
    sections: [
      { h: "🥩 Meat, dairy and eggs: declare, and bring a certificate",
        p: "Korea's quarantine pages list these as animal products to declare on arrival. All animal products entering Korea must come with a valid quarantine or heat-treatment certificate issued by the country of departure.",
        table: { head: ["Food", "What Korea's page says", "What to do"], rows: [
          ["Meat and poultry (beef, pork, lamb, chicken)", "Listed as an item to be declared", "Declare; bring the certificate"],
          ["Processed meat (ham, sausage, beef jerky, marinated beef, canned meat)", "Listed as an item to be declared", "Declare; bring the certificate"],
          ["Egg products (whole eggs, egg whites, powdered eggs)", "Listed as an item to be declared", "Declare"],
          ["Dairy (milk, cheese, butter)", "Listed as an item to be declared", "Declare"],
          ["Animal bones, antlers, horns, tusks", "Listed as an item to be declared", "Declare"],
          ["Anything from or through a prohibited region (including processed meat)", "Prohibited; the list of regions changes when a livestock disease breaks out", "Do not bring; check the APQA list"] ] },
        list: ["<strong>Approved countries:</strong> travelers with a quarantine certificate from an exporting country that meets Korea's import hygiene requirements can bring the products in, provided arrival inspection finds no problem.",
          "<strong>Animal quarantine inquiries:</strong> +82-32-740-2671 (import)." ] },
      { h: "🍎 Fruit, vegetables and plant products",
        p: "Travelers carrying plants, fruits, vegetables, seeds, orchids, nursery stock, cut flowers, soil and similar items must report to customs and the items undergo inspection.",
        table: { head: ["Item", "Status on Korea's page"], rows: [
          ["All fresh fruits and vegetables", "Prohibited"],
          ["Rice plant, rice husks, rice straw and related products", "Prohibited (polished rice grains are the exception)"],
          ["Unshelled walnuts, unripe beans, unpeeled potatoes and sweet potatoes", "Prohibited"],
          ["Planted crops (ginseng, mushrooms and similar) and planted saplings", "Prohibited"],
          ["Saplings and cuttings, including apple and pear trees, tangerine and orange trees, grape vines and pine trees", "Prohibited"],
          ["Live pests and insects, including pet insects", "Prohibited"],
          ["Dried or fresh agricultural products, nuts, seeds, kernels, bulbs, tubers, roots, medicinal herbs", "Must be declared and inspected"] ] },
        list: ["<strong>Plant quarantine inquiries:</strong> +82-32-740-2079 (import, carry-on plant inspection)." ] },
      { h: "🧾 Customs: allowances and what happens if you do not declare",
        list: ["<strong>Tax exemption:</strong> total taxable value of goods up to US$800; for agricultural, livestock and fishery products the customs page lists up to 5 kg of each good and 40 kg in total, and up to 100,000 won of the price of all goods purchased overseas.",
          "<strong>Voluntary declaration</strong> of goods above the exemption earns a 30% reduction of the standard customs duty.",
          "<strong>If detected without a declaration:</strong> additional tax of 40% on top of the regular tax, and 60% if it happens twice or more within 2 years.",
          "<strong>Prohibited items</strong> are confiscated, and a passenger found carrying a prohibited or restricted item during a customs investigation can be punished under Korean customs law." ] },
      { h: "📦 Sealed packaged food: what we could not confirm",
        list: ["The quarantine pages we read list animal and plant products to declare and do not give a separate rule for sealed, commercially packaged food. We therefore do not claim it is allowed.",
          "If a packaged product contains meat, dairy, egg or plant material, treat it under that category above and declare it. When unsure, declare it: the pages we read describe penalties for carrying prohibited items, and none for declaring."] }
    ],
    faq: [
      ["Can I bring fresh fruit into South Korea?", "No. South Korea's plant quarantine list prohibits all fresh fruits and vegetables; dried or fresh agricultural products that are not prohibited must be declared and inspected."],
      ["Can I bring meat or cheese into South Korea?", "They must be declared, and animal products must come with a valid quarantine or heat-treatment certificate issued by the country you travel from. Items from a prohibited region are banned."],
      ["What happens if I do not declare food in South Korea?", "Prohibited items are confiscated, and you can be punished under Korean customs law. Goods above the tax exemption that are not declared face an additional 40% tax (60% for repeat cases within 2 years)."],
      ["How much food can I bring into South Korea tax-free?", "The customs page lists, for agricultural, livestock and fishery products, up to 5 kg of each good and 40 kg in total, within the US$800 total taxable value."],
      ["Who do I contact about bringing food or plants into South Korea?", "Animal quarantine: +82-32-740-2671. Plant quarantine (carry-on inspection): +82-32-740-2079. Both are listed on Korea's official travel page."]
    ],
    sources: [
      ["https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140629", "VisitKorea (Korea Tourism Organization) &mdash; Animal/Plant Quarantines, information courtesy of APQA and Incheon Airport"],
      ["https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=8069&cntntsId=2743", "Korea Customs Service &mdash; Customs clearance procedure for passenger belongings"],
      ["https://www.qia.go.kr", "Animal and Plant Quarantine Agency (APQA) &mdash; list of prohibited regions"]
    ]
  }
};
