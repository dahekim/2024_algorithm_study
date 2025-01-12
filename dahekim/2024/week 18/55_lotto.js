// https://school.programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
    const unknown = lottos.filter(num => num === 0).length;
    const match = lottos.filter(num => win_nums.includes(num)).length;
    
    const max = getRank(match + unknown);
    const min = getRank(match); 
    
    return [max, min];
}

function getRank(match) {
    switch(match) {
        case 6: return 1;
        case 5: return 2;
        case 4: return 3;
        case 3: return 4;
        case 2: return 5;
        default: return 6;
    }
}