function solution(msg) {
    var answer = [];
    let dic = [];
    for(let i=0; i<26; i++){
        dic.push(String.fromCharCode(i + 65))
    }
    for(let j=0; j<msg.length; j++){
        for(let k=msg.length; k>j; k--){
            let s = msg.slice(j,k)
            if(dic.indexOf(s) != -1){
                answer.push(dic.indexOf(s)+1);
                dic.push(msg.slice(j,k+1))
                j += k-j-1
            }
        }
    }
    return answer;
}