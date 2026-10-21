// Answers for silent cards found on the AIRLINE'S OWN other pages (official). Added after the first batch left a kind unanswered:
// the airline's medication page said nothing, a different page of the same airline did (user order 2026-10-20: look further before falling back).
// Shape: slug -> kind (pills | liquids | needles | cold) -> { status, verdict (condition), head, lines, sources:[[url,label,sub]] }. Every line is from the page named in sources.
const L = (u, label, sub) => [u, label, sub];
module.exports = {
  'brussels-airlines': {
    needles: { status: 'warn', verdict: 'Doctor’s note recommended', head: 'Brussels Airlines allows syringes in your carry-on if you need them during the flight, with a doctor’s note recommended.',
      lines: ['Brussels Airlines: you can carry small, portable medical devices (for example an insulin tester) or medication (for example pills, syringes) in your carry-on baggage if needed during the flight.', 'Brussels Airlines: it recommends bringing a sufficient supply and a doctor’s note confirming that you need them.'],
      sources: [L('https://www.brusselsairlines.com/cv/en/special-care/special-assistance/medication-and-medical-devices', 'Brussels Airlines: Medication and medical devices', 'Medication and syringes')] } },
  'virgin-australia': {
    cold: { status: 'warn', verdict: 'No fridge, bring a cooler', head: 'Virgin Australia has no refrigeration on board: bring your own container with a cooling agent.',
      lines: ['Virgin Australia: if your medication needs to be kept chilled, seek advice from your pharmacist; you will need to provide a suitable container with a cooling agent (ice or dry ice) inside.', 'Virgin Australia: its staff cannot take care of medication or store it in lounge, terminal or aircraft cooled service carts, and its aircraft do not have refrigeration onboard.'],
      sources: [L('https://www.virginaustralia.com/au/en/travel-info/specific-travel/specific-needs-assistance/medical-conditions/', 'Virgin Australia: Flying with medical conditions', 'Cooling medication')] } },
  norwegian: {
    cold: { status: 'warn', verdict: 'Crew cannot keep it cool', head: 'Norwegian’s cabin crew cannot store your medication in a cool place: bring your own cooling.',
      lines: ['Norwegian: pack any necessary medication in your hand baggage (with your prescription if relevant) and, if possible, in its original packaging.', 'Norwegian: its cabin crew cannot administer medication or store your medication in a cool place.'],
      sources: [L('https://www.norwegian.com/us/travel-info/special-needs-assistance/medical-conditions/', 'Norwegian: Travelling with medical conditions', 'Medication')] } },
  'aer-lingus': {
    cold: { status: 'warn', verdict: 'Insulin in the cabin', head: 'Aer Lingus asks you to carry insulin in your carry-on, because it may freeze in the hold.',
      lines: ['Aer Lingus: carry insulin in your carry-on baggage as it may freeze in the hold.', 'Aer Lingus: keep your insulin in its original packaging, easily identifiable and accessible during the flight.'],
      sources: [L('https://www.aerlingus.com/support/special-assistance/medical-conditions/', 'Aer Lingus: Medical conditions', 'Insulin and medication')] } },
  'tap-air-portugal': {
    cold: { status: 'warn', verdict: 'Ask 72 hours ahead', head: 'TAP can refrigerate medication on board if you request it at least 72 hours before the flight.',
      lines: ['TAP: if your medication needs to be refrigerated on board, make the request at least 72 hours before your flight.', 'TAP: thermal bags that can be accommodated in refrigerated areas on board must not exceed 15 to 20 cm and must be malleable.', 'TAP: when you request on-board refrigeration, you must tell TAP the dimensions and total weight of the bag containing your medication.'],
      sources: [L('https://www.flytap.com/en-pt/help/frequently-asked-questions', 'TAP Air Portugal: Frequently asked questions', 'Refrigerated medication')] } },
  'british-airways': (() => {
    const P = L('https://www.britishairways.com/content/information/travel-assistance/medical-conditions-and-pregnancy', 'British Airways: Medical conditions and pregnancy', 'Medicines, syringes, liquids');
    return {
      pills: { status: 'go', verdict: 'With a doctor’s note or prescription', head: 'British Airways allows tablets and capsules in hand or checked baggage, with a doctor’s note or prescription.',
        lines: ['British Airways: you can take tablets and capsules in your hand baggage (with a doctor’s note or prescription) or in your checked baggage.', 'British Airways: carry any medication you will need for your flight in your smaller item of hand baggage.', 'British Airways: keep the medication in its original packaging and bring a prescription or a supporting letter from your doctor to avoid delays at security or customs.'], sources: [P] },
      liquids: { status: 'warn', verdict: 'Prescription or doctor’s note', head: 'British Airways lets you carry as much liquid medication as you need, even over the usual limit, with a prescription or doctor’s note.',
        lines: ['British Airways: you can take liquid medication in your hand or checked baggage; if you might need it during your journey, place it in your hand baggage.', 'British Airways: you can carry as much as you need for your trip, even if this exceeds the usual limit on liquids, provided you have a supporting prescription or doctor’s note.', 'British Airways: the medicine does not need to fit in the transparent bag, but have it ready for inspection by airport security.'], sources: [P] },
      needles: { status: 'warn', verdict: 'Doctor’s note or prescription', head: 'British Airways allows hypodermic needles and EpiPens in hand baggage with a doctor’s note or prescription.',
        lines: ['British Airways: you can take EpiPens and hypodermic needles in your hand baggage (with a doctor’s note or prescription) or in your checked baggage.', 'British Airways: to dispose of needles, lancets, syringes or empty insulin cartridges on board, ask the cabin crew for the sharps box; do not leave them in the toilets or seat pockets.'], sources: [P] },
      cold: { status: 'warn', verdict: 'Cannot keep it cool', head: 'British Airways cannot keep your medication cool: bring your own cooling.',
        lines: ['British Airways: we are not able to keep your medication cool; talk to your pharmacist about alternative options.', 'British Airways: carry your insulin in your hand baggage, otherwise it may freeze in the hold; keep it in its original packaging, easily identifiable and accessible during the flight.'], sources: [P] }
    };
  })(),
  lufthansa: {
    liquids: { status: 'warn', verdict: 'Only what you need on the flight', head: 'Lufthansa allows urgently required liquid medicine outside the clear bag, only in the amount you need during the flight.',
      lines: ['Lufthansa: urgently required medicines and special foods in liquid form may also be transported in carry-on baggage outside the plastic bag, but you may only take the amount you will require during the flight.', 'Lufthansa: it recommends a medical certificate in English for important medication.'],
      sources: [L('https://www.lufthansa.com/us/en/carry-on-baggage', 'Lufthansa: Carry-on baggage', 'Liquids and medicines')] },
    needles: { status: 'warn', verdict: 'Doctor’s certificate advised', head: 'Lufthansa advises a doctor’s certificate if you carry medications and syringes in your carry-on.',
      lines: ['Lufthansa: if you have medications and syringes in your carry-on baggage, it is advisable to take a doctor’s certificate which confirms that they are personally required medical items.', 'Lufthansa: it advises taking twice as much medication and material as you need for the trip, one set each in carry-on and hold baggage.'],
      sources: [L('https://www.lufthansa.com/us/en/travelling-healthy', 'Lufthansa: A healthy journey', 'Medications and syringes')] }
  },
  emirates: {
    liquids: { status: 'warn', verdict: 'Prove what it is', head: 'Emirates exempts medications from the 100 ml limit, but you must be able to show what they are.',
      lines: ['Emirates: exemptions will be made for medications, baby milk or foods, and special dietary requirements, but you will need to show an appropriate means of verifying the nature of these items.', 'Emirates: if you require special medication, always carry your prescription when you board any flight.'],
      sources: [L('https://www.emirates.com/us/english/before-you-fly/baggage/cabin-baggage-rules/', 'Emirates: Carry-on baggage rules', 'Liquids and medication'), L('https://www.emirates.com/it/english/help/faq-topics/special-assistance-and-requests/faq/what-if-i-have-special-medications-that-i-must-carry-with-me', 'Emirates: What if I have special medications that I must carry with me?', 'Prescription and cooling')] }
  },
  'singapore-airlines': {
    liquids: { status: 'warn', verdict: 'Declare it at security', head: 'Singapore Airlines allows medication in cabin baggage in a reasonable amount: take it out and declare it at security.',
      lines: ['Singapore Airlines: medication is permitted in cabin baggage within a reasonable amount; it must be removed from cabin baggage and declared to security personnel, and may be subject to additional security checks.', 'Singapore Airlines: if you carry prescription medicine, bring supporting documentation such as an ID card and a letter from your physician.'],
      sources: [L('https://www.singaporeair.com/en_UK/sg/travel-info/baggage/baggage-restrictions/', 'Singapore Airlines: Baggage restrictions', 'Medication in cabin baggage')] }
  },
  latam: {
    needles: { status: 'warn', verdict: 'Prescription needed', head: 'LATAM allows medicines and syringes with a medical prescription, digital or paper.',
      lines: ['LATAM: you can carry medicines or syringes on your trip as long as you have a medical prescription, digital or paper, that certifies their use.', 'LATAM: it recommends carrying only what you need for the journey, connections and flight hours.', 'LATAM: carry them in an appropriate container, under your care for the whole trip, and meet the hand-baggage standards.'],
      sources: [L('https://www.latamairlines.com/cl/es/centro-ayuda/preguntas/equipaje/articulos-restringidos/medicamentos', 'LATAM: Can I carry my medicines on the trip? (page in Spanish)', 'Medicines and syringes')] },
    cold: { status: 'warn', verdict: 'No cold chain, bring your own', head: 'LATAM does not offer a cold chain for medicines: carry them yourself in an appropriate container.',
      lines: ['LATAM: it does not offer a cold chain service for transporting medicines.', 'LATAM: if you need to carry them, keep them in an appropriate container, under your care for the whole trip, and meet the hand-baggage standards.'],
      sources: [L('https://www.latamairlines.com/cl/es/centro-ayuda/preguntas/equipaje/articulos-restringidos/medicamentos', 'LATAM: Can I carry my medicines on the trip? (page in Spanish)', 'Cold chain')] }
  },
  swiss: {
    liquids: { status: 'warn', verdict: 'Only what you need on the flight', head: 'SWISS lets you take urgently required liquid medication on board, only the amount you need during the flight.',
      lines: ['SWISS: you are permitted to take urgently required medication in liquid form on board with you.', 'SWISS: you may only take the amount that you will require during the flight.', 'SWISS: it suggests that you carry a medical certificate in English for such medication.'],
      sources: [L('https://www.swiss.com/no/en/prepare/baggage/hand-baggage', 'SWISS: Hand baggage', 'Medication exception to the liquid rules')] } },
  'malaysia-airlines': {
    needles: { status: 'warn', verdict: 'Doctor’s note for insulin', head: 'Malaysia Airlines advises diabetics to carry extra needles and syringes in the cabin, with a doctor’s note confirming the need for insulin.',
      lines: ['Malaysia Airlines: if you have diabetes, include extra insulin or tablet medicine, extra needles or syringes in your cabin baggage in case there are delays or breakages along the way.', 'Malaysia Airlines: to avoid issues with security at the airport, you will need a doctor’s note confirming your need for insulin.'],
      sources: [L('https://www.malaysiaairlines.com/vn/vi/travel-info/special-requirements.html', 'Malaysia Airlines: Special requirements', 'Diabetes, insulin and needles')] } },
  'vietnam-airlines': {
    pills: { status: 'warn', verdict: 'Up to 2 kg or 2 L in total', head: 'Vietnam Airlines allows non-radioactive medicine in carry-on and checked baggage, up to 0.5 kg or 0.5 L per item and 2 kg or 2 L in total.',
      lines: ['Vietnam Airlines: non-radioactive medicine (including sprays) for passenger treatment can be carried in carry-on baggage and in checked baggage.', 'Vietnam Airlines: one bottle or can must be under 0.5 kg or 0.5 litre, and each passenger can carry no more than 2 kg or 2 litres of these items in total, carry-on and checked baggage together.', 'Vietnam Airlines: for flights from or to the US, these items are only allowed in checked baggage.'],
      sources: [L('https://www.vietnamairlines.com/us/en/travel-information/baggage/restricted-baggage/medical-drugs-make-up-aerosol', 'Vietnam Airlines: Medicine, makeup and sprays', 'Medicine in baggage')] } },
  'philippine-airlines': {
    needles: { status: 'warn', verdict: 'Call the airline first', head: 'Philippine Airlines asks you to call its Reservations Hotline if you will bring needles or syringes.',
      lines: ['Philippine Airlines: if you will be bringing more specialized assistive devices like respiratory devices, needles or syringes, please call its Reservations Hotline for further assistance.'],
      sources: [L('https://www.philippineairlines.com/ph/en/before-you-fly/special-needs-and-request/senior-citizen-and-pwd.html', 'Philippine Airlines: Senior citizens and PWD services', 'Needles and syringes')] } },
  'copa-airlines': {
    liquids: { status: 'warn', verdict: 'Declare it if over the limit', head: 'Copa Airlines allows insulin and medications as liquids; if they exceed the maximum quantity, declare them to TSA or inspection staff.',
      lines: ['Copa Airlines: liquids are only allowed in containers of up to 100 ml (3.4 oz), carried in a transparent resealable bag of no more than one litre.', 'Copa Airlines: breast milk, juice, insulin and medications may be transported, but if they exceed the maximum quantity they must be declared to the TSA or inspection personnel.'],
      sources: [L('https://www.copaair.com/en-US/travel-information/baggage-information/restricted-baggage/', 'Copa Airlines: Restricted baggage', 'Liquids, insulin and medications')] } },
  flydubai: {
    needles: { status: 'warn', verdict: 'Hand baggage, with a letter', head: 'flydubai asks you to carry insulin and other approved injectables in your hand baggage, with a doctor’s prescription or letter.',
      lines: ['flydubai: any medication needed during the flight, including approved injectables such as insulin, should be carried in your hand baggage.', 'flydubai: to avoid delays it advises carrying your doctor’s prescription or a medical letter, along with any necessary supporting documentation.'],
      sources: [L('https://www.flydubai.com/en/flying-with-us/baggage/special-baggage', 'flydubai: Special baggage rules and guidelines', 'Medications')] } },
  'kenya-airways': {
    pills: { status: 'warn', verdict: 'Cabin baggage, with a prescription', head: 'Kenya Airways recommends carrying your medication in your cabin baggage with your prescription and a doctor’s letter.',
      lines: ['Kenya Airways: it recommends always carrying your prescription, a letter from your doctor and your medication in your cabin baggage.', 'Kenya Airways: different countries have different regulations on carrying medication, so check them before you travel.'],
      sources: [L('https://www.kenya-airways.com/en/plan/special-care/medical-special-support/', 'Kenya Airways: Medical and special needs', 'Medication on board')] },
    cold: { status: 'warn', verdict: 'No fridge on board', head: 'Kenya Airways cannot refrigerate medication on board: bring your own cooling.',
      lines: ['Kenya Airways: medication cannot be refrigerated on board.', 'Kenya Airways: guests who have to administer injections on board are urged to inform a cabin crew member.'],
      sources: [L('https://www.kenya-airways.com/en/plan/special-care/medical-special-support/', 'Kenya Airways: Medical and special needs', 'Medication on board')] } },
  'ita-airways': (() => {
    const P = L('https://www.ita-airways.com/it/en/world-of-ita-airways/services-on-board/health-and-travel', 'ITA Airways: Wellbeing, health and travel', 'Medication, syringes, cold storage');
    return {
      pills: { status: 'warn', verdict: 'Hand baggage, with a medical certificate', head: 'ITA Airways asks you to carry medication in your hand baggage, with a medical certificate that lists the prescription and quantity.',
        lines: ['ITA Airways: medications and devices must be carried in hand baggage, to avoid damage from temperature changes and to keep them accessible during the flight.', 'ITA Airways: a medical certificate specifying the prescription and the quantity of medication transported is mandatory, dated at most 12 months before the date of travel.', 'ITA Airways: also take the package leaflet of the medication with you for consultation and to help identify it.'], sources: [P] },
      needles: { status: 'warn', verdict: 'Tell the cabin crew', head: 'ITA Airways asks you to tell the cabin crew if you will use a syringe on board, so it can be disposed of properly.',
        lines: ['ITA Airways: if you need to use a syringe on board, inform the cabin crew to ensure its proper disposal.', 'ITA Airways: for insulin, it invites you to carry insulin and other necessary devices in your hand baggage.', 'ITA Airways: at security it is sufficient to show an original medical certificate, dated at most 30 days before travel, stating the quantity and method of administration, and the medication’s package leaflet.'], sources: [P] },
      cold: { status: 'warn', verdict: 'No cold chain, bring a cooler', head: 'ITA Airways has no cold chain on board: use a cooler with dry ice or freezer packs, up to 2.5 kg per person.',
        lines: ['ITA Airways: it does not provide an onboard cold chain.', 'ITA Airways: to keep medication cool you can use a cooler with dry ice or freezer packs, up to a maximum weight of 2.5 kg per person.'], sources: [P] }
    };
  })(),
  'royal-air-maroc': {
    liquids: { status: 'warn', verdict: 'Prescription in your name', head: 'Royal Air Maroc accepts liquid medications in the cabin when you show a medical prescription in your name.',
      lines: ['Royal Air Maroc: liquid medications are accepted in the cabin upon presentation of a medical prescription in the passenger’s name.', 'Royal Air Maroc: other liquids and creams must be in containers not exceeding 100 ml, in transparent plastic bags of 20 cm by 20 cm.'],
      sources: [L('https://www.royalairmaroc.com/us-en/special-baggage', 'Royal Air Maroc: Special baggage', 'Baggage restrictions, liquid medications')] } },
  'air-arabia': {
    pills: { status: 'warn', verdict: 'Keep it in your cabin bag', head: 'Air Arabia does not let you put medication you may need on the trip in checked baggage: keep it in your cabin bag.',
      lines: ['Air Arabia: you must not include in your checked baggage any medication or medical equipment which may be required in flight or during your trip.', 'Air Arabia: medical equipment can be accepted in unchecked baggage.'],
      sources: [L('https://www.airarabia.com/-/media/conditions-of-carriage/20251215_gcoc_english_version_air-arabia.pdf', 'Air Arabia: General Conditions of Carriage', 'Checked baggage, medication')] } }
};
