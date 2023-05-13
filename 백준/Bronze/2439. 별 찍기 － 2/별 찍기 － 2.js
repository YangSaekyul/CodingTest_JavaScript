var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var inputStr = fs.readFileSync('/dev/stdin').toString().trim();

let a = parseInt(input[0]);
let count = a;
let blank = '';
let star = '';

for (let i = 0; i < a; i++) {
    for (let j = count; j > 1; j--) {
        blank += ' ';
    }
    star += '*'
    console.log(blank + star);
    blank = '';
    count--;
}