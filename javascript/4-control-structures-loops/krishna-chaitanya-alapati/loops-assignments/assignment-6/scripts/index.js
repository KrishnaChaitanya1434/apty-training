const output = document.getElementById("output");

function calculate() {
    const startInput = document.getElementById("start").value;
    const endInput = document.getElementById("end").value;

    const start = parseFloat(startInput);
    const end = parseFloat(endInput);

    output.innerHTML = "";

    if (isNaN(start) || isNaN(end)) {
        output.innerHTML = `Error: Please enter valid numbers for both start and end ranges.`;
        return;
    }

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        output.innerHTML = `Error: Please enter whole numbers (integers) for the range.`;
        return;
    }

    if (start < 0 || end < 0) {
        output.innerHTML = `Error: Please enter non-negative numbers for the range.`;
        return;
    }

    if (start > end) {
        output.innerHTML = `Error: Starting range cannot be greater than the ending range.`;
        return;
    }

    let primesFound = false;
    for (let num = start; num <= end; num++) {
        if (num < 2) {
            continue;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            output.innerHTML += `${num} is a prime number.<br>`;
            primesFound = true;
        }
    }

    if (!primesFound) {
        output.innerHTML = `No prime numbers found in the given range.`;
    }
}