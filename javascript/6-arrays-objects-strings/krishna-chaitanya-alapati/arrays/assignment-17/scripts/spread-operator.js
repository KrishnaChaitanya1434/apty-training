const array1Input = document.getElementById("array1Input");
const array2Input = document.getElementById("array2Input");
const output = document.getElementById("output");

function combineUniqueArrays(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2];

  const uniqueSet = new Set(combinedArray);

  const uniqueArray = [...uniqueSet];

  return uniqueArray;
}

function processArrays() {
  output.textContent = ""; 

  const rawArray1 = array1Input.value;
  const rawArray2 = array2Input.value;

  if (!rawArray1 && !rawArray2) {
    output.textContent = "Enter at least one array.";
    return;
  }

  let arr1, arr2;

  try {
    arr1 = JSON.parse(rawArray1);
    arr2 = JSON.parse(rawArray2);
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new Error("Enter only arrays as input");
    }

    const result = combineUniqueArrays(arr1, arr2);
    output.textContent = `[${result.join(", ")}]`;
  } catch (error) {
    output.textContent = `Error: ${error.message}. Please Ensure valid comma-separated numbers.`;
  }
}
