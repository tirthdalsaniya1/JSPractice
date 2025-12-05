/* implicit conversion - javascript automatically do it 
Implicit Type Conversion (also called Type Coercion) in JavaScript.
JavaScript is a loosely typed / dynamically typed language, so it automatically converts values from one data type to another when needed.
*/

/*
Rule 1: + with a string → converts everything to STRING
If either operand is a string, JavaScript treats + as string concatenation, not arithmetic.
*/

/*
Rule 2: -, *, /, % always convert to NUMBER
If you use operators like -, JavaScript forces both sides to be numbers. IT will convert true → 1, false → 0, null → 0, 
*/
console.log(2 + "3");
console.log(true + "3");
console.log("4" - "3");
console.log("4" + 3);
console.log("Hello" + 3);
console.log(3 + "Hello");
console.log("5" - true);
console.log("5" - false);

/*
“bruce” → cannot be converted to number → NaN
“wayne” → cannot be converted to number → NaN
NaN - NaN = NaN
Output: NaN
*/
console.log("bruce" - "wayne");
console.log("5" - null);
console.log("5" + undefined); // here there is a string so it will concat
console.log(5 + undefined); // no string so it will convert undefined → NaN so 5 + NaN = NaN

/* explicit conversion - manually we do it using some built in methods */

/* explicit type conversion (also called type casting) in JavaScript.
Here, we intentionally convert values to a specific data type using built-in functions like: Number(), String(), Boolean(), parseInt(), parseFloat(), toString()
*/
console.log(Number("5")); // convers to number from String, '5' to 5
console.log(Number(false)); // convers to number, boolean to 0
console.log(Number(true)); // convers to number, boolean to 1
console.log(Number("")); // convers Empty string to number "" → 0
console.log(Number("abc")); // convers string to NaN
console.log(Number(NaN)); // convers NaN to NaN
console.log(Number(undefined)); // convers undefined to NaN
/*
parseInt() rules:
Reads until a non-digit is found
Ignores decimals
Ignores trailing characters
*/
console.log(parseInt("15")); // 15
console.log(parseInt("15.010")); // 15
console.log(parseInt("15px")); // 15
console.log(parseInt("10.99")); // 10
console.log(parseInt("abc")); // NaN

/* parseFloat() → Extracts decimal number */

console.log(parseFloat("3.14")); // 3.14
parseFloat("3.14px"); // 3.14
parseFloat("10"); // 10

/*
Difference between Number() vs parseInt() / parseFloat()

| Function       | Converts whole string? | Returns       |
| -------------- | ---------------------- | ------------- |
| `Number()`     | must be a valid number | number / NaN  |
| `parseInt()`   | extracts integer part  | integer / NaN |
| `parseFloat()` | extracts decimal part  | float / NaN   |
*/

/* String() → Converts to string but null.toString() and undefined.toString() will cause error*/
console.log(String(500));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

console.log((500).toString());

// this will throw error
//console.log(null.toString())    // error
//console.log(undefined.toString()) // error

// Boolean() → Converts to boolean and any non-zero number → true
console.log(Boolean(50)); // true
console.log(Boolean(100)); // true
console.log(Boolean(-5)); // true
console.log(Boolean("hello")); // true
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false

/*
=== (Strict Equality)
Checks 2 things only:
Same value?
Same type?
No conversion, no magic.
*/

5 === 5; // true (same value, same type)
5 === "5"; // false (number vs string)
true === 1; // false
null === undefined; // false

/*
== (Loose Equality)
Checks value BUT also tries to convert types before comparing.
This is called type coercion.
*/

5 == "5"; // true  (string → number)
true == 1; // true  (true → 1)
false == 0; // true  (false → 0)
"" == 0; // true  ("" → 0)
null == undefined; // true (special rule)

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
