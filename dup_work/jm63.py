import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
rt=json.dumps(d,ensure_ascii=False,indent=1)
assert rt==raw or rt+'\n'==raw, 'roundtrip'
jm=d['JM']
cust={
 "h":"🛃 What Jamaica Customs Agency says about what you can bring",
 "p":"From the Jamaica Customs Agency (JCA) pages \"Prohibited Items\", \"Restricted / Prohibited Items\" and \"Passenger Allowance\" (jca.gov.jm, read 23 November 2026). None of these pages names e-cigarettes or vape liquid, so there is no vape-specific traveller rule to quote.",
 "table":{"head":["Point","What JCA says"],"rows":[
  ["Prohibited list","Absolutely forbidden items include indecent or obscene material, counterfeit coin and certain occult publications; vapes are not named"],
  ["Restricted goods","Goods that need a permit and arrive without one breach section 210 of the Customs Act; JCA says its list is not exhaustive and changes as the government decides"],
  ["Tobacco concession","Tobacco and some potable articles are allowed for personal use in quantities the Commissioner approves; the page gives no figure and does not mention vapes"],
  ["Other goods","Passengers aged 18 or over get a concession on personal effects up to US$1,000 in total value, if not imported for sale"]]},
 "list":["<strong>What this means:</strong> JCA does not list vapes as banned, and does not give a vape allowance either. Ask JCA before you fly with more than one device and a few bottles of liquid."]
}
jm['sections']=[cust]+jm['sections']
s1=jm['sections'][1]
s1['p']="Less reliable source (secondary profile): the Global State of Tobacco Harm Reduction (GSTHR) country page, updated 16 November 2026 and read on 22 November 2026. It compiles other sources and is not a customs page, so treat it as background."
s1['list']=["<strong>Not found:</strong> a Jamaican law or customs rule that names vapes for travellers."]
jm['faq'][0][1]="Jamaica Customs does not list vapes as prohibited on its pages. A secondary profile (GSTHR) says vaping is allowed with no nicotine or flavour limits, but use in public places is restricted. No traveller allowance is published, so check Jamaica Customs."
jm['faq'].insert(1,["Do Jamaica Customs list e-cigarettes as banned?","No. The JCA prohibited list names obscene material, counterfeit coin and certain occult publications. Restricted goods need a permit, and JCA says its list is not exhaustive."])
jm['src']=[["https://jca.gov.jm/individual/passenger/prohibited-items/","Jamaica Customs Agency: Prohibited Items"],["https://jca.gov.jm/individual/passenger/passenger-allowance/","Jamaica Customs Agency: Passenger Allowance"]]+jm['src']
out=json.dumps(d,ensure_ascii=False,indent=1)
open(p,'w',encoding='utf8',newline='').write(out+('\n' if raw.endswith('\n') else ''))
