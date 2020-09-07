const input = document.querySelector('section.inputs input')
const addBtn = document.querySelector('section.inputs button')
const balloonDiv = document.querySelector('section.balloons')

const balloonColors = ['red', 'blue', 'green', 'yellow', 'black']

let balloonsRendered = 0;
let popped = 0;

addBtn.addEventListener('click', () => {
    resetItems()

    balloonsRendered = Number(input.value);

    for (let c = 0; c < Number(input.value); c++) {
        let randomBalloonColor = Math.floor(Math.random() * balloonColors.length)

        const balloon = document.createElement('div');
        balloon.classList.add('balloon-element');
        balloon.style.backgroundColor = balloonColors[randomBalloonColor];

        balloon.addEventListener('mouseover', renderBalloons);

        balloonDiv.appendChild(balloon)
    }

    input.value = '';
})

function renderBalloons(event) {
    const balloonTarget = event.target;

    balloonTarget.removeEventListener('mouseover', renderBalloons)
        balloonTarget.innerHTML = 
        `<p style="color: ${balloonTarget.style.backgroundColor};">POP!<p>`;

    balloonTarget.style.backgroundColor = 'transparent';
    popped++;

    checkBalloons();
}

function checkBalloons() {
    if (popped === balloonsRendered) {
        resetItems(false)
    }
}

function resetItems(hideModal = true) {
    const modal = document.querySelector('.modal')
    balloonDiv.innerHTML = ''

    hideModal
    ? modal.classList.add('hide')
    : modal.classList.remove('hide')

    popped = 0;
}