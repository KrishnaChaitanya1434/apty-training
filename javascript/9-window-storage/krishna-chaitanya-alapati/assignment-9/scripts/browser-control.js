let myWindow = null;

document.getElementById("openBtn").addEventListener("click", () => {
  myWindow = window.open(
    "",
    "demoPopup",
    "width=400,height=300,left=400,top=200,resizable=yes"
  );

  myWindow.document.title = "Popup";
  myWindow.document.body.textContent = "This is a popup window.";
  myWindow.focus();
});

document.getElementById("resizeBtn").addEventListener("click", () => {
  if (myWindow && !myWindow.closed) {
    myWindow.resizeTo(600, 400);
    myWindow.focus();
  } else {
    alert("No popup open to resize.");
  }
});

document.getElementById("closeBtn").addEventListener("click", () => {
  if (myWindow && !myWindow.closed) {
    myWindow.close();
  } else {
    alert("No popup open to close.");
  }
});
