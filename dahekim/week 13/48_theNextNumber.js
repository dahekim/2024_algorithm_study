// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
    const lastNum = common[common.length-1];
    let std = 0; // 기준이 되는 값
    
    // 등차수열
    if((common[1] - common[0]) === (common[2] - common[1])){
        std = common[1] - common[0];
        return lastNum + std;
    }
    // 등비수열
    else {
        std = Math.floor(common[1] / common[0]);
        return lastNum * std;
    }
    
}  