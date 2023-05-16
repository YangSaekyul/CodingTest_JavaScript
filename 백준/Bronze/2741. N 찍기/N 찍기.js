var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var inputStr = fs.readFileSync('/dev/stdin').toString().trim();

let a = parseInt(input[0]);

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + "\n";
}

console.log(answer);