const frame = document.getElementById("childFrame");
const sendBtn = document.getElementById("sendToIframeBtn");
const parentInput = document.getElementById("parentInput");
const parentLog = document.getElementById("parentLog");

sendBtn.addEventListener("click", () => {
  const msg = parentInput.value || "(empty)";
  frame.contentWindow.postMessage({ from: "parent", text: msg }, "*");
});

window.onmessage = function (event) {
  const data = event.data;
  if (!data || typeof data !== "object") return;
  parentLog.textContent = `Parent received: ${JSON.stringify(data)}`;
};
