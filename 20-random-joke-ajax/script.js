const button = document.querySelector('.container button')
const joke = document.querySelector('.container .joke')

// Using XMLHttpRequest

/*
const randomJoke = () => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
        xhr.send(null)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                }
            } else {
                reject('Erro na requisição!')
            }
        }
    })   
}
*/

// Using Axios

button.addEventListener('click', () => {
    joke.innerHTML = ''
    let loadingGif = document.createElement('img')
    loadingGif.src = 'https://i.gifer.com/YCZH.gif'
    joke.appendChild(loadingGif)

    axios.get('https://api.chucknorris.io/jokes/random')
    .then(response => {
        let randomJoke = response.data.value
        joke.innerHTML = randomJoke
    })
    .catch(error => {
        joke.innerHTML = error
    })
})


