
function calculate() {
    const num1 = parseInt(document.querySelector('[name="num1"]').value);
    const num2 = parseInt(document.querySelector('[name="num2"]').value);
    const op = document.querySelector('[name="op"]').value;
    let result;
    
    if (op === 'plus') {
        result = num1 + num2;
    } else if (op === 'minus') {
        result = num1 - num2;
    } else if (op === 'multiply') {
        result = num1 * num2;
    } else if (op === 'divide') {
        result = num1 / num2;
    } else {
        console.error('wrong op!');
        return;
    }
    
    document.querySelector('.calc-result').value = result;
}

document.querySelector('[name="num1"]').addEventListener('input', calculate);
document.querySelector('[name="num2"]').addEventListener('input', calculate);
document.querySelector('[name="op"]').addEventListener('change', calculate);


