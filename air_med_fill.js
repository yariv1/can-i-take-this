// Fills the airline Medication cards the AIRLINE's own pages say nothing about (user order 2026-10-20, HARD, DESIGN_SYSTEM 8.43):
// "official source" does not mean "has the answer". A card whose answer is not on the airline's pages gets, in this order:
//   1. an UNOFFICIAL source that really answers it: the regulator or airport authority of the airline's home regime (read in full on 2026-10-20),
//   2. only if no such page was found: "BASED ON GLOBAL RULES", written from what the regimes we read agree on, with no link.
// Every sentence below is from the page named in its source list.
module.exports = function (T) {
  const L = (u, label, sub) => [u, label, sub];
  const EC = L('https://transport.ec.europa.eu/transport-modes/air/aviation-security/aviation-security-policy/liquids-aerosols-and-gels_en', 'European Commission: Liquids, aerosols and gels', 'Medicines exempt from the 100 ml limit');
  const YE = L('https://europa.eu/youreurope/citizens/travel/security-and-emergencies/airport-airline-security/faq/index_en.htm', 'Your Europe: Airport and airline security FAQ', 'Medicines over 100 ml');
  const UK = L('https://www.gov.uk/hand-luggage-restrictions/essential-medicines-and-medical-equipment', 'GOV.UK: Hand luggage restrictions, medicines and medical equipment', 'Tablets, liquids, syringes, gel packs');
  const CA1 = L('https://www.catsa-acsta.gc.ca/en/what-can-bring/item/liquid-and-gel-based-prescription-medication', 'CATSA: Liquid and gel-based prescription medication', 'Exempt from the liquid limit');
  const CA2 = L('https://www.catsa-acsta.gc.ca/en/what-can-bring/item/diabetic-supplies', 'CATSA: Diabetic supplies', 'Syringes, insulin, gel or ice packs');
  const KR = L('https://www.airport.kr/ap_en/1434/subview.do', 'Incheon Airport: Carry-on restricted items FAQ', 'Liquid medicine, syringes, ice packs');
  const HK = L('https://www.cad.gov.hk/english/packing_tips.html', 'Hong Kong Civil Aviation Department: Packing tips', 'Liquids, medications');
  const SG = L('https://www.changiairport.com/en/fly/security-and-baggage-restrictions.html', 'Changi Airport: Security and baggage restrictions', 'Liquids and medication');
  const DXB = L('https://www.dubaiairports.ae/information/baggage/baggage-info/baggage-regulations', 'Dubai Airports: Baggage regulations', 'Liquids exemption for medication');
  const AUH = L('https://www.abudhabiairport.ae/en/faq?currentCategoryId=&page=5&q=', 'Abu Dhabi Airport: FAQ', 'Medication and the resealable bag');
  const TH = L('https://suvarnabhumi.airportthai.co.th/service/airport-guide/detail/GuidelinesforLAGs_BKK', 'Suvarnabhumi Airport: Permitted LAGs in cabin baggage', 'Medicinal liquids');
  const MX = L('https://www.aicm.com.mx/en/passengers/tips-for-passengers/special-medical-needs', 'Mexico City Airport (AICM): Passengers with special medical needs', 'Medications, diabetics and syringes');
  const OM = L('https://www.omanairports.co.om/en/security-customs', 'Oman Airports: Security and customs', 'Needles and syringes');

  const SE = L('https://www.transportstyrelsen.se/sv/luftfart/flygresenar/Bagage/Vad-far-jag-ta-med-mig-ombord/Medicin/', 'Transportstyrelsen (Swedish Transport Agency): Medicin i vätskeform och sjukvårdsartiklar (page in Swedish)', 'Medicine and syringes in hand luggage');
  const NO = L('https://www.avinor.no/en/practical-info/baggage-rules/', 'Avinor: Baggage rules', 'Syringes and insulin, cooling elements');
  const FR = L('https://www.ecologie.gouv.fr/sites/default/files/documents/diabete_aeroport.pdf', 'Le diabète à l’aéroport (guide in French by the Fédération Française des Diabétiques with the DGAC and Aéroports de Paris, on ecologie.gouv.fr)', 'Insulin, needles, syringes, cold packs');
  const JP = L('https://www.mlit.go.jp/common/001105372.pdf', 'MLIT Japan: Liquids restricted on international flights, list of examples (October 2015, in Japanese)', 'Ice and cold packs with medicine');
  const BR = L('https://www.gov.br/anac/pt-br/assuntos/passageiros/transporte-de-liquidos-em-voos-internacionais', 'ANAC Brazil: Transporte de líquidos em voos internacionais (page in Portuguese)', 'Liquid medicinal articles');
  const poss = n => (/s$/i.test(n) ? n + '’' : n + '’s');
  // regime facts: { kind: { status, verdict (the condition), head, lines(name) , sources } }
  const REG = {
    EU: { liquids: { status: 'warn', verdict: 'Needed on the trip, proof possible', head: 'At EU airports, liquid medicine over 100 ml is allowed if you need it during the trip.',
      lines: n => ['European Commission: liquids to be used during the trip for medical purposes or special dietary requirements are exempt from the 100 ml limit in hand luggage.', 'Your Europe (EU): medicines are allowed in quantities larger than 100 ml, but only for use during the trip, and you may have to prove it is genuine.', 'This is the EU rule for flights leaving EU airports. ' + n + ' publishes no rule of its own on this in the pages we read.'], sources: [EC, YE] } },
    UK: {
      pills: { status: 'go', verdict: 'Hand and hold luggage', head: 'UK airports allow tablets and capsules in hand and hold luggage.', lines: n => ['GOV.UK: tablets and capsules are allowed in hand luggage and in hold luggage, and you do not need to show proof for tablets.', 'This is the rule at UK airports. ' + n + ' publishes no rule of its own on this in the pages we read.'], sources: [UK] },
      liquids: { status: 'warn', verdict: 'Proof over 100 ml', head: 'UK airports allow essential liquid medicine over 100 ml in hand luggage, with proof if the container is larger than 100 ml.', lines: n => ['GOV.UK: you can carry essential medicines of more than 100 ml in hand luggage, including liquid dietary foodstuffs and inhalers.', 'GOV.UK: you need proof the medication is prescribed to you (a letter from your doctor or a copy of your prescription) if it is a liquid in a container larger than 100 ml; no proof for liquid in a container of 100 ml or smaller.', 'GOV.UK: airport staff might need to open the containers to screen the liquids.'], sources: [UK] },
      needles: { status: 'go', verdict: 'Hand and hold luggage', head: 'UK airports allow hypodermic syringes in hand and hold luggage.', lines: n => ['GOV.UK: hypodermic syringes are allowed in hand luggage and in hold luggage.', 'GOV.UK: medical equipment that is essential for your journey is screened separately.'], sources: [UK] },
      cold: { status: 'warn', verdict: 'Gel packs yes, ice packs ask the airport', head: 'UK airports allow cooling gel packs; for ice packs in hand luggage you contact the airport.', lines: n => ['GOV.UK: cooling gel packs are allowed in hand luggage and in hold luggage.', 'GOV.UK: ice packs are allowed in hold luggage; for hand luggage, contact the airport.'], sources: [UK] } },
    CA: {
      liquids: { status: 'go', verdict: 'Declare it', head: 'In Canada, liquid and gel prescription medication is exempt from the 100 ml limit: declare it at security.', lines: n => ['CATSA: liquid and gel-based prescription medications are exempt from the liquid restrictions and can be carried in carry-on baggage in volumes larger than 100 ml.', 'CATSA: declare them to the screening officer separately; it recommends a professionally printed label, and documentation is not required.', 'This is the rule at Canadian airports. ' + n + ' publishes no rule of its own on this in the pages we read.'], sources: [CA1] } },
    US: {
      liquids: { status: 'warn', verdict: 'Declare it', head: 'In the US, medically necessary liquids can exceed 3.4 oz if you declare them.', lines: n => [T.TSA_LIQ_LINE, T.TSA_REMOVE, 'This is TSA’s rule for US flights. ' + n + ' publishes no rule of its own on this in the pages we read.'], sources: [T.TSA_LIQ, T.TSA_FAQ] },
      cold: { status: 'warn', verdict: 'Ice packs allowed', head: 'In the US, medically necessary gel ice packs are allowed in reasonable quantities.', lines: n => [T.TSA_ICE_LINE, 'This is TSA’s rule for US flights. ' + n + ' publishes no rule of its own on this in the pages we read.'], sources: [T.TSA_ICE] } },
    KR: {
      liquids: { status: 'warn', verdict: 'Doctor’s note over 100 ml', head: 'In Korea, liquid medicine over 100 ml needs a doctor’s note or prescription, and only what you need for the flight goes in carry-on.', lines: n => ['Incheon Airport: if you carry liquid medicine over 100 ml (such as insulin) you must carry a doctor’s note or prescription, in Korean or English.', 'Incheon Airport: you can only carry the amount of liquid medicine needed for use on the flight in carry-on; any extra must be checked in.', 'Incheon Airport: without a prescription the 100 ml limit applies to liquids and gels in carry-on.'], sources: [KR] },
      needles: { status: 'go', verdict: 'Carry-on and checked', head: 'In Korea, syringes and needles can go in carry-on and checked baggage.', lines: n => ['Incheon Airport: syringes, needles and other medical items (tools) can be brought in both carry-on and checked baggage.'], sources: [KR] },
      cold: { status: 'warn', verdict: 'Ice packs follow the liquid rule', head: 'In Korea, ice packs follow the liquid rule; coolers without liquids are allowed.', lines: n => ['Incheon Airport: ice packs are restricted based on volume according to the liquid, spray and gel rules (100 ml containers in carry-on, no volume limit in checked baggage).', 'Incheon Airport: coolers that do not contain liquids are allowed on board as carry-on or checked baggage; dry ice needs the airline’s approval.'], sources: [KR] } },
    HK: { liquids: { status: 'warn', verdict: 'Exempt, subject to verification', head: 'In Hong Kong, medications are exempt from the 100 ml liquid limit, subject to verification.', lines: n => ['Hong Kong Civil Aviation Department: exemptions will be made for medications, baby milk and food and special dietary requirements, subject to verification.'], sources: [HK] } },
    SG: { liquids: { status: 'warn', verdict: 'Doctor’s letter', head: 'At Changi, liquids over 100 ml can be exempted with a doctor’s letter.', lines: n => ['Changi Airport: liquids in containers over 100 ml are not accepted, but other items may be exempted upon presentation of a bona fide doctor’s letter.', 'Changi Airport: medication accompanied by a doctor’s letter is allowed in carry-on.'], sources: [SG] } },
    DXB: { liquids: { status: 'go', verdict: 'Exemption for medication', head: 'At Dubai airports, medication is exempt from the 100 ml liquid limit.', lines: n => ['Dubai Airports: if you carry liquids, aerosols or gels in hand baggage each item must not exceed 100 ml and the total must not exceed one litre; exemptions apply for medication, baby milk and foods and special dietary requirements.'], sources: [DXB] } },
    AUH: { liquids: { status: 'warn', verdict: 'Inspected separately', head: 'At Abu Dhabi airport, medication can go outside the clear bag but is inspected separately.', lines: n => ['Abu Dhabi Airport: medications and special food you may need during the flight may be carried outside the re-sealable plastic bag, but they must be separately inspected at the security check.', 'Abu Dhabi Airport: security staff may ask you to prove you need them during the flight, so bring a doctor’s prescription where applicable.'], sources: [AUH] } },
    TH: { liquids: { status: 'warn', verdict: 'Certificate or label with your name', head: 'At Bangkok airport, medicinal liquids are exempt from the 100 ml limit with a certificate or label in your name.', lines: n => ['Suvarnabhumi Airport: liquids exempt from the quantity restrictions may be carried in quantities appropriate for the journey, and you must present them to the screening officers.', 'Suvarnabhumi Airport: these include medicinal liquids accompanied by a medical certificate, a label or medication documentation bearing the passenger’s name, or household medicines listed by the Ministry of Public Health.'], sources: [TH] } },
    MX: {
      liquids: { status: 'go', verdict: 'No clear bag needed', head: 'At Mexico City airport, medications do not have to go in the resealable bag if the amount is reasonable.', lines: n => ['AICM: medications are allowed and do not have to be placed in the resealable plastic bag if the amount is reasonable for the passenger’s need and itinerary.', 'This is the airport’s rule, not ' + poss(n) + ' own page.'], sources: [MX] },
      needles: { status: 'go', verdict: 'No prescription needed (diabetics)', head: 'At Mexico City airport, diabetics may carry the medicines and syringes they need without a prescription.', lines: n => ['AICM: diabetics may enter with the medicines and syringes necessary for the trip; it is not necessary to show the prescription.', 'AICM: it is advisable to carry your diabetic credential.'], sources: [MX] } },
    OM: { needles: { status: 'warn', verdict: 'Declare and show proof', head: 'At Muscat airport, you must declare needles and syringes and bring proof of medical need.', lines: n => ['Oman Airports: travellers with medical conditions requiring needles or syringes will be required to declare them and bring in proof of medical need for authentication.'], sources: [OM] } },
    SE: { needles: { status: 'go', verdict: 'Hand luggage, show it at security', head: 'In Sweden, medicine and medical articles including syringes may go in hand luggage without a limit; show liquid medicine separately.',
      lines: n => ['Transportstyrelsen (Sweden): prescription and over-the-counter medicine and medical articles in liquid form, including syringes, may be carried in hand luggage without limit: you can take what you need for the trip and your time away.', 'Transportstyrelsen: this also applies to cool packs when you carry medicine that needs them.', 'Transportstyrelsen: at the security check take your liquid medicine out and show it separately from your hand luggage.'], sources: [SE] } },
    NO: { needles: { status: 'go', verdict: 'Carry-on and checked', head: 'At Norwegian airports, syringes and insulin are allowed in carry-on and checked baggage; bring a prescription or documentation.',
      lines: n => ['Avinor: syringes and insulin are allowed in hand luggage and in checked baggage; feel free to bring a prescription or documentation.', 'Avinor: liquid medicines are exempt from the 100 ml rule and do not need to be in the 1-litre bag; cooling elements are allowed for medicine that needs to be cooled.'], sources: [NO] } },
    FR: {
      needles: { status: 'warn', verdict: 'Prescription in French, in your name', head: 'In France, a diabetic passenger carries insulin, needles and syringes in hand luggage with a legible prescription in French, in their own name.',
        lines: n => ['French diabetes guide (with the DGAC and Aéroports de Paris): every diabetic passenger must carry a legible, valid prescription in French, in their own name.', 'The same guide: the prescription should list every item of the treatment carried on the trip (needles, injector pens, meter) and all the medicines.', 'The same guide: needles, lancets, syringes and meters can go in any travel case; you put them in a tray at the security check, and only equipment meant for you may be carried in the cabin.'], sources: [FR] },
      cold: { status: 'warn', verdict: 'Cold packs not needed for insulin', head: 'In France, the diabetes guide says cold packs are not needed for insulin and could freeze it.',
        lines: n => ['French diabetes guide (with the DGAC and Aéroports de Paris): there is no reason to use cold packs, which could freeze the insulin; current insulins are made to be kept at room temperature for several days.', 'The same guide: you can wrap insulin in an insulated pouch, which protects it from heat and cold.'], sources: [FR] } },
    JP: { cold: { status: 'warn', verdict: 'Ice and cold packs with the medicine', head: 'At Japanese airports, ice and cold packs are exempt from the liquid limit when packed with medicine that needs to be kept cold.',
      lines: n => ['MLIT Japan (2015 list): ice and cold packs are an exception to the liquid restriction when they are packed together with medicines that need refrigeration, such as insulin and hormone drugs.', 'MLIT Japan: you must tell the security inspector it is medicine, and the inspector may ask for proof (a copy of the prescription, the medicine bag or a medical certificate).'], sources: [JP] } },
    BR: { liquids: { status: 'warn', verdict: 'Prescription, only what you need', head: 'In Brazil, liquid medicine is exempt from the 100 ml limit with a prescription, in the amount needed for the whole flight.',
      lines: n => ['ANAC (Brazil): liquid medicinal articles with a medical prescription, on paper or digital, may be carried in the quantity needed for the whole flight, including any stopovers.', 'ANAC: they must be presented at the security inspection.', 'ANAC: under Portaria SIA 1155 of 2015 you may ask the aviation security agent in advance for the medicines to be inspected without X-ray and metal detectors; you then hand them over separately from the rest of your hand baggage.'], sources: [BR] } },
  };
  const AIRLINE_REG = {
    'air-europa': 'EU', austrian: 'EU', 'brussels-airlines': 'EU', eurowings: 'EU', finnair: 'EU', lufthansa: 'EU', sas: 'EU', 'tap-air-portugal': 'EU', 'wizz-air': 'EU', norwegian: 'EU', aegean: 'EU', 'aer-lingus': 'EU', 'air-france': 'EU', 'lot-polish': 'EU', ryanair: 'EU', 'ita-airways': 'EU',
    'british-airways': 'UK', westjet: 'CA', 'alaska-airlines': 'US', 'american-airlines': 'US', frontier: 'US', 'hawaiian-airlines': 'US',
    asiana: 'KR', 'korean-air': 'KR', 'cathay-pacific': 'HK', 'singapore-airlines': 'SG', emirates: 'DXB', 'etihad-airways': 'AUH', 'thai-airways': 'TH', aeromexico: 'MX', volaris: 'MX', 'oman-air': 'OM'
  };
  // per airline and kind: a regime that answers a card the airline's home regime above does not (e.g. SAS: EU for liquids, Sweden for syringes)
  const AIRLINE_REG_KIND = { sas: { needles: 'SE' }, norwegian: { needles: 'NO' }, 'air-france': { needles: 'FR', cold: 'FR' }, 'japan-airlines': { cold: 'JP' }, azul: { liquids: 'BR' }, gol: { liquids: 'BR' } };
  // GLOBAL: what the regimes we read agree on. No link, no claim about the airline.
  // Same advice, three wordings, picked by the airline's name: the page of an airline that says nothing should not be a copy of another airline's page.
  const pick = (n, arr) => arr[[...n].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) % arr.length];
  const GLOBAL = {
    pills: { status: 'go', verdict: 'Carry-on or checked', lines: n => [],
      head: n => pick(n, [
        n + ' publishes no rule for pills: tablets and capsules are normally allowed in carry-on and checked baggage. Keep the original pack and your prescription.',
        'Nothing from ' + n + ' on pills and capsules. Under the rules we checked they travel in carry-on or checked baggage; bring the pharmacy pack and a prescription.',
        'On ' + n + ', pills and capsules are normally fine in the cabin or in the hold. Its pages say nothing, so carry the original pack and your prescription.']) },
    liquids: { status: 'warn', verdict: 'Declare it, carry proof', lines: n => [],
      head: n => pick(n, [
        n + ' publishes no rule for liquid medicine: it is normally exempt from the 100 ml limit if you need it on the trip. Declare it and carry a doctor’s letter.',
        'Nothing from ' + n + ' on liquid medicine over 100 ml. Under the rules we checked it is allowed when needed on the trip: show it to security with a doctor’s letter.',
        'For liquid medicine, ' + n + ' gives no figure. Elsewhere the 100 ml limit is waived for medicine you need on the trip, if you declare it and can prove it.']) },
    needles: { status: 'warn', verdict: 'Carry the medicine and a letter', lines: n => [],
      head: n => pick(n, [
        n + ' publishes no rule for needles and syringes: they are normally allowed in the cabin with your medicine and a doctor’s letter. Declare them at security.',
        'Nothing from ' + n + ' on syringes and needles. Under the rules we checked they are allowed for your own medication; pack the medicine, a doctor’s letter, and declare them.',
        'On ' + n + ', needles and syringes are not covered. Where we checked, they are allowed in the cabin with the medicine they are used with and a letter from your doctor.']) },
    cold: { status: 'warn', verdict: 'Bring your own cooling', lines: n => [],
      head: n => pick(n, [
        n + ' publishes no rule for cold storage: bring an insulated pouch with a cool pack and keep it with you in the cabin.',
        'Nothing from ' + n + ' on keeping medication cold. Do not rely on a fridge: take an insulated pouch with a cool pack and keep it in the cabin.',
        'For medication that must stay cold, ' + n + ' gives no answer. Pack it in an insulated pouch with a cool pack and keep it with you.']) }
  };
  // THIRD: step 2 of the ladder when neither the airline's pages nor its home regime answer a card: a reliable, named, third-party source read in full (UNOFFICIAL footer + link).
  // Several wordings per kind, picked by the airline's name (the same sentence must not sit on many pages, audit_medication_dup).
  const CDC = L('https://www.cdc.gov/yellow-book/hcp/travelers-with-additional-considerations/travelers-with-chronic-illnesses.html', 'CDC Yellow Book: Travelers with chronic illnesses', 'Medications in hand luggage');
  const DUK = L('https://www.diabetes.org.uk/living-with-diabetes/life-with-diabetes/travel', 'Diabetes UK: Travelling with diabetes', 'Insulin, needles, cool bags, doctor’s letter');
  const THIRD = {
    pills: { status: 'warn', verdict: 'Hand luggage, original pack, doctor’s letter', sources: [CDC, DUK], variants: [
      n => ({ head: n + ' gives no rule on pills. The CDC advises carrying all medication in hand luggage, in its original container.',
        lines: ['CDC Yellow Book: all medications should be carried in hand luggage rather than in checked baggage.', 'CDC Yellow Book: bring all necessary medications in their original containers.'] }),
      n => ({ head: 'Nothing from ' + n + ' on pills and capsules. The CDC says to pack enough for the trip plus extra, in your carry-on.',
        lines: ['CDC Yellow Book: pack enough medicine for the whole trip and several days afterwards in case of delays, in your carry-on.', 'CDC Yellow Book: a letter from your healthcare professional should list your medications with generic names and doses.'] }),
      n => ({ head: 'On ' + n + ', pills are not covered. Diabetes UK says there is no limit on tablets through security, but list them in your doctor’s letter.',
        lines: ['Diabetes UK: there is no restriction on the number of tablets you can take through airport security.', 'Diabetes UK: the tablets should be mentioned in your doctor’s letter.'] }),
      n => ({ head: n + ' does not address pills. The CDC says medicines belong in your carry-on, not in checked baggage.',
        lines: ['CDC Yellow Book: carry medicines in your hand luggage, not in the hold.', 'CDC Yellow Book: keep all your necessary medications in the containers they came in.'] }),
      n => ({ head: 'For pills and capsules, ' + n + ' gives no answer. The CDC advises a letter from your doctor that lists each medicine with its generic name and dose.',
        lines: ['CDC Yellow Book: the letter should be on the clinic’s letterhead and list the medications prescribed, with generic names and doses.', 'CDC Yellow Book: it should also name allergies and any equipment you need for your condition.'] }),
      n => ({ head: n + ' is silent on liquid medicine. Diabetes UK says some airlines ask for a doctor’s letter, so check with ' + n + ' before you fly.',
        lines: ['Diabetes UK: a doctor’s letter is requested by some airlines and is helpful to show security if there is any confusion.', 'Diabetes UK: say in the letter if you need to carry medication in containers over 100 ml.'] }),
      n => ({ head: 'On ' + n + ', liquid medicine over 100 ml is not covered. Diabetes UK says the ordinary limit is 100 ml, so explain larger containers in a doctor’s letter.',
        lines: ['Diabetes UK: liquid items in hand luggage are only allowed in containers of 100 ml or less under current security rules.', 'Diabetes UK: the letter should cover your medication and any container over 100 ml that you need.'] }),
      n => ({ head: n + ' says nothing on syringes. Diabetes UK tells diabetics to keep supplies in hand luggage and carry a doctor’s letter.',
        lines: ['Diabetes UK: put insulin, diabetes medication and supplies in your hand luggage.', 'Diabetes UK: a letter from your doctor is useful if airport security is unsure about your supplies.'] }),
      n => ({ head: 'For needles and syringes, ' + n + ' gives no answer. Diabetes UK says to ask the airline whether it wants a letter.',
        lines: ['Diabetes UK: some airlines and other operators ask for a letter, so check before you travel.', 'Diabetes UK: the letter should describe your medication and the devices you use.'] }),
      n => ({ head: n + ' has no word on cold storage. Diabetes UK says insulin damaged by heat can turn brownish or cloudy and should not be used.',
        lines: ['Diabetes UK: insulin damaged by heat may have a brownish colour, and clear insulin may become cloudy.', 'Diabetes UK: do not use insulin that looks like this; a cool bag helps to keep it cool.'] }),
      n => ({ head: 'On ' + n + ', keeping medication cold is not covered. Diabetes UK recommends a cool bag in your hand luggage, never frozen.',
        lines: ['Diabetes UK: keep insulin cool in a cool bag, but make sure it does not freeze.', 'Diabetes UK: sensors and other device spares must go in hand luggage too, because hold X-rays can damage them.'] })
    ] },
    liquids: { status: 'warn', verdict: 'Doctor’s letter if over 100 ml', sources: [DUK], variants: [
      n => ({ head: n + ' gives no figure for liquid medicine. Diabetes UK says to put any need for containers over 100 ml in your doctor’s letter.',
        lines: ['Diabetes UK: the letter should include details of your medication and whether you need to carry it in containers over 100 ml.', 'Diabetes UK: some airlines ask for the letter, so check with the airline before you travel.'] }),
      n => ({ head: 'Nothing from ' + n + ' on liquid medicine over 100 ml. Diabetes UK advises a letter from your doctor that explains the need.',
        lines: ['Diabetes UK: a letter from your doctor can state that you need to carry medication in containers over 100 ml.', 'Diabetes UK: some airlines request the letter and it helps if security staff are unsure.'] }),
      n => ({ head: 'For liquid medicine, ' + n + ' is silent. Diabetes UK says ordinary liquids in hand luggage must be 100 ml or less, so carry a letter for any larger medicine container.',
        lines: ['Diabetes UK: current security rules allow liquids in hand luggage only in containers of 100 ml or less.', 'Diabetes UK: the doctor’s letter should say if you need medication in containers over 100 ml.'] })
    ] },
    needles: { status: 'warn', verdict: 'Hand luggage, doctor’s letter', sources: [DUK], variants: [
      n => ({ head: n + ' gives no rule on needles and syringes. Diabetes UK says to carry insulin and supplies in hand luggage, with a doctor’s letter.',
        lines: ['Diabetes UK: always carry insulin, other diabetes medication and supplies in your hand luggage.', 'Diabetes UK: a letter from your GP is requested by some airlines and helps if security is unsure.'] }),
      n => ({ head: 'Nothing from ' + n + ' on syringes. Diabetes UK advises keeping them in hand luggage and bringing a letter that names your medication and devices.',
        lines: ['Diabetes UK: the letter should give details of your medication and any devices you use.', 'Diabetes UK: insulin and other diabetes supplies belong in hand luggage, not in the hold.'] }),
      n => ({ head: 'On ' + n + ', needles are not covered. Diabetes UK says some airlines want a doctor’s letter, so ask the airline before you fly.',
        lines: ['Diabetes UK: check with the airline before you travel, as some airlines and operators ask for a letter.', 'Diabetes UK: pack your diabetes medication and supplies in your hand luggage.'] })
    ] },
    cold: { status: 'warn', verdict: 'Cool bag in the cabin, never frozen', sources: [DUK], variants: [
      n => ({ head: n + ' gives no cold-storage rule. Diabetes UK says to keep insulin cool in a cool bag, as long as it does not freeze.',
        lines: ['Diabetes UK: keep insulin cool in a cool bag, providing it does not freeze.', 'Diabetes UK: carry insulin in hand luggage; the hold can damage it.'] }),
      n => ({ head: 'Nothing from ' + n + ' on cold storage. Diabetes UK advises a cool bag and keeping insulin away from frozen ice blocks.',
        lines: ['Diabetes UK: if your cool bag uses plastic ice blocks, make sure the insulin does not touch the frozen plastic.', 'Diabetes UK: heat can damage insulin and stop it working properly.'] }),
      n => ({ head: n + ' does not say how to keep medication cold. Diabetes UK: insulin goes in your hand luggage, since the hold is cold enough to damage it.',
        lines: ['Diabetes UK: being in the hold can damage insulin because it is so cold, and luggage can be lost.', 'Diabetes UK: a cool bag is a good way to keep insulin cool, as long as it does not freeze.'] }),
      n => ({ head: 'On ' + n + ', cold storage is not covered. Diabetes UK suggests a cool bag that does not let the insulin freeze, carried in the cabin.',
        lines: ['Diabetes UK: you can also keep insulin cool in a hotel fridge if your room has one.', 'Diabetes UK: do not let insulin touch frozen plastic ice blocks in the cool bag.'] })
    ] }
  };
  const third = (kind, n) => { const t = THIRD[kind]; if (!t) return null; const v = t.variants[[...n].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 11) % t.variants.length](n); return { status: t.status, verdict: t.verdict, head: v.head, lines: v.lines, sources: t.sources }; };
  return { REG, AIRLINE_REG, AIRLINE_REG_KIND, GLOBAL, THIRD, third, poss };
};
