// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
    let result = [];
    let number = 0;
    let turn = 0;
    while (result.length < t) {
        const cur = number.toString(n).toUpperCase();  
        for (let i of cur) {
            if (turn % m === p - 1) {  
                result.push(i);  
                if (result.length === t) break;  
            }
            turn++;  
        }
        number++; 
    }
     return result.join(''); 
}
