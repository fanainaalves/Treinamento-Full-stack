// ------------------- Váriáveis - aula 221 -------------------
// LET = a variável pode mudar o valor em tempo de execução,
// CONST = a variavél não muda o valor

// let nome = "Matheus";
// console.log(nome)

// nome = "Matheus Battisti"
// console.log(nome)

// const idade = 31
// console.log(idade)

// idade = 32
// console.log(idade)

// console.log(typeof nome)
// console.log(typeof idade)


// ------------------- Variáveis - aula 222 -------------------

// let a = 10,
//     b = 20, 
//     c = 30;

// console.log(a, b, c);

// const nomeCompleto = "Matheus Battisti";
// const nomeCompleto = "João da silva";

// console.log(nomeCompleto);
// console.log(nomeCompleto);

// let _teste = "ok";
// let $teste = "ok";

// console.log(_teste, $teste)

// ------------------- Nomes  Reservados - aula 223 -------------------

// Teoria

// ------------------- O ambiente JavaScript - aula 224 -------------------
// * Navegador, console, alert

// ------------------- A estrutura das funções - aula 225 -------------------
// teoria

// ------------------- Funções de prompt - aula 226 -------------------

// const age = prompt("Digite a sua idade: ")
// console.log("Você tem ${age} anos.")

// ------------------- Funções Alert - aula 227 -------------------

// const num = alert("Digite um número: ")
// console.log("O numero digitado foi ${num}.")

// ------------------- Funções Math.x - aula 228 -------------------

// console.log(Math.max(5, 2, 1, 10));
// console.log(Math.floor(5.14));
// console.log(Math.ceil(5.14));

// ------------------- Funções Console.x - aula 229 -------------------

// console.log("Olá!")
// console.error("Erro!")
// console.warn("Aviso!")

// ------------------- Estruturas de Controle - aula 230 -------------------

// Teoria

// ------------------- Estruturas de Controle: IF - aula 231 -------------------
// const m = 10;
// if(m > 5){
//     console.log("M é maior que 5!")
// }

// const user = "João"
// if(user === "João"){
//     console.log(`O nome do usuário é ${user}`)
// }

// ------------------- Estruturas de Controle: ELSE - aula 232 -------------------

// const loggedIn = false
// if(loggedIn){
//     console.log(`está autenticado`)
// } else {
//     console.log("Não está autenticado")
// }

// const q = 10, w = 15;

// if(q > 5 && w > 20){
//     console.log("Números mais altos");
// } else {
//     console.log("Os numeros não são mais altos");
// }

// ------------------- Estruturas de Controle: ELSE/IF - aula 233 -------------------

// if (1 > 2){
//     console.log("Teste");
// } else if (2 > 3){
//     console.log("Teste 2");
// } else if (5 > 1){
//     console.log("Agora sim!")
// }

// const username = "Matheus";
// const userAge = 31;

// if(username === "José"){
//     console.log("Bem vindo José!");
// } else if (username === "Matheus" && userAge === 31){
//     console.log("Olá Matheus, você tem 31 anos!")
// } else {
//     console.log("Nenhuma condição aceita!")
// }

// ------------------- Estruturas de Repetição - aula 234 -------------------
// Teoria

// ------------------- Estruturas de Repetição: WHILE - aula 235 -------------------

// let p = 0;

// while(p < 5){
//     console.log(`Repetindo: ${p}`);
//     p = p + 1;
// }

// ------------------- Estruturas de Repetição: DO WHILE - aula 236 -------------------

// let o = 10;
// do{
//     console.log(`Valor de o: ${o}`);
//     o--;
// } while (0 > 1);

// ------------------- Estruturas de Repetição: FOR - aula 237 -------------------

// for (let t = 0; t < 10; t++) {
//     console.log("Repetindo algo...");
// }

let r = 10;

for (r; r > 0; r = r-1) {
    console.log(`O r está diminuindo... r=${r}`);
}