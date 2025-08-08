function padInput() {
  const input = document.getElementById("textInput").value;
  const result = input.padStart(10, "0");
  document.getElementById("output").textContent = result;
}
