function solution(a, b) {
    let str_a = a.toString();
    let str_b = b.toString();
    return parseInt(str_a + str_b) >= 2 * a * b ? parseInt(str_a + str_b) : 2 * a * b;
}