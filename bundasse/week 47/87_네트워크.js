

function solution(n, computers) {
    var answer = 0;
    let visited = {}
    
    const dfs = (i) =>{
    visited[i] = true;
    for(let j=0; j<computers.length; j++){
            if(computers[i][j] === 1 && !visited[j]){
                dfs(j)
            }
        }
    }
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i)
            answer++
        }
    }
    return answer;
}