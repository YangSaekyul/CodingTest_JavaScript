function solution(array) {
  array.sort((a, b) => a - b);
  const n = array.length;
  const median = array[Math.floor(n / 2)];
  return median;
}
