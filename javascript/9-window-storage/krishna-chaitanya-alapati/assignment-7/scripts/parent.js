const childFrame = document.getElementById("childFrame");
const parentInput = document.getElementById("parentInput");
const sendToIframeBtn = document.getElementById("sendToIframeBtn");
const parentLog = document.getElementById("parentLog");

const childOrigin = window.location.origin;

sendToIframeBtn.addEventListener("click", () => {
  const message = parentInput.value;
  if (childFrame && childFrame.contentWindow) {
    childFrame.contentWindow.postMessage(message, childOrigin);
    logParent(`Sent to iframe: ${message}`);
  }
});

window.addEventListener("message", (event) => {
  if (event.origin !== childOrigin) return;
  logParent(`Received: ${event.data}`);
});

function logParent(msg) {
  const p = document.createElement("p");
  p.textContent = msg;
  parentLog.appendChild(p);
}
