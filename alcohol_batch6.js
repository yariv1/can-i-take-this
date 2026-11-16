const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.alcohol=d.alcohol||{};
const eu=(name,auth,url,extra)=>({h:name+': what we could and could not read',p:[
"Our card gives the EU rule that applies in "+name+": arriving from outside the EU you may bring 4 litres of still wine and 16 litres of beer, plus 1 litre of spirits over 22% or 2 litres of fortified or sparkling wine.",
extra+" We do not use search snippets as sources. This text adds no new facts. Check "+url+" before you travel."],
src:'No readable '+auth+' page on the alcohol allowance was read on the day this text was written. The text repeats the card and adds no new facts.'});
d.alcohol.finland=eu('Finland','Finnish Customs','tulli.fi','The Finnish Customs (Tulli) pages refused our requests today, so we could not read how Finland applies the rule, what it says about travel from other EU countries or what the penalty is.');
d.alcohol.france=eu('France','French Customs','douane.gouv.fr','We did not find a French Customs page on alcohol in travellers\' luggage that we could read today, so we could not read how France applies the rule or what the penalty is.');
d.alcohol.greece=eu('Greece','Greek customs','aade.gr','The Greek customs authority (AADE) pages refused our requests today, so we could not read how Greece applies the rule or what the penalty is.');
d.alcohol.hungary=eu('Hungary','Hungarian customs','nav.gov.hu','The Hungarian customs authority page we read covers cash and plants, not an alcohol allowance, so we could not read how Hungary applies the rule or what the penalty is.');
d.alcohol.lithuania=eu('Lithuania','Lithuanian customs','the Lithuanian customs site','The only Lithuanian customs traveller leaflet we found is from 2018, so we do not quote it as the current rule.');
d.alcohol.malta=eu('Malta','Maltese customs','customs.gov.mt','The Malta Customs pages refused our requests today, so we could not read how Malta applies the rule or what the penalty is.');
d.alcohol.poland=eu('Poland','Polish customs','the Polish tax administration site','The Polish tax administration pages refused our connection today, so we could not read how Poland applies the rule or what the penalty is.');
d.alcohol.portugal=eu('Portugal','Portuguese customs','the Portuguese Tax and Customs Authority travellers\' guide','The Portuguese customs page we could read explains that alcohol from outside the EU follows a separate regime from goods bought in another EU country but gives no quantities, and the pages it links to were not read.');
d.alcohol.romania=eu('Romania','Romanian customs','customs.ro','The Romanian Customs Authority pages refused our requests today, so we could not read how Romania applies the rule or what the penalty is.');
d.alcohol.spain=eu('Spain','Spanish customs','the Spanish Tax Agency site','The Spanish Tax Agency page we could read covers cash and plants, not an alcohol allowance, so we could not read how Spain applies the rule or what the penalty is.');
d.alcohol.lebanon={h:'Lebanon: what we could and could not read',p:[
"We found no Lebanese customs page that states a duty-free alcohol allowance for travellers that we could read, so we cannot give a figure for Lebanon.",
"We do not use search snippets or travel blogs as sources. This text adds no new facts. Ask Lebanese Customs or your airline how much alcohol you may bring before you travel."],
src:'No readable Lebanese customs page on alcohol was found on the day this text was written. The text adds no new facts.'};
d.alcohol.panama={h:'Panama: what we could and could not read',p:[
"We found no Panamanian customs page that states a duty-free alcohol allowance for travellers that we could read, so we cannot give a figure for Panama.",
"We do not use search snippets or travel blogs as sources. This text adds no new facts. Ask the Panamanian customs authority or your airline how much alcohol you may bring before you travel."],
src:'No readable Panamanian customs page on alcohol was found on the day this text was written. The text adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
