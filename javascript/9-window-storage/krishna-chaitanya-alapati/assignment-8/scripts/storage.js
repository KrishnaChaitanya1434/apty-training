const input = document.getElementById("dataInput");
const localDiv = document.getElementById("localData");
const sessionDiv = document.getElementById("sessionData");

const localBtn = document.getElementById("saveLocalBtn");
const sessionBtn = document.getElementById("saveSessionBtn");

localBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value) {
    localStorage.setItem("myLocalData", value);
    displayData();
  }
});

sessionBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value) {
    sessionStorage.setItem("mySessionData", value);
    displayData();
  }
});

function displayData() {
  const localVal = localStorage.getItem("myLocalData");
  const sessionVal = sessionStorage.getItem("mySessionData");

  localDiv.textContent = localVal ? localVal : "(empty)";
  sessionDiv.textContent = sessionVal ? sessionVal : "(empty)";
}

window.onload = displayData;
