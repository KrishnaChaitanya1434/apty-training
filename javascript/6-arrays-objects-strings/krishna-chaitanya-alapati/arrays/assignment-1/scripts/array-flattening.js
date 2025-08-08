const output = document.getElementById("output");
const form = document.getElementById("input");

function flatten(input){
    const stack = [...input];
    const result = [];
    while (stack.length > 0){
        const next = stack.pop();
        if (Array.isArray(next)){
            stack.push(...next);
        }
        else{
            result.push(next);
        }
    }
    return result.reverse();
}

form.addEventListener("submit",function(event){
    event.preventDefault();

    const inputArray = document.getElementById("array").value;
    try{
        const input = JSON.parse(inputArray);
        const res = flatten(input);
        output.textContent = `${JSON.stringify(res)}`;
    }
    catch (error){
        output.textContent = `Invalid input. ${error}`;
    }
});