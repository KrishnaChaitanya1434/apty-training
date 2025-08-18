let countdownTimeout;
let countdownSeconds = 0;

function startCountdown() {
  stopCountdown();

  countdownSeconds =
    parseInt(document.getElementById("countdownInput").value) || 0;
  if (countdownSeconds <= 0) {
    document.getElementById("countdownDisplay").textContent =
      "Enter a valid number";
    return;
  }

  tick();
}

function tick() {
  document.getElementById("countdownDisplay").textContent = countdownSeconds;

  if (countdownSeconds > 0) {
    countdownSeconds--;
    countdownTimeout = setTimeout(tick, 1000);
  } else {
    document.getElementById("countdownDisplay").textContent = "Time's up!";
  }
}

function stopCountdown() {
  clearTimeout(countdownTimeout);
}

let stopwatchInterval;
let secondsElapsed = 0;

function startStopwatch() {
  if (stopwatchInterval) return;

  stopwatchInterval = setInterval(() => {
    secondsElapsed++;
    const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
    const seconds = String(secondsElapsed % 60).padStart(2, "0");
    document.getElementById(
      "stopwatchDisplay"
    ).textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  secondsElapsed = 0;
  document.getElementById("stopwatchDisplay").textContent = "00:00";
}
