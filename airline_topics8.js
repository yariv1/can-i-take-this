// Topic entries, batch 8 (read on each airline's OWN pages on 2026-10-13). Draft: not deployed until the owner approves the wording.
const QF = "https://www.qantas.com/en-us/baggage/dangerous-goods/personal-items-toiletries-and-medicinal-items";
const PR = "https://www.philippineairlines.com/us/en/before-you-fly/baggage-information/restricted-items.html";
const TG = "https://www.thaiairways.com/en-th/content/baggage/dangerous-goods/";
const TGNOTE = "Thai Airways publishes this page for different countries. This is the Thailand version, read on 13 October 2026: check the version for your departure country too.";
const EJ = "https://www.easyjet.com/en/help-centre/baggage/dangerous-goods";
const VA = "https://www.virginaustralia.com/au/en/travel-info/baggage/carry-on-baggage/";
module.exports = {
  "easyJet": {
    alcohol: {
      ttl: "easyJet Alcohol Rules: 24% to 70%, 5 L per Person",
      desc: "easyJet alcohol rules: retail-packaged alcohol between 24% and 70% in containers up to 5 L, with 5 L in total per person.",
      answer: "easyJet's dangerous goods page permits alcoholic beverages in retail packaging containing more than 24% but not more than 70% alcohol by volume, in receptacles not exceeding 5 L, with a total net quantity of 5 L per person.",
      sections: [
        { h: "🥃 What easyJet says about alcohol", p: "From the easyJet dangerous goods page.",
          table: { head: ["Question", "easyJet rule"], rows: [
            ["Packaging", "Retail packaging"],
            ["Strength", "More than 24% but not more than 70% alcohol by volume"],
            ["Container size", "Not more than 5 L"],
            ["Total per person", "5 L"] ] },
          list: ["Security rules limit liquids in your cabin bag to 100 ml per container: see the liquids page for easyJet.",
            "Your destination may limit how much alcohol you can import: see the country rules."] }
      ],
      faq: [
        ["How much alcohol can I take on easyJet?", "Alcohol between 24% and 70% in retail packaging, in containers of up to 5 L, 5 L in total per person."]
      ],
      sources: [[EJ, "easyJet &mdash; Dangerous goods"]]
    },
    perfume: {
      ttl: "easyJet Perfume & Aerosol Rules: 2 L Total, 0.5 L per Item",
      desc: "easyJet perfume and aerosol rules: medicinal and toilet articles such as hair sprays, perfumes and colognes up to 0.5 L or 0.5 kg each and 2 L or 2 kg in total.",
      answer: "easyJet lists non-radioactive medicinal or toilet articles, including aerosols, such as hair sprays, perfumes, colognes and medicines containing alcohol. The total net quantity of all such articles must not exceed 2 kg or 2 L, and each single article must not exceed 0.5 kg or 0.5 L. It also lists non-subsidiary-risk aerosols for sporting or home use.",
      sections: [
        { h: "🧴 What easyJet says about perfume and aerosols", p: "From the easyJet dangerous goods page.",
          table: { head: ["Question", "easyJet rule"], rows: [
            ["Covered items", "Hair sprays, perfumes, colognes, medicines containing alcohol, aerosols"],
            ["Each article", "Not more than 0.5 kg or 0.5 L"],
            ["All articles together", "Not more than 2 kg or 2 L"] ] },
          list: ["Security rules limit liquids and aerosols in your cabin bag to 100 ml per container: see the liquids page for easyJet."] }
      ],
      faq: [
        ["Can I bring perfume on easyJet?", "Yes, within the limits: each article up to 0.5 L or 0.5 kg and 2 L or 2 kg in total. In your cabin bag the 100 ml liquids limit applies."]
      ],
      sources: [[EJ, "easyJet &mdash; Dangerous goods"]]
    }
  },
  "Virgin Australia": {
    vape: {
      ttl: "Virgin Australia Vape & E-Cigarette Rules: Pack Them in Carry-On",
      desc: "Virgin Australia vape rules: vapes and e-cigarettes must be packed in your carry-on baggage, not in checked baggage.",
      answer: "Virgin Australia says that if you travel with power banks, spare batteries, loose batteries, vapes, e-cigarettes, cordless hair straighteners and wireless earbud charging cases, you must pack them in your carry-on baggage.",
      sections: [
        { h: "🚭 What Virgin Australia says about e-cigarettes", p: "From the Virgin Australia carry-on baggage page.",
          table: { head: ["Question", "Virgin Australia rule"], rows: [
            ["Where to pack it", "In your carry-on baggage"] ] },
          list: ["We did not read a rule on using an e-cigarette on board. Check your destination too: some countries ban vapes."] }
      ],
      faq: [
        ["Can I put a vape in my checked bag on Virgin Australia?", "No. Virgin Australia says vapes and e-cigarettes must be packed in your carry-on baggage."]
      ],
      sources: [[VA, "Virgin Australia &mdash; Carry-on baggage"]]
    },
    perfume: {
      ttl: "Virgin Australia Perfume & Aerosol Rules: Domestic vs International",
      desc: "Virgin Australia aerosol and liquid rules: no quantity restriction on flights within Australia, and containers of 100 ml or less (aerosols with caps) on international flights.",
      answer: "Virgin Australia says flights within Australia are not subject to restrictions on how much powder, liquid, aerosols and gels you can carry onboard. On international flights you can carry liquids, aerosols and gels (with caps) in containers with a maximum capacity of 100 ml each.",
      sections: [
        { h: "🧴 What Virgin Australia says about liquids and aerosols", p: "From the Virgin Australia carry-on baggage page.",
          table: { head: ["Flight", "Virgin Australia rule"], rows: [
            ["Within Australia", "No restriction on how much you can carry onboard"],
            ["International", "Containers of 100 ml or less each, aerosols with caps"] ] },
          list: ["We did not read a separate perfume or aerosol limit for checked baggage on this page."] }
      ],
      faq: [
        ["Can I bring perfume on a Virgin Australia international flight?", "In your carry-on, only in containers of up to 100 ml each, with aerosols capped."]
      ],
      sources: [[VA, "Virgin Australia &mdash; Carry-on baggage"]]
    }
  },
  "Thai Airways": {
    vape: {
      ttl: "Thai Airways Vape & E-Cigarette Rules: Carry-On Only, Illegal in Thailand",
      desc: "Thai Airways vape rules: e-cigarettes are allowed in carry-on only, not in checked baggage, individually protected, with no use or charging on board. Vapes are illegal to bring into Thailand.",
      answer: "Thai Airways allows e-cigarettes (including e-cigars, e-pipes and other personal vaporizers) in carry-on baggage only. They are forbidden in checked baggage, must be individually protected against accidental activation, and are for personal use during travel only. Using and charging them is not permitted throughout the flight. They count toward a maximum of 15 portable electronic devices per person. Thai Airways also states that vaporizers and related products are illegal to bring into Thailand.",
      sections: [
        { h: "🚭 What Thai Airways says about e-cigarettes", p: "From the Thai Airways Dangerous Goods & Prohibited Items page.",
          table: { head: ["Question", "Thai Airways rule"], rows: [
            ["Carry-on baggage", "Allowed"],
            ["Checked baggage", "Forbidden"],
            ["Protection", "Each device individually protected against accidental activation"],
            ["Use or charging on board", "Not permitted throughout the flight"],
            ["Quantity", "Counts toward a maximum of 15 portable electronic devices per person"],
            ["Thailand", "Illegal to bring vaporizers and related products into Thailand"] ] },
          list: [TGNOTE] }
      ],
      faq: [
        ["Can I take a vape on Thai Airways?", "Only in your carry-on, individually protected, and you cannot use or charge it on board. Not in checked baggage."],
        ["Can I bring a vape into Thailand?", "Thai Airways states that vaporizers and related products are illegal to bring into Thailand."]
      ],
      sources: [[TG, "Thai Airways &mdash; Dangerous Goods &amp; Prohibited Items"]]
    },
    alcohol: {
      ttl: "Thai Airways Alcohol Rules: 24% to 70%, 1 L per Person",
      desc: "Thai Airways alcohol rules (Thailand page): retail-packaged alcohol between 24% and 70%, containers up to 1 L, 1 L in total per person, within local customs limits.",
      answer: "On its Thailand dangerous goods page, Thai Airways allows alcoholic beverages in retail packaging containing more than 24% but not more than 70% alcohol by volume, in containers not exceeding 1 L, with a total of 1 L per person. They must not exceed local customs restrictions. The page marks them allowed in both checked and carry-on baggage, with an asterisk.",
      sections: [
        { h: "🥃 What Thai Airways says about alcohol", p: "From the Thai Airways Dangerous Goods & Prohibited Items page.",
          table: { head: ["Question", "Thai Airways rule"], rows: [
            ["Packaging", "Retail packaging"],
            ["Strength", "More than 24% but not more than 70% alcohol by volume"],
            ["Container size", "Not more than 1 L"],
            ["Total per person", "1 L"],
            ["Customs", "Must not exceed local customs restrictions"] ] },
          list: ["Security rules still limit liquids in carry-on to 100 ml per container: see the liquids page.", TGNOTE] }
      ],
      faq: [
        ["How much alcohol can I take on Thai Airways?", "On the Thailand page: 1 L per person, in containers of up to 1 L, for alcohol between 24% and 70% in retail packaging."]
      ],
      sources: [[TG, "Thai Airways &mdash; Dangerous Goods &amp; Prohibited Items"]]
    },
    perfume: {
      ttl: "Thai Airways Perfume & Aerosol Rules: 2 L Total, 0.5 L per Item",
      desc: "Thai Airways perfume and aerosol rules: toiletry articles and non-flammable aerosols up to 0.5 L or 0.5 kg each and 2 L or 2 kg in total, with protected release valves.",
      answer: "Thai Airways lists non-radioactive medicinal or toiletry articles and non-flammable, non-toxic aerosols as allowed in both checked and carry-on baggage. The total net quantity must not exceed 2 kg or 2 L, each single article must not exceed 0.5 kg or 0.5 L, and aerosol release valves must be protected by a cap or other suitable means.",
      sections: [
        { h: "🧴 What Thai Airways says about perfume and aerosols", p: "From the Thai Airways Dangerous Goods & Prohibited Items page.",
          table: { head: ["Question", "Thai Airways rule"], rows: [
            ["Checked baggage", "Allowed"],
            ["Carry-on baggage", "Allowed"],
            ["Each article", "Not more than 0.5 kg or 0.5 L"],
            ["All articles together", "Not more than 2 kg or 2 L"],
            ["Aerosol valves", "Protected by a cap or other suitable means"] ] },
          list: ["Carry-on liquids and aerosols are also limited to 100 ml containers: see the liquids page.", TGNOTE] }
      ],
      faq: [
        ["Can I bring perfume on Thai Airways?", "Yes, in both checked and carry-on baggage within the limits: 0.5 L or 0.5 kg per article and 2 L or 2 kg in total."]
      ],
      sources: [[TG, "Thai Airways &mdash; Dangerous Goods &amp; Prohibited Items"]]
    }
  },
  "Qantas": {
    vape: {
      ttl: "Qantas Vape & E-Cigarette Rules: Cabin Only, No Use or Charging",
      desc: "Qantas vape rules: e-cigarettes and personal vaporisers need no airline approval, must be protected from accidental activation, and cannot be used or charged on board.",
      answer: "Qantas lists e-cigarettes and personal vaporisers on its dangerous goods page with no airline approval needed. They must be protected to prevent accidental activation, and using or charging them on board is not permitted. Smoking on the aircraft is prohibited at any time.",
      sections: [
        { h: "🚭 What Qantas says about e-cigarettes", p: "From the Qantas page on personal items, toiletries and medicinal items.",
          table: { head: ["Question", "Qantas rule"], rows: [
            ["Airline approval", "Not required"],
            ["Protection", "Must be protected to prevent accidental activation"],
            ["Use on board", "Not permitted"],
            ["Charging on board", "Not permitted"] ] },
          list: ["Qantas marks this item with a tick for carry-on and a cross for checked baggage. Spare lithium batteries and power banks have their own limits: see the power bank page for Qantas.",
            "Check your destination too: some countries ban vapes."] }
      ],
      faq: [
        ["Can I take a vape on Qantas?", "Yes, with no airline approval needed, if it is protected against accidental activation. You cannot use or charge it on board."],
        ["Can I vape on a Qantas flight?", "No. Qantas does not permit use or charging of e-cigarettes and personal vaporisers on board."]
      ],
      sources: [[QF, "Qantas &mdash; Personal items, toiletries and medicinal items"]]
    },
    alcohol: {
      ttl: "Qantas Alcohol Rules: 70% Limit, 5 L Between 24% and 70%",
      desc: "Qantas alcohol rules: nothing over 70% alcohol, a maximum of 5 L per passenger between 24% and 70%, sealed retail packaging, and the 100 mL carry-on limit on international flights.",
      answer: "Qantas does not allow alcohol over 70%. Between 24% and 70% you can take up to 5 L per passenger. Under 24% it states no quantity limit for checked baggage. All alcohol must be securely sealed in retail packaging, and security rules limit carry-on liquids on international flights to 100 mL per item.",
      sections: [
        { h: "🥃 What Qantas says about alcohol", p: "From the Qantas page on personal items, toiletries and medicinal items.",
          table: { head: ["Alcohol strength", "Qantas rule"], rows: [
            ["Over 70%", "Not permitted"],
            ["24% to 70%", "Maximum 5 L per passenger"],
            ["Under 24%", "No quantity limit for checked baggage"],
            ["Packaging", "Securely sealed in retail packaging"],
            ["Carry-on, international flights", "100 mL per item (security rule)"] ] },
          list: ["Airline approval is not required for alcohol.", "Your destination may limit how much alcohol you can import: see the country rules."] }
      ],
      faq: [
        ["How much alcohol can I take on Qantas?", "Up to 5 L per passenger if it is between 24% and 70%. Nothing over 70%. Under 24% has no quantity limit for checked baggage."],
        ["Can I carry a bottle of wine in my carry-on on Qantas?", "On international flights security limits carry-on liquids to 100 mL per item, so a full bottle goes in checked baggage unless you buy it after security."]
      ],
      sources: [[QF, "Qantas &mdash; Personal items, toiletries and medicinal items"]]
    },
    perfume: {
      ttl: "Qantas Perfume & Aerosol Rules: 500 mL per Item, 2 L Total",
      desc: "Qantas perfume and aerosol rules: no more than 500 mL per item and 2 L in total, protected nozzles, and the 100 mL limit in carry-on on international flights.",
      answer: "Qantas lists aerosol deodorants, hair sprays, perfumes, colognes and shaving gels as toiletries. Each item can be at most 500 g or 500 mL and all items together at most 2 kg or 2 L. Aerosol nozzles must be protected, for example with a cap. On international flights, security limits carry-on liquids, aerosols and gels to 100 g or 100 mL.",
      sections: [
        { h: "🧴 What Qantas says about perfume and aerosols", p: "From the Qantas page on personal items, toiletries and medicinal items.",
          table: { head: ["Question", "Qantas rule"], rows: [
            ["Per item", "No more than 500 g or 500 mL"],
            ["All items together", "No more than 2 kg or 2 L"],
            ["Aerosol nozzles", "Must be protected, for example with a cap"],
            ["Carry-on, international flights", "100 g or 100 mL per item (security rule)"] ] }
        }
      ],
      faq: [
        ["Can I bring perfume on Qantas?", "Yes: up to 500 mL per item and 2 L in total. On international flights the carry-on limit is 100 mL per item."],
        ["Do aerosol cans need a cap on Qantas?", "Yes. Qantas says aerosol nozzles must be protected, for example with a cap."]
      ],
      sources: [[QF, "Qantas &mdash; Personal items, toiletries and medicinal items"]]
    }
  },
  "Philippine Airlines": {
    vape: {
      ttl: "Philippine Airlines Vape & E-Cigarette Rules: No Use or Charging on Board",
      desc: "Philippine Airlines vape rules: e-cigarettes, vape pens and vape mods are listed as restricted items, and using or recharging them on board is not permitted.",
      answer: "Philippine Airlines lists cigarettes and e-cigarettes (such as tobacco sticks, vapes, e-cigars, e-pipes, vape pens and vape mods) among its restricted items. Using them and recharging them on board the aircraft is not permitted.",
      sections: [
        { h: "🚭 What Philippine Airlines says about e-cigarettes", p: "From the Philippine Airlines Restricted Items Reminders page.",
          table: { head: ["Question", "Philippine Airlines rule"], rows: [
            ["Covered items", "Tobacco sticks, vape, e-cigar, e-pipe, vape pen, box or vape mods"],
            ["Use on board", "Not permitted"],
            ["Recharging on board", "Not permitted"] ] },
          list: ["The page has Carry-on and Checked baggage columns for this item. We could not read which are marked, so check the page before you pack.",
            "Check your destination too: some countries ban vapes."] }
      ],
      faq: [
        ["Can I vape on a Philippine Airlines flight?", "No. The airline says use and recharging of cigarettes and e-cigarettes on board is not permitted."]
      ],
      sources: [[PR, "Philippine Airlines &mdash; Restricted items reminders"]]
    },
    alcohol: {
      ttl: "Philippine Airlines Alcohol Rules: 24% to 70%, 5 L per Person",
      desc: "Philippine Airlines alcohol rules: retail-packaged alcohol between 24% and 70% in containers up to 5 L, 5 L total per person.",
      answer: "Philippine Airlines allows alcoholic beverages in retail packaging containing more than 24% and up to 70% alcohol by volume, in containers of 5 L or less, with a total of 5 L per person.",
      sections: [
        { h: "🥃 What Philippine Airlines says about alcohol", p: "From the Philippine Airlines Restricted Items Reminders page.",
          table: { head: ["Question", "Philippine Airlines rule"], rows: [
            ["Packaging", "Retail packaging"],
            ["Strength", "More than 24% up to 70% alcohol by volume"],
            ["Container size", "Not more than 5 L"],
            ["Total per person", "5 L"] ] },
          list: ["The page has Carry-on and Checked baggage columns for this item. We could not read which are marked, so check the page before you pack.",
            "Your destination may limit how much alcohol you can import: see the country rules."] }
      ],
      faq: [
        ["How much alcohol can I take on Philippine Airlines?", "Alcohol between 24% and 70% in retail packaging, in containers of up to 5 L, 5 L in total per person."]
      ],
      sources: [[PR, "Philippine Airlines &mdash; Restricted items reminders"]]
    },
    perfume: {
      ttl: "Philippine Airlines Perfume & Aerosol Rules: 2 L Total, 0.5 L per Item",
      desc: "Philippine Airlines perfume and aerosol rules: toilet articles such as aerosols, hairsprays, perfumes and colognes up to 0.5 L or 0.5 kg per item and 2 L or 2 kg in total.",
      answer: "Philippine Airlines lists non-radioactive medicinal or toilet articles, such as aerosols, hairsprays, perfumes, colognes and medicines containing alcohol. The total net quantity must not exceed 2 L or 2 kg, and each single article must not exceed 0.5 L or 0.5 kg.",
      sections: [
        { h: "🧴 What Philippine Airlines says about perfume and aerosols", p: "From the Philippine Airlines Restricted Items Reminders page.",
          table: { head: ["Question", "Philippine Airlines rule"], rows: [
            ["Covered items", "Aerosols, hairsprays, perfumes, colognes, medicines containing alcohol"],
            ["Each article", "Not more than 0.5 L or 0.5 kg"],
            ["All articles together", "Not more than 2 L or 2 kg"] ] },
          list: ["The page has Carry-on and Checked baggage columns for this item. We could not read which are marked. Security limits liquids and aerosols in carry-on separately: see the liquids page."] }
      ],
      faq: [
        ["Can I bring perfume on Philippine Airlines?", "Yes, within the limits: each article up to 0.5 L or 0.5 kg and 2 L or 2 kg in total."]
      ],
      sources: [[PR, "Philippine Airlines &mdash; Restricted items reminders"]]
    }
  }
};
