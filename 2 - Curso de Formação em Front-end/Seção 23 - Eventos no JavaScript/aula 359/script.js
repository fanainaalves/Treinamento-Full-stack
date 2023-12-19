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
thirdBBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removendoEventListener("click", imprimirMensagem)
})