function solution(numlist, n) {
    var answer = [];
    let arr = []
    for(let i=0; i<numlist.length; i++){
        let sub = 0
        numlist[i] - n > 0? sub = (numlist[i] - n) : sub = n - numlist[i]
        arr.push({num : numlist[i], cha : sub})
    }
    arr.sort((a,b) => a.cha - b.cha || b.num - a.num)
    arr.forEach(e => answer.push(e.num))
    return answer;
}