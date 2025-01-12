// https://school.programmers.co.kr/learn/courses/30/lessons/60057?language=javascript

function solution(s) {
    let answer = s.length; 
    
    // 전체 문자열을 i개 단위로 쪼개서 비교
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let str = ""; 
        let prev = s.slice(0, i); 
        let cnt = 1; 

        for (let j = i; j < s.length; j += i) {
            const cur = s.slice(j, j + i); 
            if (prev === cur) {
                cnt++; 
            } else {
                if (cnt > 1) {
                    str += cnt + prev; 
                } else {
                    str += prev; 
                }
                prev = cur; 
                cnt = 1; 
            }
        }
        
        str += (cnt > 1 ? cnt : "") + prev;

        answer = Math.min(answer, str.length);
    }

    return answer;
}
