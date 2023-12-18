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

// const a = {
//     name: "Matheus",
// };
// const b = a;
// console.log(a);
// console.log(b);
// console.log(a === b);

// a.age = 31;
// console.log(a);
// console.log(b);

// delete b.age;
// console.log(a);
// console.log(b);

// Aula 268 - Loops em Arrays

// const users = ["Matheus", "Joao", "Pedro", "Miguel"];
// for(let i=0; i < users.length; i++){
//     console.log(`Listando o usuário: ${users[i]}`)
// }

// Aula 269 - Push e Pop

// const array = ["a", "b", "c"];
// array.push("d");
// console.log(array);
// console.log(array.length);

// array.pop();
// console.log(array);

// const itemRemovido = array.pop();
// console.log(itemRemovido);
// console.log(array);

// array.push("z", "x", "y");
// console.log(array);

// Aula 270 - Shift e unshift

// const letters = ["a", "b", "c"];
// const letter = letters.shift();

// console.log(letter);
// console.log(letters);

// letters.unshift("p", "q", "r");
// letters.unshift("z");

// console.log(letters);

// Aula 271 - IndexOf e lastIndexOf
// const myElements = ["Morango", "maçã", "abacate", "Pêra", "abacate"];
// console.log(myElements.indexOf("maçã"));
// console.log(myElements.indexOf("abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("abacate")]);

// console.log(myElements.lastIndexOf("abacate"));
// console.log(myElements.indexOf("mamao"))
// console.log(myElements.lastIndexOf("mamao"));

// Aula 272 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4+1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3)

const subArray4 = testeSlice.slice(2);
console.log(subArray4)
