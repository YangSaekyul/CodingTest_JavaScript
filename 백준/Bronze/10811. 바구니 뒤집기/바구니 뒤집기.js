let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map((el) => parseInt(el));

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map((el) => parseInt(el));
  let tempArr = arr.slice(a - 1, b).reverse();
  arr.splice(a - 1, b - a + 1, ...tempArr);
}

console.log(arr.join(" "));
