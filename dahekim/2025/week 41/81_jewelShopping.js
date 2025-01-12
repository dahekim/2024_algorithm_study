// https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
    const gemTypes = new Set(gems); 
    const gemCnt = gemTypes.size; 
    const gemMap = new Map(); 
    let answer = [1, gems.length]; 
    
    let start = 0; 
    for (let end = 0; end < gems.length; end++) {
        const gem = gems[end];
        gemMap.set(gem, (gemMap.get(gem) || 0) + 1);  

        // 모든 종류의 보석이 포함되었으면
        while (gemMap.size === gemCnt) {
            // 현재 answer에 저장된 값보다 구간이 짧으면 갱신
            if (end - start < answer[1] - answer[0]) {
                answer = [start + 1, end + 1]; 
            }

            const startGem = gems[start];
            gemMap.set(startGem, gemMap.get(startGem) - 1); // 시작점에 있는 보석 제거
            
            // 보석 갯수가 0이면 삭제
            if (gemMap.get(startGem) === 0) {
                gemMap.delete(startGem);
            }
            start++;
        }
    }
    
    return answer;
}
