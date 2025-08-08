let person = {
  name: "John",
  greet: function() {
    return `Hello, ${this.name}`;
  }
};

let employee = Object.create(person);
employee.job = "Developer";

employee.greet = function () {
  return `${person.greet.call(this)} the ${this.job}!`;
};

function showGreeting() {
  document.getElementById("output").textContent = employee.greet();
}
