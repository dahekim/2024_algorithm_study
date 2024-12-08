// https://school.programmers.co.kr/learn/courses/30/lessons/72412

function solution(info, query) {
    const cases = {};
    
    // info의 각 요소들 마다 가능한 모든 조합+점수 생성
    const getCase = (arr, score, index = 0, result = []) => {
        const key = result.join(" ");        
        if (!cases[key]) cases[key] = [];
        cases[key].push(score);
        for (let i = index; i < arr.length; i++) {
            getCase(arr, score, i + 1, [...result, arr[i]]);
        }
    };
    
    for (const i of info) {
        const [lang, role, exp, food, scoreStr] = i.split(" ");
        const score = Number(scoreStr);
        getCase([lang, role, exp, food], score);
    }

    // 점수 오름차순 정렬
    for (const key in cases) {
        cases[key].sort((a, b) => a - b);
    }

    // query에 주어진 조건들 파싱
    const parseQ = (e) => {
        return e
            .replace(/ and /g, " ")
            .split(" ");
    };

    let answer = [];
    for (const c of query) {
        const [lang, role, exp, food, scoreStr] = parseQ(c);
        const score = Number(scoreStr);
        const key = [lang, role, exp, food].filter((v) => v !== "-").join(" ");

        if (!cases[key]) {
            answer.push(0);
            continue;
        }

        // X 이상인 점수 찾기
        const scores = cases[key];
        let left = 0;
        let right = scores.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (scores[mid] >= score) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        answer.push(scores.length - left);
    }

    return answer;
}
