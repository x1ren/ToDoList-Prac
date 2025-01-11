const actions = document.querySelector('#action');
const add = document.querySelector('#Container');

const toDoList = document.querySelector('#lists');
add.addEventListener('submit', (e) => {
    e.preventDefault();

    if(actions.value.trim() !== ''){
        const buttonsContainer = document.createElement('div');
        const done = document.createElement('button');
        const del = document.createElement('button');
        const list = document.createElement('li');
        
            buttonsContainer.classList.add('todo-actions');
            done.textContent = 'Done';
            done.classList.add('done');
            done.addEventListener('click', (e) => {
                
                list.style.textDecoration = "line-through";
                list.lastElementChild.style.textDecoration = "none";
            });                 
            list.textContent = actions.value;
            del.textContent = 'Delete';
            del.classList.add('delete');
            del.style.display = "flex";
            del.style.justifyContent = "flex-end";
            
            list.appendChild(done);
            list.appendChild(del);
            del.addEventListener('click', (e) => {
                list.remove();
            });
    //list.appendChild(del);
    toDoList.appendChild(list);
    actions.value = '';
    
    
    }
});
