let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ");
  if (b) {
    for (let j = 0; j < b.length; j++) {
      result += b[j].repeat(a);
    }
    result += "\n";
  }
}

console.log(result);
