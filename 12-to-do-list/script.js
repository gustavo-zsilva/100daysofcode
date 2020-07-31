const input = document.querySelector('.inputs input');
const addBtn = document.querySelector('.inputs button');
const ul = document.querySelector('.todos ul');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// Renderiza todos To-dos dentro do Array todos
function renderTodos() {

    ul.innerHTML = '';

    todos.forEach(todo => {
        let li = document.createElement('li');
        let edit = document.createElement('img');
        let rm = document.createElement('img');
        let check = document.createElement('img');
        let span = document.createElement('span');

        edit.src = 'https://image.flaticon.com/icons/svg/999/999679.svg';
        rm.src = 'https://image.flaticon.com/icons/svg/1828/1828843.svg';
        check.src = 'https://image.flaticon.com/icons/svg/845/845646.svg';

        span.textContent = todo;

        edit.addEventListener('click', () => {
            input.value = span.textContent
            let index = todos.indexOf(span.textContent)
            todos.splice(index, 1)
            console.log(todos);
        });

        rm.addEventListener('click', () => {
            let index = todos.indexOf(span.textContent)
            todos.splice(index, 1)
            localStorage.removeItem(index)
            li.parentNode.removeChild(li)

            saveToStorage()
        });
        check.addEventListener('click', () => {
            span.classList.toggle('checked')
        });

        li.appendChild(span);
        li.appendChild(rm);
        li.appendChild(edit);
        li.appendChild(check);

        saveToStorage(span)

        ul.appendChild(li);

    });
};


addBtn.addEventListener('click', () => {
    todos.push(input.value);
    input.value = '';
    input.focus();

    renderTodos();
});

function editElement(span) {


    
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

renderTodos()