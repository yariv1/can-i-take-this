// SOURCE LADDER step 3 for vaping pages with no readable national customs source: the page's own WHO status + the global rule, worded per page.
const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
d.vape=d.vape||{};d.vaping=d.vaping||{};
const NAME=c=>c.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ').replace('United Arab Emirates','the United Arab Emirates').replace('United Kingdom','the United Kingdom').replace('United States','the United States');
const pick=(arr,k)=>arr[[...k].reduce((a,ch)=>a+ch.charCodeAt(0),0)%arr.length];
const V=[
 'Rules on vapes at the border differ more than almost any other traveller item: some countries ban devices and liquid outright, some cap the liquid in millilitres, and some count them inside the tobacco allowance. For {N}, {A} is the place to confirm which applies.',
 'There is no common global allowance for vapes. Where they are allowed, the usual limits are a small number of devices and a few hundred millilitres of liquid, in original sealed packaging, for adults only. {A} decides what applies in {N}.',
 'A vape that is legal at home can be banned or restricted at a foreign border, and the usual outcome is confiscation, sometimes with a fine. For {N}, ask {A} before packing a device or e-liquid.',
 'Airlines add their own rule on top: devices and spare batteries go in the cabin, not the hold. Whether the device may enter {N} at all is for {A} to say.',
 'The safe habit with vapes is to declare them if you carry more than a single device for your own use, keep them in original packaging, and check the destination rule first. In {N} that rule belongs to {A}.',
 'Nicotine liquid is the part most often limited, in millilitres or in strength, while nicotine-free liquid is often treated more lightly. We have no published figure for {N}, so ask {A}.'
];
let n=0;
for(const c of fs.readdirSync('country')){
  const f='country/'+c+'/vaping/index.html';if(!fs.existsSync(f)||d.vape[c])continue;
  const t=fs.readFileSync(f,'utf8').replace(/<script[\s\S]*?<\/script>/g,'');
  const m=t.match(/ENTERING [^<]*?<\/[^>]+>[\s\S]*?Helpful sources/);
  const txt=m?m[0].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').replace(/Helpful sources.*/,'').trim():'';
  const card=txt.replace(/^ENTERING [A-Za-z ]+? (?=[A-Z])/,'').trim();
  const N=NAME(c);const A='the customs authority of '+N;
  const g=pick(V,c).replace(/\{N\}/g,N).replace(/\{A\}/g,A);
  const first=card?('Our card for '+N+' reads: '+card+' It comes from the WHO country profile, which describes how e-cigarettes are regulated for sale and use, not how many a traveller may carry.'):('Our card for '+N+' comes from the WHO country profile, which describes how e-cigarettes are regulated for sale and use, not how many a traveller may carry.');
  const p2='No national customs page on vapes was available to read for '+N+', so this section applies the general rule: '+g.charAt(0).toLowerCase()+g.slice(1);
  const e={h:'Vapes in '+N+': the WHO profile and the general rule',p:[first,p2],src:'No national customs page on vapes was read for '+N+'; the WHO country profile on the card is the data. Global rule applied, unofficial.'};
  d.vape[c]=e;n++;
}
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));console.log(n+' vaping pages written');
