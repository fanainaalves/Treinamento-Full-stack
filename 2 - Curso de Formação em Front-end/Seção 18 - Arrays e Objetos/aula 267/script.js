// Aula 1 - Arrays
// const lista = [1, 2, 3, 4, 5];
// console.log(lista);
// console.log(typeof lista);

// const itens = ["Matheus", true, 2,  4.12, []];
// console.log(itens);

// Aula 2 - Propriedades

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[83]);

// const numbers = [5, 3, 4];
// console.log(numbers.length);
// console.log(numbers["length"]);

// const myName = "Matheus";
// console.log(myName.length)

// Aula 3 - Métodos
// const numbers = [5, 3, 4];
// const otherNumbers = [1, 2, 3];
// const allNumbers = numbers.concat(otherNumbers);
// console.log(allNumbers);
// const text = "algum texto";
// console.log(text.toUpperCase());
// console.log(typeof text.toUpperCase());
// console.log(text.indexOf("g"))

// Aula 4 - Objetos 
// const person = {
//     name: "Matheus", age: 31, job: "Programador"
// };
// console.log(person);
// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person)

// Aula 263 - Criando e Deletando propriedades

// const car ={
//     engine: 2.0, brand: "VW", model: "Tiguan", km: 20000
// };

// console.log(car);
// car.doors = 4;
// console.log(car);
// delete car.km;
// console.log(car);

// aula 264 - Diferença entre Arrays e Objetos

// Teoria

// aula 265 - Mais sobre objetos
// const obj = {
//     a: "teste", b: true
// };
// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// };

// Object.assign(obj2, obj);
// console.log(obj2)

// Aula 266 - Conhecendo Melhor os Objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));
// console.log(Object.entries(car));

// Aula 267 - Mutação

const a = {
    name: "Matheus",
};
const b = a;
console.log(a);
console.log(b);
console.log(a === b);

a.age = 31;
console.log(a);
console.log(b);

delete b.age;
console.log(a);
console.log(b);