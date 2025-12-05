/* for loop while loop dowhile loop for.of loop*/

for (let i = 1; i <= 5; i++) {
  console.log("for loop iteration count is ", i);
}

console.log("------end of normal for loop-------");
console.log("------start of for of loop-------");

const numArray = [1, 2, 3, 4, 5];

for (const num of numArray) {
  console.log("array element is ", num);
}
console.log("------end of for of loop-------");

//while loop
console.log("-----start of while loop------");

let k = 0;

while (k < 5) {
  console.log("while loop iteration count is ", k);
  k++;
}
console.log("-----end of while loop------");

//Do While loop
console.log("-----start of do while loop-----");

let j = 0;
do {
  console.log("inside do block", j);
  j++;
} while (j < 5);

console.log("-----end of do while loop-----");
