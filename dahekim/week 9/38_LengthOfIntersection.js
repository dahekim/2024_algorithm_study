// https://school.programmers.co.kr/learn/courses/30/lessons/120876
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성하라.

function solution(lines) {
        let answer = 0;
        let arr = []; // 선분 저장할 배열 
        
        // 각 선들을 순회
        for (let line of lines) {
            for (let i = line[0] + 1; i <= line[1]; i++) {
                arr.push(`${i - 1} ${i}`);
            }
        }
        
        let intersection = Array.from(new Set(arr)); // 중복 제거
        
        for (let l of intersection) {
            let count = 0;
            for (let i of arr) {
                if (i === l) {
                    count++;
                }
            }
            if (count > 1) {
                answer += 1;
            }
        }
        
        return answer;
    }