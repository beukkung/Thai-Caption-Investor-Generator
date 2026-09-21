import fs from 'node:fs';
import vm from 'node:vm';

const requiredFiles=[
  'index.html','styles.css','app.js',
  'caption-funny.html','caption-love.html','caption-food.html',
  'caption-travel.html','caption-work.html','caption-money.html'
];

for(const file of requiredFiles){
  if(!fs.existsSync(file)) throw new Error('Missing required file: '+file);
}

const html=fs.readFileSync('index.html','utf8');
for(const id of ['topics','tones','platforms','context','generate','refresh','results','toast']){
  if(!html.includes('id="'+id+'"')) throw new Error('Missing UI id: '+id);
}

const js=fs.readFileSync('app.js','utf8');
new vm.Script(js);

for(const label of ['ฮา / กวน','รัก / โสด','กิน / คาเฟ่','เที่ยว / วันหยุด','งาน / มนุษย์เงินเดือน','เงิน / ออม','ลงทุน','ชีวิต / กำลังใจ']){
  if(!js.includes(label)) throw new Error('Missing category: '+label);
}

for(const file of requiredFiles.filter(f=>f.startsWith('caption-'))){
  const page=fs.readFileSync(file,'utf8');
  if(!page.includes('ลอง Generator')) throw new Error(file+' is missing generator CTA');
  if(!page.includes('meta name="description"')) throw new Error(file+' is missing meta description');
}

console.log('Smoke tests passed.');
