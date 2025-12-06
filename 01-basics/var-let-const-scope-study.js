/* ==========================================================
   VAR vs LET vs CONST — COMPLETE SCOPE STUDY
   Run: node var-let-const-scope-study.js
   ==========================================================
   NOTE: This file focuses on SCOPE, SHADOWING, HOISTING 
         behavior related to var/let/const.
   ========================================================== */

/* ----------------------------------------------------------
   1️⃣ GLOBAL SCOPE DIFFERENCES
   ---------------------------------------------------------- */
console.log("\n=== 1) Global Scope ===");

// var attaches to global object in browser (window),
// but in Node it attaches to module scope differently.
var g1 = "var-global";
let g2 = "let-global";
const g3 = "const-global";

console.log("global var:", g1);
console.log("global let:", g2);
console.log("global const:", g3);

// In Node, var/let/const at top level behave slightly differently
// than in browsers, but it's enough to know:
// - var becomes function-scoped if inside a function
// - let/const are block-scoped always

/* ----------------------------------------------------------
   2️⃣ FUNCTION SCOPE — var is function scoped
   ---------------------------------------------------------- */
console.log("\n=== 2) Function Scope ===");

function testFunctionScope() {
  var a = 10;
  let b = 20;
  const c = 30;

  console.log("Inside function:", a, b, c);
}

testFunctionScope();

// console.log(a); // ❌ ReferenceError – not accessible outside
// console.log(b); // ❌
// console.log(c); // ❌

/* ----------------------------------------------------------
   3️⃣ BLOCK SCOPE — let & const are block-scoped; var is NOT
   ---------------------------------------------------------- */
console.log("\n=== 3) Block Scope ===");

{
  var x = "var-block";
  let y = "let-block";
  const z = "const-block";
}

console.log("var outside block:", x); // ✔ var escapes block

// console.log(y); // ❌ ReferenceError — block scoped
// console.log(z); // ❌ ReferenceError — block scoped

/* ----------------------------------------------------------
   4️⃣ LOOP SCOPE — let creates a NEW binding per iteration
   ---------------------------------------------------------- */
console.log("\n=== 4) Loop Scope ===");

console.log("Using var:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i =", i), 0);
}
// OUTPUT: 3,3,3  (because var does NOT create new scope per iteration)

console.log("Using let:");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j =", j), 0);
}
// OUTPUT: 0,1,2  (because let creates new binding each iteration)

/* ----------------------------------------------------------
   5️⃣ SHADOWING — inner variable overrides outer
   ---------------------------------------------------------- */
console.log("\n=== 5) Shadowing ===");

let num = 100;

{
  let num = 200; // shadows outer
  console.log("inner num:", num); // 200
}

console.log("outer num:", num); // 100

// Shadowing var with let or const in the same scope = ❌ illegal
function shadowExample() {
  var temp = 1;
  // let temp = 2; // ❌ SyntaxError — duplicate declaration in same scope
}
console.log(
  "Shadowing rules: var->let/const is allowed only in different scopes."
);

/* ----------------------------------------------------------
   6️⃣ REDECLARATION — var allows; let/const do NOT
   ---------------------------------------------------------- */
console.log("\n=== 6) Redeclaration ===");

var a1 = 10;
var a1 = 20; // ✔ allowed
console.log("var redeclared =", a1);

// let b1 = 30;
// let b1 = 40; // ❌ SyntaxError — cannot redeclare let
// const c1 = 50;
// const c1 = 60; // ❌ SyntaxError — cannot redeclare const

/* ----------------------------------------------------------
   7️⃣ HOISTING DIFFERENCE SUMMARY
   ----------------------------------------------------------
   var   → hoisted with default value undefined
   let   → hoisted but uninitialized (TDZ)
   const → hoisted but uninitialized (TDZ) & must initialize immediately
   ---------------------------------------------------------- */

console.log("\n=== 7) Hoisting Behavior ===");

// Example for var
console.log(vVar); // ✔ undefined
var vVar = "I am var";

// Example for let
// console.log(vLet); // ❌ ReferenceError (TDZ)
let vLet = "I am let";

// Example for const
// console.log(vConst); // ❌ ReferenceError
const vConst = "I am const";

console.log("Hoisting summary executed.");

/* ----------------------------------------------------------
   8️⃣ CONST DOES NOT MEAN IMMUTABLE
   ---------------------------------------------------------- */
console.log("\n=== 8) Const is not immutable ===");

const obj = { name: "TD", age: 25 };
console.log("Original obj:", obj);

obj.age = 30; // ✔ mutation allowed
console.log("Modified obj:", obj);

// obj = {}; // ❌ NOT allowed — reassignment blocked

/* ----------------------------------------------------------
   9️⃣ TEMPORAL DEAD ZONE (TDZ) QUICK DEMO
   ---------------------------------------------------------- */
console.log("\n=== 9) TDZ Quick Demo ===");

function tdzDemo() {
  // console.log(tdzVar); // ❌ ReferenceError — TDZ
  let tdzVar = "Now initialized";
  console.log(tdzVar);
}
tdzDemo();

/* ----------------------------------------------------------
   🔟 INTERVIEW SUMMARY TABLE (IMPORTANT)
   ----------------------------------------------------------
| Feature            | var                | let                   | const                         |
|--------------------|--------------------|------------------------|-------------------------------|
| Scope              | function scoped    | block scoped          | block scoped                  |
| Redeclaration      | ✔ allowed          | ❌ not allowed         | ❌ not allowed                |
| Reassignment       | ✔ allowed          | ✔ allowed             | ❌ not allowed                |
| Hoisting value     | undefined          | TDZ                   | TDZ                           |
| Must initialize?   | ❌                 | ❌                    | ✔ yes                         |
| Loop scoping       | Incorrect behavior | correct per-iteration | correct per-iteration         |
--------------------------------------------------------------*/

console.log("\n=== END OF STUDY FILE ===");
