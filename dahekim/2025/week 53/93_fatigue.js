// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
    let answer = 0;    

    function generateOrders(arr, depth = 0) {
        if (depth === arr.length) {
            exe(arr);
            return;
        }
        
        // 가능한 조합 모두 생성
        for (let i = depth; i < arr.length; i++) {
            [arr[depth], arr[i]] = [arr[i], arr[depth]];
            generateOrders(arr, depth + 1);
            [arr[depth], arr[i]] = [arr[i], arr[depth]];
        }
    }

    function exe(order) {
        let fatigue = k;
        let count = 0;
        for (const [min, consume] of order) {
            if (fatigue >= min) {
                fatigue -= consume;
                count++;
            } else {
                break;
            }
        }
        answer = Math.max(answer, count);
    }

    generateOrders(dungeons);
    return answer;
}
