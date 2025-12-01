// here you can pass any name as a parameter in the function argument it could be cb or callback or callsomething
function sayHello(callsomething) {
  console.log("1: helllo");

  if (callsomething) {
    callsomething(); // Call the function passed as a callback
  }
}

function bye() {
  console.log("2: bbye");
}

function missYou() {
  console.log("3: miss You");
}

sayHello(bye);

sayHello(missYou);

// if you will not cover callsomething inside the if and dont pass the call back in the argument then u will get exception
sayHello();
