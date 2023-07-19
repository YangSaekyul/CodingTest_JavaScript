let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let string = input[0];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let result = "";
for (let i = 0; i < alphabet.length; i++) {
  result += string.indexOf(alphabet[i]) + " ";
}

console.log(result.trim());
