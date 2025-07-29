const output = document.getElementById("output");

function calculate() {
    const rawInput = document.getElementById("array").value;
    output.innerHTML = "";

    if (rawInput.trim() === "") {
        output.innerHTML = `Please enter numbers separated by commas.`;
        return;
    }

    const stringNumbers = rawInput.split(",");
    let sum = 0;
    let count = 0;

    for (let str of stringNumbers) {
        const num = parseFloat(str);

        if (isNaN(num)) {
            output.innerHTML = `Error: This array is not valid. Please use only numbers and commas.`;
            return;
        }
        sum += num;
        count++;
    }

    if (count === 0) {
        output.innerHTML = `No valid numbers found.`;
        return;
    }

    const average = sum / count;

    output.innerHTML = `Sum: ${sum}<br>Average: ${average.toFixed(2)}`;
}