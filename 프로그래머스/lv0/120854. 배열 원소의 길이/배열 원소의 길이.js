function solution(strlist) {
    var answer = [];
    let count = 0;
    
        for(let i = 0; i < strlist.length; i++) {
            for (let j = 0; j < strlist[i].length; j++) {
                count++; 
            }
            answer[i] = count;
            count = '';
        }
    return answer;
}