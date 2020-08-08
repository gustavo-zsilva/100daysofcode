const input = document.querySelector('.inputs input')
const addBtn = document.querySelector('.inputs img')
const clear = document.querySelector('.clear button')

const ul = document.querySelector('.list ul')

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

    ul.innerHTML = ''

    todos.forEach(todo => {
        let li = document.createElement('li')
        let span = document.createElement('span')
        let rm = document.createElement('img')
        
        span.textContent = todo
        rm.src = 'https://image.flaticon.com/icons/svg/1345/1345874.svg'

        rm.addEventListener('click', () => {
            let index = todos.indexOf(span.textContent);
            li.parentNode.removeChild(li);
            todos.splice(index, 1)
            localStorage.removeItem(span.textContent)

            saveToStorage()
        })

        li.appendChild(span)
        li.appendChild(rm)
        saveToStorage()

        ul.appendChild(li)

    })
}

addBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let warningsDiv = document.querySelector('.warnings')

    if (input.value.length === 0) {
        let p = document.querySelector('.warnings p')
        p.textContent = 'Could Not add item.'
        warningsDiv.classList.toggle('fail')
        warningsDiv.classList.toggle('hide')

        setTimeout(() => {
            warningsDiv.classList.toggle('hide')
            warningsDiv.classList.toggle('fail')
        }, 2000)

    } else {
        warningsDiv.classList.toggle('hide')

        setTimeout(() => {
            warningsDiv.classList.toggle('hide')
        }, 2000)

        todos.push(input.value)
        input.value = ''
        input.focus()
    
        renderTodos()
    }

})

clear.addEventListener('click', () => {
    todos = []
    localStorage.clear()
    location.reload()
})

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

renderTodos()

// https://image.flaticon.com/icons/svg/1345/1345874.svg