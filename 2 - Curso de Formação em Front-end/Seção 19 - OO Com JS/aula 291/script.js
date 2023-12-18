// const animal = {
//     nome: "Bob", latir: function() {
//         console.log("Au au au");
//     },
// };

// console.log(animal.nome)
// animal.latir()

// Aula 292 Aprofundamento de métodos

const pessoa = {
    nome: "Matheus",
    getNome: function(){
        return this.nome;
    },
    setNome: function(){
        this.nome = novoNome;
    }
};
console.log((pessoa.nome));
console.log(pessoa.getNome());
pessoa.setNome("Joaquim");
console.log(pessoa.getNome())