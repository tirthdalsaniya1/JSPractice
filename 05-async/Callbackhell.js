/*
The code goes towards the right → → →
Hard to read
Hard to maintain
Hard to debug
Hard to add new steps
This is called Pyramid of Doom.
*/

/*
Because each function is asynchronous (or behaves like async), and
we need to wait for one to finish before calling the next one.
Callbacks were designed to tell JavaScript:
"After this task finishes, run this function next."
So every step must be inside the previous step’s callback, otherwise JavaScript won’t wait.
*/

function sayHello(next) {
  console.log("1: Hello");
  next();
}

function bye(next) {
  console.log("2: Bye");
  next();
}

function missYou(next) {
  console.log("3: Miss You");
  next();
}

function takeCare() {
  console.log("4: Take Care");
}

// note instead of function we can write arrow function ()=> as well
sayHello(function () {
  bye(function () {
    missYou(function () {
      takeCare();
    });
  });
});
