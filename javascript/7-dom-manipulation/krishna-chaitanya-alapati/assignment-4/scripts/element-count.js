document.getElementById("countBtn").addEventListener("click", () => {
  const divCount = document.getElementsByTagName("div").length;
  const pCount = document.getElementsByTagName("p").length;
  const spanCount = document.getElementsByTagName("span").length;
  const iframeCount = document.getElementsByTagName("iframe").length;

  const resultDisplay = document.getElementById("results");
  resultDisplay.innerHTML = `
        <li>Div elements: ${divCount}</li>
        <li>Paragraph elements: ${pCount}</li>
        <li>Span elements: ${spanCount}</li>
        <li>Iframe elements: ${iframeCount}</li>
    `;
});
