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

// aula 349
const myText = document.createTextNode("Agora vamos colocar mais um título")
console.log(myText)

const h3 = doocument.createElement("h3")
h3.appendChild(myText)
console.log(h3)
mainContainer.appendChild(h3)

// aula 350
const firstLink = navLinks.querySelector("a")
console.log(firstLink)
firstLink.setAttribute("href", "www.google.com")
console.log(firstLink.getAttribute("href"))
firstLink.setAttribute("target", "_blank")

// aula 351
const footer = document.querySelector("footer")
console.log(footer.offsetWidth)
console.log(footer.offsetHeight)
console.log(footer.clientWidth)
console.log(footer.clientHeight)

// aula 352
const product1 = products[0]
console.log(product1.getBoundingClientRect())