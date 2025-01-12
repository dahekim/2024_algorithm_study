// https://school.programmers.co.kr/learn/courses/30/lessons/120875

// function solution(dots) {
//     let answer = 0;
//     let leans = [];    
//     for(let i = 0; i < 4; i++){
//         for(let j = i+1; j < 4; j++){
//             let x = Math.abs(dots[i][0]-dots[j][0]);
//             let y = Math.abs(dots[i][1]-dots[j][1]);
//             leans.push(x/y);
//         }
//     }
//     const result = new Set(leans);
//     return result.size !== leans.length ? 1 : 0 ;
// }

function gradient(a, b) { // 기울기 계산
    return (a[1] - b[1]) / (a[0] - b[0]);
}

function solution(dots) {
    const [p1, p2, p3, p4] = dots.slice(0, 4);

    // 두 선분의 기울기를 계산하여 평행 여부를 확인
    if (gradient(p3, p1) === gradient(p4, p2) || gradient(p4, p3) === gradient(p2, p1)) {
        return 1;
    } else {
        return 0;
    }
}
