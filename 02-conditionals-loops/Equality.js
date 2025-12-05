/* == allows coercion it refers to automatically converting one data type to another, often without you explicitly doing it*/
/* === Does not allows coercion */

const var1 = "test";
const var2 = "test";
console.log(var1 == var2);
console.log(var1 === var2);

//=== checks that both should of same type and should not converted implicitly
const var3 = "10";
const var4 = 10;
console.log(var3 == var4);
console.log(var3 === var4);

//here == is true
const v1 = false;
const v2 = "";
console.log(v1 == v2);
console.log(var1 === v2);

//here == is true
const q1 = 0;
const q2 = "";
console.log(q1 == q2);
console.log(q1 === q2);

//here == is true
const w1 = null;
const w2 = undefined;
console.log(w1 == w2);
console.log(w1 === w2);
