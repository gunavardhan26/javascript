let a = document.createElement("h1")
console.log(a)
a.textContent = "Hello"

document.body.appendChild(a)
a.style.backgroundColor = "red"
a.style.textAlign = "center"

let ol = document.createElement("ol")
ol.setAttribute("type", "A")
let li1 = document.createElement("li")
li1.textContent = "react"

let li2 = document.createElement("li")
li2.textContent = "Node.js"
ol.appendChild(li1)
ol.appendChild(li2)


let div = document.getElementById("demo")
div.appendChild(ol)

div.style.border = "5px solid red"

let table = document.createElement("table")
table.setAttribute("border", "2px solid black")
let tr1 = document.createElement("tr")
let tr2 = document.createElement("tr")
let tr3 = document.createElement("tr")
let tr4 = document.createElement("tr")
let tr5 = document.createElement("tr")

table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)
table.appendChild(tr4)
table.appendChild(tr5)

let td1 = document.createElement("th")
td1.textContent = "node.js 1"
let td3 = document.createElement("th")
let td2 = document.createElement("th")
let td4 = document.createElement("th")
let td5 = document.createElement("th")
let td6 = document.createElement("th")
let td7 = document.createElement("th")
let td8 = document.createElement("th")
let td9 = document.createElement("th")
let td10 = document.createElement("th")
let td11 = document.createElement("th")
let td12 = document.createElement("th")
let td13 = document.createElement("th")
let td14 = document.createElement("th")
let td15 = document.createElement("th")
let td16 = document.createElement("th")
let td17 = document.createElement("th")
let td18 = document.createElement("th")
let td19 = document.createElement("th")
let td20 = document.createElement("th")
let td21 = document.createElement("th")
let td22 = document.createElement("th")
let td23 = document.createElement("th")
let td24 = document.createElement("th")
let td25 = document.createElement("th")

td2.textContent = "node.js 2"
td3.textContent = "node.js 3"
td4.textContent = "node.js 4"
td5.textContent = "node.js 5"
td6.textContent = "node.js 6"
td7.textContent = "node.js 7"
td8.textContent = "node.js 8"
td9.textContent = "node.js 9"
td10.textContent = "node.js 10"
td11.textContent = "node.js 11"
td12.textContent = "node.js 12"
td13.textContent = "node.js 13"
td14.textContent = "node.js 14"
td15.textContent = "node.js 15"
td16.textContent = "node.js 16"
td17.textContent = "node.js 17"
td18.textContent = "node.js 18"
td19.textContent = "node.js 19"
td20.textContent = "node.js 20"
td21.textContent = "node.js 21"
td22.textContent = "node.js 22"
td23.textContent = "node.js 23"
td24.textContent = "node.js 24"
td25.textContent = "node.js 25"


tr1.appendChild(td1)
tr1.appendChild(td2)
tr1.appendChild(td3)
tr1.appendChild(td4)
tr1.appendChild(td5)
tr2.appendChild(td6)
tr2.appendChild(td7)
tr2.appendChild(td8)
tr2.appendChild(td9)
tr2.appendChild(td10)
tr3.appendChild(td11)
tr3.appendChild(td12)
tr3.appendChild(td13)
tr3.appendChild(td14)
tr3.appendChild(td15)
tr4.appendChild(td16)
tr4.appendChild(td17)
tr4.appendChild(td18)
tr4.appendChild(td19)
tr4.appendChild(td20)
tr5.appendChild(td21)
tr5.appendChild(td22)
tr5.appendChild(td23)
tr5.appendChild(td24)
tr5.appendChild(td25)



console.log(table)

document.body.appendChild(table)
