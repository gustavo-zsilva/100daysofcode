const editButton = document.querySelector('.edit button')
const finishButton = document.querySelector('#finish')

let textReview = all[counter]["text-review"]
let username = all[counter]["user-name"]
let rating = all[counter].rating
let img = all[counter]["user-photo"]

console.log(all[counter]);


editButton.addEventListener('click', () => {
    console.log(counter);

    edit()
    finishButton.classList.remove('hide')
})

// function importScript() {(function() {

//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = '../7-testimonials/script.js';
    
//     document.getElementsByTagName('head')[0].appendChild(script);
//     })();
    
// }

function edit() {
    const cphoto = document.querySelector('.cphoto')

    let newUser = document.createElement('input')
    let newPhoto = document.createElement('input')
    let newRating = document.createElement('input')
    let newReview = document.createElement('textarea')
    let quit = document.createElement('a')

    quit.addEventListener('click', () => {
        alert('Dados não modificados.')

        newRating.value = ''
        newUser.value = ''
        newReview.value = ''
        newPhoto.value = ''

        newReview.classList.add('hide')
        newUser.classList.add('hide')
        newRating.classList.add('hide')
        newPhoto.classList.add('hide')
        quit.classList.add('hide')
        finishButton.classList.add('hide')
    })

    function configureElements() {

        newRating.type = 'number'
        newRating.max = '5'
        newRating.min = '0'
        newRating.required
    
        newReview.required
        newUser.required
        newPhoto.required
    
        newPhoto.type = 'url'
    
        newReview.cols = '70'
        newReview.rows = '5'

        quit.innerHTML = 'X'

        cphoto.appendChild(quit)
        ratingElement.appendChild(newRating)
        cphoto.appendChild(newPhoto)
        clientUser.appendChild(newUser)
        reviewElement.appendChild(newReview)
    
    }

    configureElements()

    function checkAll() {
        
        if (newUser.value.length == 0 || newReview.value.length == 0 || newPhoto.value.length == 0 || newRating.value.length == 0) {
            alert('Dados não modificados. Complete todos campos.')
            return false;
        } else {
            alert('Dados modificados.')
            return true;
        }
    }



    newReview.value = reviewElement.innerHTML

    finishButton.addEventListener('click', () => {

        if ( checkAll() ) {
            all[counter]["text-review"] = newReview.value
            all[counter]["user-name"] = newUser.value
            all[counter].rating = newRating.value
            all[counter]["user-photo"] = newPhoto.value

            newReview.remove()

            newReview.classList.add('hide')
            newUser.classList.add('hide')
            newRating.classList.add('hide')
            newPhoto.classList.add('hide')
            quit.classList.add('hide')
            finishButton.classList.add('hide')
        }
    })
    
}





