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
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject("Something went wrong in missYou");
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
  try {
    await sayHello();
    await bye();
    await missYou(); // this will throw error
    await takeCare();
  } catch (err) {
    console.log("Caught Error:", err);
  }
}

runSteps();
