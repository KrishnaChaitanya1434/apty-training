function scrollToPosition() {
  const x = parseInt(document.getElementById("xPos").value) || 0;
  const y = parseInt(document.getElementById("yPos").value) || 0;
  window.scrollTo({ left: x, top: y, behavior: 'smooth' });
}

function scrollUp() {
  window.scrollBy({ left: 0, top: -10, behavior: 'smooth' });
}

function scrollDown() {
  window.scrollBy({ left: 0, top: 10, behavior: 'smooth' });
}
