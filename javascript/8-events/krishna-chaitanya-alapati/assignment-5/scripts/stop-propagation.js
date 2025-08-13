const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click",(e) => {
    alert("Parent Div Invoked");
});

child.addEventListener("click", (e) => {
    alert("Child Div Invoked")
    e.stopPropagation();
});