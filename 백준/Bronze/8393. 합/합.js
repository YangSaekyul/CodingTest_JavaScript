let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num1 = Number(input[0]);
let result = 0;

for (let i = 1; i <= num1; i++) {
    result += i;
}

console.log(result);