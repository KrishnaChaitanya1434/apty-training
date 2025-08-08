function showUnicode() {
  const input = document.getElementById("textInput").value;
  document.getElementById("output").textContent = JSON.stringify(input.split("").map(item => input.charCodeAt(input.indexOf(item))));
}
