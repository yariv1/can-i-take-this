// Non-EU country duty-free alcohol / allowance pages built from the country's OWN official page (PRIORITY_QUEUE.md #4, driven by GSC queries).
// Shape per country: { date, ttl, desc, lead, rows:[[item, rule]], notes:[html], faq:[[q,a]], src:[[url,label]] }
const BAGD = require('./baggage_detail.js');
const { CSS, table, esc } = BAGD;
const READ = '8 October 2026';

const DATA = {
  "Australia": {
    date: "Australian Border Force page \"Duty free\" (read 8 October 2026; the page carries no date)",
    ttl: "Australia Duty-Free Allowance 2026: 2.25 L Alcohol, AUD 900 Goods",
    desc: "Australia duty-free allowance: 2.25 litres of alcohol and AUD 900 of general goods for adults 18+, AUD 450 under 18; over the limit, duty applies to all items of that type.",
    lead: "The Australian Border Force says travellers aged 18 or over can bring 2.25 litres of alcoholic beverages and up to AUD 900 worth of general goods into Australia duty free. Under-18s get AUD 450 of general goods and no tobacco or alcohol concession. If you go over a limit, duty and tax apply to all items of that type, not just the excess.",
    rows: [
      ["Alcohol (age 18+)", "2.25 litres of alcoholic beverages duty free; this counts all alcohol in accompanied baggage, wherever or however it was bought"],
      ["General goods (age 18+)", "Up to AUD 900 worth, such as gifts, souvenirs, cameras, electronics, leather goods, perfume concentrates, jewellery, watches and sporting equipment"],
      ["General goods (under 18 or crew)", "AUD 450"],
      ["Tobacco and alcohol for under-18s", "No duty free concession"],
      ["Tobacco (age 18+)", "Most tobacco products are prohibited imports, but as a traveller aged 18 or over you can bring tobacco products with you and need no permit"],
      ["Families on the same flight", "May combine (pool) their limits if they stay together through Customs; two adults and two children have AUD 2,700 combined"],
      ["Over the limit", "Duty and tax apply to all items of that type (general goods, alcohol or tobacco), not just the excess; declare the goods and show proof of purchase"],
      ["Commercial goods", "Duty free concessions do not apply to commercial goods"]
    ],
    notes: [
      "<strong>Alcohol bought duty free:</strong> if you buy alcohol at an airport duty free shop on arrival in Australia, it avoids the hand-luggage liquid restrictions on the way in. The ABF recommends packing duty free items in checked baggage where possible; duty free items in carry-on on your flight to Australia must meet Australia's carry-on requirements or be surrendered to screening staff.",
      "<strong>Tobacco quantity:</strong> the Duty free page does not give a number of cigarettes. It points to the ABF's separate page on prohibited goods (tobacco) for the rules on bringing tobacco in.",
      "<strong>Penalties:</strong> failing to declare goods over your concession can bring penalties, prosecution or visa cancellation, depending on the amount of undeclared alcohol, tobacco or goods.",
      "<strong>Tourist Refund Scheme:</strong> if you bring back goods on which a GST refund was claimed, you must declare them at Question 3 of the Incoming Passenger Card."
    ],
    faq: [
      ["What is the duty free allowance for Australia?", "For adults aged 18 or over: 2.25 litres of alcoholic beverages and AUD 900 of general goods. Under-18s have AUD 450 of general goods and no alcohol or tobacco concession."],
      ["How much alcohol can I bring into Australia?", "2.25 litres duty free if you are 18 or over, counting all alcoholic beverages in your accompanied baggage regardless of where or how they were bought."],
      ["What is the duty free limit for goods in Australia?", "AUD 900 of general goods per adult and AUD 450 for travellers under 18; families on the same flight may pool their limits."],
      ["What happens if I go over the duty free limit in Australia?", "Duty and tax apply to all items of that type, not just the amount over the limit. Declare the goods and give proof of purchase; failing to declare can mean penalties, prosecution or visa cancellation."],
      ["Do I need a permit to bring tobacco into Australia?", "No. The ABF says that as a traveller aged 18 or over you do not need a permit to bring tobacco products in, although most tobacco products are prohibited imports otherwise."]
    ],
    src: [["https://www.abf.gov.au/entering-and-leaving-australia/duty-free", "Australian Border Force &mdash; Duty free"]]
  }
};

function build(c) {
  const D = DATA[c.name]; if (!D) return null;
  const cn = c.name;
  const html = '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(D.lead) + '</strong></p>' +
    '<section class="bd-sec"><h2>🍾 Duty-free allowance: what the official source says for ' + esc(cn) + '</h2><p>' + esc(D.date) + '.</p>' + table({ head: ['Item', 'Official rule in ' + cn], rows: D.rows }) +
    '<ul>' + D.notes.map(x => '<li>' + x + '</li>').join('') + '</ul></section>' +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + D.faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">Read ' + READ + '. Rules change: confirm with the customs authority of ' + esc(cn) + ' before you travel.</p>' +
    '<div class="bd-src"><div class="h">🔗 Official source</div>' + D.src.map(x => '<a href="' + x[0] + '" target="_blank" rel="noopener noreferrer">' + x[1] + '</a>').join('') + '</div></div>';
  return { ttl: D.ttl, desc: D.desc, html, faq: D.faq };
}

module.exports = { build };
