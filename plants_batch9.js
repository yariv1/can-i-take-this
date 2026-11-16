const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.plants=d.plants||{};
d.plants.mexico={h:'What SENASICA said about plants and seeds in a travellers press release',p:[
"A press release of the Mexican agri-food health service SENASICA dated 19 December 2014 says propagative plant material, including seeds, bulbs and cuttings, as well as cut flowers, live plants, dry grains and cereals and fresh fruit and vegetables, is regulated and must meet SENASICA's published import requirements. Soil, straw, hay and palm are prohibited under any circumstances.",
"The release tells travellers to research the rules before the trip and to declare all the products they carry at ports, airports and border crossings, and it warns that the rules can change at any time. It mentions no penalties. It is more than ten years old and was written for the winter holiday season, so check the current requirement modules on the SENASICA site before you bring any plant or seed."],
src:'Source read: SENASICA, press release of 19 December 2014 (Spanish). It is old and gives no penalties.'};
d.plants.nepal={h:'What the Nepal aeronautical information publication says about plants',p:[
"The aeronautical information publication of the Civil Aviation Authority of Nepal, in its customs section, lists the documents needed to clear regulated goods from the quarantine office before customs. Plants and plant products, biological control agents and means of growing plants such as soil, moss and peat need an entry permit issued beforehand by the Plant Quarantine and Pesticide Management Centre under the Plant Protection Act 2007, together with a phytosanitary certificate from the country of export.",
"It adds that protected plant species listed under CITES need prior permission from the authority concerned, along with a phytosanitary certificate for any plants or plant products regulated under the Plant Protection Act. The publication is written about consignments and is an aviation document, not a page of the plant quarantine centre, so it sets no personal allowance and no penalty. Ask the centre before you bring a plant."],
src:'Source read: Civil Aviation Authority of Nepal, AIP Nepal (customs and quarantine section). It sets no traveller allowance or penalty.'};
d.plants.malaysia={h:'Malaysia: what we could and could not read',p:[
"Our card says seeds, seedlings and cuttings need an import permit from MAQIS and a phytosanitary certificate from the country they come from, and that soil with planting material is prohibited. It comes from a page of the Malaysian Department of Agriculture that we link below the card.",
"That page refused our connection today, so we could not re-read the permit steps or the penalties, and we do not use search snippets as sources. This text adds no new facts. Check MAQIS before you bring any plant, seed or cutting."],
src:'The Malaysian agriculture page refused the connection on the day this text was written. The text repeats the card and adds no new facts.'};
d.plants.maldives={h:'Maldives: what we could and could not read',p:[
"Our card says a phytosanitary certificate plus inspection by the Ministry of Fisheries and Agriculture is required for all plants. It comes from the prohibited and restricted items page of Maldives Customs that we link below the card.",
"That page refused our request today, so we could not re-read the list or the steps, and we do not use search snippets as sources. This text adds no new facts. Check Maldives Customs or the ministry before you bring any plant."],
src:'The Maldives Customs page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.plants.mauritius={h:'Mauritius: what we could and could not read',p:[
"Our card says plants, seeds, cut flowers, fruit and soil all need clearance from the Ministry before Customs lets them through. It comes from the import restrictions page of the Mauritius Revenue Authority that we link below the card.",
"That page returned a not-found error today, so we could not re-read the list, the form or the penalty, and we do not use search snippets as sources. This text adds no new facts. Check the Mauritius Revenue Authority or the agriculture ministry before you bring any plant or seed."],
src:'The MRA page returned an error on the day this text was written. The text repeats the card and adds no new facts.'};
d.plants.luxembourg={h:'Luxembourg: what we could and could not read',p:[
"Our card gives the EU rule that applies in Luxembourg: plants, plant products and cut flowers in personal luggage from outside the EU are prohibited unless a phytosanitary certificate accompanies them, and fruits of pineapple, coconut, durian, banana or date need none.",
"We did not find a readable page from Luxembourg customs or the Luxembourg plant health authority that covers what a traveller may carry, so we state no Luxembourg detail beyond the EU rule. We do not use search snippets as sources. This text adds no new facts. Ask the Luxembourg authorities before you bring any plant or seed."],
src:'No readable Luxembourg authority page on traveller plants was found on the day this text was written. The text repeats the card and adds no new facts.'};
d.plants.malta={h:'Malta: what we could and could not read',p:[
"Our card gives the EU rule that applies in Malta: plants, plant products and cut flowers in personal luggage from outside the EU are prohibited unless a phytosanitary certificate accompanies them, and fruits of pineapple, coconut, durian, banana or date need none.",
"We did not find a readable page from Maltese customs or the Maltese plant health authority that covers what a traveller may carry, so we state no Maltese detail beyond the EU rule. We do not use search snippets as sources. This text adds no new facts. Ask the Maltese authorities before you bring any plant or seed."],
src:'No readable Maltese authority page on traveller plants was found on the day this text was written. The text repeats the card and adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
