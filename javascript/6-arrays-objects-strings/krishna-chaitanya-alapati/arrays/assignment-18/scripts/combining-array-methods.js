const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener("click",function(event){
    event.preventDefault();
    const input = document.getElementById("array").value;
    try{
        const array = JSON.parse(input);
        if(!Array.isArray(array)){
            output.innerText = `Please enter only array inputs.`;
            return;
        }
        const result = array.filter(num => num%2 === 0).map(num => num*2).reduce((sum,num) => sum += num,0);
        output.innerText = result;
    }
    catch(err){
        output.innerText = `Invalid Input. ${err}`;
    }
});