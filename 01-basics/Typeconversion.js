/* implicit conversion - javascript automatically do it */

console.log(2 + '3')
console.log(true + '3')
console.log('4' - '3')
console.log('4' + 3)
console.log('Hello' + 3)
console.log(3 + 'Hello')
console.log('5' - true)
console.log('5' - false)
console.log('bruce' - 'wayne')
console.log('5' - null)
console.log('5' + undefined)
console.log(5 + undefined)

/* explicit conversion - manually we do it using some built in methods */
console.log(Number('5'))
console.log(Number(false))
console.log(Number(''))
console.log(parseInt('15'))
console.log(parseFloat('3.14'))
console.log(String(500))
console.log(String(true))
console.log(String(null))
console.log(String(undefined))
console.log((500).toString())
console.log(Boolean(50))

/*
=== (Strict Equality)
Checks 2 things only:
Same value?
Same type?
No conversion, no magic.
*/

5 === 5       // true (same value, same type)
5 === "5"     // false (number vs string)
true === 1    // false
null === undefined // false


/*
== (Loose Equality)
Checks value BUT also tries to convert types before comparing.
This is called type coercion.
*/

5 == "5"      // true  (string → number)
true == 1     // true  (true → 1)
false == 0    // true  (false → 0)
"" == 0       // true  ("" → 0)
null == undefined // true (special rule)


/*
❌ Can cause confusion
❌ Sometimes behaves unexpectedly
*/

/*
✔ What == checks

Value (after converting types)
Allows weird coercions
Has many special cases
Follows complex internal rules (abstract equality)

✔ What === checks

Value without converting types
Type must match exactly
No special cases
Simple & predictable
*/
