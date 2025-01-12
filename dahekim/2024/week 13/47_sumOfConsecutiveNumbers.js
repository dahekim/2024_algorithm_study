// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
    let result = [];
    const average = Math.floor(total / num);
    const start = average - Math.floor((num - 1) / 2);
    
    for (let i = 0; i < num; i++) {
        result.push(start + i);
    }

    return result;
}
