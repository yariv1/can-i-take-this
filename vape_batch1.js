const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.vape=d.vape||{};d.vaping=d.vaping||{};
const set=(c,e)=>{d.vape[c]=e;d.vaping[c]=e;};
set('canada',{h:'What the Canada Border Services Agency says about vaping products',p:[
"The Canada Border Services Agency says non-residents and temporary residents must declare all tobacco and vaping products when they enter Canada, and the minimum age is 18 wherever you enter. For vaping products the limit is 12 vaping containers or fewer, with a maximum of 120 mL of liquid or 120 g of solid.",
"The page does not call vaping products within these limits duty-free. It says duties and taxes could apply to limited quantities and that you should be ready to pay them on any declared amount. Amounts above the limits may need a permit from the provincial or territorial authority, and vaping products cannot count as exempt gifts. It states no penalty for undeclared vaping products."],
src:'Source read: CBSA, What can I bring: tobacco and vaping products for non-residents. No penalty for undeclared vaping products is stated.'});
set('fiji',{h:'What Fiji Revenue and Customs says about e-cigarettes',p:[
"The Fiji Revenue and Customs Service lists e-cigarette liquid inside the tobacco allowance for travellers aged 18 or over: e-cigarettes are capped at 200 ml or 200 mg, next to 200 cigarettes or 200 g of cigars or tobacco. Chewing tobacco is prohibited. The goods must be carried by the traveller and not be for sale or for someone else.",
"Goods over the allowance, or intended for commercial use, are subject to duty. The page does not list tobacco or e-cigarettes as a separate trigger for ticking Yes on the arrival card, and it describes no penalty for e-cigarettes above 200 ml."],
src:'Source read: FRCS, Arriving in Fiji. No e-cigarette penalty is stated.'});
set('norway',{h:'What Norwegian Customs says about nicotine products and vapes',p:[
"Norwegian Customs says unapproved new tobacco and nicotine products, such as nicotine pouches and heated tobacco, waterpipe tobacco and certain e-cigarettes, are not allowed to be brought in under the tobacco quota page. The quota itself is 200 cigarettes or 250 g of other tobacco for visitors from outside Norway.",
"The page does not name which e-cigarettes are covered, does not give a quantity for permitted ones, and describes no penalty. You may bring more than the quota only if you declare the excess, but that does not make a banned product legal. Check the Norwegian customs rules for the exact product before you pack a device or liquid."],
src:'Source read: Toll.no, Alcohol and tobacco quotas (English). The list of banned e-cigarettes and any penalty are not on the page.'});
set('taiwan',{h:'What Taipei Customs says about e-cigarettes',p:[
"Taipei Customs says e-cigarettes and e-liquids are prohibited, as are undeclared or unapproved designated tobacco products, and that carrying prohibited goods may lead to criminal penalties. Only government-approved designated tobacco products count within the 200-product duty-free allowance for passengers aged 20 or over.",
"For tobacco above the allowance the page gives fines and confiscation, for example NTD 1,000 per 200 cigarettes, and dutiable goods may be confiscated or fined up to three times their value. The page does not describe a specific penalty for a vape device, so treat it as an item not to pack."],
src:'Source read: Customs Administration, Taipei Customs, duty-free page (English). A device-specific penalty is not stated.'});
set('serbia',{h:'What Serbian Customs says about vapes and nicotine pouches',p:[
"Serbian Customs lists e-cigarettes, vapes, nicotine pouches and hookah flavours for personal use as allowed alongside the tobacco allowance of 50 cigarettes, 25 cigarillos, 10 cigars or 50 g of tobacco, and says snus is prohibited. The page gives no separate quantity for e-liquid or devices.",
"Goods up to EUR 3,000 can be cleared at the border in the red channel with a single 10% customs rate plus VAT, and the page states no minimum age for these products and no penalty. Because quantities are not stated, keep to amounts that are clearly for personal use."],
src:'Source read: Carina.rs, FAQ for tourists (English). No quantity, age rule or penalty for vapes is stated.'});
set('south-korea',{h:'What Korea Customs says about e-cigarette liquid',p:[
"The Korea Customs Service page on duty-free allowances sets the tobacco allowance at 200 cigarette sticks, or e-cigarette or liquid nicotine up to 20 ml with nicotine under 1%. Minors under 19, counted by year of birth, are not given the tax exemption for liquor and cigarettes. The page does not mention cigars or loose tobacco.",
"If you declare goods above the allowances yourself, you get a 30% reduction from the standard customs duty. Undeclared goods found later face an additional tax of 40% above the regular tax, or 60% if caught two or more times within 2 years."],
src:'Source read: Korea Customs Service, duty-free allowance page (English). The page does not say whether the 20 ml counts per device or in total.'});
set('georgia',{h:'What the Georgian Revenue Service brochure says about e-cigarette liquid',p:[
"The Georgian Revenue Service customs brochure allows 50 ml of e-cigarette liquid, imported as hand luggage or baggage for personal or family use or as a gift, as one of the tobacco options: per 30 calendar days by road and per calendar day through air checkpoints. Heated tobacco products are counted as 200 pieces, and capsules with tobacco content as 10 pieces.",
"Combinations of tobacco products are allowed if the shares of each product, measured against its own limit, add up to no more than 100%. Tax benefits for tobacco and alcohol start at age 18. The brochure does not describe penalties for liquid above 50 ml."],
src:'Source read: Revenue Service of Georgia, brochure on exemption of goods from duties and declaring. It states no vape penalty.'});
set('qatar',{h:'What the UK government advice says about vapes in Qatar',p:[
"We read the UK government's travel advice for Qatar. It says vapes and e-cigarettes are illegal to import and sell, including liquids and electronic shisha pipes, regardless of quantity and intended use, and that customs may confiscate them. It also says drugs are strictly controlled and that medicines should be checked with the Qatari embassy.",
"This is the advice of another country's government, which is why this is an unofficial source. The page gives no fine amount for vapes, but it says breaking the Qatari rules on money or goods can lead to a fine or imprisonment plus seizure."],
src:'Source read: UK government (FCDO), Qatar entry requirements, 16 November 2026. This is an unofficial source.'});
set('united-kingdom',{h:'What GOV.UK says about vaping products for Great Britain',p:[
"GOV.UK says that for travellers aged 17 or under there are no personal allowances for alcohol, tobacco or vaping products; you can bring them for your own use but must declare them before arriving in Great Britain. Your goods could be seized if you do not declare them, and you declare online before travelling or at the border.",
"The page does not give a quantity limit for vaping products for adults, and the page covers Great Britain only, so check the separate guide for Northern Ireland. The tobacco allowance on the same page is one of 200 cigarettes, 100 cigarillos, 50 cigars, 250 g of tobacco or 200 sticks for heated tobacco devices."],
src:'Source read: GOV.UK, Duty-free goods: arriving in Great Britain. No adult quantity limit for vapes is stated.'});
set('thailand',{h:'What the Thai customs green channel page says about e-cigarettes',p:[
"The Suvarnabhumi Airport customs page for the Nothing to Declare channel lists the allowance as up to 200 cigarettes, or 250 g of tobacco, or 250 g of all types combined, plus 1 litre of alcohol. It does not mention e-cigarettes or whether they are prohibited, so the page gives no basis to carry a vape.",
"Excess cigarettes, tobacco or alcohol must be put in the box provided by Customs, and the page warns that otherwise prosecution will be carried out. Prohibited or restricted goods lead to prosecution. Because Thailand treats vapes under its own rules, which this page does not cover, ask Thai Customs before you pack a device."],
src:'Source read: Thai Customs Department, Suvarnabhumi Airport green channel page. E-cigarettes are not covered on it.'});
set('japan',{h:'What Japan Customs says about tobacco and heated tobacco',p:[
"Japan Customs lists the duty-free tobacco allowance per person over 20 as 200 cigarettes, or 50 cigars, or 10 packages of heat-not-burn tobacco, or 250 g of other tobacco products. The page applies the allowances only to people over 20 and says nothing about younger travellers, and it does not mention nicotine e-liquid.",
"An item worth more than 200,000 yen gets no allowance and is taxed in full. The page does not state the duty rates or the procedure for quantities above the allowance, so a nicotine vape device or liquid is not covered by what we read and should be checked with Japan Customs."],
src:'Source read: Japan Customs, Customs Answer 7104 (English). Nicotine liquid is not covered on the page.'});
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
