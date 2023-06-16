function solution(box, n) {
  var boxWidth = Math.floor(box[0] / n);
  var boxHeight = Math.floor(box[1] / n);
  var boxDepth = Math.floor(box[2] / n);

  return boxWidth * boxHeight * boxDepth;
}
