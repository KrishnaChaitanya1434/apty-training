const output = document.getElementById("output");

function calculate() {
    const numberInput = document.getElementById("number").value;
    const a = parseInt(numberInput);

    if (isNaN(a)) {
        output.innerHTML = `Please enter a valid integer.`;
    } else if ((a % 2) === 0) {
        output.innerHTML = `${a} is an Even number.`;
    } else {
        output.innerHTML = `${a} is an Odd number.`;
    }
}