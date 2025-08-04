function calculate(a, b, operator) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid number input.");
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) throw new Error("Cannot divide by zero.");
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      throw new Error("Unsupported operator. Use +, -, *, /, or %.");
  }
}

const form = document.getElementById("calcForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const a = document.getElementById("num1").value.trim();
  const b = document.getElementById("num2").value.trim();
  const op = document.getElementById("operator").value.trim();

  try {
    const result = calculate(a, b, op);
    output.textContent = `Result: ${result}`;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
});
