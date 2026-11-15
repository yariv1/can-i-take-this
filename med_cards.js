const fs=require('fs');
const root=__dirname+'/medication';
const c=process.argv[2];
for(const d of fs.readdirSync(root)){
  const p=root+'/'+d+'/'+c+'/index.html';
  if(!fs.existsSync(p))continue;
  let h=fs.readFileSync(p,'utf8').replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
  const i=h.indexOf('Which medicine');
  console.log('=== '+d+'\n'+h.slice(i,i+1500)+'\n');
}
