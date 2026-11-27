// The short line under "Some rules apply" on the static cards: it names the kind of rule, read from the card's own headline.
// First matching pattern wins. A headline no pattern knows falls back to "At the border".
const R = {
  alcohol: [
    [/no litre limit/i, 'Limit by value, not litres'],
    [/^declare/i, 'Declare above the limit'],
    [/non-muslims only/i, 'Non-Muslims only'],
    [/very small allowance/i, 'Very small allowance'],
    [/after 48 hours/i, 'Depends on your time abroad'],
    [/not confirmed/i, 'Limit not confirmed'],
    [/tight limits/i, 'Tight limits apply'],
    [/21 or older/i, 'Duty-free limit, age 21+'],
    [/18 or older/i, 'Duty-free limit, age 18+'],
    [/allowance|\d ?L\b|litre/i, 'Duty-free limit applies']
  ],
  tobacco: [
    [/no cigarette limit/i, 'Limit by value, not quantity'],
    [/no duty-free amount/i, 'Declare it at the border'],
    [/^declare/i, 'Declare above the limit'],
    [/no duty-free allowance/i, 'All tobacco is taxed'],
    [/not confirmed/i, 'Limit not confirmed'],
    [/tiny allowance/i, 'Very small allowance'],
    [/lower limit for all/i, 'Lower EU limit applies'],
    [/by land or sea/i, 'Depends on how you arrive'],
    [/18 or older/i, 'Duty-free limit, age 18+'],
    [/allowance|exemption|cigarettes/i, 'Duty-free limit applies']
  ],
  cash: [
    [/^no limit/i, 'You may be asked to disclose'],
    [/no declaration needed/i, 'Questions on large sums'],
    [/expect a check/i, 'Checks on large sums'],
    [/exempt/i, 'Exempt up to a set amount'],
    [/needs permission/i, 'Big sums need permission'],
    [/in writing/i, 'Large sums: declare in writing'],
    [/declare|report/i, 'Large sums must be declared']
  ],
  vape: [
    [/no traveller limit is published/i, 'No traveller limit published'],
    [/rules changed/i, 'Recent change: check customs'],
    [/^declare/i, 'Declare it at the border'],
    [/sale restricted/i, 'Sale is restricted'],
    [/import banned/i, 'Import ban with an exception'],
    [/approval/i, 'Official approval needed'],
    [/\d+ ?ml|units|limit/i, 'Quantity limit applies']
  ],
  plants: [
    [/without a permit/i, 'Permit needed'],
    [/do not bring fresh/i, 'Fresh plants are not allowed'],
    [/only dried/i, 'Weight limit and approval'],
    [/up to \d+ kg/i, 'Weight limit and certificate'],
    [/small amounts? /i, 'Depends on the amount'],
    [/banned|prohibited|no soil/i, 'Some items are banned'],
    [/ask the .* first/i, 'Ask the authority first'],
    [/certificate and an inspection/i, 'Certificate and inspection'],
    [/two documents/i, 'Two documents needed'],
    [/permit or certificate/i, 'Permit or certificate needed'],
    [/(permit|licence).*certificate|certificate.*(permit|approval)/i, 'Permit and certificate rules'],
    [/certificate/i, 'Plant certificate needed'],
    [/permit|licence/i, 'Permit needed'],
    [/approval|clear it/i, 'Approval needed'],
    [/inspected/i, 'Inspected on arrival'],
    [/restricted/i, 'Import is restricted'],
    [/declare/i, 'Declare on arrival']
  ],
  med: [
    [/controlled substance/i, 'Depends on controlled status'],
    [/cannot be imported/i, 'Import not permitted'],
    [/limited amount/i, 'Amount limit and documents'],
    [/medical certificate/i, 'Small amount, with certificate'],
    [/approval before you travel|written approval|permission from/i, 'Approval needed before travel'],
    [/arrange approval/i, 'Approval may be needed'],
    [/prescription papers/i, 'Declare with your prescription'],
    [/prescribed to you/i, 'Your own prescription only'],
    [/official certificate/i, 'Official certificate needed'],
    [/permit/i, 'Permit needed'],
    [/licence/i, 'A licence may be needed'],
    [/strength/i, 'Depends on the strength'],
    [/who you are/i, 'Depends on who you are'],
    [/conditions/i, 'Conditions apply']
  ],
  pets: [
    [/no published rule set/i, 'Ask the authority first'],
    [/cannot travel as baggage/i, 'Not as baggage or in cabin'],
    [/no longer issues/i, 'Import permits not issued'],
    [/strictly prohibited|breeds? (are|is) banned|banned-breed|banned list|list of dog breeds/i, 'Animal or breed bans apply'],
    [/not quarantined/i, 'Rabies proof needed'],
    [/no import permit/i, 'Health certificate needed'],
    [/advance noc/i, 'Advance approval needed'],
    [/72 hours before/i, 'Tell the authority in advance'],
    [/quarantine/i, 'Quarantine rules apply'],
    [/veterinary papers/i, 'Vet paperwork needed'],
    [/about the permit/i, 'Ask about an import permit'],
    [/permit|licence|import clearance|advance noc/i, 'Import permit needed'],
    [/rehoming/i, 'Stricter if you rehome'],
    [/puppies/i, 'Puppy age limit applies'],
    [/very young or unvaccinated/i, 'Age and vaccine rules'],
    [/must be declared/i, 'Declare your pet at customs'],
    [/notified|advance notice|told \d+ hours ahead/i, 'Tell the authority in advance'],
    [/depends? on|differ/i, 'Depends where you come from'],
    [/health standard/i, 'New import standard applies'],
    [/tapeworm treatment \d/i, 'Treatment and age rules'],
    [/follow the steps/i, 'Steps to take before travel'],
    [/extra measures/i, 'EU rules plus extra measures'],
    [/standard eu conditions/i, 'Standard EU conditions apply'],
    [/import form/i, 'A form is needed for dogs'],
    [/approved|designated|authorised|enter only/i, 'Set entry points apply'],
    [/certificate|passport|paperwork|papers|document/i, 'Vet paperwork needed'],
    [/microchip|rabies|vaccin/i, 'Microchip and rabies rules']
  ]
};
module.exports = function cardSub(cat, head) {
  const hit = (R[cat] || []).find(r => r[0].test(String(head || '')));
  return hit ? hit[1] : 'At the border';
};
