function escapeSequences(str) {
  return str.replace(/\\n/g, "\\\\n").replace(/\\t/g, "\\\\t");
}

function processText() {
  const input = document.getElementById("inputText").value;
  const escaped = escapeSequences(input);
  if (input === "") {
    document.getElementById("outputText").textContent = "enter a string";
  } else {
    document.getElementById("outputText").textContent = escaped;
  }
}
