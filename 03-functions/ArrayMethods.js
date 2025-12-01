let b = [1, 2, 3, 4];
//push at end
b.push(5);

console.log("after push", b);

//remove from end
b.pop();

console.log("after pop", b);

//remove from beginning

b.shift();

console.log("after shift", b);

//add at the beginning
b.unshift(1);

console.log("after unshift", b);

let s = [1, 2, 3];

s.splice(1, 1);

console.log("after splice in s", s);

//use foreach
b.forEach((n) => console.log(n));

[4, 3].forEach((n) => console.log(n));

//double using map
let doubled = [1, 2, 3].map((n) => n * 2);

console.log("after double", doubled);

//filter even
let filterEven = [1, 2, 3, 4].filter((n) => n % 2 == 0);

console.log("after filterning even", filterEven);

//find the things, it will return the first match
let findGreaterThan5 = [1, 2, 3, 4, 5, 6, 7].find((n) => n > 5);
console.log(" finding > 5 elements ", findGreaterThan5);

//find indexe, it will return first index
let findIndexes = [1, 2, 3, 4, 5, 6, 7].findIndex((n) => n > 5);
console.log(" find index for elements > 5 are ", findIndexes);

//check the existence using includes

let checkTheExistance = [1, 2, 3].includes(2);
console.log(" checkTheExistance for 2 is  ", checkTheExistance);

let findIndex = [1, 2, 3].indexOf(2);

console.log(" findIndex for 2 is ", findIndex);
//sort the array
let sortTheArray = [9, 5, 4].sort();
console.log(" sort the array ", sortTheArray);

let reverseTheArray = [1, 2, 3].reverse();
console.log(" reverse the array ", reverseTheArray);

//custom sort
let customSortTheArray = [3, 1, 2].sort((a, b) => a - b);
console.log(" custom sort the array ", customSortTheArray);

//join
let arrayJoin = [1, 2, 3].join("-");
console.log("array after join", arrayJoin);

let arrayForJoin = ["a", "b", "c"].join("-");
console.log("array after join", arrayForJoin);
