// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
    let answer = 0;
    for (let num = i; num <= j; num++) {
        answer += String(num).split('').filter(n => n === String(k)).length;
    }
    return answer;
}
