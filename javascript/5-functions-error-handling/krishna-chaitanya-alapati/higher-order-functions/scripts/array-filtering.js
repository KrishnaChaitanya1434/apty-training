const output = document.getElementById("output");
const form = document.getElementById("inputForm");

function filterArray (arr,callback){
    const newArray = [];
    for(let i=0;i<arr.length;i++){
        if (callback(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    const arr = document.getElementById("array").value.split(",").filter(item=>item !== '').map(parseFloat);
    const limitVal = parseFloat(document.getElementById("maxVal").value);

    const checkArray = (number) => number <= limitVal;
    const result = filterArray(arr, checkArray);
    output.textContent = `${result.join(", ")}`;
})