// 1️⃣ Functions that return Promises
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

// 2️⃣ Promise Chain (calling them in order)
sayHello()
  .then(function () {
    return bye();
  })
  .then(function () {
    return missYou();
  })
  .then(function () {
    return takeCare();
  })
  .catch(function (err) {
    console.log("Error:", err);
  });
