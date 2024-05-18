function solution(num, total) {
    var answer = [];
    let a = ((2*total/num)+1-num)/2
    for(let i = 0; i<num;i++){
        answer.push(a+i)
    }
    return answer;
}