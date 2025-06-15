function solution(players, m, k) {
    var answer = 0;
    let servers = Array.from({length:24},() => 0)
    for(let i=0; i<24; i++){
        if(Math.floor(players[i] / m) > servers[i]){
            let need = Math.floor(players[i] / m) - servers[i]
            for(let j=0; j<k; j++){
                if(i+j<=23){
                    servers[i+j] = servers[i+j]+need
                }
            }
            answer += need
        }
    }
    return answer;
}