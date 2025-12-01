//here acc is accumulator and cur is current value and 0 is the initial value,
//  incase of empty array it may throw exception so its better to pass initial value 0
// we can pass x, y as well or any name

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, cur) => acc + cur, 1);
console.log("after applying reduce now sum is ", sum); // 10


const max = [5, 3, 9, 1].reduce((a, b) => Math.max(a, b));
console.log("after applying reduce now max is ", max); // 9

const min = [1,2,3,4].reduce((a, b) => Math.min(a, b));
console.log("after applying reduce now min is ", min); // 1


const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = letters.reduce((acc, c) => {
  acc[c] = (acc[c] || 0) + 1;
  return acc;
}, {});
console.log("after applying reduce now count is ",count); // { a: 3, b: 2, c: 1 }


const users = [
  { id: 1, name: 'Sam' },
  { id: 2, name: 'Alex' }
];

const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});


const nested = [[1, 2], [3, 4]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log("after applying reduce now flat is ", flat); // [1, 2, 3, 4]


