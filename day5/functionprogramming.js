function main(a) {
    console.log(a);
    console.log(a());
}

main(function () {
    return "i am call back funtion 1"
})

main(function () {
    return "i am call back funtion 2"
})

function operation(task) {
    console.log(task(10, 10))
}

operation(function (a, b) {
    return a + b;
})

operation(function (a, b) {
    return a / b;
})

operation(function (a, b) {
    return a * b;
})

let a = () => console.log("Hello world")

a()

let b = () => { return "Hello" }

console.log(b)
console.log(b())


function operation1(task) {
    console.log(task(20, 10))
}

operation1((a, b) => { return (a + b) })

operation1((a, b) => { return a / b })

operation1((a, b) => { return a - b })

operation1((a, b) => { return a * b })