const output = document.getElementById("output");

function getLetters(){
    const string = document.getElementById("string").value.trim();
    if (string === ''){
        output.textContent = `null`;
        return;
    }
    const start = string[0];
    const end = string[string.length-1];
    output.textContent = `"${start} ${end}"`;
}