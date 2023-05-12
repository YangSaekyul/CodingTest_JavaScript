var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var inputStr = fs.readFileSync('/dev/stdin').toString().trim();

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let result = '';

if (a > b) {
    console.log('>')
} else if (a < b) {
    console.log('<')
} else {
    console.log('==')
}