const form = document.getElementById("input");
const output = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("userInput").value;
  const property = document.getElementById("property").value.trim();
  try {
    const arr = JSON.parse(input);
    if (!Array.isArray(arr)) {
      output.textContent = `Please enter the objects in an array.`;
      return;
    }
    if (!arr.length || !(property in arr[0])) {
      result.textContent = `Property "${property}" not found in objects.`;
      return;
    }
    arr.sort((a, b) => {
      if (typeof a[property] === "number" && typeof b[property] === "number") {
        return b[property] - a[property];
      } else {
        return String(b[property]).localeCompare(String(a[property]));
      }
    });
    output.textContent = JSON.stringify(arr);
  } catch (err) {
    output.textContent = `Invalid JSON. ${err}`;
  }
});
