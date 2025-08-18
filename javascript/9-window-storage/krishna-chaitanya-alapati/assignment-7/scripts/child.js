const childInput = document.getElementById("childInput");
const childLog = document.getElementById("childLog");

document.getElementById("sendToParentBtn").addEventListener("click", () => {
  const msg = childInput.value || "(empty)";
  parent.postMessage({ from: "iframe", to: "parent", text: msg }, "*");
});

document.getElementById("sendToTopBtn").addEventListener("click", () => {
  const msg = childInput.value || "(empty)";
  top.postMessage({ from: "iframe", to: "top", text: msg }, "*");
});

window.onmessage = function (event) {
  const data = event.data;
  if (!data || typeof data !== "object") return;
  childLog.textContent = `Iframe received: ${JSON.stringify(data)}`;
};
