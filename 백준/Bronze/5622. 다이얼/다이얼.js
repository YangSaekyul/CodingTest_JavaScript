let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let dial = {
  1: "",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
  0: "",
};

let result = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    for (let k in dial) {
      if (dial[k].includes(input[i][j])) {
        result += Number(k) + 1;
      }
    }
  }
}

console.log(result);