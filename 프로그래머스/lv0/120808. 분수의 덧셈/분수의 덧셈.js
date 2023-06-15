function solution(numer1, denom1, numer2, denom2) {
  let newNumer = numer1 * denom2 + numer2 * denom1;
  let newDenom = denom1 * denom2;

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  const gcdVal = gcd(newNumer, newDenom);

  const reducedNumer = newNumer / gcdVal;
  const reducedDenom = newDenom / gcdVal;

  return [reducedNumer, reducedDenom];
}
