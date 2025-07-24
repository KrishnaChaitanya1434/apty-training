const output = document.getElementById("output");

function convert(value, type) {
    if (type === "number") {
        return Number(value);
    } else if (type === "boolean") {
        return value === "true";
    } else if (type === "undefined") {
        return undefined;
    } else if (type === "null") {
        return null;
    } else if (type === "object") {
        try {
            return JSON.parse(value);
        } catch {
            return { value };
        }
    } else {
        return String(value);
    }
}

function getConverted() {
    const value1 = document.getElementById("val1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("val2").value;
    const type2 = document.getElementById("type2").value;
    return [ convert(value1, type1), convert(value2, type2) ];
}

function logicalAND() {
    const [a, b] = getConverted();
    output.innerHTML = `Result = ${a && b}`;
}

function logicalOR() {
    const [a, b] = getConverted();
    output.innerHTML = `Result = ${a || b}`;
}

function logicalNOTa() {
    const [a,] = getConverted();
    output.innerHTML = `Result = ${!a}`;
}

function logicalNOTb(){
    const [,b] = getConverted();
    output.innerHTML = `Result = ${!b}`;
}
