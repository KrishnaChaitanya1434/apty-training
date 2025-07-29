const output = document.getElementById("output");

function factorial() {
    const numInput = document.getElementById("num").value;
    const num = parseFloat(numInput);

    output.innerHTML = "";

    if (isNaN(num)) {
        output.innerHTML = `Error: Please enter a valid number.`;
        return;
    }

    if (!Number.isInteger(num)) {
        output.innerHTML = `Error: Please enter a whole number.`;
        return;
    }

    if (num < 0) {
        output.innerHTML = `Error: Factorial is not defined for negative numbers.`;
        return;
    }

    if (num === 0) {
        output.innerHTML = `0! = 1<br><br>Final Factorial: 1`;
        return;
    }

    let currentNum = num;
    let total = 1;
    let steps = "";

    do {
        let previousTotal = total;
        total *= currentNum;
        steps += `${previousTotal} x ${currentNum} = ${total}<br>`;
        currentNum--;
    } while (currentNum > 0);
    
    output.innerHTML = `Calculation Steps:<br>${steps}<br>Final Factorial of ${num}: ${total}`;
}