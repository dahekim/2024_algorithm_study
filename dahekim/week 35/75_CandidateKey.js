// https://school.programmers.co.kr/learn/courses/30/lessons/42890

function getCase(array, num) {
    const result = [];
    if (num === 1) return array.map((value) => [value]); 
    
    array.forEach((e, i, origin) => {
        const rest = origin.slice(i + 1); // 남은 요소들
        const combinations = getCase(rest, num - 1);
        const attached = combinations.map((combo) => [e, ...combo]);
        result.push(...attached);
    });
    return result;
}

function solution(relation) {
    const answer = [];
    const cols = relation[0].length; // 열
    const rows = relation.length; // 행
    const colIdx = []; // 열 인덱스 값 담는 배열
    
    for (let i = 0; i < cols; i++) {
        colIdx.push(i);
    }
    
    for (let i = 1; i <= cols; i++) {
        const cases = getCase(colIdx, i);

        for (const cmb of cases) {
            const newCol = new Set();
            for (const row of relation) {
                let key = '';
                for (const c of cmb) {
                    key += row[c] + ',';
                }
                newCol.add(key);
            }

            // 유일성 검증
            if (newCol.size === rows) { 
                let isMin = true;
                for (const e of answer) {
                    if (e.every(k => cmb.includes(k))) {
                        isMin = false;
                        break;
                    }
                }
                
                // 최소성 만족하면 추가
                if (isMin) {
                    answer.push(cmb);
                }
            }
        }
    }

    return answer.length;
}
