const output = document.getElementById("output");

function showTable() {
    const numInput = document.getElementById("val1").value;
    const num = parseFloat(numInput);

    output.innerHTML = "";

    if (isNaN(num)) {
        output.innerHTML = `Error: Please enter a valid number.`;
        return;
    }
    if (!Number.isInteger(num)) {
        output.innerHTML = `Error: Please enter a whole number (integer) for the multiplication table.`;
        return;
    }
    for (let i = 1; i <= 10; i++) {
        output.innerHTML += `${num} x ${i} = ${num * i}<br>`;
    }
}