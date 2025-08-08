const form = document.getElementById("wordForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const input = document.getElementById("words").value;
  try {
    const wordArray = JSON.parse(input);
    if (!Array.isArray(wordArray) || !wordArray.every(word => typeof word === "string")) {
      result.textContent = "Invalid input. Please enter a JSON array of strings.";
      return;
    }
    const sentence = wordArray.join(" ");
    const capitalizedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    result.textContent = capitalizedSentence;

  } catch (error) {
    result.textContent = "Invalid JSON. Please enter a valid JSON array (e.g. [\"hello\",\"world\"]).";
  }
});
