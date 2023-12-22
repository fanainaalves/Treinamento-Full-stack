// SELEÇÃO DE ELEMENTOS
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")


// FUNÇÕES
const getLetterLowCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getLetterUpperCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}


const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#%&$*+-"
    return symbols[Math.floor(Math.random() * symbols.length)]
}
getLetterLowCase();
getLetterUpperCase()

// EVENTOS
generatePasswordButton.addEventListener("click", () => {

})