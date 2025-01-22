function main(m, n) {
    setTimeout(() => {
        for (let i = m; i < n; i++) {
            console.log(i);
        }
    }, 5000)

}

main(1, 10)

function simple() {
    console.log("no's printed")
}

simple()

// setInterval(() => {
//     console.log("I am setInterval")
// }, 3000)

// setTimeout(() => {
//     console.log("I am set timeout")
// }, 3000)

let room = Window.navigator.onLine
new Promise((resolve, reject) => {
    setTimeout(() => {
        if (room === true) {
            return resolve()
        } else {
            return reject()
        }
    }, 2000)
}).then(() => { console.log("Room is cleaned 😀") })
    .catch(() => { console.log("Room is not cleaned") })