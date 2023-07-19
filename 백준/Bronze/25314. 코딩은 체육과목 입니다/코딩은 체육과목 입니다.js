let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = Number(input[0]);
let arr = [];

// long int : 4byte
// long long int : 8byte

for (let i = 0; i < number; i += 4) {
  arr.push("long");
}

console.log(arr.join(" ") + " int");