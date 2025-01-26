let btn = document.getElementById('demo');
console.log(btn);

btn.onclick = function () {
    // setTimeout(() => {
    //     let res = Math.round(Math.random() * 100)
    //     console.log(res)
    // }, 2000)
    let res = Math.round(Math.random() * 10000)
    console.log(res)
    document.body.style.backgroundColor = `#${res}`


}

let btn1 = document.getElementById('demo1');
let color = window.prompt("Enter color name")
btn1.onmouseover = () => {
    document.body.style.backgroundColor = `${color}`
    document.body.style.transitionDuration = "3s"


}

let input = document.getElementById('demo2');

input.addEventListener("keypress", () => {
    let res = Math.round(Math.random() * 10000).toString(16)
    console.log(res)
    document.body.style.backgroundColor = `#${res}`
})
