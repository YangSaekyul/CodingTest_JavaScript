function solution(my_string, letter) {
    var newString = my_string.split('');
    var answer = [];
    for (let i = 0; i < my_string.length; i++) {
        if (newString[i] !== letter) {
            answer.push(newString[i])
        }
    }
    return answer.join('');
}