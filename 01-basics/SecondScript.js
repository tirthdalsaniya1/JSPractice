//A syntax error in JS halts parsing entirely — nothing gets executed, even lines before it.
/*
JavaScript Behavior (Node / Browser)

JavaScript uses a two-phase execution model:

1️⃣ Parsing (compile phase)

JS engine reads the entire file first.
If any syntax error is found → Execution stops immediately.

➡️ No line is executed, even the ones before the error.
*/


console.log('Jay Ganesha Jay Sarasvati Mata')

//to run this inside the terminal write node FirstScript or node FirstScript.js

//incase of const we need to initialize it during the declaration
const y = 200
console.log(y)

//if you will miss it then will get the error
const x
x = 100
console.log(x)

/*
Why does JS stop immediately?

Because JavaScript is:
Interpreted (or JIT compiled)
Single-pass execution environment
It cannot start running your file until it knows:
all variable declarations
all syntax is valid
scopes are correct
If syntax is broken → the engine refuses to run anything.

🔍 Java’s behavior is slightly different

Java:
Does not run code until you run the compiled .class file
If compilation fails → no execution
If error is isolated to unused code, compiler may still partially compile

But in both languages:
Executions never start if there is a syntax error.

*/

