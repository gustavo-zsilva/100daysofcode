const button = document.querySelector('.change')
const bg = document.querySelector('body')
const colors = [
    'red',
    'blue',
    'green',
    'white',
    'black',
    'yellow',
    'pink',
    'gray',
    'orange'
]

button.addEventListener('click', () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    bg.style.backgroundColor = randomColor
    button.style.backgroundColor = randomColor
})