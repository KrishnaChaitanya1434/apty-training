const output = document.getElementById("output");
const form = document.getElementById("inputForm");

function caching() {
  const cache = {};
  return function factorial(n) {
    if (n == 0 || n == 1) {
      return 1;
    }
    if (cache[n]) {
      return cache[n];
    }
    let res = 1;
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    cache[n] = res;
    return res;
  };
}

const outerFunction = caching();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const num = parseInt(document.getElementById("num").value);
  if (num >= 0) {
    const result = outerFunction(num);
    output.innerHTML = `Factorial of ${num} is ${result}`;
  } else {
    output.innerHTML = `Input is invalid. Only numbers can be entered.`;
  }
});
