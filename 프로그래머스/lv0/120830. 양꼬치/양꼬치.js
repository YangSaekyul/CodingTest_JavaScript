function solution(n, k) {
    var answer = 0;
    k = k - parseInt(n / 10);
    answer += n*12000+k*2000;
    return answer;
}