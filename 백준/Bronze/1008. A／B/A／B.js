var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

// var a = parseInt(input[0]);
// var b = parseInt(input[1]);

let a = input[0];
let b = input[1];

console.log(a / b);