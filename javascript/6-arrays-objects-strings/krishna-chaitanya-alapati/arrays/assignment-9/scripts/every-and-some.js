const output = document.getElementById("result");
const form = document.getElementById("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  try {
    const input = document.getElementById("userInput").value;
    const parsedInput = JSON.parse(input);
    if(!Array.isArray(parsedInput)){
        output.textContent = `The input should be an array of student objects.`;
        return;
    }
    const allPassed = parsedInput.every(task => task.score > 35);
    const someFailed = parsedInput.some(task => task.score <= 35);
    if(allPassed){
        output.textContent = `"All Students Passed"`;
    }
    else if(someFailed){
        output.textContent = `"Some Students Failed"`;
    }
    else{
        output.textContent = `Please check the input once again for invalid scores.`;
    }
  } catch (err) {
    output.textContent = `Invalid JSON. ${err}`;
  }
});
