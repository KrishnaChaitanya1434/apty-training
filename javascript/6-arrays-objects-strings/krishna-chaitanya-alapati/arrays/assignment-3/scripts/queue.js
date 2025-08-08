let queue = [];

const input = document.getElementById("value");
const queueDisplay = document.getElementById("queueDisplay");
const result = document.getElementById("result");

function updateQueueDisplay() {
  queueDisplay.textContent = "Queue: [" + queue.join(", ") + "]";
}

function enqueue() {
  const val = input.value.trim();
  if (val === "") {
    result.textContent = "Please enter a value to enqueue.";
    return;
  }
  queue.unshift(val);
  input.value = "";
  updateQueueDisplay();
  result.textContent = `Enqueued "${val}" into the queue.`;
}

function dequeue() {
  if (queue.length === 0) {
    result.textContent = "Queue is empty. Nothing to dequeue.";
    return;
  }
  const removed = queuePop(queue);
  updateQueueDisplay();
  result.textContent = `Dequeued "${removed}" from the queue.`;
}

function queuePop(arr) {
  if (arr.length === 0) return undefined;

  const lastIndex = arr.length - 1;
  const removedValue = arr[lastIndex];
  arr.length = lastIndex;

  return removedValue;
}

function checkQueueStatus() {
  if (queue.length === 0) {
    result.textContent = "Queue is empty.";
  } else {
    const front = queue[queue.length - 1];
    result.textContent = `Queue is not empty. Next element is: "${front}"`;
  }
  updateQueueDisplay();
}

document.getElementById("enqueue").addEventListener("click", enqueue);
document.getElementById("dequeue").addEventListener("click", dequeue);
document.getElementById("check").addEventListener("click", checkQueueStatus);
