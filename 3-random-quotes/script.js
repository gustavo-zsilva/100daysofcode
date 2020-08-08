const button = document.querySelector('button')
const text = document.querySelector('.quote p')
const author = document.querySelector('.author')
button.addEventListener('click', () => {
    let quoteArray = Object.keys(quotes)
    let randomNumber = Math.random()
    let quoteIndex = Math.floor(randomNumber * quoteArray.length)
    let randomKey = quoteArray[quoteIndex]

    let randomModel = quotes[randomKey]
    let randomQuote = randomModel.quote
    let authorQuote = randomModel.author

    text.innerHTML = randomQuote
    author.innerHTML = authorQuote
    
})

const quotes = [
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle"
    },
    {
        quote: "The harder the conflict, the greater the triumph.",
        author: "George Washington"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
        author: "Albert Einstein"
    },
    {
        quote: "The greatest wealth is to live with little.",
        author: "Plato"
    }

]