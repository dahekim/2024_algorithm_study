// https://school.programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
    if (p === '') return ''; 

    let balance = 0;
    let rest = 0;
    for (let i = 0; i < p.length; i++) {
        balance += p[i] === '(' ? 1 : -1;
        if (balance === 0) { 
            rest = i + 1;
            break;
        }
    }

    const u = p.slice(0, rest); 
    const v = p.slice(rest);   
    
    function isCorrect(str) {
        let cnt = 0;
        for (const char of str) {
            cnt += char === '(' ? 1 : -1;
            if (cnt < 0) return false; 
        }
        return cnt === 0; 
    };

    if (isCorrect(u)) {
        return u + solution(v);
    } else {
        let newStr = '(' + solution(v) + ')';
        for (const char of u.slice(1, -1)) {
            newStr += char === '(' ? ')' : '('; 
        }
        return newStr;
    }
}
