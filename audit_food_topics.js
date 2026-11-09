// Food country pages: no "Not read" chip (unclear), no alcohol/tobacco chip (own tabs), typeahead answers at least 4 foods.
const fd=require('./food_detail.js'),PT=require('./page_typeahead.js'),ex=require('./food_extra.json');
const db=PT.appVar('FOOD_DB');const bad=[];
for(const k of Object.keys(ex)){const T=fd.TOPICS[k];if(!T){bad.push(k+': no topics');continue;}
 T.topics.forEach(t=>{if(/^not read$/i.test(t.label))bad.push(k+': chip "Not read"');if(/alcohol|tobacco/i.test(t.label))bad.push(k+': alcohol/tobacco chip "'+t.label+'"');});
 let n=0;db.forEach(e=>{if(fd.topicFor(T,e.c,e.n))n++});if(n<4)bad.push(k+': typeahead answers only '+n+' foods');}
if(bad.length){console.log('FAIL food topics:\n'+bad.join('\n'));process.exit(1)}
console.log('OK food topics ('+Object.keys(ex).length+' countries)');
