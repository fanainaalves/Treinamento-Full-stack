// Aula 310 - Conhecendo o Use Strict

// "use strict";
// opa = "teste";
// const opa = "teste";
// const undefined = 10;
// delete [].length;

// Aula 311 - Depurando com o Console.log

// let a = 1;
// let b = 2;
// if(a == 1){
//     a = b + 2;
// }
// console.log(a)

// for(let i = 0; i< b; i++){
//     a = a + 2;
//     console.log(a);
// }

// if(a > 5){
//     a = 25;
// }

// console.log(a)

// Aula 312 - Utilizando o Debugger
let c = 1;
let d = 2;

if (c == 1){
    c = d+2;
}

debugger;

for(let i = 0; i < d; i++){
    c = c + 2;
}

console.log("Executou o loop");

debugger;

if(c > 5){
    c = 25;
}