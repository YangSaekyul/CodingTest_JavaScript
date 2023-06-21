function solution(age) {
  let answer = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newAge = age.toString();

  for (let i = 0; i < newAge.length; i++) {
    answer += alphabet[newAge[i]];
  }

  return answer;
}
