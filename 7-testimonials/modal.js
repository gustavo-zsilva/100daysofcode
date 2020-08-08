const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.add button')
const container = document.querySelector('.container')
const a = document.querySelector('.all-content .header a')

const user = document.querySelector('#username-input') 
const imgUrl = document.querySelector('#img-url-input') 
const ratingInput = document.querySelector('#rating-input') 
const opinionInput = document.querySelector('#opinion-input') 

const finishBtn = document.querySelector('.all-content button')

modalButton.addEventListener('click', () => {
    modal.classList.remove('hide')
    container.style.filter = 'blur(2px)'
})

a.addEventListener('click', () => {

    if (user.value.length == 0 && imgUrl.value.length == 0 && ratingInput.value.length == 0 && opinionInput.value.length == 0) {
        modal.classList.add('hide')
        container.style.filter = ''
    }

    if (checkInputs()) {
        modal.classList.add('hide')
        container.style.filter = ''

        clearAll()
    } 
})

finishBtn.addEventListener('click', () => {
    importScript()

    modal.classList.add('hide')
    container.style.filter = ''

    clearAll()
})

function clearAll() {
    user.value = ''
    imgUrl.value = ''
    ratingInput.value = ''
    opinionInput.value = ''
}

function checkInputs() {
    if (user.value.length > 0 || imgUrl.value.length > 0 || ratingInput.value.length > 0 || opinionInput.value.length > 0) {
        confirmBox = confirm('As informações preenchidas serão perdidas. Deseja mesmo sair?')
        if (confirmBox) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function importScript() {( function() {

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '../7-testimonials/script.js';

document.getElementsByTagName('head')[0].appendChild(script);
})();

// depois daqui é só chamar o método desejado
// (que está dentro de script.js)
// Exemplo:

// variáveis para definir o id
let number = all[all.length -1].id;
let newNumber = Number(number += 1)

// adicionar um novo usuário
all.push({
    "user-photo": imgUrl.value,
    "user-name": user.value,
    rating: String(ratingInput.value),
    "text-review": opinionInput.value,
    id: newNumber
})

console.log(all);


 // que está lá no outro arquivo

}


