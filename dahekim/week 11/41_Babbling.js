// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
    const list = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    
    for (let b of babbling) {
        for(let word of list){
            if(b.includes(word)){
                b = b.replace(word, "*");
            }
        }
        console.log(b);
        if (b.replace(/\*/g, '') === '') {            
            answer++;
        }
    }
    
    return answer;
}