let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = 0;
let row = 0;
let col = 0;

for (let i = 0; i < input.length; i++) {
  max = Math.max(max, ...input[i].split(" ").map(Number));
  if (max === Math.max(...input[i].split(" ").map(Number))) {
    row = i + 1;
    col = input[i].split(" ").indexOf(String(max)) + 1;
  }
}

console.log(max);
console.log(row, col);
