class Person{
    constructor(){
        this.name = "";
        this.age = 0;
    }
    setName(name){
        this.name = name;
        return this;
    }
    setAge(age){
        this.age = age;
        return this;
    }
    greet(){
        return `"Hello, I am ${this.name}, ${this.age} years old."`
    }
}

function generateGreeting(){
    const name = document.getElementById("nameInput").value;
    const age = parseInt(document.getElementById("ageInput").value);

    const greeting = new Person().setName(name).setAge(age).greet();

    document.getElementById("result").textContent = greeting;
}