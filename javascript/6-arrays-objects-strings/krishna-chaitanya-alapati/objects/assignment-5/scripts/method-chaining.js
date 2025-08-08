class Person {
  constructor() {
    this.name = "";
    this.age = 0;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  greet() {
    return `"Hello, I am ${this.name}, ${this.age} years old."`;
  }
}

function generateGreeting() {
  const name = document.getElementById("nameInput").value;
  const ageValue = document.getElementById("ageInput").value;
  if (!name || !ageValue) {
    document.getElementById("result").textContent =
      "Please provide both name and age.";
    return;
  }
  const age = parseInt(ageValue);
  const greeting = new Person().setName(name).setAge(age).greet();
  document.getElementById("result").textContent = greeting;
}
