let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let x = Number(input[0].split(" ")[1]);

let arr = input[1].split(" ").map((e) => Number(e));

let result = "";

let max = Math.max(...arr);
let min = Math.min(...arr);

result += `${min} ${max}`;

console.log(result);
