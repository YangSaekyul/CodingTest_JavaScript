function solution(emergency) {
    let answer = [];
    let sortEmergency = emergency.slice().sort((a, b) => b - a);
    let sortEmergencyIndex = sortEmergency.map((el, idx) => [el, idx + 1]);
    for (let i = 0; i < emergency.length; i++) {
        for (let j = 0; j < sortEmergencyIndex.length; j++) {
        if (emergency[i] === sortEmergencyIndex[j][0]) {
            answer.push(sortEmergencyIndex[j][1]);
        }
        }
    }
    return answer;
}