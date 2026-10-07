// Topic entries, batch 1 (read on each airline's OWN pages on 2026-10-08).
module.exports = {
  "Ryanair": {
    vape: {
      ttl: "Ryanair Vape & E-Cigarette Rules: Cabin Only, No Use On Board",
      desc: "Ryanair vape rules: e-cigarettes and vapes (100 Wh max) go in the cabin, never in checked bags, and may not be used at any time during the flight.",
      answer: "You can take an e-cigarette or vape on Ryanair only in the cabin (in your cabin bag or on you): Ryanair lists electronic cigarettes among items carried with you in the passenger cabin, not in the hold, and says using them at any time during the flight is strictly prohibited. The device must not exceed 100 Wh. Spare batteries, up to 20 in total each up to 100 Wh, must also stay in carry-on baggage.",
      sections: [
        { h: "🚭 What Ryanair's terms say about vapes", p: "These rules come from section 8 of Ryanair's General Terms &amp; Conditions of Carriage.",
          table: { head: ["Question", "Ryanair rule"], rows: [
            ["In the cabin", "Allowed: e-cigarettes or vaping devices may be carried on board"],
            ["Using it on the flight", "Strictly prohibited at any time during the flight"],
            ["Checked baggage", "Not allowed: e-cigs and vapes are listed with items to carry in the cabin, on your person or in your carry-on bag"],
            ["Maximum size", "100 Wh per device (e-cigs and vapes, 100 Wh maximum)"],
            ["Spare lithium batteries", "Up to 20 in total, each up to 100 Wh, carried in carry-on luggage only"] ] },
          list: ["<strong>Protect spare batteries:</strong> each spare lithium battery must be individually protected against short circuits: in original retail packaging, with the terminals taped, or in a separate plastic bag or pouch.",
            "<strong>Where in the cabin:</strong> power banks and spare lithium batteries cannot be in cabin baggage stored in the overhead lockers; keep them on your person or in the under-seat bag.",
            "<strong>Power banks:</strong> a maximum of 2 per passenger, counted inside the 20 spare batteries (for example 2 power banks plus 18 spare lithium batteries). A power bank cannot be recharged on board, and may charge devices except during taxi, take-off and landing.",
            "<strong>Devices over 100 Wh</strong> are not permitted in the cabin or the hold, except electric wheelchair batteries."] }
      ],
      faq: [
        ["Can I take my vape on Ryanair?", "Yes, in the cabin. Ryanair's terms allow electronic cigarettes and vaping devices (100 Wh maximum) on board, but you cannot use them at any time during the flight and they must not go in checked baggage."],
        ["Can I use an e-cigarette on a Ryanair flight?", "No. Ryanair's terms say use of vapes and e-cigarettes at any time during the flight is strictly prohibited."],
        ["Can I put a vape in checked luggage on Ryanair?", "No. Ryanair lists electronic cigarettes among items carried with you in the passenger cabin, and says spare batteries are not permitted in checked baggage."],
        ["How many spare vape batteries can I bring on Ryanair?", "Up to 20 spare lithium batteries in total, each up to 100 Wh, carried in carry-on luggage only, individually protected, and not stored in the overhead lockers."],
        ["Is there a size limit for a vape on Ryanair?", "Yes. Ryanair's terms give 100 Wh as the maximum for e-cigarettes and vapes."]
      ],
      sources: [["https://www.ryanair.com/gb/en/useful-info/help-centre/terms-and-conditions/termsandconditionsar_696869348", "Ryanair &mdash; General Terms &amp; Conditions of Carriage, section 8"]]
    },
    alcohol: {
      ttl: "Ryanair Alcohol Rules: Duty-Free Bag, 70% ABV Limit, Liquids",
      desc: "Ryanair alcohol rules: a duty-free bag is allowed in the cabin with your cabin bags, alcohol stronger than 70% ABV is prohibited, and liquids follow the 100 ml rule.",
      answer: "On Ryanair your duty-free bag with duty-free items is permitted in the cabin along with your cabin bags, but Ryanair's terms list alcohol stronger than 70% ABV (140 proof) among prohibited substances. Alcohol you bring from home counts as a liquid, so in hand luggage it must follow Ryanair's liquids rule.",
      sections: [
        { h: "🍾 Alcohol on Ryanair", p: "From Ryanair's General Terms &amp; Conditions of Carriage.",
          table: { head: ["Case", "Ryanair rule"], rows: [
            ["Duty-free bag", "Permitted in the cabin along with your cabin bags (section 8.3.5)"],
            ["Alcohol stronger than 70% ABV (140 proof)", "Listed among prohibited substances"],
            ["Liquids in hand luggage", "100 ml per container, in one clear resealable bag of up to 1 litre"] ] },
          list: ["<strong>Source:</strong> the duty-free and 70% ABV rules are in section 8 of Ryanair's terms; the 100 ml liquids rule is on Ryanair's permitted liquids page."] }
      ],
      faq: [
        ["Can I bring alcohol on Ryanair in my hand luggage?", "A duty-free bag is permitted in the cabin along with your cabin bags. Other alcohol counts as a liquid and must be within 100 ml per container in one clear resealable bag."],
        ["Can I take duty-free alcohol on a Ryanair flight?", "Yes. Ryanair's terms say your duty-free bag containing duty-free items is permitted in the cabin along with your cabin bags."],
        ["What is the maximum alcohol strength on Ryanair?", "Ryanair's terms list alcohol stronger than 70% ABV (140 proof) among prohibited substances."]
      ],
      sources: [["https://www.ryanair.com/gb/en/useful-info/help-centre/terms-and-conditions/termsandconditionsar_696869348", "Ryanair &mdash; General Terms &amp; Conditions of Carriage, section 8"]]
    }
  }
};
