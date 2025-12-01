const sum = (a, b) => {
  return a + b;
};

console.log(sum(10, 20));

const arrowsum = sum(20, 20);
console.log(arrowsum);

/* we can write in one line as well*/

const sumOfThree = (a, b, c) => a + b + c;
console.log(sumOfThree(10, 20, 30));

// ✅1. Basic arrow function

const fn = () => {
  console.log("hello");
};

// ✅ 2. One-line implicit return

// (Automatically returns the expression — no return keyword needed)

const add = (a, b) => a + b;

// ✅ 3. Single parameter (no parentheses needed)
const square = (x) => x * x;

// ✅ 4. No parameters (empty parentheses)
const greet = () => "hi";

// ✅ 5. Returning an object (must wrap in parentheses)

// Otherwise {} is treated as a function body.

const getUser = () => ({ name: "Alice", age: 25 });

// ✅ 6. Multiline body

// Use {} + return if you want to return something.

const totals = (a, b) => {
  const total = a + b;
  return total;
};

// ✅ 7. Arrow function used as a callback
setTimeout(() => console.log("done"), 1000);

// ✅ 8. Inline arrow functions in array methods
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);

// ✅ 9. Arrow function returning another function
const multiply = (x) => (y) => x * y;

const double = multiply(2);
console.log(double(4)); // 8
/*
⚠️ Important: Arrow functions cannot be used for everything

They do NOT have:
their own this
their own arguments
their own super
their own new behavior (you cannot use them as constructors)

Example:
const Person = () => {};
const p = new Person(); // ❌ Error

*/
