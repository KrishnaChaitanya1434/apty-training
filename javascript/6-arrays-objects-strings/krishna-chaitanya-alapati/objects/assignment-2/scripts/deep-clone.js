function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function cloneObject() {
  const obj = JSON.parse(document.getElementById("objectInput").value);
  const clone = deepClone(obj);
  document.getElementById("original").innerText = JSON.stringify(obj, null, 2);
  document.getElementById("cloned").innerText = JSON.stringify(clone, null, 2);
}
