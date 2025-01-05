function solution(s) {
    var answer = s.length;
    for(let i=1; i<=Math.ceil(s.length/2); i++){
        let splitS = '';
        let cnt = 1
        for(let idx = 0; idx<s.length; idx+=i){
            let pattern = s.slice(idx, idx+i)
            let compare = s.slice(idx+i, idx+2*i)
            if(pattern === compare){
                cnt++
                continue
            }else{
                splitS += cnt == 1? pattern: cnt + pattern
                cnt = 1
            }
        }
        answer = Math.min(answer,splitS.length)

    }
    return answer;
}