// aula 403 - var, let e const

var x = 10
var y = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

function logName(){
    const name = "Pedro"
    console.log(name)
}

const name = "Matheus"
logName()
console.log(name)

// Arrow Function - aula 404

const sum = function(a, b){
    return a + b
}

const arrowSum = (a, b) => a+b
console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) =>{
    if(name){
        return `Hello ${name}`
    } else {
        return "Hello"
    }
}

console.log(greeting("Matheus"))
console.log(greeting());

const user = {
    name: "Theo",
    sayUserName() {
        setTimeout(function() {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000);
    },
    sayUserNameArrow(){
        setTimeout(function() {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 1000);
    },
};

user.sayUserName();
user.sayUserNameArrow();

// Filter -  Aula 405
const arr= [1, 2, 3, 4, 5, 6]
const hightNumbers = arr.filter((n) => {
    if(n >= 3) {
        returnn
    }
})
console.log(hightNumbers)
const users = [
    {name: "Matheus", available: true},
    {name: "João", available: false},
    {name: "Maria", available: true},
    {name: "Josias", available: false},
    {name: "Kleber", available: true},
]

const avalibaleUsers = users.filter((user) => user.available)
console.log(avalibaleUsers);

// Aula 406 - Map

const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 499, category: "Eletro"},
    {name: "Calça Jeans", price: 87.99, category: "Roupas"},
];

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true;
    }
});

console.log(products)

// Aula 407 - Templates Literals
const userName = "Matheus";
const age = 31;

console.log(`O nome do usuario é ${userName} e ele tem ${age} anos.`)

// Aula 408 - Destructuring

const fruits = ["Maçã", "Mamão", "Laranja"];
const [f1, f2, f3] = fruits;
consolelog(f1, f3)

const productDetails = {
    name: "Mouse",price: 39.88,
    category: "Periferico",
    color: "cinza"
}

const{name: productName, price, category, color} = productDetails
console.log(`O nome do produto é ${productName}, ele custa R${price} e é da cor ${color}`)

// Aula 409 - Spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2]
console.log(a3)

const a4 = [0, ...a3, 7]
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {name: "VW"}
const otherInfos = {km: 1000000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos}
console.log(car)

// Aula 410 - Classes
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20)
console.log(shirt)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(15))