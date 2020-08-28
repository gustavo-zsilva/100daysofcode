const container = document.querySelector('.container');
const dataDiv = document.querySelector('.container .date-div')
const timeDiv = document.querySelector('.container .time-div')
const newDateBtn = document.querySelector('.container .add-date')

const modal = document.querySelector('.modal')
const newDateInput = document.querySelector('.modal input')

let countDownFromDate = new Date(localStorage.getItem('timer_date')).toDateString()
let countDownDate = new Date(localStorage.getItem('timer_date')).getTime()


dataDiv.innerHTML = countDownFromDate

newDateBtn.addEventListener('click', () => {
    const quitBtn = document.querySelector('.modal img')
    const modalAddBtn = document.querySelector('.modal button')

    handleModalActions('remove', 'blur(8px)')

    quitBtn.addEventListener('click', () => handleModalActions('add'))

    modalAddBtn.addEventListener('click', () => {
        if (checkInput()) {
            alert('Digite uma data válida.')
            return;
        }

        countDownFromDate = new Date(newDateInput.value).toDateString()
        countDownDate = new Date(newDateInput.value).getTime()
        dataDiv.innerHTML = countDownFromDate
        initTimer()
        saveToStorage()
        handleModalActions('add')
    })
})

function initTimer() {
    let intervalID = setInterval(() => {
        let now = new Date().getTime()
    
        // Distância entre data atual e data marcada
        let distance = countDownDate - now;
    
        // Pegar dias, horas, minutos e segundos
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        timeDiv.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        if (distance < 0) {
            clearInterval(intervalID);
            timeDiv.innerHTML = 'Timer Expired!';
        }

    }, 1000)
}

function saveToStorage() {
    localStorage.setItem('timer_date', newDateInput.value)
}

function handleModalActions(act, blur = '') {
    act === 'add' ? modal.classList.add('hide') : modal.classList.remove('hide');
    container.style.filter = blur;
}

const checkInput = () => newDateInput.value.length === 0 ? true : false;

initTimer()
