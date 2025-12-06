//you can not write function without name directly but either you need to pass it as a callback function
// or you need to assign it to a variable

//below is the incorrect syntax

/*

function (){

}

*/

// you can write in the same way but need to assign it to a variable

const result = function () {
  console.log("hello");
};

// you can pass it as a callback

setTimeout(function () {
  console.log("wait for 2 sec");
}, 2);

// you can write IIFE

(function () {
  console.log("I run immediately");
})();

function myFunction() {
  console.log("normal my function");
}
myFunction();

//arrow function 1st way

const arrowFunction = () => {
  console.log("arrow 1");
};
arrowFunction();

//arrow function 2nd way

const arrowFunction2 = () => console.log("arrow 2");
arrowFunction2();

//arrow function 3rd way

const arrowFunction3 = (a, b) =>
  console.log("sum using arrow 3 function: ", a + b);
arrowFunction3(1, 1);
