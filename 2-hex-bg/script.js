const button = document.querySelector('.change')
const hexText = document.querySelector('.hex')
const bg = document.querySelector('body')
button.addEventListener('click', () => {
    hexText.innerHTML = getRandomHex()
    bg.style.backgroundColor = getRandomHex()
})

function getRandomHex() {
    let hex = '#'
    const hexValues = [
        0,1,2,3,4,5,6,7,8,9,
        'a','b','c','d','e','f'
    ]

    for(var i = 1; i <= 6; i++) {
        let randomHex = hexValues[Math.floor(Math.random() * hexValues.length)]
        hex += randomHex
    }
    
    return hex;
    
}