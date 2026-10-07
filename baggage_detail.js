// Verified baggage detail for the airline baggage-allowance pages (GSC 2026-10-07: "X baggage allowance" queries sit at positions 45-75 with 0 clicks;
// competitors are 1,000-2,600 word guides, our pages were 76-255 words). Every number below was read on the airline's OWN site on 2026-10-07
// (Wizz Air help centre + fees page, Lufthansa US site, Singapore Airlines, Air China US site + allowance PDF effective 10 July 2026, Air New Zealand).
// An airline without an entry here keeps the short fare-block page. Add an airline only when its own pages were read; never type a number from a third-party blog.
const CHECKED = '7 October 2026';

const DETAIL = {
  'Wizz Air': {
    title: 'Wizz Air Baggage Allowance 2026: Cabin 40x30x20 cm, Fees',
    desc: 'Wizz Air baggage allowance 2026: free bag 40 x 30 x 20 cm and 10 kg, trolley bag 55 x 40 x 23 cm with WIZZ Priority, checked bag 10-32 kg and what each costs.',
    answer: 'Wizz Air gives every passenger one free cabin bag of 40 x 30 x 20 cm and 10 kg that must fit under the seat. A trolley bag of 55 x 40 x 23 cm and 10 kg needs WIZZ Priority. The basic fare has no checked bag; WIZZ Go and WIZZ Plus bundles include one, and you can buy 10, 20, 26 or 32 kg bags.',
    stats: [['40 x 30 x 20 cm', 'free under-seat bag, 10 kg'], ['55 x 40 x 23 cm', 'trolley bag with WIZZ Priority, 10 kg'], ['32 kg', 'heaviest checked bag (149 x 119 x 171 cm)'], ['6 bags', 'most checked bags per passenger']],
    sections: [
      { h: '🎒 Wizz Air cabin bag size and weight', p: 'Wizz Air allows two kinds of bag in the cabin. The size excludes handles and wheels, but wheels may add no more than 5 cm. A bag over these limits is charged extra.',
        table: { head: ['Bag', 'Who gets it', 'Max size', 'Max weight', 'Where it goes'], rows: [
          ['Free carry-on', 'Every passenger', '40 x 30 x 20 cm', '10 kg', 'Under the seat in front of you'],
          ['Trolley bag', 'WIZZ Priority holders only', '55 x 40 x 23 cm', '10 kg', 'Overhead locker'] ] },
        list: ['The free carry-on cannot be checked in for free. Examples Wizz Air gives: laptop bag, purse, briefcase, small backpack.',
          'Free on top of your bag: a coat or blanket, a mobile phone, reading material, duty-free items bought airside after security, a foldable baby stroller and food for an infant (0-2 years), and crutches.',
          'A neck pillow is not a separate item: it must fit inside your cabin bag or it can be charged as an extra item.',
          'Motorised suitcases are not allowed, in the cabin or in the hold.'] },
      { h: '💶 What WIZZ Priority and a cabin bag at the airport cost', p: 'WIZZ Priority is the only way to bring a trolley bag, and it also gives priority check-in and boarding. Wizz Air\'s fee page lists these prices (per flight, per passenger):',
        table: { head: ['Item', 'Online or Call Centre', 'At the airport'], rows: [
          ['WIZZ Priority', '€13.00 - €57.50', '€65.00 - €75.00'],
          ['Cabin baggage fee', '-', '€55.00 - €65.00'] ] } },
      { h: '🧳 Wizz Air checked baggage: weights and prices', p: 'The basic fare includes no checked bag. Both WIZZ Go and WIZZ Plus include one in the flight price. You can add 10, 20, 26 or 32 kg bags, up to a maximum size of 149 x 119 x 171 cm, and each passenger may buy only one 10 kg bag. The price depends on the travel date, how you pay and the bag weight. Wizz Air\'s fee page gives these online ranges (per flight, per passenger, per bag):',
        table: { head: ['Checked bag', 'Low season', 'High season'], rows: [
          ['Up to 10 kg', '€0.00 - €105.50', '€2.00 - €115.00'],
          ['Up to 20 kg', '€0.00 - €112.50', '€2.00 - €122.00'],
          ['Up to 26 kg', '€0.00 - €120.50', '€3.00 - €130.00'],
          ['Up to 32 kg', '€0.00 - €128.50', '€4.00 - €138.00'] ] },
        list: ['High season in 2026 and early 2027: Easter peak 21 March to 20 April 2026, summer peak 12 June to 30 September 2026, Christmas peak 15 December 2026 to 10 January 2027.',
          'Adding a 20 kg bag at the airport costs €70.00 - €80.00 per bag.'] },
      { h: '⚖️ Excess weight, extra bags and sports equipment', p: '',
        list: ['<strong>Up to six checked bags</strong> per passenger, with a fee for each bag. Pay for the first three online; pay for any more at the airport.',
          '<strong>Excess weight at the airport:</strong> a surcharge of €13 per kg applies if your bag weighs between 10 and 20 kg or between 20 and 32 kg (the fee page lists €13.00 - €15.00 per kilo, per item).',
          '<strong>Sports equipment</strong> is €55.00 - €65.00 online and €70.00 at the airport, per bag.',
          '<strong>One pushchair or foldable baby stroller</strong> can be checked in free for each child.',
          '<strong>Card only:</strong> at some airports the baggage fee can only be paid by card, for example Paris Beauvais, Cologne, Milan Malpensa, Pisa and Oslo Sandefjord Torp.',
          '<strong>Do not pack in a checked bag:</strong> cash, jewellery, electronics, documents, keys, liquids, medicine and perishable items. Wizz Air is not liable for loss or damage to them.',
          '<strong>High-value declaration:</strong> you can raise the liability limit for a checked bag up to €2,500 per bag, at the check-in desk, for a fee.'] }
    ],
    faq: [
      ['What is the Wizz Air baggage allowance?', 'One free carry-on of 40 x 30 x 20 cm and 10 kg that fits under the seat. A trolley bag of 55 x 40 x 23 cm and 10 kg needs WIZZ Priority. The basic fare includes no checked bag; WIZZ Go and WIZZ Plus include one.'],
      ['What size is a Wizz Air cabin bag?', 'The free cabin bag is 40 x 30 x 20 cm and the WIZZ Priority trolley bag is 55 x 40 x 23 cm. Handles and wheels are not counted, but wheels may add no more than 5 cm.'],
      ['What is the Wizz Air baggage weight limit?', 'Both cabin bags are limited to 10 kg. Checked bags come in 10, 20, 26 and 32 kg, with a maximum size of 149 x 119 x 171 cm.'],
      ['How much does a Wizz Air checked bag cost?', 'Online prices run from €0.00 to €138.00 per bag depending on the weight (10, 20, 26 or 32 kg), the season and how you pay. A 20 kg bag added at the airport costs €70.00 - €80.00.'],
      ['How much is Wizz Air excess baggage?', 'At the airport a surcharge of €13 per kg applies if a bag weighs between 10 and 20 kg or between 20 and 32 kg, so it is much cheaper to buy the right weight online.'],
      ['Can I bring a trolley bag on Wizz Air without WIZZ Priority?', 'No. The trolley bag is only available with WIZZ Priority. Without it you can bring the free 40 x 30 x 20 cm bag. The fee page lists a cabin baggage fee of €55.00 - €65.00 at the airport.']
    ],
    sources: [['https://www.wizzair.com/en-gb/help-centre/booking-information-and-services/baggage/baggage-allowance/cabin-baggage', 'Wizz Air &mdash; Cabin baggage'], ['https://www.wizzair.com/en-gb/help-centre/booking-information-and-services/baggage/baggage-allowance/checked-in-baggage', 'Wizz Air &mdash; Checked-in baggage'], ['https://www.wizzair.com/en-gb/information-and-services/prices-discounts/all-services-fees', 'Wizz Air &mdash; All services and fees']]
  },

  'Lufthansa': {
    title: 'Lufthansa Baggage Allowance 2026: Carry-On 8 kg, Checked by Class',
    desc: 'Lufthansa baggage allowance 2026: carry-on 55 x 40 x 23 cm and 8 kg, free checked bags by class (23 kg Economy, 32 kg Business), 158 cm limit and gate fees.',
    answer: 'Lufthansa allows a carry-on of 55 x 40 x 23 cm and 8 kg plus a personal item of 40 x 30 x 15 cm, except on short and medium-haul Economy Basic, which includes the personal item only. Free checked bags depend on the class: Economy 1 bag of 23 kg, Business 2 bags of 32 kg, First 3 bags of 32 kg, each up to 158 cm.',
    stats: [['55 x 40 x 23 cm', 'carry-on, 8 kg'], ['23 kg', 'Economy checked bag'], ['32 kg', 'heaviest bag Lufthansa accepts'], ['158 cm', 'width + height + depth per bag']],
    sections: [
      { h: '🎒 Lufthansa carry-on and hand baggage allowance', p: 'Lufthansa\'s carry-on rules depend on the route length and the fare. These are the rules on Lufthansa\'s own carry-on page:',
        table: { head: ['Route and fare', 'Personal item', 'Carry-on bags'], rows: [
          ['Short and medium-haul, Economy Basic', '1 item, 40 x 30 x 15 cm', 'None included'],
          ['Short and medium-haul, Economy Light, Comfort, Comfort Green, Flex', '1 item, 40 x 30 x 15 cm', '1 bag, max 8 kg, 55 x 40 x 23 cm'],
          ['Short and medium-haul, Business', '1 item, 40 x 30 x 15 cm', '2 bags, max 8 kg each, 55 x 40 x 23 cm'],
          ['Long-haul Economy and Premium Economy', '1 item, 40 x 30 x 15 cm', '1 bag, max 8 kg, 55 x 40 x 23 cm'],
          ['Long-haul Business and First', '1 item, 40 x 30 x 15 cm', '2 bags, max 8 kg each, 55 x 40 x 23 cm'] ] },
        list: ['Flights from the USA: under TSA rules you can take only one carry-on and one personal item through security, whatever your class or status. Extra bags must be checked before the checkpoint.',
          'Miles & More members with HON Circle or Senator status, and Star Alliance Gold members, may take one carry-on in addition to the personal item on short and medium-haul Economy Basic.',
          '<strong>Gate fee:</strong> a bag that breaks the rules is taken at check-in or the gate and flown in the hold at your cost, by card only, for EUR 60 / CHF 60 / USD 75 up to EUR 110 / CHF 110 / USD 125 depending on the route. Any bag brought to the gate counts as carry-on whatever your checked allowance.',
          'On flights with high occupancy, compliant carry-on may also be moved to the hold; Lufthansa emails you before the flight and you can drop it off free at check-in.'] },
      { h: '🧳 Lufthansa free checked baggage by class', p: 'Lufthansa states the basic rules for free checked baggage on all flights it operates, per bag and each way. The allowance on your own ticket is the one that counts: it is shown on your ticket or passenger receipt.',
        table: { head: ['Class', 'General', 'Frequent Travellers', 'Senators, HON Circle, Star Alliance Gold'], rows: [
          ['Economy', '1 bag, up to 23 kg', '2 bags, up to 23 kg each', '2 bags, up to 23 kg each'],
          ['Business', '2 bags, up to 32 kg each', '2 bags, up to 32 kg each', '3 bags, up to 32 kg each'],
          ['First', '3 bags, up to 32 kg each', '3 bags, up to 32 kg each', '4 bags, up to 32 kg each'] ] },
        list: ['<strong>Size:</strong> the maximum per bag, in any class, is 158 cm (62 inches) width + height + depth.',
          '<strong>Weight:</strong> 32 kg is the most Lufthansa accepts for any bag. Anything heavier can go as air cargo.',
          '<strong>Economy Basic and Light on Europe flights:</strong> Lufthansa\'s Europe fares page lists the checked bag as a paid extra on these fares, so check the fare before you book.',
          '<strong>Extra ski bag:</strong> Lufthansa lists one extra ski bag on all routes except to and from the USA, Mexico and Central America, with a golf bag for Senators, HON Circle and Star Alliance Gold members.',
          '<strong>Infants under two</strong> get one bag up to 23 kg and one folding pushchair.'] },
      { h: '💶 Excess baggage and flights to or from the USA', p: '',
        list: ['Bags that are heavier than the free weight (up to the 32 kg maximum), larger than 158 cm, or additional to your free allowance are carried as excess baggage for a flat fee per bag each way. The amount depends on the route, so check Lufthansa\'s excess baggage page for yours; in some countries a service charge is added.',
          '<strong>USA rule:</strong> for flights to, from or across the USA, the baggage rules of the first airline on the ticket usually apply to the whole journey, including the free allowance, the size and weight of your bags and the hand baggage rules. That airline can pass the decision to another airline on the itinerary, so Lufthansa cannot guarantee that its rules apply to a Lufthansa-issued ticket.',
          '<strong>Special rules for Economy:</strong> on some routes and products Economy passengers have a different number of free bags or weight, so always read the allowance on your ticket.'] }
    ],
    faq: [
      ['What is the Lufthansa baggage allowance on international flights?', 'In Economy, 1 checked bag up to 23 kg; in Business, 2 bags up to 32 kg each; in First, 3 bags up to 32 kg each. The maximum size per bag is 158 cm (width + height + depth). The allowance on your ticket is the one that applies.'],
      ['What is the Lufthansa carry-on size and weight?', 'A carry-on of 55 x 40 x 23 cm and up to 8 kg, plus a personal item of 40 x 30 x 15 cm. Business and First get two carry-on bags. Short and medium-haul Economy Basic includes the personal item only.'],
      ['What is the Lufthansa baggage weight limit?', 'Economy bags are free up to 23 kg and Business and First bags up to 32 kg. Lufthansa accepts no bag over 32 kg, whatever the class.'],
      ['How much is Lufthansa excess baggage?', 'A flat fee per bag each way that depends on the route. A carry-on that does not comply and is taken at the gate costs EUR 60 / CHF 60 / USD 75 up to EUR 110 / CHF 110 / USD 125, and can only be paid by card.'],
      ['Can I take a carry-on bag on Lufthansa Economy Basic?', 'On short and medium-haul flights, Economy Basic includes one personal item of 40 x 30 x 15 cm and no carry-on bag. On long-haul flights the Economy carry-on is included.'],
      ['Which airline\'s baggage rules apply on a flight from the USA?', 'The rules of the airline listed first on the ticket usually apply to the whole journey, but that airline can pass the decision to another airline on the itinerary. Check your ticket and e-mail confirmation.']
    ],
    sources: [['https://www.lufthansa.com/us/en/carry-on-baggage', 'Lufthansa &mdash; Carry-on baggage'], ['https://www.lufthansa.com/us/en/baggage-and-other-fees', 'Lufthansa &mdash; Baggage and other fees'], ['https://www.lufthansa.com/co/en/excess-baggage', 'Lufthansa &mdash; Excess baggage']]
  },

  'Singapore Airlines': {
    title: 'Singapore Airlines Baggage Allowance 2026: 7 kg Cabin, 25-50 kg Checked',
    desc: 'Singapore Airlines baggage allowance 2026: cabin bag 7 kg, checked 25 kg Lite and Value, 30 kg Standard and Flexi, 2 x 23 kg to the USA and Canada.',
    answer: 'Singapore Airlines allows one cabin bag of up to 7 kg (115 cm total) in Economy and Premium Economy, and two in Business and First. Checked baggage is by weight on most routes: 25 kg Lite and Value, 30 kg Standard and Flexi, 35 kg Premium Economy, 40 kg Business, 50 kg Suites and First. Flights to and from the USA and Canada use pieces: 2 bags of 23 kg in Economy.',
    stats: [['7 kg', 'cabin bag, 115 cm total'], ['25 / 30 kg', 'Economy Lite and Value / Standard and Flexi'], ['2 x 23 kg', 'Economy to and from the USA and Canada'], ['32 kg', 'most any single checked bag may weigh']],
    sections: [
      { h: '🎒 Singapore Airlines cabin baggage allowance', p: 'Singapore Airlines lets you carry up to two bags into the cabin depending on your class. Each piece must also be stowable under the seat or in the overhead bin.',
        table: { head: ['Class', 'Allowance', 'Limits'], rows: [
          ['Suites, First, Business', '2 pieces', 'Up to 7 kg each; length + width + height of each piece up to 115 cm'],
          ['Premium Economy, Economy', '1 piece', 'Up to 7 kg; length + width + height up to 115 cm'] ] },
        list: ['<strong>One extra item is free</strong> on top of your cabin bag: a ladies\' handbag, camera or camera bag, document bag, overcoat, umbrella, laptop in a bag (these bags up to 40 x 30 x 10 cm), infant amenities and food, a walking stick or crutches, or a small amount of duty-free goods.',
          'Cabin bags that break the limits are collected and stored in the cargo compartment, and additional baggage charges apply.'] },
      { h: '🧳 Singapore Airlines checked baggage by weight (most routes)', p: 'On all flights except to and from Canada and the USA you can check several bags as long as the combined weight is within your allowance. The allowance depends on the fare and its booking class:',
        table: { head: ['Class and fare (booking class)', 'Allowance', 'PPS Club members', 'KrisFlyer Elite Gold / Star Alliance Gold', 'KrisFlyer Elite Silver'], rows: [
          ['Suites and First', '50 kg', '+50 kg (total 100 kg)', '+20 kg (total 70 kg)', '+10 kg (total 60 kg)'],
          ['Business', '40 kg', '+40 kg (total 80 kg)', '+20 kg (total 60 kg)', '+10 kg (total 50 kg)'],
          ['Premium Economy', '35 kg', '+35 kg (total 70 kg)', '+20 kg (total 55 kg)', '+10 kg (total 45 kg)'],
          ['Economy Flexi (Y, B, E)', '30 kg', '+30 kg (total 60 kg)', '+20 kg (total 50 kg)', '+10 kg (total 40 kg)'],
          ['Economy Standard (M, H, W)', '30 kg', '+30 kg (total 60 kg)', '+20 kg (total 50 kg)', '+10 kg (total 40 kg)'],
          ['Economy Value (Q, N)', '25 kg', '+25 kg (total 50 kg)', '+20 kg (total 45 kg)', '+10 kg (total 35 kg)'],
          ['Economy Lite (V, K)', '25 kg', '+25 kg (total 50 kg)', '+20 kg (total 45 kg)', '+10 kg (total 35 kg)'] ] },
        list: ['An infant is entitled to up to 10 kg of checked baggage.'] },
      { h: '🇺🇸 Flights to and from the USA and Canada: pieces, not kilos', p: 'For flights to and from Canada and the USA only, Singapore Airlines counts pieces:',
        table: { head: ['Class', 'Allowance', 'PPS Club members', 'KrisFlyer Elite Gold / Star Alliance Gold / KrisFlyer Elite Silver'], rows: [
          ['Suites, First, Business', '2 pieces, up to 32 kg each', '2 additional pieces, up to 32 kg each', '1 additional piece, up to 32 kg'],
          ['Premium Economy, Economy', '2 pieces, up to 23 kg each', '2 additional pieces, up to 23 kg each', '1 additional piece, up to 23 kg'] ] },
        list: ['The length + width + height of each checked bag must not exceed 158 cm (62 inches).',
          'An infant is entitled to one piece of up to 23 kg or 32 kg depending on the class, with a stroller or carry-cot or car seat.',
          'If your trip starts or ends in the USA or Canada, the baggage policy of the first carrier on your ticket applies; Singapore Airlines sets out which rules apply in each case on its baggage page.'] },
      { h: '⚖️ Weight limit, size limit and other airlines', p: '',
        list: ['<strong>Weight:</strong> no single checked bag can exceed 32 kg, in line with local occupational health and safety rules. A bag over 32 kg may have to be repacked.',
          '<strong>Bulky items at Singapore Changi:</strong> up to 200 cm long x 75 cm wide x 80 cm high.',
          '<strong>Several airlines on one ticket:</strong> for itineraries on a single ticket, the allowance of the most significant marketing carrier applies, and for flights to or from Canada or the USA the first marketing carrier decides. On separate tickets, the allowance printed on each ticket applies to that ticket.'] }
    ],
    faq: [
      ['What is the Singapore Airlines baggage allowance in Economy?', 'Checked baggage is 25 kg on Lite and Value fares and 30 kg on Standard and Flexi fares on most routes, and 2 bags of 23 kg to and from the USA and Canada. The cabin allowance is one bag of up to 7 kg.'],
      ['What is the Singapore Airlines cabin baggage size?', 'The length + width + height of each cabin bag must not exceed 115 cm, and each piece can weigh up to 7 kg. Economy and Premium Economy get one piece; Business, First and Suites get two. A personal item of up to 40 x 30 x 10 cm is allowed on top.'],
      ['What is the Singapore Airlines baggage allowance in Business Class?', 'On most routes 40 kg of checked baggage in total, and two cabin bags of up to 7 kg each. To and from the USA and Canada it is 2 pieces of up to 32 kg each.'],
      ['What is the Singapore Airlines baggage weight limit per bag?', 'No single checked bag may exceed 32 kg. Within your total allowance you can check several bags on routes outside the USA and Canada.'],
      ['What is the Singapore Airlines baggage size limit?', 'On flights to and from the USA and Canada, each checked bag can be up to 158 cm in length + width + height. A bulky item checked at Singapore Changi can be up to 200 x 75 x 80 cm.'],
      ['How much baggage do PPS Club and KrisFlyer members get?', 'An additional allowance on top of the fare, for example +30 kg for PPS Club members in Economy Standard and Flexi, and +20 kg for KrisFlyer Elite Gold and Star Alliance Gold members. The table above lists every class.']
    ],
    sources: [['https://www.singaporeair.com/en_UK/sg/travel-info/baggage/checked-baggage/', 'Singapore Airlines &mdash; Checked baggage'], ['https://www.singaporeair.com/en_UK/sg/travel-info/baggage/cabin-baggage/', 'Singapore Airlines &mdash; Cabin baggage']]
  },

  'Air China': {
    title: 'Air China Baggage Allowance 2026: Carry-On 5 kg, Checked by Route',
    desc: 'Air China baggage allowance 2026: carry-on 5 kg Economy, 8 kg Business, checked 23 kg pieces by route and fare, 20 kg on domestic China flights.',
    answer: 'Air China allows one carry-on of up to 5 kg in Economy and two of up to 8 kg in First and Business, each up to 55 x 40 x 20 cm, plus one personal item. Checked baggage on international flights is by pieces and depends on the route and fare: Economy is 1 or 2 pieces of 23 kg, Business and First 2 pieces of 32 kg. Domestic China flights are by weight: 20 kg Economy.',
    stats: [['5 kg', 'Economy carry-on, 55 x 40 x 20 cm'], ['2 x 23 kg', 'Economy to and from the Americas, most fares'], ['2 x 32 kg', 'Business and First, international'], ['20 / 30 / 40 kg', 'Economy / Business / First, domestic China']],
    sections: [
      { h: '🎒 Air China carry-on baggage allowance', p: 'Air China\'s carry-on rules by class, each piece no larger than 55 cm long, 40 cm wide and 20 cm high:',
        table: { head: ['Class', 'Pieces', 'Max weight per piece'], rows: [
          ['First', '2 pieces', '8 kg (17 lb)'], ['Business', '2 pieces', '8 kg (17 lb)'], ['Economy', '1 piece', '5 kg (11 lb)'], ['Super-Economy', '1 piece', '5 kg (11 lb)'] ] },
        list: ['You can also carry one personal item that fits under the seat, such as a handbag, briefcase, laptop bag or camera bag.',
          'Free in addition: infant food and diapers, a foldable stroller of up to 55 x 40 x 20 cm, and mobility aids such as crutches or a folding manual wheelchair.',
          'A bag that exceeds the carry-on limits, or cannot be stowed, is transferred to checked baggage at boarding.'] },
      { h: '🧳 Air China checked baggage allowance by route (piece concept)', p: 'Air China publishes free allowances by IATA zone and fare brand. This table is for routes between mainland China and the regions below, and follows Air China\'s allowance sheet effective 10 July 2026. Each piece is up to 23 kg in Economy and Premium Economy and 32 kg in First and Business.',
        table: { head: ['Route from or to mainland China', 'First / Business', 'Premium Economy', 'Economy (Latitude / Selected / Flex / Standard)'], rows: [
          ['Zone 1: Canada, United States, Brazil, Cuba and others', '2 pieces, 32 kg', '2 pieces (Standard: 1)', '2 / 2 / 2 / 1 pieces'],
          ['Zone 2.1: Turkey, Georgia', '2 pieces, 32 kg', '2 pieces (Standard: 1)', '2 / 2 / 1 / 1 pieces'],
          ['Zone 2.2: Germany, United Kingdom, France, Italy, Spain and the rest of western and central Europe listed by Air China', '2 pieces, 32 kg', '2 pieces', '1 piece on every Economy brand'],
          ['Zone 2.3: Sweden, Denmark, Russia (Moscow), South Africa, United Arab Emirates, Saudi Arabia and others', '2 pieces, 32 kg', '2 pieces (Standard: 1)', '2 / 2 / 2 / 1 pieces'],
          ['Zone 3.1: Hong Kong SAR, Pakistan, Australia, New Zealand, Japan', '2 pieces, 32 kg', '2 pieces (Standard: 1)', '2 / 2 / 2 / 1 pieces'],
          ['Zone 3.2: Macao SAR, Taiwan region, Korea, India, Thailand, Singapore, Malaysia, Indonesia, Philippines, Vietnam and others', '2 pieces, 32 kg', '2 pieces (Standard: 1)', '2 / 2 / 1 / 1 pieces'] ] },
        list: ['An infant passenger gets 1 piece of 23 kg.',
          'Routes that do not touch mainland China, and connections through mainland China, are in a second table of the same Air China document, so read the sheet for your route: it follows Air China\'s published allowance document for "Piece concept routes".',
          'The allowance shown at booking and on your ticket is the one that applies, including for itineraries with other airlines.'] },
      { h: '🇨🇳 Domestic China flights: weight concept', p: '',
        table: { head: ['Class', 'Free checked baggage', 'Infant'], rows: [['First', '40 kg (88 lb)', '10 kg (22 lb) plus a stroller or cradle'], ['Business', '30 kg (66 lb)', '10 kg plus a stroller or cradle'], ['Economy', '20 kg (44 lb)', '10 kg plus a stroller or cradle']] },
        list: ['On domestic flights each free piece can be no more than 100 cm long, 60 cm wide and 40 cm high.',
          'Air China Platinum members get one extra piece up to 30 kg and PhoenixMiles Gold, Silver and Star Alliance Gold members one extra piece up to 20 kg on these flights.'] },
      { h: '⚖️ Weight, size and the number of bags', p: '',
        list: ['<strong>Weight:</strong> each checked piece must weigh at least 2 kg and no more than 32 kg (70 lb).',
          '<strong>Size:</strong> length + width + height, including wheels and handles, of at least 60 cm and at most 203 cm (80 in); the free piece on international and regional flights may not exceed 158 cm (62 in). Bags over the limits pay excess baggage fees.',
          '<strong>Number of bags:</strong> there is no maximum number of checked pieces, but the seventh and further pieces must be arranged with an Air China ticket office in advance and are checked in only if there is capacity, and Air China does not promise they arrive on the same aircraft.',
          '<strong>PhoenixMiles members:</strong> Platinum and Gold and Silver card holders can check one extra piece free: up to 32 kg in First or Business and up to 23 kg in Premium Economy or Economy. Star Alliance Gold members can check one extra piece of up to 23 kg in any class.',
          '<strong>Extra baggage</strong> can be bought in advance on Air China-operated flights ticketed with a number starting 999, in 5, 10, 15 or 20 kg amounts.'] }
    ],
    faq: [
      ['What is the Air China baggage allowance?', 'Carry-on: 1 piece of up to 5 kg in Economy and 2 pieces of up to 8 kg in First and Business, each 55 x 40 x 20 cm. Checked baggage on international routes is 1 or 2 pieces of 23 kg in Economy depending on the route and fare, and 2 pieces of 32 kg in Business and First. Check the table above for your route.'],
      ['What is the Air China carry-on size and weight?', 'Each carry-on piece can be up to 55 x 40 x 20 cm. Economy allows one piece of 5 kg; First and Business allow two pieces of 8 kg each. A personal item is allowed on top.'],
      ['What is the Air China checked baggage allowance in Economy to the USA?', 'On routes between mainland China and the United States or Canada, Economy Latitude, Selected and Flex fares include 2 pieces of 23 kg each and Standard includes 1 piece of 23 kg, according to Air China\'s allowance sheet effective 10 July 2026.'],
      ['What is the Air China baggage weight limit?', 'Each checked piece can weigh at most 32 kg (70 lb) and at least 2 kg. Free pieces are 23 kg in Economy and Premium Economy and 32 kg in First and Business on international flights.'],
      ['What is the Air China baggage allowance on domestic flights in China?', 'By weight: 20 kg in Economy, 30 kg in Business and 40 kg in First. Each free piece can be up to 100 x 60 x 40 cm.'],
      ['Is Air China baggage allowance different for Economy Standard?', 'On many routes Standard Economy includes 1 piece of 23 kg where Latitude, Selected and Flex include 2. The table above shows each route group.']
    ],
    sources: [['https://www.airchina.us/US/GB/info/carry-on-baggage/', 'Air China &mdash; Carry-on baggage'], ['https://www.airchina.us/US/GB/info/checked-baggage/', 'Air China &mdash; Checked baggage'], ['https://www.airchina.us/go/2026.8-4/Baggage/Ordinary_Checked_Baggage/Free%20Baggage-Piece-20260710EN.pdf', 'Air China &mdash; Free baggage allowance, piece concept routes (effective 10 July 2026)'], ['https://www.airchina.us/US/GB/info/checked-baggage/domestic.html', 'Air China &mdash; Free baggage allowance on domestic routes']]
  },

  'Air New Zealand': {
    title: 'Air New Zealand Baggage Allowance 2026: Carry-On 7 kg, Checked 23 kg',
    desc: 'Air New Zealand baggage allowance 2026: carry-on 55 x 40 x 23 cm and 7 kg, checked bags by fare (1 Economy, 2 Premium Economy, 3 Business), 23 kg and 158 cm.',
    answer: 'Air New Zealand allows one carry-on of up to 7 kg (55 x 40 x 23 cm) plus one small personal item in Economy, even on Seat fares. Checked bags are up to 23 kg and 158 cm: international Economy fares include 1 bag, Premium Economy 2 and Business Premier 3. Seat-only fares include no checked bag. You can add prepaid extra bags up to a total of three.',
    stats: [['55 x 40 x 23 cm', 'carry-on size, 7 kg in Economy'], ['23 kg', 'checked bag before fees'], ['158 cm', 'length + width + height per checked bag'], ['3 bags', 'most checked bags per passenger']],
    sections: [
      { h: '🎒 Air New Zealand carry-on baggage allowance', p: 'This applies to flights Air New Zealand operates. Carry-on size is the length, width and height of the bag including wheels and packed-away handles, with a maximum of 55 x 40 x 23 cm and a total of up to 118 cm. On the smaller Q300 aircraft the 23 cm side must not exceed 22 cm.',
        table: { head: ['Fare or status', 'Carry-on bags', 'Weight'], rows: [
          ['Economy fares (including Seat)', '1 carry-on bag plus 1 small item', 'Up to 7 kg (15 lb)'],
          ['Premium Economy, Business Premier, Business Premier Luxe (also connecting), Koru Gold, Koru Platinum, Koru Black and Star Alliance Gold members', '2 carry-on bags plus 1 small item', 'Up to 14 kg (30 lb) in total, one item up to 10 kg (22 lb)'] ] },
        list: ['Small personal item examples: a handbag, a thin laptop, duty-free goods, an overcoat, wrap or blanket, a small personal camera.',
          'If your carry-on is over the allowance and your fare includes checked bags, you can repack into a checked bag, buy a prepaid extra bag, or pay excess charges at the airport.'] },
      { h: '🧳 Air New Zealand checked baggage by fare', p: 'Aside from Seat-only fares, which are carry-on only, all Air New Zealand fares include checked baggage. Your allowance is on your e-ticket.',
        table: { head: ['Route and fare', 'Checked bags included'], rows: [
          ['New Zealand domestic: Seat + Bag, FlexiChange', '1 bag'],
          ['New Zealand domestic: FlexiRefund', '2 bags'],
          ['International: The Works, Works Flexi, Economy', '1 bag'],
          ['International: Premium Economy', '2 bags'],
          ['International: Business Premier (including Luxe)', '3 bags, and no more can be added'] ] },
        list: ['<strong>Economy exceptions with 2 bags:</strong> to Shanghai or Singapore from New Zealand or Australia; to Taipei from New Zealand; to Canada or the USA (excluding New York) from Australia; to Honolulu from Australia. Economy to New York from Australia is 1 bag.',
          'If you connect to or from a domestic flight on an international journey, the international allowance also applies for the domestic flight.',
          'Child fares have the same allowance as adults. Infants have no checked bag but one piece of carry-on, and strollers, buggies, car seats, booster seats and portacots can be brought for free (up to two of these items).'] },
      { h: '⚖️ Weight, size, extra bags and excess baggage', p: '',
        list: ['<strong>Weight:</strong> each checked bag can weigh up to 23 kg (50 lb) before fees. At the airport you can pay an excess charge for a bag up to 32 kg (70 lb) if there is space on the aircraft. Over 32 kg: within New Zealand Air New Zealand Cargo may help; internationally use an IATA-approved freight forwarder.',
          '<strong>Size:</strong> length + width + height up to 158 cm (62 in) per checked bag. Bigger bags can often be checked for an oversize charge if there is space.',
          '<strong>Prepaid extra bags:</strong> you can add them online up to a maximum total of three checked bags, up to 90 minutes before an international flight and up to 30 minutes before a domestic flight. They are only available when your whole journey is ticketed and operated by Air New Zealand. They are usually much cheaper than excess fees at the airport.',
          '<strong>Excess baggage fees apply to:</strong> extra bags beyond your allowance, any item over 23 kg and under 32 kg, and any item larger than the size limits. An item that is both heavy and large pays one oversize fee. Charges are based on the departure country of each flight.',
          '<strong>Koru and Koru Club members</strong> may be able to bring additional bags at no charge, except on Seat fares.',
          '<strong>Sports equipment</strong> mostly counts as a checked bag with the usual weight allowance.',
          '<strong>Other airlines on your trip:</strong> for codeshares or other carriers the allowance and charges of the most significant carrier apply on a single ticket; separate tickets each follow their own rules.'] }
    ],
    faq: [
      ['What is the Air New Zealand baggage allowance?', 'Carry-on: one bag up to 7 kg (55 x 40 x 23 cm) plus one small item in Economy. Checked: up to 23 kg and 158 cm per bag; international Economy includes 1 bag, Premium Economy 2 and Business Premier 3. Seat-only fares include no checked bag.'],
      ['What is the Air New Zealand carry-on size and weight?', 'A maximum of 55 x 40 x 23 cm including wheels, with a total up to 118 cm, and 7 kg in Economy. Premium Economy and Business get two bags with up to 14 kg in total.'],
      ['How many checked bags can you take on Air New Zealand?', 'International Economy 1 bag, Premium Economy 2 bags, Business Premier 3 bags. You can add prepaid extra bags up to a total of three, except in Business Premier, where more cannot be added.'],
      ['What is the Air New Zealand baggage weight limit?', 'Each checked bag can weigh up to 23 kg before fees. An excess charge at the airport lets you check a bag up to 32 kg if there is space; nothing over 32 kg is accepted as normal baggage.'],
      ['When can I add an extra bag on Air New Zealand?', 'Online, up to 90 minutes before an international flight and 30 minutes before a domestic flight, when your journey is ticketed and operated only by Air New Zealand.'],
      ['Does the Air New Zealand Seat fare include a checked bag?', 'No. Seat fares are carry-on only, with one carry-on bag of up to 7 kg and one small item. You can change the booking to include a checked bag or add one.']
    ],
    sources: [['https://www.airnewzealand.com/carry-on-baggage', 'Air New Zealand &mdash; Carry-on baggage'], ['https://www.airnewzealand.com/checked-in-baggage', 'Air New Zealand &mdash; Checked-in baggage'], ['https://www.airnewzealand.com/excess-baggage', 'Air New Zealand &mdash; Excess baggage']]
  }
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// table cells hold plain text; the section lists hold small trusted HTML (strong, entities)
const table = t => '<div class="bd-tw"><table class="bd-t"><thead><tr>' + t.head.map(h => '<th scope="col">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
  t.rows.map(r => '<tr><th scope="row" data-label="' + esc(t.head[0]) + '">' + esc(r[0]) + '</th>' + r.slice(1).map((c, i) => '<td data-label="' + esc(t.head[i + 1]) + '">' + esc(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';

const CSS = '<style>.bd-lead{font-size:1.05rem;margin:.2em 0 1em}.bd-stats{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin:1em 0 1.4em}.bd-stat{border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:12px}.bd-stat b{display:block;font-family:"Space Grotesk",Inter,sans-serif;font-size:1.25rem;line-height:1.2}.bd-stat span{display:block;font-size:.9rem;font-weight:300;color:var(--text);margin-top:3px}' +
  '.bd-sec h2{font-size:1.2rem;margin:1.6em 0 .5em}.bd-sec p{margin:.4em 0;font-weight:300}.bd-sec ul{margin:.6em 0;padding-left:1.15em}.bd-sec li{margin:.4em 0;font-weight:300}.bd-sec li strong{font-weight:600}' +
  '.bd-tw{border:1px solid var(--line);border-radius:14px;background:var(--surface);margin:.8em 0;overflow:hidden}.bd-t{width:100%;border-collapse:collapse;font-size:.95rem;line-height:1.4}.bd-t th,.bd-t td{padding:10px 12px;text-align:left;vertical-align:top;border-bottom:1px solid var(--line)}.bd-t thead th{font-size:.9rem;color:var(--muted);font-weight:700}.bd-t tbody th{font-weight:700}.bd-t td{font-weight:300}.bd-t tbody tr:last-child th,.bd-t tbody tr:last-child td{border-bottom:0}' +
  '@media(max-width:760px){.bd-t thead{display:none}.bd-t,.bd-t tbody,.bd-t tr,.bd-t th,.bd-t td{display:block;width:100%}.bd-t tr{padding:10px 12px;border-bottom:1px solid var(--line)}.bd-t tbody tr:last-child{border-bottom:0}.bd-t th,.bd-t td{border:0;padding:3px 0}.bd-t td:before{content:attr(data-label);display:block;font-size:.85rem;color:var(--muted);font-weight:600}}' +
  '.bd-faq h2{font-size:1.2rem;margin:1.6em 0 .4em}.bd-faq h3{font-size:1.02rem;margin:1em 0 .2em}.bd-faq p{margin:.2em 0;font-weight:300}.bd-src{margin:1.4em 0 .4em}.bd-src .h{font-weight:700;font-size:.95rem}.bd-src a{display:block;margin:.3em 0;color:var(--accent);font-size:.95rem}.bd-chk{color:var(--muted);font-size:.9rem;margin:1em 0}</style>';

function render(a, d) {
  return CSS + '<p class="bd-lead"><strong>' + esc(d.answer) + '</strong></p>' +
    '<div class="bd-stats">' + d.stats.map(s => '<div class="bd-stat"><b>' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>').join('') + '</div>' +
    d.sections.map(s => '<section class="bd-sec"><h2>' + s.h + '</h2>' + (s.p ? '<p>' + s.p + '</p>' : '') + (s.table ? table(s.table) : '') + (s.table2 ? table(s.table2) : '') + (s.table3 ? table(s.table3) : '') + (s.list ? '<ul>' + s.list.map(l => '<li>' + l + '</li>').join('') + '</ul>' : '') + '</section>').join('') +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + d.faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">Checked ' + CHECKED + ' on the airline\'s own pages. Baggage rules change by route, fare and date: the allowance on your ticket is the one that applies.</p>' +
    '<div class="bd-src"><div class="h">🔗 Official sources</div>' + d.sources.map(s => '<a href="' + s[0] + '" target="_blank" rel="noopener noreferrer">' + s[1] + '</a>').join('') + '</div>';
}

Object.assign(DETAIL, require('./baggage_detail2.js'));
Object.assign(DETAIL, require('./baggage_detail3.js'));
Object.assign(DETAIL, require('./baggage_detail3b.js'));
Object.assign(DETAIL, require('./baggage_detail4.js'));
module.exports = { DETAIL, render, CHECKED, CSS, table, esc };
