const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (event) {
  let messages = [];
  if (nameInput.value.trim() === "") {
    messages.push("Name is required.");
  }
  if (emailInput.value.trim() === "") {
    messages.push("Email is required.");
  }

  if (messages.length > 0) {
    event.preventDefault();
    errorMsg.textContent = messages.join(" ");
  } else {
    errorMsg.textContent = "";
    alert("Form submitted successfully!");
  }
});
