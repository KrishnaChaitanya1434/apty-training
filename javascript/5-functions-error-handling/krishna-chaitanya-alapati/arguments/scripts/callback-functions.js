const output = document.getElementById("output");
const form = document.getElementById("inputForm");

function convert(string='Default String'){
    return string.toUpperCase();
}

function operation(callback,userInput) {
    return callback(userInput);
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    const userInput = document.getElementById("string").value;
    const result = operation(convert,userInput || undefined);
    output.textContent = `'${userInput||'Default String'}' transformed to '${result}'`;
})