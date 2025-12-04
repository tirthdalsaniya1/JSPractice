/* 

Dynamic typing works the same for all types, but the nature of the data is different:

| Primitive                      | Non-Primitive                          |
| ------------------------------ | -------------------------------------- |
| stored by value                | stored by reference                    |
| immutable                      | mutable                                |
| new copy created when assigned | reference copied, same object modified |
| example: number, string        | example: objects, arrays, function     |

*/
/* Primitive Example (stored by value) */
let x = 10;
let y = x;

x = 20;

console.log(x); // 20
console.log(y); // 10 (value copied)

/* Values are independent. */

/* Non-Primitive Example (stored by reference) */

let obj1 = { name: "John" };
let obj2 = obj1;

obj1.name = "Doe";

console.log(obj1.name); // Doe
console.log(obj2.name); // Doe  (same object reference)
// Both variables refer to the same object.
