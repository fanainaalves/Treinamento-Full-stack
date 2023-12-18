// function minhaFuncao(){
//     console.log("testando");
// }

// minhaFuncao();
// minhaFuncao();

// const minhaFuncaoEmVariavel = function(){
//     console.log("Funcao em variável")
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt){
//     console.log(`imprimindo ${txt}`);
// }
// funcaoComParametro("imprimindo alguma coisa")
// funcaoComParametro("Outra função")


// aula 247

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2){
//     return n1 + n2;
// }

// const resultado = soma(a, b);
// console.log(resultado);
// console.log(soma(c, d));


// aula 248

let y = 10;
function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}
testandoEscopo();

console.log(`Y fora da função é: ${y}`);

testandoEscopo();