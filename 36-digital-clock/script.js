const timeText = document.querySelector('p.time');
let header = document.querySelector('header');
let section = document.querySelector('section');

setInterval(() => {
    let date = new Date();

    timeText.innerHTML = date.toLocaleTimeString();
    checkTime(date);
}, 1000);

function checkTime(date) {
    let hour = date.getHours();
    if (hour >= 18 || hour <= 6) {
        changeColors('#011f33', '#41363a', '#110c0e');
    } else if (hour >= 12) {
        changeColors('#f9dd72', '#f89c75', '#f8a95b');
    }
}

function changeColors(...params) {
    let colorsLabel = [document.body, header, section];
    params.map((param, index) => colorsLabel[index].style.backgroundColor = param);
}

// Tarde
// #f9dd72
// #f8a95b
// #f89c75

// Noite
// #110c0e
// #41363a
// #011f33

// Manhã
// #ffb283
// #eee6df
// #bb9f8b
