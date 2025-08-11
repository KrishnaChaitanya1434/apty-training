document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("shadow-host");
  const shadowContent = `
    <style>
      :host { display:block; font-family: sans-serif; }
      table { border-collapse: collapse; width:100%; margin-top:8px; }
      th, td { border:1px solid #ddd; padding:8px; text-align:left; }
      th { background:#f4f4f4; }
      .myClass { padding:6px; }
      .myClass.highlight { background-color: lightblue; }
      [disabled] { background-color:#eee; color:#777; }
      [data-new-attr] { background-color:#dff0d8; font-weight:600; }
    </style>

    <div id="assignment-root">
      <h2>Assignment inside Shadow DOM</h2>

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
    </div>
  `;

  let shadowRoot = host.shadowRoot;
  if (!shadowRoot) shadowRoot = host.attachShadow({ mode: "open" });

  function writeToShadow() {
    shadowRoot.innerHTML = "";
    const container = document.createElement("div");
    container.innerHTML = shadowContent;
    while (container.firstChild) {
      shadowRoot.appendChild(container.firstChild);
    }
  }

  writeToShadow();

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColorById_inShadow() {
    const p1 = shadowRoot.getElementById("id_1");
    const p2 = shadowRoot.getElementById("id_2");
    const p3 = shadowRoot.getElementById("id_3");
    [p1, p2, p3].forEach((p) => {
      p.style.color = getRandomColor();
    });
  }

  function toggleClassBackground_inShadow() {
    const elements = shadowRoot.querySelectorAll(".myClass");
    elements.forEach((el) => el.classList.toggle("highlight"));
  }

  function updateSpanText_inShadow() {
    const spans = shadowRoot.querySelectorAll("span");
    spans.forEach((s, i) => {
      s.textContent = `Updated Span ${i + 1}`;
    });
  }

  function toggleDisableByName_inShadow() {
    const names = ["name1", "name2", "name3"];
    names.forEach((n) => {
      const inputs = shadowRoot.querySelectorAll(`[name="${n}"]`);
      inputs.forEach((inp) => {
        inp.disabled = !inp.disabled;
      });
    });
  }

  function addCustomAttribute_inShadow() {
    const paras = shadowRoot.querySelectorAll("[data-custom]");
    paras.forEach((p) => {
      p.setAttribute("data-new-attr", "NewAttributeValue");
    });
  }

  document
    .getElementById("id_button")
    .addEventListener("click", changeColorById_inShadow);
  document
    .getElementById("class_button")
    .addEventListener("click", toggleClassBackground_inShadow);
  document
    .getElementById("tag_button")
    .addEventListener("click", updateSpanText_inShadow);
  document
    .getElementById("name_button")
    .addEventListener("click", toggleDisableByName_inShadow);
  document
    .getElementById("custom_attribute_button")
    .addEventListener("click", addCustomAttribute_inShadow);
  document
    .getElementById("reset_button")
    .addEventListener("click", writeToShadow);
});
