const output = document.getElementById("output");
const form = document.getElementById("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.getElementById("array").value;
  try {
    const array = JSON.parse(input);
    if (!Array.isArray(array)) {
      output.textContent = `Enter the numbers in an array.`;
      return;
    }
    const [res,freq] = mostFrequent(array);
    output.textContent = `"${res}" is the most frequent element repeating ${freq} times`;
  } catch (err) {
    output.textContent = `Invalid Input. ${err}.`;
  }
});

function mostFrequent(arr){
    const freqs = arr.reduce((acc,value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    },{});
    let maxFreq = 0;
    let highestEle;
    for(let key in freqs){
        if (freqs[key] > maxFreq){
            maxFreq = freqs[key];
            highestEle = key;
        }
    }
    return [highestEle,maxFreq];
}