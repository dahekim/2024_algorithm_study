// https://school.programmers.co.kr/learn/courses/30/lessons/118667

function solution(queue1, queue2) {
    const initSum = queue1.reduce((a, b) => a + b, 0) + queue2.reduce((a, b) => a + b, 0);    
    if (initSum % 2 !== 0) return -1;    
    const halfSum = initSum / 2;
    
    let sum1 = queue1.reduce((a, b) => a + b, 0);    
    let tmp1 = 0;
    let tmp2 = 0;
    
    const totalQue = [...queue1, ...queue2]; 
    const maxMoves = queue1.length * 3; 

    for (let moves = 0; moves < maxMoves; moves++) {
        if (sum1 === halfSum) return moves;        
        if (sum1 > halfSum) {
            sum1 -= totalQue[tmp1];
            tmp1 += 1;
        } else {
            sum1 += totalQue[queue1.length + tmp2];
            tmp2 += 1;
        }
    }
    return -1; 
}