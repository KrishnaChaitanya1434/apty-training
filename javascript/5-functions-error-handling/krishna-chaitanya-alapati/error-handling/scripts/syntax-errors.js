const form = document.getElementById("input");
const output = document.getElementById("output");

form.addEventListener("submit",function(event) {
    event.preventDefault();
    const jsonString = document.getElementById('string').value

    if (!jsonString.trim()) {
        document.getElementById('result').innerText = "Please enter a JSON string!"
        return
    }

    try {
        const parsed = JSON.parse(jsonString)
        output.textContent = `Parsed JSON: ${JSON.stringify(parsed, null, 2)}`
    } catch (error) {
        output.textContent = `Invalid JSON! ${error.message}. Please check the format and try again.`
    }
});