let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num1 = Number(input[0]);

for (let i = 1; i <= num1; i++) {
  let num2 = input[i].split(" ");
  let a = Number(num2[0]);
  let b = Number(num2[1]);
  console.log(a + b);
}