function solution(n) {
    let count = 0;
    const sqrtN = Math.sqrt(n);

    for (let i = 1; i <= sqrtN; i++ ) {
        if (n % i === 0) {
            count++;
            if (i !== sqrtN) {
                count++;
            }
        }
    }

    return count;
}