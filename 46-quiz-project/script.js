const questionDiv = document.querySelector('.quiz .question')
const answerDiv = document.querySelector('.quiz .answers')
const nextButton = document.querySelector('.quiz .next-question')
let counter = 0;
let correctCounter = 0;
let t = 0;

function renderAnswers() {
    nextButton.classList.add('hide')

    answerDiv.innerHTML = ''
    questionDiv.innerHTML = quizElements[counter].question

    quizElements[counter].answers.forEach((answer) => {
        t = 0;
        let button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkCorrect(answer, quizElements[counter]));

        answerDiv.appendChild(button);
    });
};

nextButton.addEventListener('click', renderAnswers);

const checkCorrect = (answer, quiz) => {
    if (t === 1) { return }
    t++
    let correctAnswer = quiz.answers[quiz.correct];
    let allButtons = document.querySelectorAll('.answers button')

    allButtons.forEach(btn => {
        if (btn.innerHTML === correctAnswer) {
            btn.style.backgroundColor = 'rgba(2, 233, 2, 0.623)';
            return;
        }
        btn.style.backgroundColor = 'rgba(255, 0, 0, 0.486)';
    })

    if (answer === correctAnswer){
        alert('Correct Answer!')
        correctCounter++
        
    }
    counter++
    nextButton.classList.remove('hide')

    if (counter > quizElements.length - 1) {
        renderFinishScreen();
        return;
    }
}
    
function renderFinishScreen() {
    alert('Finish Screen')
    answerDiv.innerHTML = ''
    let finishText = document.createElement('h2')
    answerDiv.appendChild(finishText)
    finishText.textContent = 'Você completou o quiz!'
    answerDiv.innerHTML += `Número de perguntas: ${counter}<br>`;
    answerDiv.innerHTML += `Número de acertos: ${correctCounter}`;
    counter = 0;
    correctCounter = 0;
}

const quizElements = [
    {
        question: "Pergunta 1",
        answers: ['Resposta 1', 'Resposta 2', 'Resposta 3', 'Resposta 4'],
        correct: 2
    },
    {
        question: "Pergunta 2",
        answers: ['Resposta 5', 'Resposta 6', 'Resposta 7', 'Resposta 8'],
        correct: 3
    },
    {
        question: "Pergunta 3",
        answers: ['Resposta 9', 'Resposta 10', 'Resposta 11', 'Resposta 12'],
        correct: 1
    },
]

renderAnswers();