const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.cash=d.cash||{};
d.cash.luxembourg={h:'What Luxembourg Customs says about cross-border cash',p:[
"The Luxembourg customs and excise administration says any movement of cash worth EUR 10,000 or more across a border to or from Luxembourg must be declared, whether you carry it or send it. It counts cash and bearer negotiable instruments, and since the EU rules changed it also counts gold coins (90% gold) and unminted gold (99.5% gold) above that value. Jewellery and diamonds are not cash in law, but they need a separate customs declaration.",
"The declaration is made before the trip or when you cross the border. The notice says to file it electronically beforehand, and if you have not, to go to customs yourself, for example at Findel airport. Cash sent by express courier, post or freight needs a disclosure declaration. Breaking these duties is punished by a fine of EUR 251 to EUR 25,000, which can come with partial confiscation of the money. The notice cites EU Regulation 2018/1672, in force since 3 June 2021, and the Luxembourg law of 16 July 2021."],
src:'Source read: Douanes Luxembourg, news notice on cross-border cash movements (in French, from 2020). The Guichet.lu page and the form steps were not readable.'};
d.cash.maldives={h:'What the Maldives regulation says about carrying cash',p:[
"Regulation 2015/R-111 on the cross-border cash declaration amount, in an unofficial English translation on the Maldives Monetary Authority site, says any person who enters or leaves the Maldives carrying cash of US$10,000 or more, or the equivalent in rufiyaa or another currency, must report it to the Maldives Customs Service. The regulation took effect on 22 March 2015 and was amended for the second time on 17 January 2021. It is made under section 24(a) of the Prevention of Money Laundering and Financing of Terrorism Act, Law No. 10/2014.",
"That is all the two-page file says. It does not set out the form, the penalty or how the report is made, and the Customs regulation our card also links did not open for us today, so we cannot re-check what it says about the online application or about declaring before the airline gives a boarding pass. Check Maldives Customs before you travel."],
src:'Source read: Maldives Monetary Authority, Regulation on Cross Border Cash Declaration Amount (unofficial English translation). Form, penalty and the Customs regulation were not re-read.'};
d.cash.lithuania={h:'Lithuania: what we could and could not read',p:[
"Our card says to declare EUR 10,000 or more in cash, or the equivalent, when entering or leaving the EU, and that not declaring or declaring wrongly means penalties. That is the EU rule from the Your Europe page we link below the card.",
"The Lithuanian customs pages we found for travellers are old (a 2018 leaflet and a 2012 guide) or in Russian only, and we could not find the current English cash page, so we do not quote them as today's rules. We also do not use search snippets as sources. This text adds no new facts. Check lrmuitine.lt before you travel."],
src:'No current Lithuanian customs page was read on the day this text was written. The text repeats the card and adds no new facts.'};
d.cash.malta={h:'Malta: what we could and could not read',p:[
"Our card says to declare EUR 10,000 or more in cash, or the equivalent, when entering or leaving the EU, and that not declaring or declaring wrongly means penalties. That is the EU rule from the Your Europe page we link below the card.",
"The Malta Customs page on cash declarations returned an access error both times we tried it today, so we could not read the form, the procedure or the penalty. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check customs.gov.mt before you travel."],
src:'The Malta Customs pages returned access errors on the day this text was written. The text repeats the card and adds no new facts.'};
d.cash.malaysia={h:'Malaysia: what we could and could not read',p:[
"Our card says to declare cash, traveller's cheques and other bearer negotiable instruments worth more than US$10,000 when you arrive or leave, that Malaysian ringgit above that value may not go in or out without written approval from Bank Negara Malaysia, and that not declaring is an offence. It comes from the Customs form we link below the card.",
"The Malaysian customs site refused our connection today, so we could not re-read the form, and we do not use search snippets as sources. This text adds no new facts. Check customs.gov.my or Bank Negara Malaysia before you carry a large amount."],
src:'The Malaysian customs site refused the connection on the day this text was written. The text repeats the card and adds no new facts.'};
d.cash.lebanon={h:'Lebanon: what we could and could not read',p:[
"Our card shows the general rule most countries follow, that large sums must be declared, with a typical limit of US$10,000 or EUR 10,000. We found no Lebanese customs or central bank page that states the traveller limit, so we cannot say what Lebanon's own limit is.",
"We do not use news reports or search snippets as sources. This text adds no new facts. Confirm the current rule with Lebanese Customs or your airline before you carry a large amount."],
src:'No Lebanese official page was found on the day this text was written. The text repeats the card and adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
