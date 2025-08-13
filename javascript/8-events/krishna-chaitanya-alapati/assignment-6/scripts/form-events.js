const registrationForm = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const resultDiv = document.getElementById("result");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function validateUsername() {
  if (usernameInput.value.length < 4) {
    usernameError.textContent = "Username must be at least 4 characters";
    return false;
  }
  usernameError.textContent = "";
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    return false;
  }
  confirmPasswordError.textContent = "";
  return true;
}

usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const isFormValid = 
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword();

  if (isFormValid) {
    resultDiv.textContent = "Registration successful!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "Please fix the errors above.";
    resultDiv.style.color = "red";
  }
});