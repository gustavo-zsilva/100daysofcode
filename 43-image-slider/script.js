const img = document.querySelector('.image-container img')
const arrowRight = document.querySelector('.arrow-right')
const arrowLeft = document.querySelector('.arrow-left')
let counter = 0;

const sources = [
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1447092/pexels-photo-1447092.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
]

img.src = sources[counter]

arrowRight.addEventListener('click', () => renderImage(1))
arrowLeft.addEventListener('click', () => renderImage(0))

function renderImage(id) {
    if (id === 0) {
        counter--
        counter === -1 ? counter = sources.length - 1 : null;
        img.src = sources[counter]
        console.log(counter)
    } else {
        counter++
        img.src = sources[counter]
        counter === sources.length - 1 ? counter = 0 : null;
        console.log(counter)

    }
}

