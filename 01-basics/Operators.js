/* Assignment operator */

/* used to assign values to variables */

let x = 20
let y = 10

/* Arithmetic operator */
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

/* increment operator and decrement operator */

/*
Pre-Increment / Pre-Decrement ++x, --y
✔ First update the value
✔ Then return the updated value
*/

console.log(++x)
console.log(--y)
console.log('now x is ', x)
console.log('now y is ', y)

/*
Post-Increment / Post-Decrement x++, y--
✔ First return the current value
✔ Then update the value
*/

let p = 10
let q = 50
console.log(p++)
console.log(q--)

console.log('now p is ', p)
console.log('now q is ', q)

/* comparision operator */
console.log(x == y)
console.log(x != y)
// === compare value and data type both
console.log(x === y)
//!== is means strickly not equal to 
console.log(x !== y)

//greater than
console.log(x > y)
console.log(x >= y)
console.log(y <= x)
console.log(y < x)

/* logical operators */

const isValidNum = x > 10 && 10 > y;

console.log(isValidNum)

const isValidNumber = x > 10 || 10 > y;
console.log(isValidNumber)


const isValid = true
console.log(!isValid)

/* String operator */
console.log('bruce' + 'wayne')

/* ternary operator */
const isEven = 10 % 2 === 0 ? true : false
console.log(isEven)

const isEvenNum = 10 % 2 === 0 ? 'is Even num' : 'is odd num'
console.log(isEvenNum)
