// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
    let answer = 0;
    if(A === B) return answer;

    let arr = A.split("");    

    for (let i = arr.length-1; i >= 0; i-- ){
        let tmp = arr.splice(arr.length-1, 1)[0]
        arr.unshift(tmp);        
        answer++
        
        if(arr.join("") === B) return answer;
    }
    return -1;
}