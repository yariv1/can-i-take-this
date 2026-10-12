// Topic entries, batch 6 (read on each airline's OWN pages on 2026-10-12).
module.exports = {
  "WestJet": {
    vape: {
      ttl: "WestJet Vape & E-Cigarette Rules: One Per Guest, Carry-On Only, No Use",
      desc: "WestJet vape rules: one vape or e-cigarette per guest, carried on your person and accessible, not in checked baggage or overhead bins, no use or charging on board. Lighters only on your person.",
      answer: "WestJet allows vapes and e-cigarettes in the carry-on and not in checked baggage. You must carry it on your person and keep it accessible, for example in the seat pocket, not in the overhead bin. Use and charging on board are not permitted, and the maximum is one per guest.",
      sections: [
        { h: "🚭 What WestJet says about vapes and e-cigarettes", p: "From its Restricted and prohibited items page and its carry-on baggage page.",
          table: { head: ["Question", "WestJet rule"], rows: [
            ["How many", "Maximum one per guest"],
            ["Carry-on", "Yes, carried on your person and kept accessible (for example in a seat pocket)"],
            ["Checked baggage", "No"],
            ["Overhead bin", "Not permitted"],
            ["Using or charging it on board", "Not permitted"] ] },
          list: ["<strong>Carry-on page:</strong> electronic cigarettes and vaporizers are listed among personal electronic devices you may transport but may not use in the cabin.",
            "<strong>Lighters and matches:</strong> carry-on on your person only, not in checked baggage. Only certain small personal-use lighters or safety matches are allowed; fuel and lighter refills are not accepted.",
            "<strong>Spare batteries:</strong> spare lithium batteries go in the carry-on only, never checked."] }
      ],
      faq: [
        ["Can I take a vape on WestJet?", "Yes, one per guest, in the carry-on, carried on your person and kept accessible. It is not allowed in checked baggage or the overhead bin."],
        ["Can I vape or charge my e-cigarette on a WestJet flight?", "No. WestJet says use and charging on board are not permitted."],
        ["Can I bring a lighter on WestJet?", "Only certain small personal-use lighters or safety matches, carried on your person. Not in checked baggage."]
      ],
      sources: [["https://www.westjet.com/en-us/baggage/restricted-and-prohibited", "WestJet &mdash; Restricted and prohibited items"], ["https://www.westjet.com/en-us/baggage/carry-on", "WestJet &mdash; Carry-on baggage"]]
    },
    power: {
      ttl: "WestJet Power Bank Rules 2026: One Per Guest, Carry-On Only, No Charging On Board",
      desc: "WestJet power bank rules: maximum one per guest, carried on your person and accessible, never in checked baggage or overhead bins, not charged on board, spare batteries 100 to 160 Wh with approval.",
      answer: "WestJet allows power banks and portable chargers in the carry-on only, with a maximum of one per guest. Carry it on your person and keep it accessible, for example in the seat pocket; it is not permitted in checked baggage or overhead bins. Charging a power bank on board is not permitted, and using it to charge another device is not permitted when onboard power is available.",
      sections: [
        { h: "🔋 What WestJet says about power banks and spare batteries", p: "From its Restricted and prohibited items page.",
          table: { head: ["Item", "Carry-on", "Checked bag", "WestJet rule"], rows: [
            ["Power banks / portable chargers", "Yes", "No", "On your person and accessible, not in overhead bins, maximum one per guest"],
            ["Spare lithium batteries up to 100 Wh", "Yes", "No", "Individually protected from short circuit"],
            ["Spare lithium batteries over 100 Wh up to 160 Wh", "Yes", "No", "Need WestJet approval; at most 2 per guest"],
            ["Spare lithium batteries over 160 Wh", "No", "No", "Not permitted unless another WestJet provision applies"],
            ["Damaged, swollen or recalled batteries and devices", "No", "No", "Not permitted"] ] },
          list: ["<strong>On board:</strong> charging a power bank is not permitted; using it to charge another device is not permitted when onboard power is available.",
            "<strong>Protect spares:</strong> keep batteries in original packaging, tape exposed terminals, or use a pouch or separate bag.",
            "<strong>Devices:</strong> phones, laptops, tablets and cameras are carry-on items; if checked, the battery must be removed and carried in the cabin. Pack rechargeable devices in carry-on baggage whenever possible.",
            "<strong>Smart bags:</strong> if you check one, remove the battery and carry it in the cabin; a smart bag with a non-removable battery needs WestJet approval before you travel."] }
      ],
      faq: [
        ["How many power banks can I take on WestJet?", "A maximum of one per guest, in the carry-on only."],
        ["Can I charge my phone from a power bank on WestJet?", "Using a power bank to charge another device is not permitted when onboard power is available, and charging the power bank itself on board is not permitted."],
        ["Can I put a power bank in checked baggage on WestJet?", "No. Power banks and spare lithium batteries are carry-on only."],
        ["What battery size needs approval on WestJet?", "Spare lithium batteries over 100 Wh and up to 160 Wh need WestJet approval, at most 2 per guest. Over 160 Wh is not permitted."]
      ],
      sources: [["https://www.westjet.com/en-us/baggage/restricted-and-prohibited", "WestJet &mdash; Restricted and prohibited items"]]
    },
    alcohol: {
      ttl: "WestJet Alcohol Rules: Retail Packaging, Duty Free After Security, Connections",
      desc: "WestJet alcohol rules: alcohol in retail packaging within permitted limits in carry-on and checked baggage; duty-free alcohol bought after security is carry-on on direct WestJet flights but must be checked on connections.",
      answer: "WestJet lists alcoholic beverages as allowed in carry-on and checked baggage when in retail packaging and within permitted alcohol content and quantity limits. Duty-free alcohol bought after security is allowed as carry-on on direct flights operated by WestJet aircraft, but must be checked on WestJet flights with transfers or connections, or when it was bought before clearing security.",
      sections: [
        { h: "🍾 Alcohol on WestJet", p: "From its Restricted and prohibited items page and its carry-on baggage page.",
          table: { head: ["Case", "WestJet rule"], rows: [
            ["Alcohol in general", "Carry-on and checked: yes, in retail packaging and within permitted alcohol content and quantity limits"],
            ["Duty free bought after security, direct WestJet flight", "Allowed as carry-on"],
            ["Duty free on a flight with a transfer or connection, or bought before security", "Must be checked"],
            ["Transfer from a partner airline starting in the EU", "Allowed as carry-on if the vendor packaged it in a tamper-evident bag"] ] },
          list: ["Duty-free items count toward your fare's carry-on bag and personal item allowance; duty free is not an additional baggage item.",
            "We did not find the alcohol content or quantity limits on these pages."] }
      ],
      faq: [
        ["Can I take duty-free alcohol on WestJet?", "Yes as carry-on on a direct WestJet flight if you bought it after security. On flights with a transfer or connection it must be checked."],
        ["Can I bring alcohol in checked baggage on WestJet?", "Yes, in retail packaging and within permitted alcohol content and quantity limits."],
        ["Does duty free count as an extra bag on WestJet?", "No: it is not an additional baggage item and must fit within your carry-on and personal item allowance."]
      ],
      sources: [["https://www.westjet.com/en-us/baggage/carry-on", "WestJet &mdash; Carry-on baggage"], ["https://www.westjet.com/en-us/baggage/restricted-and-prohibited", "WestJet &mdash; Restricted and prohibited items"]]
    },
    perfume: {
      ttl: "WestJet Perfume & Aerosol Rules: Security Limits, Valve Protected, Limited Quantities",
      desc: "WestJet perfume and aerosol rules: aerosols and toiletries in carry-on subject to security limits and in checked baggage, medicinal or toiletry aerosols in limited quantities with the valve protected.",
      answer: "WestJet lists aerosols and toiletries as allowed in carry-on (subject to security limits) and checked baggage. Medicinal or toiletry aerosols may be accepted in limited quantities and the release valve must be protected from accidental release. WestJet says shampoo, perfume, toothpaste and moisturizers are only permitted in limited amounts, and that CATSA sets the size and packaging of liquids, gels and aerosols through security.",
      sections: [
        { h: "🧴 What WestJet says about perfume, aerosols and liquids", p: "From its Restricted and prohibited items page and its carry-on baggage page.",
          table: { head: ["Case", "WestJet rule"], rows: [
            ["Aerosols and toiletries, carry-on", "Yes, subject to security limits"],
            ["Aerosols and toiletries, checked", "Yes"],
            ["Medicinal or toiletry aerosols", "Limited quantities; the release valve must be protected from accidental release"],
            ["Liquids, gels and aerosols through security", "Set by CATSA: containers of 100 ml or less in one clear resealable 1 litre bag"],
            ["Bear spray, mace, pepper spray", "Not accepted"] ] },
          list: ["Things like shampoo, perfume, toothpaste and moisturizers are only permitted in limited amounts through security.",
            "CATSA (read on its own site): each container 100 ml or less, all in one clear resealable bag of 1 litre at most; medication in liquid, gel or aerosol form is exempt."] }
      ],
      faq: [
        ["Can I bring perfume on WestJet?", "Yes, within CATSA's security limits: containers of 100 ml or less in one clear resealable 1 litre bag. WestJet says perfume is only permitted in limited amounts."],
        ["Can I bring hair spray on WestJet?", "Aerosols and toiletries are allowed in carry-on (subject to security limits) and checked baggage, in limited quantities with the valve protected."],
        ["Can I carry pepper spray on WestJet?", "No. WestJet lists pepper spray and bear spray as not accepted."]
      ],
      sources: [["https://www.westjet.com/en-us/baggage/restricted-and-prohibited", "WestJet &mdash; Restricted and prohibited items"], ["https://www.westjet.com/en-us/baggage/carry-on", "WestJet &mdash; Carry-on baggage"], ["https://www.catsa-acsta.gc.ca/en/blog/2026/security-smart-packing-what-you-can-bring-your-carry", "CATSA &mdash; Security-smart packing"]]
    }
  }
};
