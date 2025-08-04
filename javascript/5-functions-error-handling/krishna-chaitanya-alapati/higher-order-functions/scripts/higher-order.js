const outputList = document.getElementById("output");
const form = document.getElementById("inputForm");

function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    output.innerHTML = "";

    const text = document.getElementById("text").value;
    const count = parseInt(document.getElementById("num").value);

    const addItem = function(idx){
        const li = document.createElement("li");
        li.textContent = `${idx+1}) ${text}`;
        outputList.appendChild(li);
    };
    repeatAction(addItem,count);
});