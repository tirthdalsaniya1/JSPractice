function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Positive number");
    } else {
      reject("Not positive");
    }
  });
}

checkNumber(-1)
  .then((msg) => console.log(msg))
  .catch((err) => console.log("Error:", err));
