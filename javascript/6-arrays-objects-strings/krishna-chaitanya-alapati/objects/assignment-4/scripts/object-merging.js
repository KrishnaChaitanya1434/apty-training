function merge(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        !Array.isArray(obj2[key]) &&
        typeof obj1[key] === "object" &&
        obj1[key] !== null &&
        !Array.isArray(obj1[key])
      ) {
        obj1[key] = merge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
}

function mergeObjects() {
  try {
    let obj1 = JSON.parse(document.getElementById("obj1Input").value);
    let obj2 = JSON.parse(document.getElementById("obj2Input").value);

    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
      document.getElementById("result").textContent =
        "Both inputs must be valid objects.";
      return;
    }

    const mergedObj = merge(obj1, obj2);
    document.getElementById("result").textContent = JSON.stringify(mergedObj);
  } catch (e) {
    document.getElementById("result").textContent =
      "Invalid JSON input: " + e.message;
  }
}
