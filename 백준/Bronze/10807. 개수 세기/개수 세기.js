let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let n = parseInt(input[0]);
let v = parseInt(input[2]);

let arr = input[1].split(" ").map((e) => parseInt(e));

let result = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === v) {
    result++;
  }
}

console.log(result);
