document.getElementById("countBtn").addEventListener("click", () => {
  const divCount = document.getElementsByTagName("div").length;
  const pCount = document.getElementsByTagName("p").length;
  const spanCount = document.getElementsByTagName("span").length;
  const iframeCount = document.getElementsByTagName("iframe").length;

  const resultDisplay = document.getElementById("results");
  resultDisplay.innerHTML = `
        <div>Div elements: ${divCount}</div>
        <div>Paragraph elements: ${pCount}</div>
        <div>Span elements: ${spanCount}</div>
        <div>Iframe elements: ${iframeCount}</div>
    `;
});
