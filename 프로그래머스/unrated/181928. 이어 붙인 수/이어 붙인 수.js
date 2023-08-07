function solution(num_list) {
  let 홀수 = num_list.filter((num) => num % 2 === 1).join("");
  let 짝수 = num_list.filter((num) => num % 2 === 0).join("");

  return Number(홀수) + Number(짝수);
}
