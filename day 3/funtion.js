function demo() {
    console.log("Hello world");
}

console.log(demo);

demo();

//create a funtion to performe arthematic opeation for two number and input should be taken from the end user

function add() {
    let number1 = parseInt(document.getElementById("id1").value);
    let number2 = parseInt(document.getElementById("id2").value);
    console.log(number1 + number2);
    let result = document.getElementById("result");
    result.innerText = "Add: " + (number1 + number2);
}

function substract() {
    let number1 = parseInt(document.getElementById("id1").value);
    let number2 = parseInt(document.getElementById("id2").value);
    console.log(number1 - number2);
    let result = document.getElementById("result");
    result.innerText = "Substract: " + (number1 - number2);
}

function multiply() {
    let number1 = parseInt(document.getElementById("id1").value);
    let number2 = parseInt(document.getElementById("id2").value);
    console.log(number1 * number2);
    let result = document.getElementById("result");
    result.innerText = "Multiply: " + (number1 * number2);
}

function divide() {
    let number1 = parseInt(document.getElementById("id1").value);
    let number2 = parseInt(document.getElementById("id2").value);
    console.log(number1 / number2);
    let result = document.getElementById("result");
    result.innerText = "Divide: " + (number1 / number2);
}