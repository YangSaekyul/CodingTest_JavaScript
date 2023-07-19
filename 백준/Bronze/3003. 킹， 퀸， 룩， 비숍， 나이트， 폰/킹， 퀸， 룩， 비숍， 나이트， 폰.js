let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let chess = [1, 1, 2, 2, 2, 8];

let result = chess.map((x, i) => x - input[i]);

console.log(result.join(" "));
