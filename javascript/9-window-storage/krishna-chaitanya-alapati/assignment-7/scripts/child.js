const childInput = document.getElementById("childInput");
const sendToParentBtn = document.getElementById("sendToParentBtn");
const sendToTopBtn = document.getElementById("sendToTopBtn");
const childLog = document.getElementById("childLog");

const parentOrigin = window.location.origin;

sendToParentBtn.addEventListener("click", () => {
  const message = childInput.value;
  if (window.parent) {
    window.parent.postMessage(message, parentOrigin);
    logChild(`Sent to parent: ${message}`);
  }
});

sendToTopBtn.addEventListener("click", () => {
  const message = childInput.value;
  if (window.top) {
    window.top.postMessage(message, parentOrigin);
    logChild(`Sent to top: ${message}`);
  }
});

window.addEventListener("message", (event) => {
  if (event.origin !== parentOrigin) return;
  logChild(`Received: ${event.data}`);
});

function logChild(msg) {
  const p = document.createElement("p");
  p.textContent = msg;
  childLog.appendChild(p);
}
