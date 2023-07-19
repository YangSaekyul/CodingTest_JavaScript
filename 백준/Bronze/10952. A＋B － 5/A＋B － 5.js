// let input = fs.readFileSync("./input.txt").toString().split("\n");

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0 0") {
    break;
  }
  let num = input[i].split(" ");
  console.log(Number(num[0]) + Number(num[1]));
}
