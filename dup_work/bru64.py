import json
p='topics_new.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
for ind in (None,1,2):
    rt=json.dumps(d,ensure_ascii=False,indent=ind) if ind else json.dumps(d,ensure_ascii=False,separators=(',',':'))
    if rt==raw or rt+'\n'==raw: print('fmt',ind); break
else: raise SystemExit('no roundtrip')
B=d['Brussels Airlines']
src1=["https://www.brusselsairlines.com/us/en/extra-services/baggage/carry-on-baggage","Brussels Airlines &mdash; Carry-on baggage"]
src2=["https://faq.brusselsairlines.com/l/en/connecting-flights-and-airport-information/what-are-the-rules-regarding-liquids-bought-at-the-airport-or-on-board","Brussels Airlines FAQ &mdash; Liquids bought at the airport or on board"]
def sec(h,what):
    return {"h":h,"p":"From the Brussels Airlines carry-on baggage page and its FAQ on liquids bought at the airport or on board (read from archived copies on 24 November 2026).","table":{"head":["Question","Brussels Airlines rule"],"rows":[
      ["Carry-on liquids","Max. 1 litre in total, bottles of 100 ml or less (the printed size counts), in a transparent resealable bag"],
      ["Duty-free bought after security","Exempt from that limit while it stays in its sealed Tax-Free bag"],
      ["Duty-free over 100 ml on a connection","Allowed through security if it is in the special sealed transparent bag, was bought within 24 hours before your flight and the bag is unopened"],
      ["If the bag is opened or items are confiscated","Brussels Airlines says it cannot accept liability"],
      ["Flights within Europe","Hand baggage can be checked in for free, so the liquid restrictions do not apply to it"]]},
      "list":["<strong>"+what+"</strong>"]}
a=B['alcohol']; a['sections'].append(sec("🛍️ Duty-free "+"bottles and carry-on liquids","What this means: a duty-free bottle of spirits over 100 ml is fine through security only in its sealed bag, bought within 24 hours of the flight and still unopened; the 5 l and 70% limits above still apply."))
a['faq'].append(["Can I carry a duty-free bottle of whisky on a Brussels Airlines connection?","Yes, if it is in the sealed transparent bag, was bought within 24 hours before your flight and the bag is unopened. Brussels Airlines accepts no liability for opened or confiscated items."])
a['sources'].append(src1); a['sources'].append(src2)
a['checked']="24 November 2026"
q=B['perfume']; q['sections'].append(sec("🛍️ Duty-free perfume and carry-on liquids","What this means: a duty-free perfume over 100 ml stays in its sealed bag, bought within 24 hours of the flight; the 0.5 l per item and 2 l total limits above still apply."))
q['faq'].append(["Can I carry duty-free perfume over 100 ml on Brussels Airlines?","Yes, in the sealed transparent bag, bought within 24 hours before your flight and unopened. Perfume in a 100 ml or smaller bottle can go in the 1-litre resealable bag."])
q['sources'].append(src1); q['sources'].append(src2)
q['checked']="24 November 2026"
out=json.dumps(d,ensure_ascii=False,indent=ind) if ind else json.dumps(d,ensure_ascii=False,separators=(',',':'))
open(p,'w',encoding='utf8',newline='').write(out+('\n' if raw.endswith('\n') else ''))
