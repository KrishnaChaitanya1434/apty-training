const output = document.getElementById("output");
const form = document.getElementById("inputForm");

form.addEventListener("submit",function(event){
    event.preventDefault();

    function outerFunction(outerVal){
        function middleFunction(middleVal){
            function innerFunction(innerVal){
                return `${outerVal} ${middleVal} ${innerVal}`;
            }
            return innerFunction;
        }
        return middleFunction;
    }
    
    const outerVal = document.getElementById("outerVal").value;
    const middleVal = document.getElementById("middleVal").value;
    const innerVal = document.getElementById("innerVal").value;

    const result = outerFunction(outerVal)(middleVal)(innerVal);
    output.innerHTML = `String after concatenation is ${result}`;
});