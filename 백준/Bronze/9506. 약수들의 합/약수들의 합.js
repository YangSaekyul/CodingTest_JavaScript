let fs = require("fs");
let number = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < number.length - 1; i++) {
  let arr = []; 
  let sum = 0; 

  for (let j = 1; j < number[i]; j++) {
    if (number[i] % j === 0) {
      arr.push(j);
      sum += j;
    }
  }

  if (sum === number[i]) {
    let result = `${number[i]} = `;
    for (let k = 0; k < arr.length; k++) {
      if (k === arr.length - 1) {
        result += `${arr[k]}`;
      } else {
        result += `${arr[k]} + `;
      }
    }
    console.log(result);
  } else {
    console.log(`${number[i]} is NOT perfect.`);
  }
}
