const openBtn = document.getElementById('open');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
openBtn.addEventListener('click', ()=>{ modal.setAttribute('aria-hidden','false'); });
closeBtn.addEventListener('click', ()=>{ modal.setAttribute('aria-hidden','true'); });
modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });
