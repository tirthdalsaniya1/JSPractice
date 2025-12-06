// ==============================
// ==  vs  ===  (loose vs strict equality)
// ==============================

/*
  ===  -> strict equality: checks type AND value. No type coercion.
  ==   -> loose equality: performs type coercion before comparison (can be surprising).
*/

// Strict equality examples:
console.log("1 === 1 ->", 1 === 1); // true
console.log("1 === '1' ->", 1 === "1"); // false (different types)
console.log("true === 1 ->", true === 1); // false

// Loose equality examples (coercion happens):
console.log("1 == '1' ->", 1 == "1"); // true  (string coerced to number)
console.log("0 == false ->", 0 == false); // true  (false coerced to 0)
console.log("'' == 0 ->", "" == 0); // true  ("" -> 0)
console.log("null == undefined ->", null == undefined); // true (special rule)
console.log("null === undefined ->", null === undefined); // false

// Some surprising loose-equality cases:
console.log("'0' == false ->", "0" == false); // true
console.log("[] == 0 ->", [] == 0); // true (array -> '' -> 0)
console.log("[] == '' ->", [] == ""); // true
console.log("[1] == 1 ->", [1] == 1); // true (array -> '1' -> number 1)
console.log("{} == {} ->", {} == {}); // false (different object references)

// Best practice:
console.log("Use === instead of == for predictable comparison.");

// Useful pattern where loose equality is sometimes helpful:
// `x == null` checks for both null and undefined:
let x;
console.log("x == null ->", x == null); // true if x is null or undefined

// ==============================
// RECOMMENDATIONS SUMMARY (as comments)
// ==============================
// 1) Prefer `===` and `!==` in nearly all cases to avoid surprising coercions.
// 2) Use arrow functions for short callbacks and when you want lexical `this`.
// 3) Use function declarations or named function expressions for recursive functions or when you need a constructor.
// 4) When returning object literals from concise arrow bodies, wrap them in parentheses: () => ({...})
// 5) For debugging, remember the engine often infers function .name from the variable or property it is assigned to.
