const btn = document.querySelector("#my-button")
btn.addEventListener("click", function (){
    console.log("Clicou aqui!")
})

// aula 359

const secondBtn = document.querySelector("#btn")
function imprimirMensagem(){
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removendoEventListener("click", imprimirMensagem)
})

//aula 360
const myTitle = document.querySelector("#my-title");
myTitle.addEventListener("Click", (evt) => {
    console.log(evt)
    console.log(evt.offsetX)
    console.log(evt.pointerType)
    console.log(evt.target)
})

// aula 361
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})

// aula 362
const a = document.querySelector("a")
a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Não Alterou a página")
})
// aula 363
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})
document.addEventListener("keydown", (e) => {
    console.log(`Aperttou a tecla ${e.key}`)
})

// aula 364
const mouseEvents = document.querySelector("#mouse")
mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão")
})
mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão")
})
mouseEvents.addEventListener("bdlclick", () => {
    console.log("Clique duplo")
})

// aula 365
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo x: ${e.x}`)
    // console.log(`No eixo y: ${e.y}`)
})

// aula 366
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px")
    }
})

// aula 367
const input = document.querySelector("#my-input")
input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})
input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
})