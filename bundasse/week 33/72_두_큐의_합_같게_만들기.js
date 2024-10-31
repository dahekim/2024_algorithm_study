function solution(queue1, queue2) {
    var answer = 0;
    const sum = [...queue1,...queue2].reduce((acc,curr)=> acc+curr) /2
    let q1Sum = queue1.reduce((acc,curr)=> acc+curr)
    let [idx1,idx2] = [0,0];
    let arr1 = [...queue1]
    let arr2 = [...queue2]
    const len = queue1.length * 2
    while(q1Sum !== sum){
        if(idx1 > len||idx2 > len){
           return -1
       }
        if(q1Sum > sum){
            q1Sum -= arr1[idx1]
            arr2.push(arr1[idx1])
            arr1.slice(0,1);
            idx1++;
        }else if(q1Sum < sum){
            q1Sum += arr2[idx2]
            arr1.push(arr2[idx2])
            arr2.slice(0,1);
            idx2++;
        }
        answer++;
    }
    return answer;
}