const keydownDiv = document.getElementById("keydownDiv");
const keyupDiv = document.getElementById("keyupDiv");

function formatCombo(e) {
  const combo = [];
  if (e.ctrlKey) combo.push("Ctrl");
  if (e.altKey) combo.push("Alt");
  if (e.shiftKey) combo.push("Shift");
  if (!["Control", "Shift", "Alt"].includes(e.key)) {
    combo.push(e.key);
  }
  return combo.join("+");
}

window.addEventListener("keydown", (e) => {
  if (e.repeat) {
    return;
  }
  keydownDiv.append(formatCombo(e) + "\n");
});

window.addEventListener("keyup", (e) => {
  keyupDiv.append(formatCombo(e) + "\n");
});
