document.getElementById("countButton").addEventListener("click", function () {
  const resultDisplay = document.getElementById("resultDisplay");
  resultDisplay.innerHTML = "";

  const parentElements = Array.from(document.body.children).filter(
    (el) => el.tagName !== "SCRIPT"
  );

  Array.from(parentElements).forEach((parent) => {
    const nestedElements = parent.querySelectorAll("*");
    const nestedCount = nestedElements.length;

    const result = document.createElement("li");
    result.textContent = `${parent.tagName} has ${nestedCount} nested elements.`;
    resultDisplay.appendChild(result);
  });
});
