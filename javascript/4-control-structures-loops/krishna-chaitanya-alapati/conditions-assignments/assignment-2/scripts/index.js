const output = document.getElementById("output");

function checkLeap() {
    const year = parseInt(document.getElementById("year").value,10);
    if (isNaN(year)){
        output.innerHTML = `Please enter a valid year.`;
        return;
    }
    if (year <= 0) {
        output.innerHTML = `Please enter a positive year (e.g., 2000, 2024).`;
        return;
    }
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        output.innerHTML = `${year} is a Leap Year.`;
    }
    else {
        output.innerHTML = `${year} is not a Leap Year.`;
    }
}