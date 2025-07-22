const output = document.getElementById("output");

let str = "Hello";
let num = 10;
let bool = true;
let undef = undefined;
let empty = null;
let id = Symbol("id");
let obj = {name: "Alex"};

output.innerHTML += `str is ${typeof str}<br>`;
output.innerHTML += `num is ${typeof num}<br>`;
output.innerHTML += `bool is ${typeof bool}<br>`;
output.innerHTML += `undef is ${typeof undef}<br>`;
output.innerHTML += `empty is ${typeof empty}<br>`;
output.innerHTML += `id is ${typeof id}<br>`;
output.innerHTML += `obj is ${typeof obj}<br>`;