// https://school.programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
    let answer = 0;
    
    if (!words.includes(target)) return answer;
    
    let queue = [[begin, 0]]; 
    let visited = new Set(); 

    while (queue.length) {
        let [tmp, count] = queue.shift(); 

        if (tmp === target) return count; 

        for (let next of words) {
            if (!visited.has(next) && searchDiffLetter(tmp, next)) {
                visited.add(next); 
                queue.push([next, count + 1]);
            }
        }
    }
    
    return 0; 
}

function searchDiffLetter(tmp, next) {
    let diff = 0;
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] !== next[i]) diff++;
        if (diff > 1) return false; 
    }
    return diff === 1;
}