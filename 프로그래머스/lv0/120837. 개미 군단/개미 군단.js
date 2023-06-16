function solution(hp) {
  const general = Math.floor(hp / 5);
  const lieutenant = Math.floor((hp % 5) / 3);
  const soldier = (hp % 5) % 3;

  return general + lieutenant + soldier;
}
