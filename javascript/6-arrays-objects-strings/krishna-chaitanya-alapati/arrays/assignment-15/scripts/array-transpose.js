const output = document.getElementById("output");
const form = document.getElementById("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("array").value;
  try {
    const matrix = JSON.parse(input);

    if (!Array.isArray(matrix) || matrix.length === 0 || !matrix.every(row => Array.isArray(row))) {
      output.textContent = "Please enter a valid 2D array.";
      return;
    }
    const res = transpose(matrix);
    output.innerText = JSON.stringify(res);
  } catch (err) {
    output.textContent = `Invalid Input. ${err}.`;
  }
});

function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let col = 0; col < cols; col++) {
    const newRow = [];
    for (let row = 0; row < rows; row++) {
      newRow.push(matrix[row][col]);
    }
    transposed.push(newRow);
  }
  return transposed;
}
