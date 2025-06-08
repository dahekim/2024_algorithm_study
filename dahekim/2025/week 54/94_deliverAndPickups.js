// https://school.programmers.co.kr/learn/courses/30/lessons/150369

function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let dRemain = 0;  // 배달 남은 양
    let pRemain = 0;  // 수거 남은 양

    // 먼 곳 부터 ㄱㄱ
    for (let i = n - 1; i >= 0; i--) {
        dRemain += deliveries[i];
        pRemain += pickups[i];

        while (dRemain > 0 || pRemain > 0) {
            dRemain -= cap;
            pRemain -= cap;
            answer += (i + 1) * 2; // 왕복 거리
        }
    }

    return answer;
}
