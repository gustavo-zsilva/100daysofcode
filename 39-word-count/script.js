const input = document.querySelector('section input')
const button = document.querySelector('button')
const lengthDiv = document.querySelector('section .length-div')

button.addEventListener('click', () => {
    if (!checkInput()) {
        alert('Digite algo no campo para prosseguir.')
        return;
    }

    // Mostrar em tela o total de caracteres do texto digitado
    let textLength = input.value.trim().replace(/\s+/g, '').length;

    lengthDiv.classList.remove('hide')
    lengthDiv.innerHTML = `O total de letras do seu texto é ${textLength}.`
    lengthDiv.innerHTML += `O total de letras do seu texto contando espaços é ${input.value.trim().length}.`
    
})

const checkInput = () => input.value.length === 0 ? false : true;