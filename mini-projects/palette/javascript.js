const gen = document.getElementById('gen');
const palette = document.getElementById('palette');

function randHex(){ return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'); }
function render(){ palette.innerHTML=''; for(let i=0;i<5;i++){ const c=randHex(); const d=document.createElement('div'); d.className='box'; d.style.background=c; d.textContent=c; d.onclick=()=>{navigator.clipboard.writeText(c)}; palette.appendChild(d);} }

gen.addEventListener('click', render);
render();
