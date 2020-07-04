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




