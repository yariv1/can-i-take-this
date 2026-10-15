// Power bank detail sections (batch 9, read 14-15 October 2026 on each airline's OWN pages). Same facts as the card above them,
// plus what the card cannot hold. Every row is a statement of the airline's page; what was not read is said in `miss`.
// Merged into TOPICS as the `power` topic of each airline (see airline_topics.js). Do NOT overwrite an existing `power` topic.
function build(A, d) {
  const rows = d.rows;
  const faq = (d.faq || []).slice();
  return {
    power: {
      ttl: A + " Power Bank Rules 2026: " + d.short,
      desc: A + " power bank rules: " + d.short + ".",
      answer: d.ans,
      sections: [{
        h: "🔋 What " + A + " says about power banks", p: "From " + d.page + ".",
        table: { head: ["Question", A + " rule"], rows },
        list: (d.list || []).concat(d.miss ? ["<strong>Not read:</strong> " + d.miss] : [])
      }],
      faq,
      sources: [[d.url, A + " &mdash; " + d.page]]
    }
  };
}
const LH_URL = "https://business.lufthansagroup.com/xx/en/program/experts/news/power-banks-on-board--updated-regulations-from-january-2026";
function lh(A) {
  return build(A, {
    short: "Max 2, 100 Wh, No Use, Not in the Overhead Bin", url: LH_URL, page: "Lufthansa Group news: Power banks on board, updated regulations from 15 January 2026",
    ans: A + " is part of the Lufthansa Group, whose rule applies from 15 January 2026. Each passenger may carry a maximum of two power banks in carry-on baggage, up to 100 Wh each. Power banks may neither be used nor charged on board, and they may not be stored in the overhead compartments. A power bank between 100 Wh and 160 Wh must be approved by the airline in advance.",
    rows: [
      ["How many", "A maximum of two power banks per passenger, in carry-on baggage"],
      ["Capacity", "Up to 100 Wh"],
      ["100 Wh to 160 Wh", "Must be approved by the airline in advance"],
      ["Using it on board", "Not permitted, except to operate essential medical devices"],
      ["Charging devices from it", "Not permitted on board"],
      ["Charging the power bank", "Not permitted from on-board power sources"],
      ["Where to keep it", "Under the seat, in the seat pocket or on your person; not in the overhead compartments"],
      ["Checked baggage", "Power banks and e-cigarettes may not be carried in checked baggage"]
    ],
    faq: [
      ["Can I use a power bank on " + A + "?", "No. From 15 January 2026 power banks may neither be used nor charged on board Lufthansa Group flights."],
      ["Can I put my power bank in the overhead bin on " + A + "?", "No. Keep it under the seat, in the seat pocket or on you."],
      ["How many power banks can I take on " + A + "?", "A maximum of two per passenger, each up to 100 Wh without approval; 100 Wh to 160 Wh needs the airline's approval in advance."]
    ],
    miss: "how to request approval for a 100 to 160 Wh power bank. Contact " + A + " before you fly."
  });
}
module.exports = {
  "Lufthansa": lh("Lufthansa"),
  "Swiss": lh("Swiss"),
  "Austrian": lh("Austrian"),
  "Brussels Airlines": lh("Brussels Airlines"),
  "Eurowings": lh("Eurowings"),
  "ITA Airways": lh("ITA Airways"),
  "British Airways": build("British Airways", {
    short: "Max 2, 100 Wh, Seat Pocket or Under the Seat", url: "https://www.britishairways.com/content/information/baggage-essentials/liquids-and-restrictions", page: "Batteries, electric and electronic devices (liquids and restrictions page)",
    ans: "British Airways allows up to 2 power banks per person, each up to 100 Wh, carried in hand baggage only. A power bank must show its capacity rating, and it must be stored in the seat pocket or in a bag under the seat in front. Aircraft seat power is only for personal electronic devices, not for charging a power bank. Batteries of 100 to 160 Wh need British Airways' approval.",
    rows: [
      ["How many", "Up to 2 power banks per person; they are part of the limit of 4 spare batteries per person"],
      ["Capacity", "Must not exceed 100 Wh, and the capacity rating must be displayed"],
      ["No Wh rating", "If the watt-hour rating is not shown or cannot be determined, the battery cannot be accepted on board"],
      ["100 Wh to 160 Wh", "Approval is needed for each passenger carrying lithium rechargeable batteries of 100 to 160 Wh"],
      ["Where to keep it", "In the seat pocket or in a bag placed under the seat in front"],
      ["Seat power", "Aircraft seat power is for personal electronic devices, not for power banks"],
      ["Checked baggage", "Power banks and spare batteries are forbidden in checked baggage; if your cabin bag is checked at the gate, take them out and carry them with you"],
      ["Protecting terminals", "Keep spare batteries in original packaging, a protective case or a strong plastic bag, or put electrical tape over the terminals"],
      ["Damaged batteries", "Do not take damaged batteries or equipment"]
    ],
    list: ["<strong>Wh formula:</strong> milliamp hours divided by 1,000, multiplied by the voltage, gives the Wh rating.", "<strong>Your devices:</strong> up to 15 battery-operated personal electronic devices for personal use."],
    faq: [
      ["How many power banks can I take on British Airways?", "Up to 2 per person, each up to 100 Wh with the capacity rating shown."],
      ["Where do I keep a power bank on British Airways?", "In the seat pocket or in a bag under the seat in front of you."],
      ["Can I charge my power bank from the seat power on British Airways?", "No. British Airways says aircraft seat power is only for personal electronic devices, not for power banks."],
      ["Can I put a power bank in checked baggage on British Airways?", "No. Power banks and spare batteries are forbidden in checked baggage."]
    ],
    miss: "whether power banks may be used in flight (the page gives no use rule) and the process for the 100 to 160 Wh approval."
  }),
  "Ryanair": build("Ryanair", {
    short: "Max 2, 100 Wh, Use Allowed Except Taxi, Take-off and Landing", url: "https://help.ryanair.com/hc/en-us/articles/12890774807569-What-items-are-permitted-on-board", page: "What items are permitted on board",
    ans: "Ryanair allows up to 20 spare lithium batteries in the cabin, each up to 100 Wh, and power banks are limited to 2 per passenger within that total. Spare batteries and power banks must be on you or in the bag under the seat in front, not in cabin baggage stored in the overhead lockers. A power bank may charge your devices except during taxi, take-off and landing, but the power bank itself must never be recharged on board.",
    rows: [
      ["How many", "Up to 2 power banks per passenger, within the overall limit of 20 spare batteries (for example 2 power banks and 18 spare lithium batteries)"],
      ["Capacity", "Each battery up to 100 Wh; devices or batteries above 100 Wh are not permitted in the cabin or in checked baggage"],
      ["Where to keep it", "On your person or in the underseat cabin bag; not in cabin baggage stored in the overhead lockers"],
      ["Using it on board", "A power bank may charge personal electronic devices, except during taxi, take-off and landing or when the crew says otherwise"],
      ["Charging the power bank", "Not allowed at any time on board or during the flight (for example one power bank charging another)"],
      ["Protecting terminals", "Every spare lithium battery must be individually protected against short circuits"],
      ["Cabin only", "Spare lithium batteries and power banks are carried in the cabin only"]
    ],
    list: ["<strong>Your devices:</strong> up to 15 personal electronic devices for personal use in the cabin.", "<strong>Smart bags:</strong> bags with non-removable batteries are not accepted in the hold, and above 2.7 Wh not on board."],
    faq: [
      ["Can I use a power bank on Ryanair?", "Yes, to charge your devices, except during taxi, take-off and landing or when the crew tells you otherwise. You may not recharge the power bank itself on board."],
      ["Can I put a power bank in the overhead locker on Ryanair?", "No. Spare lithium batteries and power banks cannot be in cabin baggage stored in the overhead lockers."],
      ["How many power banks can I take on Ryanair?", "Up to 2 per passenger, each up to 100 Wh, within a total of 20 spare lithium batteries."]
    ],
    miss: "how Ryanair wants the batteries protected beyond the statement that each one must be individually protected."
  }),
  "easyJet": build("easyJet", {
    short: "Max 2, Up to 160 Wh, No Use On Board", url: "https://www.easyjet.com/en/help-centre/baggage/dangerous-goods", page: "Dangerous goods (batteries and power banks)",
    ans: "easyJet accepts power banks up to 160 Wh. A maximum of two power banks is permitted per customer, in carry-on baggage only. Power banks are prohibited from use on easyJet aircraft and must not be used to charge other devices. Each power bank must be individually protected.",
    rows: [
      ["How many", "A maximum of two power banks per customer"],
      ["Capacity", "Wh rating not exceeding 160 Wh"],
      ["Where to carry it", "In carry-on baggage only, ideally where you can monitor it"],
      ["Using it on board", "Prohibited"],
      ["Charging other devices", "Must not be used to charge other devices"],
      ["Protecting terminals", "Each power bank must be individually protected"]
    ],
    list: ["<strong>Other batteries:</strong> easyJet also allows one spare lithium ion battery up to 300 W, or two spare batteries up to 160 Wh each, carried as instructed on the page."],
    faq: [
      ["Can I use a power bank on easyJet?", "No. Power banks are prohibited from use on easyJet aircraft and must not charge other devices."],
      ["How many power banks can I take on easyJet?", "A maximum of two per customer, up to 160 Wh, in carry-on baggage only."]
    ],
    miss: "whether power banks may be stored in the overhead lockers: the page recommends carrying them where they can be monitored but does not name the overhead bin."
  }),
  "Pegasus": build("Pegasus", {
    short: "Use Allowed Following Crew Instructions, Cabin Only", url: "https://www.flypgs.com/en/useful-info/info-about-flights/general-rules", page: "General rules (devices during the flight)",
    ans: "Pegasus allows non-transmitting devices, and devices that can be switched off, such as cameras, phones, power banks, laptops and tablets, to be used during the flight in line with the crew's instructions. The type and watt-hour (Wh) information of a battery is checked at check-in at the airport, and Pegasus does not carry liquid batteries.",
    rows: [
      ["Using it on board", "Power banks can be used during the flight in compliance with the crew's instructions"],
      ["Wh check", "The battery type and Wh information is checked during check-in at the airport"],
      ["Liquid batteries", "Not carried on Pegasus flights"],
      ["Lithium batteries", "Pegasus points to its own acceptance conditions for devices containing lithium-ion batteries"]
    ],
    list: [],
    faq: [
      ["Can I use a power bank on a Pegasus flight?", "Yes, in compliance with the crew's instructions, as power banks are listed with devices that can be used during the flight."],
      ["Does Pegasus check the Wh of my power bank?", "Yes. The battery type and Wh information is checked at check-in."]
    ],
    miss: "Pegasus's separate page with the acceptance conditions for devices containing lithium-ion batteries, which this page links to."
  }),
  "Emirates": build("Emirates", {
    short: "Max 1, Under 100 Wh, No Use On Board, Not in the Overhead Bin", url: "https://www.emirates.com/media-centre/emirates-safety-rules-for-customer-usage-of-power-banks-onboard---now-in-full-effect/", page: "Emirates safety rules for customer usage of power banks onboard",
    ans: "Emirates customers may carry one power bank under 100 Wh, and since 1 October 2025 using any kind of power bank on board is prohibited. A power bank may not charge devices and may not be charged from the aircraft's power supply. It must have its capacity information available, must not go in the overhead stowage bin, and must be kept in the seat pocket or in a bag under the seat in front of you. Power banks are not allowed in checked luggage.",
    rows: [
      ["How many", "One power bank per customer"],
      ["Capacity", "Under 100 Wh, with the capacity information available on the power bank"],
      ["Using it on board", "Prohibited from 1 October 2025; it may not be used to charge any personal device"],
      ["Charging the power bank", "Not permitted using the aircraft's power supply"],
      ["Where to keep it", "In the seat pocket or in a bag under the seat in front; not in the overhead stowage bin"],
      ["Checked luggage", "Power banks are not permitted in checked luggage"]
    ],
    list: ["<strong>Why:</strong> Emirates says it made the change after a safety review, because of the growth in lithium battery incidents on board flights across the industry, and so that crew can reach a power bank quickly if there is a fire."],
    faq: [
      ["Can I use a power bank on Emirates?", "No. Using any kind of power bank on board Emirates flights has been prohibited since 1 October 2025."],
      ["How many power banks can I take on Emirates?", "One, under 100 Wh, with the capacity rating available."],
      ["Where do I keep my power bank on Emirates?", "In the seat pocket or in a bag under the seat in front of you, not in the overhead bin."]
    ],
    miss: "the rules for batteries of 100 Wh and above and for spare batteries other than power banks."
  }),
  "Etihad Airways": build("Etihad Airways", {
    short: "Max 1, 100 Wh or Less, No Use On Board", url: "https://www.etihad.com/en/help/baggage-information/prohibited-items", page: "Prohibited items: power banks",
    ans: "Etihad allows only one power bank per passenger, 100 Wh or less, with the Wh rating clearly marked on the device (labelled, embossed or printed). Use of power banks on board is strictly prohibited, including charging devices or charging the power bank from aircraft power sockets. The power bank must be switched off and protected from short circuit and unintentional activation. Power banks over 100 Wh are not permitted.",
    rows: [
      ["How many", "Only one power bank per passenger"],
      ["Capacity", "100 Wh or less, clearly marked on the device; over 100 Wh is not permitted"],
      ["Using it on board", "Strictly prohibited"],
      ["Charging with aircraft power", "Prohibited: no charging devices from it and no charging the power bank from aircraft power sockets"],
      ["Switched off and protected", "Must be switched off and protected from short-circuit and unintentional activation"],
      ["Which devices count", "Power bank, portable charger, battery pack, pocket charger or power station: if its main function is to provide portable power, the rules apply"]
    ],
    list: ["<strong>Tip from Etihad:</strong> keep the power bank easily accessible.", "<strong>Drone and spare batteries:</strong> up to 100 Wh without approval, 100 to 160 Wh with prior approval, a maximum of two spare batteries, in cabin baggage only."],
    faq: [
      ["Can I use a power bank on Etihad?", "No. Use of power banks on board is strictly prohibited, including charging devices or the power bank itself from aircraft sockets."],
      ["How many power banks can I take on Etihad?", "Only one per passenger, 100 Wh or less, with the Wh rating clearly marked."]
    ],
    miss: "where on board the power bank must be stored and the rule for checked baggage."
  }),
  "Wizz Air": build("Wizz Air", {
    short: "Max 1 Power Bank, 100 Wh, No Use in Any Phase of Flight", url: "https://www.wizzair.com/en-gb/help-centre/restricted-items", page: "Restricted items: lithium batteries",
    ans: "Wizz Air limits each person to a maximum of 20 spare batteries, including a maximum of 1 power bank, and power banks over 100 Wh are forbidden. Power banks must not be used or charged during any phase of the flight, and must be carried where the passenger can continuously monitor them, not in checked baggage. A power bank without a clear Wh rating is forbidden.",
    rows: [
      ["How many", "Maximum 1 power bank, within a limit of 20 spare batteries per person"],
      ["Capacity", "Power banks exceeding 100 Wh are forbidden"],
      ["No Wh mark", "Batteries or power banks without a clear Wh rating, or where it cannot be calculated, are forbidden"],
      ["Using it on board", "Not to be used during any phase of the flight, and not to charge another device"],
      ["Where to keep it", "In a place where the passenger can continuously monitor it"],
      ["Checked baggage", "Do not put power banks or spare batteries in checked baggage"],
      ["Protecting terminals", "Spare batteries must be individually protected to prevent short circuits, for example in original retail packaging or with insulated terminals"],
      ["100 Wh to 160 Wh", "Lithium-ion batteries in this range, other than power banks, may be carried in cabin baggage only after Wizz Air's approval, at most two per person"]
    ],
    list: [],
    faq: [
      ["Can I use a power bank on Wizz Air?", "No. Power banks are not to be used during any phase of the flight."],
      ["How many power banks can I take on Wizz Air?", "A maximum of 1 power bank, up to 100 Wh, within a total of 20 spare batteries."],
      ["Can I put a power bank in checked baggage on Wizz Air?", "No. Spare batteries and power banks are forbidden in checked baggage."]
    ],
    miss: "whether the overhead bin is allowed: the page says only that the power bank must be where you can continuously monitor it."
  }),
  "Turkish Airlines": build("Turkish Airlines", {
    short: "Max 2, 100 Wh, Cabin Only, Protected Against Short Circuit", url: "https://www.turkishairlines.com/en-int/any-questions/restrictions/", page: "Banned and restricted items",
    ans: "Turkish Airlines allows power banks with a lithium metal content of 2 g or less and a lithium-ion capacity of 100 Wh or less, only in the cabin, up to a maximum of 2 pieces per passenger. Power banks must be protected against short circuits, and wireless power banks must be completely turned off. Spare lithium-ion batteries of 100 to 160 Wh may also be carried, a maximum of 2 per person.",
    rows: [
      ["How many", "A maximum of 2 power banks per passenger, in the cabin only"],
      ["Capacity", "Lithium-ion power of 100 Wh or less (lithium metal content 2 g or less)"],
      ["Checked baggage", "Not allowed: power banks are marked carry-on only on the page"],
      ["Protecting terminals", "Power banks must be protected against short circuits"],
      ["Wireless power banks", "Must be completely turned off"],
      ["100 Wh to 160 Wh", "A maximum of 2 spare lithium-ion batteries with a rating over 100 Wh up to 160 Wh may be carried"]
    ],
    list: ["<strong>Spare batteries:</strong> a maximum of 15 spare lithium-ion batteries (not exceeding 100 Wh) per person; the airline may approve more than 15."],
    faq: [
      ["How many power banks can I take on Turkish Airlines?", "A maximum of 2 per passenger, up to 100 Wh, carried in the cabin only."],
      ["Do I need to switch off a wireless power bank on Turkish Airlines?", "Yes. Wireless power banks must be completely turned off."]
    ],
    miss: "use or charging on board and where to store a power bank in the cabin: the page we read does not state them."
  }),
  "Qantas": build("Qantas", {
    short: "Max 2, Up to 160 Wh, No Use or Charging in Flight, Carry-On Only", url: "https://www.qantas.com/en-us/baggage/dangerous-goods/spare-batteries-and-powerbanks", page: "Spare batteries and power banks",
    ans: "Qantas lets you carry up to two power banks per person, each not exceeding 160 Wh, in your carry-on only; power banks are prohibited in checked baggage. Power banks cannot be used or charged during the flight, including via in-seat USB ports. A lithium-ion battery over 100 Wh and up to 160 Wh needs airline approval, and batteries over 160 Wh are forbidden as passenger baggage.",
    rows: [
      ["How many", "Up to two power banks per person, each not exceeding 160 Wh"],
      ["Where to carry it", "Carry-on only, where trained cabin crew can reach it; never in checked baggage"],
      ["Using it in flight", "Not allowed, and it cannot be charged in flight, including via in-seat USB ports"],
      ["100 Wh to 160 Wh", "Airline approval is required, and the battery must be declared during check-in"],
      ["Over 160 Wh", "Forbidden as passenger baggage; must be sent as freight"],
      ["Spare batteries", "No more than 20 spare batteries in total per passenger, for personal use; no more than two of them between 100 Wh and 160 Wh"],
      ["Working out Wh", "Watt hours are the voltage (V) multiplied by the amp hours (Ah)"]
    ],
    list: [],
    faq: [
      ["Can I use a power bank on Qantas?", "No. Power banks cannot be used or charged during the flight, including through in-seat USB ports."],
      ["How many power banks can I take on Qantas?", "Up to two per person, each not exceeding 160 Wh, in carry-on only."],
      ["Do I need approval for a 100 to 160 Wh power bank on Qantas?", "Yes. A lithium-ion battery over 100 Wh and up to 160 Wh needs airline approval and must be declared at check-in."]
    ],
    miss: "where a power bank may be stored in the cabin (the page says only that it should be reachable by crew)."
  }),
  "Virgin Australia": build("Virgin Australia", {
    short: "Carry-On Only, Seat Pocket or Under the Seat, No Use or Charging On Board", url: "https://www.virginaustralia.com/au/en/travel-info/baggage/batteries/", page: "Batteries (travel info)",
    ans: "Virgin Australia says power banks and spare batteries are carry-on only and must never be packed in checked baggage. In the cabin they must be stowed in the seat pocket or under the seat in front, or kept on you or in your hands. You must not use a power bank on board to charge another device and must not charge a power bank on board. Batteries over 160 Wh and damaged batteries are not permitted.",
    rows: [
      ["Where to carry it", "Carry-on only; never in checked baggage"],
      ["Where to keep it in the cabin", "In the seat pocket, under the seat in front, or on you or in your hands"],
      ["Using it on board", "Do not use a power bank on board to charge another device"],
      ["Charging the power bank", "Do not charge a power bank on board"],
      ["Protecting terminals", "Each battery and power bank individually protected against short circuit: original retail packaging, a separate plastic bag, a separate protective pouch, or insulated terminals"],
      ["Large batteries", "Batteries over 160 Wh are not permitted"],
      ["Damaged batteries", "Not permitted"]
    ],
    list: [],
    faq: [
      ["Can I use a power bank on Virgin Australia?", "No. You must not use a power bank on board to charge another device, and you must not charge a power bank on board."],
      ["Where do I keep my power bank on Virgin Australia?", "In the seat pocket, under the seat in front, or on you or in your hands."],
      ["Can I put a power bank in checked baggage on Virgin Australia?", "No. Power banks and spare batteries must never be packed in checked baggage."]
    ],
    miss: "the limits on the number and capacity of power banks, which the page lists in a section we did not read in full."
  }),
  "Air New Zealand": build("Air New Zealand", {
    short: "Max 2 Power Banks, 100 Wh, Terminals Protected", url: "https://www.airnewzealand.co.nz/travelling-with-batteries-and-devices-on-planes", page: "Travelling with batteries, battery-powered devices and power banks",
    ans: "Air New Zealand's battery table allows power banks, power packs and power chargers in carry-on, a maximum of 2 per passenger, not exceeding 100 Wh. All batteries, power banks and devices must have their terminals protected when carried. Batteries of 100 to 160 Wh are in a separate medium power category, and batteries above 160 Wh are in a high power category.",
    rows: [
      ["How many", "Power banks, power packs and power chargers: maximum 2 per passenger"],
      ["Capacity", "Not exceeding 100 Wh (low power batteries: under 100 Wh or 2 g lithium metal)"],
      ["Protecting terminals", "Terminals of all batteries, power banks and devices must be protected when carried"],
      ["Medium and high power", "100 to 160 Wh is the medium power category, and above 160 Wh (or 8 g lithium) the high power category: see the airline's table"]
    ],
    list: [],
    faq: [
      ["How many power banks can I take on Air New Zealand?", "A maximum of 2 per passenger, not exceeding 100 Wh."],
      ["Do I need to protect my power bank on Air New Zealand?", "Yes. The terminals of all batteries, power banks and devices must be protected."]
    ],
    miss: "the section on using devices and power banks during the journey, the spare battery total and the rules for medium and high power batteries."
  }),
  "Cathay Pacific": build("Cathay Pacific", {
    short: "Max 2, Carry-On Only, No Use or Recharging On Board", url: "https://www.cathaypacific.com/cx/en_HK/latest-news/security-and-operational-changes/restrictions-on-the-carriage-of-lithium-battery-power-banks.html", page: "Restrictions on the carriage of lithium battery power banks (30 March 2026)",
    ans: "Cathay Pacific says each customer may carry a maximum of two power banks, packed in carry-on baggage only. Using and recharging power banks on board is not permitted at any time during the flight. Any additional power banks will be confiscated by the security screening authorities at Hong Kong International Airport. The rule follows ICAO guidance and an additional restriction from the Hong Kong Civil Aviation Department.",
    rows: [
      ["How many", "A maximum of two power banks per customer"],
      ["Where to carry it", "In carry-on baggage only"],
      ["Using it on board", "Not permitted at any time during the flight"],
      ["Recharging it on board", "Not permitted at any time during the flight"],
      ["Extra power banks", "Any additional power banks are confiscated by security screening at Hong Kong International Airport"]
    ],
    list: [],
    faq: [
      ["Can I use a power bank on Cathay Pacific?", "No. Using and recharging power banks on board is not permitted at any time during the flight."],
      ["How many power banks can I take on Cathay Pacific?", "A maximum of two per customer, in carry-on baggage only."],
      ["What happens to a third power bank at Hong Kong airport?", "Any additional power banks are confiscated by security screening authorities at Hong Kong International Airport."]
    ],
    miss: "the Wh limit, where to keep the power bank in the cabin and how to ask for approval of a larger one: the announcement does not state them."
  }),
  "Malaysia Airlines": build("Malaysia Airlines", {
    short: "Keep It With You, Not in the Overhead, No Use or Charging", url: "https://www.malaysiaairlines.com/content/firefly/my/en/media-centre/important-for-you/advisory-updated-guidelines-for-carrying-power-banks-on-board.html", page: "Advisory: Updated Guidelines for Carrying Power Banks on Board",
    ans: "From 1 April 2025, passengers on Malaysia Airlines, Firefly and MASwings must carry power banks with them at all times, and they should not be placed in the overhead compartments. Charging or using power banks is strictly prohibited throughout the flight. Power banks and spare lithium-ion batteries are strictly prohibited in checked baggage. Magnetic wireless charging power banks must be kept in a separate bag or protective pouch to prevent unintentional activation.",
    rows: [
      ["Where to keep it", "With you at all times; should not be placed in the overhead compartments"],
      ["Using or charging it", "Strictly prohibited throughout the flight"],
      ["Checked baggage", "Carriage of power banks and spare lithium-ion batteries in checked baggage is strictly prohibited"],
      ["Magnetic wireless power banks", "Must be kept in a separate bag or protective pouch to prevent unintentional activation"],
      ["Who it applies to", "All passengers on Malaysia Airlines, Firefly and MASwings, from 1 April 2025"]
    ],
    list: [],
    faq: [
      ["Can I use a power bank on Malaysia Airlines?", "No. Charging or using power banks is strictly prohibited throughout the flight."],
      ["Can I put a power bank in the overhead compartment on Malaysia Airlines?", "No. Keep it with you at all times; it should not be placed in the overhead compartments."]
    ],
    miss: "the number of power banks and the Wh limit: the advisory does not state them."
  }),
  "Air India": build("Air India", {
    short: "Max 2 Spare Batteries, 100 Wh, Not in the Overhead Bin", url: "https://www.airindia.com/in/en/travel-information/baggage-guidelines/restricted-baggage.html", page: "Restricted baggage: batteries, battery-powered devices and power banks",
    ans: "Air India allows spare batteries in carry-on if they do not exceed 100 Wh, with no more than two spare batteries per person, each individually protected against short circuit. The page says power banks and spare batteries cannot be placed in the overhead bins. India's DGCA has prohibited the MOBIKINS MK-PB-04 power bank in cabin or checked baggage on any flight to, from or within India.",
    rows: [
      ["How many", "No more than two spare batteries per person"],
      ["Capacity", "Not exceeding 100 Wh; lithium metal content not exceeding 2 g"],
      ["Where to keep it", "Power banks and spare batteries cannot be placed in overhead bins"],
      ["Protecting terminals", "Each battery individually protected against short circuits, for example in plastic bags, with taped or covered terminals, or in protective cases"],
      ["Banned model", "DGCA has prohibited the MOBIKINS MK-PB-04 power bank in cabin or checked baggage on any flight to, from or within India"]
    ],
    list: [],
    faq: [
      ["How many power banks can I take on Air India?", "No more than two spare batteries per person, each not exceeding 100 Wh, individually protected against short circuit."],
      ["Can I put a power bank in the overhead bin on Air India?", "No. Power banks and spare batteries cannot be placed in overhead bins."],
      ["Is any power bank banned on flights in India?", "Yes. DGCA has prohibited the MOBIKINS MK-PB-04 power bank on any flight to, from or within India."]
    ],
    miss: "whether power banks may be used on board and the 100 to 160 Wh approval: the part of the page we read does not state them."
  }),
  "Vietnam Airlines": build("Vietnam Airlines", {
    short: "Max 2, Under 100 Wh, Hand Baggage Only, No Use or Charging", url: "https://www.vietnamairlines.com/us/en/travel-information/baggage/restricted-baggage/portable-electronic-devices", page: "Portable electronic devices (with battery and power bank)",
    ans: "Vietnam Airlines allows each passenger a maximum of two power banks for personal use, carried in hand baggage only, and the page says do not leave them in hand baggage placed in the overhead compartment. Keep power banks where they can be easily monitored, such as the front seat pocket or next to you. Power banks must not be used during the flight and must not be charged from the seat power outlet or any power source on board.",
    rows: [
      ["How many", "A maximum of two power banks per passenger, for personal use"],
      ["Capacity", "Of the standard type: lithium-ion with a capacity of less than 100 Wh (or lithium metal with less than 2 g lithium)"],
      ["Where to carry it", "Hand baggage only"],
      ["Where to keep it", "Where it can be easily monitored, such as the front seat pocket or next to you; not in the overhead baggage compartment"],
      ["Using it on board", "Must not be used during the flight"],
      ["Charging the power bank", "Must not be charged from the seat power outlet or any power source on board"],
      ["Protecting terminals", "Equipment with batteries must be protected from unintended activation, or the batteries disconnected and the exposed terminals insulated"]
    ],
    list: ["<strong>Higher capacity:</strong> the page describes a separate category of lithium-ion batteries over 100 Wh up to 160 Wh; contact Vietnam Airlines before you fly to understand the rule that applies to you."],
    faq: [
      ["Can I use a power bank on Vietnam Airlines?", "No. Power banks must not be used during the flight or charged from the seat power outlet."],
      ["How many power banks can I take on Vietnam Airlines?", "A maximum of two for personal use, in hand baggage only."],
      ["Where do I keep my power bank on Vietnam Airlines?", "Where you can easily monitor it, such as the front seat pocket or next to you, not in the overhead compartment."]
    ],
    miss: "the approval process for batteries of 100 to 160 Wh."
  })
};
