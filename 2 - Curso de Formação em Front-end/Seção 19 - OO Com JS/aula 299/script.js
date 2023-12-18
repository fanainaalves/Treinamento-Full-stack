// const animal = {
//     nome: "Bob", latir: function() {
//         console.log("Au au au");
//     },
// };

// console.log(animal.nome)
// animal.latir()

// Aula 292 Aprofundamento de métodos

// const pessoa = {
//     nome: "Matheus",
//     getNome: function(){
//         return this.nome;
//     },
//     setNome: function(){
//         this.nome = novoNome;
//     }
// };
// console.log((pessoa.nome));
// console.log(pessoa.getNome());
// pessoa.setNome("Joaquim");
// console.log(pessoa.getNome())

// Aula 293 - Prototype
// const text = "abc";
// console.log(Object.getPrototypeOf(text));

// const bool = true;
// console.log(Object.getPrototypeOf(bool));

// const arr = [];
// console.log(arr.length)
// console.log(Object.getPrototypeOf(arr))

// Aula 295  - Mais sobre prototypes
// const myObject = {
//     a: "b"
// }
// console.log(Object.getPrototypeOf(myObject))
// console.log(Object.getPrototypeOf(myObject) === Object.prototype)
// const mySecondObject = Object.create(myObject);
// console.log(mySecondObject);
// console.log(mySecondObject.a);
// console.log(Object.getPrototypeOf(mySecondObject) === mybject);

// Aula 296 - Classes Básicas
// const cachorro = {
//     raca: null,
//     patas: 4
// }

// const pastorAlemao = Object.create(cachorro);
// pastorAlemao.raca = "Pastor Alemao";
// console.log(pastorAlemao)
// console.log(pastorAlemao.patas)

// const buldog = Object.create(cachorro);
// buldog.raca = "buldog";
// console.log(buldog)

// Aula 297 - Funções como Classe
// function criarCachorro(nome, raca){
//     const cachorro = Object.create({})
//     cachorro.nome = nome;
//     cachorro.raca = raca;
//     return cachorro;
// }

// const bob = criarCachorro("bob", "vira lata");
// console.log(bob);
// const jack = criarCachorro("Jack", "Poodle");
// console.log(jack)
// console.log(Object.getPrototypeOf(jack))

// Aula 298 - Funções construtoras
// function Cachorro(nome, raca){
//     this.nome = nome;
//     this.raca = raca
// }
// const husky = new Cachorro("Ozzy", "Husky");
// console.log(husky)

// Aula 299 - Métodos em funções construtoras
Cachorro.prototype.uivar = function () {
    console.log("Auuuuuu!")
};

console.log(Cachorro);
husky.uivar();