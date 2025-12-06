console.log("script start"); // (A) sync -> call stack

setTimeout(() => {
  console.log("timeout callback (macrotask)"); // (D) from macrotask queue
}, 0);

Promise.resolve().then(() => {
  console.log("promise then (microtask)"); // (C) from microtask queue
});

console.log("script end"); // (B) sync -> call stack

// You can visulize this on site https://latentflip.com/loupe

console.log("start");

new Promise((resolve) => {
  console.log("promise executor (runs sync on call stack)");
  resolve();
}).then(() => {
  console.log("then (microtask)");
});

setTimeout(() => console.log("timeout (macrotask)"), 0);

console.log("end");
