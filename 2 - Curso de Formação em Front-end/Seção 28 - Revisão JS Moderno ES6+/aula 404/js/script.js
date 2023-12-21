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