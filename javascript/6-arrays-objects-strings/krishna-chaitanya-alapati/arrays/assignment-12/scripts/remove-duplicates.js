const output = document.getElementById("output");
const form = document.getElementById("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("array").value;
  try {
    const array = JSON.parse(input);
    if (!Array.isArray(array)) {
      output.textContent = `Enter the numbers in an array.`;
      return;
    }
    const res = remove(array);
    output.textContent = JSON.stringify(res);
  } catch (err) {
    output.textContent = `Invalid Input. ${err}.`;
  }
});

function remove(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.includes(array[i])) {
      continue;
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
