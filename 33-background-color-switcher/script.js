const allColors = document.querySelectorAll('.color')
const body = document.body.style
const p = document.querySelector('footer p')
const header = document.querySelector('header h1')

const colorLabel = [
    "gray", "white", "blue", "yellow"
]

allColors.forEach((color, index) => {
    color.style.backgroundColor = colorLabel[index]

    color.addEventListener('click', () => {
        header.style.color = ''
        p.style.color = ''
        
        body.backgroundColor = color.style.backgroundColor
        if (body.backgroundColor == 'blue') {
            header.style.color = 'white'
            p.style.color = 'white'
        }
    });
})
