const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

b = b - 45;

if (b < 0) {
  b = 60 + b;
  a--;
  if (a < 0) {
    a = 23;
  }
}

console.log(`${a} ${b}`);
