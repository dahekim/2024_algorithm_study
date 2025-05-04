function solution(scoville, K) {
    var answer = 0;
    scoville.sort((a,b) => a-b)
    while(scoville[0] < K){
        if(scoville.length == 0){
            return -1
        }
        scoville.sort((a,b) => a-b)
        let num1 = scoville.shift()
        let num2 = scoville.shift()
        let num =num1 + 2*num2
        scoville.push(num)
        answer += 1
    }
    return answer;
}