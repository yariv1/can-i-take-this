const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.cash=d.cash||{};
d.cash.norway={h:'What Norwegian Customs says about carrying currency',p:[
"Norwegian Customs says you must declare currency worth more than NOK 25,000 when you bring it into or out of Norway, and that no tax is charged on it. It counts Norwegian and foreign notes and coins and other means of payment, such as gift cards. You complete the form Declaration of cash and cash equivalents and hand in two copies, at the customs office you leave from, such as at the airport, or in the red channel when you arrive.",
"Not declaring brings a fine of 20% of the whole amount, not only the part above NOK 25,000, so NOK 26,000 unreported means a fine of NOK 5,200. Customs may instead report the case to the police, and if it suspects the money is linked to crime it confiscates all of it while the case is investigated. People who send or receive money through banks or payment companies do not report it, because those institutions report to the Currency Register. The page does not mention EU rules."],
src:'Source read: Toll.no, Currency (English).'};
d.cash.oman={h:'What Oman Customs says about carrying currency',p:[
"Oman's General Directorate of Customs says travellers arriving or leaving with currency, bearer securities, banknotes, or precious metals and gemstones that can be turned into cash, above the threshold of OMR 6,000 or the equivalent, must declare them on the currency declaration form linked from the page. The page words the threshold in two ways, as 6,000 riyals and as 6,000 or more, so a traveller with exactly OMR 6,000 should declare to be safe.",
"The page says a verbal, written or electronic declaration, or simply going through the green or red channel, counts as declaring the goods you carry, but it does not say which channel to use for currency. It lists no fines for undeclared currency. It states only that not declaring cash, traveller's cheques or precious metals is illegal under Article 53 of the Money Laundering and Terrorism Financing Law."],
src:'Source read: Oman Customs, Traveller services. No fine for undeclared currency is stated on the page.'};
d.cash.peru={h:'What SUNAT says about cash in baggage',p:[
"The Peruvian customs authority SUNAT lists cash and negotiable financial instruments, in US dollars or an equivalent currency, as exempt baggage up to and including US$10,000, which means no Sworn Baggage Declaration is needed for that amount. The page does not say in so many words that amounts above US$10,000 must be declared.",
"Its penalty notice does refer to declaring money: if a traveller omits or misstates cash or negotiable instruments, customs temporarily retains the money and applies a penalty of 30% of the undeclared value, under Law No. 28306 and its amendments. For the exact form to use above US$10,000, ask SUNAT before you travel."],
src:'Source read: SUNAT, Equipaje y bienes (viajeros). The form for amounts above US$10,000 is not on that page.'};
d.cash.panama={h:'Panama: what Tourism Panama says about declaring cash',p:[
"We re-read the Tourism Panama travel requirements page. It says you only need to declare at customs if you carry cash, objects or documents worth more than US$10,000, in which case you complete the online traveller's affidavit, get a QR code and show it at customs. If you have nothing to declare, you fill in no forms, including the affidavit.",
"Tourism Panama is the tourism authority, not the customs authority, which is why the card is marked unofficial. The page gives no penalty and does not describe the rules for leaving Panama, so ask Panamanian customs before you carry a large amount."],
src:'Source read: Tourism Panama, Travel requirements. This is an unofficial source for customs rules.'};
d.cash.nigeria={h:'Nigeria: what we could and could not read',p:[
"Our card says a Nigeria Customs Service notice from 2016 asks passengers carrying cash above US$10,000 for information, and calls this the position of the law. We tried to open that notice again today and the site refused the request, so we could not re-read it or check whether the threshold has changed since 2016.",
"We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check the Nigeria Customs Service and the Central Bank of Nigeria before you carry a large amount."],
src:'The Nigeria Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.cash.philippines={h:'Philippines: what we could and could not read',p:[
"Our card says to declare foreign currency above US$10,000, or the equivalent in another currency, on the Customs Baggage Declaration Form. It comes from the foreign currency page of the Bureau of Customs that we link below the card.",
"That page refused our request today, so we could not re-read what it says about the form, Philippine pesos or penalties. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check the Bureau of Customs or Bangko Sentral ng Pilipinas before you travel."],
src:'The Bureau of Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
