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
const myObject = {
    a: "b"
}
console.log(Object.getPrototypeOf(myObject))
console.log(Object.getPrototypeOf(myObject) === Object.prototype)
const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === mybject);