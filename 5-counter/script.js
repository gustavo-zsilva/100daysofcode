const number = document.querySelector('.current-number')
let counter = 0;

function count(id) {
    if(id === 0) {
        // LOWER COUNT
        counter--
        number.innerHTML = counter
        
    } else {
        // ADD COUNT
        counter++
        number.innerHTML = counter

    }
}