let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arrA = [];
let arrB = [];

for (let i = 1; i <= n; i++) {
  arrA.push(input[i].split(" ").map(Number));
}

for (let i = n + 1; i <= n * 2; i++) {
  arrB.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arrA[i][j] += arrB[i][j];
  }
}

for (let i = 0; i < n; i++) {
  console.log(arrA[i].join(" "));
}
