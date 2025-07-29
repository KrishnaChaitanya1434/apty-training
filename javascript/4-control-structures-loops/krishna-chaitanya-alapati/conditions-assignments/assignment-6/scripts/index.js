const output = document.getElementById("output");

function getValues() {
    const amountInput = document.getElementById("amount").value;
    const roiInput = document.getElementById("roi").value;
    const timeInput = document.getElementById("time").value;

    const principal = parseFloat(amountInput);
    const rate = parseFloat(roiInput);
    const time = parseFloat(timeInput);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        output.innerHTML = `Error: Please enter valid numbers in all fields.`;
        return null;
    }

    if (principal < 0 || rate < 0 || time <= 0) {
        output.innerHTML = `Error: Principal, Rate, and Time must be positive numbers.`;
        return null;
    }

    return [principal, rate, time];
}

function calculate() {
    const values = getValues();
    if (values === null) {
        return;
    }
    const [p, r, t] = values;
    const simpleInterest = (p * r * t) / 100;
    output.innerHTML = `Simple Interest is : ${simpleInterest.toFixed(2)}`;
}