function solution(rny_string) {
  var answer = [];

  for (let i = 0; i < rny_string.length; i++) {
    if (rny_string[i] === "m") {
      answer.push("rn");
    } else {
      answer.push(rny_string[i]);
    }
  }

  return answer.join("");
}
