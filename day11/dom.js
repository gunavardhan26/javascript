console.log(document.getElementsByTagName('p'))

let a = document.getElementsByTagName('p');
console.log(a[1].textContent)

a[1].textContent = "Hello"

a[1].style.border = "1px solid red"

let b = document.getElementsByName('demo0')
console.log(b);

b[0].style.textAlign = "center"

b[1].style.textAlign = "center"


console.log(document.querySelector('#demo0'))

console.log(document.querySelectorAll('#demo0'))

console.log(document.querySelector('.demo0'))

let c = document.querySelectorAll('.demo0')

console.log(c[1])

function demo() {
    console.log("Hello World")
}