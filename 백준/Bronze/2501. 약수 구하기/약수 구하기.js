let fs = require("fs");
let [n, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 0;
let arr = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    count++;
    arr.push(i);
  }
}

console.log(arr[k - 1] ? arr[k - 1] : 0);
