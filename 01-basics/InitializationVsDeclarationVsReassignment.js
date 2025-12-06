/*  
==========================================================
   DECLARATION vs INITIALIZATION vs REASSIGNMENT IN JS
   Works differently for: var, let, const
==========================================================
*/

/*
----------------------------------------------------------
  1️⃣ DECLARATION
  - Creating a variable name in memory.
  - Value is NOT assigned yet.
----------------------------------------------------------
*/

// ✔ allowed
var c;
let d;

// ❌ NOT allowed → const MUST have value during declaration
// const e; // Error: Missing initializer in const declaration

/*
----------------------------------------------------------
  2️⃣ INITIALIZATION
  - Assigning a value for the FIRST time.
  - Can happen during declaration or later (for var/let)
----------------------------------------------------------
*/

var a = 10; // declaration + initialization
let b = 20; // declaration + initialization

let x; // declaration
x = 50; // initialization happens later

// const must initialize immediately
const PI = 3.14; // declaration + initialization

/*
----------------------------------------------------------
  3️⃣ REASSIGNMENT
  - Updating/changing value AFTER initialization.
----------------------------------------------------------
*/

a = 100; // ✔ var can be reassigned
b = 200; // ✔ let can be reassigned

// PI = 3.14159;  // ❌ TypeError: Assignment to constant variable
// const CAN’T be reassigned

/*
==========================================================
        DETAILED PER-KEYWORD BEHAVIOR
==========================================================
*/

/*
----------------------------------------------------------
  🔸 var
  - function-scoped
  - allows declaration without value
  - allows reassignment
----------------------------------------------------------
*/

var age; // declaration
age = 25; // initialization
age = 30; // reassignment

/*
----------------------------------------------------------
  🔸 let
  - block-scoped
  - allows declaration without value
  - allows reassignment
  - better than var for most cases
----------------------------------------------------------
*/

let price; // declaration
price = 999; // initialization
price = 1099; // reassignment

/*
----------------------------------------------------------
  🔸 const
  - block-scoped
  - MUST initialize at declaration
  - cannot be reassigned
  - IMPORTANT PART : but objects/arrays inside const CAN be modified (mutable)
----------------------------------------------------------
*/

const user = { name: "Amit", age: 25 }; // declaration + initialization

// ❌ Not allowed
// user = {};  // Error: cannot reassign const variable

// ✔ Allowed (modifying internal values)
user.name = "John"; // mutation allowed
user.age = 30;

console.log("user after modified value", user);

// Arrays also behave same
const numbers = [1, 2, 3];

// ❌ Not allowed
// numbers = [4, 5, 6];       // cannot reassign

// ✔ Allowed
numbers.push(4); // modifying array contents
console.log("numbers after modified value", numbers);

/*
==========================================================
     🌟 FINAL SUMMARY TABLE (INTERVIEW READY)
==========================================================

Keyword | Declaration | Initialization | Reassignment | Scope
----------------------------------------------------------------
var     | ✔ allowed   | optional       | ✔ allowed    | function
let     | ✔ allowed   | optional       | ✔ allowed    | block
const   | ❌ must init| required       | ❌ no        | block

==========================================================
   DECLARATION   → reserving name
   INITIALIZATION → first time giving value
   REASSIGNMENT → changing value later
==========================================================
*/
