function solution(common) {
    var answer = 0;
    let s = 0;
    let cha = true
    for(let i=1; i<common.length-1; i++){
        let a = common[i] - common[i-1]
        let b = common[i+1] - common[i]
        if(a === b){
            s = a
        }else{
            s = common[i+1]/common[i]
            cha = false
            break;
        }
    }
    if(cha){
        answer = common[common.length-1]+s
    }else{
        answer = common[common.length-1]*s
    }
    return answer;
}