const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.plants=d.plants||{};
d.plants.iceland={h:'What the Icelandic Food and Veterinary Authority says about plants',p:[
"The Icelandic Food and Veterinary Authority (MAST) says importing plants needs a phytosanitary certificate and must meet regulation no. 189/1990. Travellers between countries may bring a few plants without a certificate, in the same quantities the page allows for parcel post: bouquets of cut flowers and branches up to 25 plants, bulbs, corms and tubers from Europe in unopened commercial packaging up to 2 kg, and up to 3 potted indoor plants from Europe. Someone moving house may bring up to 30 potted indoor plants from a European country, of the kind a typical household has.",
"Wild plants gathered outdoors, woody plants with or without roots, bonsai and potatoes are not covered by these exemptions, so they always need the certificate. The page does not mention penalties or a traveller permit. Check with MAST before you bring anything else, and note that the limits are for plants from Europe."],
src:'Source read: MAST, Import of plants (English). Penalties are not on the page.'};
d.plants.india={h:'What the Indian customs passenger guide says about plants',p:[
"The Central Board of Indirect Taxes and Customs guide for passengers lists plants and their produce, for example fruits and seeds, among restricted goods. It also lists live birds and animals, including pets, as restricted, and the list of prohibited goods includes wildlife products.",
"Restricted means the goods may enter only under conditions, but the guide does not say what those conditions are for plants, who issues a permit, what a traveller may carry or what the penalty is. We did not find a plant quarantine page for travellers. Check Indian customs and the plant quarantine authority before you bring any plant, seed or fruit."],
src:'Source read: CBIC, Customs clearance of passengers at a glance (PDF). It gives no conditions or penalties for plants.'};
d.plants.italy={h:'What the Italian Customs and Monopolies Agency says about plants',p:[
"The Agenzia delle Dogane e dei Monopoli (ADM) traveller card of July 2025 says bringing in even small quantities of plants is not allowed without the phytosanitary certificates required from the country of origin, because of the danger of spreading harmful organisms. For plant foods or plant feed that need no certificate and are carried for personal use, it gives a general net weight limit of 5 kg for fresh products and 2 kg for dried products.",
"The card has a separate section for protected species, with CITES rules for plants such as cactus and orchids. We did not find a rule on seeds in luggage, and the card does not say what the penalty is for plants without a certificate. Check ADM or the regional plant health service before you bring any plant or seed to Italy."],
src:'Source read: ADM, Carta doganale del viaggiatore (July 2025, in Italian). Seeds and penalties for plants are not covered in the part read.'};
d.plants.indonesia={h:'Indonesia: what we could and could not read',p:[
"Our card says every plant or plant product needs a phytosanitary certificate from the country of origin and must be reported to the quarantine officer on arrival, and that seeds and seedlings also need an import permit. It comes from the plant import page of the Indonesian agricultural quarantine agency.",
"That page could not be reached today because its address did not resolve, so we could not re-read the steps or the penalties, and we do not use search snippets as sources. This text adds no new facts. Check the Indonesian Quarantine Agency before you bring any plant or seed."],
src:'The Indonesian quarantine page could not be reached on the day this text was written. The text repeats the card and adds no new facts.'};
d.plants.ireland={h:'Ireland: what we could and could not read',p:[
"Our card gives the EU rule that applies in Ireland: plants, plant products and cut flowers in personal luggage from outside the EU are prohibited unless a phytosanitary certificate accompanies them, and fruits of pineapple, coconut, durian, banana or date need none.",
"The Irish Department of Agriculture page on personal consignments in luggage refused our request today, so we could not read how Ireland applies the rule, what travellers must present on arrival or what the penalty is. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check gov.ie or the Department of Agriculture before you bring any plant or seed."],
src:'The Department of Agriculture page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
d.plants.israel={h:'Israel: what we could and could not read',p:[
"Our card says to get the Ministry of Agriculture's licence before you arrive, because importing plants and seeds without it is an offence. It comes from the tourist customs guide on the Israeli government site that we link below the card.",
"That page refused our request today, so we could not re-read the wording, the licence steps or the penalties. We did not bypass the block and we do not use search snippets as sources. This text adds no new facts. Check the Israeli Ministry of Agriculture plant protection service before you travel."],
src:'The Israeli government page returned an access error on the day this text was written. The text repeats the card and adds no new facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
