(()=>{
  const cfg=window.MONETIZATION||{};

  function loadAdsense(){
    const client=cfg.adsense&&cfg.adsense.client;
    if(!client||!/^ca-pub-\d+$/.test(client)) return;
    if(document.querySelector('script[data-adsense-loader]')) return;
    const s=document.createElement('script');
    s.async=true;
    s.dataset.adsenseLoader='true';
    s.crossOrigin='anonymous';
    s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+encodeURIComponent(client);
    document.head.appendChild(s);
  }

  const pathMap={
    'caption-funny.html':'ฮา / กวน',
    'caption-love.html':'รัก / โสด',
    'caption-food.html':'กิน / คาเฟ่',
    'caption-travel.html':'เที่ยว / วันหยุด',
    'caption-work.html':'งาน / มนุษย์เงินเดือน',
    'caption-money.html':'เงิน / ออม'
  };

  function currentTopic(){
    const file=location.pathname.split('/').pop();
    if(pathMap[file]) return pathMap[file];
    const active=document.querySelector('#topics .chip.active');
    return active?active.textContent.trim():'ฮา / กวน';
  }

  function getAnchor(){
    const existing=document.getElementById('affiliate-recommendations');
    if(existing) return existing;
    const section=document.createElement('section');
    section.id='affiliate-recommendations';
    section.className='affiliate-wrap';
    const target=document.querySelector('.result-wrap')||document.querySelector('.caption-list')?.closest('.card');
    if(target) target.insertAdjacentElement('afterend',section);
    return section;
  }

  function renderAffiliate(topic=currentTopic()){
    const root=getAnchor();
    if(!root) return;
    const items=((cfg.shopee||{})[topic]||[]).filter(x=>x.url&&/^https:\/\/s\.shopee\.co\.th\//.test(x.url));
    if(!items.length){root.hidden=true;root.innerHTML='';return;}
    root.hidden=false;
    root.innerHTML='<div class="affiliate-head"><div><div class="eyebrow">SHOPEE PICKS • AFFILIATE</div><h2>ของที่เข้ากับโพสต์นี้</h2></div><p>คัดเฉพาะของที่สัมพันธ์กับโมเมนต์นี้ ไม่ได้เปลี่ยนผลลัพธ์แคปชั่น</p></div><div class="affiliate-grid"></div><p class="affiliate-disclosure">ลิงก์บางรายการเป็น Shopee Affiliate หากซื้อผ่านลิงก์นี้ เว็บไซต์อาจได้รับค่าคอมมิชชัน โดยคุณไม่ต้องจ่ายเพิ่ม</p>';
    const grid=root.querySelector('.affiliate-grid');
    items.slice(0,3).forEach(item=>{
      const a=document.createElement('a');
      a.className='affiliate-card';
      a.href=item.url;
      a.target='_blank';
      a.rel='sponsored noopener';
      a.innerHTML='<span class="shop-badge">Shopee</span><b></b><small></small><span class="shop-link">ดูสินค้า →</span>';
      a.querySelector('b').textContent=item.title;
      a.querySelector('small').textContent=item.note||'';
      grid.appendChild(a);
    });
  }

  window.renderAffiliate=renderAffiliate;
  loadAdsense();
  renderAffiliate();

  document.querySelectorAll('#topics .chip').forEach(btn=>{
    btn.addEventListener('click',()=>setTimeout(()=>renderAffiliate(btn.textContent.trim()),0));
  });
})();