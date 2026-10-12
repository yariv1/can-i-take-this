// Chip + card content for the food test group (approved format: user, 2026-10-12). Romania lives in food_topics_romania.js.
// Every line comes from the official pages listed in food_detail*.js (read 12 October 2026). Anything not read is said in the "Not checked" chip.
const T = (id, label, status, verdict, head, scen) => ({ id, label, status, verdict, head, scen });
const S = (when, status, tag, lines) => ({ when, status, tag, lines });
module.exports = {
  "South Korea": { slab: "What are you bringing?", topics: [
    T("meat", "Meat", "warn", "Declare it", "Meat is allowed only if declared and certified, and never from a prohibited region.", [
      S("Beef, pork, lamb, chicken and processed meat", "warn", "Declare it", ["Listed as items to declare: meat and poultry, and processed meat such as ham, sausage, beef jerky, marinated beef and canned meat.", "All animal products need a valid quarantine or heat-treatment certificate issued by the country you travel from.", "With a certificate from an exporting country that meets Korea's hygiene requirements, products can enter if arrival inspection finds no problem."]),
      S("From or through a prohibited region", "stop", "Not allowed", ["Prohibited, including processed meat.", "The list changes when a livestock disease breaks out: check the Animal and Plant Quarantine Agency website.", "Animal quarantine inquiries: +82-32-740-2671."]) ]),
    T("dairy", "Dairy & eggs", "warn", "Declare it", "Milk, cheese, butter and egg products must be declared.", [
      S("Dairy and egg products", "warn", "Declare it", ["Listed as items to declare: milk, cheese, butter, whole eggs, egg whites and powdered eggs.", "Animal products need the same quarantine or heat-treatment certificate.", "Animal bones, antlers, horns and tusks are also on the declare list."]) ]),
    T("fruit", "Fruit & veg", "stop", "Not allowed", "Almost all fresh fruits and vegetables are prohibited.", [
      S("Prohibited", "stop", "Not allowed", ["Almost all fresh fruits and vegetables.", "Unshelled walnuts, unripe beans, unpeeled potatoes and sweet potatoes.", "Planted crops (ginseng, mushrooms and similar)."]) ]),
    T("plants", "Rice, plants & seeds", "warn", "Some banned, some not", "Rice plants and saplings are banned; dried plant products are declared and inspected.", [
      S("Prohibited", "stop", "Not allowed", ["Rice plant, rice husks, rice straw and related products (polished rice grains are the exception).", "Saplings and cuttings, including apple, pear, tangerine and orange trees, grape vines and pine trees.", "Live pests and insects, including pet insects."]),
      S("Dried or fresh agricultural products, nuts, seeds, herbs", "warn", "Declare it", ["Fruits, seeds, kernels, bulbs, tubers, roots, nuts, dried or fresh agricultural products and medicinal herbs must be declared and inspected.", "Plant quarantine inquiries: +82-32-740-2079."]) ]),
    T("packaged", "Packaged food", "warn", "No rule found", "No separate rule for sealed packaged food on the official pages we read.", [
      S("Sealed, commercially packaged food", "warn", "Declare it", ["We do not claim it is allowed.", "If it contains meat, dairy, egg or plant material, treat it as that category and declare it.", "The pages we read describe penalties for carrying prohibited items, and none for declaring."]) ]),
    T("limits", "Limits & fines", "warn", "Small tax-free limits", "Tax-free limits are small, and not declaring costs more.", [
      S("Tax-free amount", "go", "Tax-free", ["Total taxable value of goods up to US$800.", "For agricultural, livestock and fishery products: up to 5 kg of each good and 40 kg in total, and up to 100,000 won of the price of all goods purchased overseas."]),
      S("If you do not declare", "stop", "You pay a fine", ["Goods above the allowance that are not declared: additional tax of 40% on top of the regular tax, 60% if it happens twice or more within 2 years.", "Voluntary declaration earns a 30% reduction of the standard customs duty.", "Prohibited items are confiscated, and you can be punished under Korean customs law."]) ]),
    T("gaps", "Not checked", "warn", "Not checked", "What we could not read.", [
      S("Official pages we could not open", "warn", "Ask first", ["The Animal and Plant Quarantine Agency site itself (it redirected to a Korean home page), so the current prohibited-regions list is not on this page.", "The tourism page we used says it was last updated on 8 September 2024."]) ])
  ] },
  "Norway": { slab: "What are you bringing?", topics: [
    T("meat", "Meat & dairy", "warn", "Depends where you come from", "Where you travel from decides: a 10 kg quota from the EEA, a permit from outside it.", [
      S("From the EEA", "warn", "10 kg quota", ["A quota of 10 kg in total of meat, meat products, cheese and animal feed products per person over 12; it does not apply to dog and cat food.", "Above the quota, the value limit decides how much you can bring without paying Norwegian tax."]),
      S("From Switzerland, Liechtenstein, Iceland, Andorra, San Marino", "go", "No permit", ["Meat, meat products, milk, cheese and other dairy are allowed for private use."]),
      S("From other countries outside the EEA", "stop", "Not allowed", ["All personal consignments of meat and milk and their products are prohibited, to keep animal diseases out of Norway and the EU, unless you have a special permit from the Norwegian Food Safety Authority.", "Animal products that do not conform must be surrendered on arrival; failing to declare them can lead to criminal prosecution."]),
      S("From the Faroe Islands and Greenland", "warn", "Up to 5 kg", ["Meat and milk and their products up to 5 kg in total."]) ]),
    T("fruit", "Fruit & veg", "warn", "Up to 10 kg", "Up to 10 kg of fruit, berries and vegetables; larger amounts need a certificate.", [
      S("Fruit, berries and vegetables", "warn", "Up to 10 kg", ["Up to 10 kilograms.", "Larger amounts need a phytosanitary certificate."]) ]),
    T("potato", "Potatoes", "stop", "Not allowed", "Potatoes need special permission, whatever the quantity.", [
      S("Potatoes", "stop", "Needs a permit", ["It is not permitted to import potatoes to Norway without special permission."]) ]),
    T("fish", "Fish", "warn", "Up to 20 kg", "Fish and certain shellfish: up to 20 kg without veterinary control.", [
      S("Fish and certain shellfish", "warn", "Up to 20 kg", ["Up to 20 kg without submitting it for veterinary control.", "From the Faroe Islands and Greenland there is no restriction."]) ]),
    T("baby", "Baby food", "warn", "Under 2 kg", "Infant milk powder, infant food and special foods: under 2 kg.", [
      S("Infant milk powder, infant food, special foods for medical reasons", "warn", "Under 2 kg", ["The total amount must be under 2 kg, the product must not need refrigeration, and it must be a packaged proprietary brand with unbroken packaging.", "Not allowed if it is infant milk or infant food from China."]) ]),
    T("bread", "Bread & sweets", "go", "Allowed", "Bread, sweets and pasta without meat are exempt from the meat and dairy rules.", [
      S("Exempt products", "go", "Allowed", ["Bread, cakes, biscuits, chocolate and confectionery not mixed or filled with meat product.", "Pasta and noodles without meat filling, food supplements packaged for the final consumer, meat extracts and concentrates, soup stocks and flavourings packaged for the final consumer."]),
      S("Children", "warn", "Age limit", ["Children may only bring soft drinks, chocolate and sugar products duty-free; other products require the traveller to be at least 12."]) ]),
    T("other", "Other animal food", "warn", "Up to 1 kg", "Animal food other than meat and milk: up to 1 kg without control.", [
      S("Food of animal origin other than meat and milk", "warn", "Up to 1 kg", ["You may bring up to 1 kg without submitting it for control."]) ]),
    T("gaps", "Not checked", "warn", "Not checked", "What we could not read.", [
      S("Pages we did not read", "warn", "Ask first", ["Mattilsynet's list of food products with special rules (protective measures against disease, infection and pollution), published in Norwegian."]) ])
  ] },
  "Mauritius": { slab: "What are you bringing?", topics: [
    T("fruit", "Fruit & veg", "warn", "Declare it", "Declare all fresh fruits and vegetables: the Ministry of Agro-Industry and Food Security must clear them.", [
      S("Fresh fruits and vegetables", "warn", "Declare it", ["All must be declared to Customs or to the Ministry's representative.", "Clearance from the Ministry of Agro-Industry and Food Security is required before Customs releases them."]),
      S("Dried fruits and vegetables", "warn", "Declare it", ["Those containing seeds or fruit skin must be declared too."]) ]),
    T("seeds", "Seeds & spices", "warn", "Declare it", "Seeds, even commercially packaged, and spices must be declared.", [
      S("Seeds and spices", "warn", "Declare it", ["Seeds, including commercially packaged seeds, and spices are on the declare list.", "Same Ministry clearance before release."]) ]),
    T("plants", "Plants & coconuts", "warn", "Declare it", "Plants, coconuts and dried plant material must be declared.", [
      S("Plant material", "warn", "Declare it", ["Plants, cuttings, roots and bulbs; live plants, cut foliage and flowers; coconuts and coconut by-products.", "Remedies and medicine containing herbs, seeds, fungi, bark and dried plant material.", "Plants, soil and products containing soil are subject to phytosanitary control."]) ]),
    T("animal", "Meat, dairy & eggs", "warn", "No rule found", "No rule on the customs page we read.", [
      S("Meat, dairy, eggs, honey, packaged food", "warn", "Ask first", ["The Mauritius Revenue Authority page lists agricultural items to declare and says nothing about these foods.", "We do not claim they are allowed: ask the Ministry of Agro-Industry and Food Security, whose Veterinary Services issue permits."]) ]),
    T("crafts", "Souvenirs & gear", "warn", "Declare it", "Goods made of unprocessed animal or plant material, and soil-covered gear, must be declared.", [
      S("Handicrafts and souvenirs", "warn", "Declare it", ["Goods made of unprocessed animal products (rawhide, feathers, teeth, bones); dried flower arrangements and pot pourri; goods containing seed, pinecones, bark, moss, straw or bamboo."]),
      S("Gear and wood", "warn", "Declare it", ["Camping gear, golf clubs, used sports shoes and bicycles that may contain soil; wood with bark."]) ]),
    T("pets", "Pets", "stop", "Not allowed", "Pets cannot come as baggage or in the cabin.", [
      S("Pets", "stop", "Not allowed", ["The import of pets as accompanied baggage or in the cabin is strictly prohibited.", "An import permit from the Veterinary Service is required before importing animals.", "Species protected under CITES, such as caviar, are prohibited except for non-commercial purposes like scientific research."]) ])
  ] },
  "Taiwan": { slab: "What are you bringing?", topics: [
    T("fruit", "Fruit", "stop", "Not allowed", "Fresh fruits are banned.", [
      S("Fresh fruits", "stop", "Not allowed", ["Listed among articles banned from being brought in, unless they comply with quarantine regulations."]) ]),
    T("meat", "Meat", "stop", "Not allowed", "Almost all land-animal meat is not allowed, with heavy fines.", [
      S("Meat products from land animals", "stop", "Not allowed", ["Almost all of them do not meet the processing and quarantine criteria.", "Pork products from African swine fever areas are banned: NTD 200,000 fine for a first violation, whatever your nationality; foreigners who do not pay at the border are repatriated."]),
      S("If you do not declare", "stop", "You pay a fine", ["NTD 10,000 to NTD 1,000,000 under the Statute for Prevention and Control of Infectious Animal Disease.", "Unsure? Go through the red channel or ask the APHIA counter near the baggage carousel."]) ]),
    T("seafood", "Seafood", "go", "Allowed", "Dried or marinated aquatic products are an exception to the ban on animal products.", [
      S("Dried or marinated aquatic products", "go", "Allowed", ["Listed as an exception to the ban on live animals and products thereof.", "Other animal products are allowed only if they comply with quarantine regulations; dogs, cats and rabbits follow the pet quarantine rules."]) ]),
    T("limits", "Rice, peanuts, tea", "warn", "Weight limits", "Agricultural products: 6 kg in total, 1 kg each for some items.", [
      S("General limit", "warn", "6 kg", ["Agricultural products: 6 kg in total.", "1 kg each: milled rice, roasted or prepared peanuts, prepared garlic, dried day-lily flower, dried mushrooms and tea."]),
      S("Products from China", "warn", "Special limits", ["Dried scallops, dried abalone, edible bird's nest and dried shark's fin: 1.2 kg each.", "Canned products: 6 cans each."]),
      S("Above the limit", "stop", "Needs a permit", ["An import permit issued by the International Trade Administration is required.", "For milled rice above the limit, a permit from the Agricultural and Food Agency is also required."]) ]),
    T("tfda", "Large amounts", "warn", "Needs a food inspection", "One kind of food over 6 kg or USD 1,000 needs a TFDA inspection.", [
      S("Food inspection", "warn", "Needs a food inspection", ["Required if one kind of food (excluding tablets or capsules) exceeds 6 kg or its total value is more than USD 1,000.", "Contact the TFDA on +886-2-2787-8000 before customs clearance."]) ]),
    T("plants", "Plants & seeds", "stop", "Not allowed", "Seeds, live plants and fresh plant products are banned unless they meet quarantine rules.", [
      S("Seeds, live plants, fresh plant products", "stop", "Not allowed", ["Allowed only if they comply with the quarantine regulations."]),
      S("Endangered species", "warn", "Needs a permit", ["Items such as dried or sliced American ginseng need a CITES permit or certificate."]) ]),
    T("gaps", "Not checked", "warn", "Not checked", "What we could not read.", [
      S("Pages we did not read", "warn", "Ask first", ["The APHIA reference table of common animals and plants carried by travellers, and rules for specific foods such as cheese, milk powder or instant noodles."]) ])
  ] },
  "Iceland": { slab: "What are you bringing?", topics: [
    T("meat", "Meat & dairy", "warn", "Depends where you come from", "EU/EEA food is allowed if sealed and labelled; from outside the EU/EEA it is prohibited.", [
      S("From the EU/EEA", "go", "Allowed", ["Food containing animal products is permitted for personal consumption, in luggage or by mail.", "It must be in consumer packaging with a list of ingredients. There is no fixed quantity, but customs may comment on an abnormally large amount.", "MAST still advises EU/EEA travellers to avoid bringing meat or milk products, because they can carry animal diseases."]),
      S("From outside the EU/EEA", "stop", "Not allowed", ["Food containing meat, milk or eggs is prohibited, in luggage or by post: including cooked, canned, dried, freeze-dried and dehydrated meat and dairy products."]),
      S("Faroe Islands and Greenland", "warn", "Up to 10 kg", ["Up to 10 kg of meat and dairy products."]),
      S("Infant milk and medical food", "warn", "Up to 2 kg", ["Powdered infant milk, infant formula and medical food (or medical pet food) needed for medical reasons, in the manufacturer's consumer packaging, stored at room temperature, seal unbroken unless in use."]) ]),
    T("eggs", "Eggs & honey", "warn", "Depends where you come from", "Eggs are prohibited from outside the EU/EEA; honey is allowed up to 2 kg.", [
      S("From the EU/EEA", "go", "Allowed", ["Allowed in sealed consumer packaging with a list of ingredients."]),
      S("From outside the EU/EEA", "warn", "Small amount only", ["Food containing eggs is prohibited.", "Other animal products considered food, such as honey, live oysters, mussels and snails: up to 2 kg."]) ]),
    T("fish", "Fish", "warn", "Up to 20 kg", "Fishery products: up to 20 kg or the weight of one fish.", [
      S("Gutted, prepared or processed fishery products", "warn", "Up to 20 kg", ["Combined quantity up to 20 kg or the weight of one fish.", "Also applies to shrimp, lobster, mussels and oysters."]) ]),
    T("plantfood", "Plant-based food", "go", "Allowed", "Non-animal food from third countries is allowed for personal use under 30 kg.", [
      S("Products of non-animal origin", "go", "Allowed", ["Allowed for personal consumption under 30 kg; vegan food for personal consumption is permitted.", "Certain products from certain third countries are under special monitoring as high-risk."]) ]),
    T("plants", "Flowers & plants", "warn", "Small amounts allowed", "A bouquet, some bulbs and a few potted plants are allowed.", [
      S("Without a certificate", "go", "Allowed", ["A bouquet of cut flowers and branches (up to 25 plants).", "Flower bulbs and tubers from Europe in unopened retail packaging (up to 2 kg).", "Individual potted plants from Europe (up to 3 items)."]),
      S("Larger amounts", "warn", "Needs a certificate", ["A phytosanitary certificate from the country of origin and a permit from the Icelandic Food and Veterinary Authority."]) ]),
    T("duty", "Packaging & duty-free", "warn", "Sealed packs only", "Unlabelled food is confiscated; food has a duty-free limit.", [
      S("Packaging", "stop", "Sealed packs only", ["Customs will confiscate unlabelled and unpacked food and feed: products must be in sealed (unopened) packaging with a list of ingredients."]),
      S("Duty-free food in luggage", "go", "Tax-free", ["No import charges on food up to a maximum value of 25,000 ISK and a maximum weight of 10 kilograms, according to island.is.", "Gifts up to a value of 13,500 ISK are exempt (not alcohol or tobacco)."]) ])
  ] },
  "Argentina": { slab: "What are you bringing?", topics: [
    T("packaged", "Packaged food", "go", "Allowed", "Labelled, producer-packaged foods are allowed in personal quantities.", [
      S("Authorised foods", "go", "Allowed", ["They must be packaged and labelled by the producer under official sanitary control, in quantities consistent with personal consumption.", "Canned fish, pork and poultry; fries, fruit in syrup, vegetables in vinegar, canned fruit and vegetables, roasted or salted peanuts and almonds.", "Jam, candied fruit, juices, sugar and oil."]) ]),
    T("meat", "Meat & ham", "stop", "Not allowed", "Meat of any species, sausages and ham are not permitted, with one exception.", [
      S("Meat, charcuterie, sausages, hams", "stop", "Not allowed", ["Meat of any animal species, charcuterie, sausages and hams are listed as not permitted."]),
      S("Serrano and Iberico ham from Spain", "warn", "Only from Spain", ["Boneless, cut or sliced, in the original factory vacuum or controlled-atmosphere pack, labelled and freely sold in Spain (Resolution 655/2017).", "Boneless cut or sliced Iberico loin from Spain: authorisation suspended (Resolution 940/2025)."]) ]),
    T("dairy", "Dairy", "warn", "Only some is allowed", "Only packaged, labelled pasteurised dairy is authorised.", [
      S("Pasteurised, packaged and labelled", "go", "Allowed", ["Pasteurised fluid milk, condensed milk, powdered milk, yogurt, butter, dulce de leche and cheeses made from pasteurised milk."]),
      S("Other dairy", "stop", "Not allowed", ["Dairy products and derivatives, and anything without identification or label, are listed as not permitted: we read the two lists together."]) ]),
    T("plants", "Fruit & plants", "stop", "Not allowed", "Fresh fruit, vegetables, plants and seeds are not permitted.", [
      S("Not allowed", "stop", "Not allowed", ["Fresh fruit and vegetables; garden flowers and plants; fruit, ornamental and forest plants; plant parts such as seeds, roots and buds."]),
      S("Processed products", "go", "Allowed", ["Canned or processed fruit and vegetables in labelled packaging are on the authorised list (see Packaged food)."]) ]),
    T("honey", "Honey & homemade", "stop", "Not allowed", "Honey and homemade food are not permitted.", [
      S("Not allowed", "stop", "Not allowed", ["Honey, homemade products, and foods without identification or label.", "Also not permitted: animal feed, bee products (wax, propolis), veterinary products, insects, bacteria, fungi and reproductive material."]) ]),
    T("rules", "If you break the rules", "warn", "Seized and destroyed", "Non-compliant products are seized and destroyed.", [
      S("What happens", "stop", "Seized", ["SENASA staff can seize products that do not meet the authorisations, draw up a record and destroy them in front of the traveller.", "Entry of unauthorised animal or plant products can bring pests and diseases and harm national production."]),
      S("Not read", "warn", "Ask first", ["Resolution 295/1999, which regulates the entry of food, animals, plants and agricultural products: SENASA tells travellers to consult it."]) ])
  ] },
  "Serbia": { slab: "What are you bringing?", topics: [
    T("food", "Food in luggage", "go", "Allowed", "Reasonable quantities for personal or family use, in the original wrapping.", [
      S("Bringing food in", "go", "Allowed", ["Food may be brought in only in reasonable quantities obviously intended for personal use or the consumption of family members, in the original manufacturer's wrapping."]),
      S("Flying out with Serbian food", "warn", "Tip", ["Serbian Customs advises packing food specialties in your checked luggage."]) ]),
    T("animal", "Meat & dairy", "warn", "Max 1 kg", "Food of animal origin is limited to one kilogram.", [
      S("Meat, cheese and other animal food", "warn", "Max 1 kg", ["If you import food of animal origin, the quantity is limited to a maximum of one kilogram.", "We did not find a product-by-product list: check with Serbian Customs or the Veterinary Directorate, especially from outside the EU."]) ]),
    T("fruit", "Fruit & veg", "warn", "Up to 5 kg", "Up to 5 kg of fresh fruit and vegetables without a certificate.", [
      S("Fresh fruit and vegetables", "warn", "Up to 5 kg", ["Up to 5 kg without a phytosanitary certificate.", "Potato tubers are excluded."]) ]),
    T("plants", "Seeds, bulbs & plants", "warn", "Small amounts allowed", "A few plants and small amounts of seeds and bulbs need no certificate.", [
      S("Without a phytosanitary certificate", "go", "Allowed", ["A single bouquet or wreath of cut flowers and other plant parts.", "Up to 100 grams or a maximum of five packages of original flower and vegetable seeds.", "Up to 3 kg of flower bulbs or tubers.", "Up to 3 house plants and potted plants (bonsai trees excluded)."]),
      S("What we did not read", "warn", "Ask first", ["The customs list continues beyond these items; we read the entries above only."]) ])
  ] }
};
