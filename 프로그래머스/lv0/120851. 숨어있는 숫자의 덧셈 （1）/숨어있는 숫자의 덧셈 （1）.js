function solution(my_string) {
  let answer = 0;
  let newArr = my_string.split("");
  for (let i = 0; i < newArr.length; i++) {
    let changeNumber = Number(newArr[i]);
    if (!isNaN(changeNumber)) {
      answer += changeNumber;
    }
  }
  return answer;
}
