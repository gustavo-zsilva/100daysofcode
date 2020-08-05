const inputs = document.querySelectorAll('.inputs input')


const submitBtn = document.querySelector('button.submit')

const images = [
    'https://romeojeremiah.github.io/course-form-project/img/cust-4.jpg',
    'https://romeojeremiah.github.io/course-form-project/img/cust-2.jpg',
    'https://romeojeremiah.github.io/course-form-project/img/cust-3.jpg',
    'https://romeojeremiah.github.io/course-form-project/img/cust-5.jpg'
]

function randomImage() {
    return Math.floor(Math.random() * images.length)
}

let courses = [
    {
        img: images[randomImage()],
        name: "John Anderson",
        course: "Css Basics",
        author: "John Anderson"
    },
    {
        img: images[randomImage()],
        name: "Exemplo de nome",
        course: "Exemplo de curso",
        author: "Exemplo de autor"
    }
]

const spanClasses = [
    [
        'span-name',
        'span-course',
        'span-author'
    ],
    [
        'Name:',
        'Course:',
        'Author:'
    ]

]

function renderCourses() {
    let coursesDiv = document.querySelector('.courses')

    coursesDiv.innerHTML = ''

    courses.forEach(card => {

        // Cria os componentes para criação do novo card

        let newCourseDiv = document.createElement('div')
        let newImage = document.createElement('img')
        let courseDescription = document.createElement('div')

        // Iteração responsável por renderizar os span e parágrafos
        for (let i = 0; i <= 2; i++) {
            let span = document.createElement('span')
            let p = document.createElement('p')


            span.classList.add(spanClasses[0][i])
            span.textContent = spanClasses[1][i]

            if (span.textContent == 'Name:') {
                p.textContent += card.name
            } else if (span.textContent == 'Course:') {
                p.textContent += card.course
            } else {
                p.textContent += card.author
            }

            p.appendChild(span)
            courseDescription.appendChild(p)
        }

        

        newCourseDiv.appendChild(newImage)
        newCourseDiv.appendChild(courseDescription)

        newCourseDiv.classList.add('course')
        newImage.src = card.img
        courseDescription.classList.add('course-description')

        coursesDiv.appendChild(newCourseDiv)

    })
}

submitBtn.addEventListener('click', () => {

    let warningsDiv = document.querySelector('.warnings')
    let p = document.querySelector('.warnings p')

    const nameInput = document.querySelector('#name-input')
    const courseInput = document.querySelector('#course-input')
    const authorInput = document.querySelector('#author-input')

    if (checkInputs()) {
        let loadingDiv = document.querySelector('.loading')

        p.textContent = 'Calculating...'
        warningsDiv.classList.toggle('hide')
        loadingDiv.classList.toggle('hide')

        setTimeout(() => {
            warningsDiv.classList.toggle('hide')
            loadingDiv.classList.toggle('hide')

        }, 2000)

        courses.push({
            img: images[randomImage()],
            name: nameInput.value,
            course: courseInput.value,
            author: authorInput.value
        })

        inputs.forEach(input => {
            input.value = ''
        })

        renderCourses()

    } else {
        p.textContent = 'Inputs not validated.'
        warningsDiv.classList.toggle('fail')
        warningsDiv.classList.toggle('hide')

        setTimeout(() => {
            warningsDiv.classList.toggle('hide')
            warningsDiv.classList.toggle('fail')
        }, 2000)

        inputs.forEach(input => {
            input.value = ''
            input.style.border = '4px solid red'
        })
    }
})

function checkInputs() {
    let counter = 0;
    inputs.forEach(input => {
        if (input.value.length > 0) {
            counter++
        }
    })

    if (counter === 3) {
        return true;
    } else {
        return false;
    }
}


inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.length === 0) {
            input.style.border = '4px solid red'
        } else {
            input.style.border = '4px solid green'
        }
    })
})

renderCourses()



