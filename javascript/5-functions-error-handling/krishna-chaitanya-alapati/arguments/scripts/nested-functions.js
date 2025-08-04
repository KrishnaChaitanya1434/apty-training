const output = document.getElementById("output");
const form = document.getElementById("inputForm");

function perimeter(length=10,width=5){
    function area(){
        return length * width;
    }
    const perim = 2*(length + width);
    const calculatedArea = area();

    return {perim, area:calculatedArea}
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    const lengthInput = document.getElementById("length").value;
    const widthInput = document.getElementById("width").value;

    const length = lengthInput ? parseFloat(lengthInput) : undefined;
    const width = widthInput ? parseFloat(widthInput) : undefined;

    const result = perimeter(length,width);
    const p = result.perim;
    const a = result.area;
    output.innerHTML = `Perimeter : ${p}<br>Area : ${a}`;
})