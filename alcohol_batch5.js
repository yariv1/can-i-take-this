const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.alcohol=d.alcohol||{};
d.alcohol.taiwan={h:'What Taipei Customs says about alcohol',p:[
"Taipei Customs says passengers aged 18 or over may bring 1.5 litres of alcohol duty-free, with an overall limit of 5 litres including the duty-free amount, and alcohol declared as of Chinese origin is limited to 1 litre in total. Alcohol means drinks above 0.5% alcohol by volume plus other ethyl products for manufacturing. Our card says 1.5 litres, and the page does not mention a 1-litre duty-free figure for other alcohol.",
"For tobacco and alcohol above the allowance the page gives fines and confiscation, for example NTD 1,000 per 200 cigarettes, and dutiable goods may be confiscated or fined up to three times their value. E-cigarettes and e-liquids are prohibited, and carrying prohibited goods may lead to criminal penalties. Tobacco and alcohol are excluded from the NTD 35,000 personal goods limit."],
src:'Source read: Customs Administration, Taipei Customs, duty-free page (English). Rates may have changed, so check the current amounts.'};
d.alcohol.thailand={h:'What Thai Customs says about the alcohol allowance',p:[
"The Suvarnabhumi Airport customs page for the Nothing to Declare channel allows up to 1 litre of alcohol, together with 200 cigarettes or 250 g of tobacco and personal belongings worth up to 20,000 baht, excluding prohibited or restricted goods and food. Any excess cigarettes, tobacco or alcohol must be put in the box provided by Customs, and the page warns that otherwise prosecution will be carried out.",
"In the Red Channel you bring your passport and any invoices or receipts, and non-commercial accompanying belongings up to 200,000 baht are assessed a flat rate of duty and taxes. Prohibited or restricted goods lead to prosecution. The page gives no minimum age for the alcohol allowance."],
src:'Source read: Thai Customs Department, Suvarnabhumi Airport green channel page. The age rule is not on it.'};
d.alcohol.turkey={h:'What the Turkish customs guide says about the alcohol allowance',p:[
"The Turkish customs guide says a traveller may bring up to 1 litre of spirits above 22% alcohol or up to 2 litres of drinks at or below 22%, next to 600 cigarettes, 100 cigarillos, 50 cigars, 250 g of cut tobacco and 250 g of pipe tobacco. Each product has its own quantity limit, and the allowance cannot be exceeded for any single product. Travellers under 18 cannot claim the tobacco or alcohol allowances, and the items must be with the traveller.",
"The page states no monetary value limit for these allowances, and a related question on its index mentions 1,500 euros for a single item without explaining it. It does not give a penalty for going over, so check Turkish Customs for the current rules."],
src:'Source read: Gümrük Rehberi (Turkish customs guide), traveller allowances (in Turkish). No penalty is stated.'};
d.alcohol['united-arab-emirates']={h:'What the UAE government portal says about the alcohol allowance',p:[
"The official UAE government portal says a traveller may bring up to 4 litres of alcoholic drinks or 2 cartons of beer of 24 cans each, with no can above 355 ml, along with 200 cigarettes, 50 cigars or 500 g of tobacco. Gifts, perfumes and personal luggage together must not exceed AED 3,000, must be limited in quantity and not commercial, and the traveller must not be a frequent carrier of goods or crew.",
"Customs duty plus VAT applies above these limits, and the page states no rate. It sets no minimum age for alcohol, so check the age rule with UAE customs and the rules of the emirate where you land, because alcohol rules differ between emirates. Our card says to respect the local law, which the page does not discuss."],
src:'Source read: u.ae, Customs clearance. The duty rate on the excess and the age rule are not on the page.'};
d.alcohol['united-kingdom']={h:'What GOV.UK says about the alcohol allowance for Great Britain',p:[
"GOV.UK gives the alcohol allowance for Great Britain as 42 litres of beer and cider, 18 litres of still or sparkling wine, 4 litres of spirits and other products over 22% alcohol by volume, and 9 litres of products up to 22%, excluding beer, cider and wine, such as fortified wine. If you go over an allowance, you pay tax and duty on all of that product, and your goods could be seized if you do not declare them. You declare online before travelling or at the border.",
"For travellers aged 17 or under there are no personal allowances for alcohol, tobacco or vaping products; you can bring them for your own use but must declare them before arriving. Other goods are allowed up to GBP 390, or GBP 270 by private plane or boat, and above that you pay tax and duty on the whole value. The page covers Great Britain only, and Northern Ireland has its own guide."],
src:'Source read: GOV.UK, Duty-free goods: arriving in Great Britain.'};
d.alcohol['united-states']={h:'What U.S. Customs and Border Protection says about alcohol',p:[
"U.S. Customs and Border Protection says one American litre, 33.8 fluid ounces, of alcohol can count toward a returning resident's personal exemption if it is for your own use, not for resale, and legal in the state where you arrive. You must be at least 21, states may set stricter limits and CBP enforces them, and alcohol beyond the duty-free amount is taxed even if your total exemption is not used up.",
"The standard exemption is US$800, and items above it but within the flat-rate limit are dutiable at a flat 3%. The tobacco exemption covers not more than 200 cigarettes and 100 cigars, and amounts beyond that can be detained, seized or penalised. The page does not mention a US$100 gift allowance."],
src:'Source read: CBP, Customs duty information for international visitors.'};
d.alcohol.vietnam={h:'What Vietnam Law Magazine says about the alcohol allowance',p:[
"Vietnam Law Magazine, an English-language legal publication, reports in an article dated 16 September 2026 that under Decree 273/2026/ND-CP, Article 5, the 1.5-litre alcohol allowance covers drinks with 20% or more alcohol, below 20% the limit is 2 litres, and other spirits and beer are capped at 3 litres. An unopened container may still be duty-exempt if the excess is no more than 1 litre, and anything beyond 1 litre is dutiable.",
"The alcohol and tobacco allowances do not apply to anyone under 18, and other goods can be duty-exempt if their total customs value is no more than VND 10 million. The article gives no effective date for the decree and no penalties. It is a magazine, not a Vietnamese authority, which is why the card is marked unofficial."],
src:'Source read: Vietnam Law Magazine, article of 16 September 2026. This is an unofficial source.'};
d.alcohol.switzerland={h:'What the Swiss customs office says about alcohol allowances',p:[
"The Swiss Federal Office for Customs and Border Security says duty-free allowances for food, alcohol and tobacco apply per person per day, and that if the total value of goods you bring exceeds CHF 150, VAT is payable in any case. Foodstuffs ordered abroad and delivered by post or courier follow different rules.",
"The table of quantities, including the alcohol figures our card gives, did not appear in the text we could read, so we cannot re-confirm the 5 litres figure or the age rule here. For the exact quantities and any penalties, the page points to the customs information office on +41 58 467 15 15. Check the table on the Swiss customs page before you travel."],
src:'Source read: FOCBS (BAZG), Duty-free allowances: foodstuffs, alcohol and tobacco. The quantities table was not in the text read.'};
d.alcohol.malaysia={h:'Malaysia: what we could and could not read',p:[
"Our card says each person may bring not more than 1 litre of wine, spirit, beer or malt liquor duty-free. It comes from a Malaysian customs form that we link below the card.",
"The customs site refused our connection today, so we could not re-read the form, the age rule or any penalty. We do not use search snippets as sources. This text adds no new facts. Check Malaysian Customs before you travel."],
src:'The Malaysian customs site refused the connection on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.maldives={h:'Maldives: what we could and could not read',p:[
"Our card says that importing alcohol without prior approval is prohibited under Maldivian law and that alcohol is confiscated on arrival. It comes from the prohibited and restricted items page of Maldives Customs that we link below the card.",
"That page refused our request today, so we could not re-read the wording, the approval steps or any penalty. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check Maldives Customs before you travel."],
src:'The Maldives Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.mauritius={h:'Mauritius: what we could and could not read',p:[
"Our card says you choose one of the allowance options, for example option A of 1 litre of spirits and 2 litres of wine, ale or beer. It comes from the allowances page of the Mauritius Revenue Authority that we link below the card.",
"That page returned a not-found error today, so we could not re-read the other options, the age rule or any penalty, and we do not use search snippets as sources. This text adds no new facts. Check the Mauritius Revenue Authority before you travel."],
src:'The MRA page returned an error on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.morocco={h:'Morocco: what we could and could not read',p:[
"Our card says visitors may bring one 1-litre bottle of wine and one 1-litre bottle of spirits duty-free. It comes from a Moroccan customs guide that we link below the card.",
"The Moroccan customs site rejected our request for that guide today, so we could not re-check the figure or the age rule. We do not use search snippets as sources. This text adds no new facts. Check Moroccan Customs before you travel."],
src:'The Moroccan customs guide rejected the request on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.nigeria={h:'Nigeria: what we could and could not read',p:[
"Our card says the passenger concessions list one 1-litre bottle of spirit and one of wine, so one bottle each. It comes from the passenger concessions page of the Nigeria Customs Service that we link below the card.",
"That page refused our request today, so we could not re-read the concession or any penalty. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check the Nigeria Customs Service before you travel."],
src:'The Nigeria Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.philippines={h:'Philippines: what we could and could not read',p:[
"Our card says the duty- and tax-free allowance per traveller is 2 bottles of liquor. It comes from the arriving travellers guidelines of the Bureau of Customs that we link below the card.",
"That page refused our request today, so we could not re-read the volume per bottle, the age rule or the penalties. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check the Bureau of Customs before you travel."],
src:'The Bureau of Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.russia={h:'Russia: what we could and could not read',p:[
"Our card says that per adult aged 18 or older the allowance is 3 litres of alcoholic drinks. It comes from the page of the Russian customs service on the value, weight and quantity norms for personal goods in the Eurasian Economic Union.",
"That page refused our connection today, so we could not re-read the norms, which have changed several times. We do not use search snippets as sources. This text adds no new facts. Check the Russian Federal Customs Service before you travel."],
src:'The Russian customs page refused the connection on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.ukraine={h:'Ukraine: what we could and could not read',p:[
"Our card says adults aged 18 or older may bring, per person, 5 litres of beer and 2 litres of wine, with other limits for stronger drinks. It comes from the citizens' information page of the State Customs Service that we link below the card.",
"That page returned an access error today, so we could not re-read the allowance or the penalty, and the rules in Ukraine have changed during the war. We do not use search snippets as sources. This text adds no new facts. Check the State Customs Service before you travel."],
src:'The Ukrainian customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.qatar={h:'Qatar: what we could and could not read',p:[
"Our card says alcohol cannot be imported, because Hamad International Airport lists alcoholic beverages among the items that are not allowed. It comes from the airport's security and customs page that we link below the card.",
"We did not re-open that airport page today, and an airport page is not the Qatar customs authority, so we could not check the rules for non-Muslim residents or any penalty. We do not use search snippets as sources. This text adds no new facts. Check Qatar Customs before you travel."],
src:'The airport page was not re-read on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol['saudi-arabia']={h:'Saudi Arabia: what we could and could not read',p:[
"Our card says Saudi Arabia bans the import of alcohol and intoxicants of all kinds, with penalties, according to the ZATCA prohibited goods page that we link below the card.",
"That page could not be loaded today, so we could not re-read the wording or the penalties. We do not use search snippets as sources. This text adds no new facts. Check ZATCA before you travel."],
src:'The ZATCA page could not be loaded on the day this text was written. The text repeats the card and adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
