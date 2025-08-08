const resultContent = document.getElementById("result");
const stackContent = document.getElementById("stackDisplay");
const valueInput = document.getElementById("value");

let stack = [];

function push() {
  const value = valueInput.value.trim();
  if (value === "") {
    resultContent.textContent = `Please enter a value to push.`;
    return;
  }
  stack.push(value);
  updateStackDisplay();
  resultContent.textContent = `Pushed "${value}" into the stack.`;
  valueInput.value = "";
}

function pop() {
  if (stack.length === 0) {
    resultContent.textContent = `Stack is empty. Nothing to pop.`;
    return;
  }
  const popped = stack.pop();
  updateStackDisplay();
  resultContent.textContent = `Popped "${popped}" from the stack.`;
}

function isEmpty() {
  if (stack.length === 0) {
    resultContent.textContent = `The stack is empty.`;
  }
  else {
    const topElement = stack[stack.length-1];
    resultContent.textContent = `The stack is not empty. Top element is : ${topElement} `;
  }
  updateStackDisplay();
}

function updateStackDisplay() {
  stackContent.textContent = "Stack: [" + stack.join(", ") + "]";
}

document.getElementById("push").addEventListener("click", push);
document.getElementById("pop").addEventListener("click", pop);
document.getElementById("empty").addEventListener("click", isEmpty);
