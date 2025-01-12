// https://school.programmers.co.kr/learn/courses/30/lessons/120871
// 3의 배수와 숫자 3을 사용하지 않을 때, 매개변수 정수 n을 주어진 형식을 따라 리턴하라. 

function solution(n) {
    let answer = 0;
    for(let i = 1 ; i <= n ; i ++) {
        answer++;
        while(answer.toString().includes("3") || answer % 3 ===0) {
            answer++;
        }
    }
    return answer;
}