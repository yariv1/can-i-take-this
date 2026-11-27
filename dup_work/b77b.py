# Belgium cash: the card now has the official EU page that answers it (read 27 November 2026); the outdated "could not re-open" text goes
import json

EU = 'https://europa.eu/youreurope/citizens/travel/carry/carrying-cash/index_en.htm'
raw = open('country_unique.json', encoding='utf8', newline='').read()
u = json.loads(raw)
e = u['cash']['belgium']
assert len(e['more']) == 1 and e['more'][0].get('side')
e['more'].insert(0, {
    "h": "Declaring cash at Belgium’s EU border",
    "p": ["The EU’s Your Europe page says anyone entering or leaving the EU with €10,000 or more in cash, or the equivalent, must declare it to customs in the EU country of entry or exit on the EU cash declaration form.",
          "Cash here means banknotes and coins, bearer instruments such as traveller’s cheques and signed money orders without a named beneficiary, coins of at least 90% gold, and bars or nuggets of at least 99.5% gold.",
          "A missing, incorrect or incomplete declaration is penalised. Customs may check you, your bags and your vehicle, and may step in below the threshold if there are signs of a link to crime.",
          "There are no EU-wide rules for cash carried between EU countries, so ask customs where you leave, arrive and transit."],
    "src": "Official source read 27 November 2026: Your Europe, rules for taking cash in and out of the EU (page last checked by the EU on 21 September 2026).",
    "link": [EU, "Your Europe: taking cash in and out of the EU"]})
e['h'] = "What the UK government says about cash in Belgium"
e['p'] = ["The UK government’s travel advice for Belgium also tells travellers to complete a disclosure form at customs for currency worth 10,000 euros or more."]
open('country_unique.json', 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
l['country/belgium/cash'].setdefault('official', []).append('read 2026-11-27: Your Europe carrying cash page, ' + EU)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))
print('ok')
