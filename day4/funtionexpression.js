//Funtion expression
let demo = function () {
    console.log("hello world!");
}
//console.log(demo);
demo();

let operator = function () {
    let a = Number(prompt("Enter a value"))
    let b = Number(prompt("Enter b value"))
    let c = a + b;
    return c;
}

//console.log(operator());


//Create a function expession to find largest of three numbers and input from the end user
let greatest = function () {
    let a = Number(prompt("Enter a value"))
    let b = Number(prompt("Enter b value"))
    let c = Number(prompt("Enter c value"))
    if (a > b & a > c) {
        console.log(a + " is the greatest")
    } else if (b > a & b > c) {
        console.log(b + " is the greatest")
    } else {
        console.log(c + " is the greatest")
    }
}


greatest()

//