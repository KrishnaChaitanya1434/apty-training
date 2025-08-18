const childInput = document.getElementById("childInput");
const childLog = document.getElementById("childLog");

document.getElementById("sendToParentBtn").addEventListener("click", () => {
  const msg = childInput.value || "(empty)";
  window.parent.postMessage({ from: "iframe", text: msg }, "*");
});

window.onmessage = function(event) {
  const data = event.data;
  if (!data || typeof data !== "object") return;
  childLog.textContent = `Received in Iframe: ${JSON.stringify(data)}`;
};
