const table = document.getElementById("table");
for (let i = 0; i < 10; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 10; j++) {
    const cell = row.insertCell();
    cell.textContent = `${i + 1},${j + 1}`;
  }
}

table.addEventListener("mouseover", function (event) {
  if (event.target.tagName !== "TD") return;

  const cell = event.target;
  const row = cell.parentElement;
  const colIndex = cell.cellIndex;

  for (let td of row.cells) {
    td.classList.add("highlight");
  }

  for (let r of table.rows) {
    r.cells[colIndex].classList.add("highlight");
  }
});

table.addEventListener("mouseout", function (event) {
  if (event.target.tagName !== "TD") return;

  for (let r of table.rows) {
    for (let td of r.cells) {
      td.classList.remove("highlight");
    }
  }
});
