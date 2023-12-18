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
// const testeSlice = ["a", "b", "c", "d", "e", "f"];
// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);
// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4+1);
// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);
// console.log(subArray3)

// const subArray4 = testeSlice.slice(2);
// console.log(subArray4)

// Aula 273 - ForEach

// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//     console.log(`O número é: ${numero}`);
// });

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "JavaScript"},
//     {title: "Terceiro post", category: "Python"},
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria. ${post.category}`);
// });

// Aula 274 - Includes
// const brands = ["BMW", "VW", "Fiat"];
// console.log(brands.includes("Fiat"));
// console.log(brands.includes("KIA"));

// if(brands.includes("BMW")){
//     console.log("Há carros da marca BMW!");
// }

// Aula 275 - Reverse

// const reverseTest = [1, 2, 3, 4, 5];
// reverseTest.reverse();
// console.log(reverseTest)

// Aula 276 - Sobre os métodos de String
// Teoria

// Aula 277 - TRIM

// const trimTest = "     Testando \n   ";
// console.log(trimTest);
// console.log(trimTest.trim());
// console.log(trimTest.length);
// console.log(trimTest.trim().length);

// Aula 278 - Padstart

// const testePadstart = "1";
// const newNumber = testePadstart.padStart(4, "0");
// console.log(testePadstart);
// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0");
// console.log(testePadEnd);

// Aula 279 - Split
// const frase = "O rato roeu a roupa do rei de roma";
// const arrayDaFrase =  frase.split(" ");
// console.log(arrayDaFrase);

// Aula 280 - Join
// const fraseDeNovo = arrayDaFrase.join(" ");
// console.log(fraseDeNovo);
// const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
// console.log(fraseDeCompra)

// Aula 281 - Repeat
// const palavra = "Testando, ";
// console.log(palavra.repeat(5));

// Aula 282 - Rest Operator

// const somaInfinita = (...args) => {
//     let total = 0;
//     for(let i = 0; i< args.length; i++){
//         total += args[i];
//     }
//     return total;
// }

// console.log(somaInfinita(1,2,3));

// console.log(somaInfinita(1, 2, 3, 4, 10, 200, 5158466, 421532553322));

// Aula 283 - For Of

const somaInfinita2 = (... args) => {
    let total = 0;
    for(num of args){
        total += SVGAnimatedNumberList;
    }
    return total;
};

console.log(somaInfinita2(1,2,3,4));
console.log(somaInfinita2(1, 2, 3, 4, 10, 45, 100, 256, 1, 2, 78));