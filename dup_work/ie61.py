import json
p='country_unique.json'
d=json.load(open(p,encoding='utf8'))
e=d['plants']['ireland']
e['h']="What Irish Revenue and the Department of Agriculture say about plants brought in by passengers"
e['p'].append("The Department of Agriculture's page on personal consignments (updated 12 June 2026) lists plants, fruit, vegetables, cut flowers, seeds, soil and timber as items that may not come in from a third country without a phytosanitary certificate shown at the point of entry. It counts Great Britain as a third country but not Northern Ireland, and exempts bananas, durians, dates, pineapples and coconuts.")
e['src']+=" Also read on 23 November 2026: Department of Agriculture, Food and the Marine, \"Information on Personal Consignments in Luggage or through Postal, Courier & Online Services\"."
e['link']=["https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/information-on-personal-consignments-in-luggage-or-through-postal-courier-online-services/","Department of Agriculture: Personal consignments in luggage"]
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,separators=(',',':'),ensure_ascii=False))
