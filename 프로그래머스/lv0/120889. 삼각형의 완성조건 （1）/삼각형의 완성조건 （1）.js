function solution(sides) {
    var answer = 0;
    let max = sides[0];
    let newArr = [];
    
    for (let i = 1; i < sides.length; i++) {
        if (max < sides[i]) {
            newArr.push(max);
            max = sides[i];
        } else {
            newArr.push(sides[i]);
        }
    }
    
    const add = (a,b) => a + b;
    
    if (max < newArr.reduce(add, 0)) {
        return 1;
    } else {
        return 2;
    }
}
