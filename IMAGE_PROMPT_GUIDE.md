# Article images: workflow and prompt rules (single source of truth)

Every article has exactly four images. They are made by the user in an image generator from prompts written here. Every rule below came from a real mistake that the user rejected. Read this file before writing any image prompt, and update it when a new rule is learned.

## 0. Core principles (these are the rules; everything below is detail and EXAMPLES)

1. **Different items in every image** unless there is a specific reason for a repeat (for example the article is about one product that must appear). Props, products, bags and food differ in type, shape, colour and brand from image to image.
2. **Different, authentic environments.** Each image has its own real place that looks visibly different from the other three (architecture, floor, ceiling, signage colour and language, light, weather, crowd). Each one must look like that real place, not a generic airport.
3. **Describe every image in full detail and leave nothing to the generator's interpretation.** If a detail is not written, the generator will invent it, usually the same generic way. State: the exact place and the part of it; camera position and distance; every visible person with age, look, clothing, expression and what their hands are doing; every prop with its type, size, colour, brand, label text and condition; every sign with exact text, colour, language and position; floor, ceiling, walls, windows and what is outside; light, weather and time of day; background people and their clothing; what must NOT appear.

The facts and examples in sections 5 and 6 (specific airports, specific baby products) are examples of the level of detail and of the research method. They are not a fixed list. Every new article needs its own research for its own places and products.

## 1. The four images and their files

| Order | File (in `assets/blog/`) | Size | Used for |
|---|---|---|---|
| 1 | `blogHome-<slug>-card.webp` | 800x400 | Blog hub card |
| 2 | `blog-<slug>-hero.webp` | 800x400 | Top of the article |
| 3 | `blog-<slug>-inArticle-1.webp` | 800x320 (height may vary, 320+) | First inline figure |
| 4 | `blog-<slug>-inArticle-2.webp` | 800x320 | Second inline figure |

- Add 4 rows to `BLOG_SYSTEM.md` for each article. Grep the built page for all four filenames before sending prompts.
- Alt texts in `build.js` must describe what the final prompt shows. If a prompt changes, change the alt text and rebuild.

## 2. Prompt output format (exact)

- Always send ALL FOUR prompts in full, in this order: card, hero, inArticle-1, inArticle-2. Also on revisions. Never write "same as before".
- Per prompt: a line `**Filename:** <file>`, then ONE plain paragraph, ending with `Size: WxHpx.` No blockquote, no separate size line.
- Before the prompts, give one line listing the 4 scenes, airports and people, and compare them with the previous article.

## 3. What each image must show

- Each image stages ONE specific claim of its section: props, short exact sign text and numbers ("3.4 OZ / 100 ML MAX", "SOLID FOOD: NO LIMIT").
- It must show the article's real topic in a real, named place. Never generic.
- Visible faces. People look at the camera or interact with an officer or a product.
- Every product has a label. Use plain fictional brands with realistic fine print (nutrition panel, barcode, tiny text). Never a bare plastic shape and never a single-word sticker, because that looks like a stock render.
- Verify what a real product looks like (WebSearch) before prompting it. Do not guess.

## 3b. Interaction and natural actions (HARD, 2026-10-02)

- When two or more people interact, write who talks to whom, where each looks and what each hand does. Example: "the officer faces the woman and talks to her, looking at her, not at the camera; she looks back at him." Without this the generator makes people stare into the camera as if a third person were there (it happened twice and the user fixed it by hand).
- Only people with no counterpart (a lone traveller) may look at the camera, and only if it makes sense.
- No clear zip quart bag by default. Use it only at the security tray or when packing a checked bag.
- Show a natural action with exact hand anatomy (five fingers each hand, which hand holds what, where the product touches the skin). For cream: the nozzle touches the finger pad, never the nail.

## 4. Variety (four layers, all HARD)

1. **Inside one article:** 4 different scenes, 4 different real airports or places, 4 different compositions (queue, gate, counter, hall). Not four crops of one flat-lay.
2. **Across articles:** nothing may resemble the previous article (same airport, same officer, same scene type, same room).
3. **People:** every person gets 4+ distinct traits (age band, ethnicity/skin tone, hair colour and style, build, glasses/facial hair/headwear, clothing colour). Check `reference_image_people_registry.md` in memory and never repeat a person. Append the new people after each article.
4. **Props:** the same item must not appear in several images of one article. Give each image its own prop set with different shapes, colours and brands. Real people carry many kinds of gear (see section 6).

## 5. Airports must look like THAT airport (HARD, 2026-10-01)

The user rejected every earlier airport image: same navy signs, same glass hall, and a gate sign showing the airport's own city.

Before writing any airport prompt:
1. Look at real reference photos. Method: Wikimedia Commons API `list=categorymembers` for `Category:Interior_of_<airport>`, download thumbnails with node into the scratchpad, then Read them. Use WebSearch only for facts the photos do not show.
2. Write the prompt from what is visible: overhead-sign colour, language(s) and pictogram colour; gate-plate style; floor material and pattern; ceiling; columns; art and plants; seating and carpet; airline liveries outside; local weather and light; what people wear.
3. Logic: gate and departure boards show a different city than the airport itself. Text language matches the country (Finnish/Swedish/English at Helsinki, English/French in Canada). Uniforms match the agency (TSA blue shirt, CBSA navy). No invented flight numbers.
4. Never write a generic airport. Name 4 or 5 signature elements and say so.

Verified facts so far (EXAMPLES of the level of detail required; research each new airport the same way):

- **Helsinki-Vantaa T2:** royal-blue overhead signs with white trilingual text, yellow secondary signs, amber-on-dark LED boards, grey-beige checkerboard terrazzo, curved white ceiling with linear lights, indoor Nordic landscape of boulders and trees, Finnair white/navy aircraft with blue tail logo, cold grey light, dark winter coats.
- **Orlando MCO (main terminals):** teal-green carpet with cream-gold leaf motif, slatted wooden benches, potted palms, white steel skylight trusses, blue overhead signs with white text, bright hard sun, shorts and souvenir tees. Terminal C: skylights, terrazzo, artificial palms.
- **Seattle SEA:** glass curtain walls with a white steel grid, wood-slat ceiling, black overhead signs with white text and yellow pictograms, brick-red gate plates (e.g. C17), dark grey seats, hung vintage biplane, Alaska Airlines tails, rain and grey light.
- **Vancouver YVR international arrivals:** aqua-blue patterned carpet, blue stanchion belts, two carved red-cedar Welcome Figures (Susan A. Point), stone-clad columns, wood ceiling, deep-green bilingual English/French overhead signs, Canada flags, white self-serve kiosks, CBSA navy uniforms.
- **Still to research when used:** Madrid-Barajas T4, Denver, LAX T4, Toronto Pearson T1, Heathrow, JFK, CDG, HKG, Schiphol, Dubai, Istanbul, Malé, Mauritius, Sydney, Auckland, Tokyo.

Add each new airport to this list, with the facts seen in the photos.

## 6. Props must look real, not AI

- Realism cues to name in the prompt: scuffed and dented packaging, condensation on cold items, torn corners, fingerprint smudges, crumbs, partly used items, messy bags, uneven phone exposure, slight grain, imperfect framing.
- Repeated items must look different from each other (different shape, colour, brand).
- Example of verified real gear for one topic (baby travel); for any other topic, research the real products the same way: stackable 3-compartment formula dispenser, 8 fl oz ready-to-feed bottles with ring caps, 2 fl oz nursettes, plastic baby bottles with measurement marks, glass 4 oz stage-2 jars with safety-button lids, resealable puff canisters, 8 oz baby-cereal boxes, plastic baby-food tubs, sippy cups, soft cooler bags with gel packs, frozen breast-milk storage bags, formula tubs with scoop, teething rusks, burp cloths, pacifiers on clips.
- Candid, documentary, phone or press look inside the real place. Never a studio, office or tabletop flat-lay.
- Aircraft cabin: the camera is at the front looking toward the rear so passengers face it; blur everything beyond one or two rows.

## 7. Before sending prompts: checklist (includes the three core principles)

0. Core principles: different items per image; different and authentic environments; every detail described, nothing left for the generator to invent.
1. Four scenes, four real airports or places, listed in one line and compared with the previous article.
2. Reference photos viewed for each airport; signage and surroundings match.
3. No sign shows the airport's own city as a destination; languages and uniforms are correct.
4. Each image stages one claim with sign text or numbers from the article.
5. Every person has 4+ distinct traits and is not in the registry.
6. Every product is verified, branded with a fictional brand, and no item repeats across the four images.
7. Filenames grepped in the built page; alt texts match the prompts.
8. Prompts in exact format, all four, in order, size last.
9. Every image with 2+ people states who talks to whom and where each looks (section 3b); no camera-staring pairs.
10. No clear zip quart bag unless it is natural for the scene; hands and product contact described exactly (section 3b).

## 8. After the user adds the images

- The user says "deploy": commit and push immediately (`git add -u`, explicit `git add` of the four images and the article folder, no `git add -A`).
- Append the new people to `reference_image_people_registry.md` and the airports to section 5.
- Update the roadmap handoff file.

## 9. Known open work

- Food list article (`food-you-can-take-on-a-plane-list-2026`, Madrid, Denver, LAX, Toronto) and earlier articles were made before section 5 and section 6, and probably repeat the generic look. Re-research and regenerate if the user asks.

## 10. Rules added 2026-10-03/04 (user feedback, HARD)

- **Naming is never improvised.** Exactly `blogHome-<slug>-card.webp`, `blog-<slug>-hero.webp`, `blog-<slug>-inArticle-1.webp`, `blog-<slug>-inArticle-2.webp`. Four images per article, all four prompts every time (also on revisions), in that order. Slug = the article slug (e.g. `delta-carry-on-size-2026`).
- **Airline articles: the airline's real logo/livery appears in every scene** (counter sign, tail, gate podium, uniform, kiosk). Verify the logo's real colours/shape by search first. Known: Southwest = blue "Southwest" wordmark + tricolour heart (blue/red/yellow diagonal lines), blue-belly 737 with red-yellow tail stripes; American = red/blue eagle "Flight Symbol" + grey "American", silver body with red-blue tail stripes; Delta = red 3D triangle "widget" + navy "DELTA", red widget on tail; JetBlue = navy lowercase "jetBlue", tail patterns in blues; Alaska = white plane, deep-blue "Alaska" wordmark, tail with a face in a fur-trimmed parka; Frontier = green wordmark, green-and-white livery with an animal on the tail.
- **No patterns in casting:** no religious headwear (hijab/kufi/turban/headscarf) image after image (default none), not mostly elderly people: spread ages 20s-50s, at most one person 60+ per article. Tally the people before sending prompts; append them to the people registry (memory `reference_image_people_registry`).
- **Aircraft cabin geometry:** camera at the front looking toward the rear shows seat FRONTS, passenger faces and knees. Never ask for seat-back pockets, tray tables or safety cards in that shot (the generator mixes seat directions). To show seat backs, put the camera at the rear looking forward.
- **Airports:** some airports in the 2026-10-03 prompts were NOT checked against real reference photos (Wikimedia Commons had almost no usable interior photos for BWI/MDW/OAK/HOU/PHL/DFW/MIA/DCA/LGA/DTW/JFK). Verified from photos: BWI gate area, SLC check-in hall. Say so openly in the reply when a prompt rests on text facts only.
- **Preview before deploy:** images exist -> alt texts must match the final prompts -> real localhost link -> wait for "deploy".

## 11. Rules added 2026-10-04 (session 10, user feedback, HARD)
- **Screen/sign geometry:** if a screen or sign must face the camera, put the camera BEHIND or over the shoulder of the person using it (we then see her back/side and the screen). A person cannot look at a laptop and also show us its face; the first TSA "renew on a laptop" image was rejected for this. Prompt: "camera directly behind and slightly to the left of her chair, 1 m back, just above shoulder height; the screen faces her and therefore faces the camera past her shoulder".
- **Revisions:** on a one-image revision the user regenerates only that image, but still send all four prompts in full, in order.
- **TSA/US-program scenes:** PreCheck signage = Homeland Security Blue (#005288) with white text and check mark; Global Entry kiosk details in memory `reference_airport_visual_facts`; frame tight on the equipment when the airport surroundings are not photo-verified, and say so openly.
- **Previous series airports (avoid repeating inside a new article, vary across):** carry-on series used LAX, BOS, ATL, MSP, JFK, BUR, EWR, CLT, ORD, PHX, AUS, SEA, ANC, PDX, SAN, DEN, BNA, DAL, STL, CLE, MCO, LAS; TSA #1 used FLL, PHX, MIA, SJC; TSA #2 used PIT, RDU, Houston, CMH. Next TSA-cluster articles should pick other airports (e.g. IAD arrivals, IAH, SMF, MSY, CVG, IND) and research them.
- **Cost:** the user will not pay for extra image services (no OpenAI API). He generates images himself in ChatGPT and reviews every one before it goes online.
