let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input[0];
let arr = input[1].split(" ").map((el) => parseInt(el));

let max = Math.max(...arr);

let avg = arr.reduce((acc, cur) => acc + cur) / num;

console.log((avg / max) * 100);
