const value1 = document.getElementById("val1");
const value2 = document.getElementById("val2");
const output = document.getElementById("output");

function getValue() {
    const a = Number(value1.value);
    const b = Number(value2.value);
    return [a,b];
}

function add() {
    let [a,b] = getValue();
    a += b;
    output.innerHTML = `Result = ${a}`;
}

function subtract() {
    let [a,b] = getValue();
    a -= b;
    output.innerHTML = `Result = ${a}`;
}

function multiply() {
    let [a,b] = getValue();
    a *= b;
    output.innerHTML = `Result = ${a}`;
}

function divide() {
    let [a,b] = getValue();
    a /= b;
    output.innerHTML = `Result = ${a}`;
}

function modulus() {
    let [a,b] = getValue();
    a %= b;
    output.innerHTML = `Result = ${a}`;
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