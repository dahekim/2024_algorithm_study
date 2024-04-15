// https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
    let answer = 0;
    let leans = [];    
    for(let i = 0; i < 4; i++){
        for(let j = i+1; j < 4; j++){
            let x = Math.abs(dots[i][0]-dots[j][0]);
            let y = Math.abs(dots[i][1]-dots[j][1]);
            leans.push(x/y);
        }
    }
    const result = new Set(leans);
    return result.size !== leans.length ? 1 : 0 ;
}