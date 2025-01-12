// https://school.programmers.co.kr/learn/courses/30/lessons/120876
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성하라.

function solution(lines) {
        let answer = 0;
        let arr = []; // 모든 선분들을 저장할 배열 (lines에 포함된 모든 선분의 길이를 1 길이 단위로, '시작점 끝점'의 형태로 넣는다. ) 
        
        // 각 선들을 순회
        for (let line of lines) {
            for (let i = line[0] + 1; i <= line[1]; i++) {
                arr.push(`${i - 1} ${i}`);
            }
        }

        // 중복 제거, 실제로 겹치는 선분이 있을 경우 그 부분만 제거되어 intersection 배열에 담긴다. 
        let intersection = Array.from(new Set(arr)); 
        
        for (let l of intersection) {
            // arr과 intersection을 비교하여, arr의 요소와 intersection의 요소가 일치하는 경우 (=중복 요소가 1개 이상인 경우) 길이를 1씩 더해준다.
            if (arr.filter(line => line === l).length > 1) {
                answer++;
            }
        }
        
        return answer;
    }