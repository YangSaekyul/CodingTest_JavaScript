function solution(num_list) {
  let 원소들의곱 = 1;
  let 원소들의합 = 0;

  for (let i = 0; i < num_list.length; i++) {
    원소들의곱 *= num_list[i];
    원소들의합 += num_list[i];
  }

  원소들의합 *= 원소들의합;

  return 원소들의곱 < 원소들의합 ? 1 : 0;
}
