const container = document.querySelector('.container')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    container.style.backgroundColor = randomColor()
})

function randomColor() {
    const colorLetters = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i <= 5; i++) {
        let randomIndex = Math.floor(Math.random() * colorLetters.length);
        color += colorLetters[randomIndex];
    }
    return color;
}