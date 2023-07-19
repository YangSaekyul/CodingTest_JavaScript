let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

for (var i = 0; i < input.length; i++) {
  let num = input[i].toString().split(" ");
  console.log(Number(num[0]) + Number(num[1]));
}
