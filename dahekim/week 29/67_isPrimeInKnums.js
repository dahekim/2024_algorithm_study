// https://school.programmers.co.kr/learn/courses/30/lessons/92335

// 소수일 경우 true 반환
function isPrime(num) {
    if (num < 2) return false;  
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;  // 나누어 떨어지면 소수 X
    }
    return true;  
}

function solution(n, k) {
    const kNum = n.toString(k); // 진수 변환
    
    // 0 기준으로 숫자 분리
    const primeList = kNum.split('0').filter(num => num !== '');

    let answer = 0;
    for (const p of primeList) {
        if (isPrime(p * 1)) {
            answer++;
        }
    }
    return answer;
}