const output = document.getElementById("output");

function checkGrade() {
    const marks = document.getElementById("marks").value;
    if (isNaN(marks)) {
        output.textContent = `Please enter a valid number for marks.`;
        return;
    }
    if (marks < 0 || marks > 100) {
        output.textContent = `Invalid Marks! Input should be between 0 and 100.`;
        return;     
    }
    let gradeMessage = "";
    if (marks >= 90) {
        gradeMessage = `You got A Grade. Excellent!`;
    } else if (marks >= 75) {
        gradeMessage = `You got B Grade. Good job!`;
    } else if (marks >= 50) {
        gradeMessage = `You got C Grade. You passed!`;
    } else {
        gradeMessage = `You got F Grade. Keep trying!`;
    }
    output.textContent = gradeMessage;
}