// https://school.programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
    let max = 0; // 최대 점수차
    let answer = [-1];

    function dfs(idx, arrows, ryan) {
        if (idx === 11) {  
            if (arrows > 0) ryan[10] += arrows; // 남은 화살 0점에 몰기

            // 점수 차이 계산
            let score = calcScore(ryan, info);
            
            if (score > max) { // 계산한 점수 차이가 최대 점수차보다 크면 그 배치를 저장
                max = score;
                answer = [...ryan];
            } else if (score === max && score > 0) { // 동점이면 낮은 점수를 더 맞힌 경우를 선택
                for (let i = 10; i >= 0; i--) {
                    if (ryan[i] !== answer[i]) {
                        if (ryan[i] > answer[i]) answer = [...ryan];
                        break;
                    }
                }
            }
            if (arrows > 0) ryan[10] -= arrows; // 0점에 몰아놨던 화살 돌려놓기
            return;
        }

        // 화살 더 쏠 수 있으면 
        if (info[idx] < arrows) { 
            ryan[idx] = info[idx] + 1;
            dfs(idx + 1, arrows - ryan[idx], ryan);
            ryan[idx] = 0;  
        }

        // 아니면 포기하고 다음 점수로 넘어감
        dfs(idx + 1, arrows, ryan);
    }

    // 점수 차이 계산
    function calcScore(ryan, apeach) {
        let ryanScore = 0;
        let apeachScore = 0;
        for (let i = 0; i < 11; i++) {
            if (ryan[i] === 0 && apeach[i] === 0) continue;
            if (ryan[i] > apeach[i]) ryanScore += (10 - i);
            else apeachScore += (10 - i);
        }
        return ryanScore - apeachScore;
    }

    dfs(0, n, Array(11).fill(0));
    return answer;
}
