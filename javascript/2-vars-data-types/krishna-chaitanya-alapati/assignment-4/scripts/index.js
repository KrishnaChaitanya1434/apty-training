const output = document.getElementById("output");

let str = "123";
let num = 456;
let bool = false;
let undef;
let nul = null;
let sym = Symbol("sym");
let obj = {name: "John"};

output.innerHTML += "<strong>To Number:</strong><br>";
output.innerHTML += `String : ${Number(str)}<br>`;
output.innerHTML += `Boolean : ${Number(bool)}<br>`;
output.innerHTML += `Null : ${Number(nul)}<br>`;
output.innerHTML += `Undefined : ${Number(undef)}<br>`;
output.innerHTML += `Object : ${Number(obj)}<br><br>`;

output.innerHTML += "<strong>To String:</strong><br>";
output.innerHTML += `Number : ${String(num)}<br>`;
output.innerHTML += `Boolean : ${String(bool)}<br>`;
output.innerHTML += `Undefined : ${String(undef)}<br>`;
output.innerHTML += `Null : ${String(nul)}<br>`;
output.innerHTML += `Symbol : ${String(sym)}<br>`;
output.innerHTML += `Object : ${String(obj)}<br>`;

output.innerHTML += "<br><strong>To Boolean:</strong><br>";
output.innerHTML += `Number : ${Boolean(num)}<br>`;
output.innerHTML += `Undefined : ${Boolean(undef)}<br>`;
output.innerHTML += `Null : ${Boolean(nul)}<br>`;
output.innerHTML += `Symbol : ${Boolean(sym)}<br>`;
output.innerHTML += `Object : ${Boolean(obj)}<br>`;
