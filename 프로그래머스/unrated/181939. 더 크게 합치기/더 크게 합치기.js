function solution(a, b) {
    string_a = a.toString()
    string_b = b.toString()
    
    return string_a + string_b >= string_b + string_a ? parseInt(string_a + string_b) : parseInt(string_b + string_a);
}