let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input.map((el) => parseInt(el) % 42);
let uniqueArr = arr.filter((el, idx) => arr.indexOf(el) === idx);

console.log(uniqueArr.length);
