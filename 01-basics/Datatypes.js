//Mainly primitive and non primitive data in js
//7 primitive and 1 non primitive

//primitive

/*String*/
const name = 'String'
console.log(name)

const name2 = "string"
console.log(name2)

/*numbers*/
const total = 0;
const pi = 3.14

console.log(total)
console.log(pi)

/*boolean*/
const isItCorrect = true;
const isItIncorrect = false;

console.log(isItCorrect)
console.log(isItIncorrect)

/*undefined*/
let a;
console.log(a)

const result = undefined
console.log(result)

/*null*/
const data = null;
console.log(data)

/*BigInt*/
const big = 9007199254740991n + 2n; // Add 'n' at the end
console.log(big); // 9007199254740993n

/* Symbol is a unique, immutable value primarily used as object property keys to avoid name collisions.*/
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false — always unique

/* Non premitive > its a collection of value. These can store multiple values and are mutable.

Object (including Array, Function, Date, etc.)*/


/* Object */
/* Here key can be string or symbol data type and value could be any thing */


const person = {

    'FirstName': 'Fname',
    'LastName': 'Lname',
    'age': 30
}

console.log(person.FirstName)
console.log(person.LastName)
console.log(person.age)


/* Array */

const num = [0, 1, 2, 3, 4, 5]
console.log(num[0])
console.log(num[5])
console.log(num)


/* javascript is dynamically typed these type of an assignment doesnot cause an error message */

let a1 = 10
a1 = 'tirth'
a1 = true
console.log(a1)
