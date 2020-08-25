const input = document.querySelector('.container section input')
const button = document.querySelector('.container section button')
const allNumberDiv = document.querySelectorAll('.number')
const score = document.querySelector('.container header .placar')

const scoreboardField = document.querySelector('.scoreboard')
const showScoreBtn = document.querySelector('.show-scoreboard')
let ul = document.querySelector('.scoreboard ul')

const clearScoreboard = document.querySelector('.clear-scoreboard')

let scoreList = JSON.parse(localStorage.getItem('scoreboard_list')) || [];

let soma = 0;
let counter = 0;
let seconds = 0;
let intervalID;

const startTimer = () => {
    clearInterval(intervalID)
    seconds = 0;

    intervalID = setInterval(() => {
        seconds++;
    }, 1000)
}

startTimer();

// Salva um novo registro no array de placares
const saveScore = () => {
    let cache = []

    allNumberDiv.forEach(numberDiv => cache.push(numberDiv.innerHTML))

    scoreList.push({ "seconds": seconds, "question": `${cache[0]} + ${cache[1]}` })
    cache = []
    addNewScore();
}


// Renderiza os números em tela
const populateNumbers = () => {
    soma = 0;
    allNumberDiv.forEach(numberDiv => {
        let randomNumber = Math.floor(Math.random() * 10)
        numberDiv.innerHTML = randomNumber
        soma += randomNumber
    })
}

button.addEventListener('click', () => {
    if (checkInput()) {
        renderMessage('Por favor, digite uma resposta antes de checá-la.', 'error');
        return;
    }

    let valor = Number(input.value);

    if (valor === soma) {
        renderMessage(`Parabéns, você acertou! O número era ${Number(soma)}.`, 'success');
        counter++;
        score.innerHTML = counter;

        saveScore()
        startTimer()
    } else {
        renderMessage(`Você errou. O número era ${soma}.`, 'error');
    }
    
    input.value = ''
    input.focus()
    populateNumbers()  
})

// Mostra e esconde o placar;
showScoreBtn.addEventListener('click', () => {
    scoreboardField.classList.toggle('hide')
    clearScoreboard.classList.toggle('hide')
})

clearScoreboard.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

// Renderiza uma mensagem de sucesso ou erro, com uma mensagem e um tipo passados de parâmetro;
const renderMessage = (text, type) => {
    const warningDiv = document.querySelector('.container .warning');
    const warningText = document.querySelector('.container .warning p');

    warningDiv.classList.toggle(type);
    warningDiv.classList.toggle('hide');
    warningText.textContent = text;

    setTimeout(() => {
        warningDiv.classList.toggle('hide');
        warningDiv.classList.toggle(type);
    }, 2000)
}

// Adiciona um novo registro na lista de placares;
const addNewScore = () => {
    let { seconds, question } = scoreList[scoreList.length -1];

    let li = document.createElement('li')
    li.innerHTML = `Seconds: ${seconds} // Math Question: ${question}`
    ul.appendChild(li)
    saveToStorage()
}

const saveToStorage = () => {
    localStorage.setItem('scoreboard_list', JSON.stringify(scoreList))
}

const populateScoreboard = () => {
    scoreList.forEach(score => {
        let li = document.createElement('li')
        li.innerHTML = `Seconds: ${score.seconds} // Math Question: ${score.question}`
        ul.appendChild(li)
    })
}

// Função em variável que checa se o valor do input é vazio e retorna um "true" caso sim e um "false" caso não;
const checkInput = () => input.value.length === 0 ? true : false;

populateScoreboard()
populateNumbers();

