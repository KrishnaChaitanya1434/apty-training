document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("result").textContent = "Registration successful!";
  });

document.getElementById("username").addEventListener("input", function () {
  const username = this.value;
  const errorElement = document.getElementById("usernameError");

  if (username.length < 4) {
    errorElement.textContent = "Username must be at least 4 characters";
  } else {
    errorElement.textContent = "";
  }
});

document.getElementById("email").addEventListener("input", function () {
  const email = this.value;
  const errorElement = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorElement.textContent = "Please enter a valid email address";
  } else {
    errorElement.textContent = "";
  }
});

document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  const errorElement = document.getElementById("passwordError");

  if (password.length < 6) {
    errorElement.textContent = "Password must be at least 6 characters";
  } else {
    errorElement.textContent = "";
  }
});

document
  .getElementById("confirmPassword")
  .addEventListener("input", function () {
    const confirmPassword = this.value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("confirmPasswordError");

    if (confirmPassword !== password) {
      errorElement.textContent = "Passwords do not match";
    } else {
      errorElement.textContent = "";
    }
  });
