function solution(array) {
    let maxVal = Math.max(...array);
    let index = array.indexOf(maxVal);
    return [maxVal, index];
}