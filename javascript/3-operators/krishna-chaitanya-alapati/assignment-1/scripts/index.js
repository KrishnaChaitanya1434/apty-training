const value1 = document.getElementById("val1");
const value2 = document.getElementById("val2");
const output = document.getElementById("output");

function getValue() {
    const a = Number(value1.value);
    const b = Number(value2.value);
    return [a,b];
}

function add() {
    const [a,b] = getValue();
    output.innerHTML = `Result = ${a + b}`;
}

function subtract() {
    const [a,b] = getValue();
    output.innerHTML = `Result = ${a - b}`;
}

function multiply() {
    const [a,b] = getValue();
    output.innerHTML = `Result = ${a * b}`;
}

function divide() {
    const [a,b] = getValue();
    output.innerHTML = `Result = ${a / b}`;
}

function modulus() {
    const [a,b] = getValue();
    output.innerHTML = `Result = ${a % b}`;
}

function increment() {
    let [a,] = getValue();
    a++;
    output.innerHTML = `Result = ${a}`;
}

function decrement() {
    let [a,] = getValue();
    a--;
    output.innerHTML = `Result = ${a}`;
}