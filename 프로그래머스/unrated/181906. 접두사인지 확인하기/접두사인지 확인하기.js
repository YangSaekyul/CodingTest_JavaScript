function solution(my_string, is_prefix) {
  let string = "";

  for (let i = 0; i < my_string.length; i++) {
    string += my_string[i];
    if (string === is_prefix) {
      return 1;
    }
  }

  return 0;
}
