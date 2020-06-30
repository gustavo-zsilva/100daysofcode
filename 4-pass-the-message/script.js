const button = document.querySelector('button')
const messageInput = document.querySelector('input')
const modal = document.querySelector('.modal')
const ul = document.querySelector('ul')
const messagesArray = []
button.addEventListener('click', () => {

    if (messageInput.value.length == 0) {

        modal.innerHTML = 'Por favor, complete o campo da mensagem abaixo.'
        setTimeout(() => {
            modal.classList.toggle('hide')
        }, 2000)
        modal.classList.toggle('hide') 
    } else {

        modal.innerHTML = 'Mensagem foi cadastrada com sucesso.'
        modal.style.backgroundColor = 'green'

        setTimeout(() => {
            modal.classList.toggle('hide')
            modal.style.backgroundColor = ''
        }, 2000)
        modal.classList.toggle('hide')

        addMsg()
    }

})

function addMsg() {

    let li = document.createElement('li')
    li.append(messageInput.value)
    ul.appendChild(li)
    messagesArray.push(messageInput.value)

    messageInput.value = ''
    messageInput.focus()

}