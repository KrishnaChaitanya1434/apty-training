const output = document.getElementById('output')

output.innerHTML += '<h3>Initial Declarations:</h3><br>'
var x = 10
let y = 20
const z = 30
output.innerHTML += `var: ${x}, let: ${y}, const: ${z}<br><br>`

output.innerHTML += '<h3>Re-declarations:</h3><br>'
try {
  var x = 100
  output.innerHTML += `Re-declared var: ${x}<br>`
} catch (e) {
  output.innerHTML += `Error with var: ${e}<br>`
}

try {
  let y = 200
  output.innerHTML += `Re-declared let: ${y}. Here let is allowed to be re-declared because this let is declared inside the try block.<br>`
} catch (e) {
  output.innerHTML += `Error with let: ${e}<br>`
}

try {
  const z = 300
  output.innerHTML += `Re-declared const: ${z}<br>`
} catch (e) {
  output.innerHTML += `Error with const: ${e}<br>`
}

output.innerHTML += '<br><h3>Re-assignments:</h3><br>'
x = 999
y = 888
try {
  z = 777;
} catch (e) {
  output.innerHTML += `Error assigning to const: ${e}<br><br>`
}
output.innerHTML += `Updated var: ${x}, let: ${y}, const: ${z}<br>`
