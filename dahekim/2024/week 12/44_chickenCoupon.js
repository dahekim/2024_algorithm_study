// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
    let answer = 0;    
    let coupons = chicken;

    while(coupons>=10){
        let bonus = Math.floor(coupons/10);    
        answer += bonus;
        coupons = coupons % 10 + bonus;
    }

    return answer;
}