function solution(n) {
  let result = 0;
  let i = 1;
  while (true) {
    if (i % n == 0 && i % 6 == 0) {
      result = i;
      break;
    }
    i++;
  }
  return result / 6;
}
