const output = document.getElementById("output");

function getValues() {
  const val1Input = document.getElementById("val1").value;
  const val2Input = document.getElementById("val2").value;

  const a = parseFloat(val1Input);
  const b = parseFloat(val2Input);

  if (isNaN(a) || isNaN(b)) {
    output.innerHTML = `Error: Please enter valid numbers in both fields.`;
    return null;
  }

  return [a, b];
}

function calculate(x) {
  const values = getValues();
  if (values === null) {
    return;
  }
  let [a, b] = values;
  switch (x) {
    case "+":
      output.innerHTML = `Result is : ${a + b}`;
      break;
    case "-":
      output.innerHTML = `Result is : ${a - b}`;
      break;
    case "*":
      output.innerHTML = `Result is : ${a * b}`;
      break;
    case "/":
      if (b === 0) {
        output.innerHTML = `Error: Cannot divide by zero!`;
        return;
      } else {
        output.innerHTML = `Result is : ${a / b}`;
        break;
      }
    case "%":
      if (b === 0) {
        output.innerHTML = `Error: Cannot perform modulo with zero!`;
        return;
      } else {
        output.innerHTML = `Result is : ${a % b}`;
        break;
      }
    case "++a":
      output.innerHTML = `Result is : ${++a}`;
      break;
    case "++b":
      output.innerHTML = `Result is : ${++b}`;
      break;
    case "--a":
      output.innerHTML = `Result is : ${--a}`;
      break;
    case "--b":
      output.innerHTML = `Result is : ${--b}`;
      break;
  }
}
