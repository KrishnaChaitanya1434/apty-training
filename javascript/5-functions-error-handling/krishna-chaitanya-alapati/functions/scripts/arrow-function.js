const output = document.getElementById("output");
const button = document.getElementById("output-btn");

button.addEventListener("click",()=>{
    const outputVal = parseInt(output.textContent);
    output.textContent = `${outputVal+1}`;
});