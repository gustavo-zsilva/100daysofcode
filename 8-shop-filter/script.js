const nav = document.querySelectorAll('.navigation nav button')
const items = document.querySelectorAll('.item')

let counter = 0;
let allButtons = []
let filteredItems = []
let allDataName = []

items.forEach(item => {
    allDataName.push(item.dataset.name)
    // console.log(allDataName);
    
})



nav.forEach(button => {
    button.addEventListener('click', (j) => {
        e.preventDefault()
        
        
    })

    button.dataset.id = Number(counter)

    allButtons.push(button.dataset.id)
    
    counter++

    function identifyButton() {

        let btnData = button.dataset.id
        // console.log(btnData);
        

        

    }
});





