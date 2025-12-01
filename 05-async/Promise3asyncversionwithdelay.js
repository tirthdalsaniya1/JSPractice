function sayHello() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Hello");
      resolve();
    }, 1000); // 1 second delay
  });
}

function bye() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Bye");
      resolve();
    }, 1000);
  });
}

function missYou() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Miss You");
      resolve();
    }, 1000);
  });
}

function takeCare() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Take Care");
      resolve();
    }, 1000);
  });
}

async function runSteps() {
  await sayHello();
  await bye();
  await missYou();
  await takeCare();
}

runSteps();
// Now output will show slowly : Each one after 1 second.
