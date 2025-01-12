function solution(gems) {
    var answer = [1,gems.length];
    let gemSize = new Set(gems).size
    let gemMap = new Map()
    for(let i=0; i<gems.length; i++){
        gemMap.delete(gems[i])
        gemMap.set(gems[i],i)
        if(gemMap.size === gemSize){
            let newData = [gemMap.values().next().value+1,i+1]
            if(newData[1] - newData[0] < answer[1]-answer[0]){
                answer = newData
            }
        }
    }
    return answer;
}