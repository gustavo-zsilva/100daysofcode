const input = document.querySelector('.new-todo input')
const addBtn = document.querySelector('.new-todo button')

const ul = document.querySelector('.todos ul')

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

addBtn.addEventListener('click', () => {
    if (checkInput()) {
        alert('Digite um valor no campo de input antes.')
        return;
    }

    todos.push(input.value);
    input.value = '';
    input.focus();
    renderTodos();
})

function renderTodos() {
    ul.innerHTML = ''

    todos.map(todo => {
        let li = document.createElement('li')
        let span = document.createElement('span')
        let rmBtn = document.createElement('img')
        let editBtn = document.createElement('img')

        span.textContent = todo;
        rmBtn.src = 'https://image.flaticon.com/icons/svg/1828/1828843.svg';
        editBtn.src = 'https://image.flaticon.com/icons/svg/598/598234.svg';

        rmBtn.addEventListener('click', () => {
            let index = todos.indexOf(todo);
            todos.splice(index, 1);
            renderTodos();
            saveToStorage();
        });

        editBtn.addEventListener('click', () => {
            let index = todos.indexOf(todo);
            input.value = todo;
            todos.splice(index, 1);
            saveToStorage();
        });

        li.appendChild(rmBtn);
        li.appendChild(editBtn);
        li.appendChild(span);

        ul.appendChild(li);
        saveToStorage();
    })
}

const checkInput = () => input.value.length === 0 ? true : false;

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

renderTodos();