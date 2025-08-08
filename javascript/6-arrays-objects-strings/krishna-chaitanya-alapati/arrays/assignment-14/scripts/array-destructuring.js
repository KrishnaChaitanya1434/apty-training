const output = document.getElementById("output");
const form = document.getElementById("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let a = document.getElementById("val1").value;
  let b = document.getElementById("val2").value;

  if (a === "" || b === "") {
    output.innerText = "Both values are required to perform swapping.";
    return;
  }

  output.innerText = `Before swapping: a = ${a}, b = ${b}.\n`;

  [a, b] = [b, a];

  output.innerText += `After swapping: a = ${a}, b = ${b}.`;
});
