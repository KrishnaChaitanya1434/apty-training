document.addEventListener("DOMContentLoaded", () => {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const id_button = document.getElementById("id_button");
  id_button.addEventListener("click", () => {
    const paras = [
      document.getElementById("id_1"),
      document.getElementById("id_2"),
      document.getElementById("id_3"),
    ];
    paras.forEach((p) => {
      p.style.color = getRandomColor();
    });
  });

  const class_button = document.getElementById("class_button");
  class_button.addEventListener("click", () => {
    const elements = document.getElementsByClassName("myClass");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("highlight");
    }
  });

  const tag_button = document.getElementById("tag_button");
  tag_button.addEventListener("click", () => {
    const spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].innerHTML = `Updated Span ${i + 1}`;
    }
  });

  const name_button = document.getElementById("name_button");
  name_button.addEventListener("click", () => {
    const names = ["name1", "name2", "name3"];
    names.forEach((each) => {
      const inputs = document.getElementsByName(each);
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = !inputs[i].disabled;
      }
    });
  });

  const attributeButton = document.getElementById("custom_attribute_button");
  attributeButton.addEventListener("click", () => {
    const paras = document.querySelectorAll("[data-custom]");
    paras.forEach((p) => {
      p.setAttribute("data-new-attr", "NewAttributeValue");
      p.textContent += " (attribute added)";
    });
  });
});
