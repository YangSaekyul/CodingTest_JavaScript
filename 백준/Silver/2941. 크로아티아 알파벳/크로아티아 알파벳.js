let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let changeAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of changeAlphabet) {
  input = input.split(alphabet).join("*");
}

console.log(input.length);
