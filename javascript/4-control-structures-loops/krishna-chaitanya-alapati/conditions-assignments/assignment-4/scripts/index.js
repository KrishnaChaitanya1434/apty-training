const output = document.getElementById("output");

function getValues() {
  const val1Input = document.getElementById("val1").value;
  const val2Input = document.getElementById("val2").value;
  const val3Input = document.getElementById("val3").value;

  const num1 = parseFloat(val1Input);
  const num2 = parseFloat(val2Input);
  const num3 = parseFloat(val3Input);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    output.innerHTML = `Error: Please enter valid numbers in all three fields.`;
    return null;
  }

  return [num1, num2, num3];
}

function calculate() {
  const values = getValues();

  if (values === null) {
    return;
  }

  const [a, b, c] = values;

  if (a === b && b === c) {
    output.innerHTML = `All numbers are equal: ${a}.`;
  } else {
    let largest;
    if (a >= b && a >= c) {
      largest = a;
    } else if (b >= a && b >= c) {
      largest = b;
    } else {
      largest = c;
    }
    output.innerHTML = `${largest} is the largest number.`;
  }
}
