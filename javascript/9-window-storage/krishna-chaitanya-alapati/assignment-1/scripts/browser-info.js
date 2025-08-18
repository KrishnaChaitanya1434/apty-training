function goToUrl() {
  let url = document.getElementById("customUrl").value.trim();
  window.location.href = url;
}

function goForward(){
    window.history.forward();
}