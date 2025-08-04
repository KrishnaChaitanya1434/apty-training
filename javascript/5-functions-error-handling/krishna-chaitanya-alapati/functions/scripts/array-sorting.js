const form = document.getElementById("inputForm");
const numString = document.getElementById("array");
const tableBody = document.getElementById("table-body");

const sortNumbers = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = numString.value
    .split(",")
    .filter((item) => item !== "")
    .map(Number);
  if (input.some(isNaN)) {
    errorOutput.textContent =
      "Error: Please enter only comma-separated numbers.";
    return;
  }
  const sortedArr = sortNumbers(input);
  tableBody.innerHTML = "";
  sortedArr.forEach((value, index) => {
    const row = `<tr><td>${index}</td><td>${value}</td></tr>`;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
});
