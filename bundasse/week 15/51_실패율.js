function solution(N, stages) {
    var answer = [];
    let arr = [];
    let fail = []
    for(let i=1; i<=(N+1); i++){
        let clear = 0;
        let stop = 0;
        stages.forEach(e =>{
            if(e > i){
                clear++;
            }else if(e == i){
                stop++;
            }
        })
        arr[i-1] = {stage : i,clear: clear, stop: stop }
    }
    arr.forEach((e,i) => {
        let rate;
        if(i == 0){
            rate = e.stop / stages.length
        }else if(arr[i-1].clear == 0){
            rate = 0
        }else{
            rate = e.stop / arr[i-1].clear
        }
        fail[i] ={fail: rate, stage:i+1}
    })
//     배열 마지막은 최종 스테이지에 도착한 사람 수이므로 실패율에서 제외
    fail.pop()
//     정렬
    fail.sort((a,b) => b.fail - a.fail || a.stage - b.stage)
//      스테이지만 담기
    fail.forEach(e => answer.push(e.stage))
    return answer;
}

// 지금보니 공연히 멀리 돌아가는 것 같은 느낌이 있다...