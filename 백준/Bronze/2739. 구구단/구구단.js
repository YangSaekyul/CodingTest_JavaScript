let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num1 = Number(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${num1} * ${i} = ${num1 * i}`);
}