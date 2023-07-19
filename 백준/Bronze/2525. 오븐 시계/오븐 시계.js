var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let hour = parseInt(input[0].split(" ")[0]);
let minute = parseInt(input[0].split(" ")[1]);
let selectMinute = parseInt(input[1]);

minute += selectMinute;

if (minute >= 60) {
  hour += Math.floor(minute / 60);
  minute = minute % 60;
}

if (hour >= 24) {
  hour = hour % 24;
}

console.log(`${hour} ${minute}`);
