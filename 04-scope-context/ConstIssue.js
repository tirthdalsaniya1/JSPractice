// Wrap the buggy code in a function to catch the syntax error
function runBuggyCode() {
  try {
    // Intentional syntax error inside string, using eval
    eval(`
      const x;
      x = 100;
      console.log(x);
    `);
  } catch (e) {
    console.log("Caught an error:", e.message);
  }
}

runBuggyCode();
