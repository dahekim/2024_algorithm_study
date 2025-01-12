// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    const lists = s
        .replace(/{{|}}/g, '')   
        .split('},{')            
        .map(set => set.split(',').map(Number));  
    lists.sort((a, b) => a.length - b.length);

    const answer = [];
    const tmp = []; 

    lists.forEach(list => {
        list.forEach(e => {
            if (tmp.indexOf(e) === -1) { 
                tmp.push(e); 
                answer.push(e);
            }
        });
    });
    
    return answer;
}
