function solution(N, road, K) {
    var answer = 0;
    let roadmap = Array.from({length:N+1},()=> Array.from({ length: N + 1 }, () => Infinity))
    for(let i=0 ; i<N+1; i++){
        roadmap[i][i] = 0
    }
    road.forEach(arr => {
        const [start,end,time] = arr
        roadmap[start][end] = Math.min(roadmap[end][start],time)
        roadmap[end][start] = Math.min(roadmap[start][end],time)
    })
    
    
    for (let k = 1; k <= N; k++) {
      for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
          if (roadmap[i][k] + roadmap[k][j] < roadmap[i][j]) {
            roadmap[i][j] = roadmap[i][k] + roadmap[k][j];
          }
        }
      }
    }
    for(let i=1 ; i<=N; i++){
        if(roadmap[1][i] <= K) answer++;
    }
    return answer;
}