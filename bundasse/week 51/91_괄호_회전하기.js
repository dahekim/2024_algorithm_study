function solution(s) {
    var answer = 0;
    let none
    const arr = ["[]","{}","()"]
    for(let j=0; j<s.length; j++){
        let flg = true
        let cnt = 0;
        let str = s.slice(j)+s.slice(0,j)
        while(str.length >0){
            if(cnt>(s.length*3)){
                flg=false
                break
            }
            for(let j=0; j<arr.length; j++){
                str = str.replace(arr[j],"")
            }
            cnt++
        }
        answer += flg ? 1 : 0
        
    }
    return answer;
}