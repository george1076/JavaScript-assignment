const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')||'[]');

function save(){ localStorage.setItem('tasks', JSON.stringify(tasks)); }
function render(){
  list.innerHTML = '';
  tasks.forEach((t,i)=>{
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = t.text;
    span.className = 'task-text';
    if(t.done) span.style.textDecoration='line-through';

    const controls = document.createElement('div'); controls.className='task-controls';
    const toggle = document.createElement('button'); toggle.textContent = t.done? 'Undo':'Done';
    toggle.onclick = ()=>{ tasks[i].done = !tasks[i].done; save(); render(); };
    const del = document.createElement('button'); del.textContent='Delete'; del.onclick = ()=>{ tasks.splice(i,1); save(); render(); };
    controls.appendChild(toggle); controls.appendChild(del);

    li.appendChild(span); li.appendChild(controls);
    list.appendChild(li);
  });
}

addBtn.addEventListener('click', ()=>{
  const v = input.value.trim(); if(!v) return;
  tasks.push({text:v, done:false}); input.value=''; save(); render();
});

render();
