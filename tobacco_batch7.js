const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.tobacco=d.tobacco||{};
d.tobacco.oman={h:'What Oman Customs says about the tobacco and alcohol exemptions',p:[
"Oman's General Directorate of Customs says up to 400 cigarettes are exempt from customs duty for a traveller. Non-Muslims may bring up to 2 litres of wine and 48 cans of beer, and the page states that Muslims are not allowed that exemption. The exemptions do not apply to someone, in the page's words, of the kind frequently passing the customs territory. The page mentions no minimum age.",
"Gifts must not exceed a total value of 300 riyals, and electronics and household appliances are allowed only in non-commercial quantities. Currency, bearer securities, banknotes or convertible precious metals and gemstones above 6,000 riyals must be declared. The page does not list penalties for exceeding the tobacco exemption."],
src:'Source read: Oman Customs, Traveller services. No penalty for tobacco is stated.'};
d.tobacco.qatar={h:'What Qatar Customs says about the tobacco exemption',p:[
"Qatar Customs says a traveller's tobacco exemption should not exceed 400 cigarettes, and that allowance can be swapped for 20 cigars, 300 g of pipe tobacco, 500 g of raw tobacco or 2 kg of shisha tobacco. The tobacco must also not exceed 3,000 riyals in value, and anything above the limit or the value cap is subject to customs duties on the excess.",
"The conditions are that the items are personal and in non-commercial quantities, that the traveller is not a frequent visitor to customs and does not trade in these goods, and that prohibitions and restrictions under the Customs Law still apply. The page does not mention alcohol or a minimum age, so ask Qatar Customs about both."],
src:'Source read: Qatar General Authority of Customs, Travelers declaration page (English). Alcohol and age are not on the page.'};
d.tobacco.peru={h:'What SUNAT says about tobacco in baggage',p:[
"The Peruvian customs authority SUNAT says passengers over 18 may bring as exempt baggage 20 packs of cigarettes, or 50 cigars, or 250 grams of loose or shredded smoking tobacco, with liquor limited to 3 litres. Personal-use goods and gifts are exempt if their combined value is up to US$500, and electrical devices, tools and professional equipment in that group are limited to one unit per type.",
"The page does not give a penalty for tobacco above the exemption or say what happens to the excess. Check SUNAT before you travel with more than the allowance."],
src:'Source read: SUNAT, Equipaje y bienes (viajeros) (in Spanish). No tobacco penalty is stated.'};
d.tobacco.serbia={h:'What Serbian Customs says about the tobacco and alcohol allowance',p:[
"Serbian Customs allows 50 cigarettes, or 25 cigarillos of up to 3 g each, or 10 cigars, or 50 g of tobacco, or a suitable combination. It also lists related products for personal use, such as e-cigarettes, vapes, nicotine pouches and hookah flavours, as allowed, and says snus is prohibited. The alcohol allowance is 1 litre of spirits or 1 litre of sparkling and liqueur wines, or a combination, plus 1 litre of other wines, and beer has no precise limit but must clearly be for personal use.",
"The page states no minimum age for the tobacco or alcohol allowances. Goods up to EUR 3,000 can be cleared at the border in the red channel with a single 10% customs rate plus VAT, usually 20%, and goods above that go through the regular procedure. Medicines are allowed for up to 15 days of regular therapy, and perfume is limited to one 50 ml bottle and one 25 ml toilet water. Non-residents can get a VAT refund on unused goods worth at least 6,000 dinars if exported within three months."],
src:'Source read: Carina.rs, FAQ for tourists (English). No age rule or penalty for tobacco is stated.'};
d.tobacco.seychelles={h:'What Seychelles Revenue Commission says about duty-free allowances',p:[
"The Seychelles Revenue Commission says passengers aged 18 and over may bring 250 g of tobacco products, or 200 cigarettes, which covers cigars, cheroots, snuff and smoking and chewing tobacco. The alcohol allowance is up to 2 litres of drinks at or below 16% alcohol, such as beer, wine and sparkling wine, and up to 2 litres of drinks above 16%, such as whisky, rum, gin and distilled liqueurs.",
"Other goods are allowed up to SCR 15,000, including one electronic item, and perfume up to 200 ml. Duty-free goods must be for personal use only. Passengers who exceed their allowance pay the applicable taxes on arrival, and failing to declare excess goods is a serious offence that can lead to heavy fines, seizure and possible prosecution. If you are unsure, use the red channel. The page does not state the fine amounts."],
src:'Source read: Seychelles Revenue Commission, Customs and Excises. Fine amounts are not on the page.'};
d.tobacco.philippines={h:'Philippines: what we could and could not read',p:[
"Our card says the duty- and tax-free allowance per traveller is 2 reams of cigarettes, or 50 cigars, or 250 g of pipe tobacco. It comes from the arriving travellers guidelines of the Bureau of Customs that we link below the card.",
"That page refused our request today, so we could not re-read the quantities, the age rule or the penalties. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check the Bureau of Customs before you travel."],
src:'The Bureau of Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.tobacco.russia={h:'Russia: what we could and could not read',p:[
"Our card says that per adult aged 18 or older the allowance is 200 cigarettes, or 50 cigars or cigarillos, or 250 g of tobacco. It comes from the page of the Russian customs service on the value, weight and quantity norms for personal goods in the Eurasian Economic Union.",
"That page refused our connection today, so we could not re-read the norms, which depend on how you travel and have changed several times. We do not use search snippets as sources. This text adds no new facts. Check the Russian Federal Customs Service before you travel."],
src:'The Russian customs page refused the connection on the day this text was written. The text repeats the card and adds no new facts.'};
d.tobacco['saudi-arabia']={h:'Saudi Arabia: what we could and could not read',p:[
"Our card says ZATCA, the Saudi tax and customs authority, exempts up to 200 cigarettes from customs duties and taxes. It comes from the tobacco quantities page of the authority that we link below the card.",
"That page could not be loaded today, so we could not re-read the exemption, the other tobacco amounts or any age rule. We do not use search snippets as sources. This text adds no new facts. Check ZATCA before you travel."],
src:'The ZATCA page could not be loaded on the day this text was written. The text repeats the card and adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
