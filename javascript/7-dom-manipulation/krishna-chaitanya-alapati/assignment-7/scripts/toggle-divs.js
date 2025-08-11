const divs = document.querySelectorAll("div");
let index = 0;

divs.forEach((d, i) => {
  if (i !== 0) d.style.display = "none";
});

document.getElementById("toggleBtn").addEventListener("click", () => {
  divs[index].style.display = "none";
  index = (index + 1) % divs.length;
  divs[index].style.display = "block";
});
