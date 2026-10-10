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
  },
  "Turkey": {
    date: "Turkish Ministry of Trade Customs Guide, pages on passenger consumer goods and duty-free shops (read 10 October 2026; the pages carry revision dates 4 December 2018 and 28 January 2019)",
    ttl: "Turkey Duty-Free Allowance 2026: 1 L Spirits, 600 Cigarettes",
    desc: "Turkey duty-free allowance for passengers arriving: 1 litre of alcohol over 22% or 2 litres up to 22%, 600 cigarettes, 600 ml of perfume. Duty-free shop purchases when leaving Turkey are three times these amounts.",
    lead: "The Turkish Ministry of Trade says passengers arriving in Turkey can bring 1 litre of alcohol over 22% or 2 litres of alcohol up to 22% duty free, plus 600 cigarettes (or 100 cigarillos, 50 cigars, 250 g of cut tobacco or 250 g of pipe tobacco). Passengers under 18 get no tobacco or alcohol exemption. Duty-free shops in Turkey sell passengers leaving the country three times the arrival amounts.",
    rows: [
      ["Spirits and alcohol over 22%", "1 litre"],
      ["Alcohol up to 22%", "2 litres"],
      ["Cigarettes", "600"],
      ["Cigarillos (cigars of no more than 3 g each)", "100"],
      ["Cigars", "50"],
      ["Cut tobacco (with 200 sheets of cigarette paper)", "250 g"],
      ["Pipe tobacco", "250 g"],
      ["Cologne, perfume, lavender, essence or lotion", "Up to 600 ml in total, plus 5 skin care or make-up items"],
      ["Food", "1 kg each of tea, instant coffee, coffee, chocolate and sugar confectionery; a traveller who wishes may use the whole 2 kg right for only one of chocolate or sugar confectionery"],
      ["Passengers under 18", "No exemption for tobacco and alcoholic products"],
      ["Buying in Turkish duty-free shops when leaving", "Amounts on the same list apply three times for passengers leaving Turkey and for transport drivers and crews"],
      ["Buying in duty-free shops on arrival", "Limits on the same list apply once; sale of alcohol and tobacco to under-18s is banned"]
    ],
    notes: [
      "<strong>Each product separately:</strong> the guide says the tobacco and alcohol exemptions can each be used separately for each product, up to the amount written against it.",
      "<strong>Leaving Turkey:</strong> goods bought in a Turkish duty-free shop are treated under the customs rules of the country you travel to when you enter it, so check that country's limits too.",
      "<strong>Vapes are different:</strong> e-cigarettes follow a separate circular, see our Turkey vaping page.",
      "<strong>Guide status:</strong> the ministry says its pages are for information and do not replace the customs legislation. The pages carry 2018 and 2019 revision dates."
    ],
    faq: [
      ["What is the duty free allowance for Turkey?", "For arriving passengers aged 18 or over: 1 litre of alcohol over 22% or 2 litres up to 22%, 600 cigarettes (or 100 cigarillos, 50 cigars, 250 g of cut tobacco or 250 g of pipe tobacco), 600 ml of perfume or cologne, and 1 kg each of tea, coffee, chocolate and sweets."],
      ["How much alcohol can I bring into Turkey?", "1 litre if it is over 22% alcohol, or 2 litres if it is 22% or less, according to the Ministry of Trade's customs guide. Passengers under 18 get no alcohol exemption."],
      ["How many cigarettes can I bring into Turkey?", "600 cigarettes, or 100 cigarillos, 50 cigars, 250 g of cut tobacco or 250 g of pipe tobacco, for passengers aged 18 or over."],
      ["How much can I buy in Turkey's duty-free shops when leaving?", "Three times the amounts in the arrival list, according to the Ministry of Trade guide. What you buy is then treated under the customs rules of the country you enter."],
      ["Can under-18s buy alcohol or tobacco duty free in Turkey?", "No. The guide says the sale of alcoholic drinks and tobacco products to anyone under 18 is banned in duty-free shops."]
    ],
    src: [
      ["https://gumrukrehberi.gov.tr/sayfa/yolcu-beraberinde-getirilen-t%C3%BCketim-e%C5%9Fyas%C4%B1n%C4%B1n-miktarlar%C4%B1-ne-kadard%C4%B1r", "Turkish Ministry of Trade &mdash; Customs guide: consumer goods amounts for passengers"],
      ["https://gumrukrehberi.gov.tr/sayfa/g%C3%BCmr%C3%BCks%C3%BCz-sat%C4%B1%C5%9F-ma%C4%9Fazalar%C4%B1ndan-yap%C4%B1lacak-al%C4%B1%C5%9Fveri%C5%9Flerde-k%C4%B1s%C4%B1tlamalar-nelerdir", "Turkish Ministry of Trade &mdash; Customs guide: restrictions in duty-free shops"]
    ]
  },
  "Spain": {
    date: "Agencia Tributaria page \"Franquicias: Tabaco, alcohol y otras mercancías\" (read 10 October 2026; the page carries no date)",
    ttl: "Spain Duty-Free Allowance 2026: 1 L Spirits, 4 L Wine, 200 Cigarettes",
    desc: "Spain duty-free allowance from outside the EU: 1 litre of spirits over 22% or 2 litres of weaker drinks, 4 litres of still wine, 16 litres of beer, 200 cigarettes, and goods worth up to 430 euros by air or sea.",
    lead: "Spain's tax agency (Agencia Tributaria) says travellers arriving from a non-EU country can bring 1 litre of spirits over 22% or 2 litres of weaker drinks, plus 4 litres of still wine and 16 litres of beer, and 200 cigarettes (or 100 small cigars, 50 cigars or 250 g of smoking tobacco), free of duty and tax. Goods up to 430 euros per person are also exempt when arriving by air or sea, 300 euros by land.",
    rows: [
      ["Spirits and strong drinks", "1 litre of ethyl alcohol of 80% or more, or 1 litre of alcoholic drinks (liqueurs) over 22%, or 2 litres of drinks of 22% or less, fortified or sparkling wine"],
      ["Still wine", "4 litres, in addition to the above"],
      ["Beer", "16 litres, in addition to the above"],
      ["Tobacco", "200 cigarettes, or 100 small cigars (cigars of no more than 3 g each), or 50 cigars, or 250 g of smoking tobacco; any of these can be combined without going over the total limit"],
      ["Other goods by air or sea", "Goods of a total value up to 430 euros per person"],
      ["Other goods by land", "Goods of a total value up to 300 euros per person"],
      ["Travellers under 15", "Total value of goods up to 150 euros, whatever the transport"],
      ["Travellers under 17", "No allowance for tobacco or alcoholic drinks"],
      ["Residents and workers in the Gibraltar border zone", "The tobacco exemption is reduced to 80 cigarettes; the zone is Spanish territory up to 15 km in a straight line from the border, including the whole of each municipality that is partly inside it"],
      ["Transport staff", "Both the value limits and the quantity limits are cut to one tenth for staff of vehicles used in international traffic, on work journeys"],
      ["Medicines", "The value of medicines for the traveller's personal use is not counted"]
    ],
    notes: [
      "<strong>Non-commercial only:</strong> the exemption covers goods in personal luggage that are not commercial in nature.",
      "<strong>Other origins:</strong> the agency has separate answers for travellers coming from Andorra, from Ceuta and Melilla and from the Canary Islands; the figures above are for third countries.",
      "<strong>Over the limit:</strong> the agency's page has a separate section on what to do when goods are subject to duty or tax because they exceed the allowance."
    ],
    faq: [
      ["What is the duty free allowance for Spain?", "From a non-EU country: 1 litre of spirits over 22% or 2 litres of weaker drinks, plus 4 litres of still wine and 16 litres of beer, 200 cigarettes, and goods worth up to 430 euros by air or sea (300 euros by land)."],
      ["How much alcohol can I bring into Spain?", "1 litre of spirits over 22% or 2 litres of drinks of 22% or less, fortified or sparkling wine, plus 4 litres of still wine and 16 litres of beer, according to the Agencia Tributaria. Travellers under 17 get no alcohol allowance."],
      ["How many cigarettes can I bring into Spain?", "200 cigarettes, or 100 small cigars, 50 cigars or 250 g of smoking tobacco. Residents and workers in the Gibraltar border zone are limited to 80 cigarettes."],
      ["What is the value limit for goods coming into Spain?", "430 euros per person by sea or air, 300 euros by land, and 150 euros for children under 15. The value of personal medicines is not counted."]
    ],
    src: [["https://sede.agenciatributaria.gob.es/Sede/viajeros-trabajadores-desplazados-fronterizos/viajeros/franquicias-tabaco-alcohol-otras-mercancias.html", "Agencia Tributaria &mdash; Franquicias: tabaco, alcohol y otras mercancías"]]
  },
  "France": {
    date: "French Customs (douane.gouv.fr) page \"Vous rapportez du tabac, de l'alcool ou d'autres marchandises achetées hors de l'Union européenne\" (read 10 October 2026; the page carries no date)",
    ttl: "France Duty-Free Allowance 2026: 1 L Spirits, 4 L Wine, 200 Cigarettes",
    desc: "France duty-free allowance from outside the EU: 1 litre of spirits over 22 degrees or 2 litres of weaker drinks, 4 litres of still wine, 16 litres of beer, 200 cigarettes, and goods up to 430 euros by air or sea.",
    lead: "French Customs says travellers aged 15 or over arriving in mainland France from outside the EU can bring goods worth up to 430 euros by air or sea (300 euros by other transport) free of duty and tax, and 150 euros for under-15s. In quantities, that is 200 cigarettes (or 100 cigarillos, 250 g of smoking tobacco or 50 cigars), 4 litres of still wine, 16 litres of beer, and either 1 litre of drinks over 22 degrees or 2 litres of drinks of 22 degrees or less.",
    rows: [
      ["Spirits (over 22 degrees)", "1 litre, either this or the 2 litres below"],
      ["Drinks of 22 degrees or less", "2 litres"],
      ["Still wine (not sparkling)", "4 litres, in addition"],
      ["Beer", "16 litres, in addition"],
      ["Cigarettes, cigarillos, smoking tobacco, cigars", "200 cigarettes, or 100 cigarillos, or 250 g of smoking tobacco, or 50 cigars"],
      ["Goods by air or sea (age 15 and over)", "430 euros"],
      ["Goods by other transport (age 15 and over)", "300 euros"],
      ["Travellers under 15", "150 euros, whatever the transport"],
      ["Under 17", "No duty-free tobacco or alcoholic drinks"],
      ["Cross-border and international transport workers", "Reduced value allowances: 75 euros (15 and over) or 40 euros (under 15), and different quantity rules"],
      ["Over the allowance", "Anything worth more than the allowance must be declared and VAT and customs duty paid on its whole price, not only the excess"]
    ],
    notes: [
      "<strong>Quantities do not add up across products:</strong> French Customs says the tobacco quantities are not cumulative but can be mixed in proportion; for example 100 cigarettes use half the allowance, leaving 50 cigarillos, 25 cigars or 125 g of smoking tobacco.",
      "<strong>Overseas territories:</strong> for arrivals from overseas departments such as Guadeloupe, Martinique, Guiana, Reunion and Mayotte, or from the Channel Islands and the Canary Islands, customs duties are not due but VAT applies above 430 euros by air or sea (300 euros otherwise).",
      "<strong>Legal basis:</strong> French Customs cites Article 41 of Regulation (EC) 1186/2009 and Directive 2007/74/EC, and a circular of 28 April 2023 on tobacco imported by travellers."
    ],
    faq: [
      ["What is the duty free allowance for France?", "From outside the EU: 1 litre of drinks over 22 degrees or 2 litres of 22 degrees or less, plus 4 litres of still wine and 16 litres of beer, 200 cigarettes, and goods up to 430 euros by air or sea (300 euros otherwise)."],
      ["How much alcohol can I bring into France?", "4 litres of still wine and 16 litres of beer, plus either 1 litre of drinks over 22 degrees or 2 litres of drinks of 22 degrees or less. People under 17 get no alcohol allowance."],
      ["How many cigarettes can I bring into France?", "200 cigarettes, or 100 cigarillos, 250 g of smoking tobacco or 50 cigars. The quantities can be mixed in proportion but not added together."],
      ["What happens if I go over the duty free limit in France?", "You must declare the goods and pay VAT and customs duty on their whole price, not only on the excess."]
    ],
    src: [["https://www.douane.gouv.fr/demarche/vous-rapportez-du-tabac-de-lalcool-ou-dautres-marchandises-achetees-hors-de-lunion", "French Customs (douane.gouv.fr) &mdash; Bringing back tobacco, alcohol or other goods bought outside the EU"]]
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

function has(c) { return !!DATA[c.name]; }
module.exports = { build, has };
