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

// const promessa = Promise.resolve(5 + 5);
// console.log("Algum código")
// promessa.then((value) => {
//     console.log(`A soma é ${value}`)
//     return value;
// })
// .then((value) => value - 1)
// .then((value) => console.log(`Agora o novo valor é ${value}`))
// console.log("Outro código")

// Aula 324 - Tratando erros nas Promises
// Promise.resolve(4*"asd")
// .then((n) => {
//     if(Number.isNaN(n)){
//         throw new Error("Valores inválidos")
//     }
// })
// .catch((err) => console.log(`Um erro ocorreu: ${err}`))

// Aula 325 - Rejeitando Promises

// function checkNumber(n){
//     return new Promise.resolve((resolve, reject) => {
//         if (n > 10){
//             resolve(`O numero é maior que 10`)
//         } else{
//             reject(new error("Numero é muito baixo"))
//         }
//     })
// }
// const a = checkNumber(20)
// const b = checkNumber(10)
// a.then((v) => console.log(`O resultado é ${v}`)).cath((err) => console.log(`Um erro ocorreu: ${err}`))
// b.then((v) => console.log(`O resultado é ${v}`)).cath((err) => console.log(`Um erro ocorreu: ${err}`))

// Aula 326 - Resolvendo Várias Promises
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve(10)
//     }, 3000);
// });

// const p2 = Promise.resolve(10 + 20)

// const p3 = new Promisse((resolve, reject) => {
//     if(30 > 10){
//         resolve(30)
//     } else {
//         reject("Erro!")
//     }
// })
// Promise.all([p1, p2, p3]).then((values) => console.log(values));

// Aula 327 - Async Functions
async function somarComDelay(a,b){
    return a+b
}

somarComDelay(2,4).then((value) => {
    console.log(`O valor da soma é ${value}`)
})
console.log("Teste async")

