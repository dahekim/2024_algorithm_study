function solution(queue1, queue2) {
    var answer = 0;
    let sum = [...queue1,...queue2].reduce((acc,curr)=> acc+curr) /2
    let q1Sum = queue1.reduce((acc,curr)=> acc+curr)
    let idx1 = 0;
    let idx2 = 0;
    let len = queue1.length * 2
    while(q1Sum !== sum){
        if(q1Sum > sum){
            q1Sum -= queue1[idx1]
            idx1++;
        }else if(q1Sum < sum){
            q1Sum += queue2[idx2]
            idx2++;
        }
        answer++;
        if(idx1 > len||idx2 > len){
            return -1
        }
    }
    return answer;
}