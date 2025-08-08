const colorsArray = ["Red","Blue","Green","Yellow"];
const output = document.getElementById("output");

function replaceBlueWithPurple() {
    const index = colorsArray.indexOf("Blue")
    if (index !== -1) {
        colorsArray.splice(index, 1, "Purple")
    }
}

function addOrangeAfterYellow() {
    const index = colorsArray.indexOf("Yellow")
    if (index !== -1) {
        colorsArray.splice(index + 1, 0, "Orange")
    }
}

function removeGreen() {
    const index = colorsArray.indexOf("Green");
    if (index !== -1) {
        colorsArray.splice(index, 1);
    }
}

function splicing() {
    replaceBlueWithPurple();
    addOrangeAfterYellow();
    removeGreen();
    output.innerText = `Modified Array: [${colorsArray.join(", ")}]`;
}