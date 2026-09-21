import fs from 'node:fs';
import vm from 'node:vm';

const requiredFiles=[
  'index.html','styles.css','app.js','monetization.js','revenue.js',
  'caption-funny.html','caption-love.html','caption-food.html',
  'caption-travel.html','caption-work.html','caption-money.html',
  'about.html','privacy.html'
];

for(const file of requiredFiles){
  if(!fs.existsSync(file)) throw new Error('Missing required file: '+file);
}

const html=fs.readFileSync('index.html','utf8');
for(const id of ['topics','tones','platforms','context','generate','refresh','results','toast']){
  if(!html.includes('id="'+id+'"')) throw new Error('Missing UI id: '+id);
}

for(const script of ['app.js','monetization.js','revenue.js']){
  new vm.Script(fs.readFileSync(script,'utf8'));
}

const config=fs.readFileSync('monetization.js','utf8');
if(!config.includes('adsense')) throw new Error('AdSense config missing');
if(!config.includes('s.shopee.co.th')) throw new Error('Shopee affiliate URL validation missing from config documentation expectation');

const revenue=fs.readFileSync('revenue.js','utf8');
if(!revenue.includes('pagead2.googlesyndication.com')) throw new Error('AdSense loader missing');
if(!revenue.includes('SHOPEE PICKS')) throw new Error('Shopee affiliate renderer missing');

for(const file of requiredFiles.filter(f=>f.startsWith('caption-'))){
  const page=fs.readFileSync(file,'utf8');
  if(!page.includes('ลอง Generator')) throw new Error(file+' is missing generator CTA');
  if(!page.includes('meta name="description"')) throw new Error(file+' is missing meta description');
  if(!page.includes('revenue.js')) throw new Error(file+' is missing monetization scripts');
}

console.log('Smoke tests passed.');