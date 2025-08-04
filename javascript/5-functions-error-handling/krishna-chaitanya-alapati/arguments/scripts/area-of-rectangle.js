const form = document.getElementById("inputForm");
const output = document.getElementById("output");

function calculateArea(length=10,width=5){
    return length * width;
}

form.addEventListener("submit",function(e) {
    e.preventDefault();
    const lengthInput = document.getElementById("length").value;
    const widthInput = document.getElementById("width").value;

    const length = lengthInput ? parseFloat(lengthInput):undefined;
    const width = widthInput ? parseFloat(widthInput):undefined;

    const area = calculateArea(length,width);
    output.textContent = `Area of rectangle is ${area}`;
});