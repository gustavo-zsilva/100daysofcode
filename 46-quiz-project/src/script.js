// ---------------- Variables ----------------

const answerDiv = document.querySelector('.answers');
const questionElement = document.querySelector('.question');
const nextQuestionBtn = document.querySelector('.next-question');
const finalScreenElement = document.querySelector('.final-screen');
const modal = document.querySelector('.modal');

// Button Variables
const startGameBtn = document.querySelector('.start-game');
const restartGameBtn = document.querySelector('.restart-button');
const addQuestionsBtn = document.querySelector('.add-questions');
const submitNewQuestion = modal.querySelector('button[type=submit]');
const quitModalBtn = modal.querySelector('h1 img');

// Counter Variables
let currentQuestionIndex = 0;
let correctAnswerCounter = 0;

// Events
startGameBtn.onclick = startGame;
nextQuestionBtn.onclick = handleNextQuestion;

restartGameBtn.onclick = resetGame;
addQuestionsBtn.onclick = addQuestion;

submitNewQuestion.onclick = submitQuestionToQuiz;
quitModalBtn.onclick = () => {
    modal.classList.add('hide');
    finalScreenElement.style.filter = '';
    questionElement.style.filter = '';
};

// ---------------- Methods ----------------

// Shuffle the questions array
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Render the questions
function startGame() {
    let dataIdCounter = 0;

    startGameBtn.style.display = 'none';

    let shuffledQuestions = shuffle(responses[currentQuestionIndex].answers)

    shuffledQuestions
        .forEach(answer => {
            const responseButton = document.createElement('button');
            responseButton.textContent = answer.text;
            responseButton.setAttribute('data-id', dataIdCounter);
            responseButton.addEventListener('click', submitAnswer);
            answerDiv.appendChild(responseButton);
            dataIdCounter++;
        })

    questionElement.innerHTML = responses[currentQuestionIndex].question
}


// Check the answer and release access to the next question
function submitAnswer(event) {
    removeBtnEvents();

    const responseText = event.target.textContent;
    let dataId = event.target.dataset.id;

    responses[currentQuestionIndex].answers.forEach((answer, index) => {
       if (responseText === answer.text && answer.correct) {     
            correctAnswerCounter++;
       } else if (answer.correct) {
            dataId = index;
       }
    })

    colorizeButtons(dataId);
    nextQuestionBtn.classList.remove('hide');
}


// Remove all button event listeners after a answer has been submitted
function removeBtnEvents() {
    const allButtons = answerDiv.querySelectorAll('button')
    allButtons.forEach(btn => btn.removeEventListener('click', submitAnswer))
}


// Render next quiz question
function handleNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= responses.length) {
        renderFinishScreen()
        return;
    }

    nextQuestionBtn.classList.add('hide');
    answerDiv.innerHTML = '';
    startGame();
}


// Function for colorizing the response buttons after selecting one answer
function colorizeButtons(correctId) {
    const allButtons = answerDiv.querySelectorAll('button')

    allButtons.forEach(button => {
        button.style.backgroundColor = '#f0020267';
        if (button.dataset.id == correctId) {
            button.style.backgroundColor = '#00ff009c';
        }
    })
}


// End screen, rendered when all questions have been responded
function renderFinishScreen() {
    questionElement.innerHTML = 'Parabéns!';

    const scoreHolder = document.querySelector('.scoreboard');
    scoreHolder.innerHTML = '';

    const scoreLabels = {
        "Total de Questões": currentQuestionIndex,
        "Total de acertos": correctAnswerCounter
    }

    answerDiv.innerHTML = '';

    nextQuestionBtn.classList.add('hide')
    finalScreenElement.classList.remove('hide')

    Object.keys(scoreLabels).map(key =>  {
        scoreHolder.innerHTML += `<p>${key}: ${scoreLabels[key]}</p>`;
    });
}


// Reset the game variables
function resetGame() {
    const allModalInputs = modal.querySelectorAll('input[type=text]')

    finalScreenElement.style.filter = '';
    questionElement.style.filter = '';

    currentQuestionIndex = 0;
    correctAnswerCounter = 0;

    finalScreenElement.classList.add('hide')

    allModalInputs.forEach(input => input.value = '')

    startGame()
}

let answerContainer = [];


// Just removes the modal "hide" class
function addQuestion() {
    modal.classList.remove('hide')

    finalScreenElement.style.filter = 'blur(5px)';
    questionElement.style.filter = 'blur(5px)';
}


// Check all input fields and add new question to the Quiz
function submitQuestionToQuiz(event) {
    event.preventDefault();

    const checkedRadios = [];

    const mainModalQuestion = modal.querySelector('input[name=main-form-input]');
    const checkedRadioBtn = modal.querySelectorAll('input[name=correct-radio-answer]');

    if (checkAllModalFields()) {
        checkedRadioBtn.forEach(radioBtn => checkedRadios.push(radioBtn.checked));

        responses.push({
            question: mainModalQuestion.value,
            answers: [
                { text: answerContainer[0], correct: checkedRadios[0] },
                { text: answerContainer[1], correct: checkedRadios[1] },
                { text: answerContainer[2], correct: checkedRadios[2] },
                { text: answerContainer[3], correct: checkedRadios[3] }
            ]
        })

        modal.classList.add('hide');

        resetGame();
    }
}


// Checks all input fields and returns true if all are filled,
// and false if there is some input with value missing
function checkAllModalFields() {
    const controlArray = []
    answerContainer = []

    modal.querySelectorAll('.modal-answers input[type=text]')
        .forEach(input => {
            if (input.value.length > 0) {
                controlArray.push(true)
                answerContainer.push(input.value)
            } else {
                controlArray.push(false)
            }
    })

    return controlArray.every(bool => bool === true);
}


// Variable that stores all answers and questions from the quiz
const responses = [
    {
        question: "Qual a maior cidade do Brasil?",
        answers: [
            { text: "São Paulo", correct: true },
            { text: "Salvador", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasília", correct: false }
        ]
    },
    {
        question: "Qual o maior planeta do sistema solar?",
        answers: [
            { text: "Júpiter", correct: true },
            { text: "Marte", correct: false },
            { text: "Saturno", correct: false },
            { text: "Netuno", correct: false }
        ]
    },
    {
        question: "Qual destes animais não é classificado como um aracnídeo?",
        answers: [
            { text: "Aranha", correct: false },
            { text: "Escorpião", correct: false },
            { text: "Carrapato", correct: false },
            { text: "Centopéia", correct: true }
        ]
    }
]
