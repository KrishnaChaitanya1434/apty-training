const TARGET_ORIGIN = "*";

const frame = document.getElementById("childFrame");
const parentInput = document.getElementById("parentInput");
const parentLog = document.getElementById("parentLog");
const sendBtn = document.getElementById("sendToIframeBtn");

sendBtn.addEventListener("click", () => {
  const msg = parentInput.value || "(empty)";
  frame.contentWindow.postMessage({ from: "parent", text: msg }, TARGET_ORIGIN);
});

window.onmessage = function(event) {
  const data = event.data;
  if (!data || typeof data !== "object") return;
  parentLog.textContent = `Received in Parent: ${JSON.stringify(data)}`;
};
