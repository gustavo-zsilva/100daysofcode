const clientPhoto = document.querySelector('.client-photo')
const clientUser = document.querySelector('.client-user')
const ratingElement = document.querySelector('.rating')
const reviewElement = document.querySelector('.review')

let counter = 0;
let maxRating = 5;

// Onde ficam armazenados todos os dados dos usuários
const all = [
    {
        "user-photo": "https://image.flaticon.com/icons/svg/3158/3158265.svg",
        "user-name": "Vitória",
        rating: "2",
        "text-review": "Contrary to popular belief, Lorem Ipsum is not a simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        id: 0
    },
    {
        "user-photo": "https://image.flaticon.com/icons/svg/3158/3158266.svg",
        "user-name": "Catarina",
        rating: "3.5",
        "text-review": "Lorem Ipsum",
        id: 1
    },
    {
        "user-photo": "https://image.flaticon.com/icons/svg/3158/3158271.svg",
        "user-name": "Sandra",
        rating: "4",
        "text-review": "Lorem Ipsum",
        id: 2
    },
    {
        "user-photo": "https://image.flaticon.com/icons/svg/2922/2922510.svg",
        "user-name": "Marco",
        rating: "3.5",
        "text-review": "Lorem Ipsum",
        id: 3
    },
    {
        "user-photo": "https://image.flaticon.com/icons/svg/2922/2922561.svg",
        "user-name": "Ivani",
        rating: "0",
        "text-review": "Lorem Ipsum",
        id: 4
    },
]

// Comandos para carregamento inicial dos primeiros elementos em tela
ratingElement.innerHTML = ''
clientPhoto.setAttribute('src', all[0]["user-photo"])
clientUser.innerHTML = all[0]["user-name"]
ratingPopulator()
reviewElement.innerHTML = all[0]["text-review"]

function forPopulator(img) {
    let image = document.createElement('img')
    image.setAttribute('src', img)
    ratingElement.appendChild(image)
}

// Função que calcula e renderiza as estrelas de rating em tela
function ratingPopulator() {

    if (all[counter].rating.indexOf('.') == -1 && all[counter].rating != "0") {
        // Se for valor exato de estrelas

        for(let i = 1; i <= all[counter].rating; i++) {
            forPopulator('https://image.flaticon.com/icons/svg/929/929495.svg')
        }

        for(let i = 1; i <= (maxRating) - all[counter].rating; i++ ) {
            forPopulator('https://image.flaticon.com/icons/svg/929/929566.svg')
        }

    } else if (all[counter].rating == "0") {
        // Se o valor de estrelas for 0

        for(let i = 1; i <= maxRating; i++) {
            forPopulator('https://image.flaticon.com/icons/svg/929/929566.svg')
        }

    } else if (all[counter].rating.indexOf('.') != -1) {
        // Se o valor de estrelas tiver valor quebrado (meia estrela)

        let counterTwo = 0;
        for(let i = 1; i <= all[counter].rating; i++) {
            forPopulator('https://image.flaticon.com/icons/svg/929/929495.svg')
            counterTwo++
        }

        let halfStarImg = document.createElement('img')
        halfStarImg.setAttribute('src', 'https://image.flaticon.com/icons/svg/61/61101.svg')
        ratingElement.appendChild(halfStarImg)

        for(let i = 1; i <= maxRating - (counterTwo + 1) ; i++) {
            forPopulator('https://image.flaticon.com/icons/svg/929/929566.svg')
            
        }
        
    }
}

// Renderiza os elementos em tela
function elementRender(element) {
    element
    ratingElement.innerHTML = ''
    clientPhoto.setAttribute('src', all[counter]["user-photo"])
    clientUser.innerHTML = all[counter]["user-name"]
    ratingPopulator()
    reviewElement.innerHTML = all[counter]["text-review"]
}

// Comanda as mudanças e limites da página
function changePage(id) {

    if (id === 0) {
        // NEXT 
        if (counter == all[all.length -1].id) {
            alert('Não há mais depoimentos posteriores.')
        } else {
            elementRender(counter++)
        }

    } else {
        // PREVIOUS
        if (counter <= 0) {
            alert('Não há mais depoimentos anteriores.')
        } else {
            elementRender(counter--)
        }
    }
}
