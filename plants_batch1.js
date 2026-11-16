const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.plants=d.plants||{};
d.plants.kenya={h:'What the Kenya Revenue Authority says about plants',p:[
"The Kenya Revenue Authority (KRA) passenger terminal clearance guide has a list of restricted items, and \"Plants and Plant material\" is on it. The guide says the list includes, but is not limited to, the items it names, so a plant product that is not spelled out can still be treated as restricted.",
"For restricted goods the guide says authorization from the relevant government institution is needed, through the licence or permit that applies, and the importer must present that permit or licence to the Customs officer before the goods are processed and released. The guide does not name the agency that issues a plant permit, and it does not list plants as prohibited. We could not open a Kenyan plant-health page that covers travellers, so ask the Kenyan authority for the permit rules before you bring any plant, seed or cutting."],
src:'Source read: KRA, passenger terminal clearance in Kenya (restricted items). It does not name the plant-health agency or give a traveller allowance.'};
d.plants.georgia={h:'What the Revenue Service of Georgia says about plants',p:[
"In its customs brochure on exemptions and declaring, the Revenue Service of Georgia lists the goods that need a permit or certificate in addition to the normal customs steps. The list includes plants and animals, their parts or derivatives, next to weapons, narcotics, medicines and antiques.",
"The brochure also says an individual must declare goods when their import is restricted or needs a permit or licence. For a traveller that means a plant, seed or cutting should be declared and the permit or certificate shown, instead of being carried through unannounced. The brochure does not say which office issues a plant permit or what it requires, so we cannot give you those steps."],
src:'Source read: Revenue Service of Georgia, brochure on exemption of goods from duties and declaring. It does not name the issuing office.'};
d.plants.morocco={h:'What Moroccan Customs requires for plant products',p:[
"Moroccan Customs states that admitting plant products requires a phytosanitary certificate issued by the competent services of ONSSA, the national food safety office. A phytosanitary certificate is the plant-health document that the exporting country's authority issues for a plant consignment, so for a traveller it is something to obtain before the trip, not at the airport.",
"The Customs traveller guide that we link also covers alcohol, tobacco and gifts. Today we could not open that PDF, so this page repeats the plant rule exactly as it is stated on our card and adds nothing beyond it. We have no source that gives a quantity allowance, a list of banned plants or an ONSSA contact for travellers."],
src:'Source: Moroccan Customs traveller guide as quoted on our card. The PDF could not be opened on the day this text was written.'};
d.plants.jordan={h:'Jordan: what we could and could not confirm about plants',p:[
"We found no official page from Jordan Customs or the Ministry of Agriculture that sets out plant and seed rules for travellers. The customs trade portal did not load when we tried it, and the pages that did load were secondary sites, which we do not treat as sources.",
"The card above therefore gives the general rule most countries apply: live plants, seeds, soil and cuttings are banned or need a permit, a phytosanitary certificate from your own country is usually required, and soil should never be packed. Treat that as a general rule only. Before bringing any plant material to Jordan, ask Jordan Customs or the Ministry of Agriculture in writing what is allowed."],
src:'No official Jordan source was readable. This section states a general rule and does not claim Jordan-specific facts.'};
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
