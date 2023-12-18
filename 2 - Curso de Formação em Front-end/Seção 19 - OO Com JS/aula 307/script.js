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
// Cachorro.prototype.uivar = function () {
//     console.log("Auuuuuu!")
// };

// console.log(Cachorro);
// husky.uivar();

// Aula 300 - Classes em JS
// class CachorroClasse{
//     constructor(nome, raca){
//         this.nome = nome;
//         this.raca = raca;
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador");
// console.log(jeff);
// console.log(Object.prototype(jeff))

// Aula 301 - Mais sobre Classes
// class Caminhao {
//     constructor(eixo, cor){
//         this.eixo=eixo;
//         this.cor=cor;
//     }
//     descreverCaminhao(){
//         console.log(`Este caminhao tem ${this.eixo} eixos, e é da cor ${this.cor}.`);
//     }
// }

// const scania = new Caminhao(6, "vermelha");
// console.log(scania);
// scania.descreverCaminhao();

// Caminhao.motor = 4;
// const c2 = new Caminhao(4, "Preta");
// console.log(c2);
// console.log(c2.motor);
// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6, "Azul");
// console.log(c3.motor)

// Aula 302 - Substituindo propriedades pelo prototype

// class Humano{
//     constructo(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }
// const matheus = new Humano("Matheus", 31);
// console.log(matheus);

// console.log(Humano.prototype.idade);
// Humano.prototype.idade = "Não definida";
// console.log(matheus.idade);
// console.log(Humano.prototype.idade)

// Aula 303 - Symbol com classes

// class Aviao {
//     constructor(marca, turbinas){
//         this.marca = marca;
//         this.turbinas = turbinas;
//     }
// }

// const asas = Symbol();
// const pilotos = Symbol();

// Aviao.prototype[asas] = 2;
// Aviao.prototype[pilotos] = 3;
// const boeing = new Aviao("Boeing", 10);
// console.log(boeing)
// console.log(boeing[asas])

// Aula 304 - Getter e Setter

// class Post{
//     constructor(titulo, descricao, tags){
//         this.titulo = titulo;
//         this.descricao =  descricao;
//         this.tags = tags;
//     }

//     get exibirTitulo(){
//         return `Você está lendo: ${this.titulo}`;
//     }
//     set adicionarTags(tags){
//         const tagsArray = tags.split(", ");
//         this.tags = tagsArray;
//     }
// }

// const myPost = new Post("Algum post", "É um post sobre programação");

// console.log(myPost);
// console.log(myPost.exibirTittulo);
// myPost.adicionarTags = "Programação com avascript, js";
// console.log(myPost)

// Aula 305 - Herança
// class Mamifero{
//     constructor(patas){
//         this.patas = patas
//     }
// }

// class Lobo extends Mamifero{
//     constructor(patas, nome){
//         super(patas, patas)
//         this.nome = nome;
//     }
// }

// const shark = new Lobo(4, "Shark");
// console.log(shark)
// console.log(shark.patas)

// Aula 306 - InstanceOf

// console.log(shark instanceof Lobo)
// console.log(Lobo instanceof Mamifero)
// console.log(new Lobo(4, "Teste") instanceof Mamifero)
// console.log(new postMessage("a", "b") instanceof Lobo)
