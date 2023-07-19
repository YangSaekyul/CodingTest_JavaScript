let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let price = Number(input[0]);

let total = 0;

for (let i = 2; i < 2 + Number(input[1]); i++) {
  let [a, b] = input[i].split(" ").map(Number);
  total += a * b;
}

console.log(total === price ? "Yes" : "No");
