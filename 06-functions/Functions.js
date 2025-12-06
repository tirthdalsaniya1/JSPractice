/*A function is a block of code designed to perform a particular task

ex: add two number, multiply two number*/

/*functions are reusable as they can be defined once and can be called with diff values resulting in diff results */

/*

In JavaScript, function declarations are hoisted to the top of their scope. 
If two functions have the same name, the last one wins (i.e. the later declaration overwrites the earlier one).

*/

function greet() {
  console.log("hello good morning");
}

greet();

function greet(v) {
  console.log("hello good morning", v);
}

greet("amit");

function add(n1, n2) {
  return n1 + n2;
}

const sum = add(10, 20);

console.log(sum);
