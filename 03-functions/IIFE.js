// immediately invoked function expression

// IIFE will be called or invoked automatically, no need to call it separately or manually

// case 1 inside the bracket
(function setup1() {
  console.log("setup 1 done");
})();

// case 2 without name
(function () {
  console.log("setup 2 done");
})();

// case 3 arrow function

(() => console.log("hi"))();
