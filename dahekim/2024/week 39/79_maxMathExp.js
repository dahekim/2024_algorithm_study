// https://school.programmers.co.kr/learn/courses/30/lessons/67257

function solution(expression) {
    
    // 연산자 조합 생성
    function getCases(array) {
        if (array.length === 0) return [[]];
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            const remains = array.filter((cur, idx) => idx !== i);
            const remainCases = getCases(remains);
            
            for (const r of remainCases) {
                result.push([item, ...r]);
            }
        }
        return result;
    }

    // 문자열 -> 숫자/연산자로  분리
    function parseExp(exp) {
        const result = [];
        let num = ''; 
        
        for (let char of exp) {
            if (char === '+' || char === '-' || char === '*') {
                if (num !== '') result.push(num);
                result.push(char);
                num = ''; 
            } else {
                num += char;
            }
        }
        if (num !== '') result.push(num);
        return result;
    };
    
    // 계산
    function calculate(a, b, op) {
        a = a * 1;
        b = b * 1;
        if (op === '+') return a + b;
        if (op === '-') return a - b;
        if (op === '*') return a * b;
    };
    
    // 연산 우선순위에 맞게 최종적으로 계산
    function finalCalc(elements, priority) {
        let tmp = [...elements];
        for (const op of priority) {
            const stack = [];
            while (tmp.length > 0) {
                const e = tmp.shift();
                if (e === op) {
                    const prev = stack.pop();
                    const next = tmp.shift();
                    stack.push(calculate(prev, next, op));
                } else {
                    stack.push(e);
                }
            }
            tmp = stack;
        }
        return Math.abs(tmp[0]); 
    };
    
    const elements = parseExp(expression);
    const operators = [...new Set(elements.filter((e) => /[\+\-\*]/.test(e)))];
    const priorities = getCases(operators);

    let answer = 0;
    for (const p of priorities) {
        answer = Math.max(answer, finalCalc(elements, p));
    }

    return answer;
}
