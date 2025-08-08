function showGreeting() {
    const name = document.getElementById("nameInput").value.trim();
    const age = document.getElementById("ageInput").value.trim();
    const output = document.getElementById("output");

    if (name && age) {
      output.textContent = `Hello, my name is ${name} and I am ${age} years old.`;
    } else {
      output.textContent = "Please enter both name and age.";
    }
  }