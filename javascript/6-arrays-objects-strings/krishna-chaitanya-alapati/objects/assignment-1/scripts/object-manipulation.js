const obj = {};
const form = document.getElementById("objectForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const key = document.getElementById("keyInput").value.trim();
  const value = document.getElementById("valueInput").value;

  if (key === "") {
    result.textContent = "Key cannot be empty.";
    return;
  }

  obj[key] = value;
  result.textContent = JSON.stringify(obj);
});
