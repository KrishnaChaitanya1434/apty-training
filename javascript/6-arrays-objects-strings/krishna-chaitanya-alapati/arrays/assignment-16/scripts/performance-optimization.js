const output = document.getElementById("output");

document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  const arraySize = 10000000;

  const arr = Array.from({ length: arraySize }, (_, i) => i);

  let result = "";

  let sum = 0;
  let start = performance.now();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let end = performance.now();
  result += `for loop:  ${(end - start).toFixed(2)} m/s.\n`;

  sum = 0;
  start = performance.now();
  for (let ele of arr) {
    sum += ele;
  }
  end = performance.now();
  result += `for...of loop:  ${(end - start).toFixed(2)} m/s.\n`;

  sum = 0;
  start = performance.now();
  arr.forEach((num) => {
    sum += num;
  });
  end = performance.now();
  result += `forEach loop:  ${(end - start).toFixed(2)} m/s.`;

  output.innerText = result;
});
