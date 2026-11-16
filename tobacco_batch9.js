const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.tobacco=d.tobacco||{};
d.tobacco.slovakia={h:'What the Slovak Financial Administration says about tobacco in luggage',p:[
"The Slovak Financial Administration says travellers aged 17 or over may carry tobacco in their luggage, for non-commercial and occasional use, within two sets of limits. By air, per person, it is 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of smoking tobacco, plus ten consumer packs of smokeless tobacco. By other transport it is 40 cigarettes, 20 cigarillos, 10 cigars or 50 g of smoking tobacco, plus two consumer packs of smokeless tobacco. Products can be mixed if the shares of each limit add up to no more than 100%, for example 60 cigarillos by air, which is 60%, plus 20 cigars, which is 40%.",
"For alcohol the page allows up to 1 litre of spirits over 22% or 2 litres of weaker spirits, 2 litres of sparkling wine, 4 litres of still wine and 16 litres of beer, again with a 100% combination rule. The value limits for the VAT and customs exemption are EUR 430 by air, EUR 300 by other transport and EUR 150 for anyone under 15. Excess quantities are taxed in Slovakia. The page describes no penalties, so ask the Financial Administration about sanctions."],
src:'Source read: Finančná správa, Oslobodenie od cla, DPH a SPD (in Slovak). No penalties are stated.'};
d.tobacco.finland={h:'Finland: what we could and could not read',p:[
"Our card gives the EU rule that applies in Finland: entering from a non-EU country you may bring 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco, and travellers under 17 have no duty-free tobacco allowance.",
"The Finnish Customs (Tulli) pages refused our requests today, so we could not read how Finland applies the rule, what it says about travel from other EU countries or what the penalty is. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check tulli.fi before you travel."],
src:'The Finnish Customs pages returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.tobacco.greece={h:'Greece: what we could and could not read',p:[
"Our card gives the EU rule that applies in Greece: from a non-EU country by air you may bring 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco, and by land or sea the lower limit of 40 cigarettes applies.",
"The Greek customs authority (AADE) pages refused our requests today, so we could not read how Greece applies the rule or what the penalty is. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check aade.gr before you travel."],
src:'The AADE pages returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.tobacco.lithuania={h:'Lithuania: what we could and could not read',p:[
"Our card gives the EU rule that applies in Lithuania: from a non-EU country by air you may bring 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco, and by land or sea the lower limit of 40 cigarettes applies.",
"The only Lithuanian customs traveller leaflet we could find is from 2018, and its table layout was not clear in the text we could read, so we do not quote it as the current rule. We do not use search snippets as sources. This text adds no new facts. Check the Lithuanian customs site before you travel."],
src:'Only a 2018 Lithuanian leaflet was found, and it was not quoted as current. The text repeats the card and adds no new facts.'};
d.tobacco.malta={h:'Malta: what we could and could not read',p:[
"Our card gives the EU rule that applies in Malta: entering from a non-EU country you may bring 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco, and travellers under 17 have no duty-free tobacco allowance.",
"The Malta Customs pages refused our requests today, so we could not read how Malta applies the rule or what the penalty is. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check customs.gov.mt before you travel."],
src:'The Malta Customs pages returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.tobacco.poland={h:'Poland: what we could and could not read',p:[
"Our card gives the EU rule that applies in Poland: from a non-EU country by air you may bring 200 cigarettes, or 100 cigarillos, or 50 cigars, or 250 g of tobacco, and by land or sea the lower limit of 40 cigarettes applies.",
"The Polish tax administration pages refused our connection today, so we could not read how Poland applies the rule or what the penalty is. We do not use search snippets as sources. This text adds no new facts. Check the Polish tax administration before you travel."],
src:'The Polish tax administration pages refused the connection on the day this text was written. The text repeats the card and adds no new facts.'};
d.tobacco.romania={h:'Romania: what we could and could not read',p:[
"Our card gives the EU rule that applies in Romania: entering from a non-EU country the lower limit applies to all travellers, 40 cigarettes, or 20 cigarillos, or 10 cigars, or 50 g of tobacco.",
"The Romanian Customs Authority pages refused our requests today, so we could not read how Romania applies the rule, which limit applies by air or what the penalty is. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check customs.ro before you travel."],
src:'The Romanian customs pages returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.tobacco.ukraine={h:'Ukraine: what we could and could not read',p:[
"Our card says adults aged 18 or older may bring, per person, 200 cigarettes, or 50 cigars, or 250 grams of tobacco, or a mix up to 250 grams in total. It comes from the citizens' information page of the State Customs Service that we link below the card.",
"That page returned an access error today, so we could not re-read the allowance, the alcohol rules or the penalty, and the rules in Ukraine have changed during the war. We do not use search snippets as sources. This text adds no new facts. Check the State Customs Service before you travel."],
src:'The Ukrainian customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.tobacco.panama={h:'Panama: what we could and could not read',p:[
"We found no Panamanian customs page that states a duty-free tobacco allowance for travellers that we could read, so we cannot give a figure for Panama.",
"We do not use search snippets or travel blogs as sources. This text adds no new facts. Ask the Panamanian customs authority or your airline how much tobacco you may bring before you travel."],
src:'No readable Panamanian customs page on tobacco was found on the day this text was written. The text adds no new facts.'};
d.tobacco.lebanon={h:'Lebanon: what we could and could not read',p:[
"We found no Lebanese customs page that states a duty-free tobacco allowance for travellers that we could read, so we cannot give a figure for Lebanon.",
"We do not use search snippets or travel blogs as sources. This text adds no new facts. Ask Lebanese Customs or your airline how much tobacco you may bring before you travel."],
src:'No readable Lebanese customs page on tobacco was found on the day this text was written. The text adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
