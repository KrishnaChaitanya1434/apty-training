function showUnicode() {
  const input = document.getElementById("textInput").value;
  document.getElementById("output").textContent = JSON.stringify(input.split("").map(char => char.charCodeAt(0)));
}
