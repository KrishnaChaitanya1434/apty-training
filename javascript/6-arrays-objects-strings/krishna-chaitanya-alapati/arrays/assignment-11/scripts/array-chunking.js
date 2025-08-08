const form = document.getElementById("inputForm");
const output = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const arr = document.getElementById("arrayInput").value;
  const size = parseInt(document.getElementById("chunkSize").value);

  try {
    const parsed = JSON.parse(arr);
    if (!Array.isArray(parsed)) {
      output.textContent = `Enter numbers properly inside an array.`;
      return;
    }
    if (isNaN(size) || size <= 0) {
      output.textContent = `Enter only positive chunk sizes.`;
      return;
    }
    const res = chunkArray(parsed, size);
    output.textContent = JSON.stringify(res);
  } catch (err) {
    output.textContent = `Invalid Input. ${err}.`;
  }
});

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
