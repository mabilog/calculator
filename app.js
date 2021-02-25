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
btnPer.addEventListener('click', appendPoint);
btnClr.addEventListener('click', clear);
btnDel.addEventListener('click', deleteNum);

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

btnNum.forEach(button => {
    button.addEventListener('click', () => {
        if (screen.textContent == 'Error') clear();
        appendNumber(button.textContent)
    });
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
function appendPoint() {
    if (screen.textContent == '') screen.textContent = '0';
    if (screen.textContent.includes('.')) return;
    screen.textContent += '.';
}
function clear() {
    screen.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}
function deleteNum() {
    if (screen.textContent == '' || screen.textContent == 'Error') screen.textContent = '0';
    screen.textContent = screen.textContent.toString().slice(0, -1);
}
function equate() {
    if (currentOperator === null) return;
    if (currentOperator === '÷' && screen.textContent === '0') return screen.textContent = 'Error';

    secondOperand = screen.textContent;
    screen.textContent = operate(currentOperator, firstOperand, secondOperand);
    currentOperator = null;
}
function resetScreen() {
    screen.textContent = '';
}

function setOperator(operator) {
    if (currentOperator !== null) equate();
    firstOperand = screen.textContent;
    currentOperator = operator;
    screen.textContent = "";
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
