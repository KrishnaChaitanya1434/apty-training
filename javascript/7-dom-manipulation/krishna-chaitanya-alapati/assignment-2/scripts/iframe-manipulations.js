const iframeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Assignment1 Content</title>
  <style>
    table { border-collapse: collapse; width: 100%; font-family: sans-serif; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background: #f4f4f4; }
    .myClass { padding: 6px; }
    .myClass.highlight { background-color: lightblue; }
    [disabled] { background-color: #eee; color: #777; }
    [data-new-attr] { background-color: #dff0d8; font-weight: 600; }
  </style>
</head>
<body>
  <h2>Inside Iframe</h2>

  <table>
    <tr>
      <th>id</th>
      <th>className</th>
      <th>tag</th>
      <th>name</th>
      <th>attribute</th>
    </tr>

    <tr>
      <td><p id="id_1">id_1</p></td>
      <td><p class="myClass">Paragraph 1</p></td>
      <td><span>Span 1</span></td>
      <td><input type="text" name="name1" value="Input 1" /></td>
      <td><p data-custom="custom1">custom attribute 1</p></td>
    </tr>

    <tr>
      <td><p id="id_2">id_2</p></td>
      <td><p class="myClass">Paragraph 2</p></td>
      <td><span>Span 2</span></td>
      <td><input type="text" name="name2" value="Input 2" /></td>
      <td><p data-custom="custom2">custom attribute 2</p></td>
    </tr>

    <tr>
      <td><p id="id_3">id_3</p></td>
      <td><p class="myClass">Paragraph 3</p></td>
      <td><span>Span 3</span></td>
      <td><input type="text" name="name3" value="Input 3" /></td>
      <td><p data-custom="custom3">custom attribute 3</p></td>
    </tr>
  </table>
</body>
</html>
`;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const iframe = document.getElementById("demo_iframe");

function writeIntoIframe() {
  const doc = iframe.contentDocument;
  doc.open();
  doc.write(iframeHTML);
  doc.close();
}

writeIntoIframe();

function changeColorById_inIframe() {
  const doc = iframe.contentDocument;
  const paras = [
    doc.getElementById("id_1"),
    doc.getElementById("id_2"),
    doc.getElementById("id_3"),
  ];
  paras.forEach((p) => {
    if (p) p.style.color = getRandomColor();
  });
}

function toggleClassBackground_inIframe() {
  const doc = iframe.contentDocument;
  const elements = doc.getElementsByClassName("myClass");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("highlight");
  }
}

function updateSpanText_inIframe() {
  const doc = iframe.contentDocument;
  const spans = doc.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].textContent = `Updated Span ${i + 1}`;
  }
}

function toggleDisableByName_inIframe() {
  const doc = iframe.contentDocument;
  const names = ["name1", "name2", "name3"];
  names.forEach((each) => {
    const inputs = doc.getElementsByName(each);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = !inputs[i].disabled;
    }
  });
}

function addCustomAttribute_inIframe() {
  const doc = iframe.contentDocument;
  const paras = doc.querySelectorAll("[data-custom]");
  paras.forEach((p) => {
    p.setAttribute("data-new-attr", "NewAttributeValue");
  });
}

document
  .getElementById("id_button")
  .addEventListener("click", changeColorById_inIframe);
document
  .getElementById("class_button")
  .addEventListener("click", toggleClassBackground_inIframe);
document
  .getElementById("tag_button")
  .addEventListener("click", updateSpanText_inIframe);
document
  .getElementById("name_button")
  .addEventListener("click", toggleDisableByName_inIframe);
document
  .getElementById("custom_attribute_button")
  .addEventListener("click", addCustomAttribute_inIframe);
