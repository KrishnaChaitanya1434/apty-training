const output = document.getElementById("result");

function getUpdatedDimensions(){
    let info = `
    Width & height of browser window: ${outerWidth}, ${outerHeight}\n
    Width & height of viewport: ${innerWidth}, ${innerHeight}\n
    Screen Resolution: ${screen.width} x ${screen.height}\n
    Available Screen dimensions: ${screen.availWidth}, ${screen.availHeight}\n
    Color Depth: ${screen.colorDepth}
    `;
    output.innerText = info;
}

window.addEventListener("resize",() => {
    getUpdatedDimensions();
})