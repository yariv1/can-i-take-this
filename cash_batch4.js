const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.cash=d.cash||{};
d.cash['dominican-republic']={h:'What the Dominican customs traveller manual says about cash',p:[
"The Dirección General de Aduanas (DGA) traveller manual says cash of US$10,000 or its equivalent in Dominican pesos or another currency must be declared, and so must bearer securities. The duty applies both when you enter and when you leave the country, and the declaration is made to DGA officials on the form the DGA has enabled for this. The page does not name or link the form.",
"You must also present documents that show the lawful origin of the money. The manual says no tax is charged for carrying money, so the point of the rule is the declaration, not a duty. One FAQ on the page words the threshold as 'more than' US$10,000, so a traveller carrying exactly that amount should declare it to be safe. The page does not list penalties."],
src:'Source read: DGA, Manual del Viajero. Penalties and the form name are not on the page.'};
d.cash.egypt={h:'Egypt: what we could and could not read',p:[
"Our card says you can bring up to 5,000 Egyptian pounds into or out of Egypt, that foreign currency worth more than US$10,000 must be declared on arrival, and that there is no limit on the foreign currency you can bring. That comes from the UK government's Egypt travel advice, an unofficial source for Egypt itself.",
"We searched for a page from the Egyptian Customs Authority or the Central Bank of Egypt that states the traveller currency rule and found none we could read, and we do not use search snippets as sources. This text therefore adds no new facts. Confirm with Egyptian customs or your airline before you carry a large amount."],
src:'No readable Egyptian official page was found on the day this text was written. The text repeats the card and adds no new facts.'};
d.cash.estonia={h:'What the Estonian Tax and Customs Board says about cash',p:[
"The Estonian Tax and Customs Board (EMTA) says anyone entering or leaving the EU with EUR 10,000 or more must declare it. Cash covers banknotes and coins in any currency, including ones no longer in circulation, bearer-negotiable instruments such as traveller's cheques and promissory notes, coins with at least 90% gold and gold nuggets or clumps with at least 99.5% gold. Customs may also check smaller amounts if there is information linking the cash to crime.",
"The preferred route is the e-MTA portal, under Customs, Simplified declarations, Cash declaration, up to three days before you cross. At the border you take the red lane and tell the officer you have filed. The page says the online webform was unavailable when we read it, in which case you contact a customs officer. Use the exchange rate from the day before you submit.",
"Separate rules apply to Russia and Belarus: euro banknotes and other EU-currency banknotes may not be exported there except for personal use by the traveller or accompanying family, with no fixed amount but a duty to justify it. The page does not list penalties for failing to declare."],
src:'Source read: EMTA, Declaration of cash. Penalties for non-declaration are not stated on the page.'};
d.cash.ethiopia={h:'Ethiopia: what we could and could not read',p:[
"Our card says passengers may carry up to 3,000 birr per trip in or out, that foreign currency above US$10,000 (or the equivalent) needs a customs declaration, and that non-residents may hold foreign currency while their visa is valid. It comes from Ethiopian Airlines' notice about the National Bank of Ethiopia directive.",
"We tried to read the National Bank's directive file today and it would not open as readable text, and search results quote different amounts for these limits, so we cannot say which figure is current. We do not use search snippets as sources. This text adds no new facts: check the National Bank of Ethiopia or Ethiopian Customs before you fly."],
src:'The National Bank directive could not be read on the day this text was written. The text repeats the card and adds no new facts.'};
d.cash.fiji={h:'What the Fiji Financial Intelligence Unit says about carrying currency',p:[
"The Fiji Financial Intelligence Unit says anyone travelling into or out of Fiji with FJD 10,000 or more, or the equivalent in foreign currency, must declare it. The rule covers currency and bearer negotiable instruments, whether carried on the person or in their belongings.",
"You declare to Customs officials at the border by completing a Border Currency Reporting Form, which is available at the Customs counters at ports and airports. The page names section 32 of the Financial Transactions Reporting Act as the legal basis. It does not state penalties."],
src:'Source read: Fiji FIU, Currency Declaration Rules for Travelers. Penalties are not stated on the page.'};
d.cash.finland={h:'Finland: what we could and could not read',p:[
"Our card says to declare EUR 10,000 or more in cash, or the equivalent, when entering or leaving the EU, and that not declaring can mean penalties. That is the EU rule from the Your Europe page we link below the card.",
"Finnish Customs (Tulli) refused our request to open its cash page today, so we could not read how Finland applies the rule, which form it uses or what it says about travel inside the EU. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check tulli.fi before you travel."],
src:'The Finnish Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
