
var a; // declarando variable
var b = "b"; // declaramos / asignamos
b = "bb"; // reasignamos
var a = "aa" // redeclaramos

// Global Scope
var fruit = 'Apple' // global

function bestFruit () {
    console.log(fruit);
}

bestFruit()

function countries() {
    country = 'mexico'
    console.log(country)
}
countries()
console.log(country)