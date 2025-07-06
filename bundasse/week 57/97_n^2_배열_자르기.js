function solution(n, left, right) {
    var answer = [];
    for(let k =left; k<right+1; k++){
        let i= Math.floor(k/n)
        let j = (k%n)
        answer.push(Math.max(i,j)+1)
    }
    return answer;
}