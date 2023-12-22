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
// getLetterLowCase();
// getLetterUpperCase()

const generatePassword = (getLetterLowCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""
    const passwordLength = 10;
    const generators = [
        getLetterLowCase, getLetterUpperCase, getNumber, getSymbol
    ]

    for(i = 0; i < passwordLength; i = i + 4){
        generators.forEach(() => {
            const randomValue =  generators[Math.floor(Math.random() * generators.length)]();

        password += randomValue;
        })
    }
    password = password.slice(0, passwordLength);
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;

}













// EVENTOS
generatePasswordButton.addEventListener("click", () => {

})