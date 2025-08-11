const iframe = document.getElementById("tableIframe");
const iframeContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Move Table Rows in Iframe</title>
                <link rel = 'stylesheet' href = '../css/task-1.css' />
                
            </head>
            <body>
                <table id="myTable">
                    <thead>
                        <tr>
                            <th>Row Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Array.from(
                          { length: 10 },
                          (_, i) => `
                            <tr>
                                <td>Row ${i + 1}</td>
                                <td>
                                    <button onclick="setActiveRow(${
                                      i + 1
                                    })">Select</button>
                                </td>
                            </tr>`
                        ).join("")}
                    </tbody>
                </table>
                <script>
                    let activeRow = null;
                    function setActiveRow(rowNumber) {
                        activeRow = document.querySelectorAll('#myTable tbody tr')[rowNumber - 1];
                    }
                    function getActiveRow() {
                        return activeRow;
                    }
                </script>
            </body>
            </html>
        `;

const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
iframeDoc.open();
iframeDoc.write(iframeContent);
iframeDoc.close();

document.getElementById("moveUpBtn").addEventListener("click", () => {
  const activeRow = iframe.contentWindow.getActiveRow();
  if (!activeRow) return alert("Select a row first!");
  const prevRow = activeRow.previousElementSibling;
  if (prevRow) {
    activeRow.parentNode.insertBefore(activeRow, prevRow);
  }
});

document.getElementById("moveDownBtn").addEventListener("click", () => {
  const activeRow = iframe.contentWindow.getActiveRow();
  if (!activeRow) return alert("Select a row first!");
  const nextRow = activeRow.nextElementSibling;
  if (nextRow) {
    activeRow.parentNode.insertBefore(nextRow, activeRow);
  }
});

document.getElementById("moveTopBtn").addEventListener("click", () => {
  const activeRow = iframe.contentWindow.getActiveRow();
  if (!activeRow) return alert("Select a row first!");
  const tableBody = activeRow.parentNode;
  tableBody.insertBefore(activeRow, tableBody.firstElementChild);
});

document.getElementById("moveBottomBtn").addEventListener("click", () => {
  const activeRow = iframe.contentWindow.getActiveRow();
  if (!activeRow) return alert("Select a row first!");
  const tableBody = activeRow.parentNode;
  tableBody.appendChild(activeRow);
});
