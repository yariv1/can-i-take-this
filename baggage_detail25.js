// Slim baggage entries (batch 25, checked 14 October 2026). Same rules as BAGGAGE_DETAIL.md.
// Azul: voeazul.com.br Bagagens page (Portuguese), read in full. It does not state what each fare includes except MaisAzul / Economy MaisAzul; price list for extra bags not read.
// Copa Airlines: Copa Help Center article "What are the fare classes Copa Airlines offers" (undated). The copaair.com baggage pages render empty and could not be read; carry-on size, Business Class and fees not read.
module.exports = {
  "Azul": {
    checked: "14 October 2026",
    title: "Azul Baggage Allowance 2026: Carry-on 10 kg, Checked Bag 23 kg, Excess Baggage R$ 350 in Brazil",
    desc: "Azul baggage allowance 2026: carry-on 55 x 35 x 25 cm and 10 kg, personal item 45 x 35 x 20 cm, checked bag 80 x 50 x 28 cm and 23 kg, free bags by loyalty level, excess baggage R$ 350 in Brazil, R$ 1,000 US and Europe.",
    answer: "Azul allows a carry-on of up to 55 x 35 x 25 cm and 10 kg and a personal item of up to 45 x 35 x 20 cm that fits under the seat. A checked bag can be up to 80 x 50 x 28 cm and 23 kg. Whether a checked bag is free depends on your Azul Fidelidade level, the destination and the fare: the MaisAzul fare (Brazil and South America) and Economy MaisAzul (United States and Europe) include at least 1 free checked bag. Weight or size over the limit is charged as excess baggage: R$ 350 within Brazil, R$ 500 Latin America, R$ 1,000 for the United States and Europe.",
    stats: [
      ["10 kg", "carry-on, 55 × 35 × 25 cm, plus a personal item"],
      ["23 kg", "checked bag, 80 × 50 × 28 cm"],
      ["1 to 3 bags", "free by Azul Fidelidade level (Topázio, Safira, Diamante)"],
      ["R$ 350 / 500 / 1,000", "excess: Brazil / Latin America / US and Europe"]
    ],
    sections: [
      { h: "📏 Size and weight limits",
        table: { head: ["Bag", "Height × width × depth", "Weight"], rows: [
          ["Checked bag", "80 × 50 × 28 cm", "23 kg"],
          ["Carry-on", "55 × 35 × 25 cm", "10 kg"],
          ["Personal item (under the seat)", "45 × 35 × 20 cm", "—"] ] },
        list: ["<strong>Total per passenger:</strong> in general up to 5 pieces of 23 kg can be bought and carried; on rare routes the limit is lower, and the system shows the maximum while you buy.",
          "<strong>Over 23 kg:</strong> flights to or from Brazil, the United States and Latin America are limited to 45 kg per piece; flights in Europe to 32 kg.",
          "<strong>Liquids in hand baggage:</strong> containers up to 100 ml each, 1 litre in total, in a transparent plastic bag." ] },
      { h: "🎟️ Free checked bags",
        table: { head: ["Azul Fidelidade level", "Brazil, United States, Europe", "South America"], rows: [
          ["Topázio", "1 bag up to 23 kg", "—"],
          ["Safira", "2 bags up to 23 kg", "1 bag up to 23 kg"],
          ["Diamante and Diamante Unique", "3 bags up to 23 kg", "2 bags up to 23 kg"] ] },
        list: ["<strong>By fare:</strong> buying MaisAzul (Brazil and South America) or Economy MaisAzul (United States and Europe) gives at least 1 free checked bag, whatever your level.",
          "<strong>Benefits do not add up:</strong> when several apply, the one with the most free bags is used.",
          "<strong>The fare called Azul:</strong> the page does not say what it includes; check your fare when you book." ] },
      { h: "💸 Excess baggage",
        table: { head: ["Flights", "Fee for excess weight or size"], rows: [
          ["Within Brazil", "R$ 350"],
          ["To or from Latin America", "R$ 500"],
          ["To or from the United States", "R$ 1,000"],
          ["To or from Europe", "R$ 1,000"] ] },
        list: ["Buying baggage in advance in Azul's digital channels (My Bookings, then Add baggage) is cheaper than at the airport; we did not read the price list for extra bags."] }
    ],
    faq: [
      ["What is the Azul carry-on size and weight?", "55 × 35 × 25 cm and 10 kg, plus a personal item of 45 × 35 × 20 cm under the seat."],
      ["What is the Azul checked bag weight limit?", "23 kg per bag, up to 80 × 50 × 28 cm. Over 23 kg is excess baggage: R$ 350 within Brazil, R$ 500 Latin America, R$ 1,000 United States and Europe."],
      ["Does Azul include a checked bag?", "The MaisAzul fare (Brazil, South America) and Economy MaisAzul (US, Europe) include at least 1. Azul Fidelidade levels also give 1 to 3 free bags."],
      ["How many bags can I take on Azul?", "In general up to 5 pieces of 23 kg per passenger; on rare routes the limit is lower."],
      ["Which Azul Fidelidade level gives the most free bags?", "Diamante and Diamante Unique: 3 bags on flights in Brazil, the United States and Europe, 2 on flights in South America."]
    ],
    sources: [
      ["https://www.voeazul.com.br/br/pt/sua-viagem/planeje/bagagens", "Azul &mdash; Bagagens (Portuguese)"]
    ]
  },
  "Copa Airlines": {
    checked: "14 October 2026",
    title: "Copa Airlines Baggage Allowance 2026: Carry-on 10 kg, Checked Bag 23 kg by Fare (Basic, Classic, Full)",
    desc: "Copa Airlines baggage allowance 2026 for Main Cabin fares: 10 kg carry-on on every fare, Economy Basic no free checked bag, Economy Classic 1 x 23 kg, Economy Full 2 x 23 kg.",
    answer: "Every Copa Airlines Main Cabin fare includes one 10 kg carry-on bag. Checked baggage depends on the fare: Economy Basic includes none (fees apply to the first and second checked bags of 23 kg each), Economy Classic includes one 23 kg checked bag and Economy Full includes two of 23 kg each. These figures come from Copa's help center page on fare classes; its baggage pages with sizes and fees did not load for us, so the carry-on size, Business Class and fees are not shown.",
    stats: [
      ["10 kg", "carry-on on every Main Cabin fare"],
      ["0 / 1 / 2", "free checked bags: Basic / Classic / Full"],
      ["23 kg", "each checked bag"],
      ["Basic", "first and second checked bags cost extra"]
    ],
    sections: [
      { h: "🧳 Allowance by Main Cabin fare",
        table: { head: ["Fare", "Carry-on", "Checked baggage"], rows: [
          ["Economy Basic", "1 bag, 10 kg", "None included; fees apply to the first and second bag of 23 kg each"],
          ["Economy Classic", "1 bag, 10 kg", "1 bag of 23 kg"],
          ["Economy Full", "1 bag, 10 kg", "2 bags of 23 kg each"] ] },
        list: ["<strong>Fare classes are not cabins:</strong> Copa says fare classes show how flexible your ticket is (charges, changes, cancellation, refunds), not the cabin you sit in.",
          "<strong>Not on the page:</strong> carry-on dimensions, checked-bag size limit, the fee amounts, Business Class allowances, routes with a different rule and frequent-flyer extras. Check your ticket or Copa's baggage section before you fly." ] }
    ],
    faq: [
      ["What is the Copa Airlines carry-on weight?", "One carry-on bag of 10 kg on Economy Basic, Classic and Full."],
      ["Does Copa Economy Basic include a checked bag?", "No. Fees apply to the first and second checked bags of 23 kg each."],
      ["How many checked bags does Copa Economy Classic include?", "One bag of 23 kg."],
      ["How many checked bags does Copa Economy Full include?", "Two bags of 23 kg each."],
      ["What does this page not cover?", "Carry-on size, checked-bag size, fee amounts and Business Class were not stated on the page we could read."]
    ],
    sources: [
      ["https://help.copaair.com/hc/en-us/articles/360051189074-What-are-the-fare-classes-Copa-Airlines-offers", "Copa Airlines Help Center &mdash; Fare classes (undated)"]
    ]
  }
};
