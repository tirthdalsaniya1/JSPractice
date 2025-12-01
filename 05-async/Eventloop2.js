// You can visulize this on site https://latentflip.com/loupe
// Even at here https://kamronbekshodmonov.github.io/JELoop-Visualizer/

console.log("start");

new Promise((resolve) => {
  console.log("promise executor (runs sync on call stack)");
  resolve();
}).then(() => {
  console.log("then (microtask)");
});

setTimeout(() => console.log("timeout (macrotask)"), 0);

console.log("end");
