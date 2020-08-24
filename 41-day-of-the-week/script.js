const dayText = document.querySelector('section .week-day')
const description = document.querySelector('section .description')

let array = [dayText, description]

let day = new Date().getDay()

switch(day) {
    case 0:
        displayDay('Domingo', 'Hora de relaxar!')
        break
    case 1:
        displayDay('Segunda', 'Blues de segunda de manhã!')
        break
    case 2:
        displayDay('Terça', 'Terça do Taco!')
        break
    case 3:
        displayDay('Quarta', 'Só mais dois dias para o fim de semana...')
        break
    case 4:
        displayDay('Quinta', 'O fim de semana está quase aqui...')
        break
    case 5:
        displayDay('Sexta!', 'Fim de semana chegou!')
        break
    default:
        displayDay('Sábado!', 'Dia de festa!')
}



function displayDay(...params) {
    params.map((param, index) => array[index].innerHTML = param)
}