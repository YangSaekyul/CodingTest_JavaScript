let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let lower = input.toLowerCase().split("");

let obj = {};

// 배열 순회하면서 글자 하나씩 따오기
// 글자 수만큼 체크
// 가장 많은 글자가 두개 이상이면 ? 리턴
// 가장 큰 글자는 따로 체크

for (let i = 0; i < lower.length; i++) {
  let item = lower[i];
  if (obj[item]) {
    obj[item]++;
  } else {
    obj[item] = 1;
  }
}

let max = Math.max(...Object.values(obj));
let maxKeys = Object.keys(obj).filter((key) => obj[key] === max);

if (maxKeys.length > 1) {
  console.log("?");
} else {
  console.log(maxKeys[0].toUpperCase());
}
