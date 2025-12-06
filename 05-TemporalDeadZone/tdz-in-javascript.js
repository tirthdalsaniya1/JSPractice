/* ==========================================================
   TDZ — TEMPORAL DEAD ZONE (JavaScript)
   Filename: tdz-in-javascript.js
   Purpose : Explain what TDZ is, why it exists, examples,
             common pitfalls and interview-style questions.
   ==========================================================
*/

/*
----------------------------------------------------------
  WHAT IS TDZ (SHORT)
----------------------------------------------------------
- The Temporal Dead Zone (TDZ) is the time between entering
  a scope and the moment a let/const binding is initialized.
- During TDZ, the identifier exists (it's "hoisted") but is
  uninitialized — any access throws ReferenceError.
- TDZ applies to `let` and `const` (and to block-scoped `class`
  names, and `import` bindings).
----------------------------------------------------------
*/

/* ============================
   1) SIMPLE TDZ EXAMPLE
   ============================ */

{
  // We enter block scope here.
  // The binding `x` is hoisted but uninitialized (TDZ active).
  // Accessing it now throws ReferenceError.
  // console.log(x); // ReferenceError: Cannot access 'x' before initialization

  let x = 10; // initialization — TDZ ends here
  console.log("after init x =", x); // -> 10
}

/* ============================
   2) WHY TDZ? (REASON)
   ============================
- Prevents subtle bugs caused by using variables before initialization.
- Enables safer block scoping semantics compared to `var`.
- Helps catch mistakes early (ReferenceError instead of silent 'undefined').
*/

/* ============================
   3) TDZ vs var hoisting
   ============================ */

{
  // var is hoisted and initialized to undefined (no TDZ)
  console.log(v); // -> undefined
  var v = 1;
}

{
  // let/const are hoisted but uninitialized → TDZ
  // console.log(l); // ReferenceError
  let l = 2;
}

/* ============================
   4) typeof BEHAVIOR IN TDZ
   ============================
- typeof undeclaredIdentifier -> "undefined"
- typeof on a let/const in TDZ -> throws ReferenceError
  (this differs from pre-ES6 typeof behavior)
*/

{
  // undeclared:
  // console.log(typeof totallyUnknown); // "undefined"
  // in TDZ:
  // let foo = 1;
  // console.log(typeof fooBefore); // ReferenceError if fooBefore is in TDZ
  // Explanation: The binding exists (hoisted) but uninitialized, typeof can't help.
  // Example to demonstrate:
  // console.log(typeof bar); // ReferenceError if bar declared with let/const later
  // let bar = 3;
}

/* ============================
   5) TDZ & FUNCTION DEFAULT PARAMETERS
   ============================
- Default parameter initializers run in their own scope before the function body.
- If a default initializer refers to another parameter that is declared later,
  that later parameter is in TDZ → ReferenceError.
*/

function exampleParams() {
  // This function demonstrates a ReferenceError:
  function f(a = b, b = 2) {
    return [a, b];
  }
  // f(); // ReferenceError: Cannot access 'b' before initialization

  // Correct ordering:
  function g(b = 2, a = b) {
    return [a, b];
  }
  console.log(g()); // -> [2, 2]
}
exampleParams();

/* ============================
   6) TDZ & FOR-LOOP CLOSURES (COMMON INTERVIEW TOPIC)
   ============================
- Using var in a loop creates a single shared binding; using let creates
  a fresh binding each iteration (and avoids many common closure bugs).
*/

function loopClosures() {
  console.log("var loop closure (problem):");
  var funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function () {
      console.log(i);
    }); // all will print 3
  }
  funcs.forEach((f) => f()); // -> 3 3 3

  console.log("let loop closure (correct):");
  funcs = [];
  for (let j = 0; j < 3; j++) {
    funcs.push(function () {
      console.log(j);
    }); // prints 0,1,2
  }
  funcs.forEach((f) => f()); // -> 0 1 2
}
loopClosures();

/* ============================
   7) TDZ + REDECLARATION RULES
   ============================
- You cannot redeclare let/const in the same scope.
- You can have var and let/const with the same name in *different* scopes, but
  if they are in the same scope behavior can be surprising:
*/

{
  var alpha = 1;
  // let alpha = 2; // SyntaxError: Identifier 'alpha' has already been declared (if same scope)
}

/* ============================
   8) TDZ & CATCH CLAUSE / BLOCK SCOPES
   ============================
- Each catch block creates a new binding for the exception variable.
- let/const in loops and blocks will have their own TDZ for each iteration/block.
*/

try {
  throw new Error("err");
} catch (e) {
  // `e` is block-scoped to this catch block
  console.log("caught:", e.message);
}

/* ============================
   9) TDZ & CLASSES / IMPORTS
   ============================
- Class declarations are also in TDZ until initialized, so you cannot reference
  the class name before its declaration.
- ES module imports are live bindings and effectively not accessible before they
  are initialized by the module system (acts like TDZ).
*/

/* ============================
   10) COMMON PITFALLS & DEBUG TIPS
   ============================
- Accidentally using a variable before its let/const initialization:
    Solution: Move initialization earlier or declare with let/const at top of scope.

- typeof returning ReferenceError:
    Remember typeof does NOT save you for let/const in TDZ.

- Default param ordering causing ReferenceError:
    If default param uses another param, ensure that parameter is declared
    earlier or supply safe defaults.

- Class/Function hoisting confusion:
    Function declarations are hoisted fully (callable earlier).
    Class declarations are not — they are like let/const (TDZ applies).

Debug tip:
  When you see "Cannot access 'X' before initialization" — search for `let/const X`
  in the same scope above the error; that is the TDZ cause.
*/

/* ============================
   11) INTERVIEW QUESTIONS (SHORT)
   ============================

Q1: What is TDZ and which declarations are affected?
A1: TDZ is the time after entering a scope but before a let/const binding initializes.
    Affected: let, const, class declarations, and sometimes import bindings.

Q2: Why does typeof throw inside TDZ for let/const?
A2: Because the binding exists (hoisted) but is uninitialized; typeof doesn't bypass that.

Q3: How do default parameters interact with TDZ?
A3: Default param expressions are evaluated in a scope where later parameters are in TDZ,
    so referring to a later param from an earlier default causes ReferenceError.

Q4: How does TDZ help prevent bugs compared to var?
A4: It stops you from using a variable before it has been explicitly initialized,
    producing an early ReferenceError instead of silently using 'undefined'.

*/

/* ============================
   12) QUICK REFERENCE EXAMPLES
   ============================ */

// ReferenceError example:
function quickRefError() {
  // console.log(foo); // ReferenceError
  let foo = "now initialized";
  console.log(foo); // -> "now initialized"
}
quickRefError();

// typeof in TDZ example (uncomment to test safely one by one):
/*
let bar = 1;
console.log(typeof notDeclared); // "undefined"
console.log(typeof bar); // "number"
console.log(typeof baz); // ReferenceError if baz declared later with let/const
let baz = 2;
*/

// Default param TDZ:
function defaultTDZ() {
  // function f(a = b, b = 2) { return [a,b]; }
  // f(); // ReferenceError: Cannot access 'b' before initialization
}
defaultTDZ();

/* ==========================================================
   END OF TDZ STUDY FILE
   Want the next file? I can generate:
     - TDZ + closures deep dive
     - Event loop & microtasks
     - Promises & async/await internals
   Say: "Give me next study file"
   ========================================================== */
