const nextButton = document.querySelector('#next')
const previousButton = document.querySelector('#previous')
const addButton = document.querySelector('#add-image')

const addLinkButton = document.querySelector('#add')
const modalInputElement = document.querySelector('.content input')

const modalQuit = document.querySelector('.content a')

const modal = document.querySelector('.modal')

const imageElement = document.querySelector('img')

let counter = 0;
const images = ['https://images.unsplash.com/photo-1537301696988-4a82a4959466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
'https://images.unsplash.com/photo-1429892494097-cccc61109f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
'https://images.unsplash.com/photo-1593053138039-c8cdd703700e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
'https://images.unsplash.com/photo-1593291619462-e4240344ea21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
'https://images.unsplash.com/photo-1593447261553-c1d26bd46f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
'https://images.unsplash.com/photo-1593429978083-45632b61d842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80']

imageElement.setAttribute('src', images[0]) // Colocando a foto inicial na página

// Função para mostrar a imagem posterior do array de imagens
nextButton.addEventListener('click', () => {

    if (counter > images.length - 2) {
        alert('Não há mais imagens posteriores.')
    } else {
        counter++
        imageElement.setAttribute('src', images[counter])
    }

})

// Função para mostrar a imagem anterior do array de imagens
previousButton.addEventListener('click', () => {

    if (counter === 0) {
        alert('Não há mais imagens anteriores.')
    } else {
        counter--
        imageElement.setAttribute('src', images[counter])
    }
})

// Função para adicionar uma nova imagem ao array de imagens
addLinkButton.addEventListener('click', () => {
    if (modalInputElement.value.length === 0 || modalInputElement.value.indexOf('http') === -1) {
        alert('Complete o campo abaixo com uma URL.')
    } else {
        images.push(modalInputElement.value)

        modalInputElement.value = ''
        modal.classList.add('hide')
    }
})

addButton.addEventListener('click', () => {
    modal.classList.remove('hide')
})

modalQuit.addEventListener('click', () => {
    modal.classList.add('hide')
})

