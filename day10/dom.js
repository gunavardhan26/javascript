console.log(typeof document);
console.log(window);
console.log(document.doctype);
console.log(document.headers);
console.log(document.body);
console.log(document.title);
document.title = "Flipkart";
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[2]);
document.links[0].href = "http://www.youtube.com"
document.links[1].href = "http://www.flipkart.com"
console.log(document.getElementById("h1"))
document.links[0].style.color = "#3f134f";
document.links[1].style.color = "#0a8ec2";
document.links[2].style.color = "#3ec20a";
console.log(document.getElementsByTagName("img"))

document.getElementById("h1").textContent = "Flipkart"

document.getElementById("h1").style.background = "red"
document.getElementById("h1").style.textAlign = "center"

let b = document.getE1ementsByC1assName("dem01")
console.log(b)
console.log(b[0]);
console.log(b[1]);
console.log(b[0].textContent);
b[0].style.background = "green"

