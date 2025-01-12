// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
    let distance = [];
    
    // 거리 구하기
    for(let num of numlist){
        let d = Math.abs(num - n);
        distance.push({ num, d });
    }

    // 같은 거리일 경우 처리
    distance.sort((a, b) => {
        if (a.d === b.d) {
            return b.num - a.num;  // 같은 거리일 경우 큰 수가 앞에 오도록
        } else {
            return a.d - b.d; // 오름차순 정렬
        }
    });
    
    // 정렬된 distance에서 num만 뽑아서 리턴
    return distance.map(x => x.num);
}
