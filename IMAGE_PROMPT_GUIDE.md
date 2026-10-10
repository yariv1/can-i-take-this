# Article images: workflow and prompt rules (single source of truth)

Every article has exactly four images. They are made by the user in an image generator from prompts written here. Every rule below came from a real mistake that the user rejected. Read this file before writing any image prompt, and update it when a new rule is learned.

## 0000. RULE ZERO (HARD, NEVER TO BE VIOLATED, user order 2026-10-10 after the personal item article)

For every topic: (1) read AT LEAST THREE sources (official first) and make 100% sure you understand in full what the article must be about, including definitions and what people really carry or do (the personal item article was written without checking that a personal item is any under-seat item, not a backpack, so all four images were wrong); (2) write the article content and pass the QA gate; (3) ONLY THEN write the fully detailed image prompts under all the hard rules below. Never write image prompts in the same step as a first draft of a new topic.

## 000. THREE RULES NEVER TO BE VIOLATED UNDER ANY CIRCUMSTANCES (HARD, user order 2026-10-10, after an hour of rejected Hawaiian images)

These three override everything else in this file. They apply to every image prompt, first draft and every revision, with no exception and no argument. The user may be a he or a she; write people neutrally.

1. **Context confirmation.** After the prompts, write exactly: "I have checked and made sure that the images will be 100% aligned with the article context."
2. **Fully detailed prompt.** Every prompt describes to the finest detail every interaction, move and placement: where each item stands and how big it is (inches or cm AND a body anchor), where each person looks, what each hand does, what each leg and the body do, who talks to whom and what happens next. All of it must make 100% realistic sense. The prompt must prevent unrealistic item sizes, unrealistic people and unrealistic interactions (person to person, person to item, item to item). After the prompts, write exactly: "The prompt is fully detailed and I made sure that no mistakes will happen or any unrealistic looking items, people and interaction between people to people to people to items."
3. **100% realistic scene, no compromise.** The scene must be exactly how it looks in real life. If there is any doubt (heights of counters, belts, signs, where a bag really goes, how a process step really looks), RESEARCH reference photos of the same kind of scene first (Wikimedia Commons, press photos, airline sites) and copy the structure from them before writing. Never write a scene from imagination.

Both confirmation sentences go after the four prompts, every time, and only after the work behind them was really done. The detailed checks are in sections 00, 00b and the check-in geometry rules below.

## 00. MANDATORY CONTEXT GATE (HARD RULE, cannot be skipped, 2026-10-04)

Before ANY image prompt is written or handed off (first draft, revision, any article), run this gate. Skipping it is a rule violation. The user had to ask for it twice (ETIAS, then UK ETA, where the arrivals-hall image first had nothing visible tied to the article).

1. Re-read the BUILT article body, not memory of it.
2. For each of the 4 images, write down: (a) the section it sits in, (b) the exact article sentence it proves, quoted, (c) what in the picture visibly shows that sentence (a sign, note, screen text, number, object), (d) why it differs from the other three.
3. **RISK TEST (added 2026-10-06, Turks and Caicos article, user furious):** ask what the READER needs to understand or fear from this article. If the article is about a risk (crime, arrest, hurricane, outbreak, fine, scam), each picture must show that risk happening or about to happen: the moment of theft, the scam in progress, the arrest-causing object in an officer's hand, the storm arriving. A calm adjacent scene (person reading about it, hotel safe, lobby with a tablet, tourist on a beach with a phone) FAILS even if it sits in the right section. Write one line per image: "the risk it shows: ...". If a picture could illustrate a normal vacation article, redo it.
4. Reject and redo the prompt if: the sentence is not visible in the picture (a generic airport, hug or passport could illustrate any article); the picture holds an element of another topic; the generator cannot render it; two images share a composition type; the sign or screen text is invented marketing wording instead of article facts.
5. Put the article text into the scene itself (sign, note, board, screen).
6. Show the 4 check lines (section, quoted sentence, visible proof, difference) in the reply BEFORE the four prompts, every time. A reply with prompts but without these lines is incomplete.
7. Alt texts must be updated to match the final prompts, then rebuild and run the QA gate.


**PRIMARY-SUBJECT RULE (added 2026-10-06, Caribbean article, user asked three times):** the context gate and the risk test are checked against the article's MAIN CLAIM (the title's promise), not against a side section. The hero and the hub card must stage that main claim (for a "which islands have a warning, compared across governments" article: people comparing the US/UK/Canada levels for an island). Only the two inline images may stage side risks (crime, storm). Before any hand-off, write the one-line main claim, then for each image the page sentence it proves; if the image proves only a side section, it can be inArticle, never hero or card. Do this BEFORE showing prompts, without being asked.


**RISK SCREENS + COMPOSITION (added 2026-10-06, Caribbean article):** (1) A prop screen that shows advisories must look like a real government advisory page: dark header, map with islands/countries shaded red (Level 4), orange (3), yellow (2), Level 1 unshaded, warning-triangle labels such as "LEVEL 4: DO NOT TRAVEL". Never a calm green table or calendar look. (2) Every level, island and colour on a prop screen must match `advisories.json` exactly; after generation re-read each cell (the generator got Aruba and Saint Lucia wrong once). (3) Two-person gaze scenes failed 4 times in a row: when a composition fails twice, change the scene (over-the-shoulder solo shot, or both people looking at the same object) instead of tweaking. (4) Prompts that make the generator refuse (a sleeping person in a swimsuit, "mouth slightly open") must be rewritten with the person dressed and the action unchanged.

## 00b. PRE-SEND SELF-AUDIT + CONFIRMATION SENTENCE (HARD RULE, 2026-10-10, user furious: had to ask every time and get the prompts redone)

The context gate (section 00) is not enough. BEFORE the prompts are sent, audit EACH of the 4 prompts yourself, and fix them first. The user must never have to ask for this and must never receive a prompt that then gets redone. Check every prompt for:

1. **Article alignment:** the quoted article sentence is visibly proven by a sign, screen, number or object in the picture, and the picture holds nothing from another topic.
2. **Weird outcomes:** what could the generator get wrong? Garbled liveries or logos (keep aircraft in soft focus or leave them out), gibberish or extra text (end every prompt with: No other readable text anywhere in the picture), wrong hand anatomy (say which hand holds what, five fingers each), objects that do not exist in the real place (a sizer frame must be open on top and front), odd poses (agent with folded arms reads as hostile), props that imply claims not in the article (stickers, weights, prices), a bag type that does not fit the scene (a carry-on at a checked-bag counter).
3. **Logic and authenticity:** person location fits the activity, signs show only article facts, airport details are verified or openly flagged as unverified, uniforms are not invented as facts.
4. **Variety:** people (4+ traits, differ from the registry), props, places and compositions differ across the four images and from the previous article.
5. **Alt texts and card alt** in the source match the final prompts; rebuilt page passes `audit_article_qa.js`.

6. **SCALE ANCHORS (HARD, 2026-10-10, Hawaiian card image came back as a miniature suitcase three times):** every bag, suitcase, frame or object whose SIZE matters must be given real-world scale in the prompt, never only a type name. (a) State the size in inches AND an anchor to the body: a 22 in carry-on stands upright on the floor and its top reaches just above a standing adult's knee (about 20 in knee height) and about the height of a seated person's hip; a 22 in bag frame comes up to a kneeling adult's waist. (b) State the bag is full-size, standard, the kind that fills an overhead bin, with four spinner wheels, and say it is NOT a small cabin trolley, kids suitcase or toy-size bag. (c) Keep the camera medium-wide and at least 1.5 m from the object so the object and the person are both fully in frame and their relative size is readable; no close-up that makes the bag look small. (d) Place the object on the floor, not on a bench, when its height is the point. (e) After the images come back, if one shows the object at the wrong scale, the fix is anchors (a)-(d), not more adjectives.

7. **SHOWING AN OBJECT TO ANOTHER PERSON (HARD, 2026-10-10, Hawaiian card: the daughter held her phone facing herself, so it did not read as showing it to her father):** when a person shows a screen, document, tag or product to someone, the prompt must state (a) which arm holds it and how far it is extended, (b) which direction the screen or face of the object points (toward the other person, angled so the camera can still read the numbers), (c) where the shower's eyes go (at the other person's face, mouth open mid-sentence) and where the receiver's eyes go (at the object), (d) what the receiver's hands are doing meanwhile. Never write that the shower 'looks at the phone' when the point is to show it. Before sending, replay each interaction mentally: does a stranger understand who is showing what to whom from the picture alone?

8. **PROCESS LOGIC (HARD, 2026-10-10, Hawaiian hero: an agent stood beside a free-standing bag sizer in the middle of a gate area, tied to no process, and the user asked 'what happens if the bag does not fit?'):** every picture with airline or security staff must sit at a REAL step of the passenger journey (check-in counter, bag drop, security checkpoint, gate podium during boarding, immigration desk) and the picture must show WHAT HAPPENS at that step and its outcome (the bag is checked in and tagged, the agent confirms the bag fits, the officer holds the item). Ask: why is this person standing here, what does the passenger do next, and what happens if the answer is no? If a stranger cannot answer from the picture, move the scene to the real process point. A prop (sizer, scale, kiosk) belongs where it really stands: sizers at the check-in counter or the gate podium, scales at the counter.

   **CHECK-IN SCENES (added 2026-10-10 after the second Hawaiian hero was rejected: the sizer stood beside the counter as a stand-alone display):** a check-in picture must show the whole sequence, not one prop. Required elements: a row of counters with overhead monitors, a stanchion queue of passengers with suitcases behind, the agent seated or standing behind the counter with a monitor and printer, passport and boarding pass on the counter, and the passenger's CHECKED bag on the integrated conveyor-belt scale at the side of the counter with a bag tag half-printed or attached. Anything extra (a carry-on sizer, a weight display) must be physically attached to that counter and used in that same moment, by the passenger, with the agent watching or confirming. Reference photos to imitate for structure: ANA and Emirates check-in rows (belt scales beside each desk, monitors above, queue lines). Only the structure is copied, never the airport's look.

   **CHECK-IN GEOMETRY (HARD, 2026-10-10, the Lihue image put a duffel on the desk top):** the check-in DESK is waist-high (about 100 cm) and holds only the monitor, printers, passport and boarding pass; passengers NEVER place suitcases on it. The checked bag stands or lies on a separate conveyor-belt scale beside the desk whose surface is only about 25 cm (knee-high) above the floor, flush with the floor-level frame, as in the ANA and Emirates references; the passenger bends to put the bag on it. A checked bag is full-size: a 28-inch (70 cm) hard-shell or a big duffel 75 cm long, 35 cm thick, so its top reaches the passenger's hip when standing on the belt. Signs stand on the desk, hang from the overhead monitors or stand on the floor, never on the belt.

   **CHECK-IN GEOMETRY (HARD, 2026-10-10, the Lihue image put a duffel on the desk top):** the check-in DESK is waist-high (about 100 cm) and holds only the monitor, printers, passport and boarding pass; passengers NEVER place suitcases on it. The checked bag stands or lies on a separate conveyor-belt scale beside the desk whose surface is only about 25 cm (knee-high) above the floor, flush with the floor-level frame, as in the ANA and Emirates references; the passenger bends to put the bag on it. A checked bag is full-size: a 28-inch (70 cm) hard-shell or a big duffel 75 cm long, 35 cm thick, so its top reaches the passenger's hip when it stands on the belt. Signs stand on the desk, hang from the overhead monitors or stand on the floor, never on the belt.

   **BAG SIZER GEOMETRY (HARD, 2026-10-10, researched from Wikimedia Commons photos: Wizz Air baggage sizer, Zurich airport gate A55 bag check, Sochi baggage sizers; two Hawaiian images came back with a closed cabinet):** a real check-in or gate bag sizer is a floor-standing metal TOWER: a tall narrow sign panel (about 150-170 cm tall, text and pictograms on it) rising from the floor, and at its BASE a low OPEN rail frame (a cage of metal tubes about 55 cm tall, open on the top and on the front, rails visible on the sides, no solid front panel) into which the passenger pushes the bag, so the bag is visible through the rails. The sign is ABOVE the frame, never covering the bag. The bag stands upright on its wheels inside the frame, or a soft bag is pressed down into it from above. Never a closed box, bin or cabinet.

Then, **after the four prompts, write exactly this sentence to the user, every time, no exception:** "I have checked and made sure that the images will be 100% aligned with the article context." Only write it after the audit above was really done; if any item failed, fix the prompt first and never send the sentence over a known problem.

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

- **United carry-on article (2026-10-09), text facts only, no reference photos:** Houston IAH Terminal C gate (polished grey floor, black gate seats, windows with United jets), SFO Terminal 3 gate with easel sign, Washington Dulles main ticketing hall (slanted glass wall, curved concrete ceiling, United kiosks), Newark Terminal C jet bridge (beige corrugated walls, ribbed rubber floor). United logo: blue globe + "UNITED" wordmark; livery white upper, grey belly, blue tail globe.

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

## 12. Rule added 2026-10-04 (session 11, user feedback, HARD RULE)
- **ALWAYS check that every image prompt has real context to the article and stages one distinct scene of the article.** Before sending prompts, write one line per image: "section it illustrates -> the claim it stages -> why it differs from the other three". If two prompts share the same composition (for example two people at a counter or podium, or two officers handing back documents), redo them. The REAL ID article was rejected for exactly this: license office counter, TSA podium and checkpoint receipt were all "two people at a desk". Fixed set: waiting room (apply in person), departures hall holding license + passport (a passport works), parked car checking the star (check your own ID), phone showing the $45 ConfirmID screen on a bench (the fee).
- **Vary the composition type across the four images:** wide room, single person with props, over-the-shoulder device screen, close interior (car, kitchen). At most one image of "person + officer at a podium or counter" per article.
- **The scene must match something the article actually says** (a sign text, number, step or ID from the article). A pretty airport shot that could illustrate any article is not acceptable.

- **Hard test, added 2026-10-04 (ETIAS article, user furious that the check was only a formality):** for every image write the exact article sentence it proves and quote it. Reject the image if (a) it contains an element of a different system or topic (example: Schiphol EES non-EU lane in an ETIAS article), (b) nothing visible stages the sentence (a generic airport + passport could illustrate any article), or (c) the generator cannot render it correctly (a map shading the exact 30 countries). Put visible text from the article (sign, note, board cities) in the scene. Show this check line per image in the reply.

## 13. Rules added 2026-10-06 (Mexico article, user furious, HARD)
- **Scene logic: where the person is must match what they are doing.** A planning/"should I go" scene is set OUTSIDE the destination (home, café, or airport in the traveler's own country, cold weather outside if the destination is a warm one). Never a person already in Mexico checking whether to travel to Mexico. Scenes about being in the destination (driving there, arriving there) are fine. Write the line "why is this person here, doing this" for each image in the gate.
- **A device is exactly one thing:** either a tablet (large, thin black bezels, held or propped, 10-11 inch) or a phone (small, one hand). State which in the prompt and never write "landscape phone", "tablet-like" or anything in between.
- **No country flags in backgrounds** unless the article is about a flag. Prompts say "no flags".
- **Advisory screens = map with a side list** (map of the country shaded by level on the left, list of the states or countries per level on the right), different from the maps in the previous images; after generation re-check every shaded state against the data. Where the generator cannot shade exactly, say so and use a list-only graphic instead.
- **Props must be things that exist in real life:** a poster of state levels pinned in a hostel does not. Real carriers of advisories: a phone, a tablet, a laptop, an airport gate TV with a news graphic, a handwritten note. Check "would this exist?" before writing the prompt.
- Gate check line to add: "logic: who is this, where, why, does the place fit the activity?"

- **CABIN SEAT GEOMETRY (HARD, 2026-10-10, personal item article: a sideways aisle-profile prompt produced seats facing each other like a subway):** every aircraft-cabin prompt must spell out the layout, never leave it to the generator: narrow-body 3-3 rows with ONE central aisle, EVERY seat row faces forward toward the front of the plane, seats are in straight rows one behind the other (never sideways, never facing each other), camera at the REAR of the cabin or in the aisle behind the person looking toward the front at no more than 30 degrees off the aisle axis, so rows recede toward the front and we see seat backs, headrests, latched tray tables, overhead bins, round windows, and the bag at floor level through the gap under the seat ahead. Never a camera at 90 degrees across a seat. Reference look: a plain economy cabin photographed from the rear (blue or grey seat backs with headrest covers, rows receding). The user supplies the reference photos when a cabin keeps failing.
