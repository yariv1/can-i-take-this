import json
D="22 November 2026"
url="https://www.royalairmaroc.com/us-en/special-baggage"
def sp(kind,h,ans,rows,lst,faq):
    return {"airline":"Royal Air Maroc",kind:{"checked":D,"answer":ans,"sections":[{"h":h,"p":"From the \"Baggage restrictions\" block of the Royal Air Maroc Special baggage page, read on %s."%D,"table":{"head":["Question","Royal Air Maroc rule"],"rows":rows},"list":lst}],"faq":faq,"sources":[[url,"Royal Air Maroc &mdash; Special baggage (baggage restrictions)"]]}}
a=sp("alcohol","🥃 What Royal Air Maroc says about alcohol",
 "Royal Air Maroc says alcohol of up to 70° is authorised subject to strict volume limits per container and per passenger, but the page gives no figures. In the cabin, liquids and creams must be in containers of 100 ml or less inside a transparent 20 cm by 20 cm bag.",
 [["Alcohol strength","Up to 70°"],["Volume limits","Strict, per container and per passenger; no numbers on the page"],["Liquids in the cabin","Containers of 100 ml or less in a transparent bag of 20 cm by 20 cm"],["Alcohol and perfume listed together","Yes, in one line of the restrictions block"]],
 ["<strong>Not on the page:</strong> the litre limits, and whether a bottle goes in the cabin or the hold. Ask Royal Air Maroc before you fly with a bottle."],
 [["Can I take alcohol on Royal Air Maroc?","Yes up to 70° within strict per-container and per-passenger limits that the page does not spell out."],["What size bag do liquids go in on Royal Air Maroc?","A transparent plastic bag of 20 cm by 20 cm, with containers of 100 ml or less."]])
p=sp("perfume","🧴 What Royal Air Maroc says about perfume",
 "Royal Air Maroc authorises perfumes and colognes subject to strict volume limits per container and per passenger, without giving figures. Liquids and creams in the cabin must be in containers of 100 ml or less inside a transparent 20 cm by 20 cm bag.",
 [["Perfumes and colognes","Authorised with strict volume limits per container and per passenger"],["Cabin liquids and creams","100 ml or less per container, in a transparent 20 cm by 20 cm bag"],["Compressed gases such as aerosols","Listed among restricted items on the baggage information page"],["Volume figures","Not on the page"]],
 ["<strong>Not on the page:</strong> the exact per-container and per-passenger volumes. Confirm with Royal Air Maroc."],
 [["Can I take perfume on Royal Air Maroc?","Yes within strict per-container and per-passenger volume limits, which the page does not give in numbers."],["Are aerosols allowed on Royal Air Maroc?","The baggage information page lists compressed gases such as aerosols among restricted items."]])
json.dump(a,open('dup_work/airspecs/alc61_ram.json','w',encoding='utf8'),ensure_ascii=False)
json.dump(p,open('dup_work/airspecs/perf61_ram.json','w',encoding='utf8'),ensure_ascii=False)
