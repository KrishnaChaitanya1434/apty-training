const output = document.getElementById("output");

function getValues() {
    const value1 = document.getElementById("val1").value;
    const value2 = document.getElementById("val2").value;
    return [value1, value2];
}

function bitwiseAND() {
    const [a, b] = getValues();
    output.innerHTML = `Result = ${a & b}`;
}
function bitwiseOR() {
    const [a, b] = getValues();
    output.innerHTML = `Result = ${a | b}`;
}
function bitwiseXOR() {
    const [a, b] = getValues();
    output.innerHTML = `Result = ${a ^ b}`;
}
function bitwiseNOT() {
    const [a,] = getValues();
    output.innerHTML = `Result = ${~a}`;
}
function leftShift() {
    const [a, b] = getValues();
    output.innerHTML = `Result = ${a << b}`;
}
function rightShift() {
    const [a, b] = getValues();
    output.innerHTML = `Result = ${a >> b}`;
}