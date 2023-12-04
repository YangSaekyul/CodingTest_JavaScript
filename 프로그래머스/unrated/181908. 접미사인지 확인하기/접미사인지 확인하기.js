function solution(my_string, is_suffix) {
    for(let i = 0; i < my_string.length; i++) {
        if(my_string.slice(i, my_string.length + 1) === is_suffix) return 1;     
    }
    return 0;
}