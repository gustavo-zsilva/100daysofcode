const generateBtn = document.querySelector('.footer button')
const mainImg = document.querySelector('.image-container img')
const allSpan = document.querySelectorAll('.span')

let genders = ['men', 'women']

let userInfo = []

generateBtn.addEventListener('click', () => {
    userInfo = []

    axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
        .then(response => {
            let personObject = response.data
            let randomPersonIndex = Math.floor(Math.random() * response.data.length)

            let { first, last, address, email } = personObject[randomPersonIndex]

            userInfo.push(first, last, address, email)

            populateFields()
            changeImage(randomPersonIndex)
        })
        .catch(error => {
            console.log(error)
        })
})

const changeImage = (randomPersonIndex) => {
    let randomGender = Math.floor(Math.random() * genders.length)

    mainImg.src = `https://randomuser.me/api/portraits/${genders[randomGender]}/${randomPersonIndex}.jpg`
}

const populateFields = () => {
    allSpan.forEach((span, index) => {
        span.innerHTML = userInfo[index]
    })
}