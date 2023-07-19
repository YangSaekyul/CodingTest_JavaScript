let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(i + 1);
}

for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  let temp = arr[x - 1];
  arr[x - 1] = arr[y - 1];
  arr[y - 1] = temp;
}

console.log(arr.join(" "));
