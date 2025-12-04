/* implicit conversion - javascript automatically do it */

/*
Rule 1: + with a string → converts everything to STRING
If either operand is a string, JavaScript treats + as string concatenation, not arithmetic.
*/

/*
Rule 2: -, *, /, % always convert to NUMBER
If you use operators like -, JavaScript forces both sides to be numbers. IT will convert true → 1, false → 0, null → 0, 
*/
console.log(2 + '3')
console.log(true + '3')
console.log('4' - '3')
console.log('4' + 3)
console.log('Hello' + 3)
console.log(3 + 'Hello')
console.log('5' - true)
console.log('5' - false)

/*
“bruce” → cannot be converted to number → NaN
“wayne” → cannot be converted to number → NaN
NaN - NaN = NaN
Output: NaN
*/
console.log('bruce' - 'wayne')
console.log('5' - null)
console.log('5' + undefined) // here there is a string so it will concat
console.log(5 + undefined)   // no string so it will convert undefined → NaN so 5 + NaN = NaN

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
/*
| Expression        | `==` | `===` | Why?                      |
| ----------------- | ---- | ----- | ------------------------- |
| 5 vs "5"          | true | false | `"5"` converted to number |
| true vs 1         | true | false | `true → 1`                |
| false vs 0        | true | false | `false → 0`               |
| null vs undefined | true | false | special rule in JS        |
| [] vs ""          | true | false | `[] → ""`                 |
| [] vs 0           | true | false | `[] → "" → 0`             |
| "0" vs false      | true | false | `"0" → 0, false → 0`      |
*/

/*
This is implicit type conversion where JavaScript automatically changes data types:
+ favors strings → concatenation
Other operators (-, *, /) force numbers
Invalid numeric conversion → NaN
true → 1, false → 0, null → 0, undefined → NaN
*/
