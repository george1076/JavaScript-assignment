const add = document.getElementById('add');
const tbody = document.querySelector('#tbl tbody');
let rows = [];

function render(){ tbody.innerHTML=''; rows.forEach((r,i)=>{ const tr=document.createElement('tr'); tr.innerHTML=`<td>${i+1}</td><td>${r.name}</td><td>${r.role}</td><td>${r.status}</td>`; tbody.appendChild(tr); }); }

add.addEventListener('click', ()=>{
  const name = document.getElementById('name').value.trim();
  const role = document.getElementById('role').value.trim();
  const status = document.getElementById('status').value;
  if(!name||!role) return;
  rows.push({name,role,status});
  document.getElementById('name').value=''; document.getElementById('role').value='';
  render();
});
