const clientPhoto = document.querySelector('.client-photo')
const clientUser = document.querySelector('.client-user')
const ratingElement = document.querySelector('.rating')
const reviewElement = document.querySelector('.review')

let counter = 0;
let maxRating = 5;

const all = [
    {
        "user-photo": "https://image.flaticon.com/icons/svg/3158/3158265.svg",
        "user-name": "Vitória",
        rating: "5",
        "text-review": "Contrary to popular belief, Lorem Ipsum is not a simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
        "user-photo": "https://image.flaticon.com/icons/svg/3158/3158266.svg",
        "user-name": "Catarina",
        rating: "3.5",
        "text-review": "Lorem Ipsum"
    },
    {
        "user-photo": "https://image.flaticon.com/icons/svg/3158/3158271.svg",
        "user-name": "Sandra",
        rating: "4",
        "text-review": "Lorem Ipsum"
    },
    {
        "user-photo": "https://image.flaticon.com/icons/svg/2922/2922510.svg",
        "user-name": "Marco",
        rating: "2",
        "text-review": "Lorem Ipsum"
    },
    {
        "user-photo": "https://image.flaticon.com/icons/svg/2922/2922561.svg",
        "user-name": "Ivani",
        rating: "0",
        "text-review": "Lorem Ipsum"
    },
]

clientPhoto.setAttribute('src', all[0]["user-photo"])
clientUser.innerHTML = all[0]["user-name"]
reviewElement.innerHTML = all[0]["text-review"]

function ratingPopulator() {

    if (all[counter].rating.indexOf('.') == -1 && all[counter].rating != 0) {

        for(let i = 0; i <= all[counter].rating; i++) {
            let image = document.createElement('img')
            image.setAttribute('src', 'https://image.flaticon.com/icons/svg/929/929495.svg')
            ratingElement.appendChild(image)
        }
        for(let i = 1; i <= (maxRating - 1) - all[counter].rating; i++ ) {
            let image = document.createElement('img')
            image.setAttribute('src', 'https://image.flaticon.com/icons/svg/929/929566.svg')
            ratingElement.appendChild(image)
        }

    } else if (all[counter].rating == 0) {
        for(let i = 1; i <= maxRating; i++) {
            let image = document.createElement('img')
            image.setAttribute('src', 'https://image.flaticon.com/icons/svg/929/929566.svg')
            ratingElement.appendChild(image)
        }
    } else if (all[counter].rating.indexOf('.') != -1) {
        for(let i = 1; i <= all[counter].rating; i++) {
            let image = document.createElement('img')
            image.setAttribute('src', 'https://image.flaticon.com/icons/svg/929/929495.svg')
            ratingElement.appendChild(image)
        }
        let halfStarImg = document.createElement('img')
        halfStarImg.setAttribute('src', 'https://image.flaticon.com/icons/svg/61/61101.svg')
        ratingElement.appendChild(halfStarImg)

        // for(let i = 1; i <= (maxRating - 1); i++) {
            
            
            
        // }
        
    }
}

function changePage(id) {
    if (id === 0) {
        // NEXT 
        counter++
        ratingElement.innerHTML = ''
        clientPhoto.setAttribute('src', all[counter]["user-photo"])
        clientUser.innerHTML = all[counter]["user-name"]
        ratingPopulator()
        reviewElement.innerHTML = all[counter]["text-review"]

    } else {
        // PREVIOUS
        counter--
    }
}
