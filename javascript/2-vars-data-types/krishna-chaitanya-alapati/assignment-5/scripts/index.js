const output = document.getElementById("output");

let str = "5";
let num = 10;
let bool = true;
let undef;
let nul = null;
let obj = {a: 1};

output.innerHTML += `Number + Number: ${num + num}<br>`;
output.innerHTML += `String + Number: ${str + num}<br>`;
output.innerHTML += `Number + Boolean: ${num + bool}<br>`;
output.innerHTML += `Null + Number: ${nul + num}<br>`;
output.innerHTML += `Undefined + Number: ${undef + num}<br>`;
output.innerHTML += `Number + Object: ${num + obj}<br>`;
output.innerHTML += `Object + String: ${obj + str}<br>`;
