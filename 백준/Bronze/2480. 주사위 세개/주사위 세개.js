let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

switch (true) {
  case num1 === num2 && num2 === num3:
    console.log(10000 + num1 * 1000);
    break;
  case num1 === num2 || num1 === num3 || num2 === num3:
    console.log(1000 + (num1 === num2 ? num1 : num3) * 100);
    break;
  case num1 !== num2 && num2 !== num3 && num1 !== num3:
    console.log(Math.max(num1, num2, num3) * 100);
    break;
}
