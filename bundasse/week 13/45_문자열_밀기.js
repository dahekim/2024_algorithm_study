function solution(A, B) {
    var answer = 0;
    let s = '';
    let l = A.length
    for(let i=0; i<l; i++){
        s = A.substring(l-i,l)+ A.substring(0,l-i)
        if(s === B){
            return i;
        }else{
            continue;
        }
    }
    answer = -1
    return answer;
}