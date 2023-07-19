let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let testCase = Number(input[0]);
let result = "";

for (let i = 1; i <= testCase; i++) {
  let num = input[i].split(" ");
  result += `Case #${i}: ${Number(num[0]) + Number(num[1])}` + "\n";
}

console.log(result);
