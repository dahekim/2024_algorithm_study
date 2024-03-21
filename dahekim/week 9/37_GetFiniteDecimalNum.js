// https://school.programmers.co.kr/learn/courses/30/lessons/120878
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성하라.

function solution(a, b) {
    // 최대 공약수를 구함
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const divisor = gcd(a, b);
    b = b / divisor;
    
    // 2와 5로 다 나누어 떨어질 때까지 반복
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    return b === 1 ? b : 2;
}