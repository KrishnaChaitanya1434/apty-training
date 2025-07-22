const output = document.getElementById("output");

let name = "Alex";
let age = 21;
let boolean = true;
let undef;
let nul = null;
let sym = Symbol("id");
let obj = { location : "Hyderabad"};

output.innerHTML += `Hi, my name is ${name} and I am ${age} years old. It's ${boolean} that I live in ${obj.location}.<br><br>`;
output.innerHTML += `My employee id is still ${undef}. My bank balance is ${nul}.`;