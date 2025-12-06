/* ==========================================================
   EVENT LOOP, MACROTASKS & MICROTASKS — Node (VS Code)
   Filename: event-loop-and-microtasks.node.js
   Run with: node event-loop-and-microtasks.node.js
   ==========================================================
*/

/* --------------------------
   Quick note
   - This is Node-only friendly: no DOM APIs included.
   - All examples will print when run with Node in VS Code.
   -------------------------- */

console.log("=== script start ===");

/* --------------------------
   Simple ordering: Promise microtasks vs setTimeout macrotask
   -------------------------- */
setTimeout(() => {
  console.log("macrotask: setTimeout 0");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("microtask: Promise.then 1");
  })
  .then(() => {
    console.log("microtask: Promise.then 2");
  });

console.log("=== script end ===\n");

/* --------------------------
   queueMicrotask vs Promise.then
   -------------------------- */
console.log("queueMicrotask example:");

if (typeof queueMicrotask === "function") {
  queueMicrotask(() => console.log("microtask: queueMicrotask"));
} else {
  // fallback for very old Node versions
  Promise.resolve().then(() =>
    console.log("microtask: queueMicrotask (fallback)")
  );
}

Promise.resolve().then(() =>
  console.log("microtask: Promise.then (after queueMicrotask?)")
);

setTimeout(() => console.log("macrotask: setTimeout 1"), 0);

/* --------------------------
   async/await under the hood
   - await continuation is a microtask
   -------------------------- */
console.log("\nasync/await example:");

async function asyncFn() {
  console.log("async: start");
  await null; // yields; continuation becomes a microtask
  console.log("async: after await (microtask)");
}

asyncFn();

Promise.resolve().then(() =>
  console.log("microtask: Promise.then after asyncFn")
);

setTimeout(() => console.log("macrotask: setTimeout after asyncFn"), 0);

/* --------------------------
   Node-specific: process.nextTick and setImmediate
   - process.nextTick runs before other microtasks in Node
   - setImmediate is a macrotask scheduled by libuv
   -------------------------- */
console.log("\nnode-specific example:");

process.nextTick(() =>
  console.log("process.nextTick (runs before other microtasks in Node)")
);

Promise.resolve().then(() => console.log("Promise.then (microtask) in Node"));

setImmediate(() => console.log("macrotask: setImmediate (Node)"));
setTimeout(() => console.log("macrotask: setTimeout 2 (Node)"), 0);

/* --------------------------
   Complex ordering demo
   -------------------------- */
console.log("\ncomplex ordering example:");

setTimeout(() => console.log("macrotask A - setTimeout 10ms"), 10);

Promise.resolve()
  .then(() => {
    console.log("microtask 1 - Promise.then");
    return Promise.resolve("chain");
  })
  .then(() => {
    console.log("microtask 2 - chained Promise.then");
  });

queueMicrotask(() => console.log("microtask queueMicrotask"));

setTimeout(() => {
  console.log("macrotask B - setTimeout 0");
  Promise.resolve().then(() => console.log("microtask inside macrotask B"));
}, 0);

console.log("end of complex demo");

/* --------------------------
   Demonstrate microtask starvation danger (short demo)
   - This will queue a few microtasks; NOT infinite so it will finish.
   - WARNING: do not make this infinite in real code — it can block I/O/paint.
   -------------------------- */
console.log("\nmicrotask starvation demo (bounded):");

let count = 0;
function maybeQueueMicrotask() {
  if (count < 5) {
    count++;
    queueMicrotask(() => {
      console.log("microtask-starvation-demo step", count);
      maybeQueueMicrotask(); // requeue until count reaches 5
    });
  }
}
maybeQueueMicrotask();

/* --------------------------
   Final note and expected high-level ordering hints:
   - All synchronous logs print first.
   - Then process.nextTick callbacks.
   - Then Promise microtasks / queueMicrotask continuations.
   - Then macrotasks (setImmediate / setTimeout callbacks).
   - setImmediate vs setTimeout ordering can vary by Node phase, but both are macrotasks.
   -------------------------- */

console.log("\n=== end of file ===");
