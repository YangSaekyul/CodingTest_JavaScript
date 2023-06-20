function solution(array) {
  let counts = {};  
  let maxCount = 0; 
  let mode = -1;  
  
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
    
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mode = num;
    } else if (counts[num] === maxCount) {
      mode = -1;
    }
  }
  
  return mode;
}
