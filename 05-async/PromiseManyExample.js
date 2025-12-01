function hello() {
  console.log("hello guys");
  return new Promise((resolve, reject) => {
    resolve("hello resolved");
  });
}

function hi() {
  console.log("hi guys");
  return new Promise((resolve, reject) => {
    resolve("hi resolved");
  });
}

function bye() {
  console.log("bye guys");
  return new Promise((resolve, reject) => {
    resolve("bye resolved");
  });
}

hello()
  .then(() => hi())
  .then(() => bye())
  .then(() => {
    console.log("done");
  });
