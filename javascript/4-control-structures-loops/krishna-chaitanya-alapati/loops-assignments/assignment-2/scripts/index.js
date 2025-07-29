function calculate() {
    const numInput = document.getElementById("num").value;
    const output = document.getElementById("output");
    
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
    if (num < 1) {
        output.innerHTML = `Error: Please enter a positive number (greater than 0).`;
        return;
    }
    let i = 1;
    let sum = 0;
    while(i <= num){
        sum += i;
        i++;
    }
    
    output.innerHTML = `The sum of numbers from 1 to ${num} is: ${sum}`;
}