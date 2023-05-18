var fs = require('fs');
const { parse } = require('path');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var inputstr = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

let num1 = parseInt(input[0]);
let star = '';

for (let i = 0; i < num1; i++) {
    for (let j = 0; j <= i; j++) {
        star += '*';
    }
    console.log(star)
    star = '';
}