const output = document.getElementById("output");
const form = document.getElementById("inputForm");

function sumOfArray(...nums) {
    let total = 0;
    for(let num of nums) {
        total += num;
    }
    return total;
}

form.addEventListener("submit",function(event){
    event.preventDefault();

    const inputArray = document.getElementById("array").value.split(",").filter(item=>item!=='').map(Number);
    const result = sumOfArray(...inputArray);
    output.innerHTML = `Sum of array elements: ${result}`;
})