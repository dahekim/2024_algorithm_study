// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    let users = stages.length; 
    const answer = [];
    
    stages.sort((a, b) => a - b);    
    
    for (let stage = 1; stage <= N; stage++) {
        const current = stages.filter(s => s === stage).length;
        const fail = current / users;
        users -= current;        
        answer.push({ stage, fail });
    }
    answer.sort((a, b) => b.fail - a.fail);
    return answer.map(e => e.stage);
}
