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