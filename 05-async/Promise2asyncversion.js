// PROMISE FUNCTIONS
function sayHello() {
  return new Promise(function (resolve) {
    console.log("1: Hello");
    resolve();
  });
}

function bye() {
  return new Promise(function (resolve) {
    console.log("2: Bye");
    resolve();
  });
}

function missYou() {
  return new Promise(function (resolve) {
    console.log("3: Miss You");
    resolve();
  });
}

function takeCare() {
  return new Promise(function (resolve) {
    console.log("4: Take Care");
    resolve();
  });
}

// ASYNC/AWAIT VERSION
async function runSteps() {
  await sayHello();
  await bye();
  await missYou();
  await takeCare();
}

runSteps();

/*
Why async/await is best?
No nesting
No .then() chains
Looks like normal code
Super easy to read
Debugging becomes easier
*/
