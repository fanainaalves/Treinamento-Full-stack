console.log(document.body)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)
// aula 341
const listItems = document.getElementsByTagName("li")
console.log(listItems)

// aula 342
const products = document.getElementsByClassName("product");
console.log(products)

// aula 344
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer)

// aula 345
// teoria

// aula 346
const p = document.createElement("p")
const header = title.parentElement;
header.insertBefore(p, title)

// aula 347
const navLinks = document.querySelector("nav ul")
const li = docuemnto.createElement("li")
navLinks.appendChild(li)

// aula 348
const h2 = document.createElement("h2")
h2.textContent = "Meu novo título"
header.replaceChild(h2, title)