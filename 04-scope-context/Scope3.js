/* Block scope, Function scope, Global scope */

// In global scope you can access it from anywhere from the function or from the block
// global var will remain same and we can declare same variable inside the block or function locally and it will not override global one
const n = 100;
const p = 200;

console.log(n);
console.log(p);

function testVariable() {
  const p = 700;
  console.log(n);
  console.log(p);
}

testVariable();

if (true) {
  const p = 800;

  console.log(n);
  console.log(p);
}
