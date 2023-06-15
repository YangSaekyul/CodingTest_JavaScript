function solution(money) {
  var answer = [0, money];
  while (money >= 5500) {
    answer[0] += 1;
    money -= 5500;
  }
  answer[1] = money;
  return answer;
}
