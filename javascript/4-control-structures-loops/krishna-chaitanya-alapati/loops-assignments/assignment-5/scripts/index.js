const output = document.getElementById("output");

function calculate() {
  const rawString = document.getElementById("string").value;
  output.innerHTML = "";

  const string = rawString.toLowerCase().trim();

  if (string === "") {
    output.innerHTML = `Please enter some text.`;
    return;
  }
  const freq = {};
  for (let i in string) {
    const char = string[i];
    if (char === " ") {
      continue;
    }
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  for (let char in freq) {
    output.innerHTML += `"${char}" is repeated ${freq[char]} times.<br>`;
  }
}