const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.alcohol=d.alcohol||{};
d.alcohol.brazil={h:'What the Brazilian Federal Revenue says about alcohol in baggage',p:[
"The Brazilian Federal Revenue (Receita Federal) says a traveller may bring up to 12 litres of alcoholic drinks in total in baggage, by air, sea or land. Over the limit, the drinks are treated as ordinary baggage without the tax exemption. The arrival Free Shop has its own limit: at a land border up to 12 litres, and at a port or airport up to 24 units, with no more than 12 units of any one type of drink.",
"Travellers under 18 cannot buy alcohol at the Free Shop, even when accompanied, and alcohol cannot be part of the baggage of a child or teenager even with a legal guardian. The page does not mention wine or beer separately, so the rules apply to alcoholic drinks in general. Purchases above the extra arrival quota are taxed under the special RTE regime, which the page does not explain, and it gives no fine for exceeding the limit."],
src:'Source read: Receita Federal, Cota de isenção, duty free e bagagem tributável (in Portuguese). The RTE regime and fines are not explained on the page.'};
d.alcohol.canada={h:'What the Canada Border Services Agency says about alcohol limits',p:[
"The Canada Border Services Agency says non-residents and temporary residents may bring 1.5 litres of wine, or 1.14 litres of spirits, or 1.14 litres of wine and spirits combined, or 8.5 litres of beer or ale. The minimum age is 18 if you enter through Alberta, Manitoba or Quebec, and 19 elsewhere. Our card says you must meet the drinking age of the province where you arrive, and the page fixes it at those two figures.",
"The page does not call alcohol within these limits duty-free: it says duties and taxes could apply and that you should be ready to pay them on any declared amount. Each gift under CAD 60 is exempt from duties and taxes, but tobacco, vaping products and alcohol cannot count as exempt gifts. Amounts above the limits may need a permit from the provincial or territorial authority. The page states no penalty for undeclared alcohol."],
src:'Source read: CBSA, What can I bring: alcohol and tobacco for non-residents. No penalty for undeclared alcohol is stated.'};
d.alcohol.chile={h:'What Chilean Customs says about the alcohol allowance',p:[
"The Chilean customs service says the duty- and tax-free baggage allowance for each adult traveller includes 2,500 cubic centimetres of alcoholic drinks, next to 400 cigarettes, 500 grams of pipe tobacco and 50 cigars. The page does not define the adult age for the baggage rule, but for Duty Free purchases, buyers of cigarettes and alcohol must be over 18.",
"Duty Free shop goods are exempt from duties and internal taxes up to US$675 if non-commercial, must be in sealed packaging and may not be opened before clearing customs. Personal imports without a customs agent are allowed up to US$1,500, with 6% duty and 19% VAT. We read the first 100,000 characters of a long page, and the penalty for exceeding the alcohol allowance is not in the part read."],
src:'Source read: Aduanas de Chile, Preguntas frecuentes viajero y turista (in Spanish), first 100,000 characters.'};
d.alcohol['dominican-republic']={h:'What the Dominican customs traveller manual says about alcohol',p:[
"The Dominican customs traveller manual says adult passengers may bring up to 5 litres of alcoholic drinks duty-free, whether wine, beer, rum, whisky or another liquor. The page sets the adult threshold only through the word adult and gives no numeric age, so ask Customs what age applies.",
"Gifts up to US$500 are allowed once every three months, and each traveller may bring one laptop and one tablet duty-free. Items beyond the allowances are subject to taxes, and the manual lists drugs, psychotropic substances and firearms as prohibited. It does not say what happens to alcohol above 5 litres beyond the tax and gives no fine."],
src:'Source read: DGA, Manual del Viajero (in Spanish). No numeric age or fine is stated.'};
d.alcohol.cambodia={h:'What the Cambodia Airports customs page says about alcohol',p:[
"The customs and excise page of Cambodia Airports says an arriving passenger may bring up to 2 litres of alcohol, and passengers under 18 may not bring alcohol or tobacco. Our card adds that the Ministry of Tourism's site also gives 2 litres. The same page lists 200 cigarettes, 350 ml of perfume and cosmetics and a reasonable quantity of travel items.",
"Goods worth US$100 or more are subject to duties and taxes, and a false declaration or using the green channel to avoid declaring dutiable goods can lead to fines or prosecution. The page is an airport operator's summary, not the Cambodian customs department, which is why the card is marked unofficial."],
src:'Source read: Cambodia Airports, Customs and excise. This is an airport operator page and an unofficial source.'};
d.alcohol.cuba={h:'What the Cuban tourism portal says about alcohol',p:[
"The Cuban tourism portal lists, per adult, up to 2,500 cc of alcoholic drinks among the personal effects a traveller may bring, next to 400 cigarettes, 500 g of pipe tobacco and 50 Cuban cigars. It says quantities above those listed for each item are not treated as personal effects and are subject to the rules for imported goods, and that under the weight and value method, 25 kg of goods count as personal effects and pay no customs duty.",
"The page does not give an age limit or a penalty. It is a tourism portal, not Cuban Customs, which is why the card is marked unofficial, and Cuban Customs' own site would not open securely for us earlier. Check Cuban Customs before you travel."],
src:'Source read: cuba.travel, Accessories for traveling. This is a tourism portal and an unofficial source.'};
d.alcohol.argentina={h:'Argentina: what we could and could not read',p:[
"Our card says the tourist decree allows alcoholic drinks up to 2 litres when you arrive from a country that does not border Argentina, and 1 litre from a bordering country. It comes from Decree 1001/1982 as updated on the Argentine government legislation site that we link below the card.",
"That page returned a server error today, so we could not re-read the article, the age rule or any penalty, and we do not use search snippets as sources. This text adds no new facts. Check the Argentine customs service before you travel."],
src:'The Argentine legislation page returned a server error on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.australia={h:'Australia: what we could and could not read',p:[
"Our card says the duty-free allowance is 2.25 litres of alcohol per adult aged 18 or older, and that if you go over you pay duty on all the alcohol, not just the excess. It comes from the Australian Border Force duty-free page that we link below the card.",
"The Border Force pages refused our request today, so we could not re-check the allowance, the rules on undeclared alcohol or any penalty. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check the Australian Border Force before you travel."],
src:'The Australian Border Force pages returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.bahrain={h:'Bahrain: what we could and could not read',p:[
"Our card says the duty-free allowance is 3 litres of alcoholic drinks plus 12 cans of beer for travellers aged 18 or older, and that the exemption does not cover frequent travellers bringing goods in regularly. It comes from the duty-free purchases page of Bahrain Customs that we link below the card.",
"That page refused our request today, so we could not re-read the allowance or add rules on penalties. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check Bahrain Customs before you travel."],
src:'The Bahrain Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.belgium={h:'Belgium: what we could and could not read',p:[
"Our card gives the EU rule that applies in Belgium: arriving from outside the EU you may bring 4 litres of still wine and 16 litres of beer, plus 1 litre of spirits over 22% or 2 litres of fortified or sparkling wine.",
"The Belgian federal finance page for travellers asked us to solve a human-verification image, which we did not attempt, so we could not read how Belgium applies the rule or what the penalty is. We do not use search snippets as sources. This text adds no new facts. Check the Belgian customs pages before you travel."],
src:'The Belgian finance page asked for human verification on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.bulgaria={h:'Bulgaria: what we could and could not read',p:[
"Our card gives the EU rule that applies in Bulgaria: arriving from outside the EU you may bring 4 litres of still wine and 16 litres of beer, plus 1 litre of spirits over 22% or 2 litres of fortified or sparkling wine.",
"The Bulgarian National Customs Agency page with the limits refused our connection today, so we could not re-read the limits, the age rule or the penalty. We do not use search snippets as sources. This text adds no new facts. Check the Bulgarian customs agency before you travel."],
src:'The Bulgarian customs page refused the connection on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.china={h:'China: what we could and could not read',p:[
"Our card says Chinese Customs asks you to use the red channel if you carry 1,500 ml or more of alcoholic drinks containing 12% alcohol or more, and that duty is charged on the amount above the limit. It comes from the English customs guide that we link below the card.",
"That page could not be opened securely today because its certificate was not accepted, and we did not bypass that check, so we could not re-read the limit or the age rule. We do not use search snippets as sources. This text adds no new facts. Check China Customs before you travel."],
src:'The Chinese customs page could not be opened securely on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol.colombia={h:'Colombia: what we could and could not read',p:[
"Our card says the customs decree sets no litre limit for alcohol and gives an allowance by value of US$2,000 for accompanied baggage. It comes from Decree 1165 of 2019 on the DIAN legal site.",
"The decree is a very long text, and the part we could read covers only definitions, so we could not re-check the allowance or any rule on alcohol or minors. We do not use search snippets as sources. This text adds no new facts. Check the Colombian customs authority DIAN before you travel."],
src:'Only the definitions part of the DIAN decree could be read on the day this text was written. The text repeats the card and adds no new facts.'};
d.alcohol['costa-rica']={h:'Costa Rica: what we could and could not read',p:[
"Our card says the duty-free allowance is 5 litres of wine, spirits or liquor per adult traveller. It comes from a page of the Costa Rican customs portal AduanaFacil that we link below the card.",
"That page returned an error today, so we could not re-read the allowance or the age rule. We do not use search snippets as sources. This text adds no new facts. Check Costa Rican customs before you travel."],
src:'The AduanaFacil page returned an error on the day this text was written. The text repeats the card and adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
