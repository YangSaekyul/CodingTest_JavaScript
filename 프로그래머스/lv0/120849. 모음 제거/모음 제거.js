function solution(my_string) {
    var answer = '';
    let text = my_string.split('');
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== 'a' && text[i] !== 'e'&& text[i] !== 'i'&& text[i] !== 'o'&& text[i] !== 'u') {
            answer += text[i];
        }
    }
    return answer;
}