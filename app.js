const btnAdd = document.querySelector('#addition');
const btnSub = document.querySelector('#subtraction');
const btnMul = document.querySelector('#multiplication');
const btnDiv = document.querySelector('#divition');

const btnNum = document.querySelectorAll('.number');
const btnOpt = document.querySelectorAll('.operator');
const btnEqu = document.querySelector('.equal');
const btnPer = document.querySelector('.period');
const btnClr = document.querySelector('#clear');
const btnDel = document.querySelector('#delete');

const screen = document.querySelector('.screen');

window.addEventListener('click', setInput);
btnEqu.addEventListener('click', equate);
// btnPer.addEventListener('click', appendPeriod);
btnClr.addEventListener('click', clearScreen);
btnDel.addEventListener('click', deleteNum);

let firstOperand = '';
let secondOperand = '';
let operator = null;

btnNum.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent));
})

btnOpt.forEach(button => {
    button.addEventListener('click', () => {
        setOperator(button.textContent);
    });
})

function appendNumber(n) {
    if (screen.textContent == '0') resetScreen();
    screen.textContent += n;
}

function clearScreen() {
    screen.textContent = '0';
    let firstOperand = '';
    let secondOperand = '';
    let operator = null;
}

function deleteNum() {
    screen.textContent = screen.textContent.toString().slice(0, -1)
}

function equate() {

}

function resetScreen() {
    screen.textContent = '';
}

function setOperator(operator) {
    firstOperand = screen.textContent;
    operator = operator;
}

function setInput(e) {
    if (e.key >= 0 || e.key <= 9) appendNumber(e.key);
}
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    const numA = Number(a);
    const numB = Number(b);

    switch (operator) {
        case "+":
            return add(numA, numB);
        case "−":
            return sub(numA, numB);
        case '×':
            return mul(numA, numB);
        case '÷':
            if (numB == 0) return null;
            else return div(numA, numB);
        default:
            return null;
    }
}
