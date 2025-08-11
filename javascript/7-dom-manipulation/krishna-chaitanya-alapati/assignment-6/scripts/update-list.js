document.getElementById("updateBtn").addEventListener("click", () => {
  const items = document.querySelectorAll("#myList li");
  if (items[1]) items[1].textContent = "Updated Item";
  if (items[3]) items[3].textContent = "Updated Item";
});
