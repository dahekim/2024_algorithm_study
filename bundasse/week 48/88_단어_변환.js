function solution(begin, target, words) {
    let visited = {}
    let queue = [begin]
    visited[begin] = 0
    
//     변환가능여부 체크
    const check = (word1, word2) => {
        let diff=0
        for(let j=0; j<word1.length; j++){
            if(word1[j] !== word2[j]){diff++}
        }
        return diff === 1
    }
    
//     큐가 남아있는한 돌려돌려
    while(queue.length){
        let word = queue.shift()
        if(word == target) break;
        words.forEach(e => {
            if(check(word,e) && !visited[e]){
                visited[e] = ++visited[word]
                queue.push(e)
            }       
        })
    }
    return visited[target] ? visited[target] : 0
}