let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";

const length = input.length;

for (let i = 1; i < length; i++) {
  let [a, b] = input[i].split(" ");
  a = Number(a);

  for (let j = 0; j < b.length; j++) {
    result += b[j].repeat(a);
  }
  result += "\n";
}

console.log(result);
