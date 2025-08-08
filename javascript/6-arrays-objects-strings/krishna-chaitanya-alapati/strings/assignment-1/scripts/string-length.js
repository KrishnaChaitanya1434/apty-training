const output = document.getElementById("output");

function getLength(){
    const inputs = document.getElementById("string").value;
    const res = inputs.split(" ").map(item => item.length).join(" ");
    output.innerText = `"${res}"`;
}