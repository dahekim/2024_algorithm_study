// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
    let answer = 0;

    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);  // 문자열을 회전한 결과
        const stack = [];
        let isValid = true;


        for (let ch of rotated) {
            if (ch === '(' || ch === '[' || ch === '{') {
                stack.push(ch);  // 여는 괄호는 스택에 push
            } else {
                // 닫는 괄호일 경우
                const top = stack.pop();  // 스택에서 가장 최근의 괄호를 꺼냄
                if (top !== brackets[ch]) {
                    isValid = false;  // 짝이 맞지 않으면 유효하지 않음
                    break;
                }
            }
        }

        if (isValid && stack.length === 0) {
            answer++;
        }
    }

    return answer;
}
