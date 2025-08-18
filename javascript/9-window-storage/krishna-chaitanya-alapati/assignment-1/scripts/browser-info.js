function goToUrl() {
  let url = document.getElementById("customUrl").value.trim();
  if (url.startsWith("javascript:")) {
    console.error("Invalid URL scheme.");
    return;
  }
  window.location.href = url;
}

function goForward() {
  window.history.forward();
}
