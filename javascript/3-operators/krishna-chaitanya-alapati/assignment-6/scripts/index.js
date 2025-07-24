const output = document.getElementById("output");

function getName() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    return `${firstname +' '+ lastname}`;
}

function checkStatus(fullname){
    const age = document.getElementById("age").value;
    return (age>=18) ? `Hello ${fullname} welcome to apty` : `Hello ${fullname} comeback after ${18 - age} years`;
}

function showEligibility() {
    const fullname = getName();
    const result = checkStatus(fullname);
    output.innerHTML = result;
}