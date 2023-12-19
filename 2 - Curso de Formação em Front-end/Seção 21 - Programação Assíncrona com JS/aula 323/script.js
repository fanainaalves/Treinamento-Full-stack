// Aula 321 - Função setTimeout
// console.log("ainda nao executou")
// setTimeout(function (){
//     console.log("Requisição Assíncrona")
// }, 2000);
// console.log("ainda nao executou 2")

// Aula 322 - Função SetInterval

// console.log("Ainda nao começou");
// setInterval( function () {
//     console.log("Intervalo Assíncrono")
// }, 3000);
// console.log("Ainda nao começou 2");

// Aula 323 - Promises

const promessa = Promise.resolve(5 + 5);
console.log("Algum código")
promessa.then((value) => {
    console.log(`A soma é ${value}`)
    return value;
})
.then((value) => value - 1)
.then((value) => console.log(`Agora o novo valor é ${value}`))
console.log("Outro código")