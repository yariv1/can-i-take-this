const fs=require('fs');
const f='plane_unique.json';
const d=fs.existsSync(f)?JSON.parse(fs.readFileSync(f,'utf8')):{};
const T='https://www.tsa.gov/travel/security-screening/';
d['lighter']={h:'What the TSA says about each kind of lighter',p:[
"The TSA treats lighters as several different items, and the answer depends on which one you own. Its page for disposable and Zippo lighters lists them as allowed in carry-on. For checked bags it adds special instructions: lighters without fuel are allowed, while lighters with fuel are prohibited unless they follow the Department of Transportation exemption, which allows up to two fueled lighters in a DOT-approved case.",
"Torch lighters are the strict case. The TSA page for them says no for carry-on bags and no for checked bags, so a torch lighter should stay at home. The TSA also states that the final decision on any item rests with the officer at the checkpoint, and it sends readers with regulatory questions to the FAA website."],
src:[['TSA: Lighters (Disposable and Zippo)',T+'whatcanibring/items/lighters-disposable-and-zippo'],['TSA: Lighters (Torch)',T+'whatcanibring/items/lighters-torch']]};
d['power-bank']={h:'Why a power bank must travel in your cabin bag',p:[
"The TSA page for power banks gives a two-part answer: yes for carry-on bags and no for checked bags. It says portable chargers or power banks that contain a lithium-ion battery must be packed in carry-on bags, and that spare lithium batteries, a group that includes both power banks and phone chargers, are prohibited in checked luggage.",
"So the practical rule is about where the power bank goes, not only how big it is. Take it out of your suitcase before you hand the suitcase over at check-in, and keep it with you. The TSA points to the FAA guidance on portable rechargers for the detailed battery limits, and it repeats that the officer at the checkpoint makes the final call."],
src:[['TSA: Power Banks',T+'whatcanibring/items/power-banks']]};
d['vape-e-cigarette']={h:'Official conditions for carrying a vape device',p:[
"The TSA page on electronic cigarettes and vaping devices says carry-on yes, with special instructions, and checked bags no. Electronic smoking devices are allowed only in carry-on baggage, and passengers must take effective measures to prevent accidental activation of the heating element while carrying them. The page refers to the FAA regulations for examples of such measures.",
"The same page states a battery condition: each lithium-ion battery must not exceed 100 Wh, or for lithium metal batteries a lithium content of 2 grams. It also tells passengers to check with their airline about any limit on the number of devices one passenger may carry for personal use. This page covers screening only; whether vaping is legal at your destination is a separate question."],
src:[['TSA: Electronic Cigarettes and Vaping Devices',T+'whatcanibring/items/electronic-cigarettes-and-vaping-devices']]};
d['alcohol']={h:'TSA limits for alcohol in cabin and checked bags',p:[
"For carry-on bags the TSA page on alcoholic beverages allows alcohol only in containers of 3.4 oz (100 ml) or less, which also means mini bottles must fit comfortably in a single quart-sized bag. For checked bags the answer is yes, with limits that depend on strength: drinks with 24% alcohol or less are not subject to limitations, while drinks above 24% and up to 70% are limited to 5 liters (1.3 gallons) per passenger and must be in unopened retail packaging.",
"Two more points on the page concern the flight itself. It tells passengers to check with their airline before bringing any alcohol on board, and it says FAA regulations prohibit drinking alcohol on an aircraft unless it is served by a flight attendant, who may not serve a passenger who is intoxicated."],
src:[['TSA: Alcoholic Beverages',T+'whatcanibring/items/alcoholic-beverages']]};
d['perfume-aerosols']={h:'Perfume and aerosols: carry-on and checked limits from the TSA',p:[
"The TSA perfume page allows perfume in carry-on only at 3.4 oz (100 ml) or less, and allows it in checked bags. Its note on checked bags is where aerosols matter: the FAA limits the total amount of restricted medicinal and toiletry articles, including aerosols, to 2 kg (70 ounces) or 2 L (68 fluid ounces) per person, and a single container may not exceed 0.5 kg (18 ounces) or 500 ml (17 fluid ounces).",
"The page adds that the release button or nozzle of a permitted aerosol must be protected by a cap or another suitable means to prevent accidental release. Put together, a full-size perfume bottle belongs in your checked bag with its cap on, and only a travel-size one goes in the cabin."],
src:[['TSA: Perfume',T+'whatcanibring/items/perfume']]};
d['liquids']={h:'The TSA rule for liquids, aerosols, gels, creams and pastes',p:[
"The TSA liquids rule lets you bring a quart-sized bag of liquids, aerosols, gels, creams and pastes in your carry-on, limited to travel-sized containers of 3.4 oz (100 ml) or less per item. Containers larger than that go in checked baggage, and the page adds that liquids over 3.4 oz or 100 ml that are not in a secure, tamper-evident bag must be packed in checked baggage.",
"The page lists two exempt categories, medications and infant and child nourishments. It also describes a duty-free exception for inbound international flights: duty-free liquids over 3.4 oz may ride in carry-on only if they are in a secure, tamper-evident bag, were bought internationally on a connecting trip, and come with the original receipt from within 48 hours. Even then the TSA recommends packing them in checked baggage."],
src:[['TSA: Liquids, Aerosols, and Gels Rule',T+'liquids-aerosols-gels-rule']]};
fs.writeFileSync(f,JSON.stringify(d,null,2));
