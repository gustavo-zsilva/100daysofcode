const output = document.querySelector('.container header input');
const keys = document.querySelector('.container .keys');

const labels = [
    { value: '+', color: 'orange' },
    { value: '-', color: 'purple' },
    { value: '*', color: 'navy' },
    { value: '/', color: 'green' },
    { value: 'C', color: 'black' },
    { value: '=', color: 'red' },
    { value: '-1', color: 'gray' }
];

for (let i = 0; i < 10; i++) {
    let number = document.createElement('button');
    number.classList.add('number');
    number.innerHTML = i;
    number.addEventListener('click', (e) => addValue(e.target.innerHTML));

    keys.appendChild(number);
}

labels.map(item => {
    let operator = document.createElement('button');
    operator.classList.add('operator');
    operator.innerHTML = item.value;
    operator.style.backgroundColor = item.color;

    switch (item.value) {
        case '=':
            operator.addEventListener('click', () => evalOperation());
            keys.appendChild(operator);
            break;
        case 'C':
            operator.addEventListener('click', () => output.value = '');
            keys.appendChild(operator);
            break;
        case '-1':
            operator.addEventListener('click', () => output.value = output.value.slice(0, -1))
            keys.appendChild(operator)
            break;
        default:
            operator.addEventListener('click', (e) => addValue(e.target.innerHTML));
            keys.appendChild(operator);
    };
});

const addValue = target => output.value += target;
function evalOperation() {
    if (output.value === '') { return }
    const result = eval(output.value)
    output.value = result
}
