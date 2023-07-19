let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input[1];
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += parseInt(num[i]);
}

console.log(sum);
