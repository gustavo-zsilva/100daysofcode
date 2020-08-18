const quoteBtn = document.querySelector('section button')
const quoteText = document.querySelector('.quote .quote-text')
const quoteAuthor = document.querySelector('.quote .author')
const warning = document.querySelector('.warning')

const quotes = [
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzy"
    },
    {
        quote: "It's not what happens to you, but how you react to it that matters.",
        author: "Epictetus"
    },
    {
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "Nelson Mandela"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Do not take life too seriously. You will not get out alive.",
        author: "Elbert Hubbard"
    }
]

const quoteCache = []

quoteBtn.addEventListener('click', () => {
    warning.classList.add('hide')

    let counter = 0;
    let warningP = document.querySelector('.warning p')

    let randomIndex = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomIndex]

    if (randomQuote.quote == quoteCache[quoteCache.length -1]) {
        randomQuote = quotes[randomIndex]
        counter += 1;
        warningP.innerHTML = `Poema repetido ${counter} vez(es)`
        warning.classList.toggle('hide')
    }

    quoteCache.push(randomQuote.quote)

    quoteText.innerHTML = `"${randomQuote.quote}"`
    quoteAuthor.innerHTML = `--${randomQuote.author}`
})

