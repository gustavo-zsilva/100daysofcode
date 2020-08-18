const timeText = document.querySelector('p.time')

setInterval(() => {
    let date = new Date();
    timeText.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000);
