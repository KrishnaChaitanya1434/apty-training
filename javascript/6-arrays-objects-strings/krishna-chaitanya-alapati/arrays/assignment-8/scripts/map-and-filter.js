const output = document.getElementById("result");
const form = document.getElementById("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("userInput").value;
  try {
    const tasks = JSON.parse(input);
    if (!Array.isArray(tasks)) {
      output.textContent = `Enter the task objects inside the array.`;
      return;
    }
    const res = tasks.filter(task => task.completed === true).map(task => task.task);
    output.textContent = JSON.stringify(res);
  } catch (err) {
    output.textContent = `Invalid JSON string format. ${err}`;
    return;
  }
});
