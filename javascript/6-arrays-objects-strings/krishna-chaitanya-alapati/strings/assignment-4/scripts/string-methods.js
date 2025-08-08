function sortString() {
    let inputString = document.getElementById("inputString").value;
    let sortedString = inputString.split("").sort().join("");
    document.getElementById("output").innerText = sortedString;
}