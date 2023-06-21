function solution(balls, share) {
  if (share === 0) {
    return 0;
  }

  function comb(n, r) {
    if (r === 0 || n === r) {
      return 1;
    }
    return comb(n - 1, r - 1) + comb(n - 1, r);
  }

  return comb(balls, share);
}
