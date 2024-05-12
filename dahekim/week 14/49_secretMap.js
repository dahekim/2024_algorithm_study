// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    const answer = [];    
    for (let i = 0; i < n; i++) {
        let entireMap = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');

        let sFormat = entireMap.replace(/0/g, ' ').replace(/1/g, '#');
        answer.push(sFormat);
    }
    return answer;
}
