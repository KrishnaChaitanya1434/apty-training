const output = document.getElementById("output");

function fibo(n){
    if(n===0 || n===1){
        return n;
    }
    return fibo(n-1)+fibo(n-2);
}

function getSeries() {
    const value = parseInt(document.getElementById("val").value);
    if (isNaN(value) || value <= 0) {
        output.textContent = "Please enter a positive number.";
        return;
    }
    let series = [];
    for(let i=0;i<value;i++){
        series.push(fibo(i));
    }
    output.textContent = series.join(", ");
}