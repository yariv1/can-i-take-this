// Non-EU plants and seeds rules, each written from the country's OWN official page(s), read 2026-10-08 (see `src` and `date`).
// We state only what the page says; where a page is silent we say so.
module.exports = {
  "United States": {
    date: "APHIS page last modified 24 February 2026",
    ttl: "United States Plants & Seeds 2026: Tree Seeds Banned",
    desc: "Bringing seeds or plants into the US: declare everything, tree and shrub seeds are banned in baggage, plants in soil are prohibited, up to 12 bare-root plants with a certificate.",
    lead: "APHIS says travellers entering the United States must declare all agricultural or wildlife products, and that seeds from trees and shrubs are prohibited in passenger baggage. Seeds of admissible herbaceous plants for planting may be brought if the conditions are met, including a phytosanitary certificate from the exporting country's plant protection organization and inspection by CBP at the first port of entry. Plants in soil are prohibited; up to 12 bare-root plants may come in, and 13 or more need an APHIS import permit and cannot be hand-carried.",
    rows: [
      ["Declaration", "Travelers must declare all agricultural or wildlife products; declared items are not penalized even if an inspector refuses entry"],
      ["Seeds from trees and shrubs", "Prohibited in passenger baggage"],
      ["Seeds of admissible herbaceous plants", "May be brought if conditions are met: phytosanitary certificate from the National Plant Protection Organization, CBP inspection at the first port of entry"],
      ["Plants in soil", "Prohibited"],
      ["Bare-root plants (no soil, sand, earth or growing media)", "12 or fewer, with a phytosanitary certificate and inspection"],
      ["13 or more plants", "APHIS import permit needed; the plants cannot be hand-carried"],
      ["Fresh cut flowers and greenery", "Must be presented to CBP at the first port of entry"]
    ],
    notes: ["<strong>Permit timing:</strong> permits or other official documents can take up to 30 business days to process.", "<strong>Questions:</strong> APHIS Plant Import Information Line 877-770-5990 or plantproducts.permits@usda.gov."],
    faq: [
      ["Can I bring seeds into the US?", "Seeds from trees and shrubs are prohibited in passenger baggage. Seeds of admissible herbaceous plants for planting may be brought with a phytosanitary certificate and CBP inspection at the first port of entry. Declare all seeds."],
      ["Can I bring plants into the US in my luggage?", "Plants in soil are prohibited. You may bring 12 or fewer bare-root plants with a phytosanitary certificate; 13 or more need an APHIS import permit and cannot be hand-carried."],
      ["Do I have to declare seeds when entering the US?", "Yes: travelers must declare all agricultural or wildlife products. APHIS says declared items are not penalized even if an inspector refuses entry."],
      ["Can I bring cut flowers into the US?", "Fresh cut flowers and greenery must be presented to CBP at the first port of entry, and inspectors can refuse them for pests, disease or other requirements."]
    ],
    src: [["https://www.aphis.usda.gov/traveling-with-ag-products/plants-plant-parts", "APHIS &mdash; International travel: plants, plant parts, cut flowers and seeds"]]
  },
  "United Kingdom": {
    date: "GOV.UK guidance pages (no date shown)",
    ttl: "UK Plants & Seeds 2026: Certificate Rules, 2 kg Plant Inspection",
    desc: "Bringing plants or seeds into Great Britain: phytosanitary certificate for plants for planting and certain seeds, personal-use items must be pest-free, over 2 kg of plants needs inspection.",
    lead: "GOV.UK says that bringing plants and plant-based products from outside the EU, Switzerland and Liechtenstein into Great Britain needs a phytosanitary certificate for all plants for planting, cut flowers and foliage, parts of trees used as decoration and natural wood. From the EU, Switzerland and Liechtenstein a certificate is needed for certain plants and seeds, and items that don't need one must still be free from pests and diseases and for your own use. If you bring in over 2 kg of plants for planting, a plant health inspector must inspect them.",
    rows: [
      ["From outside the EU, Switzerland and Liechtenstein", "Phytosanitary certificate for all plants for planting, parts of trees used as decoration, cut flowers and foliage, and natural (non-manufactured) wood"],
      ["From the EU, Switzerland and Liechtenstein", "Certificate needed for certain plants, seeds, bark and wood"],
      ["Seeds needing a certificate (from the EU, Switzerland and Liechtenstein)", "Include potato, tomato, onion, several beans and peas, sunflower, alfalfa, chilli, chestnut, rapeseed, soybean, and flax or linseed"],
      ["Items that need no certificate", "Must be free from pests and diseases and for your own use"],
      ["Over 2 kg of plants for planting", "A plant health inspector must inspect them when they enter Great Britain"]
    ],
    notes: ["<strong>Seeds from outside the EU:</strong> the GOV.UK page for non-EU travellers does not discuss seeds separately; ask Border Force or the plant health authority.", "<strong>Unsure:</strong> speak to a Border Force officer in the red channel; Border Force can seize items brought in illegally.", "<strong>Northern Ireland</strong> has different rules, covered on its own GOV.UK page."],
    faq: [
      ["Can I bring seeds into the UK?", "From the EU, Switzerland and Liechtenstein, certain seeds (such as tomato, potato, onion, chilli and sunflower) need a phytosanitary certificate, and other seeds must be pest-free and for your own use. GOV.UK's non-EU page does not discuss seeds separately."],
      ["Do I need a phytosanitary certificate to bring plants into Great Britain?", "From outside the EU, Switzerland and Liechtenstein, yes for all plants for planting, cut flowers and foliage, parts of trees used as decoration and natural wood."],
      ["How many plants can I bring into the UK?", "GOV.UK sets one quantity threshold: if you bring in over 2 kg of plants for planting, a plant health inspector must inspect them on entry."],
      ["Can I bring tomato seeds into the UK?", "From the EU, Switzerland and Liechtenstein, tomato seeds are on GOV.UK's list of seeds that need a phytosanitary certificate."]
    ],
    src: [["https://www.gov.uk/bringing-plants-and-wood-into-great-britain/from-outside-the-eu", "GOV.UK &mdash; Bringing plants and wood into Great Britain: from outside the EU"], ["https://www.gov.uk/bringing-plants-and-wood-into-great-britain/from-eu-switzerland-liechtenstein", "GOV.UK &mdash; Bringing plants and wood into Great Britain: from the EU, Switzerland and Liechtenstein"]]
  },
  "Australia": {
    date: "DAFF seeds page, read 8 October 2026",
    ttl: "Australia Plants & Seeds 2026: Certificate and BICON Check",
    desc: "Bringing seeds into Australia: import conditions depend on the species and country, most seeds need a phytosanitary certificate, packed pest-proof and labelled with the botanical name.",
    lead: "Australia's Department of Agriculture says import conditions for seeds depend on the seed species and the country you are importing them from, and some species are not permitted at all. Since 28 April 2022 most seeds must be accompanied by a phytosanitary certificate because of the khapra beetle risk. You need the scientific (botanical) name, must check the conditions in BICON, and seeds that do not meet the import conditions will not be permitted entry.",
    rows: [
      ["Which seeds", "Conditions vary by species and country; some species are not permitted entry because of weed risk"],
      ["Phytosanitary certificate", "Required for most seeds from 28 April 2022 (khapra beetle risk)"],
      ["What you must know", "The scientific name (genus and species) of the seeds"],
      ["Where to check", "BICON (Biosecurity Import Conditions), which tells you whether you need an import permit, treatment, testing or post-entry quarantine"],
      ["Packaging", "Clean, new, pest-proof packaging, clearly labelled with the full botanical name; free of soil, plant material, animal material and other contamination"],
      ["If conditions are not met", "The seeds will not be permitted entry into Australia"]
    ],
    notes: ["<strong>Seeds you did not order:</strong> if you receive a mail article containing seeds you did not order, do not plant them; report it on 1800 798 636 or agriculture.gov.au/report.", "<strong>Questions:</strong> the department asks you to email or call 1800 900 090."],
    faq: [
      ["Can I bring seeds into Australia?", "Only if the species is permitted and you meet the conditions in BICON: most seeds need a phytosanitary certificate, pest-proof packaging and a label with the full botanical name."],
      ["Do I need a phytosanitary certificate to bring seeds into Australia?", "Since 28 April 2022, most seeds must be accompanied by one because of the khapra beetle risk, along with any other conditions for your species."],
      ["How do I check if I can bring a seed into Australia?", "Search the seed's scientific name (genus and species) in BICON, which directs you to the import conditions and says whether you need a permit, treatment, testing or post-entry quarantine."],
      ["What if I get seeds in the mail I did not order?", "The department says not to plant them and to report them immediately on 1800 798 636 or at agriculture.gov.au/report."]
    ],
    src: [["https://www.agriculture.gov.au/biosecurity-trade/import/goods/plant-products/seeds-for-sowing", "Australian Government Department of Agriculture &mdash; Importing seeds for planting"]]
  },
  "Canada": {
    date: "CFIA traveller guide, date modified 8 December 2023",
    ttl: "Canada Plants & Seeds 2026: Declare All Seeds, Invasive Species Check",
    desc: "Bringing seeds or plants into Canada: declare all plant products including seeds, and make sure they are not a regulated pest or invasive species. CFIA's page gives no personal quantity limit.",
    lead: "The Canadian Food Inspection Agency says to declare all plant products, including seeds, when you arrive in Canada, and to make sure plant material is not a regulated pest or invasive species before you pack it. It warns that some seeds or other plant materials brought back from foreign countries may be classified as invasive species in Canada.",
    rows: [
      ["Declaration", "Declare all plant products, including seeds, on arrival"],
      ["Invasive species and regulated pests", "Make sure plant material is not a regulated pest or invasive species; these should not be brought into Canada"],
      ["Seeds from abroad", "Some seeds or plant materials may be classified as invasive species in Canada"],
      ["Permits", "The traveller guide page does not mention permits for plants, seeds, bulbs or soil"],
      ["Quantity limits", "The page does not state a quantity or weight limit for plants or seeds"]
    ],
    notes: ["<strong>Where to look next:</strong> CFIA points readers to its seeds identification resource for more on seeds, and to its Automated Import Reference System (AIRS) for import requirements.", "<strong>Page date:</strong> the CFIA page we read was last modified 8 December 2023; ask CFIA before you bring plants or seeds."],
    faq: [
      ["Can I bring seeds into Canada?", "You must declare them on arrival and make sure they are not a regulated pest or invasive species. CFIA's traveller guide does not state a permit or a quantity limit."],
      ["Do I have to declare seeds when entering Canada?", "Yes. CFIA says to declare all plant products, including seeds, when you arrive in Canada."],
      ["Can seeds from abroad be illegal in Canada?", "CFIA warns that some seeds or plant materials brought back from foreign countries may be classified as invasive species in Canada and should not be brought in."]
    ],
    src: [["https://inspection.canada.ca/en/inspect-and-protect/animal-health/travellers-guide-tips-avoiding-problems", "CFIA &mdash; Travellers' guide: tips for avoiding problems at the border"]]
  },
  "Japan": {
    date: "MAFF Plant Protection Station page (no date shown)",
    ttl: "Japan Plants & Seeds 2026: Certificate and Plant Inspection Required",
    desc: "Bringing plants or seeds into Japan: a phytosanitary certificate from the exporting country and an import inspection are required regardless of quantity; penalties up to 3 years or 3 million yen.",
    lead: "Japan's Plant Protection Station says it is legally required to submit a phytosanitary certificate issued by the government of the exporting country and to take an import inspection for plants, regardless of quantity or intended usage. Seedlings, bulbs, seeds, fruits and vegetables are listed among items needing inspection, and you complete the inspection at the Plant Quarantine Counter before customs. Imports without certificates or inspection can mean up to three years in prison or a fine of up to three million yen.",
    rows: [
      ["What needs inspection", "Seedlings and saplings, bulbs, seeds, fruits and vegetables, among others"],
      ["Phytosanitary certificate", "Legally required: issued by the government of the exporting country, handed to the plant quarantine officer"],
      ["Quantity", "Does not matter: the rule applies regardless of quantity, intended usage and so forth, including small plants and duty-free purchases"],
      ["Where", "Plant Quarantine Counter, after immigration and before customs; plants that pass receive a stamp"],
      ["Prohibited regardless of origin", "Soil, plants with soil attached, quarantine pests harmful to plants, and rice straw or rice husks (excluding those from the Korean Peninsula and Taiwan); certain fruits and vegetables are banned depending on origin"],
      ["Penalties", "Up to three years in prison or a fine of up to three million yen for imports without phytosanitary certificates or inspection"]
    ],
    notes: ["<strong>Without a certificate:</strong> the page says plants without a phytosanitary certificate may be disposed of.", "<strong>Conditions by plant:</strong> the page refers readers to Japan's Database for Importing Conditions for specific plants."],
    faq: [
      ["Can I bring seeds into Japan?", "Seeds need a phytosanitary certificate issued by the government of the exporting country and must pass import inspection at the Plant Quarantine Counter, whatever the quantity."],
      ["Does Japan allow small amounts of plants or seeds without inspection?", "No. The Plant Protection Station says inspection applies regardless of quantity, intended usage and so forth, including small plants and those bought at duty-free shops."],
      ["Where do I get my plants inspected at a Japanese airport?", "At the Plant Quarantine Counter, after immigration and before customs; plants that pass receive a stamp and plants without it are not eligible for customs inspection."],
      ["What is the penalty for bringing plants into Japan without a certificate?", "Up to three years in prison or a fine of up to three million yen, according to the Plant Protection Station."]
    ],
    src: [["https://www.maff.go.jp/pps/j/introduction/english.html", "MAFF Plant Protection Station &mdash; Regulations when bringing plants into Japan"]]
  },
  "Singapore": {
    date: "NParks page last updated 29 August 2025",
    ttl: "Singapore Plants & Seeds 2026: 250 g Seeds Only From West Malaysia",
    desc: "Bringing seeds or plants into Singapore: a phytosanitary certificate and NParks import permit are needed; hand-carry without them only from West Malaysia, up to 250 g of seeds and 3 plants.",
    lead: "NParks says seeds for sowing need a phytosanitary certificate from the authority in the exporting country, and that you must apply for an import permit before bringing plants or plant products into Singapore. The only traveller allowance on its page applies to hand-carrying from West Malaysia: up to 3 non-CITES plants without potting media and up to 250 grams of seeds per person need no certificate or permit. Any excess may be detained by ICA or Singapore Customs.",
    rows: [
      ["Seeds for sowing", "Phytosanitary certificate from the exporting country's authority, then an NParks import permit"],
      ["Traveller allowance", "Only when hand-carrying from West Malaysia: no certificate or permit needed within the limits"],
      ["Allowed from West Malaysia", "Up to 3 non-CITES listed plants without potting media, and up to 250 grams of seeds, per person"],
      ["Above the allowance or from elsewhere", "May be detained by ICA or Singapore Customs if you lack valid documentation"]
    ],
    notes: ["<strong>Seeds are for sowing:</strong> NParks says seeds are for sowing purposes, not for consumption; food rules are separate.", "<strong>Page date:</strong> NParks shows it was last updated on 29 August 2025."],
    faq: [
      ["Can I bring seeds into Singapore?", "Seeds for sowing need a phytosanitary certificate and an NParks import permit. The only exception on NParks' page is hand-carrying up to 250 grams of seeds from West Malaysia."],
      ["How many plants can I bring into Singapore?", "From West Malaysia you may hand-carry up to 3 non-CITES plants without potting media per person without a certificate or permit; anything else needs documentation."],
      ["Do I need an import permit for seeds in Singapore?", "Yes: NParks says you must apply for an import permit before bringing plants or plant products into Singapore, after you have the phytosanitary certificate."],
      ["What happens to seeds without documents in Singapore?", "Excess quantities may be detained by ICA or Singapore Customs if you do not have valid documentation."]
    ],
    src: [["https://www.nparks.gov.sg/services/import-plant-plant-products/check-plant-health-requirements/ornamental-plants-nusery-stock-seeds", "NParks &mdash; Importing ornamental plants, nursery stock and seeds"]]
  },
  "Switzerland": {
    date: "BLW page published 28 May 2025",
    ttl: "Switzerland Plants & Seeds 2026: Non-EU Certificate Needed",
    desc: "Bringing plants or seeds into Switzerland: from non-EU countries a phytosanitary certificate is needed, soil and potato tubers are banned; from the EU no plant passport is needed in personal luggage.",
    lead: "Switzerland's Federal Office for Agriculture says plant material coming from non-EU countries must be accompanied by a phytosanitary certificate, or may be prohibited altogether, and that pineapples, coconuts, durians, bananas and dates may be brought in from any country without one. The import of potato tubers, vines, citrus plants and soil from non-EU countries is prohibited. Plants carried in personal luggage from the EU and Liechtenstein do not require a plant passport.",
    rows: [
      ["From non-EU countries", "Phytosanitary certificate required, or the plant material may be prohibited altogether"],
      ["Exceptions", "Pineapples, coconuts, durians, bananas and dates, from any country"],
      ["Prohibited from non-EU countries", "Potato tubers, vines, citrus plants and soil; soil and organic substrate import is prohibited, with an exemption permit possible in some cases"],
      ["From the EU and Liechtenstein, personal luggage", "No plant passport needed for plants carried in personal luggage; seeds are excluded from the plant passport list"],
      ["Inspection", "The Swiss Federal Plant Protection Service inspects the plants and the certificate; inspections are free for private individuals"],
      ["Moving house from non-EU countries", "No exceptions for personal belongings"]
    ],
    notes: ["<strong>Post and courier:</strong> a plant passport is required for goods sent by post or courier from the EU, and a certificate issued no more than 14 days before handing the goods to the courier for non-EU goods.", "<strong>Page dates:</strong> the BLW page was published 28 May 2025 and its import document was updated 31 March 2026."],
    faq: [
      ["Can I bring seeds into Switzerland?", "From non-EU countries plant material needs a phytosanitary certificate. From the EU and Liechtenstein, seeds are excluded from the plant passport list for personal luggage."],
      ["Do I need a phytosanitary certificate for plants in Switzerland?", "From non-EU countries, yes (or the goods may be prohibited), except pineapples, coconuts, durians, bananas and dates."],
      ["Is soil allowed into Switzerland?", "No: the import of soil and organic substrate from non-EU countries is prohibited, with an exemption permit possible in some cases."],
      ["Do I need a plant passport to bring plants from the EU into Switzerland?", "Not for plants carried in personal luggage, according to the BLW; a plant passport is required for goods sent by post or courier."]
    ],
    src: [["https://www.blw.admin.ch/en/importing-plants", "Swiss Federal Office for Agriculture &mdash; Importing plants"]]
  },
  "Brazil": {
    date: "MAPA page updated 19 March 2026",
    ttl: "Brazil Plants & Seeds 2026: Declare Plant Parts, Certificate",
    desc: "Bringing plants or plant parts into Brazil: fresh or dried plant parts need a phytosanitary certificate and must be declared on the e-DBV and shown to Vigiagro; products are seized and destroyed otherwise.",
    lead: "Brazil's Ministry of Agriculture (MAPA) says fresh or dried plant parts, such as leaves, branches, stems, pollen and flowers, may enter Brazil in a traveller's baggage with a phytosanitary certificate issued by the federal agricultural authority of the country of origin and with no signs of pests. The traveller must declare them on the declaration of goods (e-DBV) and present themselves to Vigiagro through the 'Bens a Declarar' channel; otherwise the products are seized and destroyed.",
    rows: [
      ["Fresh or dried plant parts (leaves, branches, stems, pollen, flowers)", "May enter with a phytosanitary certificate from the federal agricultural authority of the country of origin"],
      ["Condition on the goods", "No signs of pests"],
      ["Declaration", "Declare on the traveller's declaration of goods (e-DBV) and present to Vigiagro (International Agricultural Surveillance) via the 'Bens a Declarar' channel"],
      ["If the rules are not met", "Seizure and destruction of the products; return to origin applies only to road travel and is subject to review by the Brazilian authorities"]
    ],
    notes: ["<strong>Seeds, seedlings and whole plants:</strong> the MAPA page we read covers plant parts only and points to a separate list of permitted and prohibited goods, which we could not open without a login, so we do not state a rule for them.", "<strong>Legal basis:</strong> MAPA Portaria 872/2025 consolidates the rules for the agricultural inspection of travellers' baggage; check the current list on the Vigiagro page before you travel."],
    faq: [
      ["Do I need to declare plants when entering Brazil?", "Yes for goods with entry requirements: MAPA says to declare fresh or dried plant parts on the e-DBV and present them to Vigiagro through the 'Bens a Declarar' channel."],
      ["Can I bring flowers or leaves into Brazil?", "MAPA says fresh or dried plant parts such as leaves, branches, stems, pollen and flowers may enter with a phytosanitary certificate from the country of origin and no signs of pests."],
      ["What happens if I do not declare plant products in Brazil?", "MAPA lists seizure and destruction of the products, and return to origin for road travel, subject to review by the Brazilian authorities."],
      ["Can I bring seeds into Brazil?", "The MAPA page we read does not cover seeds. Check the official Vigiagro list of permitted and prohibited goods before you travel."]
    ],
    src: [["https://www.gov.br/agricultura/pt-br/assuntos/vigilancia-agropecuaria/viajantes-e-bagagens/lista-de-bens-agropecuarios-que-podem-ou-nao-ingressar-no-brasil/vegetais-e-suas-partes-frutas-folhas-flores-graos/partes-de-plantas-frescas-ou-secas", "MAPA &mdash; Fresh or dried plant parts (Vigiagro, travellers and baggage)"]]
  },
  "Mexico": {
    date: "SENASICA notice published 19 December 2014 (the page itself warns that requirements change)",
    ttl: "Mexico Plants & Seeds 2026: Regulated, Soil Prohibited",
    desc: "Bringing seeds or plants into Mexico: SENASICA treats propagative plant material and cut flowers as regulated goods that must meet phytosanitary requirements; soil is prohibited; declare at the entry point.",
    lead: "Mexico's agri-food health authority SENASICA classifies propagative plant material (seeds, bulbs, cuttings) and cut flowers and plants as regulated goods that must meet the requirements in its phytosanitary consultation module, while soil, straw, hay and palm are on its prohibited list. Travellers must find out the requirements before the trip and declare what they carry at the point of entry.",
    rows: [
      ["Seeds, bulbs, cuttings (propagative plant material)", "Regulated: must meet the phytosanitary requirements in SENASICA's consultation module"],
      ["Cut flowers and plants", "Regulated: same module applies"],
      ["Soil, straw, hay, palm", "Prohibited"],
      ["Declaration", "Travellers must inform themselves before the trip and declare the products they carry at the point of entry"],
      ["Inspection", "SENASICA reinforced inspection at ports, airports and borders"]
    ],
    notes: ["<strong>Date of the source:</strong> the SENASICA notice we read is from 2014 and itself says the health status of countries changes constantly, so confirm the current requirements in SENASICA's phytosanitary consultation module before you bring any plant material."],
    faq: [
      ["Can I bring seeds into Mexico?", "SENASICA lists propagative plant material such as seeds, bulbs and cuttings as regulated: it must meet the requirements in its phytosanitary consultation module, and you must declare it at the point of entry."],
      ["Can I bring plants or flowers into Mexico?", "SENASICA lists cut flowers and plants as regulated goods that must meet its phytosanitary requirements."],
      ["Is soil allowed into Mexico?", "No. SENASICA's notice lists soil, straw, hay and palm among prohibited products."],
      ["Do I have to declare plant products in Mexico?", "Yes. SENASICA says travellers should inform themselves before the trip and declare the products they carry at the entry point."]
    ],
    src: [["https://www.gob.mx/senasica/prensa/recomienda-senasica-a-viajeros-informarse-sobre-restricciones-en-el-ingreso-de-productos-agroalimentarios-a-mexico", "SENASICA &mdash; Travellers: restrictions on bringing agri-food products into Mexico"]]
  },
  "Norway": {
    date: "Tolletaten page last updated 27 November 2025",
    ttl: "Norway Plants & Seeds 2026: Up to 50 Seed Packets Without Permit",
    desc: "Bringing plants or seeds into Norway: personal-use limits without a permit are up to 50 packets of garden seed, 25 cut flowers, 3 kg of bulbs and 5 potted plants; potatoes always need a permit.",
    lead: "Norwegian Customs says that for personal use you can bring up to 50 packets of garden seeds, up to 25 cut flowers, up to 3 kilograms of flower bulbs and tubers, up to 5 potted house plants from European countries and up to 10 kilograms of fruit, berries and vegetables without a permit or phytosanitary certificate. Larger amounts require a phytosanitary certificate, and potatoes need a special permit regardless of the quantity.",
    rows: [
      ["Garden seed", "Up to 50 packets"],
      ["Cut flowers", "Up to 25"],
      ["Flower bulbs and tubers", "Up to 3 kilograms"],
      ["Potted plants (house plants) from European countries", "Up to 5"],
      ["Fruit, berries and vegetables", "Up to 10 kilograms"],
      ["Potatoes", "A special permit is needed regardless of the quantity"],
      ["Larger amounts", "Phytosanitary certificate required"]
    ],
    notes: ["<strong>Outside Europe:</strong> the page sets no separate allowance for countries outside Europe; the potted-plant limit applies to European countries.", "<strong>Pesticides</strong> are banned; Mattilsynet gives further details."],
    faq: [
      ["How many seeds can I bring into Norway?", "Up to 50 packets of garden seed for personal use without a permit or phytosanitary certificate, according to Norwegian Customs."],
      ["How many plants can I bring into Norway?", "Up to 5 potted house plants from European countries, 25 cut flowers and 3 kilograms of flower bulbs and tubers for personal use."],
      ["Can I bring potatoes into Norway?", "A special permit is needed to bring potatoes, regardless of the quantity."],
      ["Do I need a phytosanitary certificate in Norway?", "For amounts above the personal-use limits, yes. Larger quantities require a phytosanitary certificate."]
    ],
    src: [["https://www.toll.no/en/goods/plants-and-seeds/regulations-for-fruits-vegetables-plants-flowers-and-seeds", "Tolletaten (Norwegian Customs) &mdash; Regulations for fruits, vegetables, plants, flowers and seeds"]]
  }
};
