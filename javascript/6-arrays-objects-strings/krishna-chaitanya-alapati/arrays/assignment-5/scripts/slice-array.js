const namesArray = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];

function getFirstThreeNames() {
  return namesArray.slice(0, 3);
}

function getLastTwoNames() {
  return namesArray.slice(-2);
}

function displayResults() {
  const firstThree = getFirstThreeNames();
  const lastTwo = getLastTwoNames();

  document.getElementById("result").innerText = `First three names: [${firstThree.join(", ")}]\nLast two names: [${lastTwo.join(", ")}]`;
}
