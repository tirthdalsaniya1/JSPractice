/*  
==========================================================
                 HOISTING IN JAVASCRIPT
==========================================================
 Hoisting = JS moves declarations to the top of scope
 BUT behavior differs for var, let, const, and functions.
==========================================================
*/

/*
==========================================================
   1️⃣ HOISTING OF var
==========================================================
 - var is hoisted with value = undefined
 - Accessible BEFORE initialization (but gives undefined)
 - NOT inside TDZ (Temporal Dead Zone)
----------------------------------------------------------
*/

console.log(a); // ❓ Output: undefined (NOT error)
var a = 10;

/*
Internally JS does:
var a;       // hoisted
console.log(a);
a = 10;
*/

/*
==========================================================
   2️⃣ HOISTING OF let
==========================================================
 - let is hoisted BUT not initialized
 - Placed in TDZ from start of scope → until line reached
 - Accessing before initialization → ReferenceError
----------------------------------------------------------
*/

// console.log(b);  // ❌ ReferenceError (in TDZ)
let b = 20;

/*
Internally JS does:
let b;       // hoisted but uninitialized
// TDZ active
b = 20;      // TDZ ends
*/

/*
==========================================================
   3️⃣ HOISTING OF const
==========================================================
 - const is hoisted BUT not initialized (same as let)
 - MUST be initialized immediately
 - Accessing before initialization → ReferenceError
----------------------------------------------------------
*/

// console.log(c); // ❌ ReferenceError (in TDZ)
const c = 30;

/*
Internally JS does:
const c;     // hoisted but uninitialized → TDZ
c = 30;      // initialization required immediately
*/

/*
==========================================================
   4️⃣ FUNCTION HOISTING (DECLARATION)
==========================================================
 - Function declarations are fully hoisted WITH their body
 - Can be called BEFORE they appear in code
----------------------------------------------------------
*/

sayHello(); // ✔ works

function sayHello() {
  console.log("Hello, I am hoisted!");
}

/*
Internally JS does:
function sayHello() {...}   // hoisted fully
sayHello();
*/

/*
==========================================================
   5️⃣ FUNCTION EXPRESSION HOISTING
      (var + function expression)
==========================================================
 - var is hoisted as undefined
 - function expression is NOT hoisted
 - You CANNOT call it before assignment
----------------------------------------------------------
*/

// greet(); // ❌ TypeError: greet is not a function

var greet = function () {
  console.log("Hi!");
};

/*
Internally:
var greet;      // hoisted → undefined
greet();        // ❌ calling undefined as function
greet = function(){...};
*/

/*
==========================================================
   6️⃣ ARROW FUNCTION HOISTING
      (let/const + arrow)
==========================================================
 - let/const are hoisted but in TDZ
 - arrow function behaves like a value, NOT hoisted
----------------------------------------------------------
*/

// bye(); // ❌ ReferenceError (in TDZ)
const bye = () => console.log("Bye!");

/*
Internally:
const bye;  // hoisted but uninitialized → TDZ
bye = () => {
  console.log("Bye!");
};
*/

/*
==========================================================
   7️⃣ HOISTING INSIDE BLOCKS (IMPORTANT)
==========================================================
*/

{
  // console.log(x); // ❌ ReferenceError (TDZ)
  let x = 100;

  // console.log(y); // ❌ ReferenceError (TDZ)
  const y = 200;

  console.log(z); // ✔ undefined
  var z = 300;
}

/*
Explanation:
- let/const inside block in TDZ
- var ignores block → becomes function/global scoped
*/

/*
==========================================================
   8️⃣ HOISTING INSIDE FUNCTIONS
==========================================================
*/

function test() {
  console.log(a); // undefined (var hoisted in function)
  // console.log(b); // ❌ ReferenceError (TDZ)
  var a = 1;
  let b = 2;
}

test();

/*
==========================================================
   🌟 FINAL INTERVIEW-READY SUMMARY
==========================================================

var
  - hoisted with undefined
  - accessible before initialization
  - no TDZ
  - function-scoped

let
  - hoisted but uninitialized
  - TDZ until initialization line
  - block-scoped

const
  - hoisted but uninitialized
  - TDZ until initialization line
  - must initialize immediately
  - block-scoped

Function Declaration
  - fully hoisted (name + body)
  - can call before definition

Function Expression (var)
  - var hoisted as undefined
  - function NOT hoisted
  - calling early → TypeError

Arrow Function (let/const)
  - identifier hoisted but in TDZ
  - cannot call before initialization

==========================================================
 End of Hoisting Study File
==========================================================
*/
