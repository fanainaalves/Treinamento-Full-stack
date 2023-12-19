// Aula 310 - Conhecendo o Use Strict

// "use strict";
// opa = "teste";
// const opa = "teste";
// const undefined = 10;
// delete [].length;

// Aula 311 - Depurando com o Console.log

let a = 1;
let b = 2;
if(a == 1){
    a = b + 2;
}
console.log(a)

for(let i = 0; i< b; i++){
    a = a + 2;
    console.log(a);
}

if(a > 5){
    a = 25;
}

console.log(a)