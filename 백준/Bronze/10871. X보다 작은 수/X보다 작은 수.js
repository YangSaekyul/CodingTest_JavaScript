let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let x = Number(input[0].split(" ")[1]);

let arr = input[1].split(" ").map((e) => Number(e));

let result = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < x) {
    result += arr[i] + " ";
  }
}

console.log(result);
