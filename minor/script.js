document.addEventListener('DOMContentLoaded', function () {
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator-keys');
    const display = calculator.querySelector('.calculator-screen');

    let firstValue = '';
    let operator = '';
    let secondValue = '';

    keys.addEventListener('click', function (event) {
        const { target } = event;
        const { value } = target;
        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                operator = value;
                firstValue = display.value;
                display.value = '';
                break;
            case '=':
                secondValue = display.value;
                display.value = eval(`${firstValue} ${operator} ${secondValue}`);
                break;
            case 'AC':
                display.value = '';
                firstValue = '';
                operator = '';
                secondValue = '';
                break;
            case 'square':
                display.value = Math.pow(display.value, 2);
                break;
            default:
                display.value += value;
                break;
        }
    });
});
